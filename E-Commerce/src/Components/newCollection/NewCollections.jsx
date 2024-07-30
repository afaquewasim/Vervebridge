import React from 'react'
import newCollections from '../Assets/new_collections'
import Item from '../items/Items'

const NewCollections = () => {
    return (
        <div>
            <div className='flex flex-col items-center'>
            <h1 className='text-3xl mt-4 mb-2 text-center uppercase'>New Collections</h1>
            <hr className='w-[100px] mb-4 h-[6px] border-0 rounded-lg bg-[#797979]'/>
            <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 items-center justify-items-center'>
                {newCollections.map((item, i) => {
                    return <Item
                        key={i}
                        id={item.id} 
                        name={item.name}
                        image={item.image}
                        new_price={item.new_price}
                        old_price={item.old_price}
                    />
                })}
            </div>
        </div>
        </div>
    )
}

export default NewCollections