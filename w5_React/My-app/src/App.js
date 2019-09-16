import React from 'react'

import Card from './Component/Card'


// 函数组件：纯函数
// function App() {
//     return <div >
//      我是函数组件
//     </div>
// }

// 类组件：
class App extends React.Component {
    // 数据
    // 使用了extends之后必须在constructor(){}里面写super()
    // 因为用了super()才能用this
    constructor() {
        super(),
            this.state = {
                //默认显示第一张卡片
                active: 0,
                cards: [
                    {
                        name: 'gaoxiao',
                        age: 18,
                        gender: '男',
                        photo: 'img/011.gif'
                    },

                    {
                        name: 'tiantian',
                        age: 24,
                        gender: '男',
                        photo: 'img/022.gif'
                    },
                    {
                        name: 'wenjing',
                        age: 24,
                        gender: '女',
                        photo: 'img/033.gif'
                    },
                    {
                        name: 'laoyao',
                        age: 24,
                        gender: '男',
                        photo: 'img/laoyao.jpg'
                    },
                    {
                        name: 'lemon',
                        age: 32,
                        gender: '女',
                        photo: 'img/lemon.jpg'
                    }
                ]
            }
    }
    // 修改active
    // 要修改state的数据必须要使用setStata
    handleNext() {
        // **事件处理函数默认没有this
        // 修改active
        // 报错： Cannot read property 'setState' of undefined
        // 翻译：不能读取undefined的setState属性

        let active = this.state.active + 1;
        if (active >= this.state.cards.length) {
            active = 0;
        }
        // 修改state唯一方式：setState
        this.setState({
            active
        })

    }
    handleGO() {
        // **事件处理函数默认没有this
        // 修改active
        // 报错： Cannot read property 'setState' of undefined
        // 翻译：不能读取undefined的setState属性

        let active = this.state.active;
        if (active <= this.state.cards.length) {
            active = 0;
        }
        // 修改state唯一方式：setState
        this.setState({
            active
        })

    }
    // 必须有一个render方法
    // render方式中的this指向实例
    render() {
        // 解构
        let { cards, active } = this.state;
        return <div>
            {/* 改变this的指向通过bind() */}
            <button onClick={this.handleNext.bind(this)} >下一张</button>
            <button onClick={this.handleGO.bind(this)} >上一张</button>
            {/* 组件通讯,props */}
            {/* 传入数据，js一定要用花括号*/}
            <Card data={cards[active]} />{/* 解构 */}

            {/* <Card data={this.state.cards[this.state.active]} /> */}
        </div>
    }

}


export default App;