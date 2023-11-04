import React from 'react';

export const Filter = ({filter,onUpdate}) =>{
    return(
        <input
          onChange={onUpdate}
          type="text"
          name="filter"
          value={filter}
        />
    )
}