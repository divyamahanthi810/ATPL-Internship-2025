class Person1{
    public void profession(String job){
        System.out.println("job is "+job);
    }
}
class Student extends Person1{
    public void profession(String job){
        System.out.println("job is "+job);
    }
}
class Teacher extends Person1{
    public void profession(String job){
        System.out.println("job is "+job);
    }
}
public class Person {

    public static void main(String args[]){
        Person1 p1=new Person1();
        p1.profession("manger");
        Person1 p2=new Student();
        p2.profession("student");
        Person1 p3=new Teacher();
        p3.profession("Teacher");


    }
    
}
