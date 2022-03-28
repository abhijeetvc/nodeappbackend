const express=require('express')
const cors=require('cors')

const app=express()
const port=8989

const corsOptions={
   origin: "http://localhost:3000"
}

app.use(cors(corsOptions))

app.use(express.json())

//endpoint
// app.get('/',(req,res)=>{
//   //  res.send('Hello From Server!!!')
//    res.send({status:200,message:"success"})
// })

// app.get('/check1/:name',(req,res)=>{
//      let name=req.params.name
//      let resObj={status:200,message:"success",data:name}
//      res.send(resObj)
//   })

// app.get('/getData',(req,res)=>{
//     let data={
//        firstName:'John',
//        lastName:'Doe',
//        city:'Pune'
//     }
//     let resObj={status:200,message:"success",result:data}
//     res.send(resObj)
//  })

// // POST
// app.post('/sendData',(req,res)=>{
//    const user=req.body
//    console.log(user);
//    res.send("Data Received Successfully!!!")
// })

const db=require("./app/model")

db.mongoose.connect(db.url)
.then(()=>{
    console.log('Connected to Mongo Database!!!');
})

require("./app/routes/user.routes")(app)

app.listen(port,()=>{
    console.log('Server Started!!!');
})


// Client/ReactApp --> Server/Node App --> Database/SQL/NoSQL
