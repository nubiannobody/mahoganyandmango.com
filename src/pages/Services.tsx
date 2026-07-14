import ServiceCard from "../components/services/ServiceCard";
import { services } from "../data/services";

export default function Services() {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {services.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
        />
      ))}

    </section>
  );
}