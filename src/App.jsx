import { useState } from 'react';
import List from './components/List';
import Input from './components/Input';
import Button from './components/Button';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const defaultAlertValues = {
  show: false,
  msg: '',
  type: '',
}

function App() {
  const [itemName, setItemName] = useState("");
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

    if (!itemName) {
      
      if (alert) {
        // show alert notification if ALERT is set
        toast.success("Item is added into the list! 🚀", {
          position: toast.POSITION.TOP_RIGHT,
          className: 'alert',
          autoClose: 1000
        })
      }
    } else if(itemName && isEditing) {
      // Edit item in form func.

    } else {
      // Show Success Alert

      // Create NEW Item
      const newItem = {
        id: new Date().getTime().toString(),
        title: itemName,
      }
      setList([...list, newItem]);
      setItemName("");  // clear input value
    }


  };

  return (
    <>
      <ToastContainer />
      <section className="section-center">
        <form className="" onSubmit={onSubmitHandler}>
          <h1>Pantry Pal</h1>
          <div className="form-control">
            <Input 
              type="text"
              name="pantry-item"
              id="pantry-item" 
              placeholder="eg. Buy Eggs"
              value={itemName}
              onChangeFn={onChangeHandler}
            />
            <Button type="submit" onClickFn={() => {}}>
              {isEditing ? "Edit" : "Submit"}
            </Button>
          </div>
        </form>
        <div>
          <List items={list} />
          <Button linkBtn>Clear items</Button>
        </div>
      </section>
    </>
  )
}

export default App
