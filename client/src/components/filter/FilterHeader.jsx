
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

import React from 'react'
import { assets } from '../../assets/assets/assets'

const FilterHeader = ({ setToggleFilter,  }) => {
    return (
        <div className='grid grid-cols-[6fr_1fr] bg-white rounded-t-lg min-h-[40px]    ' >
            <p className=' py-3 pl-8 font-semibold text-center border-r-[1px] ' >Filter By</p>
            <div onClick={() => setToggleFilter(false)} className='w-5 pt-3 ml-[15px]   ' >
                <FontAwesomeIcon icon={faX} /></div>
        </div>
    )
}

export default FilterHeader