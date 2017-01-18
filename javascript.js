

	/* SUMMARY:
		
		-VARIABLES
		
		-HEADER
		-LINK
		-HELP
		-SET BACKGROUND
		-SET COLOR
		-SET FONT
		-COLOR
		-COLOR HOVER
		-CHANGE ICON COLOR
		-CHANGE OPACITY
		
		-TIME
		-INPUT SEARCH
		-SHOW-HIDE FOOTER
		-FIRST-SECOND PAGE
		-TO DO LIST
		-RANDOM QUOTE
	
	*/

	
	
	document.addEventListener('DOMContentLoaded', function(){
		
		GetClock();
		setInterval(GetClock, 1000);
		retrievestate();
	
	}, false );


			
/* HEADER */
	
	var headers = document.querySelectorAll('#header1, #header2, #header3, #header4, #header5, #header6')

	for (i=0; i<headers.length; i++){
		headers[i].innerHTML = headersName[i];
	};

	
/* LINK */
	
	var L1 = document.querySelectorAll('.L1');
	var L2 = document.querySelectorAll('.L2');
	var L3 = document.querySelectorAll('.L3');
	var L4 = document.querySelectorAll('.L4');
	var L5 = document.querySelectorAll('.L5');
	var L6 = document.querySelectorAll('.L6');
	var L8 = document.querySelectorAll('.L8');


	for (i=0; i<L1.length; i++){
		L1[i].innerHTML = hp1[2*i];
		L1[i].href = hp1[2*i+1];
	}
	for (i=0; i<L2.length; i++){
		L2[i].innerHTML = hp2[2*i];
		L2[i].href = hp2[2*i+1];
	}
	for (i=0; i<L3.length; i++){
		L3[i].innerHTML = hp3[2*i];
		L3[i].href = hp3[2*i+1];
	}
	for (i=0; i<L4.length; i++){
		L4[i].innerHTML = hp4[2*i];
		L4[i].href = hp4[2*i+1];
	}
	for (i=0; i<L5.length; i++){
		L5[i].innerHTML = hp5[2*i];
		L5[i].href = hp5[2*i+1];
	}
	for (i=0; i<L6.length; i++){
		L6[i].innerHTML = hp6[2*i];
		L6[i].href = hp6[2*i+1];
	}
	for (i=0; i<L8.length; i++){
		L8[i].innerHTML = hp8[2*i];
		L8[i].href = hp8[2*i+1];
	}

				
/* HELP */

	var cmd = document.querySelectorAll('.cmd');
	var act = document.querySelectorAll('.act');
	
	var allSites = s3.concat(s4, s5);
	allSites.sort();


	for (let i=0; i<allSites.length; i++){
		for (let j=0; j<allSites[i].length; j++){
			cmd[i].innerHTML = allSites[i][0]
		}
	}
	
	for (let i=0; i<allSites.length; i++){
		for (let j=0; j<allSites[i].length; j++){
			act[i].innerHTML = allSites[i][1]
		}
	}
	
	
/* SET BG */

	var opacityLow = '1';
	retrieveBG();

	function storeBG(){
		localStorage.BG = BG.style.background;
		localStorage.setBG1 = setBG1.style.textDecoration;
		localStorage.setBG2 = setBG2.style.textDecoration;
		localStorage.setBG3 = setBG3.style.textDecoration;
		localStorage.setItem("opacityLow", JSON.stringify(opacityLow));
	}
	function retrieveBG(){
		BG.style.background = localStorage.BG;
		setBG1.style.textDecoration = localStorage.setBG1;
		setBG2.style.textDecoration = localStorage.setBG2;
		setBG3.style.textDecoration = localStorage.setBG3;
		var opLow = localStorage.getItem("opacityLow");
		opacityLow = JSON.parse(opLow); 
	}
	
	
	setBG1.style.background = blackBG;
	setBG2.style.background = customBG;
	setBG3.style.background = greenBG;
	
	setBG1.addEventListener('mouseenter', function(){
		setBG1.style.textDecoration = 'underline';
		setBG2.style.textDecoration = 'none';
		setBG3.style.textDecoration = 'none';
		BG.style.background = blackBG;
		BG.style.backgroundSize = 'cover';
		opacityLow = '1';

		storeBG();
	})
	setBG2.addEventListener('mouseenter', function(){
		setBG1.style.textDecoration = 'none';
		setBG2.style.textDecoration = 'underline';
		setBG3.style.textDecoration = 'none';
		BG.style.background = customBG;
		BG.style.backgroundSize = 'cover';
		opacityLow = '.1';

		storeBG();
	})
	setBG3.addEventListener('mouseenter', function(){
		setBG1.style.textDecoration = 'none';
		setBG2.style.textDecoration = 'none';
		setBG3.style.textDecoration = 'underline';
		BG.style.background = greenBG;
		BG.style.backgroundSize = 'cover';
		opacityLow = '1';
				
		storeBG();
	})

	
