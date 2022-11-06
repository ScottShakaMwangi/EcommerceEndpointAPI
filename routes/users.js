import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = []

router.get('/', (req, res) => { 
    res.send(users);
});

router.post('/', (req, res) => {
const user = req.body;
  
users.push({ ...user, id: uuidv4() });

res.send(`User with the name ${user.firstName} added to the database!`);
});

//users/2 => req.params {id: 2}

router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id = id);

    res.send(foundUser);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    // id to delete 123

    //Scott 123
    //Fidel 345

    users = users.filter((user) => user.id !== id)
    res.send(`user with the id ${id} deleted from the database.`)
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const user = users.find((user) => user.id = id);

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(email) user.email = email;
    if(password) user.password = password;
    
    res.send(`User with the id ${id} has been updated.`);
})

export default router;

