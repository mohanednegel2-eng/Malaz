const dailyAyahs = [
    { text: "﴿أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ﴾", surah: "سورة الرعد - 28" },
    { text: "﴿وَاصْبِرْ لِحُكْمِ رَبِّكَ فَإِنَّكَ بِأَعْيُنِنَا﴾", surah: "سورة الطور - 48" },
    { text: "﴿لَا تَدْرِي لَعَلَّ اللَّهَ يُحْدِثُ بَعْدَ ذَٰلِكَ أَمْرًا﴾", surah: "سورة الطلاق - 1" },
    { text: "﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ﴾", surah: "سورة الضحى - 5" },
    { text: "﴿قَالَ لَا تَخَافَا ۖ إِنَّنِي مَعَكُمَا أَسْمَعُ وَأَرَىٰ﴾", surah: "سورة طه - 46" },
    { text: "﴿فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا﴾", surah: "سورة الشرح - 5-6" }
];

const plainSurahNames = [
    "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
    "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
    "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
    "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
    "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
    "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
    "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
    "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
    "التكوير", "الانفطار", "المطففين", "الانشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
    "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
    "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
    "المسد", "الإخلاص", "الفلق", "الناس"
];

const recitersServers = {
    minshawi: "https://server10.mp3quran.net/minsh/",
    abdulbasit: "https://server7.mp3quran.net/basit/",
    muaiqly: "https://server12.mp3quran.net/maher/",
    dossari: "https://server11.mp3quran.net/yasser/",
    afasy: "https://server8.mp3quran.net/afs/"
};

let allSurahs = [];
let currentSurahNumber = 1;

