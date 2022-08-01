import React from 'react'
import style from './hotitem.module.css'
import ListItem from './listItem/ListItem'
function HotItem() {
  return (
    <div className={style.HotItem}>
        <h5>Danh Mục Nổi Bật</h5>
        <ListItem />
    </div>
  )
}

export default HotItem