import { Schema, model, models } from 'mongoose'

const product = new Schema({
  title: {
    type: String,
    required: [true, 'El título es requerido'],
    unique: false,
    trim: true,
    maxlength: [40, 'El título puede tener un máximo de 40 caracteres']
  },
  description: {
    type: String,
    required: false,
    trim: true,
    maxlength: [200, 'Máximo de 200 caracteres']
  },
  price: {
    type: Number,
    default: null,
    required: true
  },
  stock: {
    type: Number,
    default: 0
  },
  offer_price: {
    type: Number,
    default: null
  },
  offer_start_date: {
    type: Date,
    default: null
  },
  offer_end_date: {
    type: Date,
    default: null
  },
  active: {
    type: Boolean,
    default: true
  },
  delete: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    default: 'uncategory'
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.product || model('product', product)
