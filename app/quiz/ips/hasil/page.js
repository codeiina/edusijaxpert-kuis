'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const kunciJawabanIPS = {
  jawaban_ips1: "Jakarta",
  jawaban_ips2: "Papua",
  jawaban_ips3: "Batu Bara",
  jawaban_ips4: "Sukarno dan Hatta",
  jawaban_ips5: "17 Agustus 1945",
};

const pertanyaanIPS = {
  jawaban_ips1: "Apa ibu kota negara Indonesia?",
  jawaban_ips2: "Pulau terbesar di Indonesia adalah?",
  jawaban_ips3: "Sumber daya alam yang tidak dapat diperbarui adalah?",
  jawaban_ips4: "Siapa proklamator kemerdekaan Indonesia?",
  jawaban_ips5: "Indonesia merdeka pada tanggal?",
};

const pilihanIPS = {
  jawaban_ips1: ["Bandung", "Jakarta", "Surabaya"],
  jawaban_ips2: ["Sumatra", "Papua", "Jawa"],
  jawaban_ips3: ["Matahari", "Batu Bara", "Air"],
  jawaban_ips4: ["Sukarno dan Hatta", "Sukarno dan Soeharto", "Hatta dan Tan Malaka"],
  jawaban_ips5: ["17 Agustus 1945", "20 Mei 1945", "10 November 1945"],
};

export default function HasilIPS() {
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
      const key = `jawaban_ips${i}`;
      const userJawab = localStorage.getItem(key);
      const benar = userJawab === kunciJawabanIPS[key];
      if (benar) skorSementara++;

      hasil.push({
        no: i,
        soal: pertanyaanIPS[key],
        pilihan: pilihanIPS[key],
        jawabanUser: userJawab,
        benar,
        kunci: kunciJawabanIPS[key],
      });
    }

    setReview(hasil);
    setSkor(skorSementara);
  }, []);

  return (
    <main className="min-h-screen bg-[#f9fafb] px-4 py-10 flex flex-col items-center justify-start">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          Hasil Kuis IPS 📘
        </h1>
        <p className="text-gray-700 mb-6">
          Nama: <span className="font-semibold">{nama}</span> <br />
          Skor Akhir: <span className="font-semibold">{skor} / 5</span>
        </p>

        <div className="space-y-6">
          {review.map((item) => (
            <div key={item.no} className="border border-gray-200 rounded-lg p-4">
              <p className="font-medium text-gray-800 mb-2">
                <span className="text-green-600">Soal {item.no}:</span> {item.soal}
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
            className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Kembali ke Beranda
          </button>
        </div>
      </div>
    </main>
  );
}
