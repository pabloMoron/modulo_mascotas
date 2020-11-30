import axios, { AxiosError } from 'axios'
import { Interface } from 'readline';
import { environment } from '../app/environment/environment';
import { logout } from '../user/userService';

export interface IPost{
    petId:string,
    timestamp?: string,
    id?:string,
    image?: string,
    message?: string,
    profileId?: string,
}

interface UploadPostId{
    Id:string
}

export interface IStory{
    //ImageId:string,
    Image: string,
    avatar: string,
    title: string,
}

export async function FindAvatar(): Promise<string> {
    try {
        const res = (await axios.get(environment.backendUrl + '/v1/profile/avatar/')).data;
        return Promise.resolve(environment.backendUrl + "/v1/image/" + res.avatar);
    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
        console.log(error)
        return Promise.reject(error)
    }
}


export async function UploadPost(payload:IPost): Promise<UploadPostId> {
    try {
        const res = (await axios.post(environment.backendUrl + '/v1/posts/',payload)).data as UploadPostId;
        return Promise.resolve(res);
    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
        console.log(error);
        return Promise.reject(error)
    }
}

export async function UploadStory() {
    try {

    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
        return Promise.reject(error)

    }
}


export async function FetchStories(page:number,limit:number,timestamp:number):Promise<Array<IPost>> {
    return []
}

export async function FetchPosts(page:number,limit:number,timestamp:number):Promise<any> {
    try {
        const result = (await axios.get(environment.backendUrl+`/v1/posts/?page=${page}&limit=${limit}&timestamp=${timestamp}`)).data as IPost[]
        return Promise.resolve(result);
    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
        return Promise.reject(error)        
    }
}