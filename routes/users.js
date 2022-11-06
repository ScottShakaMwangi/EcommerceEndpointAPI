import express from 'express';

const router = express.Router();

const users = [
   {
     FirstName: "Fidel",
    LastName: "Jayden",
    Email: "jaydendel@gmail.com",
    password: "1234"
   },

   {
    FirstName: "Scott",
    LastName: "Shaka",
    Email: "jaydendel@gmail.com",
    password: "1234"
   }
]

router.get('/', (req, res) => {
    console.log(users);
    res.send('Hello');
});

export default router;
