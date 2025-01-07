import React from 'react'

const CategoryFilter = ({ handleSelection, handleSelected, toggleCategories }) => {
    const categories = ['women', 'men','kids'];

    return (
        <div className='bg-white py-3 mt-3'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Sort By Gender</h2>
            <div className='px-1 flex justify-around'>
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => {
                            handleSelection(category)
                            toggleCategories(category)
                        }

                        }
                        className={`text-xs font-medium rounded-xl w-[80px] py-2 px-3 ${handleSelected[category]
                            ? 'bg-gray-500 text-gray-50 hover:bg-gray-400'
                            : 'hover:bg-gray-300 bg-gray-100'
                            }`}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default CategoryFilter;
