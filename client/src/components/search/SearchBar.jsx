

import React from 'react'
import { useSelector } from 'react-redux'
import SearchInput from './SearchInput'
import { useLocation } from 'react-router-dom'



const SearchBar = () => {
    const { showSearch } = useSelector(state => state.search)
    const location = useLocation()

    return (

        <>
            {(showSearch && location.pathname === "/collection") && (<div className=' flex items-center justify-center w-full  h-[120px] border-b-2  ' >

                <SearchInput />

            </div>

            )}
        </>

    )
}

export default SearchBar