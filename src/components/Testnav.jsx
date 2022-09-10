import { Container, chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion, isValidMotionProp } from "framer-motion";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

import {HamburgerIcon } from "@chakra-ui/icons";
const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};
export default function Testnav() {
  return (
    <Container
      h="1vh"
      display="block"
      width= '1vh'
      className=""
    >
      <ChakraBox
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
        //   exit={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 0.6,
          }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant={itemVariants}
            className="fixed"
          />

          <MenuList className="">
            <MenuItem>
              <motion.a whileHover={{ scale: 1.1 }} variants={sideVariants}>
                Download
              </motion.a>
            </MenuItem>

          <MenuItem>
              <motion.a whileHover={{ scale: 1.1 }} variants={sideVariants}>
                Download
              </motion.a>
            </MenuItem>
  
          <MenuItem>
              <motion.a whileHover={{ scale: 1.1 }} variants={sideVariants}>
                Download
              </motion.a>
            </MenuItem>

          <MenuItem>
              <motion.a whileHover={{ scale: 1.1 }} variants={sideVariants}>
                Download
              </motion.a>
            </MenuItem>
          </MenuList>
        </Menu>
      </ChakraBox>
    </Container>
  );
}
