import React, { Component } from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button =(props) =>{
    const {buttonStyle,textStyle} = styles;
    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>

            <Text style={textStyle}> 
            {props.children}
            </Text>

        </TouchableOpacity>
    )
}

const styles ={
    textStyle:{
        // alignSelf:'center',
        //  textAlign:'center',
         borderColor:'#007aff',
          borderRadius:4,
        color:'#007aff',
        fontSize:20,
        fontWeight:'600',
        paddingTop:10,
        paddingBottom:10,
        paddingLeft:170
    },
    bottonStyle:{
        // alignSelf:'stretch',
        //  backgroundColor:'#000',
        //  marginLeft:5,
        //  marginRight:5,
        //  flex: 4,
        //  justifyContent: 'center',
        // marginHorizontal: 16,
        // marginTop:10,
        // borderColor:'#000',
        // borderWidth:1
    }
}

export default Button;