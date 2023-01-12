var fizz = document.getElementById("fizz_display");
var num_gen = document.getElementById("num_display");
var buzz = document.getElementById("buzz_display");
var num_ent = document.getElementById("num_input");
var reset_button = document.getElementById("reset_it");
var run_button = document.getElementById("num_output");
var x = 1; 
var my_fizz;



run_button.onclick = run_counter;    
reset_button.onclick = start_over; 	 

function start_over(){				
	num_gen.innerHTML = " ";
	num_ent.value = " ";
	fizz.innerHTML = " ";
    buzz.innerHTML = " ";
	clearInterval(my_fizz);
	x = 1;
}

 function run_counter(){
 my_fizz = setInterval(start_counter, 1000);				
	


};

function start_counter() {
	
	num_gen.innerHTML = x;
	fizz.innerHTML = " ";
	buzz.innerHTML = " ";
		if (x % 3 === 0 && x % 5 === 0){
				fizz.innerHTML = '"FIZZ"';
				buzz.innerHTML = '"BUZZ"';
				}else if(x % 3 === 0){
					fizz.innerHTML = '"FIZZ"';
					}else if(x % 5 === 0){
						buzz.innerHTML = '"BUZZ"' ;
        }
		if(x == num_ent.value){
			my_fizz = clearInterval(my_fizz);}
	x++;
	
};