import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="mt-25 max-w-[590px] px-2 lg:px-0 flex flex-col gap-5 mx-auto">
      <div className="flex gap-7.5 justify-center">
        {[...Array(5)].map((_, i) => (
          <Image
            key={`star-icon-${i}`}
            src="/star.svg"
            alt="star"
            width={30}
            height={30}
          />
        ))}
      </div>
      <p className="text-neutral-midnight-0 text-sm">
        “In amet turpis eget donec bibendum sit congue cras. Fusce parturient
        pulvinar non a nulla dictum sit facilisi aliquet. Posuere tortor egestas
        orci vel. Ut nulla amet eget habitasse donec urna est iaculis tellus.
        Vitae morbi lorem suscipit fermentum et.”
      </p>
      <div>
        <div className="text-base font-bold mb-2.5">
          Craig Craigford, Store Owner
        </div>
        <div className="text-base font-bold">June 2023</div>
      </div>
    </section>
  );
}
