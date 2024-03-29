import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components' 
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import db from './firebase'
import { useEffect, useState } from 'react';
import { auth } from './firebase'

function App() {

  // stores the data from firebase
  const [rooms, setRooms] = useState([])
  const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('user'))) 

const getGroups = () => {
  db.collection('rooms').onSnapshot(snapshot => {
    setRooms(snapshot.docs.map((doc) => {
     return { id: doc.id, name: doc.data().name }
   }))
  })
}

  const signOut = () => {
    auth.signOut().then(()=>{
      localStorage.removeItem('user')
      setUser(null)
    })
  }

// runs it once
useEffect(() => {
  getGroups();
}, [])

  return (
    <div className="App">
      <Router>
      { 
        !user ?
        <Login setUser={setUser}/>
        :
          <Container>
            <Header signOut={signOut} user={user}/>
              <Main>
                <Sidebar rooms={rooms}/>
                  <Switch>
                    <Route path='/room/:groupId'>
                      <Chat user = {user}/>
                    </Route>
                    <Route path='/'>
                      Select or Add Group
                    </Route>
                  </Switch>
                </Main>
          </Container>
      }
      </Router>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 35px minmax(0, 1fr);
`
const Main = styled.div`
  display: grid;
  grid-template-columns: 250px auto
`
