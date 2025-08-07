class Main {
    public static void main(String[] args) {
        int arr[]={10,5,20,8,15};
        int max=arr[0];
        for(int i=0;i<arr.length;i++)
        {
            if(max<arr[i])
            {
                max=arr[i];
            }
        }
        System.out.println("The Largest element in the array is "+max);
    }
}