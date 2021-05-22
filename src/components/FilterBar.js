import React from 'react'
import FilterBarItem from './FilterBarItem.js'

export default function FilterBar({filters, onChange}) {

	return (
		<div className="filter-bar">
			<h3>Количество пересадок</h3>
			<ul>
				{filters.map((obj) => {
					return <FilterBarItem 
						key={obj.id} 
						name={obj.name} 
						id={obj.id} 
						checked={obj.checked} 
						onChange={onChange} />
				})}
			</ul>
		</div>
	)
}
