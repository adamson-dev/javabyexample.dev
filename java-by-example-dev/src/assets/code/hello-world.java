// A package is a namespace that organizes a set of related classes and interfaces. Conceptually you can think of packages as being similar to different folders on your computer.
package com.example;

// In Java, every application begins with a class definition. In the program, HelloWorld is the name of the class, and the class definition is: 
public class HelloWorld {

    // This is the main method. Every application in Java must contain the main method. The Java compiler starts executing the code from the main method.
    public static void main(String[] args) {
        // The code above is a print statement. It prints the text Hello, World! to standard output (your screen). The text inside the quotation marks is called String in Java.
        System.out.println("Hello World!");
    }
}