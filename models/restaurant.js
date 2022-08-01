const { Schema } = require('mongoose')

const restaurantSchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = restaurantSchema
