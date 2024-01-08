import PERSON from '../models/person.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.TOKEN;

export const register = async (req, res) => {
    
    try{
        const { name, email, password} = req.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newPerson = new PERSON({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newPerson.save();
        return res.status(201).json(user);
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error: err});
    }
}

export const login = async (req, res) => {
    try{
        const { email, password } = req.body;
        const user = await PERSON.findOne({email});   
        if(!user) return res.status(404).json({message: "User not found"});
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) return res.status(401).json({message: "Wrong password"});
        const token = jwt.sign({id: user._id}, TOKEN, {expiresIn: "1h"});
        delete user.password;

        return res.status(200).json({user: user, token: token});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error: err});
    }
}