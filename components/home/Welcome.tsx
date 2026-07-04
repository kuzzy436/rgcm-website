import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Welcome() {
  return (
    <section className="py-24">
      <Container>
        <SectionTitle
          subtitle="Welcome"
          title="Reconciling Lives Through the Grace of Christ"
        />

        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-lg leading-8 text-gray-600">
            Welcome to Reconcilers Grace Covenant Ministries, where lives are
            transformed through the power of God's Word, heartfelt worship,
            fervent prayer, and genuine Christian fellowship.
          </p>

          <p className="text-lg leading-8 text-gray-600">
            We are committed to reconciling people back to God through the
            preaching of the Gospel of Jesus Christ, nurturing believers in
            faith, and equipping them to impact their communities for God's
            glory.
          </p>
        </div>
      </Container>
    </section>
  );
}