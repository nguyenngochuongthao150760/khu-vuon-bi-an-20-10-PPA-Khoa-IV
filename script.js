// Dữ liệu danh sách 30 người (5 Cô giáo & 25 Bạn nữ) kèm lời chúc cá nhân hóa
const membersData = [
    // --- 5 CÔ GIÁO (Lời chúc sâu sắc, tri ân nghề dạy học & bộ môn Tâm vận động Aucouturier) ---
    {
        id: 1,
        name: "Cô Nguyễn Lệ Bình",
        type: "teacher",
        flower: "🌻",
        wish: `Kính gửi Cô Nguyễn Lệ Bình thương mến,

Nhân ngày Phụ nữ Việt Nam 20/10, chúng em xin gửi đến cô lòng biết ơn sâu sắc và những lời chúc yêu thương nhất.

Chúng em biết ơn cô không chỉ vì đã tận tâm dẫn dắt chúng em trên hành trình khám phá Tâm vận động Aucouturier – Khóa IV, mà còn vì những giá trị sâu sắc, sự tinh tế và tình yêu nghề mà cô đã truyền trao qua từng bài học.

Sự tận tụy, kiên nhẫn và trái tim đầy nhiệt huyết của cô đã truyền cảm hứng để chúng em thêm thấu hiểu, biết lắng nghe và đồng hành cùng trẻ bằng sự tôn trọng, yêu thương và chân thành. Những điều cô gieo hôm nay sẽ tiếp tục được chúng em gìn giữ và lan tỏa trên hành trình phía trước.

Nhân ngày đặc biệt này, chúng em kính chúc cô luôn dồi dào sức khỏe, bình an, hạnh phúc và mãi giữ ngọn lửa đam mê cùng nụ cười rạng rỡ. Mong cô luôn được yêu thương, trân quý và nhận lại thật nhiều điều tốt đẹp như những giá trị cô đã trao đi.

Chúng em xin cảm ơn cô vì không chỉ trao truyền tri thức, mà còn thắp lên trong chúng em những giá trị sẽ còn ở lại thật lâu trên hành trình làm nghề và làm người.

Kính chúc cô một ngày 20/10 thật ấm áp và ngập tràn yêu thương! 💐`
    },
    {
        id: 2,
        name: "Cô Nguyễn Thị Thuý",
        type: "teacher",
        flower: "🌷",
        wish: `Kính gửi Cô Nguyễn Thị Thúy thương mến,

Nhân ngày Phụ nữ Việt Nam 20/10, chúng em xin gửi đến cô những lời chúc tốt đẹp và tình cảm trân quý nhất.
Chúng em biết ơn cô vì đã luôn tận tình hướng dẫn, hỗ trợ và đồng hành cùng nhóm trong suốt khóa học Tâm vận động Aucouturier. Từ những chia sẻ thực tế đến những góp ý gần gũi, sự hiện diện và đồng hành của cô đã giúp chúng em có thêm sự tự tin, từng bước hiểu sâu hơn và vận dụng kiến thức vào thực hành.
Kính chúc cô luôn mạnh khỏe, bình an, hạnh phúc và giữ mãi niềm vui trong công việc mình yêu quý. Mong rằng trên hành trình đồng hành cùng các học viên và trẻ thơ, cô sẽ luôn nhận được thật nhiều sự trân trọng, yêu thương và những thành quả ý nghĩa.
Cảm ơn cô vì đã luôn kiên nhẫn nâng đỡ, tận tình chỉ dẫn và giúp chúng em vững vàng hơn trên hành trình học hỏi, thực hành và trưởng thành cùng Tâm vận động Aucouturier.
Chúng em kính chúc cô một ngày 20/10 thật ấm áp, nhiều niềm vui và ngập tràn yêu thương! ❤️`
    },
    {
        id: 3,
        name: "Cô Nguyễn Thị Dạ Hương",
        type: "teacher",
        flower: "🌸",
        wish: `Kính gửi Cô Nguyễn Thị Dạ Hương kính mến,

Nhân ngày Phụ nữ Việt Nam 20/10, chúng em xin gửi đến cô những lời chúc yêu thương và lòng biết ơn chân thành nhất.

Chúng em trân quý sự tận tâm, tinh thần chuyên nghiệp và những hướng dẫn đầy trách nhiệm mà cô đã dành cho lớp Tâm vận động Aucouturier Khóa IV. Cảm ơn cô đã luôn kiên nhẫn đồng hành, chia sẻ kinh nghiệm thực tiễn và tiếp thêm cho chúng em sự tự tin trên hành trình học hỏi, thực hành và trưởng thành cùng nghề.

Kính chúc cô luôn mạnh khỏe, tươi trẻ, hạnh phúc và tràn đầy năng lượng tích cực. Mong rằng mỗi ngày làm nghề đều mang đến cho cô những niềm vui mới, những thành quả ý nghĩa và thật nhiều quả ngọt từ hành trình gieo mầm yêu thương, nâng đỡ sự phát triển của trẻ thơ.

Chúc cô luôn giữ được sự nhiệt thành trong công việc, sự an yên trong tâm hồn và niềm hạnh phúc khi nhìn thấy những giá trị tốt đẹp mình trao đi được tiếp nối và lan tỏa.

Chúng em kính chúc cô một ngày 20/10 thật rạng rỡ, ngập tràn yêu thương và hạnh phúc! ❤️`
    },
    {
        id: 4,
        name: "Cô Hoàng Thị Thu Hường",
        type: "teacher",
        flower: "🌺",
        wish: `Kính gửi Cô Hoàng Thị Thu Hường kính mến,

Nhân ngày Phụ nữ Việt Nam 20/10, chúng em xin gửi đến cô những lời chúc tốt đẹp nhất cùng tình cảm trân quý từ tận đáy lòng.

Chúng em luôn trân trọng sự dịu dàng, tận tâm và những hướng dẫn đầy tinh tế mà cô dành cho chúng em trong hành trình học tập Tâm vận động Aucouturier. Cảm ơn cô đã kiên nhẫn đồng hành, sẻ chia những kinh nghiệm quý báu và giúp chúng em thêm tự tin, vững vàng trên con đường thực hành và đồng hành cùng trẻ.

Kính chúc cô luôn dồi dào sức khỏe, tâm an, lòng vui, gia đình hạnh phúc và mỗi ngày đều ngập tràn những điều bình dị mà ý nghĩa. Mong rằng ngọn lửa yêu nghề trong cô sẽ luôn rực sáng, để những giá trị tốt đẹp cô trao đi tiếp tục được nuôi dưỡng và lan tỏa đến nhiều thế hệ học viên.

Chúc cô luôn nhận được thật nhiều yêu thương, bởi những người dành cả trái tim để nâng đỡ và đồng hành cùng người khác cũng xứng đáng được cuộc đời dịu dàng ôm ấp và yêu thương.

Chúng em kính chúc cô một ngày 20/10 thật ấm áp, an vui và trọn vẹn hạnh phúc! ❤️`
    },
    {
        id: 5,
        name: "Cô Danielle Michaux",
        type: "teacher",
        flower: "🌹",
        wish: `Dear Danielle Michaux,

On the occasion of Vietnamese Women's Day, October 20th, we would like to express our heartfelt gratitude for sharing your invaluable international expertise, profound knowledge, and genuine passion with our Aucouturier Psychomotricity Class IV.

Your guidance has broadened our perspectives, deepened our understanding, and inspired us to approach our work with children with greater sensitivity, respect, and reflection. We feel truly privileged to learn from your experience and to carry these meaningful insights into our own professional journeys.

May your special day be filled with love, joy, and beautiful moments. We wish you continued good health, happiness, and fulfillment, and may your dedication to psychomotricity continue to inspire and positively impact the lives of many children and professionals around the world.

Thank you for sharing not only your expertise, but also the inspiration to keep learning, growing, and making a meaningful difference in the lives of children.

With our warmest wishes and deepest appreciation, Happy Vietnamese Women's Day! 🌷❤️`
    },

    // --- 25 BẠN NỮ KHÓA TÂM VẬN ĐỘNG AUCOUTURIER KHÓA IV ---
    { id: 6, name: "Đỗ Thanh Phương", type: "student", flower: "🌼", wish: "Chúc bạn Thanh Phương ngày 20/10 luôn xinh đẹp, rạng rỡ và tràn đầy năng lượng. Mong rằng chặng đường sắp tới của bạn trong lớp Aucouturier Khóa IV sẽ luôn ngập tràn tiếng cười và niềm vui!" },
    { id: 7, name: "Hoàng Thị Thanh Hoa", type: "student", flower: "🌷", wish: "Chúc chị Thanh Hoa một ngày 20/10 thật nhiều niềm vui và yêu thương. Mong chị luôn mạnh khỏe, bình an, giữ mãi tinh thần lạc quan và nụ cười rạng rỡ. Chúc chị mọi điều tốt đẹp, đặc biệt là sức khỏe, để mỗi ngày trôi qua đều là một ngày đáng quý, nhẹ nhàng và hạnh phúc bên những người thân yêu." },
    { id: 8, name: "Nguyễn Thị Thúy Hằng", type: "student", flower: "🌻", wish: "Chúc chị Thúy Hằng luôn tươi vui, hạnh phúc và tràn đầy sức sống. Đặc biệt, chúc chị sớm gặp được một nửa yêu thương, một người đủ chân thành, ấm áp để cùng chị sẻ chia những niềm vui, đồng hành qua những chặng đường và làm cho cuộc sống vốn đã rực rỡ của chị càng thêm ngọt ngào! ❤️🌷" },
    { id: 9, name: "Trần Thị Bích Trâm", type: "student", flower: "🌸", wish: "Chúc chị Bích Trâm ngày 20/10 ngập tràn quà và hoa. Chúc chị luôn tự tin, xinh đẹp và tỏa sáng rực rỡ như đóa hoa đẹp nhất trong khu vườn nhé!" },
    { id: 10, name: "Lữ Ngọc Hải Nhi", type: "student", flower: "🌺", wish: "Chúc chị Gió - Hải Nhi một ngày lễ thật đáng nhớ, luôn vui vẻ, may mắn và đạt được mọi mục tiêu mà bản thân đề ra. Gửi chị một cái ôm thiệt chặt nghen." },
    { id: 11, name: "Lê Thị Loan Trinh", type: "student", flower: "🌹", wish: "Chúc chị Loan Trinh 20/10 tràn ngập niềm vui và hạnh phúc. Chúc chị luôn giữ được năng lượng tích cực và sự đáng yêu trong đại gia đình Aucouturier!" },
    { id: 12, name: "Đinh Trần Bảo Khanh", type: "student", flower: "🌷", wish: "Chúc bạn Bảo Khanh luôn tươi trẻ, xinh đẹp và gặt hái thật nhiều thành công mới trên con đường sự nghiệp và đam mê của mình. Cố lên, cố lên!" },
    { id: 13, name: "Nguyễn Thị Giáo", type: "student", flower: "🌼", wish: "Chúc chị Giáo ngày 20/10 thật hạnh phúc, luôn tràn đầy nhiệt huyết và gặt hái nhiều cột mốc ý nghĩa cùng lớp Khóa IV." },
    { id: 14, name: "Trần Đoàn Thiên Duyên", type: "student", flower: "🌻", wish: "Chúc chị Thiên Duyên luôn duyên dáng, ngọt ngào và gặp nhiều niềm vui trong cuộc sống. Happy Women's Day 20/10!" },
    { id: 15, name: "Nguyễn Thị Hồng Thu", type: "student", flower: "🌸", wish: "Chúc chị Hồng Thu một ngày 20/10 thật trọn vẹn, luôn nở nụ cười tươi trên môi và luôn là tấm gương cho tinh thần học tập hăng say, không ngừng cho chúng em nghen chị." },
    { id: 16, name: "Đào Bích Thuỷ", type: "student", flower: "🌺", wish: "Chúc chị Bích Thủy luôn rạng rỡ, tràn đầy năng lượng tích cực và giữ mãi sự hài hước duyên dáng của mình. Mong chị luôn là nguồn vui, mang tiếng cười đến cho mọi người và đặc biệt là tiếp tục giữ vững vị trí “nhà tài trợ bánh tráng quốc dân” của cả lớp mình nhé! 😂❤️ Chúc chị một ngày 20/10 thật nhiều niềm vui, yêu thương và luôn hạnh phúc!" },
    { id: 17, name: "Trần Thị Ngọc Bích", type: "student", flower: "🌹", wish: "Chúc chị Ngọc Bích luôn tỏa sáng rực rỡ như viên ngọc quý đang được mài dũa. Chúc chị ngày 20/10 ngập tràn yêu thương và hạnh phúc bên gia đình thân yêu." },
    { id: 18, name: "Nguyễn Thị Minh Phương", type: "student", flower: "🌷", wish: "Chúc bạn Minh Phương luôn giữ vững sự tự tin, sắc sảo và gặt hái thật nhiều thành công trong khóa học Tâm vận động." },
    { id: 19, name: "Nguyễn Xuân Linh", type: "student", flower: "🌻", wish: "Chúc chị Xuân Linh một ngày 20/10 thật rạng rỡ và ngập tràn yêu thương. Mong chị luôn giữ được nét tươi trẻ, tinh thần yêu đời và nụ cười rạng ngời trên môi. Chúc chị sớm chạm đến những mục tiêu đang ấp ủ, từng bước hiện thực hóa những ước mơ mình vun đắp và luôn tìm thấy niềm vui, hạnh phúc trên hành trình mình lựa chọn nghen! ❤️🌷" },
    { id: 20, name: "Phan Nguyễn Ngọc Thơ", type: "student", flower: "🌸", wish: "Chúc bà Thơ luôn thơ ngây, yêu đời, gặt hái nhiều niềm vui và luôn là người bạn đồng hành tuyệt vời trong lớp." },
    { id: 21, name: "Nguyễn Thị Quỳnh Nga", type: "student", flower: "🌺", wish: "Chúc chị Quỳnh Nga ngày 20/10 ngập tràn hoa và quà. Chúc chị luôn giữ vững tinh thần năng nổ và nhiệt huyết trong suốt hành trình này nhé." },
    { id: 22, name: "Nguyễn Thị Hồng Thuấn", type: "student", flower: "🌹", wish: "Chúc chị Hồng Thuấn một ngày 20/10 thật nhiều niềm vui và yêu thương. Dù khoảng cách địa lý có xa, chị vẫn luôn là nguồn cảm hứng và tấm gương đẹp về tinh thần ham học hỏi, không ngừng nỗ lực và hoàn thiện bản thân đối với chúng em. Chúc chị luôn vững bước trên con đường mình chọn và đón nhận thật nhiều điều tốt đẹp phía trước! ❤️🌷" },
    { id: 23, name: "Võ Thị Hoàng", type: "student", flower: "🌷", wish: "Chúc chị Hoàng luôn tràn đầy năng lượng tích cực, luôn nở nụ cười rạng rỡ và có một ngày 20/10 thật đáng nhớ." },
    { id: 24, name: "Nguyễn Ngọc Hương Thảo", type: "student", flower: "🌻", wish: "Chúc bạn Hương Thảo ngày 20/10 vui vẻ nhó" },
    { id: 25, name: "Nguyễn Thị Trúc Hằng", type: "student", flower: "🌸", wish: "Chúc chị Trúc Hằng ngày 20/10 thật nhiều niềm vui, luôn giữ vững tình yêu với nghề và với tâm vận động." },
    { id: 26, name: "BIỆN THỊ BÍCH NGỌC", type: "student", flower: "🌺", wish: "Chúc chị Bích Ngọc luôn xinh đẹp, rạng rỡ, gặp nhiều may mắn và luôn tràn đầy cảm hứng trong cuộc sống." },
    { id: 27, name: "Nguyễn Thị Huế", type: "student", flower: "🌹", wish: "Chúc chị Huế luôn dịu dàng, kiên định và đạt được mọi dự định tuyệt vời trong tương lai gần." },
    { id: 28, name: "Nguyễn Thị Thanh Nhàn", type: "student", flower: "🌷", wish: "Chúc chị Thanh Nhàn một ngày 20/10 thật nhiều niềm vui, yêu thương và hạnh phúc. Mong chị luôn rạng rỡ, tràn đầy năng lượng tích cực và gặt hái thêm nhiều thành công trên hành trình mình theo đuổi. Chúc chị luôn có gia đình nhỏ yêu thương làm điểm tựa vững vàng, tiếp thêm sức mạnh để chị tự tin chinh phục những mục tiêu mới và tận hưởng trọn vẹn những điều bình dị mà quý giá trong cuộc sống." },
    { id: 29, name: "Lã Thị Hồng Nhung", type: "student", flower: "🌻", wish: "Chúc chị Hồng Nhung luôn tươi tắn, rạng rỡ như đóa hồng nhung, luôn hạnh phúc và gặt hái thêm nhiều thành tựu mới. Mong chị em mình ngày càng thấu hiểu sâu sắc hơn về Tâm vận động Aucouturier, tích lũy thật nhiều kiến thức và trải nghiệm quý báu để thêm vững tin, kiên định và vững vàng trên hành trình 3 năm phía trước. Chúc chị luôn giữ được ngọn lửa đam mê, tinh thần học hỏi và niềm vui trên chặng đường trưởng thành cùng Tâm vận động!." },
    { id: 30, name: "Trần Thị Thanh Huyền", type: "student", flower: "🌸", wish: "Nhân ngày 20/10, kính chúc chị Thanh Huyền luôn xinh đẹp, hạnh phúc, giữ mãi ngọn lửa đam mê và nhiệt huyết trên hành trình 3 năm của khóa Tâm vận động Aucouturier. ❤️ Cả lớp đều rất yêu mến giọng nói truyền cảm, đầy cuốn hút của chị. Chúc chị luôn tỏa sáng và lan tỏa thật nhiều giá trị tốt đẹp đến mọi người! 💐." }
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
    if (!member) return;

    selectedMember = member;

    // Chuyển sang màn hình cổng cổ tích
    document.getElementById('garden-screen')
        .classList.remove('active');

    document.getElementById('portal-screen')
        .classList.add('active');

    const portal = document.getElementById('portal-screen');
    const giftBox = document.getElementById('gift-box');
    const bloomStage = document.getElementById('bloom-stage');
    const wishModal = document.getElementById('wish-modal');

    // Phân biệt giao diện quà tặng cô giáo và học viên
    portal.classList.toggle(
        'teacher-portal',
        member.type === 'teacher'
    );

    // Đặt lại trạng thái hộp quà khi chọn người mới
    giftBox.classList.remove('opened', 'blooming');
    bloomStage.innerHTML = '';
    bloomStage.classList.remove('bloom-active');

    // Hiển thị tên người nhận
    document.getElementById('recipient-tag-name').textContent =
        member.name;

    document.getElementById('teacher-note').hidden =
        member.type !== 'teacher';

    // Đóng lời chúc cũ nếu đang mở
    wishModal.classList.remove('active');

    // Lưu biểu tượng hoa cho hiệu ứng nở
    bloomStage.dataset.flower = member.flower || '🌸';
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
                    member.type === 'teacher' ? 'Giảng viên' : 'Học viên'
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
