abstract class Applianceex{
    public abstract void turnOn();
    public abstract void turnOff();
}
class Fan extends Applianceex{
    public void turnOn(){
        System.out.println("Fan is turned ON");
    }
     public void turnOff(){
        System.out.println("Fan is turned OFF");
    }
}
class TV extends Applianceex{
    public void turnOn(){
        System.out.println("TV is turned ON");
    }
     public void turnOff(){
        System.out.println("TV is turned OFF");
    }
}
public class ApplianceAbstract{
    public static void main(String args[]){
        Applianceex fan=new Fan();
        Applianceex tv=new TV();
        fan.turnOn();
        fan.turnOff();
        tv.turnOn();
        tv.turnOff();
    }
}