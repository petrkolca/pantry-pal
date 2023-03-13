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
  const [itemName, setItemName] = useState('');
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState(defaultAlertValues);

  const onChangeHandler = (e) => {
    setItemName(e.target.value)
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('button clicked!');

    if (alert) {
      // show alert notification if ALERT is set
      toast.success("Item is added into the list! 🚀", {
        position: toast.POSITION.TOP_RIGHT,
        className: 'alert',
        autoClose: 1000
      })
    }

  };

  return (
    <>
      <ToastContainer />
      <section className="section-center">
        <form className="" onSubmit={onSubmitHandler}>
          <h1>Pantry Pal</h1>
          <div className="form-control">
            <input 
              type="text"
              name="pantry-item"
              id="pantry-item" 
              placeholder="eg. Buy Eggs"
              value={itemName}
              onChange={onChangeHandler}
            />
            <Button type="submit" onClickFn={() => {}}>
              {isEditing ? "Edit" : "Submit"}
            </Button>
          </div>
        </form>
        <div>
          <List />
          <Button linkBtn>Clear items</Button>
        </div>
      </section>
    </>
  )
}

export default App
