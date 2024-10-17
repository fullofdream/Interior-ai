import { Breadcrumb } from "@/components/Common";
import { Contact } from "@/components/LandingPage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Virtualroom AI platform",
  description: "This is Contact Page for Our Virtualroom AI platform",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
