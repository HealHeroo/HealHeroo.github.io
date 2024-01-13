
function hitungKebugaran() {
    var age = document.getElementById('age').value;
    var gender = document.getElementById('gender').value;
    var exerciseTime = document.getElementById('exerciseTime').value;
    var exerciseDays = document.getElementById('exerciseDays').value;

    var resultElement = document.getElementById('result');
    var suggestion = '';

    if (gender === 'male') {
        if (age >= 18 && age <= 35 && exerciseTime >= 150 && exerciseDays >= 3) {
            suggestion = 'Pola latihan Anda sangat baik. Pertahankan!';
        } else {
            suggestion = 'Pola latihan Anda perlu ditingkatkan. Pertimbangkan untuk menambah durasi atau frekuensi latihan.';
        }
    } else if (gender === 'female') {
        if (age >= 18 && age <= 35 && exerciseTime >= 150 && exerciseDays >= 3) {
            suggestion = 'Pola latihan Anda sangat baik. Pertahankan!';
        } else {
            suggestion = 'Pola latihan Anda perlu ditingkatkan. Pertimbangkan untuk menambah durasi atau frekuensi latihan.';
        }
    }

    resultElement.innerHTML = '<p class="text-info">' + suggestion + '</p>';
}
