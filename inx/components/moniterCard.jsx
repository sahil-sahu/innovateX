import { View, Text } from "react-native";
import Svg, { Path } from "react-native-svg"
import { MHeading, MyText } from "./myText";
import { up, down } from "../assets/vectors";

const MoniterCard = (props) =>{
    return(
        <View style={{backgroundColor: '#D5CDFF', borderRadius:10, padding: 10, shadowRadius:10, shadowColor:"rgba(89, 76, 149, 0.50)", shadowOffset: {width: 2,height: 2},elevation:5, margin: 10, width: 250}}>
            <View style={{display:"flex", flexDirection: "row", justifyContent:"space-evenly", alignItems:"center"}}>
                <View>
                    <Svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={38}
                        height={38}
                        viewBox="0 0 38 38"
                        fill="none"
                        >
                        <Path
                            d="M11.082 28.502h15.833"
                            stroke="#322765"
                            strokeWidth={3.16667}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Path
                            d="M30.083 7.918H7.917c-1.75 0-3.167 1.181-3.167 2.639v10.555c0 1.458 1.418 2.64 3.167 2.64h22.166c1.75 0 3.167-1.182 3.167-2.64V10.557c0-1.458-1.418-2.639-3.167-2.639z"
                            fill="#322765"
                            stroke="#322765"
                            strokeWidth={3.16667}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <Path
                            d="M9.5 20.584h19"
                            stroke="#F3F1FF"
                            strokeWidth={1.58333}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        </Svg>
                </View>
                <View style={{width:90}}>
                    <MHeading>
                        Temperature Regulation
                    </MHeading>
                </View>
                <Text style={{alignSelf:"flex-end"}}>
                    28° C
                </Text>
            </View>
            <View style={{display:"flex", flexDirection:"row", justifyContent:"stretch", alignItems:"center"}}>
                <View style={{width:"50%", gap: 10, padding:5, alignItems:"center",}}>
                    <MHeading>
                        4 fans
                    </MHeading>
                    <View style={{display:"flex", flexDirection:"row", gap:10}}>
                        {down}
                        <MyText>
                            -25%
                        </MyText>
                    </View>
                    <MyText>
                        last 7days
                    </MyText>
                </View>
                <View style={{width:"50%", gap: 10, padding:5, alignItems:"center",}}>
                    <MHeading>
                        4 fans
                    </MHeading>
                    <View style={{display:"flex", flexDirection:"row", gap:10}}>
                        {up}
                        <MyText>
                            +5%
                        </MyText>
                    </View>
                    <MyText>
                        last 7days
                    </MyText>
                </View>
            </View>
        </View>
    );
}

export default MoniterCard;