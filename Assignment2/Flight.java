public class Flight {
        int flightNumber;
        String destination;
        int duration;
    public Flight(){
        flightNumber=10345;
        destination="Australia";
        duration=3;
    }
    public Flight(int flightNumber,String destination,int duration){
        this.flightNumber=flightNumber;
        this.destination=destination;
        this.duration=duration;
    }
    public void display(){
        System.out.println("FlightNumber is "+flightNumber+" \nflying to "+destination+"\njourney hours are "+duration+"hr");
    }
    public static void main(String[] args) {
        Flight f1=new Flight();
        Flight f2=new Flight(27045,"Mumbai",1);
        f1.display();
        f2.display();
    }
    }
