import { Router } from 'express';
import productRouter from '../routers/pruductRouter';


// configuracion de las rutas
const RouterInventory = ( router: Router) => {
    router.use('/product', productRouter);
}

export default RouterInventory;