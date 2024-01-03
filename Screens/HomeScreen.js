import {  SafeAreaView,StyleSheet, ScrollView,Text,View,Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';

import Header from '../Components/Home/Header'
import Stories from '../Components/Stories';
import Post from '../Components/Post';
import { POSTS } from '../Components/Data/Post';
import BottomTaps, { BottomTabsIcons } from '../Components/BottomTaps';
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header/>
        <Stories/>
        <ScrollView>
      
            {POSTS.map((post,index) =>(
                <Post post={post} key={index}/>
                ))}
             </ScrollView>
      <StatusBar style="Auto" />
      <BottomTaps/>
      </SafeAreaView>
  )
}
export default HomeScreen
const styles=StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
    },
    
})