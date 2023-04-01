import { View, Text } from 'react-native'
import React from 'react'
import Searchbar from './components/searchbar'
import Buttom from './components/button'

const App = () => {
  return (
    <View>
    <Searchbar/>

    <Buttom />
    <Text style={{fontSize:30}}>
      Fetched Posts are :-
    </Text>
    </View>
    
  )
}

export default App