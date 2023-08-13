import { StyleSheet, Text, View, Image, Pressable, Switch, ScrollView } from 'react-native';
import { MyText, XHeading, MHeading } from '../components/myText';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ControlBox = (props) => {

    const backend = useSelector(state => state.config.backend)

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = async () => {
        setIsEnabled(previousState => !previousState)
        const data = {
            "id": props.id,
            "state": !isEnabled? "ON":"OFF"
        }
        const response = await axios.post(backend+'/control/', data, {
            headers: {
            'Content-Type': 'application/json',
            },
        });
        // console.log(response.data)
    };


    return(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent: 'space-between'}}>
            <View>
                <XHeading>
                    {props.title}{`\n`}
                </XHeading>
                <MHeading>
                    {props.usage}watts
                </MHeading>
                <MyText>
                    Duration {props.duration}
                </MyText>
            </View>
            <Switch
                trackColor={{false: '#B8AAF2', true: '#B8AAF2'}}
                thumbColor={isEnabled ?'#887AC2':'#180C4C' }
                ios_backgroundColor="#13DA3F"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

export default ControlBox