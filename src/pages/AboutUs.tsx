import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EnhancedButton } from "@/components/ui/enhanced-button";
import { Users, TrendingUp, Award, Heart, Star, CheckCircle, ArrowRight } from "lucide-react";

const AboutUs = () => {
  const successStories = [
    {
      name: "Aisha Muhammad",
      business: "Fashion Design Studio",
      story: "From selling clothes from my bedroom to owning a 20-employee fashion house in just 18 months! ZAMWE connected me with investors and mentors who believed in my vision.",
      achievement: "₦2.5M Monthly Revenue",
      image: "👗"
    },
    {
      name: "Fatima Abdullahi",
      business: "Organic Food Processing",
      story: "I started with ₦50,000 and a dream. Today, my organic food products are in 50+ supermarkets across Northern Nigeria. The networking opportunities at ZAMWE are incredible!",
      achievement: "₦5M+ Annual Sales",
      image: "🥗"
    },
    {
      name: "Zainab Usman",
      business: "Tech Consulting",
      story: "As a tech entrepreneur in Zamfara, I felt isolated. ZAMWE gave me a sisterhood of ambitious women who pushed me to scale my business internationally!",
      achievement: "International Contracts",
      image: "💻"
    }
  ];

  const benefits = [
    "Access to ₦50M+ funding opportunities annually",
    "Direct mentorship from successful entrepreneurs",
    "Weekly business masterclasses and workshops",
    "Guaranteed business partnerships within your first 6 months",
    "Free legal and financial consultation services",
    "Priority access to government contracts and grants",
    "International business expo participation",
    "24/7 business emergency support hotline"
  ];

  const stats = [
    { number: "500+", label: "Successful Women", icon: Users },
    { number: "₦2.8B", label: "Revenue Generated", icon: TrendingUp },
    { number: "85%", label: "Business Growth Rate", icon: Award },
    { number: "100+", label: "Industries Covered", icon: Heart }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-light to-accent overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <Badge className="mb-6 text-lg px-6 py-2 bg-white/20 text-white border-white/30">
              🚀 Transforming Lives Since 2020
            </Badge>
            <h1 className="text-6xl md:text-8xl font-elastic font-bold mb-8 leading-tight">
              <span className="text-gradient-hero block">YOUR SUCCESS</span>
              <span className="text-gradient-hero block">IS OUR MISSION</span>
            </h1>
            <p className="text-2xl md:text-3xl mb-12 max-w-4xl mx-auto font-light opacity-95">
              We don't just support women entrepreneurs – we create 
              <span className="font-bold text-accent-light"> unstoppable business empires </span>
              that transform communities and build generational wealth.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <EnhancedButton variant="hero" size="xl" className="text-xl px-12 py-6">
                Join 500+ Success Stories
                <ArrowRight className="ml-2 h-6 w-6" />
              </EnhancedButton>
              <EnhancedButton variant="outline" size="xl" className="text-xl px-12 py-6 border-white text-white hover:bg-white hover:text-primary">
                See Our Impact
              </EnhancedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="glass-card border-0 text-center hover:scale-105 transition-all duration-300">
                <CardContent className="p-8">
                  <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-4xl font-elastic font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground font-semibold">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 text-lg px-6 py-2 bg-primary/10 text-primary">
              ⭐ Real Stories, Real Results
            </Badge>
            <h2 className="text-5xl md:text-6xl font-elastic font-bold mb-6">
              <span className="text-gradient">SUCCESS STORIES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These women started just like you – with dreams, determination, and the courage to join ZAMWE. 
              Now they're industry leaders transforming their communities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="glass-card border-0 hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6 text-center">{story.image}</div>
                  <Badge className="mb-4 bg-primary/10 text-primary">{story.achievement}</Badge>
                  <h3 className="text-2xl font-bold mb-2">{story.name}</h3>
                  <p className="text-primary font-semibold mb-4">{story.business}</p>
                  <blockquote className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{story.story}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-muted-foreground">Verified Member</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 text-lg px-6 py-2 bg-primary/10 text-primary">
                💎 Exclusive Member Benefits
              </Badge>
              <h2 className="text-5xl md:text-6xl font-elastic font-bold mb-6">
                <span className="text-gradient">WHY JOIN ZAMWE?</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Every membership tier unlocks incredible opportunities that pay for themselves within months.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 rounded-lg hover:bg-white/50 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-lg font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 text-lg px-6 py-2 bg-primary/10 text-primary">
                  🎯 Our Mission
                </Badge>
                <h2 className="text-5xl font-elastic font-bold mb-8">
                  <span className="text-gradient">BUILDING THE</span><br />
                  <span className="text-gradient">FUTURE TOGETHER</span>
                </h2>
                <div className="space-y-6 text-lg text-muted-foreground">
                  <p>
                    ZAMWE exists to shatter the barriers that prevent women from achieving extraordinary business success. 
                    We believe that when women thrive, entire communities transform.
                  </p>
                  <p>
                    Our proven system combines mentorship, funding access, strategic partnerships, and continuous 
                    education to create an unstoppable force of women entrepreneurs across Zamfara State and beyond.
                  </p>
                  <p className="text-primary font-semibold text-xl">
                    Join us, and become part of a movement that's rewriting the rules of business success.
                  </p>
                </div>
              </div>
              <div className="space-y-8">
                <Card className="glass-card border-0 p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold mb-4">Award-Winning Community</h3>
                    <p className="text-muted-foreground">
                      Recognized by the Federal Ministry of Women Affairs as the 
                      "Most Impactful Women's Business Network" for 3 consecutive years.
                    </p>
                  </div>
                </Card>
                <Card className="glass-card border-0 p-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🌍</div>
                    <h3 className="text-2xl font-bold mb-4">Global Connections</h3>
                    <p className="text-muted-foreground">
                      Access exclusive partnerships with international organizations, 
                      opening doors to global markets and opportunities.
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-primary-light to-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-5xl md:text-6xl font-elastic font-bold mb-8">
              READY TO TRANSFORM<br />YOUR BUSINESS?
            </h2>
            <p className="text-2xl mb-12 opacity-95">
              Don't let another day pass watching others succeed. 
              Your business empire starts with one decision – joining ZAMWE today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <EnhancedButton variant="hero" size="xl" className="text-xl px-12 py-6 bg-white text-primary hover:bg-gray-100">
                Start Your Journey - ₦5,000
                <ArrowRight className="ml-2 h-6 w-6" />
              </EnhancedButton>
              <EnhancedButton variant="outline" size="xl" className="text-xl px-12 py-6 border-white text-white hover:bg-white/10">
                Premium Membership - ₦30,000
              </EnhancedButton>
            </div>
            <p className="mt-8 text-lg opacity-80">
              🔒 Secure payment • 💰 30-day money-back guarantee • 🚀 Instant access
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;