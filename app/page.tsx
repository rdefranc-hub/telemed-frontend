import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center text-center px-6 py-20">

      {/* Logo */}
      <img src="/logo.svg" className="w-20 mb-8 opacity-90" alt="Brazilian Healthcare" />

      {/* Headline Premium */}
      <h1 className="text-5xl font-bold font-poppins text-primary tracking-tight">
        Saúde Brasileira Premium  
        <br />
        <span className="text-dark">em qualquer lugar do mundo.</span>
      </h1>

      <p className="mt-6 text-lg max-w-xl opacity-80">
        Telemedicina, exames, suporte humanizado e atendimento completo — 
        tudo com a excelência brasileira, acessível globalmente.
      </p>

      {/* CTAs */}
      <div className="mt-10 flex gap-4">
        <Link
          href="/plans"
          className="bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-primary/90 transition"
        >
          Ver Planos
        </Link>

        <Link
          href="/login"
          className="px-8 py-4 rounded-xl border border-primary text-primary font-semibold hover:bg-primary/10 transition"
        >
          Acessar conta
        </Link>
      </div>

    </main>
  );
}
