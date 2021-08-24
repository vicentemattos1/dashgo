import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Vicente Mattos</Text>
        <Text color="gray.300" fontSize="small">
          vicfilho1@hotmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Vicente Mattos"
        src="https://github.com/vicentemattos1.png"
      />
    </Flex>
  );
}
