import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/flatcard';
import Elevatedcard from './components/elevatedcard';
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard></Flatcard>
<Elevatedcard>

</Elevatedcard>

        <Text></Text>


      </ScrollView>

    </SafeAreaView>
  );
}

export default App