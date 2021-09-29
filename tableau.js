function initViz() {
  var containerDiv = document.getElementById("vizContainer"),
    // url = "https://YOUR-SERVER/views/YOUR-VISUALIZATION";
    url =
      "https://public.tableau.com/views/KitchenMonitor/STWOfficeTraffic?:showVizHome=no";

  var viz = new tableau.Viz(containerDiv, url);
}

initViz();
