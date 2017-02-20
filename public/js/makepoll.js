$( ".add_option" ).click(function() {
	var num_options = $("#options").children().length;
	var value = $("#Option2").clone();

	var form = value.find(".form-group");
	console.log(form);
	form.removeAttr('id').attr("id", "Option"+ (num_options+1));
	
	var label = value.find("label");
	label.text("Option "+(num_options+1))

	var input = value.find("input");
	input.removeAttr('id').attr("id","Option_"+(num_options+1));
	input.removeAttr('placeholder').attr("placeholder","Option "+(num_options+1));
	input.removeAttr('name').attr("name","Option_"+(num_options+1));
	console.log(input);
	$("#options").append(value);
});