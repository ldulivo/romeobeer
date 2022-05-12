import { Schema, model, models } from 'mongoose'

const layout = new Schema({
  layout: {
    type: Object,
    of: Number
  }
}, {
  timestamps: true,
  versionKey: false
})

export default models.layout || model('layout', layout)
