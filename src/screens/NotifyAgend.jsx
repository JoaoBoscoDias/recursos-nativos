import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as Notifications from "expo-notifications";
import Header from "../components/Header";

export default function NotificationScreen() {
  const [notificationSeconds, setNotificationSeconds] = useState("");

  const [headerColor, setHeaderColor] = useState("#6495ed");

  // Função para mudar a cor do header
  const changeHeaderColor = (color) => {
    setHeaderColor(color);
  };

  const scheduleNotification = async () => {
    try {
      const content = {
        title: "Lembrete",
        body: "Lembrete para o agendamento de notificações!",
        sound: true,
        vibrate: true,
      };

      const trigger = new Date();
      trigger.setSeconds(trigger.getSeconds() + parseInt(notificationSeconds));

      await Notifications.scheduleNotificationAsync({ content, trigger });
      console.log("Notificação agendada com sucesso!");
    } catch (error) {
      console.log("Erro ao agendar notificação:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Header backgroundColor={headerColor} title="Agendar Notificação"></Header>
      <View style={styles.aaa}>
        <Text style={styles.title}>Agendamento de Notificações</Text>
        <Text style={styles.label}>Segundos para a Notificação:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o número de segundos"
          value={notificationSeconds}
          onChangeText={setNotificationSeconds}
        />
        <TouchableOpacity style={styles.button} onPress={scheduleNotification}>
          <Text style={styles.buttonText}>Agendar Notificação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
  aaa: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
