import shop from "../../api/shop";
import * as types from "../../constants/actionConstants";
const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CART,
    productId
})
export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0){
        dispatch(addToCartUnsafe(productId))
    }
}