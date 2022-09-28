import React from 'react'
import Image from 'components/Image'
import messages from 'common/constants'
import Media from 'react-media'
import ContainerFooter, {
  Left,
  Right,
  About,
  AboutDetails,
  DesAbout,
  Des,
  ContainerMoreLink
} from './styled'
import img from 'common/images'
import GGMap from './components/ggMap'
const Footer = () => {

  const renderMoreLink = () => {
    const lisIcon = [
      {
        link: 'https://github.com/HoDienCong12c5',
        icon: img.footer.iconGithub
      },
      {
        link: 'https://www.facebook.com/profile.php?id=100080400793331',
        icon: img.footer.iconFace
      },
      {
        link: 'https://www.instagram.com/hodiencong/',
        icon: img.footer.iconIntagram
      },
      {
        link: 'https://www.linkedin.com/in/c%C3%B4ng-h%E1%BB%93-di%C3%AAn-b3618a225/',
        icon: img.footer.iconLinkedin
      },
      {
        link: 'https://www.tiktok.com/@hodiencong12c5',
        icon: img.footer.iconTitok
      },
      {
        link: 'https://www.youtube.com/channel/UC4gi_FRKga2hVjTK1Ol1PnA',
        icon: img.footer.iconYoutube
      },
      // { 
      //   link:'https://www.youtube.com/channel/UC4gi_FRKga2hVjTK1Ol1PnA',
      //   icon:img.footer.iconZalo
      // }
    ]
    return (
      <ContainerMoreLink >
        {
          lisIcon.map(item => (
            <Des key={item.icon} isHover>
              <a href={item.link} target="_blank">
                <Image src={item.icon} height={30} width={30} />

              </a>
            </Des>
          ))
        }
      </ContainerMoreLink>
    )
  }
  const renderAboutDetails = () => (
    <AboutDetails >
      <DesAbout >
        <Image src={img.footer.iconNumberPhone} height={25} width={25} />
          0392225405
      </DesAbout>
      <DesAbout >
        <Image src={img.footer.iconGmail} height={25} width={25} />
          hodiecong12c5@gmail.com
      </DesAbout>
      <DesAbout >
        <Image src={img.footer.iconAddress} height={25} width={25} />
          83 41, Phạm Văn Bạch, P.15, Tân Bình, TP.HCM
      </DesAbout>
      <DesAbout >
        <Image src={img.footer.iconAddress} height={25} width={25} />
          Thôn thanh giáo, IAKREL, Đức Cơ, Gia Lai
      </DesAbout>
     
    </AboutDetails>
  )
  const renderMobile = () =>{
   return (
    <div className={'padding'} >
      <GGMap/>
      </div>
    )
  }
  const renderDesktop = () => {
    return (
      <ContainerFooter className={'padding'} >
      <Left >
        <About > {messages.Title.aboutContact}  </About>
        {renderAboutDetails()}
        {renderMoreLink()}
        <Des >
          {/* <Image src={''} height={35} width={35}/> */}
        </Des>
      </Left>
      <Right>
        <GGMap/>
      </Right>
    </ContainerFooter>
    )
  }
  return (
    <Media query='(min-width: 768px)'>
    {(match) => {
      if (match) {
        return renderDesktop()
      }
      return renderMobile()
    }}
  </Media>
  )
}
export default Footer
