import maps from "../assets/img/maps.png";
import phone from "../assets/img/phone.png";
import email from "../assets/img/email.png";

export const priceList = [
  {
    id: 1,
    title: "Basic",
    price: "$20",
    item1: "Mencatat barang masuk",
    item2: "Mencatat barang keluar",
    item3: "Mencatat hasil keuntungan",
  },
  {
    id: 2,
    title: "Business",
    price: "$50",
    item1: "Mencatat barang masuk dan keluar",
    item2: "Mencatat keuntungan",
    item3: "Dapat menganalisa hasil penjualan dengan CHART",
    item4: "Support 7x24 Jam",
  },
  {
    id: 3,
    title: "Enterpreneur",
    price: "$100",
    item1: "Mencatat barang masuk dan keluar",
    item2: "Mencatat Keuntungan",
    item3: "Dapat menganalisa hasil penjualan dengan CHART",
    item4: "Support 7x24 Jam",
    item5: "Export data ke Excel",
    item6: "AI Prediksi penghasilan",
  },
];

export const contactList = [
  {
    id: 1,
    title: "Office Address",
    image: maps,
    data: "Jalan, No.,  RT/RW, Kecamatan, Kelurahan, Kota, Provinsi, Kode Pos",
  },
  {
    id: 2,
    title: "Office Email",
    image: email,
    data: "startup@gmail.com",
  },
  {
    id: 3,
    title: "Whatsapp",
    image: phone,
    data: "+62xxxxxxxxxxx",
  },
];
