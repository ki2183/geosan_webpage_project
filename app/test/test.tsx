/**
 * v0 by Vercel.
 * @see https://v0.dev/t/MqI3nm9lgJA
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <PowerIcon className="h-6 w-6" />
          <span className="sr-only">CNC Processing</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Services
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Capabilities
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Portfolio
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Precision CNC Processing</h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Unlock the power of advanced CNC technology to transform your manufacturing process. Achieve
                unparalleled precision and quality with our state-of-the-art machinery and expert craftsmanship.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Learn More
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  prefetch={false}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Advanced CNC Machinery
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Unparalleled Precision</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our state-of-the-art CNC machines are engineered to deliver unmatched precision and efficiency,
                  ensuring your parts are manufactured to the tightest tolerances.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="CNC Machine"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Precision Milling</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our advanced CNC milling machines deliver unparalleled accuracy and surface finish, ensuring
                        your parts meet the tightest specifications.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Laser Cutting</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Utilizing the latest laser cutting technology, we produce intricate parts with exceptional
                        detail and edge quality.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Turning</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our CNC lathes deliver precise, repeatable results for your rotational parts, ensuring
                        consistent quality and dimensional accuracy.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Precision Manufacturing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Uncompromising Quality</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our meticulous manufacturing processes and quality control measures ensure that every part we produce
                  meets the highest standards of excellence.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="Manufacturing Process"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Rigorous Inspection</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our parts undergo a comprehensive inspection process, ensuring they meet the most stringent
                        quality standards.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Continuous Improvement</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        We constantly refine our processes and invest in the latest technologies to deliver unparalleled
                        quality and efficiency.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Sustainable Practices</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        Our commitment to sustainability is reflected in our eco-friendly manufacturing practices and
                        responsible material sourcing.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Client Portfolio
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Industry Leaders</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our CNC processing expertise has earned the trust of industry-leading clients across a wide range of
                  sectors. Explore our portfolio to see the exceptional work we've delivered.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-white text-lg font-medium">Precision Aerospace Parts</div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-white text-lg font-medium">Intricate Automotive Components</div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-white text-lg font-medium">High-Precision Medical Devices</div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-white text-lg font-medium">Complex Industrial Machinery</div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-white text-lg font-medium">Precision-Engineered Parts</div>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-xl">
                <img
                  src="/placeholder.svg"
                  width="400"
                  height="300"
                  alt="Portfolio Item"
                  className="aspect-[4/3] w-full object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <div className="text-white text-lg font-medium">Cutting-Edge Robotics Components</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

type PowerIcon_type={}

function PowerIcon() {
  return (
    <svg
    //   {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2v10" />
      <path d="M18.4 6.6a9 9 0 1 1-12.77.04" />
    </svg>
  )
}