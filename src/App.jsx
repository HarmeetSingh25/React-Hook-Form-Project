import React from "react";
import { useForm } from "react-hook-form"
const App = () => {
  const { register, handleSubmit, watch } = useForm()
  const name = watch("name");
  const onSubmit = (data) => {
alert("Form submitted")
    console.log(data)
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-5xl grid md:grid-cols-2 gap-8">

        {/* FORM SECTION */}

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold text-gray-700">
            User Profile Form
          </h2>

          <input
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="text"
            placeholder="Enter your name"
            {...register("name", { required: true, maxLength: 20 })}
          />

          <input
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="email"
            placeholder="Enter your email"
            {...register("email", { required: true })}
          />

          <input
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Enter your age"
            {...register("age", { required: true })}

          />

          <select className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          {/* Skills */}

          <div>
            <label className="font-semibold text-gray-700">Skills</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {["React", "Node", "MongoDB", "Express"].map((skill) => (
                <label
                  key={skill}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                >
                  <input type="checkbox" />
                  {skill}
                </label>
              ))}
            </div>
          </div>

          <input
            className="w-full border rounded-lg px-4 py-2"
            type="text"
            placeholder="Experience (years)"
          />

          <input
            className="w-full border rounded-lg px-4 py-2"
            type="file"
            accept="image/*"
          />

          <textarea
            className="w-full border rounded-lg px-4 py-2 resize-none"
            placeholder="Short bio (max 150 chars)"
            maxLength={150}
          />

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
            Submit
          </button>
        </form>

        {/* PREVIEW SECTION */}

        <div className="bg-gray-50 p-6 rounded-2xl shadow-inner">
          <h2 className="text-xl font-bold mb-4 text-gray-700">
            Live Preview
          </h2>

          <div className="space-y-3 text-gray-600">
            <p><strong>Name:{name}</strong> -</p>
            <p><strong>Email:</strong> </p>
            <p><strong>Age:</strong> </p>
            <p><strong>Gender:</strong> </p>
            <p><strong>Skills:</strong> </p>
            <p><strong>Bio:</strong> </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default App;
