document.addEventListener('DOMContentLoaded', () => {
    // Translation data
    const translations = {
        'zh-CN': {
            'view_details':'查看详情',
            'principles_title': '技术原理详解',
            'tech_title': '基于NLP的AI文本检测技术',
            'tech_content': 'TextHospital采用先进的自然语言处理(NLP)技术来检测AI生成的文本内容。我们的系统通过分析文本的多维度特征，能够准确识别由GPT、Claude等大型语言模型生成的文本。',
            'core_methods': '核心检测方法',
            'method1': '词频统计分析：AI生成的文本在词频分布上与人类写作存在显著差异',
            'method2': '语义连贯性检测：评估文本在长距离依赖关系上的连贯程度',
            'method3': '句法模式识别：分析句子结构的复杂性和多样性',
            'method4': '风格一致性检测：检测文本在不同段落间的风格变化',
            'model_architecture': '模型架构',
            'architecture1': '基于Transformer的特征提取器',
            'architecture2': '多层感知机分类器',
            'architecture3': '集成学习框架提升鲁棒性',
            'tech_advantages': '技术优势',
            'advantage1': '高准确率：在公开测试集上达到98.7%的准确率',
            'advantage2': '多语言支持：支持中英文及多种主流语言的检测',
            'advantage3': '实时分析：平均响应时间低于300ms',
            'papers_title': '相关论文',
            'paper1': '"基于集成学习的AI生成文本精准检测探究" (CCKS2025)',
            'paper2': '"基于AI生成文本的数据挖掘与分析" (CCKS2025)',
            'achievements_title': '比赛成果',
            'achievement1': '阿里云天池大数据竞赛CCKS2025-大模型生成文本检测 Top10',
            'achievement2': '中科院CCKS2025学术会议论文集',
            'detect_btn': '立即检测',
            'principles_btn': '检测原理',
            'submit_btn': '发送检测',
            'file_upload': '或拖放文件到此处',
            'input_placeholder': '输入待检测文本...',
            'team_title': '研究团队',
            'team_member1_name': '王彦祺 (Andy Yanqi Wang)',
            'team_member1_desc': '中国大陆籍，TextHospital创始人，毕业于安徽财经大学，自动化系统优化工程师，人工智能工程师，研究方向：数据科学，机器学习与深度学习，自然语言处理',
            'team_member2_name': '李宇航 (Yvhang Lee)',
            'team_member2_desc': '中国台湾籍，TextHospital创始人，现就读于北京交通大学，硕士研究生，研究方向：运筹学与优化分析，系统工程，交通工程',
            'team_member3_name': '武明佳 (Mingjia Wu)',
            'team_member3_desc': '中国大陆籍，TextHospital创始人，毕业于安徽财经大学，数据分析师，研究方向：企业管理，管理统计与计量经济'
        },
        'zh-TW': {
            'view_details':'查看詳情',
            'principles_title': '技術原理詳解',
            'tech_title': '基於NLP的AI文本檢測技術',
            'tech_content': 'TextHospital採用先進的自然語言處理(NLP)技術來檢測AI生成的文本內容。我們的系統通過分析文本的多維度特徵，能夠準確識別由GPT、Claude等大型語言模型生成的文本。',
            'core_methods': '核心檢測方法',
            'method1': '詞頻統計分析：AI生成的文本在詞頻分佈上與人類寫作存在顯著差異',
            'method2': '語義連貫性檢測：評估文本在長距離依賴關係上的連貫程度',
            'method3': '句法模式識別：分析句子結構的複雜性和多樣性',
            'method4': '風格一致性檢測：檢測文本在不同段落間的風格變化',
            'model_architecture': '模型架構',
            'architecture1': '基於Transformer的特徵提取器',
            'architecture2': '多層感知機分類器',
            'architecture3': '集成學習框架提升魯棒性',
            'tech_advantages': '技術優勢',
            'advantage1': '高準確率：在公開測試集上達到98.7%的準確率',
            'advantage2': '多語言支持：支持中英文及多種主流語言的檢測',
            'advantage3': '實時分析：平均響應時間低於300ms',
            'papers_title': '相關論文',
            'paper1': '"基於集成學習的AI生成文本精準檢測探究" (CCKS2025)',
            'paper2': '"基於AI生成文本的數據挖掘與分析" (CCKS2025)',
            'achievements_title': '比賽成果',
            'achievement1': '阿里云天池大數據競賽CCKS2025-大模型生成文本檢測 Top10',
            'achievement2': '中科院CCKS2025學術會議論文集',
            'detect_btn': '立即檢測',
            'principles_btn': '檢測原理',
            'submit_btn': '發送檢測',
            'file_upload': '或拖放文件到此處',
            'input_placeholder': '輸入待檢測文本...',
            'team_title': '研究團隊',
            'team_member1_name': '王彥祺 (Andy Yanqi Wang)',
            'team_member1_desc': '中國大陸籍，TextHospital創始人，畢業於安徽財經大學，自動化系統優化工程師，人工智能工程師，研究方向：數據科學，機器學習與深度學習，自然語言處理',
            'team_member2_name': '李宇航 (Yvhang Lee)',
            'team_member2_desc': '中國台灣籍，TextHospital創始人，現就讀於北京交通大學，碩士研究生，研究方向：運籌學與優化分析，系統工程，交通工程',
            'team_member3_name': '武明佳 (Mingjia Wu)',
            'team_member3_desc': '中國大陸籍，TextHospital創始人，畢業於安徽財經大學，數據分析師，研究方向：企業管理，管理統計與計量經濟'
        },
        'en': {
            'view_details':'View Details',
            'principles_title': 'Technical Principles Details',
            'tech_title': 'NLP-based AI Text Detection Technology',
            'tech_content': 'TextHospital employs advanced Natural Language Processing (NLP) techniques to detect AI-generated text content. Our system analyzes multiple dimensions of text features to accurately identify content generated by large language models like GPT and Claude.',
            'core_methods': 'Core Detection Methods',
            'method1': 'Word Frequency Analysis: AI-generated text shows distinct patterns in word frequency distribution compared to human writing',
            'method2': 'Semantic Coherence Detection: Evaluates long-range dependency coherence in text',
            'method3': 'Syntactic Pattern Recognition: Analyzes sentence structure complexity and diversity',
            'method4': 'Style Consistency Detection: Identifies style variations across different text segments',
            'model_architecture': 'Model Architecture',
            'architecture1': 'Transformer-based feature extractor',
            'architecture2': 'Multi-layer perceptron classifier',
            'architecture3': 'Ensemble learning framework for robustness',
            'tech_advantages': 'Technical Advantages',
            'advantage1': 'High Accuracy: Achieves 98.7% accuracy on public test sets',
            'advantage2': 'Multilingual Support: Detects text in Chinese, English and other major languages',
            'advantage3': 'Real-time Analysis: Average response time under 300ms',
            'papers_title': 'Related Papers',
            'paper1': '"Precision Detection of AI-Generated Text Using Ensemble Learning" (CCKS2025)',
            'paper2': '"Data Mining and Analysis of AI-Generated Text" (CCKS2025)',
            'achievements_title': 'Competition Achievements',
            'achievement1': 'Top10 in Alibaba Tianchi Big Data Competition CCKS2025 - LLM Generated Text Detection',
            'achievement2': 'Published in CCKS2025 Academic Conference Proceedings',
            'detect_btn': 'Detect Now',
            'principles_btn': 'Principles',
            'submit_btn': 'Submit',
            'file_upload': 'or drag and drop file here',
            'input_placeholder': 'Enter text to analyze...',
            'team_title': 'Research Team',
            'team_member1_name': 'Yanqi Wang (Andy)',
            'team_member1_desc': 'Chinese, Founder of TextHospital, graduated from Anhui University of Finance and Economics, Automation System Optimization Engineer, AI Engineer. Research areas: Data Science, Machine Learning & Deep Learning, Natural Language Processing',
            'team_member2_name': 'Yuhang Lee',
            'team_member2_desc': 'Taiwanese, Founder of TextHospital, currently studying at Beijing Jiaotong University (Master\'s degree). Research areas: Operations Research & Optimization Analysis, Systems Engineering, Transportation Engineering',
            'team_member3_name': 'Mingjia Wu',
            'team_member3_desc': 'Chinese, Founder of TextHospital, graduated from Anhui University of Finance and Economics, Data Analyst. Research areas: Business Management, Managerial Statistics & Econometrics'
        },
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
            localStorage.setItem('preferredLanguage', currentLang);
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateTranslations();
        });
    });

    // Load preferred language from localStorage
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang) {
        currentLang = savedLang;
        document.querySelector(`.lang-btn[data-lang="${savedLang}"]`).classList.add('active');
        document.querySelector(`.lang-btn[data-lang="zh-CN"]`).classList.remove('active');
    }

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
