
import styles from '../styles/Home.module.css'
import HomePage from 'pages/Screen/HomeScreen'
import { NextSeo } from 'next-seo';
export default function Home (props) {
  return (
    <div className={styles.container}>
      <NextSeo
        title="Mlem Coffee"
        description="Cung cấp cà phê tốt nhất cho bạn."
      />
      <HomePage /> 
    </div>
  )
}
