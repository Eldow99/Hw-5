import './App.css'
import Input from './components/Input/Input'
import List from './components/List/List'
import { useState } from 'react'
function App() {
	const [items, setItems] = useState([])
	const inputData = (data) => {
		const dataInp = {
			...data,
		}
		// console.log(dataInp)
		setItems((prevData) => {
			return [...prevData, dataInp]
		})
	}
	return (
		<div className='App'>
			<Input inputData={inputData} />
			<List data={items} />
		</div>
	)
}

export default App
