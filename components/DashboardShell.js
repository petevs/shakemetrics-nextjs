import { useState } from 'react';
import DashboardHeader from './DashboardHeader'
import { AppShell, Burger, Header, MediaQuery, Navbar, Text, useMantineTheme } from '@mantine/core';
import Nav from './Nav';
import DashboardPage from './DashboardPage';

const DashboardShell = ({ slug, children }) => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();

  return (
    <AppShell
      navbarOffsetBreakpoint="sm"
      fixed
      navbar={
        <Navbar
          padding="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
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
                opened={opened}
                onClick={() => setOpened((o) => !o)}
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