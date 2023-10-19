<template>
  <div class="ceshi2Class">
  <MapDiv :mapUrl="state.urlList" :center="state.center"></MapDiv>
  </div>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'
import MapDiv from '@/views/map/index.vue'
const state = reactive({
  urlList:[
    {url:'https://webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}'}
  ],
  center:[29.760258,121.52454]
})
onMounted(() => {
})
</script>
<style lang="scss" scoped>
.ceshi2Class{
  width: 100%;
  height: 100%;
  background-color: red;
  padding: 100px 0;
}
</style>
