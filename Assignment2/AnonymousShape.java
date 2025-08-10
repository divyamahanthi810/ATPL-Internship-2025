abstract class Shape{
    public abstract void draw();
}
public class AnonymousShape {
    public static void main(String[] args) {
        Shape obj=new Shape() {
        public void draw(){
            System.out.println("Drawing the shape");
        }    
        };
        obj.draw();
    }
}