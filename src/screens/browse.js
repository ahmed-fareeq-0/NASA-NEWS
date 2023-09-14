import { Text, View } from 'react-native';
import React from 'react';
import Header from '../components/header';
import News from '../components/news';
import Sections from '../components/sections';

const Browse = () => {
    return (
        <View style={{flex:1}}>
            <Header />
            {/* <News /> */}
            <Sections />
        </View>
    );
}

// backgroundColor:"#3F1D38"

export default Browse