import React from 'react'
import MenuName from '../atoms/MenuName'

const Menu = () => {
  return (
    <div className='flex bg-[#f9f9f9] py-4 mt-4 justify-between px-11'>
        <MenuName name='Bakery'/>
        <MenuName name='Fruit and vegetables'/>
        <MenuName name='Meat and fish'/>
        <MenuName name='Drink'/>
        <MenuName name='Kitchen'/>
        <MenuName name='Special nutrition'/>
        <MenuName name='Baby'/>
        <MenuName name='Pharmacy'/>

    </div>
  )
}

export default Menu