// موسوعة الأحاديث النبوية الصحيحة الجامعة
const authenticHadiths = [
    {
        theme: "الصبر وجزاء البلاء والرضا بقضاء الله",
        text: "«عَجَبًا لأَمْرِ المُؤْمِنِ، إنَّ أمْرَهُ كُلَّهُ خَيْرٌ، وليسَ ذاكَ لأَحَدٍ إلَّا لِلْمُؤْمِنِ، إنْ أصابَتْهُ سَرَّاءُ شَكَرَ، فَكانَ خَيْرًا له، وإنْ أصابَتْهُ ضَرَّاءُ، صَبَرَ فَكانَ خَيْرًا له»",
        tafsir: "يوضح النبي ﷺ حال المؤمن الراسخ؛ أنه دائم التقلب بين مقامي الشكر عند النعمة والصبر عند البلاء، فهو في كلتا الحالتين في ربح دائم وأجر مستمر، ولا ييأس أبداً من حكمة الله وتدبيره.",
        source: "صحيح مسلم - عن صهيب بن سنان"
    },
    {
        theme: "تكفير الهموم والآلام النفسية والجسدية",
        text: "«مَا يُصِيبُ الْمُسْلِمَ مِنْ نَصَبٍ وَلاَ وَصَبٍ وَلاَ هَمٍّ وَلاَ حُزْنٍ وَلاَ أَذًى وَلاَ غَمٍّ، حَتَّى الشَّوْكَةِ يُشَاكُهَا، إِلاَّ كَفَّرَ اللَّهُ بِهَا مِنْ خَطَايَاهُ»",
        tafsir: "تسلية وبشارة لكل من أصابه ضيق أو إرهاق أو وجع في قلبه؛ أن كل ألم يعتصر الصدر أو ثقل يمر به المسلم ليس ضائعاً، بل يطهره الله به من الذنوب والخطايا ويرفع به درجته.",
        source: "صحيح البخاري ومسلم - عن أبي سعيد وأبي هريرة"
    },
    {
        theme: "التوكل واليقين التام بمعية الله وحفظه",
        text: "«يَا غُلَامُ إِنِّي أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللَّهَ يَحْفَظْكَ، احْفَظِ اللَّهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللَّهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللَّهِ، وَاعْلَمْ أَنَّ الأُمَّةَ لَوْ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوكَ بِشَيْءٍ لَمْ يَنْفَعُوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ لَكَ، وَلَوْ اجْتَمَعُوا عَلَى أَنْ يَضُرُّوكَ بِشَيْءٍ لَمْ يَضُرُّوكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللَّهُ عَلَيْكَ، رُفِعَتِ الأَقْلامُ وَجَفَّتِ الصُّحُفُ»",
        tafsir: "قاعدة الإيمان الكبرى في تحرير القلب من الخوف والتعلق بالبشر؛ فحفظ حدود الله يثمر معية الله وعنايته، واليقين بأن النفع والضر مقدر بيد الخالق وحده يملأ النفس هيبة وسكينة وسلاماً.",
        source: "سنن الترمذي (صحيح) - عن عبد الله بن عباس"
    },
    {
        theme: "سعة مغفرة الله وقبول التائبين",
        text: "«قَالَ اللَّهُ تَبَارَكَ وَتَعَالَى: يَا ابْنَ آدَمَ إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ فِيكَ وَلَا أُبَالِي، يَا ابْنَ آدَمَ لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتَنِي غَفَرْتُ لَكَ وَلَا أُبَالِي، يَا ابْنَ آدَمَ إِنَّكَ لَوْ أَتَيْتَنِي بِقُرَابِ الأَرْضِ خَطَايَا ثُمَّ لَقِيتَنِي لَا تُشْرِكُ بِي شَيْئًا لَأَتَيْتُكَ بِقُرَابِهَا مَغْفِرَةً»",
        tafsir: "حديث قدسي يفتح باب الرجاء والأمل لكل مقصر أو مذنب؛ فمهما عظمت الذنوب وكثرت، فإن عفو الله أوسع ومغفرته أعظم، ما دام العبد صادق اللجوء لا يشرك بربه أحداً.",
        source: "سنن الترمذي (حسن صحيح) - عن أنس بن مالك"
    },
    {
        theme: "حسن الظن بالله ومعيته للعبد",
        text: "«يَقُولُ اللَّهُ تَعَالَى: أَنَا عِنْدَ ظَنِّ عَبْدِي بِي، وَأَنَا مَعَهُ إِذَا ذَكَرَنِي، فَإِنْ ذَكَرَنِي فِي نَفْسِهِ ذَكَرْتُهُ فِي نَفْسِي، وَإِنْ ذَكَرَنِي فِي مَلَإٍ ذَكَرْتُهُ فِي مَلَإٍ خَيْرٍ مِنْهُمْ، وَإِنْ تَقَرَّبَ إِلَيَّ بِشِبْرٍ تَقَرَّبْتُ إِلَيْهِ ذِرَاعًا»",
        tafsir: "حث على رجاء فضل الله واليقين بإجابته ورحمته؛ فمن أحسن ظنه بالله متوقعاً الخير والفرج، أفاض الله عليه من كرمه ما يليق بجلاله.",
        source: "صحيح البخاري ومسلم - عن أبي هريرة"
    },
    {
        theme: "تفريج الكربات وقضاء حوائج الناس",
        text: "«مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا، نَفَّسَ اللَّهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ، وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ، يَسَّرَ اللَّهُ عَلَيْهِ فِي الدُّنْيَا وَالْآخِرَةِ، وَمَنْ سَتَرَ مُسْلِمًا، سَتَرَهُ اللَّهُ فِي الدُّنْيَا وَالْآخِرَةِ، وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ»",
        tafsir: "ترسيخ لقيمة التراحم المجتمعي؛ فالمؤمن الذي يعين غيره ويساندهم في ضوائقهم يضمن أن يكون الله عز وجل في عونه وسنده في أشد أوقاته حاجة.",
        source: "صحيح مسلم - عن أبي هريرة"
    },
    {
        theme: "عظمة اللجوء إلى الله وترك الغضب",
        text: "«أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ ﷺ: أَوْصِنِي، قَالَ: لا تَغْضَبْ. فَرَدَّدَ مِرَارًا، قَالَ: لا تَغْضَبْ»",
        tafsir: "الغضب مفتاح كل شر ودافع لقرارات يندم عليها الإنسان؛ لذا حصر النبي ﷺ وصيته الجامعة في كبح جماح الانفعال حفاظاً على سلامة القلب والعقل.",
        source: "صحيح البخاري - عن أبي هريرة"
    },
    {
        theme: "حلاوة الإيمان ومحبة الله ورسوله",
        text: "«ثَلاثٌ مَنْ كُنَّ فِيهِ وَجَدَ حَلاوَةَ الإِيمَانِ: أَنْ يَكُونَ اللَّهُ وَرَسُولُهُ أَحَبَّ إِلَيْهِ مِمَّا سِوَاهُمَا، وَأَنْ يُحِبَّ المَرْءَ لا يُحِبُّهُ إِلَّا لِلَّهِ، وَأَنْ يَكْرَهَ أَنْ يَعُودَ فِي الكُفْرِ كَمَا يَكْرَهُ أَنْ يُقْذَفَ فِي النَّارِ»",
        tafsir: "بيان أن الإيمان ليس مجرد أفكار نظرية، بل له طعم حقيقي وراحة روحية عميقة يجدها من تجرد قلبه لله وصارت علاقاته كلها مبنية على التقوى والخير.",
        source: "صحيح البخاري ومسلم - عن أنس بن مالك"
    },
    {
        theme: "سلامة الصدر وحب الخير للآخرين",
        text: "«لا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ»",
        tafsir: "نفي كمال الإيمان عمن يحمل في قلبه غلاً أو حسداً؛ فعلامة الإيمان الحي أن يتمنى المسلم للناس من الخير والبركة والنجاح والراحة ما يتمناه لنفسه وأهله.",
        source: "صحيح البخاري ومسلم - عن أنس بن مالك"
    },
    {
        theme: "الأمر بالقصد والتيسير وترك التشدد",
        text: "«إِنَّ الدِّينَ يُسْرٌ، وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ، فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا، وَاسْتَعِينُوا بِالْغَدْوَةِ وَالرَّوْحَةِ وَشَيْءٍ مِنَ الدُّلْجَةِ»",
        tafsir: "دعوة نبوية للتوازن النفسي والعبادي دون إفراط أو تفريط؛ فالتكلف الشديد يؤدي إلى الانقطاع والملل، بينما الاستمرار على القليل النافع والتوسط هو نهج النجاة وطريق البشرى.",
        source: "صحيح البخاري - عن أبي هريرة"
    },
    {
        theme: "قيمة العمل وإخلاص النية لله",
        text: "«إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا، أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا، فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ»",
        tafsir: "عمدة الدين وميزان كل حركة وسكون؛ فالعمل الصالح لا يوزن بحجمه الظاهر بل بصدق القصد والباعث الداخلي في القلب، وبقدر إخلاصك لله تكون ثمرة سعيك وقبوله.",
        source: "صحيح البخاري ومسلم - عن عمر بن الخطاب"
    },
    {
        theme: "فضل الاستقامة والثبات على الحق",
        text: "«قُلْتُ: يَا رَسُولَ اللَّهِ، قُلْ لِي فِي الإِسْلامِ قَوْلًا لا أَسْأَلُ عَنْهُ أَحَدًا غَيْرَكَ، قَالَ: قُلْ: آمَنْتُ بِاللَّهِ، ثُمَّ اسْتَقِمْ»",
        tafsir: "جوامع الكلم في كلمتين؛ جمع النبي ﷺ الدين كله في تجديد الإيمان بالقلب واللسان، ثم الاستقامة العملية على طاعة الله وملازمة الصدق والأمانة في مجريات الحياة.",
        source: "صحيح مسلم - عن سفيان بن عبد الله الثقفي"
    },
    {
        theme: "الرحمة بالخلق وسيلة لنيل رحمة الخالق",
        text: "«الرَّاحِمُونَ يَرْحَمُهُمُ الرَّحْمَنُ، ارْحَمُوا مَنْ فِي الأَرْضِ يَرْحَمْكُمْ مَنْ فِي السَّمَاءِ»",
        tafsir: "الجزاء من جنس العمل؛ من اتصف باللين والرحمة والإحسان للضعفاء والمحتاجين وحتى سائر المخلوقات، غمره الله برحمته ولطفه وفضله في الدنيا والآخرة.",
        source: "سنن أبي داود والترمذي (صحيح) - عن عبد الله بن عمرو"
    },
    {
        theme: "الاستعاذة النبوية الجامعة من الهموم وثقل الديون",
        text: "«اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ، وَالْبُخْلِ وَالْجُبْنِ، وَضَلَعِ الدَّيْنِ، وَغَلَبَةِ الرِّجَالِ»",
        tafsir: "دعاء جامع لدرء أسباب الشلل النفسي والعملي؛ فالهم لما هو آتٍ، والحزن على ما مضى، والعجز عن الإنجاز، وقهر الرجال يكسر العزيمة؛ لذا كان ﷺ يكثر من هذا التحصين.",
        source: "صحيح البخاري - عن أنس بن مالك"
    },
    {
        theme: "أحب الأعمال إلى الله أدومها",
        text: "«أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ»",
        tafsir: "منهج عملي لتطوير النفس والعبادة؛ فقليل دائم يثبت في الروح خير من كثير منقطع يورث التراجع والفتور.",
        source: "صحيح البخاري ومسلم - عن عائشة رضي الله عنها"
    },
    {
        theme: "حفظ اللسان وطيب الكلام",
        text: "«مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَاليَوْمِ الآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ»",
        tafsir: "توجيه نبوي يحمي العلاقات ويزكي النفس؛ فإما أن ينطق الإنسان بصدق أو نصيحة أو كلمة طيبة تجبر الخاطر، أو يمسك لسانه ليسلم من الآثام.",
        source: "صحيح البخاري ومسلم - عن أبي هريرة"
    }
];

