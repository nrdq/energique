import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle, Sun, Wind, Battery, Home, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const steps = ["Service", "Property", "Details", "Contact"];

const Quote = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    service: "",
    propertyType: "",
    monthlyBill: "",
    roofType: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted!",
      description: "Our team will contact you within 24 hours with a personalized quote.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const services = [
    { id: "solar", icon: Sun, label: "Solar Energy" },
    { id: "wind", icon: Wind, label: "Wind Power" },
    { id: "storage", icon: Battery, label: "Battery Storage" },
  ];

  const propertyTypes = [
    { id: "residential", icon: Home, label: "Residential" },
    { id: "commercial", icon: Building, label: "Commercial" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl text-primary-foreground mb-4">
              Get Your Free Quote
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Tell us about your energy needs and we'll provide a customized solution.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                        index <= currentStep 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index < currentStep ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className={`text-sm mt-2 ${
                      index <= currentStep ? "text-primary font-medium" : "text-muted-foreground"
                    }`}>
                      {step}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`h-0.5 w-16 md:w-24 mx-2 ${
                      index < currentStep ? "bg-primary" : "bg-muted"
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step Content */}
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-lg">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Service Selection */}
                {currentStep === 0 && (
                  <div className="animate-fade-in">
                    <h2 className="heading-md mb-6">What service are you interested in?</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                      {services.map((service) => (
                        <button
                          key={service.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, service: service.id })}
                          className={`p-6 rounded-2xl border-2 transition-all ${
                            formData.service === service.id
                              ? "border-primary bg-accent"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <service.icon className={`w-10 h-10 mx-auto mb-3 ${
                            formData.service === service.id ? "text-primary" : "text-muted-foreground"
                          }`} />
                          <span className="font-semibold block">{service.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Property Type */}
                {currentStep === 1 && (
                  <div className="animate-fade-in">
                    <h2 className="heading-md mb-6">What type of property is this for?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {propertyTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, propertyType: type.id })}
                          className={`p-8 rounded-2xl border-2 transition-all ${
                            formData.propertyType === type.id
                              ? "border-primary bg-accent"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <type.icon className={`w-12 h-12 mx-auto mb-4 ${
                            formData.propertyType === type.id ? "text-primary" : "text-muted-foreground"
                          }`} />
                          <span className="font-semibold block text-lg">{type.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Details */}
                {currentStep === 2 && (
                  <div className="animate-fade-in space-y-6">
                    <h2 className="heading-md mb-6">Tell us more about your needs</h2>
                    <div>
                      <label htmlFor="monthlyBill" className="block text-sm font-medium mb-2">
                        Average Monthly Energy Bill
                      </label>
                      <Input
                        id="monthlyBill"
                        name="monthlyBill"
                        value={formData.monthlyBill}
                        onChange={handleChange}
                        className="rounded-xl h-12"
                        placeholder="e.g., $200"
                      />
                    </div>
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium mb-2">
                        Property Address
                      </label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="rounded-xl h-12"
                        placeholder="123 Main Street, City, State"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Additional Information
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-xl min-h-[120px]"
                        placeholder="Tell us anything else we should know..."
                      />
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Info */}
                {currentStep === 3 && (
                  <div className="animate-fade-in space-y-6">
                    <h2 className="heading-md mb-6">How can we reach you?</h2>
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="rounded-xl h-12"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="rounded-xl h-12"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="rounded-xl h-12"
                          placeholder="+1 (234) 567-890"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation */}
                <div className="flex justify-between mt-10 pt-8 border-t border-border">
                  {currentStep > 0 ? (
                    <Button type="button" variant="outline" onClick={handleBack}>
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </Button>
                  ) : (
                    <Link to="/" className="text-muted-foreground hover:text-foreground flex items-center">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Cancel
                    </Link>
                  )}

                  {currentStep < steps.length - 1 ? (
                    <Button type="button" variant="cta" onClick={handleNext}>
                      Next
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button type="submit" variant="cta">
                      Submit Request
                      <CheckCircle className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
