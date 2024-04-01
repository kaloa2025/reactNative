/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Text , View} from 'react-native';
import Header from './src/Components/Header.js';
import CarList from './src/Components/CarList.js';

const App =()=>{
    // return <Text>Hello</Text>
    // return <Header/>
    return (
        <View>
            <Header title="CARS"/>
            <CarList/>
        </View>
    )
    
}

AppRegistry.registerComponent(appName, () => App);
