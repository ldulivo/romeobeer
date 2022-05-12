import { dbConnect } from '../../../services/mongoose'
import CategoryScheme from '../../../services/models/category.models'

dbConnect()

export default async function handler (req, res) {
  try {
    const categories = await CategoryScheme.count({ delete: false })
    return res.status(200).json(categories)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
