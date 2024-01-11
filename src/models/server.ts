import express, {Application, Router} from 'express';
import cors from "cors";
import RouterConfig from './routesConfig';
// import  RouterUser  from '../routers/user';

class Server {

    private app: Application;
    private port: string; 

    constructor (){
        this.app = express();
        this.port =  process.env.PORT || '3001';

        this.routes();
        this.mdlewares();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('aplicacion corrinedo en el puerto '+ this.port);
        })
    }

    routes(){
        const router = Router();
        RouterConfig(router);
        this.app.use(router);
        // this.app.use('/user', RouterUser)
    }

    mdlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
}

export default Server;