import React from "react";
import {
createStackNavigator,
} from 'react-navigation';

import HomeScreen from "./HomeScreen";
import Steps from "./SelectItems/Steps";
import Successes from "./Successes";

const screens = {
    HomeScreen: {screen: HomeScreen},
    Steps: {
        screen: Steps,
    },
    Successes:{
        screen: Successes,
    }
};

const navigationOptions = {
    headerMode: 'none',
};

const Router = createStackNavigator(
    screens,
    navigationOptions
);

export default Router;