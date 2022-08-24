<template>
    <section class="catalog">
        <h2 class="catalog__title">Каталог</h2>
        <ul class="catalog__filters">
            <li @click="onFilterList(1)" class="catalog__item catalog__item_active">Рюкзаки</li>
            <li @click="onFilterList(2)" class="catalog__item">Сумки</li>
            <li @click="onFilterList(3)" class="catalog__item">Портфели / Кейсы</li>
        </ul>
    </section>
</template>


<script>
import { mapGetters, mapActions} from 'vuex'

export default {
    methods: {
    ...mapActions('products', ['testAc', 'fetchProducts']),
    ...mapGetters('products', ['moviesList']),
    onFilterList(id){
        this.fetchProducts(id);
    }
  },
    mounted(){
        const lis = document.querySelectorAll('.catalog__item');
        lis.forEach((item,i)=>{
            item.addEventListener('click',()=>{
                lis.forEach(i=>{
                    i.classList.remove('catalog__item_active')
                })
                item.classList.add('catalog__item_active')
            })
        })
    }
}
</script>