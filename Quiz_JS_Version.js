// Tugas: Quiz Hacktiv8
// Tipe data object
var student  = function() {
  this.phase = "";
  this.level = function(phase) {
    if (phase.toLowerCase() === "satu") {
      return "Selamat ya jawaban kamu BENAR SEMUA! Nilaimu SEMPURNA!";
    }
    else if (phase.toLowerCase() === "nol") {
      return "Jawaban kamu masih ada yang SALAH! Nilaimu BELUM SEMPURNA!";
    }
    else if (phase.toLowerCase() === "remedial") {
      return "Jawaban kamu masih ada yang RAGU-RAGU, jadi perlu remedial dulu!";
    }
    else {
      return "Kamu masih asal-asalan mengerjakan Quiz! Silakan diulangi!";
    }
  };
}

// Object newStudent
var newStudent = new student();

// Conditional untuk menentukan phase
var benar = 0, salah = 0; ragu = 0;

function phaseLevel() {
    if (benar === 5) {
      newStudent.phase = "Satu";
    }
    else if (salah >=  1 && ragu === 0) {
      newStudent.phase = "Nol";
    }
    else if (ragu >=  1 && salah === 0) {
      newStudent.phase = "Remedial";
    }
}

function a() {
  benar++;
  phaseLevel();
}

function b() {
  salah++;
  phaseLevel();
}

function c() {
  ragu++;
  phaseLevel();
}

var name  = "";
var batch = "";
// Fungsi dari kumpulan pertanyaan + ending
function quiz() {
  name = document.getElementById("fname").value;
  batch = document.getElementById("selectBatch").value;
  document.getElementById("content").innerHTML =  "Quiz ini terdapat beberapa pertanyaan tentang materi di Phase 0." + "<br/>";
  document.getElementById("content").innerHTML += "Selamat mengerjakan! Das beste!" + "<br/>" + "<br/>";
  document.getElementById("content").innerHTML += "Hint: Bacalah setiap pernyataan pelan-pelan saja." + "<br/>" + "Hati-hati ada jebakan Batman! ^_^" + "<br/>" + "<br/>";
  document.getElementById("content").innerHTML += "Cara menjawab:" + "<br/>";
  var ask = ["Klik tombol BENAR jika menurutmu pernyataan SANGAT TEPAT.",
             "Klik tombol SALAH jika menurutmu pernyataan BELUM TEPAT.",
             "Klik tombol TIDAK YAKIN jika kamu masih RAGU-RAGU."];
  for(var i = 0; i < ask.length; i++) {
    var j = i+1;
    document.getElementById("content").innerHTML += "<br/>" + j + ". " + ask[i] + "<br/>";
  }
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question1()'>Next</button></p>";
}

function question1() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "HTML5 support penggunaan tag header untuk menggantikan div.";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question2()'>Next</button></p>";
}

function question2() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Bentuk umum selektor (CSS) adalah seperti ini:" + "<br/>" + "selector { property: value; /* properti lainnya */ }";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question3()'>Next</button></p>";
}

function question3() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Perbedaan struktur perulangan WHILE dengan DO-WHILE terletak pada posisi pengecekan kondisi." + "<br/>" + "Pada WHILE kondisi dicek saat awal perulangan, sedangkan DO-WHILE kondisi perulangan dicek terakhir.";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question4()'>Next</button></p>";
}

function question4() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Pada output akan tampil undefined, jika mengetikkan kode seperti ini:" + "<br/>" + "function tampilkanAngka(angka) { return angka }" + "<br/>" + "console.log(tampilkanAngka());";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='question5()'>Next</button></p>";
}

function question5() {
  document.getElementById("content").innerHTML = "Apa pendapatmu tentang pernyataan di bawah ini:";
  document.getElementById("content").innerHTML += "<br/>" + "<br/>" + "Split pada fungsi array untuk memecah string dan mengembalikan nilai berupa array sesuai dengan pemisah tertentu yang didefinisikan.";
  document.getElementById("content").innerHTML += "<br/>" + "<p><button type='button' class='button2 button1' onclick='a()'>BENAR</button> <button type='button' class='button2 button1' onclick='b()'>SALAH</button> <button type='button' class='button2 button1' onclick='c()'>TIDAK YAKIN</button></p>";
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='endStory()'>Next</button></p>";
}

function endStory() {
  document.getElementById("content").innerHTML = "Terima kasih atas jawabanmu dalam quiz ini." + "<br/>" + "<br/>" + "Berdasarkan hasil quiz, inilah prediksi kelulusanmu. " + "<br/>" + "<br/>" + "Nama : " + name + "<br/>" + "Batch : " + batch + "<br/>" + "<br/>" + "Kamu akan belajar di phase: " + newStudent.phase + "<br/>" + newStudent.level(newStudent.phase);
  document.getElementById("content").innerHTML += "<p><button type='button' class='button button1' onclick='spoiler()'>Live Coding, ready!</button></p>";
}

function spoiler() {
  document.getElementById("content").innerHTML = "Adapun kompetensi yang perlu dimiliki adalah:" + "<br/>";

  var kisi = ["Tipe data angka, string, dan boolean", "Array", "Kondisional", "Looping", "Built-in Function", "Rekursif (Sederhana)", "Sintaks ES6 (let, const, dan class)"];
  for(var x = 0; x < kisi.length; x++) {
    var y = x+1;
    document.getElementById("content").innerHTML += "<br/>" + y + ". " + kisi[x] + "<br/>";
  }
}
