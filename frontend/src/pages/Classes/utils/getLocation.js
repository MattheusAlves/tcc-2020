import Geolocation from '@react-native-community/geolocation';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';

const alertMessageDisableLocation = 'Por favor, ative o GPS em configurações'
const alertMessageAllowLocation = 'Por favor, permita o acesso à sua localização'
const alertMessageLocationError = 'Por favor, permita acesso à sua localização e ative o GPS em configurações'
const alertMessageNetworkError = 'Sem conexão'

async function getPermissions() {
    return new Promise(async (resolve, reject) => {
        try {
            Geolocation.setRNConfiguration({ authorizationLevel: "whenInUse" })
            check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                .then((result) => {
                    switch (result) {
                        case RESULTS.UNAVAILABLE:
                            console.log('This feature is not available (on this device / in this context)');
                            reject(alertMessageLocationError)
                            break;
                        case RESULTS.DENIED:
                            console.log('The permission has not been requested / is denied but requestable');
                            request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION)
                                .then((result) => {
                                    if (RESULTS.GRANTED) {
                                        enableGPS().then(response => {
                                            console.log(response)
                                            getLocation()
                                                .then((location) => resolve(location))
                                                .catch((err) => reject(err ? err : alertMessageDisableLocation))
                                        })
                                    } else {
                                        reject(alertMessageAllowLocation)
                                    }
                                })
                            break;
                        case RESULTS.GRANTED:
                            console.log('The permission is granted')
                            enableGPS().then(response => {
                                console.log(response)
                                getLocation()
                                    .then((location) => resolve(location))
                                    .catch((err) => reject(err ? err : alertMessageDisableLocation))
                            })
                            break;
                        case RESULTS.BLOCKED:
                            console.log('The permission is denied and not requestable anymore')
                            reject(alertMessageLocationError)
                            break;
                    }
                })

        } catch (exception) {
            console.log(exception)
            reject(alertMessageLocationError)
        }
    })
}

const enableGPS = () => {
    return new Promise(async (resolve, reject) => {
        console.log("exec enable GTPS")
        RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
            interval: 10000,
            fastInterval: 5000,
        })
            .then((data) => {
                resolve(data)
                // The user has accepted to enable the location services
                // data can be :
                //  - "already-enabled" if the location services has been already enabled
                //  - "enabled" if user has clicked on OK button in the popup
            })
            .catch((err) => {
                reject(err)
                // The user has not accepted to enable the location services or something went wrong during the process
                // "err" : { "code" : "ERR00|ERR01|ERR02|ERR03", "message" : "message"}
                // codes :
                //  - ERR00 : The user has clicked on Cancel button in the popup
                //  - ERR01 : If the Settings change are unavailable
                //  - ERR02 : If the popup has failed to open
                //  - ERR03 : Internal error
            });
    })
}

const getLocation = () => {
    return new Promise(async (resolve, reject) => {
        // Geolocation.getCurrentPosition(geo_success, [geo_error], [geo_options]);
        Geolocation.getCurrentPosition(
            position => {
                console.log(JSON.stringify(position))
                resolve({ latitude: position.coords.latitude, longitude: position.coords.longitude })
            },
            error => error.code === 2 ? reject(alertMessageDisableLocation)
                :
                reject(error),
            //maximumage is a positive value indicating the maximum age
            // in milliseconds of a possible cached position that is acceptable to return
            { enableHighAccuracy: false, timeout: 8000, maximumAge: 220000 }
        );
    })
}

export default getPermissions;
