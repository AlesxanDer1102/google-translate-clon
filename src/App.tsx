import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button } from 'react-bootstrap'
import './App.css'
import { useLenguage } from './hooks/useLenguage'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './hooks/components/Icons'

function App() {
	//3. Usar el hook useReducere

	const { fromLanguage, toLanguage, setFromLenguage, interchangelanguages } =
		useLenguage()

	return (
		<Container fluid>
			<h1>Google Translate</h1>

			<Row>
				<Col>
					<h2>From</h2>
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
					<h2>To</h2>
					{toLanguage}
				</Col>
			</Row>
		</Container>
	)
}

export default App