/* SET COLOR */
	
	var currentColorTheme = colorTheme[0]; //default
	retrieveColor();

	function storeColor(){
		localStorage.setItem("currentColorTheme", JSON.stringify(currentColorTheme));
		localStorage.setColor1 = setColor1.style.textDecoration;
		localStorage.setColor2 = setColor2.style.textDecoration;
		localStorage.setColor3 = setColor3.style.textDecoration;
	}
	function retrieveColor(){
		if(localStorage.getItem("currentColorTheme") !== null){
										
			setColor1.style.textDecoration = localStorage.setColor1;
			setColor2.style.textDecoration = localStorage.setColor2;
			setColor3.style.textDecoration = localStorage.setColor3;
			
			var seCol = localStorage.getItem("currentColorTheme");
				currentColorTheme = JSON.parse(seCol);
		}
	}
	
	var inputs = document.querySelectorAll('input');

	setColor1.addEventListener('mouseenter', function(){
		setColor1.style.textDecoration = 'underline';
		setColor2.style.textDecoration = 'none';
		setColor3.style.textDecoration = 'none';
		currentColorTheme = colorTheme[0];

		for(i=0; i<inputs.length; i++){
			inputs[i].classList.remove('placeh');
		}
	
		color();	
		colorHover();
		colorIcon();
		storeColor();
	})
	setColor2.addEventListener('mouseenter', function(){
		setColor1.style.textDecoration = 'none';
		setColor2.style.textDecoration = 'underline';
		setColor3.style.textDecoration = 'none';
		currentColorTheme = colorTheme[1];

		for(i=0; i<inputs.length; i++){
			inputs[i].classList.remove('placeh');
		}
		
		color();	
		colorHover();
		colorIcon();
		storeColor();
	})
	setColor3.addEventListener('mouseenter', function(){
		setColor1.style.textDecoration = 'none';
		setColor2.style.textDecoration = 'none';
		setColor3.style.textDecoration = 'underline';
		currentColorTheme = colorTheme[2];
		
		color();
		colorHover();
		colorIcon();
		storeColor();
	})
	

