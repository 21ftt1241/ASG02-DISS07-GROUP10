		var ratee = document.getElementsByClassName("rating1");
		var after = document.getElementsByClassName("rating2");

		var total = 0;
		var numppl = 0;
		var average = 0;

		function rate(){
			var j = 5;
			for (var i = 0 ; i < ratee.length ; i++) {
				numppl = 1;
				if (ratee[i].checked) {
					total = j;
					break;
				}
				j -= 0.5;
			}

			var ltotal = localStorage.getItem("total");
			var lppl = localStorage.getItem("ppl");

			total += Number(ltotal);
			numppl += Number(lppl);
			average = total/numppl;
			
			localStorage.setItem("total" , total);
			localStorage.setItem("ppl" , numppl);
			localStorage.setItem("ratings" , average);

			var avg1 = localStorage.getItem("ratings");

			//DISPLAYING AVERAGE RATING
			j = 5;
			for (var i = 0 ; i < after.length ; i++) {

				if (j > avg1) {
					j-=0.5;
					after[i].checked = false;
				}
				else {
					after[i].checked = true;
				}
			}	
		}

		document.addEventListener("DOMContentLoaded", function(event) {
			var avg1 = localStorage.getItem("ratings");
			j = 5;
			for (var i = 0 ; i < after.length ; i++) {

				if (j > avg1) {
					j-=0.5;
					after[i].checked = false;
				}
				else {
					after[i].checked = true;
				}
			}
		})
		
		function back(){
			var pagenum = localStorage.getItem('cover_page')
			var pageReturn = document.getElementById("pageReturn");
			if(pagenum==1){
				pageReturn.href = "s1cp.html";
			}
			else if(pagenum==2){
				pageReturn.href = "s2cp.html";
			}else if (pagenum == 3){
				pageReturn.href = "s3cp.html";
			}
		}