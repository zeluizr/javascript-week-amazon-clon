import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Text, View, SafeAreaView, TextInput, Image } from "react-native";
import tailwind from "tailwind-rn";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("http://api.inmmerce.com");
      setProducts(response.data);
    })();
  }, []);

  return (
    <>
      <SafeAreaView style={tailwind("h-28 bg-green-100 items-center")}>
        <View
          style={tailwind(
            "w-11/12 h-10 border rounded mt-2 border-gray-500 bg-white flex flex-row justify-center items-center"
          )}
        >
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/54/54481.png",
            }}
            style={tailwind("w-4 h-4 ml-3")}
          />
          <TextInput
            style={tailwind("flex-1 mx-2")}
            placeholder="Buscar en Amazon.com"
            placeholderTextColor="#6B7280"
          />
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/633/633595.png",
            }}
            style={tailwind("w-4 h-4 mr-3")}
          />
        </View>
      </SafeAreaView>
      <View
        style={tailwind(
          "w-full h-10 flex flex-row items-center bg-green-50 pl-4"
        )}
      >
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/1216/1216895.png",
          }}
          style={tailwind("w-4 h-4 mr-3")}
        />
        <Text style={tailwind("text-gray-800")}>
          Enviar a José - RM 9999999
        </Text>
      </View>
      <View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80",
          }}
          style={tailwind("w-full h-60 mr-3")}
        />
      </View>
      <View style={tailwind("w-full h-full flex flex-row")}>
        {products.map((product) => {
          return (
            <View style={tailwind("w-20 px-2")}>
              <Image
                source={{
                  uri: "https://tiendatest3.vteximg.com.br/arquivos/ids/158081/monami_supergel.jpg?v=637458443806900000",
                }}
                style={tailwind("w-full h-32")}
              />
              <Text style={tailwind("text-black")}>{product.productName}</Text>
              <Text style={tailwind("text-black")}>$ 10,00</Text>
            </View>
          );
        })}
      </View>
    </>
  );
}
