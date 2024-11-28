public class queuetest {
    
    public static void test(){
			list<Group> gg =[select Id from Group where type='Queue' and Name='Legal_Queue'];
        Id g = gg[0].id;
        list<GroupMember> l=[Select UserOrGroupId From GroupMember where GroupId =:g ];
    }

}