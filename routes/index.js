const { Router } = require('express')
const { restaurants } = require('../controllers')
const { reviews } = require('../controllers')

const router = Router()

//restaurant routes

router.get('/restaurants', restaurants.getAllRestaurants)
router.post('/restaurants', restaurants.createRestaurant)
router.get('/restaurants/:id', restaurants.getOneRestaurant)
router.post('/restaurants/:id/reviews', reviews.createReview)

// review routes
router.get('/reviews', reviews.getAllReviews)
router.get('/reviews/:id', reviews.getReview)
router.put('/reviews/:id', reviews.updateReview)

module.exports = router
