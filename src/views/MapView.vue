<template>
  <h1>ISS現在地MAP</h1>
  <v-card>
    <p class="mapSuggest">
      <svg-icon type="mdi" :path="path" class="arrow"></svg-icon>
      ピンをクリックして地名表示！
      <svg-icon type="mdi" :path="path" class="arrow"></svg-icon>
    </p>

    <div style="height: 600px; width: 800px">
      <l-map ref="map" v-model:zoom="zoom" :use-global-leaflet="false" :center="center">
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
        ></l-tile-layer>
        <l-marker :lat-lng="center">
          <l-popup>
            {{ countryName }}
            <br />
            {{ stateName }}
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </v-card>
</template>

<script setup>
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LPopup } from '@vue-leaflet/vue-leaflet'
import { useIssStore } from '../stores/ISS'
import { ref } from 'vue'
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiChevronDoubleDown } from '@mdi/js'

const store = useIssStore()

//MAP用要素
const zoom = ref(4)
const center = [store.latAdjustment, store.lonAdjustment]
//ピン表示内容
const countryName = store.mapCountryName
const stateName = store.mapStateName
//ICON内容
const path = mdiChevronDoubleDown
</script>

<style>
.mapSuggest {
  text-align: center;
}
.arrow {
  vertical-align: middle;
}
</style>
