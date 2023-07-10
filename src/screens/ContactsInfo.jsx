import { View, StyleSheet, Text, FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import * as Contacts from "expo-contacts";
import * as Notification from "expo-notifications";
import Header from "../components/Header";
import { useState } from "react";
import { useCallback } from "react";
import Itens from "../components/Itens";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
  },
});

export default function ContactsInfo({ navigation }) {
  const [contacts, setContacts] = useState();

  const [headerColor, setHeaderColor] = useState("#f00");

  // Função para mudar a cor do header
  const changeHeaderColor = (color) => {
    setHeaderColor(color);
  };

  async function carregarContatos() {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
    });

    setContacts(data);
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          await carregarContatos();
        }
      })();
    }, [])
  );

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

  return (
    <View style={styles.container}>
      <Header title="Contacts" backgroundColor={headerColor} />
      <View style={styles.content}>
        {contacts ? (
          <FlatList
            data={contacts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Itens item={item} notiMensagem={notiMensagem} />
            )}
          />
        ) : (
          <></>
        )}
      </View>
    </View>
  );
}
