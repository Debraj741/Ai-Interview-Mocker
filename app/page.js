import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Master Your Interviews with <span className="text-blue-400">InterVuAI</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              AI-powered mock interviews that adapt to your skill level. Get realistic practice, 
              instant feedback, and the confidence to ace your next interview.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
              <Link
                href="/sign-in"
                className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Get Started - It's Free
              </Link>
              <a
                href="#reviewsection"
                className="text-sm font-semibold leading-6 text-white flex items-center group"
              >
                See testimonials
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative mt-16 lg:mt-0 lg:ml-10">
            <div className="relative rounded-2xl bg-gray-800 p-2 shadow-xl ring-1 ring-gray-900/10">
              <div className="h-[400px] w-[600px] rounded-lg bg-gray-700 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white">AI Interview Simulation</h3>
                  <p className="mt-2 text-gray-300">Practice with our intelligent AI that adapts to your responses</p>
                </div>
              </div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-900">Try our AI interviewer today!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Practice Smarter</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to ace your interview
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI-powered platform provides realistic interview simulations with personalized feedback.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                {
                  name: "Adaptive Questions",
                  description: "Our AI tailors questions based on your responses, just like a real interviewer would.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )
                },
                {
                  name: "Instant Feedback",
                  description: "Get detailed analysis on your answers, body language, and communication skills.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  name: "Industry Specific",
                  description: "Practice interviews tailored for tech, finance, consulting, and more.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  )
                },
                {
                  name: "Progress Tracking",
                  description: "Monitor your improvement over time with detailed analytics and reports.",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  )
                }
              ].map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      {feature.icon}
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviewsection" className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Trusted by aspiring professionals
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Join thousands of users who have improved their interview skills with InterVuAI.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              {
                name: "Debraj Kundu",
                role: "Software Engineer",
                image: "/avatars/debraj.jpg",
                quote: "InterVuAI helped me land my dream job at a FAANG company. The realistic practice sessions were invaluable.",
                rating: 5
              },
              {
                name: "Dipesh Paul",
                role: "Product Manager",
                image: "/avatars/dipesh.jpg",
                quote: "The best free resource I've found for interview preparation. The AI feedback is incredibly insightful.",
                rating: 5
              },
              {
                name: "Supratik Chakraborty",
                role: "Data Scientist",
                image: "/avatars/supratik.jpg",
                quote: "The AI adapts so well to your responses. It's like practicing with a real human interviewer.",
                rating: 5
              }
            ].map((testimonial) => (
              <figure key={testimonial.name} className="flex flex-col justify-between rounded-2xl bg-gray-800 p-8 shadow-lg ring-1 ring-gray-900/10 transition-all duration-300 hover:ring-blue-500 hover:shadow-xl">
                <div>
                  <div className="flex items-center gap-x-4">
                    <img className="h-12 w-12 rounded-full bg-gray-700" src={testimonial.image} alt="" />
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400">{testimonial.role}</div>
                    </div>
                  </div>
                  <blockquote className="mt-8 text-lg leading-7 text-gray-300">
                    <p>"{testimonial.quote}"</p>
                  </blockquote>
                </div>
                <div className="mt-8 flex items-center gap-x-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative isolate overflow-hidden bg-blue-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to ace your next interview?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
              Join thousands of professionals who have improved their interview skills with InterVuAI.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/sign-in"
                className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 transform hover:scale-105"
              >
                Get started for free
              </Link>
              <a
                href="#reviewsection"
                className="text-sm font-semibold leading-6 text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>
    </div>
  );
}