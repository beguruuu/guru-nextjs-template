import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center px-6 py-10 sm:px-10 font-[family-name:var(--font-geist-sans)]">
      <main className="w-full max-w-2xl rounded-3xl bg-white shadow-xl shadow-slate-200/80 px-6 py-8 sm:px-10 sm:py-4 flex flex-col items-center sm:items-start">
        <div className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-3 self-center">
          <Image
            className="h-auto w-auto"
            src="/Guru_no_text.png"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </div>
        <div className="text-base sm:text-lg leading-relaxed text-center sm:text-left font-[family-name:var(--font-geist-mono)] text-slate-600 space-y-4">
              - Start by describing how your team works day to day 
              <br />
              <br />
              - Or upload the spreadsheets you already use.
        </div>

      
      </main>
    
    </div>
  );
}