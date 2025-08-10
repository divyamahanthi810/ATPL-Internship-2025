public class Display{
    public void show(int a){
       System.out.println(a);
    }
    public void show(String a){
       System.out.println(a);
    }
    public void show(int[]arr){
        System.out.print("Print Array Values[");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i]);
            if (i < arr.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
    public static void main(String args[]){
        Display obj = new Display();
        obj.show(2);
        obj.show("Divya");
        int[] arr = {10, 20, 30};
        obj.show(arr);
    }
}