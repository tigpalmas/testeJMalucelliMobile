import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from '../common/Button'
import {darkPurple, lightPurple, purpleTitle, titleGrey} from "../common/colors/index";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import {LinearGradient} from 'expo';


 class IntroScreen extends React.Component {


    render() {
        console.disableYellowBox = true;
        return (
            <LinearGradient
                colors={[lightPurple, purpleTitle, darkPurple]}
                start={[0, 0]}
                end={[1, 0]}
                style={{

                    flex: 1,
                }}>
                <View style={styles.container}>


                    <View style={{width: '100%', alignItems: 'center',marginBottom:50}}>
                        < Icon
                            size={32}
                            name={"finance"}
                            style={{color: "white", marginBottom: 30}}
                        />
                        <Text style={{color: 'white', fontWeight: '700', fontSize: 24}}>Cotação de Seguros</Text>
                        <Text style={{color: 'white', fontWeight: '400', fontSize: 14, marginTop: 15}}>Solução
                            Inovadora da Lider
                            do Mercado</Text>
                    </View>


                    <Button
                        color={'white'}
                        onPress={()=> this.props.navigation.navigate('searchCNPJ')}
                        label={"Iniciar"}
                        iconName={"arrow-right"}
                        textColor={purpleTitle}/>

                </View>

            </LinearGradient>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,

        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});

 export default IntroScreen;