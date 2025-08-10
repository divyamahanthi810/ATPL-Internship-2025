package otherpackage;

import samepackage.AccessModifiersDemo;

public class OtherPackageTest extends AccessModifiersDemo {
    public static void main(String[] args) {
        AccessModifiersDemo obj = new AccessModifiersDemo();
        System.out.println(obj.privateVar);    
        System.out.println(obj.defaultVar);     
        System.out.println(obj.protectedVar);   
        System.out.println(obj.publicVar);   
        OtherPackageTest subclassObj = new OtherPackageTest();
        System.out.println("Accessing protected via inheritance: " + subclassObj.protectedVar); 
    }
}
