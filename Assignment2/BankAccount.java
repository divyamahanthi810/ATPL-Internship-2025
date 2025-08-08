public class BankAccount {
    String name;
    Double balance;
    public BankAccount(String name,Double balance)
    {
        this.name=name;
        this.balance=balance;
        System.out.println(name+" Initial balance is "+balance);
    }
    public void deposit(Double amt)
    {
        balance+=amt;
        System.out.println("Amount deposited "+amt);
    }
    public void withdraw(Double take)
    {
        balance-=take;
        System.out.println("Amount withdrawn "+take);
    }
    public void checkbalance()
    {
        System.out.println("Final Balance left in "+name+" account is "+balance);

    }
    public static void main(String args[])
    {
        BankAccount b1=new BankAccount("Raju",25000.0);
        b1.deposit(6000.0);
        b1.withdraw(2000.0);
        b1.checkbalance();
        BankAccount b2=new BankAccount("Priya",32000.0);
        b2.deposit(5000.0);
        b2.withdraw(2000.0);
        b2.checkbalance();
    }
    
}
