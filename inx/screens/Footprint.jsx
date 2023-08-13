import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import Header from '../components/header';
import { MyText, XHeading, MHeading } from '../components/myText';
import { up } from '../assets/vectors';
import { CircularProgress } from '../helpers/helpers';

function FootScreen(){

    return(
        <ScrollView style={{padding:20}}>
            <Header />
            <View style={{height:40,padding:5,}}></View>
            <View>
                <XHeading>
                    Your carbon footprint
                </XHeading>
                <View style={{alignItems:"center"}}>
                  <CircularProgress size={150} strokeWidth={10} progress={76} />
                  <MyText color={`#0C7F6E`}>
                    24% lower footprint{`\n`}than previous month
                  </MyText>
                </View>
            </View>
            <View style={{height:40,padding:5,}}></View>
            <View>
              <XHeading>
                Device consumption
              </XHeading>
              <View style={{flexDirection:'row', justifyContent:"space-between", paddingVertical:10}}>
                <View style={{gap:10}}>
                  <MHeading>
                    Air Conditioner
                  </MHeading>
                  <View style={{display:"flex", flexDirection:"row", gap:10}}>
                      {up}
                      <MyText color={`#13DA3F`}>
                          +5%
                      </MyText>
                  </View>
                  </View>
                <MHeading>
                  900watts
                </MHeading>
              </View>
              <View style={{flexDirection:'row', justifyContent:"space-between", paddingVertical:10}}>
                <View style={{gap:10}}>
                  <MHeading>
                    Air Conditioner
                  </MHeading>
                  <View style={{display:"flex", flexDirection:"row", gap:10}}>
                      {up}
                      <MyText color={`#13DA3F`}>
                          +5%
                      </MyText>
                  </View>
                </View>
                <MHeading>
                  900watts
                </MHeading>
              </View>
            </View>
            <View style={{backgroundColor:"#F3F1FF", borderColor:"#D5CDFF", borderWidth:1,shadowRadius:10, shadowColor:"rgba(89, 76, 149, 0.50)", shadowOffset: {width: 2,height: 2},elevation:5,borderRadius:10,padding:15, margin:10,}}>
              <MyText color={`#13DA3F`}>
                Tip :
              </MyText>
              <MyText>
                Unplug chargers and devices when they're not in use. Many chargers and electronics continue to draw energy even when they're not actively charging. By unplugging them, you can save on 'phantom' energy consumption and reduce your electricity bill
              </MyText>
            </View>
        </ScrollView>
    )

}

export default FootScreen;
