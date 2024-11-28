public class fibo {
    /*
    public static Integer recursiveCal(Integer n)
    {
        if (n<=1)
            return 0;
        else if(n==2)
            return 1;
        else
            return recursiveCal(n-1)+recursiveCal(n-2);
	}
    
    public Static Integer calNthFiboNumber(Integer n)
    {
        return recursiveCal(n);
	}
    */
    public static void calNthFiboNumber(Integer n){
        List<Integer> l = new List<Integer>();
        l.add(0);
        l.add(1);
        Integer i=1;
        for(;i<=n-2;i++)
        {
            Integer k=l.size();
            Integer x = l[k-1]+l[k-2];
            l.add(x);
        }
    System.debug(l);
    }
}