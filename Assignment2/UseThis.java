public class UseThis{
    String uName; 
    int id;
    public UseThis(String userName,int id){ 
        this.uName=userName;
        this.id=id;
    }
    public static void main(String args[]){
        UseThis obj=new UseThis("Harika",101);
        System.out.println(obj.uName+","+obj.id);
    }
}