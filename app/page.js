'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [nama, setNama] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("nama", nama);
    router.push("/quiz");
  };

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Selamat Datang di <span className="text-blue-600">EduQuestXpert</span>
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Masukkan nama kamu untuk mulai kuis 📘
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
          type="text"
          placeholder="Nama kamu"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-400"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Mulai
          </button>
        </form>
      </div>
    </main>
  );
}
