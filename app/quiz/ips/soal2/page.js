'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Soal2IPS() {
  const router = useRouter();

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (!nama) router.push("/");
  }, []);

  const handleJawab = (jawaban) => {
    localStorage.setItem("jawaban_ips2", jawaban);
    router.push("/quiz/ips/soal3");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-base font-semibold text-green-600 mb-2">Soal 2 dari 5</h2>
        <p className="text-xl font-bold text-gray-800 mb-6">Pulau terbesar di Indonesia adalah?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleJawab("Sumatra")}
            className="w-full py-2 rounded-lg bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition"
          >
            Sumatra
          </button>
          <button
            onClick={() => handleJawab("Papua")}
            className="w-full py-2 rounded-lg bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition"
          >
            Papua
          </button>
          <button
            onClick={() => handleJawab("Jawa")}
            className="w-full py-2 rounded-lg bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition"
          >
            Jawa
          </button>
        </div>
      </div>
    </main>
  );
}
