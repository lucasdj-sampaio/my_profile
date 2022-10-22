import { CreateMenuBar, CreateBackground, SocialMedia } from './styles'
import styled from 'styled-components'

function App() {
  return (
    <div>
      <CreateBackground></CreateBackground>

      <Container>
        <CreateMenuBar></CreateMenuBar>
        <SocialMedia></SocialMedia>
      </Container>
    </div>
  )
}

const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
`;

export default App