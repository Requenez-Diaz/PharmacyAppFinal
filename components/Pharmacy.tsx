import React, { useReducer, useState } from "react";
import { TextInput } from "react-native-paper";
import { TouchableOpacity, StyleSheet, Text, Button, View, MaskedViewBase } from "react-native";

export const Pharmacy = () => {
  const [medicina, setMedicina] = useState<string>("");
  const [cantidad, setCantidad] = useState<string>("");
  const [precio, setPrecio] = useState<string>("");

  const [producto, setProducto] = useState<string[]>([]);
  
  const [Inventario, setInventario] = useState<string[]>([]);

  const AddProducto = () => {
    const products: string[] = [medicina];
    const addMedicina: string[] = [...producto, ...products];
    setProducto(addMedicina);
  };
  const btnAcction = () => {
    AddProducto();
  };
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Registre medicamentos</Text>

        <TextInput
          style={styles.input}
          label="Nombre Medicina"
          defaultValue={medicina}
          onChangeText={setMedicina}
        />

        <TextInput
          style={styles.input}
          label="Cantida"
          defaultValue={cantidad}
          onChangeText={setCantidad}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          label="Precio"
          defaultValue={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.btn}>
        <View style={styles.btn}>
          <TouchableOpacity style={styles.button} onPress={() => btnAcction}>
            <Text style={styles.Text}> Agregar </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={() => btnAcction}>
            <Text style={styles.Text}> borrar </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productos}>
        <Text style={styles.Text}>Productos agregados</Text>
        <View>
          <Text style={styles.producto}>Producto</Text>
        </View>
        {producto.map((product, index) => (
          <View>
            <Text>{index + 1}</Text>
            <Text key={index} style={styles.Text}>
              {product}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};
export default Pharmacy;
const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 30,
  },
  container: {
    margin: 20,
  },
  productos: {
    paddingHorizontal: 7,
    marginTop: 30,
    justifyContent: "space-between",
    paddingVertical: 27,
    borderRadius: 6,
    borderColor: "#0275d8",
  },
  producto: {
    textAlign: "left",
    fontSize: 20,
    color: "blue",
    paddingLeft: 30,
  },
  input: {
    padding: 0,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: "purple",
    marginBottom: 10,
  },
  button: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 50,
    justifyContent: "center",
    borderColor: "#0275d8",
    backgroundColor: "#0275d8",
  },
  button1: {
    borderWidth: 2,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginLeft: 50,
    justifyContent: "center",
    borderColor: "red",
    backgroundColor: "red",
  },

  Text: {
    color: "blue",
    fontSize: 23,
    textAlign: "center",
    fontWeight: "bold",
  },
  btn: {
    padding: 10,
    flexDirection: "row",
  },
});
