// package com.aaslin.features;
import java.util.function.*;
import java.util.*;
class Employee{
	public String name;
	public int salary;
	public String Email;

	public Employee(String name,int salary,String Email) {
		this.name=name;
		this.salary=salary;
		this.Email=Email;
	}
	//optional to handle the email values which are empty
	public Optional<String> getEmail(){
		return Optional.ofNullable(Email);
	}
}
public class EmployeeBonus {
	public static void main(String[] args) {
		List<Employee> l=new ArrayList<>();
		l.add(new Employee("Divya",25000,"Divya@gmail.com"));
		l.add(new Employee("Meghana",35000,null));
		l.add(new Employee("preety",5000,""));
		//Predicate to filter based on salary
		Predicate<Employee> eligible= emp->emp.salary >20000;
		//Stream to perform the functional operation like filter ,orElse;
		l.stream()
		.filter(eligible)
		.forEach(emp -> {String Email=emp.getEmail()
							.filter(e->!e.isEmpty())
							.orElse("Email not available");
		System.out.println(Email);
		});
	}

}
