<template>
  <div>
    <Vue3Apexcharts class="ml-1" width="97%" height="360" type="line" :options="plotOptions" :series="series"></Vue3Apexcharts>
  </div>
</template>

<script>
import Vue3Apexcharts from "vue3-apexcharts/src/vue3-apexcharts.js";

export default{
  components: {Vue3Apexcharts},
  data(){
    return{
      "annotations": {},
      "chart": {
        "animations": {
          "enabled": false,
          "easing": "swing"
        },
        "background": "",
        "foreColor": "#333",
        "fontFamily": "Hind Siliguri",
        "height": 249,
        "id": "U4OUv",
        "stackOnlyBar": true,
        "toolbar": {
          "show": false,
          "tools": {
            "selection": true,
            "zoom": true,
            "zoomin": true,
            "zoomout": true,
            "pan": true,
            "reset": true
          }
        },
        "width": 543,
        "fontUrl": null
      },
      "plotOptions": {
        "bar": {
          "borderRadius": 10,
          "borderRadiusApplication": "end",
          "borderRadiusWhenStacked": "last",
          "hideZeroBarsWhenGrouped": false,
          "isDumbbell": false,
          "isFunnel": false,
          "isFunnel3d": true,
          "dataLabels": {
            "total": {
              "enabled": false,
              "offsetX": 0,
              "offsetY": 0,
              "style": {
                "color": "#373d3f",
                "fontSize": "12px",
                "fontWeight": 600
              }
            }
          }
        },
        "bubble": {
          "zScaling": true
        },
        "treemap": {
          "dataLabels": {
            "format": "scale"
          }
        },
        "radialBar": {
          "hollow": {
            "background": "#fff"
          },
          "dataLabels": {
            "name": {},
            "value": {},
            "total": {}
          },
          "barLabels": {
            "enabled": false,
            "margin": 5,
            "useSeriesColors": true,
            "fontWeight": 600,
            "fontSize": "16px"
          }
        },
        "pie": {
          "donut": {
            "labels": {
              "name": {},
              "value": {},
              "total": {}
            }
          }
        }
      },
      "dataLabels": {
        "enabled": false,
        "style": {
          "fontWeight": 700
        }
      },
      "grid": {
        "padding": {
          "right": 25,
          "left": 15
        }
      },
      "legend": {
        "fontSize": 14,
        "offsetY": 0,
        "itemMargin": {
          "vertical": 0
        }
      },
      "markers": {
        "hover": {
          "sizeOffset": 6
        }
      },
      "series": [
        {
          "name": "Likes",
          "data": [
            {
              "x": "Yanvar",
              "y": 4
            },
            {
              "x": "Fevral",
              "y": 3
            },
            {
              "x": "Mart",
              "y": 10
            },
            {
              "x": "Aprel",
              "y": 9
            },
            {
              "x": "May",
              "y": 29
            },
            {
              "x": "Iyun",
              "y": 19
            },
            {
              "x": "7/11",
              "y": 22
            },
            {
              "x": "Avgust",
              "y": 9
            },
            {
              "x": "Sentyabr",
              "y": 12
            },
            {
              "x": "Oktyabr",
              "y": 7
            },
            {
              "x": "Noyabr",
              "y": 19
            },
            {
              "x": "Dekabr",
              "y": 5
            }
          ],
          "zIndex": 0
        },
        {
          "name": "Likes",
          "data": [
            {
              "x": "Yanvar",
              "y": 4
            },
            {
              "x": "Fevral",
              "y": 3
            },
            {
              "x": "Mart",
              "y": 10
            },
            {
              "x": "Aprel",
              "y": 9
            },
            {
              "x": "May",
              "y": 29
            },
            {
              "x": "Iyun",
              "y": 19
            },
            {
              "x": "7/11",
              "y": 22
            },
            {
              "x": "Avgust",
              "y": 9
            },
            {
              "x": "Sentyabr",
              "y": 12
            },
            {
              "x": "Oktyabr",
              "y": 7
            },
            {
              "x": "Noyabr",
              "y": 19
            },
            {
              "x": "Dekabr",
              "y": 5
            }
          ],
          "zIndex": 0
        }
      ],
      "stroke": {
        "width": 5,
        "fill": {
          "type": "solid",
          "opacity": 0.85,
          "gradient": {
            "shade": "dark",
            "type": "horizontal",
            "shadeIntensity": 0.5,
            "inverseColors": true,
            "opacityFrom": 1,
            "opacityTo": 1,
            "stops": [
              0,
              50,
              100
            ],
            "colorStops": []
          }
        }
      },
      "tooltip": {
        "hideEmptySeries": true
      },
      "xaxis": {
        "labels": {
          "trim": true,
          "style": {}
        },
        "group": {
          "groups": [],
          "style": {
            "colors": [],
            "fontSize": "12px",
            "fontWeight": 400,
            "cssClass": ""
          }
        },
        "tickAmount": "dataPoints",
        "title": {
          "style": {
            "fontWeight": 700
          }
        }
      },
      "yaxis": {
        "tickAmount": 5,
        "labels": {
          "style": {}
        },
        "title": {
          "style": {
            "fontWeight": 700
          }
        }
      },
      "theme": {
        "palette": "palette4"
      }
    }
  }
}
</script>