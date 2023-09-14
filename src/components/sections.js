import React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: '1',
        title: 'APOD',
        color: '#fff',
        screen: 'apod',
        icon: "space-station"
    },
    {
        id: '2',
        title: "Mars Rover Photos",
        color: '#fff',
        screen: 'marsRover',
        icon: "earth"
    },
    {
        id: '3',
        title: "Image and Video",
        color: '#fff',
        screen: 'GreenScreen',
        icon: "space-station"
    },
    {
        id: '4',
        title: "DONKI",
        color: '#fff',
        screen: 'YellowScreen',
        icon: "space-station"
    },
];

const Sections = () => {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={[styles.box, { backgroundColor: item.color }]}
            onPress={() => navigation.navigate(item.screen)}
        >
            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <MaterialCommunityIcons
                    name={item.icon}
                    size={24}
                    color='black'
                />
                <Text style={styles.text}>{item.title}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    box: {
        flex: 1,
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        margin: 5,
    },
    text: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10
    },
})



export default Sections