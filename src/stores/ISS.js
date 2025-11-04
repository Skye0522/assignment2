import { defineStore } from 'pinia'
import axios from 'axios'

export const useIssStore = defineStore('Iss', {
  state: () => ({
    lat: '0.0000', // 緯度
    lon: '0.0000', // 経度
    location: '', // 位置情報
    error: '', // 位置情報取得失敗時
    loading: false, //ローディング制御
    countryName: '', //MAP表示 国名
    stateName: '', //map表示・ 州名
  }),

  actions: {
    async fetchPosition() {
      this.loading = true //ローディング表示
      try {
        // ISSAPI呼び出し
        const res = await axios.get('http://api.open-notify.org/iss-now.json')
        this.lat = res.data.iss_position.latitude
        this.lon = res.data.iss_position.longitude
      } catch (error) {
        console.error('データ1の取得に失敗しました', error)
      }
      try {
        // 位置情報API呼び出し
        const res2 = await axios.get(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.lat}&lon=${this.lon}`,
        )
        if (res2.data.error) {
          //地名取得ができない場所にいるとき
          this.error = 'この位置情報では地名を取得できませんでした、、海上にいるかも。'
          this.location = ''
          this.countryName = '海上にいます。。'
          this.stateName = '時間をおいて試してみよう。。'
        } else {
          //取得成功時
          this.location = res2.data.display_name
          this.countryName = res2.data.address.country
          this.stateName = res2.data.address.state
        }
      } catch (error) {
        console.error('データ2の取得に失敗しました', error)
      }
      //2秒ローディング
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
  },
  getters: {
    latAdjustment: (state) => {
      return state.lat + '000' //桁あわせ
    },
    lonAdjustment: (state) => {
      return state.lon + '000' //桁あわせ
    },
    checkedLocation: (state) => {
      if (state.error) return state.error
      if (!state.location) {
        return '位置情報を取得' //初回表示
      } else {
        return state.location
      }
    },
    mapCountryName: (state) => {
      if (state.error) {
        return state.countryName
      } else if (state.countryName) {
        return '国：' + state.countryName
      } else {
        return '国：情報なし'
      }
    },
    mapStateName: (state) => {
      if (state.error) {
        return state.stateName
      } else if (state.stateName) {
        return '州：' + state.stateName
      } else {
        return '州：情報なし'
      }
    },
  },
})
