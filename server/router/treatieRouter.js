const Router = require('express')
const router = new Router()
const treatieController = require('../controllers/treatieController')
const checkRole = require('../middleware/checkRole-middleware')

router.post('/', checkRole(['CHIEF']), treatieController.create)
router.get('/', checkRole(['CHIEF']), treatieController.getAll)
router.get('/:id', checkRole(['CHIEF']), treatieController.getOne)
router.delete('/:id', checkRole(['CHIEF']), treatieController.delete)

module.exports = router