import { StyleSheet, Text, View, Image, Pressable, TextInput, ScrollView } from 'react-native';
import Header from '../components/header';
import { MyText, XHeading, MHeading } from '../components/myText';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import StatBox from '../components/statBox';
import axios from 'axios';
function Stats(){

    const {backend, websocket} = useSelector(state => state.config);
    const [sensors, setSensors] = useState([]);

    async function fetchRes(){
        try {
            let res = await axios.get(backend + "/sensors/")
            setSensors(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(()=>{
        fetchRes();

    },[])

    return(
        <ScrollView style={{padding:20}}>
            <Header />
            <View style={{height:40,padding:5,}}></View>
            <View style={{gap:10, padding:5,}}>
                <XHeading>
                    Know your device Stats
                </XHeading>
                <MyText>
                    Manage your device consumption or add another to regulate
                </MyText>
            </View>
            <View style={{height:40,padding:5,}}></View>
            <View style={{gap:20,}}>
                {Object.keys(sensors).map((ele,i) => {
                    let e = sensors[ele]
                    return <StatBox key={e.id} usageArr={e.usage} id={e.id} title={e.location} duration={"30mins"} usage={`100`} />
                })}
            </View>
        </ScrollView>
    )

}

export default Stats;
