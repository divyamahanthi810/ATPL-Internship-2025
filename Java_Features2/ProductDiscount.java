//package com.aaslin.features;

import java.util.*;
import java.util.function.*;
public class ProductDiscount {
	public static void main(String[] args) {
		Function<Double,Double> fun= a -> a* 0.9;
		Map<String,Double> hm=new HashMap<>();
		hm.put("Bike",25000.0);
		hm.put("Car",230000.0);
		hm.put("Cycle",null);
		hm.forEach((name,price)->
		{Optional<Double> a=Optional.ofNullable(price);
		double finalprice=a.map(fun).orElse(0.0);
		System.out.println(name+" price after 10% discount: "+finalprice);
		});
	}
}
