import React from 'react'
import { Link } from 'react-router-dom';
import bg1 from '../images/etwlogo.png';
import { useSelector } from 'react-redux';
function Layout() {
    const cartItemCount = useSelector((state) => state.cart.itemCount);
  return (
    <div className="layout">
        <img src={bg1} className='etw'/>
    <Link to="/home" className='lay'>Home</Link>
    <Link to='/cart' className='lay'>
<i className="ri-shopping-bag-line">{cartItemCount}</i>
</Link>
    </div>
  );
}

export default Layout;
