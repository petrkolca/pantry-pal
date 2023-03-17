import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Button from './Button';
import { StyledPantryList, PantryItem } from './styles/List.styled'

const List = ({items, removeItem, editItem, completeItem}) => {
  // console.log(typeof items[0].completed);
  
  return (
    <StyledPantryList>
    {items.map(({id, title, completed}) => (
      <PantryItem key={id}>
        <input 
          type="checkbox" 
          checked={Boolean(completed)}
          onChange={(event) => completeItem(id, event)}
        />
        <p>{title}</p>
        <div className="btn-ctn">
          <Button type="button" editBtn onClick={() => editItem(id)}>
            <FaEdit />
          </Button>
          <Button type="button" deleteBtn onClick={() => removeItem(id)}>
            <FaTrash />
          </Button>
        </div>
      </PantryItem>
    ))}
    </StyledPantryList>
  )
}

export default List