/* SET FONT */
	
	var clockbox = document.getElementById('clockbox');
	var datebox = document.getElementById('datebox');
	var textMessages = document.querySelectorAll('#textMessage, #TODOtextMessage');
	var inputs = document.querySelectorAll('input');
	var headers = document.querySelectorAll('#header1, #header2, #header3, #header4, #header5, #header6');
	var links = document.querySelectorAll('.L1, .L2, .L3, .L4, .L5, .L6, #todolist');
	var help = document.getElementById('help');
	var helpHeader = document.querySelectorAll('.helpHeader');
	var setting = document.getElementById('setting');
	var footer = document.getElementById('footer');

	
	/* font1 */
	function font1(){
	
	var fonts = [
	'Kg Second Chances Sketch',
	'Kg Second Chances Solid',
	'eraser',
	'dk crayon crumble',
	'take_out_the_garbage',
	'appleberry',
	'no more lies',
	'James Almacen',
	'BPtall',
	'Markus Ink',
	'As soon as possible',
	]
	
	clockbox.style.fontFamily = fonts[4];
	clockbox.style.fontSize = '40px';
	
	datebox.style.fontFamily = fonts[3];
	datebox.style.fontSize = '18px';
	datebox.style.lineHeight = '6px';
	
	for (i=0; i<textMessages.length; i++){
		textMessages[i].style.fontFamily = fonts[3]
		textMessages[i].style.fontSize = '40px';
	}
	for (i=0; i<inputs.length; i++){
		inputs[i].style.fontFamily = fonts[3]
		inputs[i].style.fontSize = '25px';
	}
	for (i=0; i<headers.length; i++){
		headers[i].style.fontFamily = fonts[3]
		headers[i].style.fontSize = '40px';
		headers[i].style.fontWeight = 'bold';
	}
	for (i=0; i<links.length; i++){
		links[i].style.fontFamily = fonts[2]
		links[i].style.fontSize = '17px';
		links[i].style.lineHeight = 'normal';
		links[i].style.fontWeight = 'normal';
		links[i].style.textTransform = 'uppercase';
		links[i].style.letterSpacing = '0px';
	}
	footer.style.fontFamily = fonts[4];
	footer.style.fontSize = '20px';
	footer.style.lineHeight = 'normal';
	footer.style.textTransform = 'none';

	help.style.fontFamily = fonts[4];
	help.style.fontSize = '25px';
	help.style.lineHeight = '20px';
	
	for (i=0; i<helpHeader.length; i++){
		helpHeader[i].style.fontFamily = fonts[4]
		helpHeader[i].style.fontSize = '20px';
		helpHeader[i].style.textTransform = 'uppercase';
	}
	}

	/* font2 */
	function font2(){

	var fonts = [
	'Kg Second Chances Sketch',
	'Kg Second Chances Solid',
	'eraser',
	'dk crayon crumble',
	'take_out_the_garbage',
	'appleberry',
	'no more lies',
	'James Almacen',
	'BPtall',
	'Markus Ink',
	'As soon as possible',
	]

	clockbox.style.fontFamily = fonts[0];
	clockbox.style.fontSize = '30px';
	
	datebox.style.fontFamily = fonts[3];
	datebox.style.fontSize = '18px';
	datebox.style.lineHeight = '6px';
	
	for (i=0; i<textMessages.length; i++){
		textMessages[i].style.fontFamily = fonts[0]
		textMessages[i].style.fontSize = '30px';
	}
	for (i=0; i<inputs.length; i++){
		inputs[i].style.fontFamily = fonts[3]
		inputs[i].style.fontSize = '25px';
	}
	for (i=0; i<headers.length; i++){
		headers[i].style.fontFamily = fonts[0]
		headers[i].style.fontSize = '30px';
		headers[i].style.fontWeight = 'normal';
	}
	for (i=0; i<links.length; i++){
		links[i].style.fontFamily = fonts[3]
		links[i].style.fontSize = '22px';
		links[i].style.lineHeight = '20px';
		links[i].style.fontWeight = 'normal';
		links[i].style.textTransform = 'uppercase';
		links[i].style.letterSpacing = '1px';
	}
	footer.style.fontFamily = fonts[3];
	footer.style.fontSize = '18px';
	footer.style.lineHeight = '16px';
	footer.style.textTransform = 'uppercase';

	help.style.fontFamily = fonts[4];
	help.style.fontSize = '25px';
	help.style.lineHeight = '20px';
	
	for (i=0; i<helpHeader.length; i++){
		helpHeader[i].style.fontFamily = fonts[6]
		helpHeader[i].style.fontSize = '18px';
		helpHeader[i].style.textTransform = 'uppercase';
	}
	}
	
	/* font3 */
	function font3(){

	var fonts = [
	'Kg Second Chances Sketch',
	'Kg Second Chances Solid',
	'eraser',
	'dk crayon crumble',
	'take_out_the_garbage',
	'appleberry',
	'no more lies',
	'James Almacen',
	'BPtall',
	'Markus Ink',
	'As soon as possible',
	]

	clockbox.style.fontFamily = fonts[4];
	clockbox.style.fontSize = '40px';
	
	datebox.style.fontFamily = fonts[4];
	datebox.style.fontSize = '18px';
	datebox.style.lineHeight = '6px';
	
	for (i=0; i<textMessages.length; i++){
		textMessages[i].style.fontFamily = fonts[4];
		textMessages[i].style.fontSize = '40px';
	}
	for (i=0; i<inputs.length; i++){
		inputs[i].style.fontFamily = fonts[3];
		inputs[i].style.fontSize = '25px';
	}
	for (i=0; i<headers.length; i++){
		headers[i].style.fontFamily = fonts[4];
		headers[i].style.fontSize = '40px';
		headers[i].style.fontWeight = 'normal';
	}
	for (i=0; i<links.length; i++){
		links[i].style.fontFamily = fonts[1];
		links[i].style.fontSize = '15px';
		links[i].style.lineHeight = '15px';
		links[i].style.fontWeight = 'normal';
		links[i].style.textTransform = 'none';
		links[i].style.letterSpacing = '2px';
	}
	footer.style.fontFamily = fonts[4];
	footer.style.fontSize = '15px';
	footer.style.lineHeight = '16px';
	footer.style.textTransform = 'uppercase';

	help.style.fontFamily = fonts[4];
	help.style.fontSize = '25px';
	help.style.lineHeight = '20px';
	
	for (i=0; i<helpHeader.length; i++){
		helpHeader[i].style.fontFamily = fonts[6];
		helpHeader[i].style.fontSize = '18px';
		helpHeader[i].style.textTransform = 'uppercase';
	}
	}

	/* setting */
	setting.style.fontFamily = fonts[4];
	setting.style.fontSize = '25px';
	setting.style.lineHeight = '20px';
	setBG.style.fontSize = '20px';
	setBG.style.textTransform = 'uppercase';
	setColor.style.fontSize = '20px';
	setColor.style.textTransform = 'uppercase';
	setFont.style.fontSize = '20px';
	setFont.style.textTransform = 'uppercase';
	setFont1.style.fontFamily = fonts[2];
	setFont1.style.textTransform = 'uppercase';
	setFont2.style.fontFamily = fonts[0];
	setFont2.style.textTransform = 'uppercase';
	setFont3.style.fontFamily = fonts[4];
	setFont3.style.textTransform = 'uppercase';
	
	
	/* set font */
	font1();	
	retrieveFont();

	function storeFont(){
		localStorage.setFont1 = setFont1.style.textDecoration;
		localStorage.setFont2 = setFont2.style.textDecoration;
		localStorage.setFont3 = setFont3.style.textDecoration;

		localStorage.setItem("t", JSON.stringify(t));
	}
	function retrieveFont(){
		if(localStorage.getItem("t") !== null){
			setFont1.style.textDecoration = localStorage.setFont1;
			setFont2.style.textDecoration = localStorage.setFont2;
			setFont3.style.textDecoration = localStorage.setFont3;
			
			var tqaz = localStorage.getItem("t");
			t = JSON.parse(tqaz); 
			
			if (t == 't1'){ font1();}
			if (t == 't2'){ font2();}
			if (t == 't3'){ font3();}
		}
	}
	
	setFont1.addEventListener('mouseenter', function(){
		setFont1.style.textDecoration = 'underline';
		setFont2.style.textDecoration = 'none';
		setFont3.style.textDecoration = 'none';
		
		font1();
		t = 't1';
		storeFont();
	})
	setFont2.addEventListener('mouseenter', function(){
		setFont1.style.textDecoration = 'none';
		setFont2.style.textDecoration = 'underline';
		setFont3.style.textDecoration = 'none';

		font2();
		t = 't2';
		storeFont();
	})
	setFont3.addEventListener('mouseenter', function(){
		setFont1.style.textDecoration = 'none';
		setFont2.style.textDecoration = 'none';
		setFont3.style.textDecoration = 'underline';

		font3();
		t = 't3';
		storeFont();
	})
	

