public class AnimalOverride{
    public static void main(String args[]){
        Animal a1 = new Animal();
        Animal a2 = new Dog();
        Animal a3 = new Cat();
        Animal a4 = new Cow();
         a1.makeSound();
         a2.makeSound();
         a3.makeSound();
         a4.makeSound();
    }
}
class Animal{
    public void makeSound(){
        System.out.println("Sound Sound");
    }
}
class Dog extends Animal{
    public void makeSound(){
        System.out.println("Bow Bow");
    }
}
class Cat extends Animal{
    public void makeSound(){
        System.out.println("Meow Meow");
    }
}
class Cow extends Animal{
    public void makeSound(){
        System.out.println("Moo Moo");
    }
}