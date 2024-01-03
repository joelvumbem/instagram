import { View, Text } from 'react-native'
import React from 'react'

const BottomTaps = () => {
  return (
    <View style={{flexDirection:'row',padding:12, justifyContent:'space-evenly'}}>
      <Image
      height={25}
      width={25} 
      source={{uri:'https://img.icons8.com/?size=32&id=14096&format=png'}}/>
      <Text>home</Text>
      <Text>save</Text>
      <Text>account</Text>
      <Text>reel</Text>
    </View>
  )
}

export default BottomTaps