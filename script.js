// Dữ liệu danh sách 30 người (5 Cô giáo & 25 Bạn nữ) kèm lời chúc cá nhân hóa
const membersData = [
    // --- 5 CÔ GIÁO (Lời chúc sâu sắc, tri ân nghề dạy học & bộ môn Tâm vận động Aucouturier) ---
    {
        id: 1,
        name: "Cô Nguyễn Lệ Bình",
        type: "teacher",
        flower: "🌻",
        wish: "Kính gửi Cô Nguyễn Lệ Bình, nhân ngày 20/10, em xin gửi đến cô lời tri ân sâu sắc nhất. Cảm ơn cô đã dẫn dắt chúng em trên con đường chinh phục tri thức của bộ môn Tâm vận động Aucouturier Khóa IV. Sự tận tâm, kiên nhẫn và trái tim nhiệt huyết của cô chính là ngọn lửa soi đường, truyền cảm hứng mạnh mẽ cho chúng em. Chúc cô luôn dồi dào sức khỏe, luôn hạnh phúc và giữ mãi nụ cười rạng ngời trên môi!"
    },
    {
        id: 2,
        name: "Cô Nguyễn Thị Thuý",
        type: "teacher",
        flower: "🌷",
        wish: "Kính chúc Cô Nguyễn Thị Thuý ngày 20/10 ngập tràn niềm vui và hạnh phúc. Cảm ơn cô đã luôn đồng hành, truyền đạt những kiến thức quý báu và bài học thực tiễn tuyệt vời trong khóa học Aucouturier. Chúc cô luôn giữ vững ngọn lửa đam mê với nghề, luôn mạnh khỏe, bình an và gặt hái thêm nhiều thành công rực rỡ hơn nữa trong sự nghiệp trồng người."
    },
    {
        id: 3,
        name: "Cô Nguyễn Thị Dạ Hương",
        type: "teacher",
        flower: "🌸",
        wish: "Nhân ngày Phụ nữ Việt Nam 20/10, em xin gửi lời chúc tốt đẹp nhất đến Cô Nguyễn Thị Dạ Hương. Cảm ơn cô đã tận tình dìu dắt lớp Aucouturier Khóa IV chúng em bằng cả tấm lòng yêu thương và sự chuyên nghiệp tuyệt đối. Chúc cô luôn tràn đầy năng lượng tích cực, luôn tươi trẻ, hạnh phúc và gặt hái thật nhiều quả ngọt trong hành trình giáo dục."
    },
    {
        id: 4,
        name: "Cô Hoàng Thị Thu Hường",
        type: "teacher",
        flower: "🌺",
        wish: "Kính gửi Cô Hoàng Thị Thu Hường, sự dịu dàng và tận tụy của cô trong mỗi giờ học Tâm vận động Aucouturier luôn để lại ấn tượng sâu đậm trong lòng chúng em. Nhân ngày 20/10, chúc cô luôn ngập tràn niềm vui, sức khỏe dồi dào, gia đình hạnh phúc và luôn là người truyền lửa nhiệt huyết nhất cho các thế hệ học viên."
    },
    {
        id: 5,
        name: "Cô Danielle Michaux",
        type: "teacher",
        flower: "🌹",
        wish: "Dear Danielle Michaux, thank you for bringing your invaluable international expertise and profound passion to our Aucouturier Psychomotricity Class IV. Your guidance has opened new horizons for us. Wishing you a wonderful and joyful Vietnamese Women's Day (20/10) filled with love, happiness, and continued success in your inspiring educational journey!"
    },

    // --- 25 BẠN NỮ KHÓA TÂM VẬN ĐỘNG AUCOUTURIER KHÓA IV ---
    { id: 6, name: "Đỗ Thanh Phương", type: "student", flower: "🌼", wish: "Chúc Đỗ Thanh Phương ngày 20/10 luôn xinh đẹp, rạng rỡ và tràn đầy năng lượng. Mong rằng chặng đường sắp tới của bạn trong lớp Aucouturier Khóa IV sẽ luôn ngập tràn tiếng cười và niềm vui!" },
    { id: 7, name: "Hoàng Thị Thanh Hoa", type: "student", flower: "🌷", wish: "Chúc Hoàng Thị Thanh Hoa một ngày 20/10 thật ý nghĩa, luôn giữ được nét dịu dàng, nhiệt huyết và gặt hái thật nhiều thành công trong học tập cũng như cuộc sống." },
    { id: 8, name: "Nguyễn Thị Thúy Hằng", type: "student", flower: "🌻", wish: "Chúc bạn Nguyễn Thị Thúy Hằng luôn tươi vui, hạnh phúc và tràn đầy sức sống. Chúc bạn luôn giữ vững đam mê với hành trình phát triển tâm vận động!" },
    { id: 9, name: "Trần Thị Bích Trâm", type: "student", flower: "🌸", wish: "Chúc Trần Thị Bích Trâm ngày 20/10 ngập tràn quà và hoa. Luôn tự tin, xinh đẹp và tỏa sáng rực rỡ như đóa hoa đẹp nhất trong khu vườn nhé!" },
    { id: 10, name: "Lữ Ngọc Hải Nhi", type: "student", flower: "🌺", wish: "Chúc Lữ Ngọc Hải Nhi một ngày lễ thật đáng nhớ, luôn vui vẻ, may mắn và đạt được mọi mục tiêu mà bản thân đề ra." },
    { id: 11, name: "Lê Thị Loan Trinh", type: "student", flower: "🌹", wish: "Chúc Lê Thị Loan Trinh 20/10 tràn ngập niềm vui. Chúc bạn luôn giữ được năng lượng tích cực và sự đáng yêu trong đại gia đình Aucouturier!" },
    { id: 12, name: "Đinh Trần Bảo Khanh", type: "student", flower: "🌷", wish: "Chúc Đinh Trần Bảo Khanh luôn tươi trẻ, xinh đẹp và gặt hái thật nhiều thành công mới trên con đường sự nghiệp và đam mê của mình." },
    { id: 13, name: "Nguyễn Thị Giáo", type: "student", flower: "🌼", wish: "Chúc Nguyễn Thị Giáo ngày 20/10 thật hạnh phúc, luôn tràn đầy nhiệt huyết và gặt hái nhiều cột mốc ý nghĩa cùng lớp Khóa IV." },
    { id: 14, name: "Trần Đoàn Thiên Duyên", type: "student", flower: "🌻", wish: "Chúc Trần Đoàn Thiên Duyên luôn duyên dáng, ngọt ngào và gặp nhiều may mắn trong cuộc sống. Happy Women's Day 20/10!" },
    { id: 15, name: "Nguyễn Thị Hồng Thu", type: "student", flower: "🌸", wish: "Chúc Nguyễn Thị Hồng Thu một ngày 20/10 thật trọn vẹn, luôn nở nụ cười tươi trên môi và luôn giữ vững tinh thần học tập hăng say." },
    { id: 16, name: "Đào Bích Thuỷ", type: "student", flower: "🌺", wish: "Chúc Đào Bích Thuỷ luôn tràn đầy năng lượng, sức khỏe và luôn là điểm tựa vui vẻ của mọi người xung quanh." },
    { id: 17, name: "Trần Thị Ngọc Bích", type: "student", flower: "🌹", wish: "Chúc Trần Thị Ngọc Bích tỏa sáng rực rỡ như viên ngọc quý. Chúc bạn ngày 20/10 ngập tràn yêu thương và hạnh phúc." },
    { id: 18, name: "Nguyễn Thị Minh Phương", type: "student", flower: "🌷", wish: "Chúc Nguyễn Thị Minh Phương luôn giữ vững sự tự tin, sắc sảo và gặt hái thật nhiều thành công trong khóa học Tâm vận động." },
    { id: 19, name: "Nguyễn Xuân Linh", type: "student", flower: "🌻", wish: "Chúc Nguyễn Xuân Linh một ngày 20/10 thật tuyệt vời, luôn tươi vui, trẻ trung và đạt được mọi ước mơ của mình." },
    { id: 20, name: "Phan Nguyễn Ngọc Thơ", type: "student", flower: "🌸", wish: "Chúc Phan Nguyễn Ngọc Thơ luôn thơ ngây, yêu đời, gặt hái nhiều niềm vui và luôn là người bạn đồng hành tuyệt vời trong lớp." },
    { id: 21, name: "Nguyễn Thị Quỳnh Nga", type: "student", flower: "🌺", wish: "Chúc Nguyễn Thị Quỳnh Nga ngày 20/10 ngập tràn hoa và quà. Chúc bạn luôn giữ vững tinh thần năng nổ và nhiệt huyết." },
    { id: 22, name: "Nguyễn Thị Hồng Thuấn", type: "student", flower: "🌹", wish: "Chúc Nguyễn Thị Hồng Thuấn luôn bình an, hạnh phúc, gặt hái nhiều thành công mới trong công việc và cuộc sống." },
    { id: 23, name: "Võ Thị Hoàng", type: "student", flower: "🌷", wish: "Chúc Võ Thị Hoàng luôn tràn đầy năng lượng tích cực, luôn nở nụ cười rạng rỡ và có một ngày 20/10 thật đáng nhớ." },
    { id: 24, name: "Nguyễn Ngọc Hương Thảo", type: "student", flower: "🌻", wish: "Chúc Nguyễn Ngọc Hương Thảo luôn thơm ngát hương thơm của sự thành công và dịu dàng. Happy 20/10!" },
    { id: 25, name: "Nguyễn Thị Trúc Hằng", type: "student", flower: "🌸", wish: "Chúc Nguyễn Thị Trúc Hằng ngày 20/10 thật nhiều niềm vui, luôn giữ vững tình yêu với nghề và với tâm vận động." },
    { id: 26, name: "BIỆN THỊ BÍCH NGỌC", type: "student", flower: "🌺", wish: "Chúc Biện Thị Bích Ngọc luôn xinh đẹp, rạng rỡ, gặp nhiều may mắn và luôn tràn đầy cảm hứng trong cuộc sống." },
    { id: 27, name: "Nguyễn Thị Huế", type: "student", flower: "🌹", wish: "Chúc Nguyễn Thị Huế luôn dịu dàng, kiên định và đạt được mọi dự định tuyệt vời trong tương lai gần." },
    { id: 28, name: "Nguyễn Thị Thanh Nhàn", type: "student", flower: "🌷", wish: "Chúc Nguyễn Thị Thanh Nhàn ngày 20/10 thật hạnh phúc, luôn tràn đầy năng lượng và gặt hái thành công rực rỡ." },
    { id: 29, name: "Lã Thị Hồng Nhung", type: "student", flower: "🌻", wish: "Chúc Lã Thị Hồng Nhung luôn tươi tắn như đóa hồng nhung, luôn hạnh phúc và gặt hái nhiều thành tựu mới." },
    { id: 30, name: "Trần Thị Thanh Huyền", type: "student", flower: "🌸", wish: "Chúc Trần Thị Thanh Huyền ngày 20/10 trọn vẹn yêu thương, luôn giữ vững ngọn lửa đam mê và nhiệt huyết trong học tập." }
];

