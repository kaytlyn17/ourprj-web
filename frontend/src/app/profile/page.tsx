import About from "@/components/profile/About";
import Skills from "@/components/profile/Skills";
import TechStack from "@/components/profile/TechStack";
import Timeline from "@/components/profile/Timeline";
import PageHeader from "@/components/layout/PageHeader";

export default function ProfilePage() {
  return (
    <>
      <PageHeader
        eyebrow="PROFILE"
        title="About me."
        description="Cybersecurity, software development and infrastructure — learning by building systems and understanding how they work."
      />

      <About />
      <Skills />
      <TechStack />
      <Timeline />
    </>
  );
}