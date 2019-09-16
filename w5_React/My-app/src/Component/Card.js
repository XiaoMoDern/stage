import React from 'react'

import './Card.css';

// 函数接收数据props
// props解构了得到data
function Card({ data }) {
    // console.log(data);

    return <div >
        {/* 列表循环↓*/}
        {/* {
            data.map(item=>{
                return <div key={item.name} className="card">
                    <img src={'/assets/'+item.photo}/>
                    <h4>{item.name}</h4>
                    <p>性别:{item.gender}</p>
                    <p>年龄:{item.age}</p>
                </div>
            })
        } */}

        <div className="card">
            <img src={'/assets/' + data.photo} alt="" />
            <h4>{data.name}</h4>
            <p>性别：{data.gender}</p>
            <p>年龄：{data.age}</p>
        </div>


    </div>
}

export default Card;