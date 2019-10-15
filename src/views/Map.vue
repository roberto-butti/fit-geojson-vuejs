<template>
  <div class="map">
    <router-link class="link" to="/">&laquo; go back</router-link>

    <div id="mapContainer" class="wrapper"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import miamiday from './themes/miamiday'

let HERE = window.HERE
export default {
  name: 'Map',
  computed: {
    parsedData() {
      return 0
    },
    ...mapGetters(['geojson', 'extension'])
  },
  mounted() {
    if (!this.geojson || this.geojson.trim() === '') this.$router.push('/')
    let myAccessToken = process.env.VUE_APP_ACCESS_TOKEN

    var pointLayer = new HERE.xyz.maps.layers.TileLayer({
      name: 'my Point Layer',
      min: 4,
      max: 20,
      provider: new HERE.xyz.maps.providers.LocalProvider({
        name: 'my Point Provider'
      }),
      style: {
        styleGroups: {
          style: [
            { zIndex: 1, type: 'Line', strokeWidth: 2, stroke: '#DD8811' },
            { zIndex: 0, type: 'Line', strokeWidth: 4, stroke: '#F0F0F0' }
          ],
          styleHigh: [
            { zIndex: 1, type: 'Line', strokeWidth: 2, stroke: '#FF0000' },
            { zIndex: 0, type: 'Line', strokeWidth: 4, stroke: '#F0F0F0' }
          ]
        },
        assign: function(feature) {
          //console.log(feature)
          if (feature.properties.hr && feature.properties.hr > 130) {
            return 'styleHigh'
          }
          return 'style'
        }
      }
    })

    this.display = new HERE.xyz.maps.Map(
      document.getElementById('mapContainer'),
      {
        zoomLevel: 6,
        center: {
          longitude: 12.51133,
          latitude: 41.89193
        },
        layers: [
          new HERE.xyz.maps.layers.MVTLayer({
            name: 'mvt-world-layer',
            remote: {
              url:
                'https://xyz.api.here.com/tiles/osmbase/256/all/{z}/{x}/{y}.mvt?access_token=' +
                myAccessToken
              // optional settings:
              // max  : 16,     // max level for loading data
              // min  : 1       // min level for loading data
              // tileSize : 512 // 512|256 defines mvt tilesize in case it can't be automatically detected in url..
            },
            min: 1,
            max: 20,
            style: miamiday
          }),
          pointLayer
        ]
      }
    )
    var Features = JSON.parse(this.geojson)
    pointLayer.addFeature(Features)
    console.log(Features.features[0].geometry.coordinates[0])
    this.display.setCenter(Features.features[0].geometry.coordinates[0])
    this.display.setZoomlevel(14)
  }
}
</script>

<style>
.wrapper {
  width: 100%;
  height: 100%;
}
.map {
  width: 100%;
  height: 100%;
}
</style>
