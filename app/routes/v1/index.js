const Express = require('express');
let router = Express.Router();

const Image = require('../../controllers/Index');

router.get('/image/captcha', Image.imageCatcha);
router.post('/validate/image/captcha', Image.validateImageCaptcha);


module.exports = router;
