export const CY_STYLES = [
  {
  "selector": "core",
  "css": {
    "active-bg-opacity": 0,

    "selection-box-color": "#11bf1c",
    "selection-box-opacity": 0.25,
    "selection-box-border-color": "#aaa",
    "selection-box-border-width": 1
  }}, {
  "selector": ":parent",
  "css":{
    "background-opacity": 0.333,
    "z-compound-depth": "bottom",
    "border-width":"1",
    "border-color":"#888",
    "border-style":"dotted",
    "padding-top": "10px",
    "padding-left": "10px",
    "padding-bottom": "10px",
    "padding-right": "10px",
    "text-valign": "top",
    "text-halign": "center",
    "background-color": "#B8BdB1"
  }},

  {
  "selector": "node",
  "css": {
    "width": 16,    //function(e){ return 20 / e._private.cy._private.zoom; },
    "height": 16,   //function(e){ return 20 / e._private.cy._private.zoom; },
    "border-width": 1,
    "border-color": "#FFFFFF",
    // "background-color": function(e){ return e.scratch('_color'); }
  }},{
  "selector": "node:selected",
  "css": {
    "border-width": 4,
    "background-color": "#FFFFFF",   // not working, why??
    "z-index": 9,
    // "border-color": function(e){ return e.scratch('_color'); },
  }},{
  "selector": "node.highlighted",
  "css": {
    "border-width": 4,
    "background-color": "#FFFFFF",
    "z-index": 9,
    // "border-color": function(e){ return e.scratch('_color'); },
  }},{
  "selector": "node:locked",
  "css": {
    "border-color": "#d64937",
    "border-width": 3,
    "background-color": "#d64937"
  }}, {
  "selector": "node.expanded",
  "css": {
    "opacity": 0.6,
    "border-color": "black",
    "border-width": 1,
  }}, {
  "selector": "node.caption",
  "css": {
    'content': 'data(id)',
    'text-wrap': 'wrap',
    'text-max-width': '80px',
    'text-opacity': 0.6,
    'font-weight': 400,
    'font-size': 10
  }}, {
  "selector": "node.icon",
  "css": {
    // "border-width": 0,
    "background-fit": "contain",  // none, contain, cover
    "background-clip": "none",    // none, node
    "background-width": 16,
    "background-height": 16,
    "background-opacity": 0,
    // "background-image": function(e){ return 'assets/icons/'+e.scratch('_icon').path; }
  }}, {
  "selector": "node.seed-semi",
  "css": {
    "border-width": 6,
    "width": 32,
    "height": 32,
  }}, {
  "selector": "node.seed",
  "css": {
    "z-index": 9999,
    "border-color": "#e600e6",
    "border-width": 6,
    "width": 32,
    "height": 32,
  }}, {
  "selector": "node.gcunit",
  "css": {
    "border-style": "double",
    "border-color": "#a9a9a9",
  }},

  {
  "selector": "edge",
  "css": {
    "width": 1,
    "opacity": 0.5,
    "arrow-scale": 0.7,
    "curve-style": "bezier",
    "target-arrow-shape": "vee",
    "source-arrow-shape": "none",
    "line-fill": "linear-gradient",
    "line-gradient-stop-positions": "50%",
    "line-style": "solid",
    // "target-arrow-color": function(e){ return e.scratch('_color')[1]; },
    // "line-gradient-stop-colors": function(e){ return e.scratch('_color'); }
  }}, {
  "selector": "edge:selected",
  "css": {
    "width": 3,
    "target-arrow-shape": "triangle",
    "opacity": 0.8,
    "z-index": 9
  }}, {
  "selector": "edge.highlighted",
  "css": {
    "width": 3,
    "target-arrow-shape": "triangle",
    "opacity": 0.8,
    "z-index": 9
  }}, {
  "selector": "edge.gclink",
  "css": {
    "line-style": "dashed",
    "opacity": 1
  }},

  {
  "selector": "node.faded",
  "css": {
    "opacity": 0.08
  }},{
  "selector": "edge.faded",
  "css": {
    "opacity": 0.05
  }},{
    "selector": ".hidden",
  "css": {
    "display": "none"
  }},{
  "selector": ".traveled",
  "css": {
    "background-color": "#11bf1c",
    "line-color": "#11bf1c",
    "target-arrow-color": "black",
    "transition-property": "background-color, line-color, target-arrow-color",
    "transition-duration": "0.2s"
  }},{
  "selector": ".eh-handle",
  "css": {
    "background-color": "red",
    "width": 12,
    "height": 12,
    "shape": "ellipse",
    "overlay-opacity": 0,
    "border-width": 12,
    "border-opacity": 0
  }},{
  "selector": ".eh-hover",
  "css": {
    "background-color": "red"
  }},{
  "selector": ".eh-source",
  "css": {
    "border-width": 2,
    "border-color": "red"
  }},{
  "selector": ".eh-target",
  "css": {
    "border-width": 2,
    "border-color": "red"
  }},{
  "selector": ".eh-preview, .eh-ghost-edge",
  "css": {
    "background-color": "red",
    "line-color": "red",
    "target-arrow-color": "red",
    "source-arrow-color": "red"
  }},{
  "selector": ".eh-ghost-edge.eh-preview-active",
  "css": {
    "opacity": 0
  }},

  {"selector": ".invisible",  "style":{ "display": "none" }},   // none or element

  //////////////////////////////////////////////////////////////////////

  {"selector": "node.label0",  "style":{ "background-color": "#0e2134" }},
  {"selector": "node.label1",  "style":{ "background-color": "#1898d7" }},
  {"selector": "node.label2",  "style":{ "background-color": "#1d5b6d" }},
  {"selector": "node.label3",  "style":{ "background-color": "#479325" }},
  {"selector": "node.label4",  "style":{ "background-color": "#8dc99d" }},
  {"selector": "node.label5",  "style":{ "background-color": "#505142" }},
  {"selector": "node.label6",  "style":{ "background-color": "#d4c585" }},
  {"selector": "node.label7",  "style":{ "background-color": "#ffbd5d" }},
  {"selector": "node.label8",  "style":{ "background-color": "#cb234b" }},
  {"selector": "node.label9",  "style":{ "background-color": "#b95f3b" }},

  {"selector": "node.label10", "style":{ "background-color": "#1b3f84" }},
  {"selector": "node.label11", "style":{ "background-color": "#3d9ad6" }},
  {"selector": "node.label12", "style":{ "background-color": "#224a50" }},
  {"selector": "node.label13", "style":{ "background-color": "#80ab21" }},
  {"selector": "node.label14", "style":{ "background-color": "#008c6d" }},
  {"selector": "node.label15", "style":{ "background-color": "#726e4b" }},
  {"selector": "node.label16", "style":{ "background-color": "#eeca58" }},
  {"selector": "node.label17", "style":{ "background-color": "#f4b034" }},
  {"selector": "node.label18", "style":{ "background-color": "#7a2f4c" }},
  {"selector": "node.label19", "style":{ "background-color": "#f1632c" }},

  {"selector": "node.label20", "style":{ "background-color": "#005aa8" }},
  {"selector": "node.label21", "style":{ "background-color": "#66b7e6" }},
  {"selector": "node.label22", "style":{ "background-color": "#3d4c36" }},
  {"selector": "node.label23", "style":{ "background-color": "#b5d56e" }},
  {"selector": "node.label24", "style":{ "background-color": "#005a3f" }},
  {"selector": "node.label25", "style":{ "background-color": "#a09857" }},
  {"selector": "node.label26", "style":{ "background-color": "#fdd656" }},
  {"selector": "node.label27", "style":{ "background-color": "#e34a69" }},
  {"selector": "node.label28", "style":{ "background-color": "#9e423d" }},
  {"selector": "node.label29", "style":{ "background-color": "#f27148" }},

  {"selector": "node.label30", "style":{ "background-color": "#5c7bbb" }},
  {"selector": "node.label31", "style":{ "background-color": "#0085ae" }},
  {"selector": "node.label32", "style":{ "background-color": "#1d4c14" }},
  {"selector": "node.label33", "style":{ "background-color": "#a1d09e" }},
  {"selector": "node.label34", "style":{ "background-color": "#426b61" }},
  {"selector": "node.label35", "style":{ "background-color": "#a39778" }},
  {"selector": "node.label36", "style":{ "background-color": "#ffe55b" }},
  {"selector": "node.label37", "style":{ "background-color": "#d2103d" }},
  {"selector": "node.label38", "style":{ "background-color": "#744f43" }},
  {"selector": "node.label39", "style":{ "background-color": "#f7883e" }},

  //////////////////////////////////////////////////////////////////////

];

