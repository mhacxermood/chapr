$(function(){
	let i;
	i=0;
	$("#next").click(function(e){
		e.preventDefault();
		i++;
		if(i===3){
			$("#next").hide();
		}
	})
	$("#prev").click(function(e){
		e.preventDefault();
		i--;
		if(i<4){
			$("#next").show();
		}
	})

})