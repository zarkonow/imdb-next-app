import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  email_addresses,
  first_name,
  last_name,
  image_url
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          email: email_addresses[0].email_address,
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("Error creating or updating user: ", error);
  }
};

export const deleteUser = async (id) => {
  try {
    await connect();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log("Error deleting user: ", error);
  }
};
