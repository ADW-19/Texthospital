document.addEventListener('DOMContentLoaded', () => {
    // Translation data
const translations = {
    'zh-CN': {
        'view_details':'查看详情',
        'principles_title': '检测原理',
        'tech_title': '技术原理',
        'tech_content': '我们采用TF-IDF特征提取结合数据增强与对抗训练的方法，集成多种机器学习模型，并通过深度学习模型分析文本的统计特征和语义模式，以更鲁棒地识别AI生成内容...',
        'papers_title': '相关论文',
        'paper1': '"基于Bagging与对抗训练的AI生成文本精准检测探究" (CCKS2025)',
        'paper2': '"基于AI生成文本的数据挖掘与分析" (CCKS2025)',
        'achievements_title': '比赛成果',
        'achievement1': '阿里云天池大数据竞赛CCKS2025-大模型生成文本检测 71/1093',
        'achievement2': '中科院CCKS2025学术会议论文集',
        'detect_btn': '立即检测',
        'principles_btn': '检测原理',
        'submit_btn': '发送检测',
        'file_upload': '或拖放文件到此处',
        'input_placeholder': '输入待检测文本...',
        'team_title': '研究团队',
        'team_member1_name': '王彦祺 (Andy Yanqi Wang)',
        'team_member1_desc': '毕业于安徽财经大学，中国银联自动化系统优化工程师，人工智能工程师，研究方向：数据科学，机器学习与深度学习，自然语言处理',
        'team_member2_name': '李宇航 (Yvhang Lee)',
        'team_member2_desc': '北京交通大学硕士研究生，研究方向：运筹学与优化分析，系统科学与系统工程',
        'team_member3_name': '武明佳 (Mingjia Wu)',
        'team_member3_desc': '毕业于安徽财经大学，追觅科技数据分析师，研究方向：企业管理，管理统计与计量经济'
    },
    'zh-TW': {
        'view_details':'查看詳情',
        'principles_title': '檢測原理',
        'tech_title': '技術原理',
        'tech_content': '我們採用TF-IDF特徵提取結合數據增強與對抗訓練的方法，集成多種機器學習模型，並通過深度學習模型分析文本的統計特徵和語義模式，以更穩健地識別AI生成內容...',
        'papers_title': '相關論文',
        'paper1': '"基於Bagging與對抗訓練的AI生成文本精準檢測探究" (CCKS2025)',
        'paper2': '"基於AI生成文本的數據挖掘與分析" (CCKS2025)',
        'achievements_title': '比賽成果',
        'achievement1': '阿里云天池大數據競賽CCKS2025-大模型生成文本檢測 71/1093',
        'achievement2': '中科院CCKS2025學術會議論文集',
        'detect_btn': '立即檢測',
        'principles_btn': '檢測原理',
        'submit_btn': '發送檢測',
        'file_upload': '或拖放文件到此處',
        'input_placeholder': '輸入待檢測文本...',
        'team_title': '研究團隊',
        'team_member1_name': '王彥祺 (Andy Yanqi Wang)',
        'team_member1_desc': '畢業於安徽財經大學，中國銀聯自動化系統優化工程師，人工智能工程師，研究方向：數據科學，機器學習與深度學習，自然語言處理',
        'team_member2_name': '李宇航 (Yvhang Lee)',
        'team_member2_desc': '北京交通大學碩士研究生，研究方向：運籌學與優化分析，系統科學與系統工程',
        'team_member3_name': '武明佳 (Mingjia Wu)',
        'team_member3_desc': '畢業於安徽財經大學，追覓科技數據分析師，研究方向：企業管理，管理統計與計量經濟'
    },
    'en': {
        'view_details':'View Details',
        'principles_title': 'Detection Principles',
        'tech_title': 'Technical Principles',
        'tech_content': 'We employ TF-IDF feature extraction combined with data augmentation and adversarial training, integrating multiple machine learning models and deep learning techniques to analyze statistical features and semantic patterns for robust AI-generated content detection...',
        'papers_title': 'Related Papers',
        'paper1': '"Precision Detection of AI-Generated Text Using Bagging and Adversarial Training" (CCKS2025)',
        'paper2': '"Data Mining and Analysis of AI-Generated Text" (CCKS2025)',
        'achievements_title': 'Competition Achievements',
        'achievement1': 'Ranked 71/1093 in Alibaba Tianchi Big Data Competition CCKS2025 - LLM Generated Text Detection',
        'achievement2': 'Published in CCKS2025 Academic Conference Proceedings',
        'detect_btn': 'Detect Now',
        'principles_btn': 'Principles',
        'submit_btn': 'Submit',
        'file_upload': 'or drag and drop file here',
        'input_placeholder': 'Enter text to analyze...',
        'team_title': 'Research Team',
        'team_member1_name': 'Andy Yanqi Wang',
        'team_member1_desc': 'Graduated from Anhui University of Finance and Economics, China UnionPay Automation System Optimization Engineer, Artificial Intelligence Engineer, research direction: Data Science, Machine Learning and Deep Learning, Natural Language Processing',
        'team_member2_name': 'Yvhang Lee',
        'team_member2_desc': 'Master student at Beijing Jiaotong University, with research directions in Operations Research and Optimization Analysis, Systems Science and Systems Engineering',
        'team_member3_name': 'Mingjia Wu',
        'team_member3_desc': 'Graduated from Anhui University of Finance and Economics, pursued as a technology data analyst with research interests in enterprise management, management statistics, and econometrics'
    }
};

    // DOM Elements
    const detectBtn = document.querySelector('.btn-accent');
    const principlesBtn = document.querySelector('.btn-primary');
    const inputSection = document.querySelector('.input-section');
    const principlesSection = document.getElementById('principles');
    const textInput = document.querySelector('.text-input');
    const fileUpload = document.querySelector('.file-upload');
    const fileUploadText = fileUpload.querySelector('span:last-child');
    const loadingAnimation = document.querySelector('.loading-animation');
    const resultDisplay = document.querySelector('.result-display');
    const percentageValue = document.querySelector('.percentage-value');
    const highlightedText = document.querySelector('.highlighted-text');
    const fixedHeader = document.querySelector('.fixed-header');
    const langButtons = document.querySelectorAll('.lang-btn');
    const submitBtn = document.querySelector('.submit-btn');
    let currentLang = 'zh-CN';

    // Language switching
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTranslations();
        });
    });

    function updateTranslations() {
        const langData = translations[currentLang];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (langData[key]) {  // Only update if translation exists
                el.textContent = langData[key];
            }
        });

        // Update buttons and other elements
        detectBtn.textContent = langData['detect_btn'];
        principlesBtn.textContent = langData['principles_btn'];
        submitBtn.textContent = langData['submit_btn'];
        fileUploadText.textContent = langData['file_upload'];
        textInput.placeholder = langData['input_placeholder'];
    }

    // Scroll to sections when buttons clicked
    detectBtn.addEventListener('click', () => {
        inputSection.scrollIntoView({ behavior: 'smooth' });
    });

    principlesBtn.addEventListener('click', () => {
        principlesSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Initialize translations and show default state
    updateTranslations();
    resultDisplay.style.display = 'flex';
    document.querySelector('.default-message').style.display = 'block';
    loadingAnimation.style.display = 'none';

    // Show fixed header when scrolling past hero section
    // 移除所有header可见性检查逻辑
    fixedHeader.classList.add('visible');

    // Click logo in fixed header to scroll to top
    fixedHeader.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Handle file upload click
    fileUpload.addEventListener('click', () => {
        // In a real implementation, this would open file dialog
        alert('文件上传功能将在完整实现中可用');
    });

    // Handle drag and drop for files
    fileUpload.addEventListener('dragover', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = 'var(--accent-color)';
        fileUpload.style.backgroundColor = 'rgba(58, 134, 255, 0.05)';
    });

    fileUpload.addEventListener('dragleave', () => {
        fileUpload.style.borderColor = 'var(--divider-color)';
        fileUpload.style.backgroundColor = 'transparent';
    });

    fileUpload.addEventListener('drop', (e) => {
        e.preventDefault();
        fileUpload.style.borderColor = 'var(--divider-color)';
        fileUpload.style.backgroundColor = 'transparent';
        alert('文件拖放功能将在完整实现中可用');
    });

    // Handle text detection
    submitBtn.addEventListener('click', processTextDetection);
    
    textInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            processTextDetection();
        }
    });

    function processTextDetection() {
        const text = textInput.value.trim();
        if (!text) {
            // Show default state when no text is entered
            loadingAnimation.style.display = 'none';
            resultDisplay.style.display = 'flex';
            percentageValue.textContent = '0';
            document.querySelector('.default-message').style.display = 'block';
            highlightedText.innerHTML = '';
            return;
        }

        // Show loading state
        document.querySelector('.loading-spinner').style.display = 'block';
        document.querySelector('.default-message').style.display = 'none';
        resultDisplay.style.display = 'none';
        
        // Hide loading when done
        setTimeout(() => {
            document.querySelector('.loading-spinner').style.display = 'none';
            resultDisplay.style.display = 'flex';
        }, 2000);

        // Mock API call with timeout
        setTimeout(() => {
            // Hide loading
            loadingAnimation.style.display = 'none';

            // Mock response data
            const mockResponse = {
                aiProbability: Math.floor(Math.random() * 100),
                highlightedText: highlightAISections(text)
            };

            // Animate percentage counter
            animatePercentage(mockResponse.aiProbability);
            
            // Display highlighted text
            highlightedText.innerHTML = mockResponse.highlightedText;
        }, 2000);
    }

    function animatePercentage(target) {
        let current = 0;
        const duration = 1500; // ms
        const increment = target / (duration / 16); // ~60fps

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            percentageValue.textContent = Math.floor(current);
        }, 16);
    }

    function highlightAISections(text) {
        // Simple mock highlighting - in real implementation would use AI detection
        const words = text.split(' ');
        const highlighted = words.map(word => {
            // Randomly highlight some words to simulate AI detection
            if (Math.random() > 0.7) {
                return `<span class="ai-highlight">${word}</span>`;
            }
            return word;
        }).join(' ');

        return highlighted;
    }

    // Initialize wave animation
    const wavePath = document.querySelector('.loading-animation svg path');
    if (wavePath) {
        animateWave();
    }

    function animateWave() {
        let offset = 0;
        setInterval(() => {
            offset += 0.5;
            wavePath.setAttribute('d', 
                `M0,10 Q25,${10 + Math.sin(offset) * 5} 50,10 T100,10`);
        }, 50);
    }
});
