import './App.css'
import { Dropdown } from './Dropdown'

function App() {
	// these options would probably be data from a fetch request
	const options = [
		'basketball',
		'baseball',
		'football',
		'hockey',
		'soccer',
		'tennis',
		'golf',
	]

	return (
		<div className='App'>
			<h1 className='pageTitle'>Dropdown Demo</h1>
			<Dropdown
				multiselect={false}
				title='Single Select'
				options={new Set(options)}
			/>
			<Dropdown
				multiselect={true}
				title='Multi Select'
				options={new Set(options)}
			/>
		</div>
	)
}

export default App
