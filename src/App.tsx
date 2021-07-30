import React, {useEffect,useState} from 'react';
import Users from './components/users/Users'
import { useUserContext } from './context/UserContext';
import { getUsers } from './functions/user.functions';
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/App.css';

function App() {
  const [loading, setLoading] = useState(true)
  const {userState:{users},userDispatch} = useUserContext()
  useEffect(() => {
    const fetchData = async() =>{
      if(users.length === 0 ){
        await getUsers(userDispatch)
        setLoading(false)
        return 
      }
      setLoading(false)
    }
    fetchData()
    return () => {
      
    }
  // eslint-disable-next-line
  }, [])  

  return (
    <div data-testid="app" className="App">
      <div className="app-header">
        <h4>React Context Api using Typescript & Json placeholder</h4>
      </div>
      { loading ? <div className="loading-spinner" /> : <Users/> }
      <footer>
        This project is designed & developed with &#10084; by <a href="https://github.com/supatechie">Peter Kelvin Torver</a>
      </footer>
    </div>
  );
}

export default App;
