import { Application } from '../components/Application'
import { GlobalStyles } from '../styles'

const App = ({ Component, pageProps }) => (
	<Application>
		<GlobalStyles />
		<Component {...pageProps} />
	</Application>
)

export default App
