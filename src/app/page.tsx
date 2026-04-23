"use client";

import Link from "next/link";
import { useState } from "react";
import { LeadCapture } from "@/components/LeadCapture";
import { courses, programs, successStories, faqs, stats } from "@/data/content";

// Hero Section
const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
    {/* Floating Blobs */}
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
    <div className="blob blob-3"></div>
    <div className="blob blob-4"></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 glass rounded-full text-sm font-medium border border-white/20">
            <span className="w-2.5 h-2.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse shadow-lg shadow-indigo-500/50"></span>
            <span className="gradient-text">New Batch Starting Soon</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Build </span>
            <br />
            <span className="gradient-text glow-text">Strong Tech Teams</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            Accredian helps companies build strong technology teams
            through job-focused education, expert guidance, and certificate
            programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn-gradient">
              <span>See All Courses</span>
            </button>
            <button className="btn-outline-glass">
              Book a Free Call
            </button>
          </div>
          <div className="flex items-center gap-10 pt-4">
            <div>
              <p className="text-4xl font-bold gradient-text">{stats.alumni}</p>
              <p className="text-sm text-slate-400 mt-1">Students Placed</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-4xl font-bold gradient-text">{stats.companies}</p>
              <p className="text-sm text-slate-400 mt-1">Partner Companies</p>
            </div>
            <div className="w-px h-12 bg-white/10"></div>
            <div>
              <p className="text-4xl font-bold gradient-text">{stats.rating}</p>
              <p className="text-sm text-slate-400 mt-1">Average Rating</p>
            </div>
          </div>
        </div>

        <div className="relative animate-fade-in-up delay-300">
          {/* Glow effect behind */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 scale-125"></div>

          {/* Main image container */}
          <div className="relative glass-card p-2 glow rounded-2xl border border-white/10 overflow-hidden">
            <img
              src="/images/head.png"
              alt="Learning Platform"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Stats Section
const Stats = () => (
  <section className="relative py-20 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent"></div>
    <div className="container mx-auto px-6 relative z-10">
      <div className="glass-card p-10 border border-white/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: stats.alumni, label: "Alumni Placed", color: "from-indigo-400 to-purple-400" },
            { value: stats.companies, label: "Hiring Partners", color: "from-purple-400 to-pink-400" },
            { value: stats.courses, label: "Programs Offered", color: "from-pink-400 to-rose-400" },
            { value: stats.rating, label: "Average Rating", color: "from-amber-400 to-orange-400" },
          ].map((stat, idx) => (
            <div key={idx} className="group">
              <p className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                {stat.value}
              </p>
              <p className="text-slate-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Programs Section
const Programs = () => (
  <section id="programs" className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          See Our <span className="gradient-text">Programs</span>
        </h2>
        <p className="text-slate-300 text-lg">
          Job-focused programs made for working professionals
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {programs.map((program, idx) => (
          <div
            key={program.id}
            className="glass-card p-6 card-hover group border border-white/10"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-colors border border-white/10">
              <span className="text-3xl">{program.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{program.title}</h3>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              {program.description}
            </p>
            <ul className="space-y-3 mb-6">
              {program.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="text-indigo-400 font-medium hover:text-indigo-300 inline-flex items-center gap-2 group-hover:gap-3 transition-all"
            >
              Know More
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Featured Courses
const FeaturedCourses = () => (
  <section id="courses" className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12">
        <div className="max-w-2xl mb-6 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Popular <span className="gradient-text">Courses</span>
          </h2>
          <p className="text-slate-300 text-lg">
            Our most needed programs that are changing careers
          </p>
        </div>
        <Link
          href="/all-courses"
          className="text-indigo-400 font-medium hover:text-indigo-300 flex items-center gap-2 group"
        >
          See All Courses
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.filter((c) => c.popular).map((course, idx) => (
          <div
            key={course.id}
            className="glass-card overflow-hidden card-hover border border-white/10 group"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={course.coverImage}
                alt={course.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
              <div className="absolute top-3 right-3 glass px-2 py-1 rounded-lg border border-white/20">
                <div className="flex items-center gap-1 text-amber-400">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-xs font-bold text-white">{course.rating}</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                  {course.mode}
                </span>
                <span className="text-xs text-slate-400">({course.reviews} reviews)</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{course.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div>
                  <p className="text-xs text-slate-500">Duration</p>
                  <p className="font-semibold text-white text-sm">{course.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500">Fees</p>
                  <p className="font-semibold text-white text-sm">{course.fees}</p>
                </div>
                <button className="btn-gradient text-sm py-2 px-4">
                  <span>Apply Now</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Success Stories
const SuccessStories = () => (
  <section id="success-stories" className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Success <span className="gradient-text">Stories</span>
        </h2>
        <p className="text-slate-300 text-lg">
          See how our students changed their careers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {successStories.map((story, idx) => (
          <div
            key={story.id}
            className="glass-card p-0 card-hover border border-white/10 overflow-hidden"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="relative h-32 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20">
              <div className="absolute -bottom-10 left-6">
                <img
                  src={story.avatar}
                  alt={story.name}
                  className="w-20 h-20 rounded-xl object-cover border-2 border-white/20 shadow-lg"
                />
              </div>
            </div>
            <div className="pt-12 px-6 pb-6">
              <div className="mb-4">
                <h3 className="font-bold text-white text-lg">{story.name}</h3>
                <p className="text-sm text-indigo-400">{story.role}</p>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 italic">"{story.story}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">{story.company[0]}</span>
                  </div>
                  <span className="text-sm font-medium text-slate-300">{story.company}</span>
                </div>
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Lead Capture Section
const LeadCaptureSection = () => (
  <section className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get Your <span className="gradient-text">Free Career Help</span>
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Not sure which course is right for you? Our experts will help you
            choose the best course based on your goals, experience, and interests.
          </p>
          <div className="space-y-4 pt-4">
            {[
              "Career help made for you from experts",
              "Course suggestions based on your profile",
              "Salary info and career growth plans",
              "Easy payment plans and EMI options",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <LeadCapture />
        </div>
      </div>
    </div>
  </section>
);

// CTA Section
const CTA = () => (
  <section className="relative py-24 overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20"></div>
    <div className="blob blob-1" style={{ opacity: 0.3 }}></div>
    <div className="blob blob-3" style={{ opacity: 0.3 }}></div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="glass-card p-12 md:p-16 border border-white/20 text-center max-w-5xl mx-auto glow">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Start Your <span className="gradient-text">Journey?</span>
        </h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          Join thousands of professionals who have changed their careers with
          Accredian. Get job-focused education and help from experts.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="btn-gradient">
            <span>See All Courses</span>
          </button>
          <button className="btn-outline-glass">
            Book a Free Call
          </button>
        </div>
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQ = () => (
  <section id="faqs" className="relative py-24 overflow-hidden">
    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
          Common Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass-card overflow-hidden border border-white/10 card-hover">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
      >
        <span className="font-medium text-white">{question}</span>
        <svg
          className={`w-5 h-5 text-indigo-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-slate-400 border-t border-white/10 pt-4">
          {answer}
        </div>
      )}
    </div>
  );
};

// Main Page Component
export default function Home() {
  return (
    <>
      {/* Aurora Background */}
      <div className="aurora-bg"></div>

      <Hero />
      <Stats />
      <Programs />
      <FeaturedCourses />
      <SuccessStories />
      <LeadCaptureSection />
      <CTA />
      <FAQ />
    </>
  );
}
