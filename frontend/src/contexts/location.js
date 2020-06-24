import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-community/async-storage";


import { store } from '../services/location'

const LocationContextData = {
    latitude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0,
    longitudeDelta: 0.0,
    storeLocation: () => { }
}

const LocationContext = createContext(LocationContextData)

export const LocationProvider = ({ children }) => {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [latitudeDelta] = useState(42.0000)
    const [longitudeDelta] = useState(42.0000)

    useEffect(() => {
        async function loadStorageData() {
            const storagedLatitude = await AsyncStorage.getItem('@SMSELocation:latitude')
            const storagedLongitude = await AsyncStorage.getItem('@SMSELocation:longitude')

            if (storagedLatitude && storagedLongitude) {
                setLatitude(storagedLatitude)
                setLongitude(storagedLongitude)
            }
        }
        loadStorageData()
    }, [])
    async function storeLocation(latitude, longitude) {
        if (latitude && longitude) {
            await AsyncStorage.setItem("@SMSELocation:latitude", latitude);
            await AsyncStorage.setItem("@SMSELocation:longitude", longitude);
        }
        await store(latitude, longitude, '5ee8c2aa18626b0fb07061f5')

    }

    return (
        <LocationContext.Provider value={{ latitude, longitude, latitudeDelta, longitudeDelta, storeLocation }}>
            {children}
        </LocationContext.Provider>
    )

}

export function useLocation() {
    const context = useContext(LocationContext)
    return context
}
