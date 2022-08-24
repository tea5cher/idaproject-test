
export const state = () => ({
    productsList: [],
})

export const mutations = {
    SET_PRODUCT_LIST(state,value){
        state.productsList = value;
    }
}

export const actions = {
    async fetchProducts({commit,dispatch}, id){
        const response = await this.$axios.get(`/api/product?category=${id}`)
        const data = response.data;
        console.log(data);
        commit('SET_PRODUCT_LIST', data);
    },
}

export const getters = {
    productList: ({ productsList }) => productsList,
}