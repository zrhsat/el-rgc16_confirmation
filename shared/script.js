// =============================================================================
// File: script.js
// =============================================================================

// Global variables

var startTime;

// -----------------------------------------------------------------------------
// Connects to the LMS and sets the initial SCO state. Also sets the exit status
// to "suspend" which ensures data persistence by the LMS. If the SCO is
// completed already its state remains unchanged.
// -----------------------------------------------------------------------------

function scoLoaded()
{
	startTime = new Date();

	// Connect to the LMS.	

	var success = doInit();

	if (success)
	{
		setExitStatus("suspend");			
		setC("i");
	}

	adjustUI();
}

// -----------------------------------------------------------------------------
// Terminates the connection with the LMS. If the SCO isn't completed yet by
// the user the session time gets updated with an intermediate time.
// -----------------------------------------------------------------------------

function exitSCO()
{
	var stat = getLessonStatus();
	
	if (stat != "c")
	{
		setSessionTime(startTime, new Date());
	}

	doQuit();
}

// -----------------------------------------------------------------------------
// Set the SCO status to the given one character code. If the SCO is already
// marked as completed the status isn't changed and remains completed.
// -----------------------------------------------------------------------------

function setC(value)
{
	var stat = getLessonStatus();
	
	if (stat == "c")
	{
		return;
	}

	setLessonStatus(value);
	setSessionTime(startTime, new Date());
}

// -----------------------------------------------------------------------------
// Adjusts the user interface to the current SCORM status.
// -----------------------------------------------------------------------------

function adjustUI()
{
	var title = window.document.title
	getElementRef("title").innerHTML = title;


	hideElement("radioAccept");
	hideElement("inputBox");
	hideElement("errorBox");
	hideElement("acceptBox");
	
	var stat = getLessonStatus();
	
	if (stat == "c")
	{
		showElement("acceptBox");
		return;
	}

	showElement("radioAccept");
	showElement("inputBox");
}

// -----------------------------------------------------------------------------
// Updates the SCORM status according to the related UI elements and adjusts
// the user interface to the new status.
// -----------------------------------------------------------------------------

function adjustStatus()
{
	var radio = getElementRef("radioAccept");	

	if (radio.checked == true)
	{
		setC("c");
		adjustUI();
		return;
	}

	showElement("errorBox");
}
