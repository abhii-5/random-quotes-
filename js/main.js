var quotes = [{
	quote:"It's not who I am underneath,but what I do that defines me." , 
	author:"Batman"	},
	{quote:"Freedom is life's great lie. Once you accept that in your heart, you will know peace." , 
	author: "Loki"},
	{quote: "I don't like Bullies, I don't care where are they from.", 
	author:"Captain America"},
	{quote:"The answer you seek shall be yours, Once I claim what is mine. " , 
	author:"Thor"},
	{quote:"I shouldn't be alive, unless it was for a reason. I know what I have to do and I know it is right." , 
	author:"Iron Man"},
	{quote: "With great Power come great responsibility", 
	author:"Spiderman"},
	 {quote: "Cats come when they feel like, Not when they are told", 
	 author: "Catwomen"},
	];


var randomNumber, prevRandNum, authors;

function genrateQuote (){
	randomNumber =  Math.floor(Math.random()*quotes.length);
	prevRandNum = randomNumber;

	$("#quote").text(quotes[randomNumber].quote);
	$("#author").text("Author: "+quotes[randomNumber].author);
	authors = quotes[randomNumber].author.toUpperCase();
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
