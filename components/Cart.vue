<template>
    <div class="cart-wrapper">
        <div class="overlay"></div>
        <div class="cart">
            <div class="cart__title-wrap">
                <h3 class="cart__title">Корзина</h3>
                <span @click="onCloseCart" class="cart__close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="black"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="black"/>
                    </svg>
                </span>
            </div> 
            <div  v-if="getCartList.length>0 && done == false" class="cart__content">
                <div class="cart__subtitle">Товары в корзине</div>
                <div class="cart__list">
                    <div v-for="item in getCartList" :key="item.id" class="item">
                        <img class="item__img" :src= 'link+item.photo' alt="product-img">
                        <div class="item__info-wrap">
                            <div class="item__name">{{item.name}}</div>
                            <div class="item__price">{{item.price}} ₽</div>
                            <div class="item__rating">
                                <!-- <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="20" height="20" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.125C10.2379 3.125 10.4552 3.26005 10.5605 3.47336L12.3464 7.09154L16.3404 7.67532C16.5758 7.70972 16.7712 7.87473 16.8445 8.10098C16.9179 8.32723 16.8565 8.57552 16.6861 8.74147L13.7966 11.5559L14.4785 15.5318C14.5187 15.7663 14.4223 16.0033 14.2299 16.1432C14.0374 16.283 13.7822 16.3014 13.5716 16.1907L10 14.3124L6.42842 16.1907C6.21785 16.3014 5.96267 16.283 5.77018 16.1432C5.5777 16.0033 5.48129 15.7663 5.52151 15.5318L6.20344 11.5559L3.31394 8.74147C3.14355 8.57552 3.08213 8.32723 3.15549 8.10098C3.22885 7.87473 3.42428 7.70972 3.65963 7.67532L7.6536 7.09154L9.43958 3.47336C9.54487 3.26005 9.76213 3.125 10 3.125ZM10 5.16203L8.62921 7.93914C8.53825 8.12342 8.36251 8.25121 8.15916 8.28093L5.09278 8.72913L7.3111 10.8898C7.45852 11.0334 7.52581 11.2403 7.49102 11.4432L6.96763 14.4948L9.70911 13.0531C9.89123 12.9573 10.1088 12.9573 10.2909 13.0531L13.0324 14.4948L12.509 11.4432C12.4742 11.2403 12.5415 11.0334 12.6889 10.8898L14.9073 8.72913L11.8409 8.28093C11.6375 8.25121 11.4618 8.12342 11.3708 7.93914L10 5.16203Z" fill="#F2C94C"/>
                                    <path d="M6.5 11L4 8H10H16L13.5 11V14.5L13 15.5L10 14L9 14.5L6.5 15.5V14.5V11Z" fill="#F2C94C"/>
                                </svg> -->
                                <img class="card__star-img" v-if="item.rating == 0" src='../assets/icons/0.png' alt="">
                                <img class="card__star-img" v-if="item.rating == 1" src='../assets/icons/1.png' alt="">
                                <img class="card__star-img" v-if="item.rating == 2" src='../assets/icons/2.png' alt="">
                                <img class="card__star-img" v-if="item.rating == 3" src='../assets/icons/3.png' alt="">
                                <img class="card__star-img" v-if="item.rating == 4" src='../assets/icons/4.png' alt="">
                                <img class="card__star-img" v-if="item.rating == 5" src='../assets/icons/5.png' alt="">
                                <span class="card__rating-descr">{{item.rating}}</span>
                            </div>
                        </div>
                        <button @click="onDeleteItem(item.id)" class="item__delete">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 10C6 9.44772 6.44772 9 7 9H25C25.5523 9 26 9.44772 26 10C26 10.5523 25.5523 11 25 11H7C6.44772 11 6 10.5523 6 10Z" fill="#959DAD"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 7C13.7348 7 13.4804 7.10536 13.2929 7.29289C13.1054 7.48043 13 7.73478 13 8V9H19V8C19 7.73478 18.8946 7.48043 18.7071 7.29289C18.5196 7.10536 18.2652 7 18 7H14ZM21 9V8C21 7.20435 20.6839 6.44129 20.1213 5.87868C19.5587 5.31607 18.7956 5 18 5H14C13.2044 5 12.4413 5.31607 11.8787 5.87868C11.3161 6.44129 11 7.20435 11 8V9H9C8.44772 9 8 9.44772 8 10V24C8 24.7957 8.31607 25.5587 8.87868 26.1213C9.44129 26.6839 10.2043 27 11 27H21C21.7957 27 22.5587 26.6839 23.1213 26.1213C23.6839 25.5587 24 24.7957 24 24V10C24 9.44772 23.5523 9 23 9H21ZM10 11V24C10 24.2652 10.1054 24.5196 10.2929 24.7071C10.4804 24.8946 10.7348 25 11 25H21C21.2652 25 21.5196 24.8946 21.7071 24.7071C21.8946 24.5196 22 24.2652 22 24V11H10Z" fill="#959DAD"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14 14C14.5523 14 15 14.4477 15 15V21C15 21.5523 14.5523 22 14 22C13.4477 22 13 21.5523 13 21V15C13 14.4477 13.4477 14 14 14Z" fill="#959DAD"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 14C18.5523 14 19 14.4477 19 15V21C19 21.5523 18.5523 22 18 22C17.4477 22 17 21.5523 17 21V15C17 14.4477 17.4477 14 18 14Z" fill="#959DAD"/>
                                </svg>
                        </button>
                    </div>
                </div>
                <div class="cart__subtitle">Оформить заказ</div>
                <form @submit.prevent="checkForm" action="submit" class="cart__form">
                    <input v-model="formData.formFullName" type="text" placeholder="Ваше имя">
                    <input
                        id="phone"
                        v-facade="'+7 (###) ###-##-##'"
                        type="text"
                        name="phone"
                        placeholder="Телефон"
                        v-model="formData.formTelephone"
                    >
                    <input v-model="formData.formAdress" type="text" placeholder="Адрес">
                    <button  type="submit" class="cart__btn-return_submit cart__btn-return">Отправить</button>
                    <p v-if="errors.length">
                        <ul class="cart__errors-list">
                        <li class="cart__error" v-for="error in errors" :key="error">{{ error }}</li>
                        </ul>
                    </p>
                </form>
                
            </div>
            <div v-else-if="done" class="done-form">
                <img class="done-form__img" src="../assets/icons/ok-hand2.svg" alt="hand-ok_img">
                <p class="done-form__access">Заявка успешно отправлена</p>
                <p class="done-form__manager-task">Вскоре наш менеджер свяжется с Вами</p>
            </div>
            <div v-else class="cart__empty">
                <div class="cart__descr">
                    Пока что вы ничего не добавили в корзину.
                </div>
                <button @click="onCloseCart" class="cart__btn-return">Перейти к выбору</button>
            </div>
            
        </div>
    </div> 
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data(){
        return {
            link: 'https://frontend-test.idaproject.com',
            formData: {
                formFullName: '',
                formTelephone: '',
                formAdress: '',
            },
            errors: [],
            done: false,
        }
    },
    methods: {
        ...mapActions('cart', ['clearCart']),
        ...mapActions('cart', ['deleteItemFromCart']),
        onCloseCart(){
            this.$emit('closeCart')
        },
        onDeleteItem(id){
            this.deleteItemFromCart(id);
            let arr = JSON.parse(localStorage.getItem('test'));
            arr = arr.filter(item=> item.id !== id);
            localStorage.setItem('test', JSON.stringify(arr));
        },
        checkForm(){
            if (this.formData.formFullName && this.formData.formTelephone && this.formData.formAdress) {
                console.log(this.formData);
                this.done = true;
                this.clearCart();
            }

            this.errors = [];

            if (!this.formData.formFullName) {
                this.errors.push('Требуется указать имя.');
            }
            if (!this.formData.formTelephone) {
                this.errors.push('Требуется указать телефон.');
            }
            if (!this.formData.formAdress) {
                this.errors.push('Требуется указать адресс.');
            }
            
        }
    },
    computed:{
        ...mapGetters('cart',['getCartList'])
    },
    // mounted:{
    //     beforeMount(){
    //         this.checkStorage();
    //     }
    // }
}
</script>
