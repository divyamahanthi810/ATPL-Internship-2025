class Book {
    String title;
    String author;
    double price;
    public Book(String title,String author,int price){
        this.title=title;
        this.author=author;
        this.price=price;
    }
    public void discount(double percentage){
        if(percentage>0 && percentage<100)
        {
            price=price-(price*percentage/100);
        }
        System.out.println("Title is:"+title+","+"Author is:"+author+","+"Price after discount:"+price);
    }
    public static void main(String[] args) {
        Book b1=new Book("java","james",200);
        Book b2=new Book("Python","Rahul",350);
        Book b3=new Book("c","Mark",250);
        b1.discount(10);
        b2.discount(5);
        b3.discount(20);
        
    }
    
}
