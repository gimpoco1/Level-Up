import connectMongoDB from "app/mongodb";
import Task from "../../../model/Task";
import { NextResponse } from "next/server";

export async function POST(request){
    const {title, description, image} = await request.json();
   await connectMongoDB();
   await Task.create({title, description, image});
   return NextResponse.json({
    message: 'Task generated successfully',
   },{
    status: 201
   })
  }

export async function GET( request ){
       await connectMongoDB();
        const tasks = await Task.find({});
        return NextResponse.json({tasks});
    }



