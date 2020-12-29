// import libraries for making a component 
import React from 'react';
import {Text,View} from 'react-native';


// Make a component 
const Header = (props) =>{

    const {textstyle,viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textstyle}>{props.headerText}</Text>
        </View>
    );
}

const styles ={
    viewStyle:{
        backgroundColor:'#F8F8F8',
        justifyContent:'center',
        alignItem:'center',
        height:60,
        paddingTop:30,
        shadowColor:'#000',
        shadowOffset:{width:0,height:100},
        shadowOpacity:0,
        elevation:2,
        position:'relative'

    },
    textstyle:{
        fontSize:20,
        textAlign:'center'
    }
}


// Make the compoennt aviable to other parts of the app 
export default Header;