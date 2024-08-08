document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('paymentForm');
    const qrcodeContainer = document.getElementById('qrcode');
    const loadingPopup = document.getElementById('loadingPopup');
    const resetButton = form.querySelector('button[type="reset"]');

    // Xử lý khi gửi form
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Hiển thị popup
        loadingPopup.style.display = 'flex';

        // Lấy giá trị từ form
        const accountNumber = document.getElementById('accountNumber').value.trim();
        const accountHolder = document.getElementById('accountHolder').value.trim();
        const bankName = document.getElementById('bankName').value.trim();
        let amount = document.getElementById('amount').value.trim();

        // Thay dấu phẩy bằng dấu chấm và định dạng số tiền
        amount = amount.replace(',', '.');
        const amountFormatted = parseFloat(amount).toFixed(2);

        // Kiểm tra giá trị của các trường
        if (!accountNumber || !accountHolder || !bankName || isNaN(amountFormatted) || amountFormatted <= 0) {
            alert('Vui lòng điền đầy đủ thông tin và đảm bảo số tiền hợp lệ.');
            loadingPopup.style.display = 'none'; // Ẩn popup nếu có lỗi
            return;
        }

        // Chuyển ngân hàng thành mã Napas (ví dụ: MB Bank = 970422)
        let acqId;
        switch (bankName) {
            case 'MB Bank':
                acqId = '970422';
                break;
            case 'Techcombank':
                acqId = '970407';
                break;
            case 'VP Bank':
                acqId = '970432';
                break;
            default:
                alert('Ngân hàng không hợp lệ.');
                loadingPopup.style.display = 'none'; // Ẩn popup nếu ngân hàng không hợp lệ
                return;
        }

        // Tạo URL cho mã QR
        const qrURL = `https://api.vietqr.io/image/${acqId}-${accountNumber}-oSEk4do.jpg?amount=${amountFormatted}`;

        // Hiển thị mã QR và thông tin
        qrcodeContainer.innerHTML = `
            <div class="qr-container">
                <img src="${qrURL}" alt="QR Code"/>
                <div class="info">
                    <p><strong>Người nhận:</strong> ${accountHolder}</p>
                    <p><strong>Số tài khoản:</strong> ${accountNumber}</p>
                    <p><strong>Ngân hàng:</strong> ${bankName}</p>
                    <p><strong>Số tiền:</strong> ${amountFormatted} VNĐ</p>
                </div>
            </div>
        `;

        // Ẩn popup sau 2 giây (hoặc khi mã QR đã được hiển thị)
        setTimeout(() => {
            loadingPopup.style.display = 'none';
        }, 2000); // Thay đổi thời gian nếu cần
    });

    // Xử lý khi nhấn nút "Nhập lại"
    resetButton.addEventListener('click', function() {
        // Xóa mã QR
        qrcodeContainer.innerHTML = '';
    });
});
