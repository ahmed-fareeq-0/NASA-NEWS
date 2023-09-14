import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Context } from '../context/provider';
import React, { useState, useContext } from 'react';

const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const { login } = useContext(Context)

    
    return (
        <View style={styles.container} >
            <Text style={styles.title}>Login</Text>

            <View style={styles.inputDad}>
                {/* <Icon name="mail" color="#00716F" size={24}/> */}
                <TextInput style={styles.input} placeholder='Enter email' onChangeText={(text) => setEmail(text)} />
            </View>

            <View style={styles.inputDad}>
                {/* <Icon name="mail" color="#00716F" size={24}/> */}
                <TextInput style={styles.input} placeholder='Enter password' onChangeText={(text) => setPassword(text)} />
            </View>

            <TouchableOpacity style={styles.btnDad} onPress={() => login(email, password)}>
                <Text style={styles.btn}>sign up</Text>
            </TouchableOpacity>

            <View style={{ alignSelf: "center", paddingVertical: 30 }}>
                <Text>are you login?</Text>
                <Text onPress={() => navigation.navigate('regster')} style={styles.regsterPage}>regster here</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#FFF",
        justifyContent: "center",
    },
    title: {
        fontSize: 35,
        // fontFamily: "SemiBold",
        marginHorizontal: 30,
        color: '#1D267D'
        // alignSelf: "center",
    },
    inputDad: {
        marginHorizontal: 30,
        marginTop: 50,
        paddingVertical: 2,
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    btnDad: {
        marginHorizontal: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 35,
        backgroundColor: "#5C469C",
        paddingVertical: 10,
        borderRadius: 10
    },
    btn: {
        color: "white",
        fontSize: 18
        // fontFamily: "SemiBold"
    },
    regsterPage: {
        alignSelf: "center",
        color: "#43B0F1",
        // fontFamily: "SemiBold",
    },
})


export default Login