import React from 'react'
import data from '../Assets/data'
import Items from '../items/Items'

const RelatedProduct = () => {
    return (
        <div className='flex flex-col items-center gap-3 h-[90vh]'>
            <h1 className='text-2xl font-semibold'>Recomemnded Products</h1>
            <hr className='w-[125px] border-none rounded-xl h-1 bg-[#797979]'/>
            <div className="item grid grid-cols-1 lg:grid-cols-4 gap-x-2 gap-y-4 items-center justify-items-center sm:grid-cols-2">
                {data.map((item, i)=> {
                    return <Items
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
    )
}

export default RelatedProduct