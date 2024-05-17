import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../features/cart/cartSlice';


function Cart() {
    const dispatch=useDispatch()
    const cartItems=useSelector(state=>state.cart.data)
    const handleRemove=(productId)=>{
 dispatch(deleteCart({id:productId}))
    }
  return (
    <div className="App">
   {cartItems.map((product, index) => {
        const { name, price, quantity } = product;
        return (
          <div key={index} className='cart-products'>
            <table className='table table-striped'>
              <tbody>
                <tr>
                  <td className='cart-products'><img src={product.image} alt={name} /></td>
                  <td><p className='para'>{name}</p></td>
                  <td><p className='para'>Price: ${price}</p></td>
                  <td>
                    
                    <button onClick={() => handleRemove(product.id)} className='para1'>Remove</button>
                   
                  
                  </td>
                </tr>
              </tbody>
            </table>
            <br/><br/>
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