let selectedMember = null;

// Khởi tạo khi trang tải xong
document.addEventListener('DOMContentLoaded', () => {
    renderGardenGrid();
    setupSearchSystem();
});

// Chuyển từ màn hình Chào mừng sang Khu vườn
function enterGarden() {
    document.getElementById('welcome-screen').classList.remove('active');
    document.getElementById('garden-screen').classList.add('active');
}

function backToWelcome() {
    document.getElementById('garden-screen').classList.remove('active');
    document.getElementById('welcome-screen').classList.add('active');
}

// Render 30 đóa hoa ra màn hình
function renderGardenGrid() {
    const grid = document.getElementById('flower-garden-grid');
    grid.innerHTML = '';

    membersData.forEach(member => {
        const node = document.createElement('div');
        node.className = `flower-node ${member.type}`;
        node.innerHTML = `
            <div class="flower-icon">${member.flower}</div>
            <div class="flower-name">${member.name}</div>
        `;
        node.onclick = () => openPortalForMember(member);
        grid.appendChild(node);
    });
}

// Hiệu ứng đi qua cổng cổ tích & đến hộp quà của thành viên
function openPortalForMember(member) {
    selectedMember = member;

    document.getElementById('garden-screen')
        .classList.remove('active');

    document.getElementById('portal-screen')
        .classList.add('active');

    const portal = document.getElementById('portal-screen');
    const giftBox = document.getElementById('gift-box');
    const bloomStage = document.getElementById('bloom-stage');

    // Phân biệt quà cô giáo và học viên
    portal.classList.toggle(
        'teacher-portal',
        member.type === 'teacher'
    );

    giftBox.classList.remove('opened', 'blooming');
    bloomStage.innerHTML = '';

    document.getElementById('recipient-tag-name').innerText =
        member.name;

    document.getElementById('teacher-note').hidden =
        member.type !== 'teacher';

    document.getElementById('wish-modal')
        .classList.remove('active');

    // Đổi biểu tượng hoa theo từng thành viên
    bloomStage.dataset.flower = member.flower;
}
    
    // Reset hộp quà
    const giftBox = document.querySelector('.gift-box');
    giftBox.classList.remove('opened');
    document.getElementById('recipient-tag-name').innerText = member.name;
    document.getElementById('wish-modal').classList.remove('active');
}

