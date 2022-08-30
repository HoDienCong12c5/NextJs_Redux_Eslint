import styled from 'styled-components'
import { Color } from 'common/constants'
const DivNormal = styled.div`
  width: 100%;
  padding: 10px;
`
export const DivBorder = styled.div`
  --b: 1px solid ${Color.grey};
  border: var(--b);
  width: 100%;
`
export const DivRa = styled.div`
  --r: 16px;
  border-radius: var(--r);
  width: 100%;
`
export const DivRaBase = styled.div`
  --r: 8px;
  border-radius: var(--r);
  width: 100%;
`
export const DivAllBase = styled(DivRaBase)`
  --b: 1px solid ${Color.grey};
  border: var(--b);
  width: 100%;
  padding: 10px;
`
export const DivAll = styled.div`
  --r: 16px;
  --b: 1px solid ${Color.grey};
  border-radius: var(--r);
  border: var(--b);
  width: 100%;
  padding: 10px;
`
export const Div = styled.div`
  width: 100%;
  padding: 0px 100px;
  /* background-color:${Color.grey} ; */
  @media screen and (max-width: 768px) {
    padding: 0px 50px;
  }
  @media screen and (max-width: 568px) {
    padding: 0px 20px;
  }
`
export default DivNormal
