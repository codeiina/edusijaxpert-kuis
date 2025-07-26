'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function QuizMenu() {
  const [nama, setNama] = useState("");
  const router = useRouter();

  useEffect(() => {
    const savedNama = localStorage.getItem("nama");
    if (!savedNama) {
      router.push("/");
    } else {
      setNama(savedNama);
    }
  }, []);

  const pilihTopik = (topik) => {
    router.push(`/quiz/${topik}`);
  };

  const handleLogout = () => {
    localStorage.clear(); // Hapus semua jawaban + nama
    router.push("/"); // Kembali ke halaman utama
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Halo, <span className="text-blue-600">{nama}</span> 👋
        </h2>
        <p className="text-gray-600 mb-6">Silakan pilih topik kuis yang kamu mau:</p>

        <div className="grid gap-4 mb-6">
          <button
            onClick={() => pilihTopik("matematika")}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition"
          >
            Kuis Matematika
          </button>
          <button
            onClick={() => pilihTopik("ips")}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
          >
            Kuis IPS
          </button>
          <button
            onClick={() => pilihTopik("teknologi")}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition"
          >
            Kuis Teknologi
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="text-sm text-red-500 hover:underline transition"
        >
          Logout
        </button>
      </div>
    </main>
  );
}
