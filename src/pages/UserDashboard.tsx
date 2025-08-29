import { useState } from 'react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  User, 
  Calendar, 
  CreditCard, 
  Bell, 
  Settings,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Edit,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UserDashboard = () => {
  const { toast } = useToast();
  const [user] = useState({
    name: 'Aisha Muhammad',
    email: 'aisha.muhammad@example.com',
    phone: '+234 806 XXX XXXX',
    address: 'Gusau, Zamfara State',
    membershipType: 'Fellow ZAMWE',
    joinDate: '2024-01-15',
    businessType: 'Fashion & Tailoring',
    profileComplete: 85
  });

  const [notifications] = useState([
    {
      id: 1,
      type: 'event',
      title: 'Upcoming Workshop: Digital Marketing for SMEs',
      message: 'Join us for an exclusive workshop on digital marketing strategies.',
      date: '2024-09-05',
      read: false,
      requiresPayment: true,
      amount: 2500
    },
    {
      id: 2,
      type: 'update',
      title: 'New Business Directory Feature',
      message: 'Your business can now be featured in our online directory.',
      date: '2024-08-28',
      read: true,
      requiresPayment: false
    },
    {
      id: 3,
      type: 'contribution',
      title: 'Quarterly Community Project Contribution',
      message: 'Support our community development project for women entrepreneurs.',
      date: '2024-08-25',
      read: false,
      requiresPayment: true,
      amount: 5000
    }
  ]);

  const [transactions] = useState([
    { id: 1, type: 'Membership', amount: 30000, date: '2024-01-15', status: 'Completed' },
    { id: 2, type: 'Workshop Fee', amount: 3000, date: '2024-02-20', status: 'Completed' },
    { id: 3, type: 'Event Contribution', amount: 2000, date: '2024-03-10', status: 'Completed' }
  ]);

  const handlePayment = (notificationId: number, amount: number) => {
    toast({
      title: "Payment Processing",
      description: `Redirecting to payment gateway for ₦${amount.toLocaleString()}...`,
    });
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'Pending':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case 'Failed':
        return <AlertCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-background via-accent/10 to-secondary/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-elastic font-bold text-elastic-hero mb-2">
              Welcome back, {user.name.split(' ')[0]}!
            </h1>
            <p className="text-muted-foreground">
              Manage your ZAMWE membership and stay updated with the latest opportunities
            </p>
          </div>
          <Badge variant="secondary" className="w-fit">
            {user.membershipType}
          </Badge>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Member Since</p>
                  <p className="text-lg font-semibold">Jan 2024</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Events Attended</p>
                  <p className="text-lg font-semibold">8</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Courses Completed</p>
                  <p className="text-lg font-semibold">5</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-primary" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-muted-foreground">Profile Complete</p>
                  <p className="text-lg font-semibold">{user.profileComplete}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile & Updates */}
          <div className="lg:col-span-2 space-y-8">
            <Tabs defaultValue="updates" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="updates">Updates & Events</TabsTrigger>
                <TabsTrigger value="profile">My Profile</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
              </TabsList>
              
              <TabsContent value="updates" className="space-y-4 mt-6">
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Bell className="h-5 w-5 mr-2 text-primary" />
                      Latest Updates & Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id}
                        className={`p-4 rounded-lg border ${
                          notification.read ? 'bg-muted/30' : 'bg-primary/5 border-primary/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold mb-2">{notification.title}</h4>
                            <p className="text-muted-foreground text-sm mb-3">{notification.message}</p>
                            <div className="flex items-center space-x-4">
                              <Badge variant="outline">{notification.type}</Badge>
                              <span className="text-xs text-muted-foreground">{notification.date}</span>
                            </div>
                            
                            {notification.requiresPayment && (
                              <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <p className="text-sm font-medium">Payment Required</p>
                                    <p className="text-lg font-bold text-primary">₦{notification.amount?.toLocaleString()}</p>
                                  </div>
                                  <EnhancedButton 
                                    variant="zamwe" 
                                    size="sm"
                                    onClick={() => handlePayment(notification.id, notification.amount || 0)}
                                  >
                                    <CreditCard className="h-4 w-4 mr-2" />
                                    Pay Now
                                  </EnhancedButton>
                                </div>
                              </div>
                            )}
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="profile" className="mt-6">
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-primary" />
                        My Profile
                      </span>
                      <EnhancedButton variant="outline" size="sm">
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </EnhancedButton>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center space-x-6">
                      <Avatar className="h-20 w-20">
                        <AvatarImage src="/placeholder-avatar.jpg" />
                        <AvatarFallback className="text-lg font-semibold bg-primary/10 text-primary">
                          {user.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-semibold">{user.name}</h3>
                        <p className="text-muted-foreground">{user.businessType}</p>
                        <Badge variant="secondary" className="mt-1">{user.membershipType}</Badge>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground">Profile Completion</label>
                        <Progress value={user.profileComplete} className="mt-2" />
                        <p className="text-xs text-muted-foreground mt-1">{user.profileComplete}% complete</p>
                      </div>
                      
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Mail className="h-4 w-4 text-muted-foreground mr-3" />
                            <div>
                              <p className="text-sm font-medium">Email</p>
                              <p className="text-sm text-muted-foreground">{user.email}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 text-muted-foreground mr-3" />
                            <div>
                              <p className="text-sm font-medium">Phone</p>
                              <p className="text-sm text-muted-foreground">{user.phone}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 text-muted-foreground mr-3" />
                            <div>
                              <p className="text-sm font-medium">Address</p>
                              <p className="text-sm text-muted-foreground">{user.address}</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-muted-foreground mr-3" />
                            <div>
                              <p className="text-sm font-medium">Member Since</p>
                              <p className="text-sm text-muted-foreground">{user.joinDate}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="transactions" className="mt-6">
                <Card className="glass-card border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="h-5 w-5 mr-2 text-primary" />
                      Payment History
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {transactions.map((transaction) => (
                        <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            {getStatusIcon(transaction.status)}
                            <div>
                              <p className="font-medium">{transaction.type}</p>
                              <p className="text-sm text-muted-foreground">{transaction.date}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold">₦{transaction.amount.toLocaleString()}</p>
                            <Badge variant={transaction.status === 'Completed' ? 'default' : 'secondary'}>
                              {transaction.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* Right Column - Quick Actions & Achievements */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <EnhancedButton variant="zamwe" className="w-full justify-start">
                  <CreditCard className="h-4 w-4 mr-3" />
                  Make Payment
                </EnhancedButton>
                <EnhancedButton variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-3" />
                  View Events
                </EnhancedButton>
                <EnhancedButton variant="outline" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-3" />
                  Browse Courses
                </EnhancedButton>
                <EnhancedButton variant="outline" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-3" />
                  Account Settings
                </EnhancedButton>
              </CardContent>
            </Card>
            
            {/* Achievements */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-lg">
                  <Award className="h-5 w-5 mr-2 text-primary" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Active Member</p>
                    <p className="text-xs text-muted-foreground">8 months active</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Learning Champion</p>
                    <p className="text-xs text-muted-foreground">5 courses completed</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Community Builder</p>
                    <p className="text-xs text-muted-foreground">Attended 8 events</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;