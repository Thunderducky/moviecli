var axios = require("axios");
var fs = require("fs");
var divider = "\n-----------------------------------\n"
var TV = function(){
    this.findShow = function(show){
        var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;
        console.log(URL);
        axios.get(URL).then(function(response){
            var jsonData = response.data;

            var showData = [
                "Show: " + jsonData.name,
                "Genre(s): " + jsonData.genres.join(", "),
                "Rating: " + jsonData.rating.average,
                "Network: " + jsonData.network.name,
                "Summary: " + jsonData.summary,
            ].join("\n\n")

            
            fs.appendFile("log.txt", divider + showData, function(err){
                if(err){
                    console.log(err)
                }
                console.log(divider, showData);
            })
            
        })
        
    };
}

module.exports = TV;
