<template>
  <div id="mapContent" class="mapContentClass">
  </div>
</template>
<script setup>
import L from 'leaflet'
import {onMounted, ref, defineEmits, defineExpose, defineProps, toRefs} from "vue";

const props = defineProps({
  mapUrl: {
    type: Array,
    required: true,
  },
  center: {
    type: Array,
    required: true
  },
  minZoom: {
    type: Number,
    default: 1
  },
  maxZoom: {
    type: Number,
    default: 20
  },
  panTo:{
    type:Array,
    default:[29.760258,121.52454]
  }
})
const {mapUrl, center, minZoom, maxZoom,panTo} = toRefs(props)
let map = null
// 初始化地图
const initMap = () => {
  map = L.map('mapContent', {
    center: props.center,
    minZoom: props.minZoom,
    maxZoom: props.maxZoom,
    attributionControl: false,
    zoomControl: false,
    zoom:9
  }).panTo(props.panTo)
  props.mapUrl.forEach((item) => {
    L.tileLayer(item.url, {
      minZoom: item.minZoom || props.minZoom,
      maxZoom: item.maxZoom || props.maxZoom,
    }).addTo(map)
  })
}
onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
.mapContentClass {
  width: 100%;
  height: 100%;
  z-index: 10;
}
</style>