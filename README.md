# Dropdown Component

## Description

This is a reusable React dropdown component that supports both single and multiselect.

## Requirements

### Functionality Requirements

• open/close  
• single & multiselect  
• select & deselect all option(s) with one click  
• show selected option(s) when dropdown is closed

### Performance Requirements

• render large lists efficiently  
• limit costly computations

## How to Use

1. Clone the repo
2. Run `npm install` within the repo root directory
3. Run `npm start`
4. Visit [localhost:3000](localhost:3000) in your browser.

## Implementation

All of the Dropdown component code can be found in `Dropdown.js` and styling for the component can be found in `Dropdown.css`.
Demonstrated use of the component can be found in `App.js`.

Props

1. title - title of dropdown menu
2. multiselect (optional) - whether or not this dropdown should allow selection of multiple options
3. options - options from which the user can choose from (this is required to be a set because there shouldn't be duplicate options)

State:

1. selected - the options that the user has selected (this is a Set for faster read/write times when selecting/deselecting an option)
2. open - whether the dropdown menu is open/closed
