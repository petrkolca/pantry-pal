import { useState } from 'react';
import List from './components/List';
import Input from './components/Input';
import Button from './components/Button';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [itemName, setItemName] = useState("");
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const onChangeHandler = (e) => {
    setItemName(e.target.value)
  };

  const clearList = () => {
    toast.warning("List has been cleared!", {
      icon: "❌"
    });
    setList([]);
  };

  const removeItem = (id) => {
    toast.error("Item removed from the list!", {
      icon: "❌"
    });

    // Removing item from the list by
    // filtering list to show All items except item with id 
    setList(list.filter((item) => item.id !== id))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('button clicked!');

    if (!itemName) {
      // show alert notification if ALERT is set
      toast.error("Input is empty! Enter value!", {
        icon: "🚨"
      });
      
    } else if(itemName && isEditing) {
      // Edit item in form func.

    } else {
      // Show Success Alert
      toast.success("Item is added into the list!", {
        icon: "🚀"
      });

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
      <ToastContainer limit={1} hideProgressBar={true} autoClose={700} position="top-center" />
      <section className="section-center">
        <form onSubmit={onSubmitHandler}>
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
            <Button type="submit">
              {isEditing ? "Edit" : "Submit"}
            </Button>
          </div>
        </form>
        <div>
          {list.length > 0 && (
            <List items={list} removeItem={removeItem} />
          )}
          <Button linkBtn onClick={clearList}>Clear items</Button>
        </div>
      </section>
    </>
  )
}

export default App
