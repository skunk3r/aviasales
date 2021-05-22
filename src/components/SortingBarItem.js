import React from 'react'

export default function SortingBarItem({name, id, selected, onToggle}) {

	return (
		<li className={selected ? 'selected' : null} onClick={() => onToggle(id)}>
			<p>{name}</p>
		</li>
	)
}
