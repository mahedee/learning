
public class Employee {
	private static int nextId = 1;

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		System.out.println(Employee.getNextId());
		
		//Not recommended the following
		Employee harry = new Employee();
		System.out.println(harry.getNextId());

	}
	
	public static int getNextId() {
		return nextId;
	}

}
