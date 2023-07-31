
autowatch = 1;

var middle_n;
var middle_d;
var error=0.0001;
outlets= 2;

function msg_float(x){
	float_to_fraction (x, error);
	}

function float_to_fraction (x, error)
{
	var condition= true;
    var n = Math.floor(x)
    x = x-n;
    if (x <= error){
        
		outlet( 1, 1);
		outlet (0,  n);
		return;
	}
    else {
		if (1 - error <= x){
         	
			outlet( 1, 1);
			outlet (0,  n+1);
			return;
		}
	}

    //The lower fraction is 0/1
    var lower_n = 0;
    var lower_d = 1;
    //The upper fraction is 1/1
    var upper_n = 1;
    var upper_d = 1;
    while (condition){
        //The middle fraction is (lower_n + upper_n) / (lower_d + upper_d)
        middle_n = lower_n + upper_n;
        middle_d = lower_d + upper_d;
       //If x + error < middle
        if (middle_d * (x + error) < middle_n){
            // middle is our new upper
            upper_n = middle_n;
            upper_d = middle_d;
		}
        //Else If middle < x - error
        else{
 			if(middle_n < (x - error) * middle_d){
            	// middle is our new lower
            	lower_n = middle_n;
            	lower_d = middle_d;
			}
			//Else middle is our best fraction
        	else {
				condition=false; 
			}        
		}
 	}
	
	outlet (1, middle_d);
	outlet(0,  n * middle_d + middle_n);
}