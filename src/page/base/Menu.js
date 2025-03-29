import MyRouters from "../../router/Router"
import { Link, useLocation } from "react-router-dom"
export default function Menu(){
    const location = useLocation();
    const restringidos = ["/login"];

    const noExiste = restringidos.indexOf(location.pathname) === -1
    return(
        <>
            {noExiste &&
                <header>
                    <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/about">About us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/cart">Carrito</Link></li>
                    </ul>
                    </nav>
                
                </header>
            }
            {/* <MyFirstComponent />

            <UserContextProvider>
                <Form />
                <Profile />
            </UserContextProvider> */}
            <MyRouters/>
        </>
    )

}