import { StyleSheet, Text, View ,Linking,Image, TouchableOpacity} from 'react-native'
import React from 'react'
import elevatedcard from './elevatedcard';

export default function ActionCard() {

    function openwebsite(websitelink: string)
    {
        Linking.openURL(websitelink)
    }
  return (
    <View>
      <Text style = { styles.headingText}>Blog card</Text>
      <View style = {[styles.card, styles.elevatedcard]}>
        <View style = {styles.headingContainer}>
            <Text style = { styles.headerText} >What's new in javascript ES12</Text>
        </View>
        <Image
        style={styles.Image}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg/1280px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_03.jpg',
        }}
      />
      <View style = {styles.bodyContainer}>
        <Text numberOfLines={3}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, 
            it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers.
     The structure was built in 1799 by the Maharaja Sawai Pratap Singh, grandson of Maharaja Sawai Jai Singh, 
     the founder of the city of Jhunjhunu in the state of Rajasthan.[1]
      He was so inspired by the unique structure of Khetri Mahal that he built this grand and historical palace.</Text>
      </View>
      <View style = {styles.footerContainer}>
        <TouchableOpacity  onPress={()=>openwebsite('https://en.wikipedia.org/wiki/Hawa_Mahal')}>
            <Text style = {styles.socialLink}>Read More</Text>
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>openwebsite('https://en.wikipedia.org/wiki/Hawa_Mahal')}>
            <Text style = {styles.socialLink}>Follow Me</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:350,
        height:400,
        borderRadius:6,
        marginHorizontal:12,
        marginVertical:12
    },
    elevatedcard:{
        backgroundColor:'#E07C24',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:0.4
    },
    headingContainer: {
        height:40,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText: {
        color:'white',
        fontSize:16,
        fontWeight:'600'
    },
    Image: {
        width:'100%',
        height:200
    },
    bodyContainer: {
        padding: 10,

    },
    footerContainer:{
        padding:8,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    socialLink: {
        fontSize: 16,
        color: 'white',
        backgroundColor:'#FFF',
        borderRadius:6,
        padding:12
        
    }

})