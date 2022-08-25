<template>
    <header>
        <h1>TestList</h1>
        <div @click="onToggleShow" class="cart-wrap">
            <img class="cart__logo" src="../assets/icons/cart.svg" alt="cart">
            <span class="cart-value" >{{getCartList.length}}</span>
        </div>
    </header>
</template>


<script>
import { computed } from 'vue';
import {mapGetters} from 'vuex'
export default {
    name: 'Header',
    methods: {
        
        onToggleShow(){
            this.$emit('showCart');
        }
    },
    computed:{
        ...mapGetters('cart',['getCartList'])
    }
}
</script>
