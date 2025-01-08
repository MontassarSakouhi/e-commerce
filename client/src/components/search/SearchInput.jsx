
import { X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsSearch, toggleSearch } from '../../redux/search/searchSlice';



const SearchInput = () => {

   
    const dispatch = useDispatch()

    return (
        <div className=' flex items-center space-x-3 ' >
            <input onChange={(evt) => dispatch(itemsSearch(evt.target.value))} className=' rounded-full w-[500px] h-[40px] pl-[20px] bg-gray-100  suse ' type="text" placeholder='What are you searching for ?' name="search" id="search" />
            <div className='cursor-pointer' onClick={() => dispatch(toggleSearch(false))} >
                <X />


            </div>
        </div>
    )
}

export default SearchInput