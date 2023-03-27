import React, { useEffect } from "react";
import { MDBBtn, MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../features/CartSlice";

const Navbar = () => {
    const { cart,totalQuantity } = useSelector((state) => state.allCarts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])
    return (
        <>
            <MDBNavbar light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand>Navbar</MDBNavbarBrand>
                    <span>
                        <Link to="/">All Products</Link>
                    </span>
                    <MDBBtn color='light'>
                        <Link to="/cart">Cart({totalQuantity})</Link>
                    </MDBBtn>
                </MDBContainer>
            </MDBNavbar>
        </>
    )
}
export default Navbar;