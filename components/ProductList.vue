<template>
    <div class="product-list__wrap">
        
        <div class="sort">
            <button @click="optionVisible" class="sort__main">
                <span class="sort__descr">Сортировать по: </span>
                <span   class="sort__sub">{{this.value}}</span>
                <span class="arrow"><img src="../assets/icons/sort-arr.svg" alt="arrow-down"></span>
            </button>
            <div v-if="optionsActive" class="sort-options">
                <div  @click="optionHide('цене')" class="sort-options__price">По цене</div>
                <div  @click="optionHide('популярности')" class="sort-options__price">По популярности</div>
            </div>
        </div>
        
        <section class="main">
        <div class="test" v-for="product in productList"  :key="product.id">
            <ProductCard :product='product' />
        </div>
      
    </section>
    </div>
    
</template>


<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    name: 'ProductList',
    data(){
        return{
            optionsActive: false,
            value: 'цене',
        }
    },
    methods: {
        ...mapActions('products', ['productListSort']),
        optionVisible(){
            this.optionsActive = !this.optionsActive;
        },
        optionHide(value){
            this.optionsActive = false;
            this.value = value;
            this.productListSort(value);
        }
    },
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
        // border: 1px solid black;
        display: block;
    }
</style>