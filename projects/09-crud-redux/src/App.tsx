import { Toaster } from 'sonner'
import './App.css'
import { CreaetNewUser } from './components/CreateNewUser'
import { ListOfUsers } from './components/ListOfUsers'

function App() {

  return (
    <>
      <ListOfUsers />
      <CreaetNewUser />
      <Toaster richColors />
    </>
  )
}

export default App
