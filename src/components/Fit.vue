<template>
  <div class="container">
    <div class="codemirror-container" v-if="geojson">
      <codemirror
        id="codemirror"
        :options="cmOptions"
        :value="geojson"
      ></codemirror>
      <button class="btn" type="button" @click="refresh">REFRESH</button>
      &nbsp;|&nbsp;
      <a
        class="btn"
        v-bind:href="buttonDownload.href"
        v-bind:download="buttonDownload.download"
        type="button"
        @click="download"
        >DOWNLOAD</a
      >
    </div>
    <div class="dropzone-container" v-else>
      <vue-dropzone
        id="dropzone"
        :options="dropOptions"
        @vdropzone-file-added="addedfile"
      ></vue-dropzone>
      <label class="btn -upload">
        Read FIT File
        <input type="file" @change="loadFitFromFile" />
      </label>
    </div>
  </div>
</template>

<script>
import EasyFit from 'easy-fit'
import vueDropzone from 'vue2-dropzone'
import { codemirror } from 'vue-codemirror'
import 'codemirror/keymap/sublime.js'

export default {
  data() {
    return {
      status: 'Select your FIT file',
      geojson: '',
      buttonDownload: {
        href: '',
        download: 'download.geojson'
      },
      dropOptions: {
        url: () => '',
        autoDiscover: false,
        autoProcessQueue: false,
        maxFiles: 1,
        dictDefaultMessage: `
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
          </svg>
          <span>DRAG A FILE</span>
        `
      },
      cmOptions: {
        tabSize: 2,
        theme: 'base16-light',
        mode: 'text/javascript',
        keyMap: 'sublime',
        lineNumbers: true,
        line: true
      }
    }
  },
  components: {
    vueDropzone: vueDropzone,
    codemirror: codemirror
  },
  methods: {
    transformData(data) {
      console.log(data)
      let geo = {}
      geo.type = 'FeatureCollection'
      geo.features = []

      if (data && data.records) {
        data.records.forEach(element => {
          let f = {}
          f.type = 'Feature'
          f.properties = element
          f.geometry = {}
          f.geometry.type = 'Point'
          f.geometry.coordinates = [element.position_long, element.position_lat]
          geo.features.push(f)
        })
      }
      this.geojson = JSON.stringify(geo, null, 2)
    },
    parseFitFile(result, reader) {
      console.log('STATUS:', reader.readyState) // readyState will be 0
      console.log(result)
      // For documentation: https://github.com/pierremtb/easy-fit#new-easyfitobject-options
      var easyFit = new EasyFit({
        force: true,
        speedUnit: 'km/h',
        lengthUnit: 'km',
        temperatureUnit: 'kelvin',
        elapsedRecordField: true,
        mode: 'both'
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
    refresh() {
      this.geojson = ''
    },
    download() {
      var blob = new Blob([this.geojson], { type: 'application/geojson' })
      var url = URL.createObjectURL(blob)
      this.buttonDownload.href = url
      this.buttonDownload.download = 'download.geojson'
    },
    loadFitFromFile(ev) {
      console.log(ev.target.files[0])
      const file = ev.target.files[0]
      const reader = new FileReader()
      console.log('STATUS:', reader.readyState) // readyState will be 0

      console.log('readin', file.size)
      this.status = 'Parsing your FIT file, ' + file.size + ' bytes'

      reader.onloadend = e => this.parseFitFile(e.target.result, reader)
      reader.readAsArrayBuffer(file)
      console.log('STATUS:', reader.readyState) // readyState will be 0
    },
    addedfile(file) {
      console.log(file)
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

<style lang="scss">
.container {
  width: 100%;
  margin: auto;
}

.btn {
  margin: 20px 0 0;
  padding: 10px 14px;
  color: #000;
  font-size: 16px;
  background-color: #42b983;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &.-upload {
    position: relative;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
  }

  &.-upload {
    input {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      opacity: 0;
    }
  }
}

#dropzone,
#codemirror {
  width: 80%;
  max-width: 600px;
  height: 500px;
  margin: 0 auto;
}

#dropzone {
  border: 2px dashed #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;

  svg {
    margin: 0 auto 10px;
    display: block;
  }

  .dz-message {
    margin: 0 auto;
  }
}

#codemirror {
  height: 500px;
  text-align: left;
  border: 1px solid #ccc;

  .CodeMirror {
    height: 100%;
  }
}
</style>