/* COLOR */

	color();

	function color(){
		var mainColors = document.querySelectorAll('#icoMessage, input, a, #help, #setting, #todolist');
		var colors1 = document.querySelectorAll('.color1');
		var colors2 = document.querySelectorAll('.color2');
		var colors3 = document.querySelectorAll('.color3');
		var colors4 = document.querySelectorAll('.color4');
		var colors5 = document.querySelectorAll('.color5');
		var colors6 = document.querySelectorAll('.color6');
		var colors7 = document.querySelectorAll('.color7');

		var colors9 = document.querySelectorAll('#clock, #textMessage, #TODOmessage');
		
		var colorArray = [mainColors, colors1, colors2, colors3, colors4, colors5, colors6, colors7, colors9];
		var colorNames = [currentColorTheme.mainColor, currentColorTheme.color1, currentColorTheme.color2, currentColorTheme.color3, currentColorTheme.color4, currentColorTheme.color5, currentColorTheme.color6, currentColorTheme.color7, currentColorTheme.color9];

		for ( i=0; i<colorArray.length; i++){
		  for ( j=0; j<colorArray[i].length; j++){
			colorArray[i][j].style.color = colorNames[i];
			}
		}
		
		$("#setColor1").lettering('words').lettering();

		$( "#setColor1 > span:nth-child(7n+1)" ).css('color', colorTheme[0].color1);
		$( "#setColor1 > span:nth-child(7n+2)" ).css('color', colorTheme[0].color2);
		$( "#setColor1 > span:nth-child(7n+3)" ).css('color', colorTheme[0].color3);
		$( "#setColor1 > span:nth-child(7n+4)" ).css('color', colorTheme[0].color4);
		$( "#setColor1 > span:nth-child(7n+5)" ).css('color', colorTheme[0].color5);
		$( "#setColor1 > span:nth-child(7n+6)" ).css('color', colorTheme[0].color6);
		$( "#setColor1 > span:nth-child(7n)" ).css('color', colorTheme[0].color7);
		
		setColor2.style.color = 'white';
		
		setColor3.style.color = '#828282';
		
		if(currentColorTheme.mainColor == colorTheme[2].mainColor){
			for(i=0; i<inputs.length; i++){
				inputs[i].classList.add('placeh');
			}
		}
	};
	

