import { View, Text, ScrollView, StyleSheet,Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { USERS } from './Data/Users'

const Stories = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {USERS.map((story,index) => (
            <View key={index} style={{alignItems: 'center'}}>
              <TouchableOpacity>
              <Image source={{uri:story.image}}
            style={styles.story}
            />
              </TouchableOpacity>
            <Text stye={{color:'white'}}>
                {story.user.length>10?story.user.slice(0,10).toLowerCase:story.user.toLowerCase() + '...'}
            </Text>

            </View>
            ))}


        </ScrollView>

        </SafeAreaView>
  );
}
export default Stories
const styles=StyleSheet.create({
    container: {
        justifyContent: 'center',
      },
    story:{
        width:70,
        height:70,
        borderRadius:50,
        marginLeft:6,
        borderWidth:3,
        borderColor:"#ff8501",
        top:12,

    }
});

