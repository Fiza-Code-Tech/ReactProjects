import { useEffect } from 'react';
import CartContainer from './components/CartContainer';
import Navbar from './components/Navbar';
import './features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import cartItems from './cartItems';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
