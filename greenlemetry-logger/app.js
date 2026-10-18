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
  const inputBayNumber = document.getElementById("bay-number");
  const inputPhLevel = document.getElementById("ph-Level");
  const inputConductivity = document.getElementById("conductivity");
  const inputAirTemp = document.getElementById("air-temp");
  const inputHumidity = document.getElementById("humidity");

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

  // INPUT VALIDATION & PROCESSING

  // Error catching
  function checkInput(data) {
    // Array to track any errors
    const errors = [];

    if (!data.name.trim()) {
      errors.push("Patient name is required.\n");
    }
    if (isNaN(data.ph) || data.ph < 0 || data.ph > 14) {
      errors.push("pH level must be a number between 0 - 14.");
    }
    if (isNaN(data.conduct) || data.conduct < 0 || data.conduct > 14) {
      errors.push("Electrical Conductivity must be a number between 0 - 3.");
    }
    if (isNaN(data.temp) || data.temp < 0 || data.temp > 14) {
      errors.push("Air temperature must be a number between -50 - 125.");
    }
    if (isNaN(data.humid) || data.humid < 0 || data.humid > 14) {
      errors.push("Relative humidity must be a number between 0 - 100.");
    }

    // Return errors if any
    return errors;
  }

  // Data processing
  function inputRisk(ph, conduct, temp, humid) {
    // Critical check
    if (
      (ph < 5.0 || ph > 7.5) &&
      (temp < 55 || temp > 95) &&
      (conduct < 0.2 || conduct > 4.5) &&
      (humid < 30 || humid > 90)
    ) {
      return { level: "critical", label: "Critical" };
    }

    // Optimal check
    if (
      ph >= 5.5 &&
      ph <= 6.5 &&
      temp >= 64.4 &&
      temp <= 71.6 &&
      conduct >= 1.0 &&
      conduct <= 2.0 &&
      humid >= 50 &&
      humid <= 70
    ) {
      return { level: "optimal", label: "Optimal" };
    }

    // Warning check
    return { level: "warning", label: "Warning" };
  }
});
