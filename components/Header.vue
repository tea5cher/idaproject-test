<template>
    <header>
        <h1>TestList</h1>
        <div @click="onToggleShow" class="cart-wrap">
            <img class="cart" src="../assets/icons/cart.svg" alt="cart">
            <span class="cart-value">0</span>
        </div>
    </header>
</template>


<script>
export default {
    name: 'Header',
    methods: {
        onToggleShow(){
            this.$emit('showCart');
        }
    }
}
</script>