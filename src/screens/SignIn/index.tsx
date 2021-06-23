import React from "react";
import { useState } from "react";
import { 
    View,
    Text, 
    TextInput,
    Image,
    StatusBar
} from "react-native";

import IllustrationImage  from '../../assets/illustration.png';
import { ButtonIcon } from "../../components/ButtonIcons";

import { styles } from './style';

export function SignIn() {
    return (
        <View style={styles.container}>
            <StatusBar 
                barStyle="light-content"
                backgroundColor="transparent"
                translucent
            />
            
            <Image 
                source={IllustrationImage} 
                style={styles.image} 
                resizeMode="stretch"
            />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize{`\n`}
                    suas jogatinas{`\n`} 
                    facilmente
                </Text>

                <Text style={styles.subTitle}>
                    Crie grupos para jogar seus games{`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon />
            </View>
        </View>
    );
}