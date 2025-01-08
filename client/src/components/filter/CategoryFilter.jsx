import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateCategory } from '../../redux/Filters/filtersSlice'

const CategoryFilter = () => {
    const categories = ['women', 'men', 'kids'];
    const dispatch = useDispatch()
    const selectedCategory = useSelector(state => state.filters.category)


    return (
        <div className='bg-white py-3 mt-3'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Sort By Category</h2>
            <div className='px-1 flex justify-around'>
                {categories.map((category) => {
                    const isActive = selectedCategory.includes(category)



                    return <button
                        key={category}
                        onClick={() => {

                            dispatch(updateCategory(category))

                        }

                        }
                        className={`text-xs transition ${isActive ? 'bg-gray-400 text-white' : 'bg-gray-100'} hover:bg-gray-500 hover:text-white font-medium rounded-xl w-[80px] py-2 px-3`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                })}
            </div>
        </div>
    );
}

export default CategoryFilter;
