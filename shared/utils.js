// =============================================================================
// File: utils.js
//
// Collection of helper functions.
// =============================================================================

// =============================================================================
// User interface.
// =============================================================================


function enableElement(elementId)
{
	var elt = getElementRef(elementId);
	
	if (elt != null)
	{
		elt.disabled = false;
	}
}

function disableElement(elementId)
{
	var elt = getElementRef(elementId);
	
	if (elt != null)
	{
		elt.disabled = true;
	}
}

function hideElement(elementId)
{
	var elt = getElementRef(elementId);
	
	if (elt != null)
	{
		elt.style.visibility = "hidden";
	}
}

function showElement(elementId)
{
	var elt = getElementRef(elementId);
	
	if (elt != null)
	{
		elt.style.visibility = "visible";
	}
}

// Returns null if element doesn't exist.

function getElementRef(elementId)
{
	return document.getElementById(elementId);	
}
