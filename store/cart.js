export const state = () => ({
    cartList: [
        {   category: 1,
            id: 1,
            name: "РЮКЗАК OUTDOOR",
            photo: "/upload/product/backpack2-4755.e0agsd.jpg",
            price: 242000,
            rating: 2
        },
        {   category: 1,
            id: 1,
            name: "РЮКЗАК OUTDOOR",
            photo: "/upload/product/backpack2-4755.e0agsd.jpg",
            price: 242000,
            rating: 2
        },
    ],
})

export const mutations = {
    SET_CART_LIST(state,product){
        console.log(product);
        state.cartList.push(product);
    }
}

export const actions = {
    addToCart({commit}, product){
        console.log(product);
        commit('SET_CART_LIST', product)
    }
}

export const getters = {
    getCartList: ({ cartList }) => cartList,
}