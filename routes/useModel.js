const mongoose=require("../server");
const mongooseEncryption=require("mongoose-encryption")
const userSchema=new mongoose.Schema(
{
    email:String,
    password:String
})
const secret="my secret."
userSchema.plugin(encrypt,{secret:secret,EncryptionField:["password"]})

module.exports=new mongoose.model('user',userSchema);
