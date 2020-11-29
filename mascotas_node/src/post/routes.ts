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

    app.route("v1/posts/:postId")

 }

 async function create(req:ISessionRequest, res: express.Response) {
     const result=await service.create(req.user.user_id,req.body);
     res.json({
         id:result.id
     });
 }

 async function findPosts(req:ISessionRequest, res: express.Response) {
     res.json({status:200});
 }