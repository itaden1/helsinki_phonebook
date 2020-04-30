import React from 'react'

const Filter = ({filterCallback, filterValue}) => {
    return (
        <div>
            <label>filter contacts:
                <input onChange={(e) => filterCallback(e)} value={filterValue}></input>
            </label>
        </div>
    )
}

export default Filter