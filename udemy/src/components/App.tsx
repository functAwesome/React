import React from 'react';
import { User } from "../models/model";
import { AuthService } from "../services/AuthService";
import { Login } from "./login";


interface AppState {
  user: User | undefined
}

export class App extends React.Component<{ } , AppState>{

  private authService:AuthService = new AuthService();


  render(){
    return (        
      <div>App from Udemy works!
        <Login authService={this.authService} />
      </div>
    )
  }
}


