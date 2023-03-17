import { useEffect, useState } from 'react';
import List from './components/List';
import Input from './components/Input';
import Selectbox from './components/Selectbox';
import Button from './components/Button';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");

  if (list) {
    return JSON.parse(list)
  } else {
    return [];
  }
}


function App() {
  const [itemName, setItemName] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const onChangeHandler = (e) => {
    setItemName(e.target.value)
  };

  const onChangeFilterHandler = (e) => {
    console.log(e.target.value)
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

  const editItem = (id) => {
    // const specificItem = list.find((item) => item.id === id);
    const existingItemIndex = list.findIndex((item) => item.id === id);
    setIsEditing(true);
    setEditId(id);
    setItemName(list[existingItemIndex].title);
  }

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('button clicked!');

    if (!itemName) {
      // show alert notification if ALERT is set
      toast.error("Input is empty! Enter value!", {
        icon: "🚨"
      });

      return;
      
    } else if(itemName && isEditing) {
      // Edit item in form func.
      setList(list.map((item) => {
        
        // finding itemName with same EDIT ID
        if(item.id === editId) {
          return {...item, title: itemName}
        }

        return item;
      }))
      
      // testing another variation of Editing Item under Index
      // const existingItemIndex = list.findIndex((item) => item.id === editId);
      // const existingItem = list[existingItemIndex];

      // let updatedList;

      // const updatedItem = {
      //   ...existingItem,
      //   title : itemName
      // };
      // updatedList = [...list];
      // updatedList[existingItemIndex] = updatedItem;

      // setList(updatedList);


      setItemName("");  // clear input value
      setEditId(null);
      setIsEditing(false);

      // Show Success Alert
      toast.success("Item title is hanged!", {
        icon: "🚀"
      });

    } else {

      // Create NEW Item
      const newItem = {
        id: new Date().getTime().toString(),
        title: itemName,
      }
      setList([...list, newItem]);
      setItemName("");  // clear input value

      // Show Success Alert
      toast.success("Item is added into the list!", {
        icon: "🚀"
      });

    }


  };

  useEffect(() => {
    // adding Items list to the Browser storage
    // overwriting items in storage on every single 
    // list manipulation (add/edit/delate)
    localStorage.setItem('list', JSON.stringify(list));
  },[list])

  return (
    <>
      <ToastContainer limit={1} hideProgressBar={true} autoClose={700} position="top-center" />
      <section className="section-center">
        <form onSubmit={onSubmitHandler}>
          <div className="form-header">
            <h1>Pantry Pal</h1>
            {!isEditing ? (
              <Selectbox 
                className="filter-pantry-items-list" 
                name="pantry-list" 
                id="pantry-list"
                value=""
                onChangeFn={onChangeFilterHandler}
              >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </Selectbox>
            ) : null}
          </div>
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
            <List items={list} removeItem={removeItem} editItem={editItem} />
          )}
          <Button linkBtn onClick={clearList}>Clear items</Button>
        </div>
      </section>
    </>
  )
}

export default App
