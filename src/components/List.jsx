import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Button from './Button';
import { StyledPantryList, PantryItem } from './styles/List.styled'

const List = ({items, removeItem}) => {
  return (
    <StyledPantryList>
    {items.map(({id, title}) => (
      <PantryItem key={id}>
        <input type="checkbox" />
        <p>{title}</p>
        <div className="btn-ctn">
          <Button type="button" editBtn>
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