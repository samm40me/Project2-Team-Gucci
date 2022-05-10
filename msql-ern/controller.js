exports.createCustomer = (req, res) => {
    let customer = {};

    try{
        // Building Customer object from upoading request's body
        customer.firstname = req.body.firstname;
        customer.lastname = req.body.lastname;
        customer.address = req.body.address;
        customer.age = req.body.age;
    
        // Save to MySQL database
        Customer.create(customer, 
                          {attributes: ['id', 'firstname', 'lastname', 'age', 'address', "copyright"]})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}