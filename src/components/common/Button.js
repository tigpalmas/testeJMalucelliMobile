import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import colors from "./colors";
import {darkPurple, lightPurple, purpleTitle} from "./colors/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {LinearGradient} from 'expo';


const Button = ({label, onPress, color, disabled, textColor, iconName}) => {
    const {buttonStyle, textStyle} = styles;

    return (



        <TouchableOpacity

            onPress={onPress} style={[buttonStyle, {backgroundColor: color}]}>

            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>


                <Text style={[textStyle, {color: textColor || 'white',}]}>{label}</Text>
                < Icon
                    size={24}
                    name={iconName}
                    style={{color: textColor, marginRight: 5}}
                />
            </View>


        </TouchableOpacity>


    )
}

const styles = {
    textStyle: {
        alignSelf: 'center',

        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10,
        fontWeight: '900'
    },
    buttonStyle: {
       width: '100%',
        paddingVertical: 20,
        paddingHorizontal: 20,
        flexWrap: 'wrap',

        borderRadius: 6,

    }
}

export {Button};