// *********** Start Library section ******************
// Let's put in all the libs we will need
// This is tied to the multipage and should be the first line
import 'react-native-gesture-handler';
// This will be used so we can use a status at the top of each page
// but this does not place a status bar at the top, you must do this below.
import { StatusBar } from 'expo-status-bar';
// This you see in every app we make, it is required for react.
import React from 'react';
import { 
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions,
  Image, 
  } from 'react-native';
import Constants from 'expo-constants';
// This allows us to do naviation
import { NavigationContainer } from '@react-navigation/native';
// This lets us use the stack type of navigation.
import { createStackNavigator } from '@react-navigation/stack';
// This is for the native in app webview
import { WebView } from 'react-native-webview';

const { width, height } = Dimensions.get('window');

// ******** This section builds Screen 1 ***********************
// Let's build our intro screen with this function
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, backgroundColor: 'grey' }}>
        <Pressable onPress={() => navigation.navigate('Report')}>
          <ImageBackground source={require('./assets/CPW_SiteLogo.png')} style={{width: width, height: height/3}}>
            <Text style={{margin: 100, fontSize: 26, textAlign: 'center', color: 'black', justifyContent: 'center', backgroundColor: '#ecf0f1'}}>
              Report
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
      <View style={{ flex: 3, backgroundColor: '#ecf0f1' }}>
        <Pressable onPress={() => navigation.navigate('Invasive Species List')}>
          <ImageBackground source={require('./assets/ColoradoLogo.jpg')} style={{ width: width, height: height/3}}>
            <Text style={{ margin: 80, fontSize: 26,textAlign: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
              Invasive Species List
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
      <View style={{ flex: 3, backgroundColor: '#ecf0f1' }}>
        <ImageBackground source={require('./assets/MaroonBells.jpg')} style={{ width: width, height: height/3}}>
          <Pressable onPress={() => navigation.navigate('About This App')}>
            <Text style={{ margin: 90, fontSize: 26,textAlign: 'center', justifyContent: 'center', backgroundColor: 'white'}}>
              About This App
            </Text>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
}

// ******** This section builds Screen 2 ***********************
// Let's build our Report screen with this function
function ReportScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <WebView 
      style={styles.container}
      source={{ uri: 'https://cpw.state.co.us/aboutus/Pages/ISP-Report-Invader.aspx' }}
    />
    </View>
  );
}

// ******** This section builds Screen 3 ***********************
// Let's build our Invasive Species List screen with this function
function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, backgroundColor: '#ecf0f1' }}>
        <Pressable onPress={() => navigation.navigate('Aquatic Nuisance Species')}>
          <ImageBackground source={require('./assets/ANS.jpg')} style={{ width: width, height: height/3}}>
            <Text style={{margin: 67, fontSize: 28, textAlign: 'center', color: 'black', justifyContent: 'center', backgroundColor: 'white'}}>
              Aquatic Nuisance Species
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
      <View style={{ flex: 3, backgroundColor: '#ecf0f1' }}>
        <Pressable onPress={() => navigation.navigate('Noxious Weeds')}>
          <ImageBackground source={require('./assets/NoxiousWeeds.jpg')} style={{ width: width, height: height/3}}>
            <Text style={{ margin: 90, fontSize: 24,textAlign: 'center', justifyContent: 'center', backgroundColor: 'white' }}>
              Noxious Weeds
            </Text>
          </ImageBackground>
        </Pressable>
      </View>
      <View style={{ flex: 3, backgroundColor: '#ecf0f1' }}>
        <ImageBackground source={require('./assets/ForestPests.jpg')} style={{ width: width, height: height/3}}>
          <Pressable onPress={() => navigation.navigate('Forest Pests')}>
            <Text style={{ margin: 100, fontSize: 26,textAlign: 'center', color: 'black', justifyContent: 'center', backgroundColor: 'white'}}>
              Forest Pests
            </Text>
          </Pressable>
        </ImageBackground>
      </View>
    </View>
  );
}

