import { Alert, AlertIcon, Flex } from "@chakra-ui/react";

const IsEmpty = () => {
  return (
    <Flex>
      <Alert status="error">
        <AlertIcon />
        Le champ ne peut pas être vide.
      </Alert>
    </Flex>
  );
};

export default IsEmpty;
