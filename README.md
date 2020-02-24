# INFO3114 - LAB03

2. Explanation of how the output is generated; i.e.
   How does the code work starting from line 18 and finishing with the completion of line 20?
			   
   Remark: I had the include the <!doctype html> and <meta charset='utf8'> because the code
   was not running on Firefox, throwing errors. So the statement had to be changed to lines 18
   and 20.

   >>>>> console.log(obj.prop.getFullName())

   This line calls the execution of the function inside the propertie "prop" of the object "obj".
   "prop" is itself an object, with its own scope. As the function is called to execute, "this"
   refers to the scope defined by "prop". The function called to execute is a property of "prop".
   As "this" refers to the scope of "prop", in this scope, fullName is "Jim Cooper".

   >>>>> console.log(test());

   This line calls the execution of the function test, that is a function expression. The definition
   of the function test is made by refering to the function getFullName inside the object "prop" that
   is a property of the obj "obj". As the function test refers to the original function definition
   getFullName, it is as a bearer of the definition. So test will be, for execution sake:
   test = getFullName = function (){return this.fullName}

   Its like an instance of the getFullName function.

   The key to understand this is actually to understande to which scope "this" refers.
   As "test" is executed under the "global" scope, "this" refers also to the global scope, that is where
   the "execution" scope is in this line. So, in global scope, full name is "Gart Santor". That is
   why this second "console.log" outputs "Gart Santor".
        
