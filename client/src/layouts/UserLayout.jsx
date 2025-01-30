import React from 'react'
import NavBar from '../components/navBar/NavBar'
import SearchBar from '../components/search/SearchBar'
import Footer from '../components/footer/Footer'

const UserLayout = ({ children }) => {



    return (
        <div>
            <NavBar />
            <SearchBar />
            {children}
            <Footer />
        </div>
    )
}

export default UserLayout