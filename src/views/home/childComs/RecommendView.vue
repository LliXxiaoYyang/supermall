<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props:{
    recommends:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {}
  },
  components: {},
  methods: {}
}
</script>
<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    width: 100%;

    padding: 15px 0 30px;
  }
  .recommend-item{
    flex: 1;
    margin-bottom: 10px;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
  }
</style>
