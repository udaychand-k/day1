@isTest
public class fiboTest {
	
    @isTest static void EqualToOneTest()
    {
		system.AssertEquals(0,fibo.calNthFiboNumber(0),'Zero check Failed');
        system.AssertEquals(0,fibo.calNthFiboNumber(-1),'Less Than Zero check Failed');
        system.AssertEquals(0,fibo.calNthFiboNumber(1),'One check Failed');
	}
    
	@isTest static void EqualToTwoTest()
    {
        system.AssertEquals(1,fibo.calNthFiboNumber(2),'Two check Failed');
	}
     @isTest static void GreaterThanTwoTest()
    {
        system.AssertEquals(3,fibo.calNthFiboNumber(5),'Greater Than Two check Failed');
		system.AssertEquals(5,fibo.calNthFiboNumber(6),'Greater Than Two check Failed');
		system.AssertEquals(8,fibo.calNthFiboNumber(7),'Greater Than Two check Failed');
	}
}