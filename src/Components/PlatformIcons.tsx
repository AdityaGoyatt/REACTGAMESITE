import { game, Platform } from "../hooks/useGames";
import useGames from "../hooks/useGames";
import { Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaXbox,
  FaApple,
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
interface Props {
  platforms: Platform[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    playstation: FaPlaystation,
    android: FaAndroid,
  };

  console.log(platforms);

  return (
    <>
      {platforms.map((platform) => (
        <Icon mr="5px" as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </>
  );
};

export default PlatformIcons;
