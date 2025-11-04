<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!--固定ヘッダー-->
    <v-layout class="fixedHeader">
      <v-app-bar color="white">
        <v-btn class="btn1" color="indigo" size="x-large" rounded="pill"> Iss Portal </v-btn>
      </v-app-bar>
    </v-layout>
  </header>

  <div class="pageHeader">
    <!--メインコンテンツ-->
    <h1>国際宇宙ステーション(ISS) 現在地取得</h1>
    <nav>
      <RouterLink to="/">
        <v-btn class="btn2" size="x-large"> ①ISS位置情報取得 </v-btn>
      </RouterLink>
      <RouterLink to="/Map">
        <v-btn class="btn3" size="x-large">②ISS現在地MAP</v-btn>
      </RouterLink>
    </nav>
  </div>
  <RouterView class="changePage" />
</template>

<style scoped>
.titleIcon {
  width: 80px;
  height: 80px;
  vertical-align: middle;
}
.pageHeader {
  display: flex;
  flex-direction: column;
  margin: 0 0 10px 0;
}

.pageHeader h1 {
  margin: 0 0 10px 0;
  padding-bottom: 50px;
}

.pageHeader nav {
  display: flex;
  margin: 0 auto;
  gap: 100px;
}
</style>
