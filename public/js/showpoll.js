$( "button" ).click(function(){
	console.log(this.name);
	$.ajax({url: "/voted/?option=this.name", success: function(result){
        $("#div1").html(result);
    }});
}
);