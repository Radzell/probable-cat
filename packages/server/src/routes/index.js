import { Router } from 'express';

const router = Router();
const catFile = require('../catfile.json');



router.use('/cats', (req, res) => {
  res.status(200).json(catFile)
  return
})

router.use('/cats-filtered', (req, res) => {

  const gte = parseInt(req.body.gte)
  const lte = parseInt(req.body.lte)


  res.status(200).json(catFile.filter(cat => parseInt(cat.price) >= gte && parseInt(cat.price) <= lte))
  return
})

router.use('/', (req, res, next) => {

  return res.render('index');
});



export { router };
