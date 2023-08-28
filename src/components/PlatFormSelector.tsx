import { Button, Menu, MenuButton, MenuItem, MenuList,  } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlaforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
    onSelectPlaform: (platform: Platform) => void
    selectedPlatform: Platform | null
}
const PlatFormSelector = ({onSelectPlaform, selectedPlatform}: Props) => {
    const {data, error} = usePlaforms()

    if(error) return null;
  return (
    <Menu>
        <MenuButton 
        as={Button}
        rightIcon={<BsChevronDown/>}
        > {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
            {data.map(platform => 
            <MenuItem 
            onClick={()=> onSelectPlaform(platform)}
            key ={platform.id}>{platform.name}</MenuItem>) }
        </MenuList>
    </Menu>
  )
}

export default PlatFormSelector