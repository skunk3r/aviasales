import React from 'react'
import SortingBarItem from './SortingBarItem.js'

export default function SortingBar({sortingItems, onToggle}) {

	return (
		<div className='sorting-bar'>
			<ul>
				{sortingItems.map(obj => <SortingBarItem 
					key={obj.id} 
					name={obj.name} 
					id={obj.id}
					selected={obj.selected}
					onToggle={onToggle} />
				)}
			</ul>
		</div>
	)
}
