import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen_01 = () => {
  return (
    <View style={{flex:1,alignItems:"center"}}>
      <Text style={{fontFamily:"VT323",fontWeight:400,fontSize:"26px",marginTop:"30px"}}>A premium online store for </Text>
      <Text style={{fontFamily:"VT323",fontWeight:400,fontSize:"26px"}}>sporter and their stylish choise</Text>
      <View style={{width:"359px",height:"358px",borderRadius:50,backgroundColor:"#E941411A",marginTop:"20px",alignItems:"center",justifyContent:"center"}}>
        <Image source={require('../assets/xedap.png')} style={{width:292,height:270}}></Image>

      </View>
      <Text style={{fontFamily:"Ubuntu",fontWeight:700,fontSize:26,marginTop:10}}>POWER</Text>
      <Text style={{fontFamily:"Ubuntu",fontWeight:700,fontSize:26}}>BIKE SHOP</Text>
      <TouchableOpacity style={{width:340,height:61,backgroundColor:"#E94141",borderRadius:30,justifyContent:"center",alignItems:"center",marginTop:50}}>
            <Text style={{fontFamily:"VT323",fontWeight:400,fontSize:"26px",color:"#FEFEFE"}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Screen_01