//package com.aaslin.features;
import java.util.*;
import java.util.function.*;
class UserDetails{
	public String name;
	public String email;
	public UserDetails(String name,String email) {
		this.name=name;
		this.email=email;
	}
	public String getname() {
		return name;
	}
	public String getemail() {
		return email;
	}
}
public class UserSearch{
	public static void main(String args[]) {
		List<UserDetails> ls=new ArrayList<>();
		ls.add(new UserDetails("keerthi","keerthi121@yahoo.com"));
		ls.add(new UserDetails("uday","uday1@gmail.com"));
		ls.add(new UserDetails("sravya","sravs@gmail.com"));
		String searchName="uday";
		Function <String,String> toUpperCase = String::toUpperCase;
		Optional<String> email=ls.stream().filter(u -> u.getname().equalsIgnoreCase(searchName))
				.map(UserDetails::getemail).findFirst();
		email.map(toUpperCase).ifPresent(System.out::println);
	}
}