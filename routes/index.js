const { Router } = require('express')
const { restaurants } = require('../controllers')
const { reviews } = require('../controllers')

const router = Router()

//restaurant routes

router.get('/restaurants', restaurants.getAllRestaurants)
router.post('/restaurants', restaurants.createRestaurant)
router.get('/restaurants/:id', restaurants.getOneRestaurant)

// review routes
router.get('/reviews', reviews.getAllReviews)
router.post('/reviews', reviews.createReview)
router.get('/reviews/:id', reviews.getReview)
module.exports = router
