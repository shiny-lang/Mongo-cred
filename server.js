const exp=require("express");
const app=exp();
const body=require("body-parser");
app.listen(3000,()=>{'Listening,shiny'})
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/new",{ useNewUrlParser: true }).catch((err=>{console.log(err)}))
module.exports=mongoose;
var registerRouter=require("./routes/registerRouter");
var homeRouter=require("./routes/homeRouter");
var submitRouter=require("./routes/submitRouter");
var loginRouter=require("./routes/loginRouter");
app.use(body.json())
app.use('/',homeRouter)
app.use('/login',loginRouter)
app.use('/register',registerRouter)
app.use('/submit',submitRouter)

app.use((req,res)=>

{
    res.statusCode=404;
    res.send("file not found")
})
/*
const fruitSchema=new mongoose.Schema({
    name:String
    rating:Number,
    review:String
});
const fruit=mongoose.model("Fruit",fruitSchema);
create table in the database with name Fruit and schema fruitSchema taken into reference fruit
const Fruit=new fruit(  //create record in the Fruit table
    {
        name:"Apple",
        rating:7,
        review:"nice"
    }
);
fruit.insertMany([{name:"banana",rating:8,review:"great"},{name:"mango",rating:8,review:"great"}])
fruit.find((err,data)=>
{
    if(err)
    {
        console.log("unsuccessful");
    }
    else
    {
        var len=data.length;
        for(var i=0;i<len;i++)
        {
            console.log(data[i].name)
        }
    }

}
);
const orange=new fruit(
    {
        name:"pineapple",
        rating:"10",
        review:"great"
    }
)
orange.save();
//database2
const peopleSchema=new mongoose.Schema({
    pname:String,
    age:Number,
    Fruit:fruitSchema
});
const people=mongoose.model("people",peopleSchema);
people.insertMany([{pname:"john",age:32},{pname:"toy",age:40}])
const person=new people(
    {
        pname:"Shiny",
        age:30,
        Fruit:orange
    }
)
person.save();



k.listen(3000,()=>
{
 console.log("listen to the request");
});
k.use(body.json());
k.use('/contact',contactRouter);
k.use('/about',aboutRouter);
k.use('/',indexRouter)
k.use((req,res)=>{
    res.statusCode=404;
    res.send("file not found")
});






/*
k.get("/",(req,res)=>{
    res.send("<h1>hello world!</h1>")
});
k.get("/contact",(req,res)=>
{
    res.send("contact me at veronica@gmail.com");
});
k.get("/about",(req,res)=>{
    res.send("hi this is about me page");
});
k.post("/info",(req,res)=>{
    console.log(req.body.name);
    console.log(req.body.age);
})
*/
