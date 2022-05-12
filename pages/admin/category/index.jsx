import StyleCategory from '../../../styles/Category.module.css'

import SvgEdit from '../../../components/svg/SvgEdit'
import SvgTrash from '../../../components/svg/SvgTrash'
import SvgView from '../../../components/svg/SvgView'

export default function CategoryIndex () {
  return (
    <div className={StyleCategory.category}>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th className={StyleCategory.view}><SvgView /></th>
            <th>Cervezas</th>
            <th className={StyleCategory.edit}><SvgEdit /></th>
            <th className={StyleCategory.delete}><SvgTrash /></th>
          </tr>

          <tr>
            <th className={StyleCategory.view}><SvgView /></th>
            <th>Cervezas</th>
            <th className={StyleCategory.edit}><SvgEdit /></th>
            <th className={StyleCategory.delete}><SvgTrash /></th>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
