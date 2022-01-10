<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>

    <cart-list ></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>

import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/childComps/CartList";
import CartBottomBar from "@/views/cart/childComps/CartBottomBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  data() {
    return{

    }
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped>

.nav-bar {
  background-color: var(--color-tint);
  color: #ffffff;

}

.cart {
  height: 100vh;
}

</style>
