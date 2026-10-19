Greenlemetry: Smart Agriculture Dashboard
=

User Journey Funnel
-
**Starting State:** upon entering the UI, the user will see a form section with input fields for telemetry readings. There will also be another section that will house the bay information cards but would be empty at first.

**Action 1:** The user will enter the telemetry information into bounded and required input fields that will alert the user immediately if there is no entry or the entry is out of bounds. The field with the incorrect information will be highlighted along with a message explaining what is wrong with the input.

**Action 2:** Upon clicking the submit button, the user will be alerted if any fields were filled out incorrectly. If all fields contain a legitimate response, the information the user inputted will be sent to the JavaScript to store persistently and to calculate the bay status.

**Action 3:** The UI will display a card in the section beside the form containing the bay information just entered as well as the bay’s calculated status. A counter in the upper-right corner of the page will also increase by 1.

**Action 4:** Each card in the information section will have a button the user can press to delete it. There will also be a button that will remove all the currently existing cards.

**Terminal State:** depending on how many unique entries the user submitted to the system, the UI will display several cards displaying telemetry information for different bays, along with their calculated status.

Dom Norman Usability Audit
-
**Gulf of Execution** *Typing numeric sensor metrics (pH, ElectricalConductivity[EC], Temp, Humidity)*
- Field labels help a user understand what input to enter in a field. Specifying units clarifies what format to provide the input in. Placeholder attributes provide an example of expected input so that the user knows how to enter the input into the field. Together, these features help a user execute filling out a form.

**Gulf of Evaluation** *Ingesting sensor values after clicking "Record Reading"*
- Upon receiving the sensor values, the JS code will determine what environmental status the values fall under using the classification logic specified in the Technical implementation Guidelines section. The status will then be communicated to the user by means of a small badge attached to the informational card the JS will dynamically generate.

**System Constraint** *E.g. Water pH Boundaries (0.0 <= pH <= 14.0)*
- A developer can constrain values to a certain range using the <input> variables min and max. He or she can also control how many decimal places are allowed by using the step variable.

**Visual Feedback State** *Real-Time Input Error / Out-of-Bounds*
- A hidden html element can be created that will only appear when a user types in wrong input. 

**Error Recovery** *Accidental or test data submissions*
- If a user were to submit faulty bay information, he or she will be able to click a <btn> inside the dynamically inserted card to delete it. There will also be a <btn> element to delete all existing cards. These buttons will work by triggering an event listener of type “click” in JS to perform the deletion.

Document Object Model (DOM)
-
html
- head
    - header class=“dash-header” (CSS - flexbox: row, space-between & center, position: sticky, top: 0, z-index: 9999) [STATIC]
        - div class=“header-brand” (CSS - flexbox: center) [STATIC]
          - span class=“brand-logo” [STATIC]
		  - h1 class=“brand-title” (Text: Greenlemetry) [STATIC]
		- div class= “header-count” (CSS - flexbox: center) [STATIC] (Text: Bay Count) <span id=“bay-count” class=“bay-total”>(Text: 0) (CSS - border-radius: 50%) [DYNAMIC]
- main=“dash-main” (CSS – flexbox: row, space-around & center) [STATIC]
	- aside class=“form-section” (CSS – flexbox: column) [STATIC]
    	- form action=“#” class=“data-form” (CSS – flexbox: column, space-evenly & center) [STATIC]
			- div class= “form-header” (CSS – flexbox: center) [STATIC]
    			- h2 class=“form-title” (Text: Telemetry Data) [STATIC]
			- div class=“form-row”  (CSS - flexbox: row, center & center) [STATIC]
     			- div class=“form-group” (CSS – flexbox: column, gap) [STATIC]
        			- label for=“bay-number” class=“form-label” (Text: Bay Number) <span class= “required”> * [STATIC]
           			- input type=“number” name=“bay-number” id=“bay-number” class=“form-control” placeholder= “26” required (CSS – padding, border-radius, transition) [STATIC]
			- div class=“form-row” (CSS - flexbox: row, space-between & center) [STATIC]
				- div class=“form-group” (CSS – flexbox: column, gap) [STATIC]
					- label for=“pH-level” class=“form-label” (Text: pH Level) span class=“required” * [STATIC]
					- input type=“number” name=“pH-level” id=“pH-level” class=“form-control” min=“0” max=“14” step= “0.1” placeholder= “7” required (CSS – padding, border-radius, transition) [STATIC]
				- div class=“form-group” (CSS – flexbox: column, gap) [STATIC]
					- label for=“conductivity” class=“form-label” (Text: Electrical Conductivity (mS/cm)) span class= “required” * [STATIC]
					- input type=“number” name=“conductivity” id=“conductivity” class=“form-control” min=“0” max=“3” step= “0.1” placeholder= “1.5” required (CSS – padding, border-radius, transition) [STATIC]
			- div class=“form-row” (CSS - flexbox: row, space-between & center) [STATIC]
     				- div class=“form-group” (CSS – flexbox: column, gap) [STATIC]
						- label for=“air-temp” class=“form-label” (Text: Air Temperature (F)) span class= “required” * [STATIC]
						- input type=“number” name=“air-temp” id=“air-temp” class=“form-control”
