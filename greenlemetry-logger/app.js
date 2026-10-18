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

  // Initialize state
  let records = loadRecords();

  // Initial UI render
  render();

  // STORAGE OPERATIONS

  // READ ops
  function readRecords() {
    try {
      // Connect to data store
      const store = localStorage.getItem(STORAGE_KEY);

      // Was anything returned?
      return store ? JSON.parse(store) : [];
    } catch (error) {
      console.error("Could not retrieve data from local storage.");
    }
  }

  function writeRecords() {
    try {
      // Write to data store
      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
    } catch (error) {
      console.error("Could not save data to your data store.");
    }
  }
});