const adhkarDatabase = {
    morning: [
        {
            text: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
            benefit: "استفتاح اليوم بتوحيد الله والاعتراف بملكه وفضله.",
            count: 1
        },
        {
            text: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ.",
            benefit: "التبرؤ من الحول والقوة وتسليم الحياة والموت لمدبر الكون.",
            count: 1
        },
        {
            text: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ.",
            benefit: "من قالها ثلاثاً لم يضره شيء في يومه.",
            count: 3
        },
        {
            text: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلاَمِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا.",
            benefit: "من قالها حين يصبح كان حقاً على الله أن يرضيه يوم القيامة.",
            count: 3
        },
        {
            text: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ، أَصْلِحْ لِي شَأْنِي كُلَّهُ، وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ.",
            benefit: "دعاء إصلاح الشأن والتوفيق في أمور الدنيا والآخرة.",
            count: 1
        }
    ],
    evening: [
        {
            text: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
            benefit: "شكر الله على نعمة إدراك المساء بسلامة الدين والبدن.",
            count: 1
        },
        {
            text: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ.",
            benefit: "تحصين تام وحفظ من كل أذى أو سوء يطرأ في الليل.",
            count: 3
        },
        {
            text: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ.",
            benefit: "من قالها حين يمسي فقد أدى شكر ليلته.",
            count: 1
        },
        {
            text: "حَسْبِيَ اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ.",
            benefit: "من قالها 7 مرات كفاه الله ما أهمه من أمر الدنيا والآخرة.",
            count: 7
        }
    ],
    sleep: [
        {
            text: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي، وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ.",
            benefit: "استيداع النفس والروح عند الله قبل النوم لنيل الحفظ والرحمة.",
            count: 1
        },
        {
            text: "اللَّهُمَّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ.",
            benefit: "كان النبي ﷺ يضع يده اليمنى تحت خده ويقولها ثلاثاً.",
            count: 3
        },
        {
            text: "سُبْحَانَ اللَّهِ (33 مرة)، الْحَمْدُ لِلَّهِ (33 مرة)، اللَّهُ أَكْبَرُ (34 مرة).",
            benefit: "وصية النبي ﷺ لفاطمة وعلي، وهي خير من خادم وتمنح طاقة ونشاطاً.",
            count: 1
        },
        {
            text: "قراءة آية الكرسي: ﴿اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...﴾",
            benefit: "من قرأها إذا أوى إلى فراشه لم يزل عليه من الله حافظ حتى يصبح.",
            count: 1
        }
    ],
    prayer: [
        {
            text: "أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ، أَسْتَغْفِرُ اللَّهَ.. اللَّهُمَّ أَنْتَ السَّلاَمُ وَمِنْكَ السَّلاَمُ، تَبَارَكْتَ يَا ذَا الْجَلاَلِ وَالإِكْرَامِ.",
            benefit: "سنة نبوية مؤكدة بعد التسليم مباشرة لجبر أي نقص في الصلاة.",
            count: 1
        },
        {
            text: "اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ، وَشُكْرِكَ، وَحُسْنِ عِبَادَتِكَ.",
            benefit: "وصية النبي ﷺ لمعاذ بن جبل ألا يدعها دبر كل صلاة.",
            count: 1
        },
        {
            text: "سُبْحَانَ اللَّهِ (33) • الْحَمْدُ لِلَّهِ (33) • اللَّهُ أَكْبَرُ (33) • وتتمام المائة: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
            benefit: "غُفرت خطاياه وإن كانت مثل زبد البحر.",
            count: 1
        }
    ]
};

