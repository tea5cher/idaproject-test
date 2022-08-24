
export const state = () => ({
    productsList: [],
})

export const mutations = {
    SET_PRODUCT_LIST(state,value){
        state.productsList = value;
    },
    PRICE_SORT_PRODUCT_LIST(state){
        state.productsList.sort((prev, next) => prev.price - next.price)
    },
    RATING_SORT_PRODUCT_LIST(state){
        state.productsList.sort((prev, next) => prev.rating - next.rating)
    }
}

export const actions = {
    async fetchProducts({commit,dispatch}, id){
        const response = await this.$axios.get(`/api/product?category=${id}`)
        const data = response.data;
        commit('SET_PRODUCT_LIST', data);
    },
    productListSort({commit}, sort){
        if(sort === 'цене') {
            commit('PRICE_SORT_PRODUCT_LIST');
        } else {
            commit('RATING_SORT_PRODUCT_LIST');
        }
        
    }
}

export const getters = {
    productList: ({ productsList }) => productsList,
}