// Mở hộp quà
function openGiftBox() {
    if (!selectedMember) return;

    const giftBox = document.getElementById('gift-box');

    if (giftBox.classList.contains('opened')) return;

    giftBox.classList.add('opened');

    // Cho hoa bung nở sau khi nắp hộp bắt đầu mở
    window.setTimeout(() => {
        bloomFlower();
    }, 350);

    // Hiện lời chúc sau khi hiệu ứng hoa bắt đầu
    window.setTimeout(() => {
        showWishModal(selectedMember);
    }, 1900);
}

function bloomFlower() {
    const stage = document.getElementById('bloom-stage');
    if (!stage || !selectedMember) return;

    stage.innerHTML = '';
    stage.classList.remove('bloom-active');

    const isTeacher = selectedMember.type === 'teacher';
    const flower = selectedMember.flower || '🌸';

    // Đóa hoa chính nở từ giữa hộp quà
    const bloom = document.createElement('div');
    bloom.className = 'bloom-flower';
    bloom.textContent = flower;
    stage.appendChild(bloom);

    // Tạo các cánh hoa bay và rơi
    const petalCount = isTeacher ? 30 : 18;

    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('span');

        petal.className = 'falling-petal';
        petal.textContent = ['🌸', '🌷', '✿', '❀'][i % 4];

        const angle = Math.random() * 360;
        const distance = 60 + Math.random() * (
            isTeacher ? 150 : 100
        );

        const radians = angle * Math.PI / 180;
        const x = Math.cos(radians) * distance;
        const y = Math.sin(radians) * distance;

        petal.style.setProperty('--petal-x', `${x}px`);
        petal.style.setProperty('--petal-y', `${y}px`);
        petal.style.setProperty(
            '--petal-delay',
            `${Math.random() * 0.65}s`
        );
        petal.style.setProperty(
            '--petal-duration',
            `${1.8 + Math.random() * 1.7}s`
        );

        stage.appendChild(petal);
    }

    // Kích hoạt animation sau khi đã thêm các phần tử
    requestAnimationFrame(() => {
        stage.classList.add('bloom-active');
    });
}