export const CY_PANZOOM = {
  zoomFactor: 0.05, // zoom factor per zoom tick
  zoomDelay: 45, // how many ms between zoom ticks
  minZoom: 0.01, // min zoom level
  maxZoom: 10, // max zoom level
  fitPadding: 50, // padding when fitting
  panSpeed: 10, // how many ms in between pan ticks
  panDistance: 10, // max pan distance per tick
  panDragAreaSize: 75, // the length of the pan drag box in which the vector for panning is calculated (bigger = finer control of pan speed and direction)
  panMinPercentSpeed: 0.25, // the slowest speed we can pan by (as a percent of panSpeed)
  panInactiveArea: 3, // radius of inactive area in pan drag box
  panIndicatorMinOpacity: 0.5, // min opacity of pan indicator (the draggable nib); scales from this to 1.0
  autodisableForMobile: true, // disable the panzoom completely for mobile (since we don't really need it with gestures like pinch to zoom)
  // additional
  zoomOnly: false, // a minimal version of the ui only with zooming (useful on systems with bad mousewheel resolution)
  fitSelector: undefined, // selector of elements to fit
  animateOnFit: function(){ // whether to animate on fit
    return false;
  },
  // icon class names
  sliderHandleIcon: 'fa fa-minus',
  zoomInIcon: 'fa fa-plus',
  zoomOutIcon: 'fa fa-minus',
  resetIcon: 'fa fa-expand'
};

