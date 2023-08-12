import { StyleSheet, Text, View, Image, Pressable, Switch, ScrollView } from 'react-native';
import { MyText, XHeading, MHeading } from '../components/myText';
import React, {useState} from 'react';

const ControlBox = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
        if (!isEnabled) {
            // publishMessage();
        } else {
            //
        }
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
                trackColor={{false: '#F4F2FF', true: '#B8AAF2'}}
                thumbColor={isEnabled ? '#887AC2' : '#180C4C'}
                ios_backgroundColor="#13DA3F"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

export default ControlBox