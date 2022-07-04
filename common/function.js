import bigdecimal from 'bigdecimal'
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

export default () => {}
