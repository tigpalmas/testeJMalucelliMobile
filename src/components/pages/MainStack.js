
import {createStackNavigator} from 'react-navigation'
import IntroScreen from "./IntroScreen";
import SearchCNPJScreen from "./SearchCNPJScreen";




const MainStack = createStackNavigator({
    intro: {screen: IntroScreen},
    searchCNPJ: {screen: SearchCNPJScreen},


}, )


MainStack.navigationOptions =({navigation}) =>{

    let tabBarVisible = true;
    if(navigation.state.index >0){
        tabBarVisible = false;
    }

    return {
        tabBarVisible
    };
};

export default MainStack