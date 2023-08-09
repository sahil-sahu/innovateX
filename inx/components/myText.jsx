import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

export const MyText = (props) => {
const [fontsLoaded] = useFonts({
    'PoppinsR': require('../assets/fonts/Poppins-Regular.ttf'), // Replace with the correct path to your font file
    });
    if(!fontsLoaded){
      return null;
  }  
  return <Text {...props} style={{fontFamily:"PoppinsR", fontSize:14, letterSpacing: .6, color: props.color?? "rgba(50, 39, 101, 0.80)",}} />;
};
export const MHeading = (props) => {
const [fontsLoaded] = useFonts({
    'PoppinsM': require('../assets/fonts/Poppins-Medium.ttf'), // Replace with the correct path to your font file
    });
    if(!fontsLoaded){
      return null;
  }  
  return <Text {...props} style={{fontFamily:"PoppinsM", fontSize:14, letterSpacing: .6, color:"#322765"}} />;
};
export const XHeading = (props) => {
const [fontsLoaded] = useFonts({
    'PoppinsX': require('../assets/fonts/Poppins-SemiBold.ttf'), // Replace with the correct path to your font file
    });
    if(!fontsLoaded){
      return null;
  }  
  return <Text {...props} style={{fontFamily:"PoppinsX", fontSize:20, letterSpacing: .8, color:"#322765"}} />;
};
