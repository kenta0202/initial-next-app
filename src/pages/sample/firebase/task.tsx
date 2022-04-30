/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from "react";
import useGetTasks from "util/hooks/firebase/useGetTasks";
import { FormControl, TextField } from "@mui/material";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { db } from "../../../firebase";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import TaskList from "components/sample/firebase/store/TaskList";

const Task = () => {
  const tasks = useGetTasks();
  const [input, setInput] = useState("");

  const newTask = async () => {
    await addDoc(collection(db, "tasks"), { title: input });
    setInput("");
  };

  return (
    <div className=" m-2">
      <h3 className=" my-2 text-2xl">
        <span className="text-lg">■</span> TodoApp
      </h3>
      <div className="flex gap-2 ">
        <FormControl>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="New task?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></TextField>
        </FormControl>
        <button disabled={!input} className="cursor-pointer" onClick={newTask}>
          <AddToPhotosIcon />
        </button>
      </div>
      <div>
        {tasks && (
          <div className=" m-4">
            {tasks.map((user) => (
              <TaskList title={user.title} key={user.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
