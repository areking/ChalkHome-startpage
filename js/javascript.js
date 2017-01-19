

	var opacityLow = '.1';
	
	document.addEventListener('DOMContentLoaded', function(){
		
		GetClock();
		setInterval(GetClock, 1000);
	
	}, false );

	
	/* background */
	
	var BGcolor = 'url("./img/BG2.jpg") no-repeat center fixed'
	var BGgrey = 'url("./img/BG1.jpg") no-repeat center fixed'


	/* quick search hyperlinks */
	
	var google = 'http://www.google.com/search?q=';
	var duckduckgo = 'https://duckduckgo.com/?q=';
	var defaultSearch = google;
	
	var s3 = [
	
		['-a ', 'amazon', 'https://www.amazon.it/s/ref=nb_sb_noss_2?__mk_it_IT=ÅMÅŽÕÑ&url=search-alias%3Daps&field-keywords='],
		['-f ', 'facebook', 'https://www.facebook.com/search/top/?q='],
		['-k ', 'kickass torrents', 'https://katcr.co/new/torrents-search.php?search='],
		['-i ', 'google images',	'https://www.google.it/search?hl=it&site=imghp&tbm=isch&source=hp&biw=1540&bih=762&q='],
		['-r ', 'reddit', 'https://www.reddit.com/search?q='],
		['-t ', 'twitter', 'https://twitter.com/search?q='],
		['-w ', 'wikipedia', 'https://it.wikipedia.org/wiki/'],
		['-y ', 'youtube', 'https://www.youtube.com/results?search_query='],
	
	]

	var s4 = [

		['-dd ', 'ddunlimited', 'http://www.ddunlimited.net/search.php?keywords='],
		['-im ', 'imgur', 'http://imgur.com/search?q=',],
		['-ra ', 'rarbg', 'https://rarbg.to/torrents.php?search='],
		['-sc ', 'sinonimi & con.', 'http://www.sinonimi-contrari.it/'],
		['-su ', 'subspedia', 'http://www.subspedia.tv/listaSerie.php?cerca='],
		['-tr ', 'google translate', 'https://translate.google.com/?hl=it#auto/it/'],
		['-ug ', 'ultimate guitar', 'https://www.ultimate-guitar.com/search.php?search_type=title&order=&value='],
		['-wr ', 'word reference', 'http://www.wordreference.com/iten/'],
		
	]	

	var s5 = [

		['-tpb ', 'thepiratebay', 'https://thepiratebay.org/search/'],
		
	]

	
	/* colors */
	
	var mainColor = '#d5d5d5';
	var color1 = '#f68678';
	var color2 = '#eba458';
	var color3 = '#efda70';
	var color4 = '#9fd979';
	var color5 = '#67c8d5';
	var color6 = '#b578be';
	var color7 = '#f3c0fb';
	
	
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
	
	

	
/* CHANGE OPACITY */
	
	var firstPage = document.getElementById('firstPage');
	
	var message = document.getElementById('message');
	var inputBox = document.getElementById('inputBox');
	var help = document.getElementById('help');
	

	var opacityHover = [message, inputBox, help];
	var opacityInput = [inputBox];
	

	function opacityUp(){
		firstPage.style.opacity = '1';
		BG.style.background = BGcolor;
		BG.style.backgroundSize = 'cover';
		clockbox.style.display = 'none';
		d10s.style.display = 'inline-block';
	}
	function opacityDown(){
		firstPage.style.opacity = opacityLow;
		BG.style.background = BGgrey;
		BG.style.backgroundSize = 'cover';		
		clockbox.style.display = 'inline-block';
		d10s.style.display = 'none';
	}
	

	function changeOpacityInput() {
		if (inputBox.value.length < 1) {
			if($('#message').is(":hover")){
			}
			else {
				if($('#inputBox').is(":hover")){
				}
				else {
					opacityDown();
				}
			}
		}
		else {
			opacityUp();
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
	var help = document.getElementById('help');

	
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
				help.style.display = 'none';
				
				event.preventDefault();
				return false;
			}
			else {
			
				switch (value.substr(0,2)){
					case '-?':
						help.style.display = 'inline-block';
						clearInput();

						return false;
						break;
				}
				switch (value.substr(0,5)){
					case '-help':
						help.style.display = 'inline-block';
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
	});
	
	clock.addEventListener('mouseleave', function() {
		$("#quoteMessage").fadeOut(500, 'swing');
		firstPage.style.opacity = opacityLow;
	})

	
	/* FRONT */
	
	function newQuote() {
		var randomNumber = Math.floor(Math.random() * (quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
		
		$("#quoteDisplay").lettering('words').children('span').lettering();
		
		$( "#quoteDisplay > span:nth-child(6n+1)" ).css('color', color1);
		$( "#quoteDisplay > span:nth-child(6n+2)" ).css('color', color2);
		$( "#quoteDisplay > span:nth-child(6n+3)" ).css('color', color3);
		$( "#quoteDisplay > span:nth-child(6n+4)" ).css('color', color4);
		$( "#quoteDisplay > span:nth-child(6n+5)" ).css('color', color5);
		$( "#quoteDisplay > span:nth-child(6n)" ).css('color', color6);
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
		var colorsQ = [color1, color2, color3, color4, color5, color6, color7, mainColor, 'white'];
	
	function newColor() {
		var randomColor = Math.floor(Math.random() * (colorsQ.length));
		document.getElementById("textQuote").style.color = colorsQ[randomColor];
	};	

	function newFontText() {
		var randomFont = Math.floor(Math.random() * (heights.length));
			document.getElementById('textQuote').style.fontFamily = fonts[randomFont];
	};
	
	
	
	
	
	
		
		
		
	

		
