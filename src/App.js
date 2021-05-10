import React, { Suspense, useEffect} from 'react'
import Footer from './components/Footer';
import TopNavigation from './components/TopNavigation';
import {BrowserRouter as Router, Switch, Route, useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getProductDetail, getProductList } from './redux/action';
import ProfilePage from './pages/login-user/profilePage';
import LogoutPage from './pages/login-user/logout';
import HomePage from './pages/HomePage/HomePage';

const ProductListPage = React.lazy(() => import('./pages/product-category/ProductListPage'))
const ProductDetailPage = React.lazy(() => import('./pages/product-detail/ProductDetailPage'))
const CartPage = React.lazy(() => import('./pages/product-cart/CartPage'))
const LoginUser = React.lazy(() => import('./pages/login-user/login'))

function App() {
  const dispatch = useDispatch()
    const categoryList = useSelector(state=> state.categoryList)
    useEffect(()=>{
        dispatch(getCategories())     
    },[dispatch])
  return (
    <div>
      <Router>
        <TopNavigation categoryList={categoryList}/>
        <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
        <Route exact path="/">
           <HomePage />
          </Route>
          <Route path="/list/:slug">
           <ProductListPage />
          </Route>
          <Route exact path="/detail/:path">
           <ProductDetailPage />
          </Route>
          <Route exact path="/cart">
           <CartPage />
          </Route>
          <Route exact path="/login">
           <LoginUser/>
          </Route>
          <Route exact path="/profile">
           <ProfilePage/>
          </Route>
          <Route exact path="/logout">
           <LogoutPage/>
          </Route>
        </Switch>
        </Suspense>
     
      </Router>
      
    </div>
  );
}

export default App;
