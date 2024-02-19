"use client";
import Header from "@/components/Header";
import { Flex, Spinner } from "@chakra-ui/react";
import AddTask from "@components/AddTask";
import NoTask from "@components/NoTask";
import { ITask } from "@types";
import { useEffect, useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allTasks, setAllTasks] = useState([]);

  const handleCreateTask = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/task/new", {
        method: "POST",
        body: JSON.stringify({
          task: task,
        }),
      });
      if (response.ok) {
        setTask("");
        fetchTasks();
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const fetchTasks = async () => {
    try {
      const response = await fetch("/api/task/all");
      const data = await response.json();
      setAllTasks(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Header />
      <AddTask
        task={task}
        setTask={setTask}
        handleCreateTask={handleCreateTask}
      />
      {isLoading ? (
        <Spinner m="auto" display="flex" />
      ) : (
        <>
          <Flex direction="column" p="2rem">
            {allTasks.length > 0 ? (
              allTasks.map((individualTask: ITask) => (
                <p key={individualTask._id}>{individualTask.task}</p>
              ))
            ) : (
              <NoTask />
            )}
          </Flex>
        </>
      )}
    </>
  );
}
