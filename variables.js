

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

	
/* VARIABLES */
	
	
	/* headers & hyperlinks */
	
	var headersName = ['SOCIAL', 'SPORT', 'TECH', 'TORRENT', 'SCHOOL', 'UTILITY'];
	
	var hp1 = [
	'facebook', 'https://www.facebook.com/',
	'youtube', 'https://www.youtube.com/',
	'twitter', 'https://twitter.com/',
	'reddit', 'https://www.reddit.com/',
	'last.fm', 'https://www.last.fm/'
	]
	var hp2 = [
	'gazzetta', 'http://www.gazzetta.it/',
	'tuttonapoli', 'http://www.tuttonapoli.net/',
	'corriere', 'http://www.corrieredellosport.it/',
	'nba', 'http://www.nba.com/',
	'bpl', 'http://video.sky.it/sport/calcio-estero/premier_league_20162017/p2841.pls'
	]
	var hp3 = [
	'toms hardware', 'https://www.tomshw.it/',
	'hwupgrade', 'http://www.hwupgrade.it/',
	'taocomputer', 'http://www.taocomputer.eu/shop2007/',
	'amazon', 'https://www.amazon.it/',
	]
	var hp4 = [
	'ddunlimited', 'http://www.ddunlimited.net/',
	'tnt village', 'http://www.tntvillage.scambioetico.org/',
	'rarbg', 'https://rarbg.to/torrents.php',
	'sonarr', '#',
	'itasa', 'http://www.italiansubs.net/'
	]
	var hp5 = [
	'docenti unina', 'https://www.docenti.unina.it/Welcome.do',
	'unina', 'http://www.scuolapsb.unina.it/',
	'mechanical ing.', 'http://www.ingegneriameccanica.unina.it/',
	'segrepass', 'https://www.segrepass2.unina.it/identificazione.do',
	]
	var hp6 = [
	'ultimate guitar', 'https://www.ultimate-guitar.com/',
	'fantasoccer', 'http://leghe.fantagazzetta.com/',
	'4chan', 'http://www.4chan.org/',
	'freenode', 'https://webchat.freenode.net/',
	]
	var hp8 = [
	'[o\' mare]', '#',
	'[o\' sole]', '#',
	'[pizza]', '#',
	'[mandolino]', '#',
	'[meatballs spaghetti]', '#',
	'[maradona]', '#',
	'[gomorra]', '#',
	'[bell\' stu orologio]', '#'	
	]
	

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

	
	/* background */
	
	var blackBG = 'url("img/blackChalkboard.jpg") no-repeat center fixed';
	var greenBG = 'url("img/greenChalkboard.jpg") no-repeat center fixed';
	var customBG = 'url("img/napoli.jpg") no-repeat center fixed';
	
	
	/* colors */
	
	var rainbowColors = {
		mainColor : '#d5d5d5', // links, help, setting, to-do list
		color1 : '#f68678',    // h1
		color2 : '#eba458',    // h2
		color3 : '#efda70',    // h3
		color4 : '#9fd979',    // h4
		color5 : '#67c8d5',    // h5
		color6 : '#b578be',    // h6
		color7 : '#f3c0fb',    // input
		color8 : '#ffffff',    // footer
		color9 : '#d5d5d5',    // clock, message 
	}
	var whiteColors = {
		mainColor : '#d5d5d5',
		color1 : '#ffffff',
		color2 : '#ffffff',
		color3 : '#ffffff',
		color4 : '#ffffff',
		color5 : '#ffffff',
		color6 : '#ffffff',
		color7 : '#ffffff',
		color8 : '#ffffff',
		color9: '#ffffff',
	}
	var darkColors = {
		mainColor : '#828282',
		color1 : '#969696',
		color2 : '#969696',
		color3 : '#969696',
		color4 : '#969696',
		color5 : '#969696',
		color6 : '#969696',
		color7 : '#969696',
		color8 : '#969696',
		color9 : '#828282',
	}
	
	var colorTheme = [rainbowColors, whiteColors, darkColors];


	/* fonts */
	
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


