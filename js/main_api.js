var quote,quoteLen, authors, authorLen;

function genrateQuote (){
	var url = "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

$.getJSON(url,function(data){
	console.log(data);
	
	authors = data.quoteAuthor;
	quote = data.quoteText;
	quoteLen = data.quoteText.length;
	authorLen = data.quoteAuthor.length;
	$("#quote").html('"'+data.quoteText+'"');
	$("#author").html(data.quoteAuthor);
});
}

genrateQuote();

$(".btn-success").click(function (){
	genrateQuote();

});


var msgLen ; 

$(".twitter-share-button").click(function(){
	if(quoteLen+authorLen > 138 )
	{
		msgLen = 135 - authorLen;
		quote = quote.substr(0,msgLen) + '...';

	

	window.open("https://twitter.com/intent/tweet?text="+quote + " -" +authors );
}
	else {
		window.open("https://twitter.com/intent/tweet?text="+quote + " -" +authors );
	}
});
