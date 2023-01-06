/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text} from 'react-native';

import {UnicoModule} from './unico';

const App = () => {
  useEffect(() => {
    UnicoModule.takePicture().then(console.log);
  }, []);

  return null;
};

export default App;
