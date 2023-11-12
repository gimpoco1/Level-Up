import connectMongoDB from "app/mongodb";
import Task from "model/Task";
import { NextResponse } from "next/server";


export async function PUT(request, {params}){
    const {id} = params;
    const {newCompleted: completed} = await request.json();
    await connectMongoDB();
    await Task.findByIdAndUpdate(id, {completed});
    return NextResponse.json({
        message: 'Task updated successfully',
    },{
        status: 200
    })
}

export async function DELETE(request, {params}){
    const {id}= params;  
    await connectMongoDB();
    const res = await Task.findByIdAndDelete(id);
    return NextResponse.json({
        message: 'Task deleted successfully',
    },{
        status: 200
    })
}
export async function GET(request){
    await connectMongoDB();
    const completedCount = await Task.countDocuments({ completed: true });
    console.log('Count: ',completedCount);
    return NextResponse.json({
        completedCount
    }, {
        status: 200
    });
   
}