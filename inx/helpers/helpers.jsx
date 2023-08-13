import axios from "axios";
import Svg, { Circle,Path } from 'react-native-svg';
import { View } from 'react-native';

export const isValidIPv4 = async (ip) => {
    // Regular expression pattern for validating IPv4 addresses
    const pattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
  
    if (!pattern.test(ip)) {
      return false;
    }
  
    // Split the IP address into parts and check their validity
    const parts = ip.split('.');
    for (const part of parts) {
      const num = parseInt(part, 10);
      if (num < 0 || num > 255) {
        return false;
      }
    }

    
    
  
    return new Promise(async (resolve, reject) => {
        try {
            console.log(`http://${ip}:5000/health`)
            const res= await axios.get(`http://${ip}:5000/health`)
            resolve(true);
        } catch (error) {
            resolve(false); // Capture the error
        }
    });
  }

export const CircularProgress = ({ size, strokeWidth, progress }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const rotation = 90;
    const progressValue = (progress / 100) * circumference;


  return (
    <View style={{justifyContent:"center",alignItems:"center",marginVertical:30,}}>
      <Svg style={{transform: [{rotate: '90deg'}]}} width={size} height={size}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#A5FAEE"
          strokeWidth={strokeWidth}
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="transparent"
          stroke="#1BAE99"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progressValue}
          strokeLinecap="round"
        />
      </Svg>
      <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={72}
      height={72}
      viewBox="0 0 72 72"
      fill="none"
      style={{position:"absolute"}}
    >
      <Path
        d="M12.002 47.998v-7.14c0-6.36-3.09-9.36-3-16.86.09-8.16 4.47-18 13.5-18 5.61 0 7.5 5.4 7.5 10.5 0 9.33-6 16.98-6 26.04v5.46a6 6 0 11-12 0zM60.004 60v-7.14c0-6.36 3.09-9.36 3-16.86-.09-8.16-4.47-18-13.5-18-5.61 0-7.5 5.4-7.5 10.5 0 9.33 6 16.98 6 26.04V60a6 6 0 1012 0zM47.996 50.998h12M11.996 39.002h12"
        stroke="#0C544A"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
    </View>
  );
};  

export const DustbinProgress = ({ size, strokeWidth, progress }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const rotation = 90;
  const progressValue = (progress / 100) * circumference;


return (
  <View style={{justifyContent:"center",alignItems:"center",}}>
    <Svg style={{transform: [{rotate: '90deg'}]}} width={size} height={size}>
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={"#A5FAEE"}
        strokeWidth={strokeWidth}
      />
      <Circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={progress < 80? "#1BAE99": "red"}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - progressValue}
        strokeLinecap="round"
      />
    </Svg>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      height={48}
      viewBox="0 -960 960 960"
      width={48}
      style={{position:"absolute"}}
    >
      <Path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261zm438-630H261v570h438v-570zM367-266h60v-399h-60v399zm166 0h60v-399h-60v399zM261-750v570-570z" />
    </Svg>
  </View>
);
}; 