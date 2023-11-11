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

export async function GET( req, res ){
       await connectMongoDB();
        const task = await Task.aggregate([{ $sample: { size: 1 } }]);
        return NextResponse.json({task});
    }
