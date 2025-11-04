<script setup>
import { useIssStore } from '../stores/ISS'

const store = useIssStore()
</script>

<template>
  <div class="mainContents">
    <h1>まずはISSの位置情報を取得しよう！</h1>
    <v-btn class="getBtn1" color="green" size="x-large" rounded="pill" @click="store.fetchPosition">
      位置情報を取得！</v-btn
    >
    <br />

    <div v-if="store.loading">
      <!--ローディング中-->
      <v-card class="getLoad">
        <p>ISSの位置情報を取得中・・・</p>
      </v-card>
    </div>

    <div v-if="!store.loading">
      <!--コンテンツ表示中-->
      <v-card class="lat">
        <p>緯度：{{ store.latAdjustment }}</p>
      </v-card>
      <br />
      <v-card class="lon">
        <p>経度：{{ store.lonAdjustment }}</p>
      </v-card>
      <br />
      <v-card class="loc">
        <p>地名詳細：{{ store.checkedLocation }}</p>
      </v-card>
      <p class="suggest">緯度・経度が取得出来たら、②ISS現在地MAPを見てみよう！</p>
    </div>
  </div>
</template>

<style>
.mainContents {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  padding-bottom: 30px;
}
p {
  font-size: 20px;
  padding: 20px;
}
.getLoad,
.lat,
.lon,
.loc,
.suggest {
  max-width: max-content;
  margin: 0 auto;
}
</style>
