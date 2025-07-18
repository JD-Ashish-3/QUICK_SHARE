import bcrypt from 'bcrypt'
import userModel from '../models/userModel.js';
import { generateToken } from '../config/jwt.js';
import cloudinary from '../config/cloudinary.js';



export const signup = async(req,res)=>
{
    const {fullName,email,password,bio} = req.body;

    try {
        if(!fullName || !email || !password || !bio) 
            {
                return res.json({success:false, message:"Missing Details"})
            } 
         const user = await userModel.findOne({email}); 
         
         if(user)
         {
            return res.json({success:false, message:"Account already exists"})
         }
         const salt=await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password,salt);

         const newUser = await userModel.create({
            fullName,
            email,
            password: hashedPassword,
            bio
         });

         const token = generateToken(newUser._id)
         res.json({success:true, userData:newUser , token , message:"Account created successfully."})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }


//controller to login a user
}
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userData = await userModel.findOne({ email });

    if (!userData) {
      return res.json({ success: false, message: "User not found" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);

    if (!isPasswordCorrect) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

      const token = generateToken(userData._id)
         res.json({success:true, userData , token , message:"Login successfully."})
    } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
};

//controller to check if user is authenticated

export const checkAuth =(req,res)=>{
  res.json({success: true, user:req.user});
}

//controller to update user profile details

export const updateProfile = async(req,res)=>{
  try 
  {
    const {profilePic ,bio,fullName} = req.body;
    const userId = req.user._id;
    let updatedUser;

    if(!profilePic)
    {
      updatedUser = await userModel.findByIdAndUpdate(userId,{bio,fullName},{new:true});
    }
    else
    {
      console.log("profilePic length:", profilePic?.length);
      const upload = await cloudinary.uploader.upload(profilePic);
      updatedUser = await userModel.findByIdAndUpdate(userId,{profilePic:upload.secure_url,bio,fullName},{new:true});
    }
    res.json({success:true,user:updatedUser})
  } catch (error) {
        console.log(error.message);
        res.json({success:false,message:error.message})
    }
}

