import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import Header from '../components/header';
import { MyText, XHeading, MHeading } from '../components/myText';
import Svg, { Circle,Path } from 'react-native-svg';
import { up } from '../assets/vectors';
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

const CircularProgress = ({ size, strokeWidth, progress }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const rotation = 90;
    const progressValue = (progress / 100) * circumference;


  return (
    <View style={{justifyContent:"center",alignItems:"center",marginVertical:30,}}>
      <Svg style={{transform: [{rotate: '90deg'}]}} width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#A5FAEE"
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#1BAE99"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressValue}
          strokeLinecap="round"
        />
      </Svg>
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
      style={{position:"absolute"}}
    >
      <Path
        d="M12.002 47.998v-7.14c0-6.36-3.09-9.36-3-16.86.09-8.16 4.47-18 13.5-18 5.61 0 7.5 5.4 7.5 10.5 0 9.33-6 16.98-6 26.04v5.46a6 6 0 11-12 0zM60.004 60v-7.14c0-6.36 3.09-9.36 3-16.86-.09-8.16-4.47-18-13.5-18-5.61 0-7.5 5.4-7.5 10.5 0 9.33 6 16.98 6 26.04V60a6 6 0 1012 0zM47.996 50.998h12M11.996 39.002h12"
        stroke="#0C544A"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    </View>
  );
};

export default FootScreen;
