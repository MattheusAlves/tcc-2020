import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";

const LocationContextData = {
    storedLocation: {
        latitude: 0.0,
        longitude: 0.0
    },
    storeLocation: () => { }
}

const LocationContext = createContext(LocationContextData)

export const LocationProvider = ({ children }) => {
    const [storedLocation, setStoredLocation] = useState({ latitude: null, longitude: null })

    useEffect(() => {
        (async () => {
            const storagedLatitude = await AsyncStorage.getItem('@SMSELocation:latitude')
            const storagedLongitude = await AsyncStorage.getItem('@SMSELocation:longitude')

            if (storagedLatitude && storagedLongitude) {
                setStoredLocation({ latitude: storagedLatitude, longitude: storagedLongitude })
            }
        })()
    }, [])

    async function storeLocation(location) {
        console.log("Location in the context", JSON.stringify(location))
        if (location.latitude && location.longitude) {
            await AsyncStorage.setItem("@SMSELocation:latitude", JSON.stringify(location.latitude));
            await AsyncStorage.setItem("@SMSELocation:longitude", JSON.stringify(location.longitude));
        }
    }

    return (
        <LocationContext.Provider value={{ storedLocation, storeLocation }}>
            {children}
        </LocationContext.Provider>
    )

}

export function useLocation() {
    const context = useContext(LocationContext)
    return context
}
