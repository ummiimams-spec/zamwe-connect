import { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle2,
  Star
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import zamweLogo from '@/assets/zamwe-logo.png';

const Homepage = () => {
  const { toast } = useToast();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send to backend
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setContactForm({ name: '', email: '', subject: '', message: '' });
  };

  const features = [
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Women Empowerment",
      description: "Connecting and empowering women entrepreneurs across Zamfara State"
    },
    {
      icon: <Target className="h-8 w-8 text-primary" />,
      title: "Business Growth",
      description: "Providing resources, training, and networking opportunities for business success"
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Community Impact",
      description: "Creating lasting positive change in our communities through enterprise"
    }
  ];

  const testimonials = [
    {
      name: "Aisha Muhammad",
      business: "Fashion & Tailoring",
      content: "ZAMWE transformed my small tailoring business into a thriving enterprise. The support and networking opportunities are incredible!",
      rating: 5
    },
    {
      name: "Fatima Abdullahi", 
      business: "Food Processing",
      content: "Through ZAMWE, I learned modern business practices that doubled my revenue within six months.",
      rating: 5
    },
    {
      name: "Hauwa Sani",
      business: "Handicrafts",
      content: "The mentorship and training programs helped me scale my handicraft business beyond my local community.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 px-4 bg-gradient-to-br from-background via-accent/30 to-secondary/50 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="container mx-auto text-center relative">
          <div className="animate-fade-in-up">
            <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
              Empowering Women • Building Communities • Creating Success
            </Badge>
            <h1 className="text-5xl md:text-7xl font-elastic font-bold mb-6">
              <span className="text-elastic-hero">ZAMFARA</span><br />
              <span className="text-elastic-hero">WOMEN</span><br />
              <span className="text-elastic-hero">ENTREPRENEURS</span><br />
              <span className="text-elastic-hero">ASSOCIATION</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto font-medium">
              Join a powerful network of women entrepreneurs transforming businesses and communities across Zamfara State through innovation, collaboration, and shared success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/membership">
                <EnhancedButton variant="hero" size="xl" className="w-full sm:w-auto">
                  Join ZAMWE Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </EnhancedButton>
              </Link>
              <Link to="/about">
                <EnhancedButton variant="elegant" size="xl" className="w-full sm:w-auto">
                  Learn More About Us
                </EnhancedButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-elastic font-bold mb-6 text-elastic-hero">
              Why Choose ZAMWE?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive support to help women entrepreneurs thrive in today's competitive market
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:shadow-lg transition-all duration-300 border-0">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-elastic text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/30 to-accent/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-elastic font-bold mb-6 text-elastic-hero">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from women who have transformed their businesses through ZAMWE
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <Badge variant="secondary">{testimonial.business}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-elastic font-bold mb-6 text-elastic-hero">
              Contact Us
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to join our community? Get in touch and let's discuss how ZAMWE can support your entrepreneurial journey.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="glass-card border-0">
              <CardHeader>
                <CardTitle className="font-elastic text-2xl">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      value={contactForm.subject}
                      onChange={(e) => setContactForm({...contactForm, subject: e.target.value})}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>
                  <EnhancedButton type="submit" variant="zamwe" size="lg" className="w-full">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Message
                  </EnhancedButton>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <Phone className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-muted-foreground">08169041781</p>
                    </div>
                  </div>
                  <div className="flex items-start mb-6">
                    <Mail className="h-6 w-6 text-primary mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <div className="space-y-1">
                        <p className="text-muted-foreground">faridamusag@gmail.com</p>
                        <p className="text-muted-foreground">faizaaminu760@gmail.com</p>
                        <p className="text-muted-foreground">opeyemizahraa29@gmail.com</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <Users className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Contact Person</h3>
                      <p className="text-muted-foreground">Hafsat Shafiu</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p className="text-muted-foreground">Gusau, Zamfara State, Nigeria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-elastic text-xl mb-4">Why Partner With Us?</h3>
                  <div className="space-y-3">
                    {[
                      "Access to business training and mentorship",
                      "Networking with successful entrepreneurs", 
                      "Financial literacy and business planning support",
                      "Marketing and digital presence assistance"
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-primary-light/10 to-secondary/20">
        <div className="container mx-auto text-center">
          <img src={zamweLogo} alt="ZAMWE" className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-elastic font-bold mb-6 text-elastic-hero">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of women entrepreneurs who are already building successful businesses with ZAMWE's support and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/membership">
              <EnhancedButton variant="hero" size="xl">
                Start Your Journey Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </EnhancedButton>
            </Link>
            <Link to="/updates">
              <EnhancedButton variant="elegant" size="xl">
                View Latest Updates
              </EnhancedButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;