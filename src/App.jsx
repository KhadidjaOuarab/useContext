import './App.css'
import Page from './Page'
import {UserContext} from './Context'

function App() {
   
  const myuser = {name : 'khadidja', age : '37'}
  return (
    <div className="App">
     <UserContext.Provider value={myuser}>
     {/* <Page name='khadidja' age='37'/> */}
     <Page />
     </UserContext.Provider>
    </div>
  )
}

export default App
