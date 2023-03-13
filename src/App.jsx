import { useState } from 'react';
import List from './components/List';
import Button from './components/Button';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const defaultAlertValues = {
  show: false,
  msg: '',
  type: '',
}

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState(defaultAlertValues);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('button clicked!');

    toast.success("Item is added into the list! 🚀", {
      position: toast.POSITION.TOP_RIGHT,
      className: 'alert',
      autoClose: 1000
    })
  };

  return (
    <>
      <ToastContainer />
      <section className="section-center">
        <h1>Pantry Pal</h1>
        <List />
        <Button linkBtn>Clear items</Button>
      </section>
    </>
  )
}

export default App
