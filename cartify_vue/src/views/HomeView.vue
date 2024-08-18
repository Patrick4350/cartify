<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Welcome to Cartify
        </p>
        <p class="subtitle">
          Elevate Your Outerwear Game—Discover Jackets That Impress!        
        </p>
      </div>
    </section>


    <div class="columns-is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered"> Latest Products </h2>
      </div>
      <div 
        class="column is-3" 
        v-for="product in latestProducts"
        v-bind:key="product.id"
        >
      <div class="box">
        <figure class="image mb-4">
          <img :src="product.get_thumbnail" >
        </figure>
        <h3 class="is-size-4"> {{ product.name }} </h3>
        <p class="is-size-6 has-text-grey"> ${{ product.price }} </p>

        View Details
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      latestProducts: []
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await this.$axios.get('http://127.0.0.1:8000/api/v1/latest-products/');
        this.latestProducts = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  }
};
</script>


<style scoped>
  .image {
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;
  }

</style>
