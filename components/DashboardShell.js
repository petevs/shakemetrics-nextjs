import { useContext } from 'react';
import { GlobalContext } from '../state/GlobalContext';
import DashboardHeader from './DashboardHeader'
import { AppShell, Burger, Header, MediaQuery, Navbar, useMantineTheme } from '@mantine/core';
import Nav from './Nav';
import DashboardPage from './DashboardPage';
import { toggleNav } from '../state/appReducer';

const DashboardShell = ({ slug, children }) => {
  const { state, dispatch } = useContext(GlobalContext)
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!state.navOpened}
          width={{ sm: 250 }}
        >
          <Nav />
        </Navbar>
      }
      header={
        <Header height={70} padding="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={state.navOpened}
                onClick={() => dispatch(toggleNav())}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <DashboardHeader />
          </div>
        </Header>
      }
    >
      <DashboardPage slug={slug} >
        {children}
      </DashboardPage>
    </AppShell>
  );
}

export default DashboardShell