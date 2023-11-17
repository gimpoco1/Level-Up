import middleware from "@/app/mongodb";
// import Task from "@/app/model/Task";
import nextConnect from "next-connect";


const handler = nextConnect();

handler.use(middleware);

handler.get(async (req, res) => {
    const tasks = await req.db.collection('tasks').find({}).toArray();
    res.json(tasks);

})

export default handler;
// TODO: Delete commented code

// export default async function handler(req, res) {
//     await clientPromise();

//     const { method } = req;

//     switch (method) {
//       case 'GET':
//         // Get all tasks
//         try {
//           const tasks = await Task.find({});
//           res.status(200).json(tasks);
//         } catch (error) {
//           res.status(500).json({ message: error.message });
//         }
//         break;

//       case 'POST':
//   // Create a new task
//          try {
//         const newTask = new Task(req.body);
//          const savedTask = await newTask.save();
//          res.status(201).json(savedTask);
//         } catch (error) {
//            res.status(400).json({ message: error.message });
//          }
//          break;
//       case 'PATCH':
//   // Update a task
//   try {
//     const { id } = req.query; // Get the task ID from the URL query
//     const task = await Task.findById(id); // Find the task by ID

//     if (!task) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//     // Update the task with the new values. Only update fields that are provided.
//     const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
//     res.status(200).json(updatedTask);
//     console.log(updatedTask);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
//   break;
//   case 'DELETE':
//   // Delete a task
//   try {
//     const { id } = req.query;
//     const task = await Task.findById(id);

//     if (!task) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//     await task.remove();
//     res.status(200).json({ message: 'Task deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
//   break;
//     }
//   }