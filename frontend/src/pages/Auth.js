import React from 'react'
import { View, KeyboardAvoidView, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Auth() {
    return (
        <KeyboardAvoidView>
            <View>
                {/* image */}
            </View>
            <View>
                <TextInput placeholder="Email" autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TextInput placeholder="Senha" autoCorrect={false}
                    onChangeText={() => { }}
                />
                <TouchableOpacity>
                    <Text>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Criar conta gratuíta</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidView>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})