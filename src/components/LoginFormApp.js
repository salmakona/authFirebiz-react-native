import React, {Component} from 'react';
import firebase from 'firebase';
import {Text} from 'react-native';
import Button from './common/Button';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Input from './common/Input';
import Spinner from './common/Spinner';

class LoginFormApp extends Component{
    state ={email:'', password:'', error:'',error1:'',error2:'', loading:false};
    onButtonPress(){
        const {email,password} = this.state;
        this.setState({error:'',loading:true})
        this.setState({error1:'',loading:true})
        this.setState({error2:'',loading:true})
        // this.setState({loading:true})
        // firebase.auth().signInWithEmailAndPassword(email, password)
        // .then(() => {
        //     console.log('User account created & signed in!');
        //   })        
        // .cath(()=>{
        //     firebase.auth().createUserWithEmailAndPassword(email,password)
        //     .then(() => {
        //         console.log('authentication done !!!');
        //       })            
        //     .catch(()=>{
        //         this.setState({error:'Authentication Failed'})
        //     })
        // });
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                // Signed in 
                // ...
                // this.setState({error1:'Suceessfully Sing In'})
                this.onLoginSucess();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    // Signed in 
                    // ...
                    //this.setState({error2:'Account created'})
                    this.accountCreated()
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    this.onLoginFail()
                    // ..
                });
            });
    }

    renderButton(){
        if(this.state.loading){
            return <Spinner size="small" />
        }
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        )
    }

    accountCreated(){
        this.setState({error2:'Account created',error1:'',error:'',email:'',password:''})
    }

    onLoginSucess(){
        this.setState({
            email:'',
            password:'',
            loading:false,
            error:'',
            error2:'',
            error1:'Suceessfully Sing In'
        })
    }

    onLoginFail(){
        this.setState({error:'Authentication Failed',loading:false,error1:'',error2:''})
    }

    render(){
        return(
                <Card>
                    <CardSection >
                            <Input 
                                placeholder="User@gmail.com" label="Email" value={this.state.email} onChangeText={email=>this.setState({email})}/>
                    </CardSection>

                    <CardSection>

            <Input secureTextEntry placeholder="password" label="Password" value={this.state.password} onChangeText={password=>this.setState({password})}/>
                    </CardSection>

                    <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error1}
                    </Text>
                    <Text style={styles.errorTextStyle}>
                        {this.state.error2}
                    </Text>

                    <CardSection>
                       {this.renderButton()}
                    </CardSection>
                </Card>
        )
    }

}

const styles = {
    errorTextStyle:{
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
}

export default LoginFormApp;
