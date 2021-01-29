import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Block from '../components/UI/Block'
import Text from '../components/UI/Text'
import Home from '../containers/Home'

export default ({ backAndroidHandler }) => {
    return (
        // <Router backAndroidHandler={backAndroidHandler}>
        //     <Scene key="root">
        //         <Scene
        //             key="home"
        //             component={Home}
        //             hideNavBar
        //         />
        //     </Scene>
        // </Router>
        <Block>
            <Text>Test</Text>
        </Block>
    )
}