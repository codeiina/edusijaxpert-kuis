'use client'
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Soal4Teknologi() {
  const router = useRouter();

  useEffect(() => {
    const nama = localStorage.getItem("nama");
    if (!nama) router.push("/");
  }, []);

  const handleJawab = (jawaban) => {
    localStorage.setItem("jawaban_tek4", jawaban);
    router.push("/quiz/teknologi/soal5");
  };

  return (
    <main className="min-h-screen bg-[#f9fafb] flex items-center justify-center px-4 py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg text-center">
        <h2 className="text-base font-semibold text-purple-600 mb-2">Soal 4 dari 5</h2>
        <p className="text-xl font-bold text-gray-800 mb-6">Teknologi yang digunakan untuk menyimpan data secara online disebut?</p>

        <div className="space-y-4">
          <button
            onClick={() => handleJawab("Bluetooth")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Bluetooth
          </button>
          <button
            onClick={() => handleJawab("Cloud Storage")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Cloud Storage
          </button>
          <button
            onClick={() => handleJawab("Flashdisk")}
            className="w-full py-2 rounded-lg bg-purple-100 text-purple-800 font-semibold hover:bg-purple-200 transition"
          >
            Flashdisk
          </button>
        </div>
      </div>
    </main>
  );
}
