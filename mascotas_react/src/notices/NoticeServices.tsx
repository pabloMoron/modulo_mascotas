import axios, { AxiosError } from 'axios'
import { environment } from '../app/environment/environment';
import { logout } from '../user/userService';

export default async function FindAvatar():Promise<string>{
    try{
        const res = (await axios.get(environment.backendUrl+'/v1/profile/avatar/')).data;
        return Promise.resolve(environment.backendUrl + "/v1/image/" + res.avatar);
    }catch(err){
        if((err as AxiosError).code==="401"){
            void logout();
        }
        return Promise.reject(err)
    }
}
