package samepackage;

public class AccessModifiersDemo {
    private String privateVar = "Private";
    String defaultVar = "Default";
    protected String protectedVar = "Protected";
    public String publicVar = "Public";

    public void accessWithinSameClass() {
        System.out.println("Same Class:");
        System.out.println(privateVar);    
        System.out.println(defaultVar);    
        System.out.println(protectedVar);  
        System.out.println(publicVar);    
    }
}
