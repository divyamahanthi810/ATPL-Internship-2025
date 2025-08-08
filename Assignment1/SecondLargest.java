import java.util.Scanner;
public class SecondLargest {
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
        if (arr.length < 2) {
            System.out.println("Array size should be minimum 2");
            return;
        }
        int largest = arr[0];
        int secondLargest = arr[0];
        for (int num : arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num != largest) {
                secondLargest = num;
            }
        }
        if (secondLargest == Integer.MIN_VALUE) {
            System.out.println("No second largest element.");
        } else {
            System.out.println("Second largest element is: " + secondLargest);
        }
    }
}
