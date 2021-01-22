// Chapter (1)

// alert("Error! please enter a valid password");
// alert("Welcome to Js land...\n Happy Coding");
// alert("welcome to Js Land...");
// alert("prevent this page from creating dialogs");
// alert("Hello...l can run js through my web browser's console");

//Chapter (2)


//  var a = "Jhone";
//  var b = "Doe" ;
//  var c = a+b;
//  alert(c);

//  var a = 15;
//  var b = " years old";
//  var c = a+b;
//  alert(c);

//  var a = "Certified Mobile Application Development";
//  alert(a);

//  var a = " PlZZA\n PlZZ\n PlZ \n Pl\n P\n";
//  alert(a);

//  var a = "My email address is example";
//  var b = "@ABC.com" ;
//  var c = a+b;
//  alert(c);

//  var a = "I am trying to learn from the book A smarter\n way to learn JavaScript";
//  alert(a);

 
//   document.write("Yah! I can write HTML content through JavaScript");

//  var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
//  alert(a);


//Chapter (3)

// var a = "I am 15 years old"
// alert(a);

// var a = "You have viited this site 1 time"
// alert(a);
   




// document.write("My brith year is 1990  </br>  Data  type of my ddeclared variable is number   </br> ")


// var a = "<b> John Doe </b> oqdered <b> 5 T-shirt </b>(s) on XYZ Clothind store";
// document.write(a);


//Chapter (4)

// var a = "<h2> Rules for naming JS variables </h2> <br>"
// var b = " Variable names can only contain ,number,$ and _. for example : Smy_ 1stVariable <br> Variables must begin with a letter. $ or _.  For example $name, _name or name <br>";
// var c = "Variable names are case sensitive <br> Variable names should not be JS keywords "
// document.write(a+b+c);

//Chapter (5)

// var a = 3;
// var b = 5;
// var c= a+b
// document.write(c)


// var a = 5 ;
// var b = ++a + ++a + --a - a - --a - a + a-- - ++a + a--  - a-- - ++a;
// document.write(b)


// var ticket = 600*5
// document.write("total cost to buy 5 ticket to a movie is " + ticket );


// for (var i=1; i < 10; i++){
//     document.write("4" + "x" + i + "=" + 4*i + "<br>")
// }           
         

// var celsius = 25;
// var celsiusInF = (celsius*9)/5 + 32;
// document.write (celsius + '°C is ' + celsiusInF   + '°F <br>' );
// var fahrenheit  = 70;
// var fahrenheitInC = ((fahrenheit - 32)*5)/9;
// document.write(  fahrenheit + '°F is ' + fahrenheitInC + '°C');


  
// var shopping = 650*3+100*7+100
// document.write( "<h2> shopping cart </h2> <br>  Price of item 1 is 650 <br> Price of item 2 is 100 <br> Ordered quantity of item 1 is 3 <br> Ordered Quantity of item 2 is 7 <br>  Shipping charges 100  <br><br> total cost of your order is   " + shopping )


//  var MarksSheet =840/9.8
//  document.write( "<h2>  Marks Sheet </h2> <br>  Total Marks:980 <br> marks obtained:804 <br> percentage: " + MarksSheet )


// var dollar = prompt (100)
// var riyal = prompt (28)
// var rupees = prompt (1)
// var currency  = dollar*rupees
// document.write(" <h2>  Currency in PKR </h2> Total Currency in PKR  :" + currency );


// var birthYear = 1992;
// var futureYear  = 2016;
// var age  = futureYear - birthYear;
// document.write( "<h2>  Age Calculator </h2> <br>  birthYear = 1992 <br>futureYear  = 2016 <br> Your  age  is = " + age );

// var radius = 20;
// var circumference = Math.PI *2*radius;
// document.write(" <h1> The Geometrizer </h1> <br> Radius of a circle: 20 <br>  The circumference is " + circumference);
// var area = Math.PI * radius*radius;
// document.write(" <br> The area is " + area);


//  var Calculator = (65-15)*3
//  var  calculate =  Calculator  * 3
//  document.write( "<h1> The Lifetime Supply Calculator </h1> <br> favorite snack: chocolate chip <br>  current age: 15 <br> Estimated Maximum Age: 65 <br> Amount of snacks per day: 3 <br> You will need    " + Calculator  )
//  document.write(" chocolate chip to last you until the ripe old age of 65  ")

