<template>
  <div>
    <transition name="home">
      <Cart @closeCart='onChangeShow(false)' v-if="show" />
    </transition>
    
    <Header @showCart='onChangeShow(true)' />
    <div class="container">
      <Catalog />
      <ProductList />
    </div>
  </div>
  
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'



export default {
  name: 'IndexPage',
  transition: 'home',
  data() {
    return {
      show: false
    }
  },
  methods: {
    ...mapActions('products', ['testAc', 'fetchProducts']),
    ...mapActions('cart', ['getCartFromStorage']),
    ...mapGetters('products', ['moviesList']),
    onChangeShow(bool){
      console.log('testing')
      this.show = bool;
    },
    checkStorage(){
            const arr = JSON.parse(localStorage.getItem('test'));
            if(arr){
              this.getCartFromStorage(arr);
            }
            
    },
  },
  mounted(){
    this.fetchProducts(1);
    this.checkStorage();
  },
}
</script>

<style lang="css" scoped>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>