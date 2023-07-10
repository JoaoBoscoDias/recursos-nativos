import { View, StyleSheet, Text, Button } from "react-native";
import * as Notification from "expo-notifications";
import * as Device from "expo-device";
import * as Battery from "expo-battery";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function Notify({ navigation }) {
  const [expoToken, setExpoToken] = useState("");
  const [nivelBateria, setNivelBateria] = useState();
  const [statusBateria, setStatusBateria] = useState();

  const [headerColor, setHeaderColor] = useState("#0000ff");

  // Função para mudar a cor do header
  const changeHeaderColor = (color) => {
    setHeaderColor(color);
  };

  async function atualizarTudo() {
    bateria();
  }

  async function status() {
    const status = await Battery.getBatteryStateAsync();
    setStatusBateria(status);
  }

  async function bateria() {
    const nivel = await Battery.getBatteryLevelAsync();
    setNivelBateria(nivel * 100);
  }

  async function mudarTela(){
    setTimeout(() => {
      navigation.navigate("BatteryInfo");
    }, 3000);
  }

  useEffect(() => {
    bateria();
    status();
    mudarTela();  
  }, []);

  async function notificarBateria() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Nível da bateria",
        subtitle: "aaaaaaa",
        body: nivelBateria + "%",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  async function notiAlertaBateria() {
    alert("Nível da bateria: " + nivelBateria + "%");
  }

  async function notiMensagem() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Mensagem",
        subtitle: "aaaaaa",
        body: "Help",
      },
      trigger: { seconds: 3 },
    });
  }

  async function notificarAparelho() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Aparelho",
        subtitle: "aaaaa",
        body: "O seu aparelho " + Device.modelName + " é incrível",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
  }

  async function navigateToAnotherPage() {
    const token = await Notification.scheduleNotificationAsync({
      content: {
        title: "Trocar de pagina",
        subtitle: "aaaaa",
        body: "Va para a pagina BatteryInfo",
      },
      trigger: { seconds: 3 },
    });
    setExpoToken(token);
    mudarTela();
  }

  

  return (
    <View style={styles.container}>
      <Header title="Notificações" backgroundColor={headerColor}/>
      <View>
        <Text>Notify</Text>
      </View>
      <View>
        <Text>Token: {expoToken}</Text>
        <Button title="Enviar Notificação" onPress={notiMensagem} />
        <Button title="Enviar Alerta da bateria" onPress={notiAlertaBateria} />
        <Button title="Enviar Alerta do aparelho" onPress={notificarAparelho} />
        <Button title="Enviar Notificação da Bateria" onPress={notificarBateria} />
        <Button title="Enviar para outra página" onPress={navigateToAnotherPage} />
      </View>
    </View>
  );
}
