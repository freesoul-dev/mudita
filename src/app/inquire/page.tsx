import InquiryForm from "@/components/forms/InquiryForm";

export default function InquirePage() {
  return (
    <div className="bg-background pt-24 md:pt-32 pb-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground">
              Inquire About Your Visit
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              To ensure Mudita is the perfect fit for your needs, please fill
              out the form below. We will review your submission and contact you
              to discuss your visit proposal.
            </p>
            <p className="mt-2 text-sm text-accent-foreground/80">
              Please note, this is an inquiry form, not a booking confirmation.
            </p>
          </div>
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
