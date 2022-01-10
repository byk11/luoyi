<template>
  <div class="bottom-bar">
    <div class="check-content">
      <check-button class="check-button"
                    :is-checked="checkAll"
                    @click.native="checkClick" ></check-button>
      <span>全选</span>
    </div>
    <div class="price">
      合计: {{totalPrice}}
    </div>
    <div class="calculate" @click="calcClick">
      结算({{checkLength}})
    </div>
  </div>
</template>

<script>

import CheckButton from "@/components/content/checkButton/CheckButton";


export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      return '￥' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    checkAll() {
      if (!this.$store.state.cartList.length) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick() {
      let flag = this.checkAll
      this.$store.state.cartList.forEach(item => item.checked = !flag)
    },
    calcClick() {
      if (!this.checkAll) {
        this.$toast.show('请添加购买的商品', 1500)
      }
    }
  }
}
</script>

<style scoped>

.bottom-bar {
  height: 40px;
  line-height: 40px;

  background-color: #eeeeee;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 15px;
}

.check-content {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.check-button {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;

}

.price {
  margin-left: 20px;
  flex: 1;

}

.calculate {
  width: 60px;
  background-color: #18cbea;
  border-radius: 16px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: white;
  font-weight: 500;

}



</style>
