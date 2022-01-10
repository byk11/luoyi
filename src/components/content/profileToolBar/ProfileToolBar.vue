<template>
  <div class="order">
    <div class="orderList" >
      <p class="orderListL">{{ title }}</p>
      <slot class="orderListR"></slot>
    </div>
    <div class="order-tool">
      <div v-for="(item, index) in toolList">
        <img :src="item.img" alt="">
        <p>{{ item.info }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileOrderBar",
  props: {
    toolList: {
      type: Array,
      default() {
        return []
      }
    },
    title: {
      type: String,
      default: ""
    }
  }
}
</script>

<style scoped>

.order {
  padding: 10px 7px;
  background-color: #ffffff;
  border-radius: 12px;
  margin-top: 7px;
}

.orderList {
  display: flex;
  justify-content: space-between;
  padding-bottom: 13px;
}

.orderListL {
  font-size: 13px;
  font-weight: 700;

}

.orderListR {
  font-size: 10px;
  color: blue;
}

.order-tool {
  display: flex;
  justify-content: space-around;
  font-size: 12px;

}

.order-tool div {
  width: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.order-tool img {
  width: 25px;
  height: 25px;
  margin-bottom: 7px;
}


</style>
