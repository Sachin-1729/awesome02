import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/flatcard';
import Elevatedcard from './components/elevatedcard';
import Fancycard from './components/fancycard'
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard></Flatcard>
        <Elevatedcard></Elevatedcard>
        <Fancycard></Fancycard>

        <Text></Text>


      </ScrollView>

    </SafeAreaView>
  );
}

export default App