// http://there4.io/2012/05/02/google-chart-color-list/
export const PALETTE_BASE = [
  '3366CC',   // vVertexColor = vec4(51.0/255.0, 102.0/255.0, 204.0/255.0, globalAlpha);
  'DC3912',   // vVertexColor = vec4(220.0/255.0, 57.0/255.0, 18.0/255.0, globalAlpha);
  'FF9900',   // vVertexColor = vec4(255.0/255.0, 153.0/255.0, 0.0/255.0, globalAlpha);
  '109618',   // vVertexColor = vec4(16.0/255.0, 150.0/255.0, 24.0/255.0, globalAlpha);
  '990099',   // vVertexColor = vec4(153.0/255.0, 0.0/255.0, 153.0/255.0, globalAlpha);
  '3B3EAC',   // vVertexColor = vec4(59.0/255.0, 62.0/255.0, 172.0/255.0, globalAlpha);
  '0099C6',   // vVertexColor = vec4(0.0/255.0, 153.0/255.0, 198.0/255.0, globalAlpha);
  'DD4477',   // vVertexColor = vec4(221.0/255.0, 68.0/255.0, 119.0/255.0, globalAlpha);
  '66AA00',
  'B82E2E',
  '316395',
  '994499',
  '22AA99',
  'AAAA11',
  '6633CC',
  'E67300',
  '8B0707',
  '329262',
  '5574A6',
  '3B3EAC'
];

