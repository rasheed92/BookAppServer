const jwt = require('jsonwebtoken');

function Admin(req, res, next) {
  //  check if there is a token
  console.log(req.headers.token)

  const token = req.body.token || req.headers.token
  console.log()
  if (token) {
    {
      //  decode the token and chekc if it's validate
      try {
        //  Get the payload from the jsonwebtoken

        let payload = jwt.verify(token, 'z3bool');
        console.log(payload.role)
        // res.status(200).send(payload);
        //  You can check the expiration if you want
        if (payload.role == 1) {
          next();
        }

      } catch (err) {
        res.status(400).send(err);
        console.log(err)
      }

    }

  } else {
    res.send('Sorry you are not A Admin');
  }
}


module.exports = Admin;