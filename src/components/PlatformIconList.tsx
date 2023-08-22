import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { IconType } from "react-icons";

import { Icon, HStack } from '@chakra-ui/react';
import { Platform } from '../hooks/useGames';
interface Props {
    platforms: Platform[]

}

const PlatformIconList = ({platforms}: Props) => {
    /* the [key: string] is an index signature, 
    this represents a key property in this object.
    so here we hae various keys like pc, playstation etc. 
    by using an indec signature syntax, we do not have to specify 
    the name of the various keys.
    so heere we say, that the object has any number of keys of type string.
    */
    const iconMap: {[key: string]: IconType}= { 
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux, 
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe
  }

  return (
      /* When setting the margin to a plain number, not in a string, 
      the number will be multiple of the theme 
      the default value in chakra is 4. so if the marginU={1},
      the actual number will be 4
      when putting the number in a string, we get exactly the number we write in the string
      */
      <HStack marginY="10px"> 
     
    {platforms.map(platform => 
        <Icon as = {iconMap[platform.slug]} color='gray.500'/>
    )}
     </HStack>
  )
}

export default PlatformIconList