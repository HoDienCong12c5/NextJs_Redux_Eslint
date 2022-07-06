import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import ReduxServices from 'common/reduxService'

import {
  Container,
  Input,
  Buttons,
  ChartContainer
} from './styled'
import { validateAddress } from 'common/function'
import Link from 'next/link'
import Web3Service from 'common/web'
import { fireStores } from 'services/firebase'
import { collection, getDocs } from 'firebase/firestore'
import CustomLink from 'components/CustomLink'
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'
const ADDRESS = '0xE66D10adACcec763694DA8800944eb10d091C668'

const HomeScreen = () => {
  // store
  const state = useSelector(state => state.getName)

  // use state
  const [nameNew, setNameNew] = useState('')
  const [dataFi, setDataFi] = useState([])
  const [balance, setBalance] = useState(0)
  const [isSubmit, setIsSubmit] = useState(false)
  // use effect
  useEffect(() => {
    const getbalace = async () => {
      const balance = await Web3Service.getBalance(ADDRESS)
      setBalance(balance)
    }
    getbalace()
    getDataFirebase()
  }, [])
  const setnameNew = () => {
    if (validateAddress(nameNew)) {
      // alert(nameNew)
      setIsSubmit(true)
    } else {
    //   inItAddress()
    }
  }
  const getDataFirebase = async () => {
    console.log(process.env.apiKey)
    const arr = []
    const querySnapshot = await getDocs(collection(fireStores, 'User'))
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      data.id = doc.id
      arr.push(data)
      console.log({ data })
    })
    setDataFi([...dataFi, arr])
  }
  console.log({ dataFi })
  const send = async () => {
    // const result = await Web3Service.sendTransaction(ADDRESS, ADDRESS, 1)
  }

  useEffect(() => {
    send()
  }, [])
  const renderLineChart = () => {
    const data = []
    for (let index = 0; index < 10; index++) {
      const element = {
        name: 'Page ' + index,
        uv: 400 - (index * Math.random() * 100),
        pv: 2400,
        amt: 2400
      }
      data.push(element)
    }
    return (
      <ChartContainer >
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 5" />
          <XAxis dataKey="name" />
          <YAxis />
        </LineChart>
      </ChartContainer>

    )
  }

  return (
    <Container>
      <div>
        home {state} lalalalal
      </div>
      <Link
        href={
          {
            pathname: '/Screen/ProfileScreen',
            query: {
              id: '123',
              name: 'congga'
            }
          }
        }
        // as={'/profile/123/congga'}
      >
        <a style={{ color: 'red' }}>Home</a>
      </Link>
      <Link
        href={'/Screen/ProfileScreen/:id'}
        as={'/profile/123'}
      >
        <a style={{ color: 'red' }}>Home</a>
      </Link>

      <ChartContainer>
          balance :{ balance }
      </ChartContainer>
      <Input
        value={nameNew}
        onChange={e => setNameNew(e.target.value)}
        placeholder='Enter name'
      />
      <Input
        value={nameNew}
        onChange={e => setNameNew(e.target.value)}
        placeholder='Enter value'
      />
      {/* <CustomLink route={'/ProfileScreen' }>
          Profile
      </CustomLink>npm run */}
      <Buttons
        isSubmit={isSubmit}
        onClick={setnameNew}
      >
          Submit
      </Buttons>
      {
        renderLineChart()
      }
      {
        dataFi.map((item, index) => {
          return (
            <div key={index}>
              {item.map((item, index) => {
                return (
                  <div key={index}>
                    {item.name}
                  </div>
                )
              }
              )}
            </div>
          )
        })
      }
      {/* <CustomLink route={'/profile/13'} >
        <a>
          home
        </a>
      </CustomLink> */}
    </Container>
  )
}
export default HomeScreen
