import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";

import * as ScreenOrientation from "expo-screen-orientation";

async function padrao() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
}

async function direita() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  );
}

async function esquerda() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
  );
}

async function padraoForcado() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
}

async function inverterForcado() {
  await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_DOWN
  );
}

async function padraoForcado2() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT);
}

export default function MyScreenOrientation({ navigation }) {
  const [headerColor, setHeaderColor] = useState("#8a2be2");

  // Função para mudar a cor do header
  const changeHeaderColor = (color) => {
    setHeaderColor(color);
  };

  return (
    <View style={{ height: "100%" }}>
      <Header title="Orientação da tela" backgroundColor={headerColor}/>
      <View style={{ justifyContent: "center", alignContent: "center" }}>
        <View style={{ marginBottom: 30 }} />
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Button title="Normal" onPress={padrao}></Button>
        </View>
        <View style={{ marginTop: 20 }} />
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Button title="direita" onPress={direita}></Button>
        </View>
        <View style={{ marginTop: 20 }} />
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Button title="esquerda" onPress={esquerda}></Button>
          <View style={{ marginTop: 20 }} />
        </View>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Button title="padraoForcado" onPress={padraoForcado}></Button>
          <View style={{ marginTop: 20 }} />
        </View>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Button title="inverterForcado" onPress={inverterForcado}></Button>
          <View style={{ marginTop: 20 }} />
        </View>
        <View style={{ marginLeft: 10, marginRight: 10 }}>
          <Button title="padraoForcado2" onPress={padraoForcado2}></Button>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
