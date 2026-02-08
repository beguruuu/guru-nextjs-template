import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 flex items-center justify-center px-4 py-8">
      <div className="max-w-xl w-full text-center">
        <div className="mb-10 relative flex justify-center">
          <div className="absolute inset-0 flex justify-center">
            <div className="w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl opacity-40"></div>
          </div>
          <div className="relative z-10">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-200/30 to-cyan-200/20 flex items-center justify-center backdrop-blur-sm border border-blue-300/40">
              <Image
                src="/logo-no-text-light.png"
                alt="GURU"
                width={100}
                height={100}
                className="w-24 h-24 drop-shadow-lg"
              />
            </div>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight tracking-tight">
          Welcome. Let's build your
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300 font-black">
            Operating System
          </span>
        </h1>

        <p className="text-sm md:text-base text-blue-100 mb-8 leading-relaxed opacity-90">
          Start by describing how your team works day to day or upload the spreadsheets you already use
        </p>

        <div className="mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20">
            <ul className="space-y-2.5">
              <li className="flex items-center gap-3 text-white text-sm">
                <span className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                how your team works day to day
              </li>
              <li className="flex items-center gap-3 text-white text-sm">
                <span className="w-1 h-1 bg-blue-400 rounded-full flex-shrink-0"></span>
                or upload the spreadsheets you already use
              </li>
            </ul>
          </div>
        </div>

        <p className="text-sm text-blue-200 font-medium leading-relaxed">
          GURU will guide you, ask the right questions,<br />
          and turn your requests into software.
        </p>
      </div>
    </div>
  );
}