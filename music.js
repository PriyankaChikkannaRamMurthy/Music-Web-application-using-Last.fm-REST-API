
var api_key = "5d7abe3d045605da350cfe59205b7b27";
// Port number configured as 8000

// Put your Last.fm API key here
function sendRequest () {
    var xhr = new XMLHttpRequest();
	var topalbum_xhr = new XMLHttpRequest();
    var method = "artist.getinfo";
	var topalbum_method = "artist.gettopalbums";
    var artist = encodeURI(document.getElementById("form-input").value);
	
	
	xhr.open("GET", "proxy.php?method="+method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
	topalbum_xhr.open("GET", "proxy.php?method="+topalbum_method+"&artist="+artist+"&api_key="+api_key+"&format=json", true);
    

	xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
			document.getElementById("artist-name").innerHTML = "<pre>" + "<u>Name</u>: "+ json.artist.name +"\n\n"+"</pre>";
			document.getElementById("bio").innerHTML = "<pre>" +  json.artist.bio.summary +"</pre>";
			document.getElementById("output").style.fontFamily = "Verdana";	
		    document.getElementById("output").innerHTML = "<pre>" + "<u>Name</u>: "+json.artist.name +"\n\n<u>URL</u>:<a href="+json.artist.url+">"+json.artist.url+" </a>" +"\n\n<u>Biography</u>: "+json.artist.bio.summary+"\n\n<u>Image</u>:"+json.artist.image[2]['#text']+"\n\n<img src="+json.artist.image[2]['#text']+" />"+"\n\n<u>Similar Artists</u>:\n"+"</pre>";
		  
			for(var i=0;i<json.artist.similar.artist.length;i++)
			{
				document.getElementById("output").innerHTML +="<pre>"+json.artist.similar.artist[i].name+" \n</pre>";
			} 
				
        }
    };
	
	topalbum_xhr.setRequestHeader("Accept","application/json");
	topalbum_xhr.onreadystatechange = function () {
		
        if (this.readyState == 4) {
            var topalbum_json = JSON.parse(this.responseText);
            var topalbum_str = JSON.stringify(topalbum_json,undefined,2);
			document.getElementById("output").innerHTML +="<pre>\n\n<u>Top Albums</u>:\n<pre>";
			for(var j=0;j<topalbum_json.topalbums.album.length;j++)
			{
			document.getElementById("output").innerHTML += "<pre>"+"Album Name (Title):" +topalbum_json.topalbums.album[j].name+"\nImage (Picture):"+"\n\n<img src="+topalbum_json.topalbums.album[j].image[2]['#text']+" />\n\n"+"</pre>"; 
		   } 
		   
        }
    };
	
	
    xhr.send(null);
	topalbum_xhr.send(null);
}

