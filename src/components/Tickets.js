import React from 'react'
import Ticket from './Ticket.js'

export default function Tickets({props, filters, sorting}) {

	let tickets = props.slice(0)
	
	function filterTickets(tickets, filters) {
		let filteredTickets = [];
		let maxTransfers = filters.find(item => item.checked) ? 
			filters.filter(item => item.checked).sort((a, b) => b.id - a.id)[0].id : 4;
		
		filteredTickets = tickets.filter(item => 
			(item.segments[0].stops.length <= maxTransfers) && 
			(item.segments[1].stops.length <= maxTransfers))

		return filteredTickets
	}

	function sortTickets(sortingItems) {

		let id = sortingItems.find(item => item.selected).id;
		
		if (id === 1) tickets.sort((a, b) => a.price - b.price);
		if (id === 2) tickets.sort((a, b) => 
			(a.segments[0].duration + a.segments[1].duration) - 
			(b.segments[0].duration + b.segments[1].duration))
	}
	
	tickets = filterTickets(tickets, filters)
	sortTickets(sorting)

	function numOfTickets(tickets, num) {

		let arrOfTickets = [];
		console.log(tickets)
		if (tickets.length >= num) {
			for (let i = 0; i < num; i++) {
				arrOfTickets.push(
					<div className='ticket' key={i}>
						<Ticket ticket={tickets[i]} />
					</div>
				)
			}
		} else {
			for (let i = 0; i < tickets.length; i++) {
				arrOfTickets.push(
					<div className='ticket' key={i}>
						<Ticket ticket={tickets[i]} />
					</div>
				)
			}
		}

		return arrOfTickets
	} 

	return(
		<div className='tickets'>

			{numOfTickets(tickets, 5)}
			
		</div>
	)
}
