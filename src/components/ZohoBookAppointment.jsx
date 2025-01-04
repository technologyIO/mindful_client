'use client'

export default function ZohoBookAppointment() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-sm">
      <h1 className="text-2xl font-normal mb-6 p-4 bg-gray-700 text-white">
        Book An Appointment
      </h1>
      
      <form className="space-y-6">
        <div>
          <label className="block mb-4">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                type="text"
                placeholder="testing"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
              <span className="text-sm text-gray-500">First Name</span>
            </div>
            <div>
              <input
                type="text"
                placeholder="testing"
                className="w-full px-3 py-2 border border-gray-300 rounded"
                required
              />
              <span className="text-sm text-gray-500">Last Name</span>
            </div>
          </div>
        </div>

        <div>
          <label className="block mb-2">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            placeholder="121212121"
            className="w-full px-3 py-2 border border-gray-300 rounded"
            required
          />
          <span className="text-sm text-gray-500">Number</span>
        </div>

        <div>
          <label className="block mb-2">
            Location <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="location"
                className="mr-2"
                defaultChecked
              />
              Greater Kailash 1, Delhi
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="location"
                className="mr-2"
              />
              Whitefield, Bangalore
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="location"
                className="mr-2"
              />
              Hebbal, Bangalore (Inside Aster CMI Hospital)
            </label>
          </div>
        </div>

        <div>
          <label className="block mb-2">Message (Optional)</label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded h-32"
            placeholder="For what you seeking support? Let us know, and we can recommend the right expert for you."
          ></textarea>
        </div>

        <div>
          <label className="block mb-2">
            In the event that our team is unable to reach out to you immediately, at what time would you prefer to receive a call back?
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded">
            <option>10AM - 11AM</option>
            <option>11AM - 12PM</option>
            <option>12PM - 1PM</option>
            <option>1PM - 2PM</option>
          </select>
          <span className="text-sm text-gray-500 italic">
            We do not want to disturb you when you are busy. Please let us know the best time when we can reach out to you.
          </span>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

