import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function flatcard() {
  return (
    <View>
      <Text style={ styles.HeadingText}>Flatcard Man </Text>

      <View style = { styles.container}>
        <View >
            <View style = { [styles.container , styles.red]}>
            <Text>Red</Text>
            </View>
          
        </View>
        <View>
            <View style = { [styles.container , styles.green]}>
            <Text>Green</Text>
            </View>
            
        </View>
        <View>
            <View style = { [styles.container , styles.blue]}>
            <Text>Blue</Text>
            </View>
            
        </View> 
      </View>
      
             
    </View>
   
    
  )
}

const styles = StyleSheet.create({
    HeadingText : {
        fontSize: 24,
        fontWeight: 'bold',
        // color: 'red'
        color: 'blue',
        paddingHorizontal: 20
    },
    container: {
       
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    red: {
      
       height: 100,
       width : 100,
       backgroundColor : 'red'

    },
    blue: {
        height: 100,
        width : 100,
        backgroundColor :'blue'
    },
    green: {
        height: 100,
        width : 100, 
        backgroundColor: 'green'
    }


})