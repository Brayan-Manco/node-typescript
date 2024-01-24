import { Router } from 'express';
import { getProduct } from './controllers/product';


const RouterInventory = ( router: Router) => {
    router.use('/product', getProduct);
}

export default RouterInventory;