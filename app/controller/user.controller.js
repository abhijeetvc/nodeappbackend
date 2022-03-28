const db=require('../model')

const User=db.users

exports.create=(req,res)=>{

    console.log(req.body);
    const user=new User({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        city:req.body.city,
        email:req.body.email
    })

    user.save(user)
        .then(data=>{
            res.send(data)
        })
}