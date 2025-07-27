document.addEventListener('DOMContentLoaded', function() {
    // 语言切换功能
    const translations = {
        'zh-CN': {
            // 语言名称
            'language_name': '简体中文',
            // 导航栏
            'nav_features': '主要特性',
            'nav_principles': '技术原理',
            'nav_team': '研究团队',
            
            // 英雄区域
            'hero_subtitle': '专业的AI文本检测工具',
            'hero_description': '基于先进的NLP技术，为您提供高精度的AI生成文本检测服务',
            'download_btn': '下载应用',
            'principles_btn': '检测原理',
            'detect_btn': '立即检测',
            
            // 文本检测区域
            'input_placeholder': '输入待检测文本...',
            'file_upload': '或拖放文件到此处',
            'submit_btn': '发送检测',
            
            // 特性区域
            'features_title': '主要特性',
            'feature1_title': '高精度检测',
            'feature1_desc': '采用先进的NLP技术，检测准确率高达95%以上',
            'feature2_title': '快速分析',
            'feature2_desc': '秒级响应，快速分析长文本内容',
            'feature3_title': '隐私保护',
            'feature3_desc': '本地处理文本，保护您的数据隐私',
            'feature4_title': '详细报告',
            'feature4_desc': '提供详细的分析报告和可视化结果',
            
            // 下载区域
            'download_title': '下载应用',
            'download_desc': '在您的设备上体验TextHospital的强大功能',
            'windows_title': 'Windows 版(敬请期待)',
            'windows_desc': '适用于 Windows 10/11 系统',
            'windows_btn': '下载 Windows 版',
            'mobile_title': '移动应用',
            'mobile_desc': '适用于 iOS 和 Android 设备',
            'ios_btn': 'iOS 版',
            'android_btn': 'Android 版',
            
            // 原理区域
            'principles_title': '检测原理',
            'tech_title': '技术原理',
            'tech_content': '我们采用TF-IDF特征提取结合数据增强与对抗训练的方法，集成多种机器学习模型，并通过深度学习模型分析文本的统计特征和语义模式，以更鲁棒地识别AI生成内容...',
            'papers_title': '相关论文',
            'paper1': '"基于Bagging与对抗训练的AI生成文本精准检测探究" (CCKS2025)',
            'paper2': '"基于AI生成文本的数据挖掘与分析" (CCKS2025)',
            'achievements_title': '比赛成果',
            'achievement1': '阿里云天池大数据竞赛CCKS2025-大模型生成文本检测 71/1093',
            'achievement2': '中科院CCKS2025学术会议论文集',
            'view_details': '查看详情',
            
            // 团队区域
            'team_title': '研究团队',
            'team_member1_name': '王彦祺 (Andy Yanqi Wang)',
            'team_member1_desc': '毕业于安徽财经大学，中国银联自动化系统优化工程师，人工智能工程师，研究方向：数据科学，机器学习与深度学习，自然语言处理',
            'team_member2_name': '李宇航 (Yvhang Lee)',
            'team_member2_desc': '北京交通大学硕士研究生，研究方向：运筹学与优化分析，系统科学与系统工程',
            'team_member3_name': '武明佳 (Mingjia Wu)',
            'team_member3_desc': '毕业于安徽财经大学，追觅科技数据分析师，研究方向：企业管理，管理统计与计量经济'
        },
        'zh-TW': {
        'language_name': '繁體中文',
            'nav_features': '主要特性',
            'nav_principles': '技術原理',
            'nav_team': '研究團隊',
            'hero_subtitle': '專業的AI文本檢測工具',
            'hero_description': '基於先進的NLP技術，為您提供高精度的AI生成文本檢測服務',
            'download_btn': '下載應用',
            'principles_btn': '檢測原理',
            'detect_btn': '立即檢測',
            'input_placeholder': '輸入待檢測文本...',
            'file_upload': '或拖放文件到此處',
            'submit_btn': '發送檢測',
            'features_title': '主要特性',
            'feature1_title': '高精度檢測',
            'feature1_desc': '採用先進的NLP技術，檢測準確率高達95%以上',
            'feature2_title': '快速分析',
            'feature2_desc': '秒級響應，快速分析長文本內容',
            'feature3_title': '隱私保護',
            'feature3_desc': '本地處理文本，保護您的數據隱私',
            'feature4_title': '詳細報告',
            'feature4_desc': '提供詳細的分析報告和可視化結果',
            'download_title': '下載應用',
            'download_desc': '在您的設備上體驗TextHospital的強大功能',
            'windows_title': 'Windows 版(敬請期待)',
            'windows_desc': '適用於 Windows 10/11 系統',
            'windows_btn': '下載 Windows 版',
            'mobile_title': '移動應用',
            'mobile_desc': '適用於 iOS 和 Android 設備',
            'ios_btn': 'iOS 版',
            'android_btn': 'Android 版',
            'principles_title': '檢測原理',
            'tech_title': '技術原理',
            'tech_content': '我們採用TF-IDF特徵提取結合數據增強與對抗訓練的方法，集成多種機器學習模型，並通過深度學習模型分析文本的統計特徵和語義模式，以更魯棒地識別AI生成內容...',
            'papers_title': '相關論文',
            'paper1': '「基於Bagging與對抗訓練的AI生成文本精準檢測探究」 (CCKS2025)',
            'paper2': '「基於AI生成文本的數據挖掘與分析」 (CCKS2025)',
            'achievements_title': '比賽成果',
            'achievement1': '阿里雲天池大數據競賽CCKS2025-大模型生成文本檢測 71/1093',
            'achievement2': '中科院CCKS2025學術會議論文集',
            'view_details': '查看詳情',
            'team_title': '研究團隊',
            'team_member1_name': '王彥祺 (Andy Yanqi Wang)',
            'team_member1_desc': '畢業於安徽財經大學，中國銀聯自動化系統優化工程師，人工智能工程師，研究方向：數據科學，機器學習與深度學習，自然語言處理',
            'team_member2_name': '李宇航 (Yvhang Lee)',
            'team_member2_desc': '北京交通大學碩士研究生，研究方向：運籌學與優化分析，系統科學與系統工程',
            'team_member3_name': '武明佳 (Mingjia Wu)',
            'team_member3_desc': '畢業於安徽財經大學，追覓科技數據分析師，研究方向：企業管理，管理統計與計量經濟'
        },
        'en': {
            'language_name': 'English',
            'nav_features': 'Features',
            'nav_principles': 'Technology',
            'nav_team': 'Research Team',
            'hero_subtitle': 'Professional AI Text Detection Tool',
            'hero_description': 'Advanced NLP-based high-precision AI-generated text detection service',
            'download_btn': 'Download',
            'principles_btn': 'Technology',
            'detect_btn': 'Detect Now',
            'input_placeholder': 'Enter text to analyze...',
            'file_upload': 'Or drag and drop file here',
            'submit_btn': 'Submit',
            'features_title': 'Key Features',
            'feature1_title': 'High Accuracy',
            'feature1_desc': '95%+ detection accuracy with advanced NLP technology',
            'feature2_title': 'Fast Analysis',
            'feature2_desc': 'Second-level response for long text processing',
            'feature3_title': 'Privacy Protection',
            'feature3_desc': 'Local text processing ensures data privacy',
            'feature4_title': 'Detailed Reports',
            'feature4_desc': 'Comprehensive analysis reports with visualization',
            'download_title': 'Download',
            'download_desc': 'Experience TextHospital on your devices',
            'windows_title': 'Windows (Coming Soon)',
            'windows_desc': 'For Windows 10/11 systems',
            'windows_btn': 'Download for Windows',
            'mobile_title': 'Mobile Apps',
            'mobile_desc': 'For iOS and Android devices',
            'ios_btn': 'iOS',
            'android_btn': 'Android',
            'principles_title': 'Technology',
            'tech_title': 'Technical Principles',
            'tech_content': 'We employ TF-IDF feature extraction with data augmentation and adversarial training, integrating multiple machine learning models to analyze statistical features and semantic patterns through deep learning for robust AI-generated content identification...',
            'papers_title': 'Research Papers',
            'paper1': '"Bagging with Adversarial Training for Precise AI Text Detection" (CCKS2025)',
            'paper2': '"Data Mining and Analysis of AI-Generated Text" (CCKS2025)',
            'achievements_title': 'Achievements',
            'achievement1': 'Alibaba Tianchi CCKS2025 Competition: 71/1093 in LLM Text Detection',
            'achievement2': 'Published in CCKS2025 Academic Conference Proceedings',
            'view_details': 'View Details',
            'team_title': 'Research Team',
            'team_member1_name': 'Yanqi Wang (Andy)',
            'team_member1_desc': 'Anhui University of Finance and Economics graduate, AI Engineer at China UnionPay specializing in data science, machine learning and NLP',
            'team_member2_name': 'Yuhang Lee',
            'team_member2_desc': 'Beijing Jiaotong University MS candidate, research focus: operations research and systems engineering',
            'team_member3_name': 'Mingjia Wu',
            'team_member3_desc': 'Anhui University of Finance and Economics graduate, Data Analyst at Dreame Technology specializing in business statistics'
                },
        'fr': {
            'language_name': 'Français',
            'nav_features': 'Fonctionnalités',
            'nav_principles': 'Technologie',
            'nav_team': 'Équipe',
            'hero_subtitle': 'Outil professionnel de détection de texte IA',
            'hero_description': 'Service de détection de texte généré par IA haute précision basé sur des technologies NLP avancées',
            'download_btn': 'Télécharger',
            'principles_btn': 'Technologie',
            'detect_btn': 'Détecter maintenant',
            'input_placeholder': 'Saisissez le texte à analyser...',
            'file_upload': 'Ou glissez-déposez un fichier ici',
            'submit_btn': 'Envoyer',
            'features_title': 'Fonctionnalités principales',
            'feature1_title': 'Haute précision',
            'feature1_desc': 'Précision de détection >95% grâce à la technologie NLP avancée',
            'feature2_title': 'Analyse rapide',
            'feature2_desc': 'Temps de réponse en secondes même pour les longs textes',
            'feature3_title': 'Protection de la vie privée',
            'feature3_desc': 'Traitement local pour protéger vos données',
            'feature4_title': 'Rapports détaillés',
            'feature4_desc': 'Rapports d\'analyse complets avec visualisation',
            'download_title': 'Téléchargement',
            'download_desc': 'Découvrez TextHospital sur vos appareils',
            'windows_title': 'Windows (Prochainement)',
            'windows_desc': 'Pour Windows 10/11',
            'windows_btn': 'Télécharger pour Windows',
            'mobile_title': 'Applications mobiles',
            'mobile_desc': 'Pour iOS et Android',
            'ios_btn': 'iOS',
            'android_btn': 'Android',
            'principles_title': 'Technologie',
            'tech_title': 'Principes techniques',
            'tech_content': 'Nous utilisons l\'extraction de caractéristiques TF-IDF avec augmentation de données et entraînement adversarial, combinant plusieurs modèles de machine learning pour analyser les caractéristiques statistiques et les motifs sémantiques via le deep learning afin d\'identifier robustement le contenu généré par IA...',
            'papers_title': 'Publications',
            'paper1': '"Détection précise de texte IA par Bagging et entraînement adversarial" (CCKS2025)',
            'paper2': '"Fouille de données et analyse des textes générés par IA" (CCKS2025)',
            'achievements_title': 'Réalisations',
            'achievement1': 'Concours Alibaba Tianchi CCKS2025 : 71/1093 en détection de texte LLM',
            'achievement2': 'Publié dans les actes de la conférence CCKS2025',
            'view_details': 'Voir détails',
            'team_title': 'Équipe de recherche',
            'team_member1_name': 'Yanqi Wang (Andy)',
            'team_member1_desc': 'Diplômé de l\'Université de Finance et d\'Économie d\'Anhui, ingénieur IA chez China UnionPay spécialisé en science des données, machine learning et NLP',
            'team_member2_name': 'Yuhang Lee',
            'team_member2_desc': 'Étudiant en master à l\'Université Jiaotong de Beijing, spécialisé en recherche opérationnelle et ingénierie des systèmes',
            'team_member3_name': 'Mingjia Wu',
            'team_member3_desc': 'Diplômé de l\'Université de Finance et d\'Économie d\'Anhui, analyste de données chez Dreame Technology spécialisé en statistiques commerciales'
        },
        'es': {
            'language_name': 'Español',
            'nav_features': 'Características',
            'nav_principles': 'Tecnología',
            'nav_team': 'Equipo',
            'hero_subtitle': 'Herramienta profesional de detección de texto IA',
            'hero_description': 'Servicio de alta precisión para detectar texto generado por IA con tecnología NLP avanzada',
            'download_btn': 'Descargar',
            'principles_btn': 'Tecnología',
            'detect_btn': 'Detectar ahora',
            'input_placeholder': 'Ingrese texto para analizar...',
            'file_upload': 'O arrastre archivo aquí',
            'submit_btn': 'Enviar',
            'features_title': 'Características principales',
            'feature1_title': 'Alta precisión',
            'feature1_desc': 'Precisión de detección >95% con tecnología NLP avanzada',
            'feature2_title': 'Análisis rápido',
            'feature2_desc': 'Respuesta en segundos incluso para textos largos',
            'feature3_title': 'Protección de privacidad',
            'feature3_desc': 'Procesamiento local protege tus datos',
            'feature4_title': 'Informes detallados',
            'feature4_desc': 'Informes de análisis completos con visualización',
            'download_title': 'Descargas',
            'download_desc': 'Experimenta TextHospital en tus dispositivos',
            'windows_title': 'Windows (Próximamente)',
            'windows_desc': 'Para Windows 10/11',
            'windows_btn': 'Descargar para Windows',
            'mobile_title': 'Aplicaciones móviles',
            'mobile_desc': 'Para iOS y Android',
            'ios_btn': 'iOS',
            'android_btn': 'Android',
            'principles_title': 'Tecnología',
            'tech_title': 'Principios técnicos',
            'tech_content': 'Utilizamos extracción de características TF-IDF con aumento de datos y entrenamiento adversarial, combinando múltiples modelos de machine learning para analizar características estadísticas y patrones semánticos mediante deep learning para identificación robusta de contenido generado por IA...',
            'papers_title': 'Publicaciones',
            'paper1': '"Detección precisa de texto IA mediante Bagging y entrenamiento adversarial" (CCKS2025)',
            'paper2': '"Minería de datos y análisis de texto generado por IA" (CCKS2025)',
            'achievements_title': 'Logros',
            'achievement1': 'Competencia Alibaba Tianchi CCKS2025: puesto 71/1093 en detección de texto LLM',
            'achievement2': 'Publicado en actas de conferencia CCKS2025',
            'view_details': 'Ver detalles',
            'team_title': 'Equipo de investigación',
            'team_member1_name': 'Yanqi Wang (Andy)',
            'team_member1_desc': 'Graduado de la Universidad de Finanzas y Economía de Anhui, ingeniero de IA en China UnionPay especializado en ciencia de datos, machine learning y NLP',
            'team_member2_name': 'Yuhang Lee',
            'team_member2_desc': 'Estudiante de maestría en la Universidad Jiaotong de Beijing, especializado en investigación de operaciones e ingeniería de sistemas',
            'team_member3_name': 'Mingjia Wu',
            'team_member3_desc': 'Graduado de la Universidad de Finanzas y Economía de Anhui, analista de datos en Dreame Technology especializado en estadísticas comerciales'
        },
        'de': {
            'language_name': 'Deutsch',
            'nav_features': 'Funktionen',
            'nav_principles': 'Technologie',
            'nav_team': 'Forschungsteam',
            'hero_subtitle': 'Professionelles KI-Texterkennungstool',
            'hero_description': 'Hochpräziser Dienst zur Erkennung von KI-generierten Texten mit fortschrittlicher NLP-Technologie',
            'download_btn': 'Herunterladen',
            'principles_btn': 'Technologie',
            'detect_btn': 'Jetzt erkennen',
            'input_placeholder': 'Text zur Analyse eingeben...',
            'file_upload': 'Oder Datei hier ablegen',
            'submit_btn': 'Absenden',
            'features_title': 'Hauptfunktionen',
            'feature1_title': 'Hohe Genauigkeit',
            'feature1_desc': 'Erkennungsgenauigkeit >95% mit modernster NLP-Technologie',
            'feature2_title': 'Schnelle Analyse',
            'feature2_desc': 'Reaktionszeit in Sekunden auch für lange Texte',
            'feature3_title': 'Datenschutz',
            'feature3_desc': 'Lokale Textverarbeitung schützt Ihre Daten',
            'feature4_title': 'Detaillierte Berichte',
            'feature4_desc': 'Umfassende Analyseberichte mit Visualisierung',
            'download_title': 'Download',
            'download_desc': 'Erleben Sie TextHospital auf Ihren Geräten',
            'windows_title': 'Windows (Demnächst)',
            'windows_desc': 'Für Windows 10/11',
            'windows_btn': 'Für Windows herunterladen',
            'mobile_title': 'Mobile Apps',
            'mobile_desc': 'Für iOS und Android',
            'ios_btn': 'iOS',
            'android_btn': 'Android',
            'principles_title': 'Technologie',
            'tech_title': 'Technische Prinzipien',
            'tech_content': 'Wir verwenden TF-IDF-Merkmalextraktion mit Datenverstärkung und adversariellem Training, kombinieren mehrere Machine-Learning-Modelle zur Analyse statistischer Merkmale und semantischer Muster mittels Deep Learning für robuste Erkennung von KI-generierten Inhalten...',
            'papers_title': 'Forschungsarbeiten',
            'paper1': '"Präzise KI-Texterkennung durch Bagging und adversarielles Training" (CCKS2025)',
            'paper2': '"Data Mining und Analyse von KI-generierten Texten" (CCKS2025)',
            'achievements_title': 'Erfolge',
            'achievement1': 'Alibaba Tianchi CCKS2025 Wettbewerb: Platz 71/1093 in LLM-Texterkennung',
            'achievement2': 'Veröffentlicht in den CCKS2025 Konferenzakten',
            'view_details': 'Details anzeigen',
            'team_title': 'Forschungsteam',
            'team_member1_name': 'Yanqi Wang (Andy)',
            'team_member1_desc': 'Absolvent der Anhui University of Finance and Economics, KI-Ingenieur bei China UnionPay mit Spezialisierung auf Data Science, Machine Learning und NLP',
            'team_member2_name': 'Yuhang Lee',
            'team_member2_desc': 'Masterstudent an der Beijing Jiaotong University, Forschungsschwerpunkt: Operations Research und Systemtechnik',
            'team_member3_name': 'Mingjia Wu',
            'team_member3_desc': 'Absolvent der Anhui University of Finance and Economics, Datenanalyst bei Dreame Technology mit Spezialisierung auf Wirtschaftsstatistik'
        },
        'ko': {
            'language_name': '한국어',
            'nav_features': '주요 기능',
            'nav_principles': '기술 원리',
            'nav_team': '연구 팀',
            'hero_subtitle': '전문 AI 텍스트 감지 도구',
            'hero_description': '고급 NLP 기술 기반의 고정밀 AI 생성 텍스트 감지 서비스',
            'download_btn': '다운로드',
            'principles_btn': '기술 원리',
            'detect_btn': '지금 감지',
            'input_placeholder': '분석할 텍스트 입력...',
            'file_upload': '또는 파일을 여기에 드롭',
            'submit_btn': '제출',
            'features_title': '주요 기능',
            'feature1_title': '고정밀 감지',
            'feature1_desc': '고급 NLP 기술로 95% 이상의 감지 정확도',
            'feature2_title': '빠른 분석',
            'feature2_desc': '긴 텍스트도 초 단위 처리',
            'feature3_title': '개인정보 보호',
            'feature3_desc': '로컬 처리로 데이터 보호',
            'feature4_title': '상세 보고서',
            'feature4_desc': '시각화 포함한 종합 분석 보고서',
            'download_title': '다운로드',
            'download_desc': 'TextHospital을 기기에서 경험해보세요',
            'windows_title': 'Windows 버전(출시 예정)',
            'windows_desc': 'Windows 10/11 지원',
            'windows_btn': 'Windows 버전 다운로드',
            'mobile_title': '모바일 앱',
            'mobile_desc': 'iOS 및 Android 지원',
            'ios_btn': 'iOS 버전',
            'android_btn': 'Android 버전',
            'principles_title': '감지 원리',
            'tech_title': '기술 원리',
            'tech_content': 'TF-IDF 특징 추출과 데이터 증강, 적대적 훈련을 결합하여 여러 머신러닝 모델을 통합하고 딥러닝으로 통계적 특징과 의미적 패턴을 분석해 AI 생성 콘텐츠를 강건하게 식별...',
            'papers_title': '관련 논문',
            'paper1': '"배깅과 적대적 훈련 기반 AI 생성 텍스트 정밀 감지 연구" (CCKS2025)',
            'paper2': '"AI 생성 텍스트의 데이터 마이닝 및 분석" (CCKS2025)',
            'achievements_title': '경쟁 실적',
            'achievement1': '알리바바 Tianchi CCKS2025 대회: LLM 텍스트 감지 71위/1093',
            'achievement2': 'CCKS2025 학술 회의 논문집 게재',
            'view_details': '자세히 보기',
            'team_title': '연구 팀',
            'team_member1_name': '왕옌치 (Andy Yanqi Wang)',
            'team_member1_desc': '안후이 재경대학 졸업, 중국 UnionPay AI 엔지니어, 전공: 데이터 과학, 머신러닝, 자연어 처리',
            'team_member2_name': '리위항 (Yvhang Lee)',
            'team_member2_desc': '베이징 교통대학 석사 과정, 전공: 운영 연구, 시스템 공학',
            'team_member3_name': '우밍지아 (Mingjia Wu)',
            'team_member3_desc': '안후이 재경대학 졸업, Dreame Technology 데이터 분석가, 전공: 경영 통계'
        },
        'ja': {
            'language_name': '日本語',
            'nav_features': '主な機能',
            'nav_principles': '技術原理',
            'nav_team': '研究チーム',
            'hero_subtitle': 'プロフェッショナルAIテキスト検出ツール',
            'hero_description': '先進的なNLP技術に基づく高精度なAI生成テキスト検出サービス',
            'download_btn': 'ダウンロード',
            'principles_btn': '技術原理',
            'detect_btn': '今すぐ検出',
            'input_placeholder': '分析するテキストを入力...',
            'file_upload': 'またはファイルをここにドラッグ',
            'submit_btn': '送信',
            'features_title': '主な機能',
            'feature1_title': '高精度検出',
            'feature1_desc': '先進NLP技術で検出精度95%以上',
            'feature2_title': '高速分析',
            'feature2_desc': '長文でも秒単位で処理',
            'feature3_title': 'プライバシー保護',
            'feature3_desc': 'ローカル処理でデータ保護',
            'feature4_title': '詳細レポート',
            'feature4_desc': '可視化付き詳細分析レポート',
            'download_title': 'ダウンロード',
            'download_desc': 'TextHospitalをお使いのデバイスで',
            'windows_title': 'Windows版(近日公開)',
            'windows_desc': 'Windows 10/11対応',
            'windows_btn': 'Windows版ダウンロード',
            'mobile_title': 'モバイルアプリ',
            'mobile_desc': 'iOSとAndroid対応',
            'ios_btn': 'iOS版',
            'android_btn': 'Android版',
            'principles_title': '検出原理',
            'tech_title': '技術原理',
            'tech_content': 'TF-IDF特徴量抽出とデータ拡張、敵対的訓練を組み合わせ、複数の機械学習モデルを統合し、深層学習による統計的特徴と意味的パターン分析でAI生成コンテンツを頑健に識別...',
            'papers_title': '関連論文',
            'paper1': '「バギングと敵対的訓練に基づくAI生成テキスト高精度検出」(CCKS2025)',
            'paper2': '「AI生成テキストのデータマイニングと分析」(CCKS2025)',
            'achievements_title': '競賽実績',
            'achievement1': 'Alibaba Tianchi CCKS2025競賽: LLMテキスト検出71位/1093',
            'achievement2': 'CCKS2025学術会議論文集掲載',
            'view_details': '詳細を見る',
            'team_title': '研究チーム',
            'team_member1_name': '王彦祺 (Andy Yanqi Wang)',
            'team_member1_desc': '安徽財経大学卒、中国銀聯AIエンジニア、専門: データサイエンス、機械学習、自然言語処理',
            'team_member2_name': '李宇航 (Yvhang Lee)',
            'team_member2_desc': '北京交通大学大学院生、専門: オペレーションズリサーチ、システム工学',
            'team_member3_name': '武明佳 (Mingjia Wu)',
            'team_member3_desc': '安徽財経大学卒、Dreame Technologyデータアナリスト、専門: 経営統計'
         }
    };

    // 设置当前语言
    let currentLang = 'zh-CN';
    
    // 语言名称映射
    const languageNames = {
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        'en': 'English',
        'fr': 'Français',
        'es': 'Español',
        'de': 'Deutsch',
        'ko': '한국어',
        'ja': '日本語'
    };

    // 语言切换下拉菜单
    const langDropdown = document.querySelector('.lang-dropdown');
    const langDropdownBtn = document.querySelector('.lang-dropdown-btn');
    const langOptions = document.querySelectorAll('.lang-option');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // 点击下拉按钮时显示/隐藏下拉内容
    if (langDropdownBtn) {
        langDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('active');
        });
    }
    
    // 点击页面其他地方时隐藏下拉内容
    document.addEventListener('click', function() {
        if (langDropdown) {
            langDropdown.classList.remove('active');
        }
    });
    
    // 语言选项点击事件
    langOptions.forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            setLanguage(lang);
            
            // 更新按钮状态
            langOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
            
            // 更新当前显示的语言
            if (currentLangSpan) {
                currentLangSpan.textContent = languageNames[lang] || lang;
            }
            
            // 隐藏下拉菜单
            langDropdown.classList.remove('active');
        });
    });

    // 设置语言函数
    function setLanguage(lang) {
        currentLang = lang;
        
        // 更新所有需要翻译的元素
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // 保存语言选择到本地存储
        localStorage.setItem('preferredLanguage', lang);
    }

    // 从本地存储加载语言偏好
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        setLanguage(savedLang);
        
        // 更新按钮状态
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    } else {
        // 默认语言
        setLanguage(currentLang);
    }

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});