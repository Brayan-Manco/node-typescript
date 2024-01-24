import express, {Application, Router} from 'express';
import cors from "cors";
import RouterInventory from './config/RouterConfig';

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
        RouterInventory(router);
        this.app.use(router);
    }

    mdlewares() {
        this.app.use(express.json());
        this.app.use(cors());
    }
}

export default Server;