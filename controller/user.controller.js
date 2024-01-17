const User = require('./../model/user.model')


const SignUp = async(req,res)=>{
   try {
     const { name, email, password } = req.body;
     const exitinguser = await User.findOne({ email: email });
     if (exitinguser) {
       return res.json({ msg: "You are already SignUp" });
     }
     if (!name || !email || !password) {
       return res.json({ msg: "Please enter all the details" });
     } else {
       const user = new User({
         name: name,
         email: email,
         password: password,
       });
       const save = await user.save();
       if (!save) {
         return res.json({ msg: "User not save technical error" });
       } else {
         return res.json({ msg: "User SignUp successfully" });
       }
     }
   } catch (error) {
    return res.json({msg:"SignUp error"})
   }
}
const Login = async(req,res)=>{
  try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.json({ msg: "All fields are required" });
      }
      const user = await User.findOne({
        email: email,
        password: password,
      });
      if (!user) {
        return res.json({ msg: "Incorrect email and password" });
      } else {
        return res.json({ msg: "User Login successfully" });
      }
  } catch (error) {
    return res.json({msg:"Login error"});
  }
}

const getUserById = async (req,res) =>{
    
    try {
        const { id } = req.params;
        console.log("id",id);
        const user = await User.findById(id)
        console.log("user",user);
        if(!user){
           return res.json({msg:"User note found"});
        }else{
            return res.json({user});
        }
        
    } catch (error) {
        return res.json({ msg: "userById error" });
    }
}

module.exports = {
    SignUp,
    Login,
    getUserById
}