export const PALETTE_DARK = [
  '#0e2134',   // vVertexColor = vec4(14.0/255.0, 33.0/255.0, 52.0/255.0, globalAlpha);
  '#1898d7',   // vVertexColor = vec4(24.0/255.0, 152.0/255.0, 215.0/255.0, globalAlpha);
  '#1d5b6d',   // vVertexColor = vec4(29.0/255.0, 91.0/255.0, 109.0/255.0, globalAlpha);
  '#479325',   // vVertexColor = vec4(71.0/255.0, 147.0/255.0, 37.0/255.0, globalAlpha);
  '#8dc99d',   // vVertexColor = vec4(141.0/255.0, 201.0/255.0, 157.0/255.0, globalAlpha);
  '#505142',   // vVertexColor = vec4(80.0/255.0, 81.0/255.0, 66.0/255.0, globalAlpha);
  '#d4c585',   // vVertexColor = vec4(212.0/255.0, 197.0/255.0, 133.0/255.0, globalAlpha);
  '#ffbd5d',   // vVertexColor = vec4(225.0/255.0, 189.0/255.0, 93.0/255.0, globalAlpha);
  '#cb234b',   // vVertexColor = vec4(203.0/255.0, 35.0/255.0, 75.0/255.0, globalAlpha);
  '#b95f3b',   // vVertexColor = vec4(185.0/255.0, 95.0/255.0, 59.0/255.0, globalAlpha);

  '#1b3f84',   // vVertexColor = vec4(27.0/255.0, 63.0/255.0, 132.0/255.0, globalAlpha);
  '#3d9ad6',   // vVertexColor = vec4(61.0/255.0, 154.0/255.0, 214.0/255.0, globalAlpha);
  '#224a50',   // vVertexColor = vec4(34.0/255.0, 74.0/255.0, 80.0/255.0, globalAlpha);
  '#80ab21',   // vVertexColor = vec4(128.0/255.0, 171.0/255.0, 33.0/255.0, globalAlpha);
  '#008c6d',   // vVertexColor = vec4(0.0, 140.0/255.0, 109.0/255.0, globalAlpha);
  '#726e4b',   // vVertexColor = vec4(114.0/255.0, 110.0/255.0, 75.0/255.0, globalAlpha);
  '#eeca58',   // vVertexColor = vec4(238.0/255.0, 202.0/255.0, 88.0/255.0, globalAlpha);
  '#f4b034',   // vVertexColor = vec4(244.0/255.0, 176.0/255.0, 52.0/255.0, globalAlpha);
  '#7a2f4c',   // vVertexColor = vec4(122.0/255.0, 47.0/255.0, 76.0/255.0, globalAlpha);
  '#f1632c',   // vVertexColor = vec4(241.0/255.0, 99.0/255.0, 44.0/255.0, globalAlpha);

  '#005aa8',   // vVertexColor = vec4(0.0, 90.0/255.0, 168.0/255.0, globalAlpha);
  '#66b7e6',   // vVertexColor = vec4(102.0/255.0, 183.0/255.0, 230.0/255.0, globalAlpha);
  '#3d4c36',   // vVertexColor = vec4(61.0/255.0, 76.0/255.0, 54.0/255.0, globalAlpha);
  '#b5d56e',   // vVertexColor = vec4(181.0/255.0, 213.0/255.0, 110.0/255.0, globalAlpha);
  '#005a3f',   // vVertexColor = vec4(0.0, 90.0/255.0, 63.0/255.0, globalAlpha);
  '#a09857',   // vVertexColor = vec4(160.0/255.0, 152.0/255.0, 87.0/255.0, globalAlpha);
  '#fdd656',   // vVertexColor = vec4(253.0/255.0, 214.0/255.0, 86.0/255.0, globalAlpha);
  '#e34a69',   // vVertexColor = vec4(227.0/255.0, 74.0/255.0, 105.0/255.0, globalAlpha);
  '#9e423d',   // vVertexColor = vec4(158.0/255.0, 66.0/255.0, 61.0/255.0, globalAlpha);
  '#f27148',   // vVertexColor = vec4(242.0/255.0, 113.0/255.0, 72.0/255.0, globalAlpha);

  '#5c7bbb',   // vVertexColor = vec4(92.0/255.0, 123.0/255.0, 187.0/255.0, globalAlpha);
  '#0085ae',   // vVertexColor = vec4(0.0, 133.0/255.0, 174.0/255.0, globalAlpha);
  '#1d4c14',   // vVertexColor = vec4(29.0/255.0, 76.0/255.0, 20.0/255.0, globalAlpha);
  '#a1d09e',   // vVertexColor = vec4(161.0/255.0, 208.0/255.0, 158.0/255.0, globalAlpha);
  '#426b61',   // vVertexColor = vec4(66.0/255.0, 107.0/255.0, 97.0/255.0, globalAlpha);
  '#a39778',   // vVertexColor = vec4(163.0/255.0, 151.0/255.0, 120.0/255.0, globalAlpha);
  '#ffe55b',   // vVertexColor = vec4(255.0/255.0, 229.0/255.0, 91.0/255.0, globalAlpha);
  '#d2103d',   // vVertexColor = vec4(210.0/255.0, 16.0/255.0, 61.0/255.0, globalAlpha);
  '#744f43',   // vVertexColor = vec4(116.0/255.0, 79.0/255.0, 67.0/255.0, globalAlpha);
  '#f7883e'    // vVertexColor = vec4(247.0/255.0, 136.0/255.0, 62.0/255.0, globalAlpha);
];

