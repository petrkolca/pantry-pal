import { useState } from 'react';
import Button from './components/Button';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [count, setCount] = useState(0);

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
      <div className="App">
        <h1>Pantry Pal</h1>
        <Button onClickFn={onSubmitHandler}>Submit dd</Button>
      </div>
    </>
  )
}

export default App
