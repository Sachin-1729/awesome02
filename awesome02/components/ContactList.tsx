import { ScrollView, StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid:1,
            name:'Sachin Tiwari',
            status:'wokeup after the trauma',
            imageUrl:'https://www.shutterstock.com/image-photo/brutal-bearded-man-mustache-shirt-pants-379763746'
        },
        {
            uid:2,
            name:'Nidhi',
            status:'Always Angry Lady',
            imageurl: 'https://www.shutterstock.com/image-photo/brutal-bearded-man-mustache-shirt-pants-379763746'
        },
        {
            uid:3,
            name:'Komal',
            status:'Speak Less Understand More',
            imageurl: 'https://www.shutterstock.com/image-photo/brutal-bearded-man-mustache-shirt-pants-379763746'
        },
        {
            uid: 4,
            name: 'Utkarsh',
            status:'hey I am fucking geekchad',
            imageUrl: 'https://www.shutterstock.com/image-photo/brutal-bearded-man-mustache-shirt-pants-379763746'
        },
        {
            uid:5,
            name:'Anupriya',
            status:'Jokes Samajh Nhi aata yrr',
            Imageurl:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg'
        }
    ];
  return (
    <View>
      <Text style = {styles.headingText}>ContactList</Text>
      <ScrollView 
      style = {styles.container}
      scrollEnabled={false}
       >
         {contacts.map(({uid,name,status,imageUrl})=>(
            <View key={uid} style = {styles.usercard}>
               <Image
        style={styles.userimage}
        source={{
          uri: imageUrl,
        }}
      />  
                <Text style = {styles.username}>{name}</Text>
                <Text style ={styles.userstatus}>{status}</Text>
            </View>
         ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {},
    container: {},
    usercard:{},
    userimage:{
        width:50,
        height:50,
        borderRadius:30
    },
    username:{},
    userstatus:{}
})