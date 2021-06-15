<template>
  <div class="home">
    <products/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

import Products from '@/components/Products.vue';

@Component({
  components: {
    Products
  },
})

export default class Home extends Vue {}
</script>


