import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'

import { ButtonTheme, Container, NavItem, NavMenu } from './NavStyle'

const Nav = ({ tema, setTema }) => {
  const changeMode = () => {
    if (tema === 'DarkTheme') setTema('LightTheme')
    if (tema === 'LightTheme') setTema('DarkTheme')
  }

  return (
    <Container>
      <NavItem>
        <NavMenu>
          <p>SBY Technologies - Pokemon</p>
        </NavMenu>
      </NavItem>
      <NavItem>
        <NavMenu>
          <li>Inicio</li>
          <ButtonTheme onClick={() => changeMode()}>
            {tema === 'DarkTheme' ? <HiOutlineSun /> : <HiOutlineMoon />}
          </ButtonTheme>
          <li />
        </NavMenu>
      </NavItem>
    </Container>
  )
}

export default Nav
