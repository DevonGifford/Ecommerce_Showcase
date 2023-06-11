import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

//import { UserContext } from '../../contexts/user.context'; - replaced for react
//import { CartContext } from '../../contexts/cart.context'; - replaced for react
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../Components/cart-icon/cart-icon.component';
import CartDropdown from '../../Components/cart-dropdown/cart-dropdown.component';
import Logo from '../../assets/Logo.png'
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
  MyLogo,
} from './navigation.styles';





const Navigation = () => {
//Get the current user - get CONTEXT
  //const { currentUser } = useContext(UserContext); - replace for redux 
  const currentUser = useSelector(selectCurrentUser);

//Get the status of the cart (open/closed)
  //const { isCartOpen }= useContext(CartContext); - replace for redux
  const isCartOpen = useSelector(selectIsCartOpen);
  


  return (
    <Fragment>

      <NavigationContainer>

        <LogoContainer to='/'>
          <MyLogo src={Logo} alt='logo1' />
        </LogoContainer>
        
        <NavLinks>
        
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />


        </NavLinks>
        
        {isCartOpen && <CartDropdown />}
      
      </NavigationContainer>
      <Outlet />



    </Fragment>
  );
};


export default Navigation;