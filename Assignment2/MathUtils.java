import java.util.*;
class MathUtils{
    public void calculate(int a,int b){
        System.out.println(a+b);

    }
    public void calculate(double a,double b){
        System.out.println(a*b);
    }
    public static void main(String args[]){
        MathUtils operation=new MathUtils();
        operation.calculate(2,3);
        operation.calculate(3.1,5.2);

    }
}