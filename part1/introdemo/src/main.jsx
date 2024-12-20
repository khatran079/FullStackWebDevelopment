import ReactDOM from "react-dom/client"

import App from './App'

// let count = 1
// // ReactDOM.createRoot(document.getElementById('root')).render(<App counter = {counter}/>)
// const root = ReactDOM.createRoot(document.getElementById('root'))
// const refresh = () =>{
//   root.render(
//     <App counter = {count}/>
//   )
// }

// setInterval(() => {
//   refresh()
//   count += 1
// },1000)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)