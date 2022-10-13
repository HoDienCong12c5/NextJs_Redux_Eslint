import bigdecimal from 'bigdecimal'
import { notification, message } from 'antd'
import { useRouter } from 'next/router'

export const sum = async ( a, b ) => {
  return a + b
}
export const countDots = ( strString, strLetter ) => {
  const string = strString.toString()
  return ( string.match( RegExp( strLetter, 'g' ) ) || [] ).length
}
// check valied
export const validateAddress = ( strAddress ) => {
  let reg = ''
  if ( !strAddress.startsWith( '0x' ) ) {
    return false
  }

  if ( countDots( strAddress, '\\x' ) > 1 ) {
    reg = /^([A-Fa-f0-9_]+)$/
  } else {
    reg = /^([A-Fa-f0-9_x]+)$/
  }

  return reg.test( strAddress )
}

export const convertBalanceToWei = ( strValue, iDecimal = 18 ) => {
  const multiplyNum = new bigdecimal.BigDecimal( Math.pow( 10, iDecimal ) )
  const convertValue = new bigdecimal.BigDecimal( String( strValue ) )
  return multiplyNum.multiply( convertValue ).toString().split( '.' )[0]
}
export const detectImageUrl = ( value ) => {
  return encodeURI( value )
}
export const saveDataLocal = ( key, data ) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem( key, JSON.stringify( data ) )
}
export const getDataLocal = ( key ) => {
  // eslint-disable-next-line no-undef
  return JSON.parse( localStorage.getItem( key ) )
}
export const removeDataLocal = ( key ) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem( key )
}
// export const validateNumber = (strNumber) => {
//   const reg = /^[0-9]+(\.)?[0-9]*$/
//   return reg.test(scientificToDecimal(strNumber))
// }
export const scrollTop = () => {
  if ( window ) {
    window.scrollTo( { top: 0, behavior: 'smooth' } )
  }
}
export const numberWithCommas = ( x ) => {
  const parts = x.toString().split( '.' )
  parts[0] = parts[0].replace( /\B(?=(\d{3})+(?!\d))/g, ',' )
  return parts.join( '.' )
}
export const copyToClipboard = ( text, title ) => {
  const tmp = document.createElement( 'input' )
  tmp.value = text
  document.body.appendChild( tmp )
  tmp.select()
  document.execCommand( 'copy' )
  tmp.remove()
  message.success( title ?? 'Copied!' )
}
export const ellipsisAddress = (
  address,
  prefixLength = 13,
  suffixLength = 4,
) => {
  return `${address.substr( 0, prefixLength )}...${address.substr(
    address.length - suffixLength,
    suffixLength,
  )}`
}
export const pageNext = ( url, as ) => {
  const router = useRouter()
  router.push( url, as, { shallow: true } )
}
export const validateStringNumOnly = ( strNumber ) => {
  const reg = /^([0-9a-zA-Z]+)$/
  return reg.test( strNumber )
}

export const validateNumber = ( strNumber ) => {
  const reg = /^[0-9]+(\.)?[0-9]*$/
  return reg.test( scientificToDecimal( strNumber ) )
}

export const validateEmail = ( email ) => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return !re.test( String( email ).toLowerCase() )
}
export const scientificToDecimal = ( num ) => {
  const sign = Math.sign( num )
  // if the number is in scientific notation remove it
  if ( /\d+\.?\d*e[+-]*\d+/i.test( num ) ) {
    const zero = '0'
    const parts = String( num ).toLowerCase().split( 'e' ) // split into coeff and exponent
    const e = parts.pop() // store the exponential part
    let l = Math.abs( e ) // get the number of zeros
    const direction = e / l // use to determine the zeroes on the left or right
    const coeffArray = parts[0].split( '.' )

    if ( direction === -1 ) {
      coeffArray[0] = Math.abs( coeffArray[0] )
      num = zero + '.' + new Array( l ).join( zero ) + coeffArray.join( '' )
    } else {
      const dec = coeffArray[1]
      if ( dec ) l = l - dec.length
      num = coeffArray.join( '' ) + new Array( l + 1 ).join( zero )
    }
  }

  if ( sign < 0 ) {
    num = -num
  }

  return num
}
export const viewExternal = ( url ) => {
  window.open( url, '_blank' )
}

