
import styled from 'styled-components'
import NormalText, { MediumText, TitleText } from 'components/Text'
import {Color} from 'common/constants'
import ButtonBasic from 'components/ButtonBasic'
const Container = styled.div`
`
export const InforGeneral= styled.div`
    display: flex;
    flex-direction: row wrap;
    justify-content: space-between;
`
export const InforLeft= styled.div`
   width:49%;
`
export const InforRight= styled.div`
   width:49%;
   display: flex;
   flex-direction: column wrap;
   gap:10px;
`
export const InforTitle= styled( TitleText )`
    font-weight:bold;
`
export const InforDes= styled( NormalText )`
        
`
export const InforPrice= styled( MediumText )`
    color: ${Color.red};
`
export const ButtonBuy= styled( ButtonBasic )`
        
`
export const ButtonAdd= styled( ButtonBasic )`
        
`
export const Description= styled.div`
    
`
export const RelatedProduct= styled.div`
    
`

export default Container