import React from "react";
import { User, UserAttribute } from "../models/model";
import { AuthService } from "../services/AuthService";
import { Link } from "react-router-dom";



interface ProfileState {
    userAttributes: UserAttribute[]
}
interface ProfileProps {
    user: User | undefined
    authService: AuthService
}

export class Profile extends React.Component<ProfileProps, ProfileState>{


    render(){

        let profileSpace
        if(this.props.user){
            profileSpace = <h3>Hello {this.props.user.userName}</h3>
        } else {
            profileSpace = <div>
                Please <Link to='/login'>login</Link> 
            </div> 
        }

        return(
            <div>
                Welcome to the Profile page!
                {profileSpace}
            </div>
        )
    }
}