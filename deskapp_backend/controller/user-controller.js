const User = require('../model/User.js');
const signup = async (req,res) =>{
    const  {
        employeeName,
        employeeEmail,
        password,
        confirmPassword
    } = req.body;  
    try{
        const user = await User.create({
            employeeName,
            employeeEmail,
            password,
            confirmPassword
        });
        if(!user){
            return res.status(400).json({error: "Could not create user"});
        }
        return res.status(200).json(user);
    }catch(error)
    {
        return res.status(500).json({errors: "An error occurred"})
    }
}

const signin = async (req,res) =>{
    const {
        employeeEmail,
        password
    } = req.body;
    try{
        const user = await User.findOne({employeeEmail : employeeEmail});
        console.log(user);
        if (!user){
            return res.status(400).json({error:"User not found"})
        }
        const match = password === user.password;
        if(!match){
            return res.status(400).json({error:"Wrong password"});
        }
        res.status(200).json(user);
    }catch(error){
        return res
        .status(500).json({error:"An error occurred"})
    }
}

module.exports = { signup, signin };