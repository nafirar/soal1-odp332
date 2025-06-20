// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne

function sumEvenNumber(numbers) {
    resultOne = 0
    numbers.forEach((el) => {
        if (el % 2 === 0) {
            resultOne = resultOne + el
        }
    })
    return resultOne
}
console.log(sumEvenNumber(numbers))


const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo

function sumOddNumber(numbers) {
    resultTwo = 0
    numbers.forEach((el) => {
        if (el % 2 !== 0) {
            resultTwo = resultTwo + el
        }
    })
    return resultTwo
}
console.log(sumOddNumber(numbersTwo))


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree

function changeCapital(students) {
    resultThree = []
    students.forEach((el) => {
        resultThree.push(el.toUpperCase())
    })
    return resultThree
}
console.log(changeCapital(students))


// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

function pilihOrang(people) {
    let orangTerpilih = []
    people.forEach((obj) => {
        if (obj.age > 18) {
            if (obj.name.length > 5) {
                orangTerpilih.push(obj)
            }
        }
    })
    return orangTerpilih
}
console.log(pilihOrang(people))

// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

function hitungHarga(){
    
}


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];


// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];


// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter


// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];

