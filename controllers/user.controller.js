exports.insert = (req, res) => {
    console.log(req);
    req.body.password = "pass$word";
    req.body.permissionLevel = 1;
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
 };