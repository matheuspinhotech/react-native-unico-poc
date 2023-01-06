/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, View} from 'react-native';

import {UnicoModule} from './unico';

const App = () => {
  return (
    <View>
      <Button
        title="ABRIR CAMERA"
        onPress={() => UnicoModule.takePicture().then(console.log)}
      />
    </View>
  );
};

export default App;
