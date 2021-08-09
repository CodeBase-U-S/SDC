const router = require('express').Router();
const cors = require('cors');
const controllers = require('./controllers');
const db = require('../q_and_a_database/index.js');

router
  .route('/qa/questions')
  .get(controllers.getQuestions)
  .post(controllers.addQuestion);

router
  .route('/qa/questions/:question_id/answers')
  .get(controllers.getAnswers)
  .post(controllers.addAnswer);

router.put('/qa/questions/:question_id/helpful', controllers.updateQuestionHelpful);
router.put('/qa/answers/:answer_id/helpful', controllers.updateAnswerHelpful);
router.put('/qa/questions/:question_id/report', controllers.reportQuestion);
router.put('/qa/answers/:answer_id/report', controllers.reportAnswer);
const controller = require('./controllers/reviewsJG');
const overview = require('./controllers/overview');

// const controller = require('./controllers/reviewsJG');


router.get('/products', overview.getProducts);
router.get('/products/:productId', overview.getProductById);
router.get('/products/:productId/styles', overview.getStyles);
router.get('/products/:productId/related', overview.getRelated);

router
.route('/reviews/meta')
.get(controller.getMeta);


router
.route('/reviews/:product_id')
.get(controller.get)
.post(controller.addReview);

router
  .route('/reviews/:id/helpful')
  .put(controller.updateHelpful);

router
  .route('/reviews/:id/report')
  .put(controller.updateReport);

module.exports = router;
