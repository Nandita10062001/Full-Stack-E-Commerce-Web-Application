import React from 'react';
import Layout from '../components/Layout/Layout';
import { useCart } from '../context/cart';
import { useAuth } from '../context/Auth';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  //total 
  const totalPrice = () => {
    try{
      let total = 0;
      cart?.map((item) => {total = total + item.price})
      return total.toLocaleString('en-us', {
        style: "currency",
        currency: 'USD'
      })
    }catch (error){
      console.log(error)
    }
  }

  //delete item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem('cart', JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Hello ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center">
              {cart?.length
                ? `You have ${cart.length} items in your cart. ${
                    auth?.token ? '' : 'Please Login to Checkout'
                  }`
                : 'Your cart is Empty'}
            </h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            {cart?.map((p) => (
              <div className="row m-2 card flex-row">
                <div className="col-md-4">
                  <img
                    src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top mt-2"
                    alt={p.name}
                  />
                </div>
                <div className="col-md-8 pt-5">
                  <h4>{p.name}</h4>
                  <p>{p.description.substring(0, 30)}</p>
                  <h4>Price: {p.price}$</h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => removeCartItem(p._id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <h2 className='text-center'>Cart Summary</h2>
            <p className='text-center'>Total | Checkout | Payment</p>
            <hr/>
            <h4>Total: {totalPrice()} </h4>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
