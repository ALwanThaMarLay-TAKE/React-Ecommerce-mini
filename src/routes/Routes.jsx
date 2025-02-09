import Home from '../Pages/Home.jsx'
import MainLayout from '../Pages/MainLayout.jsx'
import AboutUs from '../Pages/AboutUs.jsx'
import MyCart from '../Pages/MyCart.jsx'
import ProductDetails from '../Pages/ProductDetails.jsx'
import { createBrowserRouter } from 'react-router-dom'
import EmptyPage from '../Pages/EmptyPage.jsx'


const router = createBrowserRouter([{
path : '/',
element  : <MainLayout/>,
errorElement : <EmptyPage />,
children : [
    {
        path : '/',
        element : <Home/>

    },
    {
        path : 'about-us',
        element : <AboutUs/>
    },
    {
        path: "my-cart",
        element : <MyCart/>

    },
    {
        path : "product-details/:productSlug",
        element : <ProductDetails/>
    }
]
}])
export default  router