import Nav from '../components/Nav'
import Table from '../components/Table/Table'

export default function Home() {
  return (
  <div>
    <Nav />
    <div className='container mx-auto mt-20'>
        <Table />
    </div>
  </div>
  )
}
