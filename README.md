# Zenith — Góc học tập lofi

## Mở web
Giải nén, giữ tất cả file cùng thư mục, mở index.html bằng Chrome hoặc Edge. Không cần Internet hoặc API.

## Nhạc và giao diện
Bấm ▶ ở thanh nhạc để phát nhạc lofi tổng hợp trên máy. Bấm Nhạc & âm thanh để chỉnh âm lượng, chọn nhạc từ máy hoặc bật âm thanh đúng/sai. Nhạc không tự phát khi mở trang. File nhạc riêng cần chọn lại mỗi lần mở trang; nhạc riêng không được tải lên máy chủ.
Nút mặt trăng/mặt trời đổi sáng–tối. Nút Tập trung ẩn phần phụ; bấm lại hoặc nhấn Escape để thoát.

## Các file
- index.html: bố cục.
- style.css: toàn bộ CSS; phần cuối là giao diện lofi và chế độ tối.
- room.svg: hình góc học tập.
- lofi.js: nhạc tổng hợp, chọn file nhạc, âm thanh đúng/sai, sáng/tối và tập trung.
- app.js: tính năng học, CSV và tiến độ.
- data.js: ngân hàng câu hỏi và đáp án nguồn.
- enrich.js: đáp án nhiễu và diễn giải học tập bổ sung.

## Đưa lên GitHub
Upload các file đã giải nén lên repository của bạn (không upload ZIP để chạy web). Có thể triển khai như website tĩnh, không có bước build.

## Tiến độ
Bản này dùng localStorage. Chưa có đăng nhập hoặc đồng bộ tự động giữa các thiết bị. Trên web đang học, vào Tiến độ → Xuất toàn bộ bản sao JSON. Tại địa chỉ web mới, dùng Khôi phục bản sao để chuyển dữ liệu. Dữ liệu học không nằm trong mã nguồn.

## Nội dung
387 câu, đáp án giữ theo CSV. Đáp án nhiễu và diễn giải chưa được kiểm chứng độc lập với giáo trình. Có thể chỉnh trên web và xuất CSV.


## Học khái niệm — cập nhật mới
Thêm concepts.js và khai-niem-mau.csv. Vào Học khái niệm → Nhập CSV khái niệm. Đây là file riêng, không dùng file trắc nghiệm 13 cột.

Cột bắt buộc: Thuật ngữ, Định nghĩa. Cột tùy chọn: Nhóm, Từ khóa, Tên khác, Ví dụ, Phân biệt, Giải thích. Từ khóa phải có nguyên văn trong định nghĩa; nhiều từ khóa hoặc tên tương đương cách nhau bằng |.

Có các chế độ: định nghĩa → điền tên, điền từ khóa trong định nghĩa, phối hợp và phân biệt thuật ngữ. Có gợi ý 2 mức, đánh dấu, ôn sai và ôn đến hạn. Điền từ tăng số cụm khuyết theo tiến độ.

Để cập nhật GitHub: upload toàn bộ file trong thư mục zenith lên cùng vị trí với index.html; chọn Commit changes. Các file cũ được thay bằng bản mới, có thêm concepts.js. Khi URL và bộ nhớ trình duyệt không đổi, bản cập nhật vẫn giữ tiến độ. Nên xuất JSON trước khi cập nhật.

Tiến độ khái niệm được lưu chung trong bản sao JSON; không tự đồng bộ qua GitHub.