/* COLOR HOVER */

	var colors1Hover = document.querySelectorAll('.color1Hover');
	var colors2Hover = document.querySelectorAll('.color2Hover');
	var colors3Hover = document.querySelectorAll('.color3Hover');
	var colors4Hover = document.querySelectorAll('.color4Hover');
	var colors5Hover = document.querySelectorAll('.color5Hover');
	var colors6Hover = document.querySelectorAll('.color6Hover');
	var colors8Hover = document.querySelectorAll('.color8Hover');

	colorHover();
	
	function colorHover(){

		var colorHoverArray = [colors1Hover, colors2Hover, colors3Hover, colors4Hover, colors5Hover, colors6Hover, colors8Hover];
		var colorHoverNames = [currentColorTheme.color1, currentColorTheme.color2, currentColorTheme.color3, currentColorTheme.color4, currentColorTheme.color5, currentColorTheme.color6, currentColorTheme.color8];
	
		for (let i=0; i<colorHoverArray.length; i++){
			for ( j=0; j<colorHoverArray[i].length; j++){
				colorHoverArray[i][j].addEventListener('mouseenter', function(){
					this.style.color = colorHoverNames[i];
				})
				colorHoverArray[i][j].addEventListener('mouseleave', function(){
					this.style.color = currentColorTheme.mainColor;
				})
			}
		}
	}
	
	
/* CHANGE ICON COLOR */
	
	var col1 = document.getElementById('col1');
	var col2 = document.getElementById('col2');
	var col3 = document.getElementById('col3');
	var col4 = document.getElementById('col4');
	var col5 = document.getElementById('col5');
	var col6 = document.getElementById('col6');
	var inputBox = document.getElementById('inputBox');
	var TODOinputBox = document.getElementById('TODOinputBox');
	
	var ico1 = document.getElementById('ico1');
	var ico2 = document.getElementById('ico2');
	var ico3 = document.getElementById('ico3');
	var ico4 = document.getElementById('ico4');
	var ico5 = document.getElementById('ico5');
	var ico6 = document.getElementById('ico6');
	var ico7 = document.getElementById('ico7');
	var ico8 = document.getElementById('ico8');
	
	colorIcon();
	
	function colorIcon(){
	
		var colors = [currentColorTheme.color1, currentColorTheme.color2, currentColorTheme.color3, currentColorTheme.color4, currentColorTheme.color5, currentColorTheme.color6, currentColorTheme.color7, currentColorTheme.color7];
		var col = [col1, col2, col3, col4, col5, col6, inputBox, TODOinputBox];
		var ico = [ico1, ico2, ico3, ico4, ico5, ico6, ico7, ico8];

	
		for (let i=0; i<col.length; i++){
			col[i].addEventListener('mouseenter', function(){
				ico[i].style.color = colors[i];
				textMessage.style.color = colors[i];
			})
		}
		for (let i=0; i<col.length; i++){
			col[i].addEventListener('mouseleave', function(){
				ico[i].style.color = '';
				textMessage.style.color = currentColorTheme.color9;
			})
		}
	}
	
	
