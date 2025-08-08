class vehicle1{
    public void start(){
        System.out.println("Vehicle starts");
    }
}
class Bike extends vehicle1{
    public void start(){
        System.out.println("Bike starts");
    }
}
class Car extends vehicle1{
    public void start(){
        System.out.println("Car starts");
    }
}

public class Vehicle {
    public static void main(String args[]){
        Bike v1=new Bike();
        vehicle1 v2=new Car();
        vehicle1 v3=new vehicle1();
        v1.start();
        v2.start();
        v3.start();
    }
}
