import React from "react";
import { View,Text,StyleSheet, TextInput } from "react-native"
import 'react-native-gesture-handler';
import LoginButton from "../../../components/LoginButton"

const Login = ()=>{
    
    return(
        <View style={styles.mainContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text1}>Sign Up</Text>
                <Text style={styles.text2}>Login</Text>
            </View>
            <View style={styles.formContainer}>
                <View>
                    <Text style={styles.label}>Email*</Text>
                    <TextInput
                        style={styles.input}
                        autoCapitalize= 'none'
                        onChangeText={ (texto) => console.log(texto) }
                        placeholder= "Ingrese su email"
                        />
                </View>
                <View>
                    <Text style={styles.label}>Contraseña*</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry= {true}
                        onChangeText={ (texto) => console.log(texto) }
                        placeholder= "Ingrese su contraseña"
                    />
                </View>
            </View>

            <View style={styles.loginContainer}>                
                <LoginButton title="Log in"/>
            </View>
        </View>
    );
}



const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        padding:20
    },
    textContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop: 15,
        marginBottom: 20
    },
    text1:{
        color: '#b3b3b3',
        fontSize: 28,
    },
    text2:{
        color: '#858585',
        fontSize: 28,
        fontWeight:"bold"
    },
    formContainer:{
        marginVertical: 20
    },
    label:{
        color: '#858585',
        fontSize: 15,
        fontWeight:"bold"
    },
    input:{
        padding: 10,
        borderStyle:"solid",
        borderColor:"#858585",
        borderWidth: 1,
        borderRadius: 10,
        marginVertical: 10
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:"space-between"
        
    }
})

export default Login;