package b;

import a.A;

public class B extends A {
    public static void main(String[] args) {
        A a = new A();
        System.out.println(a.defaultMsg);   
        System.out.println(a.protectedMsg);  
        B b = new B();
        System.out.println("Accessing protected via inheritance: " + b.protectedMsg); 
    }
}