//Chapter (6-9)
 

// var a = 10 
// var b = ++a + a++ + --a + --a
// document.write(a + "<br>" )
// document.write( ++a + "<br>")
// document.write(++a + "<br>")
// document.write(--a + "<br>")
// document.write(--a)


// var a = 2
// var b = 1
// var c = --a - --b + ++b + b--;
// document.write(c)

// var a = prompt("Enter your","your name")
// alert("welcome")


// var a = prompt("Enter your lucky number"," enter number")
// alert("you are lucky")


// var subject1 = prompt("Enter subject 1 name", "English");
// var subject2 = prompt("Enter subject 2 name", "Urdu");
// var subject3 = prompt("Enter subject 3 name", "Math");

// var totalMarks = 100;

// var sub1Obt = prompt("Enter" + subject1 + "Obtained marks")
// var sub2Obt = prompt("Enter" + subject2 + "Obtained marks")
// var sub3Obt = prompt("Enter" + subject3 + "Obtained marks")

// var sub1Per = (sub1Obt / totalMarks) * 100;
// var sub2Per = (sub2Obt / totalMarks) * 100;
// var sub3Per = (sub3Obt / totalMarks) * 100;
// var percentage =sub1Obt + "%";
// var percentage =sub2Obt + "%";
// var percentage =sub3Obt + "%";



// document.write("<table border='2'>")
// document.write("<tr>")
// document.write("<th>")
// document.write("Subject")
// document.write("</th>")
// document.write("<th>")
// document.write("Total Marks")
// document.write("</th>")
// document.write("<th>")
// document.write("Obtained Marks")
// document.write("</th>")
// document.write("<th>")
// document.write("Percentage")
// document.write("</th>")
// document.write("</tr>")

// document.write("<tr>")
// document.write("<td>")
// document.write(subject1)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub2Obt)
// document.write("</td>")
// document.write("<td>")
// document.write(sub1Per + "%")
// document.write("</td>")
// document.write("</tr>")


// document.write("<tr>")
// document.write("<td>")
// document.write(subject2)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub3Obt)
// document.write("</td>")
// document.write("<td>")
// document.write(sub2Per + "%")
// document.write("</td>")
// document.write("</tr>")


// document.write("<tr>")
// document.write("<td>")
// document.write(subject3)
// document.write("</td>")
// document.write("<td>")
// document.write(totalMarks)
// document.write("</td>")
// document.write("<td>")
// document.write(sub1Obt)
// document.write("</td>")
// document.write("<td>")
// document.write(sub3Per + "%")
// document.write("</td>")
// document.write("</tr>")

// document.write("<td>")
// document.write("</td>")

// document.write("<td>")
// document.write(300)
// document.write("</td>")

// document.write("<td>")
// document.write(sub1Per + sub2Per + sub3Per);
// document.write("</td>")

// document.write("<td>")
// document.write( percentage);
// document.write("</td>")



// document.write("</table>");

//Chapter (9-11)
  

// var cities = ["karachi","lahore","islamabad","Faislabad" ];

// for( var i = 0; i < cities.length; i++){
//     if(cities[i] === "karachi"){
// alert(cities[i] + "is a city of light")
//     }
// }






// var gender = prompt("Gender","Enter Your gender ");
// if(gender == "male"){
//     alert("Good Morning Sir")
// }
// else if (gender == "female"){
//     alert("Good Morning Ma’am")
// }
// else {
//     alert("Not Allowed")
// }


// var trafficsignal = prompt(" road traffic signal","Enter Your position ");
// if(trafficsignal == "red"){
//     alert("Must Stop")
// }
// else if (trafficsignal == "yellow"){
//     alert("Ready To Move")
// }
// else if (trafficsignal == "green"){
//     alert("Move now")
// }
// else {
//     alert("Not support")
// }


// var fuel = prompt("Enter your fuel","Enter Your fuel Value ");
// if(fuel == 0.25){
//     alert("Please refill the fuel in your car")
// }
// else {
//     alert("Not refill the fuel in your car")
// }
  

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }





// var subject1 = prompt("Enter subject 1 name", "English");
// var subject2 = prompt("Enter subject 2 name", "Urdu");
// var subject3 = prompt("Enter subject 3 name", "Math");

// var totalMarks = 100;

// var sub1Obt = prompt("Enter" + subject1 + "Obtained marks")
// var sub2Obt = prompt("Enter" + subject2 + "Obtained marks")
// var sub3Obt = prompt("Enter" + subject3 + "Obtained marks")

