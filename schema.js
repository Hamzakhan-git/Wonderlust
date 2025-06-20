const Joi = require('joi');

module.exports.listingSchema = Joi.object({  
  listing : Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    country: Joi.string().required(),
    price: Joi.number().required().min(0),
    // image: Joi.object({
    //   url: Joi.string().uri().allow("", null)
    // }).unknown(true)  // ✅ this line is essential
    image: Joi.string().allow("",null)
  }).required().unknown()
  
});

module.exports.reviewSchema = Joi.object({
    review: Joi.object({

        rating: Joi.number().required().min(1).max(5),
        comment : Joi.string().required(),
    }).required(),
});

module.exports.userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  googleId: Joi.string().optional(),
});