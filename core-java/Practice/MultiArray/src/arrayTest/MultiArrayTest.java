package arrayTest;

public class MultiArrayTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		int[][] mulArray = {
				{11,12,13,14},
				{15,16,17,18},
				{19,20,21,22},
				{23,24,25,26}
		};
		
		
		for(int[] row: mulArray) {
			
			for(int element: row) {
				System.out.print(element + " ");
			}
			
			System.out.println();
		}

	}

}
