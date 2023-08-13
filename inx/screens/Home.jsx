import { StyleSheet, Text, View, Image, Button, TextInput, ScrollView, Vibration,ToastAndroid } from 'react-native';
import { useFonts } from 'expo-font';
import {useState, useEffect, useRef} from 'react';
import { MyText, XHeading, MHeading } from '../components/myText';
import MoniterCard from '../components/moniterCard';
import { up } from '../assets/vectors';
import { LineChart } from 'react-native-chart-kit';
import Header from '../components/header';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { DustbinProgress } from '../helpers/helpers';

function formatDate(inputDate) {
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    const [year, month, day] = inputDate.split('-');
    const formattedDate = `${parseInt(day, 10)} ${months[parseInt(month, 10) - 1]}`;
  
    return formattedDate;
  }

function HomeScreen(){

    const [usage,setUsage] = useState(false);
    const {backend, websocket} = useSelector(state => state.config);
    const socket = useRef(new WebSocket(websocket));
    const [progress, setProgress] = useState(89);

    socket.current.onopen = () => {
    console.log('Connection opened from home');
    };

    socket.current.onmessage = (event) => {
    // console.log('Received message: ', event.data);
    try {
        const data = JSON.parse(event.data)
        console.log(data)
        switch (data.status) {
            case "dustbin":
                setProgress(data.percentage)
                if(data.percentage> 80)
                    vibratePhone("Dustbin Full");
                break;
            case "alert":
                vibratePhone("Gas Leakage Detected");
              break;
            // Additional cases...
            default:
              // Code to be executed if none of the cases match expression
          }
    } catch (error) {
        //
    }
    };

    socket.current.onclose = () => {
    console.log('Connection closed');
    };

    socket.current.onerror = (error) => {
    console.log('Error: ', error);
    };

    async function fetchUsage(){
        let {data} = await axios.get(backend+"/sensors/usage");
        setUsage(data);
    }

    async function fetchStatus(){
        try {
            let res = await axios.get(backend + "/control/")
        } catch (error) {
            console.log(error)
        }
    }

    const vibratePhone = (data) => {
        Vibration.vibrate(2000);
        ToastAndroid.show(data, ToastAndroid.SHORT);
      };

    useEffect(() =>{
        fetchUsage()
        // fetchStatus()
    }, [])

    return(
        <ScrollView >
            <View style={{ padding:20,}}>
                <Header />
            </View>
            {/* <Button
                title="Vibrate"
                onPress={vibratePhone}
            /> */}
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
                    <View style={{gap: 10, alignItems:'center'}}>
                        <MHeading>
                            Dustbin
                        </MHeading>
                        <View>
                            <DustbinProgress size={80} strokeWidth={5} progress={progress} />
                        </View>
                    </View>
                </View>
            </View>
            {usage && <View style={{backgroundColor:"#F3F1FF", margin:20,justifyContent:"space-evenly", alignItems:"center"}}>
                <View style={{flexDirection:'row',gap:5, alignItems:"center", paddingVertical:20,}}>
                    <XHeading>
                        Weekly Energy Analytics
                    </XHeading>
                    <Text>
                        kwatts/day
                    </Text>
                </View>
                <LineChart
                    data={{
                        labels: usage.map(i => formatDate(i.date)),
                        datasets: [
                          {
                            data: usage.map(i => +i.total_usage),
                          },
                        ],
                      }}
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
            </View>}
        </ScrollView>
    )

}

export default HomeScreen;

// const styles = StyleSheet.create({
// })