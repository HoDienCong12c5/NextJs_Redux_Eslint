import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import { sum } from 'common/function'
import ButtonBasic from 'components/ButtonBasic'
import HomePage from './home'
const Divs = styled.div`
  // position: relative;
  background-color: red;
  padding: 10px;
`
export default function Home () {
  const check = () => {
    console.log('sums : ', sum(9, 7))
  }
  // check()
  const alerts = () => {
    alert(' onPress')
  }
  return (
    <div className={styles.container}>
      <HomePage />
      <div>
        sdhfghsdfvgh
      </div>
    </div>
  )
}
