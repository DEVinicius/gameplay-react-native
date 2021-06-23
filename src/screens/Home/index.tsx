import React from 'react';
import { View } from 'react-native';
import { Profile } from '../../components/Profile';
import { style } from './style';

export function Home(){
    return (
        <View>
            <View style={style.header}>
                <Profile />
            </View>
        </View>
    );
}