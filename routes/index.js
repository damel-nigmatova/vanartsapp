module.exports={
    getHomePage:(req,res)=>{

        let query = 'SELECT * FROM customers';
        db.query(query,(err,result)=>{
            res.render("index.ejs", { data: result });
        });
    }
};