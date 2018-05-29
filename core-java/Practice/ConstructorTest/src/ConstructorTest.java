import java.util.Random;

public class ConstructorTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		//fill the staff array with three employee objects
		
		Employee[] staff = new Employee[3];
		staff[0] = new Employee("Harry", 4000);
		staff[1] = new Employee(6000);
		staff[2] = new Employee();
		
		for(Employee e : staff)
		{
			System.out.println("name = " + e.getName() + ", id=" 
					+ e.getId() + ",salary=" + e.getSalary());
		}

	}

}

class Employee
{
	private static int nextId;
	private int id;
	private String name = ""; 
	private double salary;
	
	
	//static initialization block
	static
	{
		Random generator = new Random();
		nextId = generator.nextInt(10000);
	}
	
	//object initialization block
	{
		id = nextId;
		nextId++;
	}
	
	public Employee(String n, double s)
	{
		setName(n);
		setSalary(s);
	}
	
	public Employee(double s)
	{
		this("Employee #" + nextId, s);
	}
	
	public Employee()
	{
		
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}
	
	
}
