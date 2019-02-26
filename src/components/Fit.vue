<template>
  <div class="container">
    <div class="content" v-if="geojson">
      <codemirror
        id="codemirror"
        :options="cmOptions"
        :value="geojson"
      ></codemirror>
      <p>
        <a
          class="btn"
          v-bind:href="buttonDownload.href"
          v-bind:download="buttonDownload.download"
          type="button"
          @click="download"
          >DOWNLOAD</a
        >
        or
        <a class="link" @click="refresh">Upload new file</a>
      </p>
    </div>
    <div class="content" v-else>
      <vue-dropzone
        id="dropzone"
        :options="dropOptions"
        :useCustomSlot="true"
        @vdropzone-file-added="addedfile"
      >
        <div class="dropzone-custom-content">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
            />
          </svg>
          <strong>DRAG & DROP</strong>
          <span>convert .fit file(from garmin, Zwift ...) to Geojson file</span>
        </div>
      </vue-dropzone>
    </div>
  </div>
</template>

<script>
import EasyFit from 'easy-fit'
import vueDropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

export default {
  data() {
    return {
      status: 'Select your FIT file',
      filename: '',
      geojson: '',
      buttonDownload: {
        href: '',
        download: 'download.geojson'
      },
      dropOptions: {
        url: () => '',
        autoDiscover: false,
        autoProcessQueue: false,
        maxFiles: 1
      },
      cmOptions: {
        tabSize: 2,
        theme: 'base16-light',
        mode: 'text/javascript',
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
      this.buttonDownload.download = `${this.filename}.geojson`
    },
    addedfile(file) {
      console.log(file)
      const reader = new FileReader()
      console.log('STATUS:', reader.readyState) // readyState will be 0

      console.log('readin', file.size)
      this.filename = file.name.replace('.fit', '')
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
  height: 100%;
  margin: auto;
  display: flex;
}

.link {
  color: #42b983;
  cursor: pointer;
}

.btn {
  margin: 40px 0 0;
  padding: 8px 16px;
  color: #fff;
  font-size: 14px;
  line-height: normal;
  text-decoration: none;
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

.content {
  width: 100%;
  margin: 50px 50px 100px;
}

#dropzone,
#codemirror {
  width: 100%;
  height: 100%;
  margin: 0 auto 40px;
  border-radius: 8px;
}

#dropzone {
  color: #ccc;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  transition: color 0.2s, background 0.2s, border 0.2s;

  &.dz-started {
    .dz-message {
      display: block;
    }

    .dropzone-custom-content {
      .massage {
        display: none;
      }
      .loading {
        display: block;
      }
    }
  }

  .dz-preview {
    display: none;
  }

  .dz-message {
    margin: 0 auto;
  }

  .dropzone-custom-content {
    margin: 0 auto;
    font-size: 14px;

    .loading {
      display: none;
    }

    svg {
      width: 38px;
      margin: 0 auto 20px;
      display: block;
    }

    strong {
      font-size: 18px;
      display: block;
    }
  }
}

#codemirror {
  text-align: left;
  border: 1px solid #ccc;
  overflow: hidden;

  .CodeMirror {
    height: 100%;
  }
}
</style>