/* CHANGE OPACITY */
	
	var firstPage = document.getElementById('firstPage');
	var secondPage = document.getElementById('secondPage');
	
	var message = document.getElementById('message');
	var inputBox = document.getElementById('inputBox');
	var menu = document.getElementById('menu');
	var footer = document.getElementById('footer');
	var help = document.getElementById('help');
	var setting = document.getElementById('setting');
	
	var TODOinputBox = document.getElementById('TODOinputBox');

	var opacityHover = [message, inputBox, menu, footer, help, setting,  secondPage];
	var opacityInput = [inputBox, TODOinputBox];
	

	firstPage.style.opacity = opacityLow;
	secondPage.style.opacity = opacityLow;


	function opacityUp(){
		firstPage.style.opacity = '1';
		secondPage.style.opacity = '1';
	}
	function opacityDown(){
		firstPage.style.opacity = opacityLow;
		secondPage.style.opacity = opacityLow;
	}
	

	function changeOpacityInput() {
		if (inputBox.value.length < 1) {
			if($('#menu').is(":hover")) {
			}
			else{
				if($('#message').is(":hover")){
				}
				else {
					if($('#inputBox').is(":hover")){
					}
					else {
						if($('#footer').is(":hover")){
						}
						else {
							if($('#setting').is(":hover")){
							}
							else {
								firstPage.style.opacity = opacityLow;
							}
						}
					}
				}
			}
		}
		else {
			firstPage.style.opacity = '1';
		}
		
		if (TODOinputBox.value.length < 1) {
			if($('#secondPage').is(":hover")) {
			}
			else{
				secondPage.style.opacity = opacityLow;
			}
		}
		else {
			secondPage.style.opacity = '1';
		}
	}


	for (i=0; i<opacityHover.length; i++){
		opacityHover[i].addEventListener('mouseenter', opacityUp);
		opacityHover[i].addEventListener('mouseleave', opacityDown);
	}
	for (i=0; i<opacityInput.length; i++){
		opacityInput[i].addEventListener('input', changeOpacityInput);
	}
	
	
/* TIME */

	var tmonth = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
	var tdate = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

	function GetClock() {
		var d = new Date();
		var nmonth = d.getMonth();
		var nday = d.getDay();
		var ndate = d.getDate();
		var nyear = d.getYear();
		if(nyear<1000) nyear+=1900;
		var nhour = d.getHours();
		var nmin = d.getMinutes();
		if(nmin<=9) nmin = "0" + nmin

		document.getElementById('clockbox').innerHTML = nhour + ":" + nmin;
		document.getElementById('datebox').innerHTML = tdate[nday] + "-" + ndate + "-" + tmonth[nmonth];
	}
	

