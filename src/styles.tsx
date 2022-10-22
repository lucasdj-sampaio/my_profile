import styled from 'styled-components'
import userImg from './img/userIcon.png'
import backgroundImg from './img/background.jpg'
import { GithubLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'

const ContentDisplay = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export function CreateBackground() {
  return (
    <ImgBackground src={backgroundImg}></ImgBackground>
  )
}

const ImgBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 85vh;
`;

export function CreateMenuBar() {
  return (
      <ContentDisplay>
        <ImgDiv>
          <ImageProps src={userImg}></ImageProps>
        </ImgDiv>
        
        <nav>
          <UlMenu>
            <LiOption>Work</LiOption>
            <LiOption>Services</LiOption>
            <LiOption>About</LiOption>
          </UlMenu>
        </nav>
      </ContentDisplay>
  )
}

const ImgDiv = styled.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: pink;
  padding: 10px 18px;
`;

const ImageProps = styled.img`
  height: 50px;
`;

const UlMenu = styled.ul`
  display: flex;
  aling-items: center;
  column-gap: 30px;
`;

const LiOption = styled.li`
  list-style-type: none;
  color: #FFF;
`;

export function SocialMedia(){
  return(
    <ContentDisplay>
      <SmDiv>
        <GithubLogo size={51} weight="fill" color="#FFF" />
        <LinkedinLogo size={51} weight="fill" color="#FFF" />
        <WhatsappLogo size={51} weight="fill" color="#FFF" />
      </SmDiv>

      <div>
        <h1>I'M LUCAS</h1>
        <h2>FULLSTACK DEVELOPER</h2>
      </div>
    </ContentDisplay>
  )
}

const SmDiv = styled.div`
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;