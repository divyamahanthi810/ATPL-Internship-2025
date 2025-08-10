interface Greeting {
    void sayHello();
}

public class AnonymousClass {
    public static void main(String[] args) {
        Greeting obj = new Greeting() {
            public void sayHello() {
                System.out.println("HI,THIS IS AN ANONYMOUS CLASS");
            }
        };
        obj.sayHello();
    }
}