<template>
  <div class="container">
    <div class="content" v-if="geojson">
      <codemirror
        id="codemirror"
        :options="cmOptions"
        :value="geojson"
      ></codemirror>
      <div>
        Download as
        <div class="btn-download">
          <a
            class="btn btn-dropdown--first"
            v-bind:href="buttonDownload.href"
            v-bind:download="buttonDownload.download"
            type="button"
            @click="download"
            >{{ selectedFormat.toUpperCase() }}</a
          >

          <v-select
            class="select__toggle--only btn-dropdown--last"
            v-model="selectedFormat"
            :options="fileFormats"
            :clearable="false"
            :searchable="false"
            :reduce="format => format.value"
            @input="download"
          ></v-select>
        </div>
        <span>
          or
          <router-link class="link" to="/charts">see some Charts</router-link>
        </span>
        <span>
          or
          <router-link class="link" to="/map">see data on Map</router-link>
        </span>
        or
        <a class="link" @click="refresh">Upload new file</a>
      </div>
    </div>
    <div class="content" v-else>
      <div>
        <div class="error" v-if="errormsg">
          <p>{{ errormsg }}</p>
        </div>
      </div>
      <vue-dropzone
        id="dropzone"
        class="row"
        :options="dropOptions"
        :useCustomSlot="true"
        @vdropzone-file-added="addedfile"
      >
        <div class="dropzone-custom-content col-12">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16.5 6v11.5c0 2.21-1.79 4-4 4s-4-1.79-4-4V5c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v10.5c0 .55-.45 1-1 1s-1-.45-1-1V6H10v9.5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V5c0-2.21-1.79-4-4-4S7 2.79 7 5v12.5c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5V6h-1.5z"
            />
          </svg>
          <strong>DRAG &amp; DROP</strong>
          <span>
            convert .fit or .gpx file (from Garmin, Zwift, Strava&hellip;) to
            Geojson file
          </span>
        </div>
      </vue-dropzone>
      <div class="row">
        <div class="col-12">
          Or import from URL
          <input
            class="text-input"
            type="url"
            v-model="uploadURL"
            placeholder="https://your.domain/your-file.gpx"
          />

          <button class="btn" v-on:click="uploadfile">Upload</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EasyFit from 'easy-fit'
//import gpxParse from 'gpx-parse'

import vueDropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'

import { codemirror } from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/base16-light.css'

import vSelect from 'vue-select'

