<template>
    <section class="main">
        <div class="test" v-for="product in productList"  :key="product.id">
            <ProductCard :product='product' />
        </div>
      
    </section>
</template>


<script>
import {mapGetters} from 'vuex';

export default {
    name: 'ProductList',
    computed: {
        ...mapGetters('products', ['productList'])
    }
}
</script>

<style lang="scss" scoped>
    .main {
        display: grid;
        grid-template-columns: repeat(4, 264px);
        grid-auto-rows: 272px;
        width: 100%;
        gap: 16px;
        padding-top: 97px;
        justify-content: center;
    }
    .test {
        width: 100%;
        height: 100%;
        border: 1px solid black;
        display: block;
    }
</style>