// سلسلة الأذكار المتتابعة في السبحة التلقائية
const sebhaSequence = [
    { text: "سُبْحَانَ اللَّهِ", target: 33 },
    { text: "الْحَمْدُ لِلَّهِ", target: 33 },
    { text: "اللَّهُ أَكْبَرُ", target: 33 },
    { text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ", target: 1 },
    { text: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ", target: 33 },
    { text: "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", target: 33 },
    { text: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", target: 10 }
];

let lastAyahIndex = -1;
let currentSebhaIndex = 0;
let sebhaCount = 0;
let sebhaTotal = 0;

// مشغل الصوت المخصص
const audio = document.getElementById('quran-audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const seekBar = document.getElementById('seek-bar');
const currentTimeEl = document.getElementById('current-time');
const durationTimeEl = document.getElementById('duration-time');

function formatTime(sec) {
    if (isNaN(sec)) return "00:00";
    const minutes = Math.floor(sec / 60);
    const seconds = Math.floor(sec % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

audio.addEventListener('timeupdate', () => {
    seekBar.value = audio.currentTime;
    currentTimeEl.textContent = formatTime(audio.currentTime);
});

audio.addEventListener('loadedmetadata', () => {
    seekBar.max = audio.duration;
    durationTimeEl.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
    playPauseBtn.textContent = '▶';
});

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = '❚❚';
    } else {
        audio.pause();
        playPauseBtn.textContent = '▶';
    }
}

function seekAudio() {
    audio.currentTime = seekBar.value;
}

function getRandomAyah() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * dailyAyahs.length);
    } while (randomIndex === lastAyahIndex && dailyAyahs.length > 1);

    lastAyahIndex = randomIndex;
    document.getElementById('ayah-text').textContent = dailyAyahs[randomIndex].text;
    document.getElementById('surah-text').textContent = dailyAyahs[randomIndex].surah;
}

function enterApp() {
    document.getElementById('intro-screen').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
    getRandomAyah();
    loadSurahsList();
    renderHadiths(authenticHadiths);
    renderAdhkarCategory('morning');
    updateSebhaDisplay();
}

function switchSection(section, event) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.content-box').forEach(box => box.classList.add('hidden'));

    event.target.classList.add('active');

    if (section === 'quran') {
        document.getElementById('quran-section').classList.remove('hidden');
    } else if (section === 'hadith') {
        document.getElementById('hadith-section').classList.remove('hidden');
    } else if (section === 'adhkar') {
        document.getElementById('adhkar-section').classList.remove('hidden');
    } else if (section === 'sebha') {
        document.getElementById('sebha-section').classList.remove('hidden');
    }
}

