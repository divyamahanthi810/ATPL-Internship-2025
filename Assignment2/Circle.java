class Circle{
    private double radius;
    public double getRadius()
    {
        return radius;
    }
    public void setRadius(double radius)
    {
        if (radius<0)
        {
            System.out.println("Radius must be above 0");
        }
        this.radius=radius;
    }
    public void area(){
        System.out.println(Math.PI*radius*radius);
    }
    public void circumference(){
        System.out.println(2*Math.PI*radius);
    }
    public static void main(String args[]){
        Circle c=new Circle();
        c.setRadius(-2);
        c.area();
        c.circumference();
        c.setRadius(7);
        c.area();
        c.circumference();

    }
}