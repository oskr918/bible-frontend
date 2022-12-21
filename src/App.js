import './App.css';
import AddUserForm from './components/AddUserForm';
import PermanentDrawerLeft from './components/PermanentDrawerLeft';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      <PermanentDrawerLeft></PermanentDrawerLeft>
      <AddUserForm></AddUserForm>
      <UserList></UserList>
    </div>
  );
}

export default App;
