/* ================================
   GeoSpatial Studio App Logic
   ================================ */

let map;
let polygons = [];
let points = [];
let geocoder;
let drawingManager;

/* ---- Map Init ---- */
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.9, lng: -117.2 },
    zoom: 10,
    gestureHandling: "greedy",
    streetViewControl: false,
    mapTypeControl: false
  });

  geocoder = new google.maps.Geocoder();
  initDrawingManager();
}

/* ---- Drawing Manager ---- */
function initDrawingManager() {
  drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: null,
    drawingControl: false,
    polygonOptions: {
      fillColor: "#3b82f6",
      fillOpacity: 0.18,
      strokeWeight: 2,
      strokeColor: "#3b82f6",
      editable: true
    }
  });

  drawingManager.setMap(map);
}

/* ---- Bootstrap ---- */
window.addEventListener("load", () => {
  if (window.google && window.google.maps) {
    initMap();
  } else {
    console.error("Google Maps failed to load.");
  }
});
