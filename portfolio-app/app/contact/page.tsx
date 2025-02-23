export default function Contact() {
  return (
    <main className="max-w-7xl mx-auto px-32 py-16">
      <div className="fixed inset-0 bg-[#D0DDD0] -z-10" />
      
      <section className="space-y-8">
        <h1 className="text-4xl font-normal">Contact</h1>
        <p className="text-lg text-neutral-600">
          Feel free to reach out to me through any of the following channels:
        </p>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-lg font-medium">Email:</h2>
            <a href="mailto:your.email@example.com" className="text-neutral-600 hover:text-neutral-800">
              your.email@example.com
            </a>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-lg font-medium">LinkedIn:</h2>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-800"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>
          
          <div className="space-y-2">
            <h2 className="text-lg font-medium">GitHub:</h2>
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-neutral-600 hover:text-neutral-800"
            >
              github.com/yourusername
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 