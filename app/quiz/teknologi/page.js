'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Soal1Teknologi() {
  const router = useRouter();

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (!nama) router.push("/");
  }, []);

  const handleJawab = (jawaban) => {
    localStorage.setItem("jawaban_tek1", jawaban);
    router.push("/quiz/teknologi/soal2");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-base font-semibold text-purple-600 mb-2">Soal 1 dari 5</h2>
        <p className="text-xl font-bold text-gray-800 mb-6">Apa kepanjangan dari CPU?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleJawab("Central Processing Unit")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Central Processing Unit
          </button>
          <button
            onClick={() => handleJawab("Control Processing Unit")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Control Processing Unit
          </button>
          <button
            onClick={() => handleJawab("Computer Power Unit")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Computer Power Unit
          </button>
        </div>
      </div>
    </main>
  );
}
