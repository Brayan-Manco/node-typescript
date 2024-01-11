import { Router } from 'express';
import  RouterUser  from '../routers/user';

const RouterConfig = ( router: Router) => {
    router.use('/user', RouterUser)
}

export default RouterConfig;