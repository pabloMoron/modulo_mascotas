import axios, { AxiosError } from 'axios'
import { environment } from '../app/environment/environment';
import { logout } from '../user/userService';

export async function FindAvatar(): Promise<string> {
    try {
        const res = (await axios.get(environment.backendUrl + '/v1/profile/avatar/')).data;
        return Promise.resolve(environment.backendUrl + "/v1/image/" + res.avatar);
    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
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

export async function UploadPost() {
    try {

    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
        return Promise.reject(error)
    }
}

export async function FetchStories() {
    try {
        
    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
        return Promise.reject(error)        
    }
}

export async function FetchPosts() {
    try {
        
    } catch (error) {
        if ((error as AxiosError).code === "401") {
            void logout();
        }
        return Promise.reject(error)    }
}