const miamiday = {
  mainColors: ['#F4F7F9', '#98C9E5'],

  backgroundColor: '#F4F7F9',

  strokeWidthZoomScale: function (level) {
    return level > 17 ? 1 : level > 14 ? 0.5 : 0.25
  },

  styleGroups: {
    waterArea: [
      {
        zIndex: 200,
        type: 'Polygon',
        fill: '#98C9E5',
      },
    ],

    earth: [
      {
        zIndex: 1,
        type: 'Polygon',
        fill: '#F4F7F9',
      },
    ],

    countryBoundary: [
      {
        zIndex: 262,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#D6CDC1',
      },
    ],

    countryBoundaryZ4: [
      {
        zIndex: 262,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#D6CDC1',
      },
    ],

    countryBoundaryZ6: [
      {
        zIndex: 262,
        type: 'Line',
        strokeWidth: 10,
        stroke: '#D6CDC1',
      },
    ],

    countryBoundaryZ9: [
      {
        zIndex: 262,
        type: 'Line',
        strokeWidth: 14,
        stroke: '#D6CDC1',
      },
    ],

    dashed_boundary: [
      {
        zIndex: 262,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#D6CDC1',
        strokeDasharray: [3, 4],
      },
    ],

    regionBoundary: [
      {
        zIndex: 256,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#D9C9B4',
        opacity: 0.5,
      },
    ],

    nationalForest: [
      {
        zIndex: 31,
        type: 'Polygon',
        fill: '#AFE0A4',
        opacity: 0.65,
      },
    ],

    nationalPark: [
      {
        zIndex: 18,
        type: 'Polygon',
        fill: '#C1F0B6',
        opacity: 0.75,
      },
    ],

    park: [
      {
        zIndex: 24,
        type: 'Polygon',
        fill: '#C7EDA8',
        opacity: 0.85,
      },
    ],

    beach: [
      {
        zIndex: 95,
        type: 'Polygon',
        fill: '#FCFADE',
        opacity: 0.75,
      },
    ],

    glacier: [
      {
        zIndex: 29,
        type: 'Polygon',
        fill: '#E8F2FF',
        opacity: 0.85,
      },
    ],

    golfCourse: [
      {
        zIndex: 56,
        type: 'Polygon',
        fill: '#B5E8B6',
        opacity: 0.85,
      },
    ],

    university: [
      {
        zIndex: 39,
        type: 'Polygon',
        fill: '#EBE6DD',
        opacity: 0.45,
      },
    ],

    hospital: [
      {
        zIndex: 54,
        type: 'Polygon',
        fill: '#FFF5F9',
        opacity: 0.75,
      },
    ],

    builtup: [
      {
        zIndex: 21,
        type: 'Polygon',
        fill: '#E1EAF0',
        opacity: 0.75,
      },
    ],

    military: [
      {
        zIndex: 45,
        type: 'Polygon',
        fill: '#EBEDF2',
        opacity: 0.75,
      },
    ],

    runway: [
      {
        zIndex: 65,
        type: 'Polygon',
        fill: '#E1F2F1',
      },
    ],

    motorway: [
      {
        zIndex: 383,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#BFBAB8',
      },
    ],

    motorwayZ11: [
      {
        zIndex: 383,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#B7B2AF',
      },
    ],

    motorwayZ14: [
      {
        zIndex: 383,
        type: 'Line',
        strokeWidth: 11,
        stroke: '#B7B2AF',
      },
    ],

    motorwayZ17: [
      {
        zIndex: 383,
        type: 'Line',
        strokeWidth: 16,
        stroke: '#B7B2AF',
      },
    ],

    trunkRoads: [
      {
        zIndex: 381,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#BFBAB8',
      },
    ],

    trunkRoadsZ11: [
      {
        zIndex: 381,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#B7B2AF',
      },
    ],

    trunkRoadsZ14: [
      {
        zIndex: 381,
        type: 'Line',
        strokeWidth: 11,
        stroke: '#B7B2AF',
      },
    ],

    trunkRoadsZ17: [
      {
        zIndex: 381,
        type: 'Line',
        strokeWidth: 16,
        stroke: '#B7B2AF',
      },
    ],

    primaryRoads: [
      {
        zIndex: 380,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#D1CCC9',
      },
    ],

    primaryRoadsZ9: [
      {
        zIndex: 380,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#D1CCC9',
      },
    ],

    primaryRoadsZ12: [
      {
        zIndex: 380,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#C2BDBA',
      },
    ],

    primaryRoadsZ14: [
      {
        zIndex: 380,
        type: 'Line',
        strokeWidth: 7,
        stroke: '#B7B2AF',
      },
    ],

    primaryRoadsZ17: [
      {
        zIndex: 380,
        type: 'Line',
        strokeWidth: 8,
        stroke: '#B7B2AF',
      },
    ],

    secondaryRoads: [
      {
        zIndex: 379,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#C7C2BF',
      },
    ],

    secondaryRoadsZ12: [
      {
        zIndex: 379,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#C7C2BF',
      },
    ],

    secondaryRoadsZ14: [
      {
        zIndex: 379,
        type: 'Line',
        strokeWidth: 6,
        stroke: '#B7B2AF',
      },
    ],

    highway: [
      {
        zIndex: 443,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#B7B2AF',
      },
    ],

    highwayZ14: [
      {
        zIndex: 443,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#B7B2AF',
      },
    ],

    tertiary: [
      {
        zIndex: 377,
        type: 'Line',
        strokeWidth: 3,
        stroke: '#CCC8C6',
      },
    ],

    tertiaryZ13: [
      {
        zIndex: 377,
        type: 'Line',
        strokeWidth: 5,
        stroke: '#CCC8C6',
      },
    ],

    tertiaryZ14: [
      {
        zIndex: 377,
        type: 'Line',
        strokeWidth: 4,
        stroke: '#B7B2AF',
      },
    ],

    minorRoads: [
      {
        zIndex: 360,
        type: 'Line',
        strokeWidth: 1,
        stroke: '#BDB7B5',
      },
    ],

    minorRoadsZ14: [
      {
        zIndex: 360,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#BDB7B5',
      },
    ],

    minorRoadsZ17: [
      {
        zIndex: 360,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#B7B2AF',
      },
    ],

    pathRoads: [
      {
        zIndex: 354,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#DBD6D3',
      },
    ],

    buildings: [
      {
        zIndex: 475,
        type: 'Polygon',
        fill: '#EDF3F5',
      },
    ],

    buildingsZ16: [
      {
        zIndex: 475,
        type: 'Line',
        strokeWidth: 2,
        stroke: '#CED6D9',
      },
      {
        zIndex: 475,
        type: 'Polygon',
        fill: '#EDF3F5',
      },
    ],

    hospitalBuilding: [
      {
        zIndex: 475,
        type: 'Polygon',
        fill: '#FCE1EB',
        opacity: 0.75,
      },
    ],

    universityBuilding: [
      {
        zIndex: 475,
        type: 'Polygon',
        fill: '#F5EEC4',
      },
    ],

    sportsBuilding: [
      {
        zIndex: 475,
        type: 'Polygon',
        fill: '#F2CAB1',
      },
    ],

    artsBuilding: [
      {
        zIndex: 475,
        type: 'Polygon',
        fill: '#D0CEED',
      },
    ],
  },

  assign: function (feature, level) {
    var props = feature.properties
    var kind = props.kind
    var layer = props.layer
    var geom = feature.geometry.type

    if (layer === 'water') {
      if (geom === 'LineString' || geom === 'MultiLineString') {
        return
      }
      return 'waterArea'
    }

    if (layer === 'boundaries') {
      if (kind === 'country') {
        if (level >= 9) {
          return 'countryBoundaryZ9'
        }
        if (level >= 6) {
          return 'countryBoundaryZ6'
        }
        if (level >= 4) {
          return 'countryBoundaryZ4'
        }
        if (level >= 1) {
          return 'countryBoundary'
        }
      }

      if (kind === 'disputed') {
        return 'dashed_boundary'
      }

      if (kind === 'region') {
        if (level >= 6) {
          return 'regionBoundary'
        }
      }
    }

    if (layer === 'landuse') {
      if (kind === 'national_park' || kind === 'nature_reserve') {
        if (level > 3) {
          return 'nationalPark'
        }
      }
      if (kind === 'forest') {
        if (level > 6) {
          return 'nationalForest'
        }
      }
      if (kind === 'park') {
        if (level > 3) {
          return 'park'
        }
      }
      if (kind === 'beach') {
        if (level > 3) {
          return 'beach'
        }
      }
      if (kind === 'glacier') {
        if (level > 3) {
          return 'glacier'
        }
      }
      if (kind === 'hospital') {
        if (level >= 13) {
          return 'hospital'
        }
      }
      if (kind === 'university') {
        return 'university'
      }
      if (kind === 'golf_course') {
        return 'golfCourse'
      }
      if (kind === 'military') {
        return 'military'
      }
      if (kind === 'industrial') {
        return 'builtup'
      }
      if (kind === 'runway') {
        return 'runway'
      }
    }

    if (layer === 'roads') {
      if (kind === 'rail' || kind === 'ferry') {
        return
      }
      if (feature.properties.min_zoom === 3) {
        if (level >= 6) {
          return 'motorway'
        }
      }
      if (feature.properties.kind_detail === 'motorway') {
        if (level >= 17) {
          return 'motorwayZ17'
        }
        if (level >= 14) {
          return 'motorwayZ14'
        }
        if (level >= 11) {
          return 'motorwayZ11'
        }
        if (level >= 6) {
          return 'motorway'
        }
      }
      if (feature.properties.kind_detail === 'trunk') {
        if (level >= 17) {
          return 'trunkRoadsZ17'
        }
        if (level >= 14) {
          return 'trunkRoadsZ14'
        }
        if (level >= 11) {
          return 'trunkRoadsZ11'
        }
        if (level >= 6) {
          return 'trunkRoads'
        }
      }
      if (feature.properties.kind === 'highway') {
        if (level >= 14) {
          return 'highwayZ14'
        }
        if (level >= 7) {
          return 'highway'
        }
      }
      if (feature.properties.kind_detail === 'primary') {
        if (level >= 17) {
          return 'primaryRoadsZ17'
        }
        if (level >= 13) {
          return 'primaryRoadsZ14'
        }
        if (level >= 11) {
          return 'primaryRoadsZ12'
        }
        if (level >= 9) {
          return 'primaryRoadsZ9'
        }
        if (level >= 7) {
          return 'primaryRoads'
        }
      }
      if (feature.properties.kind_detail === 'secondary') {
        if (level >= 14) {
          return 'secondaryRoadsZ14'
        }
        if (level >= 12) {
          return 'secondaryRoadsZ12'
        }
        if (level >= 10) {
          return 'secondaryRoads'
        }
      }
      //known issue with what appear to be tertiary roads not rendering correctly... look to paris for example
      if (feature.properties.kind_detail === 'tertiary') {
        if (level >= 14) {
          return 'tertiaryZ14'
        }
        if (level >= 13) {
          return 'tertiaryZ13'
        }
        if (level >= 12) {
          return 'tertiary'
        }
      }
      if (feature.properties.kind === 'minor_road') {
        if (level >= 17) {
          return 'minorRoadsZ17'
        }
        if (level >= 14) {
          return 'minorRoadsZ14'
        }
        if (level >= 13) {
          return 'minorRoads'
        }
      }
      if (feature.properties.kind === 'path') {
        if (level >= 17) {
          return 'pathRoads'
        }
      }
    }

    if (layer === 'buildings') {
      if (feature.properties.kind_detail === 'hospital') {
        return 'hospitalBuilding'
      }
      if (feature.properties.kind_detail === 'educational_institution') {
        return 'universityBuilding'
      }
      if (feature.properties.kind_detail === 'sports') {
        return 'sportsBuilding'
      }
      if (feature.properties.kind_detail === 'arts_centre') {
        return 'artsBuilding'
      }
      if (level >= 16) {
        return 'buildingsZ16'
      }
      return 'buildings'
    }
  },
}

export default miamiday
