import React from 'react';
import MainStack from './src/components/pages/MainStack'

export default class App extends React.Component {
    render() {
        console.disableYellowBox = true;
        return (
            <MainStack/>
        );
    }
}

