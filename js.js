// 2 mang TA va TV
// Toan cuc
let arr_eng = ["banana", "apple", "orange", "pen", "pencil", "book"];
let arr_vie = ["chuối", "táo", "cam", "bút", "bút chì", "sách"];
// duyet mang neu co tu TA -> index
// khong co -1


//ham kiem tra
//ten ham: indexOf
//tham so: key
//du lieu tra ve: kieu so nguyen
//Thuc thi
function indexOf(key) {
    // cuc bo
    for (let i = 0; i < arr_eng.length; i++) {
        if (key==arr_eng[i])
            return i;
    }
    return -1;
}
function indexOf1(arr, key) {
    // cuc bo
    for (let i = 0; i < arr.length; i++) {
        if (key==arr[i])
            return i;
    }
    return -1;
}
// nhap xuat du lieu
function translate1() {
    // Lay du lieu tu o input
    let key = document.getElementById("key").value;
    // Goi ham kiem tra o tren
    let index = indexOf1(arr_eng, key);
    let result;
    if (index!=-1){
        result = `${key} nghia la ${arr_vie[index]}`;
    }
    else {
        let index2 = indexOf1(arr_vie, key);
        if (index2!=-1){
            result = `${key} co nghia la ${arr_eng[index2]}`
        }
        else
        result =   `khong tim thay tu ${key}`;
    }
    // in ra ket qua vao the p
    document.getElementById("result").innerText = result;
}

