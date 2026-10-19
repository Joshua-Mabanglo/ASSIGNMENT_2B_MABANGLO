`<html>
- <head>
    - <header class=“dash-header”> (CSS - flexbox: row, space-between & center, position: sticky, top: 0, z-index: 9999) [STATIC]
        - <div class=“header-brand”> (CSS - flexbox: center) [STATIC]
          - <span class=“brand-logo”> [STATIC]
				  - <h1 class=“brand-title”> (Text: Greenlemetry) [STATIC]
			  - <div class= “header-count”> (CSS - flexbox: center) [STATIC] (Text: Bay Count) <span id=“bay-count” class=“bay-total”>(Text: 0) (CSS - border-radius: 50%) [DYNAMIC]

<main=“dash-main”> (CSS – flexbox: row, space-around & center) [STATIC]
			<aside class=“form-section”> (CSS – flexbox: column) [STATIC]
<form action=“#” class=“data-form”> (CSS – flexbox: column, space-evenly & center) [STATIC]
<div class= “form-header”> (CSS – flexbox: center) [STATIC]
<h2 class=“form-title”> (Text: Telemetry Data) [STATIC]
<div class=“form-row”>  (CSS - flexbox: row, center & center) [STATIC]
<div class=“form-group”> (CSS – flexbox: column, gap) [STATIC]
<label for=“bay-number” class=“form-label”> (Text: Bay Number) <span class= “required”> * [STATIC]
<input type=“number” name=“bay-number” id=“bay-number” class=“form-control” placeholder= “26” required> (CSS – padding, border-radius, transition) [STATIC]
<div class=“form-row”> (CSS - flexbox: row, space-between & center) [STATIC]
<div class=“form-group”> (CSS – flexbox: column, gap) [STATIC]
<label for=“pH-level” class=“form-label”> (Text: pH Level) <span class=“required”> * [STATIC]
<input type=“number” name=“pH-level” id=“pH-level” class=“form-control” min=“0” max=“14” step= “0.1” placeholder= “7” required> (CSS – padding, border-radius, transition) [STATIC]
<div class=“form-group”> (CSS – flexbox: column, gap) [STATIC]
<label for=“conductivity” class=“form-label”> (Text: Electrical Conductivity (mS/cm)) <span class= “required”> * [STATIC]
<input type=“number” name=“conductivity” id=“conductivity” class=“form-control” min=“0” max=“3” step= “0.1” placeholder= “1.5” required> (CSS – padding, border-radius, transition) [STATIC]
<div class=“form-row”> (CSS - flexbox: row, space-between & center) [STATIC]
<div class=“form-group”> (CSS – flexbox: column, gap) [STATIC]
<label for=“air-temp” class=“form-label”> (Text: Air Temperature (F)) <span class= “required”> * [STATIC]
<input type=“number” name=“air-temp” id=“air-temp” class=“form-control”
min=“-100” max=“175” step= “0.1” placeholder= “85” required> (CSS – padding, border-radius, transition) [STATIC]
<div class=“form-group”> (CSS – flexbox: column, gap) [STATIC]
<label for=“humidity” class=“form-label”> (Text: Relative Humidity (%)) <span class= “required”> * [STATIC]
<input type=“number” name=“humidity” id=“humidity” class=“form-control” min=“0” max=“100” step= “1” placeholder= “50” required> (CSS – padding, border-radius, transition) [STATIC]
<btn type=“submit” id=“form-submit” class= “btn btn-primary”> (Text: Record Bay Telemetry) (CSS – padding, border-radius, transition) [STATIC] (Event: type “submit”)

			<section=“info-section”> (CSS – flexbox: column, space-evenly & center) 
[STATIC]
<div class=“info-header”> (CSS – flexbox: row, space-between & center) [STATIC]
					<h2 class=“info-title”> (Text: Bay Information) [STATIC]
					<btn class= id=“purge-data” class=“btn btn-outline btn-
danger”> (Text: Purge data) (CSS – padding, border-radius,
transition) [STATIC]
<div class= “empty-message”> (CSS – flexbox: center) [STATIC]
					<span class=“empty-icon”> [STATIC]
					<h3 class=“empty-text”> (Text: No bays recorded.)>
[STATIC]
<ul id=“bay-cards” class=“bay-grid” aria-live= “polite”> [DYNAMIC]
<article class=“bay-card”> (CSS – flexbox: column, space-evenly & center, gap) [DYNAMIC]
<div class=“card-header”> (CSS – flexbox: center & center) [DYNAMIC]
<h4 class=“card-title”> (Text will be inputted bay number) [DYNAMIC]
<div class=“card-body”> (CSS – flexbox: space-evenly) [DYNAMIC]
<div class=“info-column”> (CSS – flexbox: column, space-evenly & stretch, gap) [DYNAMIC]
<p class=info-stat”>  (Text will be inputted pH level) [DYNAMIC]
<p class=info-stat”> (Text will be inputted conductivity) [DYNAMIC]
<div class=“info-column”> (CSS – flexbox: column, space-evenly & stretch, gap) [DYNAMIC]
<p class=info-stat”> (Text will be inputted air temp) [DYNAMIC]
<p class=info-stat”> (Text will be inputted humidity) [DYNAMIC]
<div class=“delete-btn”> (CSS – flexbox: center) [DYNAMIC]
<btn type=“btn” class=“btn btn-outline btn-danger”> (Text: Delete Bay) (CSS – padding, border-radius, transition) [DYNAMIC] (Event: type “click”)
<div class= “card-footer”> (CSS – flexbox: center & center)  [DYNAMIC]
<h4 class=“card-title”> (Text will be calculated status) [DYNAMIC]
		<footer=“dash-footer”> (CSS - flexbox: row, space-between & center) [STATIC]
<p class=“footer-brand” &copy;> (Text: 2026 Greenlemetry Inc. Designed for CSI 3150.) [STATIC]
<img width="468" height="624" alt="image" src="https://github.com/user-attachments/assets/135c04a4-37c4-4c1e-b76c-f2f21a74043f" />`
