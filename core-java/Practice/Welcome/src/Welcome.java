
public class Welcome {

	public static void main(String[] args) {
		String greetings = "Welcome to java";
		
		for(int i = 0; i<args.length; i++)
		{
			System.out.print(args[i] + " ");;
		}
		System.out.println(greetings);
		
	}
}
