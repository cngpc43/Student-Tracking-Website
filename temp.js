function toQuery(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    str = str.replace(/ + /g, "");
    str = str.replace(/\s/g, "");
    str = str.toLowerCase();
    str = str.trim();
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, "");
    return str;
}
var data = [
    [
        1,
        "06520001",
        "Hồ Ngọc An",
        "CQUI",
        "KHMT2006",
        "Khoa học Máy tính",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        2,
        "06520002",
        "Lê Nguyễn Thúy An",
        "CQUI",
        "HTTT2006",
        "Hệ thống Thông tin",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        3,
        "06520004",
        "Lê Thanh An",
        "CQUI",
        "HTTT2006",
        "Hệ thống Thông tin",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        4,
        "06520005",
        "Nguyễn Lê Phú An",
        "CQUI",
        "KHMT2006",
        "Khoa học Máy tính",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        5,
        "06520006",
        "Nguyễn Thanh An",
        "CQUI",
        "KHMT2006",
        "Khoa học Máy tính",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        6,
        "06520007",
        "Võ Nguyên Minh An",
        "CQUI",
        "KHMT2006",
        "Khoa học Máy tính",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        7,
        "06520008",
        "Nguyễn Minh Ân",
        "CQUI",
        "KHMT2006",
        "Khoa học Máy tính",
        "Sinh viên thôi học"
    ],
    [
        8,
        "06520009",
        "Phạm Đình Ân",
        "CQUI",
        "KHMT2006",
        "Khoa học Máy tính",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        9,
        "06520010",
        "Bùi Tuấn Anh",
        "CQUI",
        "MMTT2006",
        "Mạng máy tính & Truyền thông",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        10,
        "06520011",
        "Châu Việt Anh",
        "CQUI",
        "KTMT2006",
        "Kỹ thuật Máy tính",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        11,
        "06520012",
        "Huỳnh Tuấn Anh",
        "CQUI",
        "KHTN2006",
        "Khoa học Máy tính",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        12,
        "06520013",
        "Huỳnh Tuấn Anh",
        "CQUI",
        "KHMT2006",
        "Khoa học Máy tính",
        "Sinh viên thôi học"
    ],
    [
        13,
        "06520015",
        "Nguyễn Khắc Bảo Anh",
        "CQUI",
        "HTTT2006",
        "Hệ thống Thông tin",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        14,
        "06520016",
        "Nguyễn Ngọc Lan Anh",
        "CQUI",
        "HTTT2006",
        "Hệ thống Thông tin",
        "Sinh viên đã tốt nghiệp"
    ],
    [
        15,
        "06520017",
        "Nguyễn Phương Anh",
        "CQUI",
        "KTPM2006",
        "Công nghệ Phần mềm",
        "Sinh viên đã tốt nghiệp"
    ]
]



data = data.map(val => {
    var name = val[2].split(' ')
    val[val.length] = name.map(subname => {
        return toQuery(subname)
    })

    // val[val.length] = name
    return val
})
// console.log(sp('a'))
// function sp(input){
//     input = input.split(' ')
//     return input
// }
// console.log(search('Anh Bảo'))
function search(input) {
    input = input.split(' ')
    return data.filter(val => {
        var cnt = 0
        for (element of input) {
            // console.log(val[val.length-1], toQuery(element))
            if (val[val.length - 1].includes(toQuery(element)))
                cnt++
        }
        if (cnt == input.length)
            return true
    })
    // data.forEach((val, i) => {
    //     console.log(toQuery(val[2]))
    //     data[i][val.length] = toQuery(val[2])
    // })



}