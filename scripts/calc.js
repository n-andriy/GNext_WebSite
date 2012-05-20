var ids = new Array('designVer_mainDesign','designVer_elDesign','design_banner','designVer_mainLayout','designVer_otherLayout',
'siteKey_type','personalElements','eStoreElements','visitCardElements');

var radioBtn = new Array('design','designVer','siteKey');
var subBtns = new Array('siteKey_personal','siteKey_visitCard','siteKey_eStore');


function hideAllDivs()
{
	for (var id in ids)
	{
		hideDiv(ids[id]);
	}
}

function hideDiv(id)
{
	document.getElementById(id).style.display = 'none';
}

function showItems(element)
{
	for (var btn in radioBtn)
	{
		if (radioBtn[btn] != element.id)
			document.getElementById(radioBtn[btn]).checked = false;
	}
	
	if (document.getElementById(element.id).checked)
		showElementDivs(element.id);
}

function showElementDivs(type)
{
	hideAllDivs();
	for (var id in ids)
	{
		if (ids[id].substr(0, ids[id].indexOf("_")) == type)
			document.getElementById(ids[id]).style.display = 'block';
	}
}

function showSubItems(element)
{
	for (var btn in subBtns)
	{
		if (subBtns[btn] != element.id)
			document.getElementById(subBtns[btn]).checked = false;
	}
	
	showElementSubDivs(element.id);
}

function showElementSubDivs(elementId)
{
	hideAllSubDivs();
	if (elementId == 'siteKey_personal')
	{
		document.getElementById('personalElements').style.display = 'block';
		return;
	}
	
	if (elementId == 'siteKey_eStore')
	{
		document.getElementById('eStoreElements').style.display = 'block';
	}
}

function hideAllSubDivs()
{
	var subdivs = new Array('siteKey_personal','siteKey_visitCard','siteKey_eStore');
	
	for (var item in subdivs)
	{
		document.getElementById(subdivs[item]).style.display = 'none';
	}
}

function Calculate(addedPrice, controlBox, mode)
{
	// Смена фокуса текстбокса, но галочка не выбрана
	if (mode == 1 && document.getElementById('bannerDesign').checked == false)
	{
		return;
	}
	
	// Смена фокуса текстбокса, галочка выбрана
	if (mode == 1 && document.getElementById('bannerDesign').checked == true)
	{
		//var bannerAmount = parseInt(document.getElementById('amountBanner').value);
		var currentPrice = parseInt(document.getElementById('priceValue').innerText);
		var fixedPrice = parseInt(document.getElementById(addedPrice).innerText);
		
		// Если в текстбоксе уже содержится кол-во и вводится новое
		if (currentPrice != 0 && document.getElementById('txtBoxValue').value != document.getElementById('amountBanner').value)
		{
			currentPrice -= parseInt(document.getElementById('txtBoxValue').value) * fixedPrice;
		}
		
		document.getElementById('txtBoxValue').value = document.getElementById('amountBanner').value;
				
		currentPrice += fixedPrice * parseInt(document.getElementById('amountBanner').value);
		
		document.getElementById('priceValue').innerText = currentPrice;
	}
	
	/*if (mode == 0)
	{
		var currentPrice = parseInt(document.getElementById('priceValue').innerText);
		if (document.getElementById(controlBox).checked == true)
		{
			currentPrice += parseInt(document.getElementById(addedPrice).innerText);			
		}
		
		if (document.getElementById(controlBox).checked == false)
		{
			currentPrice -= parseInt(document.getElementById(addedPrice).innerText);
		}
		
		document.getElementById('priceValue').innerText = currentPrice;
	}*/
	
	// var price = parseInt(document.getElementById("priceValue").innerText);
	
	//document.getElementById(controlBox).checked)
		
	//document.getElementById("amountBanner").value == ''
			//		price += parseInt(document.getElementById("amountBanner").value) * parseInt(document.getElementById(addedPrice).innerText);
			
		//document.getElementById("priceValue").innerText = price;
	
}

// Нажата кнопка "Сброс"
/*function resetForm()
{
	var radioBtns = new Array('mainDesign','elDesign','mainLayout','otherPagesLayout','siteKeyCms','siteKeySearch','siteKeyPhotoGal','siteKeyVideoGal',
								'siteKeyFaq','siteKeyComments','siteKeyVotes','siteKeyEstore','siteKeyRegistration','firmStyleChkBox','bannerDesign');
								
	for (var btn in radioBtns)
	{
		document.getElementById(radioBtns[btn]).checked = false;
	}
	
	document.getElementById("priceValue").innerText = '0';
	document.getElementById("amountBanner").value = '';
	document.getElementById("amountOtherLayout").value = '';
}*/