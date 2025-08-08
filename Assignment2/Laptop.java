public class Laptop {
        String brand;
        int ram;
        int processor;
    public Laptop(String brand,int ram){
        this.brand=brand;
        this.ram=ram;
    }
    public Laptop(String brand,int ram,int processor){
        this.brand=brand;
        this.ram=ram;
        this.processor=processor;
    }
    public void display(){
        System.out.println("Brand is "+brand+" contains ram "+ram+" processor is "+processor+"hr");
    }
    public static void main(String[] args) {
        Laptop f1=new Laptop("dell",4);
        Laptop f2=new Laptop("hp",4,45);
        f1.display();
        f2.display();
    }
    }
