import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from '../components/navbar'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("Current Page is " + window.location.pathname);
  });

  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
