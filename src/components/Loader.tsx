function Loader() {
  return (
    <div className="h-screen animate-pulse flex flex-col items-center gap-24 px-5 sm:px-10 xl:px-12 pt-12 overflow-hidden">
      {/* Top Section */}
      <section className="flex flex-col sm:flex-row items-center justify-between w-full gap-6">
        <div className="w-full sm:w-[30%] py-12 rounded-xl bg-gray-400"></div>

        <div className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-[65%]">
          <div className="flex flex-wrap sm:justify-center items-start justify-start gap-4 w-full sm:w-auto *:py-6 *:w-24 sm:*:w-36 *:rounded-xl *:bg-gray-300">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <span className="w-full sm:w-40 py-12 rounded-xl bg-gray-400"></span>
        </div>
      </section>

      {/* Middle Section */}
      <section className="flex flex-col lg:flex-row items-start gap-20 w-full">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col gap-6 w-full *:w-full">
            <span className="rounded-xl bg-gray-300 py-16 w-1/3"></span>

            <div className="flex flex-col items-start gap-3 *:bg-gray-300 *:py-4 *:rounded-xl">
              <span className="w-1/4"></span>
              <span className="w-1/2"></span>
              <span className="w-1/3"></span>
            </div>

            <div className="flex flex-col items-end gap-3 *:bg-gray-300 *:py-4 *:rounded-xl">
              <span className="w-1/4"></span>
              <span className="w-1/2"></span>
              <span className="w-1/3"></span>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col gap-6 w-full *:w-full">
            <span className="rounded-xl bg-gray-300 py-40"></span>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="flex flex-col lg:flex-row items-start gap-20 w-full">
        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col gap-6 w-full *:w-full">
            <span className="rounded-xl bg-gray-300 py-40"></span>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-1/2">
          <div className="flex flex-col gap-6 w-full *:w-full">
            <span className="rounded-xl bg-gray-300 py-16 w-1/3"></span>

            <div className="flex flex-col items-start gap-3 *:bg-gray-300 *:py-4 *:rounded-xl">
              <span className="w-1/4"></span>
              <span className="w-1/2"></span>
              <span className="w-1/3"></span>
            </div>

            <div className="flex flex-col items-end gap-3 *:bg-gray-300 *:py-4 *:rounded-xl">
              <span className="w-1/4"></span>
              <span className="w-1/2"></span>
              <span className="w-1/3"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Loader;
