import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

export const revalidate = 0;

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

const conditionColor: Record<string, string> = {
  Refurbished: "bg-[#1e3a5f] text-white",
  Used: "bg-gray-200 text-gray-700",
  New: "bg-[#F5A800] text-white",
};

async function getMotors() {
  return client.fetch(`*[_type == "motor" && inStock == true] | order(_createdAt asc) {
    _id,
    name,
    condition,
    price,
    thrust,
    shaft,
    voltage,
    features,
    notes,
    image
  }`);
}

export default async function Motors() {
  const motors = await getMotors();

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-16">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Trolling Motors for Sale</h1>
        <div className="w-20 h-1 bg-[#F5A800] mb-4" />
        <p className="text-gray-500 text-sm mb-10">
          All refurbished units are fully tested. Call to confirm availability before visiting.
        </p>

        {motors.length === 0 ? (
          <div className="text-center py-16 text-gray-400">
            No motors currently in stock. Call us to ask about availability.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {motors.map((motor: any) => (
              <div key={motor._id} className="border border-gray-200 rounded-lg overflow-hidden flex flex-col sm:flex-row hover:shadow-md transition-shadow">

                {/* Image */}
                <div className="w-full h-52 sm:w-48 sm:h-auto flex-shrink-0 bg-gray-50 flex items-center justify-center">
                  {motor.image ? (
                    <img
                      src={urlFor(motor.image)}
                      alt={motor.name}
                      className="w-full h-full object-contain p-3"
                    />
                  ) : (
                    <div className="text-gray-300 text-sm">No image</div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="font-bold text-lg text-[#1e3a5f]">{motor.name}</h2>
                      <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded mt-1 ${conditionColor[motor.condition]}`}>
                        {motor.condition}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-[#F5A800] whitespace-nowrap">${motor.price}</div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { label: "Thrust", value: motor.thrust },
                      { label: "Shaft", value: motor.shaft },
                      { label: "Voltage", value: motor.voltage },
                    ].map((spec) => (
                      <div key={spec.label} className="bg-gray-50 rounded p-2">
                        <div className="text-xs text-gray-400 uppercase tracking-wide">{spec.label}</div>
                        <div className="font-semibold text-gray-800 text-sm mt-0.5">{spec.value}</div>
                      </div>
                    ))}
                  </div>

                  {motor.features?.length > 0 && (
                    <ul className="space-y-1">
                      {motor.features.map((f: string) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  )}

                  {motor.notes && <p className="text-xs text-gray-400 italic">{motor.notes}</p>}

                  <button className="mt-auto w-full bg-[#1e3a5f] text-white font-semibold py-2.5 rounded hover:bg-[#16304f] transition-colors text-sm">
                    Call to Purchase — (941) 518-9940
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-12 bg-[#f5f8fb] border border-[#d0d8e0] rounded-lg p-6 text-center">
          <div className="font-bold text-[#1e3a5f] mb-1">Don't see what you need?</div>
          <p className="text-sm text-gray-500 mb-4">We may have more units coming in. Give us a call and we'll let you know what's available.</p>
          <a href="tel:9415189940" className="inline-block bg-[#F5A800] text-white font-semibold px-8 py-2.5 rounded hover:bg-[#e09800] transition-colors text-sm">
            Call (941) 518-9940
          </a>
        </div>
      </div>
    </div>
  );
}