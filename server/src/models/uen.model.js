const mongoose = require('mongoose');

const UenSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  categories: [
    {
      id: Number,
      description: String,
      lines: [
        {
          id: Number,
          description: String
        }
      ]
    },
    { timestamps: true, collection: 'uens' }
  ]
});

module.exports = { UenSchema: mongoose.model('Uen', UenSchema) };
