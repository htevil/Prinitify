import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export default function Dropbox({ para, value }) {
    return (
        <Menu>
            <MenuButton fontSize="16px" bg='transparent' border='none' margin="2px" _hover={{color:"#3fb65f"}} as={Button} rightIcon={<ChevronDownIcon />}>
                {para}
            </MenuButton>
            <MenuList bg='transparent' border="0.5px solid rgba(0,0,0,0.6)" borderRadius="3px" padding="5px 2px" marginTop="16px" zIndex="2" position="relative" backgroundColor="white"> 
                {value.map((item, index) => (
                    <MenuItem bg='transparent' border="none"  fontSize="14px" padding="8px 16px" _hover={{color:"#3fb65f"}}  key={index}>{item}</MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
}
