import {
    useDisclosure,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Box,
} from '@chakra-ui/react';

interface IAlert {
    descr: string;
    variant?: 'subtle' | 'solid' | 'left-accent' | 'right-accent';
    status?: 'error' | 'success' | 'warning' | 'info';
}

export default function ({ descr, variant, status }: IAlert) {
    const { isOpen: isVisible, onClose } = useDisclosure({
        defaultIsOpen: true,
    });

    return isVisible ? (
        <Alert variant={variant} status={status}>
            <AlertIcon />
            <AlertDescription>{descr}</AlertDescription>
        </Alert>
    ) : null;
}