export default {
  data() {
    return {
      status: 'Select your FIT or GPX file',
      errormsg: '',
      uploadURL: '',
      selectedFormat: 'geojson',
      buttonDownload: {
        href: '',
        download: 'download.geojson'
      },
      dropOptions: {
        url: () => '',
        autoDiscover: false,
        autoProcessQueue: false,
        acceptedFiles: '.gpx,.fit',
        maxFiles: 1
      },
      cmOptions: {
        tabSize: 2,
        theme: 'base16-light',
        mode: 'application/json',
        lineNumbers: true,
        line: true
      },
      fileFormats: [
        {
          value: 'geojson',
          label: 'Geojson'
        },
        {
          value: 'csv',
          label: 'CSV'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['geojson', 'extension', 'filename'])
  },
  components: {
    vueDropzone: vueDropzone,
    codemirror: codemirror,
    vSelect: vSelect
  },
  methods: {
    get_gpx_data(node, result) {
      if (!result) result = { segments: [] }

      switch (node.nodeName) {
        case 'name':
          //console.log(node.nodeName + ' = ' + node.textContent)
          result.name = node.textContent

          break

        case 'trkseg':
          var segment = []
          result.segments.push(segment)
          for (var i = 0; i < node.childNodes.length; i++) {
            var snode = node.childNodes[i]
            if (snode.nodeName == 'trkpt') {
              var trkpt = {
                loc: [
                  parseFloat(snode.attributes['lat'].value),
                  parseFloat(snode.attributes['lon'].value)
                ]
              }
              for (var j = 0; j < snode.childNodes.length; j++) {
                var ssnode = snode.childNodes[j]

                switch (ssnode.nodeName) {
                  case 'time':
                    trkpt.time = new Date(ssnode.childNodes[0].data)
                    break
                  case 'ele':
                    trkpt.ele = parseFloat(ssnode.childNodes[0].data)
                    break
                  case 'extensions':
                    var extNodes = ssnode.childNodes
                    for (
                      var idxExtNode = 0;
                      idxExtNode < extNodes.length;
                      idxExtNode++
                    ) {
                      var extNode = extNodes[idxExtNode]
                      //console.log(extNode.nodeName)
                      if (extNode.nodeName == 'gpxtpx:TrackPointExtension') {
                        //console.log(extNode)
                        var trackPointNodes = extNode.childNodes
                        for (
                          var idxTrackPointNode = 0;
                          idxTrackPointNode < trackPointNodes.length;
                          idxTrackPointNode++
                        ) {
                          var trackPointNode =
                            trackPointNodes[idxTrackPointNode]
                          //console.log(trackPointNode.nodeName)
                          if (trackPointNode.nodeName.startsWith('gpxtpx:')) {
                            var gpxName = trackPointNode.nodeName.split(':')
                            trkpt[gpxName[1]] =
                              trackPointNode.childNodes[0].data
                          }
                        }
                      }
                    }
                    //console.log(ssnode.childNodes)
                    //extNode.forEach(element => {
                    //console.log(element.power)
                    //})
                    break
                }
              }
              segment.push(trkpt)
            }
          }
          break
      }

      for (
        var idxChildNodes = 0;
        idxChildNodes < node.childNodes.length;
        idxChildNodes++
      ) {
        this.get_gpx_data(node.childNodes[idxChildNodes], result)
      }
      return result
    },

    transformGpxData(data) {
      //console.log(data)
      let geo = {}
      geo.type = 'FeatureCollection'
      geo.features = []

      if (data && data.segments) {
        let prev_position_long = 0
        let prev_position_lat = 0
        let idx_records = 0
        let element = {}
        for (
          idx_records = 0;
          idx_records < data.segments[0].length;
          idx_records++
        ) {
          element = data.segments[0][idx_records]
          //data.segments[0].forEach(element => {
          //console.error('elemento', element)

          if (Array.isArray(element.loc)) {
            if (idx_records > 0) {
              let f = {}
              f.type = 'Feature'
              f.properties = element
              f.geometry = {}
              f.geometry.type = 'LineString'
              f.geometry.coordinates = [
                [prev_position_long, prev_position_lat],
                [element.loc[1], element.loc[0]]
              ]
              geo.features.push(f)
            }
            prev_position_long = element.loc[1]
            prev_position_lat = element.loc[0]
          } else {
            //console.error(element.loc)
          }
        }
      }
      this.$store.commit('geojson', JSON.stringify(geo, null, 2))
    },
    parseGpxFile(result /*, reader*/) {
      //console.log('STATUS:', reader.readyState) // readyState will be 0
      //console.log(result)
      var xml = new window.DOMParser().parseFromString(result, 'text/xml')
      //console.log(xml)
      if (xml) {
        var objGpx = this.get_gpx_data(xml.documentElement)
        this.status = 'Loaded DATA!!!'
        //console.log(objGpx)
        this.transformGpxData(objGpx)
      } else {
        this.status = 'Error parsing GPX'
      }
    },
    transformFitData(data) {
      //console.log(data)
      let geo = {}
      geo.type = 'FeatureCollection'
      geo.features = []

      if (data && data.records) {
        let prev_position_long = 0
        let prev_position_lat = 0
        let idx_records = 0
        let element = {}
        for (
          idx_records = 0;
          idx_records < data.records.length;
          idx_records++
        ) {
          element = data.records[idx_records]

          if (idx_records > 0) {
            let f = {}
            f.type = 'Feature'
            f.properties = element
            f.geometry = {}
            f.geometry.type = 'LineString'
            f.geometry.coordinates = [
              [prev_position_long, prev_position_lat],
              [element.position_long, element.position_lat]
            ]
            geo.features.push(f)
          }
          prev_position_long = element.position_long
          prev_position_lat = element.position_lat
        }
      }
      this.$store.commit('geojson', JSON.stringify(geo, null, 2))
    },
    parseFitFile(result /*, reader */) {
      //console.log('STATUS:', reader.readyState) // readyState will be 0
      //console.log(result)
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
          //console.log(error)
          this.status = 'Error !!!' + error
        } else {
          this.status = 'Loaded DATA!!!'
          this.transformFitData(data)
        }
      })
    },
    convert2CSV() {
      let items = JSON.parse(this.geojson).features
      const replacer = (key, value) => (value === null ? '' : value)
      const headers = ['lat', 'long', ...Object.keys(items[0].properties)]
      items = items.map(el => {
        for (let i of Object.keys(el.properties)) {
          el.properties[i] = Array.isArray(el.properties[i])
            ? el.properties[i].flat().join(',')
            : el.properties[i]
        }
        return {
          lat: el.geometry.coordinates[0][1],
          long: el.geometry.coordinates[0][0],
          ...el.properties
        }
      })
      let csv = items.map(row =>
        headers
          .map(fieldName => JSON.stringify(row[fieldName], replacer))
          .join(',')
      )
      csv.unshift(headers.join(','))
      return csv.join('\r\n')
    },
    refresh() {
      this.$store.commit('geojson', '')
      this.errormsg = ''
    },
    download() {
      var fileName, fileData, mimeType
      if (this.selectedFormat === 'csv') {
        fileName = `${this.filename}.csv`
        fileData = this.convert2CSV()
        mimeType = 'text/csv'
      } else {
        fileName = `${this.filename}.geojson`
        fileData = this.geojson
        mimeType = 'application/geojson'
      }

      const blob = new Blob([fileData], { type: mimeType })
      const url = URL.createObjectURL(blob)
      this.buttonDownload.href = url
      this.buttonDownload.download = fileName
    },
    addedfile(file) {
      //console.log('Added file', file)
      const reader = new FileReader()
      //console.log('STATUS:', reader.readyState) // readyState will be 0
      //console.log('readin', file.size)
      this.$store.commit(
        'extension',
        file.name
          .split('.')
          .pop()
          .toLowerCase()
      )

      this.$store.commit('filename', file.name.replace('.fit', ''))
      this.status = 'Parsing your FIT file, ' + file.size + ' bytes'
      if (this.extension == 'fit') {
        reader.onloadend = e => this.parseFitFile(e.target.result /*, reader*/)
        reader.readAsArrayBuffer(file)
      } else if (this.extension == 'gpx') {
        reader.onloadend = e => this.parseGpxFile(e.target.result /*, reader*/)
        reader.readAsText(file)
      } else {
        this.status = 'Not a .fit ot .gpx file. Please try uploading again.'
        this.errormsg = this.status
        //console.log('Invalid file extension')
      }

      //console.log('STATUS:', reader.readyState) // readyState will be 0
    },
    uploadfile() {
      let proxyUrl = process.env.VUE_APP_PROXY_URL
      //console.log('PROXY:' + proxyUrl)
      let filename = this.uploadURL.split('/').slice(-1)[0]
      fetch(proxyUrl + this.uploadURL, { method: 'GET' })
        .then(response => response.blob())
        .then(data => new File([data], filename))
        .then(file => this.addedfile(file))
    }
  }
}
</script>

