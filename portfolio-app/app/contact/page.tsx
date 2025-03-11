export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-32 py-16">
      <div className="fixed inset-0 bg-[#D0DDD0] -z-10" />
      
      <section className="space-y-8">
      <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="text-lg text-neutral-600">
          Feel free to reach out to me through any of the following channels:
        </p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Email:</h2>
            <a href="mailto:huangdarren1106@gmail.com" className="text-neutral-600 hover:text-neutral-800">
              huangdarren1106@gmail.com
            </a>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-lg font-medium">LinkedIn:</h2>
            <a 
              href="https://www.linkedin.com/in/darren-huang-a492b2163/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-800"
            >
              https://www.linkedin.com/in/darren-huang-a492b2163/
            </a>
          </div>
          
          {/* <div className="space-y-2">
            <h2 className="text-lg font-medium">GitHub:</h2>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-800"
            >
              github.com/yourusername
            </a>
          </div> */}
        </div>
      </section>
    </main>
  );
} 