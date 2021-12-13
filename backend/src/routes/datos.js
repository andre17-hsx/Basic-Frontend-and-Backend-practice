const {Router}=require('express');
const router = Router();

const {getDatos,getDato,postDato,putDato,deleteDato} = require ('../controllers/datosController.js');

router.route('/')
    .get(getDatos)
    .post(postDato);

router.route('/:id')
    .get(getDato)
    .put(putDato)
    .delete(deleteDato);

module.exports = router