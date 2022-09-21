import React from 'react'
import { View, StyleSheet } from 'react-native'
import Counter from './src/Components/Counter';
import { Provider } from 'react-redux'
import { store } from './src/store/store';

const App = () => {
  return (
    <View style={styles.mainContainer} >
      <Provider store={store} >
        <Counter />
      </Provider>
    </View>
  )
}
export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'dodgerblue'
  }
})