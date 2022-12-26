import React from 'react'
import Cell from './Cell'
const Row = ({ item }) => {
  return (
    <tr>
        {Object.entries(item).map(([key, value]) => 
             (
                <Cell cellData={JSON.stringify(value)} key={key}/>
            )
        )}
    </tr>
  )
}

export default Row