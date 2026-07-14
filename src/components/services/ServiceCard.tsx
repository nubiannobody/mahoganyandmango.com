import { Service } from "../../types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({
  service,
}: ServiceCardProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-md">
      <img
        src={service.illustration}
        alt={service.title}
        className="w-full"
      />

      <div className="p-6">

        <h3 className="text-xl font-bold">
          {service.title}
        </h3>

        <p className="mt-2 text-gray-600">
          {service.shortDescription}
        </p>

        <div className="mt-6 flex gap-3">

          <button>
            Book Consultation
          </button>

          <button>
            Case Study
          </button>

          <button>
            How It Works
          </button>

        </div>

      </div>
    </div>
  );
}