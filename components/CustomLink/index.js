import React from 'react'
import Link from 'next/link'
const getPathPage = ( path ) => {
}
export default ( { route, children, query = null } ) => {
  const className = children.props.className || ''
  if ( query ) {
    return (
      <Link
        href={
          {
            pathname: getPathPage( route ),
            query
          }
        }
        as={route}
      >{React.cloneElement( children, { className } )}</Link>
    )
  } else {
    <Link
      href={getPathPage( route )}
      as={route}
    >
      {React.cloneElement( children, { className } )}
    </Link>
  }
  return React.cloneElement( children, { className } )
}
