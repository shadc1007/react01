export default function Main() {
  return (
    <main className="py-24 px-7 md:px-32 lg:px-56">
      <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">Fun facts about <span className="text-react">React</span></h1>
      <ul className="list-inside list-disc text-lg text-white mt-6 ml-8 md:text-xl lg:text-2xl">
        <li className="mb-2">Was first released in 2013</li>
        <li className="mb-2">Was originally created by Jordan Walke</li>
        <li className="mb-2">Has well over 100K stars on GitHub</li>
        <li className="mb-2">Is maintained by Facebook</li>
        <li className="mb-2">Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
}
