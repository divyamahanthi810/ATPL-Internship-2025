import java.util.ArrayList;
class Main {
    public static void main(String[] args) {
        int arr[]={10, 20, 20, 10, 30, 10};
        int count=0;
        ArrayList<Integer> arr1=new ArrayList<>();
        for(int i:arr)
        {
            if(arr1.contains(arr[i]))
            {
                count++;
            }
            else
            {
                arr1.add(arr[i]);
            }
        System.out.print(arr[i]+"occurs"+count);
        }
    }
}