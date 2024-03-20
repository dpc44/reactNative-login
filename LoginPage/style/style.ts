import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      backgroundColor: "#3499dc", 
      height:'100%', 
      width:'100%', 
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },
    heading1:{
        fontSize:20,
        fontWeight:'bold',
        marginLeft:5,
    },
    container2:{
        backgroundColor:'white',
        width:250
    },
    button2:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2096f3',
        marginBottom: 10,
        marginRight:10,
        marginLeft:10,
        paddingTop:5,
        paddingBottom:5
    },
    txtbutton2:{
        textAlign:'center'
    },
    marginx:{
        marginRight:10,
        marginLeft:10
    },
    shadow:{
        shadowColor:'#000',
        shadowOffset:{
          width:0,
          height:2
        },
        shadowOpacity:0.25,
        shadowRadius:3.84,
        elevation:5
      },
  });