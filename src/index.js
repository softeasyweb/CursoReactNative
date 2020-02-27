/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

import './config/ReactotronConfig';

const App: () => React$Node = () => {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#1759c1" />
            <Routes />
        </>
    );
};

export default App;
