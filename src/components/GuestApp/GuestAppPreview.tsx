import { useSelector } from 'react-redux';
import { State } from '../../state/reducers/index';
import { Box } from '@chakra-ui/react';
import Login from './Pages/Login';
import Carousel from './components/Carousel/Carousel';

import Overview from './Pages/Apartment/Overview';
import Booking from './Pages/Apartment/Booking';
import History from './Pages/History/History';

type Props = {};

function GuestAppPreview({}: Props) {
    const store = useSelector((state: State) => state);

    //   console.log(store);
    const {
        colors: brandColors,
        brand: brandData,
        loginAndPin,
        room: roomData,
    } = store;
    const loginBgImage = loginAndPin.loginBgImage;

    // console.log(brandData);
    return (
        <Carousel>
            <Box width="360px" height="740px">
                <Login brandColors={brandColors} loginBgImage={loginBgImage} />
            </Box>
            <Box width="360px" height="740px">
                <Overview brandColors={brandColors} />
            </Box>
            <Box width="360px" height="740px">
                <Booking brandColors={brandColors} />
            </Box>
            <Box width="360px" height="740px">
                <History brandColors={brandColors} data={roomData} />
            </Box>
        </Carousel>
    );
}

export default GuestAppPreview;
