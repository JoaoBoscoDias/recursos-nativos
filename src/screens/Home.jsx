import { View, StyleSheet, Text, Button } from "react-native";
import styles from "../../utils/styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Bem-vindo(a)!</Text>
      <View style={styles.botoes}>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("DeviceInfo");
          }}
          title="Informações do dispositivo"
        />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("BatteryInfo");
          }}
          title="Informações da bateria"
        />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("Notify");
          }}
          title="Notificações"
        />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("MyScreenOrientation");
          }}
          title="Mudar orientação da tela"
        />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("ContactsInfo");
          }}
          title="Contatos"
        />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("NotifyAgend");
          }}
          title="Notificações agendadas"
        />
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("Chat");
          }}
          title="Chat"
        />
      </View>
    </View>
  );
}
