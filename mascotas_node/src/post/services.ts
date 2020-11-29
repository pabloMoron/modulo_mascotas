"use strict";
import { IPost, Post } from "./schema";
import * as profileService from "../profile/service";
import * as imageService from "../image/service"
const mongoose = require("mongoose");


export async function create(userId:string,body: IPost):Promise<IPost>{
    try{
        let createdPost:IPost=new Post();
        let profileId= await profileService.read(userId);
        let createdImage= await imageService.create({image: body.image});

        createdPost.profile=mongoose.Types.ObjectId.createFromHexString(profileId);
        createdPost.image=createdImage.id;
        createdPost.pet=body.pet;
        createdPost.message=body.message;

        await createdPost.save();
        return Promise.resolve(createdPost);
    }catch(error){
        return Promise.reject(error);
    }
}