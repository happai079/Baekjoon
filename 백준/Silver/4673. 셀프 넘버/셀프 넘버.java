import java.util.ArrayList;

public class Main {
	static int d(int n) {
		int q = n;
		int r = 0;
		
		int next = n;
		while(q!=0) {
			next += q % 10;
			q /= 10;
		}
		
		return next;
	}
	
	public static void main(String[] args) {
		ArrayList numbers  = new ArrayList();
		
		for(int i = 1; i <= 10000; i++) {
			numbers.add(d(i));
		}
		
		for(int i = 1; i <= 10000; i++) {
			if(!numbers.contains(i)) System.out.println(i); 
		}
	}

}