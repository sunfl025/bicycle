import { View, Text, TouchableOpacity, FlatList,Image } from 'react-native'
import React from 'react'

const Screen_02 = () => {
  const array = [
    {
        id:1,
        src:require('../assets/xedap.png'),
        name:"Pinarello",
        price:1800,


    },
    {
        id:2,
        src:require('../assets/xedap1.png'),
        name:"Pina Mountai",
        price:1700,


    },
    {
        id:3,
        src:require('../assets/xedap2.png'),
        name:"Pina Bike",
        price:1500,


    },
    {
        id:4,
        src:require('../assets/xedap3.png'),
        name:"Pinarello",
        price:1900,


    },
    {
        id:5,
        src:require('../assets/xedap.png'),
        name:"Pinarello",
        price:2700,


    },
    {
        id:6,
        src:require('../assets/xedap.png'),
        name:"Pinarello",
        price:1350,


    },

]
  return (
    <View style={{flex:1,padding:10}}>
      <Text style={{fontFamily:"Ubuntu",fontWeight:700,fontSize:28,marginTop:10,color:"#E94141"}}>The world’s Best Bike</Text>
      <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:30}}>
         <TouchableOpacity style={{width:99,height:32,borderRadius:5,borderColor:"#E9414187",borderWidth:1,justifyContent:"center",alignItems:"center",}}>
            <Text style={{fontFamily:"Voltaire",fontSize:20,fontWeight:400,color:"#E94141"}}>All</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:99,height:32,borderRadius:5,borderColor:"#E9414187",borderWidth:1,justifyContent:"center",alignItems:"center",}}>
            <Text style={{fontFamily:"Voltaire",fontSize:20,fontWeight:400,color:"#BEB6B6"}}>RoadBike</Text>
         </TouchableOpacity>
         <TouchableOpacity style={{width:99,height:32,borderRadius:5,borderColor:"#E9414187",borderWidth:1,justifyContent:"center",alignItems:"center",}}>
            <Text style={{fontFamily:"Voltaire",fontSize:20,fontWeight:400,color:"#BEB6B6"}}>Mountain</Text>
         </TouchableOpacity>
      </View>
      <View style={{alignItems:"center",justifyContent:"center",marginTop:"30px"}}>
            <FlatList numColumns={2} data={array} renderItem={({item})=> {
               
                return (
                    <TouchableOpacity style={{width:167,height:200,backgroundColor:"#F7BA8326",margin:10,justifyContent:"center",alignItems:"center"}}>
                         <Image source={item.src} style={{width:135,height:127}} resizeMode="contain"></Image>
                         <Text style={{fontFamily:"Voltaire",fontSize:20,fontWeight:400}}>{item.name}</Text>
                         <View style={{flexDirection:"row",marginTop:5}}>
                             <Image source={require('../assets/$.png')} style={{width:9,height:25}} resizeMode='contain'></Image>
                             <Text style={{fontFamily:"Voltaire",fontSize:20,fontWeight:400}}>{item.price}</Text>
                         </View>
                    </TouchableOpacity>
    
                    )
                     
            }} >
                

            </FlatList>
      </View>
    </View>
  )
}

export default Screen_02