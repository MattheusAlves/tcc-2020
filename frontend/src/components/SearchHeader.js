import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import SearchHeader from 'react-native-search-header'
import Icon from 'react-native-vector-icons/FontAwesome'

import api from '../services/api'
let timeout

const Search = (props) => {
    const searchHeaderRef = React.useRef(null);
    const [data, setData] = useState([])
    const [query, setQuery] = useState('')

    useEffect( () => {
        async function getDisciplines() {
            if (query.length >= 3) {
                api.get('/search/disciplines', {
                    params: {
                        value: query
                    }
                }).then((response) => {
                    if (response.data.length >= 1) {
                        response.data.map((discipline) => {
                            console.log("setou value")
                            setData(oldValue => [...oldValue, { disciplineName: discipline.disciplineName}, {id: discipline._id }])
                        })
                    }
                })
            }
        }
       
        //  timeout = setTimeout(() => {
        //     console.log("chamou get disciplines")
        //     setData([])
            getDisciplines()

        // }, 200)

        // return () => clearTimeout(timeout)
    }, [query])
    
   
    return (
        <>
            <View style={styles.status} />
            <View style={styles.header}>
                <TouchableOpacity onPress={() => {
                    searchHeaderRef.current.show()
                }}
                    style={styles.button}>
                    <Text style={styles.searchLabel}>Pesquisar</Text><Icon name='search' size={20} color='rgba(255,255,255,3)' />
                </TouchableOpacity>

            </View>
            <SearchHeader
                ref={searchHeaderRef}
                placeholder='Search...'
                placeholderColor='gray'
                // pinnedSuggestions={[`react-native-search-header`, `react-native`, `javascript`]}
                onClear={() => {
                    console.log("Clearing input!")
                }}
                onGetAutocompletions={function () {
                    console.log("data------ ", data)
                    searchHeaderRef.current.clearSuggestion()
                    const value = data.map(item => item.disciplineName)
                    return value 
                    

                }}
                onEnteringSearch={async (e) => {
                    if (e) {
                        clearTimeout(timeout)
                        console.log("event:", e.nativeEvent.text)
                        setData([])
                        setQuery(e.nativeEvent.text)
                        
                    }
                }}
             
                
            />
        </>
    )
}

export default Search;
const styles = StyleSheet.create({
    status: {
        zIndex: 10,
        elevation: 2,
        width: (Dimensions.get('window').width),
        height: 8,
        backgroundColor: '#3B5998'
    },
    header: {

        justifyContent: 'center',
        alignItems: 'flex-end',
        width: (Dimensions.get('window').width),
        height: 45,
        marginBottom: 6,
        backgroundColor: 'rgba(59,89,152,1)'
    },

    label: {
        flexGrow: 1,
        fontSize: 20,
        alignSelf: 'center',
        fontWeight: '600',
        textAlign: 'left',
        marginVertical: 8,
        paddingVertical: 3,
        color: '#f5fcff',
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderRadius: 2,
        borderRadius: 10


    },
    searchLabel: {
        fontWeight: '700',
        fontSize: 18,
        color: 'rgba(255,255,255,1)',
        padding: 5,
    }
})