function normalizeArabic(text) {
    return text
        .replace(/([^\u0621-\u063A\u0641-\u064A\u0660-\u0669a-zA-Z0-9])/g, '')
        .replace(/[أإآ]/g, 'ا')
        .replace(/ة/g, 'ه')
        .replace(/ى/g, 'ي')
        .trim();
}

async function loadSurahsList() {
    try {
        const response = await fetch("https://api.alquran.cloud/v1/surah");
        const data = await response.json();
        
        allSurahs = data.data.map(surah => {
            return {
                ...surah,
                cleanName: plainSurahNames[surah.number - 1]
            };
        });

        renderSurahs(allSurahs);
    } catch (error) {
        document.getElementById('surahs-list').innerHTML = `<p class="source-text">تعذر تحميل السور، يرجى التحقق من الاتصال بالإنترنت.</p>`;
    }
}

function renderSurahs(surahs) {
    const container = document.getElementById('surahs-list');
    container.innerHTML = "";

    surahs.forEach(surah => {
        const item = document.createElement('div');
        item.className = 'surah-item';
        item.onclick = () => openSurah(surah.number, surah.cleanName, surah.numberOfAyahs, surah.revelationType);

        item.innerHTML = `
            <div class="surah-meta">
                <span class="surah-index">${surah.number}</span>
                <span class="surah-name">سورة ${surah.cleanName}</span>
            </div>
            <span class="surah-count">${surah.numberOfAyahs} آية</span>
        `;
        container.appendChild(item);
    });
}

