import { useEffect, useMemo, useState } from 'react';
import List from './components/List';
import Input from './components/Input';
import Selectbox from './components/Selectbox';
import Button from './components/Button';

import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");

  
  if (list) {
    // console.log("list on page refresh: ,", list);
    return JSON.parse(list)
  } else {
    return [];
  }
}


function App() {
  const [inputQuery, setInputQuery] = useState("");
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  // const [filterdList, setFilterdList] = useState([]);

  const onChangeHandler = (e) => {
    setInputQuery(e.target.value)
  };

  const onChangeFilterHandler = (e) => {
    setFilterStatus(e.target.value);
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
    setInputQuery(list[existingItemIndex].title);
  }

  const completeItem = (itemId, event) => {
    const isChecked = event.target.checked;
    
    // Set item complete parameter
    setList(list.map((item) => {
      
      // finding inputQuery with same itemId
      if(item.id === itemId) {
        // console.log("checkbox value: ", isChecked);
        return {...item, completed: isChecked}
      }

      return item;
    }))
  }

  // const filteredPantryList = () => {
  //   const completedValue = filterStatus === "completed" ? true : false;
  //   // console.log("Filter status is: ", completedValue);

  //   if (filterStatus === "all") {
  //     // making copy of the Main list with ALL items
  //     setFilterdList(list);

  //   } else {
  //     // making copy of the Main list and filter only items 
  //     // with relevant parameter value
  //     setFilterdList(
  //       list.filter((item) => {
  //         return (
  //           // return items matching passed completed parameter
  //           item.completed === completedValue
  //         )
  //       })
  //     );
  //   }
  // };
  
  // updating Filtered List depending on Apps Filter Status
  // using useMemo because in order to return a Value of Array
  const filteredItems = useMemo(() => {
    const completedValue = filterStatus === "completed" ? true : false;

    return list.filter((item) => {
      if (filterStatus !== "all") {
        // filtering items with parametr matching filter Status
        return item.completed === completedValue;
      } else {
        // returning all items in the list
        return item;
      }
    })
  }, [list, filterStatus]);


  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log('button clicked!');

    if (!inputQuery) {
      // show alert notification if ALERT is set
      toast.error("Input is empty! Enter value!", {
        icon: "🚨"
      });

      return;
      
    } else if(inputQuery && isEditing) {
      // Edit item in form func.
      setList(list.map((item) => {
        
        // finding inputQuery with same EDIT ID
        if(item.id === editId) {
          return {...item, title: inputQuery}
        }

        return item;
      }))
      
      // testing another variation of Editing Item under Index
      // const existingItemIndex = list.findIndex((item) => item.id === editId);
      // const existingItem = list[existingItemIndex];

      // let updatedList;

      // const updatedItem = {
      //   ...existingItem,
      //   title : inputQuery
      // };
      // updatedList = [...list];
      // updatedList[existingItemIndex] = updatedItem;

      // setList(updatedList);


      setInputQuery("");  // clear input value
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
        completed: false,
        title: inputQuery,
      }
      setList([...list, newItem]);
      setInputQuery("");  // clear input value

      // Show Success Alert
      toast.success("Item is added into the list!", {
        icon: "🚀"
      });

    }


  };

  useEffect(() => {
    // adding Items list to the Browser storage
    // overwriting items in storage on every single 
    // list manipulation (add/edit/delate/checked)
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

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
                value={filterStatus}
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
              value={inputQuery}
              onChangeFn={onChangeHandler}
            />
            <Button type="submit">
              {isEditing ? "Edit" : "Submit"}
            </Button>
          </div>
        </form>
        <div>
          {filteredItems.length > 0 && (
            <List items={filteredItems} removeItem={removeItem} editItem={editItem} completeItem={completeItem} />
          )}
          <Button linkBtn onClick={clearList}>Clear items</Button>
        </div>
      </section>
    </>
  )
}

export default App
