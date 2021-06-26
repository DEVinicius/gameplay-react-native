import React from "react";
import { View, Text } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { style } from "./style";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

type ButtonAddProps = RectButtonProps

export function ButtonAdd({
    ...rest
}:ButtonAddProps) {
    return (
        <RectButton style={style.container} {...rest}>
            <MaterialCommunityIcons 
                name="plus"
                color={theme.colors.heading}
                size={24}
            />
        </RectButton>
    );
}