// class, stateless function component
// state, lifecycle

// React 16.8: function component + hook => stateful function component

import React, { Component, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

// class App extends Component {
//     constructor (props) {
//         super(props)
//         this.state = {
//             count: 0,
//             text: ''
//         }
//     }

//     componentDidMount() {
//         console.log("ComponentDidMount")
//     }

//     componentDidUpdate() {
//         console.log("ComponentDidUpdate")
//     }

//   render() {
//     return (
//       <div>
//         <p>Butona {this.state.count} kez tıkladınız.</p>
//         <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
//       </div>
//     )
//   }
// }

const App = (props) => {
    const [count, setCount] = useState(props.count)
    const [text, setText] = useState(props.text)

    //componentDidMount
    useEffect(() => {
        console.log('componentDidMount')

        const countData = localStorage.getItem('count')
        if(countData) {
            setCount(Number(countData))
        }
    }, [])
    
    //componentDidUpdate - text
    useEffect(() => {
        console.log('componentDidUpdate - text')
    }, [text])
    
    //componentDidUpdate - count
    useEffect(() => {
        console.log('componentDidUpdate - count')

        localStorage.setItem('count', count)
    }, [count])

    //componentDidMount(), componentDidUpdate()
    useEffect(() => {
      console.log('componentDidMount - componentDidUpdate')
    })
    
    return (
        <div>
            <p>Butona {count} kez tıkladınız.</p>
            <p>Girilen text: {text}</p>
            <button onClick={() => setCount(count+1)}>+1</button>
            <button onClick={() => setCount(count-1)}>-1</button>
            <button onClick={() => setCount(props.count)}>Reset</button>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

App.defaultProps = {
    count: 5,
    text: 'Default'
}

// function App (props) {
//     return (
//         <div>
//             function component
//         </div>
//     )
// }

ReactDOM.render(<App count={7} />, document.getElementById('root'))