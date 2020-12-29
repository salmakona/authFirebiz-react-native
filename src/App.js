import React, {Component  } from "react";
import {View, Text, Button} from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Header from './components/common/Header';
import LoginFormApp from './components/LoginFormApp'
import Spinner from "./components/common/Spinner";

class  App extends Component {
    state = {loggedIn:null}
    componentWillMount() {
        var firebaseConfig = {
            apiKey: "AIzaSyBLT4JL1QMDChUezvRBj7n_lhfE6EE9T1Q",
            authDomain: "auth-d7ac6.firebaseapp.com",
            projectId: "auth-d7ac6",
            storageBucket: "auth-d7ac6.appspot.com",
            messagingSenderId: "321300534674",
            appId: "1:321300534674:web:69aad978b4bdcf864add4b",
            measurementId: "G-S6D9QKQ9GV"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({loggedIn:true});
            }else{
                this.setState({loggedIn:false});
            }

        });

    }

    renderContent(){
        switch(this.state.loggedIn){
            case true:
                return  (<Button
                style={{fontSize: 20, color: 'green'}}
                title="Log Out" onPress={()=>firebase.auth().signOut()}>
              </Button>
                )
            case false:
                return <LoginFormApp />;
            default:
                return <Spinner size="large"/>
        }
        
    }

    render(){
        return(
            <View>
                <Header headerText="Authentication" />
                <Text>An App</Text>
                {this.renderContent()}
            </View>
        )
    }
}

export default App;