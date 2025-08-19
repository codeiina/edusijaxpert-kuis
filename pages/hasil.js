import { useEffect } from "react"
import { supabase } from "../lib/supabaseClient"

export default function Hasil() {
  // Ambil data dari localStorage (karena EduSijaXpert udah pakai itu)
  const nama = typeof window !== "undefined" ? localStorage.getItem("nama") : ""
  const topik = typeof window !== "undefined" ? localStorage.getItem("topik") : ""
  const skor = typeof window !== "undefined" ? localStorage.getItem("skor") : 0

  useEffect(() => {
    const simpanData = async () => {
      if (!nama || !topik) return
      const { error } = await supabase
        .from("hasil_kuis")
        .insert([{ nama, topik, skor }])

      if (error) {
        console.error("❌ Gagal simpan:", error.message)
      } else {
        console.log("✅ Data berhasil disimpan ke Supabase")
      }
    }

    simpanData()
  }, [nama, topik, skor])

  return (
    <div>
      <h1>Hasil Kuis</h1>
      <p>Nama: {nama}</p>
      <p>Topik: {topik}</p>
      <p>Skor: {skor}</p>
      <p>Hasil sudah dicatat di database Supabase ✅</p>
    </div>
  )
}
