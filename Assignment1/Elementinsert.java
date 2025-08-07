import java.util.Scanner;
import java.util.Arrays;
public class InsertElement {
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
        System.out.println("Enter Index Position");
        int index=sc.nextInt();
        System.out.println("Enter Value to be inserted");
        int newElement =sc.nextInt();
        int[] result = new int[arr.length + 1];
        for (int i = 0; i < index; i++) {
            result[i] = arr[i];
        }
        result[index] = newElement;
        for (int i = index; i < arr.length; i++) {
            result[i + 1] = arr[i];
        }
        System.out.println("Array after insertion: " + Arrays.toString(result));
    }
}
