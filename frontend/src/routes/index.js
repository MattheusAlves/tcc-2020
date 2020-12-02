import React from 'react'
import {View,ActivityIndicator} from 'react-native'

import {useAuth} from '../contexts/auth'
import AuthRoutes from './auth.routes'
import AppRoutes from './app.routes'

import {TopicProvider} from '../contexts/topic'

 const Routes = () => {
    const {signed,loading} = useAuth()

    if(loading){
        return (
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <ActivityIndicator size='large' color='#666'/>
            </View>
        )
      }

    return signed ? <TopicProvider><AppRoutes/></TopicProvider> : <AuthRoutes/>
    
}

export default Routes