import java.util.Scanner;
class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter Array Size");
        int n=sc.nextInt();
        int arr[]=new int[n];
        System.out.println("Enter Array Values");
        for(int i=0;i<n;i++)
        {
            arr[i]=sc.nextInt();
            
        }
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