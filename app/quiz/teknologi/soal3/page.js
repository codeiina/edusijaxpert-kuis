'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Soal3Teknologi() {
  const router = useRouter();

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (!nama) router.push("/");
  }, []);

  const handleJawab = (jawaban) => {
    localStorage.setItem("jawaban_tek3", jawaban);
    router.push("/quiz/teknologi/soal4");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-base font-semibold text-purple-600 mb-2">Soal 3 dari 5</h2>
        <p className="text-xl font-bold text-gray-800 mb-6">Apa fungsi utama dari RAM pada komputer?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleJawab("Menyimpan data permanen")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Menyimpan data permanen
          </button>
          <button
            onClick={() => handleJawab("Menjalankan proses sementara")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Menjalankan proses sementara
          </button>
          <button
            onClick={() => handleJawab("Mengakses internet")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Mengakses internet
          </button>
        </div>
      </div>
    </main>
  );
}
