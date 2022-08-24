export const state = () => ({
    products: [1,2,3,4],
})

export const mutations = {
    
}

export const actions = {
    async fetchProducts(context){
        const response = await axios.get('/product')
    }
}

export const getters = {
    moviesList: ({ products }) => products,
}