'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const kunciJawaban = {
  jawaban1: "3",
  jawaban2: "2",
  jawaban3: "6",
  jawaban4: "3",
  jawaban5: "10",
};

const pertanyaan = {
  jawaban1: "1 + 2 = ?",
  jawaban2: "5 - 3 = ?",
  jawaban3: "2 × 3 = ?",
  jawaban4: "12 ÷ 4 = ?",
  jawaban5: "9 + 1 = ?",
};

const pilihan = {
  jawaban1: ["2", "3", "4"],
  jawaban2: ["3", "2", "1"],
  jawaban3: ["6", "9", "5"],
  jawaban4: ["2", "3", "4"],
  jawaban5: ["10", "9", "11"],
};

export default function HasilKuis() {
  const [skor, setSkor] = useState(0);
  const [nama, setNama] = useState("");
  const [review, setReview] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const namaUser = localStorage.getItem("nama");
    if (!namaUser) {
      router.push("/");
      return;
    }

    setNama(namaUser);
    let skorSementara = 0;
    const hasil = [];

    for (let i = 1; i <= 5; i++) {
      const key = `jawaban${i}`;
      const userJawab = localStorage.getItem(key);
      const benar = userJawab === kunciJawaban[key];
      if (benar) skorSementara++;

      hasil.push({
        no: i,
        soal: pertanyaan[key],
        pilihan: pilihan[key],
        jawabanUser: userJawab,
        benar,
        kunci: kunciJawaban[key],
      });
    }

    setReview(hasil);
    setSkor(skorSementara);
  }, []);

  return (
    <main className="min-h-screen bg-[#f9fafb] px-4 py-10 flex flex-col items-center justify-start">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          Hasil Kuis Matematika 📊
        </h1>
        <p className="text-gray-700 mb-6">
          Nama: <span className="font-semibold">{nama}</span> <br />
          Skor Akhir: <span className="font-semibold">{skor} / 5</span>
        </p>

        <div className="space-y-6">
          {review.map((item) => (
            <div key={item.no} className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-blue-600">Soal {item.no}:</span> {item.soal}
              </p>
              <p className="text-sm mb-1 text-gray-700">
  Jawaban Kamu: <span className="font-semibold">{item.jawabanUser}</span>
</p>
<p className="text-sm mb-1 text-gray-700">
  Jawaban Benar: <span className="font-semibold">{item.kunci}</span>
</p>

              <p className={`text-sm font-semibold ${item.benar ? 'text-green-600' : 'text-red-500'}`}>
                {item.benar ? "Benar ✅" : "Salah ❌"}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push("/quiz")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>
  );
}
