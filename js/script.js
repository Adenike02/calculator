

 //

                var var1 ="";
               function a(val){


                var result  ='';
                //declare an empty variable var1 that stores the inputed numbers on the screen
                //val: is the choice of operator ,functions
              
                

                switch (val) { //use a switch case statement //the eval all the values entered withthe operator
                    case '+':
                            result= eval(var1); 
                               document.getElementById("f").value =result; //the getElementById is a fast way of accessing the values of the button.
                                 var1= result; //it stores  the added numbers in var1,
                                   var1 += val; //
                        break;

                    case '-':
                            result= eval(var1); 
                                document.getElementById("f").value =result;
                                   var1= result;
                                     var1 += val;
                          break;

                    case '*':
                            result= eval(var1); 
                               document.getElementById("f").value =result;
                                 var1= result;
                                  var1 += val;
                          break;
                    case '/':
                            result= eval(var1); 
                                 document.getElementById("f").value =result;
                                    var1= result;
                                     var1 += val;
                            break;
                    case '=':
                            result= eval(var1); 
                                document.getElementById("f").value =result;
                                    var1= result;
                       break;
                    case 'C':
                             document.getElementById("f").value = "";
                               var1= "";
                                  val ="";
                        break;
                     case 'TAN':
                         //document.getElementById("f").value =val;
                             var1=eval(var1);
                                var1 = Math.tan(var1);
                                  document.getElementById("f").value =var1;
                         break;
                      case 'COS':
                              var1=eval(var1);
                                  var1 = Math.cos(var1);
                                     document.getElementById("f").value =var1;
                      break;
                      case 'SIN':
                               var1=eval(var1);
                                   var1 = Math.sin(var1);
                                       document.getElementById("f").value =var1;
                          break;

                      case 'sqrt':
                               var1=eval(var1);
                                   var1 = Math.sqrt(var1);
                                       document.getElementById("f").value =var1;
                          break;

                          case 'log':
                               var1=eval(var1);
                                   var1 = Math.log(var1);
                                       document.getElementById("f").value =var1;
                          break;
                          case '%':
                               result= eval(var1); 
                                 document.getElementById("f").value =result;
                                    var1= result;
                                     var1 += val;
                          break;

                      default:
                               var1 += val;
                                document.getElementById("f").value =var1;
                      //var1+=eval(var1);
                         break;
                      }
      }; 

        /*function that calculates func tan*/
         // function tang(val){
           // document.getElementById("f").value =val;
            //t=(Math.tan(val)).value;
              // t.value;

          //}
        /* function that calculates cos*/
          //function cos(val){
            //document.getElementById("f").value =val;
            //t=(Math.cos(val)).value;
             //  t.value;
          //}

        /* function that calculates sin*/
          //function sin(val){
           // document.getElementById("f").value =val;
            //t=(Math.sin(val)).value;
              // t.value;
         // }

        /* function that catches error*/
         // function e()
         // {
           // try
            //{
             // c(eval(document.getElementById("f").value))
           // }
            //catch(e){
              //c('Err')
            //}
         // }


