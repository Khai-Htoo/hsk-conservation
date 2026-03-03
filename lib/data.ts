export interface ConversationEntry {
  id: string;
  hanzi: string;
  pinyin: string;
  burmese: string;
}

export type HSKLevel = 1 | 2 | 3 | 4 | 5;

// Mock data structured by HSK level
export const hskData: Record<HSKLevel, ConversationEntry[]> = {
  1: [
    {
      id: "hsk1_1",
      hanzi: "你好！",
      pinyin: "nǐ hǎo!",
      burmese: "မင်္ဂလာပါ!"
    },
    {
      id: "hsk1_2",
      hanzi: "你叫什么名字？",
      pinyin: "nǐ jiào shén me míng zi?",
      burmese: "မင်းနာမည်ဘယ်လိုခေါ်လဲ?"
    },
    {
      id: "hsk1_3",
      hanzi: "我叫大卫。",
      pinyin: "wǒ jiào Dà wèi.",
      burmese: "ကျွန်တော့်နာမည် ဒေးဗစ်ပါ။"
    },
    {
      id: "hsk1_4",
      hanzi: "你多大了？",
      pinyin: "nǐ duō dà le?",
      burmese: "မင်းအသက်ဘယ်လောက်ရှိပြီလဲ?"
    },
    {
      id: "hsk1_5",
      hanzi: "我二十岁。",
      pinyin: "wǒ èr shí suì.",
      burmese: "ကျွန်တော်အသက် ၂၀ ပါ။"
    },
    {
      id: "hsk1_6",
      hanzi: "你是哪国人？",
      pinyin: "nǐ shì nǎ guó rén?",
      burmese: "မင်းဘယ်နိုင်ငံသားလဲ?"
    },
    {
      id: "hsk1_7",
      hanzi: "我是缅甸人。",
      pinyin: "wǒ shì Miǎn diàn rén.",
      burmese: "ကျွန်တော်က မြန်မာလူမျိုးပါ။"
    },
    {
      id: "hsk1_8",
      hanzi: "认识你很高兴。",
      pinyin: "rèn shi nǐ hěn gāo xìng.",
      burmese: "တွေ့ရတာဝမ်းသာပါတယ်။"
    },
    {
      id: "hsk1_9",
      hanzi: "再见！",
      pinyin: "zài jiàn!",
      burmese: "တာ့တာ!"
    },
    {
      id: "hsk1_10",
      hanzi: "对不起。",
      pinyin: "duì bu qǐ.",
      burmese: "တောင်းပန်ပါတယ်။"
    },
    {
      id: "hsk1_11",
      hanzi: "没关系。",
      pinyin: "méi guān xi.",
      burmese: "ကိစ္စမရှိပါဘူး။"
    },
    {
      id: "hsk1_12",
      hanzi: "谢谢！",
      pinyin: "xiè xie!",
      burmese: "ကျေးဇူးတင်ပါတယ်။"
    },
    {
      id: "hsk1_13",
      hanzi: "不客气。",
      pinyin: "bú kè qi.",
      burmese: "ရပါတယ်။ (အားမနာပါနဲ့)"
    },
    {
      id: "hsk1_14",
      hanzi: "她是谁？",
      pinyin: "tā shì shéi?",
      burmese: "သူမက ဘယ်သူလဲ?"
    },
    {
      id: "hsk1_15",
      hanzi: "她是我妈妈。",
      pinyin: "tā shì wǒ mā ma.",
      burmese: "သူမက ကျွန်တော့်အမေပါ။"
    },
    {
      id: "hsk1_16",
      hanzi: "这是什么？",
      pinyin: "zhè shì shén me?",
      burmese: "ဒါက ဘာလဲ?"
    },
    {
      id: "hsk1_17",
      hanzi: "这是一本书。",
      pinyin: "zhè shì yì běn shū.",
      burmese: "ဒါက စာအုပ်တစ်အုပ်ပါ။"
    },
    {
      id: "hsk1_18",
      hanzi: "他在哪儿？",
      pinyin: "tā zài nǎr?",
      burmese: "သူဘယ်မှာလဲ?"
    },
    {
      id: "hsk1_19",
      hanzi: "他在学校。",
      pinyin: "tā zài xué xiào.",
      burmese: "သူကျောင်းမှာပါ။"
    },
    {
      id: "hsk1_20",
      hanzi: "你喜欢吃什么？",
      pinyin: "nǐ xǐ huan chī shén me?",
      burmese: "မင်းဘာစားရတာ ကြိုက်လဲ?"
    },
    {
      id: "hsk1_21",
      hanzi: "我喜欢吃米饭。",
      pinyin: "wǒ xǐ huan chī mǐ fàn.",
      burmese: "ကျွန်တော်ထမင်းစားရတာ ကြိုက်တယ်။"
    },
    {
      id: "hsk1_22",
      hanzi: "今天天气怎么样？",
      pinyin: "jīn tiān tiān qì zěn me yàng?",
      burmese: "ဒီနေ့ရာသီဥတုဘယ်လိုလဲ?"
    },
    {
      id: "hsk1_23",
      hanzi: "今天很热。",
      pinyin: "jīn tiān hěn rè.",
      burmese: "ဒီနေ့အရမ်းပူတယ်။"
    },
    {
      id: "hsk1_24",
      hanzi: "昨天没下雨。",
      pinyin: "zuó tiān méi xià yǔ.",
      burmese: "မနေ့ကမိုးမရွာဘူး။"
    },
    {
      id: "hsk1_25",
      hanzi: "现在几点？",
      pinyin: "xiàn zài jǐ diǎn?",
      burmese: "အခုဘယ်နှစ်နာရီရှိပြီလဲ?"
    },
    {
      id: "hsk1_26",
      hanzi: "现在十二点。",
      pinyin: "xiàn zài shí èr diǎn.",
      burmese: "အခုဆယ့်နှစ်နာရီပါ။"
    },
    {
      id: "hsk1_27",
      hanzi: "你什么时候去中国？",
      pinyin: "nǐ shén me shí hou qù Zhōng guó?",
      burmese: "မင်းဘယ်တော့တရုတ်ကိုသွားမှာလဲ?"
    },
    {
      id: "hsk1_28",
      hanzi: "我明天去北京。",
      pinyin: "wǒ míng tiān qù Běi jīng.",
      burmese: "ကျွန်တော်မနက်ဖြန်ပေကျင်းကိုသွားမယ်။"
    },
    {
      id: "hsk1_29",
      hanzi: "你看见我的狗了吗？",
      pinyin: "nǐ kàn jiàn wǒ de gǒu le ma?",
      burmese: "ကျွန်တော့်ခွေးကို မင်းတွေ့မိသေးလား?"
    },
    {
      id: "hsk1_30",
      hanzi: "它在椅子下面。",
      pinyin: "tā zài yǐ zi xià miàn.",
      burmese: "သူက ကုလားထိုင်အောက်မှာပါ။"
    },
    {
      id: "hsk1_31",
      hanzi: "你买什么？",
      pinyin: "nǐ mǎi shén me?",
      burmese: "မင်းဘာဝယ်မလို့လဲ?"
    },
    {
      id: "hsk1_32",
      hanzi: "我买苹果。",
      pinyin: "wǒ mǎi píng guǒ.",
      burmese: "ကျွန်တော်ပန်းသီးဝယ်မလို့။"
    },
    {
      id: "hsk1_33",
      hanzi: "这个多少钱？",
      pinyin: "zhè ge duō shao qián?",
      burmese: "ဒါဘယ်လောက်လဲ?"
    },
    {
      id: "hsk1_34",
      hanzi: "八块钱。",
      pinyin: "bā kuài qián.",
      burmese: "ရှစ်ယွမ်ပါ။"
    },
    {
      id: "hsk1_35",
      hanzi: "你去哪儿？",
      pinyin: "nǐ qù nǎr?",
      burmese: "မင်းဘယ်သွားမလို့လဲ?"
    },
    {
      id: "hsk1_36",
      hanzi: "我去医院。",
      pinyin: "wǒ qù yī yuàn.",
      burmese: "ကျွန်တော်ဆေးရုံကိုသွားမလို့။"
    },
    {
      id: "hsk1_37",
      hanzi: "医生在吗？",
      pinyin: "yī shēng zài ma?",
      burmese: "ဆရာဝန်ရှိလား?"
    },
    {
      id: "hsk1_38",
      hanzi: "他不在。",
      pinyin: "tā bú zài.",
      burmese: "သူမရှိပါဘူး။"
    },
    {
      id: "hsk1_39",
      hanzi: "你会说汉语吗？",
      pinyin: "nǐ huì shuō hàn yǔ ma?",
      burmese: "မင်းတရုတ်စကားပြောတတ်လား?"
    },
    {
      id: "hsk1_40",
      hanzi: "我会说汉语。",
      pinyin: "wǒ huì shuō hàn yǔ.",
      burmese: "ကျွန်တော်တရုတ်စကားပြောတတ်ပါတယ်။"
    },
    {
      id: "hsk1_41",
      hanzi: "怎么去火车站？",
      pinyin: "zěn me qù huǒ chē zhàn?",
      burmese: "ရထားဘူတာရုံကိုဘယ်လိုသွားရမလဲ?"
    },
    {
      id: "hsk1_42",
      hanzi: "坐出租车去。",
      pinyin: "zuò chū zū chē qù.",
      burmese: "အငှားကားစီးပြီးသွားပါ။"
    },
    {
      id: "hsk1_43",
      hanzi: "下雨了。",
      pinyin: "xià yǔ le.",
      burmese: "မိုးရွာနေပြီ။"
    },
    {
      id: "hsk1_44",
      hanzi: "你可以喝茶。",
      pinyin: "nǐ kě yǐ hē chá.",
      burmese: "မင်းလက်ဖက်ရည်သောက်လို့ရတယ်။"
    },
    {
      id: "hsk1_45",
      hanzi: "我没有钱。",
      pinyin: "wǒ méi yǒu qián.",
      burmese: "ကျွန်တော့်မှာပိုက်ဆံမရှိဘူး。"
    },
    {
      id: "hsk1_46",
      hanzi: "他在打电话。",
      pinyin: "tā zài dǎ diàn huà.",
      burmese: "သူဖုန်းပြောနေတယ်။"
    },
    {
      id: "hsk1_47",
      hanzi: "那个人是谁？",
      pinyin: "nà ge rén shì shéi?",
      burmese: "အဲ့လူကဘယ်သူလဲ?"
    },
    {
      id: "hsk1_48",
      hanzi: "他是我同学。",
      pinyin: "tā shì wǒ tóng xué.",
      burmese: "သူကကျွန်တော့်ကျောင်းနေဖက်ပါ။"
    },
    {
      id: "hsk1_49",
      hanzi: "请坐。",
      pinyin: "qǐng zuò.",
      burmese: "ထိုင်ပါခင်ဗျာ။"
    },
    {
      id: "hsk1_50",
      hanzi: "你想吃东西吗？",
      pinyin: "nǐ xiǎng chī dōng xi ma?",
      burmese: "မင်းတစ်ခုခုစားချင်လား?"
    },
    {
      id: "hsk1_51",
      hanzi: "我不吃，谢谢。",
      pinyin: "wǒ bù chī, xiè xie.",
      burmese: "ကျွန်တော်မစားဘူး၊ ကျေးဇူးပါ။"
    },
    {
      id: "hsk1_52",
      hanzi: "请喝水。",
      pinyin: "qǐng hē shuǐ.",
      burmese: "ရေသောက်ပါခင်ဗျာ။"
    },
    {
      id: "hsk1_53",
      hanzi: "这些是什么？",
      pinyin: "zhè xiē shì shén me?",
      burmese: "ဒါတွေကဘာလဲ?"
    },
    {
      id: "hsk1_54",
      hanzi: "这些是我的书。",
      pinyin: "zhè xiē shì wǒ de shū.",
      burmese: "ဒါတွေကကျွန်တော့်စာအုပ်တွေပါ။"
    },
    {
      id: "hsk1_55",
      hanzi: "李老师在吗？",
      pinyin: "Lǐ lǎo shī zài ma?",
      burmese: "ဆရာမလီရှိလား?"
    },
    {
      id: "hsk1_56",
      hanzi: "她在家。",
      pinyin: "tā zài jiā.",
      burmese: "သူမအိမ်မှာပါ။"
    },
    {
      id: "hsk1_57",
      hanzi: "这个星期我不去学校。",
      pinyin: "zhè ge xīng qī wǒ bú qù xué xiào.",
      burmese: "ဒီအပတ်ကျွန်တော်ကျောင်းမသွားဘူး။"
    },
    {
      id: "hsk1_58",
      hanzi: "怎么用电脑？",
      pinyin: "zěn me yòng diàn nǎo?",
      burmese: "ကွန်ပျူတာဘယ်လိုသုံးရမလဲ?"
    },
    {
      id: "hsk1_59",
      hanzi: "我爱你。",
      pinyin: "wǒ ài nǐ.",
      burmese: "မင်းကိုချစ်တယ်။"
    },
    {
      id: "hsk1_60",
      hanzi: "谁是你的好朋友？",
      pinyin: "shéi shì nǐ de hǎo péng you?",
      burmese: "ဘယ်သူကမင်းရဲ့သူငယ်ချင်းကောင်းလဲ?"
    },
    {
      id: "hsk1_61",
      hanzi: "请问，去医院怎么走？",
      pinyin: "qǐng wèn, qù yī yuàn zěn me zǒu?",
      burmese: "တစ်ဆိတ်လောက်မေးပါရစေ၊ ဆေးရုံကိုဘယ်လိုသွားရမလဲ?"
    },
    {
      id: "hsk1_62",
      hanzi: "我听不懂，请再说一次。",
      pinyin: "wǒ tīng bù dǒng, qǐng zài shuō yí cì.",
      burmese: "ကျွန်တော်နားမလည်ဘူး၊ ကျေးဇူးပြုပြီးနောက်တစ်ခေါက်ပြောပေးပါ။"
    },
    {
      id: "hsk1_63",
      hanzi: "你的电话号码是多少？",
      pinyin: "nǐ de diàn huà hào mǎ shì duō shǎo?",
      burmese: "မင်းဖုန်းနံပါတ်ဘယ်လောက်လဲ?"
    },
    {
      id: "hsk1_64",
      hanzi: "你会写汉字吗？",
      pinyin: "nǐ huì xiě hàn zì ma?",
      burmese: "မင်းတရုတ်စာရေးတတ်လား?"
    },
    {
      id: "hsk1_65",
      hanzi: "我只认识一点儿。",
      pinyin: "wǒ zhǐ rèn shí yì diǎnr.",
      burmese: "ကျွန်တော်နည်းနည်းပဲသိ(မှတ်မိ)တယ်။"
    },
    {
      id: "hsk1_66",
      hanzi: "买单 / 结账！",
      pinyin: "mǎi dān / jié zhàng!",
      burmese: "ငွေရှင်းမယ်!"
    },
    {
      id: "hsk1_67",
      hanzi: "太贵了，便宜一点儿吧。",
      pinyin: "tài guì le, pián yí yì diǎnr ba.",
      burmese: "အရမ်းဈေးကြီးတယ်၊ နည်းနည်းလျှော့ပေးပါ။"
    },
    {
      id: "hsk1_68",
      hanzi: "你想买几个？",
      pinyin: "nǐ xiǎng mǎi jǐ ge?",
      burmese: "မင်းဘယ်နှစ်ခု(လုံး)ဝယ်ချင်တာလဲ?"
    },
    {
      id: "hsk1_69",
      hanzi: "今天我不工作。",
      pinyin: "jīn tiān wǒ bù gōng zuò.",
      burmese: "ဒီနေ့ကျွန်တော်အလုပ်မလုပ်ဘူး။"
    },
    {
      id: "hsk1_70",
      hanzi: "你在看什么书？",
      pinyin: "nǐ zài kàn shén me shū?",
      burmese: "မင်းဘာစာအုပ်ဖတ်နေတာလဲ?"
    },
    {
      id: "hsk1_71",
      hanzi: "我想去中国旅游。",
      pinyin: "wǒ xiǎng qù Zhōng guó lǚ yóu.",
      burmese: "ကျွန်တော်တရုတ်ပြည်ကိုခရီးသွားချင်တယ်။"
    },
    {
      id: "hsk1_72",
      hanzi: "明天的天气怎么样？",
      pinyin: "míng tiān de tiān qì zěn me yàng?",
      burmese: "မနက်ဖြန်ရာသီဥတုဘယ်လိုလဲ?"
    },
    {
      id: "hsk1_73",
      hanzi: "明天可能下雨。",
      pinyin: "míng tiān kě néng xià yǔ.",
      burmese: "မနက်ဖြန်မိုးရွာနိုင်တယ်။"
    },
    {
      id: "hsk1_74",
      hanzi: "你的家有多大？",
      pinyin: "nǐ de jiā yǒu duō dà?",
      burmese: "မင်းအိမ်ဘယ်လောက်ကြီးလဲ?"
    },
    {
      id: "hsk1_75",
      hanzi: "我的家很大。",
      pinyin: "wǒ de jiā hěn dà.",
      burmese: "ကျွန်တော့်အိမ်အရမ်းကြီးတယ်။"
    },
    {
      id: "hsk1_76",
      hanzi: "这里有人吗？",
      pinyin: "zhè lǐ yǒu rén ma?",
      burmese: "ဒီမှာလူရှိလား?"
    },
    {
      id: "hsk1_77",
      hanzi: "没有人，请坐。",
      pinyin: "méi yǒu rén, qǐng zuò.",
      burmese: "လူမရှိပါဘူး၊ ထိုင်ပါ။"
    },
    {
      id: "hsk1_78",
      hanzi: "我想买一杯咖啡。",
      pinyin: "wǒ xiǎng mǎi yì bēi kā fēi.",
      burmese: "ကျွန်တော်ကော်ဖီတစ်ခွက်ဝယ်ချင်တယ်။"
    },
    {
      id: "hsk1_79",
      hanzi: "好的，请稍等。",
      pinyin: "hǎo de, qǐng shāo děng.",
      burmese: "ကောင်းပါပြီ၊ ခဏစောင့်ပါ။"
    },
    {
      id: "hsk1_80",
      hanzi: "很高兴认识你。",
      pinyin: "hěn gāo xìng rèn shi nǐ.",
      burmese: "မင်းကိုသိရတာဝမ်းသာပါတယ်။"
    },
    {
      id: "hsk1_81",
      hanzi: "我今天很忙。",
      pinyin: "wǒ jīn tiān hěn máng.",
      burmese: "ဒီနေ့ကျွန်တော်အရမ်းအလုပ်များတယ်။"
    },
    {
      id: "hsk1_82",
      hanzi: "请跟我来。",
      pinyin: "qǐng gēn wǒ lái.",
      burmese: "ကျွန်တော့်နောက်လိုက်ခဲ့ပါ။"
    },
    {
      id: "hsk1_83",
      hanzi: "你在找什么？",
      pinyin: "nǐ zài zhǎo shén me?",
      burmese: "မင်းဘာရှာနေတာလဲ?"
    },
    {
      id: "hsk1_84",
      hanzi: "我在找我的手机。",
      pinyin: "wǒ zài zhǎo wǒ de shǒu jī.",
      burmese: "ကျွန်တော်ဖုန်းရှာနေတာပါ။"
    },
    {
      id: "hsk1_85",
      hanzi: "你住在哪儿？",
      pinyin: "nǐ zhù zài nǎr?",
      burmese: "မင်းဘယ်မှာနေလဲ?"
    },
    {
      id: "hsk1_86",
      hanzi: "我住在北京。",
      pinyin: "wǒ zhù zài Běi jīng.",
      burmese: "ကျွန်တော်ပေကျင်းမှာနေတယ်။"
    },
    {
      id: "hsk1_87",
      hanzi: "这是谁的？",
      pinyin: "zhè shì shéi de?",
      burmese: "ဒါဘယ်သူ့ဟာလဲ?"
    },
    {
      id: "hsk1_88",
      hanzi: "这是我的。",
      pinyin: "zhè shì wǒ de.",
      burmese: "ဒါကျွန်တော့်ဟာပါ။"
    },
    {
      id: "hsk1_89",
      hanzi: "我不认识他。",
      pinyin: "wǒ bù rèn shí tā.",
      burmese: "ကျွန်တော်သူ့ကိုမသိ(မရင်းနှီး)ဘူး။"
    },
    {
      id: "hsk1_90",
      hanzi: "你要做什么？",
      pinyin: "nǐ yào zuò shén me?",
      burmese: "မင်းဘာလုပ်မလို့လဲ?"
    },
    {
      id: "hsk1_91",
      hanzi: "我们在学校学习。",
      pinyin: "wǒ men zài xué xiào xué xí.",
      burmese: "ငါတို့ကျောင်းမှာစာသင်တယ်။"
    },
    {
      id: "hsk1_92",
      hanzi: "这是你的吗？",
      pinyin: "zhè shì nǐ de ma?",
      burmese: "ဒါမင်းဟာလား?"
    },
    {
      id: "hsk1_93",
      hanzi: "那不是我的。",
      pinyin: "nà bú shì wǒ de.",
      burmese: "အဲ့ဒါကျွန်တော့်ဟာမဟုတ်ဘူး။"
    },
    {
      id: "hsk1_94",
      hanzi: "我要休息十分钟。",
      pinyin: "wǒ yào xiū xi shí fēn zhōng.",
      burmese: "ကျွန်တော်ဆယ်မိနစ်နားချင်တယ်။"
    },
    {
      id: "hsk1_95",
      hanzi: "你喜欢这个吗？",
      pinyin: "nǐ xǐ huan zhè ge ma?",
      burmese: "မင်းဒါကိုကြိုက်လား?"
    },
    {
      id: "hsk1_96",
      hanzi: "我很喜欢。",
      pinyin: "wǒ hěn xǐ huan.",
      burmese: "ကျွန်တော်အရမ်းကြိုက်တယ်။"
    },
    {
      id: "hsk1_97",
      hanzi: "太大了。",
      pinyin: "tài dà le.",
      burmese: "အရမ်းကြီးတယ်။"
    },
    {
      id: "hsk1_98",
      hanzi: "太小了。",
      pinyin: "tài xiǎo le.",
      burmese: "အရမ်းသေးတယ်။"
    },
    {
      id: "hsk1_99",
      hanzi: "你要去哪儿吃饭？",
      pinyin: "nǐ yào qù nǎr chī fàn?",
      burmese: "မင်းဘယ်သွားစားမလို့လဲ?"
    },
    {
      id: "hsk1_100",
      hanzi: "我要回家吃饭。",
      pinyin: "wǒ yào huí jiā chī fàn.",
      burmese: "ကျွန်တော်အိမ်ပြန်စားမယ်။"
    },
    {
      id: "hsk1_101",
      hanzi: "你在这儿工作吗？",
      pinyin: "nǐ zài zhèr gōng zuò ma?",
      burmese: "မင်းဒီမှာအလုပ်လုပ်တာလား?"
    },
    {
      id: "hsk1_102",
      hanzi: "对，我在这儿工作。",
      pinyin: "duì, wǒ zài zhèr gōng zuò.",
      burmese: "ဟုတ်တယ်၊ ကျွန်တော်ဒီမှာအလုပ်လုပ်တယ်။"
    },
    {
      id: "hsk1_103",
      hanzi: "你可以说慢一点儿吗？",
      pinyin: "nǐ kě yǐ shuō màn yì diǎnr ma?",
      burmese: "မင်းနည်းနည်းဖြည်းဖြည်းပြောနိုင်မလား?"
    },
    {
      id: "hsk1_104",
      hanzi: "早上好！",
      pinyin: "zǎo shang hǎo!",
      burmese: "မင်္ဂလာနံနက်ခင်းပါ။"
    },
    {
      id: "hsk1_105",
      hanzi: "晚上好！",
      pinyin: "wǎn shang hǎo!",
      burmese: "မင်္ဂလာညချမ်းပါ။"
    },
    {
      id: "hsk1_106",
      hanzi: "晚安！",
      pinyin: "wǎn ān!",
      burmese: "ကောင်းသောညပါ။"
    },
    {
      id: "hsk1_107",
      hanzi: "周末快乐！",
      pinyin: "zhōu mò kuài lè!",
      burmese: "ပျော်ရွှင်စရာစနေတနင်္ဂနွေဖြစ်ပါစေ!"
    },
    {
      id: "hsk1_108",
      hanzi: "你去过中国吗？",
      pinyin: "nǐ qù guò Zhōng guó ma?",
      burmese: "မင်းတရုတ်ပြည်ကိုရောက်ဖူးလား?"
    },
    {
      id: "hsk1_109",
      hanzi: "我没去过。",
      pinyin: "wǒ méi qù guò.",
      burmese: "ကျွန်တော်မရောက်ဖူးဘူး။"
    },
    {
      id: "hsk1_110",
      hanzi: "这是什么意思？",
      pinyin: "zhè shì shén me yì si?",
      burmese: "ဒါဘာအဓိပ္ပာယ်လဲ?"
    },
    {
      id: "hsk1_111",
      hanzi: "我不知道。",
      pinyin: "wǒ bù zhī dào.",
      burmese: "ကျွန်တော်မသိဘူး။"
    },
    {
      id: "hsk1_112",
      hanzi: "今天星期几？",
      pinyin: "jīn tiān xīng qī jǐ?",
      burmese: "ဒီနေ့ဘယ်နေ့လဲ (တနင်္လာ၊ အင်္ဂါ)?"
    },
    {
      id: "hsk1_113",
      hanzi: "今天星期五。",
      pinyin: "jīn tiān xīng qī wǔ.",
      burmese: "ဒီနေ့သောကြာနေ့ပါ။"
    },
    {
      id: "hsk1_114",
      hanzi: "你的生日是几月几号？",
      pinyin: "nǐ de shēng rì shì jǐ yuè jǐ hào?",
      burmese: "မင်းမွေးနေ့ကဘယ်လ၊ ဘယ်ရက်လဲ?"
    },
    {
      id: "hsk1_115",
      hanzi: "我想去商店。",
      pinyin: "wǒ xiǎng qù shāng diàn.",
      burmese: "ကျွန်တော်ဆိုင်ကိုသွားချင်တယ်။"
    },
    {
      id: "hsk1_116",
      hanzi: "你会开车吗？",
      pinyin: "nǐ huì kāi chē ma?",
      burmese: "မင်းကားမောင်းတတ်လား?"
    },
    {
      id: "hsk1_117",
      hanzi: "我不会开车。",
      pinyin: "wǒ bú huì kāi chē.",
      burmese: "ကျွန်တော်ကားမမောင်းတတ်ဘူး。"
    },
    {
      id: "hsk1_118",
      hanzi: "这个菜很好吃。",
      pinyin: "zhè ge cài hěn hǎo chī.",
      burmese: "ဒီဟင်းကအရမ်းစားလို့ကောင်းတယ်။"
    },
    {
      id: "hsk1_119",
      hanzi: "我也觉得。",
      pinyin: "wǒ yě jué de.",
      burmese: "ကျွန်တော်လည်းဒီလိုပဲထင်တယ်။"
    },
    {
      id: "hsk1_120",
      hanzi: "你看电影了吗？",
      pinyin: "nǐ kàn diàn yǐng le ma?",
      burmese: "မင်းရုပ်ရှင်ကြည့်ပြီးပြီလား?"
    },
    {
      id: "hsk1_121",
      hanzi: "电影不太好。",
      pinyin: "diàn yǐng bú tài hǎo.",
      burmese: "ရုပ်ရှင်ကသိပ်မကောင်းဘူး။"
    },
    {
      id: "hsk1_122",
      hanzi: "我们去哪儿？",
      pinyin: "wǒ men qù nǎr?",
      burmese: "ငါတို့ဘယ်သွားမလဲ?"
    },
    {
      id: "hsk1_123",
      hanzi: "随便。",
      pinyin: "suí biàn.",
      burmese: "သဘောပဲ (ကြိုက်တဲ့နေရာ)။"
    },
    {
      id: "hsk1_124",
      hanzi: "你有什么问题？",
      pinyin: "nǐ yǒu shén me wèn tí?",
      burmese: "မင်းမှာဘာမေးစရာ(ပြဿနာ)ရှိလဲ?"
    },
    {
      id: "hsk1_125",
      hanzi: "我没有问题。",
      pinyin: "wǒ méi yǒu wèn tí.",
      burmese: "ကျွန်တော့်မှာမေးစရာမရှိပါဘူး။"
    },
    {
      id: "hsk1_126",
      hanzi: "你今天怎么样？",
      pinyin: "nǐ jīn tiān zěn me yàng?",
      burmese: "ဒီနေ့နေကောင်းလား?"
    },
    {
      id: "hsk1_127",
      hanzi: "我很好。",
      pinyin: "wǒ hěn hǎo.",
      burmese: "ကျွန်တော်အရမ်းနေကောင်းတယ်။"
    },
    {
      id: "hsk1_128",
      hanzi: "你喜欢什么颜色？",
      pinyin: "nǐ xǐ huan shén me yán sè?",
      burmese: "မင်းဘယ်အရောင်ကိုကြိုက်လဲ?"
    },
    {
      id: "hsk1_129",
      hanzi: "我喜欢红色。",
      pinyin: "wǒ xǐ huan hóng sè.",
      burmese: "ကျွန်တော်အနီရောင်ကြိုက်တယ်။"
    },
    {
      id: "hsk1_130",
      hanzi: "我想去睡觉。",
      pinyin: "wǒ xiǎng qù shuì jiào.",
      burmese: "ကျွန်တော်အိပ်ချင်တယ်။"
    },
    {
      id: "hsk1_131",
      hanzi: "你做什么工作？",
      pinyin: "nǐ zuò shén me gōng zuò?",
      burmese: "မင်းဘာအလုပ်လုပ်လဲ?"
    },
    {
      id: "hsk1_132",
      hanzi: "我是老师。",
      pinyin: "wǒ shì lǎo shī.",
      burmese: "ကျွန်တော်ဆရာပါ။"
    },
    {
      id: "hsk1_133",
      hanzi: "你学汉语多久了？",
      pinyin: "nǐ xué hàn yǔ duō jiǔ le?",
      burmese: "မင်းတရုတ်စာသင်တာဘယ်လောက်ကြာပြီလဲ?"
    },
    {
      id: "hsk1_134",
      hanzi: "三个月。",
      pinyin: "sān ge yuè.",
      burmese: "သုံးလပါ။"
    },
    {
      id: "hsk1_135",
      hanzi: "你的汉语很好！",
      pinyin: "nǐ de hàn yǔ hěn hǎo!",
      burmese: "မင်းတရုတ်စကားအရမ်းကောင်းတယ်။"
    },
    {
      id: "hsk1_136",
      hanzi: "哪里哪里。",
      pinyin: "nǎ lǐ nǎ lǐ.",
      burmese: "မကောင်းပါဘူး(နှိမ့်ချပြောဆိုခြင်း)။"
    },
    {
      id: "hsk1_137",
      hanzi: "洗手间在哪儿？",
      pinyin: "xǐ shǒu jiān zài nǎr?",
      burmese: "သန့်စင်ခန်းဘယ်မှာလဲ?"
    },
    {
      id: "hsk1_138",
      hanzi: "在前面。",
      pinyin: "zài qián miàn.",
      burmese: "အရှေ့မှာပါ။"
    },
    {
      id: "hsk1_139",
      hanzi: "你有人民币吗？",
      pinyin: "nǐ yǒu rén mín bì ma?",
      burmese: "မင်းမှာယွမ်ငွေရှိလား?"
    },
    {
      id: "hsk1_140",
      hanzi: "多少钱一斤？",
      pinyin: "duō shǎo qián yì jīn?",
      burmese: "တစ်ကျင်း(ကီလိုဝက်)ကိုဘယ်လောက်လဲ?"
    },
    {
      id: "hsk1_141",
      hanzi: "我感冒了。",
      pinyin: "wǒ gǎn mào le.",
      burmese: "ကျွန်တော်အအေးမိနေတယ်။"
    },
    {
      id: "hsk1_142",
      hanzi: "你需要吃药。",
      pinyin: "nǐ xū yào chī yào.",
      burmese: "မင်းဆေးသောက်ဖို့လိုတယ်။"
    },
    {
      id: "hsk1_143",
      hanzi: "你可以帮我拍照吗？",
      pinyin: "nǐ kě yǐ bāng wǒ pāi zhào ma?",
      burmese: "မင်းငါ့ကိုဓာတ်ပုံရိုက်ပေးလို့ရမလား?"
    },
    {
      id: "hsk1_144",
      hanzi: "一、二、三，笑！",
      pinyin: "yī, èr, sān, xiào!",
      burmese: "တစ်၊ နှစ်၊ သုံး၊ ပြုံးပါ!"
    },
    {
      id: "hsk1_145",
      hanzi: "这个太辣了。",
      pinyin: "zhè ge tài là le.",
      burmese: "ဒါအရမ်းစပ်တယ်။"
    },
    {
      id: "hsk1_146",
      hanzi: "请不要放辣。",
      pinyin: "qǐng bú yào fàng là.",
      burmese: "ကျေးဇူးပြုပြီးအစပ်မထည့်ပါနဲ့။"
    },
    {
      id: "hsk1_147",
      hanzi: "我饿了。",
      pinyin: "wǒ è le.",
      burmese: "ကျွန်တော်ဗိုက်ဆာတယ်။"
    },
    {
      id: "hsk1_148",
      hanzi: "我渴了。",
      pinyin: "wǒ kě le.",
      burmese: "ကျွန်တော်ရေဆာတယ်။"
    },
    {
      id: "hsk1_149",
      hanzi: "你有什么爱好？",
      pinyin: "nǐ yǒu shén me ài hào?",
      burmese: "မင်းဝါသနာဘာလဲ?"
    },
    {
      id: "hsk1_150",
      hanzi: "我喜欢听音乐。",
      pinyin: "wǒ xǐ huan tīng yīn yuè.",
      burmese: "ကျွန်တော်သီချင်းနားထောင်တာကြိုက်တယ်။"
    },
    {
      id: "hsk1_151",
      hanzi: "我是程序员。",
      pinyin: "wǒ shì chéng xù yuán.",
      burmese: "ကျွန်တော်ပရိုဂရမ်မာပါ။"
    },
    {
      id: "hsk1_152",
      hanzi: "我在写代码。",
      pinyin: "wǒ zài xiě dài mǎ.",
      burmese: "ကျွန်တော်ကုဒ်ရေးနေတယ်။"
    },
    {
      id: "hsk1_153",
      hanzi: "你的电脑在哪儿？",
      pinyin: "nǐ de diàn nǎo zài nǎr?",
      burmese: "မင်းကွန်ပျူတာဘယ်မှာလဲ?"
    },
    {
      id: "hsk1_154",
      hanzi: "网页做好了。",
      pinyin: "wǎng yè zuò hǎo le.",
      burmese: "ဝဘ်စာမျက်နှာလုပ်လို့ပြီးပြီ။"
    },
    {
      id: "hsk1_155",
      hanzi: "网站坏了。",
      pinyin: "wǎng zhàn huài le.",
      burmese: "ဝဘ်ဆိုဒ်ပျက်နေတယ်။"
    },
    {
      id: "hsk1_156",
      hanzi: "请帮我看看这个问题。",
      pinyin: "qǐng bāng wǒ kàn kan zhè ge wèn tí.",
      burmese: "ဒီပြဿနာကိုကျေးဇူးပြုပြီးကြည့်ပေးပါ။"
    },
    {
      id: "hsk1_157",
      hanzi: "我不懂这个代码。",
      pinyin: "wǒ bù dǒng zhè ge dài mǎ.",
      burmese: "ဒီကုဒ်ကိုကျွန်တော်နားမလည်ဘူး။"
    },
    {
      id: "hsk1_158",
      hanzi: "我们需要一个新网站。",
      pinyin: "wǒ men xū yào yí ge xīn wǎng zhàn.",
      burmese: "ငါတို့ဝဘ်ဆိုဒ်အသစ်တစ်ခုလိုတယ်။"
    },
    {
      id: "hsk1_159",
      hanzi: "苹果电脑很贵。",
      pinyin: "píng guǒ diàn nǎo hěn guì.",
      burmese: "Apple ကွန်ပျူတာကအရမ်းဈေးကြီးတယ်။"
    },
    {
      id: "hsk1_160",
      hanzi: "今天工作很多。",
      pinyin: "jīn tiān gōng zuò hěn duō.",
      burmese: "ဒီနေ့အလုပ်အရမ်းများတယ်။"
    },
    {
      id: "hsk1_161",
      hanzi: "屏幕太小了。",
      pinyin: "píng mù tài xiǎo le.",
      burmese: "မျက်နှာပြင်အရမ်းသေးတယ်။"
    },
    {
      id: "hsk1_162",
      hanzi: "我没有网。",
      pinyin: "wǒ méi yǒu wǎng.",
      burmese: "ကျွန်တော့်မှာအင်တာနက်မရှိဘူး။"
    },
    {
      id: "hsk1_163",
      hanzi: "你能上网吗？",
      pinyin: "nǐ néng shàng wǎng ma?",
      burmese: "မင်းအင်တာနက်သုံးလို့ရလား?"
    },
    {
      id: "hsk1_164",
      hanzi: "我在公司加班。",
      pinyin: "wǒ zài gōng sī jiā bān.",
      burmese: "ကျွန်တော်ရုံးမှာအချိန်ပိုဆင်းနေတယ်။"
    },
    {
      id: "hsk1_165",
      hanzi: "这个Bug很多。",
      pinyin: "zhè ge Bug hěn duō.",
      burmese: "ဒီမှာ bug အများကြီးရှိတယ်။"
    },
    {
      id: "hsk1_166",
      hanzi: "你什么时候下班？",
      pinyin: "nǐ shén me shí hou xià bān?",
      burmese: "မင်းဘယ်အချိန်ရုံးဆင်းမလဲ?"
    },
    {
      id: "hsk1_167",
      hanzi: "我做前端。",
      pinyin: "wǒ zuò qián duān.",
      burmese: "ကျွန်တော် Frontend လုပ်တယ်။"
    },
    {
      id: "hsk1_168",
      hanzi: "他做后端。",
      pinyin: "tā zuò hòu duān.",
      burmese: "သူက Backend လုပ်တယ်။"
    },
    {
      id: "hsk1_169",
      hanzi: "服务器在哪儿？",
      pinyin: "fú wù qì zài nǎr?",
      burmese: "ဆာဗာဘယ်မှာလဲ?"
    },
    {
      id: "hsk1_170",
      hanzi: "请给我数据库的密码。",
      pinyin: "qǐng gěi wǒ shù jù kù de mì mǎ.",
      burmese: "ဒေတာဘေ့စ်စကားဝှက်ကိုပေးပါ။"
    },
    {
      id: "hsk1_171",
      hanzi: "太卡了。",
      pinyin: "tài kǎ le.",
      burmese: "အရမ်းထစ်နေတယ်။"
    },
    {
      id: "hsk1_172",
      hanzi: "系统出错了。",
      pinyin: "xì tǒng chū cuò le.",
      burmese: "စနစ်မှာအမှားဖြစ်သွားတယ်။"
    },
    {
      id: "hsk1_173",
      hanzi: "今天会上线吗？",
      pinyin: "jīn tiān huì shàng xiàn ma?",
      burmese: "ဒီနေ့ Live လွှင့်မှာလား?"
    },
    {
      id: "hsk1_174",
      hanzi: "明天上线。",
      pinyin: "míng tiān shàng xiàn.",
      burmese: "မနက်ဖြန် Live လွှင့်မယ်။"
    },
    {
      id: "hsk1_175",
      hanzi: "这个设计不好看。",
      pinyin: "zhè ge shè jì bù hǎo kàn.",
      burmese: "ဒီဒီဇိုင်းကမလှဘူး။"
    },
    {
      id: "hsk1_176",
      hanzi: "用户不喜欢。",
      pinyin: "yòng hù bù xǐ huan.",
      burmese: "အသုံးပြုသူတွေမကြိုက်ဘူး。"
    },
    {
      id: "hsk1_177",
      hanzi: "代码写完了。",
      pinyin: "dài mǎ xiě wán le.",
      burmese: "ကုဒ်ရေးလို့ပြီးပြီ。"
    },
    {
      id: "hsk1_178",
      hanzi: "还在测试。",
      pinyin: "hái zài cè shì.",
      burmese: "စမ်းသပ်နေတုန်းပဲ。"
    },
    {
      id: "hsk1_179",
      hanzi: "测试通过了。",
      pinyin: "cè shì tōng guò le.",
      burmese: "စမ်းသပ်တာအောင်မြင်သွားပြီ။"
    },
    {
      id: "hsk1_180",
      hanzi: "我需要喝咖啡。",
      pinyin: "wǒ xū yào hē kā fēi.",
      burmese: "ကျွန်တော်ကော်ဖီသောက်ဖို့လိုတယ်။"
    },
    {
      id: "hsk1_181",
      hanzi: "键盘坏了。",
      pinyin: "jiàn pán huài le.",
      burmese: "ကီးဘုတ်ပျက်နေတယ်။"
    },
    {
      id: "hsk1_182",
      hanzi: "鼠标在哪儿？",
      pinyin: "shǔ biāo zài nǎr?",
      burmese: "မောက်စ်ဘယ်မှာလဲ?"
    },
    {
      id: "hsk1_183",
      hanzi: "这个字太小了。",
      pinyin: "zhè ge zì tài xiǎo le.",
      burmese: "ဒီစာလုံးအရမ်းသေးတယ်။"
    },
    {
      id: "hsk1_184",
      hanzi: "换一个颜色。",
      pinyin: "huàn yí ge yán sè.",
      burmese: "အရောင်ပြောင်းပါ။"
    },
    {
      id: "hsk1_185",
      hanzi: "我觉得这个蓝色好看。",
      pinyin: "wǒ jué de zhè ge lán sè hǎo kàn.",
      burmese: "ဒီအပြာရောင်လှတယ်လို့ကျွန်တော်ထင်တယ်။"
    },
    {
      id: "hsk1_186",
      hanzi: "你可以修改一下吗？",
      pinyin: "nǐ kě yǐ xiū gǎi yí xià ma?",
      burmese: "မင်းခဏလောက်ပြင်ပေးနိုင်မလား?"
    },
    {
      id: "hsk1_187",
      hanzi: "没问题，马上改。",
      pinyin: "méi wèn tí, mǎ shàng gǎi.",
      burmese: "ပြဿနာမရှိပါဘူး၊ အခုချက်ချင်းပြင်လိုက်မယ်။"
    },
    {
      id: "hsk1_188",
      hanzi: "字不够大。",
      pinyin: "zì bú gòu dà.",
      burmese: "စာလုံးမကြီးလောက်ဘူး။"
    },
    {
      id: "hsk1_189",
      hanzi: "网页打开很慢。",
      pinyin: "wǎng yè dǎ kāi hěn màn.",
      burmese: "ဝဘ်စာမျက်နှာပွင့်တာအရမ်းနှေးတယ်။"
    },
    {
      id: "hsk1_190",
      hanzi: "我们需要快一点。",
      pinyin: "wǒ men xū yào kuài yì diǎnr.",
      burmese: "ငါတို့နည်းနည်းမြန်မြန်လုပ်ဖို့လိုတယ်။"
    },
    {
      id: "hsk1_191",
      hanzi: "经理在开会。",
      pinyin: "jīng lǐ zài kāi huì.",
      burmese: "မန်နေဂျာအစည်းအဝေးလုပ်နေတယ်။"
    },
    {
      id: "hsk1_192",
      hanzi: "手机上看不好。",
      pinyin: "shǒu jī shàng kàn bù hǎo.",
      burmese: "ဖုန်းပေါ်မှာကြည့်လို့မကောင်းဘူး။"
    },
    {
      id: "hsk1_193",
      hanzi: "这是新公司的项目。",
      pinyin: "zhè shì xīn gōng sī de xiàng mù.",
      burmese: "ဒါကကုမ္ပဏီအသစ်ရဲ့ပရောဂျက်ပါ။"
    },
    {
      id: "hsk1_194",
      hanzi: "你的邮件我看到了。",
      pinyin: "nǐ de yóu jiàn wǒ kàn dào le.",
      burmese: "မင်းရဲ့အီးမေးလ်ကိုငါတွေ့ပြီ။"
    },
    {
      id: "hsk1_195",
      hanzi: "我下午发给你。",
      pinyin: "wǒ xià wǔ fā gěi nǐ.",
      burmese: "ကျွန်တော်ညနေဘက်မင်းဆီပို့လိုက်မယ်။"
    },
    {
      id: "hsk1_196",
      hanzi: "这个很简单。",
      pinyin: "zhè ge hěn jiǎn dān.",
      burmese: "ဒါကအရမ်းရိုးရှင်းတယ်။"
    },
    {
      id: "hsk1_197",
      hanzi: "那个很难。",
      pinyin: "nà ge hěn nán.",
      burmese: "အဲ့ဒါကအရမ်းခက်တယ်။"
    },
    {
      id: "hsk1_198",
      hanzi: "我可以学习。",
      pinyin: "wǒ kě yǐ xué xí.",
      burmese: "ကျွန်တော်လေ့လာလို့ရတယ်။"
    },
    {
      id: "hsk1_199",
      hanzi: "你做得很好！",
      pinyin: "nǐ zuò de hěn hǎo!",
      burmese: "မင်းလုပ်တာအရမ်းကောင်းတယ်!"
    },
    {
      id: "hsk1_200",
      hanzi: "大家辛苦了！",
      pinyin: "dà jiā xīn kǔ le!",
      burmese: "အားလုံးပင်ပန်းသွားပြီ!"
    }

  ],
  2: [
    {
      id: "hsk2_1",
      hanzi: "你觉得这个电影怎么样？",
      pinyin: "nǐ jué de zhè ge diàn yǐng zěn me yàng?",
      burmese: "ဒီရုပ်ရှင်ကိုမင်းဘယ်လိုထင်လဲ?"
    },
    {
      id: "hsk2_2",
      hanzi: "我想去踢足球。",
      pinyin: "wǒ xiǎng qù tī zú qiú.",
      burmese: "ကျွန်တော်ဘောလုံးသွားကန်ချင်တယ်။"
    },
    {
      id: "hsk2_3",
      hanzi: "外边在下雪。",
      pinyin: "wài biān zài xià xuě.",
      burmese: "အပြင်မှာနှင်းကျနေတယ်။"
    },
    {
      id: "hsk2_4",
      hanzi: "你生病了吗？",
      pinyin: "nǐ shēng bìng le ma?",
      burmese: "မင်းနေမကောင်းဘူးလား?"
    },
    {
      id: "hsk2_5",
      hanzi: "我每天早上六点起床。",
      pinyin: "wǒ měi tiān zǎo shang liù diǎn qǐ chuáng.",
      burmese: "ကျွန်တော်နေ့တိုင်းမနက်ခြောက်နာရီအိပ်ရာထတယ်။"
    },
    {
      id: "hsk2_6",
      hanzi: "你可以帮我吗？",
      pinyin: "nǐ kě yǐ bāng wǒ ma?",
      burmese: "မင်းငါ့ကိုကူညီနိုင်မလား?"
    },
    {
      id: "hsk2_7",
      hanzi: "没问题。",
      pinyin: "méi wèn tí.",
      burmese: "ပြဿနာမရှိပါဘူး။"
    },
    {
      id: "hsk2_8",
      hanzi: "这件衣服有点儿贵。",
      pinyin: "zhè jiàn yī fu yǒu diǎnr guì.",
      burmese: "ဒီအင်္ကျီကနည်းနည်းဈေးကြီးတယ်။"
    },
    {
      id: "hsk2_9",
      hanzi: "她笑着说：“好”。",
      pinyin: "tā xiào zhe shuō: “hǎo”.",
      burmese: "သူမကပြုံးပြီး “ကောင်းပြီ” လို့ပြောတယ်။"
    },
    {
      id: "hsk2_10",
      hanzi: "你为什么不高兴？",
      pinyin: "nǐ wèi shén me bù gāo xìng?",
      burmese: "မင်းဘာလို့မပျော်ရတာလဲ?"
    },
    {
      id: "hsk2_11",
      hanzi: "因为我太累了。",
      pinyin: "yīn wèi wǒ tài lèi le.",
      burmese: "ဘာလို့လဲဆိုတော့ငါအရမ်းပင်ပန်းလို့ပါ။"
    },
    {
      id: "hsk2_12",
      hanzi: "请问，这个字怎么读？",
      pinyin: "qǐng wèn, zhè ge zì zěn me dú?",
      burmese: "တစ်ဆိတ်လောက်မေးပါရစေ၊ ဒီစာလုံးကိုဘယ်လိုဖတ်လဲ?"
    },
    {
      id: "hsk2_13",
      hanzi: "我懂了，谢谢。",
      pinyin: "wǒ dǒng le, xiè xie.",
      burmese: "ကျွန်တော်နားလည်ပါပြီ၊ ကျေးဇူးတင်ပါတယ်။"
    },
    {
      id: "hsk2_14",
      hanzi: "祝你生日快乐！",
      pinyin: "zhù nǐ shēng rì kuài lè!",
      burmese: "ပျော်ရွှင်စရာမွေးနေ့ပါ!"
    },
    {
      id: "hsk2_15",
      hanzi: "我们一起去吃饭吧。",
      pinyin: "wǒ men yì qǐ qù chī fàn ba.",
      burmese: "ငါတို့အတူတူသွားစားကြရအောင်။"
    },
    {
      id: "hsk2_16",
      hanzi: "这个房间真漂亮！",
      pinyin: "zhè ge fáng jiān zhēn piào liang!",
      burmese: "ဒီအခန်းကတကယ်လှတာပဲ!"
    },
    {
      id: "hsk2_17",
      hanzi: "别看了，时间不早了。",
      pinyin: "bié kàn le, shí jiān bù zǎo le.",
      burmese: "မကြည့်နဲ့တော့၊ အချိန်မစောတော့ဘူး။"
    },
    {
      id: "hsk2_18",
      hanzi: "我马上回来。",
      pinyin: "wǒ mǎ shàng huí lai.",
      burmese: "ကျွန်တော်အခုချက်ချင်းပြန်လာခဲ့မယ်။"
    },
    {
      id: "hsk2_19",
      hanzi: "你要不要喝咖啡？",
      pinyin: "nǐ yào bú yào hē kā fēi?",
      burmese: "မင်းကော်ဖီသောက်မလား?"
    },
    {
      id: "hsk2_20",
      hanzi: "我介绍一下我的朋友。",
      pinyin: "wǒ jiè shào yí xià wǒ de péng you.",
      burmese: "ကျွန်တော့်သူငယ်ချင်းကိုမိတ်ဆက်ပေးပါရစေ။"
    }
  ],
  3: [],
  4: [],
  5: []
};
