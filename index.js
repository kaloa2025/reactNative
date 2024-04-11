/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Text , View} from 'react-native';
import Header from './src/Components/Header.js';
// import CarList from './src/Components/CarList.js';
import MobileList from './src/Components/MobileList.js';

const App =()=>{
    return (
        <View>
            {/* <Header title="CARS"/><CarList/> */}
            <Header title="Mobile"></Header>
            <MobileList/>
        </View>
    )
    
}

AppRegistry.registerComponent(appName, () => App);
