import JWT from 'jsonwebtoken';
import user_model from '../models/user_model.js';

//Protected Routes Token-based next: on getting request, next is validated then response is sent this is what a middleware does here
export const requireSignIn = async (req,res,next) => {
    try{
        const decode = JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch(error){
        console.log(error);
    }
};

//admin access
export const isAdmin = async(req,res,next) => {
    try{
        const user = await user_model.findById(req.user._id);
        if(user.role !== 1){
            return res.status(401).send({
                success:false,
                message:'Unauthorized access',
            });
        }
        else{
            next();
        }
    }catch(error){
        console.log(error);
        res.status(401).send({
            success:false,
            error,
            message:'Error in Admin Middleware',
        });
    }
};