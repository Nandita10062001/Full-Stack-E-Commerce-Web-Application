import { comparePassword, hashPassword } from "../helpers/auth_helper.js";
import user_model from "../models/user_model.js";
import JWT from 'jsonwebtoken';

export const registerController = async(req,res) => {
    try{
        const {name, email, password, phone, address} = req.body;
        //validations
        if(!name){
            return res.send({error: 'Name is Required'});
        }
        if(!email){
            return res.send({error: 'Email is Required'});
        }
        if(!password){
            return res.send({error: 'Password is Required'});
        }
        if(!phone){
            return res.send({error: 'Phone is Required'});
        }
        if(!address){
            return res.send({error: 'Address is Required'});
        }
        //check user
        const existingUser = await user_model.findOne({email});
        //existing user
        if(existingUser){
            return res.status(200).send({
                success:true,
                message: 'This email is already registered, please login!',
            });
        }
        //register user
        const hashedPassword = await hashPassword(password);
        //save
        const user = await new user_model({
            name,
            email,
            phone,
            address,
            password:hashedPassword,
        }).save();

        res.status(201).send({
            success:true,
            message: 'User has been registered successfully',
            user
        });

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in Registration',
            error
        });
    }
};

//POST LOGIN
export const loginController = async(req,res) => {
    try{
        const {email, password} = req.body;
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message: 'Invalid Email or Password'
            })
        }
        //check user
        const user = await user_model.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message: 'Email is not registered'
            });
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            return res.status(200).send({
                success:false,
                message: 'Invalid Password'
            });
        }
        //token creation
        const token = await JWT.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: '7d',
        });
        res.status(200).send({
            success:true,
            message:'Login Successful!',
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                address:user.address,
            },
            token,
        });
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error in Login',
            error
        });
    }

};

//test controller
export const testController = (req,res) => {
    res.send('protected route');
}
