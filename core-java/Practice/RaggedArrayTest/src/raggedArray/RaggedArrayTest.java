package raggedArray;

public class RaggedArrayTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		final int NMAX = 10;
		
		int[][] odds = new int[NMAX + 1][];
		
		for(int n=0; n <= NMAX; n++) {
			odds[n] = new int[n + 1];
		}
		
		
		
	
		//fill triangular array
		int count = 1;
		for(int n = 0; n < odds.length; n++) {
			//For each row
			for(int k = 0; k < odds[n].length; k++) {
				odds[n][k] = count++;
			}
		}
		
		//display array
		
		for(int[] row : odds) {
			for(int odd : row) {
				System.out.print(odd + " ");
			}
			System.out.println();	
		}
			

	}

}
