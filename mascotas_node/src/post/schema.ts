"use strict";

import * as mongoose from "mongoose";

export interface IPost extends mongoose.Document{
    id?:string;
    profile: mongoose.Schema.Types.ObjectId;
    timestamp?: Number;
    image?: string;
    petId:mongoose.Schema.Types.ObjectId;
    message?: string,
}

export let PostSchema = new mongoose.Schema({
    profile:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Profile",
        required: "Perfil requerido"
    },
    timestamp:{
        type: Date,
        default: Date.now()
    },
    image:{
        type: String,
        ref: "Image"
    },
    petId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pet",
        required: "Mascota requerida"
    },
    message:{
        type: String,
        default:"",
    },
    enabled:{
        type: Boolean,
        default:true
    }
}, {collection: "posts"});

export let Post = mongoose.model<IPost>("Post", PostSchema);