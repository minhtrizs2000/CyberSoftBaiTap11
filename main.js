/**
 * tạo mảng, add phần tử
 */

var listNumber = [];
var kqEle = document.getElementById("txtKetQua");

document.getElementById("btnAdd").onclick = function(){
    var num = parseInt(document.getElementById("inputArray").value);
    listNumber.push(num);

    document.getElementById("array1").innerHTML += num + ", ";
    console.log(listNumber);
}

document.getElementById("btnTongDuong").onclick = function(){
    var s = tinhTongDuong(listNumber);

    kqEle.innerHTML = "Tổng các số dương: " + s;
}

document.getElementById("btnDemSoDuong").onclick = function(){
    var count = demSoDuong(listNumber);

    kqEle.innerHTML = "Số lượng số dương: " + count;
}

document.getElementById("btnTimSoNN").onclick = function(){
    var min = timSoNhoNhat(listNumber);

    kqEle.innerHTML = "Số nhỏ nhất trong mảng: " + min;
}

document.getElementById("btnTimSoDuongNN").onclick = function(){
    var subArray = [];
    for(var i = 0; i < listNumber.length; i++){
        if(listNumber[i] > 0){
            subArray.push(listNumber[i]);
        }
    }
    var min = timSoNhoNhat(subArray);

    kqEle.innerHTML = "Số dương nhỏ nhất trong mảng: " + min;
}

document.getElementById("btnTimSoChanCuoi").onclick = function(){
    var num = timSoChanCuoi(listNumber);

    kqEle.innerHTML = "Số chẵn cuối cùng trong mảng: " + num;
}

document.getElementById("btnDoiViTri").onclick = function(){
    var x = parseInt(document.getElementById("inputX").value);
    var y = parseInt(document.getElementById("inputY").value);
    var temp = 0;

    temp = listNumber[x-1];
    listNumber[x-1] = listNumber[y-1];
    listNumber[y-1] = temp;

    kqEle.innerHTML = "Mảng mới: ";
    for(var i = 0; i < listNumber.length; i++){
        kqEle.innerHTML += listNumber[i] + ", ";
    }
}

document.getElementById("btnSortTang").onclick = function(){
    var newList = sapXepTangDan(listNumber);

    kqEle.innerHTML = "Mảng mới sau khi sắp xếp: ";
    for(var i = 0; i < newList.length; i++){
        kqEle.innerHTML += newList[i] + ", ";
    }
}

document.getElementById("btnSNT").onclick = function(){
    var snt = -1;
    for(var i = 0; i < listNumber.length; i++){
        if(isSNT(listNumber[i])){
            snt = listNumber[i];
            break;
        }
    }

    kqEle.innerHTML = "Số nguyên tố đầu tiên là: " + snt;
}


var listNumber2 = [];
var kqEle2 = document.getElementById("txtKetQua2");

document.getElementById("btnAdd2").onclick = function(){
    var num = document.getElementById("inputArray2").value;
    listNumber2.push(num);

    document.getElementById("array2").innerHTML += num + ", ";
    console.log(listNumber2);
}

document.getElementById("btnDemSoNguyen").onclick = function(){
    var count = demSoNguyen(listNumber2);

    kqEle2.innerHTML = "Số lượng số nguyên là: " + count;
}

document.getElementById("btnSSAD").onclick = function(){
    var countAm = 0;
    var countDuong = 0;

    for(var i = 0; i< listNumber2.length; i++){
        if(listNumber2[i] > 0){
            countDuong++;
        }else if(listNumber2[i] < 0){
            countAm++;
        }
    }

    if(countAm > countDuong){
        kqEle2.innerHTML = "Số lượng số âm nhiều hơn số lượng số dương (" + countAm + " > " + countDuong + ")";
    }else if(countAm < countDuong){
        kqEle2.innerHTML = "Số lượng số âm ít hơn số lượng số dương (" + countAm + " < " + countDuong + ")";
    }else if(countAm == countDuong){
        kqEle2.innerHTML = "Số lượng số âm bằng số lượng số dương (" + countAm + " = " + countDuong + ")";
    }

}









/**
 * ================================================
 * function
 */

function tinhTongDuong(list){
    var s = 0;
    for (var i = 0; i < list.length; i++) {
        if(list[i] > 0){
            s += list[i];
        }
    }
    return s;
}

function demSoDuong(list){
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if(list[i] > 0){
            count++;
        }
    }
    return count;
}

function timSoNhoNhat(list){
    var min = list[0];
    for (var i = 0; i < list.length; i++) {
        if(min > list[i]){
            min = list[i];
        }
    }
    return min;
}

function timSoChanCuoi(list){
    var num = -1;
    for (var i = 0; i < list.length; i++) {
        if(list[i] % 2 == 0){
            num = list[i];
        }
    }
    return num;
}

function sapXepTangDan(list){
    var minIndex = 0;

    //Lấy từng phần tử đầu mảng để đi so sánh với phần còn lại
    for(var i = 0; i < list.length - 1; i++){
        var minIndex = i;
        //duyệt qua từng phần tử còn lại ( chưa sắp xếp ) của mảng
        for(var j = i+1 ; j < list.length; j++){
            //Tìm phần tử nhỏ nhất
            if(list[minIndex] > list[j]){
                minIndex = j;
            }
        }

        //swap
        var temp = list[i];
        list[i] = list[minIndex];
        list[minIndex] = temp;

    }
    return list;
}

function isSNT(num){
    var is = true;
    for(var i = 2; i < num; i++){
        if(num % i == 0){
            is = false;
        }
    }
    if(num == 1 || num == 0){
        is = false;
    }
    return is;
}

function demSoNguyen(list){
    var count = 0;
    for(var i = 0; i< list.length; i++){
        if(list[i] == parseInt(list[i])){
            count++;
        }
    }
    return count;
}