import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Vicente Mattos</Text>
          <Text color="gray.300" fontSize="small">
            vicfilho1@hotmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Vicente Mattos"
        src="https://github.com/vicentemattos1.png"
      />
    </Flex>
  );
}
