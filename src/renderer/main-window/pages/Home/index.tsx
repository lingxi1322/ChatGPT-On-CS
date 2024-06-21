import React, { useEffect } from 'react';
import {
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Stack,
} from '@chakra-ui/react';
import PageContainer from '../../../common/components/PageContainer';
import ReplyKeyword from './ReplyKeyword';
import { trackPageView } from '../../../common/services/analytics';
import AppManager from './AppManager/index';
import Panels from './Panels';
import LogBox from './LogBox';

const HomePage = () => {
  const currentVersion = window.electron.ipcRenderer.get('get-version');
  useEffect(() => {
    trackPageView(`Home-${currentVersion}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <ReplyKeyword />
      <Box mb={4}>
        <Tabs>
          <TabList>
            <Tab>应用</Tab>
            <Tab>连接</Tab>
            <Tab>日志</Tab>
          </TabList>

          <TabPanels>
            <TabPanel padding="0">
              <Stack>
                <AppManager />
              </Stack>
            </TabPanel>
            <TabPanel>
              <Panels />
            </TabPanel>
            <TabPanel>
              <LogBox />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
      {/* <PlatformTabs /> */}
    </PageContainer>
  );
};

export default HomePage;
