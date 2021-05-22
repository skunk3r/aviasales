import React from 'react'

export default function FilterBarItem({name, id, checked, onChange}) {
	return (
		<label>
			<li className={checked ? 'checked' : null}>
				<input type='checkbox' onChange={() => onChange(id)} />{name}
			</li>
		</label>
	)
}
