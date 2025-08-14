import java.util.*;
class CustomerService {
    Queue<String> customers=new LinkedList<>();
    public void customerNames(String name)
    {
        customers.add(name);
        System.out.println("Customer in queue "+name);
        
    }
    public void serve()
    {
        if(customers.isEmpty())
        {
            System.out.println("No Customer to serve");
        }
        else{
        String served=customers.poll();
        System.out.println("Served to Customer "+served);
        }
    }
    public void newCustomer()
    {
        String newname=customers.peek();
        System.out.println("Next Customer to be served is "+newname);
    }
    public static void main(String[] args) {
        CustomerService m=new CustomerService();
        m.customerNames("Sruthi");
        m.customerNames("geeta");
        m.customerNames("ramya");
        m.serve();
        m.serve();
        m.customerNames("ram");
        m.newCustomer();
        m.serve();
        m.newCustomer();
        m.serve();
        m.serve();
        
    }
}