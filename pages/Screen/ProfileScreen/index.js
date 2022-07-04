import React from 'react'

const ProfileScreen = (props) => {
  return (
    <div>ProfileScreen</div>
  )
}
ProfileScreen.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id }
}
export default ProfileScreen
