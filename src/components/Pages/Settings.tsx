import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Text,
} from '@chakra-ui/react';
import {
    AiOutlineDownload as DownloadIcon,
    AiOutlineUpload as UploadIcon,
} from 'react-icons/ai';
import Decoder from '../GuestApp/components/QrCode/Decoder';
import Generator from '../GuestApp/components/QrCode/Generator';

export default function Settings(): JSX.Element {
    return (
        <Tabs isFitted variant="enclosed">
            <TabList mb="1em">
                <Tab _selected={{ color: 'white', bg: 'blue.500' }}>
                    <Text mr={3}>Save</Text> <DownloadIcon />
                </Tab>
                <Tab _selected={{ color: 'white', bg: 'green.400' }}>
                    <Text mr={3}>Load</Text> <UploadIcon />
                </Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Generator />
                </TabPanel>
                <TabPanel>
                    <Decoder />
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}
