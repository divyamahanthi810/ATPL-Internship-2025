class Library{
    class Book {
        String bName = "Harry Potter";
    }
}
public class InnerClass {
    public static void main(String[] args)
    {
        Library outer = new Library();  
        Library.Book inner = outer.new Book();  
        System.out.println("Accessing inner class data member,bookName: "+inner.bName);  
    }
}