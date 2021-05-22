import React from 'react'

export default function Ticket({ticket}) {

	let imgSrc = `//pics.avs.io/99/36/${ticket.carrier}.png`

	function editTime(date, duration) {
		let hourStart = date.slice(11,13);
		let minuteStart = date.slice(14,16);
		let timeStart = hourStart*60 + +minuteStart;
		let timeEnd = timeStart + duration;
		let hourEnd = Math.floor((timeEnd)/60)%24;
		let minuteEnd = timeEnd%60;

		if (hourEnd.toString().length === 1) {
			hourEnd = '0' + hourEnd.toString();
		}
		if (minuteEnd.toString().length === 1) {
			minuteEnd = '0' + minuteEnd.toString();
		}

		return `${hourStart}:${minuteStart} - ${hourEnd}:${minuteEnd}`
	}

	function editDate(date) {
		//let year = date.slice(0,4);
		let month = date.slice(5,7);
		let day = date.slice(8,10);

		return `${day}.${month}`
	}

	function editDuration(num) {
		let days = Math.floor(Math.floor(num/60)/24);
		return `${days ? `${days}д ` : ''}${Math.floor(num/60)%24}ч ${num%60}м`
	}

	function editTransferStops(arr) {
		switch(arr.length) {
			case 0: return 'Без пересадок'
			case 1: return '1 пересадка'
			case 2:
			case 3: return `${arr.length} пересадки`
			default: return 'Больше 3 пересадок'
		}
	}

	return(
		<div className='ticket-data'>
			<div className='flex-row'>
				<p className='price'>{new Intl.NumberFormat('ru-RU').format(ticket.price)} Р</p>

				<div className='carrier'><img src={imgSrc} alt='carrier'/></div>
			</div>
			<div className='flex-row'>
				<div className='ticket-flex-column'>
					<p className='upper-text'>{ticket.segments[0].origin} - {ticket.segments[0].destination}</p>
					<p className='bottom-text'>{editTime(ticket.segments[0].date, ticket.segments[0].duration)}</p>
				</div>

				<div className='ticket-flex-column'>
					<p className='upper-text'>Дата</p>
					<p className='bottom-text'>{editDate(ticket.segments[0].date)}</p>
				</div>

				<div className='ticket-flex-column'>
					<p className='upper-text'>В пути</p>
					<p className='bottom-text'>{editDuration(ticket.segments[0].duration)}</p>
				</div>

				<div className='ticket-flex-column'>
					<p className='upper-text'>{editTransferStops(ticket.segments[0].stops)}</p>
					<p className='bottom-text'>{ticket.segments[0].stops.join(', ')}</p>
				</div>
			</div>
			<div className='flex-row'>
				<div className='ticket-flex-column'>
					<p className='upper-text'>{ticket.segments[1].origin} - {ticket.segments[1].destination}</p>
					<p className='bottom-text'>{editTime(ticket.segments[1].date, ticket.segments[1].duration)}</p>
				</div>

				<div className='ticket-flex-column'>
					<p className='upper-text'>Дата</p>
					<p className='bottom-text'>{editDate(ticket.segments[1].date)}</p>
				</div>

				<div className='ticket-flex-column'>
					<p className='upper-text'>В пути</p>
					<p className='bottom-text'>{editDuration(ticket.segments[1].duration)}</p>
				</div>

				<div className='ticket-flex-column'>
					<p className='upper-text'>{editTransferStops(ticket.segments[1].stops)}</p>
					<p className='bottom-text'>{ticket.segments[1].stops.join(', ')}</p>
				</div>
			</div>
		</div>
	)
}
