package calendarPckg;

import java.time.DayOfWeek;
import java.time.LocalDate;

public class CalendarTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		LocalDate date = LocalDate.now();
		int month = date.getMonthValue();
		int today = date.getDayOfMonth();
		
		date = date.minusDays(today - 1); // set the start of the work
		DayOfWeek weekDay = date.getDayOfWeek();
		int value = weekDay.getValue(); // 1 = Monday, .... 7 = sunday
		
		System.out.println("Mon Tue Wed Thu Fri Sat Sun");
		for(int i = 1; i < value; i++) {
			System.out.print("  ");
		}
		
		while (date.getMonthValue() == month) //Stay with current month
		{
			System.out.printf("%3d", date.getDayOfMonth());
			if(date.getDayOfMonth() == today)
			{
				System.out.print("*");
			}
			else
			{
				System.out.print(" ");
			}
			
			date = date.plusDays(1);
			
			if(date.getDayOfWeek().getValue() == 1)
				System.out.println();
		}
		
		if(date.getDayOfWeek().getValue() != 1)
			System.out.println();
	}

}
