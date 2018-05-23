package testClass;

public class EmployeeTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Employee employee = new Employee();
		employee.showMessage();
		
		Employee2 employee2 = new Employee2();
		employee2.display();
		
		System.out.println("Its working!!");
	}

}


class Employee
{
	public void showMessage()
	{
		System.out.println("Its from Employee class!");
	}
}