// var sub1Per = (sub1Obt / totalMarks) * 100;
// var sub2Per = (sub2Obt / totalMarks) * 100;
// var sub3Per = (sub3Obt / totalMarks) * 100;
// var percentage =sub1Obt + "%";
// var percentage =sub2Obt + "%";
// var percentage =sub3Obt + "%";

// document.write("<h2>MarksSheet</h2>")

// document.write("Total Marks:")
// document.write("300<br>")

// document.write("Obtained Marks:")
// document.write(sub1Per + sub2Per + sub3Per);
// document.write("<br>")

// document.write("Percentage ")
// document.write( percentage );

// document.write("<br> Grade:")

// var percent = (sub1Per + sub2Per + sub3Per)
// if(percent >= 80 && percent <= 100){
//     document.write(" A+ <br> Remarks:Very Good")
// }
// else if(percent >= 70 && percent <= 80){
//     document.write("A <br> Remarks:Good")
// }
// else if(percent >= 60 && percent <= 70){
//     document.write("B <br> Remarks:You need to improve")
// }
// else if(percent >= 50 && percent <= 60){
//     document.write("C <br> Remarks:You need to improve")
// }
// else if(percent >= 40 && percent <= 50){
//     document.write("D <br> Remarks:You need to improve")
// }
// else if(percent >= 33 && percent <= 40){
//     document.write("E <br> Remarks:You need to improve")
// }
// else if(percent >= 0 && percent <= 33){
//     document.write("F <br> Remarks:You need to improve")
// }
// else {
//     document.write("You didnot write correct percentage")
// }

   


// var number = prompt("Chose number 1-10 ");
//  if(number >= 5 && number <= 5 ){
//     document.write("yes")
// }

// else{
//     document.write("plesa try agin")
// }




// var number = prompt("Enter The Number to check even or odd number")
// var cheak = ("%d",number );
// if ((number % 2) == 0){
// document.write( number," This is even number");
// }else{
//    document.write("not information")

// }




// var T = prompt("Check Temperature ");
//  if(T >= 40 && T <= 49){
//     document.write("It is too hot outside.")
// }
// if(T >= 30 && T <= 39){
//     document.write("The Weather today is Normal.”")
// }
// if(T >= 20 && T <= 29){
//     document.write("Today’s Weather is cool.")
// }
// if(T >= 10 && T <= 19){
//     document.write("OMG! Today’s weather is so Cool.")
// }
// if(T >= 0 && T <= 9){
//     document.write(" weather is so Very  Cool.")
// }
// else{
//     document.write("not information")
// }



// var a=parseInt(prompt("Enter First Number"))
// var b=parseInt(prompt("Enter Second Number"))
// var sum=a+b;
// var sub=a-b;
// var mul=a*b;
// var div=a/b;
// var mod=a%b;
// document.write("<h2> Calculator </h2>")
// document.write("Addition: "+sum);
// document.write("<br>Subtraction: "+sub);
// document.write("<br>Multiplication: "+mul);
// document.write("<br>Division: "+div);
// document.write("<br>Reminder: "+mod);



//Chapter (12-13)


// var c = prompt("Enter any character:")
// 	if (c>=65 && c<=90){
//     document.write("Character is a capital letter");
//     }
// 	else if (c>=97 && c<=122){
//     document.write("Character is a small letter");
//     }
//     else if (c>=48 && c<=57){
//      document.write("Character is a digit");
//     }
//     else if (c>0 && c<=47){
//         document.write("Character is a special symbol");
//        }
//        else if (c>=58 && c<=64){
//         document.write("Character is a special symbol");
//        }
//        else if (c>=91 && ch<=96){
//         document.write("Character is a special symbol");
//        }
//        else if (c>=123 && c<=127){
//         document.write("Character is a special symbol");
//        }
 

// var a,b;
// a=prompt("Enter 1st Number");
// b=prompt("Enter 2st Number");
// if(a>b){
// alert(a+"is greater number")
// } 
// else{
// alert(b+"is greater number")     
// }
    


// var number =prompt("Enter  Number");
// if(number>0){
// alert(number+" is positive number")
// }
// else if(number<0){
// alert(number+" is Negative number")
// }
// else if(number==0){
// alert(number+" is Zero")
// }  
// else{
// alert(number+" is not a number")     
// }


