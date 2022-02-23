import { useContext } from 'react';
import { GlobalContext } from '../state/GlobalContext';
import DashboardHeader from './DashboardHeader'
import { AppShell, Burger, Header, MediaQuery, Navbar, useMantineTheme } from '@mantine/core';
import Nav from './Nav';
import DashboardPage from './DashboardPage';
import DemoNotification from './DemoNotification';
import { toggleNav } from '../state/appReducer';
import Footer from './Footer';

const DashboardShell = ({ noNav, children }) => {
  const { state, dispatch } = useContext(GlobalContext)
  const { demo } = state
  const theme = useMantineTheme();

  return (
    <>
      <AppShell
        navbarOffsetBreakpoint="sm"
        fixed
        navbar={
          noNav 
          ? 
            <></>
          :
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
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              height: '100%',
              justifyContent: 'center', 
            }}>
              {
                !noNav &&
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={state.navOpened}
                    onClick={() => dispatch(toggleNav())}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>
              }
              <DashboardHeader noNav={noNav} />
            </div>
          </Header>
        }
      >
        <DashboardPage>
          {children}
        </DashboardPage>
        <Footer />
      </AppShell>
      {(demo && !noNav) && <DemoNotification />}
    </>
  );
}

export default DashboardShell