function filterSurahs() {
    const query = normalizeArabic(document.getElementById('surah-search').value);
    const filtered = allSurahs.filter(s => {
        const normalizedName = normalizeArabic(s.cleanName);
        return normalizedName.includes(query) || s.number.toString() === query;
    });
    renderSurahs(filtered);
}

function updateAudioSource() {
    const reciterKey = document.getElementById('reciter-select').value;
    const formattedNumber = String(currentSurahNumber).padStart(3, '0');
    audio.src = `${recitersServers[reciterKey]}${formattedNumber}.mp3`;
    playPauseBtn.textContent = '▶';
    seekBar.value = 0;
    currentTimeEl.textContent = "00:00";
}

function changeReciter() {
    const wasPlaying = !audio.paused;
    updateAudioSource();
    if (wasPlaying) {
        audio.play();
        playPauseBtn.textContent = '❚❚';
    }
}

async function openSurah(number, cleanName, ayahsCount, revelationType) {
    currentSurahNumber = number;

    document.getElementById('surahs-list').classList.add('hidden');
    document.getElementById('surah-search').parentElement.classList.add('hidden');

    const detailsBox = document.getElementById('surah-details');
    detailsBox.classList.remove('hidden');

    document.getElementById('current-surah-title').textContent = `سورة ${cleanName}`;
    document.getElementById('current-surah-info').textContent = `${revelationType === 'Meccan' ? 'مكية' : 'مدنية'} • عدد آياتها: ${ayahsCount}`;

    updateAudioSource();
    toggleSurahTab('reading');

    const readingBox = document.getElementById('current-surah-text');
    const tafsirBox = document.getElementById('current-surah-tafsir');

    readingBox.textContent = "جاري تحميل نص السورة...";
    tafsirBox.textContent = "جاري تحميل التفسير الميسر...";

    try {
        const [textRes, tafsirRes] = await Promise.all([
            fetch(`https://api.alquran.cloud/v1/surah/${number}/quran-uthmani`),
            fetch(`https://api.alquran.cloud/v1/surah/${number}/ar.muyassar`)
        ]);

        const textData = await textRes.json();
        const tafsirData = await tafsirRes.json();

        let fullText = "";
        textData.data.ayahs.forEach(ayah => {
            fullText += `${ayah.text} ﴿${ayah.numberInSurah}﴾ `;
        });
        readingBox.textContent = fullText;

        tafsirBox.innerHTML = "";
        tafsirData.data.ayahs.forEach(ayah => {
            const tafsirItem = document.createElement('div');
            tafsirItem.className = 'tafsir-item';
            tafsirItem.innerHTML = `
                <span class="tafsir-ayah-num">الآية (${ayah.numberInSurah}):</span>
                <p class="tafsir-text">${ayah.text}</p>
            `;
            tafsirBox.appendChild(tafsirItem);
        });

    } catch (e) {
        readingBox.textContent = "تعذر تحميل نص السورة، يرجى التحقق من اتصالك.";
        tafsirBox.textContent = "تعذر تحميل التفسير، يرجى التحقق من اتصالك.";
    }
}

function toggleSurahTab(tab) {
    const readingBtn = document.getElementById('btn-show-reading');
    const tafsirBtn = document.getElementById('btn-show-tafsir');
    const readingBox = document.getElementById('current-surah-text');
    const tafsirBox = document.getElementById('current-surah-tafsir');

    if (tab === 'reading') {
        readingBtn.classList.add('active');
        tafsirBtn.classList.remove('active');
        readingBox.classList.remove('hidden');
        tafsirBox.classList.add('hidden');
    } else {
        tafsirBtn.classList.add('active');
        readingBtn.classList.remove('active');
        tafsirBox.classList.remove('hidden');
        readingBox.classList.add('hidden');
    }
}

function closeSurahView() {
    audio.pause();
    audio.src = "";
    playPauseBtn.textContent = '▶';

    document.getElementById('surah-details').classList.add('hidden');
    document.getElementById('surahs-list').classList.remove('hidden');
    document.getElementById('surah-search').parentElement.classList.remove('hidden');
}

