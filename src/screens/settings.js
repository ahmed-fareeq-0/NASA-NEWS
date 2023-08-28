import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState } from 'react';
import avatar from "./../../assets/ali.jpg";
import { useNavigation } from '@react-navigation/native';

const Settings = () => {

    const navigation = useNavigation();

    const [profile, setProfile] = useState({})
    const [editing, setEdit] = useState(null)

    //    const handleEdit = (name, text) => {
    //         profile[name] = text;

    //         setProfile({ profile });
    //       }

    //      const toggleEdit = (name) => {
    //         setEdit({ editing: !editing ? name : null })

    //       }


    //     const renderEdit = (name) => {
    //         if (editing === name) {
    //           return (
    //             <TextInput
    //               defaultValue={profile[name]}
    //               onChangeText={text => handleEdit([name], text)}
    //             />
    //           );
    //         }

    //         return <Text bold>{profile[name]}</Text>;
    //     }

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.navigate('settings')}>
                        <Image source={avatar} style={styles.avatar} />
                    </TouchableOpacity>
                    <Text style={styles.logo}>settings</Text>
                </View>
            </View>

            <View style={styles.settings}>
                <View style={styles.flex} >
                <Text style={{color:'green', fontSize:18}}>edit</Text>
                    <View >
                        <Text style={styles.sizeTitle}>username</Text>
                        <Text style={styles.sizeDesc}>ahmed fareeq</Text>
                    </View>
                </View>
                <View style={styles.flex} >
                <Text style={{color:'green', fontSize:18}}>edit</Text>
                    <View >
                        <Text style={styles.sizeTitle}>loction</Text>
                        <Text style={styles.sizeDesc}>iraq</Text>
                    </View>
                </View>
                <View style={styles.flex} >
                <Text style={{color:'green', fontSize:18}}>edit</Text>
                    <View >
                        <Text style={styles.sizeTitle}>gmail</Text>
                        <Text style={styles.sizeDesc}>ahmed@gmail.com</Text>
                    </View>
                </View>
                {/* <View>
                <Text>password</Text>
                <Text></Text>
            </View> */}
            </View>



        </View>
    );
}


const styles = StyleSheet.create({
    settings: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: "flex-end",
        paddingVertical: 16,
        paddingHorizontal: 16
    },
    container: {
        marginTop: 60,
        marginBottom: 10,
        paddingHorizontal: 16 * 2
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",


    },
    avatar: {
        height: 16 * 2.2,
        width: 16 * 2.2,
        borderRadius: 50,
    },
    logo: {
        fontSize: 28,
        fontWeight: "bold",
        // color: '#fff'

    },
    flex: {
        width:"100%",
        // backgroundColor:'red',
        paddingHorizontal:20,
        paddingVertical:20,
        flexDirection: 'row',
        justifyContent: "space-between",
        marginBottom:10,
        // // alignItems: 'center'
    },
    sizeTitle:{
        fontSize:18,
        color:'gray'
    },
    sizeDesc:{
        fontSize:21
    }

});

export default Settings