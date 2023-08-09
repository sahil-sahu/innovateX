import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import { useFonts } from 'expo-font';
import { MyText, XHeading, MHeading } from '../components/myText';
import MoniterCard from '../components/moniterCard';
import { up } from '../assets/vectors';
import { LineChart } from 'react-native-chart-kit';
import Header from '../components/header';

function HomeScreen(){

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99],
          },
        ],
      };

    return(
        <ScrollView >
            <View style={{ padding:20,}}>
                <Header />
            </View>
            <View style={{height:20,padding:5,}}></View>
            <View>
                <View style={{padding:20,}}>
                    <XHeading>
                        Home Monitering
                    </XHeading>
                </View>
                <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{flexDirection:"row", gap: 5, flexGrow:1}}>
                    <View style={{width:10}}></View>
                    <MoniterCard />
                    <MoniterCard />
                    <View style={{width:10}}></View>
                </ScrollView>
            </View>
            <View style={{padding:20, gap:10}}>
                <View>
                    <XHeading>
                        Real time Consumption
                    </XHeading>
                </View>
                <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                    <View style={{gap: 10}}>
                        <MHeading>
                            850 watts
                        </MHeading>
                        <MyText>
                            Estimate : Rs 9.85
                        </MyText>
                        <View style={{display:"flex", flexDirection:"row", gap:10}}>
                            {up}
                            <MyText color={`#13DA3F`}>
                                +5%
                            </MyText>
                        </View>
                    </View>
                    <View style={{gap: 10}}>
                        <MHeading>
                            Currently working:
                        </MHeading>
                        <MyText>
                            A.C. Lamps Wifi
                        </MyText>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:"#F3F1FF", margin:20,justifyContent:"space-evenly", alignItems:"center"}}>
                <View style={{flexDirection:'row',gap:5, alignItems:"center", paddingVertical:20,}}>
                    <XHeading>
                        Weekly Energy Analytics
                    </XHeading>
                    <Text>
                        kwatts/day
                    </Text>
                </View>
                <LineChart
                    data={data}
                    width={320}
                    height={200}
                    chartConfig={{
                    backgroundColor: '#F3F1FF',
                    backgroundGradientFrom: '#F3F1FF',
                    backgroundGradientTo: '#F3F1FF',
                    decimalPlaces: 0,
                    color: (opacity = 1) => `rgba(10, 45, 142, 1)`,
                    }}
                />
            </View>
        </ScrollView>
    )

}

export default HomeScreen;

// const styles = StyleSheet.create({
// })