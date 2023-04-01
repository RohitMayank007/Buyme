import { View, Text,TextInput, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

const Searchbar = () => {

search = async () => {
    this.setState ({
        isLoading : true 
    })
    const url = ' https://jsonplaceholder.typicode.com/posts'
    this.state.searchInput
}



  return (
    <SafeAreaView>
      <TextInput style={styles.input} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create ({

    input :{
        flexDirection:'row',
        height:40,
        margin :12,
        borderWidth:1,
        padding:10,
        textAlign:'center'
    }
})

export default Searchbar