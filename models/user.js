const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  password: String,
  resetToken: String,
  name: String,
  resetTokenExpiration: Date,
  email: String,
  cart: {
    items: [
      {
        name: String,
        quantity: Number,
        rate: Number
      }
    ],
    resID: {
      type: Schema.Types.ObjectId,
      ref: 'Restaurant'
    },
    total: Number
  }
})

userSchema.methods.addToCart = function(cart) {
  this.cart = cart;
  return this.save()
};

module.exports = mongoose.model('User',userSchema);