// var vowelChecker = prompt("Enter string") 
//   for(i=0; i <=vowelChecker.length; i++ ){
//     if (vowelChecker == "a"||"A"||"e"||"E"||"i"||"I"||"o"||"O"||"u"||"U") {
//         alert("The character is a Vowel");
//     }
//     else {
//     alert ("The character is a Consonant");
//     }
//   }





//Chapter (14-16)


// var qualification = ['Qualification','SSC','HSC','BSC','BS','BCOM','BS',];
// for ( var i = 0; i < qualification.length; i++){
// document.write("<br>" + [i]+")"+qualification[i])
// }


// var student = ["Aneeq","Basit","Munir"];
// var score = [,100,200,300];
// var marks = 500;
// for(i=0;i<=3;i++){
//     var student = (student[0]/marks)*100;
//     }
// for(i=0;i<=3;i++){
//     document.write("score of"+ student[i]+"is"+score[i]+"percentage:"+" "%"");
// }



//  var student = [];

// var student = ("%d",number );
// if ((number % 2) == 0){
// document.write( number," This is even number");
// 



// var arr = ["320","230","480","120"];
// var min = arr[0];
//  for(var i = 0; i<=arr.length ;i++ ){
//      if(arr[i]< min){
//          min= arr[i];
//          document.write("score of students:  " + arr + "<br>");
//          document.write(min);
         
//      }
     
//  }
 

//Chapter (17-20)
 
//  var number = ["0 1 2 3", "1 0 1 2", "2 1 0 1"]
// console.log(number)


//  for (var i=1; i <= 10; i++){
//      document.write( i + "<br>")
//  }  


// var table=prompt("Enter any number ")
// for (var i=1; i <= 10; i++){
//     document.write(table + "x" + i + "=" + (table*i) + "<br>")
// }    
 

// var table=prompt("Enter any number ")
// var a =prompt("Enter length of table ")
// for (var i=1; i <= a; i++){
//     document.write(table + "x" + i + "=" + (table*i) + "<br>")
// } 


// var fruits = ["apple", "banana", "mango", "orange",
// "strawberry"]
// console.log(fruits)

//  for (var i=1; i <= 15; i++){
//      document.write( i + ",")
//  } 
//   document.write("<br>")
//  for (var i=10; i > 0;i-=1){
//      document.write( + i + ",")
//  } 
//  document.write("<br>")
//  for (var i=1; i <= 20;i++){
//      if(i%2==0){
//         document.write(  i + ",")
//     }
//  } 
//  document.write("<br>")
//  for (var i=1; i <= 20;i++){
//      if(i%2!=0){
//         document.write(  i + ",")
//     }
//  } 
//  document.write("<br>")
//  for (var i=1; i <= 20;i++){
//      if(i%2==0){
//         document.write(  i + "k,")
//     }
//  } 
//  for (var i=0; i <= 20; i*2){
//      document.write( i + ",")
//  }


// var arr =prompt("w");
// var arra =[10,30,57,93,39,77];
// if(arr>0 && 1<){
//     alert(number+" is positive number")
//     }
//     else if(number<0){
//     alert(number+" is Negative number")
//     }


// var bakery =prompt("enter")
// var bakery = ["cake","apple pie","cookie","chips","patties"]

// for(var i =0; i < bakery.length; i++){
//    if(bakery [i] === "cake"){
//        alert(bakery[i]+" is available")
//    }

// }


// var bakery =prompt("enter")
// var bakery = ["cake","apple pie","cookie","chips","patties"]
// for(var i =0; i < bakery.length; i++){
//     if(bakery [i] === "cookie"){
//         alert(bakery[i]+" is not available")
//     }
 
//  }


// var arr = [10,30,57,93,39,77];
// var max = arr[0];
//  for(var i = 0; i<=arr.length ;i++ ){
//      if(arr[i] > max){
//          max= arr[i];
//          console.log("setting max to " + max);
         
//      }
     
//  }
//  console.log(max);

 
// var arr = [10,30,57,93,39,77];
// var min = arr[0];
//  for(var i = 0; i<=arr.length ;i++ ){
//      if(arr[i]< min){
//          min= arr[i];
//          console.log("setting min to " + min);
         
//      }
     
//  }
//  console.log(min);


//  for (var i=1; i <= 20; i++){
    
//      document.write( i * 5 +  ",")
//  }      