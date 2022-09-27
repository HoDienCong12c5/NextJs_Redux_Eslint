import styled from 'styled-components'
import NormalText, {MediumText,TitleText} from 'components/Text'
const Container =styled.div`
    display: flex;
    flex-flow: row wrap;
    @media screen and  (min-width: 768px){
        flex-flow: column wrap;
    }
`

export const Left = styled.div`

`
export const About = styled(TitleText)`
    white-space: nowrap;
`
export const Des = styled(MediumText)`
    white-space: nowrap;
`
export const Right = styled.div`
`
export const ListSocial =styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;

`
export default Container