import { useState } from 'react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard,
  Search,
  Filter,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Image as ImageIcon,
  Play
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const UpdatesEvents = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const updates = [
    {
      id: 1,
      type: 'event',
      title: 'Digital Marketing Workshop for SMEs',
      description: 'Learn advanced digital marketing strategies to grow your small business online. This comprehensive workshop covers social media marketing, content creation, email marketing, and analytics.',
      date: '2024-09-15',
      time: '10:00 AM',
      location: 'ZAMWE Training Center, Gusau',
      requiresPayment: true,
      amount: 2500,
      capacity: 50,
      registered: 32,
      image: '/api/placeholder/400/200',
      hasVideo: false,
      featured: true
    },
    {
      id: 2,
      type: 'update',
      title: 'New Business Directory Feature Launch',
      description: 'We are excited to announce the launch of our new online business directory where all ZAMWE members can showcase their businesses and services to a wider audience.',
      date: '2024-08-28',
      requiresPayment: false,
      image: '/api/placeholder/400/200',
      hasVideo: false,
      featured: false
    },
    {
      id: 3,
      type: 'contribution',
      title: 'Q3 Community Development Project',
      description: 'Support our quarterly community development initiative aimed at providing business training and resources to aspiring women entrepreneurs in remote areas.',
      date: '2024-09-01',
      requiresPayment: true,
      amount: 5000,
      targetAmount: 500000,
      currentAmount: 127500,
      image: '/api/placeholder/400/200',
      hasVideo: true,
      featured: true
    },
    {
      id: 4,
      type: 'event',
      title: 'Monthly Networking Meetup',
      description: 'Join fellow ZAMWE members for our monthly networking meetup. Share experiences, build connections, and explore collaboration opportunities.',
      date: '2024-09-20',
      time: '6:00 PM',
      location: 'Grand Hotel, Gusau',
      requiresPayment: false,
      capacity: 100,
      registered: 78,
      image: '/api/placeholder/400/200',
      hasVideo: false,
      featured: false
    },
    {
      id: 5,
      type: 'announcement',
      title: 'Micro-Loan Program Now Available',
      description: 'We are pleased to announce that our micro-loan program is now available for eligible ZAMWE members. Apply now to access funding for your business expansion.',
      date: '2024-08-20',
      requiresPayment: false,
      image: '/api/placeholder/400/200',
      hasVideo: true,
      featured: true
    }
  ];

  const handlePayment = (updateId: number, amount: number) => {
    toast({
      title: "Payment Processing",
      description: `Redirecting to payment gateway for ₦${amount.toLocaleString()}...`,
    });
  };

  const handleRegister = (updateId: number) => {
    toast({
      title: "Registration Successful",
      description: "You have been registered for this event. Check your email for details.",
    });
  };

  const filteredUpdates = updates.filter(update => {
    const matchesSearch = update.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         update.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || update.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'event':
        return <Calendar className="h-5 w-5" />;
      case 'contribution':
        return <CreditCard className="h-5 w-5" />;
      case 'announcement':
        return <Award className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'event':
        return 'bg-blue-100 text-blue-800';
      case 'contribution':
        return 'bg-green-100 text-green-800';
      case 'announcement':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Latest Updates
          </Badge>
          <h1 className="text-4xl md:text-6xl font-elastic font-bold mb-6 text-elastic-hero">
            Updates & Events
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with the latest news, upcoming events, and opportunities from ZAMWE
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search updates and events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            {['all', 'event', 'contribution', 'announcement', 'update'].map((type) => (
              <EnhancedButton
                key={type}
                variant={filterType === type ? 'zamwe' : 'outline'}
                size="sm"
                onClick={() => setFilterType(type)}
              >
                <Filter className="h-4 w-4 mr-2" />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </EnhancedButton>
            ))}
          </div>
        </div>

        {/* Featured Updates */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Featured Updates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {filteredUpdates.filter(update => update.featured).map((update) => (
              <Card key={update.id} className="glass-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="relative">
                  <div className="h-48 bg-gradient-to-r from-primary/20 to-primary-light/20 rounded-t-lg flex items-center justify-center">
                    <ImageIcon className="h-16 w-16 text-primary/40" />
                    {update.hasVideo && (
                      <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full">
                        <Play className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                  <Badge className={`absolute top-4 left-4 ${getTypeColor(update.type)}`}>
                    {getTypeIcon(update.type)}
                    <span className="ml-1">{update.type.charAt(0).toUpperCase() + update.type.slice(1)}</span>
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{update.title}</CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground space-x-4">
                    <span>{update.date}</span>
                    {update.time && (
                      <>
                        <Clock className="h-4 w-4" />
                        <span>{update.time}</span>
                      </>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{update.description}</p>
                  
                  {update.location && (
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {update.location}
                    </div>
                  )}
                  
                  {update.capacity && (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Users className="h-4 w-4 mr-2" />
                        {update.registered}/{update.capacity} registered
                      </div>
                      <div className="text-primary font-medium">
                        {Math.round((update.registered / update.capacity) * 100)}% full
                      </div>
                    </div>
                  )}
                  
                  {update.targetAmount && (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Progress</span>
                        <span className="font-medium">
                          ₦{update.currentAmount?.toLocaleString()} / ₦{update.targetAmount.toLocaleString()}
                        </span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((update.currentAmount || 0) / update.targetAmount) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  
                  {update.requiresPayment ? (
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div>
                        <p className="text-lg font-bold text-primary">₦{update.amount?.toLocaleString()}</p>
                        <p className="text-xs text-muted-foreground">Payment required</p>
                      </div>
                      <EnhancedButton 
                        variant="zamwe" 
                        onClick={() => handlePayment(update.id, update.amount || 0)}
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        {update.type === 'contribution' ? 'Contribute' : 'Register & Pay'}
                      </EnhancedButton>
                    </div>
                  ) : (
                    <div className="pt-4 border-t">
                      {update.type === 'event' ? (
                        <EnhancedButton 
                          variant="elegant" 
                          className="w-full"
                          onClick={() => handleRegister(update.id)}
                        >
                          Register for Event
                        </EnhancedButton>
                      ) : (
                        <EnhancedButton variant="outline" className="w-full">
                          Read More
                        </EnhancedButton>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Updates */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">All Updates</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {filteredUpdates.filter(update => !update.featured).map((update) => (
              <Card key={update.id} className="glass-card hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className="h-32 bg-gradient-to-r from-secondary/30 to-accent/30 rounded-t-lg flex items-center justify-center">
                    <ImageIcon className="h-12 w-12 text-muted-foreground" />
                    {update.hasVideo && (
                      <div className="absolute top-2 right-2 p-1 bg-white/20 backdrop-blur-sm rounded-full">
                        <Play className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <Badge className={`absolute top-2 left-2 text-xs ${getTypeColor(update.type)}`}>
                    {update.type}
                  </Badge>
                </div>
                
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{update.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{update.description}</p>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span>{update.date}</span>
                    {update.requiresPayment && (
                      <span className="font-medium text-primary">₦{update.amount?.toLocaleString()}</span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    {update.requiresPayment ? (
                      <EnhancedButton 
                        size="sm" 
                        variant="zamwe" 
                        className="flex-1"
                        onClick={() => handlePayment(update.id, update.amount || 0)}
                      >
                        {update.type === 'contribution' ? 'Contribute' : 'Pay & Register'}
                      </EnhancedButton>
                    ) : (
                      <EnhancedButton size="sm" variant="outline" className="flex-1">
                        {update.type === 'event' ? 'Register' : 'Learn More'}
                      </EnhancedButton>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {filteredUpdates.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No updates found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UpdatesEvents;