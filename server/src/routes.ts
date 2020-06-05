import express from 'express';
import { celebrate, Joi} from 'celebrate';
import multer from 'multer';
import multerConfig from './config/multer';
import knex from './database/connection';

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);


const pointsController = new PointsController;
const itemController = new ItemsController;

routes.get('/items', itemController.index );

routes.post(
    '/points',
    upload.single('image'),
    celebrate({
        body: Joi.object().keys({
            name: Joi.string().required(), 
            email: Joi.string().required().email(), 
            whatsapp: Joi.number().required(), 
            latitude: Joi.number().required(), 
            longitude: Joi.number().required(), 
            cidade: Joi.string().required(),
            uf: Joi.string().required().max(2),
            items: Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create 
    );

routes.get('/points/:id', pointsController.show );

routes.get('/points', pointsController.index );


export default routes;

//ANOTAÇÕES

// Rota: Endereço completo requisição
// Recurso: QUal entidade estamos acessando sistema

// GET: Buscar uma ou mais informações do back-end
// POST: Criar nova informação no back-end
// PUT: Atualizar informação existente back-end
// DELETE: Remover infomrmação back-end

//Request Param : Parametros que vem na propria rota e identificam um recurso
//Query Param : Parametros que vem na propria rota geralmente opcionais para filtros, paginação
//Request Body : Parametros para criação/atualização informações

// const users = [
//     'Diego',
//     'Ane',
//     'Paul'
// ];

// app.get('/users', (req, res) => {
//     const search = String(req.query.search);

//     const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

//     return res.json(filteredUsers);
// });

// app.get('/users/:id', (req, res)=>{
//     const id = Number(req.params.id);
//     const user = users[id];
//     return res.json(user);
// });

// app.post('/users', (req,res) =>{
//     const data = req.body;

//     console.log(data);

//     const user ={
//         name: data.name,
//         email: data.email
//     };

//     return res.json(user);
// });