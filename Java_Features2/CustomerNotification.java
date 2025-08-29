//package com.aaslin.features;
import java.util.function.*;
import java.util.*;
class Notification{
	public String name;
	public boolean subscribed;

	public Notification(String name,boolean subscribed) {
		this.name=name;
		this.subscribed=subscribed;
	}
	public String cname(){
		return name;
	}
	public boolean csubscribed(){
		return subscribed;
	}
}
public class CustomerNotification{
	public static void main(String[] args) {
		List<Notification> l=new ArrayList<>();
		l.add(new Notification("Raju",true));
		l.add(new Notification("Kiran",true));
		l.add(new Notification("Karthik",false));
		Consumer<Notification> sendNotify=customer ->System.out.println("Notification set to: "+customer.cname()); 
		l.stream()
		.filter(Notification::csubscribed)
		.forEach(sendNotify);
	}

}

