package samepackage;

public class SamePackage {
    public static void main(String[] args) {
        AccessModifiersDemo obj = new AccessModifiersDemo();

        System.out.println("Same Package:");
        System.out.println(obj.privateVar);   
        System.out.println(obj.defaultVar);   
        System.out.println(obj.protectedVar);   
        System.out.println(obj.publicVar);       
    }
}