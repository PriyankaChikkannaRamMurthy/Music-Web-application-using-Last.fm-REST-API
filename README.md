# Music-Web-application-using-Last.fm-REST-API

The Music web application is implemented using HTML, CSS, PHP, Javascript and REST API. 
One can refer the page for API Key : 

https://www.last.fm/api/rest 

When the user passes the Musician name to the HTML page, it is passed as the query string concatenated with the host name URL "http://ws.audioscrobbler.com/2.0/" where the page is extracted through the curl operator in the php page. Later the json response is received and upon json formatting it results in the containing the results pertaining to the Musicians profile like Musician name, Musician Bio, image, top albums etc.
