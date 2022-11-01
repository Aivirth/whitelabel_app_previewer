import { AiFillStar as StarIcon } from 'react-icons/ai';
import { Flex, Text } from '@chakra-ui/react';

interface IReviews {
    score: string;
    reviewsCount: string;
}

const Reviews = ({ score, reviewsCount }: IReviews) => {
    return (
        <Flex color="yellow.300" fontSize={'1.1rem'} marginBottom={2}>
            <StarIcon />
            <Text fontSize={'0.7rem'} color={'gray.500'} marginLeft={2}>
                {score} ({reviewsCount} Reviews)
            </Text>
        </Flex>
    );
};

export default Reviews;
