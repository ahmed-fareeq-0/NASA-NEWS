import React from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import img1 from "./../../assets/photo_2023-08-22_03-24-09.jpg";
import img2 from "./../../assets/photo_2023-08-27_21-49-59.jpg";
import img3 from "./../../assets/photo.jpg";
import img4 from "./../../assets/photo_2023-08-22_03-24-09t.jpg";
import img5 from "./../../assets/photo_2023-08-22_03-24-08.jpg";

const News = () => {

    return (
        <View style={{marginBottom:350}}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View>
                        <View style={[styles.card, styles.cardElevated]}>
                            <Image source={item.img} style={styles.cardImage} />
                            <View style={styles.cardBody}>
                                <Text style={styles.cardTitle}>{item.newsTitle}</Text>
                                <Text style={styles.cardLabel}>{item.researchCenter}</Text>
                                <Text style={styles.cardDescription}>{item.desc}</Text>
                                <Text style={styles.cardFooter}>{item.date} away</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 340,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
        alignSelf: "center",

    },
    cardElevated: {
        backgroundColor: '#4D3C77',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }

    },
    cardImage: {
        width: "100%",
        height: 180,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,

    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 6
    },
    cardDescription: {
        color: '#f2f2f2',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1
    },
    cardFooter: {
        color: '#fff'
    }
})


const data = [
    {
        id:"1",
        newsTitle:"dark mater",
        desc:"Image capture of dark matter by artificial intelligence",
        researchCenter:"Nasa",
        img:img1,
        date:"12 mins away"

    },
    {
        id:"2",
        newsTitle:"dark mater",
        desc:"Image capture of dark matter by artificial intelligence",
        researchCenter:"Nasa",
        img:img2,
        date:"12 mins"

    },
    {
        id:"3",
        newsTitle:"dark mater",
        desc:"Image capture of dark matter by artificial intelligence",
        researchCenter:"Nasa",
        img:img3,
        date:"12 mins"

    },
    {
        id:"4",
        newsTitle:"dark mater",
        desc:"Image capture of dark matter by artificial intelligence",
        researchCenter:"Nasa",
        img:img4,
        date:"12 mins"

    },
    {
        id:"5",
        newsTitle:"dark mater",
        desc:"Image capture of dark matter by artificial intelligence",
        researchCenter:"Nasa",
        img:img5,
        date:"12 mins"

    },
    {
        id:"6",
        newsTitle:"dark mater",
        desc:"Image capture of dark matter by artificial intelligence",
        researchCenter:"Nasa",
        img:img3,
        date:"12 mins"

    },
]

export default News