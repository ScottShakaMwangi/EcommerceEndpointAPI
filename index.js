import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

import productsRoutes from './routes/products.js';

import ordersRoutes from './routes/orders.js';

import cartsRoutes from './routes/carts.js';

const app = express ();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.use('/products', productsRoutes);

app.use('/orders', ordersRoutes);

app.use('/carts', cartsRoutes);


app.get('/', (req, res) => res.send('Hello from homepage'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))








