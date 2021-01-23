/**
 * The keyword 'extends' allows a class to inherit the properites and methods of another. It "extends" the other class.
 */

 class Katishka extends Person {
     constructor() {
         /**
          * The method super() calls the constructor() of the base class.
          * 
          * When one class is extending another, super() calls the class it is extending.
          * 
          * This allows one class to pass data into another class it is extending more easily.
          */
         super("Katishka", "red");

         var p = require('./Person.js');
     }
 }