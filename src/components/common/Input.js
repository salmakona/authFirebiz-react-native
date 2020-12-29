import React, { Component } from 'react';
import {Text, TextInput,View} from 'react-native';

const Input =({label, value, onChangeText,placeholder,secureTextEntry}) =>{
    const {inputStyle,lableStyle, containerStyle} = styles;
    return(
        <View style={containerStyle}>
            <Text style={lableStyle}>
                {label}
            </Text>
             <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder ={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                
            /> 
     
        </View>
    )
   
}

const styles = {
    inputStyle :{
        color:'#000',
        fontSize:18,
        lineHeight:23,
        flex:4,
        borderWidth:1,
        borderColor:'#000'
       
    },
    lableStyle:{
        fontSize:18,
        flex:1
    },
    containerStyle:{
        height:40,
        flex:1,
        flexDirection:'row',
        align:'center'
    }

};


export default Input;