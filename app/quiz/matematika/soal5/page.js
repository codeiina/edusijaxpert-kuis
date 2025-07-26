'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Soal5() {
  const router = useRouter();

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (!nama) {
      router.push("/");
    }
  }, []);

  const handleJawab = (jawaban) => {
    localStorage.setItem("jawaban5", jawaban);
    router.push("/quiz/matematika/hasil");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-base font-semibold text-blue-600 mb-2">Soal 5 dari 5</h2>
        <p className="text-xl font-bold text-gray-800 mb-6">9 + 1 = ?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleJawab("10")}
            className="w-full py-2 rounded-lg bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition"
          >
            10
          </button>
          <button
            onClick={() => handleJawab("9")}
            className="w-full py-2 rounded-lg bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition"
          >
            9
          </button>
          <button
            onClick={() => handleJawab("11")}
            className="w-full py-2 rounded-lg bg-blue-100 text-blue-800 font-semibold hover:bg-blue-200 transition"
          >
            11
          </button>
        </div>
      </div>
    </main>
  );
}
