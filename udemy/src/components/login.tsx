import  React, { SyntheticEvent }  from "react";
import { User } from "../models/model";
import { AuthService } from "../services/AuthService";



interface LoginProps{
    authService: AuthService,
    setUser:(user: User) => void
}
interface LoginState{
    userName:string,
    password:string,
    loginAttempted:boolean,
    loginSuccessfull:boolean
}

interface CustomEvent {
    target: HTMLInputElement
}


export class Login extends React.Component<LoginProps, LoginState> {

    state: LoginState = {
        userName: '',
        password: '',
        loginAttempted: false,
        loginSuccessfull: false
    }

    private setUsername(event: CustomEvent) {
        this.setState({userName: event.target.value})
    }

    private setPassword(event: CustomEvent) {
        this.setState({password: event.target.value})
    }

    private async handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        this.setState({loginAttempted:true})
        const result = await this.props.authService.login(
            this.state.userName,
            this.state.password
            )
            if (result){
                this.setState({loginSuccessfull:true})
                this.props.setUser(result)
            } else {
                this.setState({loginSuccessfull:false})
            }
    }

    render(){
        let loginMessage:any;
        if(this.state.loginSuccessfull===true){
            loginMessage = "You have successfully logged in."
        } else if(this.state.loginAttempted === true){
            loginMessage = "Incorrect Username or Password."
        } else loginMessage = "";
        return(
            <div>
                <h2>Please Login</h2>
                <form onSubmit= {e => this.handleSubmit(e)}>
                    <input value= {this.state.userName} onChange= {e=> this.setUsername(e)}/> <br />
                    <input value= {this.state.password} type='password' onChange= {e=> this.setPassword(e)} /> <br />
                    <input type="submit" value= "Login" />
                </form>
                {loginMessage}
            </div>
        )
    }
}