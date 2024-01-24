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
        // this.dbConnect();
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

    // ejemplo de conexion de datos 

    // async dbConnect() {
    //     try {
    //         await sequelize.sync();
    //         console.log('Conexión Exitosa');
    //     } catch (error) {
    //         console.error('Unable to connect to the database:', error);
    //     }
    // }
}

export default Server;