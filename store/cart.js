export const state = () => ({
    cartList: []
})

export const mutations = {
    SET_CART_LIST(state,product){
        product.id = Math.random();
        state.cartList.push(product);
    },
    COPY_CART_LOCAL(state, list){
        state.cartList = list;
    },
    CLEAR_CART_LIST(state){
        state.cartList = [];
    },
    DELETE_ITEM(state, id){
        state.cartList = state.cartList.filter(item => item.id !== id);
    }
}

export const actions = {
    addToCart({commit}, product){
        let newProduct = JSON.parse(JSON.stringify(product));
        newProduct.id = Math.random();
        commit('SET_CART_LIST', newProduct)
    },
    clearCart({commit}){
        commit('CLEAR_CART_LIST')
    },
    deleteItemFromCart({commit}, id) {
        commit('DELETE_ITEM', id)
    },
    getCartFromStorage({commit}, list){
        commit('COPY_CART_LOCAL', list)
    }
}

export const getters = {
    getCartList: ({ cartList }) => cartList,
}