// Thay đổi nội dung bức thư ở đây
var letterContent = "Nhân ngày 20/10, ngày phụ nữ Việt Nam, anh muốn gửi đến em những lời chúc tốt đẹp nhất. Em là người phụ nữ tuyệt vời nhất mà anh từng gặp, là người đã mang lại nụ cười và hạnh phúc trong cuộc sống của anh. Chúc em luôn mạnh khỏe, hạnh phúc và luôn thành công trong cuộc sống. Anh cảm ơn em vì đã đến bên anh và làm cho cuộc sống của anh trở nên ý nghĩa hơn. Yêu em nhiều lắm! 💕"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
var durationWrite = 50;
var writeTimeouts = []; // Để lưu các timeout của hiệu ứng

// Hiệu ứng gõ chữ
function effectWrite() {
    var boxLetter = document.querySelector(".letterContent");
    boxLetter.innerHTML = ""; // Xóa nội dung trước khi viết lại
    var letterContentSplited = letterContent.split("");

    // Xóa các timeout cũ trước khi chạy hiệu ứng mới
    writeTimeouts.forEach(timeout => clearTimeout(timeout));
    writeTimeouts = [];

    letterContentSplited.forEach((val, index) => {
        let timeout = setTimeout(() => {
            boxLetter.innerHTML += val;    
        }, durationWrite * index);
        writeTimeouts.push(timeout);
    });
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active");
    }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active");
    document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open");

    if (cardValentine.classList.contains("open")) {
        // Khi mở thiệp, gọi hàm effectWrite để chạy lại hiệu ứng
        effectWrite();
    } else {
        // Khi đóng thiệp, xóa nội dung
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = "";
        }, 1000);
    }
});
