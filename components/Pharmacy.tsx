import React, { useReducer, useState, } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, Text, Button, View } from "react-native";

export const Pharmacy = () => {
  const [Product, setProduct] = useState('');
  const [precio, setPrecio] = useState('');

  const [Data, setData] = useState(['']);
  const [dataPrice, setDataPrice] = useState([''])

  let list: string[] = [''];

  const handleAdd = () => {
    setData([...Data, Product])
    setDataPrice([...dataPrice, precio])
  }


  return (
    <View>
      <View style={styles.constainer}>
        <TextInput
          style={styles.inputs}
          label="Nombre del medicamento"
          onChangeText={setProduct}
        />
        <TextInput
          style={styles.inputs}
          label="Precio del medicamento"
          textAlign="center"
          onChangeText={setPrecio}
        />
        <View style={styles.btn}>
        <Button title="Agregar" onPress={handleAdd} />
        </View>
      </View>
      <View style={styles.titles}>
      <Text style={styles.title}>Productos Agergados</Text>
      <Text style={styles.title1}>precio</Text>
      </View>
      {Data.map((Datas, i) => (
        <View style={styles.constainer1}>
          <Text style={styles.title}>{Data[i]}</Text>
          <Text style={styles.title1}>{dataPrice[i]}</Text>
      </View>
      ))}
    </View>
  );
};

export default Pharmacy;
const styles = StyleSheet.create({
  inputs: {
    margin:8,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    padding: 10,
    fontSize: 22,
    borderWidth:1,
    borderColor:'#7b1fa2',
  },
  constainer: {
    width: "95%",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  constainer1: {
    borderColor:'#03a9f4',
    fontSize:20,
    margin:10,
    padding: 25,
    width: "95%",
    borderRadius: 5,
    borderWidth:1,
    flexDirection:"row",
  },
  text: {
    fontSize: 20,
  },
  btn:{
    margin:20,
  },
  titles:{
    marginRight :80,
    flexDirection:'row',
  },
  title:{
    fontSize:20,
    marginLeft:10,
  },
  title1:{
    fontSize:20,
    marginLeft:100,
  },
});
