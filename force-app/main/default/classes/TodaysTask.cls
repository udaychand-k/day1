public class TodaysTask {
    
	 Static String s;
     public todaysTask(String s)
    {
       TodaysTask.s=s;
       a(s);
       greet();
    
    }
    
    @future
    public Static void greet()
    {
		System.debug('Welcome '+s.toUpperCase());
    }
    
    public static void a(String s)
    {
        system.debug('Hey I am from a');
        b(s);
	}
	
     public static void b(String s)
    {
        system.debug('Hey I am from b');
        c(s);
	}
 
    public static void c(String s)
    {
        system.debug('Hey I am from c');
        d(s);
	}
    
     public static void d(String s)
    {
        system.debug('Hey I am from d');
        system.debug('We are done '+s.toUpperCase());
        
	}
    
    
    
    
    
}