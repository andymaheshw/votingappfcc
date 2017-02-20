
console.log(poll);
$( "button" ).click(function(){
	var votes = parseInt(this.value);
	votes += 1
	this.value = votes
	$("#"+this.name).text(votes)
	$.ajax({url: "/voted/?option="+this.name+"&pollid="+ poll._id + "&numvotes="+ votes, success: function(result){
		console.log(votes);
    }}); 
}
);