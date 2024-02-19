import { Alert, AlertIcon, Flex } from "@chakra-ui/react";

const NoTask = () => {
  return (
    <Flex>
      <Alert status="warning">
        <AlertIcon />
        Pas de tâche pour le moment.
      </Alert>
    </Flex>
  );
};

export default NoTask;
