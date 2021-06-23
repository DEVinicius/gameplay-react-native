import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar";
import { style } from "./style";

export function Profile() {
    return (
        <View style={style.container}>
            <Avatar 
                urlImage="https://avatars.githubusercontent.com/u/37378446?v=4"
            />
            <View>
                <View style={style.user}>
                    <Text style={style.greeting}>Olá,</Text>
                    <Text style={style.userName}>Vinicius</Text>
                </View>

                <Text style={style.message}>Hoje é dia de Vitória</Text>
            </View>
        </View>
    );
}