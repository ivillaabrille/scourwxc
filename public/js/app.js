$('#app').html(`
	<div class="progress">
    	<div class="indeterminate"></div>
  	</div>
`);
setTimeout(function(){
	x();
},100);

function x(){
	var input=document.getElementById('abname').value;
	$.ajax({
		url:"https://api.spotify.com/v1/search?q=artist:"+input+"&type=album"
	}).done(function(response){
		$.ajax({
			url:response.albums.items[0].href
		}).done(function(album){
			console.log(album);
			let name = response.albums.items[0].artists[0].name;
			let aname = response.albums.items[0].name;
			let image1 = response.albums.items[0].images[0].url;
			let image2 = response.albums.items[0].images[1].url;
			let image3 = response.albums.items[0].images[2].url;
			let sname = album.tracks.items[0].name;
			let mp3_1 = album.tracks.items[0].preview_url;
			let sname2 = album.tracks.items[1].name;
			let mp3_2 = album.tracks.items[1].preview_url;
			let sname3 = album.tracks.items[2].name;
			let mp3_3 = album.tracks.items[2].preview_url;
			let sname4 = album.tracks.items[3].name;
			let mp3_4 = album.tracks.items[3].preview_url;
			let html = `
				<h1>${name}</h1>
				<h2>${aname}</h2>

				<div class="row">
				<div class="col s3">
				<img src="${image1}" />
				<h6>${sname}</h6>
				<audio controls>
	  				<source src="${mp3_1}" type="audio/mpeg">
				Your browser does not support the audio element.
				</audio>
				</div>

				<div class="col s3">
				<img src="${image2}" />
				<h6>${sname2}</h6>
				<audio controls>
	  				<source src="${mp3_2}" type="audio/mpeg">
				Your browser does not support the audio element.
				</audio>
				</div>

				<div class="col s3">
				<img src="${image3}" />
				<h6>${sname3}</h6>
				<audio controls>
	  				<source src="${mp3_3}" type="audio/mpeg">
				Your browser does not support the audio element.
				</audio>
				</div>

				<div class="col s3">
				<img src="${image1}" />
				<h6>${sname4}</h6>
				<audio controls>
	  				<source src="${mp3_4}" type="audio/mpeg">
				Your browser does not support the audio element.
				</audio>
				</div>
				</div>
			`;
		$('#app').html(html);
		});
	});
	}


