import styled from 'styled-components'

export function CreateMenuBar() {
  return (
    <MenuBar>
      <div>
        <UserImg></UserImg>
      </div>
      
      <div>
        <CreateOptions></CreateOptions>
      </div>
    </MenuBar>
  )
}

const MenuBar = styled.div`
  background: transparent;
  align-items: center;
  display: flex;
  justify-content: space-around;

  .ul{
    display: content;
  }
`;

const UserImg = styled.img`
  content: url("./img/userIcon.JPG");
  border-radius: 90px;
  width: 130px;
  height: 130px;
`;

function CreateOptions(){
  return(
    <ul>
      <li>Work</li>
      <li>Services</li>
      <li>About</li>
    </ul>
  )
}