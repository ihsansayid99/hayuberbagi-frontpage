import { useEffect } from 'react'
import '../../tailwindcss/tailwind.css';
import "aos/dist/aos.css";
import AOS from "aos";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {

    AOS.init();

  }, [])
  return <Component {...pageProps} />
}

export default MyApp
