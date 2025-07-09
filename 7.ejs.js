const express = require('express');

app = express();

app.set('view engine', 'ejs');

// app.set("views","./my-template"); //
let data =[
    {id: 1,name:"sharad",working: true},
    {id: 2,name:"dhaval",working: false},
    {id: 3,name:"ravi",working: true},
    {id: 4,name:"sham",working: false},
    {id: 5,name:"jigar",working: false},
]

app.get("/",(req,res)=>{
    res.render('index',{title : "HOME Page",MSG :"",items: ['apple','banana','cherry','demo'],data : data });
})
// ejs 2

app.use(express.urlencoded({extended: false}));
app.get('/form',(r,res)=>{
    res.render('form',{name : null,msg : null})
})
app.post('/submit',(r,res)=>{
    let name = r.body.name;
    let msg = r.body.msg;
    // res.send(r.body);
    res.send(`Hello ${name},<br>your msg is: <i>${msg}</i>`)
});
app.post('/form',(r,res)=>{
     let name = r.body.name;
    let msg = r.body.msg;
   res.status(201);
    res.render('form',{name : name,msg : msg});
})

app.use(express.static('public'));
app.get('/part',(r,res)=>{
    res.render('partials');
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

