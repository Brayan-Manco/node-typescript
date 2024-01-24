import { Router } from 'express';
import productRouter from '../routers/pruductRouter';

const RouterInventory = ( router: Router) => {
    router.use('/product', productRouter);
}

export default RouterInventory;