/* INPUT SEARCH */
	
	var input1 = document.getElementById('inputBox');
	var menu = document.getElementById('menu');
	var help = document.getElementById('help');
	var setting = document.getElementById('setting');
	var TODOinputBox = document.getElementById('TODOinputBox');

	
	input1.addEventListener('keypress', function(event){

	function clearInput(){
		input1.value = '';
		input1.focus();
		input1.blur();
		input1.focus();
		event.preventDefault();
	}


	if (event.keyCode == 13 || event.which == 13){
			var value = input1.value;
		
		
			if (value == ''){
				menu.style.display = 'inline-block';
				help.style.display = 'none';
				setting.style.display = 'none';
				
				event.preventDefault();
				return false;
			}
			else {
			
				switch (value.substr(0,2)){
					case '-?':
						menu.style.display = 'none';
						help.style.display = 'inline-block';
						setting.style.display = 'none';
						clearInput();

						return false;
						break;
				}
				switch (value.substr(0,4)){
					case '-set':
						menu.style.display = 'none';
						help.style.display = 'none';
						setting.style.display = 'inline-block';
						clearInput();
						
						return false;
						break;
				}
				switch (value.substr(0,5)){
					case '-help':
						menu.style.display = 'none';
						help.style.display = 'inline-block';
						setting.style.display = 'none';
						clearInput();

						return false;
						break;

					case '-todo':
						firstPage.style.display = 'none';
						secondPage.style.display = 'inline-block';
						secondPage.style.opacity = '1';
						TODOinputBox.focus();
						clearInput();
					
						return false;
						break;
				}
				
				for (i=0; i<s3.length; i++){
					switch (value.substr(0,3)){
						case s3[i][0]:
										event.preventDefault();

							window.open(s3[i][2] + escape(input1.value.slice(3)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s4.length; i++){
					switch (value.substr(0,4)){
						case s4[i][0]:
							window.open(s4[i][2] + escape(input1.value.slice(4)));
							clearInput();
							return false;
							break;
					}
				}
				for (i=0; i<s5.length; i++){
					switch (value.substr(0,5)){
						case s5[i][0]:
							window.open(s5[i][2] + escape(input1.value.slice(5)));
							clearInput();
							return false;
							break;
					}
				}
				
				window.open(defaultSearch + escape(input1.value));
				clearInput();
				return false;
			}
		}
	})
 
 
/* SHOW-HIDE FOOTER */
	
	var container = document.getElementById('container');
	var footer = document.getElementById('footer');
	
	function hideShowFooter(){
		if(footer.style.display == 'none'){
			footer.style.display = 'inline-block';
			firstPage.style.opacity = '1';
		}
		else {
			footer.style.display = 'none';
			firstPage.style.opacity = opacityLow;
		}
	}
	
	function footerClick(evt) {
		
		if(firstPage.style.display !== 'none'){
			if(menu.style.display !== 'none'){
		
				if(evt.target.tagName == 'A'){
					footer.style.display = 'none';
				}
				else {
				
					if(evt.target.id == '' || evt.target.id == 'container'){
						
						hideShowFooter();
					}
					else {
						footer.style.display = '';
					}
				}
			}
		}
	}
	
	container.addEventListener('click', footerClick, false);

	
/* FIRST-SECOND PAGE */

	var clock = document.getElementById('clock');
	
	clock.addEventListener('click', function() {
		if (firstPage.style.display == 'none'){
			firstPage.style.display = 'inline-block';
			secondPage.style.display = 'none';
			inputBox.focus();
		}
		else {
			firstPage.style.display = 'none';
			secondPage.style.display = 'inline-block';
			TODOinputBox.focus();
		}
	});

	
/* TO-DO LIST */
	
	var input2 = document.getElementById('TODOinputBox');
	var todolist = document.getElementById('todolist');
	
	input2.onkeypress = function(event){
		if (event.keyCode == 13 || event.which == 13){
		
			if (input2.value == '') {
				secondPage.style.display = 'none';
				firstPage.style.display = 'inline-block';
				inputBox.focus();
				firstPage.style.opacity = '';
				return false;
			}
			else {
				todolist.innerHTML += '<li>' + input2.value + '</li>';
				input2.value = '';
				input2.focus();
				input2.blur();
				input2.focus();
				storestate();
				event.preventDefault();
			}
		}
	}
	
	todolist.addEventListener('click', function(ev){
		var t = ev.target;
		if(t.tagName === 'LI') {
			if(t.classList.contains('done')) {
				t.parentNode.removeChild(t);
				input2.focus();
			} 
			else {  
				t.classList.add('done');
				t.style.color = currentColorTheme.color7;
				input2.focus();
			}

			storestate();
		};
		
	ev.preventDefault();
	}, false);

	  
	function storestate(){
		localStorage.todolist = todolist.innerHTML;
	};

	function retrievestate(){
		if(localStorage.todolist) {
			todolist.innerHTML = localStorage.todolist;
		}
	}
	

/* RANDOM QUOTE */

	var clock = document.getElementById('clock');
	
	clock.addEventListener('mouseenter', function() {
		newQuote();
			newUpper();
			newSize();
			newFont()
			newHeight();
		
		document.getElementById("quoteDisplayBack").innerHTML = quoteBack;
		$("#quoteDisplayBack").lettering('words').children('span').lettering();
			newUpperBack();
			newSizeBack();
			newFontBack();

		newFontText();
			newColor();

		$("#quoteMessage").fadeIn(500, 'swing');
		firstPage.style.opacity = '0';
		secondPage.style.opacity = '0';
	});
	
	clock.addEventListener('mouseleave', function() {
		$("#quoteMessage").fadeOut(500, 'swing');
		firstPage.style.opacity = opacityLow;
		secondPage.style.opacity = opacityLow;
	})

	
	/* FRONT */
	
	function newQuote() {
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
		
		$("#quoteDisplay").lettering('words').children('span').lettering();
		
		$( "#quoteDisplay > span:nth-child(6n+1)" ).css('color', currentColorTheme.color1);
		$( "#quoteDisplay > span:nth-child(6n+2)" ).css('color', currentColorTheme.color2);
		$( "#quoteDisplay > span:nth-child(6n+3)" ).css('color', currentColorTheme.color3);
		$( "#quoteDisplay > span:nth-child(6n+4)" ).css('color', currentColorTheme.color4);
		$( "#quoteDisplay > span:nth-child(6n+5)" ).css('color', currentColorTheme.color5);
		$( "#quoteDisplay > span:nth-child(6n)" ).css('color', currentColorTheme.color6);
	};

	
	/* TEXT-TRANSFORM FRONT */
	var upper = ['uppercase', 'uppercase', 'lowercase', 'capitalize'];
	
	function newUpper() {
		for (i = 0; i < document.getElementById('quoteDisplay').children.length; i++ ) {
			var randomUpper = Math.floor(Math.random() * (upper.length));
			document.getElementById("quoteDisplay").children[i].style.textTransform = upper[randomUpper];
		}
	};	

	
	/* FONT-SIZE FRONT */
	var sizes = [ '50px', '100px', '30px', '70px', '40px'];

	function newSize() {

		for (i = 0; i < document.getElementById('quoteDisplay').children.length; i++ ) {
			var randomSizes = Math.floor(Math.random() * (sizes.length));
			document.getElementById('quoteDisplay').children[i].style.fontSize = sizes[randomSizes];
		}
	};

	
	/* FONT-FAMILY FRONT */
	var fonts = [ 'dk crayon crumble', 'kg second chances sketch', 'take_out_the_garbage', 'appleberry', 'no more lies', '28 days later'] ;
	
	function newFont() {
		
		for (i = 0; i < document.getElementById('quoteDisplay').children.length; i++) {
			var randomFont = Math.floor(Math.random() * (heights.length));
			document.getElementById('quoteDisplay').children[i].style.fontFamily = fonts[randomFont];
		}
	}


	/* LINE-HEIGHT FRONT */
	var heights = [ '30px', '50px', '20px', '40px'];
	
	function newHeight() {
		
		for (i = 0; i < document.getElementById('quoteDisplay').children.length; i++) {
			var randomHeights = Math.floor(Math.random() * (heights.length));
			document.getElementById('quoteDisplay').children[i].style.lineHeight = heights[randomHeights];
		}
	}

	
	/* BACK */	
	
	/* TEXT-TRANSFORM BACK */
	function newUpperBack() {
		for (i = 0; i < document.getElementById('quoteDisplayBack').children.length; i++ ) {
			var randomUpper = Math.floor(Math.random() * (upper.length));
			document.getElementById("quoteDisplayBack").children[i].style.textTransform = upper[randomUpper];
		}
	};	

	
	/* FONT-SIZE BACK */
	function newSizeBack() {
		var sizesBack = [ '20px', '10px', '15px', '10px', '35px'];
		for (i = 0; i < document.getElementById('quoteDisplayBack').children.length; i++ ) {
			var randomSizes = Math.floor(Math.random() * (sizesBack.length));
			document.getElementById('quoteDisplayBack').children[i].style.fontSize = sizesBack[randomSizes];
		}
	};


	/*FONT-FAMILY BACK */
	function newFontBack() {
		for (i = 0; i < document.getElementById('quoteDisplayBack').children.length; i++) {
			var randomFont = Math.floor(Math.random() * (heights.length));
			document.getElementById('quoteDisplayBack').children[i].style.fontFamily = fonts[randomFont];
		}
	}

	
	/* BOTTOM TEXT */
	
	/* COLOR BOTTOM */
		var colorsQ = [currentColorTheme.color1, currentColorTheme.color2, currentColorTheme.color3, currentColorTheme.color4, currentColorTheme.color5, currentColorTheme.color6, currentColorTheme.color7, currentColorTheme.mainColor, 'white'];
	
	function newColor() {
		var randomColor = Math.floor(Math.random() * (colorsQ.length));
		document.getElementById("textQuote").style.color = colorsQ[randomColor];
	};	

	function newFontText() {
		var randomFont = Math.floor(Math.random() * (heights.length));
			document.getElementById('textQuote').style.fontFamily = fonts[randomFont];
	};
	
	
	
	
	
	
		
		
		
	

		
