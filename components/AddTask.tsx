import { SmallAddIcon } from "@chakra-ui/icons";
import { Button, Flex, Input } from "@chakra-ui/react";
import { AddTaskProps } from "@types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem">
      <Input
        className="myClass"
        placeholder="Nouvelle tâche..."
        size="lg"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        style={{ background: "#1a1a1a", color: "#FFF" }}
        _placeholder={{ color: "#FFFFFF" }}
      />
      <Button colorScheme="twitter" size="lg" onClick={handleCreateTask}>
        <SmallAddIcon />
      </Button>
    </Flex>
  );
};

export default AddTask;
