"user strict";

import * as express from "express";
import { onlyLoggedIn } from "../token/passport";
import { ISessionRequest } from "../user/service";
import * as service from "./services";


/**
 * Modulo para publicaciones de mascotas
 */

 export function initModule(app: express.Express){
    
    //rutas para los posts
    app.route("/v1/posts")
    .get(onlyLoggedIn, findPosts)
    .post(onlyLoggedIn, create)

    app.route("/v1/posts/:postId")
    .get(onlyLoggedIn, readById)

 }

 async function create(req:ISessionRequest, res: express.Response) {
     const result=await service.create(req.user.user_id,req.body.petId,req.body);
     res.json({
         id:result.id
     });     
    }

    /**
     * Paginacion basada en timestamp
     */
 async function findPosts(req:ISessionRequest, res: express.Response) {
    const page =Number(req.query.page);
    const limit=Number(req.query.limit);
    const timestamp=Number(req.query.timestamp);


    const result= await service.FetchPostsByTimestamp(page,limit,timestamp);
    let data={
        next:{
            nextPage:page+1,
            limit:limit
        },
        posts:result
    }
    res.json(data);
 }

 async function readById(req:ISessionRequest, res: express.Response){
     const result= await service.findById(req.params.postId);
     res.json({
        id:result._id,
        profileId:result.profile,
        message:result.message,
        petId: result.petId,
        timestamp:result.timestamp,
        image: result.image,
     })
 }