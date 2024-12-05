import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'
import { useLenguage } from './hooks/useLenguage'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'

function App() {
	//3. Usar el hook useReducere

	const {
		fromLanguage,
		toLanguage,
		setFromLenguage,
		setToLenguage,
		interchangelanguages
	} = useLenguage()

	return (
		<Container fluid>
			<h1>Google Translate</h1>

			<Row>
				<Col>
					<LanguageSelector
						type='from'
						value={fromLanguage}
						onChange={setFromLenguage}
					/>
					{fromLanguage}
				</Col>
				<Col>
					<Button
						variant='link'
						disabled={fromLanguage === AUTO_LANGUAGE}
						onClick={interchangelanguages}
					>
						<ArrowsIcon />
					</Button>
				</Col>
				<Col>
					<LanguageSelector
						type='to'
						value={toLanguage}
						onChange={setToLenguage}
					/>
					{toLanguage}
				</Col>
			</Row>
		</Container>
	)
}

export default App
