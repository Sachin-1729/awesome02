import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function flatcard() {
  return (
    <View>
      <Text style = {styles.headingText}>Flatcard </Text>
      <View style = {styles.container}>
      <View style = {[styles.card , styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style = {[styles.card , styles.cardTwo]}>
          <Text >Blue</Text>
        </View>
        <View style = {[styles.card , styles.cardThree]}>
          <Text >Green</Text>
        </View>
        <View style = {[styles.card , styles.cardOne]}>
          <Text>Red</Text>
        </View>
       
      </View>
    </View>
    
    
  )
}

const styles = StyleSheet.create({

  headingText: {
    fontSize: 23,
    fontWeight: 'bold',
    paddingHorizontal: 10
  },
  container:
  { 
   flex:1,
   flexDirection:'row',
   padding:10,
   margin:27,

  },
  card: {
flex:1,
justifyContent: 'center',
alignItems:'center',
width:100,
height: 100,
borderRadius:5,
marginHorizontal: 4,
marginVertical:2


  },
  cardOne: {
backgroundColor: '#EF5354',

  },

  cardTwo: {
backgroundColor: '#5DA3FA'
  },

  cardThree: {
    backgroundColor:'#50DBB4'
      },

}) 