import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const InventarioList =() => {
    
    const [lista, setLista] = useState('')
    const [Data, setData] = useState([''])

    let list: string[] = [
        "Buenas",
        "tardes"
    ];
    const getDatos = () => {
        setData(list);
    }
    const crearProducto = () => {
        Data.push(lista)
    }
    const eliminarData = (id: number) => {
        alert(setData)
        Data.splice(id, 1)
    }
    useEffect(() => {
        getDatos()
    }, [])
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={styles.constainer}>
                <TextInput
                    style={styles.inputs}
                    placeholder="Add prod"
                    onChangeText={setLista}
                />
                <Button
                    title="Agregar"
                    onPress={() => crearProducto()}
                />

            </View>

            {
                Data.map(tweet => (
                    <View style={styles.constainer}>
                        <Text>{tweet} </Text>
                        <View>
                            <Button
                                title="Eliminar"
                                onPress={() => eliminarData(tweet.id)}
                            />

                        </View>

                    </View>
                ))
            }
 

        </View>
    )
    
}


export default InventarioList
const styles = StyleSheet.create({
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 15,
        fontSize: 22,
        color: '#034C50',
    },
    constainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#C4C4C4',
        marginBottom: 4,
        paddingVertical: 8,
        paddingHorizontal: 5,
        borderRadius: 5,
        marginTop: 20
    },
    text: {
        fontSize: 20
    }
}) 