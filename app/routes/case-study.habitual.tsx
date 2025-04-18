import NavBar from "~/components/navbar";

export default function CaseStudyHabitual() {
  return (
    <>
      <header className="bg-stone-900">
        <div className="container h-[70vh] flex flex-col items-center justify-center text-white">
          <div className="flex items-center justify-center h-full">
            <h1 className="text-2xl font-light">
              An Innovative AI Powered Habit Tracker designed to address the
              deeper behavioral gaps in habit formation
            </h1>
          </div>
          <div className="flex whitespace-nowrap animate-scroll">
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className="text-9xl font-semibold uppercase mx-8 opacity-20"
              >
                Habitual
              </span>
            ))}
          </div>
        </div>
      </header>
      <section className="flex">
        <div className="w-1/3 aspect-square bg-orange-500"></div>
        <div className="w-2/3 bg-orange-600"></div>
      </section>

      <section></section>

      <NavBar />
    </>
  );
}
