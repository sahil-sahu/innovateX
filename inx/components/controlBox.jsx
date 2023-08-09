import { StyleSheet, Text, View, Image, Pressable, Switch, ScrollView } from 'react-native';
import { MyText, XHeading, MHeading } from '../components/myText';
import React, {useState} from 'react';

const ControlBox = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                trackColor={{false: '#FFC8C8', true: '#C4FFD1'}}
                thumbColor={isEnabled ? '#13DA3F' : '#DB2929'}
                ios_backgroundColor="#13DA3F"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
}

export default ControlBox