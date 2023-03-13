import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import Button from './Button';
import { StyledPantryList, PantryItem } from './styles/List.styled'

const List = ({items}) => {
  return (
    <StyledPantryList>
    {items.map(({id, title}) => (
      <PantryItem>
        <input type="checkbox" />
        <p>fdfd</p>
        <div className="btn-ctn">
          <Button type="button" editBtn>
            <FaEdit />
          </Button>
          <Button type="button" deleteBtn>
            <FaTrash />
          </Button>
        </div>
      </PantryItem>
    ))}
    </StyledPantryList>
  )
}

export default List