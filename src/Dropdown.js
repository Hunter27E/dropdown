import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Dropdown.css'

export const Dropdown = ({ multiselect = false, title, options }) => {
	const [selected, setSelected] = useState(new Set())
	const [open, setOpen] = useState(false)

	// convert all selected options into a string
	const selectedString = Array.from(selected).join(', ')
	// get ClassName based on whether dropdown is open (allows for custom styles when dropdown is open)
	const openClassName = open ? 'open' : ''

	const toggleDropdown = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const toggleAllOptions = (toggleOn) => {
		if (toggleOn) setSelected(new Set(options))
		else setSelected(new Set())
	}

	const toggleOption = (option) => {
		setSelected((prevSelected) => {
			// single select - only select option that was clicked, deselect all others
			if (!multiselect) return new Set([option])

			// multi select - toggle option that was clicked, don't change others
			let newSelected = new Set(prevSelected)
			if (newSelected.has(option)) newSelected.delete(option)
			else newSelected.add(option)
			return newSelected
		})
	}

	return (
		<div className='dropdown'>
			<header className='dropdownHeader'>
				<h1 className='dropdownTitle'>{title}</h1>
				<button
					className={`toggleDropdownButton ${openClassName}`}
					onClick={toggleDropdown}
				>
					➡️
				</button>
				<p className='dropdownSelected'>{selectedString}</p>
			</header>

			<ul className={`options ${openClassName}`}>
				{multiselect && (
					<button
						className='toggleAllButton'
						onClick={() => toggleAllOptions(true)}
					>
						Select All
					</button>
				)}
				<button
					className='toggleAllButton'
					onClick={() => toggleAllOptions(false)}
				>
					Deselect All
				</button>

				{Array.from(options).map((option) => (
					<li key={`${option}`} className='option'>
						<input
							type={`${multiselect ? 'checkbox' : 'radio'}`}
							name={option}
							value={option}
							checked={selected.has(option)}
							onChange={() => toggleOption(option)}
						/>
						<label htmlFor={option}>{option}</label>
					</li>
				))}
			</ul>
		</div>
	)
}

Dropdown.propTypes = {
	multiselect: PropTypes.bool,
	title: PropTypes.string.isRequired,
	options: PropTypes.instanceOf(Set).isRequired,
}

/* 

    Functionality Requirements
    • open/close
    • single & multiselect functionality
    • select & deselect all option(s) with one click
    • show selected option(s) when dropdown is closed

    Performance Requirements
    • render large lists efficiently
    • limit costly computations

*/
