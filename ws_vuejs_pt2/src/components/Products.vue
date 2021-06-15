<template>
    <div class="product">
        <div class="product-image">
            <img v-bind:src="variants[selectedVariant].variantImage">
        </div>
        <div class="product-info">
            <h1>{{name}}</h1>
            <p :class="[!inStock ? 'outOfStock' : '']">
                <span v-if="inStock">Disponbile : {{ selectedQuantity }}</span>
                <span v-else>Rupture</span>
            </p>
            <p> {{ description }} </p>
            <p>
                <span class="color-box" v-for="(variant, index) in variants" :key="variant.variantId" :style="{ backgroundColor: variant.variantColor }" @mouseover="updateProduct(index)"></span>  
            </p>
            <button @click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to cart</button>
        </div>   
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Product extends Vue {
    
    private name : string = "Chaussettes VueJS"
    private description : string =  "Nouvelles chaussetes VueJS Disponbile !"
    private selectedVariant : number = 0
    
    private variants : Array<any> = [{
        variantID :  1,
        variantQuantity : 16,
        variantColor : "rgb(39, 144, 88)",
        variantImage :  require('@/assets/green.jpg')
    },
    {
        variantID :  1,
        variantQuantity : 2,
        variantColor : "rgb(44, 60, 84)",
        variantImage :  require('@/assets/blue.jpg')
    }
    ]
            
    public updateProduct(index: number): void {
        this.selectedVariant = index; 
    }

    public addToCart() {
      this.variants[this.selectedVariant].variantQuantity--;
      
      this.$root.$emit("add-to-cart", this.variants[this.selectedVariant].variantId);
    }

    get inStock() {
        return this.variants[this.selectedVariant].variantQuantity > 0;
    }

    get selectedQuantity() {
        return this.variants[this.selectedVariant].variantQuantity;
    }

}
  
</script>

<style scoped>
.product {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 30px;
}

.product-image img {
    display: block;
    border: 1px solid #d8d8d8;
    border-radius: 3px;
    max-width: 100%;
    padding: 20px;
    background: #fff;
}

h1 {
    margin: 0.5em 0;
    font-size: 1.75em;
  }

button {
    width: 160px;
    height: 50px;
    margin-bottom: 2em;
    border: none;
    border-radius: 3px;
    background: #1CC1AC;
    color: white;
    font-size: 16px;
    cursor: pointer;
    }

button:hover {
    background: #11a58f;
}

button.disabledButton {
    background-color: #d8d8d8;
}

.color-box {
  display: inline-block;
  width: 25px;
  height: 25px;
  margin-right: 0.5em;
  border-radius: 50%;
}

.outOfStock {
    color : red;
  }
  
</style>
