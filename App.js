import React from 'react';
import MainStack from './src/components/pages/MainStack'
import {Provider} from 'react-redux';
import store from './src/redux/store'

export default class App extends React.Component {
    render() {
        console.disableYellowBox = true;
        return (
            <Provider store={store}>
                <MainStack/>
            </Provider>
        );
    }
}