min=“-100” max=“175” step= “0.1” placeholder= “85” required (CSS – padding, border-radius, transition) [STATIC]
					- div class=“form-group” (CSS – flexbox: column, gap) [STATIC]
						- label for=“humidity” class=“form-label” (Text: Relative Humidity (%)) span class= “required” * [STATIC]
       					- input type=“number” name=“humidity” id=“humidity” class=“form-control” min=“0” max=“100” step= “1” placeholder=“50” required (CSS – padding, border-radius, transition) [STATIC]
			- btn type=“submit” id=“form-submit” class= “btn btn-primary” (Text: Record Bay Telemetry) (CSS – padding, border-radius, transition) [STATIC] (Event: type “submit”)
- section=“info-section” (CSS – flexbox: column, space-evenly & center) [STATIC]
	- div class=“info-header” (CSS – flexbox: row, space-between & center) [STATIC]
		- h2 class=“info-title” (Text: Bay Information) [STATIC]
		- btn class= id=“purge-data” class=“btn btn-outline btn-danger” (Text: Purge data) (CSS – padding, border-radius,
transition) [STATIC]
	- div class= “empty-message” (CSS – flexbox: center) [STATIC]
 		- span class=“empty-icon” [STATIC]
		- h3 class=“empty-text” (Text: No bays recorded.)[STATIC]
	- ul id=“bay-cards” class=“bay-grid” aria-live= “polite” [DYNAMIC]
		- article class=“bay-card” (CSS – flexbox: column, space-evenly & center, gap) [DYNAMIC]
			- div class=“card-header” (CSS – flexbox: center & center) [DYNAMIC]
				- h4 class=“card-title” (Text will be inputted bay number) [DYNAMIC]
			- div class=“card-body” (CSS – flexbox: space-evenly) [DYNAMIC]
				- div class=“info-column” (CSS – flexbox: column, space-evenly & stretch, gap) [DYNAMIC]
					- p class=info-stat” (Text will be inputted pH level) [DYNAMIC]
					- p class=info-stat” (Text will be inputted conductivity) [DYNAMIC]
				- div class=“info-column”>(CSS – flexbox: column, space-evenly & stretch, gap) [DYNAMIC]
					- p class=info-stat” (Text will be inputted air temp) [DYNAMIC]
					- p class=info-stat” (Text will be inputted humidity) [DYNAMIC]
			- div class=“delete-btn” (CSS – flexbox: center) [DYNAMIC]
				- btn type=“btn” class=“btn btn-outline btn-danger” (Text: Delete Bay) (CSS – padding, border-radius, transition) [DYNAMIC] (Event: type “click”)
			- div class= “card-footer” (CSS – flexbox: center & center)  [DYNAMIC]
				- h4 class=“card-title” (Text will be calculated status) [DYNAMIC]
- footer=“dash-footer” (CSS - flexbox: row, space-between & center) [STATIC]
	- p class=“footer-brand” &copy; (Text: 2026 Greenlemetry Inc. Designed for CSI 3150.) [STATIC]

Data Schema
-
const agricultureTelemetrySchema = {
- bayNum: “Integer”		// Number or ID of greenhouse bay
- pHLevel: “Double”		// pH level
- conductivity: “Double”	// Electrical conductivity
- airTemp: “Double”		// Air temperature
- humidity: “Integer”		// Relative humidity
- enviroStatus: “String”		// Environmental status of bay

};


