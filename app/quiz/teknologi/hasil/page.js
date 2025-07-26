'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const kunciJawabanTeknologi = {
  jawaban_tek1: "Central Processing Unit",
  jawaban_tek2: "Android",
  jawaban_tek3: "Menjalankan proses sementara",
  jawaban_tek4: "Cloud Storage",
  jawaban_tek5: "HyperText Markup Language",
};

const pertanyaanTeknologi = {
  jawaban_tek1: "Apa kepanjangan dari CPU?",
  jawaban_tek2: "Apa nama sistem operasi yang dikembangkan oleh Google?",
  jawaban_tek3: "Apa fungsi utama dari RAM pada komputer?",
  jawaban_tek4: "Teknologi yang digunakan untuk menyimpan data secara online disebut?",
  jawaban_tek5: "Apa kepanjangan dari HTML?",
};

const pilihanTeknologi = {
  jawaban_tek1: ["Central Processing Unit", "Control Processing Unit", "Computer Power Unit"],
  jawaban_tek2: ["iOS", "Android", "Windows"],
  jawaban_tek3: ["Menyimpan data permanen", "Menjalankan proses sementara", "Mengakses internet"],
  jawaban_tek4: ["Bluetooth", "Cloud Storage", "Flashdisk"],
  jawaban_tek5: ["HyperText Markup Language", "Hyperlink and Text Markup Language", "HighText Machine Language"],
};

export default function HasilTeknologi() {
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
      const key = `jawaban_tek${i}`;
      const userJawab = localStorage.getItem(key);
      const benar = userJawab === kunciJawabanTeknologi[key];
      if (benar) skorSementara++;

      hasil.push({
        no: i,
        soal: pertanyaanTeknologi[key],
        pilihan: pilihanTeknologi[key],
        jawabanUser: userJawab,
        benar,
        kunci: kunciJawabanTeknologi[key],
      });
    }

    setReview(hasil);
    setSkor(skorSementara);
  }, []);

  return (
    <main className="min-h-screen bg-[#f9fafb] px-4 py-10 flex flex-col items-center justify-start">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          Hasil Kuis Teknologi 💻
        </h1>
        <p className="text-gray-700 mb-6">
          Nama: <span className="font-semibold">{nama}</span> <br />
          Skor Akhir: <span className="font-semibold">{skor} / 5</span>
        </p>

        <div className="space-y-6">
          {review.map((item) => (
            <div key={item.no} className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-purple-600">Soal {item.no}:</span> {item.soal}
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
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>
  );
}
