import React from "react";

const testimonials = [
  {
    name: "Aarav Sharma",
    text: "The AI-based speaking practice helped me a lot! I scored Band 7.5 in IELTS.",
  },
  {
    name: "Sophia Verma",
    text: "Mock tests felt just like the real exam. I gained so much confidence.",
  },
  {
    name: "Rajesh Kumar",
    text: "Professional design, great mentors, and instant feedback — highly recommended!",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <p className="italic mb-4">“{t.text}”</p>
            <h4 className="font-semibold text-indigo-600">- {t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
