
public class ThrowException {
    static  void checkPositive(int a){
        if(a<0)
        {
            throw new IllegalArgumentException("Number must be greater than 0");
        }
        else
        {
            System.out.println("Valid Number");
        }
    }
    public static void main(String[] args) {
        checkPositive(-5);
    }
}