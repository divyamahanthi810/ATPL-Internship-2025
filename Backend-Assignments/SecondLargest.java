import java.util.Arrays;
class Main {
    public static void main(String[] args) {
        int arr[]={10,5,20,8,15};
        int n=arr.length;
        Arrays.sort(arr);
        System.out.println("The Second Largest element in the array is "+arr[n-2]);
    }
}