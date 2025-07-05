const express = require('express');
const app = express();
const port = 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json()); //json data receve to request
app.post('/',(r,s)=>{
    s.send(r.body);
    console.log(r);
})

app.use(express.urlencoded({extended: false})); //form data receve to request
app.put('/',(req,resp)=>{
    resp.send(req.body);
})
app.get('/aa',(r,resp)=>{
    let a="\n";
    resp.write(r.hostname + a);
    resp.write(r.ip + a) ;
    resp.write(r.ips + a);
    resp.write(r.method + a);
    resp.write("Check : "+r.originalUrl + a);
    resp.write(r.path + a);
    resp.write(r.route + a);
    // console.log(r.route.Route.path);
    resp.write(r.app + a);
    resp.write("Check : "+r.baseUrl+a);
    resp.write(r.protocol +a);
    resp.write(r.secure + a); //secure protocol use to return true
    resp.write("route: "+JSON.stringify(r.route)+a); //which route use (return as object)
    resp.end();
});
app.get('/ok',(q,r)=>{
    if(q.accepts('html')){
        r.send('<h1>Hello HTML</h1>')
    }else if(q.accepts('json')){
        r.json({
            name: "sharad",
            work: "Sunnovative"
        })
    }else if(q.accepts('xml')){
       r.send('<message>Hello XML</message>')
    }else{
        r.send('Contenet type not support')
    }
});
app.get('/headers',(r,res)=>{
    res.send(r.headers);
    // res.send(r.get('host'))
})
app.get('/is',(r,res)=>{
    if(r.is('application/json')){
        res.send("Valid JSON Data");
    }else if(r.is('text/html')){
        res.send("HTML Data");
    }else{
        res.status(400).send("Unsuppor Data");
    }
})