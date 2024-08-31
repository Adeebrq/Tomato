import React from 'react'
import "./Exploremenu.css"
import { menu_list } from '../../assets/asset'

const Exploremenu = ({category,setCategory}) => {

  return (
    <div className='exploreMenu' id='exploreMenu'>
        <h1>Explore our menu!</h1>
        <p className='exploreMenutext'>Discover culinary delights at your fingertips! Order from our diverse online menu and enjoy fresh, delicious meals delivered straight to your door. Elevate your dining experience effortlessly!</p>
        <div className='exploreMenuList'>
            {menu_list.map((item,index)=>{
                return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='exploreMenuListItem'>
                    <img className={category===item.menu_name?"active":""} src={item.menu_image} alt=""/>
                    <p>{item.menu_name}</p>
                </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default Exploremenu;
