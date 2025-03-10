import ContactForm from "@/components/contact";
import Container from "@/components/shared/Container";

const ContactPage = () => {
  return (
    <Container>
      <div className="h-full flex justify-center items-center">
        <ContactForm />
      </div>
    </Container>
  );
};

export default ContactPage;
