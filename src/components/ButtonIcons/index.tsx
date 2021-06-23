import { styles } from './style';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import DiscordImg from '../../assets/discord.png'
import React from 'react';
import { 
    TouchableOpacity,
    View,
    Image,
    Text,
    TouchableOpacityProps
} from 'react-native';

type ButtonIconProps = RectButtonProps &{
    title: string;
}

export function ButtonIcon({
    title,
    ...rest
}:ButtonIconProps) {
    return (
        <RectButton style={styles.container} {...rest}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon}/>
            </View>
            <Text style={styles.title}>
                Entrar com o Discord
            </Text>
        </RectButton>
    )
}