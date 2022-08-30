import bigdecimal from 'bigdecimal'
import { notification, message } from 'antd'
export const sum = async (a, b) => {
  return a + b
}
export const countDots = (strString, strLetter) => {
  const string = strString.toString()
  return (string.match(RegExp(strLetter, 'g')) || []).length
}
// check valied
export const validateAddress = (strAddress) => {
  let reg = ''
  if (!strAddress.startsWith('0x')) {
    return false
  }

  if (countDots(strAddress, '\\x') > 1) {
    reg = /^([A-Fa-f0-9_]+)$/
  } else {
    reg = /^([A-Fa-f0-9_x]+)$/
  }

  return reg.test(strAddress)
}

export const convertBalanceToWei = (strValue, iDecimal = 18) => {
  const multiplyNum = new bigdecimal.BigDecimal(Math.pow(10, iDecimal))
  const convertValue = new bigdecimal.BigDecimal(String(strValue))
  return multiplyNum.multiply(convertValue).toString().split('.')[0]
}
export const detectImageUrl = (value) => {
  return encodeURI(value)
}
export const saveDataLocal = (key, data) => {
  // eslint-disable-next-line no-undef
  localStorage.setItem(key, JSON.stringify(data))
}
export const getDataLocal = (key) => {
  // eslint-disable-next-line no-undef
  return JSON.parse(localStorage.getItem(key))
}
export const removeDataLocal = (key) => {
  // eslint-disable-next-line no-undef
  localStorage.removeItem(key)
}
// export const validateNumber = (strNumber) => {
//   const reg = /^[0-9]+(\.)?[0-9]*$/
//   return reg.test(scientificToDecimal(strNumber))
// }
export const scrollTop = () => {
  if (window) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
export const numberWithCommas = (x) => {
  const parts = x.toString().split('.')
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}
export const copyToClipboard = (text, title) => {
  const tmp = document.createElement('input')
  tmp.value = text
  document.body.appendChild(tmp)
  tmp.select()
  document.execCommand('copy')
  tmp.remove()
  message.success(title ?? 'Copied!')
}
export const ellipsisAddress = (
  address,
  prefixLength = 13,
  suffixLength = 4
) => {
  return `${address.substr(0, prefixLength)}...${address.substr(
    address.length - suffixLength,
    suffixLength
  )}`
}

export default () => {}
