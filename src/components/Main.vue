<template>
<VScaleScreen width="1920" height="1080" delay="0" :fullScreen="true">
  <div class="contentClass">
    <div class="leftClass">
      <Ceshi1></Ceshi1>
    </div>
    <div class="rightClass">
      <Ceshi2></Ceshi2>
    </div>
  </div>

</VScaleScreen>
</template>
<script setup>
import {ref, reactive, onMounted} from 'vue'
import VScaleScreen from 'v-scale-screen'
import Ceshi1 from '../views/ceshi1.vue'
import Ceshi2 from '../views/ceshi2.vue'
onMounted(() => {
})
</script>

<style lang='scss' scoped>
.contentClass{
  width: 100%;
  display: flex;
justify-content: space-between;
  height: 100%;
  .leftClass{
    flex: 1;
    background-color: blue;
    height: 100%;
    //opacity: 0.1;
  }
  .rightClass{
    flex: 1;
    background-color: red;
    height: 100%;
  }
}
</style>
