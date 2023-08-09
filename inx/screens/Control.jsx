import { StyleSheet, Text, View, Image, Pressable, Switch, ScrollView } from 'react-native';
import Header from '../components/header';
import { MyText, XHeading, MHeading } from '../components/myText';
import ControlBox from '../components/controlBox';

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
                {Item.map((e,i) => {
                    return <ControlBox key={i} title={e.title} duration={e.duration} usage={e.usage}></ControlBox>
                })}
            </View>
        </ScrollView>
    )

}

export default Control;