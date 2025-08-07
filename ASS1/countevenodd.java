import java.util.ArrayList;
class Main {
    public static void main(String[] args) {
        int arr[]={1, 2, 3, 4, 5, 6};
        int a=0;
        int b=0;
        for (int i:arr)
        {
            if(i%2==0)
            {
                a++;
            }
            else{
                b++;
            }
        }
        System.out.println("Event count:"+a+",Odd Count:"+b);
    }
}