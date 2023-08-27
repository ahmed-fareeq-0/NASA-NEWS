import { Text, View } from 'react-native';
import React from 'react';
import Header from '../components/header';
import News from '../components/news';

const Browse = () => {
    return (
        <View style={{backgroundColor:"#3F1D38"}}>
            <Header />
            <News />
        </View>
    );
}

export default Browse