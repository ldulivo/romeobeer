import { dbConnect } from '../../../services/mongoose'
import CategoryScheme from '../../../services/models/category.models'

dbConnect()

export default async function handler (req, res) {
  const { method, body } = req

  switch (method) {
    case 'GET':
      try {
        const categories = await CategoryScheme.find({ delete: false })
        return res.status(200).json(categories)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
    case 'POST':
      try {
        console.log('POST: ', body)
      } catch (error) {
        return res.status(500).json({ error: error.message })
      }
  }
}
