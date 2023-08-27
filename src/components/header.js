import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import avatar from "./../../assets/ali.jpg";

const Header = () => {

    return (
        <View style={styles.container}>
            <TextInput style={styles.searchInput} placeholder='search' placeholderTextColor="#999" />
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={avatar} style={styles.avatar} />
                </TouchableOpacity>
                <Text style={styles.logo}>Browse</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop:60,
        marginBottom:10,
        paddingHorizontal: 16 * 2
    },
    header: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        

    },
    avatar: {
        height: 16 * 2.2,
        width: 16 * 2.2,
        borderRadius:50,
    },
    logo:{
        fontSize: 20,
        fontWeight:"bold",
        color:'#fff'
        
    },
    searchInput: {
        // backgroundColor: "#fff",
        // padding: 15,
        color:"#fff",
        borderColor:"#fff",
        // borderRadius:5,
        borderBottomWidth:1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        // paddingHorizontal:10,
        marginVertical:10
    },
})

export default Header