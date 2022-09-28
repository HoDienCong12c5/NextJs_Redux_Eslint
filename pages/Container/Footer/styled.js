import styled from 'styled-components'
import NormalText, {MediumText,TitleText} from 'components/Text'
const Container =styled.div`
    display: flex;
    flex-flow: row wrap;
    @media screen and  (min-width: 768px){
        flex-flow: column wrap;
    }
    margin: 15px 0px;
`

export const Left = styled.div`

`
export const About = styled(TitleText)`
    white-space: nowrap;
    font-size:32px;
    @media screen and (min-width: 768px){
        font-size:24px;
    }
`
export const AboutDetails = styled.div`
    display: flex;
    flex-flow: column wrap;
    gap: 10px;
    margin-bottom: 20px;
`
export const Des = styled(MediumText)`
    white-space: nowrap;
    cursor: ${props=>props.isHover &&'pointer'};
`
export const DesAbout = styled(MediumText)`
    white-space: nowrap;
    cursor:pointer;
    display: flex;
    flex-direction: row wrap;
    gap:5px;
    max-width: 500px;
    align-items: end;
    font-weight: 500;
`
export const Right = styled.div`
`
export const ContainerMoreLink = styled.div`
    
    display: flex;
    flex-flow: row;
    gap:15px;

`
export const ListSocial =styled.div`
    display: flex;
    flex-direction: row;
    gap:15px;

`
export default Container