import { View, StyleSheet, Text, Button } from "react-native";
import styles from "../../utils/styles";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.content}>
                Bem-vindo(a)!
            </Text>
            <Button 
                mode="contained"
                onPress={()=> {navigation.navigate("DeviceInfo")}} 
                title="Informações do dispositivo"
            />
            <Button 
                mode="contained"
                onPress={()=>{navigation.navigate("BatteryInfo")}} 
                title="Informações da bateria"
            />
        </View>
    )
}