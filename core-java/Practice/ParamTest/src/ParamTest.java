
public class ParamTest {

	public static void main(String[] args) {
		
		Employee a = new Employee("alice", 70000);
		Employee b = new Employee("Bob", 60000);
		
		System.out.println("Before: a = " + a.getName());
		System.out.println("Before b = " + b.getName());
		
		swap(a, b);
		
		System.out.println("After: a " + a.getName());
		System.out.println("After: b " + a.getName());
		// TODO Auto-generated method stub

	}
	
	public static void swap(Employee x, Employee y)
	{
		Employee temp = x;
		x = y;
		y = temp;
		
		System.out.println("End of method: x=" + x.getName());
		System.out.println("End of method: y=" + y.getName());
	}

}




class Employee
{
	private String name;
	private double salary;
	
	public Employee(String n, double s)
	{
		name = n;
		salary = s;
	}
	
	public String getName()
	{
		return name;
	}
	
	public double getSalary()
	{
		return salary;
	}
	
}