function renderHadiths(hadiths) {
    const container = document.getElementById('hadiths-list');
    container.innerHTML = "";

    if (hadiths.length === 0) {
        container.innerHTML = `<p class="source-text">لا توجد نتائج مطابقة لبحثك.</p>`;
        return;
    }

    hadiths.forEach(h => {
        const card = document.createElement('div');
        card.className = 'hadith-card glass-panel';
        card.innerHTML = `
            <span class="hadith-theme">${h.theme}</span>
            <p class="hadith-matn">${h.text}</p>
            <div class="tafsir-box">
                <span class="tafsir-label">الشرح والتفسير:</span>
                <p>${h.tafsir}</p>
            </div>
            <span class="source-text">${h.source}</span>
        `;
        container.appendChild(card);
    });
}

function filterHadiths() {
    const query = normalizeArabic(document.getElementById('hadith-search').value);
    const filtered = authenticHadiths.filter(h => {
        return normalizeArabic(h.text).includes(query) || 
               normalizeArabic(h.theme).includes(query) || 
               normalizeArabic(h.tafsir).includes(query) ||
               normalizeArabic(h.source).includes(query);
    });
    renderHadiths(filtered);
}

function switchAdhkarCategory(catKey, event) {
    document.querySelectorAll('.adhkar-cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    renderAdhkarCategory(catKey);
}

function renderAdhkarCategory(catKey) {
    const container = document.getElementById('adhkar-list');
    container.innerHTML = "";

    const items = adhkarDatabase[catKey];
    items.forEach((dhikr, index) => {
        const card = document.createElement('div');
        card.className = 'dhikr-item-card glass-panel';

        card.innerHTML = `
            <p class="dhikr-body">${dhikr.text}</p>
            <div class="dhikr-benefit">${dhikr.benefit}</div>
            <div class="dhikr-footer">
                <span class="source-text">التكرار المطلوب: ${dhikr.count}</span>
                <button id="dhikr-btn-${catKey}-${index}" class="dhikr-counter-btn" onclick="decrementDhikr('${catKey}', ${index})">
                    <span>${dhikr.count}</span> مرة
                </button>
            </div>
        `;
        container.appendChild(card);
    });
}

function decrementDhikr(catKey, index) {
    const btn = document.getElementById(`dhikr-btn-${catKey}-${index}`);
    let currentVal = parseInt(btn.querySelector('span').textContent);

    if (currentVal > 1) {
        currentVal--;
        btn.querySelector('span').textContent = currentVal;
        if (navigator.vibrate) {
            navigator.vibrate(35);
        }
    } else if (currentVal === 1) {
        btn.querySelector('span').textContent = '0';
        btn.classList.add('done');
        btn.innerHTML = 'تم الاكتفاء ✓';
        btn.disabled = true;
        if (navigator.vibrate) {
            navigator.vibrate([40, 50, 40]);
        }
    }
}

// دوال السبحة المتتابعة والذكية
function updateSebhaDisplay() {
    const current = sebhaSequence[currentSebhaIndex];
    document.getElementById('sebha-current-text').textContent = current.text;
    document.getElementById('sebha-target-info').textContent = `الهدف: ${current.target} مرة`;
    document.getElementById('sebha-count').textContent = sebhaCount;
    document.getElementById('sebha-total-count').textContent = sebhaTotal;
}

function incrementSebha() {
    sebhaCount++;
    sebhaTotal++;

    const current = sebhaSequence[currentSebhaIndex];

    if (sebhaCount >= current.target) {
        if (navigator.vibrate) {
            navigator.vibrate([60, 50, 60]);
        }
        currentSebhaIndex = (currentSebhaIndex + 1) % sebhaSequence.length;
        sebhaCount = 0;
    } else {
        if (navigator.vibrate) {
            navigator.vibrate(35);
        }
    }

    updateSebhaDisplay();
}

function skipDhikr() {
    currentSebhaIndex = (currentSebhaIndex + 1) % sebhaSequence.length;
    sebhaCount = 0;
    updateSebhaDisplay();
}

function resetSebha() {
    sebhaCount = 0;
    sebhaTotal = 0;
    currentSebhaIndex = 0;
    updateSebhaDisplay();
}