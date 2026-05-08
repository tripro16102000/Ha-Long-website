// Dữ liệu ngôn ngữ
const translations = {
    en: {
        nav_logo: "Ha Long MFG & IMEX JSC",
        nav_home: "Home",
        nav_about: "About Us",
        nav_contact: "Contact",
        hero_title: "Ha Long Manufacturing and Import-Export Joint Stock Company",
        hero_desc: "A leader in international production and supply chain services.",
        btn_contact: "Connect Now",
        about_title: "About Company",
        about_p1: "Ha Long Manufacturing and Import-Export Joint Stock Company is a professional enterprise in connecting trade and high-quality production.",
        about_p2: "We are committed to providing optimal solutions for the global supply chain.",
        contact_title: "Contact Us",
        form_name: "Full Name",
        form_email: "Email",
        form_msg: "Inquiry details",
        btn_send: "Submit Inquiry",
        company_full_name: "Ha Long Manufacturing & Import-Export Joint Stock Company",
        company_address: "No. 29/232, Truong Chinh Street, Kien An Ward, Hai Phong City, Vietnam",
        company_licence: "License No: 5262/SCT (MS- TPDL)",
        company_phone: "Hotline: +84.865.236.992",  
        company_email: "Email: tntxhalong@gmail.com" ,
        rep_title: "Our Representative",
        person_title: "Representative",
        person_name: "Mr. NGUYEN THE NAM",
        consignee: "Our Consignee"
    },
    vi: {
        nav_logo: "Công ty Cổ phần SX & XNK Hạ Long ",
        nav_home: "Trang chủ",
        nav_about: "Giới thiệu",
        nav_contact: "Liên hệ",
        hero_title: "Công ty Cổ phần Sản xuất và Xuất nhập khẩu Hạ Long",
        hero_desc: "Đơn vị dẫn đầu trong lĩnh vực sản xuất và cung ứng hàng hóa quốc tế.",
        btn_contact: "Kết nối ngay",
        about_title: "Về chúng tôi",
        about_p1: "Công ty Cổ phần Sản xuất và Xuất nhập khẩu Hạ Long là doanh nghiệp chuyên nghiệp trong việc kết nối giao thương và sản xuất chất lượng cao.",
        about_p2: "Chúng tôi cam kết mang đến giải pháp tối ưu cho chuỗi cung ứng toàn cầu.",
        contact_title: "Liên hệ",
        form_name: "Họ và tên",
        form_email: "Email",
        form_msg: "Nội dung cần tư vấn",
        btn_send: "Gửi yêu cầu",
        company_full_name: "Công ty Cổ phần Sản xuất và Xuất nhập khẩu Hạ Long",
        company_address: " Số 29/232, đường Trường Chinh, phường Kiến An, thành phố Hải Phòng, Việt Nam",
        company_licence: "Giấy phép kinh doanh: 5262/SCT (MS- TPDL)",
        company_phone: "Hotline: +84.865.236.992",
        company_email: "Email: tntxhalong@gmail.com",
        rep_title: "Đại diện của chúng tôi",
        person_title: "Đại diện",
        person_name: "Ông NGUYỄN THẾ NAM",
        consignee: "Consignee của chúng tôi"
    },
    zh: {
        nav_logo: "下龙生产与进出口股份公司",
        nav_home: "首页",
        nav_about: "关于我们",
        nav_contact: "联系我们",
        hero_title: "下龙生产与进出口股份公司",
        hero_desc: "国际生产和供应链服务的领先者。",
        btn_contact: "立即联系",
        about_title: "公司简介",
        about_p1: "下龙生产与进出口股份公司是一家专业从事贸易对接和高质量生产的企业。",
        about_p2: "我们致力于为全球供应链提供最佳解决方案。",
        contact_title: "联系我们",
        form_name: "姓名",
        form_email: "电子邮件",
        form_msg: "咨询内容",
        btn_send: "提交咨询",
        company_full_name: "下龙生产与进出口股份公司",
        company_address: "越南海防市Kiến An区Trường Chinh街29/232号",
        company_licence: "许可证号: 5262/SCT (MS- TPDL)",
        company_phone: "热线: +84.865.236.992",
        company_email: "电子邮件: tntxhalong@gmail.com",
        rep_title: "我们的代表",
        person_title: "代表",
        person_name: "阮世南先生",
        consignee: "我们的收货人"   
    }
};

// Giữ nguyên logic changeLanguage và langSelect.addEventListener như ở phản hồi trước

const langSelect = document.getElementById('langSelect');

// Hàm chuyển đổi ngôn ngữ
function changeLanguage(lang, element) {
    // 1. Cập nhật nội dung dịch thuật (giữ nguyên logic cũ)
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });

    // 2. Cập nhật hiệu ứng hiển thị cho lá cờ
    document.querySelectorAll('.flag-icon').forEach(flag => {
        flag.classList.remove('active');
    });
    element.classList.add('active');

    // 3. (Tùy chọn) Lưu lựa chọn vào LocalStorage để khi load lại trang không bị mất ngôn ngữ
    localStorage.setItem('preferredLang', lang);
}

// Khi vừa load trang, kiểm tra xem có ngôn ngữ đã lưu chưa
window.onload = () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    const targetFlag = document.querySelector(`img[onclick*="'${savedLang}'"]`);
    if (targetFlag) changeLanguage(savedLang, targetFlag);
};


// Giữ nguyên logic changeLanguage và langSelect.addEventListener như ở phản hồi trước

// Cấu hình Intersection Observer
const observerOptions = {
    root: null, // lấy viewport làm chuẩn
    threshold: 0.2 // khi 20% hình ảnh xuất hiện thì bắt đầu chạy hiệu ứng
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Thêm class 'active' để kích hoạt CSS Transition
            entry.target.classList.add('active');
            // Sau khi hiện rồi thì không cần theo dõi nữa (tùy chọn)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Theo dõi tất cả các khối hình ảnh
document.querySelectorAll('.reveal-img').forEach(img => {
    observer.observe(img);
});

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.2 // Kích hoạt khi 20% thẻ Card xuất hiện trên màn hình
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm class 'show' để bắt đầu hiệu ứng
                entry.target.classList.add("show");
                // Nếu muốn hiệu ứng chỉ chạy 1 lần duy nhất:
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Chỉ định đối tượng cần theo dõi
    const target = document.querySelector(".business-card");
    if (target) {
        observer.observe(target);
    }
});

function openModal(imgSrc) {
    document.getElementById("qrModal").style.display = "block";
    document.getElementById("modalImg").src = imgSrc;
}

function closeModal() {
    document.getElementById("qrModal").style.display = "none";
}

// Đóng modal khi nhấn phím Esc
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});