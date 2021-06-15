<template>
    <div class="cart">
       Cart ({{ cart.length }})
      </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Cart extends Vue {

    private cart : Array<Number> = []

    mounted() {
    this.$root.$on('add-to-cart', (id : number) => { 
        this.cart.push(id);
    })
    }
}
  
</script>

<style scoped>

.cart {
    position: absolute;
    right: 0;
    border: 1px solid #d8d8d8;
    padding: 1.25em 20px;
    background: #fff;
    border-radius: 3px;
}
</style>

https://codepen.io/cfleschhut/pen/RdvVpX
https://blog.logrocket.com/vue-typescript-tutorial-examples/#data