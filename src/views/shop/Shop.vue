<template>
  <div class="content">
    <ul class="">

    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "Shop",
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll('.content', {
        probeType: 3,
        pullUpLoad: true
      })
      this.scroll.on('scroll', (position) => {
        console.log(position);
      })
      this.scroll.on('pullingUp', () => {

      })
    },
    methods: {

    }
  }
</script>

<style scoped>
  .content {
    height: 150px;
    background-color: #00FFFF;
  }
</style>