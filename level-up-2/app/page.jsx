import Image from 'next/image'
import TaskCard from 'components/TaskCard'
export default async function Home() {
  // const data = await fetch(`mongodb://127.0.0.1:27017/Tasks`)
  // const res = await data.json()
  // console.log(res)
  return (
    <main >
      <TaskCard />
    </main>
  )
}
