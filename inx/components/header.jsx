import { Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { MyText, XHeading, MHeading } from '../components/myText';

const Header= (props) =>{

    const [fontsLoaded] = useFonts({
        'SFDistantGalaxy': require('../assets/fonts/SFDistantGalaxy.ttf'), // Replace with the correct path to your font file
      });

    if(!fontsLoaded){
        return null;
    }


    return (
        <View style={{flexDirection: "row",justifyContent: "space-between", alignItems: "center",}}>
                <View>
                    <Text style={{fontFamily: 'SFDistantGalaxy', color:"#322765", fontSize: 36, fontWeight:400,}}>
                        Zeph
                    </Text>
                    <MyText>
                        6th Aug, Sunday
                    </MyText>
                </View>
                <View>
                    <Image source={require('../assets/profile.png')}/>
                </View>
            </View>
    );
}

export default Header;