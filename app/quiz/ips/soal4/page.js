'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Soal4IPS() {
  const router = useRouter();

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (!nama) router.push("/");
  }, []);

  const handleJawab = (jawaban) => {
    localStorage.setItem("jawaban_ips4", jawaban);
    router.push("/quiz/ips/soal5");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-base font-semibold text-green-600 mb-2">Soal 4 dari 5</h2>
        <p className="text-xl font-bold text-gray-800 mb-6">Siapa proklamator kemerdekaan Indonesia?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleJawab("Sukarno dan Hatta")}
            className="w-full py-2 rounded-lg bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition"
          >
            Sukarno dan Hatta
          </button>
          <button
            onClick={() => handleJawab("Sukarno dan Soeharto")}
            className="w-full py-2 rounded-lg bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition"
          >
            Sukarno dan Soeharto
          </button>
          <button
            onClick={() => handleJawab("Hatta dan Tan Malaka")}
            className="w-full py-2 rounded-lg bg-green-100 text-green-800 font-semibold hover:bg-green-200 transition"
          >
            Hatta dan Tan Malaka
          </button>
        </div>
      </div>
    </main>
  );
}