<style lang="scss">
@import 'vue-select/src/scss/vue-select.scss';

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

  &[type='button'],
  &[type='reset'],
  &[type='submit'] {
    -webkit-appearance: none;
  }

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

.text-input {
  border-radius: 4px;
  border: solid 1px #ccc;
  padding: 6px 8px;
  margin: 0 10px;
  width: 25%;

  &:focus {
    border-color: #42b983;
    outline: 0;
  }
}

.btn-download {
  margin-top: 16px;
  display: inline-flex;

  .btn {
    margin: 0;
  }

  .btn-dropdown--first {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    border-right: 1px solid #fff;
  }

  .btn-dropdown--last {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding-right: 8px;
    padding-left: 8px;
  }
}

.v-select {
  font-size: 14px;
  line-height: normal;
  color: #fff;
  background-color: #42b983;
  border-radius: 4px;

  &.select__toggle--only {
    padding: 0;

    .vs__dropdown-toggle {
      height: 100%;
      border: none;
      width: 100;
      padding: 8px;
    }

    .vs__actions {
      padding: 0;
    }

    .vs__dropdown-menu {
      top: calc(-100% - 20px);
      border: 1px solid rgba(0, 0, 0, 0.25);
      border-radius: 4px;
      min-width: initial;
      width: initial;
    }
  }

  .vs__selected-options {
    display: none;
  }
}

.content {
  width: 100%;
  margin: 5px 50px 100px;
}

#dropzone,
#codemirror {
  width: 100%;
  height: 85%;
  margin: 0 auto;
  border-radius: 8px;
}

#dropzone {
  color: #494e47;
  border: 1px solid #42b983;
  display: flex;
  align-items: center;
  transition: color 0.2s, background 0.2s, border 0.2s;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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

  &.dz-drag-hover {
    background: rgba(69, 212, 93, 0.24);
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

.error {
  margin: 7px 0;
  padding: 7px 11px 4px;
  background: #fce4e4;
  font-weight: bold;
  color: #c03;
  line-height: 20px;
  border-radius: 8px;
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
