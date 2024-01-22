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
        "fontFamily": "Rubik",
        "height": 250,
        "id": "R8MKt",
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
        "width": 500,
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
          "borderRadius": 4,
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
              "y": "300"
            },
            {
              "x": "Fevral",
              "y": "400"
            },
            {
              "x": "Mart",
              "y": "700"
            },
            {
              "x": "Aprel",
              "y": "1200"
            },
            {
              "x": "May",
              "y": "1000"
            },
            {
              "x": "Iyun",
              "y": "100"
            },
            {
              "x": "Iyul",
              "y": "700"
            },
            {
              "x": "August",
              "y": "800"
            },
            {
              "x": "Sentyabr",
              "y": "2000"
            },
            {
              "x": "Oktyabr",
              "y": "3000"
            },
            {
              "x": "Noyabr",
              "y": "4000"
            },
            {
              "x": "Dekabr",
              "y": "4500"
            }
          ],
          "zIndex": 0
        },
        {
          "name": "series-2",
          "data": [
            {
              "x": "Yanvar",
              "y": "900"
            },
            {
              "x": "Fevral",
              "y": "800"
            },
            {
              "x": "Mart",
              "y": "1100"
            },
            {
              "x": "Aprel",
              "y": "2000"
            },
            {
              "x": "May",
              "y": "3000"
            },
            {
              "x": "Iyun",
              "y": "100"
            },
            {
              "x": "Iyul",
              "y": "800"
            },
            {
              "x": "August",
              "y": "3000"
            },
            {
              "x": "Sentyabr",
              "y": "2000"
            },
            {
              "x": "Oktyabr",
              "y": "4000"
            },
            {
              "x": "Noyabr",
              "y": "3000"
            },
            {
              "x": "Dekabr",
              "y": "3500"
            }
          ],
          "zIndex": 1
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
        "hideEmptySeries": false
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
      },
      "_chartInstances": [
        {
          "id": "Eba7r",
          "chart": {
            "opts": {
              "series": [
                {
                  "name": "series-2",
                  "data": [
                    {
                      "x": "1/11",
                      "y": null
                    },
                    {
                      "x": "2/11",
                      "y": null
                    },
                    {
                      "x": "3/11",
                      "y": null
                    },
                    {
                      "x": "4/11",
                      "y": null
                    },
                    {
                      "x": "5/11",
                      "y": null
                    },
                    {
                      "x": "6/11",
                      "y": null
                    },
                    {
                      "x": "7/11",
                      "y": null
                    },
                    {
                      "x": "8/11",
                      "y": null
                    },
                    {
                      "x": "9/11",
                      "y": null
                    },
                    {
                      "x": "10/11",
                      "y": null
                    },
                    {
                      "x": "11/11",
                      "y": null
                    },
                    {
                      "x": "12/11",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": null
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    },
                    {
                      "x": "",
                      "y": 10
                    }
                  ]
                }
              ],
              "annotations": {
                "position": "front",
                "yaxis": [],
                "xaxis": [],
                "points": []
              },
              "chart": {
                "type": "line",
                "background": "",
                "foreColor": "#333",
                "offsetX": 0,
                "offsetY": 0,
                "toolbar": {
                  "show": false
                },
                "animations": {
                  "enabled": false
                },
                "dropShadow": {
                  "enabled": false,
                  "top": 2,
                  "left": 2,
                  "blur": 4,
                  "color": "#000",
                  "opacity": 0.35
                },
                "fontFamily": "Roboto",
                "height": 250,
                "width": 500,
                "id": "Eba7r"
              },
              "plotOptions": {
                "bar": {
                  "horizontal": false,
                  "columnWidth": "70%",
                  "barHeight": "70%",
                  "distributed": false,
                  "borderRadius": 10,
                  "borderRadiusApplication": "end",
                  "borderRadiusWhenStacked": "last",
                  "colors": {
                    "ranges": [],
                    "backgroundBarColors": [],
                    "backgroundBarOpacity": 1
                  },
                  "dataLabels": {
                    "position": "top"
                  }
                },
                "heatmap": {
                  "radius": 2,
                  "enableShades": true,
                  "shadeIntensity": 0.5
                },
                "radialBar": {
                  "startAngle": 0,
                  "endAngle": 360,
                  "offsetX": 0,
                  "offsetY": 0,
                  "hollow": {
                    "margin": 5,
                    "size": "50%",
                    "background": "#fff",
                    "position": "front",
                    "dropShadow": {
                      "enabled": false,
                      "top": 0,
                      "left": 0,
                      "blur": 3,
                      "color": "#000",
                      "opacity": 0.5
                    }
                  },
                  "track": {
                    "show": true,
                    "background": "#f2f2f2",
                    "strokeWidth": "97%",
                    "opacity": 1,
                    "margin": 5,
                    "dropShadow": {
                      "enabled": false,
                      "top": 0,
                      "left": 0,
                      "blur": 3,
                      "color": "#000",
                      "opacity": 0.5
                    }
                  },
                  "dataLabels": {
                    "show": true,
                    "name": {
                      "show": true,
                      "fontSize": 16,
                      "offsetY": 0
                    },
                    "value": {
                      "show": true,
                      "fontSize": 14,
                      "offsetY": 16
                    },
                    "total": {
                      "show": false,
                      "label": "Total",
                      "fontSize": 16
                    }
                  }
                },
                "pie": {
                  "startAngle": 0,
                  "endAngle": 360,
                  "offsetX": 0,
                  "offsetY": 0,
                  "dataLabels": {
                    "offset": 0
                  },
                  "donut": {
                    "size": "65%",
                    "labels": {
                      "show": false,
                      "name": {
                        "show": true,
                        "fontSize": 16,
                        "offsetY": -10
                      },
                      "value": {
                        "show": true,
                        "fontSize": 20,
                        "offsetY": 10
                      },
                      "total": {
                        "show": false,
                        "showAlways": false,
                        "label": "Total",
                        "fontSize": 16
                      }
                    }
                  }
                },
                "radar": {
                  "offsetX": 0,
                  "offsetY": 0,
                  "polygons": {
                    "strokeColors": "#e8e8e8",
                    "connectorColors": "#e8e8e8",
                    "fill": {}
                  }
                }
              },
              "theme": {
                "mode": "light",
                "palette": "palette4"
              },
              "dataLabels": {
                "enabled": false,
                "textAnchor": "middle",
                "offsetX": 0,
                "offsetY": 0,
                "style": {
                  "fontSize": 12,
                  "fontWeight": 700
                },
                "background": {
                  "enabled": true,
                  "foreColor": "#fff",
                  "borderRadius": 2,
                  "padding": 4,
                  "opacity": 0.9,
                  "borderWidth": 1,
                  "borderColor": "#fff"
                },
                "dropShadow": {
                  "enabled": false,
                  "top": 1,
                  "left": 1,
                  "blur": 1,
                  "color": "#000",
                  "opacity": 0.45
                }
              },
              "markers": {
                "size": 0,
                "strokeColors": "#fff",
                "strokeWidth": 2,
                "strokeOpacity": 0.9,
                "strokeDashArray": 0,
                "fillOpacity": 1,
                "shape": "circle",
                "radius": 2,
                "offsetX": 0,
                "offsetY": 0,
                "hover": {}
              },
              "xaxis": {
                "type": "category",
                "offsetX": 0,
                "offsetY": 0,
                "position": "bottom",
                "labels": {
                  "show": true,
                  "rotate": -45,
                  "rotateAlways": false,
                  "trim": true,
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "fontSize": 12,
                    "fontWeight": 400
                  }
                },
                "axisBorder": {
                  "show": true,
                  "color": "#e0e0e0"
                },
                "axisTicks": {
                  "show": true,
                  "color": "#e0e0e0"
                },
                "title": {
                  "style": {
                    "fontSize": 12,
                    "fontWeight": 700
                  }
                },
                "crosshairs": {
                  "show": true,
                  "width": 1,
                  "position": "back",
                  "opacity": 0.9,
                  "stroke": {
                    "color": "#b6b6b6",
                    "width": 1
                  },
                  "fill": {
                    "type": "solid",
                    "color": "#B1B9C4",
                    "gradient": {
                      "colorFrom": "#D8E3F0",
                      "colorTo": "#BED1E6",
                      "opacityFrom": 0.4,
                      "opacityTo": 0.5
                    }
                  },
                  "dropShadow": {
                    "enabled": false,
                    "left": 0,
                    "top": 0,
                    "blur": 1,
                    "opacity": 0.4
                  }
                },
                "convertedCatToNumeric": true
              },
              "yaxis": [
                {
                  "show": true,
                  "showAlways": false,
                  "showForNullSeries": true,
                  "opposite": false,
                  "reversed": false,
                  "logarithmic": false,
                  "logBase": 10,
                  "tickAmount": 5,
                  "forceNiceScale": false,
                  "floating": false,
                  "labels": {
                    "show": true,
                    "minWidth": 0,
                    "maxWidth": 160,
                    "offsetX": 0,
                    "offsetY": 0,
                    "rotate": 0,
                    "padding": 20,
                    "style": {
                      "fontSize": 11,
                      "fontWeight": 400,
                      "cssClass": ""
                    }
                  },
                  "axisBorder": {
                    "show": false,
                    "color": "#e0e0e0",
                    "width": 1,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "axisTicks": {
                    "show": false,
                    "color": "#e0e0e0",
                    "width": 6,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "title": {
                    "rotate": -90,
                    "offsetY": 0,
                    "offsetX": 0,
                    "style": {
                      "fontSize": 11,
                      "fontWeight": 700,
                      "cssClass": ""
                    }
                  },
                  "tooltip": {
                    "enabled": false,
                    "offsetX": 0
                  },
                  "crosshairs": {
                    "show": true,
                    "position": "front",
                    "stroke": {
                      "color": "#b6b6b6",
                      "width": 1,
                      "dashArray": 0
                    }
                  }
                }
              ],
              "grid": {
                "show": true,
                "borderColor": "#e0e0e0",
                "strokeDashArray": 0,
                "position": "back",
                "xaxis": {
                  "lines": {
                    "show": false
                  }
                },
                "yaxis": {
                  "lines": {
                    "show": true
                  }
                },
                "row": {
                  "opacity": 0.5
                },
                "column": {
                  "opacity": 0.5
                },
                "padding": {
                  "top": 0,
                  "right": 25,
                  "bottom": 0,
                  "left": 15
                }
              },
              "stroke": {
                "show": true,
                "curve": "smooth",
                "lineCap": "butt",
                "width": 5,
                "dashArray": 0
              },
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
                },
                "pattern": {
                  "style": "squares",
                  "width": 6,
                  "height": 6,
                  "strokeWidth": 2
                }
              },
              "legend": {
                "show": true,
                "showForSingleSeries": false,
                "floating": false,
                "position": "bottom",
                "horizontalAlign": "center",
                "fontSize": 14,
                "fontWeight": 400,
                "offsetX": -20,
                "offsetY": 0,
                "labels": {
                  "useSeriesColors": false
                },
                "markers": {
                  "width": 12,
                  "height": 12,
                  "strokeWidth": 0,
                  "strokeColor": "#fff",
                  "radius": 12
                },
                "itemMargin": {
                  "horizontal": 5,
                  "vertical": 0
                },
                "onItemClick": {
                  "toggleDataSeries": true
                },
                "onItemHover": {
                  "highlightDataSeries": true
                }
              }
            },
            "w": {
              "config": {
                "annotations": {
                  "texts": [],
                  "images": [],
                  "shapes": [],
                  "position": "front"
                },
                "chart": {
                  "animations": {
                    "enabled": false,
                    "easing": "swing",
                    "speed": 800,
                    "animateGradually": {
                      "delay": 150,
                      "enabled": true
                    },
                    "dynamicAnimation": {
                      "enabled": true,
                      "speed": 350
                    }
                  },
                  "background": "",
                  "locales": [
                    {
                      "name": "en",
                      "options": {
                        "months": [
                          "January",
                          "February",
                          "March",
                          "April",
                          "May",
                          "June",
                          "July",
                          "August",
                          "September",
                          "October",
                          "November",
                          "December"
                        ],
                        "shortMonths": [
                          "Jan",
                          "Feb",
                          "Mar",
                          "Apr",
                          "May",
                          "Jun",
                          "Jul",
                          "Aug",
                          "Sep",
                          "Oct",
                          "Nov",
                          "Dec"
                        ],
                        "days": [
                          "Sunday",
                          "Monday",
                          "Tuesday",
                          "Wednesday",
                          "Thursday",
                          "Friday",
                          "Saturday"
                        ],
                        "shortDays": [
                          "Sun",
                          "Mon",
                          "Tue",
                          "Wed",
                          "Thu",
                          "Fri",
                          "Sat"
                        ],
                        "toolbar": {
                          "exportToSVG": "Download SVG",
                          "exportToPNG": "Download PNG",
                          "exportToCSV": "Download CSV",
                          "menu": "Menu",
                          "selection": "Selection",
                          "selectionZoom": "Selection Zoom",
                          "zoomIn": "Zoom In",
                          "zoomOut": "Zoom Out",
                          "pan": "Panning",
                          "reset": "Reset Zoom"
                        }
                      }
                    }
                  ],
                  "defaultLocale": "en",
                  "dropShadow": {
                    "enabled": false,
                    "top": 2,
                    "left": 2,
                    "blur": 4,
                    "color": "#000",
                    "opacity": 0.35
                  },
                  "events": {},
                  "foreColor": "#333",
                  "fontFamily": "Roboto",
                  "height": 250,
                  "parentHeightOffset": 15,
                  "redrawOnParentResize": true,
                  "redrawOnWindowResize": true,
                  "id": "Eba7r",
                  "offsetX": 0,
                  "offsetY": 0,
                  "selection": {
                    "enabled": false,
                    "type": "x",
                    "fill": {
                      "color": "#24292e",
                      "opacity": 0.1
                    },
                    "stroke": {
                      "width": 1,
                      "color": "#24292e",
                      "opacity": 0.4,
                      "dashArray": 3
                    },
                    "xaxis": {},
                    "yaxis": {}
                  },
                  "sparkline": {
                    "enabled": false
                  },
                  "brush": {
                    "enabled": false,
                    "autoScaleYaxis": true
                  },
                  "stacked": false,
                  "stackOnlyBar": true,
                  "stackType": "normal",
                  "toolbar": {
                    "show": false,
                    "offsetX": 0,
                    "offsetY": 0,
                    "tools": {
                      "download": true,
                      "selection": true,
                      "zoom": true,
                      "zoomin": true,
                      "zoomout": true,
                      "pan": true,
                      "reset": true,
                      "customIcons": []
                    },
                    "export": {
                      "csv": {
                        "columnDelimiter": ",",
                        "headerCategory": "category",
                        "headerValue": "value"
                      },
                      "png": {},
                      "svg": {}
                    },
                    "autoSelected": "zoom"
                  },
                  "type": "line",
                  "width": 500,
                  "zoom": {
                    "enabled": true,
                    "type": "x",
                    "autoScaleYaxis": false,
                    "zoomedArea": {
                      "fill": {
                        "color": "#90CAF9",
                        "opacity": 0.4
                      },
                      "stroke": {
                        "color": "#0D47A1",
                        "opacity": 0.4,
                        "width": 1
                      }
                    }
                  }
                },
                "plotOptions": {
                  "area": {
                    "fillTo": "origin"
                  },
                  "bar": {
                    "horizontal": false,
                    "columnWidth": "70%",
                    "barHeight": "70%",
                    "distributed": false,
                    "borderRadius": 10,
                    "borderRadiusApplication": "end",
                    "borderRadiusWhenStacked": "last",
                    "rangeBarOverlap": true,
                    "rangeBarGroupRows": false,
                    "hideZeroBarsWhenGrouped": false,
                    "isDumbbell": false,
                    "isFunnel": false,
                    "isFunnel3d": true,
                    "colors": {
                      "backgroundBarOpacity": 1,
                      "backgroundBarRadius": 0
                    },
                    "dataLabels": {
                      "position": "top",
                      "maxItems": 100,
                      "hideOverflowingLabels": true,
                      "orientation": "horizontal",
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
                  "candlestick": {
                    "colors": {
                      "upward": "#00B746",
                      "downward": "#EF403C"
                    },
                    "wick": {
                      "useFillColor": true
                    }
                  },
                  "boxPlot": {
                    "colors": {
                      "upper": "#00E396",
                      "lower": "#008FFB"
                    }
                  },
                  "heatmap": {
                    "radius": 2,
                    "enableShades": true,
                    "shadeIntensity": 0.5,
                    "reverseNegativeShade": false,
                    "distributed": false,
                    "useFillColorAsStroke": false,
                    "colorScale": {
                      "inverse": false,
                      "ranges": []
                    }
                  },
                  "treemap": {
                    "enableShades": true,
                    "shadeIntensity": 0.5,
                    "distributed": false,
                    "reverseNegativeShade": false,
                    "useFillColorAsStroke": false,
                    "borderRadius": 4,
                    "dataLabels": {
                      "format": "scale"
                    },
                    "colorScale": {
                      "inverse": false,
                      "ranges": []
                    }
                  },
                  "radialBar": {
                    "inverseOrder": false,
                    "startAngle": 0,
                    "endAngle": 360,
                    "offsetX": 0,
                    "offsetY": 0,
                    "hollow": {
                      "margin": 5,
                      "size": "50%",
                      "background": "#fff",
                      "imageWidth": 150,
                      "imageHeight": 150,
                      "imageOffsetX": 0,
                      "imageOffsetY": 0,
                      "imageClipped": true,
                      "position": "front",
                      "dropShadow": {
                        "enabled": false,
                        "top": 0,
                        "left": 0,
                        "blur": 3,
                        "color": "#000",
                        "opacity": 0.5
                      }
                    },
                    "track": {
                      "show": true,
                      "background": "#f2f2f2",
                      "strokeWidth": "97%",
                      "opacity": 1,
                      "margin": 5,
                      "dropShadow": {
                        "enabled": false,
                        "top": 0,
                        "left": 0,
                        "blur": 3,
                        "color": "#000",
                        "opacity": 0.5
                      }
                    },
                    "dataLabels": {
                      "show": true,
                      "name": {
                        "show": true,
                        "fontSize": 16,
                        "fontWeight": 600,
                        "offsetY": 0
                      },
                      "value": {
                        "show": true,
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetY": 16
                      },
                      "total": {
                        "show": false,
                        "label": "Total",
                        "fontSize": 16,
                        "fontWeight": 600
                      }
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
                    "customScale": 1,
                    "offsetX": 0,
                    "offsetY": 0,
                    "startAngle": 0,
                    "endAngle": 360,
                    "expandOnClick": true,
                    "dataLabels": {
                      "offset": 0,
                      "minAngleToShowLabel": 10
                    },
                    "donut": {
                      "size": "65%",
                      "labels": {
                        "show": false,
                        "name": {
                          "show": true,
                          "fontSize": 16,
                          "fontWeight": 600,
                          "offsetY": -10
                        },
                        "value": {
                          "show": true,
                          "fontSize": 20,
                          "fontWeight": 400,
                          "offsetY": 10
                        },
                        "total": {
                          "show": false,
                          "showAlways": false,
                          "label": "Total",
                          "fontSize": 16,
                          "fontWeight": 400
                        }
                      }
                    }
                  },
                  "polarArea": {
                    "rings": {
                      "strokeWidth": 1,
                      "strokeColor": "#e8e8e8"
                    },
                    "spokes": {
                      "strokeWidth": 1,
                      "connectorColors": "#e8e8e8"
                    }
                  },
                  "radar": {
                    "offsetX": 0,
                    "offsetY": 0,
                    "polygons": {
                      "strokeWidth": 1,
                      "strokeColors": "#e8e8e8",
                      "connectorColors": "#e8e8e8",
                      "fill": {}
                    }
                  }
                },
                "dataLabels": {
                  "enabled": false,
                  "textAnchor": "middle",
                  "distributed": false,
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "fontSize": 12,
                    "fontWeight": 700
                  },
                  "background": {
                    "enabled": true,
                    "foreColor": "#fff",
                    "borderRadius": 2,
                    "padding": 4,
                    "opacity": 0.9,
                    "borderWidth": 1,
                    "borderColor": "#fff",
                    "dropShadow": {
                      "enabled": false,
                      "top": 1,
                      "left": 1,
                      "blur": 1,
                      "color": "#000",
                      "opacity": 0.45
                    }
                  },
                  "dropShadow": {
                    "enabled": false,
                    "top": 1,
                    "left": 1,
                    "blur": 1,
                    "color": "#000",
                    "opacity": 0.45
                  }
                },
                "fill": {
                  "type": "solid",
                  "opacity": 0.85,
                  "gradient": {
                    "shade": "dark",
                    "type": "horizontal",
                    "shadeIntensity": 0.5,
                    "inverseColors": true,
                    "opacityFrom": 1,
                    "opacityTo": 1
                  },
                  "image": {
                    "src": []
                  },
                  "pattern": {
                    "style": "squares",
                    "width": 6,
                    "height": 6,
                    "strokeWidth": 2
                  }
                },
                "forecastDataPoints": {
                  "count": 0,
                  "fillOpacity": 0.5,
                  "dashArray": 4
                },
                "grid": {
                  "show": true,
                  "borderColor": "#e0e0e0",
                  "strokeDashArray": 0,
                  "position": "back",
                  "xaxis": {
                    "lines": {
                      "show": false
                    }
                  },
                  "yaxis": {
                    "lines": {
                      "show": true
                    }
                  },
                  "row": {
                    "opacity": 0.5
                  },
                  "column": {
                    "opacity": 0.5
                  },
                  "padding": {
                    "top": 0,
                    "right": 25,
                    "bottom": 0,
                    "left": 15
                  }
                },
                "labels": [],
                "legend": {
                  "show": true,
                  "showForSingleSeries": false,
                  "showForNullSeries": true,
                  "showForZeroSeries": true,
                  "floating": false,
                  "position": "bottom",
                  "horizontalAlign": "center",
                  "inverseOrder": false,
                  "fontSize": 14,
                  "fontWeight": 400,
                  "offsetX": -20,
                  "offsetY": 0,
                  "customLegendItems": [],
                  "labels": {
                    "useSeriesColors": false
                  },
                  "markers": {
                    "width": 12,
                    "height": 12,
                    "strokeWidth": 0,
                    "strokeColor": "#fff",
                    "radius": 12,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "itemMargin": {
                    "horizontal": 5,
                    "vertical": 0
                  },
                  "onItemClick": {
                    "toggleDataSeries": true
                  },
                  "onItemHover": {
                    "highlightDataSeries": true
                  }
                },
                "markers": {
                  "discrete": [],
                  "size": 0,
                  "strokeColors": "#fff",
                  "strokeWidth": 2,
                  "strokeOpacity": 0.9,
                  "strokeDashArray": 0,
                  "fillOpacity": 1,
                  "shape": "circle",
                  "width": 8,
                  "height": 8,
                  "radius": 2,
                  "offsetX": 0,
                  "offsetY": 0,
                  "showNullDataPoints": true,
                  "hover": {
                    "sizeOffset": 6
                  }
                },
                "noData": {
                  "align": "center",
                  "verticalAlign": "middle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "fontSize": "14px"
                  }
                },
                "responsive": [],
                "series": [
                  {
                    "name": "series-2",
                    "zIndex": 0
                  }
                ],
                "states": {
                  "normal": {
                    "filter": {
                      "type": "none",
                      "value": 0
                    }
                  },
                  "hover": {
                    "filter": {
                      "type": "lighten",
                      "value": 0.1
                    }
                  },
                  "active": {
                    "allowMultipleDataPointsSelection": false,
                    "filter": {
                      "type": "darken",
                      "value": 0.5
                    }
                  }
                },
                "title": {
                  "align": "left",
                  "margin": 5,
                  "offsetX": 0,
                  "offsetY": 0,
                  "floating": false,
                  "style": {
                    "fontSize": "14px",
                    "fontWeight": 900
                  }
                },
                "subtitle": {
                  "align": "left",
                  "margin": 5,
                  "offsetX": 0,
                  "offsetY": 30,
                  "floating": false,
                  "style": {
                    "fontSize": "12px",
                    "fontWeight": 400
                  }
                },
                "stroke": {
                  "show": true,
                  "curve": "smooth",
                  "lineCap": "butt",
                  "width": 5,
                  "dashArray": 0,
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
                  "enabled": true,
                  "shared": true,
                  "hideEmptySeries": false,
                  "followCursor": false,
                  "intersect": false,
                  "inverseOrder": false,
                  "fillSeriesColor": false,
                  "theme": "light",
                  "cssClass": "",
                  "style": {
                    "fontSize": "12px"
                  },
                  "onDatasetHover": {
                    "highlightDataSeries": false
                  },
                  "x": {
                    "show": true,
                    "format": "dd MMM"
                  },
                  "y": {
                    "title": {}
                  },
                  "z": {
                    "title": "Size: "
                  },
                  "marker": {
                    "show": true
                  },
                  "items": {
                    "display": "flex"
                  },
                  "fixed": {
                    "enabled": false,
                    "position": "topRight",
                    "offsetX": 0,
                    "offsetY": 0
                  }
                },
                "xaxis": {
                  "type": "numeric",
                  "categories": [],
                  "convertedCatToNumeric": true,
                  "offsetX": 0,
                  "offsetY": 0,
                  "labels": {
                    "show": true,
                    "rotate": -45,
                    "rotateAlways": false,
                    "hideOverlappingLabels": true,
                    "trim": true,
                    "maxHeight": 120,
                    "showDuplicates": true,
                    "style": {
                      "fontSize": 12,
                      "fontWeight": 400,
                      "cssClass": ""
                    },
                    "offsetX": 0,
                    "offsetY": 0,
                    "datetimeUTC": true,
                    "datetimeFormatter": {
                      "year": "yyyy",
                      "month": "MMM 'yy",
                      "day": "dd MMM",
                      "hour": "HH:mm",
                      "minute": "HH:mm:ss",
                      "second": "HH:mm:ss"
                    }
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
                  "axisBorder": {
                    "show": true,
                    "color": "#e0e0e0",
                    "width": "100%",
                    "height": 1,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "axisTicks": {
                    "show": true,
                    "color": "#e0e0e0",
                    "height": 6,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "tickAmount": "dataPoints",
                  "tickPlacement": "on",
                  "floating": false,
                  "position": "bottom",
                  "title": {
                    "offsetX": 0,
                    "offsetY": 0,
                    "style": {
                      "fontSize": 12,
                      "fontWeight": 700,
                      "cssClass": ""
                    }
                  },
                  "crosshairs": {
                    "show": true,
                    "width": 1,
                    "position": "back",
                    "opacity": 0.9,
                    "stroke": {
                      "color": "#b6b6b6",
                      "width": 1,
                      "dashArray": 3
                    },
                    "fill": {
                      "type": "solid",
                      "color": "#B1B9C4",
                      "gradient": {
                        "colorFrom": "#D8E3F0",
                        "colorTo": "#BED1E6",
                        "stops": [
                          0,
                          100
                        ],
                        "opacityFrom": 0.4,
                        "opacityTo": 0.5
                      }
                    },
                    "dropShadow": {
                      "enabled": false,
                      "left": 0,
                      "top": 0,
                      "blur": 1,
                      "opacity": 0.4
                    }
                  },
                  "tooltip": {
                    "enabled": true,
                    "offsetY": 0,
                    "style": {
                      "fontSize": "12px"
                    }
                  }
                },
                "theme": {
                  "mode": "light",
                  "palette": "palette4",
                  "monochrome": {
                    "enabled": false,
                    "color": "#008FFB",
                    "shadeTo": "light",
                    "shadeIntensity": 0.65
                  }
                }
              },
              "globals": {
                "chartID": "Eba7r",
                "cuid": "6jmstetf",
                "events": {
                  "beforeMount": [],
                  "mounted": [],
                  "updated": [],
                  "clicked": [],
                  "selection": [],
                  "dataPointSelection": [],
                  "zoomed": [],
                  "scrolled": []
                },
                "colors": [
                  "#4ecdc4",
                  "#c7f464",
                  "#81D4FA",
                  "#fd6a6a",
                  "#546E7A"
                ],
                "clientX": 932,
                "clientY": 376,
                "fill": {
                  "colors": [
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A"
                  ]
                },
                "stroke": {},
                "dataLabels": {
                  "style": {}
                },
                "radarPolygons": {
                  "fill": {
                    "colors": [
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none"
                    ]
                  }
                },
                "markers": {
                  "size": [
                    0,
                    0
                  ],
                  "largestSize": 0
                },
                "animationEnded": true,
                "isDirty": true,
                "isExecCalled": false,
                "initialConfig": {
                  "labels": []
                },
                "initialSeries": [
                  {
                    "name": "series-2",
                    "data": [
                      {
                        "x": "1/11",
                        "y": null
                      },
                      {
                        "x": "2/11",
                        "y": null
                      },
                      {
                        "x": "3/11",
                        "y": null
                      },
                      {
                        "x": "4/11",
                        "y": null
                      },
                      {
                        "x": "5/11",
                        "y": null
                      },
                      {
                        "x": "6/11",
                        "y": null
                      },
                      {
                        "x": "7/11",
                        "y": null
                      },
                      {
                        "x": "8/11",
                        "y": null
                      },
                      {
                        "x": "9/11",
                        "y": null
                      },
                      {
                        "x": "10/11",
                        "y": null
                      },
                      {
                        "x": "11/11",
                        "y": null
                      },
                      {
                        "x": "12/11",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": null
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      },
                      {
                        "x": "",
                        "y": 10
                      }
                    ],
                    "zIndex": 0
                  }
                ],
                "lastXAxis": [],
                "lastYAxis": [],
                "columnSeries": null,
                "labels": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12,
                  13
                ],
                "timescaleLabels": [],
                "noLabelsProvided": true,
                "allSeriesCollapsed": false,
                "collapsedSeries": [],
                "collapsedSeriesIndices": [],
                "ancillaryCollapsedSeries": [],
                "ancillaryCollapsedSeriesIndices": [],
                "risingSeries": [],
                "dataFormatXNumeric": false,
                "capturedSeriesIndex": -1,
                "capturedDataPointIndex": -1,
                "selectedDataPoints": [],
                "goldenPadding": 35,
                "invalidLogScale": false,
                "ignoreYAxisIndexes": [],
                "yAxisSameScaleIndices": [],
                "maxValsInArrayIndex": 0,
                "radialSize": 91.00000000000001,
                "zoomEnabled": true,
                "panEnabled": false,
                "selectionEnabled": false,
                "yaxis": null,
                "mousedown": false,
                "lastClientPosition": {},
                "yValueDecimal": 0,
                "total": 0,
                "SVGNS": "http://www.w3.org/2000/svg",
                "svgWidth": 500,
                "svgHeight": 250,
                "noData": false,
                "locale": {
                  "toolbar": {
                    "exportToSVG": "Download SVG",
                    "exportToPNG": "Download PNG",
                    "exportToCSV": "Download CSV",
                    "menu": "Menu",
                    "selection": "Selection",
                    "selectionZoom": "Selection Zoom",
                    "zoomIn": "Zoom In",
                    "zoomOut": "Zoom Out",
                    "pan": "Panning",
                    "reset": "Reset Zoom"
                  }
                },
                "dom": {
                  "baseEl": {
                    "_prevClass": "Eba7r"
                  },
                  "elWrap": {},
                  "Paper": {
                    "_stroke": "#000000",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "svg",
                    "_defs": {
                      "_stroke": "#000000",
                      "_event": null,
                      "dom": {},
                      "node": {},
                      "type": "defs"
                    }
                  },
                  "elLegendForeign": {
                    "instance": {
                      "_stroke": "#000000",
                      "_event": null,
                      "dom": {},
                      "type": "foreignObject"
                    }
                  },
                  "elLegendWrap": {},
                  "elGraphical": {
                    "_stroke": "#000000",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "g"
                  },
                  "elGridRectMask": {},
                  "elGridRectMarkerMask": {},
                  "elForecastMask": {},
                  "elNonForecastMask": {},
                  "elGridRect": {
                    "_stroke": "none",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "rect"
                  },
                  "elGridRectMarker": {
                    "_stroke": "none",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "rect"
                  }
                },
                "memory": {
                  "methodsToExec": []
                },
                "shouldAnimate": true,
                "skipLastTimelinelabel": false,
                "skipFirstTimelinelabel": false,
                "delayedElements": [
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  }
                ],
                "axisCharts": true,
                "isDataXYZ": false,
                "resized": true,
                "resizeTimer": null,
                "comboCharts": false,
                "dataChanged": false,
                "previousPaths": [
                  {
                    "type": "line",
                    "paths": [],
                    "realIndex": "0"
                  }
                ],
                "allSeriesHasEqualX": true,
                "pointsArray": [
                  [
                    [
                      0,
                      null
                    ],
                    [
                      37.083333333333336,
                      null
                    ],
                    [
                      74.16666666666667,
                      null
                    ],
                    [
                      111.25,
                      null
                    ],
                    [
                      148.33333333333334,
                      null
                    ],
                    [
                      185.41666666666666,
                      null
                    ],
                    [
                      222.5,
                      null
                    ],
                    [
                      259.5833333333333,
                      null
                    ],
                    [
                      296.6666666666667,
                      null
                    ],
                    [
                      333.75,
                      null
                    ],
                    [
                      370.8333333333333,
                      null
                    ],
                    [
                      407.91666666666663,
                      null
                    ],
                    [
                      445,
                      null
                    ]
                  ]
                ],
                "dataLabelsRects": [],
                "lastDrawnDataLabelsIndexes": [],
                "hasNullValues": true,
                "zoomed": false,
                "gridWidth": 445,
                "gridHeight": 205,
                "rotateXLabels": false,
                "defaultLabels": false,
                "yLabelFormatters": [
                  null
                ],
                "LINE_HEIGHT_RATIO": 1.618,
                "xAxisLabelsHeight": 10,
                "xAxisGroupLabelsHeight": 10,
                "xAxisLabelsWidth": 0,
                "yAxisLabelsWidth": 0,
                "scaleX": 1,
                "scaleY": 1,
                "translateX": 30,
                "translateY": 30,
                "translateYAxisX": [
                  -3
                ],
                "yAxisWidths": [],
                "translateXAxisY": -4,
                "translateXAxisX": 0,
                "tooltip": {
                  "tooltipUtil": {},
                  "tooltipLabels": {
                    "tooltipUtil": {}
                  },
                  "tooltipPosition": {},
                  "marker": {
                    "tooltipPosition": {}
                  },
                  "intersect": {
                    "isVerticalGroupedRangeBar": false
                  },
                  "axesTooltip": {},
                  "showOnIntersect": false,
                  "showTooltipTitle": true,
                  "fixedTooltip": false,
                  "xaxisTooltip": {},
                  "yaxisTTEls": null,
                  "isBarShared": true,
                  "lastHoverTime": 1705905051183,
                  "xyRatios": {
                    "yRatio": [
                      0.05853658536585366
                    ],
                    "invertedYRatio": 0.02696629213483146,
                    "zRatio": null,
                    "xRatio": 0.02696629213483146,
                    "invertedXRatio": 0.05853658536585366,
                    "baseLineInvertedY": 0.1,
                    "baseLineY": [
                      0
                    ],
                    "baseLineX": 0
                  },
                  "isXAxisTooltipEnabled": true,
                  "yaxisTooltips": [
                    false
                  ],
                  "allTooltipSeriesGroups": [],
                  "xaxisOffY": 206,
                  "xaxisTooltipText": {},
                  "yaxisOffX": 1,
                  "yaxisTooltip": {},
                  "yaxisTooltipText": [
                    {}
                  ],
                  "xcrosshairsWidth": 1,
                  "ycrosshairs": {
                    "instance": {
                      "_stroke": "#b6b6b6",
                      "_event": null,
                      "dom": {},
                      "type": "line"
                    }
                  },
                  "ycrosshairsHidden": {
                    "instance": {
                      "_stroke": "#b6b6b6",
                      "_event": null,
                      "dom": {},
                      "type": "line"
                    }
                  },
                  "xAxisTicksPositions": [
                    37.083333333333336,
                    74.16666666666667,
                    111.25,
                    148.33333333333334,
                    185.41666666666669,
                    222.50000000000003,
                    259.58333333333337,
                    296.6666666666667,
                    333.75,
                    370.8333333333333,
                    407.91666666666663,
                    444.99999999999994,
                    482.08333333333326
                  ],
                  "dataPointsDividedHeight": 15.76923076923077,
                  "dataPointsDividedWidth": 34.23076923076923,
                  "tooltipTitle": {},
                  "legendLabels": {},
                  "ttItems": [
                    {}
                  ],
                  "seriesBound": {
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "height": 0,
                    "top": 0,
                    "right": 0,
                    "bottom": 0,
                    "left": 0
                  }
                },
                "series": [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10,
                    10
                  ]
                ],
                "seriesCandleO": [],
                "seriesCandleH": [],
                "seriesCandleM": [],
                "seriesCandleL": [],
                "seriesCandleC": [],
                "seriesRangeStart": [],
                "seriesRangeEnd": [],
                "seriesRange": [],
                "seriesPercent": [
                  [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100
                  ]
                ],
                "seriesGoals": [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                  ]
                ],
                "seriesX": [
                  [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13
                  ]
                ],
                "seriesZ": [
                  []
                ],
                "seriesNames": [
                  "series-2"
                ],
                "seriesTotals": [
                  330
                ],
                "seriesLog": [
                  null
                ],
                "seriesColors": [
                  null
                ],
                "stackedSeriesTotals": [
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  0,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10,
                  10
                ],
                "seriesXvalues": [
                  [
                    0,
                    37.083333333333336,
                    74.16666666666667,
                    111.25,
                    148.33333333333334,
                    185.41666666666666,
                    222.5,
                    259.5833333333333,
                    296.6666666666667,
                    333.75,
                    370.8333333333333,
                    407.91666666666663,
                    445
                  ]
                ],
                "seriesYvalues": [
                  [
                    205,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                  ]
                ],
                "hasXaxisGroups": false,
                "groups": [],
                "seriesGroups": [],
                "categoryLabels": [
                  "1/11",
                  "2/11",
                  "3/11",
                  "4/11",
                  "5/11",
                  "6/11",
                  "7/11",
                  "8/11",
                  "9/11",
                  "10/11",
                  "11/11",
                  "12/11",
                  ""
                ],
                "selectionResizeTimer": null,
                "isXNumeric": true,
                "isMultiLineX": false,
                "isMultipleYAxis": false,
                "maxY": 12,
                "minY": 0,
                "minYArr": [
                  0
                ],
                "maxYArr": [
                  12
                ],
                "maxX": 13,
                "minX": 1,
                "initialMaxX": 13,
                "initialMinX": 1,
                "maxDate": 0,
                "minDate": 1.7976931348623157e+308,
                "minZ": 1.7976931348623157e+308,
                "maxZ": -1.7976931348623157e+308,
                "minXDiff": 1,
                "yAxisScale": [
                  {
                    "result": [
                      0,
                      3,
                      6,
                      9,
                      12
                    ],
                    "niceMin": 0,
                    "niceMax": 12
                  }
                ],
                "xAxisScale": {
                  "result": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12,
                    13
                  ],
                  "niceMin": 1,
                  "niceMax": 13
                },
                "xAxisTicksPositions": [],
                "yLabelsCoords": [
                  {
                    "width": 10,
                    "index": 0
                  }
                ],
                "yTitleCoords": [
                  {
                    "width": 0,
                    "index": 0
                  }
                ],
                "barPadForNumericAxis": 0,
                "padHorizontal": 0,
                "xRange": 12,
                "yRange": [
                  12
                ],
                "zRange": null,
                "dataPoints": 13,
                "xTickAmount": 11,
                "xyCharts": true,
                "isBarHorizontal": false,
                "chartClass": ".apexchartsEba7r",
                "comboBarCount": 0,
                "isRangeBar": false,
                "stackedSeriesTotalsByGroups": [],
                "xAxisHeight": 10,
                "yLogRatio": [
                  0.05853658536585366
                ],
                "logYRange": [
                  null
                ]
              }
            },
            "publicMethods": [
              "updateOptions",
              "updateSeries",
              "appendData",
              "appendSeries",
              "isSeriesHidden",
              "toggleSeries",
              "showSeries",
              "hideSeries",
              "setLocale",
              "resetSeries",
              "zoomX",
              "toggleDataPointSelection",
              "dataURI",
              "exportToCSV",
              "addXaxisAnnotation",
              "addYaxisAnnotation",
              "addPointAnnotation",
              "clearAnnotations",
              "removeAnnotation",
              "paper",
              "destroy"
            ],
            "eventList": [
              "click",
              "mousedown",
              "mousemove",
              "mouseleave",
              "touchstart",
              "touchmove",
              "touchleave",
              "mouseup",
              "touchend"
            ],
            "animations": {},
            "axes": {},
            "core": {},
            "config": {
              "opts": {}
            },
            "data": {
              "twoDSeriesX": [
                "1/11",
                "2/11",
                "3/11",
                "4/11",
                "5/11",
                "6/11",
                "7/11",
                "8/11",
                "9/11",
                "10/11",
                "11/11",
                "12/11",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
              ],
              "coreUtils": {},
              "fallbackToCategory": true,
              "activeSeriesIndex": 0
            },
            "grid": {
              "xaxisLabels": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12,
                13
              ],
              "axesUtils": {},
              "isRangeBar": 0,
              "elg": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elgridLinesH": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elgridLinesV": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elGridBorders": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              }
            },
            "graphics": {},
            "coreUtils": {},
            "crosshairs": {},
            "events": {},
            "exports": {},
            "localization": {},
            "options": {
              "yAxis": {
                "show": true,
                "showAlways": false,
                "showForNullSeries": true,
                "opposite": false,
                "reversed": false,
                "logarithmic": false,
                "logBase": 10,
                "forceNiceScale": false,
                "floating": false,
                "labels": {
                  "show": true,
                  "minWidth": 0,
                  "maxWidth": 160,
                  "offsetX": 0,
                  "offsetY": 0,
                  "rotate": 0,
                  "padding": 20,
                  "style": {
                    "colors": [],
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": ""
                  }
                },
                "axisBorder": {
                  "show": false,
                  "color": "#e0e0e0",
                  "width": 1,
                  "offsetX": 0,
                  "offsetY": 0
                },
                "axisTicks": {
                  "show": false,
                  "color": "#e0e0e0",
                  "width": 6,
                  "offsetX": 0,
                  "offsetY": 0
                },
                "title": {
                  "rotate": -90,
                  "offsetY": 0,
                  "offsetX": 0,
                  "style": {
                    "fontSize": "11px",
                    "fontWeight": 900,
                    "cssClass": ""
                  }
                },
                "tooltip": {
                  "enabled": false,
                  "offsetX": 0
                },
                "crosshairs": {
                  "show": true,
                  "position": "front",
                  "stroke": {
                    "color": "#b6b6b6",
                    "width": 1,
                    "dashArray": 0
                  }
                }
              },
              "pointAnnotation": {
                "x": 0,
                "y": null,
                "yAxisIndex": 0,
                "marker": {
                  "size": 4,
                  "fillColor": "#fff",
                  "strokeWidth": 2,
                  "strokeColor": "#333",
                  "shape": "circle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "radius": 2,
                  "cssClass": ""
                },
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "middle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                },
                "customSVG": {
                  "offsetX": 0,
                  "offsetY": 0
                },
                "image": {
                  "width": 20,
                  "height": 20,
                  "offsetX": 0,
                  "offsetY": 0
                }
              },
              "yAxisAnnotation": {
                "y": 0,
                "y2": null,
                "strokeDashArray": 1,
                "fillColor": "#c2c2c2",
                "borderColor": "#c2c2c2",
                "borderWidth": 1,
                "opacity": 0.3,
                "offsetX": 0,
                "offsetY": 0,
                "width": "100%",
                "yAxisIndex": 0,
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "end",
                  "position": "right",
                  "offsetX": 0,
                  "offsetY": -3,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                }
              },
              "xAxisAnnotation": {
                "x": 0,
                "x2": null,
                "strokeDashArray": 1,
                "fillColor": "#c2c2c2",
                "borderColor": "#c2c2c2",
                "borderWidth": 1,
                "opacity": 0.3,
                "offsetX": 0,
                "offsetY": 0,
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "middle",
                  "orientation": "vertical",
                  "position": "top",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                }
              },
              "text": {
                "x": 0,
                "y": 0,
                "text": "",
                "textAnchor": "start",
                "fontSize": "13px",
                "fontWeight": 400,
                "appendTo": ".apexcharts-annotations",
                "backgroundColor": "transparent",
                "borderColor": "#c2c2c2",
                "borderRadius": 0,
                "borderWidth": 0,
                "paddingLeft": 4,
                "paddingRight": 4,
                "paddingTop": 2,
                "paddingBottom": 2
              }
            },
            "responsive": {},
            "series": {
              "legendInactiveClass": "legend-mouseover-inactive"
            },
            "theme": {
              "isColorFn": false,
              "isHeatmapDistributed": false,
              "isBarDistributed": false
            },
            "formatters": {
              "tooltipKeyFormat": "dd MMM"
            },
            "titleSubtitle": {},
            "legend": {
              "isBarsDistributed": false,
              "legendHelpers": {}
            },
            "toolbar": {
              "selectedClass": "apexcharts-selected",
              "minX": 1,
              "maxX": 13
            },
            "tooltip": {
              "tooltipUtil": {},
              "tooltipLabels": {
                "tooltipUtil": {}
              },
              "tooltipPosition": {},
              "marker": {
                "tooltipPosition": {}
              },
              "intersect": {
                "isVerticalGroupedRangeBar": false
              },
              "axesTooltip": {},
              "showOnIntersect": false,
              "showTooltipTitle": true,
              "fixedTooltip": false,
              "xaxisTooltip": null,
              "yaxisTTEls": null,
              "isBarShared": true,
              "lastHoverTime": 1705905051183
            },
            "dimensions": {
              "lgRect": {
                "x": 0,
                "y": 0,
                "height": 0,
                "width": 0
              },
              "yAxisWidth": 15,
              "yAxisWidthLeft": 15,
              "yAxisWidthRight": 0,
              "xAxisHeight": 10,
              "isSparkline": false,
              "dimHelpers": {},
              "dimYAxis": {},
              "dimXAxis": {},
              "dimGrid": {},
              "lgWidthForSideLegends": 0,
              "xPadRight": 0,
              "xPadLeft": 0,
              "xAxisWidth": 0
            },
            "updateHelpers": {},
            "zoomPanSelection": {
              "selectedClass": "apexcharts-selected",
              "minX": 1,
              "maxX": 13,
              "dragged": false,
              "graphics": {},
              "eventList": [
                "mousedown",
                "mouseleave",
                "mousemove",
                "touchstart",
                "touchmove",
                "mouseup",
                "touchend"
              ],
              "clientX": 0,
              "clientY": 0,
              "startX": 0,
              "endX": 0,
              "dragX": 0,
              "startY": 0,
              "endY": 0,
              "dragY": 0,
              "moveDirection": "none",
              "zoomRect": {
                "_stroke": "none",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "rect"
              },
              "selectionRect": {
                "_stroke": "none",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "rect",
                "_memory": {
                  "_draggable": {
                    "constraint": {
                      "minX": 0,
                      "minY": 0,
                      "maxX": 445,
                      "maxY": 205
                    },
                    "value": true
                  }
                }
              }
            },
            "pie": {
              "chartType": "line",
              "initialAnim": false,
              "dynamicAnim": false,
              "animBeginArr": [
                0
              ],
              "animDur": 0,
              "defaultSize": 205,
              "centerY": 102.5,
              "centerX": 222.5,
              "fullAngle": 360,
              "initialAngle": 0,
              "donutSize": 59.150000000000006,
              "maxY": 0,
              "sliceLabels": [],
              "sliceSizes": [],
              "prevSectorAngleArr": []
            },
            "rangeBar": {
              "isHorizontal": false,
              "strokeWidth": 5,
              "isNullValue": false,
              "isRangeBar": 0,
              "isVerticalGroupedRangeBar": 0,
              "isFunnel": false,
              "xRatio": 0.02696629213483146,
              "invertedXRatio": 0.05853658536585366,
              "invertedYRatio": 0.02696629213483146,
              "baseLineInvertedY": 0.1,
              "yaxisIndex": 0,
              "seriesLen": 0,
              "pathArr": [],
              "lastActiveBarSerieIndex": 0,
              "stackedSeriesTotals": [
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                0,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10,
                10
              ],
              "barHelpers": {}
            },
            "annotations": {
              "graphics": {},
              "helpers": {},
              "xAxisAnnotations": {
                "helpers": {}
              },
              "yAxisAnnotations": {
                "helpers": {}
              },
              "pointsAnnotations": {
                "helpers": {}
              },
              "xDivision": 34.23076923076923
            }
          }
        },
        {
          "id": "yf4jM",
          "chart": {
            "opts": {
              "series": [
                {
                  "name": "Likes",
                  "data": [
                    {
                      "x": "1/11",
                      "y": 4
                    },
                    {
                      "x": "2/11",
                      "y": 3
                    },
                    {
                      "x": "3/11",
                      "y": 10
                    },
                    {
                      "x": "4/11",
                      "y": 9
                    },
                    {
                      "x": "5/11",
                      "y": 29
                    },
                    {
                      "x": "6/11",
                      "y": 19
                    },
                    {
                      "x": "7/11",
                      "y": 22
                    },
                    {
                      "x": "8/11",
                      "y": 9
                    },
                    {
                      "x": "9/11",
                      "y": 12
                    },
                    {
                      "x": "10/11",
                      "y": 7
                    },
                    {
                      "x": "11/11",
                      "y": 19
                    },
                    {
                      "x": "12/11",
                      "y": 5
                    }
                  ]
                }
              ],
              "annotations": {
                "position": "front",
                "yaxis": [],
                "xaxis": [],
                "points": []
              },
              "chart": {
                "type": "line",
                "background": "",
                "foreColor": "#333",
                "offsetX": 0,
                "offsetY": 0,
                "toolbar": {
                  "show": false
                },
                "animations": {
                  "enabled": false
                },
                "dropShadow": {
                  "enabled": false,
                  "top": 2,
                  "left": 2,
                  "blur": 4,
                  "color": "#000",
                  "opacity": 0.35
                },
                "fontFamily": "Roboto",
                "height": 250,
                "width": 500,
                "id": "yf4jM"
              },
              "plotOptions": {
                "bar": {
                  "horizontal": false,
                  "columnWidth": "70%",
                  "barHeight": "70%",
                  "distributed": false,
                  "borderRadius": 10,
                  "borderRadiusApplication": "end",
                  "borderRadiusWhenStacked": "last",
                  "colors": {
                    "ranges": [],
                    "backgroundBarColors": [],
                    "backgroundBarOpacity": 1
                  },
                  "dataLabels": {
                    "position": "top"
                  }
                },
                "heatmap": {
                  "radius": 2,
                  "enableShades": true,
                  "shadeIntensity": 0.5
                },
                "radialBar": {
                  "startAngle": 0,
                  "endAngle": 360,
                  "offsetX": 0,
                  "offsetY": 0,
                  "hollow": {
                    "margin": 5,
                    "size": "50%",
                    "background": "#fff",
                    "position": "front",
                    "dropShadow": {
                      "enabled": false,
                      "top": 0,
                      "left": 0,
                      "blur": 3,
                      "color": "#000",
                      "opacity": 0.5
                    }
                  },
                  "track": {
                    "show": true,
                    "background": "#f2f2f2",
                    "strokeWidth": "97%",
                    "opacity": 1,
                    "margin": 5,
                    "dropShadow": {
                      "enabled": false,
                      "top": 0,
                      "left": 0,
                      "blur": 3,
                      "color": "#000",
                      "opacity": 0.5
                    }
                  },
                  "dataLabels": {
                    "show": true,
                    "name": {
                      "show": true,
                      "fontSize": 16,
                      "offsetY": 0
                    },
                    "value": {
                      "show": true,
                      "fontSize": 14,
                      "offsetY": 16
                    },
                    "total": {
                      "show": false,
                      "label": "Total",
                      "fontSize": 16
                    }
                  }
                },
                "pie": {
                  "startAngle": 0,
                  "endAngle": 360,
                  "offsetX": 0,
                  "offsetY": 0,
                  "dataLabels": {
                    "offset": 0
                  },
                  "donut": {
                    "size": "65%",
                    "labels": {
                      "show": false,
                      "name": {
                        "show": true,
                        "fontSize": 16,
                        "offsetY": -10
                      },
                      "value": {
                        "show": true,
                        "fontSize": 20,
                        "offsetY": 10
                      },
                      "total": {
                        "show": false,
                        "showAlways": false,
                        "label": "Total",
                        "fontSize": 16
                      }
                    }
                  }
                },
                "radar": {
                  "offsetX": 0,
                  "offsetY": 0,
                  "polygons": {
                    "strokeColors": "#e8e8e8",
                    "connectorColors": "#e8e8e8",
                    "fill": {}
                  }
                }
              },
              "theme": {
                "mode": "light",
                "palette": "palette4"
              },
              "dataLabels": {
                "enabled": false,
                "textAnchor": "middle",
                "offsetX": 0,
                "offsetY": 0,
                "style": {
                  "fontSize": 12,
                  "fontWeight": 700
                },
                "background": {
                  "enabled": true,
                  "foreColor": "#fff",
                  "borderRadius": 2,
                  "padding": 4,
                  "opacity": 0.9,
                  "borderWidth": 1,
                  "borderColor": "#fff"
                },
                "dropShadow": {
                  "enabled": false,
                  "top": 1,
                  "left": 1,
                  "blur": 1,
                  "color": "#000",
                  "opacity": 0.45
                }
              },
              "markers": {
                "size": 0,
                "strokeColors": "#fff",
                "strokeWidth": 2,
                "strokeOpacity": 0.9,
                "strokeDashArray": 0,
                "fillOpacity": 1,
                "shape": "circle",
                "radius": 2,
                "offsetX": 0,
                "offsetY": 0,
                "hover": {}
              },
              "yaxis": [
                {
                  "show": true,
                  "showAlways": false,
                  "showForNullSeries": true,
                  "opposite": false,
                  "reversed": false,
                  "logarithmic": false,
                  "logBase": 10,
                  "forceNiceScale": false,
                  "floating": false,
                  "labels": {
                    "show": true,
                    "minWidth": 0,
                    "maxWidth": 160,
                    "offsetX": 0,
                    "offsetY": 0,
                    "rotate": 0,
                    "padding": 20,
                    "style": {
                      "fontSize": 11,
                      "fontWeight": 400,
                      "cssClass": ""
                    }
                  },
                  "axisBorder": {
                    "show": false,
                    "color": "#e0e0e0",
                    "width": 1,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "axisTicks": {
                    "show": false,
                    "color": "#e0e0e0",
                    "width": 6,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "title": {
                    "rotate": -90,
                    "offsetY": 0,
                    "offsetX": 0,
                    "style": {
                      "fontSize": 11,
                      "fontWeight": 700,
                      "cssClass": ""
                    }
                  },
                  "tooltip": {
                    "enabled": false,
                    "offsetX": 0
                  },
                  "crosshairs": {
                    "show": true,
                    "position": "front",
                    "stroke": {
                      "color": "#b6b6b6",
                      "width": 1,
                      "dashArray": 0
                    }
                  }
                }
              ],
              "stroke": {
                "show": true,
                "curve": "smooth",
                "lineCap": "butt",
                "width": 5,
                "dashArray": 0
              },
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
                },
                "pattern": {
                  "style": "squares",
                  "width": 6,
                  "height": 6,
                  "strokeWidth": 2
                }
              },
              "legend": {
                "show": true,
                "showForSingleSeries": false,
                "floating": false,
                "position": "bottom",
                "horizontalAlign": "center",
                "fontSize": 14,
                "fontWeight": 400,
                "offsetX": -20,
                "offsetY": 0,
                "labels": {
                  "useSeriesColors": false
                },
                "markers": {
                  "width": 12,
                  "height": 12,
                  "strokeWidth": 0,
                  "strokeColor": "#fff",
                  "radius": 12
                },
                "itemMargin": {
                  "horizontal": 5,
                  "vertical": 0
                },
                "onItemClick": {
                  "toggleDataSeries": true
                },
                "onItemHover": {
                  "highlightDataSeries": true
                }
              }
            },
            "w": {
              "config": {
                "annotations": {
                  "texts": [],
                  "images": [],
                  "shapes": [],
                  "position": "front"
                },
                "chart": {
                  "animations": {
                    "enabled": false,
                    "easing": "swing",
                    "speed": 800,
                    "animateGradually": {
                      "delay": 150,
                      "enabled": true
                    },
                    "dynamicAnimation": {
                      "enabled": true,
                      "speed": 350
                    }
                  },
                  "background": "",
                  "locales": [
                    null
                  ],
                  "defaultLocale": "en",
                  "dropShadow": {
                    "enabled": false,
                    "top": 2,
                    "left": 2,
                    "blur": 4,
                    "color": "#000",
                    "opacity": 0.35
                  },
                  "events": {},
                  "foreColor": "#333",
                  "fontFamily": "Roboto",
                  "height": 250,
                  "parentHeightOffset": 15,
                  "redrawOnParentResize": true,
                  "redrawOnWindowResize": true,
                  "id": "yf4jM",
                  "offsetX": 0,
                  "offsetY": 0,
                  "selection": {
                    "enabled": false,
                    "type": "x",
                    "fill": {
                      "color": "#24292e",
                      "opacity": 0.1
                    },
                    "stroke": {
                      "width": 1,
                      "color": "#24292e",
                      "opacity": 0.4,
                      "dashArray": 3
                    },
                    "xaxis": {},
                    "yaxis": {}
                  },
                  "sparkline": {
                    "enabled": false
                  },
                  "brush": {
                    "enabled": false,
                    "autoScaleYaxis": true
                  },
                  "stacked": false,
                  "stackOnlyBar": true,
                  "stackType": "normal",
                  "toolbar": {
                    "show": false,
                    "offsetX": 0,
                    "offsetY": 0,
                    "tools": {
                      "download": true,
                      "selection": true,
                      "zoom": true,
                      "zoomin": true,
                      "zoomout": true,
                      "pan": true,
                      "reset": true,
                      "customIcons": []
                    },
                    "export": {
                      "csv": {
                        "columnDelimiter": ",",
                        "headerCategory": "category",
                        "headerValue": "value"
                      },
                      "png": {},
                      "svg": {}
                    },
                    "autoSelected": "zoom"
                  },
                  "type": "line",
                  "width": 500,
                  "zoom": {
                    "enabled": true,
                    "type": "x",
                    "autoScaleYaxis": false,
                    "zoomedArea": {
                      "fill": {
                        "color": "#90CAF9",
                        "opacity": 0.4
                      },
                      "stroke": {
                        "color": "#0D47A1",
                        "opacity": 0.4,
                        "width": 1
                      }
                    }
                  }
                },
                "plotOptions": {
                  "area": {
                    "fillTo": "origin"
                  },
                  "bar": {
                    "horizontal": false,
                    "columnWidth": "70%",
                    "barHeight": "70%",
                    "distributed": false,
                    "borderRadius": 10,
                    "borderRadiusApplication": "end",
                    "borderRadiusWhenStacked": "last",
                    "rangeBarOverlap": true,
                    "rangeBarGroupRows": false,
                    "hideZeroBarsWhenGrouped": false,
                    "isDumbbell": false,
                    "isFunnel": false,
                    "isFunnel3d": true,
                    "colors": {
                      "backgroundBarOpacity": 1,
                      "backgroundBarRadius": 0
                    },
                    "dataLabels": {
                      "position": "top",
                      "maxItems": 100,
                      "hideOverflowingLabels": true,
                      "orientation": "horizontal",
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
                  "candlestick": {
                    "colors": {
                      "upward": "#00B746",
                      "downward": "#EF403C"
                    },
                    "wick": {
                      "useFillColor": true
                    }
                  },
                  "boxPlot": {
                    "colors": {
                      "upper": "#00E396",
                      "lower": "#008FFB"
                    }
                  },
                  "heatmap": {
                    "radius": 2,
                    "enableShades": true,
                    "shadeIntensity": 0.5,
                    "reverseNegativeShade": false,
                    "distributed": false,
                    "useFillColorAsStroke": false,
                    "colorScale": {
                      "inverse": false,
                      "ranges": []
                    }
                  },
                  "treemap": {
                    "enableShades": true,
                    "shadeIntensity": 0.5,
                    "distributed": false,
                    "reverseNegativeShade": false,
                    "useFillColorAsStroke": false,
                    "borderRadius": 4,
                    "dataLabels": {
                      "format": "scale"
                    },
                    "colorScale": {
                      "inverse": false,
                      "ranges": []
                    }
                  },
                  "radialBar": {
                    "inverseOrder": false,
                    "startAngle": 0,
                    "endAngle": 360,
                    "offsetX": 0,
                    "offsetY": 0,
                    "hollow": {
                      "margin": 5,
                      "size": "50%",
                      "background": "#fff",
                      "imageWidth": 150,
                      "imageHeight": 150,
                      "imageOffsetX": 0,
                      "imageOffsetY": 0,
                      "imageClipped": true,
                      "position": "front",
                      "dropShadow": {
                        "enabled": false,
                        "top": 0,
                        "left": 0,
                        "blur": 3,
                        "color": "#000",
                        "opacity": 0.5
                      }
                    },
                    "track": {
                      "show": true,
                      "background": "#f2f2f2",
                      "strokeWidth": "97%",
                      "opacity": 1,
                      "margin": 5,
                      "dropShadow": {
                        "enabled": false,
                        "top": 0,
                        "left": 0,
                        "blur": 3,
                        "color": "#000",
                        "opacity": 0.5
                      }
                    },
                    "dataLabels": {
                      "show": true,
                      "name": {
                        "show": true,
                        "fontSize": 16,
                        "fontWeight": 600,
                        "offsetY": 0
                      },
                      "value": {
                        "show": true,
                        "fontSize": 14,
                        "fontWeight": 400,
                        "offsetY": 16
                      },
                      "total": {
                        "show": false,
                        "label": "Total",
                        "fontSize": 16,
                        "fontWeight": 600
                      }
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
                    "customScale": 1,
                    "offsetX": 0,
                    "offsetY": 0,
                    "startAngle": 0,
                    "endAngle": 360,
                    "expandOnClick": true,
                    "dataLabels": {
                      "offset": 0,
                      "minAngleToShowLabel": 10
                    },
                    "donut": {
                      "size": "65%",
                      "labels": {
                        "show": false,
                        "name": {
                          "show": true,
                          "fontSize": 16,
                          "fontWeight": 600,
                          "offsetY": -10
                        },
                        "value": {
                          "show": true,
                          "fontSize": 20,
                          "fontWeight": 400,
                          "offsetY": 10
                        },
                        "total": {
                          "show": false,
                          "showAlways": false,
                          "label": "Total",
                          "fontSize": 16,
                          "fontWeight": 400
                        }
                      }
                    }
                  },
                  "polarArea": {
                    "rings": {
                      "strokeWidth": 1,
                      "strokeColor": "#e8e8e8"
                    },
                    "spokes": {
                      "strokeWidth": 1,
                      "connectorColors": "#e8e8e8"
                    }
                  },
                  "radar": {
                    "offsetX": 0,
                    "offsetY": 0,
                    "polygons": {
                      "strokeWidth": 1,
                      "strokeColors": "#e8e8e8",
                      "connectorColors": "#e8e8e8",
                      "fill": {}
                    }
                  }
                },
                "dataLabels": {
                  "enabled": false,
                  "textAnchor": "middle",
                  "distributed": false,
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "fontSize": 12,
                    "fontWeight": 700
                  },
                  "background": {
                    "enabled": true,
                    "foreColor": "#fff",
                    "borderRadius": 2,
                    "padding": 4,
                    "opacity": 0.9,
                    "borderWidth": 1,
                    "borderColor": "#fff",
                    "dropShadow": {
                      "enabled": false,
                      "top": 1,
                      "left": 1,
                      "blur": 1,
                      "color": "#000",
                      "opacity": 0.45
                    }
                  },
                  "dropShadow": {
                    "enabled": false,
                    "top": 1,
                    "left": 1,
                    "blur": 1,
                    "color": "#000",
                    "opacity": 0.45
                  }
                },
                "fill": {
                  "type": "solid",
                  "opacity": 0.85,
                  "gradient": {
                    "shade": "dark",
                    "type": "horizontal",
                    "shadeIntensity": 0.5,
                    "inverseColors": true,
                    "opacityFrom": 1,
                    "opacityTo": 1
                  },
                  "image": {
                    "src": []
                  },
                  "pattern": {
                    "style": "squares",
                    "width": 6,
                    "height": 6,
                    "strokeWidth": 2
                  }
                },
                "forecastDataPoints": {
                  "count": 0,
                  "fillOpacity": 0.5,
                  "dashArray": 4
                },
                "grid": {
                  "show": true,
                  "borderColor": "#e0e0e0",
                  "strokeDashArray": 0,
                  "position": "back",
                  "xaxis": {
                    "lines": {
                      "show": false
                    }
                  },
                  "yaxis": {
                    "lines": {
                      "show": true
                    }
                  },
                  "row": {
                    "opacity": 0.5
                  },
                  "column": {
                    "opacity": 0.5
                  },
                  "padding": {
                    "top": 0,
                    "right": 25,
                    "bottom": 0,
                    "left": 15
                  }
                },
                "labels": [],
                "legend": {
                  "show": true,
                  "showForSingleSeries": false,
                  "showForNullSeries": true,
                  "showForZeroSeries": true,
                  "floating": false,
                  "position": "bottom",
                  "horizontalAlign": "center",
                  "inverseOrder": false,
                  "fontSize": 14,
                  "fontWeight": 400,
                  "offsetX": -20,
                  "offsetY": 0,
                  "customLegendItems": [],
                  "labels": {
                    "useSeriesColors": false
                  },
                  "markers": {
                    "width": 12,
                    "height": 12,
                    "strokeWidth": 0,
                    "strokeColor": "#fff",
                    "radius": 12,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "itemMargin": {
                    "horizontal": 5,
                    "vertical": 0
                  },
                  "onItemClick": {
                    "toggleDataSeries": true
                  },
                  "onItemHover": {
                    "highlightDataSeries": true
                  }
                },
                "markers": {
                  "discrete": [],
                  "size": 0,
                  "strokeColors": "#fff",
                  "strokeWidth": 2,
                  "strokeOpacity": 0.9,
                  "strokeDashArray": 0,
                  "fillOpacity": 1,
                  "shape": "circle",
                  "width": 8,
                  "height": 8,
                  "radius": 2,
                  "offsetX": 0,
                  "offsetY": 0,
                  "showNullDataPoints": true,
                  "hover": {
                    "sizeOffset": 6
                  }
                },
                "noData": {
                  "align": "center",
                  "verticalAlign": "middle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "fontSize": "14px"
                  }
                },
                "responsive": [],
                "states": {
                  "normal": {
                    "filter": {
                      "type": "none",
                      "value": 0
                    }
                  },
                  "hover": {
                    "filter": {
                      "type": "lighten",
                      "value": 0.1
                    }
                  },
                  "active": {
                    "allowMultipleDataPointsSelection": false,
                    "filter": {
                      "type": "darken",
                      "value": 0.5
                    }
                  }
                },
                "title": {
                  "align": "left",
                  "margin": 5,
                  "offsetX": 0,
                  "offsetY": 0,
                  "floating": false,
                  "style": {
                    "fontSize": "14px",
                    "fontWeight": 900
                  }
                },
                "subtitle": {
                  "align": "left",
                  "margin": 5,
                  "offsetX": 0,
                  "offsetY": 30,
                  "floating": false,
                  "style": {
                    "fontSize": "12px",
                    "fontWeight": 400
                  }
                },
                "stroke": {
                  "show": true,
                  "curve": "smooth",
                  "lineCap": "butt",
                  "width": 5,
                  "dashArray": 0,
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
                  "enabled": true,
                  "shared": true,
                  "hideEmptySeries": false,
                  "followCursor": false,
                  "intersect": false,
                  "inverseOrder": false,
                  "fillSeriesColor": false,
                  "theme": "light",
                  "cssClass": "",
                  "style": {
                    "fontSize": "12px"
                  },
                  "onDatasetHover": {
                    "highlightDataSeries": false
                  },
                  "x": {
                    "show": true,
                    "format": "dd MMM"
                  },
                  "y": {
                    "title": {}
                  },
                  "z": {
                    "title": "Size: "
                  },
                  "marker": {
                    "show": true
                  },
                  "items": {
                    "display": "flex"
                  },
                  "fixed": {
                    "enabled": false,
                    "position": "topRight",
                    "offsetX": 0,
                    "offsetY": 0
                  }
                },
                "xaxis": {
                  "type": "numeric",
                  "categories": [],
                  "convertedCatToNumeric": true,
                  "offsetX": 0,
                  "offsetY": 0,
                  "labels": {
                    "show": true,
                    "rotate": -45,
                    "rotateAlways": false,
                    "hideOverlappingLabels": true,
                    "trim": true,
                    "maxHeight": 120,
                    "showDuplicates": true,
                    "style": {
                      "fontSize": 12,
                      "fontWeight": 400,
                      "cssClass": ""
                    },
                    "offsetX": 0,
                    "offsetY": 0,
                    "datetimeUTC": true,
                    "datetimeFormatter": {
                      "year": "yyyy",
                      "month": "MMM 'yy",
                      "day": "dd MMM",
                      "hour": "HH:mm",
                      "minute": "HH:mm:ss",
                      "second": "HH:mm:ss"
                    }
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
                  "axisBorder": {
                    "show": true,
                    "color": "#e0e0e0",
                    "width": "100%",
                    "height": 1,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "axisTicks": {
                    "show": true,
                    "color": "#e0e0e0",
                    "height": 6,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "tickAmount": "dataPoints",
                  "tickPlacement": "on",
                  "floating": false,
                  "position": "bottom",
                  "title": {
                    "offsetX": 0,
                    "offsetY": 0,
                    "style": {
                      "fontSize": 12,
                      "fontWeight": 700,
                      "cssClass": ""
                    }
                  },
                  "crosshairs": {
                    "show": true,
                    "width": 1,
                    "position": "back",
                    "opacity": 0.9,
                    "stroke": {
                      "color": "#b6b6b6",
                      "width": 1,
                      "dashArray": 3
                    },
                    "fill": {
                      "type": "solid",
                      "color": "#B1B9C4",
                      "gradient": {
                        "colorFrom": "#D8E3F0",
                        "colorTo": "#BED1E6",
                        "stops": [
                          0,
                          100
                        ],
                        "opacityFrom": 0.4,
                        "opacityTo": 0.5
                      }
                    },
                    "dropShadow": {
                      "enabled": false,
                      "left": 0,
                      "top": 0,
                      "blur": 1,
                      "opacity": 0.4
                    }
                  },
                  "tooltip": {
                    "enabled": true,
                    "offsetY": 0,
                    "style": {
                      "fontSize": "12px"
                    }
                  }
                },
                "theme": {
                  "mode": "light",
                  "palette": "palette4",
                  "monochrome": {
                    "enabled": false,
                    "color": "#008FFB",
                    "shadeTo": "light",
                    "shadeIntensity": 0.65
                  }
                }
              },
              "globals": {
                "chartID": "yf4jM",
                "cuid": "9tu7nhtl",
                "events": {
                  "beforeMount": [],
                  "mounted": [],
                  "updated": [],
                  "clicked": [],
                  "selection": [],
                  "dataPointSelection": [],
                  "zoomed": [],
                  "scrolled": []
                },
                "colors": [
                  "#4ecdc4",
                  "#c7f464",
                  "#81D4FA",
                  "#fd6a6a",
                  "#546E7A"
                ],
                "clientX": null,
                "clientY": null,
                "fill": {
                  "colors": [
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A"
                  ]
                },
                "stroke": {},
                "dataLabels": {
                  "style": {}
                },
                "radarPolygons": {
                  "fill": {
                    "colors": [
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none"
                    ]
                  }
                },
                "markers": {
                  "size": [
                    0,
                    0
                  ],
                  "largestSize": 0
                },
                "animationEnded": true,
                "isDirty": true,
                "isExecCalled": false,
                "initialConfig": {
                  "labels": []
                },
                "initialSeries": [
                  {
                    "name": "Likes",
                    "data": [
                      {
                        "x": "1/11",
                        "y": 4
                      },
                      {
                        "x": "2/11",
                        "y": 3
                      },
                      {
                        "x": "3/11",
                        "y": 10
                      },
                      {
                        "x": "4/11",
                        "y": 9
                      },
                      {
                        "x": "5/11",
                        "y": 29
                      },
                      {
                        "x": "6/11",
                        "y": 19
                      },
                      {
                        "x": "7/11",
                        "y": 22
                      },
                      {
                        "x": "8/11",
                        "y": 9
                      },
                      {
                        "x": "9/11",
                        "y": 12
                      },
                      {
                        "x": "10/11",
                        "y": 7
                      },
                      {
                        "x": "11/11",
                        "y": 19
                      },
                      {
                        "x": "12/11",
                        "y": 5
                      }
                    ]
                  }
                ],
                "lastXAxis": {
                  "type": "category",
                  "categories": [],
                  "convertedCatToNumeric": true,
                  "offsetX": 0,
                  "offsetY": 0,
                  "labels": {
                    "show": true,
                    "rotate": -45,
                    "rotateAlways": false,
                    "hideOverlappingLabels": true,
                    "trim": true,
                    "maxHeight": 120,
                    "showDuplicates": true,
                    "style": {
                      "fontSize": 12,
                      "fontWeight": 400,
                      "cssClass": ""
                    },
                    "offsetX": 0,
                    "offsetY": 0,
                    "datetimeUTC": true,
                    "datetimeFormatter": {
                      "year": "yyyy",
                      "month": "MMM 'yy",
                      "day": "dd MMM",
                      "hour": "HH:mm",
                      "minute": "HH:mm:ss",
                      "second": "HH:mm:ss"
                    }
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
                  "axisBorder": {
                    "show": true,
                    "color": "#e0e0e0",
                    "width": "100%",
                    "height": 1,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "axisTicks": {
                    "show": true,
                    "color": "#e0e0e0",
                    "height": 6,
                    "offsetX": 0,
                    "offsetY": 0
                  },
                  "tickPlacement": "on",
                  "floating": false,
                  "position": "bottom",
                  "title": {
                    "offsetX": 0,
                    "offsetY": 0,
                    "style": {
                      "fontSize": 12,
                      "fontWeight": 700,
                      "cssClass": ""
                    }
                  },
                  "crosshairs": {
                    "show": true,
                    "width": 1,
                    "position": "back",
                    "opacity": 0.9,
                    "stroke": {
                      "color": "#b6b6b6",
                      "width": 1,
                      "dashArray": 3
                    },
                    "fill": {
                      "type": "solid",
                      "color": "#B1B9C4",
                      "gradient": {
                        "colorFrom": "#D8E3F0",
                        "colorTo": "#BED1E6",
                        "stops": [
                          0,
                          100
                        ],
                        "opacityFrom": 0.4,
                        "opacityTo": 0.5
                      }
                    },
                    "dropShadow": {
                      "enabled": false,
                      "left": 0,
                      "top": 0,
                      "blur": 1,
                      "opacity": 0.4
                    }
                  },
                  "tooltip": {
                    "enabled": true,
                    "offsetY": 0,
                    "style": {
                      "fontSize": "12px"
                    }
                  }
                },
                "lastYAxis": [
                  {
                    "show": true,
                    "showAlways": false,
                    "showForNullSeries": true,
                    "opposite": false,
                    "reversed": false,
                    "logarithmic": false,
                    "logBase": 10,
                    "forceNiceScale": false,
                    "floating": false,
                    "labels": {
                      "show": true,
                      "minWidth": 0,
                      "maxWidth": 160,
                      "offsetX": 0,
                      "offsetY": 0,
                      "rotate": 0,
                      "padding": 20,
                      "style": {
                        "fontSize": 11,
                        "fontWeight": 400,
                        "cssClass": ""
                      }
                    },
                    "axisBorder": {
                      "show": false,
                      "color": "#e0e0e0",
                      "width": 1,
                      "offsetX": 0,
                      "offsetY": 0
                    },
                    "axisTicks": {
                      "show": false,
                      "color": "#e0e0e0",
                      "width": 6,
                      "offsetX": 0,
                      "offsetY": 0
                    },
                    "title": {
                      "rotate": -90,
                      "offsetY": 0,
                      "offsetX": 0,
                      "style": {
                        "fontSize": 11,
                        "fontWeight": 700,
                        "cssClass": ""
                      }
                    },
                    "tooltip": {
                      "enabled": false,
                      "offsetX": 0
                    },
                    "crosshairs": {
                      "show": true,
                      "position": "front",
                      "stroke": {
                        "color": "#b6b6b6",
                        "width": 1,
                        "dashArray": 0
                      }
                    }
                  }
                ],
                "columnSeries": null,
                "labels": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "timescaleLabels": [],
                "noLabelsProvided": true,
                "allSeriesCollapsed": false,
                "collapsedSeries": [],
                "collapsedSeriesIndices": [],
                "ancillaryCollapsedSeries": [],
                "ancillaryCollapsedSeriesIndices": [],
                "risingSeries": [],
                "dataFormatXNumeric": false,
                "capturedSeriesIndex": -1,
                "capturedDataPointIndex": -1,
                "selectedDataPoints": [],
                "goldenPadding": 35,
                "invalidLogScale": false,
                "ignoreYAxisIndexes": [],
                "yAxisSameScaleIndices": [],
                "maxValsInArrayIndex": 0,
                "radialSize": 91.00000000000001,
                "zoomEnabled": true,
                "panEnabled": false,
                "selectionEnabled": false,
                "yaxis": null,
                "mousedown": false,
                "lastClientPosition": {},
                "yValueDecimal": 0,
                "total": 0,
                "SVGNS": "http://www.w3.org/2000/svg",
                "svgWidth": 500,
                "svgHeight": 250,
                "noData": false,
                "locale": {
                  "toolbar": {
                    "exportToSVG": "Download SVG",
                    "exportToPNG": "Download PNG",
                    "exportToCSV": "Download CSV",
                    "menu": "Menu",
                    "selection": "Selection",
                    "selectionZoom": "Selection Zoom",
                    "zoomIn": "Zoom In",
                    "zoomOut": "Zoom Out",
                    "pan": "Panning",
                    "reset": "Reset Zoom"
                  }
                },
                "dom": {
                  "baseEl": {
                    "_prevClass": "yf4jM"
                  },
                  "elWrap": {},
                  "Paper": {
                    "_stroke": "#000000",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "svg",
                    "_defs": {
                      "_stroke": "#000000",
                      "_event": null,
                      "dom": {},
                      "node": {},
                      "type": "defs"
                    }
                  },
                  "elLegendForeign": {
                    "instance": {
                      "_stroke": "#000000",
                      "_event": null,
                      "dom": {},
                      "type": "foreignObject"
                    }
                  },
                  "elLegendWrap": {},
                  "elGraphical": {
                    "_stroke": "#000000",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "g"
                  },
                  "elGridRectMask": {},
                  "elGridRectMarkerMask": {},
                  "elForecastMask": {},
                  "elNonForecastMask": {},
                  "elGridRect": {
                    "_stroke": "none",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "rect"
                  },
                  "elGridRectMarker": {
                    "_stroke": "none",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "rect"
                  }
                },
                "memory": {
                  "methodsToExec": []
                },
                "shouldAnimate": true,
                "skipLastTimelinelabel": false,
                "skipFirstTimelinelabel": false,
                "delayedElements": [
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  }
                ],
                "axisCharts": true,
                "isDataXYZ": false,
                "resized": true,
                "resizeTimer": null,
                "comboCharts": false,
                "dataChanged": false,
                "previousPaths": [],
                "allSeriesHasEqualX": true,
                "pointsArray": [
                  [
                    [
                      0,
                      181.57142857142858
                    ],
                    [
                      40.45454545454545,
                      187.42857142857144
                    ],
                    [
                      80.9090909090909,
                      146.42857142857144
                    ],
                    [
                      121.36363636363636,
                      152.28571428571428
                    ],
                    [
                      161.8181818181818,
                      35.14285714285717
                    ],
                    [
                      202.27272727272728,
                      93.71428571428572
                    ],
                    [
                      242.72727272727272,
                      76.14285714285714
                    ],
                    [
                      283.1818181818182,
                      152.28571428571428
                    ],
                    [
                      323.6363636363636,
                      134.71428571428572
                    ],
                    [
                      364.09090909090907,
                      164
                    ],
                    [
                      404.54545454545456,
                      93.71428571428572
                    ],
                    [
                      445,
                      175.71428571428572
                    ]
                  ]
                ],
                "dataLabelsRects": [],
                "lastDrawnDataLabelsIndexes": [],
                "hasNullValues": false,
                "zoomed": false,
                "gridWidth": 445,
                "gridHeight": 205,
                "rotateXLabels": false,
                "defaultLabels": false,
                "yLabelFormatters": [
                  null
                ],
                "LINE_HEIGHT_RATIO": 1.618,
                "xAxisLabelsHeight": 10,
                "xAxisGroupLabelsHeight": 10,
                "xAxisLabelsWidth": 0,
                "yAxisLabelsWidth": 0,
                "scaleX": 1,
                "scaleY": 1,
                "translateX": 30,
                "translateY": 30,
                "translateYAxisX": [
                  -3
                ],
                "yAxisWidths": [],
                "translateXAxisY": -4,
                "translateXAxisX": 0,
                "tooltip": {
                  "tooltipUtil": {},
                  "tooltipLabels": {
                    "tooltipUtil": {}
                  },
                  "tooltipPosition": {},
                  "marker": {
                    "tooltipPosition": {}
                  },
                  "intersect": {
                    "isVerticalGroupedRangeBar": false
                  },
                  "axesTooltip": {},
                  "showOnIntersect": false,
                  "showTooltipTitle": true,
                  "fixedTooltip": false,
                  "xaxisTooltip": {},
                  "yaxisTTEls": null,
                  "isBarShared": true,
                  "lastHoverTime": 1705904798787,
                  "xyRatios": {
                    "yRatio": [
                      0.17073170731707318
                    ],
                    "invertedYRatio": 0.07865168539325842,
                    "zRatio": null,
                    "xRatio": 0.024719101123595506,
                    "invertedXRatio": 0.05365853658536585,
                    "baseLineInvertedY": 0.1,
                    "baseLineY": [
                      0
                    ],
                    "baseLineX": 0
                  },
                  "isXAxisTooltipEnabled": true,
                  "yaxisTooltips": [
                    false
                  ],
                  "allTooltipSeriesGroups": [],
                  "xaxisOffY": 206,
                  "xaxisTooltipText": {},
                  "yaxisOffX": 1,
                  "yaxisTooltip": {},
                  "yaxisTooltipText": [
                    {}
                  ],
                  "xcrosshairsWidth": 1,
                  "ycrosshairs": {
                    "instance": {
                      "_stroke": "#b6b6b6",
                      "_event": null,
                      "dom": {},
                      "type": "line"
                    }
                  },
                  "ycrosshairsHidden": {
                    "instance": {
                      "_stroke": "#b6b6b6",
                      "_event": null,
                      "dom": {},
                      "type": "line"
                    }
                  },
                  "xAxisTicksPositions": [
                    40.45454545454545,
                    80.9090909090909,
                    121.36363636363636,
                    161.8181818181818,
                    202.27272727272725,
                    242.7272727272727,
                    283.18181818181813,
                    323.63636363636357,
                    364.090909090909,
                    404.54545454545445,
                    444.9999999999999,
                    485.4545454545453
                  ],
                  "dataPointsDividedHeight": 17.083333333333332,
                  "dataPointsDividedWidth": 37.083333333333336,
                  "tooltipTitle": {},
                  "legendLabels": {},
                  "ttItems": [
                    {}
                  ],
                  "seriesBound": {
                    "x": 0,
                    "y": 0,
                    "width": 0,
                    "height": 0,
                    "top": 0,
                    "right": 0,
                    "bottom": 0,
                    "left": 0
                  }
                },
                "series": [
                  [
                    4,
                    3,
                    10,
                    9,
                    29,
                    19,
                    22,
                    9,
                    12,
                    7,
                    19,
                    5
                  ]
                ],
                "seriesCandleO": [],
                "seriesCandleH": [],
                "seriesCandleM": [],
                "seriesCandleL": [],
                "seriesCandleC": [],
                "seriesRangeStart": [],
                "seriesRangeEnd": [],
                "seriesRange": [],
                "seriesPercent": [
                  [
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100,
                    100
                  ]
                ],
                "seriesGoals": [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                  ]
                ],
                "seriesX": [
                  [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                  ]
                ],
                "seriesZ": [
                  []
                ],
                "seriesNames": [
                  "Likes"
                ],
                "seriesTotals": [
                  148
                ],
                "seriesLog": [
                  null
                ],
                "seriesColors": [
                  null
                ],
                "stackedSeriesTotals": [
                  4,
                  3,
                  10,
                  9,
                  29,
                  19,
                  22,
                  9,
                  12,
                  7,
                  19,
                  5
                ],
                "seriesXvalues": [
                  [
                    0,
                    40.45454545454545,
                    80.9090909090909,
                    121.36363636363636,
                    161.8181818181818,
                    202.27272727272728,
                    242.72727272727272,
                    283.1818181818182,
                    323.6363636363636,
                    364.09090909090907,
                    404.54545454545456,
                    445
                  ]
                ],
                "seriesYvalues": [
                  [
                    181.57142857142858,
                    187.42857142857144,
                    146.42857142857144,
                    152.28571428571428,
                    35.14285714285717,
                    93.71428571428572,
                    76.14285714285714,
                    152.28571428571428,
                    134.71428571428572,
                    164,
                    93.71428571428572,
                    175.71428571428572
                  ]
                ],
                "hasXaxisGroups": false,
                "groups": [],
                "seriesGroups": [],
                "categoryLabels": [
                  "1/11",
                  "2/11",
                  "3/11",
                  "4/11",
                  "5/11",
                  "6/11",
                  "7/11",
                  "8/11",
                  "9/11",
                  "10/11",
                  "11/11",
                  "12/11"
                ],
                "selectionResizeTimer": null,
                "isXNumeric": true,
                "isMultiLineX": false,
                "isMultipleYAxis": false,
                "maxY": 35,
                "minY": 0,
                "minYArr": [
                  0
                ],
                "maxYArr": [
                  35
                ],
                "maxX": 12,
                "minX": 1,
                "initialMaxX": 12,
                "initialMinX": 1,
                "maxDate": 0,
                "minDate": 1.7976931348623157e+308,
                "minZ": 1.7976931348623157e+308,
                "maxZ": -1.7976931348623157e+308,
                "minXDiff": 1,
                "yAxisScale": [
                  {
                    "result": [
                      0,
                      7,
                      14,
                      21,
                      28,
                      35
                    ],
                    "niceMin": 0,
                    "niceMax": 35
                  }
                ],
                "xAxisScale": {
                  "result": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                  ],
                  "niceMin": 1,
                  "niceMax": 12
                },
                "xAxisTicksPositions": [],
                "yLabelsCoords": [
                  {
                    "width": 10,
                    "index": 0
                  }
                ],
                "yTitleCoords": [
                  {
                    "width": 0,
                    "index": 0
                  }
                ],
                "barPadForNumericAxis": 0,
                "padHorizontal": 0,
                "xRange": 11,
                "yRange": [
                  35
                ],
                "zRange": null,
                "dataPoints": 12,
                "xTickAmount": 10,
                "xyCharts": true,
                "isBarHorizontal": false,
                "chartClass": ".apexchartsyf4jM",
                "comboBarCount": 0,
                "isRangeBar": false,
                "stackedSeriesTotalsByGroups": [],
                "xAxisHeight": 10,
                "yLogRatio": [
                  0.17073170731707318
                ],
                "logYRange": [
                  null
                ]
              }
            },
            "publicMethods": [
              "updateOptions",
              "updateSeries",
              "appendData",
              "appendSeries",
              "isSeriesHidden",
              "toggleSeries",
              "showSeries",
              "hideSeries",
              "setLocale",
              "resetSeries",
              "zoomX",
              "toggleDataPointSelection",
              "dataURI",
              "exportToCSV",
              "addXaxisAnnotation",
              "addYaxisAnnotation",
              "addPointAnnotation",
              "clearAnnotations",
              "removeAnnotation",
              "paper",
              "destroy"
            ],
            "eventList": [
              "click",
              "mousedown",
              "mousemove",
              "mouseleave",
              "touchstart",
              "touchmove",
              "touchleave",
              "mouseup",
              "touchend"
            ],
            "animations": {},
            "axes": {},
            "core": {},
            "config": {
              "opts": {}
            },
            "data": {
              "twoDSeriesX": [
                "1/11",
                "2/11",
                "3/11",
                "4/11",
                "5/11",
                "6/11",
                "7/11",
                "8/11",
                "9/11",
                "10/11",
                "11/11",
                "12/11"
              ],
              "coreUtils": {},
              "fallbackToCategory": true,
              "activeSeriesIndex": 0
            },
            "grid": {
              "xaxisLabels": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "axesUtils": {},
              "isRangeBar": 0,
              "elg": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elgridLinesH": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elgridLinesV": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elGridBorders": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              }
            },
            "graphics": {},
            "coreUtils": {},
            "crosshairs": {},
            "events": {},
            "exports": {},
            "localization": {},
            "options": {
              "yAxis": {
                "show": true,
                "showAlways": false,
                "showForNullSeries": true,
                "opposite": false,
                "reversed": false,
                "logarithmic": false,
                "logBase": 10,
                "forceNiceScale": false,
                "floating": false,
                "labels": {
                  "show": true,
                  "minWidth": 0,
                  "maxWidth": 160,
                  "offsetX": 0,
                  "offsetY": 0,
                  "rotate": 0,
                  "padding": 20,
                  "style": {
                    "colors": [],
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": ""
                  }
                },
                "axisBorder": {
                  "show": false,
                  "color": "#e0e0e0",
                  "width": 1,
                  "offsetX": 0,
                  "offsetY": 0
                },
                "axisTicks": {
                  "show": false,
                  "color": "#e0e0e0",
                  "width": 6,
                  "offsetX": 0,
                  "offsetY": 0
                },
                "title": {
                  "rotate": -90,
                  "offsetY": 0,
                  "offsetX": 0,
                  "style": {
                    "fontSize": "11px",
                    "fontWeight": 900,
                    "cssClass": ""
                  }
                },
                "tooltip": {
                  "enabled": false,
                  "offsetX": 0
                },
                "crosshairs": {
                  "show": true,
                  "position": "front",
                  "stroke": {
                    "color": "#b6b6b6",
                    "width": 1,
                    "dashArray": 0
                  }
                }
              },
              "pointAnnotation": {
                "x": 0,
                "y": null,
                "yAxisIndex": 0,
                "marker": {
                  "size": 4,
                  "fillColor": "#fff",
                  "strokeWidth": 2,
                  "strokeColor": "#333",
                  "shape": "circle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "radius": 2,
                  "cssClass": ""
                },
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "middle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                },
                "customSVG": {
                  "offsetX": 0,
                  "offsetY": 0
                },
                "image": {
                  "width": 20,
                  "height": 20,
                  "offsetX": 0,
                  "offsetY": 0
                }
              },
              "yAxisAnnotation": {
                "y": 0,
                "y2": null,
                "strokeDashArray": 1,
                "fillColor": "#c2c2c2",
                "borderColor": "#c2c2c2",
                "borderWidth": 1,
                "opacity": 0.3,
                "offsetX": 0,
                "offsetY": 0,
                "width": "100%",
                "yAxisIndex": 0,
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "end",
                  "position": "right",
                  "offsetX": 0,
                  "offsetY": -3,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                }
              },
              "xAxisAnnotation": {
                "x": 0,
                "x2": null,
                "strokeDashArray": 1,
                "fillColor": "#c2c2c2",
                "borderColor": "#c2c2c2",
                "borderWidth": 1,
                "opacity": 0.3,
                "offsetX": 0,
                "offsetY": 0,
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "middle",
                  "orientation": "vertical",
                  "position": "top",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                }
              },
              "text": {
                "x": 0,
                "y": 0,
                "text": "",
                "textAnchor": "start",
                "fontSize": "13px",
                "fontWeight": 400,
                "appendTo": ".apexcharts-annotations",
                "backgroundColor": "transparent",
                "borderColor": "#c2c2c2",
                "borderRadius": 0,
                "borderWidth": 0,
                "paddingLeft": 4,
                "paddingRight": 4,
                "paddingTop": 2,
                "paddingBottom": 2
              }
            },
            "responsive": {},
            "series": {
              "legendInactiveClass": "legend-mouseover-inactive"
            },
            "theme": {
              "isColorFn": false,
              "isHeatmapDistributed": false,
              "isBarDistributed": false
            },
            "formatters": {
              "tooltipKeyFormat": "dd MMM"
            },
            "titleSubtitle": {},
            "legend": {
              "isBarsDistributed": false,
              "legendHelpers": {}
            },
            "toolbar": {
              "selectedClass": "apexcharts-selected",
              "minX": 1,
              "maxX": 12
            },
            "tooltip": {
              "tooltipUtil": {},
              "tooltipLabels": {
                "tooltipUtil": {}
              },
              "tooltipPosition": {},
              "marker": {
                "tooltipPosition": {}
              },
              "intersect": {
                "isVerticalGroupedRangeBar": false
              },
              "axesTooltip": {},
              "showOnIntersect": false,
              "showTooltipTitle": true,
              "fixedTooltip": false,
              "xaxisTooltip": null,
              "yaxisTTEls": null,
              "isBarShared": true,
              "lastHoverTime": 1705904798787
            },
            "dimensions": {
              "lgRect": {
                "x": 0,
                "y": 0,
                "height": 0,
                "width": 0
              },
              "yAxisWidth": 15,
              "yAxisWidthLeft": 15,
              "yAxisWidthRight": 0,
              "xAxisHeight": 10,
              "isSparkline": false,
              "dimHelpers": {},
              "dimYAxis": {},
              "dimXAxis": {},
              "dimGrid": {},
              "lgWidthForSideLegends": 0,
              "xPadRight": 0,
              "xPadLeft": 0,
              "xAxisWidth": 0
            },
            "updateHelpers": {},
            "zoomPanSelection": {
              "selectedClass": "apexcharts-selected",
              "minX": 1,
              "maxX": 12,
              "dragged": false,
              "graphics": {},
              "eventList": [
                "mousedown",
                "mouseleave",
                "mousemove",
                "touchstart",
                "touchmove",
                "mouseup",
                "touchend"
              ],
              "clientX": 0,
              "clientY": 0,
              "startX": 0,
              "endX": 0,
              "dragX": 0,
              "startY": 0,
              "endY": 0,
              "dragY": 0,
              "moveDirection": "none",
              "zoomRect": {
                "_stroke": "none",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "rect"
              },
              "selectionRect": {
                "_stroke": "none",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "rect",
                "_memory": {
                  "_draggable": {
                    "constraint": {
                      "minX": 0,
                      "minY": 0,
                      "maxX": 445,
                      "maxY": 205
                    },
                    "value": true
                  }
                }
              }
            },
            "pie": {
              "chartType": "line",
              "initialAnim": false,
              "dynamicAnim": false,
              "animBeginArr": [
                0
              ],
              "animDur": 0,
              "defaultSize": 205,
              "centerY": 102.5,
              "centerX": 222.5,
              "fullAngle": 360,
              "initialAngle": 0,
              "donutSize": 59.150000000000006,
              "maxY": 0,
              "sliceLabels": [],
              "sliceSizes": [],
              "prevSectorAngleArr": []
            },
            "rangeBar": {
              "isHorizontal": false,
              "strokeWidth": 5,
              "isNullValue": false,
              "isRangeBar": 0,
              "isVerticalGroupedRangeBar": 0,
              "isFunnel": false,
              "xRatio": 0.024719101123595506,
              "invertedXRatio": 0.05365853658536585,
              "invertedYRatio": 0.07865168539325842,
              "baseLineInvertedY": 0.1,
              "yaxisIndex": 0,
              "seriesLen": 0,
              "pathArr": [],
              "lastActiveBarSerieIndex": 0,
              "stackedSeriesTotals": [
                4,
                3,
                10,
                9,
                29,
                19,
                22,
                9,
                12,
                7,
                19,
                5
              ],
              "barHelpers": {}
            },
            "annotations": {
              "graphics": {},
              "helpers": {},
              "xAxisAnnotations": {
                "helpers": {}
              },
              "yAxisAnnotations": {
                "helpers": {}
              },
              "pointsAnnotations": {
                "helpers": {}
              },
              "xDivision": 37.083333333333336
            }
          }
        },
        {
          "id": "R8MKt",
          "chart": {
            "opts": {
              "series": [
                {
                  "name": "Likes"
                }
              ],
              "annotations": {
                "position": "front",
                "yaxis": [],
                "xaxis": [],
                "points": []
              },
              "chart": {
                "type": "line",
                "background": "",
                "foreColor": "#333",
                "offsetX": 0,
                "offsetY": 0,
                "toolbar": {
                  "show": false
                },
                "animations": {
                  "enabled": false
                },
                "dropShadow": {
                  "enabled": false,
                  "top": 2,
                  "left": 2,
                  "blur": 4,
                  "color": "#000",
                  "opacity": 0.35
                },
                "fontFamily": "Roboto",
                "height": 250,
                "width": 500,
                "id": "R8MKt"
              },
              "plotOptions": {
                "bar": {
                  "horizontal": false,
                  "columnWidth": "70%",
                  "barHeight": "70%",
                  "distributed": false,
                  "borderRadius": 10,
                  "borderRadiusApplication": "end",
                  "borderRadiusWhenStacked": "last",
                  "colors": {
                    "ranges": [],
                    "backgroundBarColors": [],
                    "backgroundBarOpacity": 1
                  },
                  "dataLabels": {
                    "position": "top"
                  }
                },
                "heatmap": {
                  "radius": 2,
                  "enableShades": true,
                  "shadeIntensity": 0.5
                },
                "radialBar": {
                  "startAngle": 0,
                  "endAngle": 360,
                  "offsetX": 0,
                  "offsetY": 0,
                  "hollow": {
                    "margin": 5,
                    "size": "50%",
                    "background": "#fff",
                    "position": "front",
                    "dropShadow": {
                      "enabled": false,
                      "top": 0,
                      "left": 0,
                      "blur": 3,
                      "color": "#000",
                      "opacity": 0.5
                    }
                  },
                  "track": {
                    "show": true,
                    "background": "#f2f2f2",
                    "strokeWidth": "97%",
                    "opacity": 1,
                    "margin": 5,
                    "dropShadow": {
                      "enabled": false,
                      "top": 0,
                      "left": 0,
                      "blur": 3,
                      "color": "#000",
                      "opacity": 0.5
                    }
                  },
                  "dataLabels": {
                    "show": true,
                    "name": {
                      "show": true,
                      "fontSize": 16,
                      "offsetY": 0
                    },
                    "value": {
                      "show": true,
                      "fontSize": 14,
                      "offsetY": 16
                    },
                    "total": {
                      "show": false,
                      "label": "Total",
                      "fontSize": 16
                    }
                  }
                },
                "pie": {
                  "startAngle": 0,
                  "endAngle": 360,
                  "offsetX": 0,
                  "offsetY": 0,
                  "dataLabels": {
                    "offset": 0
                  },
                  "donut": {
                    "size": "65%",
                    "labels": {
                      "show": false,
                      "name": {
                        "show": true,
                        "fontSize": 16,
                        "offsetY": -10
                      },
                      "value": {
                        "show": true,
                        "fontSize": 20,
                        "offsetY": 10
                      },
                      "total": {
                        "show": false,
                        "showAlways": false,
                        "label": "Total",
                        "fontSize": 16
                      }
                    }
                  }
                },
                "radar": {
                  "offsetX": 0,
                  "offsetY": 0,
                  "polygons": {
                    "strokeColors": "#e8e8e8",
                    "connectorColors": "#e8e8e8",
                    "fill": {}
                  }
                }
              },
              "theme": {
                "mode": "light",
                "palette": "palette4"
              },
              "dataLabels": {
                "enabled": false,
                "textAnchor": "middle",
                "offsetX": 0,
                "offsetY": 0,
                "style": {
                  "fontSize": 12,
                  "fontWeight": 700
                },
                "background": {
                  "enabled": true,
                  "foreColor": "#fff",
                  "borderRadius": 2,
                  "padding": 4,
                  "opacity": 0.9,
                  "borderWidth": 1,
                  "borderColor": "#fff"
                },
                "dropShadow": {
                  "enabled": false,
                  "top": 1,
                  "left": 1,
                  "blur": 1,
                  "color": "#000",
                  "opacity": 0.45
                }
              },
              "markers": {
                "size": 0,
                "strokeColors": "#fff",
                "strokeWidth": 2,
                "strokeOpacity": 0.9,
                "strokeDashArray": 0,
                "fillOpacity": 1,
                "shape": "circle",
                "radius": 2,
                "offsetX": 0,
                "offsetY": 0,
                "hover": {}
              },
              "yaxis": [
                null
              ],
              "stroke": {
                "show": true,
                "curve": "smooth",
                "lineCap": "butt",
                "width": 5,
                "dashArray": 0
              },
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
                },
                "pattern": {
                  "style": "squares",
                  "width": 6,
                  "height": 6,
                  "strokeWidth": 2
                }
              },
              "legend": {
                "show": true,
                "showForSingleSeries": false,
                "floating": false,
                "position": "bottom",
                "horizontalAlign": "center",
                "fontSize": 14,
                "fontWeight": 400,
                "offsetX": -20,
                "offsetY": 0,
                "labels": {
                  "useSeriesColors": false
                },
                "markers": {
                  "width": 12,
                  "height": 12,
                  "strokeWidth": 0,
                  "strokeColor": "#fff",
                  "radius": 12
                },
                "itemMargin": {
                  "horizontal": 5,
                  "vertical": 0
                },
                "onItemClick": {
                  "toggleDataSeries": true
                },
                "onItemHover": {
                  "highlightDataSeries": true
                }
              }
            },
            "w": {
              "globals": {
                "chartID": "R8MKt",
                "cuid": "vndq8qko",
                "events": {
                  "beforeMount": [],
                  "mounted": [],
                  "updated": [],
                  "clicked": [],
                  "selection": [],
                  "dataPointSelection": [],
                  "zoomed": [],
                  "scrolled": []
                },
                "colors": [
                  "#4ecdc4",
                  "#c7f464",
                  "#81D4FA",
                  "#fd6a6a",
                  "#546E7A"
                ],
                "clientX": 848,
                "clientY": 495,
                "fill": {
                  "colors": [
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A",
                    "#4ecdc4",
                    "#c7f464",
                    "#81D4FA",
                    "#fd6a6a",
                    "#546E7A"
                  ]
                },
                "stroke": {},
                "dataLabels": {
                  "style": {}
                },
                "radarPolygons": {
                  "fill": {
                    "colors": [
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none",
                      "none"
                    ]
                  }
                },
                "markers": {
                  "size": [
                    0,
                    0,
                    0
                  ],
                  "largestSize": 0
                },
                "animationEnded": true,
                "isDirty": true,
                "isExecCalled": false,
                "initialConfig": {
                  "fill": {
                    "type": "solid",
                    "opacity": 0.85,
                    "gradient": {
                      "shade": "dark",
                      "type": "horizontal",
                      "shadeIntensity": 0.5,
                      "inverseColors": true,
                      "opacityFrom": 1,
                      "opacityTo": 1
                    },
                    "image": {
                      "src": []
                    },
                    "pattern": {
                      "style": "squares",
                      "width": 6,
                      "height": 6,
                      "strokeWidth": 2
                    }
                  },
                  "forecastDataPoints": {
                    "count": 0,
                    "fillOpacity": 0.5,
                    "dashArray": 4
                  },
                  "labels": [],
                  "noData": {
                    "align": "center",
                    "verticalAlign": "middle",
                    "offsetX": 0,
                    "offsetY": 0,
                    "style": {
                      "fontSize": "14px"
                    }
                  },
                  "responsive": [],
                  "series": [
                    {
                      "name": "Likes",
                      "data": [
                        {
                          "x": "Yanvar",
                          "y": "300"
                        },
                        {
                          "x": "Fevral",
                          "y": "400"
                        },
                        {
                          "x": "Mart",
                          "y": "700"
                        },
                        {
                          "x": "Aprel",
                          "y": "1200"
                        },
                        {
                          "x": "May",
                          "y": "1000"
                        },
                        {
                          "x": "Iyun",
                          "y": "100"
                        },
                        {
                          "x": "Iyul",
                          "y": "700"
                        },
                        {
                          "x": "August",
                          "y": "800"
                        },
                        {
                          "x": "Sentyabr",
                          "y": "2000"
                        },
                        {
                          "x": "Oktyabr",
                          "y": "3000"
                        },
                        {
                          "x": "Noyabr",
                          "y": "4000"
                        },
                        {
                          "x": "Dekabr",
                          "y": "4500"
                        }
                      ],
                      "zIndex": 0
                    },
                    {
                      "name": "series-2",
                      "data": [
                        {
                          "x": "Yanvar",
                          "y": "900"
                        },
                        {
                          "x": "Fevral",
                          "y": "800"
                        },
                        {
                          "x": "Mart",
                          "y": "1100"
                        },
                        {
                          "x": "Aprel",
                          "y": "2000"
                        },
                        {
                          "x": "May",
                          "y": "3000"
                        },
                        {
                          "x": "Iyun",
                          "y": "100"
                        },
                        {
                          "x": "Iyul",
                          "y": "800"
                        },
                        {
                          "x": "August",
                          "y": "3000"
                        },
                        {
                          "x": "Sentyabr",
                          "y": "2000"
                        },
                        {
                          "x": "Oktyabr",
                          "y": "4000"
                        },
                        {
                          "x": "Noyabr",
                          "y": "3000"
                        },
                        {
                          "x": "Dekabr",
                          "y": "3500"
                        }
                      ],
                      "zIndex": 1
                    }
                  ],
                  "states": {
                    "normal": {
                      "filter": {
                        "type": "none",
                        "value": 0
                      }
                    },
                    "hover": {
                      "filter": {
                        "type": "lighten",
                        "value": 0.1
                      }
                    },
                    "active": {
                      "allowMultipleDataPointsSelection": false,
                      "filter": {
                        "type": "darken",
                        "value": 0.5
                      }
                    }
                  },
                  "title": {
                    "align": "left",
                    "margin": 5,
                    "offsetX": 0,
                    "offsetY": 0,
                    "floating": false,
                    "style": {
                      "fontSize": "14px",
                      "fontWeight": 900
                    }
                  },
                  "subtitle": {
                    "align": "left",
                    "margin": 5,
                    "offsetX": 0,
                    "offsetY": 30,
                    "floating": false,
                    "style": {
                      "fontSize": "12px",
                      "fontWeight": 400
                    }
                  }
                },
                "initialSeries": [
                  {
                    "name": "Likes",
                    "data": [
                      {
                        "x": "Yanvar",
                        "y": "300"
                      },
                      {
                        "x": "Fevral",
                        "y": "400"
                      },
                      {
                        "x": "Mart",
                        "y": "700"
                      },
                      {
                        "x": "Aprel",
                        "y": "1200"
                      },
                      {
                        "x": "May",
                        "y": "1000"
                      },
                      {
                        "x": "Iyun",
                        "y": "100"
                      },
                      {
                        "x": "Iyul",
                        "y": "700"
                      },
                      {
                        "x": "August",
                        "y": "800"
                      },
                      {
                        "x": "Sentyabr",
                        "y": "2000"
                      },
                      {
                        "x": "Oktyabr",
                        "y": "3000"
                      },
                      {
                        "x": "Noyabr",
                        "y": "4000"
                      },
                      {
                        "x": "Dekabr",
                        "y": "4500"
                      }
                    ],
                    "zIndex": 0
                  },
                  {
                    "name": "series-2",
                    "data": [
                      {
                        "x": "Yanvar",
                        "y": "900"
                      },
                      {
                        "x": "Fevral",
                        "y": "800"
                      },
                      {
                        "x": "Mart",
                        "y": "1100"
                      },
                      {
                        "x": "Aprel",
                        "y": "2000"
                      },
                      {
                        "x": "May",
                        "y": "3000"
                      },
                      {
                        "x": "Iyun",
                        "y": "100"
                      },
                      {
                        "x": "Iyul",
                        "y": "800"
                      },
                      {
                        "x": "August",
                        "y": "3000"
                      },
                      {
                        "x": "Sentyabr",
                        "y": "2000"
                      },
                      {
                        "x": "Oktyabr",
                        "y": "4000"
                      },
                      {
                        "x": "Noyabr",
                        "y": "3000"
                      },
                      {
                        "x": "Dekabr",
                        "y": "3500"
                      }
                    ],
                    "zIndex": 1
                  }
                ],
                "lastXAxis": [],
                "lastYAxis": [],
                "columnSeries": null,
                "labels": [
                  1,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  10,
                  11,
                  12
                ],
                "timescaleLabels": [],
                "noLabelsProvided": true,
                "allSeriesCollapsed": false,
                "collapsedSeries": [],
                "collapsedSeriesIndices": [],
                "ancillaryCollapsedSeries": [],
                "ancillaryCollapsedSeriesIndices": [],
                "risingSeries": [],
                "dataFormatXNumeric": false,
                "capturedSeriesIndex": -1,
                "capturedDataPointIndex": -1,
                "selectedDataPoints": [],
                "goldenPadding": 35,
                "invalidLogScale": false,
                "ignoreYAxisIndexes": [],
                "yAxisSameScaleIndices": [],
                "maxValsInArrayIndex": 0,
                "radialSize": 54.802020717713894,
                "zoomEnabled": true,
                "panEnabled": false,
                "selectionEnabled": false,
                "yaxis": null,
                "mousedown": false,
                "lastClientPosition": {},
                "yValueDecimal": 0,
                "total": 0,
                "SVGNS": "http://www.w3.org/2000/svg",
                "svgWidth": 500,
                "svgHeight": 250,
                "noData": false,
                "locale": {
                  "toolbar": {
                    "exportToSVG": "Download SVG",
                    "exportToPNG": "Download PNG",
                    "exportToCSV": "Download CSV",
                    "menu": "Menu",
                    "selection": "Selection",
                    "selectionZoom": "Selection Zoom",
                    "zoomIn": "Zoom In",
                    "zoomOut": "Zoom Out",
                    "pan": "Panning",
                    "reset": "Reset Zoom"
                  }
                },
                "dom": {
                  "baseEl": {
                    "_prevClass": "R8MKt"
                  },
                  "elWrap": {},
                  "Paper": {
                    "_stroke": "#000000",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "svg",
                    "_defs": {
                      "_stroke": "#000000",
                      "_event": null,
                      "dom": {},
                      "node": {},
                      "type": "defs"
                    }
                  },
                  "elLegendForeign": {
                    "instance": {
                      "_stroke": "#000000",
                      "_event": null,
                      "dom": {},
                      "type": "foreignObject"
                    }
                  },
                  "elLegendWrap": {},
                  "elGraphical": {
                    "_stroke": "#000000",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "g"
                  },
                  "elGridRectMask": {},
                  "elGridRectMarkerMask": {},
                  "elForecastMask": {},
                  "elNonForecastMask": {},
                  "elGridRect": {
                    "_stroke": "none",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "rect"
                  },
                  "elGridRectMarker": {
                    "_stroke": "none",
                    "_event": null,
                    "dom": {},
                    "node": {},
                    "type": "rect"
                  }
                },
                "memory": {
                  "methodsToExec": []
                },
                "shouldAnimate": true,
                "skipLastTimelinelabel": false,
                "skipFirstTimelinelabel": false,
                "delayedElements": [
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 1
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  },
                  {
                    "el": {
                      "instance": {
                        "_stroke": "#000000",
                        "_event": null,
                        "dom": {},
                        "type": "g"
                      }
                    },
                    "index": 0
                  }
                ],
                "axisCharts": true,
                "isDataXYZ": false,
                "resized": true,
                "resizeTimer": null,
                "comboCharts": false,
                "dataChanged": true,
                "previousPaths": [
                  {
                    "type": "line",
                    "paths": [
                      {
                        "d": "M 0 122.94649392303467C 13.277599863572553 122.94649392303467 24.658399746634743 120.3306110736084 38.9359996102073 120.3306110736084"
                      },
                      {
                        "d": "M 37.9359996102073 120.3306110736084C 51.21359947377985 120.3306110736084 62.59439935684204 112.4829625253296 76.8719992204146 112.4829625253296"
                      },
                      {
                        "d": "M 75.8719992204146 112.4829625253296C 89.14959908398716 112.4829625253296 100.53039896704934 99.40354827819824 114.8079988306219 99.40354827819824"
                      },
                      {
                        "d": "M 113.8079988306219 99.40354827819824C 127.08559869419445 99.40354827819824 138.46639857725663 104.63531397705079 152.7439984408292 104.63531397705079"
                      },
                      {
                        "d": "M 151.7439984408292 104.63531397705079C 165.02159830440175 104.63531397705079 176.40239818746394 128.1782596218872 190.6799980510365 128.1782596218872"
                      },
                      {
                        "d": "M 189.6799980510365 128.1782596218872C 202.95759791460907 128.1782596218872 214.33839779767123 112.4829625253296 228.6159976612438 112.4829625253296"
                      },
                      {
                        "d": "M 227.6159976612438 112.4829625253296C 240.89359752481636 112.4829625253296 252.27439740787855 109.86707967590333 266.5519972714511 109.86707967590333"
                      },
                      {
                        "d": "M 265.5519972714511 109.86707967590333C 278.8295971350237 109.86707967590333 290.2103970180858 78.47648548278809 304.4879968816584 78.47648548278809"
                      },
                      {
                        "d": "M 303.4879968816584 78.47648548278809C 316.76559674523094 78.47648548278809 328.14639662829313 52.3176569885254 342.4239964918657 52.3176569885254"
                      },
                      {
                        "d": "M 341.4239964918657 52.3176569885254C 354.70159635543826 52.3176569885254 366.08239623850045 26.158828494262707 380.359996102073 26.158828494262707"
                      },
                      {
                        "d": "M 379.359996102073 26.158828494262707C 392.6375959656456 26.158828494262707 404.0183958487077 13.079414247131353 418.2959957122803 13.079414247131353"
                      }
                    ],
                    "realIndex": "0"
                  },
                  {
                    "type": "line",
                    "paths": [
                      {
                        "d": "M 0 107.25119682647706C 13.277599863572553 107.25119682647706 24.658399746634743 109.86707967590333 38.9359996102073 109.86707967590333"
                      },
                      {
                        "d": "M 37.9359996102073 109.86707967590333C 51.21359947377985 109.86707967590333 62.59439935684204 102.01943112762451 76.8719992204146 102.01943112762451"
                      },
                      {
                        "d": "M 75.8719992204146 102.01943112762451C 89.14959908398716 102.01943112762451 100.53039896704934 78.47648548278809 114.8079988306219 78.47648548278809"
                      },
                      {
                        "d": "M 113.8079988306219 78.47648548278809C 127.08559869419445 78.47648548278809 138.46639857725663 52.3176569885254 152.7439984408292 52.3176569885254"
                      },
                      {
                        "d": "M 151.7439984408292 52.3176569885254C 165.02159830440175 52.3176569885254 176.40239818746394 128.1782596218872 190.6799980510365 128.1782596218872"
                      },
                      {
                        "d": "M 189.6799980510365 128.1782596218872C 202.95759791460907 128.1782596218872 214.33839779767123 109.86707967590333 228.6159976612438 109.86707967590333"
                      },
                      {
                        "d": "M 227.6159976612438 109.86707967590333C 240.89359752481636 109.86707967590333 252.27439740787855 52.3176569885254 266.5519972714511 52.3176569885254"
                      },
                      {
                        "d": "M 265.5519972714511 52.3176569885254C 278.8295971350237 52.3176569885254 290.2103970180858 78.47648548278809 304.4879968816584 78.47648548278809"
                      },
                      {
                        "d": "M 303.4879968816584 78.47648548278809C 316.76559674523094 78.47648548278809 328.14639662829313 26.158828494262707 342.4239964918657 26.158828494262707"
                      },
                      {
                        "d": "M 341.4239964918657 26.158828494262707C 354.70159635543826 26.158828494262707 366.08239623850045 52.3176569885254 380.359996102073 52.3176569885254"
                      },
                      {
                        "d": "M 379.359996102073 52.3176569885254"
                      }
                    ],
                    "realIndex": "1"
                  }
                ],
                "allSeriesHasEqualX": true,
                "pointsArray": [
                  [
                    [
                      0,
                      122.94649392303467
                    ],
                    [
                      37.9359996102073,
                      120.3306110736084
                    ],
                    [
                      75.8719992204146,
                      112.4829625253296
                    ],
                    [
                      113.8079988306219,
                      99.40354827819824
                    ],
                    [
                      151.7439984408292,
                      104.63531397705079
                    ],
                    [
                      189.6799980510365,
                      128.1782596218872
                    ],
                    [
                      227.6159976612438,
                      112.4829625253296
                    ],
                    [
                      265.5519972714511,
                      109.86707967590333
                    ],
                    [
                      303.4879968816584,
                      78.47648548278809
                    ],
                    [
                      341.4239964918657,
                      52.3176569885254
                    ],
                    [
                      379.359996102073,
                      26.158828494262707
                    ],
                    [
                      417.2959957122803,
                      13.079414247131353
                    ]
                  ],
                  [
                    [
                      0,
                      107.25119682647706
                    ],
                    [
                      37.9359996102073,
                      109.86707967590333
                    ],
                    [
                      75.8719992204146,
                      102.01943112762451
                    ],
                    [
                      113.8079988306219,
                      78.47648548278809
                    ],
                    [
                      151.7439984408292,
                      52.3176569885254
                    ],
                    [
                      189.6799980510365,
                      128.1782596218872
                    ],
                    [
                      227.6159976612438,
                      109.86707967590333
                    ],
                    [
                      265.5519972714511,
                      52.3176569885254
                    ],
                    [
                      303.4879968816584,
                      78.47648548278809
                    ],
                    [
                      341.4239964918657,
                      26.158828494262707
                    ],
                    [
                      379.359996102073,
                      52.3176569885254
                    ],
                    [
                      417.2959957122803,
                      39.238242741394046
                    ]
                  ]
                ],
                "dataLabelsRects": [],
                "lastDrawnDataLabelsIndexes": [],
                "hasNullValues": true,
                "zoomed": false,
                "gridWidth": 417.2959957122803,
                "gridHeight": 130.79414247131348,
                "rotateXLabels": true,
                "defaultLabels": false,
                "yLabelFormatters": [
                  null
                ],
                "LINE_HEIGHT_RATIO": 1.618,
                "xAxisLabelsHeight": 73.20585752868652,
                "xAxisGroupLabelsHeight": 47.73870207214355,
                "xAxisLabelsWidth": 39.62397384643555,
                "yAxisLabelsWidth": 0,
                "scaleX": 1,
                "scaleY": 1,
                "translateX": 57.70400428771973,
                "translateY": 30,
                "translateYAxisX": [
                  24.704004287719727
                ],
                "yAxisWidths": [],
                "translateXAxisY": 9.150732191085815,
                "translateXAxisX": -9.905993461608887,
                "tooltip": {
                  "tooltipUtil": {},
                  "tooltipLabels": {
                    "tooltipUtil": {}
                  },
                  "tooltipPosition": {},
                  "marker": {
                    "tooltipPosition": {}
                  },
                  "intersect": {
                    "isVerticalGroupedRangeBar": false
                  },
                  "axesTooltip": {},
                  "showOnIntersect": false,
                  "showTooltipTitle": true,
                  "fixedTooltip": false,
                  "xaxisTooltip": {},
                  "yaxisTTEls": null,
                  "isBarShared": true,
                  "lastHoverTime": 1705905720550,
                  "xyRatios": {
                    "yRatio": [
                      38.22801163359918
                    ],
                    "invertedYRatio": 11.98190265752617,
                    "zRatio": null,
                    "xRatio": 0.026360185846557572,
                    "invertedXRatio": 0.08410162559391819,
                    "baseLineInvertedY": 0.1,
                    "baseLineY": [
                      0
                    ],
                    "baseLineX": 0
                  },
                  "isXAxisTooltipEnabled": true,
                  "yaxisTooltips": [
                    false
                  ],
                  "allTooltipSeriesGroups": [],
                  "xaxisOffY": 131.79414247131348,
                  "xaxisTooltipText": {},
                  "yaxisOffX": 1,
                  "yaxisTooltip": {},
                  "yaxisTooltipText": [
                    {}
                  ],
                  "xcrosshairsWidth": 1,
                  "ycrosshairs": {
                    "instance": {
                      "_stroke": "#b6b6b6",
                      "_event": null,
                      "dom": {},
                      "type": "line"
                    }
                  },
                  "ycrosshairsHidden": {
                    "instance": {
                      "_stroke": "#b6b6b6",
                      "_event": null,
                      "dom": {},
                      "type": "line"
                    }
                  },
                  "xAxisTicksPositions": [
                    37.9359996102073,
                    75.8719992204146,
                    113.8079988306219,
                    151.7439984408292,
                    189.67999805103648,
                    227.61599766124377,
                    265.55199727145106,
                    303.4879968816584,
                    341.4239964918657,
                    379.359996102073,
                    417.29599571228033,
                    455.23199532248765
                  ],
                  "dataPointsDividedHeight": 10.899511872609457,
                  "dataPointsDividedWidth": 34.77466630935669,
                  "tooltipTitle": {},
                  "legendLabels": {
                    "0": {},
                    "1": {}
                  },
                  "ttItems": [
                    {},
                    {}
                  ],
                  "seriesBound": {
                    "x": 779.3040161132812,
                    "y": 282.6000061035156,
                    "width": 417.2959899902344,
                    "height": 129.7941436767578,
                    "top": 282.6000061035156,
                    "right": 1196.6000061035156,
                    "bottom": 412.39414978027344,
                    "left": 779.3040161132812
                  }
                },
                "series": [
                  [
                    300,
                    400,
                    700,
                    1200,
                    1000,
                    100,
                    700,
                    800,
                    2000,
                    3000,
                    4000,
                    4500
                  ],
                  [
                    900,
                    800,
                    1100,
                    2000,
                    3000,
                    100,
                    800,
                    3000,
                    2000,
                    4000,
                    3000,
                    3500
                  ]
                ],
                "seriesCandleO": [],
                "seriesCandleH": [],
                "seriesCandleM": [],
                "seriesCandleL": [],
                "seriesCandleC": [],
                "seriesRangeStart": [],
                "seriesRangeEnd": [],
                "seriesRange": [],
                "seriesPercent": [
                  [
                    25,
                    33.333333333333336,
                    38.888888888888886,
                    37.5,
                    25,
                    50,
                    46.666666666666664,
                    21.05263157894737,
                    50,
                    42.857142857142854,
                    57.142857142857146,
                    56.25
                  ],
                  [
                    75,
                    66.66666666666667,
                    61.111111111111114,
                    62.5,
                    75,
                    50,
                    53.333333333333336,
                    78.94736842105263,
                    50,
                    57.142857142857146,
                    42.857142857142854,
                    43.75
                  ]
                ],
                "seriesGoals": [
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                  ],
                  [
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null,
                    null
                  ]
                ],
                "seriesX": [
                  [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                  ],
                  null
                ],
                "seriesZ": [
                  [],
                  []
                ],
                "seriesNames": [
                  "Likes",
                  "series-2"
                ],
                "seriesTotals": [
                  18700,
                  24200
                ],
                "seriesLog": [
                  null,
                  null
                ],
                "seriesColors": [
                  null,
                  null
                ],
                "stackedSeriesTotals": [
                  1200,
                  1200,
                  1800,
                  3200,
                  4000,
                  200,
                  1500,
                  3800,
                  4000,
                  7000,
                  7000,
                  8000
                ],
                "seriesXvalues": [
                  [
                    0,
                    37.9359996102073,
                    75.8719992204146,
                    113.8079988306219,
                    151.7439984408292,
                    189.6799980510365,
                    227.6159976612438,
                    265.5519972714511,
                    303.4879968816584,
                    341.4239964918657,
                    379.359996102073,
                    417.2959957122803
                  ],
                  [
                    0,
                    37.9359996102073,
                    75.8719992204146,
                    113.8079988306219,
                    151.7439984408292,
                    189.6799980510365,
                    227.6159976612438,
                    265.5519972714511,
                    303.4879968816584,
                    341.4239964918657,
                    379.359996102073,
                    417.2959957122803
                  ]
                ],
                "seriesYvalues": [
                  [
                    122.94649392303467,
                    120.3306110736084,
                    112.4829625253296,
                    99.40354827819824,
                    104.63531397705079,
                    128.1782596218872,
                    112.4829625253296,
                    109.86707967590333,
                    78.47648548278809,
                    52.3176569885254,
                    26.158828494262707,
                    13.079414247131353
                  ],
                  [
                    107.25119682647706,
                    109.86707967590333,
                    102.01943112762451,
                    78.47648548278809,
                    52.3176569885254,
                    128.1782596218872,
                    109.86707967590333,
                    52.3176569885254,
                    78.47648548278809,
                    26.158828494262707,
                    52.3176569885254,
                    39.238242741394046
                  ]
                ],
                "hasXaxisGroups": false,
                "groups": [],
                "seriesGroups": [],
                "categoryLabels": [
                  "Yanvar",
                  "Fevral",
                  "Mart",
                  "Aprel",
                  "May",
                  "Iyun",
                  "Iyul",
                  "August",
                  "Sentyabr",
                  "Oktyabr",
                  "Noyabr",
                  "Dekabr"
                ],
                "selectionResizeTimer": null,
                "isXNumeric": true,
                "isMultiLineX": false,
                "isMultipleYAxis": false,
                "maxY": 5000,
                "minY": 0,
                "minYArr": [
                  0
                ],
                "maxYArr": [
                  5000
                ],
                "maxX": 12,
                "minX": 1,
                "initialMaxX": 12,
                "initialMinX": 1,
                "maxDate": 0,
                "minDate": 1.7976931348623157e+308,
                "minZ": 1.7976931348623157e+308,
                "maxZ": -1.7976931348623157e+308,
                "minXDiff": 1,
                "yAxisScale": [
                  {
                    "result": [
                      0,
                      1000,
                      2000,
                      3000,
                      4000,
                      5000
                    ],
                    "niceMin": 0,
                    "niceMax": 5000
                  }
                ],
                "xAxisScale": {
                  "result": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11,
                    12
                  ],
                  "niceMin": 1,
                  "niceMax": 12
                },
                "xAxisTicksPositions": [],
                "yLabelsCoords": [
                  {
                    "width": 37.70400428771973,
                    "index": 0
                  }
                ],
                "yTitleCoords": [
                  {
                    "width": 0,
                    "index": 0
                  }
                ],
                "barPadForNumericAxis": 0,
                "padHorizontal": 0,
                "xRange": 11,
                "yRange": [
                  5000
                ],
                "zRange": null,
                "dataPoints": 12,
                "xTickAmount": 10,
                "xyCharts": true,
                "isBarHorizontal": false,
                "chartClass": ".apexchartsR8MKt",
                "comboBarCount": 0,
                "isRangeBar": false,
                "stackedSeriesTotalsByGroups": [],
                "xAxisHeight": 73.20585752868652,
                "yLogRatio": [
                  38.22801163359918
                ],
                "logYRange": [
                  null
                ]
              }
            },
            "publicMethods": [
              "updateOptions",
              "updateSeries",
              "appendData",
              "appendSeries",
              "isSeriesHidden",
              "toggleSeries",
              "showSeries",
              "hideSeries",
              "setLocale",
              "resetSeries",
              "zoomX",
              "toggleDataPointSelection",
              "dataURI",
              "exportToCSV",
              "addXaxisAnnotation",
              "addYaxisAnnotation",
              "addPointAnnotation",
              "clearAnnotations",
              "removeAnnotation",
              "paper",
              "destroy"
            ],
            "eventList": [
              "click",
              "mousedown",
              "mousemove",
              "mouseleave",
              "touchstart",
              "touchmove",
              "touchleave",
              "mouseup",
              "touchend"
            ],
            "animations": {},
            "axes": {},
            "core": {},
            "config": {
              "opts": {}
            },
            "data": {
              "twoDSeriesX": [
                "Yanvar",
                "Fevral",
                "Mart",
                "Aprel",
                "May",
                "Iyun",
                "Iyul",
                "August",
                "Sentyabr",
                "Oktyabr",
                "Noyabr",
                "Dekabr"
              ],
              "coreUtils": {},
              "fallbackToCategory": true,
              "activeSeriesIndex": 0
            },
            "grid": {
              "xaxisLabels": [
                1,
                2,
                3,
                4,
                5,
                6,
                7,
                8,
                9,
                10,
                11,
                12
              ],
              "axesUtils": {},
              "isRangeBar": 0,
              "elg": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elgridLinesH": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elgridLinesV": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              },
              "elGridBorders": {
                "_stroke": "#000000",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "g"
              }
            },
            "graphics": {},
            "coreUtils": {},
            "crosshairs": {},
            "events": {},
            "exports": {},
            "localization": {},
            "options": {
              "yAxis": {
                "show": true,
                "showAlways": false,
                "showForNullSeries": true,
                "opposite": false,
                "reversed": false,
                "logarithmic": false,
                "logBase": 10,
                "forceNiceScale": false,
                "floating": false,
                "labels": {
                  "show": true,
                  "minWidth": 0,
                  "maxWidth": 160,
                  "offsetX": 0,
                  "offsetY": 0,
                  "rotate": 0,
                  "padding": 20,
                  "style": {
                    "colors": [],
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": ""
                  }
                },
                "axisBorder": {
                  "show": false,
                  "color": "#e0e0e0",
                  "width": 1,
                  "offsetX": 0,
                  "offsetY": 0
                },
                "axisTicks": {
                  "show": false,
                  "color": "#e0e0e0",
                  "width": 6,
                  "offsetX": 0,
                  "offsetY": 0
                },
                "title": {
                  "rotate": -90,
                  "offsetY": 0,
                  "offsetX": 0,
                  "style": {
                    "fontSize": "11px",
                    "fontWeight": 900,
                    "cssClass": ""
                  }
                },
                "tooltip": {
                  "enabled": false,
                  "offsetX": 0
                },
                "crosshairs": {
                  "show": true,
                  "position": "front",
                  "stroke": {
                    "color": "#b6b6b6",
                    "width": 1,
                    "dashArray": 0
                  }
                }
              },
              "pointAnnotation": {
                "x": 0,
                "y": null,
                "yAxisIndex": 0,
                "marker": {
                  "size": 4,
                  "fillColor": "#fff",
                  "strokeWidth": 2,
                  "strokeColor": "#333",
                  "shape": "circle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "radius": 2,
                  "cssClass": ""
                },
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "middle",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                },
                "customSVG": {
                  "offsetX": 0,
                  "offsetY": 0
                },
                "image": {
                  "width": 20,
                  "height": 20,
                  "offsetX": 0,
                  "offsetY": 0
                }
              },
              "yAxisAnnotation": {
                "y": 0,
                "y2": null,
                "strokeDashArray": 1,
                "fillColor": "#c2c2c2",
                "borderColor": "#c2c2c2",
                "borderWidth": 1,
                "opacity": 0.3,
                "offsetX": 0,
                "offsetY": 0,
                "width": "100%",
                "yAxisIndex": 0,
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "end",
                  "position": "right",
                  "offsetX": 0,
                  "offsetY": -3,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                }
              },
              "xAxisAnnotation": {
                "x": 0,
                "x2": null,
                "strokeDashArray": 1,
                "fillColor": "#c2c2c2",
                "borderColor": "#c2c2c2",
                "borderWidth": 1,
                "opacity": 0.3,
                "offsetX": 0,
                "offsetY": 0,
                "label": {
                  "borderColor": "#c2c2c2",
                  "borderWidth": 1,
                  "borderRadius": 2,
                  "textAnchor": "middle",
                  "orientation": "vertical",
                  "position": "top",
                  "offsetX": 0,
                  "offsetY": 0,
                  "style": {
                    "background": "#fff",
                    "fontSize": "11px",
                    "fontWeight": 400,
                    "cssClass": "",
                    "padding": {
                      "left": 5,
                      "right": 5,
                      "top": 2,
                      "bottom": 2
                    }
                  }
                }
              },
              "text": {
                "x": 0,
                "y": 0,
                "text": "",
                "textAnchor": "start",
                "fontSize": "13px",
                "fontWeight": 400,
                "appendTo": ".apexcharts-annotations",
                "backgroundColor": "transparent",
                "borderColor": "#c2c2c2",
                "borderRadius": 0,
                "borderWidth": 0,
                "paddingLeft": 4,
                "paddingRight": 4,
                "paddingTop": 2,
                "paddingBottom": 2
              }
            },
            "responsive": {},
            "series": {
              "legendInactiveClass": "legend-mouseover-inactive"
            },
            "theme": {
              "isColorFn": false,
              "isHeatmapDistributed": false,
              "isBarDistributed": false
            },
            "formatters": {
              "tooltipKeyFormat": "dd MMM"
            },
            "titleSubtitle": {},
            "legend": {
              "isBarsDistributed": false,
              "legendHelpers": {}
            },
            "toolbar": {
              "ev": {},
              "selectedClass": "apexcharts-selected",
              "minX": 1,
              "maxX": 12
            },
            "tooltip": {
              "tooltipUtil": {},
              "tooltipLabels": {
                "tooltipUtil": {}
              },
              "tooltipPosition": {},
              "marker": {
                "tooltipPosition": {}
              },
              "intersect": {
                "isVerticalGroupedRangeBar": false
              },
              "axesTooltip": {},
              "showOnIntersect": false,
              "showTooltipTitle": true,
              "fixedTooltip": false,
              "xaxisTooltip": null,
              "yaxisTTEls": null,
              "isBarShared": true,
              "lastHoverTime": 1705905720550
            },
            "dimensions": {
              "lgRect": {
                "x": 721.6000366210938,
                "y": 480.6000061035156,
                "height": 16,
                "width": 500
              },
              "yAxisWidth": 42.70400428771973,
              "yAxisWidthLeft": 42.70400428771973,
              "yAxisWidthRight": 0,
              "xAxisHeight": 73.20585752868652,
              "isSparkline": false,
              "dimHelpers": {},
              "dimYAxis": {},
              "dimXAxis": {},
              "dimGrid": {},
              "lgWidthForSideLegends": 0,
              "xPadRight": 0,
              "xPadLeft": 0,
              "xAxisWidth": 39.62397384643555
            },
            "updateHelpers": {},
            "zoomPanSelection": {
              "selectedClass": "apexcharts-selected",
              "minX": 1,
              "maxX": 12,
              "dragged": false,
              "graphics": {},
              "eventList": [
                "mousedown",
                "mouseleave",
                "mousemove",
                "touchstart",
                "touchmove",
                "mouseup",
                "touchend"
              ],
              "clientX": 0,
              "clientY": 0,
              "startX": 0,
              "endX": 0,
              "dragX": 0,
              "startY": 0,
              "endY": 0,
              "dragY": 0,
              "moveDirection": "none",
              "zoomRect": {
                "_stroke": "none",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "rect"
              },
              "selectionRect": {
                "_stroke": "none",
                "_event": null,
                "dom": {},
                "node": {},
                "type": "rect",
                "_memory": {
                  "_draggable": {
                    "constraint": {
                      "minX": 0,
                      "minY": 0,
                      "maxX": 417.2959957122803,
                      "maxY": 130.79414247131348
                    },
                    "value": true
                  }
                }
              }
            },
            "pie": {
              "chartType": "line",
              "initialAnim": false,
              "dynamicAnim": false,
              "animBeginArr": [
                0
              ],
              "animDur": 0,
              "defaultSize": 130.79414247131348,
              "centerY": 65.39707123565674,
              "centerX": 208.64799785614014,
              "fullAngle": 360,
              "initialAngle": 0,
              "donutSize": 35.62131346651403,
              "maxY": 0,
              "sliceLabels": [],
              "sliceSizes": [],
              "prevSectorAngleArr": []
            },
            "rangeBar": {
              "isHorizontal": false,
              "strokeWidth": 5,
              "isNullValue": false,
              "isRangeBar": 0,
              "isVerticalGroupedRangeBar": 0,
              "isFunnel": false,
              "xRatio": 0.026360185846557572,
              "invertedXRatio": 0.08410162559391819,
              "invertedYRatio": 11.98190265752617,
              "baseLineInvertedY": 0.1,
              "yaxisIndex": 0,
              "seriesLen": 0,
              "pathArr": [],
              "lastActiveBarSerieIndex": 1,
              "stackedSeriesTotals": [
                1200,
                1200,
                1800,
                3200,
                4000,
                200,
                1500,
                3800,
                4000,
                7000,
                7000,
                8000
              ],
              "barHelpers": {}
            },
            "annotations": {
              "graphics": {},
              "helpers": {},
              "xAxisAnnotations": {
                "helpers": {}
              },
              "yAxisAnnotations": {
                "helpers": {}
              },
              "pointsAnnotations": {
                "helpers": {}
              },
              "xDivision": 34.77466630935669
            }
          }
        }
      ]
    }
  }
}
</script>