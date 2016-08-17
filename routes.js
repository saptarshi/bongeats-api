const controllers = require('./controllers');

const Router = require('express').Router;
const router = new Router();


router.get('/', (req, res) => {
  res.json({ message: 'Welcome to https//bongeats.com/api API!' });
});

router.route('/recipe')
  .get((...args) => controllers.recipe.find(...args))
  .post((...args) => controllers.recipe.create(...args));

router.route('/recipe/:id')
  .put((...args) => controllers.recipe.update(...args))
  .get((...args) => controllers.recipe.findById(...args))
  .delete((...args) => controllers.recipe.remove(...args));


router.route('/ingredient')
  .get((...args) => controllers.ingredient.find(...args))
  .post((...args) => controllers.ingredient.create(...args));

router.route('/ingredient/:id')
  .put((...args) => controllers.ingredient.update(...args))
  .get((...args) => controllers.ingredient.findById(...args))
  .delete((...args) => controllers.ingredient.remove(...args));


router.route('/equipment')
  .get((...args) => controllers.equipment.find(...args))
  .post((...args) => controllers.equipment.create(...args));

router.route('/equipment/:id')
  .put((...args) => controllers.equipment.update(...args))
  .get((...args) => controllers.equipment.findById(...args))
  .delete((...args) => controllers.equipment.remove(...args));


router.route('/technique')
  .get((...args) => controllers.technique.find(...args))
  .post((...args) => controllers.technique.create(...args));

router.route('/technique/:id')
  .put((...args) => controllers.technique.update(...args))
  .get((...args) => controllers.technique.findById(...args))
  .delete((...args) => controllers.technique.remove(...args));


module.exports = router;
