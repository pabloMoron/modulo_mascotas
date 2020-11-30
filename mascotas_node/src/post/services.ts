"use strict";
import { IPost, Post } from "./schema";
import * as profileService from "../profile/service";
import * as imageService from "../image/service"
import * as error from "../server/error";
import { start } from "repl";

const mongoose = require("mongoose");


export async function create(userId: string, petID: string, body: IPost): Promise<IPost> {

    try {
        let createdPost: IPost = new Post();
        let prof = await profileService.read(userId);
        if (body.image != null && body.image != "") {
            let createdImage = await imageService.create({ image: body.image });
            createdPost.image = createdImage.id;
        }

        createdPost.profile = mongoose.Types.ObjectId.createFromHexString(prof.id);
        createdPost.petId = mongoose.Types.ObjectId.createFromHexString(petID);
        createdPost.message = body.message;
        createdPost.timestamp=Date.now();

        await createdPost.save();
        return Promise.resolve(createdPost);
    } catch (err) {
        console.log(err);
        return Promise.reject(err);
    }
}

export async function findById(postId: string): Promise<IPost> {
    try {
        const result = await Post.findOne({
            _id: mongoose.Types.ObjectId.createFromHexString(postId),
            enabled: true
        }).exec();
        if (!result) {
            throw error.ERROR_NOT_FOUND;
        }
        return Promise.resolve(result)
    } catch (err) {
        return Promise.reject(err);
    }
}

export async function FetchPostsByTimestamp(page: number, limit: number, timestamp: number): Promise<any> {
    let startIndex=(page-1) *limit;
    try {
        const posts=await Post.find({
            timestamp: { $lte: Date.now()}
        })
        .sort('-timestamp')
        .skip(startIndex)
        .limit(limit)
        .exec();
        
        return Promise.resolve(posts.map(post =>{
            return {
                timestamp: post.timestamp,
                message: post.message,
                id: post._id,
                image: post.image,
                profile: post.profile,
                petId: post.petId
            }
        }));
    } catch (err) {
        return Promise.reject(err);
    }
}