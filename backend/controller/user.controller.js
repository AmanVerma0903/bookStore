import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const  signUp = async(req,res)=>{
    try{
        const {fullname, email, password} =  req.body;
        const user =  await User.findOne({email});

        if(user){  //user pehle se regsitered hai 
            return res.status(400).json({message:"User already exists"});
        }
             const hashedPassword = await bcrypt.hash(password, 10); //hashing the password
            //10 is the salt rounds, it determines how many times the password will be hashed
            //more salt rounds means more security but also more time to hash
             const newUser = new User({
                fullname: fullname,
                email: email, 
                password: hashedPassword
            });  
            await newUser.save(); //save hamare database me mtlb User me hoga save
         res.status(200).json({message : "User registered successfully",newUser:  {
            _id: newUser._id,
            fullname: newUser.fullname,
            email: newUser.email,
    
         }});        
         

       
        }
        
        
    
    catch(error){
        console.log(error);
       
    }

}


export const login = async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        const isPasswordValid = await bcrypt.compare(password, user.password); //compare the password with the hashed password (password is the password send by the user and user.password is the hashed password stored in the database)
        if(!user || !isPasswordValid){
            return res.status(400).json({message: "Invalid email or password"});
        }
        res.status(200).json({message: "Login successful", user:{
            _id: user._id,
            email: user.email, 
            password: user.password,           
        }})

    } catch(error){
        console.log(error);
        res.send(400).json({message:"Internal server error"});
    }
};