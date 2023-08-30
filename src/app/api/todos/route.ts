import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBconfig/dbConfig";
import UserRole from "@/models/userRoleModel";
import Todo from '@/models/todoModel';

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const role = await UserRole.findOne({_id: user.role});

    // Getting all the todos of the user
    const todos = await Todo.find({ userId : userId }).exec();

    if(todos.length === 0){
        return NextResponse.json({
            success: false,
            message: "No todos found",
        }, {status: 404});
    }

    return NextResponse.json({
        success: true,
        message: "Todos found",
        data: todos,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
    try {
        const userId = getDataFromToken(request);
        const reqBody = await request.json();
        const { title, description, dueDate, dueTime } = reqBody;

        const newTodo = new Todo({
            userId,
            title,
            description,
            dueDate,
            dueTime
        });

        const savedTodo = await newTodo.save();

        return NextResponse.json({
            success: true,
            message:"Todo created successfully",
            data: savedTodo,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}