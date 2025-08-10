class Parent{
    public final void testOverride(){
        System.out.println("can't override the final method");
    }
}
class Child extends Parent{
     public final void testOverride(){
        System.out.println("Trying to override the final meethod");
    }
}
public class FinalMethod{
    public static void main(String args[]){
        Parent p=new Child();
    }
}