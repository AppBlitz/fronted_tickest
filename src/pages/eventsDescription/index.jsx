import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { events } from "../../utils";
import React from "react";

const DescriptionEvent = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    events.getById("/search/id", id).then((answer) => {
      if (answer.status === 200) {
        console.log(answer.data);
        setEvent(answer.data);
        setLoading(false);
      } else {
        console.error("Error fetching event data.");
      }
    });
  }, [id]);

  return (
    <div className="w-full bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        {loading ? (
          <div className="flex justify-center mt-8">
            <div className="animate-spin border-t-2 border-blue-500 border-solid w-16 h-16 rounded-full"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Left Side: Event Details */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900">
                {event.nameEvent}
              </h1>
              <div className="my-4">
                <hr className="border-gray-300" />
              </div>
              <p className="text-lg text-gray-700">
                {event.description || "No description available."}
              </p>

              {/* Price */}
              {event.price && (
                <div className="mt-4">
                  <p className="text-xl font-semibold text-green-600">
                    Price: ${event.price}
                  </p>
                </div>
              )}

              {/* Event Category/Chip */}
              <div className="mt-4">
                <span className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-full">
                  {event.category || "General"}
                </span>
              </div>
            </div>

            {/* Right Side: Event Image */}
            <div>
              <div className="relative w-full pb-[56.25%] bg-gray-300 rounded-lg overflow-hidden">
                <img
                  src={event.image || "/default-image.jpg"} // Fallback image
                  alt={event.nameEvent}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        )}

        {/* Comments Section */}
        {event?.comments && event.comments.length > 0 ? (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-900">Comments</h2>
            <div className="mt-4 space-y-4">
              {event.comments.map((comment, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <p className="font-semibold text-gray-800">{comment.user}</p>
                  <p className="text-gray-700 mt-2">{comment.text}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-8 text-gray-600">No comments available.</div>
        )}
      </div>
    </div>
  );
};

export { DescriptionEvent };
