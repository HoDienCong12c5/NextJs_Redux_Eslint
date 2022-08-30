import styled from 'styled-components'
import {Color} from 'common/constants'
export const TitleText = styled.div`
  font-size: ${(props) => `${props.size ?? 22}px`};
  color: ${(props) => props.color ?? Color.black};
  font-weight: ${(props) => props.fontWeight ?? 'bold'};
  text-transform: ${(props) => (props.textTransform ? 'uppercase' : 'none')};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.size ?? 18}px`};
  }
`
export const MediumText = styled.div`
  font-size: ${(props) => `${props.size ?? 16}px`};
  color: ${(props) => props.color ?? Color.black};
  font-weight: ${(props) => props.fontWeight ?'bold': 300};
  text-transform: ${(props) => (props.textTransform ? 'uppercase' : 'none')};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.size ?? 16}px`};
  }
`
const NormalText = styled.div`
  font-size: ${(props) => `${props.size ?? 13}px`};
  color: ${(props) => props.color ?? Color.black};
  font-weight: ${(props) => props.fontWeight ?? 300};
  text-transform: ${(props) => (props.textTransform ? 'uppercase' : 'none')};
  @media screen and (max-width: 768px) {
    font-size: ${(props) => `${props.size ?? 12}px`};
  }
  opacity: ${(props) => (props.opacity ? 0.7 : props.opacitySize ?? 1)};
`

export default NormalText
