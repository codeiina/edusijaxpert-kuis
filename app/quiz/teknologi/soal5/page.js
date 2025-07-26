'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Soal5Teknologi() {
  const router = useRouter();

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (!nama) router.push("/");
  }, []);

  const handleJawab = (jawaban) => {
    localStorage.setItem("jawaban_tek5", jawaban);
    router.push("/quiz/teknologi/hasil");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-base font-semibold text-purple-600 mb-2">Soal 5 dari 5</h2>
        <p className="text-xl font-bold text-gray-800 mb-6">Apa kepanjangan dari HTML?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleJawab("HyperText Markup Language")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            HyperText Markup Language
          </button>
          <button
            onClick={() => handleJawab("Hyperlink and Text Markup Language")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Hyperlink and Text Markup Language
          </button>
          <button
            onClick={() => handleJawab("HighText Machine Language")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            HighText Machine Language
          </button>
        </div>
      </div>
    </main>
  );
}