// ******** This section builds Screen 3.1 ***********************
// Let's build our Report screen with this function
function ANSScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#ecf0f1'}}>
        <Text style={styles.textHeader}>
        Zebra and Quagga Mussels
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of these mussels, you need to learn to identify them by the following:
        {'\n'}- They can stick to hard surfaces.
        {'\n'}- They range in size from microscopic to 2 inches long.
        {'\n'}- The color alternates between a yelowish and darker brown, often forming stripes.
        {'\n'}- They prefer to live 200-300+ feet deep.
        {'\n'}- They cannot survive in water under 32⁰F (0⁰C).
        {'\n\n'}To help stop the spread of these mussels: clean, drain, dry, dispose, and report!
        </Text>
        <Image style={{flex:1, width: 500, height: 300, justifyContent: 'center'}} source={require('./assets/ANS.jpg')}/>
        <Text style={styles.textHeader}>
        New Zealand Mudsnail
        </Text>
        <Text style={styles.textMain}>
        New Zealand Mudsnails are very small which makes them hard to identify. 
        {'\n\n'}
        To help prevent the spread of them do the following:
        {'\n'}- Spray or soak waders and gear with 140ºF water for at least 10 minutes.
        {'\n'}- Dry your waders and equipment completely for a minimum of 10 days in between each use (remember that mudsnails can survive several days out of water).​
        {'\n'}- Place waders and boots in a freezer overnight between use.
        {'\n'}- Make sure to report the last location your gear was used if you spot them on it.
        </Text>
        <Image style={{flex:1, width: 500, height: 300, justifyContent: 'center'}} source={require('./assets/NZMudsnail.jpg')}/>
        <Text style={styles.textHeader}>
        Rusty Crayfish
        </Text>
        <Text style={styles.textMain}>
        Rusty Crayfish can be identified by the rusty patches on either side of their body.
        {'\n\n'}
        To help prevent the spread of Rusty Crayfish only use Colorado bait!
        {'\n'}- Do not throw unused bait crayfish, or bait of any kind, back in the water alive. 
        {'\n'}- The live transportation of all crayfish from waters west of the Continental Divide is prohibited. 
        {'\n'}- All crayfish caught west of the Continental Divide must be immediately killed (by removing the head from the thorax).
        </Text>
        <Image style={{flex:1, width: 500, height: 300, justifyContent: 'center'}} source={require('./assets/RustyCrayfish.jpg')}/>
        <Text style={styles.textHeader}>
        Waterflea
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of Waterfleas, you need to learn to identify them by the following:
        {'\n'}- Unique body shape: distinguished from other zooplankton by its long tail (70% of body is tail).
        {'\n'}- Depending on age—the spine may contain 1–4 barbs (the older the water flea the more barbs).
        {'\n'}- Head is mostly a single large black eye.
        {'\n'}- Swimming antennae propels flea through the water, allowing travel between shallow and deeper waters.
        {'\n'}- Range in length from 0.4 to 1.6 mm, depending on sex (females are larger) and age.
        {'\n\n'}To help stop the spread of these mussels: clean, drain, dry, dispose, and report!
        </Text>
        <Image style={{flex:1, width: 500, height: 300, justifyContent: 'center'}} source={require('./assets/Waterflea.jpg')}/>
      </ScrollView>
    </SafeAreaView>
  );
}

// ******** This section builds Screen 3.2 ***********************
// Let's build our Report screen with this function
function WeedsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#ecf0f1'}}>
        <Text style={styles.textHeader}>
        Meadow Knapweed
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of Meadow Knapweed, you need to learn to identify them by the following:
        {'\n'}- Meadow knapweed is a perennial forb that grows 2-4 feet tall.
        {'\n'}- The pink to purple-red flowers emerge mid-summer through fall and are 1 inch wide.
        {'\n'}- The bracts are papery, fringed, and light to dark brown.
        {'\n'}- Meadow knapweed has many branches ending with a single flower.
        {'\n'}- The basal leaves are blue-green, up to 4 inches long, slender, with a petiole (leaf stalk).
        {'\n\n'}To help stop the spread of Meadow Knapweed, remove from the ground, dispose of properly, and report!
        </Text>
        <Image style={{flex:1, width: width, height: 300, justifyContent: 'center'}} source={require('./assets/Meadow-Knapweed.jpg')}/>
        <Text style={styles.textHeader}>
        Purple Loosestrife
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of Purple Loosestrife, you need to learn to identify them by the following:
        {'\n'}- Purple loosestrife is a perennial forb that grows 6-8 feet tall.
        {'\n'}- The 1-inch-long flowers are pinkish-purple with 5-7 petals in long racemes.
        {'\n'}- The flowers usually emerge from late June through September, 8-10 weeks after germination.
        {'\n'}- The flowers are tightly grouped in long, vertical heads, and bloom from the bottom up.
        {'\n'}- The distinctive stem is 4-sided, and the leaves are lance-shaped with smooth edges.
        {'\n'}- Purple loosestrife has a taproot, making it difficult to remove mechanically (hand-removal).
        {'\n\n'}To help stop the spread of Purple Loosestrife, remove either chemically or biologically and report!
        </Text>
        <Image style={{flex:1, width: width, height: 300, justifyContent: 'center'}} source={require('./assets/Purple-Loosestrife.jpg')}/>
        <Text style={styles.textHeader}>
        Yellow Starthistle
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of Yellow Starthistle, you need to learn to identify them by the following:
        {'\n'}- Yellow starthistle is an annual or winter annual forb that grows 2-3 feet tall and has a vigorous taproot.
        {'\n'}- The flowers are yellow, located singly on the ends of branches.
        {'\n'}- Below the flowers are sharp, stiff thorns about 3/4 inch in length.
        {'\n'}- The flower emerges as a rosette with deeply lobed leaves in the early spring.
        {'\n'}- The upper leaf edges are smooth and sharply pointed.
        {'\n'}- The stems are branching, winged and covered with cottony hairs. 
        {'\n\n'}To help stop the spread of Purple Loosestrife, remove either mechanically or biologically and report!
        </Text>
        <Image style={{flex:1, width: width, height: 300, justifyContent: 'center'}} source={require('./assets/Yellow-Starthistle.jpg')}/>
      </ScrollView>
    </SafeAreaView>
  );
}

