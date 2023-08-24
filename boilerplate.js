var tempCode = function (e) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("default", boilerplate.breakthrough);
  return Route["default"](e);
};

var doGet = function (e) {
  var foobarr = e.parameter["func"] || "renderFile";
  var libName = "boilerplate";
  var libFunc = foobarr;
  var rndPage = [
    `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
  ]
    .toString()
    .split(" ")[
    Math.floor(
      Math.random() *
        Math.floor(
          [
            `index proMedia epaWebsite callBack oddChances jsGame checkOnDay uiAccess popUpOpen congressLeg congressMembers jFundamentals gnuFree myGNUFreeJS`,
          ]
            .toString()
            .split(" ").length,
        ),
    )
  ];
  args = e.parameter["args"] || ["jFundamentals"];
  return renderTemplate(
    this[libName].contentApp(`<?!= appL ?>`, {
      appL: this[libName][
        foobarr ||
          HtmlService.createHtmlOutput(
            `
              <script>
                document.getElementById("appList").value
              </script>
              `,
          ).getContent()
      ].apply(this, [
        args ||
          HtmlService.createHtmlOutput(
            `
              <script>
                document.getElementById("username").value
              </script>
              `,
          ).getContent(),
      ]),
    }),
    { e: e },
  );
};

var runBoilerplate = function (func, args) {
  var libName = "boilerplate";
  var libFunc = func || "doGet";
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};

var runAll = function (func, args) {
  var arr = func.split(".");
  var libName = arr[0];
  var libFunc = arr[1];
  args = args || [];
  return this[libName][libFunc].apply(this, args);
};

function createNewRecord() {
  return boilerplate.createNewRecord();
}

function saveRecord() {
  return boilerplate.saveRecord();
}

function searchRecords() {
  return boilerplate.searchRecords();
}

var ssGetSheetBySpreadsheetUrl = function (url, sheetname) {
  return boilerplate.ssGetSheetBySpreadsheetUrl(url, sheetname);
};

FormApp.getActiveForm();
