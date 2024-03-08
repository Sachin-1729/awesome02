import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function elevatedcard() {
  return (
    <View>
      <Text style = {styles.headingText}>Elevatedcard</Text>
    <ScrollView horizontal ={true} style = {styles.container}>
        <View style ={[styles.card , styles.elevated]}>
            <Text>Tap</Text>
        </View>
        <View style ={[styles.card , styles.elevated]}>
            <Text>Me</Text>
        </View>
        <View style ={[styles.card , styles.elevated]}>
            <Text>To</Text>
        </View>
        <View style ={[styles.card , styles.elevated]}>
            <Text>Scroll</Text>
        </View>
        <View style ={[styles.card , styles.elevated]}>
            <Text>More...</Text>
        </View>
        <View style ={[styles.card , styles.elevated]}>
            <Text>Haaha</Text>
        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingHorizontal: 10
      },
      card: {
        width:200,
        height:100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4, 
        margin: 8
      },
      elevated: {
        backgroundColor : '#CAD5E2',
        elevation:4,
        shadowOffset: {
           width:1,
           height:1
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 6
       

      
      },
      container:
      { 
       flex:1,
       flexDirection:'row',
       padding:10,
       margin:2,
    
      },

})