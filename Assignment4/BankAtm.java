import java.util.Scanner;
class InsufficientBalanceExpection extends Exception{
    InsufficientBalanceExpection(String m)
    {
        super(m);
    }
}
public class BankAtm {
    double bal;
    BankAtm(Double bal){
        this.bal=bal;
    }
    public void deposit(double amount)
    {
        bal+=amount;
        System.out.println("Amount depositted "+amount);
        System.out.println("Balance after Deposit "+bal);
    }
    public void withDraw(double amount) throws InsufficientBalanceExpection 
    {
        bal-=amount;
        System.out.println("Amount to be withdrawn "+amount);
        System.out.println("Balance after withdrawn "+bal);
    }
    public void getBalance()
    {
        System.out.println("Final Balance "+bal);
    }
    
    public static void main(String args[]){
        Scanner sc=new Scanner(System.in);
        BankAtm bank=new BankAtm(5000.0);
        System.out.println("1:Deposit\n2:WithDraw\n3:Balance");
        System.out.println("Choose a option");
        int choose=sc.nextInt();
        switch(choose){
            case 1:
                    System.out.println("Enter deposit amount ");
                    Double amt=sc.nextDouble();
                    bank.deposit(amt);
                    break;
            case 2:
                try{
                    System.out.println("Enter Withdraw amount ");
                    Double a=sc.nextDouble();
                    bank.withDraw(a);
                }
                catch(InsufficientBalanceExpection e)
                {
                    System.out.print("Must enter Valid amount");
                }
                break;
            case 3:
                bank.getBalance();
                break;
            
        }
        
    }
}
