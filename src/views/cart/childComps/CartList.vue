<template>
  <div class="cart-list">
    <scroll class="content" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :key="index"
                      :item-info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script>

import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "@/views/cart/childComps/CartListItem";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  data() {
    return {
      cartList: this.$store.state.cartList
    }
  },
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style scoped>
.cart-list {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}

.content {
  height: 100%;
}


</style>
