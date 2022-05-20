// import '../components/Layout' 
import { Layout } from '../components/Layout'
import '../styles/globals.scss'
// import styles from '../styles/Colors.module.scss'
import { ThemeProvider } from '../context/themeContext'

function MyApp({ Component, pageProps }) {


  return <ThemeProvider><Layout><Component {...pageProps} /></Layout></ThemeProvider>

}

export default MyApp
