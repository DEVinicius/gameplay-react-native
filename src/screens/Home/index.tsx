import React from 'react';
import { View } from 'react-native';
import { ButtonAdd } from '../../components/ButtonAdd';
import { Profile } from '../../components/Profile';
import { style } from './style';

export function Home(){
    return (
        <View>
            <View style={style.header}>
                <Profile />
                <ButtonAdd />
            </View>
        </View>
    );
}