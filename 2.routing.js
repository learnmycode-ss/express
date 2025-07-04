const express = require('express');

const app =express();
const port = 3000;
app.set('view engine', 'ejs');


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  // res.json({
  //   name: "solarkits",
  //   age: 25,
  //   city: "New York"
  // });
  const user =[ {
    name: "solarkits",
    age: 25,
    city: "New York"
  },
  {
    name: "solarkits2",
    age: 30,
    city: "Los Angeles"
  }
];
// res.json(user);
res.jsonp(user);
});
app.get('/about', (req, res) => {
  // res.redirect('/page/users');
  // res.redirect('http://localhost:3000/page/users');
  res.redirect(301,'page/users');
  // res.send('<h1>qbout page</h1>');
});
app.get('/page/users', (req, res) => {
  res.send('<h1>users page</h1>');
});
app.get('/text.txt', (req, res) => {
  res.send('This is a text file');
});
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
   console.log(req.params);
  res.send(`<h1>User ID: ${userId}</h1>`);
});
app.get('/search',(r,res)=>{
  res.send(r.query);
})
// app.get('/download', (req, res) => {
//   res.sendFile('./agreement_gujarati','data.pdf')  
    
// });

app.use(express.json());
app.use(express.urlencoded({extended : false})) //form data accept

app.post('/test',(r,res)=>{
  // res.send(r.body);
  // res.send(r.hostname)
  res.send(r.ip);
  console.log(r);
})
