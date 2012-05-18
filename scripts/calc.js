var ids = new Array('designVer_mainDesign','designVer_elDesign','design_banner','designVer_mainLayout','designVer_otherLayout',
'siteKey_cms','siteKey_search','siteKey_photoGallery','siteKey_videoGallery','siteKey_faq','siteKey_comments','siteKey_votes','siteKey_estore',
'siteKey_registration');

var radioBtn = new Array('design','designVer','siteKey');

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

function Calculate(addedPrice, controlBox, mode)
{
	var price = parseInt(document.getElementById("priceValue").innerText);
	
	// Поменялся фокус
	if (mode == 1)
	{
		
	}
	
	if (controlBox == 'bannerDesign')
	{
		if (document.getElementById(controlBox).checked)
		{
			if (document.getElementById("amountBanner").value == '')
			{
				return;
			}
		
			price += parseInt(document.getElementById("amountBanner").value) * parseInt(document.getElementById(addedPrice).innerText);
			
		}
		else
		{
			if (mode != 0)
			{
				return;
			}
			
			price -= parseInt(document.getElementById("amountBanner").value) * parseInt(document.getElementById(addedPrice).innerText);
		}
		
		document.getElementById("priceValue").innerText = price;
		return;
	}
	
	if (document.getElementById(controlBox).checked)
	{
		price += parseInt(document.getElementById(addedPrice).innerText);
	}
	else
	{
		price -= parseInt(document.getElementById(addedPrice).innerText);
	}
	
	document.getElementById("priceValue").innerText = price;
}

// Нажата кнопка "Сброс"
function resetForm()
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
}