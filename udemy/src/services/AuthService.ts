import { User } from "../models/model";


export class AuthService {
    public async login( userName:string, password :string):Promise<User | undefined>{
        if (userName === 'functAwesome' && password === 'isawesome'){
            return{
                user : userName,
                email : 'functAwesome@rocks.dev'
            }
        } else{
            return undefined
        }
    }
}