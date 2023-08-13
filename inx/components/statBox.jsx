import { StyleSheet, Text, View, Image, Pressable, Switch, ScrollView } from 'react-native';
import { MyText, XHeading, MHeading } from '../components/myText';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
const monthNames = [
'January', 'February', 'March', 'April', 'May', 'June',
'July', 'August', 'September', 'October', 'November', 'December'
];
function DateFormat(timestamp){
    const dateObj = new Date(timestamp);
    const month = dateObj.getMonth(); // 7 (August)
    const day = dateObj.getDate();    // 6
    const monthName = monthNames[month];
    return `${monthName} ${day}`
}

const StatBox = (props) => {
    const usage = props.usageArr
    return(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <View>
                <XHeading>
                    {props.title}{`\n`}
                </XHeading>
                <MHeading>
                    Monthly Consumption:
                </MHeading>
                <ScrollView style={{width:"100%", gap:20, maxHeight:60}} showsVerticalScrollIndicator={true}>
                {
                    usage.map((ele,i)=>{
                        return(
                            <View key={i} style={{flexDirection:"row",justifyContent:"space-between", width:"79%"}}> 
                                <MyText>
                                    {DateFormat(ele.off_duration)}
                                </MyText>
                                <MyText>
                                    {ele.usage} kWh
                                </MyText>
                            </View>
                        );
                    })
                }
                </ScrollView>
            </View>
        </View>
    );
}

export default StatBox;