import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is a required property']
  },
  address: String,
  age: {
    type: Number,
    min: 0,
    max: 120,
    required: true
  },
  email: String,
  updated: {
    type: Date,
    default: Date.now,
  },
});

ContactSchema.path('email').validate((email) => {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailRegex.test(email);
}, 'A valid e-mail address is required');

ContactSchema.statics.findByEmail = (email) => {
  return this.findOne({
    email: email
  });
};

ContactSchema.methods.compareEmail = function (candidateEmail) {
  const isMatch = this.email === candidateEmail;
  if (!isMatch) {
    throw new Error('Password mismatch');
  }
  return this;
};

export default mongoose.model('Contact', ContactSchema);
 