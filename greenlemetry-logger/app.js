(function () {
  ("use strict()"); // show errors

  const STORAGE_KEY = "agrosens_telemetry_records_v1";

  // Load DOM elements into JS objects
  const dataForm = document.getElementById("data-form");
  const errorBanner = document.getElementById("form-error-banner");
  const bayCards = document.getElementById("bay-cards");
  const bayCount = document.getElementById("bay-count");
  const emptyState = document.getElementById("empty-state");
  const deleteData = document.getElementById("delete-data");

  // Load input fields into JS objects
  const bayNumber = document.getElementById("bay-number");
  const phLevel = document.getElementById("ph-Level");
  const conductivity = document.getElementById("conductivity");
  const airTemp = document.getElementById("air-temp");
  const humidity = document.getElementById("humidity");
});
