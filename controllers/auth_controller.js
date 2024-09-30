import { comparePassword, hashPassword } from '../helpers/auth_helper.js';
import user_model from '../models/user_model.js';
import JWT from 'jsonwebtoken';

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address, answer } = req.body;
    //validations
    if (!name) {
      return res.send({ message: 'Name is Required' });
    }
    if (!email) {
      return res.send({ message: 'Email is Required' });
    }
    if (!password) {
      return res.send({ message: 'Password is Required' });
    }
    // Password validation: minimum 6 characters and at least 1 special character
    if (password.length < 6) {
      return res.send({
        message: 'Password must be at least 6 characters long',
      });
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      return res.send({
        message: 'Password must include at least 1 special character',
      });
    }
    if (!phone) {
      return res.send({ message: 'Phone is Required' });
    }
    // Check if the phone is a number and has exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
      return res.send({ message: 'Phone must be a valid 10-digit number' });
    }
    if (!address) {
      return res.send({ message: 'Address is Required' });
    }
    if (!answer) {
      return res.send({ message: 'Answer is Required' });
    }

    //check user
    const existingUser = await user_model.findOne({ email });
    //existing user
    if (existingUser) {
      return res.status(200).send({
        success: false,
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
      password: hashedPassword,
      answer,
    }).save();

    res.status(201).send({
      success: true,
      message: 'User has been registered successfully',
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Registration',
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: 'Invalid Email or Password',
      });
    }
    //check user
    const user = await user_model.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Email is not registered',
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: 'Invalid Password',
      });
    }
    //token creation
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.status(200).send({
      success: true,
      message: 'Login Successful!',
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in Login',
      error,
    });
  }
};

//forgotPasswordController

export const forgotPasswordController = async (req, res) => {
  try {
    const { email, answer, newPassword } = req.body;
    if (!email) {
      res.status(400).send({ message: 'Email is Required' });
    }
    if (!answer) {
      res.status(400).send({ message: 'Answer is Required' });
    }
    if (!newPassword) {
      res.status(400).send({ message: 'Please enter the New Password' });
    }
    //check
    const user = await user_model.findOne({ email, answer });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: 'Wrong Email or Answer',
      });
    }
    const hashed = await hashPassword(newPassword);
    await user_model.findByIdAndUpdate(user._id, { password: hashed });
    res.status(200).send({
      success: true,
      message: 'Password Updated Successfully',
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Somethign went Wrong',
      error,
    });
  }
};

//test controller
export const testController = (req, res) => {
  res.send('protected route');
};
