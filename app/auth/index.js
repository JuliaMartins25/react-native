import { View, Text, StyleSheet, Button } from "react-native";
import {Link, Stack, useNavigation} from 'expo-router'


export default function Home() {

    const navegation = useNavigation();
    const handHideHeader = () => {
        navegation.setOptions({
            headerShown: false,
        })
    }
   
    return (
        <View style={styles.container}>
            <Stack.Screen options = {{
                 title: 'SENAI',
                 headerRight: () => (
                    <button onPress={() => alert('Olá, aula de mobile')}
                    title='Info'
                    color='#fff'
                    />
                 ),
                headerStyle: {
                    backgroundColor: 'pink',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 30,
                }
            }}/>

            <Button title="Ocultar Header" onPress={handHideHeader} />

            <Button title="Mostrar Header" onPress={() => navegation.setOptions({ headerShown: true })}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       
       

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
       
    },
});


