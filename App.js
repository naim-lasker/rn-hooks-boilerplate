import React, { useEffect } from 'react'
import { BackHandler, ToastAndroid } from 'react-native'
// import { Actions } from 'react-native-router-flux'
import Routes from './src/routes'

let backButtonPressedOnceToExit = false

export default () => {

  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', onBackPress)

  //   return () => {
  //     BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  //   }
  // }, [])

  
  const onBackPress = () => {
    if (backButtonPressedOnceToExit) BackHandler.exitApp()
    else {
      if (Actions.currentScene === 'login' || Actions.currentScene === '_dashboard') {
        backButtonPressedOnceToExit = true
        ToastAndroid.show('Press back button again to exit', ToastAndroid.SHORT)
        setTimeout(() => { backButtonPressedOnceToExit = false }, 2000)
        return true
      }
    }
  }

  return (
    <Routes />
  )
}