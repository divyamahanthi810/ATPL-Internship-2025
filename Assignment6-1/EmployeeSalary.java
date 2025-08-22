import java.util.*;
import java.util.Iterator;
public class EmployeeSalary {
    String name;
    int Salary;
    EmployeeSalary(String name,int Salary){
        this.name=name;
        this.Salary=Salary;
    }
    public int getSalary(){
        return Salary;
    }
    public String toString(){
        return "Name: "+ name +",Salary: "+ Salary;
    }
    public static void main(String args[])
    {
        List<EmployeeSalary> ls=new ArrayList<>();
        ls.add(new EmployeeSalary("Raju",20000));
        ls.add(new EmployeeSalary("Vivek",50000));
        ls.add(new EmployeeSalary("Rani",35000));
        ls.add(new EmployeeSalary("Swetha",25000));
        Iterator<EmployeeSalary> it = ls.iterator();
        while(it.hasNext()){
                EmployeeSalary employee=it.next();
                if(employee.getSalary()<30000){
                    it.remove();
                }
        }
        System.out.println("Employees list who salary is more than 30000 : "+ls);
    }
}
