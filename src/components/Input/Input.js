import React from 'react'
import classes from './Input.module.css'
import { useState } from 'react'
function Input(props) {
	const [inp, setInp] = useState('')
	function onInputHandler(e) {
		setInp(e.target.value)
	}
	function submitHandler(e) {
		const value = {
			id: Math.random().toString(),
			title: inp,
			date: new Date(),
		}
		e.preventDefault()
		setInp('')
		props.inputData(value)
	}

	return (
		<div className={classes.block}>
			<input
				className={classes.inp}
				onChange={onInputHandler}
				value={inp}
				type='text'
			/>
			<button className={classes.btn} onClick={submitHandler}>
				ok
			</button>
		</div>
	)
}

export default Input
