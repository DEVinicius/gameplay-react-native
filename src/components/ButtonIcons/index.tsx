import { styles } from './style';

import DiscordImg from '../../assets/discord.png'
import React from 'react';
import { 
    TouchableOpacity,
    View,
    Image,
    Text
} from 'react-native';

export function ButtonIcon() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                Entrar com o Discord
            </Text>
        </TouchableOpacity>
    )
}