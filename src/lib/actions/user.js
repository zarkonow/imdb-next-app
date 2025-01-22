import { connect } from "mongoose"
import User from "../models/user.model";

export const createOrUpdateUser = async (
    clerkId,
    email,
    firstName,
    lastName,
    profilePicture
   
) => {
try {
    await connect();
    const user = await User.findOneAndUpdate(
        { clerkId },
        {
            $set: {
                email,
                firstName,
                lastName,
                profilePicture,
            },


},{upsert: true, new: true}
    );
    return user;
}catch (error) {
    console.log("Error creating or updating user: ", error)
    
} 
}

export const deleteUser = async (id) => {
    try {
        await connect();
        await User.findByIdAndDelete(id);
    } catch (error) {
        console.log("Error deleting user: ", error);
        
    }
}