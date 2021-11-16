module.exports={
    addCustomerPage:(req,res)=>{
        res.render("add-customer.ejs");
    },
    addCustomer:(req,res)=>{
        console.log("Add customer form", req.body);

        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let phone = req.body.phone;
        let address_city = req.body.address_city;
        let address_state = req.body.address_state;
        let address_country_zip = req.body.address_country_zip;
        let notes = req.body.notes;
        let item_purchased = req.body.item_purchased;
        let quantity = req.body.quantity;
        let price = req.body.price;

        let uploadedFile = req.files.image;
        let image_name = uploadedFile.name;
        let fileExtension = uploadedFile.mimetype.split('/')[1];
        image_name = last_name + "." + fileExtension;

        if (uploadedFile.mimetype === 'image/png' || uploadedFile.mimetype === 'image/jpeg' || uploadedFile.mimetype === 'image/gif') {
            uploadedFile.mv(`public/assets/images/${image_name}`, (err) => {
                if (err) {
                    return res.status(500).send(err);
                }
                let last_name = req.body.last_name;
                let query = "INSERT INTO `customers` (first_name, last_name, email, phone, address_city, address_state, address_country_zip, notes, item_purchased, quantity, price, image) VALUES ('" + first_name + "','"
                    + last_name + "','" + email + "','" + phone + "','" + address_city + "','" + address_state + "','" + address_country_zip + "','" + notes + "','" + item_purchased + "','" + quantity + "','" + price + "','" + image_name + "')";
                console.log(" query ", query);

                db.query(query, (err,response)=>{
                    if(err){
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                })
            })
        }else{

        }
    
      
    },

    editCustomerPage:(req,res) => {

        let customerId = req.params.id;
        let query = "SELECT * FROM `customers` WHERE id='"+ customerId +"'";
  
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            console.log(" data !!!", result[0]);

            res.render('edit-customer.ejs', { customer: result[0] });

        });

    },


    editCustomer:(req,res) => {

        let customerId = req.params.id;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let email = req.body.email;
        let phone = req.body.phone;
        let address_city = req.body.address_city;
        let address_state = req.body.address_state;
        let address_country_zip = req.body.address_country_zip;
        let notes = req.body.notes;
        let item_purchased = req.body.item_purchased;
        let quantity = req.body.quantity;
        let price = req.body.price;
        

        let query = "UPDATE `customers` SET `first_name` = '" + first_name + "', `last_name` = '" + last_name + "', `email` = '" + email + "', `phone` = '" + phone + "', `address_city` = '" + address_city + "', `address_state` = '" + address_state + "', `address_country_zip` = '" + address_country_zip + "', `notes` = '" + notes + "', `item_purchased` = '" + item_purchased + "', `quantity` = '" + quantity + "', `price` = '" + price + "' WHERE `id` = '" + customerId + "'"; 

        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            console.log(" data !!!", result[0]);

            res.redirect('/');

        });

    },

    deleteCustomer:(req,res) => {
        const fs = require('fs');
        let customerId = req.params.id;
        let customerImageQuery = "SELECt `image` FROM `customers` WHERE `id`='"+ customerId +"'";
        let deleteCustomerQuery = "DELETE FROM `customers` WHERE `id`='"+customerId+"'";
        db.query(customerImageQuery, (err, result) => {
            let customerImage = result[0].image;
            fs.unlink(`public/assets/images/${customerImage}`, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                db.query(deleteCustomerQuery, (err, result) => {
                    if (err) {
                        return res.status(500).send(err);
                    }
                    res.redirect('/');
                })
            })
        })
    }
};