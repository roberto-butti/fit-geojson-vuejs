<template>
  <div>
    <h2>Load Fit File</h2>
    <label class="text-reader">
      Read FIT File
      <input type="file" @change="loadFitFromFile" />
    </label>
    <div class="status">{{ status }}</div>
    <textarea rows="4" cols="50"
      >{{ geojson }}
</textarea
    >
  </div>
</template>

<script>
import EasyFit from 'easy-fit'
export default {
  data() {
    return {
      status: 'Select your FIT file',
      geojson: '{}'
    }
  },
  methods: {
    transformData(data) {
      this.geojson = JSON.stringify(data, null, 2)
    },
    parseFitFile(result, reader) {
      console.log('STATUS:', reader.readyState) // readyState will be 0
      console.log(result)
      var easyFit = new EasyFit({
        force: true,
        speedUnit: 'km/h',
        lengthUnit: 'km',
        temperatureUnit: 'kelvin',
        elapsedRecordField: true,
        mode: 'cascade'
      })

      easyFit.parse(result, (error, data) => {
        // Handle result of parse method
        if (error) {
          console.log(error)
          this.status = 'Error !!!' + error
        } else {
          this.status = 'Loaded DATA!!!'
          this.transformData(data)
        }
      })
    },
    loadFitFromFile(ev) {
      const file = ev.target.files[0]
      const reader = new FileReader()
      console.log('STATUS:', reader.readyState) // readyState will be 0

      console.log('readin', file.size)
      this.status = 'Parsing your FIT file, ' + file.size + ' bytes'

      reader.onloadend = e => this.parseFitFile(e.target.result, reader)
      reader.readAsArrayBuffer(file)
      console.log('STATUS:', reader.readyState) // readyState will be 0
    }
  }
}
</script>

<style scoped>
.text-reader {
  position: relative;
  overflow: hidden;
  display: inline-block;

  /* Fancy button style 😎 */
  border: 2px solid black;
  border-radius: 5px;
  padding: 8px 12px;
  cursor: pointer;
}
.text-reader input {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0;
}
</style>
