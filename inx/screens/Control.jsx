import { StyleSheet, Text, View, Image, Pressable, Switch, ScrollView, Button } from 'react-native';
import Header from '../components/header';
import { MyText, XHeading, MHeading } from '../components/myText';
import ControlBox from '../components/controlBox';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const Item = [
    {
        title:"Refrigator",
        usage:"650",
        duration:"12hrs 10mins"
    },
    {
        title:"Washing Machine",
        usage:"650",
        duration:"12hrs 10mins"
    },
    {
        title:"Hall LEDs",
        usage:"650",
        duration:"12hrs 10mins"
    },
    {
        title:"Study Room Fan",
        usage:"650",
        duration:"12hrs 10mins"
    },
    {
        title:"Air Conditioner",
        usage:"650",
        duration:"12hrs 10mins"
    },
]

function Control(){

    const {backend, websocket} = useSelector(state => state.config);
    // const socket = useRef(new WebSocket(websocket));
    const [sensors, setSensors] = useState([]);


    // socket.current.onopen = () => {
    // console.log('Connection opened');
    // };

    // socket.current.onmessage = (event) => {
    // // console.log('Received message: ', event.data);
    // };

    // socket.current.onclose = () => {
    // console.log('Connection closed');
    // };

    // socket.current.onerror = (error) => {
    // console.log('Error: ', error);
    // };

    async function fetchRes(){
        try {
            let res = await axios.get(backend + "/sensors/show")
            // console.log(res.data)
            setSensors(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    async function fetchStatus(){
        try {
            let res = await axios.get(backend + "/control/")
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        // socket.current = new WebSocket(websocket)

        fetchRes();

    },[])

    return(
        <ScrollView style={{padding:20,}}>
            <Header></Header>
            <View style={{height:40,padding:5,}}></View>
            <View style={{alignItems:'center',gap:10, padding:5,}}>
                <XHeading>
                    Regulations and monitering
                </XHeading>
                <MyText>
                    Track. Save. Win. Monitor your devices to uncover energy guzzlers, take control, and win big on savings!
                </MyText>
            </View>
            <View style={{height:40,padding:5,}}></View>
            <View style={{gap:20,}}>
                {Object.keys(sensors).map((ele,i) => {
                    let e = sensors[ele]
                    return <ControlBox key={e.id} id={e.id} title={e.location} duration={"30mins"} usage={`100`}></ControlBox>
                })}
            </View>
        </ScrollView>
    )

}

export default Control;