const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.post("/health-checkup", function(req, res)
{
    const kidneys = req.query.kidneys;
    const kidneysLength = kidneys.length();
    res.send("You have " + kidneysLength + "kidneys"); 
});

app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})