import styled from 'styled-components'
import userImg from './img/userIcon.jpg'

export function CreateMenuBar() {
  return (
    <MenuBar>
      <div>
        <ImageProps src={userImg}></ImageProps>
      </div>
      
      <div>
        <ul>
          <li>Work</li>
          <li>Services</li>
          <li>About</li>
        </ul>
      </div>
    </MenuBar>
  )
}

const MenuBar = styled.div`
  background: transparent;
  align-items: center;
  display: flex;
  justify-content: space-around;

  .img{
    
  }

  .ul{
    
  }
`;

const ImageProps = styled.img`
  border-radius: 50%;
  width: 130px;
  height: 130px;
`;

function CreateOptions(){
  return(
    
  )
}