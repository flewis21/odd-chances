var doGet = function (e) {
  const Route = {};
  Route.path = function (route, callback) {
    Route[route] = callback;
  };
  Route.path("default", boilerplate.breakthrough);
  return Route["default"](e);
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
