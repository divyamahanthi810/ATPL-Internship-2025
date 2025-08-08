import java.util.Scanner;
class LargestNumber{
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
        int max=arr[0];
        for(int i=0;i<arr.length;i++)
        {
            if(max<arr[i])
            {
                max=arr[i];
            }
        }
        System.out.println("The Largest element in the array is "+max);
        sc.close();
    }
}