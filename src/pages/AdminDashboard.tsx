import { useState } from 'react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { 
  Users, 
  Settings, 
  CreditCard, 
  FileText,
  Plus,
  Edit,
  Trash2,
  Eye,
  Upload,
  Palette,
  Image,
  Video,
  MessageSquare,
  DollarSign,
  Activity,
  TrendingUp,
  UserCheck,
  Bell
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const AdminDashboard = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock admin data
  const [adminStats] = useState({
    totalUsers: 524,
    newUsersThisMonth: 67,
    totalRevenue: 15680000,
    pendingPayments: 3,
    activeEvents: 5,
    totalUpdates: 23
  });

  const [users] = useState([
    { id: 1, name: 'Aisha Muhammad', email: 'aisha@example.com', membership: 'Fellow ZAMWE', status: 'Active', joinDate: '2024-01-15' },
    { id: 2, name: 'Fatima Abdullahi', email: 'fatima@example.com', membership: 'ZAMWE Member', status: 'Active', joinDate: '2024-02-20' },
    { id: 3, name: 'Hauwa Sani', email: 'hauwa@example.com', membership: 'Fellow ZAMWE', status: 'Pending', joinDate: '2024-03-10' }
  ]);

  const [updates, setUpdates] = useState([
    { id: 1, title: 'Digital Marketing Workshop', content: 'Join us for an exclusive workshop...', requiresPayment: true, amount: 2500, date: '2024-09-05', active: true },
    { id: 2, title: 'New Business Directory', content: 'Your business can now be featured...', requiresPayment: false, amount: 0, date: '2024-08-28', active: true }
  ]);

  const [newUpdate, setNewUpdate] = useState({
    title: '',
    content: '',
    requiresPayment: false,
    amount: 0,
    hasImage: false,
    hasVideo: false
  });

  const [siteSettings, setSiteSettings] = useState({
    primaryColor: '#e91e63',
    secondaryColor: '#f8bbd9',
    siteName: 'ZAMWE',
    backgroundImage: '',
    logoImage: '',
    heroVideo: ''
  });

  const [paymentSettings, setPaymentSettings] = useState({
    accountNumber: '1234567890',
    accountName: 'Zamfara Women Enterprises',
    bankName: 'First Bank Nigeria',
    phoneNumber: '+234 806 XXX XXXX'
  });

  const handleCreateUpdate = () => {
    if (!newUpdate.title || !newUpdate.content) {
      toast({
        title: "Missing Information",
        description: "Please provide both title and content for the update.",
        variant: "destructive"
      });
      return;
    }

    const update = {
      id: updates.length + 1,
      ...newUpdate,
      date: new Date().toISOString().split('T')[0],
      active: true
    };

    setUpdates([update, ...updates]);
    setNewUpdate({ title: '', content: '', requiresPayment: false, amount: 0, hasImage: false, hasVideo: false });
    
    toast({
      title: "Update Created",
      description: "Your update has been published successfully.",
    });
  };

  const handleDeleteUpdate = (id: number) => {
    setUpdates(updates.filter(update => update.id !== id));
    toast({
      title: "Update Deleted",
      description: "The update has been removed.",
    });
  };

  const handleSaveSettings = (type: string) => {
    toast({
      title: "Settings Saved",
      description: `${type} settings have been updated successfully.`,
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-br from-background via-accent/10 to-secondary/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-elastic font-bold text-elastic-hero mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Manage ZAMWE platform and user experience
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
          <Card className="glass-card border-0">
            <CardContent className="p-4">
              <div className="flex items-center">
                <Users className="h-6 w-6 text-primary" />
                <div className="ml-3">
                  <p className="text-sm text-muted-foreground">Total Users</p>
                  <p className="text-lg font-bold">{adminStats.totalUsers}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-4">
              <div className="flex items-center">
                <UserCheck className="h-6 w-6 text-primary" />
                <div className="ml-3">
                  <p className="text-sm text-muted-foreground">New Users</p>
                  <p className="text-lg font-bold">{adminStats.newUsersThisMonth}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-4">
              <div className="flex items-center">
                <DollarSign className="h-6 w-6 text-primary" />
                <div className="ml-3">
                  <p className="text-sm text-muted-foreground">Revenue</p>
                  <p className="text-lg font-bold">₦{(adminStats.totalRevenue / 1000000).toFixed(1)}M</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-4">
              <div className="flex items-center">
                <CreditCard className="h-6 w-6 text-primary" />
                <div className="ml-3">
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-lg font-bold">{adminStats.pendingPayments}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-4">
              <div className="flex items-center">
                <Activity className="h-6 w-6 text-primary" />
                <div className="ml-3">
                  <p className="text-sm text-muted-foreground">Events</p>
                  <p className="text-lg font-bold">{adminStats.activeEvents}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glass-card border-0">
            <CardContent className="p-4">
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-primary" />
                <div className="ml-3">
                  <p className="text-sm text-muted-foreground">Updates</p>
                  <p className="text-lg font-bold">{adminStats.totalUpdates}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Admin Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="updates">Updates</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Recent User Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {users.slice(0, 3).map((user) => (
                      <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                        <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                          {user.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <EnhancedButton variant="admin" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-3" />
                    Create New Update
                  </EnhancedButton>
                  <EnhancedButton variant="outline" className="w-full justify-start">
                    <Users className="h-4 w-4 mr-3" />
                    Manage Users
                  </EnhancedButton>
                  <EnhancedButton variant="outline" className="w-full justify-start">
                    <Settings className="h-4 w-4 mr-3" />
                    Site Settings
                  </EnhancedButton>
                  <EnhancedButton variant="outline" className="w-full justify-start">
                    <CreditCard className="h-4 w-4 mr-3" />
                    Payment Settings
                  </EnhancedButton>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Users Tab */}
          <TabsContent value="users" className="space-y-6">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>User Management</span>
                  <EnhancedButton variant="admin">
                    <Plus className="h-4 w-4 mr-2" />
                    Add User
                  </EnhancedButton>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium">{user.name}</p>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                          </div>
                          <Badge variant={user.membership === 'Fellow ZAMWE' ? 'default' : 'secondary'}>
                            {user.membership}
                          </Badge>
                          <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                            {user.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2">Joined: {user.joinDate}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <EnhancedButton variant="outline" size="sm">
                          <Eye className="h-4 w-4" />
                        </EnhancedButton>
                        <EnhancedButton variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </EnhancedButton>
                        <EnhancedButton variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </EnhancedButton>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Updates Tab */}
          <TabsContent value="updates" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Create New Update */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Create New Update</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="update-title">Title</Label>
                    <Input
                      id="update-title"
                      value={newUpdate.title}
                      onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
                      placeholder="Update title..."
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="update-content">Content</Label>
                    <Textarea
                      id="update-content"
                      value={newUpdate.content}
                      onChange={(e) => setNewUpdate({ ...newUpdate, content: e.target.value })}
                      placeholder="Write your update content..."
                      rows={4}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={newUpdate.requiresPayment}
                      onCheckedChange={(checked) => setNewUpdate({ ...newUpdate, requiresPayment: checked })}
                    />
                    <Label>Requires Payment</Label>
                  </div>

                  {newUpdate.requiresPayment && (
                    <div>
                      <Label htmlFor="update-amount">Amount (₦)</Label>
                      <Input
                        id="update-amount"
                        type="number"
                        value={newUpdate.amount}
                        onChange={(e) => setNewUpdate({ ...newUpdate, amount: Number(e.target.value) })}
                        placeholder="0"
                      />
                    </div>
                  )}

                  <div className="flex space-x-4">
                    <EnhancedButton variant="outline" size="sm">
                      <Image className="h-4 w-4 mr-2" />
                      Add Image
                    </EnhancedButton>
                    <EnhancedButton variant="outline" size="sm">
                      <Video className="h-4 w-4 mr-2" />
                      Add Video
                    </EnhancedButton>
                  </div>

                  <EnhancedButton variant="admin" onClick={handleCreateUpdate} className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Update
                  </EnhancedButton>
                </CardContent>
              </Card>

              {/* Existing Updates */}
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Published Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {updates.map((update) => (
                      <div key={update.id} className="p-4 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-semibold">{update.title}</h4>
                            <p className="text-sm text-muted-foreground mt-1">{update.content.slice(0, 100)}...</p>
                            <div className="flex items-center space-x-2 mt-2">
                              <Badge variant="outline">{update.date}</Badge>
                              {update.requiresPayment && (
                                <Badge variant="secondary">₦{update.amount.toLocaleString()}</Badge>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <EnhancedButton variant="outline" size="sm">
                              <Edit className="h-4 w-4" />
                            </EnhancedButton>
                            <EnhancedButton 
                              variant="outline" 
                              size="sm"
                              onClick={() => handleDeleteUpdate(update.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </EnhancedButton>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle>Payment Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="account-number">Account Number</Label>
                    <Input
                      id="account-number"
                      value={paymentSettings.accountNumber}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, accountNumber: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="account-name">Account Name</Label>
                    <Input
                      id="account-name"
                      value={paymentSettings.accountName}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, accountName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="bank-name">Bank Name</Label>
                    <Input
                      id="bank-name"
                      value={paymentSettings.bankName}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, bankName: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone-number">Phone Number</Label>
                    <Input
                      id="phone-number"
                      value={paymentSettings.phoneNumber}
                      onChange={(e) => setPaymentSettings({ ...paymentSettings, phoneNumber: e.target.value })}
                    />
                  </div>
                </div>

                <EnhancedButton 
                  variant="admin" 
                  onClick={() => handleSaveSettings('Payment')}
                >
                  Save Payment Settings
                </EnhancedButton>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="h-5 w-5 mr-2" />
                    Site Customization
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="site-name">Site Name</Label>
                    <Input
                      id="site-name"
                      value={siteSettings.siteName}
                      onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="primary-color">Primary Color</Label>
                      <Input
                        id="primary-color"
                        type="color"
                        value={siteSettings.primaryColor}
                        onChange={(e) => setSiteSettings({ ...siteSettings, primaryColor: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="secondary-color">Secondary Color</Label>
                      <Input
                        id="secondary-color"
                        type="color"
                        value={siteSettings.secondaryColor}
                        onChange={(e) => setSiteSettings({ ...siteSettings, secondaryColor: e.target.value })}
                      />
                    </div>
                  </div>

                  <EnhancedButton variant="outline" className="w-full">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Logo
                  </EnhancedButton>

                  <EnhancedButton variant="outline" className="w-full">
                    <Image className="h-4 w-4 mr-2" />
                    Change Background Image
                  </EnhancedButton>

                  <EnhancedButton 
                    variant="admin" 
                    onClick={() => handleSaveSettings('Site')}
                    className="w-full"
                  >
                    Save Changes
                  </EnhancedButton>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardHeader>
                  <CardTitle>Admin Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="admin-email">Add New Admin Email</Label>
                    <Input
                      id="admin-email"
                      placeholder="admin@example.com"
                    />
                  </div>

                  <EnhancedButton variant="admin" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Admin
                  </EnhancedButton>

                  <div className="border-t pt-4">
                    <h4 className="font-medium mb-2">Current Admins</h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 border rounded">
                        <span className="text-sm">opeyemizahraa29@gmail.com</span>
                        <Badge>Hafsat Shafiu</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminDashboard;
