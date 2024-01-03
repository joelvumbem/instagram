import { View, Text,Image,StyleSheet, Share, TouchableOpacity } from 'react-native'
import React from 'react'
import { POSTS } from './Data/Post'


const Postfootericons=[
    {
        name:'like',
        image:'https://img.icons8.com/?size=64&id=z3ZIkrQcnQdK&format=png',
        likedImageurl:'https://img.icons8.com/?size=48&id=Mjt9Tkm04cgv&format=png',
    },
    {
        name:'commet',
        image:'https://icons8.com/icon/42245/speech-bubble',
    },
    {
        name:'share',
        image:'https://img.icons8.com/?size=24&id=84042&format=png',
    },
    {
        name:'save',
        image:'https://icons8.com/icon/OM58ylVNhtC4/bookmark-ribbon--v2',
    },
]
const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
        
        <View style={{flexDirection:'row',margin:5 }}>
            <Image source={{uri: post.profile_picture}} style={styles.story}/>
            <Text style={{color:'black',marginLeft:5,fontWeight:'700'}}>{post.user}</Text>
           </View>
           <View style={{width:"100%", height:450}}>
                  <Postimage post={post}/>
                  <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{flexDirection:'row'}}>
                        <Image style={{ height:30, width:39, justifyContent:'space-evenly'}} source={{uri:'https://img.icons8.com/?size=64&id=z3ZIkrQcnQdK&format=png'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <Image style={{ height:30, width:30}} source={{uri:'https://img.icons8.com/?size=50&id=QxNDCQCA0COh&format=gif'}}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row'}}>
                        <Image style={{ height:30, width:30}} source={{uri:'https://img.icons8.com/?size=80&id=a6irAj65GalL&format=png'}}/>
                    </TouchableOpacity>
                    </View>
                    <View style={{left:'90%', bottom:30}}>
                    <TouchableOpacity >
                        <Image style={{ height:30, width:30}} source={{uri:'https://img.icons8.com/?size=24&id=82461&format=png'}}/>
                    </TouchableOpacity>
                    </View>
                  
                 
                  <Postfootericon />
                  
         </View>
         <Caption/>
         <View>
                     <Text style={{fontWeight:"600", top:30}}>{post.user}</Text>
                    <Text style={{fontWeight:"600", top:30}}>{post.caption}</Text>
                    <Text style={{fontWeight:"600", top:30}}>{post.likes  + 'Likes'}</Text>
                  </View>
                  <View>
                    <CommentSection post={post}/>
                    <View>

                    </View>
                <Comments post={post}/>
                  </View>
                 
        
    </View>
  )
}

const PostHeader=({post})=>{
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
         margin:5,
          alignItems:'center',
          }}
          >
        <View>
            <Image source={{uri: post.profile_picture}} style={styles.story}/>
        </View>
    </View>
}
const Postimage=({post})=>(
    
             <Image source={{uri:post.image}} 
    style={{
        height:"100%",
        resizeMode:'cover',
        
    }}
    />
   
)
const Postfootericon=()=>{
    <View>
            <Icon style={styles.footericons} imguri={Postfootericons[0].imageuri}/>
            <Icon style={styles.footericons} imguri={Postfootericons[1].imageuri}/>
            <Icon style={styles.footericons} imguri={Postfootericons[2].imageuri}/>
            <Icon style={styles.footericons} imguri={Postfootericons[3].imageuri}/>

    </View>
  
}




const Icon=({imgstyle,imguri}) =>(
    <TouchableOpacity>
        <Image style={imgstyle} source={{uri:imguri}}/>
    </TouchableOpacity>
)

const Likes =({post})=>{
    <Text>{post.Likes.tolocalstring('en')}</Text>
}
const Caption=({post})=>{
    <Text>helo</Text>
}
const CommentSection=({post})=>{
<Text style={{color:'grey'}}>hi</Text>
}
const Comments=({post})=>{
    <>
    {post.comments.map((comments,index) =>(
        <View key={index}>
            <Text style={{color:'black'}}>[comment.user]</Text>
            {comments.comment}
        </View>
        
    ))}
    </>
}

export default Post
const styles=StyleSheet.create({
    story:{
        width:35,
        height:35,
        borderRadius:50,
        marginLeft:6,
        borderWidth:1.6,
        borderColor:"#ff8501",
        //top:12,
        alignItems:'center',

    },
    footericons:{
        width:33,
        height:33,
        
    }
    
})