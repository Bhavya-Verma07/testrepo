const express= require("express");
const app = express();


// profile information using params// : is used while writing api
app.get("/personalinfo/:id",(req,res)=>{
    try{
        let name=req.params.id;
res.json
({success:true, data: `data of username ${name} `,
});
    }
 catch(error){
    res.status(404).json({success:false});
 }
});


//code for creating server
let port =5000;
app.listen(port, ()=> console.log(`server is running at ${port}`));



//filtering using queries   // sent after writing ? and assigning variables. No extra thing on backend route

app.get("/filters", (req, res) => {
    try {
      let page = req.query.page;
      let brand = req.query.brand;
      let price = req.query.price;
  
      res.json({
        success: true,
        data: `Data of page number ${page} of ${brand} and price= ${price} `,
      });
    } catch (error) {
      res.status(404).json({ success: false });
    }
  });



  app.get("/shirts", (req, res) => {
    try {
      let color = req.query.color;
      let brand = req.query.brand;
      let price = req.query.price;
  
      res.json({
        success: true,
        data: `data of ${color} colored shirt of ${brand} and price= ${price} `,
      });
    } catch (error) {
      res.status(404).json({ success: false });
    }
  });


  app.get("/books", (req, res) => {
    try {
      let subject = req.query.subject;
      let chapter = req.query.chapter;
      let topic = req.query.topic;
  
      res.json({
        success: true,
        data: `description of ${topic} is in unit ${chapter} of ${subject} `,
      });
    } catch (error) {
      res.status(404).json({ success: false });
    }
  });