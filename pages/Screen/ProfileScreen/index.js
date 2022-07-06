import { useRouter } from 'next/router'
import React from 'react'
const ProfileScreen = () => {
  const router = useRouter()
  const { id, name } = router.query
  console.log({ id }, { name })

  return (
    <div>ProfileScreen</div>
  )
}
ProfileScreen.getInitialProps = async ({ query }) => {
  const { id, name } = query
  return { id, name }
}
export default ProfileScreen
