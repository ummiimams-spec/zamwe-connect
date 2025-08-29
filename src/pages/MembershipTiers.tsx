import { useState } from 'react';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Check, 
  Star, 
  Users, 
  BookOpen, 
  Calendar,
  Award,
  TrendingUp,
  Shield,
  Crown,
  ArrowRight
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MembershipTiers = () => {
  const { toast } = useToast();
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const handlePayment = (tierName: string, amount: number) => {
    setSelectedTier(tierName);
    // Here you would integrate with Remita payment gateway
    toast({
      title: "Redirecting to Payment",
      description: `Processing payment for ${tierName} membership (₦${amount.toLocaleString()})`,
    });
    // Simulate redirect to payment gateway
    setTimeout(() => {
      toast({
        title: "Payment Processing",
        description: "You will be redirected to Remita payment gateway...",
      });
    }, 2000);
  };

  const membershipTiers = [
    {
      id: 'basic',
      name: 'ZAMWE Member',
      price: 5000,
      period: 'One-time Registration',
      popular: false,
      description: 'Perfect for women starting their entrepreneurial journey',
      icon: <Users className="h-8 w-8 text-primary" />,
      features: [
        'Access to ZAMWE community network',
        'Monthly business newsletters',
        'Basic business training materials',
        'Community event notifications',
        'Profile in member directory',
        'Basic mentorship matching',
        'Access to business forums',
        'Quarterly meetup invitations'
      ],
      color: 'from-primary/20 to-primary-light/20'
    },
    {
      id: 'fellow',
      name: 'Fellow ZAMWE',
      price: 30000,
      period: 'Premium Membership',
      popular: true,
      description: 'Comprehensive support for serious business growth',
      icon: <Crown className="h-8 w-8 text-primary" />,
      features: [
        'All Basic Member benefits',
        'Priority access to training programs',
        'One-on-one mentorship sessions',
        'Advanced business planning workshops',
        'Financial literacy training',
        'Marketing and branding support',
        'Access to micro-loan programs',
        'Business pitch competitions',
        'Networking events and retreats',
        'Direct access to business advisors',
        'Custom business growth plan',
        'Priority customer support'
      ],
      color: 'from-primary to-primary-light'
    }
  ];

  const additionalBenefits = [
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: 'Training & Education',
      description: 'Access to comprehensive business training programs and educational resources'
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-primary" />,
      title: 'Business Growth',
      description: 'Tools and strategies to scale your business and increase revenue'
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: 'Support Network',
      description: 'Connect with like-minded entrepreneurs and experienced mentors'
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: 'Recognition',
      description: 'Opportunities to showcase your business and compete for awards'
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Membership Tiers
          </Badge>
          <h1 className="text-4xl md:text-6xl font-elastic font-bold mb-6 text-elastic-hero">
            Choose Your Path to Success
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of women entrepreneurs who are building successful businesses through ZAMWE's comprehensive support system and vibrant community network.
          </p>
        </div>

        {/* Membership Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
          {membershipTiers.map((tier) => (
            <Card 
              key={tier.id} 
              className={`relative border-2 transition-all duration-300 hover:shadow-xl ${
                tier.popular 
                  ? 'border-primary shadow-lg scale-105 pink-glow' 
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mx-auto mb-4`}>
                  {tier.icon}
                </div>
                <CardTitle className="text-2xl font-elastic">{tier.name}</CardTitle>
                <p className="text-muted-foreground">{tier.description}</p>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">₦{tier.price.toLocaleString()}</span>
                  <p className="text-muted-foreground mt-1">{tier.period}</p>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-6">
                  <EnhancedButton 
                    variant={tier.popular ? "hero" : "zamwe"} 
                    className="w-full" 
                    size="lg"
                    onClick={() => handlePayment(tier.name, tier.price)}
                    disabled={selectedTier === tier.name}
                  >
                    {selectedTier === tier.name ? 'Processing...' : `Join ${tier.name}`}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </EnhancedButton>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="bg-gradient-to-r from-secondary/30 to-accent/20 rounded-2xl p-8 mb-12">
          <h2 className="text-3xl font-elastic font-bold text-center mb-8 text-elastic-hero">
            What You Get with ZAMWE Membership
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalBenefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="glass-card border-0">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Active Members</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-0">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-muted-foreground">Businesses Launched</div>
            </CardContent>
          </Card>
          <Card className="glass-card border-0">
            <CardContent className="pt-6">
              <div className="text-3xl font-bold text-primary mb-2">₦50M+</div>
              <div className="text-muted-foreground">Total Revenue Generated</div>
            </CardContent>
          </Card>
        </div>

        {/* Payment Info */}
        <div className="mt-16 text-center">
          <Card className="glass-card border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Secure Payment Processing</h3>
              <p className="text-muted-foreground mb-4">
                Your payment will be processed securely through Remita payment gateway. 
                All transactions are encrypted and your financial information is protected.
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                <span>🔒 SSL Encrypted</span>
                <span>•</span>
                <span>💳 Multiple Payment Methods</span>
                <span>•</span>
                <span>📧 Email Confirmation</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MembershipTiers;