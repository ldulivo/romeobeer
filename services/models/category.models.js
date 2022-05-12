import { Schema, model, models } from 'mongoose'

const category = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido'],
    unique: true
  },
  description: {
    type: String
  },
  active: {
    type: Boolean,
    default: true
  },
  delete: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.category || model('category', category)
