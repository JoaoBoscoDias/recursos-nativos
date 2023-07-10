import { Button, StyleSheet, Text, View } from "react-native";
import * as Device from 'expo-device';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10,
      },
    
      content: {
        backgroundColor: "#969",
        padding: 20,
        // alignSelf: "center",

      },
    
      contentTextStyle: {
        padding: 5,
        textAlignVertical: "center",
        minHeight: 50,
        backgroundColor: "#969",
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
      },
})

export default function DeviceInfo() {
  const [headerColor, setHeaderColor] = useState("#8a2be2");

  // Função para mudar a cor do header
  const changeHeaderColor = (color) => {
    setHeaderColor(color);
  };
    return (
            <View style={styles.container}>
                <Header title="Informaçoes do App" backgroundColor={headerColor}/>
                <Text style={styles.content}>Informações do dispositivo</Text>
                <Text style={styles.content}>O seu dispositivo é:{Device.modelName}</Text>
                <Text style={styles.content}>O seu dispositivo é:{Device.modelId}</Text>
                <Text style={styles.content}>O seu dispositivo é:{Device.osName}</Text>
                <Text style={styles.content}>O seu dispositivo é:{Device.osVersion}</Text>
                <Text style={styles.content}>O seu dispositivo é:{Device.designName}</Text>
                <Text style={styles.content}>O seu dispositivo é:{Device.deviceName}</Text>
                <Text style={styles.content}>O seu dispositivo é:{Device.deviceYearClass}</Text>
                <Button title="Saida" />
                <Footer />
            </View>
    )
}