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
    ...mapGetters('products', ['moviesList']),
    onChangeShow(bool){
      console.log('testing')
      this.show = bool;
    }
  },
  mounted(){
    this.fetchProducts(1);
  },
}
</script>

<style lang="css" scoped>
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }
</style>