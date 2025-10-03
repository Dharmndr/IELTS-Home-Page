import React from "react";
import { BookOpen, Mic, BarChart } from "lucide-react";

const features = [
  {
    icon: <Mic className="w-10 h-10 text-indigo-600" />,
    title: "Speaking Practice",
    desc: "Practice with AI and improve your fluency and confidence.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-indigo-600" />,
    title: "Mock Tests",
    desc: "Take full-length IELTS tests and get instant feedback.",
  },
  {
    icon: <BarChart className="w-10 h-10 text-indigo-600" />,
    title: "AI Band Score",
    desc: "Receive AI-powered predictions of your IELTS band score.",
  },
];

function Features() {
  return (
    <section id="features" className="py-20 px-6 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Key Features</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