// ******** This section builds Screen 3.3 ***********************
// Let's build our Report screen with this function
function PestsScreen({ navigation }) {
  return (
    <SafeAreaView>
      <ScrollView style={{backgroundColor: '#ecf0f1'}}>
        <Text style={styles.textHeader}>
        Emerald Ash Borer
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of Emerald Ash Borers, you need to learn to identify them by the following:
        {'\n'}- The emerald ash borer is elongate, cylindrical and slender.
        {'\n'}- Typical specimens are a bright, metallic, emerald green color overall.
        {'\n'}- This beetle is generally 10-13mm in length.
        {'\n'}- With the elytra and wings raised, the distinguishing bright coppery-red dorsal surface of the abdomen is visible. 
        {'\n\n'}To help stop the spread of the Emerald Ash Borer, if you think you have seen one then please report it!
        </Text>
        <Image style={{flex:1, width: 500, height: 300, justifyContent: 'center'}} source={require('./assets/ForestPests.jpg')}/>
        <Text style={styles.textHeader}>
        Gypsy Moth
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of Gypsy Moths, you need to learn to identify them by the following:
        {'\n'}- The egg masses contain 400-600 eggs and are light tan, with black, pellet-like eggs inside.
        {'\n'}- The larval stage, or caterpillar, is hairy, growing 50-65 mm long at maturity.
        {'\n'}- The head of a mature caterpillar is yellow and black, with 5 pairs of blue spots (tubercles) on the abdomen and thorax.
        {'\n'}- Behind the blue spots are 6 pairs of brick red spots.
        {'\n'}- The adult male gypsy moth is a dark buff and flies readily during the day.
        {'\n'}- Adult female gypsy moths are white with black, wavy markings. 
        {'\n\n'}To help stop the spread of Gypsy Moths, remove and either burn or drown in soapy water and report!
        </Text>
        <Image style={{flex:1, width: 500, height: 300, justifyContent: 'center'}} source={require('./assets/GypsyMoth.jpg')}/>
        <Text style={styles.textHeader}>
        Japanese Beetle
        </Text>
        <Text style={styles.textMain}>
        To slow the spread of the Japanese Betele, you need to learn to identify them by the following:
        {'\n'}- Japanese beetle larvae or grubs are “C” shaped.
        {'\n'}- They live in the soil and feed on grass roots, among other plant species.
        {'\n'}- Adult Japanese beetles are approximately 3/8 inch in length with a dark metallic green head and metallic, dark tan wings.
        {'\n'}- They also display two white rear tufts and five white lateral tufts of hair.
        {'\n'}- ​In early July adults can be observed feeding on vines, linden trees, roses, and many other ornamental plants.
        {'\n\n'}To help stop the spread of the Japanese Beetle, remove either mechanically or chemically and report!
        </Text>
        <Image style={{flex:1, width: 500, height: 300, justifyContent: 'center'}} source={require('./assets/JapaneseBeetle.jpg')}/>
      </ScrollView>
    </SafeAreaView>
  );
}
// ******** This section builds Screen 4 ***********************
// Let's build our About This App screen with this function
function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={{flex:1, width: width, height: height, justifyContent: 'center'}} source={require('./assets/MaroonBells.jpg')}/>
      <Text style={styles.textHeader}>
      Who I am
      </Text>
      <Text style={styles.textMain}>
      My name is Chris Tomaskovic and I created this app as a Junior at the University of Advancing Technology.
      </Text>
      <Text style={styles.textHeader}>
      Why I made this app
      </Text>
      <Text style={styles.textMain}>
      I made this app for a project in a React Native course at the University of Advancing Technology. I saw that there was a problem with people not being able to easily report Invasive Species in the Roaring Fork Valley. This app includes details on the invasive species        that threaten the ecosystems of the Roaring Fork Valley so that you can help identify, report, and deal with them.
      </Text>
    </View>
  );
}
// ********** This section in your navigation manager *****************
// Let's create our nav component
const Stack = createStackNavigator();
// This will take care of all the navigation to all screens in this app
// Create our stack navigator
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="RFISR">
        <Stack.Screen style={{textAlign: 'center'}} name="RFISR" component={HomeScreen} />
        <Stack.Screen style={{textAlign: 'center'}} name="Report" component={ReportScreen} />
        <Stack.Screen style={{textAlign: 'center'}} name="Invasive Species List" component={ListScreen} />
        <Stack.Screen style={{textAlign: 'center'}} name="Aquatic Nuisance Species" component={ANSScreen} />
        <Stack.Screen style={{textAlign: 'center'}} name="Noxious Weeds" component={WeedsScreen} />
        <Stack.Screen style={{textAlign: 'center'}} name="Forest Pests" component={PestsScreen} />
        <Stack.Screen style={{textAlign: 'center'}} name="About This App" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// The Stylesheet for reusability
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  textHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 5,
  },
  textMain: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
  }
});

// ******** This section starts the app*******************
export default App;
