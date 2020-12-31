import { GlobalStyles } from '../styles'

const App = ({ Component, pageProps }) => (
	<>
		<GlobalStyles />
		<Component {...pageProps} />
	</>
)

export default App
