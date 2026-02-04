import { NextResponse } from 'next/server'

export async function GET() {
  const certificates = [
    {
      id: 1,
      title: "MTCNA Certification",
      company: "Mikrotik",
      type: "Course",
      href: "https://drive.google.com/file/d/15j9ni4JWpx-FhjrxegP8QlLW-6qoM8A2/view?usp=sharing",
      image: "15j9ni4JWpx-FhjrxegP8QlLW-6qoM8A2"
    },
    {
      id: 2,
      title: "Sertifikat magang",
      company: "PT. Tera data indonusa",
      type: "Course",
      href: "https://drive.google.com/file/d/1_xwoa_GyFRxygRpSwLWyNmaK5Ne6Sbrr/view?usp=sharing",
      image: "1_xwoa_GyFRxygRpSwLWyNmaK5Ne6Sbrr"
    },
    {
      id: 3,
      title: "Sertifikat magang Bea cukai purwakarta",
      company: "Kementrian keuangan RI",
      type: "Course",
      href: "https://drive.google.com/file/d/1ah25VgBdMbHVj3_-ph2LkEcMOO6xur8B/view?usp=sharing",
      image: "1ah25VgBdMbHVj3_-ph2LkEcMOO6xur8B"
    },
    {
      id: 4,
      title: "Sertifikat magang PT. Indorama Synthetics.Tbk",
      company: "PT. Indorama Synthetics.Tbk",
      type: "Course",
      href: "https://drive.google.com/file/d/1vfYYpSbQUIpDCejtBGMOiczOzmSgTk1Z/view?usp=sharing",
      image: "1vfYYpSbQUIpDCejtBGMOiczOzmSgTk1Z"
    },
    ]
  
  return NextResponse.json({ 
    data: certificates,
    success: true,
    message: "Certificates retrieved successfully"
  })
}