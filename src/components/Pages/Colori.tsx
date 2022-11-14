import { Box } from '@chakra-ui/react';
import BrandColorPicker from '../Options/BrandColorPicker';
import { colori } from '../../data/colori';

type IColoriProps = {};

export default function Colori(_props: IColoriProps) {
    return (
        <Box>
            {colori.map((color) => (
                <Box mb={7} key={color.store_key}>
                    <BrandColorPicker
                        brandColorName={color.store_key}
                        title={color.alias}
                    />
                </Box>
            ))}
        </Box>
    );
}
