import React from 'react'

function ListDate(props) {
	const month = props.date.getMonth()
	const day = props.date.toLocaleString('en-Us', { day: '2-digit' })
	const year = props.date.getFullYear()
	console.log(month)
	return (
		<div style={{ fontSize: '2rem' }}>
			<span>{day}.</span>
			<span>{month + 1}.</span>
			<span>{year}</span>
		</div>
	)
}

export default ListDate
