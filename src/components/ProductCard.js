import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/CartSlice";

const ProductCard = () => {
    const list = useSelector((state) => state.allCarts.items);
    // console.log(list)
    const dispatch = useDispatch();
    return (
        <div className="m-2">
            <MDBContainer>
                <MDBRow className="mb-3">
                    {
                        list.map((value, key) => (
                            <MDBCol key={value.id} size="md">
                                <MDBCard>
                                    <MDBCardImage src={value.img} position='top' alt='...' />
                                    <MDBCardBody>
                                        <MDBCardTitle>{value.title}</MDBCardTitle>
                                        <MDBCardText>{value.price}</MDBCardText>
                                        <MDBBtn onClick={()=>dispatch(addToCart(value))}>ADD TO CART</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        )
                        )
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    )
}
export default ProductCard;