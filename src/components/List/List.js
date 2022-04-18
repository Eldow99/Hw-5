import React from 'react'
import ListDate from './ListDate'
import classes from './List.module.css'
function List(props) {
	console.log(props.data)

	return (
		<div>
			{props.data.map((el) => (
				<div className={classes.block} key={el.id}>
					<ListDate date={el.date} />
					<div className={classes.title}>{el.title}</div>
				</div>
			))}
		</div>
	)
}

export default List
