import React from "react";
import { useForm } from "react-hook-form"
const App = () => {
  const { register, handleSubmit, watch , reset} = useForm({
    defaultValues: {
 name: "",
    email: "",
    age: "",
    gender: "",
    skills: [],
    bio: "",
    image: null
  }
  })
  const name = watch("name");
  const email = watch("email");
  const age = watch("age");
  const gender = watch("gender");
  const skills = watch("skills");
  const bio = watch("bio");
  const image = watch("image");
  const experience = watch("experience");
  const onSubmit = (data) => {
    alert("Form submitted")
    reset()
    console.log(data)
  }
  const imageFile = image?.[0]; // get first file
  const imagePreview = imageFile ? URL.createObjectURL(imageFile) : null;

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

          <select {...register("gender", { required: true })} className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
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
                  <input
                    type="checkbox"
                    value={skill}
                    {...register("skills")}
                  />
                  {skill}
                </label>
              ))}
            </div>
          </div>


          <input
            className="w-full border rounded-lg px-4 py-2"
            type="text"
            placeholder="Experience (years)"
            {...register("experience",{required:true})}
          />

          <input
            className="w-full border rounded-lg px-4 py-2"
            type="file"
            accept="image/*"
            {...register("image", { required: true })}
          />

          <textarea
            className="w-full border rounded-lg px-4 py-2 resize-none"
            placeholder="Short bio (max 150 chars)"
            maxLength={150}
            {...register("bio", { required: true })}
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

          {imagePreview && (
            <img
              src={imagePreview}
              alt="Profile Preview"
              className="w-32 h-32 object-cover rounded-full border mb-3"
            />
          )}

          <div className="space-y-3 text-gray-600">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Experience:</strong> {experience}</p>
            <p><strong>Skills:</strong> {skills.join(", ")}</p>

            <p><strong>Bio:</strong> {bio}</p>
        
          </div>
        </div>


      </div>
    </div>
  );
};

export default App;
