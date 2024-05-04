//CALCULATIONS....
//Age
function Age(year: number){
    var age:number=2024 - year;
    console.log("Your age is ",age);
}
Age(2005);
//Area of Rectangle
function rect(length: number, width:number){
    var area:number= length*width;
    console.log("The area of rectangle is",area);
}
rect(2,3);
//Area of circle
function circle(rad:number){
    var area:number= 3.164*rad*rad;
    console.log("The area of circle is",area);
}
circle(12);
//Area of Cube
function cube(side:number){
    var area:number=6*side;
    console.log("The area of cube is",area);
}
cube(3);
//Percentage
function percent(obt_marks:number, total_marks:number){
    var percentage=obt_marks/total_marks *100;
    console.log("Percentage =",percentage,"%");
}
percent(88,150);
//CONVERSION
//Temperature conversion
function far(celsius:number){
    var farhenheit:number=9/5*celsius+32;
    console.log("Farhenheit =",farhenheit);
}
far(20);
function cel(farhenheit:number){
    var celsius:number=5.0/9.0*(farhenheit-32);
    console.log("Celsius =",celsius);
}
cel(20);
//Time 
function time(total_sec:number){
    var minutes:number=total_sec/60;
    var seconds:number=total_sec%60;
    console.log(minutes,"minutes and",seconds,"seconds");
}
time(150);
//CONDITIONAL
//Even/Odd
function classification(num:number){
    if (num%2==0){
        console.log(num,"is an even number");
    } else{
        console.log(num," is an odd number");
    }
}
classification(26);
//Positive/Negative/Zero
function nature(num:number){
    if (num>0){
        console.log(num," is a positive number");
    } else if (num<0){
        console.log(num," is negative number");
    } else{
        console.log(num,"is zero");
    }
}
nature(-77);
//Divisibility
function divisibility(num:number){
    if (num%2==0 && num%3==0){
        console.log(num," is divisible by both 2 and 3");
    }else if (num%2==0){
        console.log(num,"is divisible by 2");
    }else if(num%3==0){
        console.log(num,"is divisible by 3");
    }else {
        console.log(num,"is not divisible by either 2 or 3");
    }
}
divisibility(56);
//Vote Eligibility
function criteria(age:number, nationality:string){
    if(age>=18){
        if(nationality=="Pakistani"){
            console.log("You are eligible to vote");
        }
    } else{
        console.log("Please obtain a valid ID to vote");
    }
}
criteria(21,"Pakistani");
//Age Classification
function life_period(user_age:number){
    if(user_age>=0 && user_age<=12){
        console.log("The user is a child");
    } else if(user_age>=13 && user_age<=19){
        console.log("The user is a teenager");
    } else if(user_age>=20 && user_age<=59){
        console.log("The user is an adult");
    } else {
        console.log("The user is a senior citizen")
    }
}
life_period(55);
//Days in month
function days_in_month(month:number){
    if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        console.log("The number of days are 31");
    } else if (month==2){
        console.log("The number of days are 28");
    } else if(month==4 || month==6 || month==9 || month==11){
        console.log("The number of days are 30");
    }else{
        console.log("Invalid input");
    }
}
days_in_month(6);
//Year
function check(year:number){
    if(year%4==0){
        if(year%100==0){
            if(year%40==0){
                console.log("Year is a leap year");
            }else{
                console.log("Year is not a leap year");
            }
        }else{
            console.log("Year is not a leap year");
        }
    }else{
        console.log("Year is not a leap year");
    }
}
check(1888);