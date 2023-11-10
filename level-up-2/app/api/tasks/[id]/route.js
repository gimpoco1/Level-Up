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
    const {id}= params    
    console.log(id);
    await connectMongoDB();
    
    const res = await Task.findByIdAndDelete(id);
    console.log(res);
    return NextResponse.json({
        message: 'Task deleted successfully',
    },{
        status: 200
    })
}