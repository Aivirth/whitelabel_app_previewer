import { Box, Input, Text } from '@chakra-ui/react';
import styles from './Calendar.module.css';

//interface ICalendar {}

function range(start: number, end: number) {
    return Array.from({ length: end - start + 1 }, (_, i) => i);
}

const Days: Function = (): JSX.Element[] => {
    const offset = [0, 0, 0];
    const days = range(0, 30);
    const monthTable = [...offset, ...days];
    return monthTable.map((day, index) => (
        <Box
            key={day + index}
            className={
                styles.calendar__number +
                ' ' +
                (day === 13 ? styles.calendar__number_current : '')
            }
        >
            {day === 0 ? '' : day}
        </Box>
    ));
};

export default function Calendar() {
    return (
        <Box className={styles.calendar} boxShadow="lg">
            <Box
                paddingX="20px"
                pt="20px"
                display={'flex'}
                alignItems="center"
                flexWrap={'wrap'}
            >
                <Box
                    as="label"
                    htmlFor="book_time_from"
                    display={'block'}
                    marginRight="auto"
                >
                    <Text fontWeight={'bold'} fontSize="1.1rem">
                        From
                    </Text>
                </Box>
                <Input
                    display={'inline-block'}
                    width="auto"
                    id="book_time_from"
                    type="time"
                    name="book_time_from"
                    defaultValue="09:30"
                />
            </Box>
            <Box
                paddingX="20px"
                pt="20px"
                display={'flex'}
                alignItems="center"
                flexWrap={'wrap'}
            >
                <Box
                    as="label"
                    htmlFor="book_time_to"
                    display={'block'}
                    marginRight="auto"
                >
                    <Text fontWeight={'bold'} fontSize="1.1rem">
                        To
                    </Text>
                </Box>
                <Input
                    display={'inline-block'}
                    width="auto"
                    id="book_time_to"
                    type="time"
                    name="book_time_to"
                    defaultValue="20:30"
                />
            </Box>
            <div className={styles.calendar__date}>
                <div className={styles.calendar__day}>M</div>
                <div className={styles.calendar__day}>T</div>
                <div className={styles.calendar__day}>W</div>
                <div className={styles.calendar__day}>T</div>
                <div className={styles.calendar__day}>F</div>
                <div className={styles.calendar__day}>S</div>
                <div className={styles.calendar__day}>S</div>
                <Days />
            </div>
        </Box>
    );
}
