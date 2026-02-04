import { NextResponse } from 'next/server'

export async function GET() {
  const certificates = [
    {
      id: 1,
      title: "Aplikasi monitoring subkon KPPBC TMP A Purwakarta",
      company: "KPPBC TMP A Purwakarta",
      type: "Course",
      href: "https://drive.google.com/file/d/1IlF4NhBWVTRDjjM04qDK01LHuo0gjUm9/view?usp=sharing",
      image: "1IlF4NhBWVTRDjjM04qDK01LHuo0gjUm9"
    },
    {
      id: 2,
      title: "GPS Tracking sistem",
      company: "KPPBC TMP A Purwakarta",
      type: "Course",
      href: "https://drive.google.com/file/d/1GkmonffQSi9osOSaH4G0jqEcaqWHuH76/view?usp=sharing",
      image: "1GkmonffQSi9osOSaH4G0jqEcaqWHuH76"
    },
    {
      id: 3,
      title: "Dashboard Hose, RVI, Molded PT. Velasto Indonesia",
      company: "PT. Velasto Indonesia",
      type: "Course",
      href: "https://drive.google.com/file/d/1AGoRf6VtBrNQJ7i_h7HeQEOMqSPJRV7E/view?usp=sharing",
      image: "1AGoRf6VtBrNQJ7i_h7HeQEOMqSPJRV7E"
    },
    {
      id: 4,
      title: "Aplikasi Purchasing PT. Velasto Indonesia",
      company: "PT. Velasto Indonesia",
      type: "Course",
      href: "https://drive.google.com/file/d/1AGoRf6VtBrNQJ7i_h7HeQEOMqSPJRV7E/view?usp=sharing",
      image: "1AGoRf6VtBrNQJ7i_h7HeQEOMqSPJRV7E"
    },
    {
      id: 5,
      title: "ERP Prototyping PT. Uwu Jump Indonesia/Data Product System",
      company: "AWS",
      type: "Course",
      href: "https://drive.google.com/file/d/1w9fRykfoXihO4sqkN1JJQMUEQJku1VpC/view?usp=sharing",
      image: "1w9fRykfoXihO4sqkN1JJQMUEQJku1VpC"
    },
    {
      id: 6,
      title: "Aplikasi penilaian karyawan tahun akhir PT. Uwu Jump Indonesia/People Of Organization Development",
      company: "PT. Uwu Jump Indonesia",
      type: "Course",
      href: "https://drive.google.com/file/d/1cpNYxEx1GbhSAx6ECDo7Do6CWS0OrPDE/view?usp=sharing",
      image: "1cpNYxEx1GbhSAx6ECDo7Do6CWS0OrPDE"
    },
    {
      id: 7,
      title: "Inspection Quality Assurance PT. Uwu Jump Indonesia/Quality Assurance application",
      company: "PT. Uwu Jump Indonesia",
      type: "Course",
      href: "https://drive.google.com/file/d/1Zg0zM2XGgWSntNQIts0rw1JV3Cbnnzt6/view?usp=sharing",
      image: "1Zg0zM2XGgWSntNQIts0rw1JV3Cbnnzt6"
    },
  ]
  
  return NextResponse.json({ 
    data: certificates,
    success: true,
    message: "Certificates retrieved successfully"
  })
}