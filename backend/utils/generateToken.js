import jwt from "jsonwebtoken"

const generateTokenandSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"1d"
    })
    res.cookie("jwt",token,{
        httpOnly:true,
        maxAge:1000*60*60*24,
        sameSite:"strict",
        secure:process.env.NODE_ENV !=="development"
    })
    return token;
}

export default generateTokenandSetCookie;