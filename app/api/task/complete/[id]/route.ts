import Task from "@models/tasks";
import { IDeleteTaskRequestParam } from "@types";
import { connectToDB } from "@utils/database";
import { NextResponse } from "next/server";

export const PATCH = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();
    const existingTask = await Task.findById(params.id);

    if (!existingTask) {
      return NextResponse.json("Task not found", { status: 404 });
    }
    existingTask.completed = true;
    await existingTask.save();
    return NextResponse.json("Task completed successfully", { status: 200 });
  } catch (error) {
    return NextResponse.json("Error completing task", { status: 500 });
  }
};
