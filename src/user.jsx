import React, { useEffect, useState } from 'react'
import dataUser from './dataUser'
function User() {
    const [search, setSearch] = useState("")
    return (
        <div>
            <form>
                <input type="text" name="text" value={search}  onChange={(e) => {
                    setSearch(e.target.value)
                }} />
            </form>
            <ul>
                {
                    dataUser.filter((el) => {
                        return search.toLowerCase() === "" ? el : el.name.toLowerCase().includes(search)
                    }).map((el) =>
                        <li className='list'  key={el.name}>{el.name}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default User