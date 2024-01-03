import { View, Text,StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
        <Text style={styles.text}>Instagram</Text>

        </TouchableOpacity>

        <View style={styles.iconcontainer}>

            <TouchableOpacity>
                <Image
                source={{uri:'https://img.icons8.com/?size=50&id=37787&format=png'}}
                style={styles.icon}
                />
               
            </TouchableOpacity>

            <TouchableOpacity>
                <Image
                source={{uri:'https://img.icons8.com/?size=50&id=581&format=png'}}
                style={styles.icon}
                />
               
            </TouchableOpacity>

            <TouchableOpacity>
                <View style={styles.unreadbadge}>
                    <Text style={styles.unreadbadgetext}>11</Text>
                </View>
                <Image
                source={{uri:'https://img.icons8.com/?size=32&id=20208&format=png'}}
                style={styles.icon}
                />
               
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Header
const styles=StyleSheet.create({
    text:{
        color:'brown',
        fontSize:28,
        
    },
    container:{
      justifyContent:'space-between',
       alignItems:'center',
        flexDirection:'row',
        marginHorizontal:20,
        top:15,

    },
    iconcontainer:{
        flexDirection:"row",

    },
    icon:{
        width:30,
        height:30,
        marginLeft:10,
        resizeMode:'contain',
        backgroundColor:"#fff",
     },
     unreadbadge:{
        backgroundColor:"#ff3250",
        position:'absolute',
        left:20,
        bottom:18,
        width:25,
        height:18,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100,
     },
     unreadbadgetext:{
        color:"#fff",
        fontWeight:'600',
     }
})
