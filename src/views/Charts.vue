<template>
  <div class="charts">
    <router-link class="link" to="/">&laquo; go back</router-link>
    <apexchart
      class="chart-wrp"
      height="400"
      :options="{
        xaxis: {
          type: 'datetime',
          categories: distance,
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        grid: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: 'area',
          stacked: true,
          animations: {
            enabled: false,
          },
          zoom: {
            enabled: true,
          },
        },
        storke: {
          width: 0.4,
          curve: 'smooth',
          lineCap: 'round',
        },
        tooltip: {
          x: {
            show: true,
            format: 'H:mm:ss',
          },
        },
      }"
      :series="parsedData"
    ></apexchart>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Charts',
  computed: {
    distance() {
      return JSON.parse(this.geojson).features.map((el) => {
        if (el.properties.time) {
          return el.properties.time
        }
        return el.properties.timestamp
      })
    },
    parsedData() {
      let features = JSON.parse(this.geojson).features
      let output = []
      if (features[0].properties.cad) {
        output.push({
          name: 'gpxcadence',
          data: features.map((el) => {
            return el.properties.cad
          }),
        })
      }
      if (features[0].properties.ele) {
        output.push({
          name: 'gpxelevation',
          data: features.map((el) => {
            return el.properties.ele
          }),
        })
      }
      if (features[0].properties.hr) {
        output.push({
          name: 'gpxhr',
          data: features.map((el) => {
            return el.properties.hr
          }),
        })
      }
      if (features[0].properties.speed) {
        output.push({
          name: 'speed',
          data: features.map((el) => {
            return el.properties.speed.toFixed(2)
          }),
        })
      }
      if (features[0].properties.cadence) {
        output.push({
          name: 'cadence',
          data: features.map((el) => {
            return el.properties.cadence
          }),
        })
      }
      if (features[0].properties.heart_rate) {
        output.push({
          name: 'heart rate',
          data: features.map((el) => {
            return el.properties.heart_rate
          }),
        })
      }
      return output
    },
    ...mapGetters(['geojson', 'extension']),
  },
  mounted() {
    //console.log(this.geojson)
    if (!this.geojson || this.geojson.trim() === '') this.$router.push('/')
  },
}
</script>

<style>
.charts {
  width: 100%;
}
.chart-wrp {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}
</style>
