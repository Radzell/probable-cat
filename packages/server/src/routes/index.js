import { Router } from 'express';

const router = Router();
const catFile = require('../catfile.json');



router.use('/cats', (req, res) => {
  res.status(200).json(catFile)
  return
})

router.use('/cats-filtered', (req, res) => {

  const gte = parseInt(req.query.gte)
  const lte = parseInt(req.query.lte)


  res.status(200).json(catFile.filter(cat => !gte || parseInt(cat.price) >= gte).filter(cat => !lte || parseInt(cat.price) <= lte))
  return
})

router.use('/', (req, res, next) => {

  return res.render('index');
});



export { router };
