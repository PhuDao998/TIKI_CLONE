import React, { useState } from 'react'
import BasicInfo from '../../basic/BasicInfo'
import AddVarient from './addVarient/AddVarient'
import ListVarient from './listVarient/ListVarient'
import style from './varient.module.css'


function Varient() {
  const [varient,setVarient] = useState([
    {
        option:[],
        key:''
    },
    {
        option:[],
        key:''
    }
])
  return (
    <div className={style.Varient}>
        <h2>
          Giá bán, Kho hàng và Biến thể
        </h2>
        <p>
        Thêm các biến thể khi sản phẩm có các phiên bản khác nhau, chẳng hạn như màu sắc và kích thước
        </p>
        <AddVarient setVarient={setVarient} varient={varient}/> 
        <ListVarient varient={varient}/>
    </div>
  )
}

export default Varient