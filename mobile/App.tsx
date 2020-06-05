import React from 'react';
import {AppLoading} from 'expo';
import { StatusBar, View } from 'react-native';

import {Ubuntu_700Bold, useFonts} from '@expo-google-fonts/ubuntu';
import {Roboto_400Regular, Roboto_500Medium} from '@expo-google-fonts/roboto';
import Routes from './src/routes';
//não usamos tags HTML mas objetos do react native

export default function App() {
  const [fontsLoaded]= useFonts({
    Roboto_400Regular, 
    Roboto_500Medium,
    Ubuntu_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent/>
    <Routes />
    </>
  );
}

//a estilização é feito com objeto javascript usando camel case
//todos elementos tem display flex por natureza
//não tem herança ou cascata de estilos entre elementos diferentes
