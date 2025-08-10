class Parent{
    Parent(){
        System.out.println("Parent constructor called from child class using super");
    }
}
class Child extends Parent{
    Child(){
        super();
    }
}
public class SuperMethod{
    public static void main(String args[]){
        Parent p=new Child();
    }
}