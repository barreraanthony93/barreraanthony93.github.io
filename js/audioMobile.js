Amplitude.init({
			"songs": [
				{
					"name": "Living Proof",
					"artist": "Gregory Alan Isakov",
					"album": "The Weatherman",
					"url": "http://a1537.phobos.apple.com/us/r30/Music4/v4/60/af/eb/60afeba7-f8d9-a920-ff5b-b8666fdc2de4/mzaf_3379426683594665460.plus.aac.p.m4a",
					"live": false,
					"cover_art_url": "images/theweatherman.jpg"
				},
				{
					"name": "Rooms",
					"artist": "Mia and Jonah",
					"album": "Rooms For Adelaide",
					"url": "http://a656.phobos.apple.com/us/r30/Music/2d/d1/52/mzm.oymgnziu.aac.p.m4a",
					"live": false,
					"cover_art_url": "images/roomsforadelaide.jpg"
				},
				{
					"name": "Suburban War",
					"artist": "The Arcade Fire",
					"album": "The Suburbs",
					"url": "https://p.scdn.co/mp3-preview/f5b1bef707e8be7052a1efa5a39555c48e913d36",
					"live": false,
					"cover_art_url": "images/thesuburbs.jpeg"
				}
			],
			"default_album_art": "images/no-cover-large.png"
		});

		var expanded = false;
		var playlistEpxanded = false;
		/*
			jQuery Visual Helpers
		*/
		$('#small-player').hover(function(){
			$('#small-player-middle-controls').show();
			$('#small-player-middle-meta').hide();
		}, function(){
			$('#small-player-middle-controls').hide();
			$('#small-player-middle-meta').show();

		});

		$('#top-large-album').hover(function(){
			$('#top-header').show();
			$('#small-player').show();
		}, function(){
			if( !$('#top-header').is(':hover') && !$('#small-player').is(':hover') ){
				$('#top-header').fadeOut(1000);
				$('#small-player').fadeOut(1000);
			}
		});

		$('#top-header').hover(function(){
			$('#top-header').show();
			$('#small-player').show();
		}, function(){

		});

		/*
			Toggles Album Art
		*/
		$('#small-player-toggle').click(function(){
			$('.hidden-on-collapse').show();
			$('.hidden-on-expanded').hide();
			/*
				Is expanded
			*/
			expanded = true;

			$('#small-player').css('border-top-left-radius', '0px');
			$('#small-player').css('border-top-right-radius', '0px');
		});

		$('#top-header-toggle').click(function(){
			$('.hidden-on-collapse').hide();
			$('.hidden-on-expanded').show();
			/*
				Is collapsed
			*/
			expanded = false;

			$('#small-player').css('border-top-left-radius', '5px');
			$('#small-player').css('border-top-right-radius', '5px');
		});

		$('.playlist-toggle').click(function(){
			if( playlistEpxanded ){
				$('#small-player-playlist').hide();

				$('#small-player').css('border-bottom-left-radius', '5px');
				$('#small-player').css('border-bottom-right-radius', '5px');

				$('#large-album-art').css('border-bottom-left-radius', '5px');
				$('#large-album-art').css('border-bottom-right-radius', '5px');

				playlistEpxanded = false;
			}else{
				$('#small-player-playlist').show();

				$('#small-player').css('border-bottom-left-radius', '0px');
				$('#small-player').css('border-bottom-right-radius', '0px');

				$('#large-album-art').css('border-bottom-left-radius', '0px');
				$('#large-album-art').css('border-bottom-right-radius', '0px');

				playlistEpxanded = true;
			}
		})