import { Spec } from 'vega';

export const spec: Spec = {
  "$schema": "https://vega.github.io/schema/vega/v5.json",
  "width": 300,
  "height": 400,
  "padding": 5,
  "marks": [
    {
      "type": "rect",
      "encode": {
        "update": {
          "x": { "value": 0 },
          "y": { "value": 0 },
          "width": { "value": 50 },
          "height": { "signal": "height" },
          "fill": { "value": "#1f77b4" },
          "cornerRadius": { "value": 10 }
        }
      }
    },
    {
      "type": "rect",
      "encode": {
        "update": {
          "x": { "value": 60 },
          "y": { "value": 0 },
          "width": { "value": 50 },
          "height": { "signal": "height" },
          "fill": { "value": "#1f77b4" },
          "cornerRadius": { "value": { "top": 10 } }
        }
      }
    },
    {
      "type": "rect",
      "encode": {
        "update": {
          "x": { "value": 120 },
          "y": { "value": 0 },
          "width": { "value": 50 },
          "height": { "signal": "height" },
          "fill": { "value": "#1f77b4" },
          "cornerRadius": { "value": { "top": 100, "bottom": 10 } }
        }
      }
    },
    {
      "type": "rect",
      "encode": {
        "update": {
          "x": { "value": 180 },
          "y": { "value": 0 },
          "width": { "value": 100 },
          "height": { "signal": "height" },
          "fill": { "value": "#1f77b4" },
          "cornerRadius": { "value": { "topLeft": 10, "topRight": 20, "bottomLeft": 40, "bottomRight": 30 } }
        }
      }
    },
    {
      "type": "rect",
      "encode": {
        "update": {
          "x": { "value": 290 },
          "y": { "value": 0 },
          "width": { "value": 110 },
          "height": { "signal": "height" },
          "fill": { "value": "#1f77b4" },
          "cornerRadius": { "value": { "all": 20, "bottomRight": 0 } }
        }
      }
    }
  ]
};
