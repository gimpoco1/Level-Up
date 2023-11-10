import Image from 'next/image'
import TaskCard from 'components/TaskCard'
import ProgressionBar from 'components/ProgressionBar'
export default async function Home() {

  return (
    <main >
      <ProgressionBar/>
      <TaskCard />
    </main>
  )
}
