/**
 * The 'class' keyword defines a future type of object.
 * 
 * We define its properties and methods.
 * Then, when the 'new' keyword is used, an object is created based on it.
 */

 class Person {
     /**
      * constructor() is a special method.
      * 
      * When the keyword 'new' is used, it is called.
      * It "constructs" the object through data passed to it.
      */
     constructor(name, favoriteColor) {
         this.name = name;
         this.favoriteColor;
     }

     speak() {
         console.log(chalk, red ("My name is " + this.name + "."));
     }
 }