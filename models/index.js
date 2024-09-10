const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  updatedAt: { // fecha de actualización del documento
    type: Date,
    require: true
  },
  createdAt: { // fecha de creación del documento
    type: Date,
    require: true
  },
  updatedBy: {
    type: String, // usuario que actualizó el documento
    require: true
  },
  createdBy: {
    type: String, // usuario que creó el documento
    require: true
  },
  title: {
    type: String,
    require: true,
    trim: true
  },
  content: {
    type: String,
    require: true,
    trim: true
  },
  imageUrl: {
    type: String
  },
  status: {
    type: Boolean,
    require: true,
    default: true
  }
});

module.exports = {
  Post: mongoose.model('Post', PostSchema)
};
