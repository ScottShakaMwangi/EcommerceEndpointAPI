import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let products = [{
    "title": "trousers",
    "discription": "men trousers",
    "image": "jaydendel@gmail.com",
    "categories": "men",
    "size":"midium",
    "colour":"blue", 
    "price":"500"
}]

router.get('/', (req, res) => { 
    res.send(products);
});

router.post('/', (req, res) => {
const product = req.body;
  
products.push({ ...product, id: uuidv4() });

res.send(`products with the name ${product.title} added to the database!`);
});


router.get('/:id', (req, res) => {
    const { id } = req.params;

    const foundProduct = products.find((product) => product.id = id);

    res.send(foundProducts);
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;


    products = products.filter((product) => product.id !== id)
    res.send(`products with the id ${id} deleted from the database.`)
});

router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const { title, discription, image, categories, size, colour, price } = req.body;

    const product = products.find((product) => product.id = id);

    if(title) products.title = title;
    if(discription) products.discription = discription;
    if(image) products.image = image;
    if(categories) products.categories = categories;
    if(size) products.size = size;
    if(colour) products.colour = colour;
    if(price) products.price = price;

    res.send(`products with the id ${id} has been updated.`);
})

export default router;