import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Button} from '../common/Button'
import {checkGreen, darkPurple, green, lightPurple, purpleTitle, titleGrey} from "../common/colors/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {TextInputMask} from 'react-native-masked-text'


import {LinearGradient} from 'expo';


class SearchCNPJScreen extends React.Component {


    render() {
        const {labelStyle, inputWrapper, maskStyle} = styles;
        return (
            <View style={styles.container}>
                <LinearGradient
                    colors={[lightPurple, purpleTitle, darkPurple]}
                    start={[0, 0]}
                    end={[1, 0]}
                    style={{

                        width: '100%'
                    }}>
                    <View style={{width: '100%', flexDirection: 'row', padding: 20, justifyContent:'space-between'}}>
                        <View style={{flexDirection: 'row'}}>
                            < Icon
                                size={32}
                                name={"finance"}
                                style={{color: "white", marginRight: 30}}
                            />

                            <View>
                                <Text style={{color: 'white', fontWeight: '700'}}>Nova Cotação</Text>
                                <Text style={{color: 'white', fontWeight: '700', fontSize: 10}}>#0980</Text>
                            </View>
                        </View>

                        <Image
                            style={{height: 50, width: 50, borderRadius: 45, borderWidth: 1, borderColor: purpleTitle}}
                            source={require('../../../assets/persona4.jpg')}/>

                    </View>
                </LinearGradient>
                <View style={{flexDirection:'row', padding: 20, alignItems:'center'}}>
                    <View style={{borderWidth: 2, borderColor: purpleTitle, paddingHorizontal: 7,paddingVertical: 2, marginRight: 10}}>
                        <Text style={{fontWeight: '700', color: purpleTitle}}>1</Text>
                    </View>
                    <Text style={{fontWeight: '700', fontSize: 16}}>Buscar Por CNPJ ou empresa</Text>


                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10, padding: 20}}>
                    <View style={{flex: 1, }}>
                        <Text style={labelStyle}>CNPJ/Empresa</Text>
                        <View style={inputWrapper}>
                            <TextInputMask
                                style={maskStyle}
                                value={null}
                                placeholder={'Digite o CNPJ'}
                                underlineColorAndroid='transparent'
                                onChangeText={null}

                                refInput={(ref) => this.myDateText = ref}
                                type={'datetime'}
                                options={{
                                    format: '99.999.999/9999-99'
                                }}

                            />
                        </View>
                    </View>

                    < Icon
                        size={24}
                        name={"check-circle"}
                        style={{color: checkGreen, marginRight: 5}}
                    />
                </View>

                <View style={{position:'absolute', bottom: 0, right: 0, left: 0, padding: 20}}>
                <Button
                    color={green}
                    onPress={()=> this.props.navigation.navigate('searchCNPJ')}
                    label={"OK"}
                    iconName={"arrow-right"}
                    textColor={'white'}/>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    labelStyle: {
        color: titleGrey,
        marginLeft: 5,
        fontSize: 14,
        fontWeight: '700',

    },
    maskStyle: {color: 'black',fontSize: 18,  paddingHorizontal: 5,   fontWeight: '700' },
    inputWrapper: {
        marginTop: 5,
        width: '100%',

        borderBottomWidth: 0.5,
        borderColor: titleGrey,
        padding: 3,

    },

});

export default SearchCNPJScreen;