import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function fancycard() {
  return (
    <View>
      <Text style = {styles.headingText}>Trending Places</Text>
      <View style = {[styles.card , styles.cardElevated]}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg',
        }}
      />
      <View style = {styles.cardBody}>
        <Text style = {styles.cardTitle}>Hawa Mahal</Text>
        <Text style = {styles.cardlabel}>Pink City</Text>
        <Text style = {styles.cardDescription}>The Hawa Mahal is palace in the city of Jaipur, India.Built from red and pink sandstone, it is on the
          of the City Palace.
        </Text>
        <Text style = {styles.cardFooter}>12 mins, away</Text>
        
       </View>

      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8

    },
    card : {
     width: 350,
     height: 360,
     borderRadius:6,
     marginVertical: 12,
     marginHorizontal:16
    },
    cardElevated: {
       backgroundColor:'#FFFFFF',
       color:'#000000',
       elevation:4,
       shadowOffset:
       {
        width:1,
        height:1
       }
    }, 
    tinyLogo:{
        
       height:180,
       marginBottom: 8,
       borderTopLeftRadius: 12,
       borderTopRightRadius: 12
    },
    cardBody:{
      flex: 1,
      flexGrow: 1,
      paddingHorizontal:12
    },
    cardlabel: {
      color: 'blue',
      fontSize:14,
      marginBottom: 6,
      fontWeight: 'bold'


    },
    cardTitle:{
    color : 'pink',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 6,
    marginLeft:'30%'

    },
    cardDescription: {
      color:'#000000',
      fontSize: 12,
      marginBottom: 12,
      marginTop:6
    },
    cardFooter:{
      color: '#000000'
    }

})