export const PALETTE_BRIGHT = [
  '#20364b',
  '#2cb1ec',
  '#317487',
  '#5fac3a',
  '#a6dfb6',
  '#696a5a',
  '#e9db9e',
  '#ffd476',
  '#e13863',
  '#d07852',

  '#2f579d',
  '#54b3eb',
  '#376269',
  '#9ac336',
  '#10a587',
  '#8c8863',
  '#ffe071',
  '#f5c84b',
  '#944564',
  '#f37c42',

  '#1073c0',
  '#7fcef9',
  '#55644d',
  '#ccea88',
  '#107357',
  '#b9b170',
  '#ffeb6f',
  '#f66282',
  '#b75a55',
  '#f48b60',

  '#7595d2',
  '#109ec6',
  '#316527',
  '#bae5b7',
  '#5a847a',
  '#bbb092',
  '#fff874',
  '#e72355',
  '#8e685b',
  '#f8a156',
];

export const ICON_PREFIX ='assets/icons/';
export const PALETTE_ICON=[
  { "name": "ban", "path":"ban-solid.png" }
  ,{ "name": "address-book", "path":"address-book-solid.png" }
  ,{ "name": "angry", "path":"angry-regular.png" }
  ,{ "name": "archive", "path":"archive-solid.png" }
  ,{ "name": "at", "path":"at-solid.png" }
  ,{ "name": "balance-scale", "path":"balance-scale-solid.png" }
  ,{ "name": "bath", "path":"bath-solid.png" }
  ,{ "name": "bed", "path":"bed-solid.png" }
  ,{ "name": "bell", "path":"bell-solid.png" }
  ,{ "name": "birthday-cake", "path":"birthday-cake-solid.png" }
  ,{ "name": "bolt", "path":"bolt-solid.png" }
  ,{ "name": "bomb", "path":"bomb-solid.png" }
  ,{ "name": "book", "path":"book-solid.png" }
  ,{ "name": "bug", "path":"bug-solid.png" }
  ,{ "name": "building", "path":"building-solid.png" }
  ,{ "name": "bullhorn", "path":"bullhorn-solid.png" }
  ,{ "name": "bus", "path":"bus-solid.png" }
  ,{ "name": "calculator", "path":"calculator-solid.png" }
  ,{ "name": "calendar-alt", "path":"calendar-alt-solid.png" }
  ,{ "name": "camera", "path":"camera-solid.png" }
  ,{ "name": "car", "path":"car-solid.png" }
  ,{ "name": "chart-area", "path":"chart-area-solid.png" }
  ,{ "name": "clock", "path":"clock-solid.png" }
  ,{ "name": "cloud-showers-heavy", "path":"cloud-showers-heavy-solid.png" }
  ,{ "name": "cloud", "path":"cloud-solid.png" }
  ,{ "name": "code", "path":"code-solid.png" }
  ,{ "name": "comment-dots", "path":"comment-dots-solid.png" }
  ,{ "name": "compass", "path":"compass-solid.png" }
  ,{ "name": "credit-card", "path":"credit-card-regular.png" }
  ,{ "name": "database", "path":"database-solid.png" }
  ,{ "name": "dollar-sign", "path":"dollar-sign-solid.png" }
  ,{ "name": "download", "path":"download-solid.png" }
  ,{ "name": "drafting-compass", "path":"drafting-compass-solid.png" }
  ,{ "name": "envelope", "path":"envelope-solid.png" }
  ,{ "name": "euro-sign", "path":"euro-sign-solid.png" }
  ,{ "name": "exclamation-circle", "path":"exclamation-circle-solid.png" }
  ,{ "name": "fingerprint", "path":"fingerprint-solid.png" }
  ,{ "name": "fire-alt", "path":"fire-alt-solid.png" }
  ,{ "name": "flask", "path":"flask-solid.png" }
  ,{ "name": "folder", "path":"folder-solid.png" }
  ,{ "name": "frown", "path":"frown-regular.png" }
  ,{ "name": "gift", "path":"gift-solid.png" }
  ,{ "name": "grin-beam", "path":"grin-beam-regular.png" }
  ,{ "name": "hammer", "path":"hammer-solid.png" }
  ,{ "name": "handshake", "path":"handshake-solid.png" }
  ,{ "name": "hdd", "path":"hdd-solid.png" }
  ,{ "name": "headphones", "path":"headphones-solid.png" }
  ,{ "name": "home", "path":"home-solid.png" }
  ,{ "name": "hospital-alt", "path":"hospital-alt-solid.png" }
  ,{ "name": "image", "path":"image-solid.png" }
  ,{ "name": "industry", "path":"industry-solid.png" }
  ,{ "name": "key", "path":"key-solid.png" }
  ,{ "name": "lightbulb", "path":"lightbulb-solid.png" }
  ,{ "name": "lock", "path":"lock-solid.png" }
  ,{ "name": "magic", "path":"magic-solid.png" }
  ,{ "name": "map-marked-alt", "path":"map-marked-alt-solid.png" }
  ,{ "name": "meh", "path":"meh-regular.png" }
  ,{ "name": "microphone", "path":"microphone-solid.png" }
  ,{ "name": "palette", "path":"palette-solid.png" }
  ,{ "name": "paper-plane", "path":"paper-plane-solid.png" }
  ,{ "name": "pen", "path":"pen-solid.png" }
  ,{ "name": "plane", "path":"plane-solid.png" }
  ,{ "name": "play-circle", "path":"play-circle-solid.png" }
  ,{ "name": "plug", "path":"plug-solid.png" }
  ,{ "name": "poll", "path":"poll-solid.png" }
  ,{ "name": "pound-sign", "path":"pound-sign-solid.png" }
  ,{ "name": "power-off", "path":"power-off-solid.png" }
  ,{ "name": "radiation", "path":"radiation-solid.png" }
  ,{ "name": "robot", "path":"robot-solid.png" }
  ,{ "name": "rss", "path":"rss-solid.png" }
  ,{ "name": "ruler", "path":"ruler-solid.png" }
  ,{ "name": "school", "path":"school-solid.png" }
  ,{ "name": "sd-card", "path":"sd-card-solid.png" }
  ,{ "name": "server", "path":"server-solid.png" }
  ,{ "name": "shield-alt", "path":"shield-alt-solid.png" }
  ,{ "name": "shopping-cart", "path":"shopping-cart-solid.png" }
  ,{ "name": "sitemap", "path":"sitemap-solid.png" }
  ,{ "name": "space-shuttle", "path":"space-shuttle-solid.png" }
  ,{ "name": "stethoscope", "path":"stethoscope-solid.png" }
  ,{ "name": "store", "path":"store-solid.png" }
  ,{ "name": "subway", "path":"subway-solid.png" }
  ,{ "name": "sun", "path":"sun-solid.png" }
  ,{ "name": "tag", "path":"tag-solid.png" }
  ,{ "name": "thumbs-down", "path":"thumbs-down-regular.png" }
  ,{ "name": "thumbs-up", "path":"thumbs-up-regular.png" }
  ,{ "name": "thumbtack", "path":"thumbtack-solid.png" }
  ,{ "name": "tools", "path":"tools-solid.png" }
  ,{ "name": "tree", "path":"tree-solid.png" }
  ,{ "name": "umbrella", "path":"umbrella-solid.png" }
  ,{ "name": "unlock-alt", "path":"unlock-alt-solid.png" }
  ,{ "name": "upload", "path":"upload-solid.png" }
  ,{ "name": "video", "path":"video-solid.png" }
  ,{ "name": "wallet", "path":"wallet-solid.png" }
  ,{ "name": "wheelchair", "path":"wheelchair-solid.png" }
  ,{ "name": "wifi", "path":"wifi-solid.png" }
  ,{ "name": "yen-sign", "path":"yen-sign-solid.png" }
];