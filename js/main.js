class baseClass{
    
    constructor(first, second, third){
        this.firstPropertyBaseClass = first;
        this.secondPropertyBaseClass = second;
        this.thirdPropertyBaseClass = third;
    }

    firstMethod(){
        return `this is the first method of baseClass - first parameter = ${this.firstPropertyBaseClass}`;
    }// end of first method

    secondMethod(){
        return `this is the second method of baseClass - second parameter = ${this.secondPropertyBaseClass}`;
    }// end of second method

    thirdMethod(){
        return `this is the third method of baseClass - third parameter = ${this.thirdPropertyBaseClass}`;
    }

} // end of baseClass

class firstExtensionBaseClass extends baseClass{

    super;

    firstUniqueMethod(){
        return "this is the first unique method of firstExtensionBaseClass";
    }

    secondUniqueMethod(){
        return "this is the second unique method of secondExtensionBaseClass";
    }

    firstMethod(){
        return "this is firstExtensionBaseClass overriding firstMethod from baseClass";
    }
    
} // end of firstExtensionBaseClass

class secondExtensionBaseClass extends baseClass{

    super;

    thirdUniqueMethod(){
        return "this is the first unique method of firstExtensionBaseClass";
    }

    forthUniqueMethod(){
        return "this is the second unique method of secondExtensionBaseClass";
    }

    secondMethod(){
        return "this is firstExtensionBaseClass overriding secondMethod from baseClass";
    }
    
} // end of firstExtensionBaseClass
console.log("==========test1===========");
let test1 = new baseClass(1,2,3);
console.log("first method from base class:", test1.firstMethod());
console.log("second method from base class:", test1.secondMethod());
console.log("third method from base class:", test1.thirdMethod());
console.log("==========test2===========");
let test2 = new firstExtensionBaseClass(4,5,6);
console.log(test2.firstUniqueMethod());
console.log(test2.secondUniqueMethod());
console.log(test2.firstMethod());
console.log(test2.secondMethod());
console.log(test2.thirdMethod());
console.log("==========test3===========");
let test3 = new secondExtensionBaseClass(7,8,9);
console.log(test3.thirdUniqueMethod());
console.log(test3.forthUniqueMethod());
console.log(test3.firstMethod());
console.log(test3.secondMethod());
console.log(test3.thirdMethod());