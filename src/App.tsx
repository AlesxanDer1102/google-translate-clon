import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import './App.css'
import { useLenguage } from './hooks/useLenguage'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './components/Icons'
import { LanguageSelector } from './components/LanguageSelector'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'

function App() {
	//3. Usar el hook useReducere

	const {
		loading,
		fromLanguage,
		toLanguage,
		fromText,
		result,
		setFromLenguage,
		setToLenguage,
		setFromText,
		setResult,
		interchangelanguages
	} = useLenguage()

	return (
		<Container fluid>
			<h1>Google Translate</h1>

			<Row>
				<Col>
					<Stack gap={2}>
						<LanguageSelector
							type={SectionType.From}
							value={fromLanguage}
							onChange={setFromLenguage}
						/>
						<TextArea
							type={SectionType.From}
							value={fromText}
							onChange={setFromText}

						/>
					</Stack>
				</Col>
				<Col xs='auto'>
					<Button
						variant='link'
						disabled={fromLanguage === AUTO_LANGUAGE}
						onClick={interchangelanguages}
					>
						<ArrowsIcon />
					</Button>
				</Col>
				<Col>
					<Stack gap={2}>
						<LanguageSelector
							type={SectionType.To}
							value={toLanguage}
							onChange={setToLenguage}
						/>
						<TextArea
							loading={loading}
							type={SectionType.To}
							value={result}
							onChange={setResult}
						/>
					</Stack>
				</Col>
			</Row>
		</Container>
	)
}

export default App