// Hiển thị Modal Lời Chúc
function showWishModal(member) {
    document.getElementById('modal-name').innerText = member.name;
    document.getElementById('modal-wish-content').innerText = member.wish;
    document.getElementById('wish-modal').classList.add('active');
}

// Đóng modal lời chúc và về lại khu vườn
function closeWishModal() {
    document.getElementById('wish-modal').classList.remove('active');
    document.getElementById('portal-screen').classList.remove('active');
    document.getElementById('garden-screen').classList.add('active');
}

// Hệ thống tìm kiếm nhanh tên trên màn hình chính
function setupSearchSystem() {
    const input = document.getElementById('global-search');
    const suggestionsBox = document.getElementById('search-suggestions');

    if (!input || !suggestionsBox) return;

    // Chuyển về chữ thường, bỏ dấu tiếng Việt
    function normalizeText(text) {
        return text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'd')
            .toLowerCase()
            .trim();
    }

    input.addEventListener('input', function () {
        const keyword = normalizeText(input.value);
        suggestionsBox.innerHTML = '';

        if (!keyword) {
            suggestionsBox.style.display = 'none';
            return;
        }

        // Tìm theo một phần tên, không phân biệt dấu
        const results = membersData.filter(function (member) {
            return normalizeText(member.name).includes(keyword);
        });

        if (results.length === 0) {
            const empty = document.createElement('div');
            empty.className = 'suggestion-item';
            empty.textContent = 'Không tìm thấy tên phù hợp 🌷';
            empty.style.cursor = 'default';
            suggestionsBox.appendChild(empty);
            suggestionsBox.style.display = 'block';
            return;
        }

        results.forEach(function (member) {
            const item = document.createElement('button');
            item.type = 'button';
            item.className = 'suggestion-item';

            item.textContent =
                `${member.flower} ${member.name} (${
                    member.type === 'teacher' ? 'Cô giáo' : 'Học viên'
                })`;

            item.style.display = 'block';
            item.style.width = '100%';
            item.style.color = '#fff';
            item.style.background = 'transparent';
            item.style.font = 'inherit';
            item.style.textAlign = 'left';
            item.style.border = 'none';
            item.style.cursor = 'pointer';

            item.addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();

                input.value = member.name;
                suggestionsBox.style.display = 'none';

                openPortalForMember(member);
            });

            suggestionsBox.appendChild(item);
        });

        suggestionsBox.style.display = 'block';
    });

    // Không đóng danh sách khi bấm vào gợi ý
    suggestionsBox.addEventListener('click', function (event) {
        event.stopPropagation();
    });

    document.addEventListener('click', function (event) {
        if (!event.target.closest('.search-box-container')) {
            suggestionsBox.style.display = 'none';
        }
    });
}
