const express = require("express");
const app = express();
const port = 3001;

app.listen(port, () => {
  console.log("Server is running on http://localhost:" + port);
});

app.get("/", (req, res) => {
  res.send("<h1>Welcome to the Home Page</h1>");
});

app.get("/normaljson", (r, res) => {
  // res.send({
  //     name: "solarkits",
  //     age: 25,
  //     city: "New York"
  // });
  res.send(["apple", "banana", "cherry"]);
});
app.get("/json", (req, res) => {
  //   res.json({
  //     name: "solarkits",
  //     age: 25,
  //     city: "New York"
  //   });
  res.json(["apple", "banana", "cherry"]);
});

app.get("/jsonp", (req, res) => {
  const user = [
    {
      name: "solarkits",
      age: 25,
      city: "New York",
    },
    {
      name: "solarkits2",
      age: 30,
      city: "Los Angeles",
    },
  ];
  res.jsonp(user);
});
function aboutPage(req, res) {
  // res.redirect('/page/users');
  // res.redirect('http://localhost:3000/page/users');
  res.redirect(301, "page/users");
  // res.send('<h1>qbout page</h1>');
}
app.get("/user", aboutPage);

app.get("/page/users", (req, res) => {
  res.send("<h1>users page</h1>");
});
app.get("/redirect/1", (req, res) => {
//   res.redirect("https://sharadsavaliya.site");
//   res.redirect(301,"https://sharadsavaliya.site"); //permanent redirect
//   res.redirect(302,"https://sharadsavaliya.site"); //temporary redirect
    res.redirect(".."); // Go back to the previous page
});
// render start
app.set('view engine', 'ejs');

app.get("/render", (req, res) => {
  //npm i ejs 
//   and make views folder and create user.ejs file in it

  res.render('user');
});
// render end
app.get("/download",(r,res)=>{
    res.download('./agreement_gujarati.pdf', 'filename.pdf');
});
app.get("/sendfile", (req, res) => {
//   res.sendFile(__dirname + "/agreement_gujarati.pdf"); //releted path
res.sendFile("agreement_gujarati.pdf", { root: __dirname }); //absolute path 
});
app.get("/end",(req, res) => {
    res.write("Hello, this is a response that will be ended soon.\n");
    res.write("This is the second line of the response.\n");
    res.end(); 
    res.write("This is the second line of the response.\n"); // This line will not be executed because res.end() has already been called

});
app.get("/error", (req, res) => {
    res.status(404).send("This is a custom error message for 404 Not Found");
    // res.status(500).send("This is a custom error message for 500 Internal Server Error");
    // res.status(403).send("This is a custom error message for 403 Forbidden");
    // res.status(400).send("This is a custom error message for 400 Bad Request");
    //status 400 = Bad Request
    //status 403 = Forbidden   
    //status 404 = Not Found
    //status 500 = Internal Server Error
    //status 200 = OK
    //status 201 = Created
    //status 204 = No Content
});
app.get("/check",(req,resp)=>{
    console.log(resp.headersSent); // false because headers are not sent yet
    resp.send("Hello, this is a response.");
    console.log(resp.headersSent); // true because headers are sent after calling send()
})
app.get("/value",(req, res) => {
    res.set("custom-header","hello 123"); // Set a custom header
    console.log(res.get("custom-header"));  // Get the value of the custom header
    res.send("Check the console for the custom header value.");
});

