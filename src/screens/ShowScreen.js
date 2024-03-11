import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react' 
import { Context } from '../context/BlogContext'



export default function ShowScreen({route}) {
    const {state} = useContext(Context)
    const id = route.params.id
    const item = state.find((item) => item.id ===id)
  return (
    <View>
      <Text>ShowScreen {item.title} </Text>
      <Text>ShowScreen {item.content} </Text>
    </View>
  )
}

const styles = StyleSheet.create({})