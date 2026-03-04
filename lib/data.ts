export type HSKLevel = 1 | 2 | 3 | 4 | 5;

export type ConversationCategory = "daily" | "web_dev" | "js_interview";

export interface HSKData {
  id: string;
  hanzi: string;
  pinyin: string;
  burmese: string;
  category?: ConversationCategory;
}

export const hskData: Record<HSKLevel, HSKData[]> = {
  "1": [
    {
      "id": "hsk1_1",
      "hanzi": "你好！",
      "pinyin": "nǐ hǎo!",
      "burmese": "မင်္ဂလာပါ!",
      "category": "daily"
    },
    {
      "id": "hsk1_2",
      "hanzi": "你叫什么名字？",
      "pinyin": "nǐ jiào shén me míng zi?",
      "burmese": "မင်းနာမည်ဘယ်လိုခေါ်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_3",
      "hanzi": "我叫大卫。",
      "pinyin": "wǒ jiào Dà wèi.",
      "burmese": "ကျွန်တော့်နာမည် ဒေးဗစ်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_4",
      "hanzi": "你多大了？",
      "pinyin": "nǐ duō dà le?",
      "burmese": "မင်းအသက်ဘယ်လောက်ရှိပြီလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_5",
      "hanzi": "我二十岁。",
      "pinyin": "wǒ èr shí suì.",
      "burmese": "ကျွန်တော်အသက် ၂၀ ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_6",
      "hanzi": "你是哪国人？",
      "pinyin": "nǐ shì nǎ guó rén?",
      "burmese": "မင်းဘယ်နိုင်ငံသားလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_7",
      "hanzi": "我是缅甸人。",
      "pinyin": "wǒ shì Miǎn diàn rén.",
      "burmese": "ကျွန်တော်က မြန်မာလူမျိုးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_8",
      "hanzi": "认识你很高兴。",
      "pinyin": "rèn shi nǐ hěn gāo xìng.",
      "burmese": "တွေ့ရတာဝမ်းသာပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_9",
      "hanzi": "再见！",
      "pinyin": "zài jiàn!",
      "burmese": "တာ့တာ!",
      "category": "daily"
    },
    {
      "id": "hsk1_10",
      "hanzi": "对不起。",
      "pinyin": "duì bu qǐ.",
      "burmese": "တောင်းပန်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_11",
      "hanzi": "没关系。",
      "pinyin": "méi guān xi.",
      "burmese": "ကိစ္စမရှိပါဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_12",
      "hanzi": "谢谢！",
      "pinyin": "xiè xie!",
      "burmese": "ကျေးဇူးတင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_13",
      "hanzi": "不客气。",
      "pinyin": "bú kè qi.",
      "burmese": "ရပါတယ်။ (အားမနာပါနဲ့)",
      "category": "daily"
    },
    {
      "id": "hsk1_14",
      "hanzi": "她是谁？",
      "pinyin": "tā shì shéi?",
      "burmese": "သူမက ဘယ်သူလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_15",
      "hanzi": "她是我妈妈。",
      "pinyin": "tā shì wǒ mā ma.",
      "burmese": "သူမက ကျွန်တော့်အမေပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_16",
      "hanzi": "这是什么？",
      "pinyin": "zhè shì shén me?",
      "burmese": "ဒါက ဘာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_17",
      "hanzi": "这是一本书。",
      "pinyin": "zhè shì yì běn shū.",
      "burmese": "ဒါက စာအုပ်တစ်အုပ်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_18",
      "hanzi": "他在哪儿？",
      "pinyin": "tā zài nǎr?",
      "burmese": "သူဘယ်မှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_19",
      "hanzi": "他在学校。",
      "pinyin": "tā zài xué xiào.",
      "burmese": "သူကျောင်းမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_20",
      "hanzi": "你喜欢吃什么？",
      "pinyin": "nǐ xǐ huan chī shén me?",
      "burmese": "မင်းဘာစားရတာ ကြိုက်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_21",
      "hanzi": "我喜欢吃米饭。",
      "pinyin": "wǒ xǐ huan chī mǐ fàn.",
      "burmese": "ကျွန်တော်ထမင်းစားရတာ ကြိုက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_22",
      "hanzi": "今天天气怎么样？",
      "pinyin": "jīn tiān tiān qì zěn me yàng?",
      "burmese": "ဒီနေ့ရာသီဥတုဘယ်လိုလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_23",
      "hanzi": "今天很热。",
      "pinyin": "jīn tiān hěn rè.",
      "burmese": "ဒီနေ့အရမ်းပူတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_24",
      "hanzi": "昨天没下雨。",
      "pinyin": "zuó tiān méi xià yǔ.",
      "burmese": "မနေ့ကမိုးမရွာဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_25",
      "hanzi": "现在几点？",
      "pinyin": "xiàn zài jǐ diǎn?",
      "burmese": "အခုဘယ်နှစ်နာရီရှိပြီလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_26",
      "hanzi": "现在十二点。",
      "pinyin": "xiàn zài shí èr diǎn.",
      "burmese": "အခုဆယ့်နှစ်နာရီပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_27",
      "hanzi": "你什么时候去中国？",
      "pinyin": "nǐ shén me shí hou qù Zhōng guó?",
      "burmese": "မင်းဘယ်တော့တရုတ်ကိုသွားမှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_28",
      "hanzi": "我明天去北京。",
      "pinyin": "wǒ míng tiān qù Běi jīng.",
      "burmese": "ကျွန်တော်မနက်ဖြန်ပေကျင်းကိုသွားမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_29",
      "hanzi": "你看见我的狗了吗？",
      "pinyin": "nǐ kàn jiàn wǒ de gǒu le ma?",
      "burmese": "ကျွန်တော့်ခွေးကို မင်းတွေ့မိသေးလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_30",
      "hanzi": "它在椅子下面。",
      "pinyin": "tā zài yǐ zi xià miàn.",
      "burmese": "သူက ကုလားထိုင်အောက်မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_31",
      "hanzi": "你买什么？",
      "pinyin": "nǐ mǎi shén me?",
      "burmese": "မင်းဘာဝယ်မလို့လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_32",
      "hanzi": "我买苹果。",
      "pinyin": "wǒ mǎi píng guǒ.",
      "burmese": "ကျွန်တော်ပန်းသီးဝယ်မလို့။",
      "category": "daily"
    },
    {
      "id": "hsk1_33",
      "hanzi": "这个多少钱？",
      "pinyin": "zhè ge duō shao qián?",
      "burmese": "ဒါဘယ်လောက်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_34",
      "hanzi": "八块钱。",
      "pinyin": "bā kuài qián.",
      "burmese": "ရှစ်ယွမ်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_35",
      "hanzi": "你去哪儿？",
      "pinyin": "nǐ qù nǎr?",
      "burmese": "မင်းဘယ်သွားမလို့လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_36",
      "hanzi": "我去医院。",
      "pinyin": "wǒ qù yī yuàn.",
      "burmese": "ကျွန်တော်ဆေးရုံကိုသွားမလို့။",
      "category": "daily"
    },
    {
      "id": "hsk1_37",
      "hanzi": "医生在吗？",
      "pinyin": "yī shēng zài ma?",
      "burmese": "ဆရာဝန်ရှိလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_38",
      "hanzi": "他不在。",
      "pinyin": "tā bú zài.",
      "burmese": "သူမရှိပါဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_39",
      "hanzi": "你会说汉语吗？",
      "pinyin": "nǐ huì shuō hàn yǔ ma?",
      "burmese": "မင်းတရုတ်စကားပြောတတ်လား?",
      "category": "daily"
    },
    {
      "id": "hsk1_40",
      "hanzi": "我会说汉语。",
      "pinyin": "wǒ huì shuō hàn yǔ.",
      "burmese": "ကျွန်တော်တရုတ်စကားပြောတတ်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_41",
      "hanzi": "怎么去火车站？",
      "pinyin": "zěn me qù huǒ chē zhàn?",
      "burmese": "ရထားဘူတာရုံကိုဘယ်လိုသွားရမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_42",
      "hanzi": "坐出租车去。",
      "pinyin": "zuò chū zū chē qù.",
      "burmese": "အငှားကားစီးပြီးသွားပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_43",
      "hanzi": "下雨了。",
      "pinyin": "xià yǔ le.",
      "burmese": "မိုးရွာနေပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk1_44",
      "hanzi": "你可以喝茶。",
      "pinyin": "nǐ kě yǐ hē chá.",
      "burmese": "မင်းလက်ဖက်ရည်သောက်လို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_45",
      "hanzi": "我没有钱。",
      "pinyin": "wǒ méi yǒu qián.",
      "burmese": "ကျွန်တော့်မှာပိုက်ဆံမရှိဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk1_46",
      "hanzi": "他在打电话。",
      "pinyin": "tā zài dǎ diàn huà.",
      "burmese": "သူဖုန်းပြောနေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_47",
      "hanzi": "那个人是谁？",
      "pinyin": "nà ge rén shì shéi?",
      "burmese": "အဲ့လူကဘယ်သူလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_48",
      "hanzi": "他是我同学。",
      "pinyin": "tā shì wǒ tóng xué.",
      "burmese": "သူကကျွန်တော့်ကျောင်းနေဖက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_49",
      "hanzi": "请坐。",
      "pinyin": "qǐng zuò.",
      "burmese": "ထိုင်ပါခင်ဗျာ။",
      "category": "daily"
    },
    {
      "id": "hsk1_50",
      "hanzi": "你想吃东西吗？",
      "pinyin": "nǐ xiǎng chī dōng xi ma?",
      "burmese": "မင်းတစ်ခုခုစားချင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk1_51",
      "hanzi": "我不吃，谢谢。",
      "pinyin": "wǒ bù chī, xiè xie.",
      "burmese": "ကျွန်တော်မစားဘူး၊ ကျေးဇူးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_52",
      "hanzi": "请喝水。",
      "pinyin": "qǐng hē shuǐ.",
      "burmese": "ရေသောက်ပါခင်ဗျာ။",
      "category": "daily"
    },
    {
      "id": "hsk1_53",
      "hanzi": "这些是什么？",
      "pinyin": "zhè xiē shì shén me?",
      "burmese": "ဒါတွေကဘာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_54",
      "hanzi": "这些是我的书。",
      "pinyin": "zhè xiē shì wǒ de shū.",
      "burmese": "ဒါတွေကကျွန်တော့်စာအုပ်တွေပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_55",
      "hanzi": "李老师在吗？",
      "pinyin": "Lǐ lǎo shī zài ma?",
      "burmese": "ဆရာမလီရှိလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_56",
      "hanzi": "她在家。",
      "pinyin": "tā zài jiā.",
      "burmese": "သူမအိမ်မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_57",
      "hanzi": "这个星期我不去学校。",
      "pinyin": "zhè ge xīng qī wǒ bú qù xué xiào.",
      "burmese": "ဒီအပတ်ကျွန်တော်ကျောင်းမသွားဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_58",
      "hanzi": "怎么用电脑？",
      "pinyin": "zěn me yòng diàn nǎo?",
      "burmese": "ကွန်ပျူတာဘယ်လိုသုံးရမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_59",
      "hanzi": "我爱你。",
      "pinyin": "wǒ ài nǐ.",
      "burmese": "မင်းကိုချစ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_60",
      "hanzi": "谁是你的好朋友？",
      "pinyin": "shéi shì nǐ de hǎo péng you?",
      "burmese": "ဘယ်သူကမင်းရဲ့သူငယ်ချင်းကောင်းလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_61",
      "hanzi": "请问，去医院怎么走？",
      "pinyin": "qǐng wèn, qù yī yuàn zěn me zǒu?",
      "burmese": "တစ်ဆိတ်လောက်မေးပါရစေ၊ ဆေးရုံကိုဘယ်လိုသွားရမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_62",
      "hanzi": "我听不懂，请再说一次。",
      "pinyin": "wǒ tīng bù dǒng, qǐng zài shuō yí cì.",
      "burmese": "ကျွန်တော်နားမလည်ဘူး၊ ကျေးဇူးပြုပြီးနောက်တစ်ခေါက်ပြောပေးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_63",
      "hanzi": "你的电话号码是多少？",
      "pinyin": "nǐ de diàn huà hào mǎ shì duō shǎo?",
      "burmese": "မင်းဖုန်းနံပါတ်ဘယ်လောက်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_64",
      "hanzi": "你会写汉字吗？",
      "pinyin": "nǐ huì xiě hàn zì ma?",
      "burmese": "မင်းတရုတ်စာရေးတတ်လား?",
      "category": "daily"
    },
    {
      "id": "hsk1_65",
      "hanzi": "我只认识一点儿。",
      "pinyin": "wǒ zhǐ rèn shí yì diǎnr.",
      "burmese": "ကျွန်တော်နည်းနည်းပဲသိ(မှတ်မိ)တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_66",
      "hanzi": "买单 / 结账！",
      "pinyin": "mǎi dān / jié zhàng!",
      "burmese": "ငွေရှင်းမယ်!",
      "category": "daily"
    },
    {
      "id": "hsk1_67",
      "hanzi": "太贵了，便宜一点儿吧。",
      "pinyin": "tài guì le, pián yí yì diǎnr ba.",
      "burmese": "အရမ်းဈေးကြီးတယ်၊ နည်းနည်းလျှော့ပေးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_68",
      "hanzi": "你想买几个？",
      "pinyin": "nǐ xiǎng mǎi jǐ ge?",
      "burmese": "မင်းဘယ်နှစ်ခု(လုံး)ဝယ်ချင်တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_69",
      "hanzi": "今天我不工作。",
      "pinyin": "jīn tiān wǒ bù gōng zuò.",
      "burmese": "ဒီနေ့ကျွန်တော်အလုပ်မလုပ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_70",
      "hanzi": "你在看什么书？",
      "pinyin": "nǐ zài kàn shén me shū?",
      "burmese": "မင်းဘာစာအုပ်ဖတ်နေတာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_71",
      "hanzi": "我想去中国旅游。",
      "pinyin": "wǒ xiǎng qù Zhōng guó lǚ yóu.",
      "burmese": "ကျွန်တော်တရုတ်ပြည်ကိုခရီးသွားချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_72",
      "hanzi": "明天的天气怎么样？",
      "pinyin": "míng tiān de tiān qì zěn me yàng?",
      "burmese": "မနက်ဖြန်ရာသီဥတုဘယ်လိုလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_73",
      "hanzi": "明天可能下雨。",
      "pinyin": "míng tiān kě néng xià yǔ.",
      "burmese": "မနက်ဖြန်မိုးရွာနိုင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_74",
      "hanzi": "你的家有多大？",
      "pinyin": "nǐ de jiā yǒu duō dà?",
      "burmese": "မင်းအိမ်ဘယ်လောက်ကြီးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_75",
      "hanzi": "我的家很大。",
      "pinyin": "wǒ de jiā hěn dà.",
      "burmese": "ကျွန်တော့်အိမ်အရမ်းကြီးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_76",
      "hanzi": "这里有人吗？",
      "pinyin": "zhè lǐ yǒu rén ma?",
      "burmese": "ဒီမှာလူရှိလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_77",
      "hanzi": "没有人，请坐。",
      "pinyin": "méi yǒu rén, qǐng zuò.",
      "burmese": "လူမရှိပါဘူး၊ ထိုင်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_78",
      "hanzi": "我想买一杯咖啡。",
      "pinyin": "wǒ xiǎng mǎi yì bēi kā fēi.",
      "burmese": "ကျွန်တော်ကော်ဖီတစ်ခွက်ဝယ်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_79",
      "hanzi": "好的，请稍等。",
      "pinyin": "hǎo de, qǐng shāo děng.",
      "burmese": "ကောင်းပါပြီ၊ ခဏစောင့်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_80",
      "hanzi": "很高兴认识你。",
      "pinyin": "hěn gāo xìng rèn shi nǐ.",
      "burmese": "မင်းကိုသိရတာဝမ်းသာပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_81",
      "hanzi": "我今天很忙。",
      "pinyin": "wǒ jīn tiān hěn máng.",
      "burmese": "ဒီနေ့ကျွန်တော်အရမ်းအလုပ်များတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_82",
      "hanzi": "请跟我来。",
      "pinyin": "qǐng gēn wǒ lái.",
      "burmese": "ကျွန်တော့်နောက်လိုက်ခဲ့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_83",
      "hanzi": "你在找什么？",
      "pinyin": "nǐ zài zhǎo shén me?",
      "burmese": "မင်းဘာရှာနေတာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_84",
      "hanzi": "我在找我的手机。",
      "pinyin": "wǒ zài zhǎo wǒ de shǒu jī.",
      "burmese": "ကျွန်တော်ဖုန်းရှာနေတာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_85",
      "hanzi": "你住在哪儿？",
      "pinyin": "nǐ zhù zài nǎr?",
      "burmese": "မင်းဘယ်မှာနေလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_86",
      "hanzi": "我住在北京。",
      "pinyin": "wǒ zhù zài Běi jīng.",
      "burmese": "ကျွန်တော်ပေကျင်းမှာနေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_87",
      "hanzi": "这是谁的？",
      "pinyin": "zhè shì shéi de?",
      "burmese": "ဒါဘယ်သူ့ဟာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_88",
      "hanzi": "这是我的。",
      "pinyin": "zhè shì wǒ de.",
      "burmese": "ဒါကျွန်တော့်ဟာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_89",
      "hanzi": "我不认识他。",
      "pinyin": "wǒ bù rèn shí tā.",
      "burmese": "ကျွန်တော်သူ့ကိုမသိ(မရင်းနှီး)ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_90",
      "hanzi": "你要做什么？",
      "pinyin": "nǐ yào zuò shén me?",
      "burmese": "မင်းဘာလုပ်မလို့လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_91",
      "hanzi": "我们在学校学习。",
      "pinyin": "wǒ men zài xué xiào xué xí.",
      "burmese": "ငါတို့ကျောင်းမှာစာသင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_92",
      "hanzi": "这是你的吗？",
      "pinyin": "zhè shì nǐ de ma?",
      "burmese": "ဒါမင်းဟာလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_93",
      "hanzi": "那不是我的。",
      "pinyin": "nà bú shì wǒ de.",
      "burmese": "အဲ့ဒါကျွန်တော့်ဟာမဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_94",
      "hanzi": "我要休息十分钟。",
      "pinyin": "wǒ yào xiū xi shí fēn zhōng.",
      "burmese": "ကျွန်တော်ဆယ်မိနစ်နားချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_95",
      "hanzi": "你喜欢这个吗？",
      "pinyin": "nǐ xǐ huan zhè ge ma?",
      "burmese": "မင်းဒါကိုကြိုက်လား?",
      "category": "daily"
    },
    {
      "id": "hsk1_96",
      "hanzi": "我很喜欢。",
      "pinyin": "wǒ hěn xǐ huan.",
      "burmese": "ကျွန်တော်အရမ်းကြိုက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_97",
      "hanzi": "太大了。",
      "pinyin": "tài dà le.",
      "burmese": "အရမ်းကြီးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_98",
      "hanzi": "太小了。",
      "pinyin": "tài xiǎo le.",
      "burmese": "အရမ်းသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_99",
      "hanzi": "你要去哪儿吃饭？",
      "pinyin": "nǐ yào qù nǎr chī fàn?",
      "burmese": "မင်းဘယ်သွားစားမလို့လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_100",
      "hanzi": "我要回家吃饭。",
      "pinyin": "wǒ yào huí jiā chī fàn.",
      "burmese": "ကျွန်တော်အိမ်ပြန်စားမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_101",
      "hanzi": "你在这儿工作吗？",
      "pinyin": "nǐ zài zhèr gōng zuò ma?",
      "burmese": "မင်းဒီမှာအလုပ်လုပ်တာလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_102",
      "hanzi": "对，我在这儿工作。",
      "pinyin": "duì, wǒ zài zhèr gōng zuò.",
      "burmese": "ဟုတ်တယ်၊ ကျွန်တော်ဒီမှာအလုပ်လုပ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_103",
      "hanzi": "你可以说慢一点儿吗？",
      "pinyin": "nǐ kě yǐ shuō màn yì diǎnr ma?",
      "burmese": "မင်းနည်းနည်းဖြည်းဖြည်းပြောနိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_104",
      "hanzi": "早上好！",
      "pinyin": "zǎo shang hǎo!",
      "burmese": "မင်္ဂလာနံနက်ခင်းပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_105",
      "hanzi": "晚上好！",
      "pinyin": "wǎn shang hǎo!",
      "burmese": "မင်္ဂလာညချမ်းပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_106",
      "hanzi": "晚安！",
      "pinyin": "wǎn ān!",
      "burmese": "ကောင်းသောညပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_107",
      "hanzi": "周末快乐！",
      "pinyin": "zhōu mò kuài lè!",
      "burmese": "ပျော်ရွှင်စရာစနေတနင်္ဂနွေဖြစ်ပါစေ!",
      "category": "daily"
    },
    {
      "id": "hsk1_108",
      "hanzi": "你去过中国吗？",
      "pinyin": "nǐ qù guò Zhōng guó ma?",
      "burmese": "မင်းတရုတ်ပြည်ကိုရောက်ဖူးလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_109",
      "hanzi": "我没去过。",
      "pinyin": "wǒ méi qù guò.",
      "burmese": "ကျွန်တော်မရောက်ဖူးဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_110",
      "hanzi": "这是什么意思？",
      "pinyin": "zhè shì shén me yì si?",
      "burmese": "ဒါဘာအဓိပ္ပာယ်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_111",
      "hanzi": "我不知道。",
      "pinyin": "wǒ bù zhī dào.",
      "burmese": "ကျွန်တော်မသိဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_112",
      "hanzi": "今天星期几？",
      "pinyin": "jīn tiān xīng qī jǐ?",
      "burmese": "ဒီနေ့ဘယ်နေ့လဲ (တနင်္လာ၊ အင်္ဂါ)?",
      "category": "daily"
    },
    {
      "id": "hsk1_113",
      "hanzi": "今天星期五。",
      "pinyin": "jīn tiān xīng qī wǔ.",
      "burmese": "ဒီနေ့သောကြာနေ့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_114",
      "hanzi": "你的生日是几月几号？",
      "pinyin": "nǐ de shēng rì shì jǐ yuè jǐ hào?",
      "burmese": "မင်းမွေးနေ့ကဘယ်လ၊ ဘယ်ရက်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_115",
      "hanzi": "我想去商店。",
      "pinyin": "wǒ xiǎng qù shāng diàn.",
      "burmese": "ကျွန်တော်ဆိုင်ကိုသွားချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_116",
      "hanzi": "你会开车吗？",
      "pinyin": "nǐ huì kāi chē ma?",
      "burmese": "မင်းကားမောင်းတတ်လား?",
      "category": "daily"
    },
    {
      "id": "hsk1_117",
      "hanzi": "我不会开车。",
      "pinyin": "wǒ bú huì kāi chē.",
      "burmese": "ကျွန်တော်ကားမမောင်းတတ်ဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk1_118",
      "hanzi": "这个菜很好吃。",
      "pinyin": "zhè ge cài hěn hǎo chī.",
      "burmese": "ဒီဟင်းကအရမ်းစားလို့ကောင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_119",
      "hanzi": "我也觉得。",
      "pinyin": "wǒ yě jué de.",
      "burmese": "ကျွန်တော်လည်းဒီလိုပဲထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_120",
      "hanzi": "你看电影了吗？",
      "pinyin": "nǐ kàn diàn yǐng le ma?",
      "burmese": "မင်းရုပ်ရှင်ကြည့်ပြီးပြီလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_121",
      "hanzi": "电影不太好。",
      "pinyin": "diàn yǐng bú tài hǎo.",
      "burmese": "ရုပ်ရှင်ကသိပ်မကောင်းဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_122",
      "hanzi": "我们去哪儿？",
      "pinyin": "wǒ men qù nǎr?",
      "burmese": "ငါတို့ဘယ်သွားမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_123",
      "hanzi": "随便。",
      "pinyin": "suí biàn.",
      "burmese": "သဘောပဲ (ကြိုက်တဲ့နေရာ)။",
      "category": "daily"
    },
    {
      "id": "hsk1_124",
      "hanzi": "你有什么问题？",
      "pinyin": "nǐ yǒu shén me wèn tí?",
      "burmese": "မင်းမှာဘာမေးစရာ(ပြဿနာ)ရှိလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_125",
      "hanzi": "我没有问题。",
      "pinyin": "wǒ méi yǒu wèn tí.",
      "burmese": "ကျွန်တော့်မှာမေးစရာမရှိပါဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_126",
      "hanzi": "你今天怎么样？",
      "pinyin": "nǐ jīn tiān zěn me yàng?",
      "burmese": "ဒီနေ့နေကောင်းလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_127",
      "hanzi": "我很好。",
      "pinyin": "wǒ hěn hǎo.",
      "burmese": "ကျွန်တော်အရမ်းနေကောင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_128",
      "hanzi": "你喜欢什么颜色？",
      "pinyin": "nǐ xǐ huan shén me yán sè?",
      "burmese": "မင်းဘယ်အရောင်ကိုကြိုက်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_129",
      "hanzi": "我喜欢红色。",
      "pinyin": "wǒ xǐ huan hóng sè.",
      "burmese": "ကျွန်တော်အနီရောင်ကြိုက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_130",
      "hanzi": "我想去睡觉。",
      "pinyin": "wǒ xiǎng qù shuì jiào.",
      "burmese": "ကျွန်တော်အိပ်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_131",
      "hanzi": "你做什么工作？",
      "pinyin": "nǐ zuò shén me gōng zuò?",
      "burmese": "မင်းဘာအလုပ်လုပ်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_132",
      "hanzi": "我是老师。",
      "pinyin": "wǒ shì lǎo shī.",
      "burmese": "ကျွန်တော်ဆရာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_133",
      "hanzi": "你学汉语多久了？",
      "pinyin": "nǐ xué hàn yǔ duō jiǔ le?",
      "burmese": "မင်းတရုတ်စာသင်တာဘယ်လောက်ကြာပြီလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_134",
      "hanzi": "三个月。",
      "pinyin": "sān ge yuè.",
      "burmese": "သုံးလပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_135",
      "hanzi": "你的汉语很好！",
      "pinyin": "nǐ de hàn yǔ hěn hǎo!",
      "burmese": "မင်းတရုတ်စကားအရမ်းကောင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_136",
      "hanzi": "哪里哪里。",
      "pinyin": "nǎ lǐ nǎ lǐ.",
      "burmese": "မကောင်းပါဘူး(နှိမ့်ချပြောဆိုခြင်း)။",
      "category": "daily"
    },
    {
      "id": "hsk1_137",
      "hanzi": "洗手间在哪儿？",
      "pinyin": "xǐ shǒu jiān zài nǎr?",
      "burmese": "သန့်စင်ခန်းဘယ်မှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_138",
      "hanzi": "在前面。",
      "pinyin": "zài qián miàn.",
      "burmese": "အရှေ့မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_139",
      "hanzi": "你有人民币吗？",
      "pinyin": "nǐ yǒu rén mín bì ma?",
      "burmese": "မင်းမှာယွမ်ငွေရှိလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_140",
      "hanzi": "多少钱一斤？",
      "pinyin": "duō shǎo qián yì jīn?",
      "burmese": "တစ်ကျင်း(ကီလိုဝက်)ကိုဘယ်လောက်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_141",
      "hanzi": "我感冒了。",
      "pinyin": "wǒ gǎn mào le.",
      "burmese": "ကျွန်တော်အအေးမိနေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_142",
      "hanzi": "你需要吃药。",
      "pinyin": "nǐ xū yào chī yào.",
      "burmese": "မင်းဆေးသောက်ဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_143",
      "hanzi": "你可以帮我拍照吗？",
      "pinyin": "nǐ kě yǐ bāng wǒ pāi zhào ma?",
      "burmese": "မင်းငါ့ကိုဓာတ်ပုံရိုက်ပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_144",
      "hanzi": "一、二、三，笑！",
      "pinyin": "yī, èr, sān, xiào!",
      "burmese": "တစ်၊ နှစ်၊ သုံး၊ ပြုံးပါ!",
      "category": "daily"
    },
    {
      "id": "hsk1_145",
      "hanzi": "这个太辣了。",
      "pinyin": "zhè ge tài là le.",
      "burmese": "ဒါအရမ်းစပ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_146",
      "hanzi": "请不要放辣。",
      "pinyin": "qǐng bú yào fàng là.",
      "burmese": "ကျေးဇူးပြုပြီးအစပ်မထည့်ပါနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk1_147",
      "hanzi": "我饿了。",
      "pinyin": "wǒ è le.",
      "burmese": "ကျွန်တော်ဗိုက်ဆာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_148",
      "hanzi": "我渴了。",
      "pinyin": "wǒ kě le.",
      "burmese": "ကျွန်တော်ရေဆာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_149",
      "hanzi": "你有什么爱好？",
      "pinyin": "nǐ yǒu shén me ài hào?",
      "burmese": "မင်းဝါသနာဘာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_150",
      "hanzi": "我喜欢听音乐。",
      "pinyin": "wǒ xǐ huan tīng yīn yuè.",
      "burmese": "ကျွန်တော်သီချင်းနားထောင်တာကြိုက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_151",
      "hanzi": "我是程序员。",
      "pinyin": "wǒ shì chéng xù yuán.",
      "burmese": "ကျွန်တော်ပရိုဂရမ်မာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_152",
      "hanzi": "我在写代码。",
      "pinyin": "wǒ zài xiě dài mǎ.",
      "burmese": "ကျွန်တော်ကုဒ်ရေးနေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_153",
      "hanzi": "你的电脑在哪儿？",
      "pinyin": "nǐ de diàn nǎo zài nǎr?",
      "burmese": "မင်းကွန်ပျူတာဘယ်မှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_154",
      "hanzi": "网页做好了。",
      "pinyin": "wǎng yè zuò hǎo le.",
      "burmese": "ဝဘ်စာမျက်နှာလုပ်လို့ပြီးပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk1_155",
      "hanzi": "网站坏了。",
      "pinyin": "wǎng zhàn huài le.",
      "burmese": "ဝဘ်ဆိုဒ်ပျက်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_156",
      "hanzi": "请帮我看看这个问题。",
      "pinyin": "qǐng bāng wǒ kàn kan zhè ge wèn tí.",
      "burmese": "ဒီပြဿနာကိုကျေးဇူးပြုပြီးကြည့်ပေးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_157",
      "hanzi": "我不懂这个代码。",
      "pinyin": "wǒ bù dǒng zhè ge dài mǎ.",
      "burmese": "ဒီကုဒ်ကိုကျွန်တော်နားမလည်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_158",
      "hanzi": "我们需要一个新网站。",
      "pinyin": "wǒ men xū yào yí ge xīn wǎng zhàn.",
      "burmese": "ငါတို့ဝဘ်ဆိုဒ်အသစ်တစ်ခုလိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_159",
      "hanzi": "苹果电脑很贵。",
      "pinyin": "píng guǒ diàn nǎo hěn guì.",
      "burmese": "Apple ကွန်ပျူတာကအရမ်းဈေးကြီးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_160",
      "hanzi": "今天工作很多。",
      "pinyin": "jīn tiān gōng zuò hěn duō.",
      "burmese": "ဒီနေ့အလုပ်အရမ်းများတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_161",
      "hanzi": "屏幕太小了。",
      "pinyin": "píng mù tài xiǎo le.",
      "burmese": "မျက်နှာပြင်အရမ်းသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_162",
      "hanzi": "我没有网。",
      "pinyin": "wǒ méi yǒu wǎng.",
      "burmese": "ကျွန်တော့်မှာအင်တာနက်မရှိဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_163",
      "hanzi": "你能上网吗？",
      "pinyin": "nǐ néng shàng wǎng ma?",
      "burmese": "မင်းအင်တာနက်သုံးလို့ရလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_164",
      "hanzi": "我在公司加班。",
      "pinyin": "wǒ zài gōng sī jiā bān.",
      "burmese": "ကျွန်တော်ရုံးမှာအချိန်ပိုဆင်းနေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_165",
      "hanzi": "这个Bug很多。",
      "pinyin": "zhè ge Bug hěn duō.",
      "burmese": "ဒီမှာ bug အများကြီးရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_166",
      "hanzi": "你什么时候下班？",
      "pinyin": "nǐ shén me shí hou xià bān?",
      "burmese": "မင်းဘယ်အချိန်ရုံးဆင်းမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_167",
      "hanzi": "我做前端。",
      "pinyin": "wǒ zuò qián duān.",
      "burmese": "ကျွန်တော် Frontend လုပ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_168",
      "hanzi": "他做后端。",
      "pinyin": "tā zuò hòu duān.",
      "burmese": "သူက Backend လုပ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_169",
      "hanzi": "服务器在哪儿？",
      "pinyin": "fú wù qì zài nǎr?",
      "burmese": "ဆာဗာဘယ်မှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_170",
      "hanzi": "请给我数据库的密码。",
      "pinyin": "qǐng gěi wǒ shù jù kù de mì mǎ.",
      "burmese": "ဒေတာဘေ့စ်စကားဝှက်ကိုပေးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_171",
      "hanzi": "太卡了。",
      "pinyin": "tài kǎ le.",
      "burmese": "အရမ်းထစ်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_172",
      "hanzi": "系统出错了。",
      "pinyin": "xì tǒng chū cuò le.",
      "burmese": "စနစ်မှာအမှားဖြစ်သွားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_173",
      "hanzi": "今天会上线吗？",
      "pinyin": "jīn tiān huì shàng xiàn ma?",
      "burmese": "ဒီနေ့ Live လွှင့်မှာလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_174",
      "hanzi": "明天上线。",
      "pinyin": "míng tiān shàng xiàn.",
      "burmese": "မနက်ဖြန် Live လွှင့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_175",
      "hanzi": "这个设计不好看。",
      "pinyin": "zhè ge shè jì bù hǎo kàn.",
      "burmese": "ဒီဒီဇိုင်းကမလှဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_176",
      "hanzi": "用户不喜欢。",
      "pinyin": "yòng hù bù xǐ huan.",
      "burmese": "အသုံးပြုသူတွေမကြိုက်ဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk1_177",
      "hanzi": "代码写完了。",
      "pinyin": "dài mǎ xiě wán le.",
      "burmese": "ကုဒ်ရေးလို့ပြီးပြီ。",
      "category": "daily"
    },
    {
      "id": "hsk1_178",
      "hanzi": "还在测试。",
      "pinyin": "hái zài cè shì.",
      "burmese": "စမ်းသပ်နေတုန်းပဲ。",
      "category": "daily"
    },
    {
      "id": "hsk1_179",
      "hanzi": "测试通过了。",
      "pinyin": "cè shì tōng guò le.",
      "burmese": "စမ်းသပ်တာအောင်မြင်သွားပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk1_180",
      "hanzi": "我需要喝咖啡。",
      "pinyin": "wǒ xū yào hē kā fēi.",
      "burmese": "ကျွန်တော်ကော်ဖီသောက်ဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_181",
      "hanzi": "键盘坏了。",
      "pinyin": "jiàn pán huài le.",
      "burmese": "ကီးဘုတ်ပျက်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_182",
      "hanzi": "鼠标在哪儿？",
      "pinyin": "shǔ biāo zài nǎr?",
      "burmese": "မောက်စ်ဘယ်မှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk1_183",
      "hanzi": "这个字太小了。",
      "pinyin": "zhè ge zì tài xiǎo le.",
      "burmese": "ဒီစာလုံးအရမ်းသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_184",
      "hanzi": "换一个颜色。",
      "pinyin": "huàn yí ge yán sè.",
      "burmese": "အရောင်ပြောင်းပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_185",
      "hanzi": "我觉得这个蓝色好看。",
      "pinyin": "wǒ jué de zhè ge lán sè hǎo kàn.",
      "burmese": "ဒီအပြာရောင်လှတယ်လို့ကျွန်တော်ထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_186",
      "hanzi": "你可以修改一下吗？",
      "pinyin": "nǐ kě yǐ xiū gǎi yí xià ma?",
      "burmese": "မင်းခဏလောက်ပြင်ပေးနိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk1_187",
      "hanzi": "没问题，马上改。",
      "pinyin": "méi wèn tí, mǎ shàng gǎi.",
      "burmese": "ပြဿနာမရှိပါဘူး၊ အခုချက်ချင်းပြင်လိုက်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_188",
      "hanzi": "字不够大。",
      "pinyin": "zì bú gòu dà.",
      "burmese": "စာလုံးမကြီးလောက်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_189",
      "hanzi": "网页打开很慢。",
      "pinyin": "wǎng yè dǎ kāi hěn màn.",
      "burmese": "ဝဘ်စာမျက်နှာပွင့်တာအရမ်းနှေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_190",
      "hanzi": "我们需要快一点。",
      "pinyin": "wǒ men xū yào kuài yì diǎnr.",
      "burmese": "ငါတို့နည်းနည်းမြန်မြန်လုပ်ဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_191",
      "hanzi": "经理在开会。",
      "pinyin": "jīng lǐ zài kāi huì.",
      "burmese": "မန်နေဂျာအစည်းအဝေးလုပ်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_192",
      "hanzi": "手机上看不好。",
      "pinyin": "shǒu jī shàng kàn bù hǎo.",
      "burmese": "ဖုန်းပေါ်မှာကြည့်လို့မကောင်းဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk1_193",
      "hanzi": "这是新公司的项目。",
      "pinyin": "zhè shì xīn gōng sī de xiàng mù.",
      "burmese": "ဒါကကုမ္ပဏီအသစ်ရဲ့ပရောဂျက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk1_194",
      "hanzi": "你的邮件我看到了。",
      "pinyin": "nǐ de yóu jiàn wǒ kàn dào le.",
      "burmese": "မင်းရဲ့အီးမေးလ်ကိုငါတွေ့ပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk1_195",
      "hanzi": "我下午发给你。",
      "pinyin": "wǒ xià wǔ fā gěi nǐ.",
      "burmese": "ကျွန်တော်ညနေဘက်မင်းဆီပို့လိုက်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_196",
      "hanzi": "这个很简单。",
      "pinyin": "zhè ge hěn jiǎn dān.",
      "burmese": "ဒါကအရမ်းရိုးရှင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_197",
      "hanzi": "那个很难。",
      "pinyin": "nà ge hěn nán.",
      "burmese": "အဲ့ဒါကအရမ်းခက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_198",
      "hanzi": "我可以学习。",
      "pinyin": "wǒ kě yǐ xué xí.",
      "burmese": "ကျွန်တော်လေ့လာလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk1_199",
      "hanzi": "你做得很好！",
      "pinyin": "nǐ zuò de hěn hǎo!",
      "burmese": "မင်းလုပ်တာအရမ်းကောင်းတယ်!",
      "category": "daily"
    },
    {
      "id": "hsk1_200",
      "hanzi": "大家辛苦了！",
      "pinyin": "dà jiā xīn kǔ le!",
      "burmese": "အားလုံးပင်ပန်းသွားပြီ!",
      "category": "daily"
    }
  ],
  "2": [
    {
      "id": "hsk2_1",
      "hanzi": "你今天打算在这个周末做什么？",
      "pinyin": "nǐ jīn tiān dǎ suàn zài zhè ge zhōu mò zuò shén me?",
      "burmese": "ဒီပိတ်ရက်မှာ မင်းဘာလုပ်ဖို့ရည်ရွယ်ထားလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_2",
      "hanzi": "我准备和朋友一起去外面吃饭，然后看电影。",
      "pinyin": "wǒ zhǔn bèi hé péng you yì qǐ qù wài miàn chī fàn, rán hòu kàn diàn yǐng.",
      "burmese": "သူငယ်ချင်းနဲ့အပြင်မှာထမင်းစားပြီးရင် ရုပ်ရှင်ကြည့်ဖို့ ပြင်ဆင်ထားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_3",
      "hanzi": "那家新开的饭馆味道很好，你想去试试吗？",
      "pinyin": "nà jiā xīn kāi de fàn guǎn wèi dào hěn hǎo, nǐ xiǎng qù shì shì ma?",
      "burmese": "အသစ်ဖွင့်တဲ့ စားသောက်ဆိုင်က အရသာအရမ်းကောင်းတယ်၊ မင်းသွားစမ်းကြည့်ချင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_4",
      "hanzi": "好的，我们几点见面？在哪里等？",
      "pinyin": "hǎo de, wǒ men jǐ diǎn jiàn miàn? zài nǎ lǐ děng?",
      "burmese": "ဟုတ်ကဲ့၊ ကျွန်တော်တို့ဘယ်အချိန်တွေ့ကြမလဲ? ဘယ်မှာစောင့်ရမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_5",
      "hanzi": "我们下午六点在离学校不远的地铁站见。",
      "pinyin": "wǒ men xià wǔ liù diǎn zài lí xué xiào bù yuǎn de dì tiě zhàn jiàn.",
      "burmese": "ကျွန်တော်တို့ညနေ ၆ နာရီ ကျောင်းနဲ့မဝေးတဲ့ မြေအောက်ရထားဘူတာရုံမှာတွေ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_6",
      "hanzi": "你觉得学习汉语最难的地方是什么？",
      "pinyin": "nǐ jué de xué xí hàn yǔ zuì nán de dì fang shì shén me?",
      "burmese": "တရုတ်စာလေ့လာတဲ့အခါ အခက်ဆုံးနေရာက ဘာလို့ထင်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_7",
      "hanzi": "我觉得汉字很难写，但是我喜欢听中文歌。",
      "pinyin": "wǒ jué de hàn zì hěn nán xiě, dàn shì wǒ xǐ huan tīng zhōng wén gē.",
      "burmese": "တရုတ်စာလုံးရေးရတာခက်တယ်လို့ထင်တယ်၊ ဒါပေမယ့် တရုတ်သီချင်းနားထောင်ရတာကိုကြိုက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_8",
      "hanzi": "只要每天练习，你的汉语一定会越来越好。",
      "pinyin": "zhǐ yào měi tiān liàn xí, nǐ de hàn yǔ yí dìng huì yuè lái yuè hǎo.",
      "burmese": "နေ့တိုင်းလေ့ကျင့်နေရင် မင်းရဲ့တရုတ်စာက သေချာပေါက် ပိုပိုကောင်းလာလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_9",
      "hanzi": "请问，从这里去火车站应该怎么走？",
      "pinyin": "qǐng wèn, cóng zhè lǐ qù huǒ chē zhàn yīng gāi zěn me zǒu?",
      "burmese": "တစ်ဆိတ်လောက်မေးပါရစေ၊ ဒီကနေ ရထားဘူတာရုံကို ဘယ်လိုသွားရမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_10",
      "hanzi": "你可以坐公共汽车，只用过了两个站就到了。",
      "pinyin": "nǐ kě yǐ zuò gōng gòng qì chē, zhǐ yòng guò le liǎng ge zhàn jiù dào le.",
      "burmese": "ဘတ်စ်ကားစီးသွားလို့ရတယ်၊ မှတ်တိုင်နှစ်ခုကျော်လိုက်တာနဲ့ ရောက်ပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk2_11",
      "hanzi": "今天天气太冷了，你出门要多穿点衣服。",
      "pinyin": "jīn tiān tiān qì tài lěng le, nǐ chū mén yào duō chuān diǎn yī fu.",
      "burmese": "ဒီနေ့ရာသီဥတုအရမ်းအေးတယ်၊ မင်းအပြင်သွားရင် အင်္ကျီပိုဝတ်ရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_12",
      "hanzi": "谢谢你的关心，我已经穿了两件毛衣。",
      "pinyin": "xiè xie nǐ de guān xīn, wǒ yǐ jīng chuān le liǎng jiàn máo yī.",
      "burmese": "ဂရုစိုက်ပေးတဲ့အတွက်ကျေးဇူးပါ၊ ငါသိုးမွှေးအင်္ကျီနှစ်ထည်ဝတ်ထားပြီးပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk2_13",
      "hanzi": "这件红色的衣服比那件白色的好看多了。",
      "pinyin": "zhè jiàn hóng sè de yī fu bǐ nà jiàn bái sè de hǎo kàn duō le.",
      "burmese": "ဒီအနီရောင်အင်္ကျီက ဟိုအဖြူရောင်ထက် အများကြီးပိုလှတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_14",
      "hanzi": "但是那件白色的更便宜，我想买白色的。",
      "pinyin": "dàn shì nà jiàn bái sè de gèng pián yi, wǒ xiǎng mǎi bái sè de.",
      "burmese": "ဒါပေမယ့် အဲ့အဖြူရောင်ကပိုဈေးပေါတယ်၊ ငါအဖြူရောင်ကိုဝယ်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_15",
      "hanzi": "你爸爸每天早上几点去公司上班？",
      "pinyin": "nǐ bà ba měi tiān zǎo shang jǐ diǎn qù gōng sī shàng bān?",
      "burmese": "မင်းအဖေက နေ့တိုင်းမနက်ဘယ်နှစ်နာရီ ကုမ္ပဏီကိုအလုပ်သွားလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_16",
      "hanzi": "他每天早上七点半出门，八点开始工作。",
      "pinyin": "tā měi tiān zǎo shang qī diǎn bàn chū mén, bā diǎn kāi shǐ gōng zuò.",
      "burmese": "သူနေ့တိုင်းမနက် ၇ နာရီခွဲအပြင်ထွက်ပြီး ၈ နာရီအလုပ်စတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_17",
      "hanzi": "你在中国住了多久了？习惯这里的生活吗？",
      "pinyin": "nǐ zài zhōng guó zhù le duō jiǔ le? xí guàn zhè lǐ de shēng huó ma?",
      "burmese": "မင်းတရုတ်နိုင်ငံမှာနေတာဘယ်လောက်ကြာပြီလဲ? ဒီကဘဝကိုအသားကျပြီလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_18",
      "hanzi": "我住了一年多了，非常习惯这儿的菜。",
      "pinyin": "wǒ zhù le yì nián duō le, fēi cháng xí guàn zhèr de cài.",
      "burmese": "ငါနေတာတစ်နှစ်ကျော်ပြီ၊ ဒီကဟင်းတွေကိုအရမ်းအသားကျနေပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk2_19",
      "hanzi": "昨天晚上你为什么没有接我的电话？",
      "pinyin": "zuó tiān wǎn shang nǐ wèi shén me méi yǒu jiē wǒ de diàn huà?",
      "burmese": "မနေ့ညက မင်းဘာလို့ငါ့ဖုန်းကိုမကိုင်တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_20",
      "hanzi": "真对不起，当时我正在洗澡，没听见手机响。",
      "pinyin": "zhēn duì bu qǐ, dāng shí wǒ zhèng zài xǐ zǎo, méi tīng jiàn shǒu jī xiǎng.",
      "burmese": "တကယ်တောင်းပန်ပါတယ်၊ အဲ့အချိန်ကငါရေချိုးနေလို့ ဖုန်းမြည်တာမကြားလိုက်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_21",
      "hanzi": "你的感冒好些了吗？需要我带你去医院吗？",
      "pinyin": "nǐ de gǎn mào hǎo xiē le ma? xū yào wǒ dài nǐ qù yī yuàn ma?",
      "burmese": "မင်းအအေးမိတာသက်သာသွားပြီလား? မင်းကိုဆေးရုံလိုက်ပို့ပေးဖို့လိုလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_22",
      "hanzi": "我已经吃过药了，现在感觉好多了。",
      "pinyin": "wǒ yǐ jīng chī guò yào le, xiàn zài gǎn jué hǎo duō le.",
      "burmese": "ငါဆေးသောက်ပြီးပါပြီ၊ အခုပိုကောင်းလာသလိုခံစားရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_23",
      "hanzi": "下个星期是我的生日，你会来参加我的派对吗？",
      "pinyin": "xià ge xīng qī shì wǒ de shēng rì, nǐ huì lái cān jiā wǒ de pài duì ma?",
      "burmese": "နောက်အပတ်ကငါ့မွေးနေ့ပါ၊ ငါ့ပါတီကိုမင်းလာတက်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_24",
      "hanzi": "我一定去，而且我还给你准备了一个礼物！",
      "pinyin": "wǒ yí dìng qù, ér qiě wǒ hái gěi nǐ zhǔn bèi le yí ge lǐ wù!",
      "burmese": "ငါသေချာပေါက်လာမယ်၊ ပြီးတော့ မင်းအတွက် လက်ဆောင်တစ်ခုလည်းပြင်ဆင်ထားသေးတယ်!",
      "category": "daily"
    },
    {
      "id": "hsk2_25",
      "hanzi": "你的狗很可爱，它叫什么名字？几岁了？",
      "pinyin": "nǐ de gǒu hěn kě ài, tā jiào shén me míng zi? jǐ suì le?",
      "burmese": "မင်းခွေးကလေးကအရမ်းချစ်ဖို့ကောင်းတယ်၊ သူ့နာမည်ဘယ်လိုခေါ်လဲ? ဘယ်နှစ်နှစ်ရှိပြီလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_26",
      "hanzi": "它叫小白，今年已经三岁了，它很聪明。",
      "pinyin": "tā jiào xiǎo bái, jīn nián yǐ jīng sān suì le, tā hěn cōng ming.",
      "burmese": "သူ့နာမည်က ရှောင်ပိုင်ပါ၊ ဒီနှစ် ၃ နှစ်ရှိပြီ၊ သူကအရမ်းဉာဏ်ကောင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_27",
      "hanzi": "你认识那个坐在门旁边看报纸的男人吗？",
      "pinyin": "nǐ rèn shi nà ge zuò zài mén páng biān kàn bào zhǐ de nán rén ma?",
      "burmese": "တံခါးဘေးမှာထိုင်ပြီး သတင်းစာဖတ်နေတဲ့အမျိုးသားကို မင်းသိလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_28",
      "hanzi": "他是我的新邻居，昨天刚搬到这里来的。",
      "pinyin": "tā shì wǒ de xīn lín jū, zuó tiān gāng bān dào zhè lǐ lái de.",
      "burmese": "သူကငါ့အိမ်နီးချင်းအသစ်ပါ၊ မနေ့ကမှ ဒီကိုပြောင်းလာတာ။",
      "category": "daily"
    },
    {
      "id": "hsk2_29",
      "hanzi": "桌子上的那些书是谁的？我要把它们拿走。",
      "pinyin": "zhuō zi shang de nà xiē shū shì shéi de? wǒ yào bǎ tā men ná zǒu.",
      "burmese": "စားပွဲပေါ်ကစာအုပ်တွေက ဘယ်သူ့ဟာတွေလဲ? ငါအဲ့ဒါတွေကိုယူသွားမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_30",
      "hanzi": "那些书都是我的，别拿走，我还要看呢。",
      "pinyin": "nà xiē shū dōu shì wǒ de, bié ná zǒu, wǒ hái yào kàn ne.",
      "burmese": "အဲ့စာအုပ်တွေအကုန်လုံးငါ့ဟာတွေပါ၊ မယူသွားပါနဲ့၊ ငါဖတ်ဖို့လိုသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_31",
      "hanzi": "今天的考试太难了，我很多题都不会做。",
      "pinyin": "jīn tiān de kǎo shì tài nán le, wǒ hěn duō tí dōu bú huì zuò.",
      "burmese": "ဒီနေ့စာမေးပွဲကအရမ်းခက်တယ်၊ ငါမေးခွန်းအများကြီးမလုပ်တတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_32",
      "hanzi": "别担心，下次考试前我们一起复习吧。",
      "pinyin": "bié dān xīn, xià cì kǎo shì qián wǒ men yì qǐ fù xí ba.",
      "burmese": "စိတ်မပူပါနဲ့၊ နောက်တစ်ခါစာမေးပွဲမတိုင်ခင် ငါတို့တူတူပြန်နွှေးကြတာပေါ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_33",
      "hanzi": "听说你要去北京旅行，你买好机票了吗？",
      "pinyin": "tīng shuō nǐ yào qù Běi jīng lǚ xíng, nǐ mǎi hǎo jī piào le ma?",
      "burmese": "မင်းပေကျင်းကိုခရီးသွားမယ်လို့ကြားတယ်၊ မင်းလေယာဉ်လက်မှတ်ဝယ်ပြီးပြီလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_34",
      "hanzi": "已经买好了，下个星期二上午九点的飞机。",
      "pinyin": "yǐ jīng mǎi hǎo le, xià ge xīng qī èr shàng wǔ jiǔ diǎn de fēi jī.",
      "burmese": "ဝယ်ပြီးပါပြီ၊ နောက်အပတ် အင်္ဂါနေ့ မနက် ၉ နာရီ လေယာဉ်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_35",
      "hanzi": "你可以帮我把这杯咖啡送给经理吗？",
      "pinyin": "nǐ kě yǐ bāng wǒ bǎ zhè bēi kā fēi sòng gěi jīng lǐ ma?",
      "burmese": "မင်းငါ့ကိုကူညီပြီး ဒီကော်ဖီတစ်ခွက်ကို မန်နေဂျာဆီပို့ပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_36",
      "hanzi": "没问题，他刚好在办公室里开会呢。",
      "pinyin": "méi wèn tí, tā gāng hǎo zài bàn gōng shì li kāi huì ne.",
      "burmese": "ပြဿနာမရှိပါဘူး၊ သူအရမ်းအဆင်ပြေစွာ ရုံးခန်းထဲမှာအစည်းအဝေးလုပ်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_37",
      "hanzi": "请问您想喝点什么？我们有茶和果汁。",
      "pinyin": "qǐng wèn nín xiǎng hē diǎn shén me? wǒ men yǒu chá hé guǒ zhī.",
      "burmese": "တစ်ဆိတ်လောက်မေးပါရစေ လူကြီးမင်းဘာသောက်ချင်ပါသလဲ? ကျွန်တော်တို့ဆီမှာ လက်ဖက်ရည်နဲ့ သစ်သီးဖျော်ရည်ရှိပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_38",
      "hanzi": "给我一杯热茶吧，谢谢。今天有点冷。",
      "pinyin": "gěi wǒ yì bēi rè chá ba, xiè xie. jīn tiān yǒu diǎn lěng.",
      "burmese": "ကျွန်တော့်ကို လက်ဖက်ရည်ပူတစ်ခွက်ပေးပါ၊ ကျေးဇူးပါ။ ဒီနေ့နည်းနည်းအေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_39",
      "hanzi": "这条黑色的裤子有点长，我想换短一点的。",
      "pinyin": "zhè tiáo hēi sè de kù zi yǒu diǎn cháng, wǒ xiǎng huàn duǎn yì diǎn de.",
      "burmese": "ဒီဘောင်းဘီအမည်းရောင်က နည်းနည်းရှည်တယ်၊ ငါနည်းနည်းတိုတာလေးနဲ့လဲချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_40",
      "hanzi": "好的，请等一下，为您拿一条短尺寸的。",
      "pinyin": "hǎo de, qǐng děng yí xià, wèi nín ná yì tiáo duǎn chǐ cùn de.",
      "burmese": "ဟုတ်ကဲ့၊ ခဏလောက်စောင့်ပါ၊ လူကြီးမင်းအတွက် ဆိုဒ်တိုတာတစ်ခုယူပေးပါမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_41",
      "hanzi": "你每天运动多长时间？在健身房还是外面？",
      "pinyin": "nǐ měi tiān yùn dòng duō cháng shí jiān? zài jiàn shēn fáng hái shì wài miàn?",
      "burmese": "မင်းနေ့တိုင်းလေ့ကျင့်ခန်းဘယ်လောက်ကြာကြာလုပ်လဲ? အားကစားခန်းမမှာလား ဒါမှမဟုတ် အပြင်မှာလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_42",
      "hanzi": "我每天跑步一个小时，在公园里跑。",
      "pinyin": "wǒ měi tiān pǎo bù yí ge xiǎo shí, zài gōng yuán li pǎo.",
      "burmese": "ငါနေ့တိုင်း ပန်းခြံထဲမှာ တစ်နာရီလောက်ပြေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_43",
      "hanzi": "外面的雨下得真大，我们等雨小了再去吧。",
      "pinyin": "wài miàn de yǔ xià de zhēn dà, wǒ men děng yǔ xiǎo le zài qù ba.",
      "burmese": "အပြင်မှာမိုးအရမ်းရွာနေတယ်၊ မိုးနည်းနည်းတိတ်မှ ငါတို့သွားရအောင်။",
      "category": "daily"
    },
    {
      "id": "hsk2_44",
      "hanzi": "我有一把大伞，我们可以一起走过去。",
      "pinyin": "wǒ yǒu yì bǎ dà sǎn, wǒ men kě yǐ yì qǐ zǒu guò qu.",
      "burmese": "ငါ့မှာထီးအကြီးတစ်လက်ရှိတယ်၊ ငါတို့တူတူလမ်းလျှောက်သွားလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_45",
      "hanzi": "你知道明天的考试几点开始吗？是早上吗？",
      "pinyin": "nǐ zhī dào míng tiān de kǎo shì jǐ diǎn kāi shǐ ma? shì zǎo shang ma?",
      "burmese": "မနက်ဖြန်စာမေးပွဲဘယ်အချိန်စမလဲ မင်းသိလား? မနက်ပိုင်းလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_46",
      "hanzi": "是上午九点开始，千万别迟到哦。",
      "pinyin": "shì shàng wǔ jiǔ diǎn kāi shǐ, qiān wàn bié chí dào o.",
      "burmese": "မနက် ၉ နာရီမှာစမယ်၊ လုံးဝနောက်မကျစေနဲ့နော်။",
      "category": "daily"
    },
    {
      "id": "hsk2_47",
      "hanzi": "如果你有什么问题，可以随时给我打电话。",
      "pinyin": "rú guǒ nǐ yǒu shén me wèn tí, kě yǐ suí shí gěi wǒ diàn huà.",
      "burmese": "မင်းမှာတစ်ခုခုပြဿနာရှိရင် ငါ့ကိုအချိန်မရွေးဖုန်းဆက်လို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_48",
      "hanzi": "非常感谢你的帮助，明天见！",
      "pinyin": "fēi cháng gǎn xiè nǐ de bāng zhù, míng tiān jiàn!",
      "burmese": "ကူညီပေးတဲ့အတွက်အရမ်းကျေးဇူးတင်ပါတယ်၊ မနက်ဖြန်တွေ့မယ်!",
      "category": "daily"
    },
    {
      "id": "hsk2_49",
      "hanzi": "你看过那部新出的电影了吗？讲的是个好故事。",
      "pinyin": "nǐ kàn guò nà bù xīn chū de diàn yǐng le ma? jiǎng de shì ge hǎo gù shì.",
      "burmese": "မင်းထွက်ခါစရုပ်ရှင်အသစ်ကိုကြည့်ပြီးပြီလား? ဇာတ်လမ်းကောင်းတစ်ခုအကြောင်းပြောထားတာ။",
      "category": "daily"
    },
    {
      "id": "hsk2_50",
      "hanzi": "还没有，但是我周末打算跟男朋友去看。",
      "pinyin": "hái méi yǒu, dàn shì wǒ zhōu mò dǎ suàn gēn nán péng you qù kàn.",
      "burmese": "မကြည့်ရသေးဘူး၊ ဒါပေမယ့် ပိတ်ရက်ကျရင် ရည်းစားနဲ့သွားကြည့်ဖို့ရည်ရွယ်ထားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_51",
      "hanzi": "我们什么时候可以去找老师问问题？",
      "pinyin": "wǒ men shén me shí hou kě yǐ qù zhǎo lǎo shī wèn wèn tí?",
      "burmese": "ကျွန်တော်တို့ ဆရာ့ကိုမေးခွန်းတွေဘယ်အချိန်သွားမေးလို့ရမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_52",
      "hanzi": "老师现在比较忙，下午三点以后再去吧。",
      "pinyin": "lǎo shī xiàn zài bǐ jiào máng, xià wǔ sān diǎn yǐ hòu zài qù ba.",
      "burmese": "ဆရာအခုပိုအလုပ်များနေတယ်၊ ညနေ ၃ နာရီနောက်ပိုင်းမှသွားကြရအောင်။",
      "category": "daily"
    },
    {
      "id": "hsk2_53",
      "hanzi": "你的电脑怎么了？为什么不工作了？",
      "pinyin": "nǐ de diàn nǎo zěn me le? wèi shén me bù gōng zuò le?",
      "burmese": "မင်းကွန်ပျူတာဘာဖြစ်သွားတာလဲ? ဘာလို့အလုပ်မလုပ်တော့တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_54",
      "hanzi": "可能坏了，我明天带去电脑商店修理一下。",
      "pinyin": "kě néng huài le, wǒ míng tiān dài qù diàn nǎo shāng diàn xiū lǐ yí xià.",
      "burmese": "ပျက်သွားတာဖြစ်နိုင်တယ်၊ ငါမနက်ဖြန် ကွန်ပျူတာဆိုင်ကိုယူသွားပြီး တစ်ချက်ပြင်ကြည့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_55",
      "hanzi": "这件衣服太小了，我穿不上，有没有大一点的？",
      "pinyin": "zhè jiàn yī fu tài xiǎo le, wǒ chuān bú shàng, yǒu méi yǒu dà yì diǎn de?",
      "burmese": "ဒီအင်္ကျီကအရမ်းသေးတယ်၊ ငါဝတ်လို့မရဘူး၊ နည်းနည်းပိုကြီးတာရှိလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_56",
      "hanzi": "对不起，大号卖完了，只剩下这一件。",
      "pinyin": "duì bu qǐ, dà hào mài wán le, zhǐ shèng xià zhè yí jiàn.",
      "burmese": "တောင်းပန်ပါတယ်၊ အကြီးဆိုဒ်ကရောင်းကုန်သွားပြီ၊ ဒါလေးတစ်ထည်ပဲကျန်တော့တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_57",
      "hanzi": "你能介绍这家饭馆哪个菜最好吃吗？",
      "pinyin": "nǐ néng jiè shào zhè jiā fàn guǎn nǎ ge cài zuì hǎo chī ma?",
      "burmese": "ဒီစားသောက်ဆိုင်မှာ ဘယ်ဟင်းကအကောင်းဆုံးလဲဆိုတာ မိတ်ဆက်ပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_58",
      "hanzi": "这里的羊肉做得很不错，值得试一试。",
      "pinyin": "zhè lǐ de yáng ròu zuò de hěn bú cuò, zhí de shì yí shì.",
      "burmese": "ဒီကသိုးသားက တော်တော်လေးကောင်းတယ်၊ စမ်းစားကြည့်ဖို့တန်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_59",
      "hanzi": "你在做什么呢？从早上到现在一直没休息。",
      "pinyin": "nǐ zài zuò shén me ne? cóng zǎo shang dào xiàn zài yì zhí méi xiū xi.",
      "burmese": "မင်းဘာလုပ်နေတာလဲ? မနက်ကတည်းကနေအခုထိ တစ်ချိန်လုံးမနားသေးဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_60",
      "hanzi": "我在准备下周英语考试，必须每天复习。",
      "pinyin": "wǒ zài zhǔn bèi xià zhōu yīng yǔ kǎo shì, bì xū měi tiān fù xí.",
      "burmese": "ငါနောက်အပတ် အင်္ဂလိပ်စာမေးပွဲအတွက်ပြင်ဆင်နေတာ၊ နေ့တိုင်းလေ့လာရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_61",
      "hanzi": "听说你的猫生病了，它好点了吗？",
      "pinyin": "tīng shuō nǐ de māo shēng bìng le, tā hǎo diǎn le ma?",
      "burmese": "မင်းရဲ့ကြောင်လေးနေမကောင်းဘူးလို့ကြားတယ်၊ သက်သာသွားပြီလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_62",
      "hanzi": "带它去医院看过了，吃点药明天就会好的。",
      "pinyin": "dài tā qù yī yuàn kàn guò le, chī diǎn yào míng tiān jiù huì hǎo de.",
      "burmese": "ဆေးရုံကိုခေါ်သွားပြပြီးပြီ၊ ဆေးနည်းနည်းသောက်လိုက်ရင် မနက်ဖြန်သက်သာသွားမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_63",
      "hanzi": "虽然外面的雨下得很大，但我还是要出去。",
      "pinyin": "suī rán wài miàn de yǔ xià de hěn dà, dàn wǒ hái shì yào chū qu.",
      "burmese": "အပြင်မှာမိုးအရမ်းရွာနေပေမယ့်၊ ငါအပြင်ထွက်ရမှာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk2_64",
      "hanzi": "带上伞吧，别让雨淋湿衣服而感冒了。",
      "pinyin": "dài shang sǎn ba, bié ràng yǔ lín shī yī fu ér gǎn mào le.",
      "burmese": "ထီးယူသွားပါ၊ မိုးစိုလို့ အင်္ကျီစိုပြီး အအေးမမိစေနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_65",
      "hanzi": "你去过北京旅行吗？听说那里的长城非常长。",
      "pinyin": "nǐ qù guò Běi jīng lǚ xíng ma? tīng shuō nà lǐ de cháng chéng fēi cháng cháng.",
      "burmese": "မင်းပေကျင်းကိုခရီးသွားဖူးလား? အဲ့ဒီက တရုတ်တံတိုင်းကအရမ်းရှည်တယ်လို့ကြားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_66",
      "hanzi": "去过一次，长城真的很漂亮，有时间我还想去。",
      "pinyin": "qù guò yí cì, cháng chéng zhēn de hěn piào liang, yǒu shí jiān wǒ hái xiǎng qù.",
      "burmese": "တစ်ခါသွားဖူးတယ်၊ တရုတ်တံတိုင်းက တကယ်ကိုလှပတယ်၊ အချိန်ရရင် ငါထပ်သွားချင်သေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_67",
      "hanzi": "今天的工作太多了，我可能不能和你见面。",
      "pinyin": "jīn tiān de gōng zuò tài duō le, wǒ kě néng bù néng hé nǐ jiàn miàn.",
      "burmese": "ဒီနေ့အလုပ်တွေအရမ်းများတယ်၊ ငါမင်းနဲ့တွေ့နိုင်မှာမဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_68",
      "hanzi": "没关系，等你完成了工作，我们周末再见吧。",
      "pinyin": "méi guān xi, děng nǐ wán chéng le gōng zuò, wǒ men zhōu mò zài jiàn ba.",
      "burmese": "ကိစ္စမရှိပါဘူး၊ မင်းအလုပ်တွေပြီးတဲ့အထိစောင့်ပြီး ပိတ်ရက်မှငါတို့ပြန်တွေ့ကြတာပေါ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_69",
      "hanzi": "这双鞋子的颜色我不喜欢，有别的颜色吗？",
      "pinyin": "zhè shuāng xié zi de yán sè wǒ bù xǐ huan, yǒu bié de yán sè ma?",
      "burmese": "ဒီဖိနပ်ရဲ့အရောင်ကို ငါမကြိုက်ဘူး၊ တခြားအရောင်ရှိလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_70",
      "hanzi": "对不起，只有黑色和白色，这种样子很漂亮。",
      "pinyin": "duì bu qǐ, zhǐ yǒu hēi sè hé bái sè, zhè zhǒng yàng zi hěn piào liang.",
      "burmese": "တောင်းပန်ပါတယ်၊ အမည်းနဲ့အဖြူပဲရှိတယ်၊ ဒီဒီဇိုင်းကအရမ်းလှတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_71",
      "hanzi": "你懂这句话是什么意思吗？可以解释一下吗？",
      "pinyin": "nǐ dǒng zhè jù huà shì shén me yì si ma? kě yǐ jiě shì yí xià ma?",
      "burmese": "ဒီစကားစုက ဘာအဓိပ္ပာယ်လဲမင်းနားလည်လား? ရှင်းပြပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_72",
      "hanzi": "它的意思是让我们不要放弃，每天努力前行。",
      "pinyin": "tā de yì si shì ràng wǒ men bú yào fàng qì, měi tiān nǔ lì qián xíng.",
      "burmese": "သူ့ရဲ့အဓိပ္ပာယ်က ကျွန်တော်တို့ကို လက်မလျှော့ဖို့နဲ့ နေ့တိုင်းကြိုးစားပြီးရှေ့ဆက်သွားဖို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_73",
      "hanzi": "昨天我哥哥给你打了一个电话，你回答了吗？",
      "pinyin": "zuó tiān wǒ gē ge gěi nǐ dǎ le yí ge diàn huà, nǐ huí dá le ma?",
      "burmese": "မနေ့က ငါ့အစ်ကိုမင်းဆီဖုန်းတစ်ကြိမ်ဆက်တယ်၊ မင်းပြန်ဖြေလိုက်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_74",
      "hanzi": "回答了，他说他晚上在外面吃东西，不回来了。",
      "pinyin": "huí dá le, tā shuō tā wǎn shang zài wài miàn chī dōng xi, bù huí lái le.",
      "burmese": "ပြန်ဖြေတယ်၊ သူ့ညဘက်အပြင်မှာတစ်ခုခုစားပြီး ပြန်မလာတော့ဘူးလို့ပြောတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_75",
      "hanzi": "我的手机没电了，请问附近有充电的地方吗？",
      "pinyin": "wǒ de shǒu jī méi diàn le, qǐng wèn fù jìn yǒu chōng diàn de dì fang ma?",
      "burmese": "ငါ့ဖုန်းအားကုန်သွားပြီ၊ ဒီနားတစ်ဝိုက် အားသွင်းလို့ရမယ့်နေရာရှိလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_76",
      "hanzi": "你可以进那个咖啡馆，买杯饮料就能免费充电。",
      "pinyin": "nǐ kě yǐ jìn nà ge kā fēi guǎn, mǎi bēi yǐn liào jiù néng miǎn fèi chōng diàn.",
      "burmese": "ဟိုကော်ဖီဆိုင်ထဲဝင်လို့ရတယ်၊ အအေးတစ်ခွက်ဝယ်ရင် အခမဲ့အားသွင်းလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_77",
      "hanzi": "妈妈，你还在生气吗？我保证以后不迟到了。",
      "pinyin": "mā ma, nǐ hái zài shēng qì ma? wǒ bǎo zhèng yǐ hòu bù chí dào le.",
      "burmese": "အမေ၊ စိတ်ဆိုးနေတုန်းပဲလား? နောက်ကိုနောက်မကျစေရဘူးလို့ ကျုပ်ကတိပေးပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_78",
      "hanzi": "我不生气了，但是你以后要记得看时间。",
      "pinyin": "wǒ bù shēng qì le, dàn shì nǐ yǐ hòu yào jì de kàn shí jiān.",
      "burmese": "အမေစိတ်မဆိုးတော့ပါဘူး၊ ဒါပေမယ့် နောက်ကိုအချိန်ကြည့်ဖို့တော့ သတိရရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_79",
      "hanzi": "在这个医院里工作，每天都很累但是很开心。",
      "pinyin": "zài zhè ge yī yuàn li gōng zuò, měi tiān dōu hěn lèi dàn shì hěn kāi xīn.",
      "burmese": "ဒီဆေးရုံမှာအလုပ်လုပ်ရတာ နေ့တိုင်းအရမ်းပင်ပန်းပေမယ့် အရမ်းပျော်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_80",
      "hanzi": "是啊，能帮助别人就是一件让人快乐的事情。",
      "pinyin": "shì a, néng bāng zhù bié rén jiù shì yí jiàn ràng rén kuài lè de shì qing.",
      "burmese": "ဟုတ်တာပေါ့၊ တခြားသူတွေကိုကူညီနိုင်တာက လူကိုပျော်ရွှင်စေတဲ့ကိစ္စတစ်ခုပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_81",
      "hanzi": "我想学习怎么跳舞，你知道哪里有很好的老师吗？",
      "pinyin": "wǒ xiǎng xué xí zěn me tiào wǔ, nǐ zhī dào nǎ lǐ yǒu hěn hǎo de lǎo shī ma?",
      "burmese": "ငါကခုန်တာကိုဘယ်လိုလေ့လာရမလဲဆိုတာ လေ့လာချင်တယ်၊ ကောင်းတဲ့ဆရာဘယ်မှာရှိလဲ မင်းသိလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_82",
      "hanzi": "右边的学校新开了一个舞蹈班，你可以看看。",
      "pinyin": "yòu biān de xué xiào xīn kāi le yí ge wǔ dǎo bān, nǐ kě yǐ kàn kan.",
      "burmese": "ညာဘက်က ကျောင်းမှာ အကအတန်းအသစ်တစ်ခုဖွင့်ထားတယ်၊ မင်းသွားကြည့်လို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_83",
      "hanzi": "现在外面的天气怎么样？我们能出去玩吗？",
      "pinyin": "xiàn zài wài miàn de tiān qì zěn me yàng? wǒ men néng chū qu wán ma?",
      "burmese": "အခုအပြင်ကရာသီဥတုဘယ်လိုနေလဲ? ငါတို့အပြင်ထွက်ကစားလို့ရလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_84",
      "hanzi": "今天是阴天，没有下雨也没有下雪，很适合出门。",
      "pinyin": "jīn tiān shì yīn tiān, méi yǒu xià yǔ yě méi yǒu xià xuě, hěn shì hé chū mén.",
      "burmese": "ဒီနေ့က တိမ်ထူတဲ့နေ့ပါ၊ မိုးလည်းမရွာသလို နှင်းလည်းမကျဘူး၊ အပြင်ထွက်ဖို့အရမ်းသင့်တော်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_85",
      "hanzi": "你觉得这家公司的工资怎么样？值得去做吗？",
      "pinyin": "nǐ jué de zhè jiā gōng sī de gōng zī zěn me yàng? zhí de qù zuò ma?",
      "burmese": "ဒီကုမ္ပဏီရဲ့ လစာကို မင်းဘယ်လိုထင်လဲ? အလုပ်သွားလုပ်ဖို့တန်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_86",
      "hanzi": "工资挺高的，而且有很多休息时间，我很推荐。",
      "pinyin": "gōng zī tǐng gāo de, ér qiě yǒu hěn duō xiū xi shí jiān, wǒ hěn tuī jiàn.",
      "burmese": "လစာတော်တော်လေးမြင့်တယ်၊ ပြီးတော့ နားရတဲ့အချိန်တွေလည်းအများကြီးရှိတယ်၊ ငါအတည်အလင်းထောက်ခံတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_87",
      "hanzi": "对不起，麻烦你再把刚才的话讲一遍吧。",
      "pinyin": "duì bu qǐ, má fan nǐ zài bǎ gāng cái de huà jiǎng yí biàn ba.",
      "burmese": "တောင်းပန်ပါတယ်၊ အခုလေးတင်ပြောသွားတဲ့စကားကို နောက်တစ်ခေါက်လောက် ထပ်ပြောပေးဖို့ ဒုက္ခပေးပါရစေ။",
      "category": "daily"
    },
    {
      "id": "hsk2_88",
      "hanzi": "好的，我已经说过了，请大家别在这里吸烟。",
      "pinyin": "hǎo de, wǒ yǐ jīng shuō guò le, qǐng dà jiā bié zài zhè lǐ xī yān.",
      "burmese": "ဟုတ်ကဲ့၊ ငါပြောပြီးသွားပါပြီ၊ ကျေးဇူးပြုပြီး အားလုံးဒီမှာ ဆေးလိပ်မသောက်ကြပါနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_89",
      "hanzi": "这是你第一次用我们公司的软件吗？好用吗？",
      "pinyin": "zhè shì nǐ dì yí cì yòng wǒ men gōng sī de ruǎn jiàn ma? hǎo yòng ma?",
      "burmese": "ဒါ မင်းငါတို့ကုမ္ပဏီရဲ့ဆော့ဖ်ဝဲကို ပထမဆုံးအကြိမ်သုံးတာလား? သုံးရတာကောင်းလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_90",
      "hanzi": "虽然是第一次用，但它真的很快捷，很方便。",
      "pinyin": "suī rán shì dì yí cì yòng, dàn tā zhēn de hěn kuài jié, hěn fāng biàn.",
      "burmese": "ပထမဆုံးအကြိမ်သုံးတာဖြစ်ပေမယ့်၊ ဒါကတကယ်ကိုမြန်ဆန်ပြီး အရမ်းအဆင်ပြေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_91",
      "hanzi": "爸爸，我的手表坏了，你可以买个新的给我吗？",
      "pinyin": "bà ba, wǒ de shǒu biǎo huài le, nǐ kě yǐ mǎi ge xīn de gěi wǒ ma?",
      "burmese": "အဖေ၊ သားနာရီပျက်သွားပြီ၊ သားကိုအသစ်တစ်ခုဝယ်ပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_92",
      "hanzi": "明天我下班后去给你买一个漂亮的黑手表。",
      "pinyin": "míng tiān wǒ xià bān hòu qù gěi nǐ mǎi yí ge piào liang de hēi shǒu biǎo.",
      "burmese": "မနက်ဖြန်ငါအလုပ်ဆင်းရင် မင်းအတွက် လှပတဲ့အမည်းရောင်နာရီလေးတစ်ခုသွားဝယ်ပေးမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_93",
      "hanzi": "你每天都自己做午饭吗？不去外面吃点吗？",
      "pinyin": "nǐ měi tiān dōu zì jǐ zuò wǔ fàn ma? bú qù wài miàn chī diǎn ma?",
      "burmese": "မင်းနေ့တိုင်း နေ့လယ်စာကိုယ်တိုင်လုပ်တာလား? အပြင်မှာမစားဘူးလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_94",
      "hanzi": "为了身体健康，我还是习惯在家里做饭。",
      "pinyin": "wèi le shēn tǐ jiàn kāng, wǒ hái shì xí guàn zài jiā lǐ zuò fàn.",
      "burmese": "ကျန်းမာရေးအတွက်အလို့ငှာ၊ ငါအိမ်မှာပဲဟင်းချက်ရတာပိုအသားကျတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_95",
      "hanzi": "因为今天下大雨，所以老师没有来上课。",
      "pinyin": "yīn wèi jīn tiān xià dà yǔ, suǒ yǐ lǎo shī méi yǒu lái shàng kè.",
      "burmese": "ဒီနေ့မိုးကြီးလို့မို့ ဆရာအတန်းမလာဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_96",
      "hanzi": "那么我们今天可以在家休息不用出门了。",
      "pinyin": "nà me wǒ men jīn tiān kě yǐ zài jiā xiū xi bú yòng chū mén le.",
      "burmese": "ဒါဆို ငါတို့ဒီနေ့အိမ်မှာပဲနားပြီး အပြင်ထွက်စရာမလိုတော့ဘူးပေါ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_97",
      "hanzi": "桌子上的西瓜很甜，大家都吃得非常高兴。",
      "pinyin": "zhuō zi shang de xī guā hěn tián, dà jiā dōu chī de fēi cháng gāo xìng.",
      "burmese": "စားပွဲပေါ်က ဖရဲသီးကအရမ်းချိုတယ်၊ အားလုံးက အရမ်းကိုပျော်ပျော်ရွှင်ရွှင်စားကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_98",
      "hanzi": "谢谢你买来的西瓜，让我们的下午好多了。",
      "pinyin": "xiè xie nǐ mǎi lái de xī guā, ràng wǒ men de xià wǔ hǎo duō le.",
      "burmese": "မင်းဝယ်လာတဲ့ဖရဲသီးအတွက်ကျေးဇူးပါ၊ ငါတို့ရဲ့ညနေခင်းကို ပိုကောင်းစေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_99",
      "hanzi": "你的自行车去哪儿了？为什么你今天走路？",
      "pinyin": "nǐ de zì xíng chē qù nǎr le? wèi shén me nǐ jīn tiān zǒu lù?",
      "burmese": "မင်းရဲ့စက်ဘီးဘယ်ရောက်သွားလဲ? ဒီနေ့ဘာလို့လမ်းလျှောက်တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_100",
      "hanzi": "前几天停在路边不见了，我可能得买一辆新的。",
      "pinyin": "qián jǐ tiān tíng zài lù biān bú jiàn le, wǒ kě néng děi mǎi yí liàng xīn de.",
      "burmese": "လွန်ခဲ့တဲ့ရက်အနည်းငယ်က လမ်းဘေးမှာရပ်ထားတုန်းပျောက်သွားတယ်၊ ငါအသစ်တစ်စီးဝယ်ရလောက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_101",
      "hanzi": "你的电脑现在能打开那个新网站吗？",
      "pinyin": "nǐ de diàn nǎo xiàn zài néng dǎ kāi nà ge xīn wǎng zhàn ma?",
      "burmese": "မင်းကွန်ပျူတာ အခုအဲ့ဝဘ်ဆိုဒ်အသစ်ကိုဖွင့်လို့ရပြီလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_102",
      "hanzi": "还不能打开，可能是我的网络有问题。",
      "pinyin": "hái bù néng dǎ kāi, kě néng shì wǒ de wǎng luò yǒu wèn tí.",
      "burmese": "မရသေးဘူး၊ ငါ့အင်တာနက်ပြဿနာရှိနေတာဖြစ်နိုင်တယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_103",
      "hanzi": "这个程序有错误，你需要重新写一下代码。",
      "pinyin": "zhè ge chéng xù yǒu cuò wù, nǐ xū yào chóng xīn xiě yí xià dài mǎ.",
      "burmese": "ဒီပရိုဂရမ်က အမှားရှိတယ်၊ မင်းကုတ်ကိုပြန်ရေးဖို့လိုတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_104",
      "hanzi": "我知道了，等我吃完午饭就开始修改。",
      "pinyin": "wǒ zhī dào le, děng wǒ chī wán wǔ fàn jiù kāi shǐ xiū gǎi.",
      "burmese": "သိပါပြီ၊ ငါနေ့လယ်စာစားပြီးတာနဲ့ စပြင်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_105",
      "hanzi": "你能把昨天的测试结果发给我看一下吗？",
      "pinyin": "nǐ néng bǎ zuó tiān de cè shì jié guǒ fā gěi wǒ kàn yí xià ma?",
      "burmese": "မနေ့က စမ်းသပ်ချက်ရလဒ်တွေကို ငါ့ကိုပို့ပေးပြီး ကြည့်ခိုင်းလို့ရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_106",
      "hanzi": "我已经发在你的邮箱里了，请你查收。",
      "pinyin": "wǒ yǐ jīng fā zài nǐ de yóu xiāng li le, qǐng nǐ chá shōu.",
      "burmese": "ငါမင်းရဲ့အီးမေးလ်ထဲပို့ပြီးသွားပြီ၊ ကျေးဇူးပြုပြီးစစ်ကြည့်ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_107",
      "hanzi": "页面为什么这么慢？我们需要让它快点。",
      "pinyin": "yè miàn wèi shén me zhè me màn? wǒ men xū yào ràng tā kuài diǎn.",
      "burmese": "စာမျက်နှာကဘာလို့ဒီလောက်နှေးနေတာလဲ? ငါတို့မြန်အောင်လုပ်ဖို့လိုတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_108",
      "hanzi": "因为图片太大了，我们把图片变小一点。",
      "pinyin": "yīn wèi tú piàn tài dà le, wǒ men bǎ tú piàn biàn xiǎo yì diǎn.",
      "burmese": "ပုံတွေအရမ်းကြီးနေလို့ပါ၊ ပုံတွေကို နည်းနည်းသေးသွားအောင်လုပ်ကြမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_109",
      "hanzi": "下周一上午十点我们要开一次项目会议。",
      "pinyin": "xià zhōu yī shàng wǔ shí diǎn wǒ men yào kāi yí cì xiàng mù huì yì.",
      "burmese": "နောက်တစ်ပတ် တနင်္လာနေ့မနက် ၁၀ နာရီမှာ ပရောဂျက်အစည်းအဝေးတစ်ခုလုပ်ရမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_110",
      "hanzi": "好的，我会提前准备好我们要看的内容。",
      "pinyin": "hǎo de, wǒ huì tí qián zhǔn bèi hǎo wǒ men yào kàn de nèi róng.",
      "burmese": "ဟုတ်ကဲ့၊ ကြည့်ရမယ့်အကြောင်းအရာတွေကို ငါကြိုတင်ပြင်ဆင်ထားပါ့မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_111",
      "hanzi": "你今天下班前能做完这个功能吗？",
      "pinyin": "nǐ jīn tiān xià bān qián néng zuò wán zhè ge gōng néng ma?",
      "burmese": "ဒီလုပ်ဆောင်ချက်ကို ဒီနေ့အလုပ်မဆင်းခင်လုပ်ပြီးနိုင်မလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_112",
      "hanzi": "可能做不完，因为发现了一个新的问题。",
      "pinyin": "kě néng zuò bù wán, yīn wèi fā xiàn le yí ge xīn de wèn tí.",
      "burmese": "လုပ်လို့မပြီးနိုင်လောက်ဘူး၊ ဘာလို့လဲဆိုတော့ ပြဿနာအသစ်တစ်ခုထပ်တွေ့လို့ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_113",
      "hanzi": "服务器好像停止工作了，你能去检查吗？",
      "pinyin": "fú wù qì hǎo xiàng tíng zhǐ gōng zuò le, nǐ néng qù jiǎn chá ma?",
      "burmese": "ဆာဗာအလုပ်မလုပ်တော့သလိုပဲ၊ မင်းသွားစစ်ကြည့်ပေးလို့ရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_114",
      "hanzi": "我正在检查日志，很快就会找到原因。",
      "pinyin": "wǒ zhèng zài jiǎn chá rì zhì, hěn kuài jiù huì zhǎo dào yuán yīn.",
      "burmese": "ငါမှတ်တမ်းတွေကိုစစ်ဆေးနေတယ်၊ မကြာခင်အကြောင်းရင်းကိုရှာတွေ့မှာပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_115",
      "hanzi": "老板希望这个页面的颜色能再亮一点。",
      "pinyin": "lǎo bǎn xī wàng zhè ge yè miàn de yán sè néng zài liàng yì diǎn.",
      "burmese": "ဘော့စ်က ဒီစာမျက်နှာရဲ့အရောင်ကို နည်းနည်းပိုတောက်ပစေချင်တယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_116",
      "hanzi": "没关系，我现在就把颜色改成白色的。",
      "pinyin": "méi guān xi, wǒ xiàn zài jiù bǎ yán sè gǎi chéng bái sè de.",
      "burmese": "ကိစ္စမရှိပါဘူး၊ ငါအခုပဲ အရောင်ကိုအဖြူရောင်ပြောင်းလိုက်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_117",
      "hanzi": "你在家办公的时候，一般几点开始写代码？",
      "pinyin": "nǐ zài jiā bàn gōng de shí hou, yì bān jǐ diǎn kāi shǐ xiě dài mǎ?",
      "burmese": "အိမ်ကနေအလုပ်လုပ်တဲ့အခါ၊ ပုံမှန်အားဖြင့်ဘယ်အချိန် ကုတ်စရေးလဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_118",
      "hanzi": "我通常早上九点打开电脑，开始写代码。",
      "pinyin": "wǒ tōng cháng zǎo shang jiǔ diǎn dǎ kāi diàn nǎo, kāi shǐ xiě dài mǎ.",
      "burmese": "ငါပုံမှန်အားဖြင့် မနက် ၉ နာရီ ကွန်ပျူတာဖွင့်ပြီး ကုတ်စရေးတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_119",
      "hanzi": "这个按钮不应该放在这里，把它放右边吧。",
      "pinyin": "zhè ge àn niǔ bù yīng gāi fàng zài zhè lǐ, bǎ tā fàng yòu biān ba.",
      "burmese": "ဒီခလုတ်က ဒီနေရာမှာမထားသင့်ဘူး၊ ညာဘက်ကိုရွှေ့ထားလိုက်ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_120",
      "hanzi": "好的，这样用户点击起来会更方便。",
      "pinyin": "hǎo de, zhè yàng yòng hù diǎn jī qǐ lái huì gèng fāng biàn.",
      "burmese": "ဟုတ်ကဲ့၊ အဲ့လိုဆို ယူဆာတွေနှိပ်ရတာပိုအဆင်ပြေလိမ့်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_121",
      "hanzi": "你们组现在有几个人在做这个项目？",
      "pinyin": "nǐ men zǔ xiàn zài yǒu jǐ ge rén zài zuò zhè ge xiàng mù?",
      "burmese": "အခုမင်းတို့အဖွဲ့မှာ လူဘယ်နှစ်ယောက် ဒီပရောဂျက်ကိုလုပ်နေလဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_122",
      "hanzi": "加上我一共有四个人，还在找新同事。",
      "pinyin": "jiā shàng wǒ yí gòng yǒu sì ge rén, hái zài zhǎo xīn tóng shì.",
      "burmese": "ငါနဲ့ပါပေါင်းရင် ၄ ယောက်ရှိတယ်၊ လုပ်ဖော်ကိုင်ဖက်အသစ်လည်း ရှာနေတုန်းပဲ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_123",
      "hanzi": "用户的密码不能让别人看到，你要小心。",
      "pinyin": "yòng hù de mì mǎ bù néng ràng bié rén kàn dào, nǐ yào xiǎo xīn.",
      "burmese": "ယူဆာတွေရဲ့စကားဝှက်ကို တခြားသူတွေမမြင်စေရဘူး၊ မင်းဂရုစိုက်ရမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_124",
      "hanzi": "知道，密码是安全的，我都放在数据库里。",
      "pinyin": "zhī dào, mì mǎ shì ān quán de, wǒ dōu fàng zài shù jù kù lǐ.",
      "burmese": "သိပါတယ်၊ စကားဝှက်ကလုံခြုံမှုရှိပါတယ်၊ ဒေတာဘေ့စ်ထဲမှာ အကုန်သိမ်းထားတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_125",
      "hanzi": "如果你遇到不懂的问题，别忘了问大家。",
      "pinyin": "rú guǒ nǐ yù dào bù dǒng de wèn tí, bié wàng le wèn dà jiā.",
      "burmese": "မင်းနားမလည်တဲ့ပြဿနာကြုံရရင် တခြားသူတွေကိုမေးဖို့မမေ့နဲ့နော်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_126",
      "hanzi": "我会的，谢谢大家的帮助和耐心。",
      "pinyin": "wǒ huì de, xiè xie dà jiā de bāng zhù hé nài xīn.",
      "burmese": "ငါကူညီတောင်းပါ့မယ်၊ အားလုံးရဲ့ကူညီမှုနဲ့သည်းခံမှုအတွက်ကျေးဇူးတင်ပါတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_127",
      "hanzi": "为什么要在手机上看的时候字那么小？",
      "pinyin": "wèi shén me yào zài shǒu jī shang kàn de shí hou zì nà me xiǎo?",
      "burmese": "ဘာလို့ဖုန်းပေါ်မှာကြည့်တဲ့အခါ စာလုံးလေးတွေကအဲ့လောက်သေးနေတာလဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_128",
      "hanzi": "因为我忘记写手机端的代码了，马上改。",
      "pinyin": "yīn wèi wǒ wàng jì xiě shǒu jī duān de dài mǎ le, mǎ shàng gǎi.",
      "burmese": "ဖုန်းအတွက်ကုတ်ရေးဖို့မေ့သွားလို့ပါ၊ ချက်ချင်းပြင်လိုက်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_129",
      "hanzi": "这个软件什么时候能发布新版本？",
      "pinyin": "zhè ge ruǎn jiàn shén me shí hou néng fā bù xīn bǎn běn?",
      "burmese": "ဒီဆော့ဖ်ဝဲလ်က ဗားရှင်းအသစ်ကိုဘယ်တော့ထုတ်နိုင်မလဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_130",
      "hanzi": "最快也要到下个月初，还有三件事没做完。",
      "pinyin": "zuì kuài yě yào dào xià ge yuè chū, hái yǒu sān jiàn shì méi zuò wán.",
      "burmese": "အမြန်ဆုံးဆိုရင်တောင် နောက်လဆန်းမှပဲရမယ်၊ လုပ်စရာသုံးခုမပြီးသေးဘူး။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_131",
      "hanzi": "你觉得学习编程累还是学习汉语累？",
      "pinyin": "nǐ jué de xué xí biān chéng lèi hái shì xué xí hàn yǔ lèi?",
      "burmese": "ပရိုဂရမ်းမင်းလေ့လာတာပင်ပန်းတယ်လို့ထင်လား ဒါမှမဟုတ် တရုတ်စာလေ့လာတာပင်ပန်းတယ်လို့ထင်လား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_132",
      "hanzi": "都累，但是也很有意思，所以每天都学。",
      "pinyin": "dōu lèi, dàn shì yě hěn yǒu yì si, suǒ yǐ měi tiān dōu xué.",
      "burmese": "နှစ်ခုလုံးပင်ပန်းတယ်၊ ဒါပေမယ့် စိတ်ဝင်စားဖို့လည်းကောင်းလို့ နေ့တိုင်းလေ့လာတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_133",
      "hanzi": "我不小心把你写的代码全删除了！",
      "pinyin": "wǒ bù xiǎo xīn bǎ nǐ xiě de dài mǎ quán shān chú le!",
      "burmese": "ငါမတော်တဆမင်းရေးထားတဲ့ ကုတ်တွေအကုန်ဖျက်မိသွားတယ်!",
      "category": "web_dev"
    },
    {
      "id": "hsk2_134",
      "hanzi": "没关系，我在网上有备份，再下载一次就好。",
      "pinyin": "méi guān xi, wǒ zài wǎng shang yǒu bèi fèn, zài xià zǎi yí cì jiù hǎo.",
      "burmese": "ကိစ္စမရှိဘူး၊ ငါအင်တာနက်ပေါ်မှာဘက်ခ်အက်ပ်သိမ်းထားတယ်၊ ပြန်ဒေါင်းလုဒ်ဆွဲလိုက်ရုံပဲ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_135",
      "hanzi": "我们要不要在下面加一个“回到最上面”的按钮？",
      "pinyin": "wǒ men yào bù yào zài xià mian jiā yí ge “huí dào zuì shàng mian” de àn niǔ?",
      "burmese": "ငါတို့အောက်ဆုံးမှာ “အပေါ်ဆုံးသို့သွားရန်” ခလုတ်လေးတစ်ခုထည့်လိုက်ရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_136",
      "hanzi": "好主意，这样大家看长页面的时候会很方便。",
      "pinyin": "hǎo zhǔ yi, zhè yàng dà jiā kàn cháng yè miàn de shí hou huì hěn fāng biàn.",
      "burmese": "အကြံကောင်းပဲ၊ ပြုလုပ်လိုက်ရင် စာမျက်နှာရှည်တွေကြည့်တဲ့အခါ လူတိုင်းပိုအဆင်ပြေလိမ့်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_137",
      "hanzi": "这次的错误是因为你没有写分号吗？",
      "pinyin": "zhè cì de cuò wù shì yīn wèi nǐ méi yǒu xiě fēn hào ma?",
      "burmese": "ဒီတစ်ခေါက်အမှားက မင်းဆီမီကိုလံမထည့်လိုက်လို့လား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_138",
      "hanzi": "是的，写代码的时候我太粗心了。",
      "pinyin": "shì de, xiě dài mǎ de shí hou wǒ tài cū xīn le.",
      "burmese": "ဟုတ်တယ်၊ ကုတ်ရေးတုန်းက ငါအရမ်းပေါ့ဆသွားတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_139",
      "hanzi": "你平时用哪个浏览器测试网页？",
      "pinyin": "nǐ píng shí yòng nǎ ge liú lǎn qì cè shì wǎng yè?",
      "burmese": "မင်းပုံမှန်ဆို ဘယ်ဘရောက်ဇာသုံးပြီး ဝဘ်ဆိုဒ်တွေကိုစမ်းသပ်လဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_140",
      "hanzi": "我习惯用谷歌浏览器，因为它很快。",
      "pinyin": "wǒ xí guàn yòng gǔ gē liú lǎn qì, yīn wèi tā hěn kuài.",
      "burmese": "ငါက ဂူဂဲလ်ခရုမ်းကိုသုံးရတာပိုအသားကျတယ်၊ ဘာလို့လဲဆိုတော့သူကမြန်လို့။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_141",
      "hanzi": "那个公司的网站打不开了，你知道为什么吗？",
      "pinyin": "nà ge gōng sī de wǎng zhàn dǎ bù kāi le, nǐ zhī dào wèi shén me ma?",
      "burmese": "အဲ့ကုမ္ပဏီရဲ့ဝဘ်ဆိုဒ်က ဖွင့်လို့မရတော့ဘူး၊ ဘာလို့လဲမင်းသိလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_142",
      "hanzi": "因为看的人太多了，服务器太累了。",
      "pinyin": "yīn wèi kàn de rén tài duō le, fú wù qì tài lèi le.",
      "burmese": "ကြည့်တဲ့သူအရမ်းများသွားလို့ ဆာဗာအရမ်းပင်ပန်းသွားလို့ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_143",
      "hanzi": "把这几行代码变一下，它就能跑得更快了。",
      "pinyin": "bǎ zhè jǐ háng dài mǎ biàn yí xià, tā jiù néng pǎo de gèng kuài le.",
      "burmese": "ဒီကုတ်စာကြောင်းအနည်းငယ်ကိုပြောင်းလိုက်ရင် ပိုမြန်မြန်အလုပ်လုပ်နိုင်ပါလိမ့်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_144",
      "hanzi": "真的吗？我明天去公司试试看。",
      "pinyin": "zhēn de ma? wǒ míng tiān qù gōng sī shì shi kàn.",
      "burmese": "တကယ်လား? မနက်ဖြန်ရုံးရောက်ရင် ငါစမ်းလုပ်ကြည့်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_145",
      "hanzi": "这个字写错了，不是“网”是“网吧”。",
      "pinyin": "zhè ge zì xiě cuò le, bú shì 'wǎng' shì 'wǎng bā'.",
      "burmese": "ဒီစာလုံးရေးတာမှားနေတယ်၊ 'wǎng' မဟုတ်ဘူး 'wǎng bā' ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_146",
      "hanzi": "谢谢你告诉我，我现在就改。",
      "pinyin": "xiè xie nǐ gào su wǒ, wǒ xiàn zài jiù gǎi.",
      "burmese": "ပြောပြပေးတဲ့အတွက်ကျေးဇူးပါ၊ ငါအခုပဲပြင်လိုက်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_147",
      "hanzi": "今天的工作做不完了，晚上我要加班。",
      "pinyin": "jīn tiān de gōng zuò zuò bù wán le, wǎn shang wǒ yào jiā bān.",
      "burmese": "ဒီနေ့အလုပ်တွေလုပ်တာမပြီးသေးဘူး၊ ညဘက်ငါအချိန်ပိုလုပ်ရမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_148",
      "hanzi": "别太累了，早点回家睡觉，明天再做。",
      "pinyin": "bié tài lèi le, zǎo diǎn huí jiā shuì jiào, míng tiān zài zuò.",
      "burmese": "အရမ်းမပင်ပန်းစေနဲ့၊ စောစောအိမ်ပြန်အိပ်၊ မနက်ဖြန်မှဆက်လုပ်ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_149",
      "hanzi": "你的键盘那么脏，你多久没洗了？",
      "pinyin": "nǐ de jiàn pán nà me zāng, nǐ duō jiǔ méi xǐ le?",
      "burmese": "မင်းကီးဘုတ်ကအဲ့လောက်တောင်ညစ်ပတ်နေတာပဲ၊ ဘယ်လောက်ကြာကြာမဆေးရသေးတာလဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_150",
      "hanzi": "可能有一年了吧，我确实应该清理一下。",
      "pinyin": "kě néng yǒu yì nián le ba, wǒ què shí yīng gāi qīng lǐ yí xià.",
      "burmese": "တစ်နှစ်လောက်တော့ရှိနေပြီထင်တယ်၊ ငါတကယ်ကိုသန့်ရှင်းရေးလုပ်သင့်နေပြီ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_151",
      "hanzi": "我用电脑做了很多文件，现在找不到那个。 ",
      "pinyin": "wǒ yòng diàn nǎo zuò le hěn duō wén jiàn, xiàn zài zhǎo bu dào nà ge.",
      "burmese": "ငါကွန်ပျူတာနဲ့ဖိုင်တွေအများကြီးလုပ်ထားတယ်၊ အခုအဲ့ဒါကိုရှာမတွေ့ဘူး။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_152",
      "hanzi": "别着急，用搜索功能找一下那文件的名字。",
      "pinyin": "bié zháo jí, yòng sōu suǒ gōng néng zhǎo yí xià nà wén jiàn de míng zi.",
      "burmese": "စိုးရိမ်မနေပါနဲ့၊ ရှာဖွေရေးလုပ်ဆောင်ချက်ကိုသုံးပြီး အဲ့ဒီဖိုင်နာမည်ကိုရှာကြည့်ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_153",
      "hanzi": "你懂这里的这个系统是怎么工作的吗？",
      "pinyin": "nǐ dǒng zhè lǐ de zhè ge xì tǒng shì zěn me gōng zuò de ma?",
      "burmese": "ဒီကစနစ်က ဘယ်လိုအလုပ်လုပ်လဲဆိုတာကို မင်းနားလည်လား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_154",
      "hanzi": "我对这个不太懂，我们可以问经理。",
      "pinyin": "wǒ duì zhè ge bù tài dǒng, wǒ men kě yǐ wèn jīng lǐ.",
      "burmese": "ငါဒီအကြောင်းသိပ်နားမလည်ဘူး၊ မန်နေဂျာကိုသွားမေးလို့ရတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_155",
      "hanzi": "我的手机看这个网页感觉太大了，有点不舒服。 ",
      "pinyin": "wǒ de shǒu jī kàn zhè ge wǎng yè gǎn jué tài dà le, yǒu diǎn bù shū fu.",
      "burmese": "ငါ့ဖုန်းနဲ့ဒီဝဘ်စာမျက်နှာကိုကြည့်ရတာ အရမ်းကြီးနေသလိုပဲ၊ နည်းနည်းအဆင်မပြေဘူး။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_156",
      "hanzi": "我知道了，我会把界面变得更合适手机。 ",
      "pinyin": "wǒ zhī dào le, wǒ huì bǎ jiè miàn biàn de gèng hé shì shǒu jī.",
      "burmese": "သိပါပြီ၊ ကြည့်ရမယ့်စာမျက်နှာကို ဖုန်းနဲ့ပိုကိုက်ညီသွားအောင် ပြောင်းလဲပေးပါမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_157",
      "hanzi": "如果出了错，请发一封邮件告诉我。",
      "pinyin": "rú guǒ chū le cuò, qǐng fā yì fēng yóu jiàn gào su wǒ.",
      "burmese": "အမှားတစ်ခုခုဖြစ်သွားရင်၊ ကျေးဇူးပြုပြီး အီးမေးလ်တစ်စောင်ပို့ပြီး ငါ့ကိုပြောပြပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_158",
      "hanzi": "好的，我会把所有的测试错误写在信里发去。 ",
      "pinyin": "hǎo de, wǒ huì bǎ suǒ yǒu de cè shì cuò wù xiě zài xìn lǐ fā qù.",
      "burmese": "ဟုတ်ကဲ့၊ အစမ်းစစ်ဆေးတဲ့အမှားတွေအားလုံးကို စာထဲရေးပြီးပို့လိုက်ပါ့မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_159",
      "hanzi": "我们公司的网站今天有很多人来看吗？",
      "pinyin": "wǒ men gōng sī de wǎng zhàn jīn tiān yǒu hěn duō rén lái kàn ma?",
      "burmese": "ဒီနေ့ ငါတို့ကုမ္ပဏီရဲ့ဝဘ်ဆိုဒ်ကို လာကြည့်တဲ့သူများလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_160",
      "hanzi": "是的，来看网页的人比昨天多了一百多个。 ",
      "pinyin": "shì de, lái kàn wǎng yè de rén bǐ zuó tiān duō le yì bǎi duō ge.",
      "burmese": "ဟုတ်တယ်၊ ဝဘ်စာမျက်နှာလာကြည့်တဲ့သူက မနေ့ကထက် လူတစ်ရာကျော်ပိုများတယ်။ ",
      "category": "web_dev"
    },
    {
      "id": "hsk2_161",
      "hanzi": "这个软件在苹果手机上也一样能用吗？",
      "pinyin": "zhè ge ruǎn jiàn zài píng guǒ shǒu jī shang yě yí yàng néng yòng ma?",
      "burmese": "ဒီဆော့ဖ်ဝဲလ်က အက်ပဲလ်ဖုန်း (iPhone) ပေါ်မှာရော အတူတူပဲသုံးလို့ရလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_162",
      "hanzi": "可以的，苹果手机和别的手机都能用。",
      "pinyin": "kě yǐ de, píng guǒ shǒu jī hé bié de shǒu jī dōu néng yòng.",
      "burmese": "ရပါတယ်၊ အက်ပဲလ်ဖုန်းနဲ့ တခြားဖုန်းတွေပါသုံးလို့ရတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_163",
      "hanzi": "那台电脑太老了，你可以叫公司再买一台吗？ ",
      "pinyin": "nà tái diàn nǎo tài lǎo le, nǐ kě yǐ jiào gōng sī zài mǎi yì tái ma?",
      "burmese": "အဲ့ကွန်ပျူတာကအရမ်းဟောင်းနေပြီ၊ ကုမ္ပဏီကိုနောက်ထပ်တစ်လုံးထပ်ဝယ်ခိုင်းလို့ရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_164",
      "hanzi": "好的，我下午去告诉老板我们的电脑太老了。 ",
      "pinyin": "hǎo de, wǒ xià wǔ qù gào su lǎo bǎn wǒ men de diàn nǎo tài lǎo le.",
      "burmese": "ဟုတ်ကဲ့၊ ညနေကျရင် ဘော့စ်ကို ငါတို့ကွန်ပျူတာတွေဟောင်းနေပြီလို့ သွားပြောမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_165",
      "hanzi": "你觉得学习HTML难，还是学习CSS难？ ",
      "pinyin": "nǐ jué de xué xí HTML nán, hái shì xué xí CSS nán?",
      "burmese": "HTML လေ့လာရတာခက်တယ်ထင်လား၊ CSS လေ့လာရတာပိုခက်တယ်ထင်လား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_166",
      "hanzi": "我觉得都不难，但是学习JavaScript很难。 ",
      "pinyin": "wǒ jué de dōu bù nán, dàn shì xué xí JavaScript hěn nán.",
      "burmese": "နှစ်ခုလုံးမခက်ဘူးလို့ထင်တယ်၊ ဒါပေမယ့် JavaScript လေ့လာရတာကတော့ အရမ်းခက်တယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_167",
      "hanzi": "请你帮我看看这段代码为什么一直不会走？",
      "pinyin": "qǐng nǐ bāng wǒ kàn kan zhè duàn dài mǎ wèi shén me yì zhí bú huì zǒu?",
      "burmese": "ဒီကုတ်တွေက ဘာလို့အလုပ်မလုပ်တာလဲဆိုတာ ကျေးဇူးပြုပြီးကြည့်ပေးလို့ရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_168",
      "hanzi": "因为你的前面少写了一个字，现在加上就好了。 ",
      "pinyin": "yīn wèi nǐ de qián mian shǎo xiě le yí ge zì, xiàn zài jiā shang jiù hǎo le.",
      "burmese": "အရှေ့မှာစာတစ်လုံးကျန်ခဲ့လို့ပါ၊ အခုပြန်ထည့်လိုက်ရင်ရပါပြီ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_169",
      "hanzi": "这个字的意思是对的吗？写在网上没人笑吧？ ",
      "pinyin": "zhè ge zì de yì si shì duì de ma? xiě zài wǎng shang méi rén xiào ba?",
      "burmese": "ဒီစာလုံးအဓိပ္ပာယ်ကမှန်ရဲ့လား? ဝဘ်ဆိုဒ်ပေါ်မှာရေးရင် လူတွေရယ်မှာမဟုတ်ဘူးနော်?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_170",
      "hanzi": "我觉得没问题，很多人都喜欢用这个字来说。",
      "pinyin": "wǒ jué de méi wèn tí, hěn duō rén dōu xǐ huan yòng zhè ge zì lái shuō.",
      "burmese": "ငါကတော့ပြဿနာမရှိဘူးထင်တယ်၊ လူအများကြီးက ဒီစာလုံးကိုသုံးပြီးပြောကြတာပဲ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_171",
      "hanzi": "今天的工作太多了，我可能不能和你去吃饭了。",
      "pinyin": "jīn tiān de gōng zuò tài duō le, wǒ kě néng bù néng hé nǐ qù chī fàn le.",
      "burmese": "ဒီနေ့အလုပ်တွေအရမ်းများတယ်၊ ငါမင်းနဲ့ထမင်းသွားစားဖြစ်မှာမဟုတ်ဘူး။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_172",
      "hanzi": "没关系，等你写完了所有的代码，我们周末吃吧。",
      "pinyin": "méi guān xi, děng nǐ xiě wán le suǒ yǒu de dài mǎ, wǒ men zhōu mò chī ba.",
      "burmese": "ကိစ္စမရှိပါဘူး၊ မင်းကုတ်တွေအားလုံးရေးပြီးမှ ပိတ်ရက်မှာငါတို့စားကြမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_173",
      "hanzi": "我们要把那个写着“你好”的地方换成“再见”？",
      "pinyin": "wǒ men yào bǎ nà ge xiě zhe “nǐ hǎo” de dì fang huàn chéng “zài jiàn”?",
      "burmese": "ငါတို့ “မင်္ဂလာပါ” လို့ရေးထားတဲ့နေရာကို “တာ့တာ” လို့ပြောင်းရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_174",
      "hanzi": "是的，就在上面那一行改，别的都不能变。",
      "pinyin": "shì de, jiù zài shàng mian nà yì háng gǎi, bié de dōu bù néng biàn.",
      "burmese": "ဟုတ်တယ်၊ အပေါ်ဆုံးကတစ်ကြောင်းထဲကိုပဲပြောင်း၊ ကျန်တာတွေအကုန်မပြောင်းနဲ့။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_175",
      "hanzi": "你可以教我怎么在这个项目里面加新的东西吗？ ",
      "pinyin": "nǐ kě yǐ jiāo wǒ zěn me zài zhè ge xiàng mù lǐ miàn jiā xīn de dōng xi ma?",
      "burmese": "ဒီပရောဂျက်ထဲမှာ အရာသစ်တွေဘယ်လိုထပ်ထည့်ရမလဲဆိုတာ သင်ပေးနိုင်မလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_176",
      "hanzi": "这很简单，你坐在旁边看我怎么做一次。",
      "pinyin": "zhè hěn jiǎn dān, nǐ zuò zài páng biān kàn wǒ zěn me zuò yí cì.",
      "burmese": "ဒါကအရမ်းလွယ်တယ်၊ ငါဘယ်လိုလုပ်လဲဆိုတာကို မင်းဘေးကနေထိုင်ကြည့်ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_177",
      "hanzi": "你的桌子上放了很多咖啡，你喝不完吧？",
      "pinyin": "nǐ de zhuō zi shang fàng le hěn duō kā fēi, nǐ hē bù wán ba?",
      "burmese": "မင်းစားပွဲပေါ်မှာ ကော်ဖီတွေအများကြီးထားထားတယ်၊ မင်းသောက်လို့ကုန်မှာမဟုတ်ဘူးမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_178",
      "hanzi": "我在看别人怎么写代码，需要喝很多咖啡才不困。 ",
      "pinyin": "wǒ zài kàn bié rén zěn me xiě dài mǎ, xū yào hē hěn duō kā fēi cái bú kùn.",
      "burmese": "သူများတွေကုတ်ဘယ်လိုရေးလဲဆိုတာကိုလေ့လာနေတာ၊ အိပ်မငိုက်အောင်ကော်ဖီအများကြီးသောက်ဖို့လိုတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_179",
      "hanzi": "如果现在关掉电脑，那些写好的东西就都不见了。 ",
      "pinyin": "rú guǒ xiàn zài guān diào diàn nǎo, nà xiē xiě hǎo de dōng xi jiù dōu bú jiàn le.",
      "burmese": "အခုချက်ချင်း ကွန်ပျူတာပိတ်လိုက်ရင်၊ ရေးပြီးသားအရာတွေအကုန်လုံးပျောက်သွားလိမ့်မယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_180",
      "hanzi": "你还没保存呢！请你现在就让电脑点保存。 ",
      "pinyin": "nǐ hái méi bǎo cún ne! qǐng nǐ xiàn zài jiù ràng diàn nǎo diǎn bǎo cún. ",
      "burmese": "မင်း Save မလုပ်ရသေးဘူး! ကျေးဇူးပြုပြီး အခုချက်ချင်းကွန်ပျူတာမှာ Save ကိုနှိပ်လိုက်ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_181",
      "hanzi": "你懂这句话是什么意思吗？可以解释一下吗？ ",
      "pinyin": "nǐ dǒng zhè jù huà shì shén me yì si ma? kě yǐ jiě shì yí xià ma?",
      "burmese": "ဒီကုတ်စာကြောင်းကိုနားလည်လား? တစ်ခေါက်လောက်ရှင်းပြလို့ရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_182",
      "hanzi": "它的意思是让我们不要放弃，每天努力前行。",
      "pinyin": "tā de yì si shì ràng wǒ men bú yào fàng qì, měi tiān nǔ lì qián xíng.",
      "burmese": "ဒါက အမှားတွေကိုမမှုဘဲ နေ့တိုင်းကြိုးစားပြီးရေးရမယ်လို့ ဆိုလိုတာပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_183",
      "hanzi": "我觉得你的屏幕时间用得太多了，对眼睛不好。 ",
      "pinyin": "wǒ jué de nǐ de píng mù shí jiān yòng de tài duō le, duì yǎn jing bù hǎo.",
      "burmese": "ငါထင်တယ်၊ မင်းဖန်သားပြင်ကိုသုံးတဲ့အချိန်က အရမ်းများလွန်းတယ်၊ မျက်လုံးအတွက်မကောင်းဘူး။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_184",
      "hanzi": "是啊，下周我要休息两天去外面的公园走走。 ",
      "pinyin": "shì a, xià zhōu wǒ yào xiū xi liǎng tiān qù wài miàn de gōng yuán zǒu zǒu.",
      "burmese": "ဟုတ်တယ်၊ နောက်အပတ်မှာ အနားနှစ်ရက်ယူပြီး အပြင်ကပန်းခြံဘက်ကို လမ်းသွားလျှောက်ရမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_185",
      "hanzi": "我们把红色的背景变成蓝色，你觉得哪个更好看？ ",
      "pinyin": "wǒ men bǎ hóng sè de bèi jǐng biàn chéng lán sè, nǐ jué de nǎ ge gèng hǎo kàn?",
      "burmese": "အနီရောင်နောက်ခံကို အပြာရောင်ပြောင်းလိုက်ရင်၊ ဘယ်ဟာပိုကြည့်ကောင်းမယ်လို့မင်းထင်လဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_186",
      "hanzi": "蓝色的让人觉得很安静，也很舒服，用它吧。 ",
      "pinyin": "lán sè de ràng rén jué de hěn ān jìng, yě hěn shū fu, yòng tā ba.",
      "burmese": "အပြာရောင်က လူတွေကိုတည်ငြိမ်ပြီးသက်တောင့်သက်သာဖြစ်စေတယ်၊ အဲ့ဒါပဲသုံးလိုက်ပါ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_187",
      "hanzi": "大家看，这个网页里的字是不大也不小。 ",
      "pinyin": "dà jiā kàn, zhè ge wǎng yè lǐ de zì shì bú dà yě bù xiǎo.",
      "burmese": "အားလုံးပဲကြည့်ပါ၊ ဒီဝဘ်ဆိုဒ်ထဲကစာလုံးတွေက ကြီးလွန်းတာလည်းမဟုတ်၊ သေးလွန်းတာလည်းမဟုတ်ဘူး။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_188",
      "hanzi": "非常好，电脑和手机上看起来都很不错了。 ",
      "pinyin": "fēi cháng hǎo, diàn nǎo hé shǒu jī shang kàn qǐ lái dōu hěn bú cuò le.",
      "burmese": "အရမ်းကောင်းတယ်၊ ကွန်ပျူတာပေါ်မှာဖြစ်စေ၊ ဖုန်းပေါ်မှာဖြစ်စေ ကြည့်ရတာတော်တော်လေးပြေပြစ်နေပြီ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_189",
      "hanzi": "你们组每天早上也有站着开十五分钟会的事吗？ ",
      "pinyin": "nǐ men zǔ měi tiān zǎo shang yě yǒu zhàn zhe kāi shí wǔ fēn zhōng huì de shì ma?",
      "burmese": "မင်းတို့အဖွဲ့မှာရော မနက်တိုင်း မတ်တပ်ရပ်ပြီး (၁၅) မိနစ် အစည်းအဝေးလုပ်တာမျိုးရှိလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_190",
      "hanzi": "我们也有，告诉大家昨天做了什么，今天做什么。 ",
      "pinyin": "wǒ men yě yǒu, gào su dà jiā zuó tiān zuò le shén me, jīn tiān zuò shén me.",
      "burmese": "ငါတို့လည်းရှိတယ်၊ မနေ့ကဘာလုပ်ခဲ့လဲ နဲ့ ဒီနေ့ဘာလုပ်မလဲဆိုတာကို အားလုံးကိုပြောပြရတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_191",
      "hanzi": "我在我的小房间里写代码，外面有人在唱歌很吵。 ",
      "pinyin": "wǒ zài wǒ de xiǎo fáng jiān lǐ xiě dài mǎ, wài miàn yǒu rén zài chàng gē hěn chǎo.",
      "burmese": "ငါ့အခန်းငယ်လေးထဲမှာ ကုတ်ရေးနေတာ၊ အပြင်မှာ လူတစ်ယောက်သီချင်းဆိုနေလို့ အရမ်းဆူညံနေတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_192",
      "hanzi": "戴上耳机可能会好一点，这样你能认真工作了。 ",
      "pinyin": "dài shang ěr jī kě néng huì hǎo yì diǎn, zhè yàng nǐ néng rèn zhēn gōng zuò le.",
      "burmese": "နားကြပ်တပ်ထားလိုက်ရင် နည်းနည်းပိုကောင်းလောက်တယ်၊ အဲ့ဒါဆို မင်းအာရုံစိုက်ပြီး အလုပ်လုပ်လို့ရပြီ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_193",
      "hanzi": "我写的这五个页面都已经完成了，什么时候一起看？ ",
      "pinyin": "wǒ xiě de zhè wǔ ge yè miàn dōu yǐ jīng wán chéng le, shén me shí hou yì qǐ kàn?",
      "burmese": "ငါရေးထားတဲ့ ဒီစာမျက်နှာငါးခုလုံးလုပ်လို့ပြီးသွားပြီ၊ အတူတူဘယ်အချိန် သွားကြည့်ကြမလဲ?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_194",
      "hanzi": "不要等太晚了，下午一点半我们就来测试一下。 ",
      "pinyin": "bú yào děng tài wǎn le, xià wǔ yì diǎn bàn wǒ men jiù lái cè shì yí xià.",
      "burmese": "အရမ်းနောက်ကျတဲ့အထိမစောင့်နဲ့၊ နေ့လယ် ၁ နာရီခွဲကျရင် ငါတို့စမ်းသပ်ကြည့်ကြမယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_195",
      "hanzi": "虽然我的英语考得不太好，但我可以去外国吗？ ",
      "pinyin": "suī rán wǒ de yīng yǔ kǎo de bú tài hǎo, dàn wǒ kě yǐ qù wài guó ma?",
      "burmese": "ငါအင်္ဂလိပ်စာ ကောင်းကောင်းမဖြေနိုင်ခဲ့ပေမယ့် နိုင်ငံခြားမှာသွားပြီး (Web Developer အဖြစ်) လုပ်လို့ရမလား?",
      "category": "web_dev"
    },
    {
      "id": "hsk2_196",
      "hanzi": "可以的，懂怎么写网页就是一门很好的语言。 ",
      "pinyin": "kě yǐ de, dǒng zěn me xiě wǎng yè jiù shì yì mén hěn hǎo de yǔ yán.",
      "burmese": "ရပါတယ်၊ ဝဘ်စာမျက်နှာရေးတတ်တယ်ဆိုတာကိုက ကောင်းမွန်တဲ့ ဘာသာစကားတစ်ခုပါပဲ။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_197",
      "hanzi": "那个新的服务在星期日会不会休息，大家都在问。 ",
      "pinyin": "nà ge xīn de fú wù zài xīng qī rì huì bú huì xiū xi, dà jiā dōu zài wèn.",
      "burmese": "အဲ့ဒီဆာဗာအသစ်က တနင်္ဂနွေနေ့တွေမှာ ရပ်နားထားမှာလားလို့ လူတိုင်းမေးနေကြတယ်။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_198",
      "hanzi": "它是机器，二十四个小时都在跑，不可能休息。 ",
      "pinyin": "tā shì jī qì, èr shí sì ge xiǎo shí dōu zài pǎo, bù kě néng xiū xi.",
      "burmese": "သူကစက်ပါ၊ ၂၄ နာရီလုံးလုံး အလုပ်လုပ်နေမှာပါ၊ နားဖို့ဆိုတာမဖြစ်နိုင်ဘူး။",
      "category": "web_dev"
    },
    {
      "id": "hsk2_199",
      "hanzi": "我觉得我不应该当编程人，现在我想每天卖鱼！",
      "pinyin": "wǒ jué de wǒ bù yīng gāi dāng biān chéng rén, xiàn zài wǒ xiǎng měi tiān mài yú!",
      "burmese": "ငါက ပရိုဂရမ်မာ တစ်ယောက် မဖြစ်သင့်ဘူးထင်တယ်၊ အခုတော့ ငါနေ့တိုင်း ငါးသွားရောင်းချင်နေပြီ!",
      "category": "web_dev"
    },
    {
      "id": "hsk2_200",
      "hanzi": "你已经学习了一年了，别在这个时候想休息呀！",
      "pinyin": "nǐ yǐ jīng xué xí le yì nián le, bié zài zhè ge shí hou xiǎng xiū xi ya!",
      "burmese": "မင်းလေ့လာလာတာတစ်နှစ်တောင်ရှိနေပြီ၊ ဒီအချိန်မှာတော့ လက်အမြှောက်ချင်နဲ့ဦး!",
      "category": "web_dev"
    },
    {
      "id": "hsk2_201",
      "hanzi": "你每天晚上一般几点睡觉？",
      "pinyin": "nǐ měi tiān wǎn shang yì bān jǐ diǎn shuì jiào?",
      "burmese": "မင်းညတိုင်း ပုံမှန်အားဖြင့် ဘယ်အချိန်အိပ်လေ့ရှိလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_202",
      "hanzi": "我每天晚上十一点半睡觉，早上七点起床。",
      "pinyin": "wǒ měi tiān wǎn shang shí yī diǎn bàn shuì jiào, zǎo shang qī diǎn qǐ chuáng.",
      "burmese": "ငါညတိုင်း ၁၁ နာရီခွဲအိပ်ပြီး မနက် ၇ နာရီထတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_203",
      "hanzi": "你今天为什么看起来这么累？",
      "pinyin": "nǐ jīn tiān wèi shén me kàn qǐ lái zhè me lèi?",
      "burmese": "ဒီနေ့မင်းဘာလို့ အရမ်းပင်ပန်းနေပုံရတာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_204",
      "hanzi": "因为昨天晚上我的狗生病了，我一直没睡好。",
      "pinyin": "yīn wèi zuó tiān wǎn shang wǒ de gǒu shēng bìng le, wǒ yì zhí méi shuì hǎo.",
      "burmese": "မနေ့ညကငါ့ခွေးလေးနေမကောင်းလို့၊ ငါတစ်ညလုံးကောင်းကောင်းအိပ်မပျော်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_205",
      "hanzi": "你的感冒好点了吗？还需要吃药吗？",
      "pinyin": "nǐ de gǎn mào hǎo diǎn le ma? hái xū yào chī yào ma?",
      "burmese": "မင်းအအေးမိတာသက်သာသွားပြီလား? ဆေးသောက်ဖို့လိုသေးလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_206",
      "hanzi": "好多了，医生说不用吃药了，多喝水就行。",
      "pinyin": "hǎo duō le, yī shēng shuō bú yòng chī yào le, duō hē shuǐ jiù xíng.",
      "burmese": "အများကြီးသက်သာသွားပြီ၊ ဆရာဝန်ကဆေးမသောက်ရတော့ပါဘူး၊ ရေများများသောက်ရင်ရပြီလို့ပြောတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_207",
      "hanzi": "你周末喜欢在家里看电视还是出去玩？",
      "pinyin": "nǐ zhōu mò xǐ huan zài jiā lǐ kàn diàn shì hái shì chū qu wán?",
      "burmese": "မင်းပိတ်ရက်တွေမှာ အိမ်မှာတီဗီကြည့်ရတာကြိုက်လား ဒါမှမဟုတ် အပြင်ထွက်လည်ရတာကြိုက်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_208",
      "hanzi": "我喜欢和朋友一起去外面打篮球。",
      "pinyin": "wǒ xǐ huan hé péng you yì qǐ qù wài miàn dǎ lán qiú.",
      "burmese": "ငါသူငယ်ချင်းတွေနဲ့အတူတူ အပြင်သွားပြီးဘတ်စကက်ဘောကစားရတာကြိုက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_209",
      "hanzi": "这件衣服在哪个商店买的？真好看。",
      "pinyin": "zhè jiàn yī fu zài nǎ ge shāng diàn mǎi de? zhēn hǎo kàn.",
      "burmese": "ဒီအင်္ကျီက ဘယ်ဆိုင်ကဝယ်တာလဲ? တကယ်လှတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_210",
      "hanzi": "在学校前面的那个新商店买的，也不贵。",
      "pinyin": "zài xué xiào qián mian de nà ge xīn shāng diàn mǎi de, yě bú guì.",
      "burmese": "ကျောင်းရှေ့က ဆိုင်သစ်ကနေဝယ်တာပါ၊ စျေးလည်းမကြီးဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_211",
      "hanzi": "你觉得这家饭馆的菜怎么样？",
      "pinyin": "nǐ jué de zhè jiā fàn guǎn de cài zěn me yàng?",
      "burmese": "ဒီစားသောက်ဆိုင်ရဲ့ဟင်းတွေ ဘယ်လိုနေလဲလို့မင်းထင်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_212",
      "hanzi": "我觉得很好吃，特别是他们做的鱼。",
      "pinyin": "wǒ jué de hěn hǎo chī, tè bié shì tā men zuò de yú.",
      "burmese": "အရမ်းစားကောင်းတယ်လို့ထင်တယ်၊ အထူးသဖြင့် သူတို့ချက်တဲ့ငါး။",
      "category": "daily"
    },
    {
      "id": "hsk2_213",
      "hanzi": "你要多吃点水果，这对身体非常有好处。",
      "pinyin": "nǐ yào duō chī diǎn shuǐ guǒ, zhè duì shēn tǐ fēi cháng yǒu hǎo chù.",
      "burmese": "မင်းသစ်သီးများများစားရမယ်၊ အဲ့ဒါကကျန်းမာရေးအတွက် အရမ်းအကျိုးရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_214",
      "hanzi": "好的，我知道了，等一下我去买几个苹果。",
      "pinyin": "hǎo de, wǒ zhī dào le, děng yi xià wǒ qù mǎi jǐ ge píng guǒ.",
      "burmese": "ဟုတ်ကဲ့ပါ နားလည်ပါပြီ၊ ခဏနေရင် ငါပန်းသီးနှစ်လုံးသုံးလုံးလောက်သွားဝယ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_215",
      "hanzi": "那个拿报纸的人是你的爸爸吗？",
      "pinyin": "nà ge ná bào zhǐ de rén shì nǐ de bà ba ma?",
      "burmese": "ဟိုသတင်းစာကိုင်ထားတဲ့သူက မင်းအဖေလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_216",
      "hanzi": "不是，那个高一点的男人才是我的爸爸。",
      "pinyin": "bú shì, nà ge gāo yì diǎn de nán rén cái shì wǒ de bà ba.",
      "burmese": "မဟုတ်ပါဘူး၊ ဟိုအရပ်နည်းနည်းပိုရှည်တဲ့ အမျိုးသားကမှ ငါ့အဖေပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_217",
      "hanzi": "你今天下午三点有时间吗？",
      "pinyin": "nǐ jīn tiān xià wǔ sān diǎn yǒu shí jiān ma?",
      "burmese": "ဒီနေ့ညနေ ၃ နာရီမှာ မင်းအချိန်ရလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_218",
      "hanzi": "对不起，下午三点我有一个很重要的考试。",
      "pinyin": "duì bu qǐ, xià wǔ sān diǎn wǒ yǒu yí ge hěn zhòng yào de kǎo shì.",
      "burmese": "တောင်းပန်ပါတယ်၊ ညနေ ၃ နာရီမှာငါအရမ်းအရေးကြီးတဲ့စာမေးပွဲတစ်ခုရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_219",
      "hanzi": "这个星期天你要不要跟我们去游泳？",
      "pinyin": "zhè ge xīng qī tiān nǐ yào bú yào gēn wǒ men qù yóu yǒng?",
      "burmese": "ဒီတနင်္ဂနွေနေ့ ငါတို့နဲ့အတူရေသွားကူးမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_220",
      "hanzi": "太好了，我非常喜欢游泳，几点去？",
      "pinyin": "tài hǎo le, wǒ fēi cháng xǐ huan yóu yǒng, jǐ diǎn qù?",
      "burmese": "အရမ်းကောင်းတာပေါ့၊ ငါရေကူးတာကိုအရမ်းကြိုက်တယ်၊ ဘယ်အချိန်သွားမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_221",
      "hanzi": "明天早上不要迟到了，我们需要早点出门。",
      "pinyin": "míng tiān zǎo shang bú yào chí dào le, wǒ men xū yào zǎo diǎn chū mén.",
      "burmese": "မနက်ဖြန်မနက် နောက်မကျစေနဲ့၊ ငါတို့အစောကြီးထွက်ဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_222",
      "hanzi": "知道了，我今天晚上会早一点休息。",
      "pinyin": "zhī dào le, wǒ jīn tiān wǎn shang huì zǎo yì diǎn xiū xi.",
      "burmese": "သိပါပြီ၊ ငါဒီည စောစောလေးကိုအနားယူပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_223",
      "hanzi": "你觉得北京的冬天冷不冷？",
      "pinyin": "nǐ jué de Běi jīng de dōng tiān lěng bù lěng?",
      "burmese": "ပေကျင်းရဲ့ဆောင်းရာသီ အေးတယ်လို့မင်းထင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_224",
      "hanzi": "非常冷，有时候还会下很大的雪。",
      "pinyin": "fēi cháng lěng, yǒu shí hou hái huì xià hěn dà de xuě.",
      "burmese": "အရမ်းအေးတယ်၊ တစ်ခါတလေ နှင်းတောင်အများကြီးကျသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_225",
      "hanzi": "你可以帮我买一杯热茶吗？",
      "pinyin": "nǐ kě yǐ bāng wǒ mǎi yì bēi rè chá ma?",
      "burmese": "မင်းငါ့ကိုကူညီပြီး လက်ဖက်ရည်ပူတစ်ခွက်ဝယ်ပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_226",
      "hanzi": "当然可以，你在房间里等我吧。",
      "pinyin": "dāng rán kě yǐ, nǐ zài fáng jiān lǐ děng wǒ ba.",
      "burmese": "ရတာပေါ့၊ မင်းအခန်းထဲမှာငါ့ကိုစောင့်နေပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_227",
      "hanzi": "你认识那边的那个正在笑的女人吗？",
      "pinyin": "nǐ rèn shi nà biān de nà ge zhèng zài xiào de nǚ rén ma?",
      "burmese": "ဟိုဘက်မှာ ရယ်နေတဲ့အမျိုးသမီးကို မင်းသိလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_228",
      "hanzi": "不认识，但是我好像在学校见过她一次。",
      "pinyin": "bú rèn shi, dàn shì wǒ hǎo xiàng zài xué xiào jiàn guò tā yí cì.",
      "burmese": "မသိဘူး၊ ဒါပေမယ့် သူမကို ကျောင်းမှာတစ်ခေါက်တွေ့ဖူးသလိုပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk2_229",
      "hanzi": "这件事情你要告诉你的老师吗？",
      "pinyin": "zhè jiàn shì qing nǐ yào gào su nǐ de lǎo shī ma?",
      "burmese": "ဒီကိစ္စကို မင်းရဲ့ဆရာ့ကိုပြောမှာလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_230",
      "hanzi": "我还没有想好，再等几天再说吧。",
      "pinyin": "wǒ hái méi yǒu xiǎng hǎo, zài děng jǐ tiān zài shuō ba.",
      "burmese": "ငါစဉ်းစားလို့မပြီးသေးဘူး၊ နောက်ရက်နည်းနည်းလောက်စောင့်ပြီးမှပဲပြောတော့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_231",
      "hanzi": "你昨天考得怎么样？难吗？",
      "pinyin": "nǐ zuó tiān kǎo de zěn me yàng? nán ma?",
      "burmese": "မနေ့ကမင်းစာမေးပွဲဖြေတာဘယ်လိုလဲ? ခက်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_232",
      "hanzi": "前面的题不难，但是后面的几道题很难。",
      "pinyin": "qián mian de tí bù nán, dàn shì hòu mian de jǐ dào tí hěn nán.",
      "burmese": "ရှေ့ကမေးခွန်းတွေကမခက်ဘူး၊ ဒါပေမယ့် နောက်ကမေးခွန်းအနည်းငယ်က အရမ်းခက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_233",
      "hanzi": "你看见我的手机了吗？我找不到它了。",
      "pinyin": "nǐ kàn jiàn wǒ de shǒu jī le ma? wǒ zhǎo bu dào tā le.",
      "burmese": "ငါ့ဖုန်းကိုမင်းတွေ့လိုက်လား? ငါအဲ့ဒါကိုရှာမတွေ့တော့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_234",
      "hanzi": "你看一下桌子下面，是不是掉在那里了？",
      "pinyin": "nǐ kàn yí xià zhuō zi xià mian, shì不 shì diào zài nà lǐ le?",
      "burmese": "စားပွဲအောက်ကိုတစ်ချက်ကြည့်လိုက်ပါ၊ အဲ့ဒီကိုပြုတ်ကျသွားတာလားလို့?",
      "category": "daily"
    },
    {
      "id": "hsk2_235",
      "hanzi": "你去过那家离我们公司很近的咖啡馆吗？",
      "pinyin": "nǐ qù guò nà jiā lí wǒ men gōng sī hěn jìn de kā fēi guǎn ma?",
      "burmese": "ငါတို့ကုမ္ပဏီနဲ့အရမ်းနီးတဲ့ အဲ့ကော်ဖီဆိုင်ကိုသွားဖူးလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_236",
      "hanzi": "去过，那里的咖啡很好喝，还可以上网。",
      "pinyin": "qù guò, nà lǐ de kā fēi hěn hǎo hē, hái kě yǐ shàng wǎng.",
      "burmese": "သွားဖူးတယ်၊ အဲ့ဒီကကော်ဖီကသောက်လို့ကောင်းတယ်၊ အင်တာနက်လည်းသုံးလို့ရသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_237",
      "hanzi": "为什么你每天都要走路回家？",
      "pinyin": "wèi shén me nǐ měi tiān dōu yào zǒu lù huí jiā?",
      "burmese": "ဘာလို့မင်းနေ့တိုင်း အိမ်ကိုလမ်းလျှောက်ပြန်ရတာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_238",
      "hanzi": "因为走路也是一种运动，对身体好。",
      "pinyin": "yīn wèi zǒu lù yě shì yì zhǒng yùn dòng, duì shēn tǐ hǎo.",
      "burmese": "ဘာလို့လဲဆိုတော့ လမ်းလျှောက်တာကလည်း လေ့ကျင့်ခန်းတစ်မျိုးမို့လို့၊ ကျန်းမာရေးအတွက်ကောင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_239",
      "hanzi": "你可以把那个红色的苹果递给我吗？",
      "pinyin": "nǐ kě yǐ bǎ nà ge hóng sè de píng guǒ dì gěi wǒ ma?",
      "burmese": "အဲ့ဒီပန်းသီးအနီရောင်လေးကို ငါ့ကိုလှမ်းပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_240",
      "hanzi": "给你，如果你还想吃，冰箱里还有很多。",
      "pinyin": "gěi nǐ, rú guǒ nǐ hái xiǎng chī, bīng xiāng lǐ hái yǒu hěn duō.",
      "burmese": "ရော့၊ မင်းဆက်စားချင်သေးရင် ရေခဲသေတ္တာထဲမှာ အများကြီးရှိသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_241",
      "hanzi": "现在外面正在下雨，我们坐出租车回去吧。",
      "pinyin": "xiàn zài wài miàn zhèng zài xià yǔ, wǒ men zuò chū zū chē huí qù ba.",
      "burmese": "အခုအပြင်မှာမိုးရွာနေတယ်၊ ငါတို့အငှားကားစီးပြီးပြန်ကြရအောင်။",
      "category": "daily"
    },
    {
      "id": "hsk2_242",
      "hanzi": "下雨天叫出租车很难，我们去坐地铁吧。",
      "pinyin": "xià yǔ tiān jiào chū zū chē hěn nán, wǒ men qù zuò dì tiě ba.",
      "burmese": "မိုးရွာတဲ့နေ့တွေမှာ အငှားကားခေါ်ရတာခက်တယ်၊ ငါတို့မြေအောက်ရထားသွားစီးကြမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_243",
      "hanzi": "你学会开车学了多长时间？难不难？",
      "pinyin": "nǐ xué huì kāi chē xué le duō cháng shí jiān? nán bù nán?",
      "burmese": "မင်းကားမောင်းတတ်ဖို့ ဘယ်လောက်ကြာအောင်သင်ခဲ့ရလဲ? ခက်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_244",
      "hanzi": "学了三个月，刚开始有点难，后面就好了。",
      "pinyin": "xué le sān ge yuè, gāng kāi shǐ yǒu diǎn nán, hòu mian jiù hǎo le.",
      "burmese": "သုံးလသင်ခဲ့ရတယ်၊ အစပိုင်းမှာနည်းနည်းခက်တယ်၊ နောက်ပိုင်းတော့အဆင်ပြေသွားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_245",
      "hanzi": "下个星期我姐姐结婚，我想送她一个礼物。",
      "pinyin": "xià ge xīng qī wǒ jiě jie jié hūn, wǒ xiǎng sòng tā yí ge lǐ wù.",
      "burmese": "နောက်အပတ်ငါ့အစ်မမင်္ဂလာဆောင်တယ်၊ ငါသူ့ကိုလက်ဆောင်တစ်ခုပေးချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_246",
      "hanzi": "买一块漂亮的手表怎么样？",
      "pinyin": "mǎi yí kuài piào liang de shǒu biǎo zěn me yàng?",
      "burmese": "လှပတဲ့လက်ပတ်နာရီတစ်လုံးဝယ်ပေးရင်ဘယ်လိုလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_247",
      "hanzi": "我的病好了，从今天开始我可以去上班了。",
      "pinyin": "wǒ de bìng hǎo le, cóng jīn tiān kāi shǐ wǒ kě yǐ qù shàng bān le.",
      "burmese": "ငါ့ရောဂါသက်သာသွားပြီ၊ ဒီနေ့ကစပြီး ငါအလုပ်သွားလို့ရပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk2_248",
      "hanzi": "太好了，大家都非常想念你。",
      "pinyin": "tài hǎo le, dà jiā dōu fēi cháng xiǎng niàn nǐ.",
      "burmese": "အရမ်းကောင်းတာပေါ့၊ အားလုံးကမင်းကိုအရမ်းလွမ်းနေကြတာ။",
      "category": "daily"
    },
    {
      "id": "hsk2_249",
      "hanzi": "你等一会儿再走，外面风太大了。",
      "pinyin": "nǐ děng yí huìr zài zǒu, wài miàn fēng tài dà le.",
      "burmese": "ခဏလောက်စောင့်ပြီးမှသွားပါ၊ အပြင်မှာလေအရမ်းတိုက်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_250",
      "hanzi": "没关系，我就住在旁边，不用担心。",
      "pinyin": "méi guān xi, wǒ jiù zhù zài páng biān, bú yòng dān xīn.",
      "burmese": "ကိစ္စမရှိပါဘူး၊ ငါဒီအနားလေးမှာပဲနေတာပါ၊ စိတ်မပူပါနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_251",
      "hanzi": "他为什么在医院里住了一个月？",
      "pinyin": "tā wèi shén me zài yī yuàn lǐ zhù le yí ge yuè?",
      "burmese": "သူဘာလို့ဆေးရုံမှာတစ်လလောက်တက်ခဲ့ရတာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_252",
      "hanzi": "他出了车祸，腿受伤了，现在还没有好。",
      "pinyin": "tā chū le chē huò, tuǐ shòu shāng le, xiàn zài hái méi yǒu hǎo.",
      "burmese": "သူကားအက်ဆီးဒင့်ဖြစ်ပြီး ခြေထောက်ဒဏ်ရာရသွားတယ်၊ အခုထိမသက်သာသေးဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_253",
      "hanzi": "昨天的天气预报说什么了？",
      "pinyin": "zuó tiān de tiān qì yù bào shuō shén me le?",
      "burmese": "မနေ့က မိုးလေဝသခန့်မှန်းချက်က ဘာပြောလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_254",
      "hanzi": "说今天下午会有大风和大雨。",
      "pinyin": "shuō jīn tiān xià wǔ huì yǒu dà fēng hé dà yǔ.",
      "burmese": "ဒီနေ့ညနေ လေပြင်းနဲ့မိုးကြီးမယ်လို့ပြောတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_255",
      "hanzi": "我每天早上八点半都要在地铁口等朋友。",
      "pinyin": "wǒ měi tiān zǎo shang bā diǎn bàn dōu yào zài dì tiě kǒu děng péng you.",
      "burmese": "ငါနေ့တိုင်းမနက် ၈ နာရီခွဲ မြေအောက်ရထားဘူတာဝမှာ သူငယ်ချင်းကိုစောင့်ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_256",
      "hanzi": "他经常迟到吗？你等了多久？",
      "pinyin": "tā jīng cháng chí dào ma? nǐ děng le duō jiǔ?",
      "burmese": "သူခဏခဏနောက်ကျတတ်လား? မင်းဘယ်လောက်ကြာကြာစောင့်ခဲ့ရလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_257",
      "hanzi": "我饿了，我们去旁边的饭馆吃点什么吧。",
      "pinyin": "wǒ è le, wǒ men qù páng biān de fàn guǎn chī diǎn shén me ba.",
      "burmese": "ငါဆာပြီ၊ ငါတို့ဘေးနားက စားသောက်ဆိုင်သွားပြီး တစ်ခုခုသွားစားကြရအောင်။",
      "category": "daily"
    },
    {
      "id": "hsk2_258",
      "hanzi": "你想吃面条还是米饭？我刚吃了一个苹果。",
      "pinyin": "nǐ xiǎng chī miàn tiáo hái shì mǐ fàn? wǒ gāng chī le yí ge píng guǒ.",
      "burmese": "မင်းခေါက်ဆွဲစားချင်လား ဒါမှမဟုတ် ထမင်းစားချင်လား? ငါအခုလေးတင် ပန်းသီးတစ်လုံးစားထားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_259",
      "hanzi": "今天的工作有点多，我可能会加班到八点。",
      "pinyin": "jīn tiān de gōng zuò yǒu diǎn duō, wǒ kě néng huì jiā bān dào bā diǎn.",
      "burmese": "ဒီနေ့အလုပ်နည်းနည်းများတယ်၊ ငါ ၈ နာရီအထိအချိန်ပိုလုပ်ရလောက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_260",
      "hanzi": "辛苦了，我给你做点好吃的等你回来。",
      "pinyin": "xīn kǔ le, wǒ gěi nǐ zuò diǎn hǎo chī de děng nǐ huí lái.",
      "burmese": "ပင်ပန်းပါပြီ၊ ငါမင်းအတွက် စားကောင်းတာလေးနည်းနည်းလုပ်ပြီး မင်းပြန်အလာကိုစောင့်နေပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_261",
      "hanzi": "我的妈妈每天早上都会去公园跑步。",
      "pinyin": "wǒ de mā ma měi tiān zǎo shang dōu huì qù gōng yuán pǎo bù.",
      "burmese": "ငါ့အမေက နေ့တိုင်းမနက် ပန်းခြံထဲကို ပြေးလေ့ကျင့်ခန်းသွားလုပ်လေ့ရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_262",
      "hanzi": "她真健康，我也想每天跑，可是起不来。",
      "pinyin": "tā zhēn jiàn kāng, wǒ yě xiǎng měi tiān pǎo, kě shì qǐ bù lái.",
      "burmese": "သူတကယ်ကျန်းမာတာပဲ၊ ငါလည်းနေ့တိုင်းပြေးချင်တယ်၊ ဒါပေမယ့် မထနိုင်ဘူးဖြစ်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_263",
      "hanzi": "你还记得那个红色的自行车是谁的吗？",
      "pinyin": "nǐ hái jì de nà ge hóng sè de zì xíng chē shì shéi de ma?",
      "burmese": "ဟိုစက်ဘီးအနီရောင်က ဘယ်သူ့ဟာလဲဆိုတာ မင်းမှတ်မိသေးလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_264",
      "hanzi": "那是我弟弟的，他去年买的。",
      "pinyin": "nà shì wǒ dì di de, tā qù nián mǎi de.",
      "burmese": "အဲ့ဒါငါ့ညီဟာပါ၊ သူပြီးခဲ့တဲ့နှစ်ကဝယ်ထားတာ။",
      "category": "daily"
    },
    {
      "id": "hsk2_265",
      "hanzi": "这个句子我不认识，你能告诉我怎么读吗？",
      "pinyin": "zhè ge jù zi wǒ bú rèn shi, nǐ néng gào su wǒ zěn me dú ma?",
      "burmese": "ဒီစာကြောင်းကို ငါမသိဘူး၊ ဘယ်လိုဖတ်ရလဲဆိုတာ ငါ့ကိုပြောပြပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_266",
      "hanzi": "没问题，我读一遍你听着。",
      "pinyin": "méi wèn tí, wǒ dú yí biàn nǐ tīng zhe.",
      "burmese": "ပြဿနာမရှိပါဘူး၊ ငါတစ်ခေါက်ဖတ်ပြမယ် မင်းနားထောင်။",
      "category": "daily"
    },
    {
      "id": "hsk2_267",
      "hanzi": "你这几天在忙什么？怎么不给我打电话？",
      "pinyin": "nǐ zhè jǐ tiān zài máng shén me? zěn me bù gěi wǒ diàn huà?",
      "burmese": "မင်းဒီရက်ပိုင်းဘာတွေအလုပ်များနေတာလဲ? ဘာလို့ငါ့ကိုဖုန်းမဆက်တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_268",
      "hanzi": "对不起，公司里有一件新事情要做，太忙了。",
      "pinyin": "duì bu qǐ, gōng sī lǐ yǒu yí jiàn xīn shì qing yào zuò, tài máng le.",
      "burmese": "တောင်းပန်ပါတယ်၊ ကုမ္ပဏီမှာလုပ်စရာကိစ္စအသစ်တစ်ခုပေါ်လာလို့ အရမ်းအလုပ်များနေတာ။",
      "category": "daily"
    },
    {
      "id": "hsk2_269",
      "hanzi": "你在中国住了三年，非常了解这里的文化了吧？",
      "pinyin": "nǐ zài zhōng guó zhù le sān nián, fēi cháng liǎo jiě zhè lǐ de wén huà le ba?",
      "burmese": "မင်းတရုတ်နိုင်ငံမှာ ၃ နှစ်နေခဲ့တယ်ဆိုတော့၊ ဒီကယဉ်ကျေးမှုကို တော်တော်လေးနားလည်နေပြီပေါ့နော်?",
      "category": "daily"
    },
    {
      "id": "hsk2_270",
      "hanzi": "算是了解一点儿，但是还有很多不懂的。",
      "pinyin": "suàn shì liǎo jiě yì diǎnr, dàn shì hái yǒu hěn duō bù dǒng de.",
      "burmese": "နည်းနည်းတော့နားလည်တယ်လို့ဆိုရမှာပေါ့၊ ဒါပေမယ့် နားမလည်တာတွေအများကြီးရှိသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_271",
      "hanzi": "我今天买了很多水果，你可以帮我拿一下吗？",
      "pinyin": "wǒ jīn tiān mǎi le hěn duō shuǐ guǒ, nǐ kě yǐ bāng wǒ ná yí xià ma?",
      "burmese": "ငါဒီနေ့သစ်သီးတွေအများကြီးဝယ်လာတယ်၊ ငါ့ကိုဆွဲဖို့ကူညီပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_272",
      "hanzi": "来，让我帮你，太重了，你要小心。",
      "pinyin": "lái, ràng wǒ bāng nǐ, tài zhòng le, nǐ yào xiǎo xīn.",
      "burmese": "လာ၊ ငါကူပေးမယ်၊ အရမ်းလေးတယ် မင်းသတိထားနော်။",
      "category": "daily"
    },
    {
      "id": "hsk2_273",
      "hanzi": "下个月我有一个很长的假期，我想去旅游",
      "pinyin": "xià ge yuè wǒ yǒu yí ge hěn cháng de jià qī, wǒ xiǎng qù lǚ yóu",
      "burmese": "နောက်လထဲမှာငါ့ဆီမှာ ရှည်လျားတဲ့အားလပ်ရက်တစ်ခုရှိတယ်၊ ငါခရီးထွက်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_274",
      "hanzi": "去北京吧，那里有很多好吃的好玩的。",
      "pinyin": "qù Běi jīng ba, nà lǐ yǒu hěn duō hǎo chī de hǎo wán de.",
      "burmese": "ပေကျင်းသွားပါလား၊ အဲ့ဒီမှာ စားကောင်းတာတွေနဲ့ ကစားစရာတွေအများကြီးရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_275",
      "hanzi": "我的手机有点问题，别人听不到说话",
      "pinyin": "wǒ de shǒu jī yǒu diǎn wèn tí, bié rén tīng bù dào shuō huà",
      "burmese": "ငါ့ဖုန်းနည်းနည်းပြဿနာရှိနေတယ်၊ ငါပြောတာကိုတခြားသူတွေမကြားရဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_276",
      "hanzi": "你可以去找维修店让人家看一下",
      "pinyin": "nǐ kě yǐ qù zhǎo wéi xiū diàn ràng rén jiā kàn yí xià",
      "burmese": "မင်းဖုန်းပြင်ဆိုင်သွားပြီး သူတို့ကိုတစ်ချက်ပြကြည့်လိုက်လို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_277",
      "hanzi": "我们要在这个十字路口往左走还是往右走？",
      "pinyin": "wǒ men yào zài zhè ge shí zì lù kǒu wǎng zuǒ zǒu hái shì wǎng yòu zǒu?",
      "burmese": "ငါတို့ဒီလမ်းဆုံမှာ ဘယ်ဘက်ကိုသွားရမှာလား ညာဘက်ကိုသွားရမှာလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_278",
      "hanzi": "前面往左走三百米就能看到那家新的咖啡馆了。",
      "pinyin": "qián mian wǎng zuǒ zǒu sān bǎi mǐ jiù néng kàn dào nà jiā xīn de kā fēi guǎn le.",
      "burmese": "ရှေ့ကို ဘယ်ဘက်ကွေ့ပြီး မီတာ ၃၀၀ လောက်သွားရင် အဲ့ကော်ဖီဆိုင်အသစ်ကိုတွေ့နိုင်လိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_279",
      "hanzi": "我的眼睛很疼，可能是看电脑的时间太长了。",
      "pinyin": "wǒ de yǎn jing hěn téng, kě néng shì kàn diàn nǎo de shí jiān tài cháng le.",
      "burmese": "ငါ့မျက်လုံးအရမ်းနာတယ်၊ ကွန်ပျူတာကြည့်တဲ့အချိန်အရမ်းကြာသွားလို့ဖြစ်နိုင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_280",
      "hanzi": "快闭上眼睛休息一会儿，或者看看外面的树。",
      "pinyin": "kuài bì shang yǎn jing xiū xi yí huìr, huò zhě kàn kan wài miàn de shù.",
      "burmese": "မျက်လုံးမြန်မြန်မှိတ်ပြီးခဏလောက်နားလိုက်ပါ၊ ဒါမှမဟုတ် အပြင်ကသစ်ပင်တွေကိုကြည့်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_281",
      "hanzi": "你能听懂她说的话吗？她说得太快了。",
      "pinyin": "nǐ néng tīng dǒng tā shuō de huà ma? tā shuō de tài kuài le.",
      "burmese": "သူမပြောတဲ့စကားကို မင်းနားလည်လား? သူမပြောတာအရမ်းမြန်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_282",
      "hanzi": "我能听懂一部分，你可以让她说慢一点儿。",
      "pinyin": "wǒ néng tīng dǒng yí bù fèn, nǐ kě yǐ ràng tā shuō màn yì diǎnr.",
      "burmese": "ငါတစ်စိတ်တစ်ပိုင်းတော့နားလည်တယ်၊ မင်းသူ့ကိုနည်းနည်းဖြည်းဖြည်းပြောခိုင်းလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_283",
      "hanzi": "今天的风不大，而且有太阳，非常舒服。",
      "pinyin": "jīn tiān de fēng bú dà, ér qiě yǒu tài yáng, fēi cháng shū fu.",
      "burmese": "ဒီနေ့လေသိပ်မတိုက်ဘူး၊ ပြီးတော့ နေလည်းသာတယ်၊ အရမ်းနေလို့ကောင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_284",
      "hanzi": "是啊，我们买一杯热茶去公园里坐坐吧。",
      "pinyin": "shì a, wǒ men mǎi yì bēi rè chá qù gōng yuán lǐ zuò zuò ba.",
      "burmese": "ဟုတ်တယ်၊ ငါတို့လက်ဖက်ရည်ပူတစ်ခွက်ဝယ်ပြီး ပန်းခြံထဲသွားထိုင်ကြရအောင်။",
      "category": "daily"
    },
    {
      "id": "hsk2_285",
      "hanzi": "这件事情我已经告诉你两遍了，怎么还没记住呢？",
      "pinyin": "zhè jiàn shì qing wǒ yǐ jīng gào su nǐ liǎng biàn le, zěn me hái méi jì zhù ne?",
      "burmese": "ဒီကိစ္စကိုငါမင်းကိုနှစ်ခေါက်တောင်ပြောပြီးပြီ၊ ဘာလို့မှတ်မထားရသေးတာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_286",
      "hanzi": "不好意思，我的头有点疼，脑子不太清楚。",
      "pinyin": "bù hǎo yì si, wǒ de tóu yǒu diǎn téng, nǎo zi bú tài qīng chu.",
      "burmese": "အားနာပါတယ်၊ ငါ့ခေါင်းနည်းနည်းကိုက်နေလို့ ဦးနှောက်သိပ်အလုပ်မလုပ်ဘူးဖြစ်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_287",
      "hanzi": "我把钥匙丢在房间里了，现在进不去了。",
      "pinyin": "wǒ bǎ yào shi diū zài fáng jiān lǐ le, xiàn zài jìn bú qù le.",
      "burmese": "ငါသော့ကိုအခန်းထဲမှာကျန်ခဲ့တယ်၊ အခုဝင်လို့မရတော့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_288",
      "hanzi": "别急，你可以打电话让妈妈回来给你开门。",
      "pinyin": "bié jí, nǐ kě yǐ dǎ diàn huà ràng mā ma huí lái gěi nǐ kāi mén.",
      "burmese": "မလောပါနဲ့၊ မင်းအမေကိုဖုန်းဆက်ပြီး ပြန်လာတံခါးဖွင့်ပေးခိုင်းလို့ရတာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk2_289",
      "hanzi": "你的感冒很重，今天不要去公司了吧？",
      "pinyin": "nǐ de gǎn mào hěn zhòng, jīn tiān bú yào qù gōng sī le ba?",
      "burmese": "မင်းအအေးမိတာအရမ်းဆိုးတယ်၊ ဒီနေ့ရောကုမ္ပဏီကိုမသွားတော့ဘူးမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_290",
      "hanzi": "我也想在家休息，可是我有很多工作要做。",
      "pinyin": "wǒ yě xiǎng zài jiā xiū xi, kě shì wǒ yǒu hěn duō gōng zuò yào zuò.",
      "burmese": "ငါလည်းအိမ်မှာနားချင်တယ်၊ ဒါပေမယ့် ငါ့မှာလုပ်စရာအလုပ်တွေအများကြီးရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_291",
      "hanzi": "这几天的天气越来越好，很暖和你不要穿那么多衣服了。",
      "pinyin": "zhè jǐ tiān de tiān qì yuè lái yuè hǎo, hěn nuǎn huo nǐ bú yào chuān nà me duō yī fu le.",
      "burmese": "ဒီရက်ပိုင်းရာသီဥတုက ပိုပိုကောင်းလာတယ်၊ အရမ်းနွေးတယ်၊ မင်းအင်္ကျီအများကြီးမဝတ်နဲ့တော့။",
      "category": "daily"
    },
    {
      "id": "hsk2_292",
      "hanzi": "但是早上的时候还是很冷，我怕我会感冒。",
      "pinyin": "dàn shì zǎo shang de shí hou hái shì hěn lěng, wǒ pà wǒ huì gǎn mào.",
      "burmese": "ဒါပေမယ့် မနက်ပိုင်းကတော့အေးနေတုန်းပဲ၊ ငါအအေးမိမှာကြောက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_293",
      "hanzi": "你认识照片上的这个人吗？她长得跟你很像。",
      "pinyin": "nǐ rèn shi zhào piàn shang de zhè ge rén ma? tā zhǎng de gēn nǐ hěn xiàng.",
      "burmese": "ဓာတ်ပုံထဲကဒီလူကိုမင်းသိလား? သူမရုပ်ကမင်းနဲ့အရမ်းတူတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_294",
      "hanzi": "她是我妈妈，这是她三十岁时候拍的照片。",
      "pinyin": "tā shì wǒ mā ma, zhè shì tā sān shí suì shí hou pāi de zhào piàn.",
      "burmese": "သူမကငါ့အမေပါ၊ ဒါကသူမအသက် ၃၀ တုန်းကရိုက်ထားတဲ့ဓာတ်ပုံပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_295",
      "hanzi": "你觉得这家店的衣服贵不贵？我想买两条裤子。",
      "pinyin": "nǐ jué de zhè jiā diàn de yī fu guì bú guì? wǒ xiǎng mǎi liǎng tiáo kù zi.",
      "burmese": "ဒီဆိုင်ကအင်္ကျီတွေစျေးကြီးတယ်လို့မင်းထင်လား? ငါဘောင်းဘီနှစ်ထည်လောက်ဝယ်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_296",
      "hanzi": "虽然不便宜，但是质量很好，颜色也很漂亮。",
      "pinyin": "suī rán bù pián yi, dàn shì zhì liàng hěn hǎo, yán sè yě hěn piào liang.",
      "burmese": "စျေးမပေါပေမယ့်၊ အရည်အသွေးအရမ်းကောင်းတယ်၊ အရောင်ကလည်းအရမ်းလှတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_297",
      "hanzi": "你在想什么呢？我说了几句话你都没有听到。",
      "pinyin": "nǐ zài xiǎng shén me ne? wǒ shuō le jǐ jù huà nǐ dōu méi yǒu tīng dào.",
      "burmese": "မင်းဘာတွေစဉ်းစားနေတာလဲ? ငါစကားအနည်းငယ်ပြောတာတောင် မင်းမကြားဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_298",
      "hanzi": "我在想明天的考试，如果没考好该怎么办。",
      "pinyin": "wǒ zài xiǎng míng tiān de kǎo shì, rú guǒ méi kǎo hǎo gāi zěn me bàn.",
      "burmese": "ငါမနက်ဖြန်စာမေးပွဲအကြောင်းစဉ်းစားနေတာပါ၊ အကယ်၍ကောင်းကောင်းမဖြေနိုင်ခဲ့ရင် ဘယ်လိုလုပ်ရမလဲလို့။",
      "category": "daily"
    },
    {
      "id": "hsk2_299",
      "hanzi": "这个苹果又红又大，一定很甜。",
      "pinyin": "zhè ge píng guǒ yòu hóng yòu dà, yí dìng hěn tián.",
      "burmese": "ဒီပန်းသီးက နီလည်းနီတယ် ကြီးလည်းကြီးတယ်၊ သေချာပေါက်အရမ်းချိုမှာ။",
      "category": "daily"
    },
    {
      "id": "hsk2_300",
      "hanzi": "那我已经洗过了，你快点吃吃看是不是真的很甜吧！",
      "pinyin": "nà wǒ yǐ jīng xǐ guò le, nǐ kuài diǎn chī chī kàn shì不 shì zhēn de hěn tián ba!",
      "burmese": "အဲ့ဒါငါဆေးပြီးသွားပြီ၊ မြန်မြန်စားကြည့်လိုက်ပါ၊ တကယ်ချိုလား မချိုဘူးလားဆိုတာ!",
      "category": "daily"
    },
    {
      "id": "hsk2_301",
      "hanzi": "我今天太累了，不想做饭，我们去外面的饭馆吃晚饭好不好？",
      "pinyin": "wǒ jīn tiān tài lèi le, bù xiǎng zuò fàn, wǒ men qù wài miàn de fàn guǎn chī wǎn fàn hǎo bù hǎo?",
      "burmese": "ဒီနေ့ငါအရမ်းပင်ပန်းနေလို့ ထမင်းမချက်ချင်ဘူး၊ ငါတို့အပြင်ကစားသောက်ဆိုင်မှာ ညစာသွားစားကြမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_302",
      "hanzi": "没问题，你想吃什么？是中国菜还是去吃面条？",
      "pinyin": "méi wèn tí, nǐ xiǎng chī shén me? shì Zhōng guó cài hái shì qù chī miàn tiáo?",
      "burmese": "ပြဿနာမရှိပါဘူး၊ မင်းဘာစားချင်လဲ? တရုတ်ဟင်းလား ဒါမှမဟုတ် ခေါက်ဆွဲသွားစားမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_303",
      "hanzi": "我觉得这家商店的衣服虽然很漂亮，但是价格有点儿太贵了。",
      "pinyin": "wǒ jué de zhè jiā shāng diàn de yī fu suī rán hěn piào liang, dàn shì jià gé yǒu diǎnr tài guì le.",
      "burmese": "ဒီဆိုင်ကအင်္ကျီတွေက လှပေမယ့် ဈေးနည်းနည်းအရမ်းကြီးတယ်လို့ ငါထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_304",
      "hanzi": "你说的对。旁边还有一家商店，我们去那里看看可能更好。",
      "pinyin": "nǐ shuō de duì. páng biān hái yǒu yī jiā shāng diàn, wǒ men qù nà lǐ kàn kan kě néng gèng hǎo.",
      "burmese": "မင်းပြောတာမှန်တယ်၊ ဘေးမှာနောက်ထပ်ဆိုင်တစ်ဆိုင်ရှိသေးတယ်၊ အဲဒီကိုသွားကြည့်တာ ပိုကောင်းမယ်ထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_305",
      "hanzi": "你知道从这里到火车站怎么走吗？走路远不远？",
      "pinyin": "nǐ zhī dào cóng zhè lǐ dào huǒ chē zhàn zěn me zǒu ma? zǒu lù yuǎn bù yuǎn?",
      "burmese": "ဒီကနေ ရထားဘူတာရုံကို ဘယ်လိုသွားရမလဲသိလား? လမ်းလျှောက်ရင် ဝေးလား မဝေးဘူးလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_306",
      "hanzi": "不太远，你往前直走，然后在第二个路口往左拐就到了。",
      "pinyin": "bù tài yuǎn, nǐ wǎng qián zhí zǒu, rán hòu zài dì èr ge lù kǒu wǎng zuǒ guǎi jiù dào le.",
      "burmese": "သိပ်မဝေးဘူး၊ မင်းရှေ့ကိုတည့်တည့်သွားပြီးရင် ဒုတိယလမ်းဆုံမှာ ဘယ်ဘက်ကွေ့လိုက်ရင်ရောက်ပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk2_307",
      "hanzi": "昨天晚上下了很大的雨，所以今天外面的天气非常冷。",
      "pinyin": "zuó tiān wǎn shang xià le hěn dà de yǔ, suǒ yǐ jīn tiān wài miàn de tiān qì fēi cháng lěng.",
      "burmese": "မနေ့ညက မိုးအရမ်းကြီးလို့ ဒီနေ့အပြင်မှာ ရာသီဥတုအရမ်းအေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_308",
      "hanzi": "是啊，你出门的时候要多穿一点儿衣服，别感冒了。",
      "pinyin": "shì a, nǐ chū mén de shí hou yào duō chuān yì diǎnr yī fu, bié gǎn mào le.",
      "burmese": "ဟုတ်တယ်၊ မင်းအပြင်သွားတဲ့အခါ အင်္ကျီနည်းနည်းပိုဝတ်သွား၊ အအေးမိမခံနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_309",
      "hanzi": "这个星期六是我好朋友的生日，我想送给她一个特别的礼物。",
      "pinyin": "zhè ge xīng qī liù shì wǒ hǎo péng yǒu de shēng rì, wǒ xiǎng sòng gěi tā yí ge tè bié de lǐ wù.",
      "burmese": "ဒီစနေနေ့က ငါ့သူငယ်ချင်းကောင်းရဲ့ မွေးနေ့ဖြစ်လို့၊ သူ့ကိုအထူးလက်ဆောင်တစ်ခုပေးချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_310",
      "hanzi": "她喜欢看书，你可以去书店给她买几本有意思的新书。",
      "pinyin": "tā xǐ huan kàn shū, nǐ kě yǐ qù shū diàn gěi tā mǎi jǐ běn yǒu yì si de xīn shū.",
      "burmese": "သူက စာဖတ်တာဝါသနာပါတယ်၊ မင်းစာအုပ်ဆိုင်သွားပြီး သူ့အတွက် စိတ်ဝင်စားစရာစာအုပ်သစ်အချို့ ဝယ်ပေးနိုင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_311",
      "hanzi": "你觉得学习汉语最难的地方是什么？是汉字还是发音？",
      "pinyin": "nǐ jué de xué xí Hàn yǔ zuì nán de dì fang shì shén me? shì hàn zì hái shì fā yīn?",
      "burmese": "တရုတ်စာလေ့လာတဲ့နေရာမှာ အခက်ဆုံးကဘာလို့ထင်လဲ? တရုတ်စာလုံးလား ဒါမှမဟုတ် အသံထွက်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_312",
      "hanzi": "对我来说，发音其实还可以，但是记住那么多汉字太难了。",
      "pinyin": "duì wǒ lái shuō, fā yīn qí shí hái kě yǐ, dàn shì jì zhù nà me duō Hàn zì tài nán le.",
      "burmese": "ငါ့အတွက်တော့ အသံထွက်ကအဆင်ပြေပါတယ်၊ ဒါပေမယ့် အဲ့ဒီလောက်များတဲ့ တရုတ်စာလုံးတွေကို မှတ်ဖို့က အရမ်းခက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_313",
      "hanzi": "虽然我的工作每天都很忙，但是我晚上还是会抽出时间运动。",
      "pinyin": "suī rán wǒ de gōng zuò měi tiān dōu hěn máng, dàn shì wǒ wǎn shang hái shì huì chōu chū shí jiān yùn dòng.",
      "burmese": "ငါ့အလုပ်က နေ့တိုင်းအရမ်းများပေမယ့်လည်း၊ ငါကညဘက်မှာတော့ အချိန်ပေးပြီးလေ့ကျင့်ခန်းလုပ်ဖြစ်သေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_314",
      "hanzi": "这样对身体很好。健康是最重要的，大家都要多运动。",
      "pinyin": "zhè yàng duì shēn tǐ hěn hǎo. jiàn kāng shì zuì zhòng yào de, dà jiā dōu yào duō yùn dòng.",
      "burmese": "ဒီလိုလုပ်တာကျန်းမာရေးအတွက် အရမ်းကောင်းတယ်၊ ကျန်းမာရေးက အရေးအကြီးဆုံးပဲ၊ အားလုံးလေ့ကျင့်ခန်း ပိုလုပ်သင့်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_315",
      "hanzi": "请问您，坐公共汽车去飞机场大概需要多长时间才能到？",
      "pinyin": "qǐng wèn nín, zuò gōng gòng qì chē qù fēi jī chǎng dà gài xū yào duō cháng shí jiān cái néng dào?",
      "burmese": "ဒါလေးမေးပါရစေ၊ လေဆိပ်ကို ဘတ်စ်ကားနဲ့သွားရင် ရောက်ဖို့အချိန်ဘယ်လောက်လောက် ကြာမလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_316",
      "hanzi": "如果不堵车的话，五十分钟就能到，可是现在是下班时间有点儿慢。",
      "pinyin": "rú guǒ bù dǔ chē de huà, wǔ shí fēn zhōng jiù néng dào, kě shì xiàn zài shì xià bān shí jiān yǒu diǎnr màn.",
      "burmese": "ကားမပိတ်ဘူးဆိုရင် မိနစ် ၅၀ နဲ့ရောက်နိုင်တယ်၊ ဒါပေမယ့် အခုကရုံးဆင်းချိန်ဆိုတော့ နည်းနည်းနှေးနိုင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_317",
      "hanzi": "哥哥买的那个白色的新手机非常好用，他也想给我买一个。",
      "pinyin": "gē ge mǎi de nà ge bái sè de xīn shǒu jī fēi cháng hǎo yòng, tā yě xiǎng gěi wǒ mǎi yí ge.",
      "burmese": "အစ်ကိုဝယ်ခဲ့တဲ့ အဖြူရောင်ဖုန်းအသစ်လေးက သုံးရတာအရမ်းကောင်းတယ်၊ သူကငါ့ကိုလည်း တစ်လုံးဝယ်ပေးချင်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_318",
      "hanzi": "你的哥哥真好！但是手机很贵，你不应该让他花那么多钱。",
      "pinyin": "nǐ de gē ge zhēn hǎo! dàn shì shǒu jī hěn guì, nǐ bù yīng gāi ràng tā huā nà me duō qián.",
      "burmese": "မင်းအစ်ကိုက တကယ်သဘောကောင်းတာပဲ! ဒါပေမယ့် ဖုန်းကဈေးကြီးတယ်၊ မင်းသူ့ကိုပိုက်ဆံအဲ့လောက်အများကြီးပေးမသုံးသင့်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_319",
      "hanzi": "我刚来中国的第一年什么都不会说，连买东西都不方便。",
      "pinyin": "wǒ gāng lái Zhōng guó de dì yī nián shén me dōu bú huì shuō, lián mǎi dōng xi dōu bù fāng biàn.",
      "burmese": "ငါတရုတ်ပြည်ကိုစရောက်တဲ့ ပထမနှစ်တုန်းက ဘာမှမပြောတတ်ခဲ့ဘူး၊ ပစ္စည်းဝယ်တာတောင် အဆင်မပြေခဲ့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_320",
      "hanzi": "现在你的汉语说得流利多了，可以一个人去旅游了吧？",
      "pinyin": "xiàn zài nǐ de Hàn yǔ shuō de liú lì duō le, kě yǐ yí ge rén qù lǚ yóu le ba?",
      "burmese": "အခုတော့ မင်းရဲ့တရုတ်စကားပြောတာ အများကြီးသွက်လာပြီ၊ တစ်ယောက်တည်း ခရီးသွားလို့ရနေပြီမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_321",
      "hanzi": "明天早上八点我们在学校门口见面怎么样？不要迟到了哦。",
      "pinyin": "míng tiān zǎo shang bā diǎn wǒ men zài xué xiào mén kǒu jiàn miàn zěn me yàng? bú yào chí dào le o.",
      "burmese": "မနက်ဖြန်မနက် ရှစ်နာရီ ကျောင်းဂိတ်ဝမှာ ငါတို့တွေ့ကြရင်ဘယ်လိုလဲ? နောက်မကျစေနဲ့နော်။",
      "category": "daily"
    },
    {
      "id": "hsk2_322",
      "hanzi": "好的，我每天早上七点钟就起床吃早饭了，我一定准时到。",
      "pinyin": "hǎo de, wǒ měi tiān zǎo shang qī diǎn zhōng jiù qǐ chuáng chī zǎo fàn le, wǒ yí dìng zhǔn shí dào.",
      "burmese": "ကောင်းပါပြီ၊ ငါကနေ့တိုင်းမနက် ၇ နာရီဆို အိပ်ရာထပြီး မနက်စာစားနေပြီ၊ ငါသေချာပေါက်အချိန်မီရောက်ပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_323",
      "hanzi": "这家医院的医生不仅医术很高，而且对病人也非常热情。",
      "pinyin": "zhè jiā yī yuàn de yī shēng bù jǐn yī shù hěn gāo, ér qiě duì bìng rén yě fēi cháng rè qíng.",
      "burmese": "ဒီဆေးရုံက ဆရာဝန်တွေက ဆေးပညာအရမ်းတော်ရုံတင်မကဘူး၊ လူနာတွေအပေါ်လည်း အရမ်းဖော်ရွေကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_324",
      "hanzi": "那是当然的，这里是全国最好的医院，很多人大早起来排队呢。",
      "pinyin": "nà shì dāng rán de, zhè lǐ shì quán guó zuì hǎo de yī yuàn, hěn duō rén dà zǎo qǐ lái pái duì ne.",
      "burmese": "ဒါကတော့ဖြစ်သင့်တာပဲလေ၊ ဒီနေရာက တစ်နိုင်ငံလုံးမှာ အကောင်းဆုံးဆေးရုံပဲ၊ လူအများကြီးက မနက်စောစောထပြီး တန်းစီကြတာ။",
      "category": "daily"
    },
    {
      "id": "hsk2_325",
      "hanzi": "我对音乐很有兴趣，有时候在家一边听歌一边做家务。",
      "pinyin": "wǒ duì yīn yuè hěn yǒu xìng qù, yǒu shí hou zài jiā yì biān tīng gē yì biān zuò jiā wù.",
      "burmese": "ငါက ဂီတကိုအရမ်းစိတ်ဝင်စားတယ်၊ တစ်ခါတလေ အိမ်မှာ သီချင်းနားထောင်ရင်း အိမ်မှုကိစ္စတွေလုပ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_326",
      "hanzi": "这样感觉很放松。你会弹钢琴或者唱歌吗？",
      "pinyin": "zhè yàng gǎn jué hěn fàng sōng. nǐ huì tán gāng qín huò zhě chàng gē ma?",
      "burmese": "ဒီလိုဆိုတော့ စိတ်လက်ပေါ့ပါးသွားတယ်နော်။ မင်းစန္ဒရားတီးတတ်လား ဒါမှမဟုတ် သီချင်းဆိုတတ်လား?",
      "category": "daily"
    },
    {
      "id": "hsk2_327",
      "hanzi": "听说张老师下个月就要去其他城市上课了，你认识他吗？",
      "pinyin": "tīng shuō Zhāng lǎo shī xià ge yuè jiù yào qù qí tā chéng shì shàng kè le, nǐ rèn shi tā ma?",
      "burmese": "ဆရာကျန်းက နောက်လကျရင် တခြားမြို့ကိုသွားပြီး စာသင်ရတော့မယ်လို့ကြားတယ်၊ မင်းသူ့ကိုသိလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_328",
      "hanzi": "我认识他很久了，他教中国历史教得特别好，真可惜他不在这里了。",
      "pinyin": "wǒ rèn shi tā hěn jiǔ le, tā jiāo Zhōng guó lì shǐ jiāo de tè bié hǎo, zhēn kě xī tā bú zài zhè lǐ le.",
      "burmese": "ငါသူ့ကိုသိတာကြာပြီ၊ သူကတရုတ်သမိုင်းကို အရမ်းကောင်းကောင်းသင်ပြနိုင်တယ်၊ သူဒီမှာမရှိတော့ဘူးဆိုတော့ တကယ်နှမြောစရာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk2_329",
      "hanzi": "你为什么每次出门都要带一把雨伞？今天明明是晴天。",
      "pinyin": "nǐ wèi shén me měi cì chū mén dōu yào dài yì bǎ yǔ sǎn? jīn tiān míng míng shì qíng tiān.",
      "burmese": "ဘာလို့မင်းအပြင်ထွက်တိုင်း ထီးတစ်ချောင်းအမြဲယူသွားရတာလဲ? ဒီနေ့က သေချာပေါက်သာယာတဲ့နေ့ဖြစ်နေတာကို။",
      "category": "daily"
    },
    {
      "id": "hsk2_330",
      "hanzi": "因为最近天气变化很大，刚才还有太阳，现在可能马上就要下雨了。",
      "pinyin": "yīn wèi zuì jìn tiān qì biàn huà hěn dà, gāng cái hái yǒu tài yáng, xiàn zài kě néng mǎ shàng jiù yào xià yǔ le.",
      "burmese": "ဘာလို့လဲဆိုတော့ မကြာသေးခင်က ရာသီဥတုအပြောင်းအလဲအရမ်းမြန်နေလို့၊ စောစောကနေသာနေပေမယ့် အခုချက်ချင်းမိုးရွာလာနိုင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_331",
      "hanzi": "我哥哥在准备找一个新的工作，他每天晚上都在客厅准备面试。",
      "pinyin": "wǒ gē ge zài zhǔn bèi zhǎo yí ge xīn de gōng zuò, tā měi tiān wǎn shang dōu zài kè tīng zhǔn bèi miàn shì.",
      "burmese": "ငါ့အစ်ကိုက အလုပ်သစ်တစ်ခုရှာဖို့ ပြင်ဆင်နေတယ်၊ သူက ညတိုင်းဧည့်ခန်းထဲမှာ အင်တာဗျူးအတွက် ပြင်ဆင်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_332",
      "hanzi": "那祝他好运了！他想去大公司还是小公司上班？",
      "pinyin": "nà zhù tā hǎo yùn le! tā xiǎng qù dà gōng sī hái shì xiǎo gōng sī shàng bān?",
      "burmese": "ဒါဆိုရင် သူ့ကိုကံကောင်းပါစေလို့ဆုတောင်းပေးပါတယ်! သူက ကုမ္ပဏီကြီးမှာ အလုပ်သွားလုပ်ချင်တာလား ဒါမှမဟုတ် ကုမ္ပဏီသေးလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_333",
      "hanzi": "昨天晚上的电影你看懂了吗？故事说得太快了，我没看懂。",
      "pinyin": "zuó tiān wǎn shang de diàn yǐng nǐ kàn dǒng le ma? gù shì shuō de tài kuài le, wǒ méi kàn dǒng.",
      "burmese": "မနေ့ညကရုပ်ရှင်ကို မင်းကြည့်လို့နားလည်လိုက်လား? ဇာတ်လမ်းပြောပြတာ အရမ်းမြန်လို့ ငါနားမလည်လိုက်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_334",
      "hanzi": "我也觉得有点难懂，但是那些男演员和女演员真的演得很棒。",
      "pinyin": "wǒ yě jué de yǒu diǎnr nán dǒng, dàn shì nà xiē nán yǎn yuán hé nǚ yǎn yuán zhēn de yǎn de hěn bàng.",
      "burmese": "ငါလည်း နားလည်ဖို့နည်းနည်းခက်တယ်လို့ထင်တယ်၊ ဒါပေမယ့် အဲ့ဒီမင်းသားတွေနဲ့ မင်းသမီးတွေက တကယ်သရုပ်ဆောင်တာအရမ်းတော်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_335",
      "hanzi": "我们去超市买点儿水果好不好？家里的苹果和西瓜都已经吃完了。",
      "pinyin": "wǒ men qù chāo shì mǎi diǎnr shuǐ guǒ hǎo bù hǎo? jiā lǐ de píng guǒ hé xī guā dōu yǐ jīng chī wán le.",
      "burmese": "ငါတို့စူပါမားကတ်သွားပြီး သစ်သီးနည်းနည်းသွားဝယ်ကြမလား? အိမ်ကပန်းသီးနဲ့ ဖရဲသီးတွေအကုန် စားလို့ကုန်သွားပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk2_336",
      "hanzi": "好的，不过今天不用去超市，前面的市场里卖的水果更新鲜也更便宜。",
      "pinyin": "hǎo de, bú guò jīn tiān bú yòng qù chāo shì, qián miàn de shì chǎng lǐ mài de shuǐ guǒ gèng xīn xiān yě gèng pián yi.",
      "burmese": "ကောင်းပြီလေ၊ ဒါပေမယ့် ဒီနေ့စူပါမားကတ်သွားစရာမလိုပါဘူး၊ ရှေ့ကဈေးထဲမှာရောင်းတဲ့ သစ်သီးတွေက ပိုလတ်ဆတ်ပြီး ပိုဈေးသက်သာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_337",
      "hanzi": "我爸爸每天下班回家以后，都要休息两三个小时再吃饭。",
      "pinyin": "wǒ bà ba měi tiān xià bān huí jiā yǐ hòu, dōu yào xiū xi liǎng sān ge xiǎo shí zài chī fàn.",
      "burmese": "ငါ့အဖေက နေ့တိုင်းရုံးဆင်းပြီးအိမ်ပြန်ရောက်ပြီးနောက်၊ နှစ်နာရီသုံးနာရီလောက်အနားယူပြီးမှ ထမင်းစားလေ့ရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_338",
      "hanzi": "因为他的工作太累了吧，老人家多休息也是很有好处的。",
      "pinyin": "yīn wèi tā de gōng zuò tài lèi le ba, lǎo rén jiā duō xiū xi yě shì hěn yǒu hǎo chù de.",
      "burmese": "ဘာလို့လဲဆိုတော့ သူအလုပ်အရမ်းပင်ပန်းလို့နေမှာပါ၊ လူကြီးတွေအနားပိုယူတာကလည်း အရမ်းအကျိုးရှိပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_339",
      "hanzi": "你能等我十分钟吗？我还有一点儿事情没做完，马上就好。",
      "pinyin": "nǐ néng děng wǒ shí fēn zhōng ma? wǒ hái yǒu yì diǎnr shì qing méi zuò wán, mǎ shàng jiù hǎo.",
      "burmese": "ငါ့ကို ၁၀ မိနစ်လောက်စောင့်ပေးနိုင်မလား? ငါလုပ်စရာကိစ္စလေးနည်းနည်းမပြီးသေးလို့၊ ချက်ချင်းပြီးပါတော့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_340",
      "hanzi": "没关系，你慢一点儿没关系。我可以在旁边的咖啡店喝着茶等你完成工作。",
      "pinyin": "méi guān xi, nǐ màn yì diǎnr méi guān xi. wǒ kě yǐ zài páng biān de kā fēi diàn hē zhe chá děng nǐ wán chéng gōng zuò.",
      "burmese": "ရပါတယ်၊ မင်းဖြည်းဖြည်းလုပ်ယုံနဲ့ရပါတယ်။ ငါကဘေးက ကော်ဖီဆိုင်မှာ လက်ဖက်ရည်သောက်ရင်း မင်းအလုပ်ပြီးတာကိုစောင့်နေလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_341",
      "hanzi": "你认识照片里的左边那位穿红裙子的女士吗？她是谁？",
      "pinyin": "nǐ rèn shi zhào piàn lǐ de zuǒ biān nà wèi chuān hóng qún zi de nǚ shì ma? tā shì shuí?",
      "burmese": "ဓာတ်ပုံထဲက ဘယ်ဘက်ကအနီရောင်စကတ်ဝတ်ထားတဲ့ အမျိုးသမီးကို မင်းသိလား? သူကဘယ်သူလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_342",
      "hanzi": "她不就是我的妹妹吗？这张照片应该是前几年我们在海边玩的照片了。",
      "pinyin": "tā bú jiù shì wǒ de mèi mei ma? zhè zhāng zhào piàn yīng gāi shì qián jǐ nián wǒ men zài hǎi biān wán de zhào piàn le.",
      "burmese": "သူကငါ့ညီမလေ? ဒီဓာတ်ပုံက လွန်ခဲ့တဲ့နှစ်အနည်းငယ်က ငါတို့ကမ်းခြေမှာဆော့တဲ့ ဓာတ်ပုံဖြစ်ရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_343",
      "hanzi": "听说北京的冬天经常下雪，而且白天的气温也在零度以下。",
      "pinyin": "tīng shuō Běi jīng de dōng tiān jīng cháng xià xuě, ér qiě bái tiān de qì wēn yě zài líng dù yǐ xià.",
      "burmese": "ပေကျင်းရဲ့ဆောင်းရာသီမှာ နှင်းခဏခဏကျတတ်ပြီး၊ နေ့ဘက်အပူချိန်ကလည်း သုညဒီဂရီအောက်မှာပဲလို့ သိရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_344",
      "hanzi": "是的，虽然房间里非常暖和，可是如果你想去外面散步，还是会觉得冷得受不了。",
      "pinyin": "shì de, suī rán fáng jiān lǐ fēi cháng nuǎn huo, kě shì rú guǒ nǐ xiǎng qù wài miàn sàn bù, hái shì huì jué de lěng de shòu bù liǎo.",
      "burmese": "ဟုတ်တယ်၊ အခန်းထဲမှာအရမ်းနွေးပေမယ့် မင်းအပြင်သွားပြီးလမ်းလျှောက်ချင်ရင်တော့ သည်းမခံနိုင်အောင်ကို အေးတယ်လို့ခံစားရလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_345",
      "hanzi": "那件事你做得很认真，老师和同学们都在夸你写得清楚。",
      "pinyin": "nà jiàn shì nǐ zuò de hěn rèn zhēn, lǎo shī hé tóng xué men dōu zài kuā nǐ xiě de qīng chu.",
      "burmese": "အဲ့ဒီကိစ္စကို မင်းအရမ်းသေသေချာချာလုပ်ခဲ့လို့၊ ဆရာနဲ့ ကျောင်းသားတွေအကုန်လုံးက မင်းရေးတာရှင်းလင်းတယ်ဆိုပြီး ချီးကျူးနေကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_346",
      "hanzi": "谢谢你们的帮助，如果没有大家告诉我经验，我也不能完成得这么快。",
      "pinyin": "xiè xie nǐ men de bāng zhù, rú guǒ méi yǒu dà jiā gào su wǒ jīng yàn, wǒ yě bù néng wán chéng de zhè me kuài.",
      "burmese": "မင်းတို့ရဲ့အကူအညီတွေကို ကျေးဇူးတင်ပါတယ်၊ တကယ်လို့ အားလုံးကငါ့ကိုအတွေ့အကြုံတွေမပြောပြခဲ့ရင်၊ ငါလည်းဒီလောက်မြန်မြန်ပြီးမြောက်နိုင်မှာ မဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_347",
      "hanzi": "请问您，要从这儿走到前面的大公园，应该怎么选择路向呢？",
      "pinyin": "qǐng wèn nín, yào cóng zhèr zǒu dào qián miàn de dà gōng yuán, yīng gāi zěn me xuǎn zé lù xiàng ne?",
      "burmese": "ဒါလေးမေးပါရစေရှင့်၊ ဒီကနေရှေ့က ပန်းခြံကြီးဆီလမ်းလျှောက်သွားဖို့ ဘယ်လမ်းကြောင်းကို ရွေးချယ်သင့်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_348",
      "hanzi": "您可以一直沿着这条街走，走到红绿灯路口向右拐，就能看到了公园门了。",
      "pinyin": "nín kě yǐ yì zhí yán zhe zhè tiáo jiē zǒu, zǒu dào hóng lǜ dēng lù kǒu xiàng yòu guǎi, jiù néng kàn dào le gōng yuán mén le.",
      "burmese": "သင်က ဒီလမ်းအတိုင်းတောက်လျှောက်သွားပါ၊ မီးပွိုင့်လမ်းဆုံရောက်ရင် ညာဘက်ကွေ့လိုက်ရင်၊ ပန်းခြံတံခါးကို မြင်ရပါလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_349",
      "hanzi": "你刚才有没有接电话？好像你的手机响了好几次，怎么没接？",
      "pinyin": "nǐ gāng cái yǒu méi yǒu jiē diàn huà? hǎo xiàng nǐ de shǒu jī xiǎng le hǎo jǐ cì, zěn me méi jiē?",
      "burmese": "စောစောက မင်းဖုန်းကိုင်လိုက်လား? မင်းဖုန်းမြည်သွားတာ ခဏခဏပဲ၊ ဘာလို့မကိုင်တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_350",
      "hanzi": "抱歉，在刚刚开会的时候，我要把声音关掉，根本没听见它响。",
      "pinyin": "bào qiàn, zài gāng gāng kāi huì de shí hou, wǒ yào bǎ shēng yīn guān diào, gēn běn méi tīng jiàn tā xiǎng.",
      "burmese": "တောင်းပန်ပါတယ်၊ စောစောက အစည်းအဝေးလုပ်နေတုန်းက ငါအသံပိတ်ထားလိုက်ရလို့၊ သူမြည်တာကို လုံးဝမကြားလိုက်ရဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_351",
      "hanzi": "我们每个周末都会去那家离这儿不太远的电影院看新出的电影。",
      "pinyin": "wǒ men měi ge zhòu mò dōu huì qù nà jiā lí zhèr bú tài yuǎn de diàn yǐng yuàn kàn xīn chū de diàn yǐng.",
      "burmese": "ငါတို့စနေတနင်္ဂနွေတိုင်း ဒီနားနဲ့သိပ်မဝေးတဲ့ ရုပ်ရှင်ရုံကိုသွားပြီး အသစ်ထွက်တဲ့ရုပ်ရှင်တွေ ကြည့်လေ့ရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_352",
      "hanzi": "我觉得那个电影院的买票虽然快，可是里边让人不太舒服。",
      "pinyin": "wǒ jué de nà ge diàn yǐng yuàn de mǎi piào suī rán kuài, kě shì lǐ biān ràng rén bú tài shū fu.",
      "burmese": "အဲ့ဒီရုပ်ရှင်ရုံက လက်မှတ်ဝယ်တာမြန်ပေမယ့်၊ အထဲမှာတော့ လူကိုသိပ်သက်တောင့်သက်သာမဖြစ်စေဘူးလို့ ငါထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_353",
      "hanzi": "请问您可以帮我看一下，我的这块新手表是不是慢了十分钟？",
      "pinyin": "qǐng wèn nín kě yǐ bāng wǒ kàn yí xià, wǒ de zhè kuài xīn shǒu biǎo shì bu shì màn le shí fēn zhōng?",
      "burmese": "ဒါလေးမေးပါရစေ ငယ့်ကိုကူကြည့်ပေးလို့ရမလား၊ ငါ့ရဲ့ဒီလက်ပတ်နာရီအသစ်လေးက ၁၀ မိနစ်လောက်နှေးနေသလားလို့?",
      "category": "daily"
    },
    {
      "id": "hsk2_354",
      "hanzi": "对不起女士，我身上没带手机和手表，我也不知道现在的准确时间。",
      "pinyin": "duì bù qǐ nǚ shì, wǒ shēn shang méi dài shǒu jī hé shǒu biǎo, wǒ yě bù zhī dào xiàn zài de zhǔn què shí jiān.",
      "burmese": "တောင်းပန်ပါတယ်အမျိုးသမီး၊ ကျွန်တော့်မှာ ဖုန်းရော နာရီရောမပါလာလို့၊ အခုအချိန်အတိအကျကို ကျွန်တော်လည်းမသိပါဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_355",
      "hanzi": "昨天晚上的英语考试比前几次难多了，有些题我真的没看懂。",
      "pinyin": "zuó tiān wǎn shang de Yīng yǔ kǎo shì bǐ qián jǐ cì nán duō le, yǒu xiē tí wǒ zhēn de méi kàn dǒng.",
      "burmese": "မနေ့ညက အင်္ဂလိပ်စာစာမေးပွဲက အရင်တစ်ခေါက်တွေထက် အများကြီးပိုခက်တယ်၊ တချို့မေးခွန်းတွေကို ငါတကယ်နားမလည်ခဲ့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_356",
      "hanzi": "只要是你每天努力复习过，就算没考好也不要太难过了。",
      "pinyin": "zhǐ yào shì nǐ měi tiān nǔ lì fù xí guò, jiù suàn méi kǎo hǎo yě bú yào tài nán guò le.",
      "burmese": "မင်းနေ့တိုင်းကြိုးစားပြီး ပြန်လည်လေ့လာခဲ့သရွေ့တော့၊ စာမေးပွဲကောင်းကောင်းမဖြေနိုင်ခဲ့ရင်တောင် အရမ်းဝမ်းမနည်းပါနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_357",
      "hanzi": "你觉得这件衣服的颜色和这双黑色的鞋放在一起好看不好看？",
      "pinyin": "nǐ jué de zhè jiàn yī fu de yán sè hé zhè shuāng hēi sè de xié fàng zài yì qǐ hǎo kàn bù hǎo kàn?",
      "burmese": "ဒီအင်္ကျီအရောင်နဲ့ ဒီအနက်ရောင်ဖိနပ်တစ်ရန်ကို တွဲဝတ်ရင် လှလား မလှဘူးလားလို့ မင်းထင်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_358",
      "hanzi": "非常好看，而且这件衣服也很便宜，你现在就可以买下来去试试。",
      "pinyin": "fēi cháng hǎo kàn, ér qiě zhè jiàn yī fu yě hěn pián yi, nǐ xiàn zài jiù kě yǐ mǎi xià lái qù shì shi.",
      "burmese": "အရမ်းလှတယ်၊ ပြီးတော့ ဒီအင်္ကျီကလည်း အရမ်းဈေးသက်သာတယ်၊ မင်းအခုပဲဝယ်လိုက်ပြီး သွားဝတ်ကြည့်လိုက်လို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_359",
      "hanzi": "我觉得我的身体有点儿不舒服，明天我想跟经理说要在里休息一天。",
      "pinyin": "wǒ jué de wǒ de shēn tǐ yǒu diǎnr bù shū fu, míng tiān wǒ xiǎng gēn jīng lǐ shuō yào zài lǐ xiū xi yì tiān.",
      "burmese": "ငါနေလို့သိပ်မကောင်းဘူးလို့ ထင်တယ်၊ မနက်ဖြန် မန်နေဂျာကိုပြောပြီး အထဲမှာ(အိမ်မှာ) တစ်ရက်နားချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_360",
      "hanzi": "好啊，如果你需要去医院看医生，我可以早一点儿过来带你去。",
      "pinyin": "hǎo a, rú guǒ nǐ xū yào qù yī yuàn kàn yī shēng, wǒ kě yǐ zǎo yì diǎnr guò lái dài nǐ qù.",
      "burmese": "ကောင်းပါပြီ၊ တကယ်လို့ ဆေးရုံမှာ ဆရာဝန်သွားပြဖို့လိုရင်၊ ငါနည်းနည်းစောစောလာပြီး မင်းကိုခေါ်သွားပေးလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_361",
      "hanzi": "虽然外面的阳光非常好，但是因为风太大了，感觉还是有点儿冷。",
      "pinyin": "suī rán wài miàn de yáng guāng fēi cháng hǎo, dàn shì yīn wèi fēng tài dà le, gǎn jué hái shì yǒu diǎnr lěng.",
      "burmese": "အပြင်မှာ နေရောင်အရမ်းကောင်းပေမယ့်၊ လေအရမ်းတိုက်နေလို့ နည်းနည်းအေးတယ်လို့ ခံစားရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_362",
      "hanzi": "对，昨天电视上的天气节目里也说，今天大家出门要多穿点儿衣服。",
      "pinyin": "duì, zuó tiān diàn shì shang de tiān qì jié mù lǐ yě shuō, jīn tiān dà jiā chū mén yào duō chuān diǎnr yī fu.",
      "burmese": "ဟုတ်တယ်၊ မနေ့က တီဗွီက ရာသီဥတုအစီအစဉ်မှာလည်း ပြောတယ်၊ ဒီနေ့အပြင်ထွက်ရင် အားလုံးအင်္ကျီနည်းနည်းပိုဝတ်ကြဖို့။",
      "category": "daily"
    },
    {
      "id": "hsk2_363",
      "hanzi": "我听朋友说，从他家到那家新开的咖啡馆走路只要不到十分钟。",
      "pinyin": "wǒ tīng péng yǒu shuō, cóng tā jiā dào nà jiā xīn kāi de kā fēi guǎn zǒu lù zhǐ yào bú dào shí fēn zhōng.",
      "burmese": "ငါသူငယ်ချင်းပြောတာကြားတာက၊ သူ့အိမ်ကနေ အဲ့ဒီအသစ်ဖွင့်တဲ့ ကော်ဖီဆိုင်ကို လမ်းလျှောက်တာ ၁၀ မိနစ်တောင်မကြာဘူးဆိုပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk2_364",
      "hanzi": "真的吗？听起来很不错，我下次去见他的时候也想去那儿看看。",
      "pinyin": "zhēn de ma? tīng qǐ lái hěn bú cuò, wǒ xià cì qù jiàn tā de shí hou yě xiǎng qù nàr kàn kan.",
      "burmese": "တကယ်လား? ကြားရတာ တော်တော်ကောင်းတယ်၊ နောက်တစ်ခေါက် ငါသူ့ကိုသွားတွေ့ရင် အဲ့ဒီကိုလည်း သွားကြည့်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_365",
      "hanzi": "你在这个公司工作了几年？对这儿的同事们还算是很熟悉了吧？",
      "pinyin": "nǐ zài zhè ge gōng sī gōng zuò le jǐ nián? duì zhèr de tóng shì men hái suàn shì hěn shú xi le ba?",
      "burmese": "ဒီကုမ္ပဏီမှာ မင်းအလုပ်လုပ်တာ ဘယ်နှစ်နှစ်ရှိပြီလဲ? ဒီကလုပ်ဖော်ကိုင်ဖက်တွေနဲ့တော့ အတော်ရင်းနှီးနေလောက်ပြီမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_366",
      "hanzi": "我来这儿已经快五年了，大家都对我很好，总是热情地帮助我做事情。",
      "pinyin": "wǒ lái zhèr yǐ jīng kuài wǔ nián le, dà jiā dōu duì wǒ hěn hǎo, zǒng shì rè qíng de bāng zhù wǒ zuò shì qing.",
      "burmese": "ငါဒီကိုရောက်နေတာ ငါးနှစ်နီးပါးရှိပြီ၊ အားလုံးက ငါ့အပေါ်အရမ်းကောင်းကြတယ်၊ ငါကိစ္စတွေလုပ်ဖို့ အမြဲလိုလိုဖော်ဖော်ရွေရွေနဲ့ ကူညီပေးကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_367",
      "hanzi": "你这次考试准备得那么好，一定是因为每天都在认真学习。",
      "pinyin": "nǐ zhè cì kǎo shì zhǔn bèi de nà me hǎo, yí dìng shì yīn wèi měi tiān dōu zài rèn zhēn xué xí.",
      "burmese": "ဒီတစ်ခေါက် စာမေးပွဲအတွက် မင်းအရမ်းကောင်းကောင်းပြင်ဆင်ထားတယ်၊ နေ့တိုင်းသေသေချာချာ စာလေ့လာနေလို့ဖြစ်မှာသေချာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_368",
      "hanzi": "这没什么好奇怪的，想取得好成绩，就得多听多说，多花时间去看书。",
      "pinyin": "zhè méi shén me hǎo qí guài de, xiǎng qǔ dé hǎo chéng jì, jiù děi duō tīng duō shuō, duō huā shí jiān qù kàn shū.",
      "burmese": "ဒါက ဘာမှထူးဆန်းတာမဟုတ်ပါဘူး၊ ရလဒ်ကောင်းချင်ရင် အများကြီးနားထောင်ပြီး အများကြီးပြောရမယ်၊ စာဖတ်ဖို့ အချိန်ပိုပေးရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_369",
      "hanzi": "你上次借给我的那本书我非常喜欢看，但是还没看完可能要晚点儿还给你。",
      "pinyin": "nǐ shàng cì jiè gěi wǒ de nà běn shū wǒ fēi cháng xǐ huan kàn, dàn shì hái méi kàn wán kě néng yào wǎn diǎnr huán gěi nǐ.",
      "burmese": "ပြီးခဲ့တဲ့အကြိမ်က မင်းငှားပေးခဲ့တဲ့စာအုပ်ကို ငါဖတ်ရတာအရမ်းသဘောကျတယ်၊ ဒါပေမယ့် မဖတ်ရသေးလို့ မင်းကိုနည်းနည်းနောက်ကျမှ ပြန်ပေးဖြစ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_370",
      "hanzi": "没关系不用客气，我不急着要它，你可以慢慢看，看完了再还就可以。",
      "pinyin": "méi guān xi bú yòng kè qi, wǒ bù jí zhe yào tā, nǐ kě yǐ màn man kàn, kàn wán le zài huán jiù kě yǐ.",
      "burmese": "ရပါတယ် အားနာစရာမလိုပါဘူး၊ ငါက လောလောဆယ်မလိုသေးပါဘူး၊ မင်းဖြည်းဖြည်းချင်းဖတ်လို့ရပါတယ်၊ ဖတ်ပြီးမှပြန်ပေးလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_371",
      "hanzi": "我家离前面那个火车站有点儿远，每天早上跑过去都会觉得很累。",
      "pinyin": "wǒ jiā lí qián miàn nà ge huǒ chē zhàn yǒu diǎnr yuǎn, měi tiān zǎo shang pǎo guò qù dōu huì jué de hěn lèi.",
      "burmese": "ငါ့အိမ်က ရှေ့ကရထားဘူတာရုံနဲ့ နည်းနည်းဝေးတယ်၊ နေ့တိုင်းမနက် ပြေးသွားရတာ အရမ်းပင်ပန်းတယ်လို့ ခံစားရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_372",
      "hanzi": "那你为什么不骑一辆自行车过去呢？或者等几分钟去坐公共汽车？",
      "pinyin": "nà nǐ wèi shén me bù qí yí liàng zì xíng chē guò qù ne? huò zhě děng jǐ fēn zhōng qù zuò gōng gòng qì chē?",
      "burmese": "ဒါဆို မင်းဘာလို့ စက်ဘီးတစ်စီးစီးပြီးမသွားတာလဲ? ဒါမှမဟုတ် မိနစ်အနည်းငယ်စောင့်ပြီး ဘတ်စ်ကားစီးသွားလေ?",
      "category": "daily"
    },
    {
      "id": "hsk2_373",
      "hanzi": "你的中国菜做得真好吃，如果我现在学的话很快就能学会吗？",
      "pinyin": "nǐ de Zhōng guó cài zuò de zhēn hǎo chī, rú guǒ wǒ xiàn zài xué de huà hěn kuài jiù néng xué huì ma?",
      "burmese": "မင်းချက်တဲ့ တရုတ်ဟင်းက တကယ်စားကောင်းတယ်၊ တကယ်လို့ ငါအခုသင်မယ်ဆိုရင် မြန်မြန်တတ်နိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_374",
      "hanzi": "其实这很简单的事，只要你多练习几次，以后肯定会比我做得更好。",
      "pinyin": "qí shí zhè hěn jiǎn dān de shì, zhǐ yào nǐ duō liàn xí jǐ cì, yǐ hòu kěn dìng huì bǐ wǒ zuò de gèng hǎo.",
      "burmese": "တကယ်တော့ ဒါကအရမ်းရိုးရှင်းတဲ့ကိစ္စပါ၊ မင်းအကြိမ်ရေများများလေ့ကျင့်နေသရွေ့တော့၊ နောက်ဆိုငါ့ထက်တောင် ပိုကောင်းအောင် ချက်လာနိုင်မှာသေချာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_375",
      "hanzi": "明天的考试你要准备好你的各种东西，因为可能考试的时间非常长。",
      "pinyin": "míng tiān de kǎo shì nǐ yào zhǔn bèi hǎo nǐ de gè zhǒng dōng xi, yīn wèi kě néng kǎo shì de shí jiān fēi cháng cháng.",
      "burmese": "မနက်ဖြန်စာမေးပွဲအတွက် မင်းပစ္စည်းမျိုးစုံကို အဆင်သင့်ပြင်ထားရမယ်၊ ဘာလို့လဲဆိုတော့ စာမေးပွဲအချိန်က အရမ်းရှည်နိုင်လို့ပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk2_376",
      "hanzi": "好的，我已经准备好几支黑色的笔和一块新手表来看着时间，别担心。",
      "pinyin": "hǎo de, wǒ yǐ jīng zhǔn bèi hǎo jǐ zhī hēi sè de bǐ hé yí kuài xīn shǒu biǎo lái kàn zhe shí jiān, bié dān xīn.",
      "burmese": "ကောင်းပါပြီ၊ ငါအနက်ရောင်ဖောင်တိန်အချို့ရယ် အချိန်ကြည့်ဖို့ လက်ပတ်နာရီအသစ်တစ်လုံး ပြင်ဆင်ထားပြီးပါပြီ၊ စိတ်မပူပါနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk2_377",
      "hanzi": "这里的羊肉为什么变得这么贵？一千块钱才给了我三斤，真是太贵了吧。",
      "pinyin": "zhè lǐ de yáng ròu wèi shén me biàn de zhè me guì? yì qiān kuài qián cái gěi le wǒ sān jīn, zhēn shì tài guì le ba.",
      "burmese": "ဒီက သိုးသားက ဘာလို့ဒီလောက်ဈေးကြီးသွားတာလဲ? ယွမ်တစ်ထောင်ကိုမှ ငါ့ကိုသုံးကျင်းပဲပေးတယ်၊ တကယ်ကို ဈေးအရမ်းကြီးတာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk2_378",
      "hanzi": "最近的羊肉和牛肉的价格都在增加，所以你想吃便宜的肉可能很难。",
      "pinyin": "zuì jìn de yáng ròu hé niú ròu de jià gé dōu zài zēng jiā, suǒ yǐ nǐ xiǎng chī pián yi de ròu kě néng hěn nán.",
      "burmese": "မကြာသေးခင်က သိုးသားနဲ့ အမဲသားဈေးတွေ အကုန်တက်နေတယ်၊ ဒါကြောင့် မင်းဈေးပေါတဲ့အသားစားချင်ရင်တော့ ခက်လိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_379",
      "hanzi": "你能把黑板上的那几个特别有意思的生词写在你的新本子上吗？",
      "pinyin": "nǐ néng bǎ hēi bǎn shang de nà jǐ ge tè bié yǒu yì si de shēng cí xiě zài nǐ de xīn běn zi shang ma?",
      "burmese": "ကျောက်သင်ပုန်းပေါ်က အရမ်းစိတ်ဝင်စားစရာကောင်းတဲ့ စကားလုံးအသစ်တွေကို မင်းရဲ့ဗလာစာအုပ်အသစ်ပေါ်မှာ ရေးထားနိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_380",
      "hanzi": "这没什么问题，我可以用这支红色的笔写下来，下课后我再借给你看。",
      "pinyin": "zhè méi shén me wèn tí, wǒ kě yǐ yòng zhè zhī hóng sè de bǐ xiě xià lái, xià kè hòu wǒ zài jiè gěi nǐ kàn.",
      "burmese": "ဒါပြဿနာမရှိပါဘူး၊ ငါဒီအနီရောင်ဖောင်တိန်နဲ့ ရေးမှတ်ထားလိုက်လို့ရတယ်၊ အတန်းဆင်းရင် ငါမင်းကိုငှားကြည့်လို့ရပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_381",
      "hanzi": "我的手机刚才可能丢在那个红色的公共汽车上了，现在怎么也找不到。",
      "pinyin": "wǒ de shǒu jī gāng cái kě néng diū zài nà ge hóng sè de gōng gòng qì chē shang le, xiàn zài zěn me yě zhǎo bú dào.",
      "burmese": "ငါ့ဖုန်းလေးခုနက အဲ့ဒီအနီရောင်ဘတ်စ်ကားပေါ်မှာ ပျောက်သွားတာဖြစ်နိုင်တယ်၊ အခုဘယ်လိုမှရှာမတွေ့တော့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_382",
      "hanzi": "别着急别生气，你快拿我的这个白色新手机，打个电话过去问一问吧。",
      "pinyin": "bié zháo jí bié shēng qì, nǐ kuài ná wǒ de zhè ge bái sè xīn shǒu jī, dǎ ge diàn huà guò qù wèn yì wèn ba.",
      "burmese": "မလောပါနဲ့ စိတ်မတိုပါနဲ့၊ မင်းငါ့ရဲ့ဒီအဖြူရောင်ဖုန်းအသစ်လေးမြန်မြန်ယူပြီး، အဲ့ဒီကိုဖုန်းတစ်ချက်ဆက်မေးကြည့်လိုက်လေ။",
      "category": "daily"
    },
    {
      "id": "hsk2_383",
      "hanzi": "听说王老师今天下午在教室里要和学生说一件非常重要的事情，你去吗？",
      "pinyin": "tīng shuō Wáng lǎo shī jīn tiān xià wǔ zài jiào shì lǐ yào hé xué shēng shuō yí jiàn fēi cháng zhòng yào de shì qing, nǐ qù ma?",
      "burmese": "ဆရာဝမ်က ဒီနေ့မွန်းလွဲပိုင်း စာသင်ခန်းထဲမှာ ကျောင်းသားတွေကို အရမ်းအရေးကြီးတဲ့ကိစ္စတစ်ခုပြောစရာရှိတယ်လို့ကြားတယ်၊ မင်းသွားမလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_384",
      "hanzi": "我听别人说他可能会告诉大家考试的具体时间，我必须要赶过去早点看。",
      "pinyin": "wǒ tīng bié rén shuō tā kě néng huì gào su dà jiā kǎo shì de jù tǐ shí jiān, wǒ bì xū yào gǎn guò qù zǎo diǎn kàn.",
      "burmese": "သူက အားလုံးကိုစာမေးပွဲရက်အတိအကျပြောပြနိုင်တယ်လို့ တခြားလူပြောတာငါကြားတယ်၊ ငါအဲ့ဒီကိုမြန်မြန်သွားပြီး စောစောကြည့်မှဖြစ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_385",
      "hanzi": "我们公司的前几天新来的那位女服务员，每天工作都很忙很辛苦。",
      "pinyin": "wǒ men gōng sī de qián jǐ tiān xīn lái de nà wèi nǚ fú wù yuán, měi tiān gōng zuò dōu hěn máng hěn xīn kǔ.",
      "burmese": "လွန်ခဲ့တဲ့ရက်အနည်းငယ်က ငါတို့ကုမ္ပဏီကိုအသစ်ရောက်လာတဲ့ အမျိုးသမီးစားပွဲထိုးက၊ နေ့တိုင်းအလုပ်အရမ်းများပြီး ပင်ပန်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_386",
      "hanzi": "我知道她的事情，但是大家都说服务员如果努力做得好，一个月会有八千块对吧？",
      "pinyin": "wǒ zhī dào tā de shì qing, dàn shì dà jiā dōu shuō fú wù yuán rú guǒ nǔ lì zuò de hǎo, yí ge yuè huì yǒu bā qiān kuài duì ba?",
      "burmese": "ငါသူ့အကြောင်းသိတယ်၊ ဒါပေမယ့် စားပွဲထိုးက ကြိုးစားပြီးလုပ်ရင်၊ တစ်လကို ယွမ် ရှစ်ထောင်ရမယ်လို့ အားလုံးပြောကြတယ်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_387",
      "hanzi": "这件裙子是你去北京旅游的时候给我的礼物，非常好看，真的很谢谢你。",
      "pinyin": "zhè jiàn qún zi shì nǐ qù Běi jīng lǚ yóu de shí hou gěi wǒ de lǐ wù, fēi cháng hǎo kàn, zhēn de hěn xiè xiè nǐ.",
      "burmese": "ဒီစကတ်က မင်းပေကျင်းကိုခရီးသွားတုန်းက ငါ့ကိုပေးတဲ့လက်ဆောင်ပဲ၊ အရမ်းလှတယ်၊ တကယ်ကိုကျေးဇူးတင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_388",
      "hanzi": "只要是你每天穿上这件衣服觉得很开心不生气，我的这几百块钱也就花得对。",
      "pinyin": "zhǐ yào shì nǐ měi tiān chuān shang zhè jiàn yī fu jué de hěn kāi xīn bù shēng qì, wǒ de zhè jǐ bǎi kuài qián yě jiù huā de duì.",
      "burmese": "ဒီအင်္ကျီလေးဝတ်လိုက်တိုင်း မင်းနေ့တိုင်းပျော်ရွှင်ပြီး စိတ်မတိုဘူးဆိုရင်ပဲ၊ ငါ့ရဲ့ဒီယွမ်ရာချီက သုံးရကျိုးနပ်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_389",
      "hanzi": "你妈妈去年送给我的那只猫非常可爱，你觉得猫好玩还是狗好玩？",
      "pinyin": "nǐ mā ma qù nián sòng gěi wǒ de nà zhī māo fēi cháng kě ài, nǐ jué de māo hǎo wán hái shì gǒu hǎo wán?",
      "burmese": "မင်းအမေမနှစ်က ငါ့ကိုလက်ဆောင်ပေးခဲ့တဲ့ အဲ့ဒီကြောင်လေးက အရမ်းချစ်စရာကောင်းတယ်၊ မင်းကကြောင်ဆော့ရတာကောင်းလား ခွေးဆော့ရတာကောင်းလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_390",
      "hanzi": "我可能会觉得狗比较亲人，但是只要你细心照顾，每只动物都能成为你的好朋友。",
      "pinyin": "wǒ kě néng huì jué de gǒu bǐ jiào qīn rén, dàn shì zhǐ yào nǐ xì xīn zhào gù, měi zhī dòng wù dōu néng chéng wéi nǐ de hǎo péng yǒu.",
      "burmese": "ငါကတော့ ခွေးကလူနဲ့ပိုရင်းနှီးတယ်လို့ ထင်ကောင်းထင်မယ်၊ ဒါပေမယ့် မင်းဂရုတစိုက်စောင့်ရှောက်သရွေ့တော့ တိရစ္ဆာန်တိုင်းက မင်းရဲ့သူငယ်ချင်းကောင်းဖြစ်လာနိုင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_391",
      "hanzi": "今天的工作还没做完，我想在电脑前再坐两个小时把事情都处理好。",
      "pinyin": "jīn tiān de gōng zuò hái méi zuò wán, wǒ xiǎng zài diàn nǎo qián zài zuò liǎng ge xiǎo shí bǎ shì qing dōu chǔ lǐ hǎo.",
      "burmese": "ဒီနေ့အလုပ်က မပြီးသေးဘူး၊ ငါကွန်ပျူတာရှေ့မှာ နောက်ထပ်နှစ်နာရီလောက်ထိုင်ပြီး ကိစ္စတွေအကုန် ရှင်းလင်းလိုက်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_392",
      "hanzi": "工作虽然重要，但是不要看电脑看太长时间，那样对你的眼睛非常不好。",
      "pinyin": "gōng zuò suī rán zhòng yào, dàn shì bú yào kàn diàn nǎo kàn tài cháng shí jiān, nà yàng duì nǐ de yǎn jing fēi cháng bù hǎo.",
      "burmese": "အလုပ်ကအရေးကြီးတယ်ဆိုပေမယ့်၊ ကွန်ပျူတာကို အချိန်အကြာကြီးမကြည့်ပါနဲ့၊ အဲ့ဒါက မင်းမျက်လုံးအတွက် အရမ်းမကောင်းဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk2_393",
      "hanzi": "从我每天跑步的公园到前面那个有名的火车站应该怎么走最快？",
      "pinyin": "cóng wǒ měi tiān pǎo bù de gōng yuán dào qián miàn nà ge yǒu míng de huǒ chē zhàn yīng gāi zěn me zǒu zuì kuài?",
      "burmese": "ငါနေ့တိုင်းပြေးတဲ့ပန်းခြံကနေ ရှေ့က နာမည်ကြီးတဲ့ ရထားဘူတာရုံကိုသွားရင် ဘယ်လိုသွားရတာအမြန်ဆုံးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk2_394",
      "hanzi": "你从这条路出去之后一直往前骑自行车，不要拐弯，过了前边就会看到车站在哪儿了。",
      "pinyin": "nǐ cóng zhè tiáo lù chū qu zhī hòu yì zhí wǎng qián qí zì xíng chē, bú yào guǎi wān, guò le qián biān jiù huì kàn dào chē zhàn zài nǎr le.",
      "burmese": "မင်းဒီလမ်းကထွက်ပြီးရင် ရှေ့ကိုတည့်တည့် စက်ဘီးစီးသွား၊ ကွေ့စရာမလိုဘူး၊ ရှေ့နားလေးကျော်သွားတာနဲ့ ဘူတာရုံဘယ်မှာလဲဆိုတာ မြင်ရလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_395",
      "hanzi": "今天晚上的雪比昨天大得多很多，你现在要是洗完澡想去商店可能要多穿一点衣服了。",
      "pinyin": "jīn tiān wǎn shang de xuě bǐ zuó tiān dà de duō hěn duō, nǐ xiàn zài yào shì xǐ wán zǎo xiǎng qù shāng diàn kě néng yào duō chuān yì diǎn yī fu le.",
      "burmese": "ဒီနေ့ည နှင်းကျတာ မနေ့ကထက်အများကြီးပိုများတယ်، အခုမင်းရေချိုးပြီးလို့ ဆိုင်သွားချင်ရင် အင်္ကျီနည်းနည်းပိုဝတ်ရလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_396",
      "hanzi": "我不去了外面太冷了，我还是就坐在沙发上一边看电视里面的新闻一边喝热茶吧。",
      "pinyin": "wǒ bú qù le wài miàn tài lěng le, wǒ hái shì jiù zuò zài shā fā shang yì biān kàn diàn shì lǐ miàn de xīn wén yì biān hē rè chá ba.",
      "burmese": "ငါမသွားတော့ဘူး အပြင်မှာအရမ်းအေးတယ်၊ ငါဆိုဖာပေါ်မှာထိုင်ပြီး တီဗွီထဲကသတင်းကြည့်ရင်း ရေနွေးကြမ်းသောက်နေတာပဲကောင်းပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk2_397",
      "hanzi": "对不起女士，你的右边的那位穿着红颜色的漂亮衣服的小女孩是你女儿还是别人？",
      "pinyin": "duì bù qǐ nǚ shì, nǐ de yòu biān de nà wèi chuān zhe hóng yán sè de piào liang yī fu de xiǎo nǚ hái shì nǐ nǚ ér hái shì bié rén?",
      "burmese": "တောင်းပန်ပါတယ်အမျိုးသမီး၊ မင်းညာဘက်က အနီရောင်အင်္ကျီလှလှလေးဝတ်ထားတဲ့ ကောင်မလေးက မင်းသမီးလား ဒါမှမဟုတ် တခြားလူလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_398",
      "hanzi": "她是我朋友刚上小学的妹妹，因为大家都特别忙没时间，所以她今天坐在我这儿玩几个小时。",
      "pinyin": "tā shì wǒ péng yǒu gāng shàng xiǎo xué de mèi mei, yīn wèi dà jiā dōu tè bié máng méi shí jiān, suǒ yǐ tā jīn tiān zuò zài wǒ zhèr wán jǐ ge xiǎo shí.",
      "burmese": "သူက မူလတန်းစတက်တဲ့ ငါ့သူငယ်ချင်းရဲ့ ညီမလေးပါ၊ အားလုံးကအရမ်းအလုပ်များပြီး အချိန်မရှိကြလို့၊ ဒီနေ့သူငါ့ဆီမှာ နာရီအနည်းငယ်လာဆော့နေတာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk2_399",
      "hanzi": "这个医院的医生非常懂为什么大家吃了那么贵的药之后身体还是很难受，对吧？",
      "pinyin": "zhè ge yī yuàn de yī shēng fēi cháng dǒng wèi shén me dà jiā chī le nà me guì de yào zhī hòu shēn tǐ hái shì hěn nán shòu, duì ba?",
      "burmese": "ဒီဆေးရုံက ဆရာဝန်တွေက လူတွေဘာလို့ အဲ့လောက်ဈေးကြီးတဲ့ဆေးတွေသောက်ပြီးတာတောင် နေမကောင်းဖြစ်နေသေးလဲဆိုတာကို အရမ်းနားလည်တယ်၊ ဟုတ်တယ်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk2_400",
      "hanzi": "是的，大家要是都有一个很好的每天做两百个运动的时间，谁还会天天跑去吃不便宜的药呢？",
      "pinyin": "shì de, dà jiā yào shì dōu yǒu yí ge hěn hǎo de měi tiān zuò liǎng bǎi ge yùn dòng de shí jiān, shuí hái huì tiān tiān pǎo qù chī bù pián yi de yào ne?",
      "burmese": "ဟုတ်တယ်၊ လူတိုင်းမှာသာ နေ့တိုင်းလေ့ကျင့်ခန်း အကြိမ်နှစ်ရာလုပ်ဖို့ အချိန်အလုံအလောက်ရှိနေရင်၊ ဘယ်သူကများ နေ့တိုင်းဈေးမကြီးတဲ့ဆေးတွေ သွားစားနေဖို့ လိုတော့မှာလဲ?",
      "category": "daily"
    }
  ],
  "3": [
    {
      "id": "hsk3_1",
      "hanzi": "你把我的电脑放在哪里了？",
      "pinyin": "nǐ bǎ wǒ de diàn nǎo fàng zài nǎ lǐ le?",
      "burmese": "မင်းငါ့ကွန်ပျူတာကိုဘယ်မှာထားလိုက်တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_2",
      "hanzi": "我把它放在你的办公桌上了，你没看到吗？",
      "pinyin": "wǒ bǎ tā fàng zài nǐ de bàn gōng zhuō shang le, nǐ méi kàn dào ma?",
      "burmese": "ငါမင်းရဲ့ရုံးစားပွဲပေါ်မှာထားလိုက်တယ်၊ မင်းမတွေ့ဘူးလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_3",
      "hanzi": "今天的会议你准备得怎么样了？需要帮忙吗？",
      "pinyin": "jīn tiān de huì yì nǐ zhǔn bèi de zěn me yàng le? xū yào bāng máng ma?",
      "burmese": "ဒီနေ့အစည်းအဝေးအတွက်မင်းဘယ်လောက်ပြင်ဆင်ပြီးပြီလဲ? အကူအညီလိုသေးလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_4",
      "hanzi": "都已经准备好了，只要等经理来就可以开会了。",
      "pinyin": "dōu yǐ jīng zhǔn bèi hǎo le, zhǐ yào děng jīng lǐ lái jiù kě yǐ kāi huì le.",
      "burmese": "အကုန်ပြင်ဆင်ပြီးပါပြီ၊ မန်နေဂျာရောက်လာတာကိုစောင့်ပြီးရင် အစည်းအဝေးစလို့ရပါပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_5",
      "hanzi": "周末的比赛你被选上了吗？我听说很难进。",
      "pinyin": "zhōu mò de bǐ sài nǐ bèi xuǎn shàng le ma? wǒ tīng shuō hěn nán jìn.",
      "burmese": "ပိတ်ရက်က ပြိုင်ပွဲမှာ မင်းအရွေးခံရလား? ဝင်ဖို့အရမ်းခက်တယ်လို့ငါကြားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_6",
      "hanzi": "很遗憾，我没被选上，因为还有比我更优秀的人。",
      "pinyin": "hěn yí hàn, wǒ méi bèi xuǎn shàng, yīn wèi hái yǒu bǐ wǒ gèng yōu xiù de rén.",
      "burmese": "အရမ်းဝမ်းနည်းစရာကောင်းတယ်၊ ငါအရွေးမခံရဘူး၊ ဘာလို့လဲဆိုတော့ ငါ့ထက်ပိုတော်တဲ့သူတွေရှိသေးလို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_7",
      "hanzi": "你觉得这家新开的超市东西便宜吗？",
      "pinyin": "nǐ jué de zhè jiā xīn kāi de chāo shì dōng xi pián yi ma?",
      "burmese": "ဒီအသစ်ဖွင့်တဲ့စူပါမားကတ်က ပစ္စည်းတွေစျေးပေါတယ်လို့မင်းထงိလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_8",
      "hanzi": "不仅价格便宜，而且质量也很好，所以我以后会常来。",
      "pinyin": "bù jǐn jià gé pián yi, ér qiě zhì liàng yě hěn hǎo, suǒ yǐ wǒ yǐ hòu huì cháng lái.",
      "burmese": "စျေးသက်သာရုံတင်မကဘူး၊ အရည်အသွေးလည်းအရမ်းကောင်းတယ်၊ ဒါကြောင့်နောက်ဆိုရင် ငါခဏခဏလာဖြစ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_9",
      "hanzi": "为了身体健康，你必须每天锻炼身体。",
      "pinyin": "wèi le shēn tǐ jiàn kāng, nǐ bì xū měi tiān duàn liàn shēn tǐ.",
      "burmese": "ကျန်းမာရေးအတွက်အလို့ငှာ၊ မင်းနေ့တိုင်းကိုယ်လက်လှုပ်ရှားမှုလုပ်ရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_10",
      "hanzi": "我明白你的意思，从明天起我会每天去跑步。",
      "pinyin": "wǒ míng bai nǐ de yì si, cóng míng tiān qǐ wǒ huì měi tiān qù pǎo bù.",
      "burmese": "မင်းဆိုလိုတာကိုငါနားလည်ပါတယ်၊ မနက်ဖြန်ကစပြီး ငါနေ့တိုင်းပြေးလေ့ကျင့်ခန်းသွားလုပ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_11",
      "hanzi": "虽然外面下着大雪，但是我还是准时到了公司。",
      "pinyin": "suī rán wài miàn xià zhe dà xuě, dàn shì wǒ hái shì zhǔn shí dào le gōng sī.",
      "burmese": "အပြင်မှာနှင်းတွေအများကြီးကျနေပေမယ့်လည်း ငါအချိန်မီကုမ္ပဏီကိုရောက်ခဲ့တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_12",
      "hanzi": "你真的很努力，老板一定会对你满意的。",
      "pinyin": "nǐ zhēn de hěn nǔ lì, lǎo bǎn yí dìng huì duì nǐ mǎn yì de.",
      "burmese": "မင်းတကယ်ကိုကြိုးစားတာပဲ၊ ဘော့စ်ကမင်းကို သေချာပေါက်သဘောကျမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_13",
      "hanzi": "除了看书，你周末还喜欢做什么其他的爱好？",
      "pinyin": "chú le kàn shū, nǐ zhōu mò hái xǐ huan zuò shén me qí tā de ài hào?",
      "burmese": "စာဖတ်တာအပြင်၊ ပိတ်ရက်တွေမှာ မင်းတခြားဘာဝါသနာတွေလုပ်ရတာကြိုက်သေးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_14",
      "hanzi": "除了看书，我还经常去电影院看电影或者听音乐。",
      "pinyin": "chú le kàn shū, wǒ hái jīng cháng qù diàn yǐng yuàn kàn diàn yǐng huò zhě tīng yīn yuè.",
      "burmese": "စာဖတ်တာအပြင်၊ ငါရုပ်ရှင်ရုံသွားပြီးရုပ်ရှင်ကြည့်တာ ဒါမှမဟုတ် သီချင်းနားထောင်တာမျိုးကိုလည်း ခဏခဏလုပ်လေ့ရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_15",
      "hanzi": "你能把这个句子翻译成中文吗？我有点看不懂。",
      "pinyin": "nǐ néng bǎ zhè ge jù zi fān yì chéng zhōng wén ma? wǒ yǒu diǎn kàn bù dǒng.",
      "burmese": "ဒီစာကြောင်းကို တရုတ်လိုဘာသာပြန်ပေးလို့ရမလား? ငါနည်းနည်းနားမလည်လို့။",
      "category": "daily"
    },
    {
      "id": "hsk3_16",
      "hanzi": "当然可以，这句话的意思是让我们不要忘记过去的努力。",
      "pinyin": "dāng rán kě yǐ, zhè jù huà de yì si shì ràng wǒ men bú yào wàng jì guò qù de nǔ lì.",
      "burmese": "ရတာပေါ့၊ ဒီစကားစုရဲ့အဓိပ္ပာယ်က ကျွန်တော်တို့ကို အတိတ်ကကြိုးစားမှုတွေကိုမမေ့ပစ်ဖို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_17",
      "hanzi": "你觉得这个黑色的包好还是那个蓝色的包好？",
      "pinyin": "nǐ jué de zhè ge hēi sè de bāo hǎo hái shì nà ge lán sè de bāo hǎo?",
      "burmese": "ဒီအိတ်အမည်းရောင်ကပိုကောင်းတယ်ထင်လား ဟိုအိတ်အပြာရောင်ကပိုကောင်းတယ်ထင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_18",
      "hanzi": "其实我觉得都不错，但是蓝色的比较适合夏天用。",
      "pinyin": "qí shí wǒ jué de dōu bú cuò, dàn shì lán sè de bǐ jiào shì hé xià tiān yòng.",
      "burmese": "တကယ်တော့ နှစ်ခုလုံးကောင်းတယ်ထင်တယ်၊ ဒါပေမယ့် အပြာရောင်က နွေရာသီမှာသုံးဖို့ပိုသင့်တော်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_19",
      "hanzi": "我总是忘记这几个汉字怎么写，真让人头疼。",
      "pinyin": "wǒ zǒng shì wàng jì zhè jǐ ge hàn zì zěn me xiě, zhēn ràng rén tóu téng.",
      "burmese": "ငါဒီတရုတ်စာလုံးတွေဘယ်လိုရေးရလဲဆိုတာ အမြဲတမ်းမေ့နေတယ်၊ တကယ်ကိုခေါင်းခဲရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_20",
      "hanzi": "多写几遍，或者用句子来记忆，这样会好很多。",
      "pinyin": "duō xiě jǐ biàn, huò zhě yòng jù zi lái jì yì, zhè yàng huì hǎo hěn duō.",
      "burmese": "အကြိမ်များများရေးပါ၊ ဒါမှမဟုတ် စာကြောင်းတွေသုံးပြီးမှတ်ပါ၊ အဲ့လိုဆိုပိုကောင်းလာလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_21",
      "hanzi": "你昨天复习得怎么样了？今天考试有把握吗？",
      "pinyin": "nǐ zuó tiān fù xí de zěn me yàng le? jīn tiān kǎo shì yǒu bǎ wò ma?",
      "burmese": "မနေ့ကမင်းပြန်နွှေးထားတာဘယ်လိုလဲ? ဒီနေ့စာမေးပွဲအတွက်သေချာရဲ့လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_22",
      "hanzi": "虽然复习得很晚，但我还是比较有信心的。",
      "pinyin": "suī rán fù xí de hěn wǎn, dàn wǒ hái shì bǐ jiào yǒu xìn xīn de.",
      "burmese": "ပြန်နွှေးတာတော်တော်နောက်ကျသွားပေမယ့်၊ ငါတော်တော်လေးယုံကြည်မှုရှိပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_23",
      "hanzi": "只要你不放弃，就一定能找到满意的工作。",
      "pinyin": "zhǐ yào nǐ bú fàng qì, jiù yí dìng néng zhǎo dào mǎn yì de gōng zuò.",
      "burmese": "မင်းလက်မလျှော့သရွေ့၊ သေချာပေါက်ကျေနပ်စရာကောင်းတဲ့အလုပ်တစ်ခုရှာတွေ့မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_24",
      "hanzi": "谢谢你的鼓励，我会继续努力面试的。",
      "pinyin": "xiè xie nǐ de gǔ lì, wǒ huì jì xù nǔ lì miàn shì de.",
      "burmese": "အားပေးတဲ့အတွက်ကျေးဇူးပါ၊ ငါဆက်ပြီးကြိုးစားအင်တာဗျူးသွားပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_25",
      "hanzi": "那个拿照相机的先生是谁的叔叔？",
      "pinyin": "nà ge ná zhào xiàng jī de xiān sheng shì shéi de shū shu?",
      "burmese": "ဟိုကင်မရာကိုင်ထားတဲ့ လူကြီးက ဘယ်သူ့ရဲ့ဦးလေးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_26",
      "hanzi": "他就是我们校长，今天特地来拍毕业照的。",
      "pinyin": "tā jiù shì wǒ men xiào zhǎng, jīn tiān tè dì lái pāi bì yè zhào de.",
      "burmese": "သူကတော့ငါတို့ကျောင်းအုပ်ပါပဲ၊ ဒီနေ့ဘွဲ့ယူဓာတ်ပုံလာရိုက်ဖို့ အထူးလာခဲ့တာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_27",
      "hanzi": "这件事情我已经解释过了，希望你能理解。",
      "pinyin": "zhè jiàn shì qing wǒ yǐ jīng jiě shì guò le, xī wàng nǐ néng lǐ jiě.",
      "burmese": "ဒီကိစ္စကိုငါရှင်းပြပြီးသွားပါပြီ၊ မင်းနားလည်နိုင်မယ်လို့မျှော်လင့်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_28",
      "hanzi": "我理解你的困难，下不为例，这次就算了。",
      "pinyin": "wǒ lǐ jiě nǐ de kùn nán, xià bù wéi lì, zhè cì jiù suàn le.",
      "burmese": "မင်းရဲ့အခက်အခဲကိုငါနားလည်ပါတယ်၊ နောက်တစ်ကြိမ်မလုပ်နဲ့တော့၊ ဒီတစ်ခေါက်တော့ထားလိုက်ပါတော့။",
      "category": "daily"
    },
    {
      "id": "hsk3_29",
      "hanzi": "我的手机坏了，你能帮我查一下怎么去动物园吗？",
      "pinyin": "wǒ de shǒu jī huài le, nǐ néng bāng wǒ chá yí xià zěn me qù dòng wù yuán ma?",
      "burmese": "ငါ့ဖုန်းပျက်သွားပြီ၊ တိရစ္ဆာန်ရုံကိုဘယ်လိုသွားရမလဲဆိုတာ ကူရှာပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_30",
      "hanzi": "没问题，地图上显示我们需要换乘两趟公共汽车。",
      "pinyin": "méi wèn tí, dì tú shang xiǎn shì wǒ men xū yào huàn chéng liǎng tàng gōng gòng qì chē.",
      "burmese": "ပြဿနာမရှိပါဘူး၊ မြေပုံပေါ်မှာပြထားတာကတော့ ငါတို့ဘတ်စ်ကားနှစ်ခါပြောင်းစီးဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_31",
      "hanzi": "为了早点到家，我们最好打车去。",
      "pinyin": "wèi le zǎo diǎn dào jiā, wǒ men zuì hǎo dǎ chē qù.",
      "burmese": "အိမ်စောစောရောက်ဖို့အလို့ငှာ၊ ငါတို့အငှားကားခေါ်သွားတာအကောင်းဆုံးပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_32",
      "hanzi": "但是在晚高峰打车可能比坐地铁还要慢。",
      "pinyin": "dàn shì zài wǎn gāo fēng dǎ chē kě néng bǐ zuò dì tiě hái yào màn.",
      "burmese": "ဒါပေမယ့် ညဘက်ယာဉ်ကြောပိတ်ချိန်မှာအငှားကားခေါ်တာက မြေအောက်ရထားစီးတာထက်ပိုနှေးလောက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_33",
      "hanzi": "你把护照和机票都放在包里了吗？",
      "pinyin": "nǐ bǎ hù zhào hé jī piào dōu fàng zài bāo lǐ le ma?",
      "burmese": "မင်းပတ်စ်ပို့နဲ့လေယာဉ်လက်မှတ်တွေကို အိတ်ထဲထည့်ထားပြီးပြီလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_34",
      "hanzi": "放在那个红色的包里了，不用担心，我都检查过了。",
      "pinyin": "fàng zài nà ge hóng sè de bāo lǐ le, bú yòng dān xīn, wǒ dōu jiǎn chá guò le.",
      "burmese": "ဟိုအိတ်အနီရောင်ထဲမှာထည့်ထားပါတယ်၊ စိတ်မပူနဲ့၊ ငါအကုန်စစ်ပြီးသွားပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_35",
      "hanzi": "那家有名的餐厅不仅环境好，而且服务员也很热情。",
      "pinyin": "nà jiā yǒu míng de cān tīng bù jǐn huán jìng hǎo, ér qiě fú wù yuán yě hěn rè qíng.",
      "burmese": "အဲ့ဒီနာမည်ကြီးစားသောက်ဆိုင်က ပတ်ဝန်းကျင်ကောင်းရုံသာမက စားပွဲထိုးတွေကလည်းအရမ်းနွေးထွေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_36",
      "hanzi": "是啊，难怪每天去那里吃饭的人都那么多。",
      "pinyin": "shì a, nán guài měi tiān qù nà lǐ chī fàn de rén dōu nà me duō.",
      "burmese": "ဟုတ်တယ်၊ အဲ့ဒါကြောင့်လည်း နေ့တိုင်းအဲ့မှာသွားစားတဲ့သူတွေအဲ့လောက်များနေတာကိုး။",
      "category": "daily"
    },
    {
      "id": "hsk3_37",
      "hanzi": "如果不戴眼镜，我都看不清黑板上的字。",
      "pinyin": "rú guǒ bú dài yǎn jìng, wǒ dōu kàn bu qīng hēi bǎn shang de zì.",
      "burmese": "မျက်မှန်မတပ်ထားရင် ငါကျောက်သင်ပုန်းပေါ်ကစာတွေကို ကွဲကွဲပြားပြားမမြင်ရဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_38",
      "hanzi": "那你上课的时候一定要记得戴上眼镜。",
      "pinyin": "nà nǐ shàng kè de shí hou yí dìng yào jì de dài shang yǎn jìng.",
      "burmese": "ဒါဆို မင်းအတန်းတက်တဲ့အချိန် မျက်မှန်တပ်ဖို့သေချာပေါက်သတိရရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_39",
      "hanzi": "这杯热茶是你给我倒的吗？谢谢你。",
      "pinyin": "zhè bēi rè chá shì nǐ gěi wǒ dào de ma? xiè xie nǐ.",
      "burmese": "ဒီလက်ဖက်ရည်ပူတစ်ခွက် မင်းငါ့ကိုငှဲ့ပေးထားတာလား? ကျေးဇူးတင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_40",
      "hanzi": "不用客气，我看你咳嗽得很厉害，喝点热水吧。",
      "pinyin": "bú yòng kè qi, wǒ kàn nǐ ké sou de hěn lì hai, hē diǎn rè shuǐ ba.",
      "burmese": "အားနာစရာမလိုပါဘူး၊ မင်းချောင်းဆိုးတာအရမ်းဆိုးနေတာကိုမြင်လို့၊ ရေနွေးနည်းနည်းသောက်လိုက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_41",
      "hanzi": "即使我明天工作很忙，我也会抽时间去看你。",
      "pinyin": "jí shǐ wǒ míng tiān gōng zuò hěn máng, wǒ yě huì chōu shí jiān qù kàn nǐ.",
      "burmese": "မနက်ဖြန်ငါအလုပ်အရမ်းများနေရင်တောင်မှ၊ အချိန်ပေးပြီးမင်းဆီကိုသွားကြည့်ပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_42",
      "hanzi": "听到你这么说我真的很感动，等你的好消息。",
      "pinyin": "tīng dào nǐ zhè me shuō wǒ zhēn de hěn gǎn dòng, děng nǐ de hǎo xiāo xi.",
      "burmese": "မင်းဒီလိုပြောတာကြားရတော့ ငါတကယ်ကိုစိတ်လှုပ်ရှားသွားတယ်၊ မင်းရဲ့သတင်းကောင်းကိုစောင့်နေမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_43",
      "hanzi": "你要多注意自己的生活习惯，少喝啤酒多运动。",
      "pinyin": "nǐ yào duō zhù yì zì jǐ de shēng huó xí guàn, shǎo hē pí jiǔ duō yùn dòng.",
      "burmese": "မင်းရဲ့နေထိုင်မှုအလေ့အထကို ပိုဂရုစိုက်ရမယ်၊ ဘီယာအသောက်လျှော့ပြီး လေ့ကျင့်ခန်းများများလုပ်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_44",
      "hanzi": "医生也是这么告诉我的，我已经决定改变了。",
      "pinyin": "yī shēng yě shì zhè me gào su wǒ de, wǒ yǐ jīng jué dìng gǎi biàn le.",
      "burmese": "ဆရာဝန်ကလည်းငါ့ကိုအဲ့အတိုင်းပြောတယ်၊ ငါပြောင်းလဲဖို့ဆုံးဖြတ်ပြီးသွားပါပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_45",
      "hanzi": "只要按时吃药，你的病很快就会好的。",
      "pinyin": "zhǐ yào àn shí chī yào, nǐ de bìng hěn kuài jiù huì hǎo de.",
      "burmese": "အချိန်မှန်ဆေးသောက်ဖို့ပဲလိုတယ်၊ မင်းရဲ့ရောဂါမကြာခင်သက်သာသွားမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_46",
      "hanzi": "谢谢你的关心，我觉得今天的精神已经好多了。",
      "pinyin": "xiè xie nǐ de guān xīn, wǒ jué de jīn tiān de jīng shén yǐ jīng hǎo duō le.",
      "burmese": "ဂရုစိုက်ပေးတဲ့အတွက်ကျေးဇူးပါ၊ ငါဒီနေ့စိတ်ရွှင်လန်းမှုပိုကောင်းလာတယ်လို့ ခံစားရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_47",
      "hanzi": "昨天晚上我在写信，忽然停电了，真糟糕。",
      "pinyin": "zuó tiān wǎn shang wǒ zài xiě xìn, hū rán tíng diàn le, zhēn zāo gāo.",
      "burmese": "မနေ့ညကငါစာရေးနေတုန်း၊ ရုတ်တရက်မီးပျက်သွားတယ်၊ တကယ်ကိုဆိုးရွားတာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_48",
      "hanzi": "是啊，那你的信保存下来了吗？",
      "pinyin": "shì a, nà nǐ de xìn bǎo cún xià lái le ma?",
      "burmese": "ဟုတ်တယ်၊ ဒါဆို မင်းရဲ့စာတွေ Save လုပ်ပြီးသိမ်းထားလိုက်မိလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_49",
      "hanzi": "因为我忘记复习，所以这次数学考试没及格。",
      "pinyin": "yīn wèi wǒ wàng jì fù xí, suǒ yǐ zhè cì shù xué kǎo shì méi jí gé.",
      "burmese": "ငါစာပြန်နွှေးဖို့မေ့သွားလို့၊ ဒီတစ်ခါ သင်္ချာစာမေးပွဲမအောင်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_50",
      "hanzi": "没关系，失败是成功之母，下次一定要努力。",
      "pinyin": "méi guān xi, shī bài shì chéng gōng zhī mǔ, xià cì yí dìng yào nǔ lì.",
      "burmese": "ကိစ္စမရှိပါဘူး၊ ကျရှုံးခြင်းသည်အောင်မြင်ခြင်း၏မိခင်ပဲ၊ နောက်တစ်ခါသေချာပေါက်ကြိုးစားရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_51",
      "hanzi": "你已经搬到一个新的环境了，感觉习惯吗？",
      "pinyin": "nǐ yǐ jīng bān dào yí ge xīn de huán jìng le, gǎn jué xí guàn ma?",
      "burmese": "မင်းပတ်ဝန်းကျင်အသစ်တစ်ခုကိုပြောင်းလာပြီပဲ၊ အသားကျသွားပြီလို့ခံစားရလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_52",
      "hanzi": "我觉得还可以，虽然一开始有点孤单，但是邻居很热情。",
      "pinyin": "wǒ jué de hái kě yǐ, suī rán yì kāi shǐ yǒu diǎn gū dān, dàn shì lín jū hěn rè qíng.",
      "burmese": "အဆင်ပြေပါတယ်လို့ထင်တယ်၊ အစပိုင်းတော့နည်းနည်းအထီးကျန်ပေမယ့် အိမ်နီးချင်းတွေကအရမ်းနွေးထွေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_53",
      "hanzi": "我们打算周末去爬山，你要不要一起去？",
      "pinyin": "wǒ men dǎ suàn zhōu mò qù pá shān, nǐ yào bú yào yì qǐ qù?",
      "burmese": "ငါတို့ပိတ်ရက်မှာတောင်တက်ဖို့ရည်ရွယ်ထားတယ်၊ မင်းရောအတူတူသွားမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_54",
      "hanzi": "听起来不错，但是我必须要完成老板交给我的任务。",
      "pinyin": "tīng qǐ lái bú cuò, dàn shì wǒ bì xū yào wán chéng lǎo bǎn jiāo gěi wǒ de rèn wu.",
      "burmese": "ကြားရတာမဆိုးဘူး၊ ဒါပေမယ့် ဘော့စ်ပေးထားတဲ့အလုပ်ကို ငါမဖြစ်မနေပြီးအောင်လုပ်ရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_55",
      "hanzi": "你还记得那个长头发、大眼睛的女孩吗？她要结婚了。",
      "pinyin": "nǐ hái jì de nà ge cháng tóu fa, dà yǎn jing de nǚ hái ma? tā yào jié hūn le.",
      "burmese": "ဟိုဆံပင်ရှည်ရှည် မျက်လုံးပြူးပြူးနဲ့ကောင်မလေးကို မင်းမှတ်မိသေးလား? သူအိမ်ထောင်ပြုတော့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_56",
      "hanzi": "是吗？时间过得真快，我们都快十年没见了。",
      "pinyin": "shì ma? shí jiān guò de zhēn kuài, wǒ men dōu kuài shí nián méi jiàn le.",
      "burmese": "ဟုတ်လား? အချိန်တွေကုန်တာအရမ်းမြန်တယ်၊ ငါတို့မတွေ့ရတာ (၁၀) နှစ်လောက်တောင်ရှိတော့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_57",
      "hanzi": "你把行李箱放在楼下还是带回房间了？",
      "pinyin": "nǐ bǎ xíng li xiāng fàng zài lóu xià hái shì dài huí fáng jiān le?",
      "burmese": "မင်းခရီးဆောင်သေတ္တာကို အောက်ထပ်မှာထားခဲ့တာလား ဒါမှမဟုတ် အခန်းထဲကိုယူပြန်လာတာလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_58",
      "hanzi": "我把它带回房间了，因为里面有很多重要的文件。",
      "pinyin": "wǒ bǎ tā dài huí fáng jiān le, yīn wèi lǐ miàn yǒu hěn duō zhòng yào de wén jiàn.",
      "burmese": "ငါအခန်းထဲကိုယူပြန်လာတယ်၊ ဘာလို့လဲဆိုတော့ အထဲမှာ အရေးကြီးတဲ့ဖိုင်တွေအများကြီးပါလို့။",
      "category": "daily"
    },
    {
      "id": "hsk3_59",
      "hanzi": "你必须把这个问题解决了，不然经理会不高兴的。",
      "pinyin": "nǐ bì xū bǎ zhè ge wèn tí jiě jué le, bù rán jīng lǐ huì bù gāo xìng de.",
      "burmese": "မင်းဒီပြဿနာကို မဖြစ်မနေဖြေရှင်းပြီးရမယ်၊ မဟုတ်ရင် မန်နေဂျာသဘောကျမှာမဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_60",
      "hanzi": "我知道事情的严重性，我会尽全力的。",
      "pinyin": "wǒ zhī dào shì qing de yán zhòng xìng, wǒ huì jìn quán lì de.",
      "burmese": "ကိစ္စရဲ့ပြင်းထန်မှုကိုငါသိပါတယ်၊ ငါအစွမ်းကုန်ကြိုးစားပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_61",
      "hanzi": "即使你遇到再大的困难，我也一直会陪在你身边。",
      "pinyin": "jí shǐ nǐ yù dào zài dà de kùn nán, wǒ yě yì zhí huì péi zài nǐ shēn biān.",
      "burmese": "မင်းဘယ်လောက်ပဲကြီးမားတဲ့အခက်အခဲနဲ့ကြုံကြုံ၊ ငါမင်းဘေးနားမှာ အမြဲတမ်းရှိနေပေးမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_62",
      "hanzi": "有你做朋友，我真的觉得非常幸运。",
      "pinyin": "yǒu nǐ zuò péng you, wǒ zhēn de jué de fēi cháng xìng yùn.",
      "burmese": "မင်းလိုသူငယ်ချင်းမျိုးရှိတာကို ငါတကယ်ကံကောင်းတယ်လို့ခံစားရပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_63",
      "hanzi": "这只小鸟的腿受了伤，我们把它带回家照顾吧。",
      "pinyin": "zhè zhī xiǎo niǎo de tuǐ shòu le shāng, wǒ men bǎ tā dài huí jiā zhào gù ba.",
      "burmese": "ဒီငှက်ကလေးရဲ့ခြေထောက်ဒဏ်ရာရထားတယ်၊ ငါတို့သူ့ကိုအိမ်ခေါ်သွားပြီး စောင့်ရှောက်ပေးကြရအောင်။",
      "category": "daily"
    },
    {
      "id": "hsk3_64",
      "hanzi": "好主意，等它恢复健康了再把它放回大自然。",
      "pinyin": "hǎo zhǔ yi, děng tā huī fù jiàn kāng le zài bǎ tā fàng huí dà zì rán.",
      "burmese": "အကြံကောင်းပဲ၊ သူကျန်းမာရေးပြန်ကောင်းလာတဲ့အထိစောင့်ပြီးမှ သဘာဝတရားထဲကို ပြန်လွှတ်ပေးလိုက်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_65",
      "hanzi": "因为一直没下雨，所以外面的花草都变黄了。",
      "pinyin": "yīn wèi yì zhí méi xià yǔ, suǒ yǐ wài miàn de huā cǎo dōu biàn huáng le.",
      "burmese": "မိုးတစ်ချိန်လုံးမရွာတာကြောင့်၊ အပြင်ဘက်က ပန်းတွေမြက်တွေအကုန်ဝါကုန်ပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_66",
      "hanzi": "希望天气预报说明天会有降雨的消息是真的。",
      "pinyin": "xī wàng tiān qì yù bào shuō míng tiān huì yǒu jiàng yǔ de xiāo xi shì zhēn de.",
      "burmese": "မနက်ဖြန်မိုးရွာမယ်ဆိုတဲ့ မိုးလေဝသခန့်မှန်းချက်ကသတင်း အမှန်ဖြစ်ဖို့မျှော်လင့်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_67",
      "hanzi": "请在开会之前把这些资料发给所有的同事。",
      "pinyin": "qǐng zài kāi huì zhī qián bǎ zhè xiē zī liào fā gěi suǒ yǒu de tóng shì.",
      "burmese": "အစည်းအဝေးမစခင် ဒီစာရွက်စာတမ်းတွေကို လုပ်ဖော်ကိုင်ဖက်အားလုံးဆီ ပို့ပေးထားပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_68",
      "hanzi": "我已经用电子邮件把它们发送出去了。",
      "pinyin": "wǒ yǐ jīng yòng diàn zǐ yóu jiàn bǎ tā men fā sòng chū qù le.",
      "burmese": "ငါအီးမေးလ်သုံးပြီး အဲ့ဒါတွေကိုပို့ပြီးသွားပါပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_69",
      "hanzi": "虽然我的中文发音不太标准，但我每天都在练习。",
      "pinyin": "suī rán wǒ de zhōng wén fā yīn bú tài biāo zhǔn, dàn wǒ měi tiān dōu zài liàn xí.",
      "burmese": "ငါ့ရဲ့တရုတ်စကားအသံထွက်ကသိပ်မပီသပေမယ့်၊ ငါနေ့တိုင်းလေ့ကျင့်နေပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_70",
      "hanzi": "只要你不害怕说错，经常跟中国人交流就会进步。",
      "pinyin": "zhǐ yào nǐ bù hài pà shuō cuò, jīng cháng gēn zhōng guó rén jiāo liú jiù huì jìn bù.",
      "burmese": "မင်းမှားပြောမိမှာကိုမကြောက်သရွေ့၊ တရုတ်လူမျိုးတွေနဲ့ ခဏခဏပြောဆိုဆက်သွယ်ရင် တိုးတက်လာမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_71",
      "hanzi": "你终于决定离开这家公司去外地发展了吗？",
      "pinyin": "nǐ zhōng yú jué dìng lí kāi zhè jiā gōng sī qù wài dì fā zhǎn le ma?",
      "burmese": "မင်းဒီကုမ္ပဏီကနေထွက်ပြီး တခြားဒေသမှာသွားလုပ်ဖို့ နောက်ဆုံးတော့ဆုံးဖြတ်လိုက်ပြီလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_72",
      "hanzi": "是的，我需要一个更大的舞台来证明我的能力。",
      "pinyin": "shì de, wǒ xū yào yí ge gèng dà de wǔ tái lái zhèng míng wǒ de néng lì.",
      "burmese": "ဟုတ်တယ်၊ ငါ့စွမ်းရည်ကိုသက်သေပြဖို့ ပိုကြီးမားတဲ့စင်မြင့်တစ်ခု လိုအပ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_73",
      "hanzi": "除了洗衣服做饭，他还把整个房子打扫得干干净净。",
      "pinyin": "chú le xǐ yī fu zuò fàn, tā hái bǎ zhěng gè fáng zi dǎ sǎo de gān gān jìng jìng.",
      "burmese": "အဝတ်လျှော်ဟင်းချက်တာအပြင်၊ သူတစ်အိမ်လုံးကိုပါ သန့်ရှင်းသပ်ရပ်နေအောင် သန့်ရှင်းရေးလုပ်ထားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_74",
      "hanzi": "他真是一个勤劳的人，我想向他学习。",
      "pinyin": "tā zhēn shì yí ge qín láo de rén, wǒ xiǎng xiàng tā xué xí.",
      "burmese": "သူကတကယ်ကို ဝီရိယရှိတဲ့လူတစ်ယောက်ပဲ၊ ငါသူ့ဆီကနေလေ့လာချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_75",
      "hanzi": "为了保证你的安全，晚上还是尽量不要单独出门。",
      "pinyin": "wèi le bǎo zhèng nǐ de ān quán, wǎn shang hái shì jìn liàng bú yào dān dú chū mén.",
      "burmese": "မင်းရဲ့လုံခြုံရေးအတွက်၊ ညဘက်တစ်ယောက်တည်းအပြင်ထွက်တာမျိုး တတ်နိုင်သမျှရှောင်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_76",
      "hanzi": "我知道了，如果有急事，我会让同学陪我一起去。",
      "pinyin": "wǒ zhī dào le, rú guǒ yǒu jí shì, wǒ huì ràng tóng xué péi wǒ yì qǐ qù.",
      "burmese": "သိပါပြီ၊ အရေးကြီးကိစ္စရှိရင် ကျောင်းနေဖက်ကိုငါနဲ့အတူတူလိုက်ပေးခိုင်းပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_77",
      "hanzi": "这个照相机的作用很强大，可以把远处的风景拍得很清楚。",
      "pinyin": "zhè ge zhào xiàng jī de zuò yòng hěn qiáng dà, kě yǐ bǎ yuǎn chù de fēng jǐng pāi de hěn qīng chu.",
      "burmese": "ဒီကင်မရာရဲ့လုပ်ဆောင်နိုင်စွမ်းကအရမ်းအားကောင်းတယ်၊ အဝေးကရှုခင်းတွေကို ရှင်းရှင်းလင်းလင်းရိုက်ကူးနိုင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_78",
      "hanzi": "价格也很贵吧？我觉得我现在还买不起它。",
      "pinyin": "jià gé yě hěn guì ba? wǒ jué de wǒ xiàn zài hái mǎi bù qǐ tā.",
      "burmese": "စျေးလည်းအရမ်းကြီးမှာပေါ့? အခုချိန်မှာငါဒါကိုဝယ်နိုင်ဦးမယ်မထင်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_79",
      "hanzi": "你觉得这家宾馆的服务态度怎么样？合格吗？",
      "pinyin": "nǐ jué de zhè jiā bīn guǎn de fú wù tài du度 zěn me yàng? hé gé ma?",
      "burmese": "ဒီဟိုတယ်ရဲ့ ဝန်ဆောင်မှုပေးပုံ ဘယ်လိုနေလဲလို့မင်းထင်လဲ? အရည်အသွေးမီရဲ့လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_80",
      "hanzi": "非常合格，他们总是面带微笑，让人感觉像在家里一样舒服。",
      "pinyin": "fēi cháng hé gé, tā men zǒng shì miàn dài wēi xiào, ràng rén gǎn jué xiàng zài jiā lǐ yí yàng shū fu.",
      "burmese": "အရမ်းကိုမီပါတယ်၊ သူတို့ကအမြဲတမ်းပြုံးပြုံးရွှင်ရွှင်နဲ့၊ အိမ်မှာနေရသလိုမျိုး သက်တောင့်သက်သာဖြစ်အောင် ဖန်တီးပေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_81",
      "hanzi": "请把这个消息通知给负责这个项目的经理。",
      "pinyin": "qǐng bǎ zhè ge xiāo xi tōng zhī gěi fù zé zhè ge xiàng mù de jīng lǐ.",
      "burmese": "ဒီသတင်းကို ဒီပရောဂျက်ကိုတာဝန်ယူထားတဲ့ မန်နေဂျာဆီကို အသိပေးလိုက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_82",
      "hanzi": "好的，我已经给他发了短信，他应该马上就能看到。",
      "pinyin": "hǎo de, wǒ yǐ jīng gěi tā fā le duǎn xìn, tā yīng gāi mǎ shàng jiù néng kàn dào.",
      "burmese": "ဟုတ်ကဲ့၊ ငါသူ့ကိုမက်ဆေ့ချ်ပို့လိုက်ပါပြီ၊ သူအခုချက်ချင်း မြင်တွေ့ရလောက်ပါပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_83",
      "hanzi": "虽然我们的意见不同，但是我愿意听你的想法。",
      "pinyin": "suī rán wǒ men de yì jiàn bù tóng, dàn shì wǒ yuàn yì tīng nǐ de xiǎng fǎ.",
      "burmese": "ငါတို့ရဲ့အမြင်တွေကွဲလွဲနေပေမယ့်၊ မင်းရဲ့အတွေးတွေကို ငါနားထောင်ပေးဖို့ဆန္ဒရှိပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_84",
      "hanzi": "谢谢你的理解，其实很多事情我们都可以互相商量。",
      "pinyin": "xiè xie nǐ de lǐ jiě, qí shí hěn duō shì qing wǒ men dōu kě yǐ hù xiāng shāng liang.",
      "burmese": "နားလည်ပေးတဲ့အတွက်ကျေးဇူးပါ၊ တကယ်တော့ ကိစ္စများစွာကို ငါတို့အပြန်အလှန်တိုင်ပင်လို့ရပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_85",
      "hanzi": "你一直拿着字典在查什么生词？遇到困难了吗？",
      "pinyin": "nǐ yì zhí ná zhe zì diǎn zài chá shén me shēng cí? yù dào kùn nán le ma?",
      "burmese": "မင်းအဘိဓာန်ကိုင်ပြီး စာလုံးအသစ်တွေဘာတွေရှာနေတာလဲ? အခက်အခဲကြုံနေလို့လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_86",
      "hanzi": "我在看一篇中文新闻，里面有几个专业的词语我不认识。",
      "pinyin": "wǒ zài kàn yì piān zhōng wén xīn wén, lǐ miàn yǒu jǐ ge zhuān yè de cí yǔ wǒ bú rèn shi.",
      "burmese": "ငါတရုတ်သတင်းတစ်ပုဒ်ဖတ်နေတာ၊ အထဲမှာငါမသိတဲ့ အထူးပြုစကားလုံးအချို့ပါနေလို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_87",
      "hanzi": "下个月的节日你要回老家看父母吗？",
      "pinyin": "xià ge yuè de jié rì nǐ yào huí lǎo jiā kàn fù mǔ ma?",
      "burmese": "နောက်လကပွဲတော်မှာ မင်းမွေးရပ်မြေကိုပြန်ပြီး မိဘတွေကိုသွားကန်တော့မှာလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_88",
      "hanzi": "当然要回去了，顺便给他们带些城市里的特产。",
      "pinyin": "dāng rán yào huí qù le, shùn biàn gěi tā men dài xiē chéng shì lǐ de tè chǎn.",
      "burmese": "သေချာပေါက်ပြန်ရမှာပေါ့၊ အလျဉ်းသင့်သလို မြို့ပေါ်ကဒေသထွက်ကုန်တွေ နည်းနည်းပါးပါးယူသွားပေးမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_89",
      "hanzi": "因为那个故事太感人了，很多观众都哭了。",
      "pinyin": "yīn wèi nà ge gù shì tài gǎn rén le, hěn duō guān zhòng dōu kū le.",
      "burmese": "အဲ့ဒီဇာတ်လမ်းက အရမ်းစိတ်လှုပ်ရှားစရာကောင်းလို့၊ ကြည့်ရှုသူအများကြီးငိုခဲ့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_90",
      "hanzi": "我也一样，连纸巾都用完了，真是部好电影。",
      "pinyin": "wǒ yě yí yàng, lián zhǐ jīn dōu yòng wán le, zhēn shì bù hǎo diàn yǐng.",
      "burmese": "ငါလည်းအတူတူပဲ၊ တစ်ရှူးတွေတောင်သုံးလို့ကုန်သွားတယ်၊ တကယ်ကိုရုပ်ရှင်ကောင်းတစ်ကားပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_91",
      "hanzi": "如果你发现任何错误，必须第一时间向我报告。",
      "pinyin": "rú guǒ nǐ fā xiàn rèn hé cuò wù, bì xū dì yí shí jiān xiàng wǒ bào gào.",
      "burmese": "အမှားတစ်ခုခုတွေ့တာနဲ့ မင်းပထမဆုံးအချိန်မှာ ငါ့ကိုမဖြစ်မနေသတင်းပို့ရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_92",
      "hanzi": "明白，我会注意检查每一个数字的。",
      "pinyin": "míng bai, wǒ huì zhù yì jiǎn chá měi yí ge shù zì de.",
      "burmese": "နားလည်ပါပြီ၊ ဂဏန်းတစ်လုံးချင်းစီကို သေချာစစ်ဆေးပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_93",
      "hanzi": "他不仅学习成绩好，而且体育方面也很有才华。",
      "pinyin": "tā bù jǐn xué xí chéng jì hǎo, ér qiě tǐ yù fāng miàn yě hěn yǒu cái huá.",
      "burmese": "သူစာမေးပွဲရလဒ်ကောင်းရုံသာမက၊ အားကစားဘက်မှာလည်း အရမ်းပါရမီပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_94",
      "hanzi": "听说他还在学校的篮球比赛中得了第一名，太厉害了。",
      "pinyin": "tīng shuō tā hái zài xué xiào de lán qiú bǐ sài zhōng dé le dì yī míng, tài lì hai le.",
      "burmese": "ကျောင်းဘတ်စကက်ဘောပြိုင်ပွဲမှာ သူပထမဆုရခဲ့တယ်လို့ကြားတယ်၊ တကယ်ကိုတော်တာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_95",
      "hanzi": "这块手表是我爷爷送给我的，它对我来说很特别。",
      "pinyin": "zhè kuài shǒu biǎo shì wǒ yé ye sòng gěi wǒ de, tā duì wǒ lái shuō hěn tè bié.",
      "burmese": "ဒီလက်ပတ်နာရီက ငါ့အဘိုးငါ့ကိုပေးထားတာ၊ ငါ့အတွက်တော့ အဲ့ဒါကအရမ်းထူးခြားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_96",
      "hanzi": "一定要好好保护它，这代表着长辈的爱。",
      "pinyin": "yí dìng yào hǎo hǎo bǎo hù tā, zhè dài biǎo zhe zhǎng bèi de ài.",
      "burmese": "သေချာဂရုစိုက်ပြီးထိန်းသိမ်းထားပါ၊ ဒါကလူကြီးတွေရဲ့မေတ္တာကိုကိုယ်စားပြုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_97",
      "hanzi": "那个戴帽子的人，你不觉得他长得很像著名的演员吗？",
      "pinyin": "nà ge dài mào zi de rén, nǐ bù jué de tā zhǎng de hěn xiàng zhù míng de yǎn yuán ma?",
      "burmese": "ဟိုဦးထုပ်ဆောင်းထားတဲ့သူ၊ သူ့ရုပ်က နာမည်ကြီးမင်းသားနဲ့ အရမ်းတူတယ်လို့မင်းမထင်ဘူးလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_98",
      "hanzi": "这么一说，确实有点像，不过我刚才没注意看。",
      "pinyin": "zhè me yì shuō, què shí yǒu diǎn xiàng, bú guò wǒ gāng cái méi zhù yì kàn.",
      "burmese": "အဲ့လိုပြောလိုက်မှ၊ တကယ်ကိုနည်းနည်းတူတယ်၊ ဒါပေမယ့် စောစောကငါသေချာမကြည့်လိုက်မိဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_99",
      "hanzi": "为了完成这项工作，大家每天都加班到凌晨。",
      "pinyin": "wèi le wán chéng zhè xiàng gōng zuò, dà jiā měi tiān dōu jiā bān dào líng chén.",
      "burmese": "ဒီအလုပ်ကိုပြီးမြောက်ဖို့အတွက်၊ အားလုံးကနေ့တိုင်း မနက်စောစောလင်းအားကြီးအထိ အချိန်ပိုဆင်းကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_100",
      "hanzi": "这段时间大家都辛苦了，等项目结束我请大家吃饭。",
      "pinyin": "zhè duàn shí jiān dà jiā dōu xīn kǔ le, děng xiàng mù jié shù wǒ qǐng dà jiā chī fàn.",
      "burmese": "ဒီအချိန်ကာလအတွင်း အားလုံးပင်ပန်းသွားကြပြီ၊ ပရောဂျက်ပြီးတာနဲ့ ငါအားလုံးကိုထမင်းကျွေးမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_101",
      "hanzi": "这部电影真的太好看了，我都看哭了两次。",
      "pinyin": "zhè bù diàn yǐng zhēn de tài hǎo kàn le, wǒ dōu kàn kū le liǎng cì.",
      "burmese": "ဒီရုပ်ရှင်ကတကယ်ကိုအရမ်းကြည့်ကောင်းတာပဲ၊ ငါတောင်နှစ်ခါလောက်ငိုမိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_102",
      "hanzi": "我听说这部电影是由一本书改编的，你想看原书吗？",
      "pinyin": "wǒ tīng shuō zhè bù diàn yǐng shì yóu yì běn shū gǎi biān de, nǐ xiǎng kàn yuán shū ma?",
      "burmese": "ဒီရုပ်ရှင်က စာအုပ်တစ်အုပ်ကနေပြန်ပြောင်းရိုက်ထားတာလို့ငါကြားတယ်၊ မူရင်းစာအုပ်ကိုရောမင်းဖတ်ချင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_103",
      "hanzi": "我最近觉得非常累，总是想睡觉。",
      "pinyin": "wǒ zuì jìn jué de fēi cháng lèi, zǒng shì xiǎng shuì jiào.",
      "burmese": "ငါဒီရက်ပိုင်းအရမ်းပင်ပန်းတယ်လို့ခံစားရတယ်၊ အမြဲတမ်းအိပ်ပဲအိပ်ချင်နေတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_104",
      "hanzi": "你是不是每天熬夜玩手机了？一定要早点休息。",
      "pinyin": "nǐ shì bu shì měi tiān áo yè wán shǒu jī le? yí dìng yào zǎo diǎn xiū xi.",
      "burmese": "မင်းနေ့တိုင်းညဉ့်နက်တဲ့အထိဖုန်းဆော့နေတာလား? သေချာပေါက်စောစောနားရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_105",
      "hanzi": "如果明天下大雨，我们的足球比赛还能继续吗？",
      "pinyin": "rú guǒ míng tiān xià dà yǔ, wǒ men de zú qiú bǐ sài hái néng jì xù ma?",
      "burmese": "အကယ်၍မနက်ဖြန်မိုးကြီးရင် ငါတို့ရဲ့ဘောလုံးပွဲစဉ်ကိုဆက်လုပ်လို့ရဦးမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_106",
      "hanzi": "大概会取消吧，等明天看天气预报怎么说再决定。",
      "pinyin": "dà gài huì qǔ xiāo ba, děng míng tiān kàn tiān qì yù bào zěn me shuō zài jué dìng.",
      "burmese": "အကြမ်းဖျင်းအားဖြင့်တော့ ဖျက်သိမ်းရလောက်မယ်၊ မနက်ဖြန် မိုးလေဝသခန့်မှန်းချက်ဘယ်လိုပြောလဲ စောင့်ကြည့်ပြီးမှဆုံးဖြတ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_107",
      "hanzi": "昨天晚上我在写作业，突然停电了，真的让我很着急。",
      "pinyin": "zuó tiān wǎn shang wǒ zài xiě zuò yè, tū rán tíng diàn le, zhēn de ràng wǒ hěn zháo jí.",
      "burmese": "မနေ့ညကငါအိမ်စာလုပ်နေတာ၊ ရုတ်တရက်မီးပျက်သွားလို့ ငါတကယ်ကိုစိုးရိမ်သွားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_108",
      "hanzi": "有时候就会发生这样的事情，后来你作业完成了吗？",
      "pinyin": "yǒu shí hou jiù huì fā shēng zhè yàng de shì qing, hòu lái nǐ zuò yè wán chéng le ma?",
      "burmese": "တစ်ခါတလေဒီလိုမျိုးဖြစ်တတ်ပါတယ်၊ နောက်ပိုင်း မင်းအိမ်စာလုပ်လို့ပြီးသွားလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_109",
      "hanzi": "虽然你的成绩不是班里第一，但是你很努力。",
      "pinyin": "suī rán nǐ de chéng jì bú shì bān lǐ dì yī, dàn shì nǐ hěn nǔ lì.",
      "burmese": "မင်းရဲ့အမှတ်က အတန်းထဲမှာပထမမဟုတ်ပေမယ့်၊ မင်းအရမ်းကြိုးစားပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_110",
      "hanzi": "谢谢老师的鼓励，只要有机会我一定会变得更好。",
      "pinyin": "xiè xie lǎo shī de gǔ lì, zhǐ yào yǒu jī huì wǒ yí dìng huì biàn de gèng hǎo.",
      "burmese": "ဆရာ့ရဲ့အားပေးစကားအတွက်ကျေးဇူးပါ၊ အခွင့်အရေးရသရွေ့ ငါသေချာပေါက်ပိုကောင်းလာအောင်လုပ်မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_111",
      "hanzi": "他不仅聪明，而且非常喜欢帮助别人解决困难。",
      "pinyin": "tā bù jǐn cōng ming, ér qiě fēi cháng xǐ huan bāng zhù bié rén jiě jué kùn nán.",
      "burmese": "သူကဉာဏ်ကောင်းရုံတင်မက၊ တခြားသူတွေရဲ့အခက်အခဲတွေကိုပါဖြေရှင်းပေးဖို့ အရမ်းသဘောကျတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_112",
      "hanzi": "是啊，有这样的朋友真的是一件很幸运的事。",
      "pinyin": "shì a, yǒu zhè yàng de péng you zhēn de shì yí jiàn hěn xìng yùn de shì.",
      "burmese": "ဟုတ်တယ်၊ အဲ့လိုသူငယ်ချင်းမျိုးရှိတာ တကယ်ကိုကံကောင်းတဲ့ကိစ္စပါပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_113",
      "hanzi": "为了准时参加明天的会议，我们需要把时间提前一个小时。",
      "pinyin": "wèi le zhǔn shí cān jiā míng tiān de huì yì, wǒ men xū yào bǎ shí jiān tí qián yí ge xiǎo shí.",
      "burmese": "မနက်ဖြန်အစည်းအဝေးကိုအချိန်မီတက်ရောက်နိုင်ဖို့၊ ငါတို့အချိန်ကိုတစ်နာရီကြိုတင်ထားဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_114",
      "hanzi": "没问题，我今天晚上会把闹钟定好，不会迟到的。",
      "pinyin": "méi wèn tí, wǒ jīn tiān wǎn shang huì bǎ nào zhōng dìng hǎo, bú huì chí dào de.",
      "burmese": "ပြဿနာမရှိပါဘူး၊ ငါဒီည နှိုးစက်ပေးထားပါ့မယ်၊ နောက်ကျမှာမဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_115",
      "hanzi": "你把我的书放在哪里了？我找了很久都没有找到。",
      "pinyin": "nǐ bǎ wǒ de shū fàng zài nǎ lǐ le? wǒ zhǎo le hěn jiǔ dōu méi yǒu zhǎo dào.",
      "burmese": "မင်းငါ့စာအုပ်ကိုဘယ်မှာထားလိုက်တာလဲ? ငါရှာတာတော်တော်ကြာပြီ မတွေ့ဘူးဖြစ်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_116",
      "hanzi": "对不起，我昨天看完了就把它放在了桌子上，你再找找看。",
      "pinyin": "duì bu qǐ, wǒ zuó tiān kàn wán le jiù bǎ tā fàng zài le zhuō zi shang, nǐ zài zhǎo zhao kàn.",
      "burmese": "တောင်းပန်ပါတယ်၊ ငါမနေ့ကဖတ်ပြီးတာနဲ့ စားပွဲပေါ်မှာပဲဒါကိုထားလိုက်တယ်၊ မင်းထပ်ရှာကြည့်လိုက်ဦး။",
      "category": "daily"
    },
    {
      "id": "hsk3_117",
      "hanzi": "那个拿着照相机的年轻女孩是你妹妹吗？长得很漂亮。",
      "pinyin": "nà ge ná zhe zhào xiàng jī de nián qīng nǚ hái shì nǐ mèi mei ma? zhǎng de hěn piào liang.",
      "burmese": "ဟိုကင်မရာကိုင်ထားတဲ့ ကောင်မလေးက မင်းညီမလား? ရုပ်အရမ်းလှတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_118",
      "hanzi": "不是的，她是我表妹，今天刚从国外回来。",
      "pinyin": "bú shì de, tā shì wǒ biǎo mèi, jīn tiān gāng cóng guó wài huí lái.",
      "burmese": "မဟုတ်ပါဘူး၊ သူမကငါ့ဝမ်းကွဲညီမပါ၊ ဒီနေ့မှ နိုင်ငံခြားကနေပြန်ရောက်တာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_119",
      "hanzi": "这几天的天气越来越热了，你想去吃冰淇淋吗？",
      "pinyin": "zhè jǐ tiān de tiān qì yuè lái yuè rè le, nǐ xiǎng qù chī bīng qí lín ma?",
      "burmese": "ဒီရက်ပိုင်းရာသီဥတုက ပိုပိုပူလာတယ်၊ မင်းရေခဲမုန့်သွားစားချင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_120",
      "hanzi": "当然想去，前面的那家店里卖的冰淇淋味道特别好。",
      "pinyin": "dāng rán xiǎng qù, qián mian de nà jiā diàn lǐ mài de bīng qí lín wèi dào tè bié hǎo.",
      "burmese": "သေချာပေါက်သွားချင်တာပေါ့၊ ရှေ့ကဆိုင်မှာရောင်းတဲ့ရေခဲမုန့်က အရသာအထူးကောင်းမွန်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_121",
      "hanzi": "除了跑步和游泳，你平时还喜欢做什么别的运动？",
      "pinyin": "chú le pǎo bù hé yóu yǒng, nǐ píng shí hái xǐ huan zuò shén me bié de yùn dòng?",
      "burmese": "ပြေးတာနဲ့ရေကူးတာအပြင်၊ မင်းပုံမှန်အားဖြင့် တခြားဘာအားကစားလုပ်ရတာကြိုက်သေးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_122",
      "hanzi": "我还喜欢跟朋友一起去打网球，周末的时候经常去。",
      "pinyin": "wǒ hái xǐ huan gēn péng you yì qǐ qù dǎ wǎng qiú, zhōu mò de shí hou jīng cháng qù.",
      "burmese": "ငါသူငယ်ချင်းနဲ့အတူ တင်းနစ်သွားကစားရတာကိုလည်းကြိုက်တယ်၊ ပိတ်ရက်တွေမှာခဏခဏသွားဖြစ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_123",
      "hanzi": "只有努力学习，才能考上好的大学。",
      "pinyin": "zhǐ yǒu nǔ lì xué xí, cái néng kǎo shàng hǎo de dà xué.",
      "burmese": "ကြိုးစားလေ့လာမှသာ၊ တက္ကသိုလ်ကောင်းကောင်းကိုဖြေဆိုအောင်မြင်နိုင်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_124",
      "hanzi": "你说得对，所以我每天晚上都复习到很晚才睡觉。",
      "pinyin": "nǐ shuō de duì, suǒ yǐ wǒ měi tiān wǎn shang dōu fù xí dào hěn wǎn cái shuì jiào.",
      "burmese": "မင်းပြောတာမှန်တယ်၊ အဲ့ဒါကြောင့်ငါနေ့တိုင်း ညဘက်တော်တော်နောက်ကျတဲ့အထိ စာပြန်နွှေးပြီးမှအိပ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_125",
      "hanzi": "你觉得这双鞋子是黑色的好看，还是白色的好看？",
      "pinyin": "nǐ jué de zhè shuāng xié zi shì hēi sè de hǎo kàn, hái shì bái sè de hǎo kàn?",
      "burmese": "ဒီဖိနပ်က အမည်းရောင်ကပိုကြည့်ကောင်းတယ်လို့ထင်လား၊ အဖြူရောင်ကပိုကြည့်ကောင်းတယ်လို့ထင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_126",
      "hanzi": "白色的比较适合你，而且现在还有百分之十的折扣。",
      "pinyin": "bái sè de bǐ jiào shì hé nǐ, ér qiě xiàn zài hái yǒu bǎi fēn zhī shí de zhé kòu.",
      "burmese": "အဖြူရောင်ကမင်းနဲ့ပိုလိုက်တယ်၊ ပြီးတော့ အခု ၁၀ ရာခိုင်နှုန်းလျှော့ပေးတာလည်းရှိသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_127",
      "hanzi": "你最近有没有发现他好像总是在生气？",
      "pinyin": "nǐ zuì jìn yǒu méi yǒu fā xiàn tā hǎo xiàng zǒng shì zài shēng qì?",
      "burmese": "ဒီရက်ပိုင်း သူအမြဲတမ်းစိတ်ဆိုးနေသလိုမျိုး မင်းသတိထားမိလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_128",
      "hanzi": "他可能是因为工作压力太大了，你找个时间关心他一下吧。",
      "pinyin": "tā kě néng shì yīn wèi gōng zuò yā lì tài dà le, nǐ zhǎo ge shí jiān guān xīn tā yí xià ba.",
      "burmese": "သူ့အလုပ်ဖိအားအရမ်းများသွားလို့ဖြစ်နိုင်တယ်၊ မင်းအချိန်လေးရရှာပြီး သူ့ကိုတစ်ချက်လောက်ဂရုစိုက်ပေးလိုက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_129",
      "hanzi": "这件事必须在这周末前完成，你能做到吗？",
      "pinyin": "zhè jiàn shì bì xū zài zhè zhōu mò qián wán chéng, nǐ néng zuò dào ma?",
      "burmese": "ဒီကိစ္စကိုဒီပိတ်ရက်မတိုင်ခင် မဖြစ်မနေပြီးအောင်လုပ်ရမယ်၊ မင်းလုပ်နိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_130",
      "hanzi": "如果大家能帮忙的话，我想我一定能准时完成的。",
      "pinyin": "rú guǒ dà jiā néng bāng máng de huà, wǒ xiǎng wǒ yí dìng néng zhǔn shí wán chéng de.",
      "burmese": "အားလုံးကူညီပေးနိုင်မယ်ဆိုရင်တော့၊ ငါသေချာပေါက်အချိန်မီပြီးနိုင်မယ်လို့ထင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_131",
      "hanzi": "这条狗非常聪明，它知道怎么把门打开。",
      "pinyin": "zhè tiáo gǒu fēi cháng cōng ming, tā zhī dào zěn me bǎ mén dǎ kāi.",
      "burmese": "ဒီခွေးကအရမ်းဉာဏ်ကောင်းတယ်၊ တံခါးကိုဘယ်လိုဖွင့်ရမလဲဆိုတာ သူသိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_132",
      "hanzi": "真的吗？这太神奇了，我以前从来没有见过这样的狗。",
      "pinyin": "zhēn de ma? zhè tài shén qí le, wǒ yǐ qián cóng lái méi yǒu jiàn guò zhè yàng de gǒu.",
      "burmese": "တကယ်လား? ဒါအရမ်းအံ့ဩဖို့ကောင်းတာပဲ၊ ငါအရင်က ဒီလိုခွေးမျိုး တစ်ခါမှမမြင်ဖူးဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_133",
      "hanzi": "我觉得你的计划有问题，这样下去肯定会出很多麻烦。",
      "pinyin": "wǒ jué de nǐ de jì huà yǒu wèn tí, zhè yàng xià qù kěn dìng huì chū hěn duō má fan.",
      "burmese": "ငါထင်တယ်၊ မင်းရဲ့အစီအစဉ်ကပြဿနာရှိတယ်၊ ဒီအတိုင်းသွားရင် သေချာပေါက် ပြဿနာတွေအများကြီးဖြစ်လာလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_134",
      "hanzi": "那你有什么好主意？我非常愿意听听你的建议。",
      "pinyin": "nà nǐ yǒu shén me hǎo zhǔ yi? wǒ fēi cháng yuàn yì tīng ting nǐ de jiàn yì.",
      "burmese": "ဒါဆို မင်းမှာဘာအကြံကောင်းရှိလဲ? မင်းရဲ့အကြံပြုချက်ကို ငါအရမ်းနားထောင်ချင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_135",
      "hanzi": "我们打算明天去参观历史博物馆，你要一起去吗？",
      "pinyin": "wǒ men dǎ suàn míng tiān qù cān guān lì shǐ bó wù guǎn, nǐ yào yì qǐ qù ma?",
      "burmese": "ငါတို့မနက်ဖြန် သမိုင်းပြတိုက်ကိုသွားလည်ပတ်ဖို့ရည်ရွယ်ထားတယ်၊ မင်းရောအတူတူသွားမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_136",
      "hanzi": "好啊，我对历史非常感兴趣，听说那里有很多珍贵的东西。",
      "pinyin": "hǎo a, wǒ duì lì shǐ fēi cháng gǎn xìng qù, tīng shuō nà lǐ yǒu hěn duō zhēn guì de dōng xi.",
      "burmese": "ကောင်းတာပေါ့၊ ငါသမိုင်းနဲ့ပတ်သက်ပြီး အရမ်းစိတ်ဝင်စားတယ်၊ အဲ့ဒီမှာ တန်ဖိုးကြီးတဲ့ပစ္စည်းတွေအများကြီးရှိတယ်လို့ကြားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_137",
      "hanzi": "你把行李箱收好了吗？我们再过半小时就要出发了。",
      "pinyin": "nǐ bǎ xíng li xiāng shōu hǎo le ma? wǒ men zài guò bàn xiǎo shí jiù yào chū fā le.",
      "burmese": "မင်းခရီးဆောင်သေတ္တာကိုသိမ်းပြီးပြီလား? ငါတို့နောက်ထပ်နာရီဝက်နေရင် ထွက်ကြရတော့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_138",
      "hanzi": "马上就好，我只剩下一两件衣服要放进去了。",
      "pinyin": "mǎ shàng jiù hǎo, wǒ zhǐ shèng xià yī liǎng jiàn yī fu yào fàng jìn qù le.",
      "burmese": "ချက်ချင်းရပါပြီ၊ ငါအင်္ကျီတစ်ထည်နှစ်ထည် ထည့်ဖို့ပဲကျန်တော့တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_139",
      "hanzi": "由于下大雪的原因，大部分的航班都被取消了。",
      "pinyin": "yóu yú xià dà xuě de yuán yīn, dà bù fen de háng bān dōu bèi qǔ xiāo le.",
      "burmese": "နှင်းများများကျတဲ့အကြောင်းပြချက်ကြော့င်၊ လေကြောင်းခရီးစဉ်အများစုကို ဖျက်သိမ်းလိုက်ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_140",
      "hanzi": "真是太可惜了，那我们只能在酒店里再多住一晚上了。",
      "pinyin": "zhēn shì tài kě xī le, nà wǒ men zhǐ néng zài jiǔ diàn lǐ zài duō zhù yì wǎn shang le.",
      "burmese": "တကယ်ကိုနှမြောစရာပဲ၊ ဒါဆိုငါတို့ဟိုတယ်မှာ နောက်ထပ်တစ်ညပိုတည်းရုံပဲရှိတော့တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_141",
      "hanzi": "你必须在五点之前把这份报告交给我，明白吗？",
      "pinyin": "nǐ bì xū zài wǔ diǎn zhī qián bǎ zhè fèn bào gào jiāo gěi wǒ, míng bai ma?",
      "burmese": "မင်း ဒီအစီရင်ခံစာကို ၅ နာရီမတိုင်ခင် ငါ့ဆီလာပေးရမယ်၊ နားလည်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_142",
      "hanzi": "我已经差不多写完了，保证在四点半以前发给您。",
      "pinyin": "wǒ yǐ jīng chà bu duō xiě wán le, bǎo zhèng zài sì diǎn bàn yǐ qián fā gěi nín.",
      "burmese": "ငါရေးတာလောက်တော့ပြီးနေပါပြီ၊ ៤ နာရီခွဲမတိုင်ခင် လူကြီးမင်းဆီကိုပို့ပေးပါ့မယ်လို့ ကတိပေးပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_143",
      "hanzi": "我的手机一直连不上网，你能帮我看看怎么回事吗？",
      "pinyin": "wǒ de shǒu jī yì zhí lián bú shàng wǎng, nǐ néng bāng wǒ kàn kan zěn me huí shì ma?",
      "burmese": "ငါ့ဖုန်းအင်တာနက်ချိတ်လို့မရဖြစ်နေတယ်၊ ဘာဖြစ်တာလဲဆိုတာ ငါ့ကိုကူကြည့်ပေးလို့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_144",
      "hanzi": "我来看看。只要把这个无线网重新打开一次就可以了。",
      "pinyin": "wǒ lái kàn kan. zhǐ yào bǎ zhè ge wú xiàn wǎng chóng xīn dǎ kāi yí cì jiù kě yǐ le.",
      "burmese": "ငါကြည့်ပေးမယ်။ ဒီဝိုင်ဖိုင်ကို နောက်တစ်ကြိမ်ပြန်ဖွင့်လိုက်ရင်ရပါပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_145",
      "hanzi": "如果发现有错误，马上告诉我，我来负责修改。",
      "pinyin": "rú guǒ fā xiàn yǒu cuò wù, mǎ shàng gào su wǒ, wǒ lái fù zé xiū gǎi.",
      "burmese": "အကယ်၍အမှားတစ်ခုခုတွေ့တာနဲ့ ငါ့ကိုချက်ချင်းပြောပြပါ၊ ငါပြင်ဆင်ဖို့တာဝန်ယူပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_146",
      "hanzi": "没问题，大家现在都在仔细地检查文件。",
      "pinyin": "méi wèn tí, dà jiā xiàn zài dōu zài zǐ xì de jiǎn chá wén jiàn.",
      "burmese": "ပြဿနာမရှိပါဘူး၊ အခုအားလုံးက ဖိုင်တွေကိုသေချာစစ်ဆေးနေကြပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_147",
      "hanzi": "那个戴眼镜的男孩子非常有礼貌，你认识他吗？",
      "pinyin": "nà ge dài yǎn jìng de nán hái zi fēi cháng yǒu lǐ mào, nǐ rèn shi tā ma?",
      "burmese": "ဟိုမျက်မှန်တပ်ထားတဲ့ကောင်လေးက အရမ်းယဉ်ကျေးတယ်၊ မင်းသူ့ကိုသိလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_148",
      "hanzi": "他是李老师的孙子，今年刚满十岁。",
      "pinyin": "tā shì lǐ lǎo shī de sūn zi, jīn nián gāng mǎn shí suì.",
      "burmese": "သူကဆရာမလီရဲ့မြေးပါ၊ ဒီနှစ်မှ ၁၀ နှစ်ပြည့်တာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_149",
      "hanzi": "就算天气冷，你也要多运动，不然会越来越胖的。",
      "pinyin": "jiù suàn tiān qì lěng, nǐ yě yào duō yùn dòng, bù rán huì yuè lái yuè pàng de.",
      "burmese": "ရာသီဥတုအေးရင်တောင်၊ မင်းလေ့ကျင့်ခန်းများများလုပ်ရမယ်၊ မဟုတ်ရင်ပိုပိုဝလာလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_150",
      "hanzi": "好吧，那我明天开始每天下班后去健身房锻炼一个小时。",
      "pinyin": "hǎo ba, nà wǒ míng tiān kāi shǐ měi tiān xià bān hòu qù jiàn shēn fáng duàn liàn yí ge xiǎo shí.",
      "burmese": "ကောင်းပါပြီ၊ ဒါဆိုငါမနက်ဖြန်ကစပြီး နေ့တိုင်းအလုပ်ဆင်းပြီးရင် အားကစားခန်းမမှာ တစ်နာရီသွားဆော့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_151",
      "hanzi": "大家都在看什么？外面发生了什么事情吗？",
      "pinyin": "dà jiā dōu zài kàn shén me? wài miàn fā shēng le shén me shì qing ma?",
      "burmese": "အားလုံးဘာတွေကြည့်နေကြတာလဲ? အပြင်မှာဘာဖြစ်နေလို့လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_152",
      "hanzi": "听说前面有一只很可爱的小猫，大家都觉得很有意思。",
      "pinyin": "tīng shuō qián mian yǒu yì zhī hěn kě ài de xiǎo māo, dà jiā dōu jué de hěn yǒu yì si.",
      "burmese": "ရှေ့မှာချစ်စရာကောင်းတဲ့ကြောင်လေးတစ်ကောင်ရှိတယ်လို့ကြားတယ်၊ အားလုံးကစိတ်ဝင်စားဖို့ကောင်းတယ်ထင်နေကြတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_153",
      "hanzi": "你别忘了把明天的会议材料放在我的办公桌上。",
      "pinyin": "nǐ bié wàng le bǎ míng tiān de huì yì cái liào fàng zài wǒ de bàn gōng zhuō shang.",
      "burmese": "မနက်ဖြန်အစည်းအဝေးပစ္စည်းတွေကို ငါ့ရုံးစားပွဲပေါ်ထားဖို့မမေ့နဲ့နော်။",
      "category": "daily"
    },
    {
      "id": "hsk3_154",
      "hanzi": "我已经准备好了，等下班前就会放进去。",
      "pinyin": "wǒ yǐ jīng zhǔn bèi hǎo le, děng xià bān qián jiù huì fàng jìn qù.",
      "burmese": "ငါပြင်ဆင်ပြီးသွားပါပြီ၊ အလုပ်မဆင်းခင်ထည့်ထားလိုက်ပါ့မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_155",
      "hanzi": "我的腿太疼了，今天晚上不去参加晚会了行吗？",
      "pinyin": "wǒ de tuǐ tài téng le, jīn tiān wǎn shang bú qù cān jiā wǎn huì le xíng ma?",
      "burmese": "ငါ့ခြေထောက်အရမ်းနာနေပြီ၊ ဒီနေ့ည ပါတီပွဲသွားမတက်တော့ဘူးရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_156",
      "hanzi": "当然可以，身体健康最重要，你在家好好休息。",
      "pinyin": "dāng rán kě yǐ, shēn tǐ jiàn kāng zuì zhòng yào, nǐ zài jiā hǎo hao xiū xi.",
      "burmese": "ရတာပေါ့၊ ကျန်းမာရေးကအရေးအကြီးဆုံးပဲ၊ မင်းအိမ်မှာသေချာနားလိုက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_157",
      "hanzi": "即使你现在很累，也必须把这些碗洗干净。",
      "pinyin": "jí shǐ nǐ xiàn zài hěn lèi, yě bì xū bǎ zhè xiē wǎn xǐ gān jìng.",
      "burmese": "မင်းအခုအရမ်းပင်ပန်းနေရင်တောင်၊ ဒီပန်းကန်တွေကိုပြောင်နေအောင်ဆေးရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_158",
      "hanzi": "知道了，我喝杯水马上去洗，十分钟就能洗好。",
      "pinyin": "zhī dào le, wǒ hē bēi shuǐ mǎ shàng qù xǐ, shí fēn zhōng jiù néng xǐ hǎo.",
      "burmese": "သိပါပြီ၊ ငါရေတစ်ခွက်သောက်ပြီး ချက်ချင်းသွားဆေးလိုက်မယ်၊ (၁၀) မိနစ်ဆိုရင်ဆေးလို့ပြီးပါပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_159",
      "hanzi": "如果你愿意的话，周末我们可以一起去图书馆借几本书。",
      "pinyin": "rú guǒ nǐ yuàn yì de huà, zhōu mò wǒ men kě yǐ yì qǐ qù tú shū guǎn jiè jǐ běn shū.",
      "burmese": "မင်းဆန္ဒရှိရင်တော့၊ ပိတ်ရက်မှာငါတို့အတူတူ စာကြည့်တိုက်သွားပြီး စာအုပ်အနည်းငယ်ငှားလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_160",
      "hanzi": "太好了，我最近正好想看一些关于历史的书。",
      "pinyin": "tài hǎo le, wǒ zuì jìn zhèng hǎo xiǎng kàn yì xiē guān yú lì shǐ de shū.",
      "burmese": "အရမ်းကောင်းတာပေါ့၊ ငါဒီရက်ပိုင်း သမိုင်းနဲ့ပတ်သက်တဲ့စာအုပ်အချို့ဖတ်ချင်နေတာနဲ့အတော်ပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_161",
      "hanzi": "为了拿到第一名，他每天都在刻苦地练习钢琴。",
      "pinyin": "wèi le ná dào dì yī míng, tā měi tiān dōu zài kè kǔ de liàn xí gāng qín.",
      "burmese": "ပထမဆုရဖို့အတွက်၊ သူနေ့တိုင်းစန္ဒရားကို ကြိုးကြိုးစားစားလေ့ကျင့်နေပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_162",
      "hanzi": "是啊，他的进步非常大，我觉得他这次一定会成功的。",
      "pinyin": "shì a, tā de jìn bù fēi cháng dà, wǒ jué de tā zhè cì yí dìng huì chéng gōng de.",
      "burmese": "ဟုတ်တယ်၊ သူ့ရဲ့တိုးတက်မှုကအရမ်းကြီးမားတယ်၊ သူဒီတစ်ခေါက်သေချာပေါက်အောင်မြင်မှာပါလို့ထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_163",
      "hanzi": "你觉得这双黑色的皮鞋怎么样？很适合你。",
      "pinyin": "nǐ jué de zhè shuāng hēi sè de pí xié zěn me yàng? hěn shì hé nǐ.",
      "burmese": "ဒီသားရေဖိနပ်အမည်းရောင်လေး ဘယ်လိုနေလဲလို့မင်းထင်လဲ? မင်းနဲ့အရမ်းလိုက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_164",
      "hanzi": "可是价格有点贵了，我觉得我还需要再想想。",
      "pinyin": "kě shì jià gé yǒu diǎn guì le, wǒ jué de wǒ hái xū yào zài xiǎng xiang.",
      "burmese": "ဒါပေမယ့် စျေးနည်းနည်းကြီးနေတယ်၊ ငါထပ်စဉ်းစားဖို့လိုသေးတယ်လို့ထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_165",
      "hanzi": "只要我们不放弃，一定能找到解决问题的办法。",
      "pinyin": "zhǐ yào wǒ men bú fàng qì, yí dìng néng zhǎo dào jiě jué wèn tí de bàn fǎ.",
      "burmese": "ငါတို့လက်မလျှော့သရွေ့တော့၊ ပြဿနာဖြေရှင်းနိုင်မယ့်နည်းလမ်းကို သေချာပေါက်ရှာတွေ့မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_166",
      "hanzi": "对，现在最重要的是大家要一起努力想办法。",
      "pinyin": "duì, xiàn zài zuì zhòng yào de shì dà jiā yào yì qǐ nǔ lì xiǎng bàn fǎ.",
      "burmese": "ဟုတ်တယ်၊ အခုအရေးအကြီးဆုံးက အားလုံးအတူတူနည်းလမ်းကြိုးစားစဉ်းစားဖို့ပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_167",
      "hanzi": "那个一直在哭的小女孩是你女儿吗？怎么了？",
      "pinyin": "nà ge yì zhí zài kū de xiǎo nǚ hái shì nǐ nǚ ér ma? zěn me le?",
      "burmese": "ဟိုတစ်ချိန်လုံးငိုနေတဲ့ကောင်မလေးက မင်းသမီးလား? ဘာဖြစ်လို့လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_168",
      "hanzi": "是啊，她的玩具掉在水里坏了，所以很难过。",
      "pinyin": "shì a, tā de wán jù diào zài shuǐ lǐ huài le, suǒ yǐ hěn nán guò.",
      "burmese": "ဟုတ်တယ်၊ သူ့ကစားစရာရေထဲပြုတ်ကျပြီးပျက်သွားလို့ အရမ်းဝမ်းနည်းနေတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_169",
      "hanzi": "除了周六去爬山，你周末还打算做什么安排？",
      "pinyin": "chú le zhōu liù qù pá shān, nǐ zhōu mò hái dǎ suàn zuò shén me ān pái?",
      "burmese": "စနေနေ့တောင်တက်သွားတာအပြင်၊ မင်းပိတ်ရက်မှာ တခြားဘာအစီအစဉ်လုပ်ဖို့ရည်ရွယ်ထားသေးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_170",
      "hanzi": "周日我想在家里打扫一下房间，然后复习英语。",
      "pinyin": "zhōu rì wǒ xiǎng zài jiā lǐ dǎ sǎo yí xià fáng jiān, rán hòu fù xí yīng yǔ.",
      "burmese": "တနင်္ဂနွေနေ့ငါအိမ်မှာ အခန်းသန့်ရှင်းရေးနည်းနည်းလုပ်ချင်တယ်၊ ပြီးတော့ အင်္ဂလိပ်စာပြန်နွှေးမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_171",
      "hanzi": "我已经把所有的照片发到你的邮箱里了，你去看看。",
      "pinyin": "wǒ yǐ jīng bǎ suǒ yǒu de zhào piàn fā dào nǐ de yóu xiāng lǐ le, nǐ qù kàn kan.",
      "burmese": "ငါဓာတ်ပုံအကုန်လုံးကို မင်းရဲ့မေးလ်ထဲပို့လိုက်ပြီ၊ မင်းသွားကြည့်လိုက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_172",
      "hanzi": "看到了，拍得非常清楚，谢谢你昨天的帮忙。",
      "pinyin": "kàn dào le, pāi de fēi cháng qīng chu, xiè xie nǐ zuó tiān de bāng máng.",
      "burmese": "မြင်ပါပြီ၊ ရိုက်ထားတာအရမ်းရှင်းလင်းတယ်၊ မနေ့ကကူညီပေးဖိုအတွက် ကျေးဇူးတင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_173",
      "hanzi": "因为昨天下了很大的雨，所以我没去公园跑步。",
      "pinyin": "yīn wèi zuó tiān xià le hěn dà de yǔ, suǒ yǐ wǒ méi qù gōng yuán pǎo bù.",
      "burmese": "မနေ့ကမိုးအရမ်းကြီးတာကြောင့်၊ ငါပန်းခြံဘက်ပြေးမသွားဖြစ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_174",
      "hanzi": "今天的风不大正好适合跑步，今天晚上我们一起去吧。",
      "pinyin": "jīn tiān de fēng bú dà zhèng hǎo shì hé pǎo bù, jīn tiān wǎn shang wǒ men yì qǐ qù ba.",
      "burmese": "ဒီနေ့လေသိပ်မတိုက်ဘူး ပြေးဖို့အတော်ပဲ၊ ဒီညငါတို့အတူတူသွားကြရအောင်။",
      "category": "daily"
    },
    {
      "id": "hsk3_175",
      "hanzi": "你认为这件蓝色的衬衫配黑色的裤子好看吗？",
      "pinyin": "nǐ rèn wéi zhè jiàn lán sè de chèn shān pèi hēi sè de kù zi hǎo kàn ma?",
      "burmese": "ဒီရှပ်အင်္ကျီအပြာရောင်လေးနဲ့ ဘောင်းဘီအမည်းရောင်တွဲဝတ်တာ ကြည့်ကောင်းတယ်လို့မင်းထင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_176",
      "hanzi": "非常好看，显得特别年轻有活力。",
      "pinyin": "fēi cháng hǎo kàn, xiǎn de tè bié nián qīng yǒu huó lì.",
      "burmese": "အရမ်းကြည့်ကောင်းပါတယ်၊ ပိုပြီးနုပျိုတက်ကြွနေသလိုပေါ်လွင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_177",
      "hanzi": "听说你们公司最近搬家了，新办公室的环境怎么样？",
      "pinyin": "tīng shuō nǐ men gōng sī zuì jìn bān jiā le, xīn bàn gōng shì de huán jìng zěn me yàng?",
      "burmese": "မင်းတို့ကုမ္ပဏီဒီရက်ပိုင်းပြောင်းသွားတယ်လို့ကြားတယ်၊ ရုံးခန်းအသစ်ရဲ့ပတ်ဝန်းကျင် ဘယ်လိုနေလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_178",
      "hanzi": "不仅面积大了很多，而且楼下就有一个大花园。",
      "pinyin": "bù jǐn miàn ji dà le hěn duō, ér qiě lóu xià jiù yǒu yí ge dà huā yuán.",
      "burmese": "အကျယ်အဝန်းပိုကျယ်လာရုံတင်မကဘူး၊ အောက်ထပ်မှာလည်း ပန်းခြံအကြီးကြီးတစ်ခုရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_179",
      "hanzi": "虽然我的眼睛不太好，但是我还是喜欢每天看书。",
      "pinyin": "suī rán wǒ de yǎn jing bú tài hǎo, dàn shì wǒ hái shì xǐ huan měi tiān kàn shū.",
      "burmese": "ငါ့မျက်လုံးသိပ်မကောင်းပေမယ့်လည်း၊ ငါနေ့တိုင်းစာဖတ်ရတာကိုကြိုက်တုန်းပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_180",
      "hanzi": "看书是个好习惯，不过一定要注意休息，别太累了。",
      "pinyin": "kàn shū shì ge hǎo xí guàn, bú guò yí dìng yào zhù yì xiū xi, bié tài lèi le.",
      "burmese": "စာဖတ်တာကအလေ့အကျင့်ကောင်းတစ်ခုပါ၊ ဒါပေမယ့် သေချာပေါက်အနားယူဖို့သတိထားပါ၊ အရမ်းမပင်ပန်းစေနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk3_181",
      "hanzi": "你在会议上怎么什么都没说？大家都觉得很奇怪。",
      "pinyin": "nǐ zài huì yì shang zěn me shén me dōu méi shuō? dà jiā dōu jué de hěn qí guài.",
      "burmese": "အစည်းအဝေးမှာ မင်းဘာလို့ဘာမှမပြောတာလဲ? အားလုံးကအရမ်းထူးဆန်းတယ်လို့ထင်နေကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_182",
      "hanzi": "因为我还没有完全了解情况，所以想再听听大家的意见。",
      "pinyin": "yīn wèi wǒ hái méi yǒu wán quán liǎo jiě qíng kuàng, suǒ yǐ xiǎng zài tīng ting dà jiā de yì jiàn.",
      "burmese": "အခြေအနေကိုငါအပြည့်အဝနားမလည်သေးလို့ပါ၊ ဒါကြောင့် အားလုံးရဲ့အမြင်ကိုထပ်နားထောင်ကြည့်ချင်သေးလို့။",
      "category": "daily"
    },
    {
      "id": "hsk3_183",
      "hanzi": "为了让你开心一点，我特意去买了个很大的蛋糕。",
      "pinyin": "wèi le ràng nǐ kāi xīn yì diǎn, wǒ tè yì qù mǎi le ge hěn dà de dàn gāo.",
      "burmese": "မင်းပျော်သွားစေဖို့အတွက်၊ ငါတမင်သက်သက် ကိတ်မုန့်အကြီးကြီးတစ်ခု သွားဝယ်လာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_184",
      "hanzi": "谢谢你，我其实没有那么难过，只是需要自己静一静。",
      "pinyin": "xiè xie nǐ, wǒ qí shí méi yǒu nà me nán guò, zhǐ shì xū yào zì jǐ jìng yi jìng.",
      "burmese": "ကျေးဇူးပါ၊ တကယ်တော့ငါအဲ့ဒီလောက်ကြီးဝမ်းနည်းမနေပါဘူး၊ ကိုယ့်ဘာသာကိုယ်တိတ်တဆိတ်နေဖို့ လိုအပ်ရုံလေးတင်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_185",
      "hanzi": "就算你不告诉我，我也会知道发生了什么。",
      "pinyin": "jiù suàn nǐ bù gào su wǒ, wǒ yě huì zhī dào fā shēng le shén me.",
      "burmese": "မင်းငါ့ကိုမပြောပြရင်တောင်၊ ဘာဖြစ်ခဲ့လဲဆိုတာ ငါသိမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_186",
      "hanzi": "好吧，既然你都知道了，那我就不隐瞒了。",
      "pinyin": "hǎo ba, jì rán nǐ dōu zhī dào le, nà wǒ jiù bù yǐn mán le.",
      "burmese": "ကောင်းပါပြီ၊ မင်းသိနေပြီးသားဆိုမှတော့ ငါမဖုံးကွယ်တော့ပါဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_187",
      "hanzi": "除了发烧，你还有没有觉得哪里不舒服？",
      "pinyin": "chú le fā shāo, nǐ hái yǒu méi yǒu jué de nǎ lǐ bù shū fu?",
      "burmese": "ဖျားတာအပြင်၊ မင်းဘယ်နေရာတွေနေမကောင်းဘူးလို့ ခံစားရသေးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_188",
      "hanzi": "头也有点疼，鼻子不通气，可能是感冒引起的发烧。",
      "pinyin": "tóu yě yǒu diǎn téng, bí zi bù tōng qì, kě néng shì gǎn mào yǐn qǐ de fā shāo.",
      "burmese": "ခေါင်းလည်းနည်းနည်းကိုက်တယ်၊ နှာခေါင်းပိတ်နေတယ်၊ အအေးမိတာကြောင့် ဖျားတာဖြစ်နိုင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_189",
      "hanzi": "请你把这份文件拿到经理办公室去，谢谢。",
      "pinyin": "qǐng nǐ bǎ zhè fèn wén jiàn ná dào jīng lǐ bàn gōng shì qù, xiè xie.",
      "burmese": "ဒီဖိုင်ကို မန်နေဂျာရုံးခန်းကိုယူသွားပေးပါ၊ ကျေးဇူးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_190",
      "hanzi": "好的，我这就拿过去，您还有别的事情吗？",
      "pinyin": "hǎo de, wǒ zhè jiù ná guò qù, nín hái yǒu bié de shì qing ma?",
      "burmese": "ဟုတ်ကဲ့၊ အခုသွားပေးလိုက်ပါ့မယ်၊ လူကြီးမင်းမှာ တခြားကိစ္စရှိပါသေးလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_191",
      "hanzi": "只要每天喝一杯牛奶，对身体就会有很大的好处。",
      "pinyin": "zhǐ yào měi tiān hē yì bēi niú nǎi, duì shēn tǐ jiù huì yǒu hěn dà de hǎo chù.",
      "burmese": "နေ့တိုင်းနို့တစ်ခွက်သောက်ရုံနဲ့တင် ကျန်းမာရေးအတွက် အရမ်းအကျိုးရှိမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_192",
      "hanzi": "我会试着培养这个习惯的，感谢你的关心。",
      "pinyin": "wǒ huì shì zhe péi yǎng zhè ge xí guàn de, gǎn xiè nǐ de guān xīn.",
      "burmese": "ငါဒီအလေ့အကျင့်လေးကိုပျိုးထောင်ဖို့ကြိုးစားပါ့မယ်၊ ဂရုစိုက်ပေးတဲ့အတွက်ကျေးဇူးပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_193",
      "hanzi": "他们不仅是最好的朋友，还是工作上的好伙伴。",
      "pinyin": "tā men bù jǐn shì zuì hǎo de péng you, hái shì gōng zuò shang de hǎo huǒ bàn.",
      "burmese": "သူတို့ကအကောင်းဆုံးသူငယ်ချင်းဖြစ်ရုံသာမကဘူး၊ အလုပ်မှာလည်း မိတ်ဖက်ကောင်းတွေပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_194",
      "hanzi": "难怪他们遇到问题的时候总是能够互相帮忙解决。",
      "pinyin": "nán guài tā men yù dào wèn tí de shí hou zǒng shì néng gòu hù xiāng bāng máng jiě jué.",
      "burmese": "ဒါကြောင့်လည်း ပြဿနာကြုံရတဲ့အခါတိုင်း သူတို့အမြဲတမ်းအပြန်အလှန်ကူညီဖြေရှင်းနိုင်ကြတာကိုး။",
      "category": "daily"
    },
    {
      "id": "hsk3_195",
      "hanzi": "这件事情太突然了，让我一点准备都没有。",
      "pinyin": "zhè jiàn shì qing tài tū rán le, ràng wǒ yì diǎn zhǔn bèi dōu méi yǒu.",
      "burmese": "ဒီကိစ္စကအရမ်းရုတ်တရက်ဆန်လွန်းတယ်၊ ငါ့ကိုနည်းနည်းလေးတောင်ပြင်ဆင်ချိန်မရလိုက်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_196",
      "hanzi": "大家也是刚刚才知道的，我们要尽快商量一个解决的办法才行。",
      "pinyin": "dà jiā yě shì gāng gāng cái zhī dào de, wǒ men yào jìn kuài shāng liang yí ge jiě jué de bàn fǎ cái xíng.",
      "burmese": "အားလုံးလည်းအခုလေးတင်မှ သိရတာပါ၊ ငါတို့အမြန်ဆုံးဖြေရှင်းမယ့်နည်းလမ်းတစ်ခုကို တိုင်ပင်ဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_197",
      "hanzi": "虽然他每天都很早起床，但是晚上依然精力充足。",
      "pinyin": "suī rán tā měi tiān dōu hěn zǎo qǐ chuáng, dàn shì wǎn shang yī rán jīng lì chōng zú.",
      "burmese": "နေ့တိုင်းသူအစောကြီးထပေမယ့်၊ ညဘက်မှာလည်း ခွန်အားအပြည့်ရှိနေဆဲပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_198",
      "hanzi": "这说明他的身体很好，平时肯定也有坚持运动。",
      "pinyin": "zhè shuō míng tā de shēn tǐ hěn hǎo, píng shí kěn dìng yě yǒu jiān chí yùn dòng.",
      "burmese": "ဒါကသူ့ကျန်းမာရေးကောင်းတယ်ဆိုတာကိုဖော်ပြနေတာပဲ၊ ပုံမှန်အားဖြင့်လည်း သေချာပေါက်လေ့ကျင့်ခန်းလုပ်နေမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_199",
      "hanzi": "我们打算周末去动物园玩，有兴趣跟我们去看看吗？",
      "pinyin": "wǒ men dǎ suàn zhōu mò qù dòng wù yuán wán, yǒu xìng qù gēn wǒ men qù kàn kan ma?",
      "burmese": "ငါတို့ပိတ်ရက် တိရစ္ဆာန်ရုံသွားလည်ဖို့ရည်ရွယ်ထားတယ်၊ စိတ်ဝင်စားရင် ငါတို့နဲ့အတူသွားကြည့်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_200",
      "hanzi": "太好了，我一直都很想去看看那里的熊猫。",
      "pinyin": "tài hǎo le, wǒ yì zhí dōu hěn xiǎng qù kàn kan nà lǐ de xióng māo.",
      "burmese": "အရမ်းကောင်းတာပေါ့၊ အဲ့ဒီကပန်ဒါတွေကို ငါအရမ်းသွားကြည့်ချင်နေတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_201",
      "hanzi": "你能解释一下什么是闭包吗？",
      "pinyin": "nǐ néng jiě shì yí xià shén me shì bì bāo ma?",
      "burmese": "Closure (ပိတ်ဆို့ခြင်း) ဆိုတာဘာလဲဆိုတာ ရှင်းပြပေးလို့ရမလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_202",
      "hanzi": "闭包就是函数能够记住并访问它被创建时的作用域。",
      "pinyin": "bì bāo jiù shì hán shù néng gòu jì zhù bìng fǎng wèn tā bèi chuàng jiàn shí de zuò yòng yù.",
      "burmese": "Closure ဆိုတာ function တစ်ခုက သူ့ကိုဖန်တီးခဲ့စဉ်တုန်းက scope အတိုင်းကို မှတ်မိပြီး ဝင်သုံးနိုင်တာမျိုးကိုခေါ်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_203",
      "hanzi": "闭包在实际开发中一般用来做什么？",
      "pinyin": "bì bāo zài shí jì kāi fā zhōng yì bān yòng lái zuò shén me?",
      "burmese": "Closure ကိုလက်တွေ့ Develop လုပ်တဲ့အခါ ဘာလုပ်ဖို့အတွက်သုံးလေ့ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_204",
      "hanzi": "通常用来保护变量，避免被外面的代码修改。",
      "pinyin": "tōng cháng yòng lái bǎo hù biàn liàng, bì miǎn bèi wài miàn de dài mǎ xiū gǎi.",
      "burmese": "များသောအားဖြင့်တော့ Variable တွေကို အပြင်က code ကနေပြင်လို့မရအောင် ကာကွယ်ဖို့အသုံးပြုပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_205",
      "hanzi": "JavaScript 里的事件委托是什么意思？",
      "pinyin": "JavaScript lǐ de shì jiàn wěi tuō shì shén me yì si?",
      "burmese": "JavaScript ထဲက Event delegation ဆိုတာဘာအဓိပ္ပာယ်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_206",
      "hanzi": "就是把子元素的事件监听器放在父元素上，提高性能。",
      "pinyin": "jiù shì bǎ zǐ yuán sù de shì jiàn jiān tīng qī fàng zài fù yuán sù shang, tí gāo xìng néng.",
      "burmese": "Child Element တွေရဲ့ Event Listener ကို Parent Element ပေါ်ထားပြီး Performance ကိုမြှင့်တင်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_207",
      "hanzi": "你能说明一下 var, let 和 const 之间的区别吗？",
      "pinyin": "nǐ néng shuō míng yí xià var, let hé const zhī jiān de qū bié ma?",
      "burmese": "var, let နဲ့ const ကိုဘယ်လိုကွဲပြားလဲဆိုတာ ရှင်းပြပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_208",
      "hanzi": "let 和 const 有块级作用域，并且不能被重复声明。",
      "pinyin": "let hé const yǒu kuài jí zuò yòng yù, bìng qiě bù néng bèi chóng fù shēng míng.",
      "burmese": "let နဲ့ const မှာ Block scope ရှိပြီးတော့ ထပ်ခါတလဲလဲ ကြေညာလို့မရပါဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_209",
      "hanzi": "那 const 声明的变量可以被改变吗？",
      "pinyin": "nà const shēng míng de biàn liàng kě yǐ bèi gǎi biàn ma?",
      "burmese": "ဒါဆို const နဲ့ကြေညာထားတဲ့ variable ကပြောင်းလဲလို့ရလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_210",
      "hanzi": "如果是基本数据类型不能改，如果是对象，属性可以改。",
      "pinyin": "rú guǒ shì jī běn shù jù lèi xíng bù néng gǎi, rú guǒ shì duì xiàng, shǔ xìng kě yǐ gǎi.",
      "burmese": "Primitive data type ဆိုရင် ပြင်လို့မရဘူး၊ Object ဆိုရင်တော့ property တွေကိုပြင်လို့ရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_211",
      "hanzi": "你觉得 Promise 和 async/await 哪个更好用？",
      "pinyin": "nǐ jué de Promise hé async/await nǎ ge gèng hǎo yòng?",
      "burmese": "Promise နဲ့ async/await ထဲက ဘယ်ဟာကသုံးရပိုကောင်းတယ်လို့ထင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_212",
      "hanzi": "我觉得 async/await 更好，因为它的代码读起来更像同步代码。",
      "pinyin": "wǒ jué de async/await gèng hǎo, yīn wèi tā de dài mǎ dú qǐ lái gèng xiàng tóng bù dài mǎ.",
      "burmese": "ငါ async/await ကိုပိုကောင်းတယ်လို့ထင်တယ်၊ ဘာလို့လဲဆိုတော့ သူ့ရဲ့ Code ကိုဖတ်ရတာ Synchronous code နဲ့ပိုတူလို့။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_213",
      "hanzi": "关于 JavaScript 的原型链，你是怎么理解的？",
      "pinyin": "guān yú JavaScript de yuán xíng liàn, nǐ shì zěn me lǐ jiě de?",
      "burmese": "JavaScript ရဲ့ Prototype chain နဲ့ပတ်သက်ပြီး သင်ဘယ်လိုနားလည်ထားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_214",
      "hanzi": "对象在寻找属性时会先找自己，找不到就去原型对象上找。",
      "pinyin": "duì xiàng zài xún zhǎo shǔ xìng shí huì xiān zhǎo zì jǐ, zhǎo bu dào jiù qù yuán xíng duì xiàng shang zhǎo.",
      "burmese": "Object တစ်ခုက Property တစ်ခုကိုရှာတဲ့အခါ သူ့ကိုယ်ပိုင်ထဲမှာအရင်ရှာတယ်၊ မတွေ့ရင် Prototype object ပေါ်မှာသွားရှာတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_215",
      "hanzi": "请解释一下什么是深拷贝和浅拷贝？",
      "pinyin": "qǐng jiě shì yí xià shén me shì shēn kǎo bèi hé qiǎn kǎo bèi?",
      "burmese": "Deep copy နဲ့ Shallow copy ဆိုတာဘာလဲဆိုတာ ကျေးဇူးပြုပြီးရှင်းပြပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_216",
      "hanzi": "浅拷贝只复制一层，深拷贝会把对象里的所有内容都复制。",
      "pinyin": "qiǎn kǎo bèi zhǐ fù zhì yì céng, shēn kǎo bèi huì bǎ duì xiàng lǐ de suǒ yǒu nèi róng dōu fù zhì.",
      "burmese": "Shallow copy ကတစ်လွှာတည်းကိုပဲကူးယူပြီး၊ Deep copy က Object ထဲကအကြောင်းအရာအကုန်လုံးကိုပါ ကူးယူပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_217",
      "hanzi": "你能用一段代码实现深拷贝吗？",
      "pinyin": "nǐ néng yòng yí duàn dài mǎ shí xiàn shēn kǎo bèi ma?",
      "burmese": "Deep copy ကို Code လေးတစ်ပိုင်းနဲ့ ဖန်တီးပေးလို့ရမလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_218",
      "hanzi": "最简单的方法是使用 JSON.stringify 和 JSON.parse。",
      "pinyin": "zuì jiǎn dān de bàn fǎ shì shǐ yòng JSON.stringify hé JSON.parse.",
      "burmese": "အလွယ်ဆုံးနည်းကတော့ JSON.stringify နဲ့ JSON.parse ကိုသုံးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_219",
      "hanzi": "浏览器里的 localStorage 和 sessionStorage 有什么不同？",
      "pinyin": "liú lǎn qì lǐ de localStorage hé sessionStorage yǒu shén me bù tóng?",
      "burmese": "Browser ထဲက localStorage နဲ့ sessionStorage ဘာကွာခြားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_220",
      "hanzi": "localStorage 会一直保存数据，而 sessionStorage 关闭浏览器就没了。",
      "pinyin": "localStorage huì yì zhí bǎo cún shù jù, ér sessionStorage guān bì liú lǎn qì jiù méi le.",
      "burmese": "localStorage ကအချက်အလက်တွေကိုအမြဲသိမ်းထားပြီးတော့፣ sessionStorage က Browser ပိတ်လိုက်ရင်ပျောက်သွားတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_221",
      "hanzi": "谈谈你对跨域问题的了解，怎么解决跨域？",
      "pinyin": "tán tan nǐ duì kuà yù wèn tí de liǎo jiě, zěn me jiě jué kuà yù?",
      "burmese": "Cross-origin ပြဿနာနဲ့ပတ်သက်ပြီး မင်းအသိကိုပြောပြပါ၊ CORS ကိုဘယ်လိုဖြေရှင်းလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_222",
      "hanzi": "因为浏览器的同源策略，我们可以让后端配置 CORS 来解决。",
      "pinyin": "yīn wèi liú lǎn qì de tóng yuán cè lüè, wǒ men kě yǐ ràng hòu duān pèi zhì CORS lái jiě jué.",
      "burmese": "Browser ရဲ့ Same-origin policy ကြောင့်ပါ၊ နောက်ပိုင်း Backend ကနေ CORS Configuration ချိန်ပြီး ဖြေရှင်းလို့ရပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_223",
      "hanzi": "JavaScript 是单线程的，它是怎么处理异步任务的？",
      "pinyin": "JavaScript shì dān xiàn chéng de, tā shì zěn me chǔ lǐ yì bù rèn wu de?",
      "burmese": "JavaScript က Single-threaded ပါ၊ သူက Asynchronous task တွေကိုဘယ်လိုကိုင်တွယ်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_224",
      "hanzi": "它通过事件循环（Event Loop）来管理所有的异步任务。",
      "pinyin": "tā tōng guò shì jiàn xún huán (Event Loop) lái guǎn lǐ suǒ yǒu de yì bù rèn wu.",
      "burmese": "သူက Event Loop ကနေတစ်ဆင့် Asynchronous task အားလုံးကိုစီမံပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_225",
      "hanzi": "宏任务和微任务有什么区别？哪个先执行？",
      "pinyin": "hóng rèn wu hé wēi rèn wu yǒu shén me qū bié? nǎ ge xiān zhí xíng?",
      "burmese": "Macrotask နဲ့ Microtask ဘာကွာခြားလဲ? ဘယ်ဟာကအရင်အလုပ်လုပ်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_226",
      "hanzi": "微任务会优先执行，比如 Promise 的回调函数。",
      "pinyin": "wēi rèn wu huì yōu xiān zhí xíng, bǐ rú Promise de huí diào hán shù.",
      "burmese": "Microtask တွေက အရင်ဦးစားပေးအလုပ်လုပ်ပါတယ်၊ ဥပမာ Promise ရဲ့ Callback function တွေလိုမျိုးပေါ့။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_227",
      "hanzi": "能给我举一个防抖（Debounce）的使用场景吗？",
      "pinyin": "néng gěi wǒ jǔ yí ge fáng dǒu (Debounce) de shǐ yòng chǎng jǐng ma?",
      "burmese": "Debounce ရဲ့အသုံးပြုပုံကို ဥပမာတစ်ခုလောက်ပြပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_228",
      "hanzi": "比如搜索框输入文字时，等用户不输入了再去请求接口。",
      "pinyin": "bǐ rú sōu suǒ kuàng shū rù wén zì shí, děng yòng hù bù shū rù le zài qù qǐng qiú jiē kǒu.",
      "burmese": "ဥပမာ Search box ထဲမှာစာရိုက်တဲ့အခါ၊ User မရိုက်တော့တဲ့အထိစောင့်ပြီးမှ API Request သွားလုပ်တာမျိုးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_229",
      "hanzi": "节流（Throttle）又是什么呢？和防抖一样吗？",
      "pinyin": "jié liú (Throttle) yòu shì shén me ne? hé fáng dǒu yí yàng ma?",
      "burmese": "Throttle ဆိုတာရောဘာလဲ? Debounce နဲ့အတူတူပဲလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_230",
      "hanzi": "不一样，节流是规定在一个时间段内只执行一次。",
      "pinyin": "bù yí yàng, jié liú shì guī dìng zài yí ge shí jiān duàn nèi zhǐ zhí xíng yí cì.",
      "burmese": "မတူပါဘူး၊ Throttle ဆိုတာက သတ်မှတ်ထားတဲ့အချိန်ကာလတစ်ခုအတွင်း တစ်ကြိမ်ပဲအလုပ်လုပ်တာမျိုးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_231",
      "hanzi": "在 React 里面，组件的状态（State）和属性（Props）有什么区别？",
      "pinyin": "zài React lǐ miàn, zǔ jiàn de zhuàng tài (State) hé shǔ xìng (Props) yǒu shén me qū bié?",
      "burmese": "React ထဲမှာ Component ရဲ့ State နဲ့ Props ဘာကွာခြားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_232",
      "hanzi": "State 是组件自己管理的，Props 是父组件传给子组件的。",
      "pinyin": "State shì zǔ jiàn zì jǐ guǎn lǐ de, Props shì fù zǔ jiàn chuán gěi zǐ zǔ jiàn de.",
      "burmese": "State ကို Component ကသူ့ဘာသာစီမံတယ်၊ Props ကိုတော့ Parent Component ကနေ Child ပေါ်ကိုပို့ပေးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_233",
      "hanzi": "你知道虚拟 DOM (Virtual DOM) 是怎么提高网页速度的吗？",
      "pinyin": "nǐ zhī dào xū nǐ DOM (Virtual DOM) shì zěn me tí gāo wǎng yè sù dù de ma?",
      "burmese": "Virtual DOM ကဝက်ဘ်ဆိုက်အမြန်နှုန်းကို ဘယ်လိုမြှင့်တင်ပေးလဲဆိုတာ သင်သိပါသလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_234",
      "hanzi": "它通过对比新旧虚拟 DOM，只把变化的地方更新到真正的网页上。",
      "pinyin": "tā tōng guò duì bǐ xīn jiù xū nǐ DOM, zhǐ bǎ biàn huà de dì fang gēng xīn dào zhēn zhèng de wǎng yè shang.",
      "burmese": "သူက Virtual DOM အဟောင်းနဲ့အသစ်ကိုနှိုင်းယှဉ်ပြီး၊ ပြောင်းလဲသွားတဲ့နေရာကိုပဲ အစစ်အမှန်စာမျက်နှာပေါ်မှာ Update လုပ်ပေးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_235",
      "hanzi": "解释一下 null 和 undefined 有什么不同。",
      "pinyin": "jiě shì yí xià null hé undefined yǒu shén me bù tóng.",
      "burmese": "Null နဲ့ undefined ဘာကွာခြားလဲဆိုတာရှင်းပြပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_236",
      "hanzi": "undefined 表示变量没有赋值，null 表示变量的值为空。",
      "pinyin": "undefined biǎo shì biàn liàng méi yǒu fù zhí, null biǎo shì biàn liàng de zhí wèi kōng.",
      "burmese": "Undefined က Variable မှာတန်ဖိုးမပေးထားဘူးလို့ဆိုလိုတာဖြစ်ပြီး၊ Null က Variable ရဲ့တန်ဖိုးက ဘာမှမရှိဘူး (အလွတ်) လို့ဆိုလိုတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_237",
      "hanzi": "平时你是怎么调试代码里的错误的？",
      "pinyin": "píng shí nǐ shì zěn me tiáo shì dài mǎ lǐ de cuò wù de?",
      "burmese": "ပုံမှန်အားဖြင့် မင်း Code ထဲက အမှားတွေကိုဘယ်လို Debug လုပ်လေ့ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_238",
      "hanzi": "我习惯用浏览器的 Console 打印数据，或者打断点看变量。",
      "pinyin": "wǒ xí guàn yòng liú lǎn qì de Console dǎ yìn shù jù, huò zhě dǎ duàn diǎn kàn biàn liàng.",
      "burmese": "ငါက Browser ရဲ့ Console မှာ Data တွေ Print ထုတ်ကြည့်တာ ဒါမှမဟုတ် Breakpoint ထားပြီး Variable တွေကိုကြည့်တာမျိုးလုပ်လေ့ရှိတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_239",
      "hanzi": "为什么不要在 for 循环里经常操作 DOM？",
      "pinyin": "wèi shén me bú yào zài for xún huán lǐ jīng cháng cāo zuò DOM?",
      "burmese": "ဘာကြောင့် for loop ထဲမှာ DOM ကိုအမြဲတမ်း Operation မလုပ်သင့်တာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_240",
      "hanzi": "因为操作 DOM 非常慢，每一次都会让浏览器重新计算。",
      "pinyin": "yīn wèi cāo zuò DOM fēi cháng màn, měi yí cì dōu huì ràng liú lǎn qì chóng xīn jì suàn.",
      "burmese": "ဘာလို့လဲဆိုတော့ DOM Operation ကအရမ်းနှေးလို့ပါ၊ အကြိမ်တိုင်း Browser ကိုပြန်တွက်ချက်စေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_241",
      "hanzi": "请告诉我数组的 map 和 forEach 有什么区别。",
      "pinyin": "qǐng gào su wǒ shǔ zǔ de map hé forEach yǒu shén me qū bié.",
      "burmese": "Array ရဲ့ map နဲ့ forEach ဘာကွာခြားလဲဆိုတာ ငါ့ကိုပြောပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_242",
      "hanzi": "map 会返回一个新的数组，而 forEach 只是运行但是不返回。",
      "pinyin": "map huì fǎn huí yí ge xīn de shǔ zǔ, ér forEach zhǐ shì yùn xíng dàn shì bù fǎn huí.",
      "burmese": "map က Array အသစ်တစ်ခုကို Return ပြန်ပေးတယ်၊ forEach ကတော့ Run ပေးရုံပဲ ဘာမှ Return ပြန်မပေးဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_243",
      "hanzi": "你知道怎么判断一个变量是不是数组吗？",
      "pinyin": "nǐ zhī dào zěn me pàn duàn yí ge biàn liàng shì bu shì shǔ zǔ ma?",
      "burmese": "Variable တစ်ခုက Array ဟုတ်မဟုတ် ဘယ်လိုစစ်ဆေးရလဲဆိုတာ သင်သိပါသလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_244",
      "hanzi": "最好的办法是使用 Array.isArray() 这个方法。",
      "pinyin": "zuì hǎo de bàn fǎ shì shǐ yòng Array.isArray() zhè ge fāng fǎ.",
      "burmese": "အကောင်းဆုံးနည်းကတော့ Array.isArray() method ကိုသုံးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_245",
      "hanzi": "HTTP 状态码中的 404 和 500 代表什么意思？",
      "pinyin": "HTTP zhuàng tài mǎ zhōng de 404 hé 500 dài biǎo shén me yì si?",
      "burmese": "HTTP Status Code တွေထဲက 404 နဲ့ 500 ကဘာအဓိပ္ပာယ်ကိုကိုယ်စားပြုလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_246",
      "hanzi": "404 意思是没找到这个资源，500 意思是服务器出错了。",
      "pinyin": "404 yì si shì méi zhǎo dào zhè ge zī yuán, 500 yì si shì fú wù qī chū cuò le.",
      "burmese": "404 ရဲ့အဓိပ္ပာယ်က ဒီ Resource ကိုရှာမတွေ့တာ၊ 500 ရဲ့အဓိပ္ပာယ်က Server မှားယွင်းနေတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_247",
      "hanzi": "前后端分离的项目里，通常怎么保护用户的登录状态？",
      "pinyin": "qián hòu duān fēn lí de xiàng mù lǐ, tōng cháng zěn me bǎo hù yòng hù de dēng lù zhuàng tài?",
      "burmese": "Frontend နဲ့ Backend ခွဲထားတဲ့ Project တွေမှာ User ရဲ့ Login state ကိုဘယ်လိုကာကွယ်လေ့ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_248",
      "hanzi": "我们一般使用 Token（令牌），每次请求的时候都带上它。",
      "pinyin": "wǒ men yì bān shǐ yòng Token (lìng pái), měi cì qǐng qiú de shí hou dōu dài shang tā.",
      "burmese": "ကျွန်တော်တို့များသောအားဖြင့် Token (တိုကင်) ကိုသုံးတယ်၊ Request လုပ်တိုင်း အဲဒါကိုထည့်ပေးလိုက်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_249",
      "hanzi": "你觉得写注释对开发很重要吗？",
      "pinyin": "nǐ jué de xiě zhù shì duì kāi fā hěn zhòng yào ma?",
      "burmese": "Comment (မှတ်ချက်) ရေးတာက Development အတွက်အရမ်းအရေးကြီးတယ်လို့မင်းထင်လား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_250",
      "hanzi": "当然重要，好的注释能让别的同事更容易看懂你的代码。",
      "pinyin": "dāng rán zhòng yào, hǎo de zhù shì néng ràng bié de tóng shì gèng róng yì kàn dǒng nǐ de dài mǎ.",
      "burmese": "သေချာပေါက်အရေးကြီးတာပေါ့၊ မှတ်ချက်ကောင်းတွေက တခြားလုပ်ဖော်ကိုင်ဖက်တွေကို မင်းရဲ့ Code ကိုပိုလွယ်လွယ်နားလည်စေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_251",
      "hanzi": "你了解 JavaScript 里的箭头函数（Arrow Function）吗？",
      "pinyin": "nǐ liǎo jiě JavaScript lǐ de jiàn tóu hán shù (Arrow Function) ma?",
      "burmese": "JavaScript ထဲက Arrow Function ကိုမင်းသိလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_252",
      "hanzi": "箭头函数的写法更简单，而且它没有自己的 this。",
      "pinyin": "jiàn tóu hán shù de xiě fǎ gèng jiǎn dān, ér qiě tā méi yǒu zì jǐ de this.",
      "burmese": "Arrow function ရဲ့ရေးဟန်ကပိုရိုးရှင်းတယ်၊ ပြီးတော့ သူ့မှာကိုယ်ပိုင် this မရှိဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_253",
      "hanzi": "在 React 中，useEffect 这个 Hook 是用来做什么的？",
      "pinyin": "zài React zhōng, useEffect zhè ge Hook shì yòng lái zuò shén me de?",
      "burmese": "React ထဲမှာ useEffect Hook က ဘာလုပ်ဖို့အတွက်သုံးတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_254",
      "hanzi": "主要用来处理副作用，比如请求数据或者修改 DOM。",
      "pinyin": "zhǔ yào yòng lái chǔ lǐ fù zuò yòng, bǐ rú qǐng qiú shù jù huò zhě xiū gǎi DOM.",
      "burmese": "အဓိကအားဖြင့် Side effect တွေကိုကိုင်တွယ်ဖို့သုံးတယ်၊ ဥပမာ Data request လုပ်တာ ဒါမှမဟုတ် DOM ပြင်တာမျိုးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_255",
      "hanzi": "你能说出几种居中显示一个 div 的方法吗？",
      "pinyin": "nǐ néng shuō chū jǐ zhǒng jū zhōng xiǎn shì yí ge div de fāng fǎ ma?",
      "burmese": "div တစ်ခုကို အလယ်မှာပြဖို့ နည်းလမ်းအချို့ကို ပြောပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_256",
      "hanzi": "最常用的是 Flex 布局，把父元素设置为 display: flex。",
      "pinyin": "zuì cháng yòng de shì Flex bù jú, bǎ fù yuán sù shè zhì wèi display: flex.",
      "burmese": "အသုံးအများဆုံးကတော့ Flex layout ပါ၊ Parent element ကို display: flex လို့သတ်မှတ်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_257",
      "hanzi": "CSS 里的 margin 和 padding 有什么不同？",
      "pinyin": "CSS lǐ de margin hé padding yǒu shén me bù tóng?",
      "burmese": "CSS ထဲက margin နဲ့ padding ဘာကွာခြားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_258",
      "hanzi": "margin 是元素外面的距离，padding 是元素里面的距离。",
      "pinyin": "margin shì yuán sù wài miàn de jù lí, padding shì yuán sù lǐ miàn de jù lí.",
      "burmese": "margin က Element ရဲ့အပြင်ဘက်ကအကွာအဝေး၊ padding က Element ရဲ့အတွင်းဘက်ကအကွာအဝေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_259",
      "hanzi": "什么是跨站脚本攻击（XSS）？怎么防范？",
      "pinyin": "shén me shì kuà zhàn jiǎo běn gōng jī (XSS)? zěn me fáng fàn?",
      "burmese": "Cross-site scripting (XSS) ဆိုတာဘာလဲ? ဘယ်လိုကာကွယ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_260",
      "hanzi": "主要是因为没有对用户输入的内容进行检查，导致代码被执行。",
      "pinyin": "zhǔ yào shì yīn wèi méi yǒu duì yòng hù shū rù de nèi róng jìn xíng jiǎn chá, dǎo zhì dài mǎ bèi zhí xíng.",
      "burmese": "အဓိကက User ရိုက်ထည့်တဲ့အရာကို မစစ်ဆေးတာကြောင့်၊ Code ကိုအလုပ်လုပ်စေသွားတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_261",
      "hanzi": "JavaScript 是如何在浏览器里执行的？",
      "pinyin": "JavaScript shì rú hé zài liú lǎn qì lǐ zhí xíng de?",
      "burmese": "JavaScript က Browser ထဲမှာဘယ်လိုအလုပ်လုပ်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_262",
      "hanzi": "浏览器有一个 JS 引擎，比如 Chrome 使用的 V8 引擎来解释代码。",
      "pinyin": "liú lǎn qì yǒu yí ge JS yǐn qíng, bǐ rú Chrome shǐ yòng de V8 yǐn qíng lái jiě shì dài mǎ.",
      "burmese": "Browser မှာ JS Engine တစ်ခုရှိတယ်၊ ဥပမာ Chrome က Code တွေကိုအနက်ဖွင့်ဖို့ V8 Engine ကိုသုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_263",
      "hanzi": "你一般是怎么处理前端项目的性能优化的？",
      "pinyin": "nǐ yì bān shì zěn me chǔ lǐ qián duān xiàng mù de xìng néng yōu huà de?",
      "burmese": "မင်းများသောအားဖြင့် Frontend project တွေရဲ့ Performance ကိုဘယ်လိုကောင်းအောင်လုပ်လေ့ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_264",
      "hanzi": "比如减少网络请求，压缩图片和代码，使用缓存。",
      "pinyin": "bǐ rú jiǎn shǎo wǎng luò qǐng qiú, yā suō tuú piàn hé dài mǎ, shǐ yòng huǎn cún.",
      "burmese": "ဥပမာ Network request တွေကိုလျှော့ချတာ၊ ပုံတွေနဲ့ Code တွေကို Compress လုပ်တာ၊ Cache သုံးတာမျိုးပေါ့။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_265",
      "hanzi": "你用过 Redux 吗？它主要是用来解决什么问题的？",
      "pinyin": "nǐ yòng guò Redux ma? tā zhǔ yào shì yòng lái jiě jué shén me wèn tí de?",
      "burmese": "မင်း Redux သုံးဖူးလား? အဲ့ဒါကအဓိကအားဖြင့် ဘယ်ပြဿနာကိုဖြေရှင်းဖို့သုံးတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_266",
      "hanzi": "Redux 是用来管理整个应用程序的公共状态的。",
      "pinyin": "Redux shì yòng lái guǎn lǐ zhěng gè yìng yòng chéng xù de gōng gòng zhuàng tài de.",
      "burmese": "Redux က Application တစ်ခုလုံးရဲ့ Public state ကိုစီမံဖို့သုံးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_267",
      "hanzi": "解释一下 JavaScript 中的 this 关键字的指向。",
      "pinyin": "jiě shì yí xià JavaScript zhōng de this guān jiàn zì de zhǐ xiàng.",
      "burmese": "JavaScript ထဲက this keyword ရဲ့ ဦးတည်ရာကိုရှင်းပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_268",
      "hanzi": "普通的函数里，谁调用它，this 就指向谁。",
      "pinyin": "pǔ tōng de hán shù lǐ, shéi diào yòng tā, this jiù zhǐ xiàng shéi.",
      "burmese": "သာမန် Function တွေမှာ၊ ဘယ်သူကသူ့ကိုခေါ်လဲ this ကအဲ့ဒီသူဆီကိုညွှန်ပြတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_269",
      "hanzi": "你能不用临时变量交换两个数字的值吗？",
      "pinyin": "nǐ néng bú yòng lín shí biàn liàng jiāo huàn liǎng ge shù zì de zhí ma?",
      "burmese": "Temporary variable မပါဘဲ ဂဏန်းနှစ်ခုရဲ့တန်ဖိုးကို လဲလှယ်လို့ရမလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_270",
      "hanzi": "可以使用解构赋值，例如 [a, b] = [b, a]。",
      "pinyin": "kě yǐ shǐ yòng jiě gòu fù zhí, lì rú [a, b] = [b, a].",
      "burmese": "Destructuring assignment ကိုသုံးလို့ရပါတယ်၊ ဥပမာ [a, b] = [b, a]။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_271",
      "hanzi": "前端开发中为什么经常用 Webpack 这类的打包工具？",
      "pinyin": "qián duān kāi fā zhōng wèi shén me jīng cháng yòng Webpack zhè lèi de dǎ bāo gōng jù?",
      "burmese": "Frontend development မှာ ဘာကြောင့် Webpack လိုမျိုး Bundler တွေကို ခဏခဏသုံးတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_272",
      "hanzi": "因为它可以把很多个小文件合并成一个文件，提高加载速度。",
      "pinyin": "yīn wèi tā kě yǐ bǎ hěn duō ge xiǎo wén jiàn hé bìng chéng yí ge wén jiàn, tí gāo jiā zǎi sù dù.",
      "burmese": "ဘာလို့လဲဆိုတော့ သူက ဖိုင်အသေးလေးတွေအများကြီးကို ဖိုင်တစ်ခုတည်းဖြစ်အောင်ပေါင်းပေးနိုင်လို့ Load လုပ်တဲ့အမြန်နှုန်းကိုမြှင့်တင်ပေးလို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_273",
      "hanzi": "关于 HTML5，你能说出几个新增加的标签吗？",
      "pinyin": "guān yú HTML5, nǐ néng shuō chū jǐ ge xīn zēng jiā de biāo qiān ma?",
      "burmese": "HTML5 နဲ့ပတ်သက်ပြီး အသစ်တိုးလာတဲ့ Tag အချို့ကို ပြောပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_274",
      "hanzi": "最常见的有 video, audio, header 还有 footer 等等。",
      "pinyin": "zuì cháng jiàn de yǒu video, audio, header hái yǒu footer děng deng.",
      "burmese": "အတွေ့ရအများဆုံးကတော့ video, audio, header နဲ့ footer စတာတွေပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_275",
      "hanzi": "你知道 GET 请求和 POST 请求最大的区别是什么吗？",
      "pinyin": "nǐ zhī dào GET qǐng qiú hé POST qǐng qiú zuì dà de qū bié shì shén me ma?",
      "burmese": "GET request နဲ့ POST request အကြီးမားဆုံးကွာခြားချက်ကဘာလဲဆိုတာ သိပါသလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_276",
      "hanzi": "GET 是用来获取数据的，POST 通常用来向服务器发送数据。",
      "pinyin": "GET shì yòng lái huò qǔ shù jù de, POST tōng cháng yòng lái xiàng fú wù qī fā sòng shù jù.",
      "burmese": "GET က Data ကိုရယူဖို့သုံးတာဖြစ်ပြီး၊ POST ကများသောအားဖြင့် Server ဆီကို Data ပို့ဖို့သုံးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_277",
      "hanzi": "在工作中，如果遇到不了解的 Bug，你会怎么做？",
      "pinyin": "zài gōng zuò zhōng, rú guǒ yù dào bù liǎo jiě de Bug, nǐ huì zěn me zuò?",
      "burmese": "အလုပ်ထဲမှာ နားမလည်တဲ့ Bug နဲ့ကြုံရရင် မင်းဘယ်လိုလုပ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_278",
      "hanzi": "我会先在网上查资料，如果还是解决不了，我会请教同事。",
      "pinyin": "wǒ huì xiān zài wǎng shang chá zī liào, rú guǒ hái shì jiě jué bù liǎo, wǒ huì qǐng jiào tóng shì.",
      "burmese": "ငါအင်တာနက်ပေါ်မှာ အချက်အလက်အရင်ရှာမယ်၊ ဘယ်လိုမှဖြေရှင်းလို့မရဘူးဆိုရင်တော့ လုပ်ဖော်ကိုင်ဖက်တွေကို အကြံဉာဏ်တောင်းမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_279",
      "hanzi": "你如何理解 JavaScript 是弱类型语言这句话？",
      "pinyin": "nǐ rú hé lǐ jiě JavaScript shì ruò lèi xíng yǔ yán zhè jù huà?",
      "burmese": "JavaScript က Weakly-typed language ပါဆိုတဲ့စကားကို မင်းဘယ်လိုနားလည်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_280",
      "hanzi": "意思是在写代码的时候，不需要特别声明变量的类型。",
      "pinyin": "yì si shì zài xiě dài mǎ de shí hou, bù xū yào tè bié shēng míng biàn liàng de lèi xíng.",
      "burmese": "အဓိပ္ပာယ်ကတော့ Code ရေးတဲ့အခါမှာ Variable ရဲ့ Type ကိုအထူးတလည်ကြေညာစရာမလိုတာကိုဆိုလိုတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_281",
      "hanzi": "如果要使用 TypeScript，你觉得它的好处是什么？",
      "pinyin": "rú guǒ yào shǐ yòng TypeScript, nǐ jué de tā de hǎo chù shì shén me?",
      "burmese": "အကယ်၍ TypeScript ကိုသုံးမယ်ဆိုရင် သူ့ရဲ့အားသာချက်ကဘာလဲလို့မင်းထင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_282",
      "hanzi": "它可以在写代码的时候发现错误，提高代码的安全性。",
      "pinyin": "tā kě yǐ zài xiě dài mǎ de shí hou fā xiàn cuò wù, tí gāo dài mǎ de ān quán xìng.",
      "burmese": "သူက Code ရေးနေစဉ်မှာပဲ အမှားတွေကိုရှာတွေ့နိုင်ပြီး၊ Code ရဲ့လုံခြုံစိတ်ချရမှုကို မြှင့်တင်ပေးပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_283",
      "hanzi": "谈一谈你在项目中使用过哪些前端 UI 框架。",
      "pinyin": "tán yì tán nǐ zài xiàng mù zhōng shǐ yòng guò nǎ xiē qián duān UI kuāng jià.",
      "burmese": "Project တွေမှာ မင်းဘယ် Frontend UI Framework တွေကိုသုံးဖူးလဲဆိုတာပြောပြပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_284",
      "hanzi": "我用过很多，比如 Ant Design 和 Material UI 等。",
      "pinyin": "wǒ yòng guò hěn duō, bǐ rú Ant Design hé Material UI děng.",
      "burmese": "ငါအများကြီးသုံးဖူးတယ်၊ ဥပမာ Ant Design နဲ့ Material UI တို့လိုမျိုးပေါ့။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_285",
      "hanzi": "如果接口请求很慢，前端可以做什么样的事情让用户体验更好？",
      "pinyin": "rú guǒ jiē kǒu qǐng qiú hěn màn, qián duān kě yǐ zuò shén me yàng de shì qing ràng yòng hù tǐ yàn gèng hǎo?",
      "burmese": "API Request ကအရမ်းနှေးနေရင်၊ User Experience ပိုကောင်းအောင် Frontend ကနေဘာလုပ်ပေးလို့ရလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_286",
      "hanzi": "我们可以加一个加载动画（Loading），这样用户就不会觉得卡了。",
      "pinyin": "wǒ men kě yǐ jiā yí ge jiā zǎi dòng huà (Loading), zhè yàng yòng hù jiù bú huì jué de kǎ le.",
      "burmese": "Loading Animation လေးတစ်ခုထည့်ပေးလို့ရတယ်၊ ဒါဆိုရင် User က ထစ်နေတယ်လို့မခံစားရတော့ဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_287",
      "hanzi": "你能写一个正则表达式，用来检查是不是电子邮箱吗？",
      "pinyin": "nǐ néng xiě yí ge zhèng zé biǎo dá shì, yòng lái jiǎn chá shì bu shì diàn zǐ yóu xiāng ma?",
      "burmese": "ဒါကအီးမေးလ်ဟုတ်မဟုတ်စစ်ဖို့ Regular Expression တစ်ခုရေးပေးလို့ရမလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_288",
      "hanzi": "可以，邮箱中间一定要有一个 @ 的符号，后面是域名。",
      "pinyin": "kě yǐ, yóu xiāng zhōng jiān yí dìng yào yǒu yí ge @ de fú hào, hòu mian shì yù míng.",
      "burmese": "ရပါတယ်၊ အီးမေးလ်အလယ်မှာ ကျိန်းသေပေါက် @ သင်္ကေတတစ်ခုပါရမယ်၊ အနောက်မှာက Domain name ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_289",
      "hanzi": "怎样解决不同浏览器对 CSS 样式的兼容性问题？",
      "pinyin": "zěn yàng jiě jué bù tóng liú lǎn qì duì CSS yàng shì de jiān róng xìng wèn tí?",
      "burmese": "Browser မတူညီတဲ့အပေါ်မူတည်ပြီး CSS Style ကွဲလွဲတဲ့ပြဿနာကို ဘယ်လိုဖြေရှင်းမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_290",
      "hanzi": "一般会引入一个重置样式的 CSS 文件或者使用自动加前缀的工具。",
      "pinyin": "yì bān huì yǐn rù yí ge chóng zhì yàng shì de CSS wén jiàn huò zhě shǐ yòng zì dòng jiā qián zuì de gōng jù.",
      "burmese": "များသောအားဖြင့် Formating reset လုပ်တဲ့ CSS ဖိုင်ကိုထည့်သုံးတာ ဒါမှမဟုတ် Auto prefix တပ်ပေးတဲ့ Tool ကိုသုံးကြတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_291",
      "hanzi": "你知道 JSON.stringify() 方法可以接收几个参数吗？",
      "pinyin": "nǐ zhī dào JSON.stringify() fāng fǎ kě yǐ jiē shōu jǐ ge cān shù ma?",
      "burmese": "JSON.stringify() method က Parameter ဘယ်နှစ်ခုလက်ခံလို့ရလဲဆိုတာ သင်သိပါသလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_292",
      "hanzi": "它可以接收三个参数，后面两个用来控制输出的格式。",
      "pinyin": "tā kě yǐ jiē shōu sān ge cān shù, hòu mian liǎng ge yòng lái kòng zhì shū chū de gé shì.",
      "burmese": "သူက Parameter ၃ ခုလက်ခံလို့ရတယ်၊ နောက်ကနှစ်ခုက ထုတ်မယ့် Format ကိုထိန်းချုပ်ဖို့သုံးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_293",
      "hanzi": "讲一讲你对 CSS 盒子模型（Box Model）的理解。",
      "pinyin": "jiǎng yi jiǎng nǐ duì CSS hé zi mó xǐng (Box Model) de lǐ jiě.",
      "burmese": "CSS Box Model နဲ့ပတ်သက်ပြီး သင်နားလည်ထားတာကိုပြောပြပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_294",
      "hanzi": "每个 HTML 元素都是一个盒子，包括内容、内边距、边框和外边距。",
      "pinyin": "měi ge HTML yuán sù dōu shì yí ge hé zi, bāo kuò nèi róng, nèi biān jù, biān kuàng hé wài biān jù.",
      "burmese": "HTML Element တိုင်းက သေတ္တာတစ်လုံးပါပဲ၊ အထဲမှာ Content, Padding, Border နဲ့ Margin တို့ပါတယ်",
      "category": "js_interview"
    },
    {
      "id": "hsk3_295",
      "hanzi": "如果你在开发中发现有内存泄漏问题，你怎么处理？",
      "pinyin": "rú guǒ nǐ zài kāi fā zhōng fā xiàn yǒu nèi cún xiè lòu wèn tí, nǐ zěn me chǔ lǐ?",
      "burmese": "အကယ်၍ Development လုပ်နေရင်း Memory leak ပြဿနာကိုတွေ့ရင်၊ သင်ဘယ်လိုဖြေရှင်းမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_296",
      "hanzi": "我会使用 Chrome 开发者工具里的 Memory 这一项去检查对象是否没被清理。",
      "pinyin": "wǒ huì shǐ yòng Chrome kāi fā zhě gōng jù lǐ de Memory zhè yí xiàng qù jiǎn chá duì xiàng shì fǒu méi bèi qīng lǐ.",
      "burmese": "Chrome Developer Tools ထဲက Memory ဆိုတဲ့အပိုင်းကိုသုံးပြီး Object တွေရှင်းမခံရဘဲကျန်နေလားဆိုတာ သွားစစ်ပါ့မယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_297",
      "hanzi": "在 Git 中，merge 和 rebase 有什么区别？",
      "pinyin": "zài Git zhōng, merge hé rebase yǒu shén me qū bié?",
      "burmese": "Git မှာ merge နဲ့ rebase ဘာကွာခြားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_298",
      "hanzi": "都能合并代码，但是 rebase 后的提交历史看起来更干净没有分叉。",
      "pinyin": "dōu néng hé bìng dài mǎ, dàn shì rebase hòu de tí jiāo lì shǐ kàn qǐ lái gèng gān jìng méi yǒu fēn chā.",
      "burmese": "နှစ်ခုလုံး Code ပေါင်းပေးနိုင်တယ်၊ ဒါပေမယ့် rebase လုပ်ပြီးရင် Commit သမိုင်းကြောင်းက လမ်းခွဲမရှိဘဲပိုသပ်ရပ်နေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_299",
      "hanzi": "为什么现在的项目更喜欢用单页面应用 (SPA)？",
      "pinyin": "wèi shén me xiàn zài de xiàng mù gèng xǐ huan yòng dān yè miàn yìng yòng (SPA)?",
      "burmese": "ဘာကြောင့်အခုခေတ် Project တွေက Single Page Application (SPA) ကိုသုံးဖို့ပိုသဘောကျကြတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_300",
      "hanzi": "因为点击页面的时候不需要重新加载整个网页，速度很快。",
      "pinyin": "yīn wèi diǎn jī yè miàn de shí hou bù xū yào chóng xīn jiā zǎi zhěng gè wǎng yè, sù dù hěn kuài.",
      "burmese": "ဘာလို့လဲဆိုတော့ စာမျက်နှာကိုကလစ်နှိပ်လိုက်တဲ့အခါ ဝက်ဘ်ဆိုဒ်တစ်ခုလုံးကိုပြန် Load လုပ်စရာမလိုလို့ပါ၊ အမြန်နှုန်းအရမ်းမြန်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_301",
      "hanzi": "如果发现一个网页打开很慢，你会先检查什么？",
      "pinyin": "rú guǒ fā xiàn yí ge wǎng yè dǎ kāi hěn màn, nǐ huì xiān jiǎn chá shén me?",
      "burmese": "ဝက်ဘ်ဆိုဒ်တစ်ခုပွင့်တာအရမ်းနှေးနေတယ်ဆိုတာကိုတွေ့ရင်၊ မင်းဘာကိုအရင်ဆုံးစစ်ဆေးမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_302",
      "hanzi": "我会打开网络面板检查是不是图片或者字体太大了。",
      "pinyin": "wǒ huì dǎ kāi wǎng luò miàn bǎn jiǎn chá shì bu shì tuú piàn huò zhě zì tǐ tài dà le.",
      "burmese": "ငါ Network panel ကိုဖွင့်ပြီး ပုံတွေဒါမှမဟုတ် ဖောင့်တွေအရမ်းကြီးနေလားဆိုတာ စစ်ဆေးပါ့မယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_303",
      "hanzi": "你理解 JavaScript 的作用域链是什么概念吗？",
      "pinyin": "nǐ lǐ jiě JavaScript de zuò yòng yù liàn shì shén me gài niàn ma?",
      "burmese": "JavaScript ရဲ့ Scope chain ဆိုတဲ့သဘောတရားကို မင်းနားလည်လား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_304",
      "hanzi": "就是找变量的时候，从里面的作用域一层一层往外找。",
      "pinyin": "jiù shì zhǎo biàn liàng de shí hou, cóng lǐ miàn de zuò yòng yù yì céng yì céng wǎng wài zhǎo.",
      "burmese": "Variable ကိုရှာတဲ့အခါ၊ အတွင်းဘက် scope ကနေ အပြင်ဘက်ကို တစ်လွှာပြီးတစ်လွှာရှာဖွေသွားတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_305",
      "hanzi": "请问前端路由，像 Vue Router 主要是怎么实现的？",
      "pinyin": "qǐng wèn qián duān lù yóu, xiàng Vue Router zhǔ yào shì zěn me shí xiàn de?",
      "burmese": "Vue Router ဆိုတဲ့ Frontend routing ကို ဖြေကြားပေးပါ၊ အဓိကအားဖြင့် ဘယ်လိုလုပ်ဆောင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_306",
      "hanzi": "通常是根据浏览器的哈希（Hash）或者历史记录（History）模式。",
      "pinyin": "tōng cháng shì gēn jù liú lǎn qì de hā xī (Hash) huò zhě lì shǐ jì lù (History) mó shì.",
      "burmese": "များသောအားဖြင့် Browser ရဲ့ Hash ဒါမှမဟုတ် History mode ပေါ်မူတည်ပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_307",
      "hanzi": "你觉得单向数据流和双向绑定的框架哪个更好用？",
      "pinyin": "nǐ jué de dān xiàng shù jù liú hé shuāng xiàng bǎng dìng de kuāng jià nǎ ge gèng hǎo yòng?",
      "burmese": "Unidirectional data flow နဲ့ Two-way binding framework တွေထဲက ဘယ်ဟာကသုံးရပိုကောင်းတယ်လို့ထင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_308",
      "hanzi": "各有各的好处，但我更喜欢单向数据流，因为修改起来很清楚。",
      "pinyin": "gè yǒu gè de hǎo chù, dàn wǒ gèng xǐ huan dān xiàng shù jù liú, yīn wèi xiū gǎi qǐ lái hěn qīng chu.",
      "burmese": "တစ်ခုစီမှာသူ့အားသာချက်နဲ့သူရှိတယ်၊ ဒါပေမယ့် ငါ Unidirectional data flow ကိုပိုသဘောကျတယ်၊ ဘာလို့လဲဆိုတော့ ပြင်ရတဲ့အခါအရမ်းရှင်းလင်းလို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_309",
      "hanzi": "为什么在使用 map 遍历列表渲染时需要加上 key？",
      "pinyin": "wèi shén me zài shǐ yòng map biàn lì liè biǎo xuàn rǎn shí xū yào jiā shang key?",
      "burmese": "List rendering မှာ map ကိုသုံးပြီးပတ်တဲ့အခါ ဘာလို့ key ကိုထည့်ပေးဖို့လိုတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_310",
      "hanzi": "加上 key 可以让虚拟 DOM 更快地找到需要更新的元素。",
      "pinyin": "jiā shang key kě yǐ ràng xū nǐ DOM gèng kuài de zhǎo dào xū yào gēng xīn de yuán sù.",
      "burmese": "Key ကိုထည့်ပေးတာက Virtual DOM ကို Update လုပ်ဖို့လိုအပ်တဲ့ Element ကို ပိုမြန်မြန်ရှာတွေ့စေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_311",
      "hanzi": "在 React 里面，组件的生命周期都有哪几个阶段？",
      "pinyin": "zài React lǐ miàn, zǔ jiàn de shēng mìng zhōu qī dōu yǒu nǎ jǐ ge jiē duàn?",
      "burmese": "React ထဲမှာ Component ရဲ့ Lifecycle မှာ ဘယ်အဆင့်တွေရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_312",
      "hanzi": "主要分为三个阶段：挂载、更新和卸载阶段。",
      "pinyin": "zhǔ yào fēn wèi sān ge jiē duàn: guà zǎi, gēng xīn hé xiè zǎi jiē duàn.",
      "burmese": "အဓိကအားဖြင့် အဆင့် ၃ ဆင့်ခွဲထားတယ်- Mounting, Updating နဲ့ Unmounting အဆင့်တွေပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_313",
      "hanzi": "你能说出几种阻止事件冒泡的方法吗？",
      "pinyin": "nǐ néng shuō chū jǐ zhǒng zǔ zhǐ shì jiàn mào pào de fāng fǎ ma?",
      "burmese": "Event bubbling ကိုတားဆီးတဲ့နည်းလမ်းအချို့ကို ပြောပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_314",
      "hanzi": "一般使用 event.stopPropagation() 方法就可以阻止冒泡。",
      "pinyin": "yì bān shǐ yòng event.stopPropagation() fāng fǎ jiù kě yǐ zǔ zhǐ mào pào.",
      "burmese": "များသောအားဖြင့် event.stopPropagation() method ကိုသုံးလိုက်ရင် Bubbling ကိုတားလို့ရပါပြီ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_315",
      "hanzi": "当你遇到特别难的技术问题，你的解决办法是什么？",
      "pinyin": "dāng nǐ yù dào tè bié nán de jì shù wèn tí, nǐ de jiě jué bàn fǎ shì shén me?",
      "burmese": "အထူးတလည်ခက်ခဲတဲ့နည်းပညာပြဿနာကိုကြုံရတဲ့အခါ မင်းရဲ့ဖြေရှင်းနည်းကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_316",
      "hanzi": "我会画图分析它的逻辑或者查阅官方网站的文章。",
      "pinyin": "wǒ huì huà tú fān xī tā de luó ji huò zhě chá yuè guān fāng wǎng zhàn de wén zhāng.",
      "burmese": "အဲ့ဒါရဲ့ Logic ကိုလေ့လာသုံးသပ်ဖို့ ပုံဆွဲမယ် ဒါမှမဟုတ် Official website ကဆောင်းပါးတွေကို သွားဖတ်ပါ့မယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_317",
      "hanzi": "什么是严格模式（Strict Mode）？它有什么用？",
      "pinyin": "shén me shì yán gé mó shì (Strict Mode)? tā yǒu shén me yòng?",
      "burmese": "Strict mode (တင်းကျပ်သောစနစ်) ဆိုတာဘာလဲ? အဲ့ဒါကဘာအတွက်အသုံးဝင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_318",
      "hanzi": "开启以后，浏览器会对代码有一些更严格的检查，这有助于减少错误。",
      "pinyin": "kāi qǐ yǐ hòu, liú lǎn qì huì duì dài mǎ yǒu yì xiē gèng yán gé de jiǎn chá, zhè yǒu zhù yú jiǎn shǎo cuò wù.",
      "burmese": "ဖွင့်ပြီးသွားရင်၊ Browser က Code အပေါ်မှာ ပိုမိုတင်းကြပ်တဲ့စစ်ဆေးမှုရှိလာပြီး၊ အမှားတွေကိုလျှော့ချဖို့ အထောက်အကူပြုတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_319",
      "hanzi": "解释一下 JavaScript 中的变量提升（Hoisting）现象。",
      "pinyin": "jiě shì yí xià JavaScript zhōng de biàn liàng tí shēng (Hoisting) xiàn xiàng.",
      "burmese": "JavaScript ထဲက Variable hoisting ဆိုတဲ့ဖြစ်စဉ်ကို ရှင်းပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_320",
      "hanzi": "就是在代码执行前，浏览器会把 var 的声明提到文件最前面。",
      "pinyin": "jiù shì zài dài mǎ zhí xíng qián, liú lǎn qì huì bǎ var de shēng míng tí dào wén jiàn zuì qián mian.",
      "burmese": "Code မ Run ခင်လေးမှာ၊ Browser က var ရဲ့ကြေညာချက်ကို ဖိုင်ရဲ့အရှေ့ဆုံးကိုမြှောက်တင်လိုက်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_321",
      "hanzi": "如果是 const 声明的对象，我们可以增加或者删除里面的属性吗？",
      "pinyin": "rú guǒ shì const shēng míng de duì xiàng, wǒ men kě yǐ zēng jiā huò zhě shān chú lǐ miàn de shǔ xìng ma?",
      "burmese": "const နဲ့ကြေညာထားတဲ့ Object တစ်ခုဆိုရင်၊ အဲဒီထဲကအချက်တွေကို ငါတို့အသစ်ထည့်တာ ဒါမှမဟုတ် ဖျက်တာလုပ်လို့ရလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_322",
      "hanzi": "可以的，因为 const 只限制变量指向的内存地址不改变。",
      "pinyin": "kě yǐ de, yīn wèi const zhǐ xiàn zhì biàn liàng zhǐ xiàng de nèi cún dì zhǐ bù gǎi biàn.",
      "burmese": "ရပါတယ်၊ ဘာလို့လဲဆိုတော့ const က Variable ညွှန်ပြနေတဲ့ Memory လိပ်စာကိုပဲ မပြောင်းဖို့ကန့်သတ်ထားလို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_323",
      "hanzi": "在移动端开发时怎么解决屏幕大小不一样的问题？",
      "pinyin": "zài yí dòng duān kāi fā shí zěn me jiě jué píng mù dà xiǎo bù yí yàng de wèn tí?",
      "burmese": "Mobile-end ကို Develop လုပ်တဲ့အခါ မျက်နှာပြင်အရွယ်အစားမတူညီတဲ့ပြဿနာကို ဘယ်လိုဖြေရှင်းလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_324",
      "hanzi": "一般使用 rem 或 vw 这样的单位取代 px 来做响应式的设计。",
      "pinyin": "yì bān shǐ yòng rem huò vw zhè yàng de dān wèi qǔ dài px lái zuò xiǎng yìng shì de shè jì.",
      "burmese": "အများအားဖြင့် px နေရာမှာ rem ဒါမှမဟုတ် vw လို Unit တွေကိုအစားထိုးသုံးပြီး Responsive design ဆွဲကြတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_325",
      "hanzi": "谈谈你对 Vue 或 React 组件之间传数据的了解。",
      "pinyin": "tán tan nǐ duì Vue huò React zǔ jiàn zhī jiān chuán shù jù de liǎo jiě.",
      "burmese": "Vue ဒါမှမဟုတ် React ရဲ့ Component တွေကြားမှာ Data ပို့လွှတ်ဖြန့်ဝေပုံနဲ့ပတ်သက်ပြီး သင်နားလည်ထားတာလေးပြောပြပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_326",
      "hanzi": "父子组件就通过 Props 传，要是距离远就用 Context 或状态管理库。",
      "pinyin": "fù zǐ zǔ jiàn jiù tōng guò Props chuán, yào shì jù lí yuǎn jiù yòng Context huò zhuàng tài guǎn lǐ kù.",
      "burmese": "Parent-child Component ကတော့ Props ကတစ်ဆင့်ပို့တယ်၊ အကယ်၍ ဝေးတယ်ဆိုရင်တော့ Context ဒါမှမဟုတ် State Management Library တွေကိုသုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_327",
      "hanzi": "当后端还没有把接口写好的时候，前端应该怎么办？",
      "pinyin": "dāng hòu duān hái méi yǒu bǎ jiē kǒu xiě hǎo de shí hou, qián duān yīng gāi zěn me bàn?",
      "burmese": "Backend API အဆင်မသင့်သေးတဲ့အချိန်၊ Frontend ကနေဘာလုပ်သင့်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_328",
      "hanzi": "我们可以自己使用 Mock 数据先进行页面的开发测试。",
      "pinyin": "wǒ men kě yǐ zì jǐ shǐ yòng Mock shù jù xiān jìn xíng yè miàn de kāi fā cè shì.",
      "burmese": "ကျွန်တော်တို့ကိုယ်တိုင် Mock data တွေကိုသုံးပြီး စာမျက်နှာ Development test ကိုအရင်လုပ်လို့ရပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_329",
      "hanzi": "你觉得写单元测试 (Unit Test) 需要花太多时间吗？",
      "pinyin": "nǐ jué de xiě dān yuán cè shì (Unit Test) xū yào huā tài duō shí jiān ma?",
      "burmese": "Unit test ရေးဖို့ အချိန်အများကြီးပေးရတယ်လို့မင်းထင်လား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_330",
      "hanzi": "开始会花一些时间，但以后可以减少出大问题的机会。",
      "pinyin": "kāi shǐ huì huā yì xiē shí jiān, dàn yǐ hòu kě yǐ jiǎn shǎo chū dà wèn tí de jī huì.",
      "burmese": "အစပိုင်းတော့ အချိန်နည်းနည်းပေးရလိမ့်မယ်၊ ဒါပေမယ့် နောက်ပိုင်းတော့ ပြဿနာကြီးကြီးမားမားဖြစ်နိုင်ချေကိုလျှော့ချပေးနိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_331",
      "hanzi": "你能够解释什么是函数的柯里化 (Currying) 吗？",
      "pinyin": "nǐ néng gòu jiě shì shén me shì hán shù de kē lǐ huà (Currying) ma?",
      "burmese": "Function currying ဆိုတာဘာလဲဆိုတာ မင်းရှင်းပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_332",
      "hanzi": "顾名思义，它把一个有几个参数的函数变成一个只收一部分参数的函数。",
      "pinyin": "gù míng sī yì, tā bǎ yí ge yǒu jǐ ge cān shù de hán shù biàn chéng yí ge zhǐ shōu yí bù fèn cān shù de hán shù.",
      "burmese": "နာမည်ကိုကြည့်ပြီးသိနိုင်တာက၊ သူက Parameter အများကြီးရှိတဲ့ Function ကို တစ်စိတ်တစ်ပိုင်း Parameter တွေပဲလက်ခံတဲ့ Function အဖြစ်ပြောင်းလိုက်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_333",
      "hanzi": "用 CSS 实现一个三角形，你会怎么切入思考？",
      "pinyin": "yòng CSS shí xiàn yí ge sān jiǎo xíng, nǐ huì zěn me qiē rù sī kǎo?",
      "burmese": "CSS ကိုသုံးပြီး တြိဂံတစ်ခုလုပ်ပြဖို့ကို၊ မင်းဘယ်လိုရှုထောင့်ကနေစဉ်းစားမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_334",
      "hanzi": "通过设置宽和高为 0，然后利用边框（border）的颜色差异做出来。",
      "pinyin": "tōng guò shè zhì kuān hé gāo wèi 0, rán hòu lì yòng biān kuàng (border) de yán sè chā yì zuò chū lái.",
      "burmese": "အကျယ်နဲ့အမြင့်ကို 0 လို့သတ်မှတ်ပြီးတော့ Border ရဲ့အရောင်ခြားနားမှုကိုအသုံးချပြီး လုပ်လို့ရပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_335",
      "hanzi": "听说你有性能优化的经验，能具体分享一招吗？",
      "pinyin": "tīng shuō nǐ yǒu xìng néng yōu huà de jīng yàn, néng jù tǐ fēn xiǎng yì zhāo ma?",
      "burmese": "မင်းမှာ Performance optimization လုပ်တဲ့အတွေ့အကြုံရှိတယ်ဆိုလို့၊ အသေးစိတ်အကွက်လေးတစ်ခုလောက် မျှဝေပေးလို့ရမလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_336",
      "hanzi": "比如对于很长的列表我们只渲染屏幕能看见的哪一部分（虚拟列表）。",
      "pinyin": "bǐ rú duì yú hěn cháng de liè biǎo wǒ men zhǐ xuàn rǎn píng mù néng kàn jiàn de nǎ yí bù fen (xū nǐ liè biǎo).",
      "burmese": "ဥပမာ အရမ်းရှည်တဲ့ List တွေမှာဆိုရင် ငါတို့မျက်နှာပြင်ကနေမြင်နိုင်တဲ့အပိုင်းကိုပဲ Render လုပ်တာမျိုးပါ (Virtual List)။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_337",
      "hanzi": "请问你在本地开发环境碰见过跨域拦截，你是怎么配置的？",
      "pinyin": "qǐng wèn nǐ zài běn dì kāi fā huán jìng pèng jiàn guò kuà yù lán jié, nǐ shì zěn me pèi zhì de?",
      "burmese": "Local Development 환경မှာ Cross-origin blocked ဖြစ်တာမျိုးကြုံဖူးလား၊ မင်းအဲ့ဒါကိုဘယ်လို Configure လုပ်ခဲ့လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_338",
      "hanzi": "我们一般在把脚手架里面的 proxy 配置设好，通过代理去请求外部的接口。",
      "pinyin": "wǒ men yì bān zài bǎ jiǎo shǒu jià lǐ miàn de proxy pèi zhì shè hǎo, tōng guò dài lǐ qù qǐng qiú wài bù de jiē kǒu.",
      "burmese": "များသောအားဖြင့် Scaffold ထဲက Proxy configuration ချိန်ပြီး၊ ကိုယ်စားလှယ်ကနေတစ်ဆင့် အပြင်က API ကို Request လုပ်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_339",
      "hanzi": "在工作中如果产品经理临时加入新需求，你该如何处理？",
      "pinyin": "zài gōng zuò zhōng rú guǒ chǎn pǐn jīng lǐ lín shí jiā rù xīn xū qiú, nǐ gāi rú hé chǔ lǐ?",
      "burmese": "အလုပ်လုပ်နေစဉ်မှာ Project Manager က ရုတ်တရက် Requirement အသစ်ထပ်ထည့်လာရင်၊ မင်းဘယ်လိုကိုင်တွယ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_340",
      "hanzi": "先看任务复不复杂，如果占用很多时间，就需要和经理商量必须推迟几天。",
      "pinyin": "xiān kàn rèn wu fù bù fù zá, rú guǒ zhàn yòng hěn duō shí jiān, jiù xū yào hé jīng lǐ shāng liang bì xū tuī chí jǐ tiān.",
      "burmese": "Task ကရှုပ်ထွေးလားအရင်ကြည့်မယ်၊ အကယ်၍အချိန်အများကြီးယူရမယ်ဆိုရင်၊ နေ့ရက်အနည်းငယ်တော့ ကျိန်းသေပေါက်ရွှေ့ဆိုင်းရမယ်ဆိုတဲ့အကြောင်း မန်နေဂျာနဲ့တိုင်ပင်ရမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_341",
      "hanzi": "你知道如何判断一个空的对象吗？",
      "pinyin": "nǐ zhī dào rú hé pàn duàn yí ge kōng de duì xiàng ma?",
      "burmese": "Object အလွတ်တစ်ခုကို ဘယ်လိုဆုံးဖြတ်ရလဲဆိုတာ မင်းသိပါသလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_342",
      "hanzi": "最简单的办法是利用 Object.keys() 看一下长度是不是等于零。",
      "pinyin": "zuì jiǎn dān de bàn fǎ shì lì yòng Object.keys() kàn yí xià cháng dù shì bu shì děng yú líng.",
      "burmese": "အလွယ်ဆုံးနည်းကတော့ Object.keys() ကိုသုံးပြီး အရှည်က 0 နဲ့ညီမညီကြည့်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_343",
      "hanzi": "如果你遇到同事写的代码特别乱，你会直接跟他说吗？",
      "pinyin": "rú guǒ nǐ yù dào tóng shì xiě de dài mǎ tè bié luàn, nǐ huì zhí jiē gēn tā shuō ma?",
      "burmese": "လုပ်ဖော်ကိုင်ဖက်ရေးထားတဲ့ Code ကအရမ်းရှုပ်ပွနေတာကြုံရရင်၊ မင်းသူ့ကိုတိုက်ရိုက်ပြောမှာလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_344",
      "hanzi": "平时可以在代码审查（Code Review）时客气一点提出修改的建议。",
      "pinyin": "píng shí kě yǐ zài dài mǎ shěn chá (Code Review) shí kè qi yì diǎn tí chū xiū gǎi de jiàn yì.",
      "burmese": "များသောအားဖြင့်တော့ Code Review လုပ်တဲ့အချိန် သဘောထားကြီးကြီးနဲ့ ပြင်ဖို့အကြံပြုချက်ကိုပြောပြလို့ရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_345",
      "hanzi": "在多人合作的项目中你们是怎么避免样式发生冲突的？",
      "pinyin": "zài duō rén hé zuò de xiàng mù zhōng nǐ men shì zěn me bì miǎn yàng shì fā shēng chōng tū de?",
      "burmese": "လူအများအတူတူပါဝင်လုပ်ဆောင်တဲ့ Project တွေမှာ မင်းတို့ Style တွေထပ်နေတာမျိုးမဖြစ်အောင်ဘယ်လိုရှောင်ရှားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_346",
      "hanzi": "最流行的做法是加上 CSS 模块 (CSS Modules) 就像戴上帽子一样区分它们。",
      "pinyin": "zuì liú xíng de zuò fǎ shì jiā shang CSS mó kuài (CSS Modules) jiù xiàng dài shang mào zi yí yàng qū fēn tā men.",
      "burmese": "ခေတ်အမီဆုံးအလေ့အကျင့်ကတော့ ဦးထုပ်လေးဆောင်းပေးပြီး ခွဲခြားပေးတဲ့ CSS Modules မှည့်ခေါ်တာကိုသုံးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_347",
      "hanzi": "为什么要在开发中使用 ESLint 等工具呢？",
      "pinyin": "wèi shén me yào zài kāi fā zhōng shǐ yòng ESLint děng gōng jù ne?",
      "burmese": "Development လုပ်ရာမှာ ESLint လိုမျိုး Tool တွေကိုဘာကြောင့်သုံးရတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_348",
      "hanzi": "它能统一团队所有人的代码风格并且发现部分潜伏的问题。",
      "pinyin": "tā néng tǒng yī tuán duì suǒ yǒu rén de dài mǎ fēng gé bìng qiě fā xiàn bù fen qián fú de wèn tí.",
      "burmese": "သူကအဖွဲ့သားအားလုံးရဲ့ Code style ကို တစ်ပြေးညီဖြစ်စေပြီးတော့ ခိုအောင်းနေတဲ့ပြဿနာအချို့ကို ရှာတွေ့စေပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_349",
      "hanzi": "面试快结束了，你对我们的工作内容还有什么要了解的吗？",
      "pinyin": "miàn shì kuài jié shù le, nǐ duì wǒ men de gōng zuò nèi róng hái yǒu shén me yào liǎo jiě de ma?",
      "burmese": "အင်တာဗျူးပြီးတော့မယ်၊ ကျွန်တော်တို့ရဲ့အလုပ်နဲ့ပတ်သက်ပြီး မင်းဘာသိချင်သေးလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_350",
      "hanzi": "我想知道这里前端团队使用的是哪种具体的技术栈。",
      "pinyin": "wǒ xiǎng zhī dào zhè lǐ qián duān tuán duì shǐ yòng de shì nǎ zhǒng jù tǐ de jì shù zhàn.",
      "burmese": "ဒီက Frontend အဖွဲ့က ဘယ်လိုTechnology Stack အမျိုးအစားကို တိတိကျကျသုံးလဲဆိုတာ ကျွန်တော်သိချင်ပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_351",
      "hanzi": "如果接口返回的数据很慢，你觉得应该怎么处理？",
      "pinyin": "rú guǒ jiē kǒu fǎn huí de shù jù hěn màn, nǐ jué de yīng gāi zěn me chǔ lǐ?",
      "burmese": "အကယ်၍ API ကပြန်လာတဲ့ Data တွေအရမ်းနှေးနေရင်၊ ဘယ်လိုကိုင်တွယ်သင့်တယ်လို့မင်းထင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_352",
      "hanzi": "我们可以先给用户显示一个骨架屏，让他们知道正在加载中。",
      "pinyin": "wǒ men kě yǐ xiān gěi yòng hù xiǎn shì yí ge gǔ jià píng, ràng tā men zhī dào zhèng zài jiā zǎi zhōng.",
      "burmese": "ကျွန်တော်တို့ User ကို Skeleton screen လေးအရင်ပြထားပြီး Load လုပ်နေတယ်ဆိုတာ သူတို့ကိုသိစေနိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_353",
      "hanzi": "在使用 Git 的时候，你一般怎么处理代码冲突？",
      "pinyin": "zài shǐ yòng Git de shí hou, nǐ yì bān zěn me chǔ lǐ dài mǎ chōng tū?",
      "burmese": "Git ကိုအသုံးပြုတဲ့အခါ၊ မင်းများသောအားဖြင့် Code တွေ Conflict ဖြစ်တာကို ဘယ်လိုဖြေရှင်းလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_354",
      "hanzi": "我会和同事商量一下，然后决定保留哪一部分的内容。",
      "pinyin": "wǒ huì hé tóng shì shāng liang yí xià, rán hòu jué dìng bǎo liú nǎ yí bù fen de nèi róng.",
      "burmese": "ငါလုပ်ဖော်ကိုင်ဖက်နဲ့ တစ်ချက်လောက်တိုင်ပင်ပြီးတော့၊ ဘယ်အပိုင်းကိုသိမ်းထားရမလဲဆိုတာ ဆုံးဖြတ်ပါ့မယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_355",
      "hanzi": "你觉得箭头函数和普通的函数最大的区别是什么？",
      "pinyin": "nǐ jué de jiàn tóu hán shù hé pǔ tōng de hán shù zuì dà de qū bié shì shén me?",
      "burmese": "Arrow function နဲ့ သာမန် Function ရဲ့ အကြီးမားဆုံးကွာခြားချက်က ဘာလို့မင်းထင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_356",
      "hanzi": "除了写起来简单，最重要的是它的 this 是不能改变的。",
      "pinyin": "chú le xiě qǐ lái jiǎn dān, zuì zhòng yào de shì tā de this shì bù néng gǎi biàn de.",
      "burmese": "ရေးရတာလွယ်ကူတဲ့အပြင်၊ အရေးအကြီးဆုံးကတော့ သူ့ရဲ့ this ကိုပြောင်းလဲလို့မရပါဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_357",
      "hanzi": "你能向我解释一下 DOM 树的作用吗？",
      "pinyin": "nǐ néng xiàng wǒ jiě shì yí xià DOM shù de zuò yòng ma?",
      "burmese": "DOM tree ရဲ့လုပ်ဆောင်ချက်ကို ငါ့ကိုရှင်းပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_358",
      "hanzi": "它是把 HTML 代码变成一个对象的结构，方便我们通过代码去修改它。",
      "pinyin": "tā shì bǎ HTML dài mǎ biàn chéng yí ge duì xiàng de jié gòu, fāng biàn wǒ men tōng guò dài mǎ qù xiū gǎi tā.",
      "burmese": "ဒါက HTML code တွေကို Object structure အဖြစ်ပြောင်းပေးတာပါ၊ ကျွန်တော်တို့ Code ကနေတစ်ဆင့်သွားပြင်ဖို့ အဆင်ပြေအောင်ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_359",
      "hanzi": "如果你发现网站有很多人同时访问，前端要做什么准备？",
      "pinyin": "rú guǒ nǐ fā xiàn wǎng zhàn yǒu hěn duō rén tóng shí fǎng wèn, qián duān yào zuò shén me zhǔn bèi?",
      "burmese": "အကယ်၍ဝက်ဘ်ဆိုဒ်ကို တစ်ချိန်တည်းမှာ လူအများကြီးလာကြည့်မယ်ဆိုတာကိုတွေ့ရင်၊ Frontend ဘက်ကဘာပြင်ဆင်ထားရမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_360",
      "hanzi": "我们可以使用 CDN 把静态文件放在离用户更近的地方。",
      "pinyin": "wǒ men kě yǐ shǐ yòng CDN bǎ jìng tài wén jiàn fàng zài lí yòng hù gèng jìn de dì fang.",
      "burmese": "ကျွန်တော်တို့ CDN သုံးပြီးတော့ Static file တွေကို User နဲ့ပိုနီးတဲ့နေရာမှာ ထားပေးလို့ရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_361",
      "hanzi": "请告诉我你知道的集中用来保存网页数据的技术。",
      "pinyin": "qǐng gào su wǒ nǐ zhī dào de jí zhōng yòng lái bǎo cún wǎng yè shù jù de jì shù.",
      "burmese": "ဝက်ဘ်ဆိုဒ် Data တွေကိုသိမ်းထားဖို့ တစုတစည်းတည်းအသုံးပြုတဲ့ နည်းပညာတွေအကြောင်း မင်းသိတာလေး ပြောပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_362",
      "hanzi": "我用过 Cookie，以及后来的 local storage 和 session storage。",
      "pinyin": "wǒ yòng guò Cookie, yǐ jí hòu lái de local storage hé session storage.",
      "burmese": "ငါ Cookie ကိုသုံးဖူးတယ်၊ ပြီးတော့ နောက်ပိုင်း local storage နဲ့ session storage တွေရောပဲ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_363",
      "hanzi": "如果在 React 或者 Vue 里改变数组里的对象应该怎么做？",
      "pinyin": "rú guǒ zài React huò zhě Vue lǐ gǎi biàn shǔ zǔ lǐ de duì xiàng yīng gāi zěn me zuò?",
      "burmese": "অကယ်၍ React ဒါမှမဟုတ် Vue ထဲက Array ထဲက Object တွေကိုပြောင်းချင်ရင် ဘယ်လိုလုပ်ရမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_364",
      "hanzi": "最好不要直接改变旧的，而是生成一个新的数组送回去。",
      "pinyin": "zuì hǎo bú yào zhí jiē gǎi biàn jiù de, ér shì shēng chéng yí ge xīn de shǔ zǔ sòng huí qu.",
      "burmese": "အဟောင်းကိုတိုက်ရိုက်မပြောင်းတာ အကောင်းဆုံးပါပဲ၊ Array အသစ်တစ်ခုဖန်တီးပြီး ပြန်ပို့လိုက်ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_365",
      "hanzi": "可以说一下什么是防抖和节流吗？怎么区别它们俩？",
      "pinyin": "kě yǐ shuō yí xià shén me shì fáng dǒu hé jié liú ma? zěn me qū bié tā men liǎ?",
      "burmese": "Debounce နဲ့ Throttle ဆိုတာဘာလဲဆိုတာ ပြောပြလို့ရမလား? အဲ့နှစ်ခုကိုဘယ်လိုခွဲခြားမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_366",
      "hanzi": "防抖是等动作停下了才做，节流是每隔一段时间做一次。",
      "pinyin": "fáng dǒu shì děng dòng zuò tíng xià le cái zuò, jié liú shì měi gé yí duàn shí jiān zuò yí cì.",
      "burmese": "Debounce ကလုပ်ဆောင်မှုရပ်သွားတဲ့အထိစောင့်ပြီးမှလုပ်တာ၊ Throttle ကတော့ အချိန်တစ်ခုတိုင်းမှာ တစ်ကြိမ်လုပ်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_367",
      "hanzi": "你的上一个公司的代码质量如何？你觉得有什么缺点？",
      "pinyin": "nǐ de shàng yí ge gōng sī de dài mǎ zhì liàng rú hé? nǐ jué de yǒu shén me quē diǎn?",
      "burmese": "မင်းရဲ့အရင်ကုမ္ပဏီက Code အရည်အသွေးဘယ်လိုနေလဲ? ဘာအားနည်းချက်ရှိတယ်လို့မင်းထင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_368",
      "hanzi": "质量还算可以，缺点是我们缺少必要的单元测试。",
      "pinyin": "zhì liàng hái suàn kě yǐ, quē diǎn shì wǒ men quē shǎo bì yào de dān yuán cè shì.",
      "burmese": "အရည်အသွေးကအဆင်ပြေသေးတယ်၊ အားနည်းချက်ကတော့ ငါတို့မှာမရှိမဖြစ်လိုအပ်တဲ့ Unit test တွေလိုနေတာပါပဲ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_369",
      "hanzi": "你在工作遇到很多压力的时候一般怎么放松自己？",
      "pinyin": "nǐ zài gōng zuò yù dào hěn duō yā lì de shí hou yì bān zěn me fàng sōng zì jǐ?",
      "burmese": "အလုပ်မှာဖိအားတွေအများကြီးကြုံရတဲ့အခါ မင်းပုံမှန်အားဖြင့် ကိုယ့်ကိုယ်ကိုယ်ဘယ်လိုအပန်းဖြေလေ့ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_370",
      "hanzi": "我会去打打球，或者看一部轻松的电影来放松。",
      "pinyin": "wǒ huì qù dǎ da qiú, huò zhě kàn yí bù qīng sōng de diàn yǐng lái fàng sōng.",
      "burmese": "ငါဘောလုံးပဲသွားကန်ကန်၊ ဒါမှမဟုတ် ပေါ့ပါးတဲ့ရုပ်ရှင်တစ်ကားကိုကြည့်ပြီး အပန်းဖြေလေ့ရှိတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_371",
      "hanzi": "如果在发送 HTTP 请求的时候出现了 403 错误，这代表什么？",
      "pinyin": "rú guǒ zài fā sòng HTTP qǐng qiú de shí hou chū xiàn le 403 cuò wù, zhè dài biǎo shén me?",
      "burmese": "အကယ်၍ HTTP request ပို့တဲ့အခါ 403 error ပေါ်လာရင် ဒါကဘာကိုကိုယ်စားပြုတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_372",
      "hanzi": "这说明服务器明白了你的请求，但是因为你没有权限拒绝了要求。",
      "pinyin": "zhè shuō míng fú wù qī míng bai le nǐ de qǐng qiú, dàn shì yīn wèi nǐ méi yǒu quán xiàn jù jué le yāo qiú.",
      "burmese": "ဒါက Server ကမင်းရဲ့ Request ကိုနားလည်ပေမယ့်၊ မင်းမှာ Permission မရှိလို့ Request ကိုငြင်းပယ်လိုက်တာကိုဖော်ပြတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_373",
      "hanzi": "你觉得 TypeScript 中的 Interface 和 Type 有什么很大的不同？",
      "pinyin": "nǐ jué de TypeScript zhōng de Interface hé Type yǒu shén me hěn dà de bù tóng?",
      "burmese": "TypeScript ထဲက Interface နဲ့ Type ဟာ ဘယ်လိုကြီးမားတဲ့ကွာခြားချက်များရှိတယ်လို့မင်းထင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_374",
      "hanzi": "其实作用非常像，但是 Interface 可以合并，Type 不可以。",
      "pinyin": "qí shí zuò yòng fēi cháng xiàng, dàn shì Interface kě yǐ hé bìng, Type bù kě yǐ.",
      "burmese": "တကယ်တော့အလုပ်လုပ်ပုံကအရမ်းတူတယ်၊ ဒါပေမယ့် Interface က Merge လုပ်လို့ရပြီး Type ကတော့မရဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_375",
      "hanzi": "在使用 Webpack 打包的时候，你用过哪些常用的 loader？",
      "pinyin": "zài shǐ yòng Webpack dǎ bāo de shí hou, nǐ yòng guò nǎ xiē cháng yòng de loader?",
      "burmese": "Webpack ကိုသုံးပြီး Bundle လုပ်တဲ့အခါ၊ မင်းအသုံးများတဲ့ loader ဘာတွေသုံးဖူးလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_376",
      "hanzi": "比如用来处理样式的 css-loader 和 babel-loader 等等。",
      "pinyin": "bǐ rú yòng lái chǔ lǐ yàng shì de css-loader hé babel-loader děng deng.",
      "burmese": "ဥပမာ Style တွေကိုကိုင်တွယ်ဖို့သုံးတဲ့ css-loader နဲ့ babel-loader စတာတွေပေါ့။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_377",
      "hanzi": "什么是 CSS 里的伪类（Pseudo-class），你可以给我举个例子吗？",
      "pinyin": "shén me shì CSS lǐ de wěi lèi (Pseudo-class), nǐ kě yǐ gěi wǒ jǔ ge lì zi ma?",
      "burmese": "CSS ထဲက Pseudo-class ဆိုတာဘာလဲ၊ မင်းငါ့ကိုဥပမာတစ်ခုလောက်ပြပေးလို့ရမလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_378",
      "hanzi": "伪类表示元素的特殊状态，最常见的例子是 hover。",
      "pinyin": "wěi lèi biǎo shì yuán sù de tè shū zhuàng tài, zuì cháng jiàn de lì zi shì hover.",
      "burmese": "Pseudo-class က Element တွေရဲ့အထူးအခြေအနေကိုပြတာပါ၊ အတွေ့ရအများဆုံးဥပမာကတော့ hover ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_379",
      "hanzi": "你如何保证新加入团队的同事能快速了解项目？",
      "pinyin": "nǐ rú hé bǎo zhèng xīn jiā rù tuán duì de tóng shì néng kuài sù liǎo jiě xiàng mù?",
      "burmese": "အဖွဲ့ထဲအသစ်ရောက်လာတဲ့ လုပ်ဖော်ကိုင်ဖက်တွေက Project အကြောင်းကို အမြန်ဆုံးနားလည်နိုင်ဖို့ သင်ဘယ်လိုအာမခံမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_380",
      "hanzi": "我会写一份详细的说明文档，告诉他项目该怎么启动运行。",
      "pinyin": "wǒ huì xiě yí fèn xiáng xì de shuō míng wén dàng, gào su tā xiàng mù gāi zěn me qǐ dòng yùn xíng.",
      "burmese": "ငါအသေးစိတ်ကျတဲ့ လမ်းညွှန်စာရွက်စာတမ်းတစ်ခုရေးပြီး၊ Project ကိုဘယ်လို Run ရမလဲဆိုတာ သူ့ကိုပြောပြပါ့မယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_381",
      "hanzi": "前端工程师怎样才算是做好了和设计师的合作？",
      "pinyin": "qián duān gōng chéng shī zěn yàng cái suàn shì zuò hǎo le hé shè jì shī de hé zuò?",
      "burmese": "Frontend Engineer တစ်ယောက်အနေနဲ့ Designer နဲ့ပူးပေါင်းလုပ်ဆောင်တာကို ကောင်းကောင်းလုပ်နိုင်ပြီလို့ ဘယ်လိုသတ်မှတ်နိုင်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_382",
      "hanzi": "除了还原设计的样式和动画，还要提醒设计中可能有问题的地方。",
      "pinyin": "chú le huán yuán shè jì de yàng shì hé dòng huà, hái yào tí xǐng shè jì zhōng kě néng yǒu wèn tí de dì fang.",
      "burmese": "ဒီဇိုင်းရဲ့ Style နဲ့ Animation တွေကိုပြန်လည်ပုံဖော်ပေးရုံသာမကဘဲ၊ ဒီဇိုင်းထဲမှာ ပြဿနာရှိနိုင်တဲ့နေရာတွေကိုလည်း သတိပေးရပါမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_383",
      "hanzi": "为什么要尽量避免网页中出现很深层的 DOM 树？",
      "pinyin": "wèi shén me yào jìn liàng bì miǎn wǎng yè zhōng chū xiàn hěn shēn céng de DOM shù?",
      "burmese": "ဘာလို့ ဝက်ဘ်ဆိုဒ်ထဲမှာ အရမ်းနက်တဲ့ DOM Tree တွေပေါ်လာတာကို တတ်နိုင်သမျှရှောင်ရှားဖို့လိုတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_384",
      "hanzi": "因为太深的结构会让浏览器的计算速度变得非常慢。",
      "pinyin": "yīn wèi tài shēn de jié gòu huì ràng liú lǎn qì de jì suàn sù dù biàn de fēi cháng màn.",
      "burmese": "ဘာလို့လဲဆိုတော့ အရမ်းနက်တဲ့ Structure တွေက Browser ရဲ့ တွက်ချက်မှုအမြန်နှုန်းကို အရမ်းနှေးသွားစေလို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_385",
      "hanzi": "你知道怎么实现手机端常见的下拉刷新功能吗？",
      "pinyin": "nǐ zhī dào zěn me shí xiàn shǒu jī duān cháng jiàn de xià lā shuā xīn gōng néng ma?",
      "burmese": "Mobile ဘက်မှာ ခဏခဏတွေ့ရတဲ့ Pull-to-refresh ကိုဘယ်လိုလုပ်ရလဲဆိုတာ မင်းသိပါသလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_386",
      "hanzi": "可以通过记录手指滑动屏幕的距离来判断要不要更新数据。",
      "pinyin": "kě yǐ tōng guò jì lù shǒu zhǐ huá dòng píng mù de jù lí lái pàn duàn yào bú yào gēng xīn shù jù.",
      "burmese": "လက်ချောင်းနဲ့ Screen ကိုပွတ်ဆွဲတဲ့အကွာအဝေးကို မှတ်သားထားခြင်းကနေ Data ကို Update လုပ်သင့်မလုပ်သင့်ဆိုတာကို ဆုံးဖြတ်လို့ရပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_387",
      "hanzi": "如果公司有一个需要紧急上线的产品，你会怎么办？",
      "pinyin": "rú guǒ gōng sī yǒu yí ge xū yào jǐn jí shàng xiàn de chǎn pǐn, nǐ huì zěn me bàn?",
      "burmese": "အကယ်၍ကုမ္ပဏီမှာ အရေးပေါ်လွှင့်တင်ဖို့လိုတဲ့ Product တစ်ခုရှိရင်၊ မင်းဘယ်လိုလုပ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_388",
      "hanzi": "我会分清主次，把最核心的功能先做好上线，其余的后续更新。",
      "pinyin": "wǒ huì fēn qīng zhǔ cì, bǎ zuì hé xīn de gōng néng xiān zuò hǎo shàng xiàn, qí yú de hòu xù gēng xīn.",
      "burmese": "ငါအဓိကနဲ့သာမညကိုခွဲခြားပြီး၊ အဓိကအကျဆုံး Function တွေကိုအရင်ပြီးအောင်လုပ်ပြီးလွှင့်မယ်၊ ကျန်တာတွေကိုနောက်မှဆက် Update လုပ်မယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_389",
      "hanzi": "最后，你对未来三年的职业发展有什么规划吗？",
      "pinyin": "zuì hòu, nǐ duì wèi lái sān nián de zhí yè fā zhǎn yǒu shén me guī huà ma?",
      "burmese": "နောက်ဆုံးအနေနဲ့၊ နောင်သုံးနှစ်အတွက် အသက်မွေးဝမ်းကျောင်းတိုးတက်မှုနဲ့ပတ်သက်ပြီး မင်းမှာဘာအစီအစဉ်ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_390",
      "hanzi": "我希望能够成为团队的核心负责比较大的前端项目。",
      "pinyin": "wǒ xī wàng néng gòu chéng wéi tuán duì de hé xīn fù zé bǐ jiào dà de qián duān xiàng mù.",
      "burmese": "အဖွဲ့ရဲ့အဓိကကျတဲ့သူဖြစ်လာပြီး အတော်အသင့်ကြီးမားတဲ့ Frontend Project တွေကို တာဝန်ယူနိုင်ဖို့မျှော်လင့်ပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_391",
      "hanzi": "当你看到别人写的好代码时，你会做些什么？",
      "pinyin": "dāng nǐ kàn dào bié rén xiě de hǎo dài mǎ shí, nǐ huì zuò xiē shén me?",
      "burmese": "တခြားသူတွေရေးထားတဲ့ Code ကောင်းတွေကို မြင်တဲ့အခါ၊ မင်းဘာတွေလုပ်လေ့ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_392",
      "hanzi": "我会仔细研究它的逻辑，如果觉得好，就把它记在我的笔记里。",
      "pinyin": "wǒ huì zǐ xì yán jiū tā de luó ji, rú guǒ jué de hǎo, jiù bǎ tā jì zài wǒ de bǐ jì lǐ.",
      "burmese": "ငါအဲ့ဒါရဲ့ Logic ကိုသေချာလေ့လာမယ်၊ အကယ်၍ကောင်းတယ်ထင်ရင် ငါ့မှတ်စုထဲမှာမှတ်ထားလိုက်မယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_393",
      "hanzi": "如果你的工作做完了，你会主动帮助其他同事吗？",
      "pinyin": "rú guǒ nǐ de gōng zuò zuò wán le, nǐ huì zhǔ dòng bāng zhù qí tā tóng shì ma?",
      "burmese": "အကယ်၍မင်းအလုပ်လုပ်လို့ပြီးသွားပြီဆိုရင်၊ တခြားလုပ်ဖော်ကိုင်ဖက်တွေကို မင်းကိုယ်တိုင်ကမ်းလှမ်းပြီးကူညီပေးမှာလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_394",
      "hanzi": "当然会，团队是一个整体，只要我有时间我非常乐意帮忙。",
      "pinyin": "dāng rán huì, tuán duì shì yí ge zhěng tǐ, zhǐ yào wǒ yǒu shí jiān wǒ fēi cháng lè yì bāng máng.",
      "burmese": "သေချာပေါက်ကူညီမှာပေါ့၊ အဖွဲ့ဆိုတာတစ်သားတည်းပဲလေ၊ ငါအချိန်ရသရွေ့တော့ ငါအရမ်းကိုကူညီပေးချင်ပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_395",
      "hanzi": "可以分享一次你犯过的比较严重的错误吗？",
      "pinyin": "kě yǐ fēn xiǎng yí cì nǐ fàn guò de bǐ jiào yán zhòng de cuò wù ma?",
      "burmese": "မင်းလုပ်ခဲ့ဖူးတဲ့ တော်တော်လေးဆိုးရွားတဲ့ အမှားတစ်ခုအကြောင်း မျှဝေပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_396",
      "hanzi": "曾经因为没有仔细测试，导致线上的一个功能坏了一小时。",
      "pinyin": "céng jīng yīn wèi méi yǒu zǐ xì cè shì, dǎo zhì xiàn shang de yí ge gōng néng huài le yì xiǎo shí.",
      "burmese": "အရင်တုန်းကသေချာ Test မလုပ်ခဲ့တာကြောင့်၊ Live ပေါ်က Function တစ်ခု တစ်နာရီလောက်ပျက်သွားခဲ့ဖူးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_397",
      "hanzi": "那后来你是怎么解决这个问题的？有什么收获？",
      "pinyin": "nà hòu lái nǐ shì zěn me jiě jué zhè ge wèn tí de? yǒu shén me shōu huò?",
      "burmese": "ဒါဆို နောက်ပိုင်း မင်းဒီပြဿနာကို ဘယ်လိုဖြေရှင်းခဲ့လဲ? ဘာသင်ခန်းစာရခဲ့လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk3_398",
      "hanzi": "后来我们增加了上线前的自动测试，保证不再出现类似的问题。",
      "pinyin": "hòu lái wǒ men zēng jiā le shàng xiàn qián de zì dòng cè shì, bǎo zhèng bú zài chū xiàn lèi sì de wèn tí.",
      "burmese": "နောက်ပိုင်း ငါတို့ Live မလွှင့်ခင် Auto test လုပ်တာကိုထပ်တိုးလိုက်တယ်၊ ဆင်တူတဲ့ပြဿနာမျိုး ထပ်မပေါ်လာအောင်အာမခံပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_399",
      "hanzi": "好的，今天的面试就到这里，感谢你的时间！",
      "pinyin": "hǎo de, jīn tiān de miàn shì jiù dào zhè lǐ, gǎn xiè nǐ de shí jiān!",
      "burmese": "ကောင်းပါပြီ၊ ဒီနေ့အင်တာဗျူးကတော့ ဒီလောက်ပါပဲ၊ မင်းအချိန်အတွက်ကျေးဇူးတင်ပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_400",
      "hanzi": "感谢您给我这次机会，期待能收到您的好消息！",
      "pinyin": "gǎn xiè nín gěi wǒ zhè cì jī huì, qī dài néng shōu dào nín de hǎo xiāo xi!",
      "burmese": "ကျွန်တော်ကိုဒီအခွင့်အရေးပေးတဲ့အတွက်ကျေးဇူးတင်ပါတယ်၊ လူကြီးမင်းဆီကသတင်းကောင်းရဖို့ မျှော်လင့်ပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk3_401",
      "hanzi": "你觉得这家新开的饭馆跟以前我们去过的那家比，哪个更好？",
      "pinyin": "nǐ jué de zhè jiā xīn kāi de fàn guǎn gēn yǐ qián wǒ men qù guò de nà jiā bǐ, nǎ ge gèng hǎo?",
      "burmese": "ဒီဆိုင်အသစ်က အရင်ကငါတို့သွားခဲ့ဖူးတဲ့ဆိုင်နဲ့ယှဉ်ရင်၊ ဘယ်ဟာကပိုကောင်းတယ်လို့ မင်းထင်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_402",
      "hanzi": "我觉得这家饭馆里的环境比较安静，但是菜的味道没有另外一家好。",
      "pinyin": "wǒ jué de zhè jiā fàn guǎn lǐ de huán jìng bǐ jiào ān jìng, dàn shì cài de wèi dào méi yǒu lìng wài yī jiā hǎo.",
      "burmese": "ဒီဆိုင်ရဲ့ ပတ်ဝန်းကျင်ကပိုပြီးတိတ်ဆိတ်တယ်လို့ ငါထင်တယ်၊ ဒါပေမယ့် ဟင်းအရသာကတော့ နောက်တစ်ဆိုင်လောက် မကောင်းဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_403",
      "hanzi": "虽然外面的风非常大，但是为了买到他喜欢看的那本书，我还是出门了。",
      "pinyin": "suī rán wài miàn de fēng fēi cháng dà, dàn shì wèi le mǎi dào tā xǐ huan kàn de nà běn shū, wǒ hái shì chū mén le.",
      "burmese": "အပြင်မှာ လေအရမ်းတိုက်နေပေမယ့်၊ သူဖတ်ချင်တဲ့ အဲ့ဒီစာအုပ်ကိုဝယ်နိုင်ဖို့အတွက် ငါကတော့ အပြင်ထွက်ခဲ့တာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_404",
      "hanzi": "你太热心了，不过你得小心别感冒了，毕竟现在的天气变化太快。",
      "pinyin": "nǐ tài rè xīn le, bú guò nǐ děi xiǎo xīn bié gǎn mào le, bì jìng xiàn zài de tiān qì biàn huà tài kuài.",
      "burmese": "မင်းကအရမ်းစေတနာကောင်းတာပဲ၊ ဒါပေမယ့် အအေးမမိအောင် ဂရုစိုက်ရမယ်နော်၊ ဘာပဲဖြစ်ဖြစ် အခုရာသီဥတုက အပြောင်းအလဲအရမ်းမြန်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_405",
      "hanzi": "你能把黑板上的这些生词用英语给我解释一遍吗？我真的不太明白。",
      "pinyin": "nǐ néng bǎ hēi bǎn shang de zhè xiē shēng cí yòng Yīng yǔ gěi wǒ jiě shì yí biàn ma? wǒ zhēn de bú tài míng bai.",
      "burmese": "ကျောက်သင်ပုန်းပေါ်က ဒီစကားလုံးအသစ်တွေကို အင်္ဂလိပ်လိုတစ်ခေါက် ရှင်းပြပေးနိုင်မလား? ငါတကယ်သိပ်နားမလည်လို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_406",
      "hanzi": "当然可以，不过学习汉语最好不要总是翻译成英语，应该多用汉语去想。",
      "pinyin": "dāng rán kě yǐ, bú guò xué xí Hàn yǔ zuì hǎo bú yào zǒng shì fān yì chéng Yīng yǔ, yīng gāi duō yòng Hàn yǔ qù xiǎng.",
      "burmese": "ရတာပေါ့၊ ဒါပေမယ့် တရုတ်စာလေ့လာတဲ့အခါ အင်္ဂလိပ်လိုအမြဲပြန်မနေတာ အကောင်းဆုံးပဲ၊ တရုတ်လိုပိုတွေးသင့်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_407",
      "hanzi": "那个拿长雨伞的人好像在等人，他已经站在公交车站半个多小时了。",
      "pinyin": "nà ge ná cháng yǔ sǎn de rén hǎo xiàng zài děng rén, tā yǐ jīng zhàn zài gōng jiāo chē zhàn bàn ge duō xiǎo shí le.",
      "burmese": "အဲ့ဒီထီးအရှည်ကိုင်ထားတဲ့လူက လူစောင့်နေပုံရတယ်၊ သူဘတ်စ်ကားမှတ်တိုင်မှာ ရပ်နေတာ နာရီဝက်တောင်ကျော်သွားပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_408",
      "hanzi": "可能他要等的朋友错过了刚才的那辆公共汽车，所以才让他等了这么久。",
      "pinyin": "kě néng tā yào děng de péng yǒu cuò guò le gāng cái de nà liàng gōng gòng qì chē, suǒ yǐ cái ràng tā děng le zhè me jiǔ.",
      "burmese": "သူစောင့်နေမယ့်သူငယ်ချင်းက စောစောကဘတ်စ်ကား လွတ်သွားလို့ဖြစ်မယ်၊ ဒါကြောင့်သူ့ကို အဲ့လောက်ကြာကြာ စောင့်ခိုင်းထားတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_409",
      "hanzi": "我不但会说一点儿汉语，而且对中国历史也有非常浓厚的兴趣。",
      "pinyin": "wǒ bú dàn huì shuō yì diǎnr Hàn yǔ, ér qiě duì Zhōng guó lì shǐ yě yǒu fēi cháng nóng hòu de xìng qù.",
      "burmese": "ငါတရုတ်စကား နည်းနည်းပြောတတ်ရုံတင်မကဘူး၊ တရုတ်သမိုင်းကိုလည်း အရမ်းကိုစိတ်ဝင်စားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_410",
      "hanzi": "那太好了，这个周末我们学校有一个关于中国历史的文化节，你愿意参加吗？",
      "pinyin": "nà tài hǎo le, zhè ge zhòu mò wǒ men xué xiào yǒu yí ge guān yú Zhōng guó lì shǐ de wén huà jié, nǐ yuàn yì cān jiā ma?",
      "burmese": "ဒါဆိုအရမ်းကောင်းတာပေါ့၊ ဒီစနေတနင်္ဂနွေ ငါတို့ကျောင်းမှာ တရုတ်သမိုင်းနဲ့ပတ်သက်တဲ့ ယဉ်ကျေးမှုပွဲတော်ရှိတယ်၊ မင်းပါဝင်ချင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_411",
      "hanzi": "除了张老师以外，办公室里其他的老师都已经去吃午饭了。",
      "pinyin": "chú le Zhāng lǎo shī yǐ wài, bàn gōng shì lǐ qí tā de lǎo shī dōu yǐ jīng qù chī wǔ fàn le.",
      "burmese": "ဆရာကျန်းကလွဲပြီး ရုံးခန်းထဲက တခြားဆရာတွေအားလုံး နေ့လယ်စာသွားစားကြပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_412",
      "hanzi": "是因为他的工作还没完成吗？如果是这样，我们帮他带一份午饭回来吧。",
      "pinyin": "shì yīn wèi tā de gōng zuò hái méi wán chéng ma? rú guǒ shì zhè yàng, wǒ men bāng tā dài yí fèn wǔ fàn huí lái ba.",
      "burmese": "သူ့အလုပ်မပြီးသေးလို့များလား? အဲ့လိုဆိုရင် ငါတို့သူ့အတွက် နေ့လယ်စာတစ်ပွဲဝယ်လာပေးကြမယ်လေ။",
      "category": "daily"
    },
    {
      "id": "hsk3_413",
      "hanzi": "因为昨天晚上我的邻居办了一个很晚的聚会，所以我今天一直觉得很困。",
      "pinyin": "yīn wèi zuó tiān wǎn shang wǒ de lín jū bàn le yí ge hěn wǎn de jù huì, suǒ yǐ wǒ jīn tiān yì zhí jué de hěn kùn.",
      "burmese": "မနေ့ညက ငါ့အိမ်နီးချင်းက အရမ်းနောက်ကျတဲ့အထိ ပါတီလုပ်နေလို့၊ ဒီနေ့ငါတစ်ချိန်လုံး အိပ်ငိုက်နေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_414",
      "hanzi": "那你今天下午最好找个时间睡一个小时，不然晚上的工作会做不好的。",
      "pinyin": "nà nǐ jīn tiān xià wǔ zuì hǎo zhǎo ge shí jiān shuì yí ge xiǎo shí, bù rán wǎn shang de gōng zuò huì zuò bù hǎo de.",
      "burmese": "ဒါဆို မင်းဒီနေ့နေ့လယ် အချိန်ရှာပြီး တစ်နာရီလောက်အိပ်တာ အကောင်းဆုံးပဲ၊ မဟုတ်ရင် ညအလုပ်လုပ်တဲ့အခါ ကောင်းကောင်းလုပ်နိုင်မှာမဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_415",
      "hanzi": "你把我的那本红色的书放在哪儿了？我到处找了半天也没找到。",
      "pinyin": "nǐ bǎ wǒ de nà běn hóng sè de shū fàng zài nǎr le? wǒ dào chù zhǎo le bàn tiān yě méi zhǎo dào.",
      "burmese": "ငါ့ရဲ့အဲ့ဒီအနီရောင်စာအုပ်ကို မင်းဘယ်မှာထားလိုက်တာလဲ? ငါနေရာအနှံ့ အကြာကြီးရှာတာတောင် ရှာမတွေ့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_416",
      "hanzi": "啊，我想起来了，我把它放进我的包里，打算今天带给你。",
      "pinyin": "a, wǒ xiǎng qǐ lái le, wǒ bǎ tā fàng jìn wǒ de bāo lǐ, dǎ suàn jīn tiān dài gěi nǐ.",
      "burmese": "အာ ငါသတိရပြီ၊ ငါအဲ့ဒါကို လွယ်အိတ်ထဲထည့်ပြီး ဒီနေ့မင်းဆီယူလာပေးမလို့ စီစဉ်ထားတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_417",
      "hanzi": "这条街道比起我去年的来看的时候，变干净了很多，而且人也多了。",
      "pinyin": "zhè tiáo jiē dào bǐ qǐ wǒ qù nián de lái kàn de shí hou, biàn gān jìng le hěn duō, ér qiě rén yě duō le.",
      "burmese": "ဒီလမ်းက ငါမနှစ်ကလာကြည့်တုန်းကနဲ့ယှဉ်ရင်၊ အများကြီးသန့်ရှင်းသွားတယ်၊ ပြီးတော့ လူလည်းပိုများလာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_418",
      "hanzi": "只有把环境打扫干净，才能影响更多的人愿意来这里散步或者买东西啊。",
      "pinyin": "zhǐ yǒu bǎ huán jìng dǎ sǎo gān jìng, cái néng yǐng xiǎng gèng duō de rén yuàn yì lái zhè lǐ sàn bù huò zhě mǎi dōng xi a.",
      "burmese": "ပတ်ဝန်းကျင်ကို သန့်ရှင်းရေးလုပ်ထားမှပဲ၊ လူပိုများများ ဒီမှာလမ်းလာလျှောက်ဖို့ ဒါမှမဟုတ် စျေးဝယ်ဖို့ကို ဆွဲဆောင်နိုင်မှာလေ။",
      "category": "daily"
    },
    {
      "id": "hsk3_419",
      "hanzi": "我的电脑突然被黑客弄坏了，里面的重要文件可能都没办法找回来了。",
      "pinyin": "wǒ de diàn nǎo tū rán bèi hēi kè nòng huài le, lǐ miàn de zhòng yào wén jiàn kě néng dōu méi bàn fǎ zhǎo huí lái le.",
      "burmese": "ငါ့ကွန်ပျူတာ ရုတ်တရက်ဟက်ကာကြောင့် ပျက်သွားတယ်၊ အထဲကအရေးကြီးတဲ့ဖိုင်တွေ ပြန်ရှာတွေ့ဖို့ လမ်းမရှိလောက်တော့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_420",
      "hanzi": "太糟糕了，不过如果以前你把文件保存在电子邮箱或者网上其他地方，也许还能拿回来。",
      "pinyin": "tài zāo gāo le, bú guò rú guǒ yǐ qián nǐ bǎ wén jiàn bǎo cún zài diàn zǐ yóu xiāng huò zhě wǎng shang qí tā dì fang, yě xǔ hái néng ná huí lái.",
      "burmese": "အရမ်းဆိုးတာပဲ၊ ဒါပေမယ့် အရင်တုန်းက မင်းဖိုင်တွေကို အီးမေးလ်ထဲ ဒါမှမဟုတ် အင်တာနက်ပေါ်က တခြားနေရာတွေမှာ သိမ်းခဲ့ရင်တော့၊ ပြန်ရနိုင်ကောင်းရနိုင်ပါသေးတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_421",
      "hanzi": "会议快要开始了，还有几位公司的老同事好像还没有到场呢。",
      "pinyin": "huì yì kuài yào kāi shǐ le, hái yǒu jǐ wèi gōng sī de lǎo tóng shì hǎo xiàng hái méi yǒu dào chǎng ne.",
      "burmese": "အစည်းအဝေးစတော့မယ်၊ ကုမ္ပဏီက လုပ်ဖော်ကိုင်ဖက်ဟောင်းအချို့ ရောက်မလာသေးဘူးထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_422",
      "hanzi": "我刚给他们打过电话，他们正在楼下等电梯，大概只需五分钟就可以到了。",
      "pinyin": "wǒ gāng gěi tā men dǎ guò diàn huà, tā men zhèng zài lóu xià děng diàn tī, dà gài zhǐ xū wǔ fēn zhōng jiù kě yǐ dào le.",
      "burmese": "ငါခုနက သူတို့ကိုဖုန်းဆက်လိုက်တယ်၊ သူတို့အောက်ထပ်မှာ ဓာတ်လှေကားစောင့်နေကြတယ်၊ ငါးမိနစ်လောက်ဆိုရင် ရောက်နိုင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_423",
      "hanzi": "如果我们不经常复习练习过的语法结构，很快就会把学过的知识全忘掉。",
      "pinyin": "rú guǒ wǒ men bù jīng cháng fù xí liàn xí guò de yǔ fǎ jié gòu, hěn kuài jiù huì bǎ xué guò de zhī shi quán wàng diào.",
      "burmese": "ငါတို့လေ့ကျင့်ဖူးတဲ့ သဒ္ဒါဖွဲ့စည်းပုံတွေကို ခဏခဏပြန်လေ့လာတာမလုပ်ရင်၊ သင်ဖူးတဲ့အသိပညာတွေအကုန်လုံးကို မြန်မြန်မေ့သွားလိမ့်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_424",
      "hanzi": "对，不仅要复习，还要在平时遇到别人聊天的时候去试着用出来。",
      "pinyin": "duì, bù jǐn yào fù xí, hái yào zài píng shí yù dào bié rén liáo tiān de shí hou qù shì zhe yòng chū lái.",
      "burmese": "ဟုတ်တယ်၊ ပြန်လေ့လာရုံသာမကဘူး၊ ပုံမှန်တခြားလူနဲ့စကားပြောတဲ့အခါတွေကြုံရင်လည်း စမ်းပြီးသုံးကြည့်ဖို့လိုတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_425",
      "hanzi": "我觉得你的新发型特别适合你，跟之前的相比看起来更年轻也更聪明了。",
      "pinyin": "wǒ jué de nǐ de xīn fà xíng tè bié shì hé nǐ, gēn zhī qián de xiāng bǐ kàn qǐ lái gèng nián qīng yě gèng cōng ming le.",
      "burmese": "မင်းရဲ့ဆံပင်ပုံစံအသစ်က မင်းနဲ့အရမ်းလိုက်ဖက်တယ်လို့ ငါထင်တယ်၊ အရင်ကနဲ့ယှဉ်ရင် ပိုနုသွားပြီး ပိုလည်းထက်မြက်ပုံပေါက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_426",
      "hanzi": "真的吗？谢谢你！理发师也是在这个城市很有名的店长，他剪得确实好。",
      "pinyin": "zhēn de ma? xiè xie nǐ! lǐ fà shī yě shì zài zhè ge chéng shì hěn yǒu míng de diàn zhǎng, tā jiǎn de què shí hǎo.",
      "burmese": "တကယ်လား? ကျေးဇူးတင်ပါတယ်! ဆံပင်ညှပ်ဆရာကလည်း ဒီမြို့မှာအရမ်းနာမည်ကြီးတဲ့ ဆိုင်မန်နေဂျာလေ၊ သူညှပ်တာတကယ်ကောင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_427",
      "hanzi": "你看，那条狗竟然能自己按照红灯和绿灯过马路，真让我吃惊！",
      "pinyin": "nǐ kàn, nà tiáo gǒu jìng rán néng zì jǐ àn zhào hóng dēng hé lǜ dēng guò mǎ lù, zhēn ràng wǒ chī jīng!",
      "burmese": "ကြည့်စမ်း၊ အဲ့ဒီခွေးက မီးနီမီးစိမ်းအတိုင်း လမ်းကိုတောင်သူ့ဟာသူကူးနိုင်တယ်၊ ငါ့ကိုတကယ်အံ့ဩစေတာပဲ!",
      "category": "daily"
    },
    {
      "id": "hsk3_428",
      "hanzi": "它是被警察训练过的工作犬，当然明白过马路的交通规则了。",
      "pinyin": "tā shì bèi jǐng chá xùn liàn guò de gōng zuò quǎn, dāng rán míng bai guò mǎ lù de jiāo tōng guī zé le.",
      "burmese": "သူက ရဲတွေလေ့ကျင့်ပေးထားတဲ့ အလုပ်လုပ်တဲ့ခွေးလေးလေ၊ ဒါပေါ့လမ်းကူးတဲ့ ယာဉ်စည်းကမ်းတွေကိုတော့ နားလည်မှာပေါ့။",
      "category": "daily"
    },
    {
      "id": "hsk3_429",
      "hanzi": "请在过安检的时候，把大衣和包拿下来，放在框子上检查，然后再通过。",
      "pinyin": "qǐng zài guò ān jiǎn de shí hou, bǎ dà yī hé bāo ná xià lái, fàng zài kuāng zi shang jiǎn chá, rán hòu zài tōng guò.",
      "burmese": "လုံခြုံရေးစစ်ဆေးရေးဖြတ်တဲ့အခါ၊ အပေါ်အင်္ကျီနဲ့ လွယ်အိတ်ကိုချွတ်ပြီးခြင်းတောင်းထဲထည့်စစ်ဆေးပါ၊ ပြီးမှဖြတ်သွားပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_430",
      "hanzi": "好的，我的电脑也需要从书包里面单独拿出来进行检查吗？",
      "pinyin": "hǎo de, wǒ de diàn nǎo yě xū yào cóng shū bāo lǐ miàn dān dú ná zhū lái jìn xíng jiǎn chá ma?",
      "burmese": "ကောင်းပါပြီ၊ ကျွန်တော့်ရဲ့ကွန်ပျူတာကိုရော လွယ်အိတ်ထဲကနေ သီးသန့်ထုတ်ပြီး စစ်ဆေးဖို့လိုပါသလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_431",
      "hanzi": "随着生活越来越方便，我们已经很少看到有人再去使用纸质的地图了。",
      "pinyin": "suí zhe shēng huó yuè lái yuè fāng biàn, wǒ men yǐ jīng hěn shǎo kàn dào yǒu rén zài qù shǐ yòng zhǐ zhì de dì tú le.",
      "burmese": "လူနေမှုဘဝက ပိုပိုလွယ်ကူလာတာနဲ့အမျှ၊ တစ်ယောက်ယောက် စက္ကူမြေပုံအသုံးပြုနေတာကို ငါတို့တွေ့ရတာနည်းသွားပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_432",
      "hanzi": "因为现在每个人的手机里都有很准确的定位软件，这让找路变得非常容易。",
      "pinyin": "yīn wèi xiàn zài měi ge rén de shǒu jī lǐ dōu yǒu hěn zhǔn què de dìng wèi ruǎn jiàn, zhè ràng zhǎo lù biàn de fēi cháng róng yì.",
      "burmese": "ဘာလို့လဲဆိုတော့ အခုလူတိုင်းရဲ့ဖုန်းထဲမှာ အရမ်းတိကျတဲ့ Location ဖမ်းတဲ့ဆော့ဖ်ဝဲရှိနေလို့၊ ဒါကလမ်းရှာရတာကို အရမ်းလွယ်ကူလာစေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_433",
      "hanzi": "虽然我的工作压力很大，可是只要周末能去爬一次山，我就会充满力量。",
      "pinyin": "suī rán wǒ de gōng zuò yā lì hěn dà, kě shì zhǐ yào zhòu mò néng qù pá yí cì shān, wǒ jiù huì chōng mǎn lì liàng.",
      "burmese": "ငါ့အလုပ်ဖိအားကအရမ်းကြီးပေမယ့်၊ စနေတနင်္ဂနွေမှာ တောင်တစ်ခါလောက်သွားတက်ရရုံနဲ့ကို၊ ငါခွန်အားတွေအပြည့်ပြန်ဖြစ်သွားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_434",
      "hanzi": "在大自然中运动确实是减少烦恼和压力的最好方法，我下次要不要跟你一起去？",
      "pinyin": "zài dà zì rán zhōng yùn dòng què shí shì jiǎn shǎo fán nǎo hé yā lì de zuì hǎo fāng fǎ, wǒ xià cì yào bu yào gēn nǐ yì qǐ qù?",
      "burmese": "သဘာဝပတ်ဝန်းကျင်ထဲမှာ လေ့ကျင့်ခန်းလုပ်တာက တကယ်တော့ စိတ်ရှုပ်စရာတွေနဲ့ ဖိအားတွေကိုလျှော့ချဖို့ အကောင်းဆုံးနည်းလမ်းပဲ၊ ငါနောက်တစ်ခါ မင်းနဲ့အတူတူလိုက်ခဲ့ရမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_435",
      "hanzi": "我们打算在下个月的第一周搬到公司附近的公寓去住，这样就不用起太早了。",
      "pinyin": "wǒ men dǎ suàn zài xià ge yuè de dì yī zhōu bān dào gōng sī fù jìn de gōng yù qù zhù, zhè yàng jiù bú yòng qǐ tài zǎo le.",
      "burmese": "ငါတို့လာမယ့်လရဲ့ ပထမအပတ်မှာ ကုမ္ပဏီအနီးအနားက တိုက်ခန်းကို ပြောင်းနေဖို့စီစဉ်ထားတယ်፣ ဒါဆိုအရမ်းစောစောထစရာမလိုတော့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_436",
      "hanzi": "那真是太棒了，不过搬家要收拾的东西很多，如果有需要我的地方，随时告诉我。",
      "pinyin": "nà zhēn shì tài bàng le, bú guò bān jiā yào shōu shi de dōng xi hěn duō, rú guǒ yǒu xū yào wǒ de dì fang, suí shí gào su wǒ.",
      "burmese": "အဲ့ဒါတကယ်အရမ်းကောင်းတာပဲ၊ ဒါပေမယ့် အိမ်ပြောင်းရင် သိမ်းဆည်းရမယ့်ပစ္စည်းတွေအများကြီးရှိတယ်၊ ငါ့ကိုလိုအပ်တဲ့နေရာရှိရင် အချိန်မရွေးပြောပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_437",
      "hanzi": "你把刚刚买的鸡蛋放进冰箱的最下层，还有别忘了把这盒牛奶喝完。",
      "pinyin": "nǐ bǎ gāng gāng mǎi de jī dàn fàng jìn bīng xiāng de zuì xià céng, hái yǒu bié wàng le bǎ zhè hé niú nǎi hē wán.",
      "burmese": "မင်းခုနကဝယ်လာတဲ့ ကြက်ဥတွေကို ရေခဲသေတ္တာရဲ့ အောက်ဆုံးအလွှာမှာ ထည့်လိုက်ပါ၊ ပြီးတော့ဒီနွားနို့ဘူးကို အကုန်သောက်ဖို့လည်းမမေ့နဲ့နော်。",
      "category": "daily"
    },
    {
      "id": "hsk3_438",
      "hanzi": "知道啦，妈妈，这盒牛奶我打算明天早上吃面包的时候再留着慢慢喝。",
      "pinyin": "zhī dào la, mā ma, zhè hé niú nǎi wǒ dǎ suàn míng tiān zǎo shang chī miàn bāo de shí hou zài liú zhe màn man hē.",
      "burmese": "သိပါပြီ အမေ၊ ဒီနွားနို့ကိုတော့ မနက်ဖြန်မနက် ပေါင်မုန့်စားတဲ့အခါမှ ခချန်ထားပြီး ဖြည်းဖြည်းသောက်ဖို့ စီစဉ်ထားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_439",
      "hanzi": "不管有多困难，只要你相信自己能够做到，你终究会找到解决事情的办法的。",
      "pinyin": "bù guǎn yǒu duō kùn nán, zhǐ yào nǐ xiāng xìn zì jǐ néng gòu zuò dào, nǐ zhōng jiū huì zhǎo dào jiě jué shì qing de bàn fǎ de.",
      "burmese": "ဘယ်လောက်ပဲခက်ခဲပါစေ၊ မင်းလုပ်နိုင်မယ်လို့ မင်းကိုယ်မင်းယုံကြည်နေသရွေ့၊ နောက်ဆုံးမှာ ကိစ္စတွေကိုဖြေရှင်းမယ့်နည်းလမ်း မင်းရှာတွေ့မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_440",
      "hanzi": "谢谢你一直对我的鼓励，在那些低落的日子里，是你的话给了我重新出发的勇气。",
      "pinyin": "xiè xie nǐ yì zhí duì wǒ de gǔ lì, zài nà xiē dī luò de rì zi lǐ, shì nǐ de huà gěi le wǒ chóng xīn chū fā de yǒng qì.",
      "burmese": "ငါ့ကိုအမြဲတမ်းအားပေးတဲ့အတွက် ကျေးဇူးတင်ပါတယ်၊ စိတ်ဓာတ်ကျနေတဲ့ရက်တွေမှာ မင်းရဲ့စကားတွေကပဲ ငါ့ကိုအသစ်ပြန်စဖို့ ရဲစွမ်းသတ္တိတွေပေးခဲ့တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_441",
      "hanzi": "比起那些贵的但是看起来很普遍的礼物，有时候自己做的小东西反而能让人感动。",
      "pinyin": "bǐ qǐ nà xiē guì de dàn shì kàn qǐ lái hěn pǔ biàn de lǐ wù, yǒu shí hou zì jǐ zuò de xiǎo dōng xi fǎn ér néng ràng rén gǎn dòng.",
      "burmese": "ဈေးကြီးပေမယ့် သာမန်ပဲလို့ထင်ရတဲ့ လက်ဆောင်တွေနဲ့ယှဉ်ရင်၊ တစ်ခါတလေ ကိုယ်တိုင်လုပ်ထားတဲ့ ပစ္စည်းလေးတွေကမှ လူကိုပိုစိတ်လှုပ်ရှားစေတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_442",
      "hanzi": "是啊，因为你花在里面的时间和用心是用任何金钱都买不到的心意和感情。",
      "pinyin": "shì a, yīn wèi nǐ huā zài lǐ miàn de shí jiān hé yòng xīn shì yòng rèn hé jīn qián dōu mǎi bú dào de xīn yì hé gǎn qíng.",
      "burmese": "ဟုတ်တယ်၊ ဘာလို့လဲဆိုတော့ အဲ့ဒီထဲမှာ မင်းပေးဆပ်ထားတဲ့အချိန်နဲ့ စေတနာက ဘယ်ငွေကြေးနဲ့မှ ဝယ်လို့မရတဲ့ စိတ်ရင်းနဲ့ သံယောဇဉ်ဖြစ်နေလို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_443",
      "hanzi": "我在南方住了五年，到现在还是不太习惯那边又潮湿又多雨的漫长夏季。",
      "pinyin": "wǒ zài nán fāng zhù le wǔ nián, dào xiàn zài hái shì bú tài xí guàn nà biān yòu cháo shī yòu duō yǔ de màn cháng xià jì.",
      "burmese": "ငါတောင်ပိုင်းမှာ နေတာငါးနှစ်ရှိပြီ၊ အခုထိ အဲ့ဒီဘက်က စိုစွတ်ပြီး မိုးများတဲ့ ကြာရှည်တဲ့နွေရာသီကို သိပ်မယဉ်ပါးသေးဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_444",
      "hanzi": "因为你是北方人吧，北方虽然干一点，但是确实比南方那种天气更容易让人觉得舒服。",
      "pinyin": "yīn wèi nǐ shì běi fāng rén ba, běi fāng suī rán gān yì diǎn, dàn shì què shí bǐ nán fāng nà zhǒng tiān qì gèng róng yì ràng rén jué de shū fu.",
      "burmese": "ဘာလို့လဲဆိုတော့ မင်းက မြောက်ပိုင်းလူဖြစ်နေလို့ပါ၊ မြောက်ပိုင်းက နည်းနည်းခြောက်သွေ့ပေမယ့် တောင်ပိုင်းရာသီဥတုထက်စာရင် လူကိုပိုသက်တောင့်သက်သာဖြစ်စေတာ အမှန်ပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_445",
      "hanzi": "请你务必把今天重要客户开会谈论的要求都用笔记在电脑上，明天早上我们要重新检查。",
      "pinyin": "qǐng nǐ wù bì bǎ jīn tiān zhòng yào kè hù kāi huì tán lùn de yāo qiú dōu yòng bǐ jì zài diàn nǎo shang, míng tiān zǎo shang wǒ men yào chóng xīn jiǎn chá.",
      "burmese": "ဒီနေ့ အရေးကြီးဖောက်သည်နဲ့ အစည်းအဝေးမှာ ဆွေးနွေးခဲ့တဲ့လိုအပ်ချက်တွေကို ကွန်ပျူတာပေါ်မှာ မဖြစ်မနေမှတ်စုထုတ်ထားပေးပါ၊ မနက်ဖြန်မနက် ငါတို့အသစ်တစ်ဖန် ပြန်စစ်ဆေးရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_446",
      "hanzi": "放心吧经理，我已经把每一个注意点都清清楚楚地记录下来了，保证不会有什么差错。",
      "pinyin": "fàng xīn ba jīng lǐ, wǒ yǐ jīng bǎ měi yí ge zhù yì diǎn dōu qīng qīng chǔ chǔ de jì lù xià lái le, bǎo zhèng bú huì yǒu shén me chā cuò.",
      "burmese": "စိတ်ချပါ မန်နေဂျာ၊ ငါသတိထားရမယ့်အချက်တိုင်းကို ရှင်းရှင်းလင်းလင်း မှတ်တမ်းတင်ထားပြီးပါပြီ၊ ဘာအမှားအယွင်းမှမရှိစေရဘူးလို့ အာမခံပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_447",
      "hanzi": "为了准时参加明早上九点的活动，我看我们还是把手表调快五分钟比较保险。",
      "pinyin": "wèi le zhǔn shí cān jiā míng zǎo shang jiǔ diǎn de huó dòng, wǒ kàn wǒ men hái shì bǎ shǒu biǎo tiáo kuài wǔ fēn zhōng bǐ jiào bǎo xiǎn.",
      "burmese": "မနက်ဖြန်မနက် ၉ နာရီပွဲကို အချိန်မီတက်ရောက်နိုင်ဖို့၊ ငါကြည့်ရတာ ငါတို့နာရီကို ၅ မိနစ်လောက် မြန်မြန်ချိန်ထားတာ ပိုစိတ်ချရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_448",
      "hanzi": "这个主意不错，而且我们可以定好三个手机的叫醒服务，这样绝对不会起得很晚的。",
      "pinyin": "zhè ge zhǔ yì bú cuò, ér qiě wǒ men kě yǐ dìng hǎo sān ge shǒu jī de jiào xǐng fú wù, zhè yàng jué duì bú huì qǐ de hěn wǎn de.",
      "burmese": "ဒီအကြံအစည်မဆိုးဘူး၊ ပြီးတော့ ငါတို့ဖုန်းသုံးလုံးကို Alarm ပေးထားလို့ရတယ်၊ ဒါဆိုအိပ်ရာထနောက်ကျတာမျိုး လုံးဝဖြစ်မှာမဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_449",
      "hanzi": "那个红色的草莓蛋糕看起来简直好吃极了，不管它到底有多贵我都必须买一小块来尝尝。",
      "pinyin": "nà ge hóng sè de cǎo méi dàn gāo kàn qǐ lái jiǎn zhí hǎo chī jí le, bù guǎn tā dào dǐ yǒu duō guì wǒ dōu bì xū mǎi yì xiǎo kuài lái cháng chang.",
      "burmese": "အဲ့ဒီအနီရောင် စတော်ဘယ်ရီကိတ်မုန့်က ကြည့်ရတာတကယ်ကိုအရသာရှိလွန်းပုံပေါ်တယ်၊ သူဘယ်လောက်ပဲဈေးကြီးကြီး ငါအသေးတစ်တုံးတော့မဖြစ်မနေ ဝယ်မြည်းကြည့်ရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_450",
      "hanzi": "那我们进去一起买吧，其实我刚才站在旁边也一直在偷偷看那个很漂亮的蛋糕呢！",
      "pinyin": "nà wǒ men jìn qù yì qǐ mǎi ba, qí shí wǒ gāng cái zhàn zài páng biān yě yì zhí zài tōu tōu kàn nà ge hěn piào liang de dàn gāo ne!",
      "burmese": "ဒါဆို ငါတို့အထဲဝင်ပြီး အတူတူဝယ်ကြမယ်လေ၊ တကယ်တော့ ငါလည်းခုနက ဘေးမှာရပ်ပြီး အဲ့ဒီအရမ်းလှတဲ့ကိတ်မုန့်ကို ခိုးခိုးကြည့်နေတာပဲ!",
      "category": "daily"
    },
    {
      "id": "hsk3_451",
      "hanzi": "那个穿着蓝色衬衫的男生是谁？刚才他在借书的时候一直跟你说话。",
      "pinyin": "nà ge chuān zhe lán sè chèn shān de nán shēng shì shuí? gāng cái tā zài jiè shū de shí hou yì zhí gēn nǐ shuō huà.",
      "burmese": "အဲ့ဒီအပြာရောင်ရှပ်အင်္ကျီဝတ်ထားတဲ့ကောင်လေးက ဘယ်သူလဲ? ခုနကသူစာအုပ်ငှားနေတုန်း မင်းနဲ့တစ်ချိန်လုံးစကားပြောနေတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_452",
      "hanzi": "他是我的高中同学，我们以前关系很好，没想到今天竟然在图书馆里碰见他了。",
      "pinyin": "tā shì wǒ de gāo zhōng tóng xué, wǒ men yǐ qián guān xi hěn hǎo, méi xiǎng dào jīn tiān jìng rán zài tú shū guǎn lǐ pèng jiàn tā le.",
      "burmese": "သူကငါ့ရဲ့အထက်တန်းကျောင်းက အတန်းဖော်ပါ၊ ငါတို့အရင်ကအရမ်းခင်ကြတယ်၊ ဒီနေ့စာကြည့်တိုက်မှာ သူ့ကိုမထင်မှတ်ဘဲ ပြန်တွေ့ရလိမ့်မယ်လို့ မထင်ထားဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_453",
      "hanzi": "对不起女士，您不能往左发拐弯，这边的路坏了正在修呢。",
      "pinyin": "duì bù qǐ nǚ shì, nín bù néng wǎng zuǒ fā guǎi wān, zhè biān de lù huài le zhèng zài xiū ne.",
      "burmese": "တောင်းပန်ပါတယ်အမျိုးသမီး၊ ရှင်ဘယ်ဘက်ကိုကွေ့လို့မရပါဘူး၊ ဒီဘက်ကလမ်းပျက်နေလို့ ပြင်နေပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_454",
      "hanzi": "原来是这样，那我只能直走然后再绕远路回去了呢，对不对？",
      "pinyin": "yuán lái shì zhè yàng, nà wǒ zhǐ néng zhí zǒu rán hòu zài rào yuǎn lù huí qù le ne, duì bu duì?",
      "burmese": "ဒီလိုကိုး၊ ဒါဆိုငါရှေ့တည့်တည့်သွားပြီး လမ်းဝေးနည်းနည်းပတ်ပြီးမှ ပြန်သွားရတော့မယ်၊ ဟုတ်တယ်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_455",
      "hanzi": "那是一只非常有灵性的短腿狗，每次我有烦恼的时候，只要抱抱它就感觉好多了。",
      "pinyin": "nà shì yì zhī fēi cháng yǒu líng xìng de duǎn tuǐ gǒu, měi cì wǒ yǒu fán nǎo de shí hou, zhǐ yào bào bao tā jiù gǎn jué hǎo duō le.",
      "burmese": "အဲ့ဒါက ဝိညာဉ်ရေးရာအသိဉာဏ်ရှိတဲ့ ခြေတိုခွေးလေးပါ၊ ငါစိတ်ရှုပ်စရာရှိတိုင်း၊ သူ့ကိုဖက်လိုက်တာနဲ့ကို တော်တော်လေးနေလို့ကောင်းသွားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_456",
      "hanzi": "是的，小动物能给人带来很多的快乐和安慰，你需要花更多的时间来陪伴它哦。",
      "pinyin": "shì de, xiǎo dòng wù néng gěi rén dài lái hěn duō de kuài lè hé ān wèi, nǐ xū yào huā gèng duō de shí jiān lái péi bàn tā o.",
      "burmese": "ဟုတ်တယ်၊ တိရစ္ဆာန်လေးတွေက လူကိုပျော်ရွှင်မှုနဲ့ နှစ်သိမ့်မှုတွေအများကြီးပေးနိုင်တယ်၊ သူ့ကိုအဖော်ပြုပေးဖို့ မင်းအချိန်ပိုပေးဖို့လိုမယ်နော်။",
      "category": "daily"
    },
    {
      "id": "hsk3_457",
      "hanzi": "我的腿太疼了，因为昨天去爬山不小心跌倒，把脚和膝盖都弄伤了。",
      "pinyin": "wǒ de tuǐ tài téng le, yīn wèi zuó tiān qù pá shān bù xiǎo xīn diē dǎo, bǎ jiǎo hé xī gài dōu nòng shāng le.",
      "burmese": "ငါ့ခြေထောက်အရမ်းနာနေပြီ၊ ဘာလို့လဲဆိုတော့ မနေ့ကတောင်သွားတက်ရင်း မတော်တဆချော်လဲလို့၊ ခြေထောက်ရော ဒူးတွေရောနာသွားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_458",
      "hanzi": "真可怜！你今天就待在家里安静休息吧，不要乱走路了以免伤变得更加重。",
      "pinyin": "zhēn kě lián! nǐ jīn tiān jiù dāi zài jiā lǐ ān jìng xiū xi ba, bú yào luàn zǒu lù le yǐ miǎn shāng biàn de gèng jiā zhòng.",
      "burmese": "တကယ်သနားစရာပဲ! မင်းဒီနေ့အိမ်မှာပဲ တိတ်တဆိတ်အနားယူနေပါတော့၊ ဒဏ်ရာပိုဆိုးမသွားအောင် လျှောက်မသွားပါနဲ့တော့။",
      "category": "daily"
    },
    {
      "id": "hsk3_459",
      "hanzi": "我必须在今天下班之前把这份文件交给王经理，否则他可能会很生气的。",
      "pinyin": "wǒ bì xū zài jīn tiān xià bān zhī qián bǎ zhè fèn wén jiàn jiāo gěi Wáng jīng lǐ, fǒu zé tā kě néng huì hěn shēng qì de.",
      "burmese": "ငါဒီနေ့ရုံးမဆင်းခင် ဒီစာရွက်စာတမ်းကို မန်နေဂျာဝမ်ဆီ မဖြစ်မနေပေးရမယ်၊ မဟုတ်ရင် သူအရမ်းဒေါသထွက်လောက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_460",
      "hanzi": "既然时间这么紧，那我晚上再帮你核对一遍数据，以保证全部都是准确无误的吧。",
      "pinyin": "jì rán shí jiān zhè me jǐn, nà wǒ wǎn shang zài bāng nǐ hé duì yí biàn shù jù, yǐ bǎo zhèng quán bù dōu shì zhǔn què wú wù de ba.",
      "burmese": "အချိန်ကဒီလောက်ကပ်နေမှတော့၊ အကုန်လုံးတိကျမှန်ကန်ဖို့သေချာအောင် ညဘက်ငါမင်းကို ဒေတာတွေတစ်ခေါက်ပြန်စစ်ပေးမယ်လေ။",
      "category": "daily"
    },
    {
      "id": "hsk3_461",
      "hanzi": "由于那个旧的地方房租上涨得厉害，所以上个月他们全家都搬到郊区去住了。",
      "pinyin": "yóu yú nà ge jiù de dì fang fáng zū shàng zhǎng de lì hai, suǒ yǐ shàng ge yuè tā men quán jiā dōu bān dào jiāo qū qù zhù le.",
      "burmese": "အဲ့ဒီနေရာဟောင်းက အိမ်လခတွေ အရမ်းတက်လာလို့၊ ပြီးခဲ့တဲ့လက သူမတို့တစ်မိသားစုလုံး ဆင်ခြေဖုံးကိုပြောင်းနေကြပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_462",
      "hanzi": "虽然离市中心有些远，但那边的环境清闲且空气好，非常适合老人和小孩居住呢。",
      "pinyin": "suī rán lí shì zhōng xīn yǒu xiē yuǎn, dàn nà biān de huán jìng qīng xián qiě kōng qì hǎo, fēi cháng shì hé lǎo rén hé xiǎo hái jū zhù ne.",
      "burmese": "မြို့လယ်နဲ့နည်းနည်းဝေးပေမယ့်၊ အဲ့ဒီဘက်ကပတ်ဝန်းကျင်က အေးချမ်းပြီးလေသန့်တယ်၊ လူကြီးတွေနဲ့ ကလေးတွေနေဖို့ အရမ်းသင့်တော်တယ်လေ။",
      "category": "daily"
    },
    {
      "id": "hsk3_463",
      "hanzi": "刚才去药房买感冒药的时候，那个售货员的态度非常不好，让我有些不高兴了。",
      "pinyin": "gāng cái qù yào fáng mǎi gǎn mào yào de shí hou, nà ge shòu huò yuán de tài du fēi cháng bù hǎo, ràng wǒ yǒu xiē bù gāo xìng le.",
      "burmese": "ခုနက ဆေးဆိုင်မှာ အအေးမိဆေးသွားဝယ်တုန်းက၊ အဲ့ဒီအရောင်းသမားရဲ့ ဆက်ဆံရေးကအရမ်းဆိုးလို့ ငါနည်းနည်းပျော်မနေဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_464",
      "hanzi": "也许他今天遇到了什么麻烦的事，或者工作太忙了吧，别往心里去了。",
      "pinyin": "yě xǔ tā jīn tiān yù dào le shén me má fan de shì, huò zhě gōng zuò tài máng le ba, bié wǎng xīn lǐ qù le.",
      "burmese": "ဒီနေ့သူတစ်ခုခုပြဿနာကြုံထားတာ ဒါမှမဟုတ် အလုပ်အရမ်းများနေလို့ဖြစ်နိုင်ပါတယ်၊ အရမ်းကြီးစိတ်ထဲမထားပါနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk3_465",
      "hanzi": "你知道这个学期我们的放假时间是从哪一天开始的吗？",
      "pinyin": "nǐ zhī dào zhè ge xué qī wǒ men de fàng jià shí jiān shì cóng nǎ yì tiān kāi shǐ de ma?",
      "burmese": "ဒီစာသင်နှစ်ရဲ့ ငါတို့ကျောင်းပိတ်ရက်က ဘယ်နေ့ကစလဲဆိုတာ မင်းသိလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_466",
      "hanzi": "听班长说大概是七月十号开始放，一共放将近两个月左右的时间呢。",
      "pinyin": "tīng bān zhǎng shuō dà gài shì qī yuè shí hào kāi shǐ fàng, yí gòng fàng jiāng jìn liǎng ge yuè zuǒ yòu de shí jiān ne.",
      "burmese": "အတန်းခေါင်းဆောင်ပြောတာကြားတာတော့ ဇူလိုင် ၁၀ ရက်လောက်ကစပိတ်မယ်၊ စုစုပေါင်း နှစ်လနီးပါးလောက်ပိတ်မှာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_467",
      "hanzi": "你快过来看一下这件蓝色的外套！不仅打五折很划算，而且款式也非常时髦。",
      "pinyin": "nǐ kuài guò lái kàn yí xià zhè jiàn lán sè de wài tào! bù jǐn dǎ wǔ zhé hěn huá suàn, ér qiě kuǎn shì yě fēi cháng shí máo.",
      "burmese": "မင်းမြန်မြန်လာပြီး ဒီအပြာရောင်အပေါ်အင်္ကျီလေးကို ကြည့်စမ်း! ၅၀% လျှော့ပေးလို့တန်ရုံတင်မကဘူး၊ ဒီဇိုင်းကလည်းအရမ်းခေတ်မီတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_468",
      "hanzi": "那我赶紧趁有号去试衣间试穿一下，要是合适我就立刻把它买下来。",
      "pinyin": "nà wǒ gǎn jǐn chèn yǒu hào qù shì yī jiān shì chuān yí xià, yào shì hé shì wǒ jiù lì kè bǎ tā mǎi xià lái.",
      "burmese": "ဒါဆို ငါဆိုဒ်ရှိတုန်း အဝတ်လဲခန်းသွားပြီး အမြန်စမ်းဝတ်ကြည့်လိုက်ဦးမယ်၊ တကယ်လို့တော်တယ်ဆိုရင် ချက်ချင်းဝယ်လိုက်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_469",
      "hanzi": "对面的中国银行星期天好像是不开门营业的，我们明天上午再去处理这件事吧。",
      "pinyin": "duì miàn de Zhōng guó Yín háng xīng qī tiān hǎo xiàng shì bù kāi mén yíng yè de, wǒ men míng tiān shàng wǔ zài qù chǔ lǐ zhè jiàn shì ba.",
      "burmese": "မျက်နှာချင်းဆိုင်က Bank of China က တနင်္ဂနွေနေ့တွေမှာ ဖွင့်လေ့မရှိဘူးထင်တယ်၊ ငါတို့မနက်ဖြန်မနက်မှပဲ ဒီကိစ္စကိုသွားလုပ်ကြမယ်လေ。",
      "category": "daily"
    },
    {
      "id": "hsk3_470",
      "hanzi": "行，那我正好整理一下需要的各种身份证件，以免到时候过去白跑一趟了。",
      "pinyin": "xíng, nà wǒ zhèng hǎo zhěng lǐ yí xià xū yào de gè zhǒng shēn fèn zhèng jiàn, yǐ miǎn dào shí hou guò qù bái pǎo yí tàng le.",
      "burmese": "ကောင်းပြီလေ၊ ဒါဆို ငါလည်းလိုအပ်မယ့် မှတ်ပုံတင်စာရွက်စာတမ်းမျိုးစုံကို အဆင်သင့်ပြင်ထားလိုက်မယ်၊ အဲ့ဒီရောက်တော့မှ အလကားအသွားအပြန်ဖြစ်မှာစိုးလို့။",
      "category": "daily"
    },
    {
      "id": "hsk3_471",
      "hanzi": "我每天坚持复习那些写满中国汉字的旧本子，生怕过一段时间就全忘记了。",
      "pinyin": "wǒ měi tiān jiān chí fù xí nà xiē xiě mǎn Zhōng guó hàn zì de jiù běn zi, shēng pà guò yí duàn shí jiān jiù quán wàng jì le.",
      "burmese": "ငါက တရုတ်စာလုံးတွေအပြည့်ရေးထားတဲ့ အဲ့ဒီစာအုပ်ဟောင်းတွေကို နေ့တိုင်းဇွဲရှိရှိနဲ့ ပြန်လေ့လာနေတယ်၊ အချိန်တစ်ခုကြာရင် အကုန်မေ့သွားမှာ အရမ်းကြောက်လို့။",
      "category": "daily"
    },
    {
      "id": "hsk3_472",
      "hanzi": "像你这样愿意每天下苦工作练习的人真的不多，你肯定能考出特别好的成绩来。",
      "pinyin": "xiàng nǐ zhè yàng yuàn yì měi tiān xià kǔ gōng zuò liàn xí de rén zhēn de bù duō, nǐ kěn dìng néng kǎo chū tè bié hǎo de chéng jì lái.",
      "burmese": "မင်းလိုမျိုး နေ့တိုင်းအလုပ်ကြိုးစားပြီး လေ့ကျင့်ချင်တဲ့လူ တကယ်နည်းနည်းလေးပဲရှိတယ်၊ မင်းသေချာပေါက် အရမ်းကောင်းတဲ့ရလဒ်နဲ့ အောင်မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_473",
      "hanzi": "不管有多么大的困难，只有坚持下去并且永不放弃，才能看到最后的成功方向。",
      "pinyin": "bù guǎn yǒu duō me dà de kùn nán, zhǐ yǒu jiān chí xià qù bìng qiě yǒng bú fàng qì, cái néng kàn dào zuì hòu de chéng gōng fāng xiàng.",
      "burmese": "အခက်အခဲကဘယ်လောက်ပဲကြီးကြီး၊ ဇွဲမလျှော့ဘဲ ဆက်လုပ်သွားမှသာလျှင်၊ နောက်ဆုံးအောင်မြင်မှုရဲ့ ဦးတည်ချက်ကို မြင်နိုင်မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_474",
      "hanzi": "你说得很对，很多人往往是在离成功非常近的最后几十步里感到疲倦而放弃的了。",
      "pinyin": "nǐ shuō de hěn duì, hěn duō rén wǎng wǎng shì zài lí chéng gōng fēi cháng jìn de zuì hòu jǐ shí bù lǐ gǎn dào pí juàn ér fàng qì de le.",
      "burmese": "မင်းပြောတာအရမ်းမှန်တယ်၊ လူတော်တော်များများက အောင်မြင်မှုနဲ့အရမ်းနီးစပ်နေတဲ့ နောက်ဆုံးခြေလှမ်းအနည်းငယ်မှာတိုင်း ပင်ပန်းလာပြီး လက်လျှော့တတ်ကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_475",
      "hanzi": "那个戴黑眼镜的男老师是不是新来的教美术和画画的新老师啊？",
      "pinyin": "nà ge dài hēi yǎn jìng de nán lǎo shī shì bu shì xīn lái de jiāo měi shù hé huà huà de xīn lǎo shī a?",
      "burmese": "အဲ့ဒီမျက်မှန်အမည်းတပ်ထားတဲ့ ဆရာက အနုပညာနဲ့ပန်းချီသင်တဲ့ ဆရာအသစ်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_476",
      "hanzi": "不，他是教西方音乐的张亮老师。很多学生都很喜欢听他弹吉他唱歌呢。",
      "pinyin": "bù, tā shì jiāo xī fāng yīn yuè de Zhāng liàng lǎo shī. hěn duō xué shēng dōu hěn xǐ huan tīng tā tán jí tā chàng gē ne.",
      "burmese": "မဟုတ်ဘူး၊ သူက အနောက်တိုင်းဂီတသင်တဲ့ ဆရာကျန်းလျန်လေ။ ကျောင်းသားတော်တော်များများက သူဂစ်တာတီးပြီး သီချင်းဆိုတာကို နားထောင်ရတာ အရမ်းကြိုက်ကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_477",
      "hanzi": "我觉得你的新发色非常好看极了，比上次那个黄色的头发看起来精神多多了呢。",
      "pinyin": "wǒ jué de nǐ de xīn fà sè fēi cháng hǎo kàn jí le, bǐ shàng cì nà ge huáng sè de tóu fa kàn qǐ lái jīng shén duō duō le ne.",
      "burmese": "မင်းရဲ့ဆံပင်အရောင်သစ်က တကယ်အရမ်းလှတယ်လို့ ငါထင်တယ်၊ အရင်တစ်ခေါက် အဝါရောင်ဆံပင်ထက်စာရင် အများကြီးပိုတက်ကြွတဲ့ပုံပေါက်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_478",
      "hanzi": "是吗？太感谢你的夸奖啦。这还是理发店老板特别推荐我染的棕颜色呢。",
      "pinyin": "shì ma? tài gǎn xiè nǐ de kuā jiǎng la. zhè hái shì lǐ fà diàn lǎo bǎn tè bié tuī jiàn wǒ rǎn de zōng yán sè ne.",
      "burmese": "ဟုတ်လား? မင်းချီးကျူးတဲ့အတွက် အရမ်းကျေးဇူးတင်ပါတယ်။ ဒါက ဆံပင်ညှပ်ဆိုင်ပိုင်ရှင်ကိုယ်တိုင် အထူးအကြံပေးလို့ ဆိုးထားတဲ့ အညိုရောင်လေ။",
      "category": "daily"
    },
    {
      "id": "hsk3_479",
      "hanzi": "会议结束后大家最好立刻回去把刚刚讨论的工作用电脑都整理出来检查一下。",
      "pinyin": "huì yì jié shù hòu dà jiā zuì hǎo lì kè huí qù bǎ gāng gāng tǎo lùn de gōng zuò yòng diàn nǎo dōu zhěng lǐ chū lái jiǎn chá yí xià.",
      "burmese": "အစည်းအဝေးပြီးတာနဲ့ အားလုံးချက်ချင်းပြန်သွားပြီး၊ ခုနကဆွေးနွေးခဲ့တဲ့အလုပ်တွေကို ကွန်ပျူတာနဲ့သေသေချာချာ စုစည်းပြီး စစ်ဆေးတာအကောင်းဆုံးပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_480",
      "hanzi": "没问题。其实我在大家说话的时候已经把主要的黑板内容都抄写完了，完全不用担心啦。",
      "pinyin": "méi wèn tí. qí shí wǒ zài dà jiā shuō huà de shí hou yǐ jīng bǎ zhǔ yào de hēi bǎn nèi róng dōu chāo xiě wán le, wán quán bú yòng dān xīn la.",
      "burmese": "ပြဿနာမရှိပါဘူး။ တကယ်တော့ အားလုံးစကားပြောနေတုန်းက ငါကျောက်သင်ပုန်းပေါ်က အဓိကအကြောင်းအရာတွေကိုတောင် ကူးရေးပြီးသွားပြီ၊ လုံးဝစိတ်ပူစရာမလိုပါဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_481",
      "hanzi": "请问您可以帮我看看照片里的那家红色的衣服店到底是从哪条街道开过去的？",
      "pinyin": "qǐng wèn nín kě yǐ bāng wǒ kàn kan zhào piàn lǐ de nà jiā hóng sè de yī fu diàn dào dǐ shì cóng nǎ tiáo jiē dào kāi guò qù de?",
      "burmese": "ဒါလေးမေးပါရစေ၊ ဓာတ်ပုံထဲက အဲ့ဒီအနီရောင်အင်္ကျီဆိုင်က တကယ်တော့ ဘယ်လမ်းကနေ ဖွင့်ထားတာလဲဆိုတာ ကျွန်တော့်ကိုကူကြည့်ပေးနိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_482",
      "hanzi": "我认识这个店。你要先去南方的那个十字路口，然后马上左转就能在对面瞧见了哦。",
      "pinyin": "wǒ rèn shi zhè ge diàn. nǐ yào xiān qù nán fāng de nà ge shí zì lù kǒu, rán hòu mǎ shàng zuǒ zhuǎn jiù néng zài duì miàn qiáo jiàn le o.",
      "burmese": "ငါဒီဆိုင်ကိုသိတယ်။ မင်းအရင်တောင်ဘက်က လမ်းလေးခွဆုံကိုသွားရမယ်၊ ပြီးရင် ချက်ချင်းဘယ်ကွေ့လိုက်တာနဲ့ မျက်နှာချင်းဆိုင်မှာ မြင်ရလိမ့်မယ်နော်။",
      "category": "daily"
    },
    {
      "id": "hsk3_483",
      "hanzi": "要是你们愿意帮忙照顾这只小狗两天，我就会放心跟着李师傅他们去上海开会。",
      "pinyin": "yào shì nǐ men yuàn yì bāng máng zhào gù zhè zhī xiǎo gǒu liǎng tiān, wǒ jiù huì fàng xīn gēn zhe Lǐ shī fu tā men qù Shàng hǎi kāi huì.",
      "burmese": "တကယ်လို့ မင်းတို့က ဒီခွေးလေးကို နှစ်ရက်လောက်ကူကြည့်ပေးဖို့ ဆန္ဒရှိမယ်ဆိုရင်၊ ငါဆရာလီတို့နဲ့ ရှန်ဟိုင်းကို အစည်းအဝေးသွားဖို့ စိတ်ချရပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_484",
      "hanzi": "别客气你走吧！其实我和丈夫都很喜欢这种毛绒绒的小动作，肯定把它养得白白胖胖的呢。",
      "pinyin": "bié kè qi nǐ zǒu ba! qí shí wǒ hé zhàng fu dōu hěn xǐ huan zhè zhǒng máo róng róng de xiǎo dòng zuò, kěn dìng bǎ tā yǎng de bái bái pàng pàng de ne.",
      "burmese": "အားမနာပါနဲ့ မင်းသာသွားပါ! တကယ်တော့ ငါနဲ့ယောက်ျားက ဒီလိုအမွေးပွပွချစ်စရာလှုပ်ရှားမှုလေးတွေကို အရမ်းသဘောကျတာ၊ သူ့ကို ဖြူဖြူဖွေးဖွေးဝဝကစ်ကစ်လေးဖြစ်အောင် သေချာပေါက်မွေးထားပေးမှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_485",
      "hanzi": "那台新买回来的洗衣机怎么这么快就出现奇怪的声音了呢？完全没办法洗衬衫啊。",
      "pinyin": "nà tái xīn mǎi huí lái de xǐ yī jī zěn me zhè me kuài jiù chū xiàn qí guài de shēng yīn le ne? wán quán méi bàn fǎ xǐ chèn shān a.",
      "burmese": "ဝယ်လာစအသစ်ဖြစ်တဲ့ အဲ့ဒီအဝတ်လျှော်စက်က ဘာလို့ဒီလောက်မြန်မြန် ထူးဆန်းတဲ့အသံတွေထွက်လာရတာလဲ? ရှပ်အင်္ကျီလျှော်ဖို့ လုံးဝအဆင်မပြေဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_486",
      "hanzi": "可能是你昨天装衣服的时候没注意把钥匙掉到里面去了，快点儿停下来拿手去仔细找一找吧。",
      "pinyin": "kě néng shì nǐ zuó tiān zhuāng yī fu de shí hou méi zhù yì bǎ yào shi diào dào lǐ miàn qù le, kuài diǎnr tíng xià lái ná shǒu qù zǐ xì zhǎo yi zhǎo ba.",
      "burmese": "မနေ့က မင်းအဝတ်တွေထည့်တုန်းက သော့တွေအထဲကျသွားတာ သတိမထားမိလိုက်လို့ဖြစ်မယ်၊ မြန်မြန်ရပ်ပြီး လက်နဲ့သေသေချာချာ သွားရှာကြည့်လိုက်ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_487",
      "hanzi": "因为我平时非常习惯经常带雨伞，所以今天这突如其来的大雨也没让我淋得全身湿了。",
      "pinyin": "yīn wèi wǒ píng shí fēi cháng xí guàn jīng cháng dài yǔ sǎn, suǒ yǐ jīn tiān zhè tū rú qí lái de dà yǔ yě méi ràng wǒ lín de quán shēn shī le.",
      "burmese": "ငါက ပုံမှန်အားဖြင့် ထီးအမြဲယူသွားတဲ့အကျင့် ရှိနေလို့၊ ဒီနေ့ရုတ်တရက်ရွာချလာတဲ့ ဒီမိုးကြီးကလည်း ငါ့ကိုတစ်ကိုယ်လုံး စိုရွှဲသွားအောင် မလုပ်နိုင်ခဲ့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_488",
      "hanzi": "你可真是足够聪明的小心人，我偏偏把刚才借来的黄伞留在了那个电影院的椅子下而全完蛋啦。",
      "pinyin": "nǐ kě zhēn shì zú gòu cōng ming de xiǎo xīn rén, wǒ piān piān bǎ gāng cái jiè lái de huáng sǎn liú zài le nà ge diàn yǐng yuàn de yǐ zi xià ér quán wán dàn la.",
      "burmese": "မင်းကတော့ တကယ်ကိုလုံလောက်အောင်ထက်မြက်ပြီး သတိရှိတဲ့လူပဲ၊ ငါကတော့ ခုနကငှားလာတဲ့ အဝါရောင်ထီးကို အဲ့ဒီရုပ်ရှင်ရုံက ကုလားထိုင်အောက်မှာ ချန်ထားခဲ့မိလို့ အကုန်ဒုက္ခရောက်ကုန်ပြီ။",
      "category": "daily"
    },
    {
      "id": "hsk3_489",
      "hanzi": "我的腿太疼了，因为昨天去爬山不小心跌倒，把脚和膝盖都弄伤了。",
      "pinyin": "wǒ de tuǐ tài téng le, yīn wèi zuó tiān qù pá shān bù xiǎo xīn diē dǎo, bǎ jiǎo hé xī gài dōu nòng shāng le.",
      "burmese": "ငါ့ခြေထောက်အရမ်းနာနေပြီ၊ ဘာလို့လဲဆိုတော့ မနေ့ကတောင်သွားတက်ရင်း မတော်တဆချော်လဲလို့၊ ခြေထောက်ရော ဒူးတွေရောနာသွားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_490",
      "hanzi": "真可怜！你今天就待在家里安静休息吧，不要乱走路了以免伤变得更加重。",
      "pinyin": "zhēn kě lián! nǐ jīn tiān jiù dāi zài jiā lǐ ān jìng xiū xi ba, bú yào luàn zǒu lù le yǐ miǎn shāng biàn de gèng jiā zhòng.",
      "burmese": "တကယ်သနားစရာပဲ! မင်းဒီနေ့အိမ်မှာပဲ တိတ်တဆိတ်အနားယူနေပါတော့၊ ဒဏ်ရာပိုဆိုးမသွားအောင် လျှောက်မသွားပါနဲ့တော့။",
      "category": "daily"
    },
    {
      "id": "hsk3_491",
      "hanzi": "我们每个周末都会去那家离这儿不太远的电影院看新出的电影。",
      "pinyin": "wǒ men měi ge zhòu mò dōu huì qù nà jiā lí zhèr bú tài yuǎn de diàn yǐng yuàn kàn xīn chū de diàn yǐng.",
      "burmese": "ငါတို့စနေတနင်္ဂနွေတိုင်း ဒီနားနဲ့သိပ်မဝေးတဲ့ ရုပ်ရှင်ရုံကိုသွားပြီး အသစ်ထွက်တဲ့ရုပ်ရှင်တွေ ကြည့်လေ့ရှိတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_492",
      "hanzi": "我觉得那个电影院的买票虽然快，可是里边让人不太舒服。",
      "pinyin": "wǒ jué de nà ge diàn yǐng yuàn de mǎi piào suī rán kuài, kě shì lǐ biān ràng rén bú tài shū fu.",
      "burmese": "အဲ့ဒီရုပ်ရှင်ရုံက လက်မှတ်ဝယ်တာမြန်ပေမယ့်၊ အထဲမှာတော့ လူကိုသိပ်သက်တောင့်သက်သာမဖြစ်စေဘူးလို့ ငါထင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_493",
      "hanzi": "我不但会说一点儿汉语，而且对中国历史也有非常浓厚的兴趣。",
      "pinyin": "wǒ bú dàn huì shuō yì diǎnr Hàn yǔ, ér qiě duì Zhōng guó lì shǐ yě yǒu fēi cháng nóng hòu de xìng qù.",
      "burmese": "ငါတရုတ်စကား နည်းနည်းပြောတတ်ရုံတင်မကဘူး၊ တရုတ်သမိုင်းကိုလည်း အရမ်းကိုစိတ်ဝင်စားတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_494",
      "hanzi": "那太好了，这个周末我们学校有一个关于中国历史的文化节，你愿意参加吗？",
      "pinyin": "nà tài hǎo le, zhè ge zhòu mò wǒ men xué xiào yǒu yí ge guān yú Zhōng guó lì shǐ de wén huà jié, nǐ yuàn yì cān jiā ma?",
      "burmese": "ဒါဆိုအရမ်းကောင်းတာပေါ့၊ ဒီစနေတနင်္ဂနွေ ငါတို့ကျောင်းမှာ တရုတ်သမိုင်းနဲ့ပတ်သက်တဲ့ ယဉ်ကျေးမှုပွဲတော်ရှိတယ်၊ မင်းပါဝင်ချင်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_495",
      "hanzi": "你觉得这家新开的饭馆跟以前我们去过的那家比，哪个更好？",
      "pinyin": "nǐ jué de zhè jiā xīn kāi de fàn guǎn gēn yǐ qián wǒ men qù guò de nà jiā bǐ, nǎ ge gèng hǎo?",
      "burmese": "ဒီဆိုင်အသစ်က အရင်ကငါတို့သွားခဲ့ဖူးတဲ့ဆိုင်နဲ့ယှဉ်ရင်၊ ဘယ်ဟာကပိုကောင်းတယ်လို့ မင်းထင်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_496",
      "hanzi": "我觉得这家饭馆里的环境比较安静，但是菜的味道没有另外一家好。",
      "pinyin": "wǒ jué de zhè jiā fàn guǎn lǐ de huán jìng bǐ jiào ān jìng, dàn shì cài de wèi dào méi yǒu lìng wài yī jiā hǎo.",
      "burmese": "ဒီဆိုင်ရဲ့ ပတ်ဝန်းကျင်ကပိုပြီးတိတ်ဆိတ်တယ်လို့ ငါထင်တယ်၊ ဒါပေမယ့် ဟင်းအရသာကတော့ နောက်တစ်ဆိုင်လောက် မကောင်းဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk3_497",
      "hanzi": "请问您可以帮我看一下，我的这块新手表是不是慢了十分钟？",
      "pinyin": "qǐng wèn nín kě yǐ bāng wǒ kàn yí xià, wǒ de zhè kuài xīn shǒu biǎo shì bu shì màn le shí fēn zhōng?",
      "burmese": "ဒါလေးမေးပါရစေ ငယ့်ကိုကူကြည့်ပေးလို့ရမလား၊ ငါ့ရဲ့ဒီလက်ပတ်နာရီအသစ်လေးက ၁၀ မိနစ်လောက်နှေးနေသလားလို့?",
      "category": "daily"
    },
    {
      "id": "hsk3_498",
      "hanzi": "对不起女士，我身上没带手机和手表，我也不知道现在的准确时间。",
      "pinyin": "duì bù qǐ nǚ shì, wǒ shēn shang méi dài shǒu jī hé shǒu biǎo, wǒ yě bù zhī dào xiàn zài de zhǔn què shí jiān.",
      "burmese": "တောင်းပန်ပါတယ်အမျိုးသမီး၊ ကျွန်တော့်မှာ ဖုန်းရော နာရီရောမပါလာလို့၊ အခုအချိန်အတိအကျကို ကျွန်တော်လည်းမသိပါဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk3_499",
      "hanzi": "昨天晚上的英语考试比前几次难多了，有些题我真的没看懂。",
      "pinyin": "zuó tiān wǎn shang de Yīng yǔ kǎo shì bǐ qián jǐ cì nán duō le, yǒu xiē tí wǒ zhēn de méi kàn dǒng.",
      "burmese": "မနေ့ညက အင်္ဂလိပ်စာစာမေးပွဲက အရင်တစ်ခေါက်တွေထက် အများကြီးပိုခက်တယ်၊ တချို့မေးခွန်းတွေကို ငါတကယ်နားမလည်ခဲ့ဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk3_500",
      "hanzi": "只要是你每天努力复习过，就算没考好也不要太难过了。",
      "pinyin": "zhǐ yào shì nǐ měi tiān nǔ lì fù xí guò, jiù suàn méi kǎo hǎo yě bú yào tài nán guò le.",
      "burmese": "မင်းနေ့တိုင်းကြိုးစားပြီး ပြန်လေ့လာခဲ့သရွေ့တော့၊ စာမေးပွဲကောင်းကောင်းမဖြေနိုင်ခဲ့ရင်တောင် အရမ်းဝမ်းမနည်းပါနဲ့。",
      "category": "daily"
    },
    {
      "id": "hsk3_501",
      "hanzi": "你觉得这件衣服的颜色和这双黑色的鞋放在一起好看不好看？",
      "pinyin": "nǐ jué de zhè jiàn yī fu de yán sè hé zhè shuāng hēi sè de xié fàng zài yì qǐ hǎo kàn bù hǎo kàn?",
      "burmese": "ဒီအင်္ကျီအရောင်နဲ့ ဒီအနက်ရောင်ဖိနပ်တစ်ရန်ကို တွဲဝတ်ရင် လှလား မလှဘူးလားလို့ မင်းထင်လဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_502",
      "hanzi": "非常好看，而且这件衣服也很便宜，你现在就可以买下来去试试。",
      "pinyin": "fēi cháng hǎo kàn, ér qiě zhè jiàn yī fu yě hěn pián yi, nǐ xiàn zài jiù kě yǐ mǎi xià lái qù shì shi.",
      "burmese": "အရမ်းလှတယ်၊ ပြီးတော့ ဒီအင်္ကျီကလည်း အရမ်းဈေးသက်သာတယ်၊ မင်းအခုပဲဝယ်လိုက်ပြီး သွားဝတ်ကြည့်လိုက်လို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_503",
      "hanzi": "我觉得我的身体有点儿不舒服，明天我想跟经理说要在里休息一天。",
      "pinyin": "wǒ jué de wǒ de shēn tǐ yǒu diǎnr bù shū fu, míng tiān wǒ xiǎng gēn jīng lǐ shuō yào zài lǐ xiū xi yì tiān.",
      "burmese": "ငါနေလို့သိပ်မကောင်းဘူးလို့ ထင်တယ်၊ မနက်ဖြန် မန်နေဂျာကိုပြောပြီး အထဲမှာ(အိမ်မှာ) တစ်ရက်နားချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_504",
      "hanzi": "好啊，如果你需要去医院看医生，我可以早一点儿过来带你去。",
      "pinyin": "hǎo a, rú guǒ nǐ xū yào qù yī yuàn kàn yī shēng, wǒ kě yǐ zǎo yì diǎnr guò lái dài nǐ qù.",
      "burmese": "ကောင်းပါပြီ၊ တကယ်လို့ ဆေးရုံမှာ ဆရာဝန်သွားပြဖို့လိုရင်၊ ငါနည်းနည်းစောစောလာပြီး မင်းကိုခေါ်သွားပေးလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_505",
      "hanzi": "虽然外面的阳光非常好，但是因为风太大了，感觉还是有点儿冷。",
      "pinyin": "suī rán wài miàn de yáng guāng fēi cháng hǎo, dàn shì yīn wèi fēng tài dà le, gǎn jué hái shì yǒu diǎnr lěng.",
      "burmese": "အပြင်မှာ နေရောင်အရမ်းကောင်းပေမယ့်၊ လေအရမ်းတိုက်နေလို့ နည်းနည်းအေးတယ်လို့ ခံစားရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_506",
      "hanzi": "对，昨天电视上的天气节目里也说，今天大家出门要多穿点儿衣服。",
      "pinyin": "duì, zuó tiān diàn shì shang de tiān qì jié mù lǐ yě shuō, jīn tiān dà jiā chū mén yào duō chuān diǎnr yī fu.",
      "burmese": "ဟုတ်တယ်၊ မနေ့က တီဗွီက ရာသီဥတုအစီအစဉ်မှာလည်း ပြောတယ်၊ ဒီနေ့အပြင်ထွက်ရင် အားလုံးအင်္ကျီနည်းနည်းပိုဝတ်ကြဖို့။",
      "category": "daily"
    },
    {
      "id": "hsk3_507",
      "hanzi": "我听朋友说，从他家到那家新开的咖啡馆走路只要不到十分钟。",
      "pinyin": "wǒ tīng péng yǒu shuō, cóng tā jiā dào nà jiā xīn kāi de kā fēi guǎn zǒu lù zhǐ yào bú dào shí fēn zhōng.",
      "burmese": "ငါသူငယ်ချင်းပြောတာကြားတာက၊ သူ့အိမ်ကနေ အဲ့ဒီအသစ်ဖွင့်တဲ့ ကော်ဖီဆိုင်ကို လမ်းလျှောက်တာ ၁၀ မိနစ်တောင်မကြာဘူးဆိုပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_508",
      "hanzi": "真的吗？听起来很不错，我下次去见他的时候也想去那儿看看。",
      "pinyin": "zhēn de ma? tīng qǐ lái hěn bú cuò, wǒ xià cì qù jiàn tā de shí hou yě xiǎng qù nàr kàn kan.",
      "burmese": "တကယ်လား? ကြားရတာ တော်တော်ကောင်းတယ်၊ နောက်တစ်ခေါက် ငါသူ့ကိုသွားတွေ့ရင် အဲ့ဒီကိုလည်း သွားကြည့်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_509",
      "hanzi": "你在这个公司工作了几年？对这儿的同事们还算是很熟悉了吧？",
      "pinyin": "nǐ zài zhè ge gōng sī gōng zuò le jǐ nián? duì zhèr de tóng shì men hái suàn shì hěn shú xi le ba?",
      "burmese": "ဒီကုမ္ပဏီမှာ မင်းအလုပ်လုပ်တာ ဘယ်နှစ်နှစ်ရှိပြီလဲ? ဒီကလုပ်ဖော်ကိုင်ဖက်တွေနဲ့တော့ အတော်ရင်းနှီးနေလောက်ပြီမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_510",
      "hanzi": "我来这儿已经快五年了，大家都对我很好，总是热情地帮助我做事情。",
      "pinyin": "wǒ lái zhèr yǐ jīng kuài wǔ nián le, dà jiā dōu duì wǒ hěn hǎo, zǒng shì rè qíng de bāng zhù wǒ zuò shì qing.",
      "burmese": "ငါဒီကိုရောက်နေတာ ငါးနှစ်နီးပါးရှိပြီ၊ အားလုံးက ငါ့အပေါ်အရမ်းကောင်းကြတယ်၊ ငါကိစ္စတွေလုပ်ဖို့ အမြဲလိုလိုဖော်ဖော်ရွေရွေနဲ့ ကူညီပေးကြတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_511",
      "hanzi": "你这次考试准备得那么好，一定是因为每天都在认真学习。",
      "pinyin": "nǐ zhè cì kǎo shì zhǔn bèi de nà me hǎo, yí dìng shì yīn wèi měi tiān dōu zài rèn zhēn xué xí.",
      "burmese": "ဒီတစ်ခေါက် စာမေးပွဲအတွက် မင်းအရမ်းကောင်းကောင်းပြင်ဆင်ထားတယ်၊ နေ့တိုင်းသေသေချာချာ စာလေ့လာနေလို့ဖြစ်မှာသေချာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_512",
      "hanzi": "这没什么好奇怪的，想取得好成绩，就得多听多说，多花时间去看书。",
      "pinyin": "zhè méi shén me hǎo qí guài de, xiǎng qǔ dé hǎo chéng jì, jiù děi duō tīng duō shuō, duō huā shí jiān qù kàn shū.",
      "burmese": "ဒါက ဘာမှထူးဆန်းတာမဟုတ်ပါဘူး၊ ရလဒ်ကောင်းချင်ရင် အများကြီးနားထောင်ပြီး အများကြီးပြောရမယ်၊ စာဖတ်ဖို့ အချိန်ပိုပေးရမယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_513",
      "hanzi": "你上次借给我的那本书我非常喜欢看，但是还没看完可能要晚点儿还给你。",
      "pinyin": "nǐ shàng cì jiè gěi wǒ de nà běn shū wǒ fēi cháng xǐ huan kàn, dàn shì hái méi kàn wán kě néng yào wǎn diǎnr huán gěi nǐ.",
      "burmese": "ပြီးခဲ့တဲ့အကြိမ်က မင်းငှားပေးခဲ့တဲ့စာအုပ်ကို ငါဖတ်ရတာအရမ်းသဘောကျတယ်၊ ဒါပေမယ့် မဖတ်ရသေးလို့ မင်းကိုနည်းနည်းနောက်ကျမှ ပြန်ပေးဖြစ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_514",
      "hanzi": "没关系不用客气，我不急着要它，你可以慢慢看，看完了再还就可以。",
      "pinyin": "méi guān xi bú yòng kè qi, wǒ bù jí zhe yào tā, nǐ kě yǐ màn man kàn, kàn wán le zài huán jiù kě yǐ.",
      "burmese": "ရပါတယ် အားနာစရာမလိုပါဘူး၊ ငါက လောလောဆယ်မလိုသေးပါဘူး၊ မင်းဖြည်းဖြည်းချင်းဖတ်လို့ရပါတယ်၊ ဖတ်ပြီးမှပြန်ပေးလို့ရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_515",
      "hanzi": "我家离前面那个火车站有点儿远，每天早上跑过去都会觉得很累。",
      "pinyin": "wǒ jiā lí qián miàn nà ge huǒ chē zhàn yǒu diǎnr yuǎn, měi tiān zǎo shang pǎo guò qù dōu huì jué de hěn lèi.",
      "burmese": "ငါ့အိမ်က ရှေ့ကရထားဘူတာရုံနဲ့ နည်းနည်းဝေးတယ်၊ နေ့တိုင်းမနက် ပြေးသွားရတာ အရမ်းပင်ပန်းတယ်လို့ ခံစားရတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_516",
      "hanzi": "那你为什么不骑一辆自行车过去呢？或者等几分钟去坐公共汽车？",
      "pinyin": "nà nǐ wèi shén me bù qí yí liàng zì xíng chē guò qù ne? huò zhě děng jǐ fēn zhōng qù zuò gōng gòng qì chē?",
      "burmese": "ဒါဆို မင်းဘာလို့ စက်ဘီးတစ်စီးစီးပြီးမသွားတာလဲ? ဒါမှမဟုတ် မိနစ်အနည်းငယ်စောင့်ပြီး ဘတ်စ်ကားစီးသွားလေ?",
      "category": "daily"
    },
    {
      "id": "hsk3_517",
      "hanzi": "你的中国菜做得真好吃，如果我现在学的话很快就能学会吗？",
      "pinyin": "nǐ de Zhōng guó cài zuò de zhēn hǎo chī, rú guǒ wǒ xiàn zài xué de huà hěn kuài jiù néng xué huì ma?",
      "burmese": "မင်းချက်တဲ့ တရုတ်ဟင်းက တကယ်စားကောင်းတယ်၊ တကယ်လို့ ငါအခုသင်မယ်ဆိုရင် မြန်မြန်တတ်နိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_518",
      "hanzi": "其实这很简单的事，只要你多练习几次，以后肯定会比我做得更好。",
      "pinyin": "qí shí zhè hěn jiǎn dān de shì, zhǐ yào nǐ duō liàn xí jǐ cì, yǐ hòu kěn dìng huì bǐ wǒ zuò de gèng hǎo.",
      "burmese": "တကယ်တော့ ဒါကအရမ်းရိုးရှင်းတဲ့ကိစ္စပါ၊ မင်းအကြိမ်ရေများများလေ့ကျင့်နေသရွေ့တော့၊ နောက်ဆိုငါ့ထက်တောင် ပိုကောင်းအောင် ချက်လာနိုင်မှာသေချာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_519",
      "hanzi": "明天的考试你要准备好你的各种东西，因为可能考试的时间非常长。",
      "pinyin": "míng tiān de kǎo shì nǐ yào zhǔn bèi hǎo nǐ de gè zhǒng dōng xi, yīn wèi kě néng kǎo shì de shí jiān fēi cháng cháng.",
      "burmese": "မနက်ဖြန်စာမေးပွဲအတွက် မင်းပစ္စည်းမျိုးစုံကို အဆင်သင့်ပြင်ထားရမယ်၊ ဘာလို့လဲဆိုတော့ စာမေးပွဲအချိန်က အရမ်းရှည်နိုင်လို့ပဲ。",
      "category": "daily"
    },
    {
      "id": "hsk3_520",
      "hanzi": "好的，我已经准备好几支黑色的笔和一块新手表来看着时间，别担心。",
      "pinyin": "hǎo de, wǒ yǐ jīng zhǔn bèi hǎo jǐ zhī hēi sè de bǐ hé yí kuài xīn shǒu biǎo lái kàn zhe shí jiān, bié dān xīn.",
      "burmese": "ကောင်းပါပြီ၊ ငါအနက်ရောင်ဖောင်တိန်အချို့ရယ် အချိန်ကြည့်ဖို့ လက်ပတ်နာရီအသစ်တစ်လုံး ပြင်ဆင်ထားပြီးပါပြီ၊ စိတ်မပူပါနဲ့။",
      "category": "daily"
    },
    {
      "id": "hsk3_521",
      "hanzi": "这里的羊肉为什么变得这么贵？一千块钱才给了我三斤，真是太贵了吧。",
      "pinyin": "zhè lǐ de yáng ròu wèi shén me biàn de zhè me guì? yì qiān kuài qián cái gěi le wǒ sān jīn, zhēn shì tài guì le ba.",
      "burmese": "ဒီက သိုးသားက ဘာလို့ဒီလောက်ဈေးကြီးသွားတာလဲ? ယွမ်တစ်ထောင်ကိုမှ ငါ့ကိုသုံးကျင်းပဲပေးတယ်၊ တကယ်ကို ဈေးအရမ်းကြီးတာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_522",
      "hanzi": "最近的羊肉和牛肉的价格都在增加，所以你想吃便宜的肉可能很难。",
      "pinyin": "zuì jìn de yáng ròu hé niú ròu de jià gé dōu zài zēng jiā, suǒ yǐ nǐ xiǎng chī pián yi de ròu kě néng hěn nán.",
      "burmese": "မကြာသေးခင်က သိုးသားနဲ့ အမဲသားဈေးတွေ အကုန်တက်နေတယ်၊ ဒါကြောင့် မင်းဈေးပေါတဲ့အသားစားချင်ရင်တော့ ခက်လိမ့်မယ်。",
      "category": "daily"
    },
    {
      "id": "hsk3_523",
      "hanzi": "你能把黑板上的那几个特别有意思的生词写在你的新本子上吗？",
      "pinyin": "nǐ néng bǎ hēi bǎn shang de nà jǐ ge tè bié yǒu yì si de shēng cí xiě zài nǐ de xīn běn zi shang ma?",
      "burmese": "ကျောက်သင်ပုန်းပေါ်က အရမ်းစိတ်ဝင်စားစရာကောင်းတဲ့ စကားလုံးအသစ်တွေကို မင်းရဲ့ဗလာစာအုပ်အသစ်ပေါ်မှာ ရေးထားနိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_524",
      "hanzi": "这没什么问题，我可以用这支红色的笔写下来，下课后我再借给你看。",
      "pinyin": "zhè méi shén me wèn tí, wǒ kě yǐ yòng zhè zhī hóng sè de bǐ xiě xià lái, xià kè hòu wǒ zài jiè gěi nǐ kàn.",
      "burmese": "ဒါပြဿနာမရှိပါဘူး၊ ငါဒီအနီရောင်ဖောင်တိန်နဲ့ ရေးမှတ်ထားလိုက်လို့ရတယ်၊ အတန်းဆင်းရင် ငါမင်းကိုငှားကြည့်လို့ရပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_525",
      "hanzi": "我的手机刚才可能丢在那个红色的公共汽车上了，现在怎么也找不到。",
      "pinyin": "wǒ de shǒu jī gāng cái kě néng diū zài nà ge hóng sè de gōng gòng qì chē shang le, xiàn zài zěn me yě zhǎo bú dào.",
      "burmese": "ငါ့ဖုန်းလေးခုနက အဲ့ဒီအနီရောင်ဘတ်စ်ကားပေါ်မှာ ပျောက်သွားတာဖြစ်နိုင်တယ်၊ အခုဘယ်လိုမှရှာမတွေ့တော့ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_526",
      "hanzi": "别着急别生气，你快拿我的这个白色新手机，打个电话过去问一问吧。",
      "pinyin": "bié zháo jí bié shēng qì, nǐ kuài ná wǒ de zhè ge bái sè xīn shǒu jī, dǎ ge diàn huà guò qù wèn yì wèn ba.",
      "burmese": "မလောပါနဲ့ စိတ်မတိုပါနဲ့၊ မင်းငါ့ရဲ့ဒီအဖြူရောင်ဖုန်းအသစ်လေးမြန်မြန်ယူပြီး، အဲ့ဒီကိုဖုန်းတစ်ချက်ဆက်မေးကြည့်လိုက်လေ။",
      "category": "daily"
    },
    {
      "id": "hsk3_527",
      "hanzi": "听说王老师今天下午在教室里要和学生说一件非常重要的事情，你去吗？",
      "pinyin": "tīng shuō Wáng lǎo shī jīn tiān xià wǔ zài jiào shì lǐ yào hé xué shēng shuō yí jiàn fēi cháng zhòng yào de shì qing, nǐ qù ma?",
      "burmese": "ဆရာဝမ်က ဒီနေ့မွန်းလွဲပိုင်း စာသင်ခန်းထဲမှာ ကျောင်းသားတွေကို အရမ်းအရေးကြီးတဲ့ကိစ္စတစ်ခုပြောစရာရှိတယ်လို့ကြားတယ်၊ မင်းသွားမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_528",
      "hanzi": "我听别人说他可能会告诉大家考试的具体时间，我必须要赶过去早点看。",
      "pinyin": "wǒ tīng bié rén shuō tā kě néng huì gào su dà jiā kǎo shì de jù tǐ shí jiān, wǒ bì xū yào gǎn guò qù zǎo diǎn kàn.",
      "burmese": "သူက အားလုံးကိုစာမေးပွဲရက်အတိအကျပြောပြနိုင်တယ်လို့ တခြားလူပြောတာငါကြားတယ်၊ ငါအဲ့ဒီကိုမြန်မြန်သွားပြီး စောစောကြည့်မှဖြစ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_529",
      "hanzi": "我们公司的前几天新来的那位女服务员，每天工作都很忙很辛苦。",
      "pinyin": "wǒ men gōng sī de qián jǐ tiān xīn lái de nà wèi nǚ fú wù yuán, měi tiān gōng zuò dōu hěn máng hěn xīn kǔ.",
      "burmese": "လွန်ခဲ့တဲ့ရက်အနည်းငယ်က ငါတို့ကုမ္ပဏီကိုအသစ်ရောက်လာတဲ့ အမျိုးသမီးစားပွဲထိုးက၊ နေ့တိုင်းအလုပ်အရမ်းများပြီး ပင်ပန်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_530",
      "hanzi": "我知道她的事情，但是大家都说服务员如果努力做得好，一个月会有八千块对吧？",
      "pinyin": "wǒ zhī dào tā de shì qing, dàn shì dà jiā dōu shuō fú wù yuán rú guǒ nǔ lì zuò de hǎo, yí ge yuè huì yǒu bā qiān kuài duì ba?",
      "burmese": "ငါသူ့အကြောင်းသိတယ်၊ ဒါပေမယ့် စားပွဲထိုးက ကြိုးစားပြီးလုပ်ရင်၊ တစ်လကို ယွမ် ရှစ်ထောင်ရမယ်လို့ အားလုံးပြောကြတယ်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_531",
      "hanzi": "这件裙子是你去北京旅游的时候给我的礼物，非常好看，真的很谢谢你。",
      "pinyin": "zhè jiàn qún zi shì nǐ qù Běi jīng lǚ yóu de shí hou gěi wǒ de lǐ wù, fēi cháng hǎo kàn, zhēn de hěn xiè xiè nǐ.",
      "burmese": "ဒီစကတ်က မင်းပေကျင်းကိုခရီးသွားတုန်းက ငါ့ကိုပေးတဲ့လက်ဆောင်ပဲ၊ အရမ်းလှတယ်၊ တကယ်ကိုကျေးဇူးတင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_532",
      "hanzi": "只要是你每天穿上这件衣服觉得很开心不生气，我的这几百块钱也就花得对。",
      "pinyin": "zhǐ yào shì nǐ měi tiān chuān shang zhè jiàn yī fu jué de hěn kāi xīn bù shēng qì, wǒ de zhè jǐ bǎi kuài qián yě jiù huā de duì.",
      "burmese": "ဒီအင်္ကျီလေးဝတ်လိုက်တိုင်း မင်းနေ့တိုင်းပျော်ရွှင်ပြီး စိတ်မတိုဘူးဆိုရင်ပဲ၊ ငါ့ရဲ့ဒီယွမ်ရာချီက သုံးရကျိုးနပ်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_533",
      "hanzi": "你妈妈去年送给我的那只猫非常可爱，你觉得猫好玩还是狗好玩？",
      "pinyin": "nǐ mā ma qù nián sòng gěi wǒ de nà zhī māo fēi cháng kě ài, nǐ jué de māo hǎo wán hái shì gǒu hǎo wán?",
      "burmese": "မင်းအမေမနှစ်က ငါ့ကိုလက်ဆောင်ပေးခဲ့တဲ့ အဲ့ဒီကြောင်လေးက အရမ်းချစ်စရာကောင်းတယ်၊ မင်းကကြောင်ဆော့ရတာကောင်းလား ခွေးဆော့ရတာကောင်းလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_534",
      "hanzi": "我可能会觉得狗比较亲人，但是只要你细心照顾，每只动物都能成为你的好朋友。",
      "pinyin": "wǒ kě néng huì jué de gǒu bǐ jiào qīn rén, dàn shì zhǐ yào nǐ xì xīn zhào gù, měi zhī dòng wù dōu néng chéng wéi nǐ de hǎo péng yǒu.",
      "burmese": "ငါကတော့ ခွေးကလူနဲ့ပိုရင်းနှီးတယ်လို့ ထင်ကောင်းထင်မယ်၊ ဒါပေမယ့် မင်းဂရုတစိုက်စောင့်ရှောက်သရွေ့တော့ တိရစ္ဆာန်တိုင်းက မင်းရဲ့သူငယ်ချင်းကောင်းဖြစ်လာနိုင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_535",
      "hanzi": "今天的工作还没做完，我想在电脑前再坐两个小时把事情都处理好。",
      "pinyin": "jīn tiān de gōng zuò hái méi zuò wán, wǒ xiǎng zài diàn nǎo qián zài zuò liǎng ge xiǎo shí bǎ shì qing dōu chǔ lǐ hǎo.",
      "burmese": "ဒီနေ့အလုပ်က မပြီးသေးဘူး၊ ငါကွန်ပျူတာရှေ့မှာ နောက်ထပ်နှစ်နာရီလောက်ထိုင်ပြီး ကိစ္စတွေအကုန် ရှင်းလင်းလိုက်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_536",
      "hanzi": "工作虽然重要，但是不要看电脑看太长时间，那样对你的眼睛非常不好。",
      "pinyin": "gōng zuò suī rán zhòng yào, dàn shì bú yào kàn diàn nǎo kàn tài cháng shí jiān, nà yàng duì nǐ de yǎn jing fēi cháng bù hǎo.",
      "burmese": "အလုပ်ကအရေးကြီးတယ်ဆိုပေမယ့်၊ ကွန်ပျူတာကို အချိန်အကြာကြီးမကြည့်ပါနဲ့၊ အဲ့ဒါက မင်းမျက်လုံးအတွက် အရမ်းမကောင်းဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk3_537",
      "hanzi": "从我每天跑步的公园到前面那个有名的火车站应该怎么走最快？",
      "pinyin": "cóng wǒ měi tiān pǎo bù de gōng yuán dào qián miàn nà ge yǒu míng de huǒ chē zhàn yīng gāi zěn me zǒu zuì kuài?",
      "burmese": "ငါနေ့တိုင်းပြေးတဲ့ပန်းခြံကနေ ရှေ့က နာမည်ကြီးတဲ့ ရထားဘူတာရုံကိုသွားရင် ဘယ်လိုသွားရတာအမြန်ဆုံးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_538",
      "hanzi": "你从这条路出去之后一直往前骑自行车，不要拐弯，过了前边就会看到车站在哪儿了。",
      "pinyin": "nǐ cóng zhè tiáo lù chū qu zhī hòu yì zhí wǎng qián qí zì xíng chē, bú yào guǎi wān, guò le qián biān jiù huì kàn dào chē zhàn zài nǎr le.",
      "burmese": "မင်းဒီလမ်းကထွက်ပြီးရင် ရှေ့ကိုတည့်တည့် စက်ဘီးစီးသွား၊ ကွေ့စရာမလိုဘူး၊ ရှေ့နားလေးကျော်သွားတာနဲ့ ဘူတာရုံဘယ်မှာလဲဆိုတာ မြင်ရလိမ့်မယ်。",
      "category": "daily"
    },
    {
      "id": "hsk3_539",
      "hanzi": "今天晚上的雪比昨天大得多很多，你现在要是洗完澡想去商店可能要多穿一点衣服了。",
      "pinyin": "jīn tiān wǎn shang de xuě bǐ zuó tiān dà de duō hěn duō, nǐ xiàn zài yào shì xǐ wán zǎo xiǎng qù shāng diàn kě néng yào duō chuān yì diǎn yī fu le.",
      "burmese": "ဒီနေ့ည နှင်းကျတာ မနေ့ကထက်အများကြီးပိုများတယ်၊ အခုမင်းရေချိုးပြီးလို့ ဆိုင်သွားချင်ရင် အင်္ကျီနည်းနည်းပိုဝတ်ရလိမ့်မယ်。",
      "category": "daily"
    },
    {
      "id": "hsk3_540",
      "hanzi": "我不去了外面太冷了，我还是就坐在沙发上一边看电视里面的新闻一边喝热茶吧。",
      "pinyin": "wǒ bú qù le wài miàn tài lěng le, wǒ hái shì jiù zuò zài shā fā shang yì biān kàn diàn shì lǐ miàn de xīn wén yì biān hē rè chá ba.",
      "burmese": "ငါမသွားတော့ဘူး အပြင်မှာအရမ်းအေးတယ်၊ ငါဆိုဖာပေါ်မှာထိုင်ပြီး တီဗွီထဲကသတင်းကြည့်ရင်း ရေနွေးကြမ်းသောက်နေတာပဲကောင်းပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_541",
      "hanzi": "对不起女士，你的右边的那位穿着红颜色的漂亮衣服的小女孩是你女儿还是别人？",
      "pinyin": "duì bù qǐ nǚ shì, nǐ de yòu biān de nà wèi chuān zhe hóng yán sè de piào liang yī fu de xiǎo nǚ hái shì nǐ nǚ ér hái shì bié rén?",
      "burmese": "တောင်းပန်ပါတယ်အမျိုးသမီး၊ မင်းညာဘက်က အနီရောင်အင်္ကျီလှလှလေးဝတ်ထားတဲ့ ကောင်မလေးက မင်းသမီးလား ဒါမှမဟုတ် တခြားလူလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_542",
      "hanzi": "她是我朋友刚上小学的妹妹，因为大家都特别忙没时间，所以她今天坐在我这儿玩几个小时。",
      "pinyin": "tā shì wǒ péng yǒu gāng shàng xiǎo xué de mèi mei, yīn wèi dà jiā dōu tè bié máng méi shí jiān, suǒ yǐ tā jīn tiān zuò zài wǒ zhèr wán jǐ ge xiǎo shí.",
      "burmese": "သူက မူလတန်းစတက်တဲ့ ငါ့သူငယ်ချင်းရဲ့ ညီမလေးပါ၊ အားလုံးကအရမ်းအလုပ်များပြီး အချိန်မရှိကြလို့၊ ဒီနေ့သူငါ့ဆီမှာ နာရီအနည်းငယ်လာဆော့နေတာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_543",
      "hanzi": "这个医院的医生非常懂为什么大家吃了那么贵的药之后身体还是很难受，对吧？",
      "pinyin": "zhè ge yī yuàn de yī shēng fēi cháng dǒng wèi shén me dà jiā chī le nà me guì de yào zhī hòu shēn tǐ hái shì hěn nán shòu, duì ba?",
      "burmese": "ဒီဆေးရုံက ဆရာဝန်တွေက လူတွေဘာလို့ အဲ့လောက်ဈေးကြီးတဲ့ဆေးတွေသောက်ပြီးတာတောင် နေမကောင်းဖြစ်နေသေးလဲဆိုတာကို အရမ်းနားလည်တယ်၊ ဟုတ်တယ်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_544",
      "hanzi": "是的，大家要是都有一个很好的每天做两百个运动的时间，谁还会天天跑去吃不便宜的药呢？",
      "pinyin": "shì de, dà jiā yào shì dōu yǒu yí ge hěn hǎo de měi tiān zuò liǎng bǎi ge yùn dòng de shí jiān, shuí hái huì tiān tiān pǎo qù chī bù pián yi de yào ne?",
      "burmese": "ဟုတ်တယ်၊ လူတိုင်းမှာသာ နေ့တိုင်းလေ့ကျင့်ခန်း အကြိမ်နှစ်ရာလုပ်ဖို့ အချိန်အလုံအလောက်ရှိနေရင်၊ ဘယ်သူကများ နေ့တိုင်းဈေးမကြီးတဲ့ဆေးတွေ သွားစားနေဖို့ လိုတော့မှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_545",
      "hanzi": "经理刚才说我们公司的业绩比去年夏天的时候明显提高了不少呢，大家都真高兴啊。",
      "pinyin": "jīng lǐ gāng cái shuō wǒ men gōng sī de yè jì bǐ qù nián xià tiān de shí hou míng xiǎn tí gāo le bù shǎo ne, dà jiā dōu zhēn gāo xìng a.",
      "burmese": "မန်နေဂျာခုနကပြောတာ ငါတို့ကုမ္ပဏီရဲ့ စွမ်းဆောင်ရည်က မနှစ်ကနွေရာသီတုန်းကထက် သိသိသာသာတက်လာတယ်တဲ့၊ အားလုံးတကယ်ပျော်နေကြတာပဲ။",
      "category": "daily"
    },
    {
      "id": "hsk3_546",
      "hanzi": "要是能一直保持这种增长的势头，我估计年底的时候大家都会拿到丰厚的奖金。",
      "pinyin": "yào shì néng yì zhí bǎo chí zhè zhǒng zēng zhǎng de shì tóu, wǒ gū jì nián dǐ de shí hou dà jiā dōu huì ná dào fēng hòu de jiǎng jīn.",
      "burmese": "ဒီလိုတိုးတက်တဲ့အရှိန်ကိုသာ ဆက်ထိန်းထားနိုင်ရင်၊ နှစ်ကုန်ကျရင် အားလုံးဆုကြေးငွေအများကြီး ရလိမ့်မယ်လို့ ငါခန့်မှန်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_547",
      "hanzi": "昨天晚上的那部新电影真是太没意思了！我还以为会有特别恐怖的情节发生呢。",
      "pinyin": "zuó tiān wǎn shang de nà bù xīn diàn yǐng zhēn shì tài méi yì si le! wǒ hái yǐ wéi huì yǒu tè bié kǒng bù de qíng jié fā shēng ne.",
      "burmese": "မနေ့ညက ရုပ်ရှင်အသစ်က တကယ်ဘာမှစိတ်ဝင်စားစရာမကောင်းဘူး! ငါက အရမ်းကြောက်စရာကောင်းတဲ့ ဇာတ်လမ်းတွေဖြစ်လာမယ်လို့တောင် ထင်နေတာ။",
      "category": "daily"
    },
    {
      "id": "hsk3_548",
      "hanzi": "所以啊以后选电影前，还是得先在网上去看看其他人给这部片子打的评分如何才能去买票。",
      "pinyin": "suǒ yǐ a yǐ hòu xuǎn diàn yǐng qián, hái shì děi xiān zài wǎng shang qù kàn kan qí tā rén gěi zhè bù piàn zi dǎ de píng fēn rú hé cái néng qù mǎi piào.",
      "burmese": "ဒါကြောင့် နောက်ဆိုရုပ်ရှင်မရွေးခင်၊ အင်တာနက်ပေါ်မှာ တခြားလူတွေ ဒီကားကိုဘယ်လိုအမှတ်ပေးထားလဲဆိုတာ အရင်ကြည့်ပြီးမှ လက်မှတ်ဝယ်သင့်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_549",
      "hanzi": "请问图书馆里能不能借用一下电脑打印资料？我正好急需把这份文件送去办公室给校长看过。",
      "pinyin": "qǐng wèn tú shū guǎn lǐ néng bù néng jiè yòng yí xià diàn nǎo dǎ yìn zī liào? wǒ zhèng hǎo jí xū bǎ zhè fèn wén jiàn sòng qù bàn gōng shì gěi xiào zhǎng kàn guò.",
      "burmese": "ဒါလေးမေးပါရစေ စာကြည့်တိုက်မှာ ကွန်ပျူတာငှားပြီး စာရွက်စာတမ်း Print ထုတ်လို့ရမလား? ငါဒီဖိုင်ကို ကျောင်းအုပ်ကြီးကြည့်ဖို့ ရုံးခန်းကိုအမြန်ပို့ဖို့ လိုနေလို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_550",
      "hanzi": "没问题，前面右手边的第二个桌子上就有一台彩色打印机，你可以随时过去操作一下。",
      "pinyin": "méi wèn tí, qián miàn yòu shǒu biān de dì èr ge zhuō zi shang jiù yǒu yì tái cǎi sè dǎ yìn jī, nǐ kě yǐ suí shí guò qù cāo zuò yí xià.",
      "burmese": "ပြဿနာမရှိပါဘူး၊ ရှေ့ညာဘက် ဒုတိယစားပွဲပေါ်မှာ အရောင်ပါတဲ့ Print စက်တစ်လုံးရှိတယ်၊ မင်းအချိန်မရွေးသွားပြီး အသုံးပြုလို့ရပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_551",
      "hanzi": "我奶奶每天都在小区的公园里跟其他老人一起跳舞锻炼身体呢。",
      "pinyin": "wǒ nǎi nai měi tiān dōu zài xiǎo qū de gōng yuán lǐ gēn qí tā lǎo rén yì qǐ tiào wǔ duàn liàn shēn tǐ ne.",
      "burmese": "ငါ့အဖွားက နေ့တိုင်းရပ်ကွက်ထဲက ပန်းခြံမှာ တခြားအဘိုးအဘွားတွေနဲ့အတူ ကခုန်ပြီး လေ့ကျင့်ခန်းလုပ်နေတယ်လေ။",
      "category": "daily"
    },
    {
      "id": "hsk3_552",
      "hanzi": "这样对老年人的健康有很大的好处，比起老待在家里强多了。",
      "pinyin": "zhè yàng duì lǎo nián rén de jiàn kāng yǒu hěn dà de hǎo chù, bǐ qǐ lǎo dāi zài jiā lǐ qiáng duō le.",
      "burmese": "ဒီလိုလုပ်တာက သက်ကြီးရွယ်အိုတွေရဲ့ ကျန်းမာရေးအတွက် အများကြီးအကျိုးရှိတယ်၊ အိမ်ထဲမှာချည်းပဲငုတ်တုတ်ထိုင်နေတာထက် အများကြီးသာတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_553",
      "hanzi": "你下个周末能抽出时间陪我去买一件适合参加聚会穿的新裙子吗？",
      "pinyin": "nǐ xià ge zhòu mò néng chōu chū shí jiān péi wǒ qù mǎi yí jiàn shì hé cān jiā jù huì chuān de xīn qún zi ma?",
      "burmese": "နောက်အပတ်စနေတနင်္ဂနွေမှာ ပါတီတက်ဖို့ သင့်တော်မယ့် စကတ်အသစ်သွားဝယ်ပေးဖို့ အချိန်ပေးနိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_554",
      "hanzi": "没问题啊。我们还可以顺便去那家我们一直想尝尝的日式餐厅吃午饭呢。",
      "pinyin": "méi wèn tí a. wǒ men hái kě yǐ shùn biàn qù nà jiā wǒ men yì zhí xiǎng cháng cháng de Rì shì cān tīng chī wǔ fàn ne.",
      "burmese": "ပြဿနာမရှိပါဘူး။ ငါတို့က ငါတို့စားကြည့်ချင်နေတဲ့ အဲ့ဒီဂျပန်စားသောက်ဆိုင်မှာပါ နေ့လယ်စာဝင်စားလို့ရတာပေါ့။",
      "category": "daily"
    },
    {
      "id": "hsk3_555",
      "hanzi": "不好意思，请问去开往火车站方向的那路公共汽车是从这个站台上车吗？",
      "pinyin": "bù hǎo yì si, qǐng wèn qù kāi wǎng huǒ chē zhàn fāng xiàng de nà lù gōng gòng qì chē shì cóng zhè ge zhàn tái shàng chē ma?",
      "burmese": "တောင်းပန်ပါတယ်၊ ရထားဘူတာရုံဘက်ကိုသွားမယ့် အဲ့ဒီဘတ်စ်ကားက ဒီမှတ်တိုင်ကနေ တက်ရတာလားလို့?",
      "category": "daily"
    },
    {
      "id": "hsk3_556",
      "hanzi": "不是的，女士，你需要过马路到对面的站台去等十七路车才能直接到。",
      "pinyin": "bú shì de, nǚ shì, nǐ xū yào guò mǎ lù dào duì miàn de zhàn tái qù děng shí qī lù chē cái néng zhí jiē dào.",
      "burmese": "မဟုတ်ပါဘူး အမျိုးသမီး၊ သင်လမ်းကူးပြီး ဟိုဘက်မှတ်တိုင်မှာ ၁၇ လိုင်းကားကိုစောင့်မှ တိုက်ရိုက်ရောက်မှာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_557",
      "hanzi": "为什么这几个月都没有收到我以前在网上订购的那本关于北京旅游的画册？",
      "pinyin": "wèi shén me zhè jǐ ge yuè dōu méi yǒu shōu dào wǒ yǐ qián zài wǎng shang dìng gòu de nà běn guān yú Běi jīng lǚ yóu de huà cè?",
      "burmese": "ငါအရင်က အွန်လိုင်းကနေမှာထားတဲ့ ပေကျင်းခရီးသွားဓာတ်ပုံစာအုပ်က ဘာလို့ဒီလတွေထဲမှာ မရောက်လာရတာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_558",
      "hanzi": "你快打电话给那个卖书的客服问一下，也许是你在填地址或者是借款时写错了什么呢。",
      "pinyin": "nǐ kuài dǎ diàn huà gěi nà ge mài shū de kè fú wèn yí xià, yě xǔ shì nǐ zài tián dì zhǐ huò zhě shì jiè kuǎn shí xiě cuò le shén me ne.",
      "burmese": "မင်းစာအုပ်ရောင်းတဲ့ Customer Service ကိုဖုန်းမြန်မြန်ဆက်မေးကြည့်ဦး၊ မင်းလိပ်စာဖြည့်တာ ဒါမှမဟုတ် ငွေချေတာမှာ တစ်ခုခုမှားရေးမိလို့ဖြစ်မယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_559",
      "hanzi": "老师让你马上把黑板上这五个长句子翻译成你们的语言写在作业本上。",
      "pinyin": "lǎo shī ràng nǐ mǎ shàng bǎ hēi bǎn shang zhè wǔ ge cháng jù zi fān yì chéng nǐ men de yǔ yán xiě zài zuò yè běn shang.",
      "burmese": "ဆရာက မင်းကိုချက်ချင်း ဒီကျောက်သင်ပုန်းပေါ်က စာကြောင်းရှည်ငါးကြောင်းကို မင်းတို့ဘာသာစကားနဲ့ ဘာသာပြန်ပြီး အိမ်စာစာအုပ်ထဲရေးခိုင်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_560",
      "hanzi": "天啊，我觉得这实在太难了，其中不仅有很多我还不会的汉字而且结构复杂！",
      "pinyin": "tiān a, wǒ jué de zhè shí zài tài nán le, qí zhōng bù jǐn yǒu hěn duō wǒ hái bú huì de Hàn zì ér qiě jié gòu fù zá!",
      "burmese": "ဘုရားရေ၊ ငါဒါတကယ်ခက်တယ်လို့ထင်တယ်၊ ဒီအထဲမှာ ငါမတတ်သေးတဲ့ တရုတ်စာအများကြီးပါရုံတင်မက သဒ္ဒါဖွဲ့စည်းပုံကလည်း ရှုပ်ထွေးတယ်!",
      "category": "daily"
    },
    {
      "id": "hsk3_561",
      "hanzi": "听说王老师今天下午在教室里要和学生说一件非常重要的事情，你去吗？",
      "pinyin": "tīng shuō Wáng lǎo shī jīn tiān xià wǔ zài jiào shì lǐ yào hé xué shēng shuō yí jiàn fēi cháng zhòng yào de shì qing, nǐ qù ma?",
      "burmese": "ဆရာဝမ်က ဒီနေ့မွန်းလွဲပိုင်း စာသင်ခန်းထဲမှာ ကျောင်းသားတွေကို အရမ်းအရေးကြီးတဲ့ကိစ္စတစ်ခုပြောစရာရှိတယ်လို့ကြားတယ်၊ မင်းသွားမလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_562",
      "hanzi": "我听别人说他可能会告诉大家考试的具体时间，我必须要赶过去早点看。",
      "pinyin": "wǒ tīng bié rén shuō tā kě néng huì gào su dà jiā kǎo shì de jù tǐ shí jiān, wǒ bì xū yào gǎn guò qù zǎo diǎn kàn.",
      "burmese": "သူက အားလုံးကိုစာမေးပွဲရက်အတိအကျပြောပြနိုင်တယ်လို့ တခြားလူပြောတာငါကြားတယ်၊ ငါအဲ့ဒီကိုမြန်မြန်သွားပြီး စောစောကြည့်မှဖြစ်မယ်。",
      "category": "daily"
    },
    {
      "id": "hsk3_563",
      "hanzi": "我们公司的前几天新来的那位女服务员，每天工作都很忙很辛苦。",
      "pinyin": "wǒ men gōng sī de qián jǐ tiān xīn lái de nà wèi nǚ fú wù yuán, měi tiān gōng zuò dōu hěn máng hěn xīn kǔ.",
      "burmese": "လွန်ခဲ့တဲ့ရက်အနည်းငယ်က ငါတို့ကုမ္ပဏီကိုအသစ်ရောက်လာတဲ့ အမျိုးသမီးစားပွဲထိုးက၊ နေ့တိုင်းအလုပ်အရမ်းများပြီး ပင်ပန်းတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_564",
      "hanzi": "我知道她的事情，但是大家都说服务员如果努力做得好，一个月会有八千块对吧？",
      "pinyin": "wǒ zhī dào tā de shì qing, dàn shì dà jiā dōu shuō fú wù yuán rú guǒ nǔ lì zuò de hǎo, yí ge yuè huì yǒu bā qiān kuài duì ba?",
      "burmese": "ငါသူ့အကြောင်းသိတယ်၊ ဒါပေမယ့် စားပွဲထိုးက ကြိုးစားပြီးလုပ်ရင်၊ တစ်လကို ယွမ် ရှစ်ထောင်ရမယ်လို့ အားလုံးပြောကြတယ်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_565",
      "hanzi": "这件裙子是你去北京旅游的时候给我的礼物，非常好看，真的很谢谢你。",
      "pinyin": "zhè jiàn qún zi shì nǐ qù Běi jīng lǚ yóu de shí hou gěi wǒ de lǐ wù, fēi cháng hǎo kàn, zhēn de hěn xiè xiè nǐ.",
      "burmese": "ဒီစကတ်က မင်းပေကျင်းကိုခရီးသွားတုန်းက ငါ့ကိုပေးတဲ့လက်ဆောင်ပဲ၊ အရမ်းလှတယ်၊ တကယ်ကိုကျေးဇူးတင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_566",
      "hanzi": "只要是你每天穿上这件衣服觉得很开心不生气，我的这几百块钱也就花得对。",
      "pinyin": "zhǐ yào shì nǐ měi tiān chuān shang zhè jiàn yī fu jué de hěn kāi xīn bù shēng qì, wǒ de zhè jǐ bǎi kuài qián yě jiù huā de duì.",
      "burmese": "ဒီအင်္ကျီလေးဝတ်လိုက်တိုင်း မင်းနေ့တိုင်းပျော်ရွှင်ပြီး စိတ်မတိုဘူးဆိုရင်ပဲ၊ ငါ့ရဲ့ဒီယွမ်ရာချီက သုံးရကျိုးနပ်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_567",
      "hanzi": "你妈妈去年送给我的那只猫非常可爱，你觉得猫好玩还是狗好玩？",
      "pinyin": "nǐ mā ma qù nián sòng gěi wǒ de nà zhī māo fēi cháng kě ài, nǐ jué de māo hǎo wán hái shì gǒu hǎo wán?",
      "burmese": "မင်းအမေမနှစ်က ငါ့ကိုလက်ဆောင်ပေးခဲ့တဲ့ အဲ့ဒီကြောင်လေးက အရမ်းချစ်စရာကောင်းတယ်၊ မင်းကကြောင်ဆော့ရတာကောင်းလား ခွေးဆော့ရတာကောင်းလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_568",
      "hanzi": "我可能会觉得狗比较亲人，但是只要你细心照顾，每只动物都能成为你的好朋友。",
      "pinyin": "wǒ kě néng huì jué de gǒu bǐ jiào qīn rén, dàn shì zhǐ yào nǐ xì xīn zhào gù, měi zhī dòng wù dōu néng chéng wéi nǐ de hǎo péng yǒu.",
      "burmese": "ငါကတော့ ခွေးကလူနဲ့ပိုရင်းနှီးတယ်လို့ ထင်ကောင်းထင်မယ်၊ ဒါပေမယ့် မင်းဂရုတစိုက်စောင့်ရှောက်သရွေ့တော့ တိရစ္ဆာန်တိုင်းက မင်းရဲ့သူငယ်ချင်းကောင်းဖြစ်လာနိုင်ပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_569",
      "hanzi": "今天的工作还没做完，我想在电脑前再坐两个小时把事情都处理好。",
      "pinyin": "jīn tiān de gōng zuò hái méi zuò wán, wǒ xiǎng zài diàn nǎo qián zài zuò liǎng ge xiǎo shí bǎ shì qing dōu chǔ lǐ hǎo.",
      "burmese": "ဒီနေ့အလုပ်က မပြီးသေးဘူး၊ ငါကွန်ပျူတာရှေ့မှာ နောက်ထပ်နှစ်နာရီလောက်ထိုင်ပြီး ကိစ္စတွေအကုန် ရှင်းလင်းလိုက်ချင်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_570",
      "hanzi": "工作虽然重要，但是不要看电脑看太长时间，那样对你的眼睛非常不好。",
      "pinyin": "gōng zuò suī rán zhòng yào, dàn shì bú yào kàn diàn nǎo kàn tài cháng shí jiān, nà yàng duì nǐ de yǎn jing fēi cháng bù hǎo.",
      "burmese": "အလုပ်ကအရေးကြီးတယ်ဆိုပေမယ့်၊ ကွန်ပျူတာကို အချိန်အကြာကြီးမကြည့်ပါနဲ့၊ အဲ့ဒါက မင်းမျက်လုံးအတွက် အရမ်းမကောင်းဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk3_571",
      "hanzi": "从我每天跑步的公园到前面那个有名的火车站应该怎么走最快？",
      "pinyin": "cóng wǒ měi tiān pǎo bù de gōng yuán dào qián miàn nà ge yǒu míng de huǒ chē zhàn yīng gāi zěn me zǒu zuì kuài?",
      "burmese": "ငါနေ့တိုင်းပြေးတဲ့ပန်းခြံကနေ ရှေ့က နာမည်ကြီးတဲ့ ရထားဘူတာရုံကိုသွားရင် ဘယ်လိုသွားရတာအမြန်ဆုံးလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_572",
      "hanzi": "你从这条路出去之后一直往前骑自行车，不要拐弯，过了前边就会看到车站在哪儿了。",
      "pinyin": "nǐ cóng zhè tiáo lù chū qu zhī hòu yì zhí wǎng qián qí zì xíng chē, bú yào guǎi wān, guò le qián biān jiù huì kàn dào chē zhàn zài nǎr le.",
      "burmese": "မင်းဒီလမ်းကထွက်ပြီးရင် ရှေ့ကိုတည့်တည့် စက်ဘီးစီးသွား၊ ကွေ့စရာမလိုဘူး၊ ရှေ့နားလေးကျော်သွားတာနဲ့ ဘူတာရုံဘယ်မှာလဲဆိုတာ မြင်ရလိမ့်မယ်。",
      "category": "daily"
    },
    {
      "id": "hsk3_573",
      "hanzi": "今天晚上的雪比昨天大得多很多，你现在要是洗完澡想去商店可能要多穿一点衣服了。",
      "pinyin": "jīn tiān wǎn shang de xuě bǐ zuó tiān dà de duō hěn duō, nǐ xiàn zài yào shì xǐ wán zǎo xiǎng qù shāng diàn kě néng yào duō chuān yì diǎn yī fu le.",
      "burmese": "ဒီနေ့ည နှင်းကျတာ မနေ့ကထက်အများကြီးပိုများတယ်၊ အခုမင်းရေချိုးပြီးလို့ ဆိုင်သွားချင်ရင် အင်္ကျီနည်းနည်းပိုဝတ်ရလိမ့်မယ်。",
      "category": "daily"
    },
    {
      "id": "hsk3_574",
      "hanzi": "我不去了外面太冷了，我还是就坐在沙发上一边看电视里面的新闻一边喝热茶吧。",
      "pinyin": "wǒ bú qù le wài miàn tài lěng le, wǒ hái shì jiù zuò zài shā fā shang yì biān kàn diàn shì lǐ miàn de xīn wén yì biān hē rè chá ba.",
      "burmese": "ငါမသွားတော့ဘူး အပြင်မှာအရမ်းအေးတယ်၊ ငါဆိုဖာပေါ်မှာထိုင်ပြီး တီဗွီထဲကသတင်းကြည့်ရင်း ရေနွေးကြမ်းသောက်နေတာပဲကောင်းပါတယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_575",
      "hanzi": "对不起女士，你的右边的那位穿着红颜色的漂亮衣服的小女孩是你女儿还是别人？",
      "pinyin": "duì bù qǐ nǚ shì, nǐ de yòu biān de nà wèi chuān zhe hóng yán sè de piào liang yī fu de xiǎo nǚ hái shì nǐ nǚ ér hái shì bié rén?",
      "burmese": "တောင်းပန်ပါတယ်အမျိုးသမီး၊ မင်းညာဘက်က အနီရောင်အင်္ကျီလှလှလေးဝတ်ထားတဲ့ ကောင်မလေးက မင်းသမီးလား ဒါမှမဟုတ် တခြားလူလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_576",
      "hanzi": "她是我朋友刚上小学的妹妹，因为大家都特别忙没时间，所以她今天坐在我这儿玩几个小时。",
      "pinyin": "tā shì wǒ péng yǒu gāng shàng xiǎo xué de mèi mei, yīn wèi dà jiā dōu tè bié máng méi shí jiān, suǒ yǐ tā jīn tiān zuò zài wǒ zhèr wán jǐ ge xiǎo shí.",
      "burmese": "သူက မူလတန်းစတက်တဲ့ ငါ့သူငယ်ချင်းရဲ့ ညီမလေးပါ၊ အားလုံးကအရမ်းအလုပ်များပြီး အချိန်မရှိကြလို့၊ ဒီနေ့သူငါ့ဆီမှာ နာရီအနည်းငယ်လာဆော့နေတာပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_577",
      "hanzi": "这个医院的医生非常懂为什么大家吃了那么贵的药之后身体还是很难受，对吧？",
      "pinyin": "zhè ge yī yuàn de yī shēng fēi cháng dǒng wèi shén me dà jiā chī le nà me guì de yào zhī hòu shēn tǐ hái shì hěn nán shòu, duì ba?",
      "burmese": "ဒီဆေးရုံက ဆရာဝန်တွေက လူတွေဘာလို့ အဲ့လောက်ဈေးကြီးတဲ့ဆေးတွေသောက်ပြီးတာတောင် နေမကောင်းဖြစ်နေသေးလဲဆိုတာကို အရမ်းနားလည်တယ်၊ ဟုတ်တယ်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_578",
      "hanzi": "是的，大家要是都有一个很好的每天做两百个运动的时间，谁还会天天跑去吃不便宜的药呢？",
      "pinyin": "shì de, dà jiā yào shì dōu yǒu yí ge hěn hǎo de měi tiān zuò liǎng bǎi ge yùn dòng de shí jiān, shuí hái huì tiān tiān pǎo qù chī bù pián yi de yào ne?",
      "burmese": "ဟုတ်တယ်၊ လူတိုင်းမှာသာ နေ့တိုင်းလေ့ကျင့်ခန်း အကြိမ်နှစ်ရာလုပ်ဖို့ အချိန်အလုံအလောက်ရှိနေရင်၊ ဘယ်သူကများ နေ့တိုင်းဈေးမကြီးတဲ့ဆေးတွေ သွားစားနေဖို့ လိုတော့မှာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_579",
      "hanzi": "昨天晚上的那部新电影真是太没意思了！我还以为会有特别恐怖的情节发生呢。",
      "pinyin": "zuó tiān wǎn shang de nà bù xīn diàn yǐng zhēn shì tài méi yì si le! wǒ hái yǐ wéi huì yǒu tè bié kǒng bù de qíng jié fā shēng ne.",
      "burmese": "မနေ့ညက ရုပ်ရှင်အသစ်က တကယ်ဘာမှစိတ်ဝင်စားစရာမကောင်းဘူး! ငါက အရမ်းကြောက်စရာကောင်းတဲ့ ဇာတ်လမ်းတွေဖြစ်လာမယ်လို့တောင် ထင်နေတာ。",
      "category": "daily"
    },
    {
      "id": "hsk3_580",
      "hanzi": "所以啊以后选电影前，还是得先在网上去看看其他人给这部片子打的评分如何才能去买票。",
      "pinyin": "suǒ yǐ a yǐ hòu xuǎn diàn yǐng qián, hái shì děi xiān zài wǎng shang qù kàn kan qí tā rén gěi zhè bù piàn zi dǎ de píng fēn rú hé cái néng qù mǎi piào.",
      "burmese": "ဒါကြောင့် နောက်ဆိုရုပ်ရှင်မရွေးခင်၊ အင်တာနက်ပေါ်မှာ တခြားလူတွေ ဒီကားကိုဘယ်လိုအမှတ်ပေးထားလဲဆိုတာ အရင်ကြည့်ပြီးမှ လက်မှတ်ဝယ်သင့်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_581",
      "hanzi": "请问您，你们这里的菜单上有没有什么是不用加辣椒但是又很好吃的那一种炒菜？",
      "pinyin": "qǐng wèn nín, nǐ men zhè lǐ de cài dān shang yǒu méi yǒu shén me shì bú yòng jiā là jiāo dàn shì yòu hěn hǎo chī de nà yì zhǒng chǎo cài?",
      "burmese": "ဒါလေးမေးပါရစေ၊ ခင်ဗျားတို့ဒီကမီနူးမှာ ငရုတ်သီးထည့်စရာမလိုဘဲ တကယ်စားကောင်းတဲ့ အကြော်ဟင်းမျိုး ရှိပါသလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_582",
      "hanzi": "当然有啦！我推荐你试试这道番茄炒鸡蛋它不仅味道甜甜的而且营养非常丰富呢！",
      "pinyin": "dāng rán yǒu la! wǒ tuī jiàn nǐ shì shi zhè dào fān qié chǎo jī dàn tā bù jǐn wèi dào tián tián de ér qiě yíng yǎng fēi cháng fēng fù ne!",
      "burmese": "ဒါပေါ့ရှိတာပေါ့! ကျွန်မတို့ဒီခရမ်းချဉ်သီးကြက်ဥကြော်လေးကို စမ်းကြည့်ဖို့အကြံပေးချင်ပါတယ်၊ သူကအရသာချိုရုံတင်မက အာဟာရလည်းအရမ်းပြည့်ဝပါတယ်!",
      "category": "daily"
    },
    {
      "id": "hsk3_583",
      "hanzi": "如果你的电脑还是没法自己连上这里的网络，你可以先用我的手机热点或者重新按一下这个红色的开关哦。",
      "pinyin": "rú guǒ nǐ de diàn nǎo hái shì méi fǎ zì jǐ lián shàng zhè lǐ de wǎng luò, nǐ kě yǐ xiān yòng wǒ de shǒu jī rè diǎn huò zhě chóng xīn àn yí xià zhè ge hóng sè de kāi guān o.",
      "burmese": "တကယ်လို့ မင်းကွန်ပျူတာက ဒီကဝိုင်ဖိုင်ကို သူ့ဟာသူချိတ်လို့မရသေးရင်၊ မင်းငါ့ဖုန်း Hotspot ကိုအရင်သုံးလို့ရတယ် ဒါမှမဟုတ် ဒီအနီရောင်ခလုတ်ကို တစ်ချက်ပြန်နှိပ်ကြည့်နော်။",
      "category": "daily"
    },
    {
      "id": "hsk3_584",
      "hanzi": "谢谢我把它关掉又等了一分钟然后重新启动，竟然就已经连上来开始能用了！",
      "pinyin": "xiè xie wǒ bǎ tā guān diào yòu děng le yì fēn zhōng rán hòu chóng xīn qǐ dòng, jìng rán jiù yǐ jīng lián shàng lái kāi shǐ néng yòng le!",
      "burmese": "ကျေးဇူးပဲ ငါအဲ့ဒါကိုပိတ်ပြီး တစ်မိနစ်လောက်စောင့်ပြီး ပြန်ဖွင့်လိုက်တော့၊ ချက်ချင်းချိတ်မိပြီး စသုံးလို့ရသွားပြီ!",
      "category": "daily"
    },
    {
      "id": "hsk3_585",
      "hanzi": "虽然我的工作确实很忙碌，可是不管我有多累每天还是会抽出两三个小时辅导我的孩子做作业及学习中文的。",
      "pinyin": "suī rán wǒ de gōng zuò què shí hěn máng lù, kě shì bù guǎn wǒ yǒu duō lèi měi tiān hái shì huì chōu chū liǎng sān ge xiǎo shí fǔ dǎo wǒ de hái zi zuò zuò yè jí xué xí Zhōng wén de.",
      "burmese": "ငါ့အလုပ်က တကယ်အလုပ်များတယ်ဆိုပေမယ့်၊ ငါဘယ်လောက်ပင်ပန်းပင်ပန်း နေ့တိုင်းငါ့ကလေးအိမ်စာလုပ်ဖို့နဲ့ တရုတ်စာလေ့လာဖို့ နှစ်နာရီသုံးနာရီ အချိန်ပေးပြီး သင်ပေးဖြစ်တယ်။",
      "category": "daily"
    },
    {
      "id": "hsk3_586",
      "hanzi": "你可真是一个负责任极其优秀的一位好妈妈啊，这也难怪小明的成绩全班名列前茅。",
      "pinyin": "nǐ kě zhēn shì yí ge fù zé rèn jí qí yōu xiù de yí wèi hǎo mā ma a, zhè yě nán guài Xiǎo Míng de chéng jì quán bān míng liè qián máo.",
      "burmese": "မင်းကတော့ တာဝန်သိပြီး အရမ်းကိုထူးချွန်တဲ့ အမေကောင်းတစ်ယောက်ပါပဲ၊ အဲ့ဒါကြောင့်လည်း ရှောင်မင်ရဲ့အမှတ်တွေက တစ်တန်းလုံးမှာ ထိပ်ဆုံးရောက်နေတာပေါ့။",
      "category": "daily"
    },
    {
      "id": "hsk3_587",
      "hanzi": "我想请问一下为什么这里没有直接通向市中心那个大型图书馆的那班绿色公共汽车了？",
      "pinyin": "wǒ xiǎng qǐng wèn yí xià wèi shén me zhè lǐ méi yǒu zhí jiē tōng xiàng shì zhōng xīn nà ge dà xíng tú shū guǎn de nà bān lǜ sè gōng gòng qì chē le?",
      "burmese": "ဒါလေးမေးချင်လို့ပါ ဘာလို့ဒီမှာ မြို့လယ်က အဲ့ဒီစာကြည့်တိုက်ကြီးဆီ တိုက်ရိုက်သွားတဲ့ အစိမ်းရောင်ဘတ်စ်ကားလိုင်း မရှိတော့တာလဲ?",
      "category": "daily"
    },
    {
      "id": "hsk3_588",
      "hanzi": "先生实在很抱歉因为前方那段路正在施工中修修补补，所以原定路过的两条路线都必须得转到其他稍微远些的路线去了。",
      "pinyin": "xiān shēng shí zài hěn bào qiàn yīn wèi qián fāng nà duàn lù zhèng zài shī gōng zhōng xiū xiū bǔ bǔ, suǒ yǐ yuán dìng lù guò de liǎng tiáo lù xiàn dōu bì xū děi zhuǎn dào qí tā shāo wēi yuǎn xiē de lù xiàn qù le.",
      "burmese": "လူကြီးမင်းတကယ်အားနာပါတယ် ဘာလို့လဲဆိုတော့ ရှေ့ကလမ်းပိုင်းက ပြုပြင်ဆောက်လုပ်နေတဲ့အတွက်၊ မူလဒီကဖြတ်မယ့် လိုင်းကားနှစ်လိုင်းလုံး နည်းနည်းပိုဝေးတဲ့ တခြားလမ်းကြောင်းတွေဆီ အကုန်ပြောင်းသွားရလို့ပါ။",
      "category": "daily"
    },
    {
      "id": "hsk3_589",
      "hanzi": "你最近总是下班后一个人闷在家里面对着电脑屏幕，这样真的会生病而且也不利于心情变好啊。",
      "pinyin": "nǐ zuì jìn zǒng shì xià bān hòu yí ge rén mēn zài jiā lǐ miàn duì zhe diàn nǎo píng mù, zhè yàng zhēn de huì shēng bìng ér qiě yě bú lì yú xīn qíng biàn hǎo a.",
      "burmese": "မကြာသေးခင်က မင်းရုံးဆင်းပြီးတိုင်း အိမ်ထဲပဲတစ်ယောက်တည်းအောင်းပြီး ကွန်ပျူတာစခရင်ပဲ ထိုင်ကြည့်နေတယ်၊ ဒီလိုဆို ရောဂါရတတ်သလို စိတ်ကိုလည်းကြည်လင်စေမှာမဟုတ်ဘူး။",
      "category": "daily"
    },
    {
      "id": "hsk3_590",
      "hanzi": "你说的不错，等今晚上我把这些文件写差不多了，明早咱们便骑车去外面的野外去看看不一样的迷人秋天景色吧！",
      "pinyin": "nǐ shuō de bú cuò, děng jīn wǎn shang wǒ bǎ zhè xiē wén jiàn xiě chà bù duō le, míng zǎo zán men biàn qí chē qù wài miàn de yě wài qù kàn kan bù yí yàng de mí rén qiū tiān jǐng sè ba!",
      "burmese": "မင်းပြောတာမှန်ပါတယ်၊ ဒီနေ့ည ငါဒီဖိုင်တွေချရေးလို့ပြီးသွားပြီဆိုရင်၊ မနက်ဖြန်မနက် ငါတို့စက်ဘီးစီးပြီး အပြင်ကတောတောင်တွေဆီ တစ်မူထူးခြားပြီး ဆွဲဆောင်မှုရှိတဲ့ ဆောင်းဦးရှုခင်းတွေကို သွားကြည့်ကြတာပေါ့!",
      "category": "daily"
    },
    {
      "id": "hsk3_591",
      "hanzi": "刚才去药房买感冒药的时候，那个售货员的态度非常不好，让我有些不高兴了。",
      "pinyin": "gāng cái qù yào fáng mǎi gǎn mào yào de shí hou, nà ge shòu huò yuán de tài du fēi cháng bù hǎo, ràng wǒ yǒu xiē bù gāo xìng le.",
      "burmese": "ခုနက ဆေးဆိုင်မှာ အအေးမိဆေးသွားဝယ်တုန်းက၊ အဲ့ဒီအရောင်းသမားရဲ့ ဆက်ဆံရေးကအရမ်းဆိုးလို့ ငါနည်းနည်းပျော်မနေဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk3_592",
      "hanzi": "也许他今天遇到了什么麻烦的事，或者工作太忙了吧，别往心里去了。",
      "pinyin": "yě xǔ tā jīn tiān yù dào le shén me má fan de shì, huò zhě gōng zuò tài máng le ba, bié wǎng xīn lǐ qù le.",
      "burmese": "ဒီနေ့သူတစ်ခုခုပြဿနာကြုံထားတာ ဒါမှမဟုတ် အလုပ်အရမ်းများနေလို့ဖြစ်နိုင်ပါတယ်၊ အရမ်းကြီးစိတ်ထဲမထားပါနဲ့。",
      "category": "daily"
    },
    {
      "id": "hsk3_593",
      "hanzi": "你知道这个学期我们的放假时间是从哪一天开始的吗？",
      "pinyin": "nǐ zhī dào zhè ge xué qī wǒ men de fàng jià shí jiān shì cóng nǎ yì tiān kāi shǐ de ma?",
      "burmese": "ဒီစာသင်နှစ်ရဲ့ ငါတို့ကျောင်းပိတ်ရက်က ဘယ်နေ့ကစလဲဆိုတာ မင်းသိလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_594",
      "hanzi": "听班长说大概是七月十号开始放，一共放将近两个月左右的时间呢。",
      "pinyin": "tīng bān zhǎng shuō dà gài shì qī yuè shí hào kāi shǐ fàng, yí gòng fàng jiāng jìn liǎng ge yuè zuǒ yòu de shí jiān ne.",
      "burmese": "အတန်းခေါင်းဆောင်ပြောတာကြားတာတော့ ဇူလိုင် ၁၀ ရက်လောက်ကစပိတ်မယ်၊ စုစုပေါင်း နှစ်လနီးပါးလောက်ပိတ်မှာ。",
      "category": "daily"
    },
    {
      "id": "hsk3_595",
      "hanzi": "会议结束后大家最好立刻回去把刚刚讨论的工作用电脑都整理出来检查一下。",
      "pinyin": "huì yì jié shù hòu dà jiā zuì hǎo lì kè huí qù bǎ gāng gāng tǎo lùn de gōng zuò yòng diàn nǎo dōu zhěng lǐ chū lái jiǎn chá yí xià.",
      "burmese": "အစည်းအဝေးပြီးတာနဲ့ အားလုံးချက်ချင်းပြန်သွားပြီး၊ ခုနကဆွေးနွေးခဲ့တဲ့အလုပ်တွေကို ကွန်ပျူတာနဲ့သေသေချာချာ စုစည်းပြီး စစ်ဆေးတာအကောင်းဆုံးပဲ。",
      "category": "daily"
    },
    {
      "id": "hsk3_596",
      "hanzi": "没问题。其实我在大家说话的时候已经把主要的黑板内容都抄写完了，完全不用担心啦。",
      "pinyin": "méi wèn tí. qí shí wǒ zài dà jiā shuō huà de shí hou yǐ jīng bǎ zhǔ yào de hēi bǎn nèi róng dōu chāo xiě wán le, wán quán bú yòng dān xīn la.",
      "burmese": "ပြဿနာမရှိပါဘူး။ တကယ်တော့ အားလုံးစကားပြောနေတုန်းက ငါကျောက်သင်ပုန်းပေါ်က အဓိကအကြောင်းအရာတွေကိုတောင် ကူးရေးပြီးသွားပြီ၊ လုံးဝစိတ်ပူစရာမလိုပါဘူး。",
      "category": "daily"
    },
    {
      "id": "hsk3_597",
      "hanzi": "请问您可以帮我看看照片里的那家红色的衣服店到底是从哪条街道开过去的？",
      "pinyin": "qǐng wèn nín kě yǐ bāng wǒ kàn kan zhào piàn lǐ de nà jiā hóng sè de yī fu diàn dào dǐ shì cóng nǎ tiáo jiē dào kāi guò qù de?",
      "burmese": "ဒါလေးမေးပါရစေ၊ ဓာတ်ပုံထဲက အဲ့ဒီအနီရောင်အင်္ကျီဆိုင်က တကယ်တော့ ဘယ်လမ်းကနေ ဖွင့်ထားတာလဲဆိုတာ ကျွန်တော့်ကိုကူကြည့်ပေးနိုင်မလား?",
      "category": "daily"
    },
    {
      "id": "hsk3_598",
      "hanzi": "我认识这个店。你要先去南方的那个十字路口，然后马上左转就能在对面瞧见了哦。",
      "pinyin": "wǒ rèn shi zhè ge diàn. nǐ yào xiān qù nán fāng de nà ge shí zì lù kǒu, rán hòu mǎ shàng zuǒ zhuǎn jiù néng zài duì miàn qiáo jiàn le o.",
      "burmese": "ငါဒီဆိုင်ကိုသိတယ်။ မင်းအရင်တောင်ဘက်က လမ်းလေးခွဆုံကိုသွားရမယ်၊ ပြီးရင် ချက်ချင်းဘယ်ကွေ့လိုက်တာနဲ့ မျက်နှာချင်းဆိုင်မှာ မြင်ရလိမ့်မယ်နော်。",
      "category": "daily"
    },
    {
      "id": "hsk3_599",
      "hanzi": "那个戴黑眼镜的男老师是不是新来的教美术和画画的新老师啊？",
      "pinyin": "nà ge dài hēi yǎn jìng de nán lǎo shī shì bu shì xīn lái de jiāo měi shù hé huà huà de xīn lǎo shī a?",
      "burmese": "အဲ့ဒီမျက်မှန်အမည်းတပ်ထားတဲ့ ဆရာက အနုပညာနဲ့ပန်းချီသင်တဲ့ ဆရာအသစ်လား?",
      "category": "daily"
    },
    {
      "id": "hsk3_600",
      "hanzi": "不，他是教西方音乐的张亮老师。很多学生都很喜欢听他弹吉他唱歌呢。",
      "pinyin": "bù, tā shì jiāo xī fāng yīn yuè de Zhāng liàng lǎo shī. hěn duō xué shēng dōu hěn xǐ huan tīng tā tán jí tā chàng gē ne.",
      "burmese": "မဟုတ်ဘူး၊ သူက အနောက်တိုင်းဂီတသင်တဲ့ ဆရာကျန်းလျန်လေ။ ကျောင်းသားတော်တော်များများက သူဂစ်တာတီးပြီး သီချင်းဆိုတာကို နားထောင်ရတာ အရမ်းကြိုက်ကြတယ်။",
      "category": "daily"
    }
  ],
  "4": [
    {
        "id": "hsk4_601",
        "hanzi": "只要你不放弃希望，坚持努力下去，最终肯定能够获得事业上的成功。",
        "pinyin": "zhǐ yào nǐ bú fàng qì xī wàng, jiān chí nǔ lì xià qù, zuì zhōng kěn dìng néng gòu huò dé shì yè shang de chéng gōng.",
        "burmese": "မင်းမျှော်လင့်ချက်မမဲ့ဘဲ ဇွဲရှိရှိကြိုးစားသွားသရွေ့တော့၊ နောက်ဆုံးမှာ အလုပ်အကိုင်အောင်မြင်မှုကို သေချာပေါက်ရရှိနိုင်မှာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_602",
        "hanzi": "你说的对，我们绝对不能因为一次失败就怀疑自己的能力，应该更加积极面对挑战。",
        "pinyin": "nǐ shuō de duì, wǒ men jué duì bù néng yīn wèi yí cì shī bài jiù huái yí zì jǐ de néng lì, yīng gāi gèng jiā jī jí miàn duì tiǎo zhàn.",
        "burmese": "မင်းပြောတာမှန်တယ်၊ ငါတို့က တစ်ခါရှုံးနိမ့်သွားရုံနဲ့ ကိုယ့်စွမ်းရည်ကို လုံးဝသံသယမဝင်သင့်ဘူး၊ စိန်ခေါ်မှုတွေကို ပိုပြီးတက်တက်ကြွကြွ ရင်ဆိုင်သင့်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_603",
        "hanzi": "虽然这份工作薪水很高，但是经常需要出差和加班，实在让人觉得有些吃不消。",
        "pinyin": "suī rán zhè fèn gōng zuò xīn shuǐ hěn gāo, dàn shì jīng cháng xū yào chū chāi hé jiā bān, shí zài ràng rén jué de yǒu xiē chī bù xiāo.",
        "burmese": "ဒီအလုပ်က လစာအရမ်းကောင်းပေမယ့်၊ ခရီးခဏခဏထွက်ရတာနဲ့ အချိန်ပိုဆင်းရတာတွေကြောင့်၊ တကယ်ကိုလူကိုနည်းနည်း မခံနိုင်ဖြစ်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_604",
        "hanzi": "确实如此，如果长期在这样的压力下工作，身体健康早晚会出问题的，你还是慎重考虑吧。",
        "pinyin": "què shí rú cǐ, rú guǒ cháng qī zài zhè yàng de yā lì xià gōng zuò, shēn tǐ jiàn kāng zǎo wǎn huì chū wèn tí de, nǐ hái shì shèn zhòng kǎo lǜ ba.",
        "burmese": "တကယ်ကိုဟိုလိုပါပဲ၊ ဒီလိုဖိအားတွေအောက်မှာ ရေရှည်အလုပ်လုပ်ရင် ကျန်းမာရေးက အစောနဲ့အနှောင်း ပြဿနာတက်မှာပဲ၊ မင်းသေသေချာချာစဉ်းစားပါဦး။",
        "category": "daily"
    },
    {
        "id": "hsk4_605",
        "hanzi": "这次旅行让我印象最深刻的是那座有着数百年历史的古老寺庙，建筑风格十分独特。",
        "pinyin": "zhè cì lǚ yóu ràng wǒ yìn xiàng zuì shēn kè de shì nà zuò yǒu zhe shù bǎi nián lì shǐ de gǔ lǎo sì miào, jiàn zhù fēng gé shí fēn dú tè.",
        "burmese": "ဒီခရီးစဉ်မှာ ငါ့ကိုအမှတ်ရဆုံးဖြစ်စေတာကတော့ နှစ်ရာချီသမိုင်းကြောင်းရှိတဲ့ အဲ့ဒီရှေးဟောင်းဘုရားကျောင်းပဲ၊ ဗိသုကာလက်ရာက အရမ်းထူးခြားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_606",
        "hanzi": "听起来真不错，如果有机会我也想亲自去感受一下那里浓厚的文化氛围和宁静。",
        "pinyin": "tīng qǐ lái zhēn bú cuò, rú guǒ yǒu jī huì wǒ yě xiǎng qīn zì qù gǎn shòu yí xià nà lǐ nóng hòu de wén huà fēn wéi hé níng jìng.",
        "burmese": "ကြားရတာတကယ်မဆိုးဘူး၊ တကယ်လို့ အခွင့်အရေးရှိရင် ငါကိုယ်တိုင်လည်း အဲ့ဒီက နက်ရှိုင်းတဲ့ယဉ်ကျေးမှုလေထုနဲ့ ငြိမ်းချမ်းမှုကို သွားခံစားကြည့်ချင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_607",
        "hanzi": "据天气预报说，明天从早到晚都会有强降雨，甚至还有可能引发小规模的洪水。",
        "pinyin": "jù tiān qì yù bào shuō, míng tiān cóng zǎo dào wǎn dōu huì yǒu qiáng jiàng yǔ, shèn zhì hái yǒu kě néng yǐn fā xiǎo guī mó de hóng shuǐ.",
        "burmese": "မိုးလေဝသခန့်မှန်းချက်အရဆိုရင်၊ မနက်ဖြန်မနက်ကနေညအထိ မိုးသည်းထန်စွာရွာနိုင်တယ်၊ အတိုင်းအတာသေးတဲ့ ရေကြီးတာမျိုးပါ ဖြစ်လာနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_608",
        "hanzi": "太可怕了，那我们最好取消原定的户外活动，尽量待在室内保证自己的安全。",
        "pinyin": "tài kě pà le, nà wǒ men zuì hǎo qǔ xiāo yuán dìng de hù wài huó dòng, jǐn liàng dāi zài shì nèi bǎo zhèng zì jǐ de ān quán.",
        "burmese": "အရမ်းကြောက်စရာကောင်းတာပဲ၊ ဒါဆို ငါတို့မူလစီစဉ်ထားတဲ့ အပြင်ဘက်လှုပ်ရှားမှုတွေကို ဖျက်သိမ်းပြီး၊ ကိုယ့်လုံခြုံရေးအတွက် အိမ်ထဲမှာပဲနေတာ အကောင်းဆုံးပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_609",
        "hanzi": "这部小说的情节安排得极其巧妙，结局更是完全出乎意料，作者简直是个天才。",
        "pinyin": "zhè bù xiǎo shuō de qíng jié ān pái de jí qí qiǎo miào, jié jú gèng shì wán quán chū hū yì liào, zuò zhě jiǎn zhí shì ge tiān cái.",
        "burmese": "ဒီဝတ္ထုရဲ့ ဇာတ်လမ်းဆင်ထားပုံက အရမ်းကိုပါးနပ်တယ်၊ ဇာတ်သိမ်းက ပိုပြီးတော့ကို မထင်မှတ်ထားလောက်အောင်ပဲ၊ စာရေးဆရာက တကယ့်ကိုပါရမီရှင်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_610",
        "hanzi": "能得到你这么高的评价很难得，你能把书名告诉我吗？周末我也想好好拜读一下。",
        "pinyin": "néng dé dào nǐ zhè me gāo de píng jià hěn nán dé, nǐ néng bǎ shū míng gào su wǒ ma? zhòu mò wǒ yě xiǎng hǎo hǎo bài dú yí xià.",
        "burmese": "မင်းဆီက ဒီလောက်မြင့်မားတဲ့ မှတ်ချက်မျိုးရဖို့ ရှားတယ်၊ စာအုပ်နာမည်ငါ့ကိုပြောပြနိုင်မလား? စနေတနင်္ဂနွေမှာ ငါလည်းသေသေချာချာ ဖတ်ကြည့်ချင်လို့။",
        "category": "daily"
    },
    {
        "id": "hsk4_611",
        "hanzi": "我发现自从养了这只猫之后，我的脾气变好了很多，整个人也变得更有耐心了。",
        "pinyin": "wǒ fā xiàn zì cóng yǎng le zhè zhī māo zhī hòu, wǒ de pí qì biàn hǎo le hěn duō, zhěng ge rén yě biàn de gèng yǒu nài xīn le.",
        "burmese": "ငါဒီကြောင်လေးကို မွေးပြီးကတည်းက ငါ့စိတ်သဘောထားတွေ အများကြီးကောင်းလာတာကို သတိထားမိတယ်၊ လူကလည်း ပိုပြီးသည်းခံတတ်လာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_612",
        "hanzi": "宠物确实有一种神奇的治愈力量，它们能让我们在繁忙的生活里找到片刻的宁静。",
        "pinyin": "chǒng wù què shí yǒu yì zhǒng shén qí de zhì yù lì liàng, tā men néng ràng wǒ men zài fán máng de shēng huó lǐ zhǎo dào piàn kè de níng jìng.",
        "burmese": "အိမ်မွေးတိရစ္ဆာန်တွေက တကယ်ကိုအံ့သြစရာကောင်းတဲ့ ကုစားနိုင်စွမ်းရှိတယ်၊ သူတို့က ငါတို့ရဲ့အလုပ်များတဲ့ဘဝမှာ ခဏတာငြိမ်းချမ်းမှုကို ရှာတွေ့စေနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_613",
        "hanzi": "那个戴眼镜的面试官问的问题不仅十分专业，而且角度非常刁钻，让我紧张得手心出汗。",
        "pinyin": "nà ge dài yǎn jìng de miàn shì guān wèn de wèn tí bù jǐn shí fēn zhuān yè, ér qiě jiǎo dù fēi cháng diāo zuān, ràng wǒ jǐn zhāng de shǒu xīn chū hàn.",
        "burmese": "အဲ့ဒီမျက်မှန်တပ်ထားတဲ့ အင်တာဗျူးစစ်တဲ့သူ မေးတဲ့မေးခွန်းတွေက အရမ်းပညာသားပါရုံတင်မကဘူး၊ ရှုထောင့်ကလည်းအရမ်းလှည့်စားထားလို့ ငါလှိုက်ဖိုပြီး လက်ဖဝါးတွေတောင်ချွေးထွက်လာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_614",
        "hanzi": "别灰心，这恰好说明他们公司对人才的要求很严格，你只要真实地展现自己就好了。",
        "pinyin": "bié huī xīn, zhè qià hǎo shuō míng tā men gōng sī duì rén cái de yāo qiú hěn yán gé, nǐ zhǐ yào zhēn shí de zhǎn xiàn zì jǐ jiù hǎo le.",
        "burmese": "စိတ်ဓာတ်မကျပါနဲ့၊ ဒါက သူတို့ကုမ္ပဏီက လူရည်ချွန်တွေအပေါ် တောင်းဆိုချက်အရမ်းတင်းကျပ်တယ်ဆိုတာကို ပြနေတာပဲ၊ မင်းကိုယ်မင်း အမှန်အတိုင်းပြသနိုင်ရင် ရပါပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_615",
        "hanzi": "现代社会竞争激烈，如果在这个日新月异的时代不持续学习新知识，很容易就会被淘汰。",
        "pinyin": "xiàn dài shè huì jìng zhēng jī liè, rú guǒ zài zhè ge rì xīn yuè yì de shí dài bù chí xù xué xí xīn zhī shi, hěn róng yì jiù huì bèi táo tài.",
        "burmese": "ခေတ်သစ်လူ့အဖွဲ့အစည်းက ယှဉ်ပြိုင်မှုပြင်းထန်တယ်၊ တိုးတက်ပြောင်းလဲနေတဲ့ဒီခေတ်ကြီးထဲမှာ အသိပညာအသစ်တွေကို ဆက်မလေ့လာရင်၊ ဖယ်ရှားခံရဖို့ အရမ်းလွယ်ကူတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_616",
        "hanzi": "完全同意，俗话说得好“活到老，学到老”，终身学习才是保持竞争力的唯一途径啊。",
        "pinyin": "wán quán tóng yì, sú huà shuō de hǎo “huó dào lǎo, xué dào lǎo”, zhōng shēn xué xí cái shì bǎo chí jìng zhēng lì de wéi yī tú jìng a.",
        "burmese": "လုံးဝသဘောတူပါတယ်၊ ဆိုရိုးစကားရှိတယ်မလား \"အသက်ရှည်သမျှ ပညာသင်ပါ\" တဲ့၊ တစ်သက်တာသင်ယူခြင်းကသာ ယှဉ်ပြိုင်နိုင်စွမ်းကိုထိန်းထားနိုင်မယ့် တစ်ခုတည်းသောနည်းလမ်းပဲလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_617",
        "hanzi": "我建议我们采用这种新的营销方案，它能更有效地吸引年轻消费者的注意力并提高销量。",
        "pinyin": "wǒ jiàn yì wǒ men cǎi yòng zhè zhǒng xīn de yíng xiāo fāng àn, tā néng gèng yǒu xiào dì xī yǐn nián qīng xiāo fèi zhě de zhù yì lì bìng tí gāo xiāo liàng.",
        "burmese": "ငါတို့ဒီဈေးကွက်ရှာဖွေရေး အစီအစဉ်အသစ်ကို သုံးဖို့ ငါအကြံပြုတယ်၊ ဒါက လူငယ်စားသုံးသူတွေရဲ့အာရုံကို ပိုထိရောက်စွာဆွဲဆောင်နိုင်ပြီး အရောင်းမြှင့်တင်ပေးနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_618",
        "hanzi": "这确实是个大胆的创新，不过在全面推广之前，我们最好先在部分地区进行小规模的测试。",
        "pinyin": "zhè què shí shì ge dà dǎn de chuàng xīn, bú guò zài quán miàn tuī guǎng zhī qián, wǒ men zuì hǎo xiān zài bù fen dì qū jìn xíng xiǎo guī mó de cè shì.",
        "burmese": "ဒါကတကယ်ကို ရဲရင့်တဲ့ဆန်းသစ်တီထွင်မှုပါပဲ၊ ဒါပေမယ့် အပြည့်အဝမဖြန့်ချိခင်၊ ငါတို့အရင်ဆုံး ဒေသအချို့မှာ အတိုင်းအတာသေးသေးနဲ့ စမ်းသပ်တာ အကောင်းဆုံးပဲ。",
        "category": "daily"
    },
    {
        "id": "hsk4_619",
        "hanzi": "今天发生了一系列糟糕的事情，害得我现在心情无比沮丧，连吃晚饭的胃口都没有了。",
        "pinyin": "jīn tiān fā shēng le yí xì liè zāo gāo de shì qing, hài de wǒ xiàn zài xīn qíng wú bǐ jǔ sàng, lián chī wǎn fàn de wèi kǒu dōu méi yǒu le.",
        "burmese": "ဒီနေ့ဆိုးရွားတဲ့ကိစ္စတွေ ဆက်တိုက်ဖြစ်ခဲ့လို့၊ ငါအခုစိတ်အရမ်းညစ်နေပြီး၊ ညစာစားချင်စိတ်တောင် မရှိတော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_620",
        "hanzi": "生活中难免会有磕磕碰碰，你不要太过于计较，不如看部喜剧片稍微放松一下大脑吧。",
        "pinyin": "shēng huó zhōng nán miǎn huì yǒu kē kē pèng pèng, nǐ bú yào tài guò yú jì jiào, bù rú kàn bù xǐ jù piàn shāo wēi fàng sōng yí xià dà nǎo ba.",
        "burmese": "ဘဝမှာက အဖုအထစ်တွေရှိတတ်တာချည်းပါပဲ၊ မင်းအရမ်းကြီး စိတ်ထဲမထားပါနဲ့၊ ဟာသကားတစ်ကားကြည့်ပြီး ဦးနှောက်ကိုနည်းနည်း အနားပေးလိုက်တာ ပိုကောင်းမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_621",
        "hanzi": "因为长时间缺乏锻炼，稍微爬了几层楼梯我就累得气喘吁吁，甚至汗流浃背了。",
        "pinyin": "yīn wèi cháng shí jiān quē fá duàn liàn, shāo wēi pá le jǐ céng lóu tī wǒ jiù lèi de qì chuǎn xū xū, shèn zhì hàn liú jiā bèi le.",
        "burmese": "အချိန်အကြာကြီး လေ့ကျင့်ခန်းမလုပ်ဖြစ်လို့၊ လှေကားအထပ်အနည်းငယ်လောက် တက်လိုက်တာနဲ့ကို ငါမောဟိုက်နေပြီး ချွေးတွေပါရွှဲလာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_622",
        "hanzi": "千万别忽略了身体发出的警告，从明天开始你必须制定一个科学规律的运动计划了。",
        "pinyin": "qiān wàn bié hū lüè le shēn tǐ fā chū de jǐng gào, cóng míng tiān kāi shǐ nǐ bì xū zhì dìng yí ge kē xué guī lǜ de yùn dòng jì huà le.",
        "burmese": "ခန္ဓာကိုယ်ကပေးတဲ့ သတိပေးချက်တွေကို လုံးဝမလျစ်လျူရှုပါနဲ့၊ မနက်ဖြန်ကစပြီး မင်းသိပ္ပံနည်းကျပြီး ပုံမှန်ဖြစ်တဲ့ လေ့ကျင့်ခန်းအစီအစဉ်တစ်ခု မဖြစ်မနေဆွဲရတော့မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_623",
        "hanzi": "他不仅在专业领域取得了骄人的成绩，而且为人谦虚谨慎，因此大家都非常敬佩他。",
        "pinyin": "tā bù jǐn zài zhuān yè lǐng yù qǔ dé le jiāo rén de chéng jì, ér qiě wéi rén qiān xū jǐn shèn, yīn cǐ dà jiā dōu fēi cháng jìng pèi tā.",
        "burmese": "သူက သူ့ရဲ့နယ်ပယ်မှာ ဂုဏ်ယူစရာရလဒ်တွေရခဲ့ရုံတင်မကဘူး၊ လူကလည်းနှိမ့်ချပြီး သတိထားတတ်လို့၊ အားလုံးက သူ့ကိုအရမ်းလေးစားကြတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_624",
        "hanzi": "越是优秀的人往往越能保持平常心，他身上确实有很多值得我们年轻人学习的优良品质。",
        "pinyin": "yuè shì yōu xiù de rén wǎng wǎng yuè néng bǎo chí píng cháng xīn, tā shēn shang què shí yǒu hěn duō zhí dé wǒ men nián qīng rén xué xí de yōu liáng pǐn zhì.",
        "burmese": "တော်တဲ့လူတွေကသာ ပုံမှန်စိတ်ထားကို ပိုထိန်းထားနိုင်တတ်ကြတယ်၊ သူ့ဆီမှာ ငါတို့လူငယ်တွေ သင်ယူသင့်တဲ့ ကောင်းမွန်တဲ့အရည်အသွေးတွေ အများကြီးရှိတာအမှန်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_625",
        "hanzi": "这份合同涉及到很多复杂的法律条款，在正式签字之前，我们务必要请专业律师审查一遍。",
        "pinyin": "zhè fèn hé tóng shè jí dào hěn duō fù zá de fǎ lǜ tiáo kuǎn, zài zhèng shì qiān zì zhī qián, wǒ men wù bì yào qǐng zhuān yè lǜ shī shěn chá yí biàn.",
        "burmese": "ဒီစာချုပ်မှာ ရှုပ်ထွေးတဲ့ဥပဒေစည်းကမ်းတွေ အများကြီးပါဝင်နေတယ်၊ တရားဝင်လက်မှတ်မထိုးခင်၊ ငါတို့ကျွမ်းကျင်ရှေ့နေကို တစ်ခေါက်စစ်ဆေးခိုင်းဖို့ မဖြစ်မနေလိုတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_626",
        "hanzi": "你说得对，细节决定成败，任何一个细小疏忽都有可能给公司带来不可挽回的巨大损失。",
        "pinyin": "nǐ shuō de duì, xì jié jué dìng chéng bài, rèn hé yí ge xì xiǎo shū hu dōu yǒu kě néng gěi gōng sī dài lái bù kě wǎn huí de jù dà sǔn shī.",
        "burmese": "မင်းပြောတာမှန်တယ်၊ အသေးစိတ်အချက်တွေက အောင်မြင်ခြင်းကျရှုံးခြင်းကို ဆုံးဖြတ်ပေးတယ်၊ အနည်းငယ်သောပေါ့ဆမှုက ကုမ္ပဏီအတွက် ပြန်လည်ကုစားလို့မရတဲ့ ဆုံးရှုံးမှုကြီးတွေကို ဖြစ်စေနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_627",
        "hanzi": "我最近看了一篇关于环境保护的文章，里面提到海洋塑料污染的严重程度令人触目惊心。",
        "pinyin": "wǒ zuì jìn kàn le yì piān guān yú huán jìng bǎo hù de wén zhāng, lǐ miàn tí dào hǎi yáng sù liào wū rǎn de yán zhòng chéng dù lìng rén chù mù jīng xīn.",
        "burmese": "မကြာသေးခင်က သဘာဝပတ်ဝန်းကျင်ထိန်းသိမ်းရေးနဲ့ပတ်သက်တဲ့ ဆောင်းပါးတစ်ပုဒ်ငါဖတ်လိုက်တယ်၊ အဲ့ဒီထဲမှာ ပင်လယ်သမုဒ္ဒရာ ပလတ်စတစ်ညစ်ညမ်းမှုရဲ့ ဆိုးရွားတဲ့အခြေအနေက လူကိုထိတ်လန့်စေတယ်လို့ ဖော်ပြထားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_628",
        "hanzi": "保护地球环境已经到了刻不容缓的地步，每个人都应该从减少使用一次性塑料制品做起。",
        "pinyin": "bǎo hù dì qiú huán jìng yǐ jīng dào le kè bù róng huǎn de dì bù, měi ge rén dōu yīng gāi cóng jiǎn shǎo shǐ yòng yí cì xìng sù liào zhì pǐn zuò qǐ.",
        "burmese": "ကမ္ဘာမြေပတ်ဝန်းကျင်ကိုကာကွယ်ဖို့က အချိန်ဆွဲလို့မရတော့တဲ့ အခြေအနေကိုရောက်နေပြီ၊ လူတိုင်းက တစ်ခါသုံးပလတ်စတစ်ပစ္စည်းသုံးစွဲမှုကို လျှော့ချတာကနေ စတင်သင့်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_629",
        "hanzi": "由于遇到了严重的交通管堵塞，我不仅错过了火车，甚至连重新买一张站票的机会都没有了。",
        "pinyin": "yóu yú yù dào le yán zhòng de jiāo tōng dǔ sè, wǒ bù jǐn cuò guò le huǒ chē, shèn zhì lián chóng xīn mǎi yì zhāng zhàn piào de jī huì dōu méi yǒu le.",
        "burmese": "ဆိုးရွားတဲ့ ယာဉ်ကြောပိတ်ဆို့မှုနဲ့ ကြုံလိုက်ရလို့၊ ငါရထားလွတ်သွားရုံတင်မကဘူး၊ မတ်တပ်ရပ်လက်မှတ်တစ်စောင် ပြန်ဝယ်ဖို့အခွင့်အရေးတောင် မရှိတော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_630",
        "hanzi": "真是太倒霉了！你现在赶紧去服务台办理退款手续看看，然后再查一查有没有长途汽车可以坐吧。",
        "pinyin": "zhēn shì tài dǎo méi le! nǐ xiàn zài gǎn jǐn qù fú wù tái bàn lǐ tuì kuǎn shǒu xù kàn kan, rán hòu zài chá yì chá yǒu méi yǒu cháng tú qì chē kě yǐ zuò ba.",
        "burmese": "တကယ်ကိုကံဆိုးတာပဲ! မင်းအခုမြန်မြန် Customer Service ကိုသွားပြီး ငွေပြန်အမ်းဖို့လုပ်ကြည့်ဦး၊ ပြီးမှ စီးလို့ရမယ့် ခရီးဝေးဘတ်စ်ကား ရှိမရှိ ပြန်ရှာကြည့်ပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_631",
        "hanzi": "这种新型的智能手机不仅价格便宜得很惊人，而且连功能也全面得超出我的所有期待。",
        "pinyin": "zhè zhǒng xīn xíng de zhì néng shǒu jī bù jǐn jià gé pián yi de hěn jīng rén, ér qiě lián gōng néng yě quán miàn de chāo chū wǒ de suǒ yǒu qī dài.",
        "burmese": "ဒီအသစ်ထွက်တဲ့ စမတ်ဖုန်းက ဈေးနှုန်းအံ့ဩစရာကောင်းလောက်အောင် သက်သာရုံတင်မကဘူး၊ လုပ်ဆောင်ချက်တွေကလည်း ငါမျှော်လင့်ထားတာထက် ကျော်လွန်ပြီး ပြည့်စုံတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_632",
        "hanzi": "科技的发展总是能够给大众带来巨大的惊喜，或许过不了多久它也会成为非常普及的工具了。",
        "pinyin": "kē jì de fā zhǎn zǒng shì néng gòu gěi dà zhòng dài lái jù dà de jīng xǐ, huò xǔ guò bù liǎo duō jiǔ tā yě huì chéng wéi fēi cháng pǔ jí de gōng jù le.",
        "burmese": "နည်းပညာတိုးတက်မှုက အမြဲတမ်းလူထုကို ကြီးမားတဲ့အံ့အားသင့်မှုတွေ ယူဆောင်လာပေးနိုင်တယ်၊ မကြာခင်မှာ အဲ့ဒါကလည်း အရမ်းပျံ့နှံ့တဲ့ ကိရိယာတစ်ခုဖြစ်လာနိုင်ပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_633",
        "hanzi": "医生建议我在手术之后至少需要三个月才能安全恢复，在这期间绝对不能随便搬动很重的东西。",
        "pinyin": "yī shēng jiàn yì wǒ zài shǒu shù zhī hòu zhì shǎo xū yào sān ge yuè cái néng ān quán huī fù, zài zhè qī jiān jué duì bù néng suí biàn bān dòng hěn zhòng de dōng xi.",
        "burmese": "ခွဲစိတ်ပြီးနောက် ဘေးကင်းဘေးကင်းပြန်ကောင်းလာဖို့ အနည်းဆုံးသုံးလလိုတယ်လို့ ဆရာဝန်ကအကြံပြုတယ်၊ ဒီကာလအတွင်းမှာ အရမ်းလေးတဲ့ပစ္စည်းတွေကို လုံးဝမရွှေ့သင့်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_634",
        "hanzi": "听医生的准没错，你安心养病就好，家里的家务和力气活就全交给我来负责吧。",
        "pinyin": "tīng yī shēng de zhǔn méi cuò, nǐ ān xīn yǎng bìng jiù hǎo, jiā lǐ de jiā wù hé lì qi huó jiù quán jiāo gěi wǒ lái fù zé ba.",
        "burmese": "ဆရာဝန်စကားနားထောင်တာ အသေချာဆုံးပဲ၊ မင်းစိတ်အေးလက်အေး ဆေးကုသမှုခံယူဖို့ပဲလိုတယ်၊ အိမ်ကအိမ်မှုကိစ္စနဲ့ အားသုံးရမယ့်အလုပ်တွေကို ငါ့ကိုအကုန်တာဝန်ယူခိုင်းလိုက်ပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_635",
        "hanzi": "我发现每当到秋末冬初的时候，这边的气候就会变得极其干燥连嘴唇都会裂开出血。",
        "pinyin": "wǒ fā xiàn měi dāng dào qiū mò dōng chū de shí hou, zhè biān de qì hòu jiù huì biàn de jí qí gān zào lián zuǐ chún dōu huì liè kāi chū xuè.",
        "burmese": "ဆောင်းဦးအကုန် ဆောင်းအစရောက်တိုင်း၊ ဒီဘက်ကရာသီဥတုက အရမ်းကိုခြောက်သွေ့လာပြီး နှုတ်ခမ်းတွေတောင်ကွဲပြီး သွေးထွက်တတ်တယ်ဆိုတာ ငါသတိထားမိတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_636",
        "hanzi": "所以你必须要多喝热水补充水分才行，并且最好还得涂上护唇膏才能起到保护作用。",
        "pinyin": "suǒ yǐ nǐ bì xū yào duō hē rè shuǐ bǔ chōng shuǐ fèn cái xíng, bìng qiě zuì hǎo hái děi tú shang hù chún gāo cái néng qǐ dào bǎo hù zuò yòng.",
        "burmese": "ဒါကြောင့် မင်းရေနွေးများများသောက်ပြီး ရေဓာတ်ဖြည့်တင်းပေးမှရမယ်၊ ပြီးတော့ ကာကွယ်ပေးနိုင်ဖို့ နှုတ်ခမ်းဆိုးဆေးလေးပါ ဆိုးထားတာ အကောင်းဆုံးပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_637",
        "hanzi": "由于那个旧的地方房租不断地大幅度上涨，他们全家只能无可奈何地搬往更偏远的郊区去生活了。",
        "pinyin": "yóu yú nà ge jiù de dì fang fáng zū bú duàn de dà fú dù shàng zhǎng, tā men quán jiā zhǐ néng wú kě nài hé de bān wǎng gèng piān yuǎn de jiāo qū qù shēng huó le.",
        "burmese": "အဲ့ဒီနေရာဟောင်းက အိမ်လခတွေ ဆက်တိုက်အကြီးအကျယ်တက်လာလို့၊ သူတို့တစ်မိသားစုလုံး မတတ်သာဘဲ ပိုဝေးတဲ့ဆင်ခြေဖုံးကို ပြောင်းပြီးနေထိုင်ရတော့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_638",
        "hanzi": "这确实是很让人同情的情况！虽然郊区可能会安静一点，但是每天上下班花费的交通成本也绝对不容忽视呢。",
        "pinyin": "zhè què shí shì hěn ràng rén tóng qíng de qíng kuàng! suī rán jiāo qū kě néng huì ān jìng yì diǎn, dàn shì měi tiān shàng xià bān huā fèi de jiāo tōng chéng běn yě jué duì bù róng hū shì ne.",
        "burmese": "ဒါကတကယ်ကို ကိုယ်ချင်းစာစရာအခြေအနေပဲ! ဆင်ခြေဖုံးက နည်းနည်းပိုတိတ်ဆိတ်နိုင်ပေမယ့်၊ နေ့တိုင်းအလုပ်အသွားအပြန် ကုန်ကျမယ့် လမ်းစရိတ်ကလည်း လုံးဝလျစ်လျူရှုထားလို့မရဘူးလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_639",
        "hanzi": "我敢肯定明天的辩论比赛将会异常地激烈精彩，因为双方选手的实力几乎旗鼓相当没有弱者。",
        "pinyin": "wǒ gǎn kěn dìng míng tiān de biàn lùn bǐ sài jiāng huì yì cháng de jī liè jīng cǎi, yīn wèi shuāng fāng xuǎn shǒu de shí lì jī hū qí gǔ xiāng dāng méi yǒu ruò zhě.",
        "burmese": "မနက်ဖြန် စကားစစ်ထိုးပြိုင်ပွဲက အထူးပြင်းထန်ပြီး စိတ်လှုပ်ရှားစရာကောင်းမယ်လို့ ငါရဲရဲကြီးအာမခံရဲတယ်၊ ဘာလို့လဲဆိုတော့ နှစ်ဖက်ကစားသမားတွေရဲ့ စွမ်းရည်က ယှဉ်နိုင်သူမရှိလောက်အောင် တူညီနေလို့ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_640",
        "hanzi": "那到时候我一定会带上摄像机去给你们全程录像，这么精彩的思想碰撞绝对值得永远保留作纪念啊。",
        "pinyin": "nà dào shí hou wǒ yí dìng huì dài shang shè xiàng jī qù gěi nǐ men quán chéng lù xiàng, zhè me jīng cǎi de sī xiǎng pèng zhuàng jué duì zhí dé yǒng yuǎn bǎo liú zuò jì niàn a.",
        "burmese": "ဒါဆို အဲ့ဒီအချိန်ကျရင် ငါသေချာပေါက် ကင်မရာယူသွားပြီး မင်းတို့အတွက် အစအဆုံးဗီဒီယိုရိုက်ပေးမယ်၊ ဒီလောက်ကောင်းတဲ့ အတွေးအခေါ်တိုက်ပွဲက အမှတ်တရအနေနဲ့ ထာဝရသိမ်းဆည်းထားဖို့ တကယ်တန်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_641",
        "hanzi": "虽然他们俩以前的关系极其恶劣甚至互相不讲话，可是没想到在面临公司危机时却出人意料地配合默契。",
        "pinyin": "suī rán tā men liǎ yǐ qián de guān xi jí qí è liè shèn zhì hù xiāng bù jiǎng huà, kě shì méi xiǎng dào zài miàn lín gōng sī wēi jī shí què chū rén yì liào de pèi hé mò qì.",
        "burmese": "အရင်က သူတို့နှစ်ယောက်ရဲ့ဆက်ဆံရေးက အရမ်းဆိုးရွားပြီး အချင်းချင်းစကားတောင်မပြောခဲ့ကြပေမယ့်၊ ကုမ္ပဏီအကျပ်အတည်းကြုံရချိန်မှာတော့ မထင်မှတ်ဘဲ အရမ်းညီညွတ်စွာ ပူးပေါင်းဆောင်ရွက်ခဲ့ကြတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_642",
        "hanzi": "在真正的共同利益和巨大的困难面前，个人的小小恩怨往往就不值得一提了。",
        "pinyin": "zài zhēn zhèng de gòng tóng lì yì hé jù dà de kùn nán miàn qián, gè rén de xiǎo xiǎo ēn yuàn wǎng wǎng jiù bù zhí de yì tí le.",
        "burmese": "အမှန်တကယ်ဘုံအကျိုးစီးပွားနဲ့ ကြီးမားတဲ့အခက်အခဲတွေရှေ့မှာ၊ တစ်ကိုယ်ရည် နာကြည်းမှုလေးတွေက မကြာခဏဆိုသလို ပြောဖို့တောင်မတန်တော့ဘူးလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_643",
        "hanzi": "他最近每天晚上都在图书馆里拼命查阅大量复杂的历史资料，据说是在为了下个月的学术研讨会做准备。",
        "pinyin": "tā zuì jìn měi tiān wǎn shang dōu zài tú shū guǎn lǐ pīn mìng chá yuè dà liàng fù zá de lì shǐ zī liào, jù shuō shì zài wèi le xià ge yuè de xué shù yán tǎo huì zuò zhǔn bèi.",
        "burmese": "သူမကြာသေးခင်က ညတိုင်းစာကြည့်တိုက်မှာ ရှုပ်ထွေးတဲ့သမိုင်းအချက်အလက်တွေ အများကြီးကို အသေအလဲရှာဖွေဖတ်ရှုနေတယ်၊ နောက်လ ပညာရပ်ဆိုင်ရာဆွေးနွေးပွဲအတွက် ပြင်ဆင်နေတာလို့ ကြားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_644",
        "hanzi": "只要能保持这样认真执着的研究态度，我相信他的论文一定会在会议上引起轰动的。",
        "pinyin": "zhǐ yào néng bǎo chí zhè yàng rèn zhēn zhí zhuó de yán jiū tài du, wǒ xiāng xìn tā de lùn wén yí dìng huì zài huì yì shang yǐn qǐ hōng dòng de.",
        "burmese": "ဒီလောက်လေးနက်ပြီး ဇွဲရှိတဲ့သုတေသနစိတ်ဓာတ်ကို ထိန်းထားနိုင်သရွေ့တော့၊ သူ့ရဲ့စာတမ်းက အစည်းအဝေးမှာ ဟိုးလေးတကျော်ဖြစ်သွားမယ်လို့ ငါယုံကြည်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_645",
        "hanzi": "你快过来看一下这件蓝色外套！不仅正在打五折非常划算，而且款式也非常符合年轻人时髦的审美。",
        "pinyin": "nǐ kuài guò lái kàn yí xià zhè jiàn lán sè wài tào! bù jǐn zhèng zài dǎ wǔ zhé fēi cháng huá suàn, ér qiě kuǎn shì yě fēi cháng fú hé nián qīng rén shí máo de shěn měi.",
        "burmese": "မင်းမြန်မြန်လာပြီး ဒီအပြာရောင်အပေါ်အင်္ကျီလေးကို ကြည့်စမ်း! အခု ၅၀% လျှော့ပေးနေလို့ အရမ်းတန်ရုံတင်မကဘူး၊ ဒီဇိုင်းကလည်း လူငယ်တွေရဲ့ ခေတ်မီတဲ့အလှအပအမြင်နဲ့ အရမ်းကိုက်ညီတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_646",
        "hanzi": "那我感觉赶紧趁还有适合我的尺码去试衣间试穿一下，若是上身效果满意我就立刻把它买下来了。",
        "pinyin": "nà wǒ gǎn jué gǎn jǐn chèn hái yǒu shì hé wǒ de chǐ mǎ qù shì yī jiān shì chuān yí xià, ruò shì shàng shēn xiào guǒ mǎn yì wǒ jiù lì kè bǎ tā mǎi xià lái le.",
        "burmese": "ဒါဆို ငါနဲ့တော်မယ့်ဆိုဒ်ရှိနေတုန်း အဝတ်လဲခန်းသွားပြီး အမြန်စမ်းဝတ်ကြည့်တာ ပိုကောင်းမယ်လို့ ခံစားရတယ်၊ ဝတ်ကြည့်လို့ အဆင်ပြေရင် ငါချက်ချင်းဝယ်လိုက်တော့မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_647",
        "hanzi": "不管有多么巨大的困难挑战，只有坚持到底并且永不言弃，才能冲破黑暗看到最后那灿烂的成功光芒。",
        "pinyin": "bù guǎn yǒu duō me jù dà de kùn nán tiǎo zhàn, zhǐ yǒu jiān chí dào dǐ bìng qiě yǒng bù yán qì, cái néng chōng pò hēi àn kàn dào zuì hòu nà càn làn de chéng gōng guāng máng.",
        "burmese": "ဘယ်လောက်ပဲကြီးမားလှတဲ့ အခက်အခဲစိန်ခေါ်မှုတွေရှိနေပါစေ၊ အဆုံးထိဇွဲမလျှော့ဘဲ ဘယ်တော့မှလက်မလျှော့မှသာလျှင်၊ အမှောင်ထုကိုခွဲထွက်ပြီး နောက်ဆုံးမှာ တောက်ပတဲ့အောင်မြင်မှုအလင်းရောင်ကို မြင်တွေ့နိုင်မှာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_648",
        "hanzi": "你说得很透彻，只可惜现实生活中由于缺乏毅力很多人往往是在离成功非常近的最后几十步里感到疲倦而放弃了。",
        "pinyin": "nǐ shuō de hěn tòu chè, zhǐ kě xī xiàn shí shēng huó zhōng yóu yú quē fá yì lì hěn duō rén wǎng wǎng shì zài lí chéng gōng fēi cháng jìn de zuì hòu jǐ shí bù lǐ gǎn dào pí juàn ér fàng qì le.",
        "burmese": "မင်းပြောတာအရမ်းပြည့်စုံတယ်၊ နှမြောစရာကောင်းတာက လက်တွေ့ဘဝမှာ ဇွဲလုံ့လမရှိတာကြောင့် လူအများစုက အောင်မြင်မှုနဲ့အရမ်းနီးစပ်နေတဲ့ နောက်ဆုံးခြေလှမ်းအနည်းငယ်မှာတိုင်း ပင်ပန်းလာပြီး လက်လျှော့တတ်ကြတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_649",
        "hanzi": "请问您，你们这里的招牌菜单上有没有什么是不用加任何辣椒和胡椒但同时又能保证味道浓郁的一道菜呀？",
        "pinyin": "qǐng wèn nín, nǐ men zhè lǐ de zhāo pái cài dān shang yǒu méi yǒu shén me shì bú yòng jiā rèn hé là jiāo hé hú jiāo dàn tóng shí yòu néng bǎo zhèng wèi dào nóng yù de yí dào cài ya?",
        "burmese": "ဒါလေးမေးပါရစေ၊ ခင်ဗျားတို့ဒီက နာမည်ကြီးမီနူးတွေထဲမှာ ငရုတ်သီး၊ ငရုတ်ကောင်း ဘာမှထည့်စရာမလိုဘဲ တစ်ချိန်တည်းမှာ အရသာပြည့်ဝတယ်လို့ အာမခံနိုင်တဲ့ ဟင်းတစ်ပွဲလောက်ရှိပါသလား?",
        "category": "daily"
    },
    {
        "id": "hsk4_650",
        "hanzi": "绝对没问题！向您特别推荐这道本店独创的糖醋里脊，它不仅酸甜可口而且肉质鲜嫩保证让您吃了一次还想吃。",
        "pinyin": "jué duì méi wèn tí! xiàng nín tè bié tuī jiàn zhè dào běn diàn dú chuàng de táng cù lǐ ji, tā bù jǐn suān tián kě kǒu ér qiě ròu zhì xiān nèn bǎo zhèng ràng nín chī le yí cì hái xiǎng chī.",
        "burmese": "လုံးဝပြဿနာမရှိပါဘူး! ဒီဆိုင်ရဲ့ ကိုယ်ပိုင်ဖန်တီးထားတဲ့ ဒီဝက်သားအချိုအချဉ်ကြော်ကို အထူးအကြံပြုပါရစေ၊ သူကအချိုအချဉ်အရသာကောင်းရုံတင်မက အသားကနူးညံ့ပြီး တစ်ခါစားပြီးရင် ထပ်စားချင်ဦးမယ်လို့ အာမခံပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_651",
        "hanzi": "我听说你们公司最近刚开发了一款非常受欢迎而且下载量破了百万的软件应用？",
        "pinyin": "wǒ tīng shuō nǐ men gōng sī zuì jìn gāng kāi fā le yì kuǎn fēi cháng shòu huān yíng ér qiě xià zǎi liàng pò le bǎi wàn de ruǎn jiàn yìng yòng?",
        "burmese": "မင်းတို့ကုမ္ပဏီက မကြာသေးခင်ကမှ အရမ်းနာမည်ကြီးပြီး ဒေါင်းလုဒ်ဆွဲသူသန်းချီရှိတဲ့ ဆော့ဖ်ဝဲလ်အက်ပ်တစ်ခုကို ဖန်တီးခဲ့တယ်လို့ ငါကြားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_652",
        "hanzi": "是的，它最大的特点在于操作简便还能免费提供实打实的精准数据，因此很快就被大量下载了。",
        "pinyin": "shì de, tā zuì dà de tè diǎn zài yú cāo zuò jiǎn biàn hái néng miǎn fèi tí gōng shí dǎ shí de jīng zhǔn shù jù, yīn cǐ hěn kuài jiù bèi dà liàng xià zǎi le.",
        "burmese": "ဟုတ်တယ်၊ သူ့ရဲ့အကြီးမားဆုံးထူးခြားချက်က အသုံးပြုရလွယ်ကူပြီး တိကျသေချာတဲ့ အချက်အလက်တွေကို အခမဲ့ပေးနိုင်တာပဲ၊ ဒါကြောင့် ဒေါင်းလုဒ်အများကြီး မြန်မြန်ဆွဲခံလိုက်ရတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_653",
        "hanzi": "这篇长篇报道非常详细地介绍了中国传统节日中关于春节除夕夜的所有习俗与浪漫传说。",
        "pinyin": "zhè piān cháng piān bào dào fēi cháng xiáng xì de jiè shào le Zhōng guó chuán tǒng jié rì zhōng guān yú Chūn jié Chú xī yè de suǒ yǒu xí sú yǔ làng màn chuán shuō.",
        "burmese": "ဒီသတင်းဆောင်းပါးရှည်ကြီးက တရုတ်ရိုးရာပွဲတော်တွေထဲက နှစ်သစ်ကူးအကြိုညနဲ့ပတ်သက်တဲ့ ဓလေ့ထုံးတမ်းတွေနဲ့ ရိုမန်တစ်ဆန်တဲ့ဒဏ္ဍာရီတွေအားလုံးကို အရမ်းအသေးစိတ်ကျကျ မိတ်ဆက်ပေးထားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_654",
        "hanzi": "我很感兴趣等我有空借来看看它，毕竟了解各个民族的优秀文化底蕴是一件非常有意义的事。",
        "pinyin": "wǒ hěn gǎn xìng qù děng wǒ yǒu kòng jiè lái kàn kan tā, bì jìng liǎo jiě gè gè mín zú de yōu xiù wén huà dǐ yùn shì yí jiàn fēi cháng yǒu yì yì de shì.",
        "burmese": "ငါအရမ်းစိတ်ဝင်စားတယ် ငါအားရင် အဲ့ဒါလေးငှားဖတ်ကြည့်ဦးမယ်၊ ဘာပဲပြောပြော လူမျိုးအသီးသီးရဲ့ ကောင်းမွန်တဲ့ယဉ်ကျေးမှုအခြေခံတွေကို နားလည်ထားတာက အရမ်းအဓိပ္ပာယ်ရှိတဲ့ကိစ္စပဲလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_655",
        "hanzi": "哪怕明天的路途再怎么遥远恶劣，我们也必须按照计划准时将货物送到指定地点并收回尾款的。",
        "pinyin": "nǎ pà míng tiān de lù tú zài zěn me yáo yuǎn è liè, wǒ men yě bì xū àn zhào jì huà zhǔn shí jiāng huò wù sòng dào zhǐ dìng dì diǎn bìng shōu huí wěi kuǎn de.",
        "burmese": "မနက်ဖြန်ခရီးလမ်းက ဘယ်လောက်ပဲဝေးပြီး ဆိုးရွားနေပါစေ၊ ငါတို့က အစီအစဉ်အတိုင်း ကုန်ပစ္စည်းတွေကို သတ်မှတ်နေရာကို အချိန်မီပို့ပြီး ကျန်ငွေတွေကို ပြန်ကောက်ရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_656",
        "hanzi": "放心吧经理，只要早点把大卡车加满所有的油并且仔细检查轮胎，一切定能顺利无比地完成的。",
        "pinyin": "fàng xīn ba jīng lǐ, zhǐ yào zǎo diǎn bǎ dà kǎ chē jiā mǎn suǒ yǒu de yóu bìng qiě zǐ xì jiǎn chá lún tāi, yì qiè dìng néng shùn lì wú bǐ de wán chéng de.",
        "burmese": "စိတ်ချပါမန်နေဂျာ၊ စောစောစီးစီး ကုန်တင်ကားကြီးကို ဆီအပြည့်ထည့်ပြီး တာယာတွေကို သေသေချာချာစစ်ဆေးထားရင်၊ အားလုံးအနှောင့်အယှက်ကင်းကင်းနဲ့ ပြီးမြောက်နိုင်မှာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_657",
        "hanzi": "因为长期缺少睡眠加上过重的学习负担，他最近看起来脸色苍白精神极其的萎靡不振。",
        "pinyin": "yīn wèi cháng qī quē shǎo shuì mián jiā shàng guò zhòng de xué xí fù dān, tā zuì jìn kàn qǐ lái liǎn sè cāng bái jīng shén jí qí de wěi mí bú zhèn.",
        "burmese": "ရေရှည်အိပ်ရေးပျက်တာရယ် လေးလံလွန်းတဲ့ သင်ယူမှုဝန်ထုပ်ဝန်ပိုးတွေရယ်ကြောင့်၊ သူကမကြာသေးခင်က မျက်နှာဖြူရော်နေပြီး စိတ်ဓာတ်တွေအရမ်းကျဆင်းနေပုံရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_658",
        "hanzi": "是啊如果再不让他去医院或者请一段时间的长假好好休息的话，肯定会引起重大身体疾病乃至崩溃的。",
        "pinyin": "shì a rú guǒ zài bù ràng tā qù yī yuàn huò zhě qǐng yì duàn shí jiān de cháng jià hǎo hǎo xiū xi de huà, kěn dìng huì yǐn qǐ zhòng dà shēn tǐ jí bìng nǎi zhì bēng kuì de.",
        "burmese": "ဟုတ်တယ် သူ့ကိုဆေးရုံမသွားခိုင်းရင် ဒါမှမဟုတ် ခွင့်ရှည်တစ်ကာလလောက်ယူပြီး သေချာနားမခိုင်းရင်၊ ကြီးမားတဲ့ကျန်းမာရေးရောဂါတွေနဲ့ ပြိုလဲမှုတွေအထိ သေချာပေါက်ဖြစ်လာနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_659",
        "hanzi": "昨天晚上的国际足球比赛中，关键时刻突然下起倾盆大雨，裁判竟然吹哨暂停了这场关键球赛。",
        "pinyin": "zuó tiān wǎn shang de guó jì zú qiú bǐ sài zhōng, guān jiàn shí kè tū rán xià qǐ qīng pén dà yǔ, cái pàn jìng rán chuī shào zàn tíng le zhè chǎng guān jiàn qiú sài.",
        "burmese": "မနေ့ညက နိုင်ငံတကာဘောလုံးပွဲမှာ၊ အရေးကြီးတဲ့အချိန် ရုတ်တရက် မိုးသည်းထန်စွာရွာချလို့၊ ဒိုင်လူကြီးက ဒီအရေးပါတဲ့ပွဲကို ခရာမှုတ်ပြီး ခေတ္တရပ်နားခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_660",
        "hanzi": "虽然有些遗憾没能马上看到精彩结尾，可是这也是为了保护全体球员们身体安全所作出的正确决定啦。",
        "pinyin": "suī rán yǒu xiē yí hàn méi néng mǎ shàng kàn dào jīng cǎi jié wěi, kě shì zhè yě shì wèi le bǎo hù quán tǐ qiú yuán men shēn tǐ ān quán suǒ zuò chū de zhèng què jué dìng la.",
        "burmese": "ကောင်းမွန်တဲ့ဇာတ်သိမ်းကို ချက်ချင်းမကြည့်ရလို့ နည်းနည်းနှမြောစရာကောင်းပေမယ့်၊ ဒါကလည်း ကစားသမားတွေအားလုံးရဲ့ လုံခြုံရေးအတွက် ချမှတ်ခဲ့တဲ့ မှန်ကန်တဲ့ဆုံးဖြတ်ချက်ပဲလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_661",
        "hanzi": "这个公园四周环境不仅优美而且十分安静，简直就是周末远离城市喧嚣放松心情的最佳选择之一呃。",
        "pinyin": "zhè ge gōng yuán sì zhōu huán jìng bù jǐn yōu měi ér qiě shí fēn ān jìng, jiǎn zhí jiù shì zhòu mò yuǎn lí chéng shì xuān xiāo fàng sōng xīn qíng de zuì jiā xuǎn zé zhī yī e.",
        "burmese": "ဒီပန်းခြံပတ်ဝန်းကျင်က လှပရုံတင်မကဘဲ အရမ်းလည်းတိတ်ဆိတ်တယ်၊ စနေတနင်္ဂနွေမှာ မြို့ပြရဲ့ဆူညံမှုတွေကနေဝေးဝေးရှောင်ပြီး စိတ်အပန်းဖြေဖို့ အကောင်းဆုံးရွေးချယ်စရာတွေထဲက တစ်ခုပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_662",
        "hanzi": "正是因为这样来这里散步锻炼的人才络绎不绝，大家都觉得呼吸新鲜空气比什么珍贵东西都更重要啊。",
        "pinyin": "zhèng shì yīn wèi zhè yàng lái zhè lǐ sàn bù duàn liàn de rén cái luò yì bù jué, dà jiā dōu jué de hū xī xīn xiān kōng qì bǐ shén me zhēn guì dōng xi dōu gèng zhòng yào a.",
        "burmese": "ဒီလိုမျိုးကြောင့်ပဲ ဒီကိုလမ်းလျှောက်လေ့ကျင့်ခန်းလာလုပ်တဲ့သူတွေ မပြတ်ရှိနေတာ၊ အားလုံးက လတ်ဆတ်တဲ့လေကို ရှူရှိုက်ရတာက တခြားတန်ဖိုးကြီးပစ္စည်းတွေထက် ပိုအရေးကြီးတယ်လို့ ထင်ကြတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_663",
        "hanzi": "无论面对怎样刻薄残酷的嘲笑和怀疑，她始终微笑着保持自信，并且坚韧不拔地去实现那个遥远的梦想。",
        "pinyin": "wú lùn miàn duì zěn yàng kè bó cán kù de cháo xiào hé huái yí, tā shǐ zhōng wēi xiào zhe bǎo chí zì xìn, bìng qiě jiān rèn bù bá de qù shí xiàn nà ge yáo yuǎn de mèng xiǎng.",
        "burmese": "ဘယ်လိုပဲ ပြင်းထန်ရက်စက်တဲ့ လှောင်ပြောင်မှုတွေနဲ့ သံသယတွေကို ရင်ဆိုင်ရပါစေ၊ သူမက အမြဲတမ်းပြုံးပြီး ကိုယ့်ကိုယ်ကျုံကြည်မှုကို ထိန်းသိမ်းထားပြီး၊ အဲ့ဒီဝေးကွာလှတဲ့အိပ်မက်ကို အကောင်အထည်ဖော်ဖို့ ဇွဲမလျှော့ခဲ့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_664",
        "hanzi": "这种坚定无比的勇敢态度终于让她在经过了十年的默默努力后摘取了那一枚令人羡慕的金牌。",
        "pinyin": "zhè zhǒng jiān dìng wú bǐ de yǒng gǎn tài du zhōng yú ràng tā zài jīng guò le shí nián de mò mò nǔ lì hòu zhāi qǔ le nà yì méi lìng rén xiàn mù de jīn pái.",
        "burmese": "ဒီလိုခိုင်မာပြတ်သားတဲ့ သတ္တိရှိတဲ့သဘောထားက နောက်ဆုံးတော့ ဆယ်နှစ်ကြာ တိတ်တဆိတ်ကြိုးစားမှုတွေအပြီးမှာ သူမကို လူတိုင်းအားကျရတဲ့ ရွှေတံဆိပ်တစ်ခုကို ဆွတ်ခူးနိုင်စေခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_665",
        "hanzi": "如果不立刻去更改那个存在严重逻辑漏洞的财务报表，到时候整个管理部门必然都要因此承担不可避免的责任。",
        "pinyin": "rú guǒ bú lì kè qù gēng gǎi nà ge cún zài yán zhòng luó ji lòu dòng de cái wù bào biǎo, dào shí hou zhěng ge guǎn lǐ bù mén bì rán dōu yào yīn cǐ chéng dān bù kě bì miǎn de zé rèn.",
        "burmese": "ပြင်းထန်တဲ့ယုတ္တိဗေဒဟာကွက်တွေရှိနေတဲ့ အဲ့ဒီဘဏ္ဍာရေးအစီရင်ခံစာကို ချက်ချင်းမသွားပြင်ရင်၊ အချိန်တန်ရင် စီမံခန့်ခွဲမှုဌာနတစ်ခုလုံးက ဒါကြောင့် ရှောင်လွှဲလို့မရတဲ့တာဝန်တွေကို မလွဲမသွေထမ်းဆောင်ရလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_666",
        "hanzi": "既然发现了错误我们就有义不容辞的任务赶紧去重新计算所有的金额账单并及时提交审阅才能彻底化险为夷。",
        "pinyin": "jì rán fā xiàn le cuò wù wǒ men jiù yǒu yì bù róng cí de rèn wu gǎn jǐn qù chóng xīn jì suàn suǒ yǒu de jīn é zhàng dān bìng jí shí tí jiāo shěn yuè cái néng chè dǐ huà xiǎn wéi yí.",
        "burmese": "အမှားကိုတွေ့ပြီဆိုမှတော့ ငါတို့မှာ ငြင်းဆန်လို့မရတဲ့တာဝန်ရှိတယ်၊ ငွေစာရင်းအားလုံးကို အမြန်ပြန်တွက်ပြီး အချိန်မီပြန်လည်စစ်ဆေးဖို့ တင်ပြမှသာ အန္တရာယ်ကနေ ဘေးကင်းအောင် အပြီးတိုင်ပြောင်းလဲနိုင်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_667",
        "hanzi": "今天天气格外好万里无云非常适宜组织全体员工们去郊外的植物园里面搞一次别开生面的团建拓展活动。",
        "pinyin": "jīn tiān tiān qì gé wài hǎo wàn lǐ wú yún fēi cháng shì yí zǔ zhī quán tǐ yuán gōng men qù jiāo wài de zhí wù yuán lǐ miàn gǎo yí cì bié kāi shēng miàn de tuán jiàn tuǒ zhǎn huó dòng.",
        "burmese": "ဒီနေ့ရာသီဥတုက အထူးကောင်းမွန်ပြီး တိမ်တစ်ကင်းရှင်းနေလို့ ဝန်ထမ်းအားလုံးကို ဆင်ခြေဖုံးက ရုက္ခဗေဒဥယျာဉ်ထဲသွားပြီး ထူးခြားတဲ့အဖွဲ့အစည်းတည်ဆောက်ရေးလှုပ်ရှားမှုတစ်ခု လုပ်ဖို့စီစဉ်ဖို့ အရမ်းသင့်တော်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_668",
        "hanzi": "极好不过了！大家最近平时在高级写字楼呆的时间太长早就对自然界美景产生了难以言表的无尽向往啦。",
        "pinyin": "jí hǎo bú guò le! dà jiā zuì jìn píng shí zài gāo jí xiě zì lóu dāi de shí jiān tài cháng zǎo jiù duì zì rán jiè měi jǐng chǎn shēng le nán yǐ yán biǎo de wú jìn xiàng wǎng la.",
        "burmese": "ဒီထက်ကောင်းတာမရှိတော့ဘူး! အားလုံးက မကြာသေးခင်က ရုံးခန်းအဆင့်မြင့်တွေထဲမှာ အချိန်အကြာကြီးနေခဲ့ရလို့ သဘာဝအလှတရားတွေအပေါ် ဖော်ပြလို့မရနိုင်တဲ့ အဆုံးမရှိတဲ့တမ်းတမှုတွေ ဖြစ်နေတာကြာပါပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_669",
        "hanzi": "这家著名的中餐厅生意竟然红火到了即便到了深夜十一点多钟其所有餐桌前还依然坐满了各地前来的食客的程度。",
        "pinyin": "zhè jiā zhù míng de Zhōng cān tīng shēng yì jìng rán hóng huǒ dào le jí biàn dào le shēn yè shí yī diǎn duō zhōng qí suǒ yǒu cān zhuō qián hái yī rán zuò mǎn le gè dì qián lái de shí kè de chéng dù.",
        "burmese": "ဒီနာမည်ကြီးတဲ့ တရုတ်စားသောက်ဆိုင်က လုပ်ငန်းအရမ်းကောင်းလွန်းလို့ ညသန်းခေါင် ၁၁ နာရီကျော်တဲ့အထိတောင်မှ သူတို့ရဲ့စားပွဲတွေအားလုံးမှာ ဒေသအသီးသီးကလာတဲ့ စားသုံးသူတွေ အပြည့်ထိုင်နေတဲ့အဆင့်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_670",
        "hanzi": "估计是因为这里不仅菜的味道绝佳份量充足甚至还有那种让人感到宾至如归的体贴且周到的各种隐藏服务使得顾客赞不绝口。",
        "pinyin": "gū jì shì yīn wèi zhè lǐ bù jǐn cài de wèi dào jué jiā fèn liàng chōng zú shèn zhì hái yǒu nà zhǒng ràng rén gǎn dào bīn zhì rú guī de tǐ tiē qiě zhōu dào de gè zhǒng yǐn cáng fú wù shǐ de gù kè zàn bù jué kǒu.",
        "burmese": "ထင်ရတာတော့ ဒီမှာက ဟင်းရဲ့အရသာက အရမ်းကောင်းပြီး ပမာဏလည်းလုံလောက်ရုံတင်မကဘူး၊ ဧည့်သည်တွေကို အိမ်ကိုပြန်ရောက်သလိုခံစားရစေတဲ့ ဂရုစိုက်ပြီးပြည့်စုံတဲ့ လျှို့ဝှက်ဝန်ဆောင်မှုတွေပါ ရှိနေလို့ ဖောက်သည်တွေက ချီးကျူးမဆုံးဖြစ်နေတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_671",
        "hanzi": "我发现自从养了这只脾气稍微有些温和的猫之后，我的耐心不仅变好了很多而且整个人都充满了前所未有的母爱。",
        "pinyin": "wǒ fā xiàn zì cóng yǎng le zhè zhī pí qì shāo wēi yǒu xiē wēn hé de māo zhī hòu, wǒ de nài xīn bù jǐn biàn hǎo le hěn duō ér qiě zhěng ge rén dōu chōng mǎn le qián suǒ wèi yǒu de mǔ ài.",
        "burmese": "ငါဒီစိတ်ထားနည်းနည်းနူးညံ့တဲ့ကြောင်လေးကို မွေးပြီးကတည်းက၊ ငါ့ရဲ့သည်းခံနိုင်စွမ်းတွေ အများကြီးကောင်းလာရုံတင်မကဘူး လူတစ်ကိုယ်လုံးလည်း အရင်ကမရှိခဲ့ဖူးတဲ့ မိခင်မေတ္တာတွေနဲ့ ပြည့်နေတယ်ဆိုတာ သတိထားမိတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_672",
        "hanzi": "宠物确实往往有一种几乎算得上神奇的治愈悲痛的魔力，它们能让我们在异常繁忙焦躁的生活里很快找到片刻的深度宁静。",
        "pinyin": "chǒng wù què shí wǎng wǎng yǒu yì zhǒng jī hū suàn de shàng shén qí de zhì yù bēi tòng de mó lì, tā men néng ràng wǒ men zài yì cháng fán máng jiāo zào de shēng huó lǐ hěn kuài zhǎo dào piàn kè de shēn dù níng jìng.",
        "burmese": "အိမ်မွေးတိရစ္ဆာန်တွေက တကယ်ကိုအံ့သြစရာကောင်းလောက်တဲ့ အနာတရကုစားနိုင်တဲ့ မှော်အစွမ်းရှိတတ်တယ်၊ သူတို့က ငါတို့ရဲ့အရမ်းအလုပ်များပြီး စိတ်လှုပ်ရှားစရာကောင်းတဲ့ဘဝမှာ ခဏတာနက်ရှိုင်းတဲ့ငြိမ်းချမ်းမှုကို အမြန်ရှာတွေ့စေနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_673",
        "hanzi": "那个一直面带严肃并戴着粗框眼镜的男面试官问的几个关键性问题不仅十分地专业详尽，而且分析事物的角度也是极其刁钻出格。",
        "pinyin": "nà ge yì zhí miàn dài yán sù bìng dài zhe cū kuàng yǎn jìng de nán miàn shì guān wèn de jǐ ge guān jiàn xìng wèn tí bù jǐn shí fēn de zhuān yè xiáng jìn, ér qiě fēn xī shì wù de jiǎo dù yě shì jí qí diāo zuān chū gé.",
        "burmese": "အမြဲတမ်းမျက်နှာတည်ထားပြီး မျက်မှန်ကိုင်းထူထူတပ်ထားတဲ့ အဲ့ဒီအင်တာဗျူးစစ်တဲ့အမျိုးသား မေးတဲ့အရေးကြီးတဲ့မေးခွန်းအချို့က အရမ်းပညာသားပါပြီး အသေးစိတ်ကျရုံတင်မကဘူး၊ ကိစ္စရပ်တွေကိုသုံးသပ်တဲ့ ရှုထောင့်ကလည်း အရမ်းကိုလှည့်စားပြီး သမားရိုးကျမဟုတ်ဘူး。",
        "category": "daily"
    },
    {
        "id": "hsk4_674",
        "hanzi": "这反而更恰好证明了这家历史悠久的跨国大企业在筛选并录取高端核心人才方面的极高与极为严格的超难要求标准呗。",
        "pinyin": "zhè fǎn ér gèng qià hǎo zhèng míng le zhè jiā lì shǐ yōu jiǔ de kuà guó dà qǐ yè zài shāi xuǎn bìng lù qǔ gāo duān hé xīn rén cái fāng miàn de jí gāo yǔ jí wéi yán gé de chāo nán yāo qiú biāo zhǔn bei.",
        "burmese": "ဒါက သမိုင်းကြောင်းရှည်ကြာတဲ့ ဒီနိုင်ငံတကာလုပ်ငန်းကြီးက အဆင့်မြင့်အဓိကလူရည်ချွန်တွေကို ရွေးချယ်ခန့်အပ်တဲ့နေရာမှာ အရမ်းမြင့်မားပြီး တင်းကျပ်တဲ့ အလွန်ခက်ခဲတဲ့သတ်မှတ်ချက်စံနှုန်းတွေရှိတယ်ဆိုတာကို ပိုလို့တောင်မှန်ကန်စွာ သက်သေပြနေတာပဲလေ。",
        "category": "daily"
    },
    {
        "id": "hsk4_675",
        "hanzi": "在当今竞争激烈到几乎让人窒息的现代社会环境里如果你还敢不抓紧时间去学习和掌握更难的新奇技术那就等着被快速淘汰吧。",
        "pinyin": "zài dāng jīn jìng zhēng jī liè dào jī hū ràng rén zhì xī de xiàn dài shè huì huán jìng lǐ rú guǒ nǐ hái gǎn bù zhuā jǐn shí jiān qù xué xí hé zhǎng wò gèng nán de xīn qí jì shù nà jiù děng zhe bèi kuài sù táo tài ba.",
        "burmese": "ယနေ့ခေတ် ပြိုင်ဆိုင်မှုက လူကိုအသက်ရှူကြပ်လုနီးပါးဖြစ်စေတဲ့ ခေတ်သစ်လူ့အဖွဲ့အစည်းပတ်ဝန်းကျင်မှာ မင်းကအချိန်ကိုအမိအရဖမ်းပြီး ပိုခက်တဲ့နည်းပညာအသစ်တွေကို လေ့လာကျွမ်းကျင်အောင်မလုပ်ရဲသေးရင်တော့ မြန်မြန်ဖယ်ရှားခံရဖို့သာ စောင့်နေလိုက်ပါတော့。",
        "category": "daily"
    },
    {
        "id": "hsk4_676",
        "hanzi": "我深刻且不留情面地认为只有从小培养孩子具备自主探究的终身学习习惯才能使他们在任何陌生甚至危险领域中依然能够保持住稳定且不败的社会竞争力。",
        "pinyin": "wǒ shēn kè qiě bù liú qíng miàn de rèn wéi zhǐ yǒu cóng xiǎo péi yǎng hái zi jù bèi zì zhǔ tàn jiū de zhōng shēn xué xí xí guàn cái néng shǐ tā men zài rèn hé mò shēng shèn zhì wēi xiǎn lǐng yù zhōng yī rán néng gòu bǎo chí zhù wěn dìng qiě bú bài de shè huì jìng zhēng lì.",
        "burmese": "ကလေးတွေကို ငယ်စဉ်ကတည်းက ကိုယ်တိုင်ရှာဖွေလေ့လာတတ်တဲ့ တစ်သက်တာသင်ယူမှုအလေ့အကျင့်ရှိဖို့ ပျိုးထောင်ပေးခြင်းကသာ သူတို့ကို ဘယ်လောက်စိမ်းသက်ပြီး အန္တရာယ်များတဲ့နယ်ပယ်မှာမဆို တည်ငြိမ်ပြီးမရှုံးနိမ့်တဲ့ လူမှုရေးယှဉ်ပြိုင်နိုင်စွမ်းကို ထိန်းသိမ်းထားနိုင်စေမယ်လို့ ငါကတော့ ပြတ်ပြတ်သားသားနဲ့ကို ယုံကြည်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_677",
        "hanzi": "针对这个新产品的市场推广方案不仅新颖大胆并且其中还加入了很多极具本土风情的浪漫浪漫主义情怀的浪漫色彩。",
        "pinyin": "zhēn duì zhè ge xīn chǎn pǐn de shì chǎng tuī guǎng fāng àn bù jǐn xīn yǐng dà dǎn bìng qiě qí zhōng hái jiā rù le hěn duō jí jù běn tǔ fēng qíng de làng màn làng màn zhǔ yì qíng huái de làng màn sè cǎi.",
        "burmese": "ဒီထုတ်ကုန်အသစ်အတွက် ဈေးကွက်ချဲ့ထွင်ရေးအစီအစဉ်က ဆန်းသစ်ရဲရင့်ရုံတင်မကဘူး အဲ့ဒီအထဲမှာ ဒေသခံအငွေ့အသက်တွေအများကြီးပါတဲ့ ရိုမန်တစ်ဆန်တဲ့ ရိုမန်တစ်ဝါဒခံစားချက်အရောင်အဆင်းတွေပါ ထည့်သွင်းထားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_678",
        "hanzi": "虽然从字面上看这极具吸引力但是作为理性的投资人我们在没进行小规模内部实验前绝对不可在全国范围内轻易投入过多的现金去进行冒险的推广。",
        "pinyin": "suī rán cóng zì miàn shang kàn zhè jí jù xī yǐn lì dàn shì zuò wéi lǐ xìng de tóu zī rén wǒ men zài méi jìn xíng xiǎo guī mó nèi bù shí yàn qián jué duì bù kě zài quán guó fàn wéi nèi qīng yì tóu rù guò duō de xiàn jīn qù jìn xíng mào xiǎn de tuī guǎng.",
        "burmese": "စာသားအရကြည့်ရင် ဒါကအရမ်းဆွဲဆောင်မှုရှိတယ်ဆိုပေမယ့် အကျိုးအကြောင်းဆင်ခြင်တတ်တဲ့ ရင်းနှီးမြှုပ်နှံသူတွေအနေနဲ့ ငါတို့က အတိုင်းအတာသေးသေးနဲ့ အတွင်းပိုင်းစမ်းသပ်မှုမလုပ်ခင် တစ်နိုင်ငံလုံးအတိုင်းအတာနဲ့ ငွေသားတွေအများကြီးကို အလွယ်တကူရင်းနှီးမြှုပ်နှံပြီး စွန့်စားဖြန့်ချိတာမျိုး လုံးဝမလုပ်သင့်ဘူး。",
        "category": "daily"
    },
    {
        "id": "hsk4_679",
        "hanzi": "因为那场出乎所有人意料之外的罕见暴雨使得原本打算明天按时交付的那十几箱货只能暂时被全部安全地推迟并重新放回到公司宽敞的仓库中了。",
        "pinyin": "yīn wèi nà chǎng chū hū suǒ yǒu rén yì liào zhī wài de hǎn jiàn bào yǔ shǐ de yuán běn dǎ suàn míng tiān àn shí jiāo fù de nà shí jǐ xiāng huò zhǐ néng zàn shí bèi quán bù ān quán de tuī chí bìng chóng xīn fàng huí dào gōng sī kuān chǎng de cāng kù zhōng le.",
        "burmese": "အားလုံးထင်မှတ်မထားလောက်အောင် ရှားရှားပါးပါးရွာချတဲ့ မိုးသည်းထန်မှုကြောင့် မူလကမနက်ဖြန်အချိန်မီပေးပို့ဖို့ရည်ရွယ်ထားတဲ့ အဲ့ဒီကုန်သေတ္တာဆယ်ဂဏန်းလောက်ကို ခေတ္တအားလုံးလုံလုံခြုံခြုံရွှေ့ဆိုင်းလိုက်ပြီး ကုမ္ပဏီရဲ့ကျယ်ဝန်းတဲ့ဂိုဒေါင်ထဲ ပြန်ထားလိုက်ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_680",
        "hanzi": "这确实是很不幸并且无法轻易去避免的一种常见情况不过只要你立即亲自礼貌地打电话逐个告知那些焦急等待的各个客户并请求他们谅解应该问题就不会被搞得太过糟糕。",
        "pinyin": "zhè què shí shì hěn bù xìng bìng qiě wú fǎ qīng yì qù bì miǎn de yì zhǒng cháng jiàn qíng kuàng bú guò zhǐ yào nǐ lì kè qīn zì lǐ mào de dǎ diàn huà zhú gè gào zhī nà xiē jiāo jí děng dài de gè gè kè hù bìng qǐng qiú tā men liàng jiě yīng gāi wèn tí jiù bú huì bèi gǎo de tài guò zāo gāo.",
        "burmese": "ဒါကတကယ်ကို ကံဆိုးပြီး အလွယ်တကူရှောင်လွှဲလို့မရတဲ့ အဖြစ်များတဲ့အခြေအနေတစ်ရပ်ပါ ဒါပေမယ့် မင်းကချက်ချင်းကိုယ်တိုင် ယဉ်ယဉ်ကျေးကျေးဖုန်းဆက်ပြီး စိုးရိမ်တကြီးစောင့်နေကြမယ့် ဖောက်သည်တစ်ယောက်ချင်းစီကို အသိပေးပြီး သူတို့နားလည်ပေးဖို့တောင်းဆိုရင် ပြဿနာကအရမ်းဆိုးရွားသွားမှာမဟုတ်ပါဘူး。",
        "category": "daily"
    },
    {
        "id": "hsk4_681",
        "hanzi": "这位有着极高社会声誉的著名作家的最新散文集不但其文字优雅得犹如诗歌而且更是包含着深藏且浓厚的高等级社会责任感使得广大读者均深有同感。",
        "pinyin": "zhè wèi yǒu zhe jí gāo shè huì shēng yù de zhù míng zuò jiā de zuì xīn sǎn wén jí bú dàn qí wén zì yōu yǎ de yóu rú shī gē ér qiě gèng shì bāo hán zhe shēn cáng qiě nóng hòu de gāo děng jí shè huì zé rèn gǎn shǐ de guǎng dà dú zhě jūn shēn yǒu tóng gǎn.",
        "burmese": "အလွန်မြင့်မားတဲ့ လူမှုရေးနာမည်ဂုဏ်သတင်းရှိတဲ့ ဒီနာမည်ကြီးစာရေးဆရာရဲ့ နောက်ဆုံးထွက် စကားပြေပေါင်းချုပ်က စာသားတွေက ကဗျာလိုကျက်သရေရှိရုံတင်မကဘူး အဆင့်အတန်းမြင့်တဲ့ လူမှုရေးတာဝန်သိစိတ်တွေပါ နက်နက်ရှိုင်းရှိုင်းနဲ့ အပြည့်အဝပါဝင်နေလို့ စာဖတ်ပရိသတ်အများစုကပါ လိုက်ပါခံစားနိုင်ခဲ့ကြတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_682",
        "hanzi": "这就正好完美地反映了文学本身不仅仅应当是一种轻浮纯粹的娱乐休闲更应该成为揭示残酷或者是温暖的现实世界进而能够启发众人正确地去看书和认真去进行思考的有效精神力量之源头。",
        "pinyin": "zhè jiù zhèng hǎo wán měi de fǎn yìng le wén xué běn shēn bù jǐn jǐn yīng dāng shì yì zhǒng qīng fú chún cuì de yǔ lè xiū xián gèng yīng gāi chéng wéi jiē shì cán kù huò zhě shì wēn nuǎn de xiàn shí shì jiè jìn ér néng gòu qǐ fā zhòng rén zhèng què de qù kàn shū hé rèn zhēn qù jìn xíng sī kǎo de yǒu xiào jīng shén lì liàng zhī yuán tóu.",
        "burmese": "ဒါက စာပေဆိုတာ ပေါ့ပေါ့ပါးပါးနဲ့စစ်မှန်တဲ့ ဖျော်ဖြေရေးသက်သက်တင်မကဘဲ ရက်စက်တဲ့ ဒါမှမဟုတ် နွေးထွေးတဲ့လက်တွေ့ကမ္ဘာကြီးကို ဖော်ထုတ်ပြသပြီး လူတွေကိုမှန်ကန်စွာစာဖတ်ဖို့နဲ့ သေသေချာချာစဉ်းစားတွေးခေါ်ဖို့ လမ်းပြပေးနိုင်တဲ့ ထိရောက်တဲ့စိတ်ပိုင်းဆိုင်ရာစွမ်းအားရဲ့ မြစ်ဖျားခံရာဖြစ်သင့်တယ်ဆိုတာကို အတိအကျပြီးပြည့်စုံစွာ ထင်ဟပ်နေတာပဲ。",
        "category": "daily"
    },
    {
        "id": "hsk4_683",
        "hanzi": "如果你在接下去的一个月内仍然不能改掉总是迟到的坏毛病那么公司人事部将不得不根据相关规定直接和你解除这原本很好的劳动合同了。",
        "pinyin": "rú guǒ nǐ zài jiē xià qù de yí ge yuè nèi réng rán bù néng gǎi diào zǒng shì chí dào de huài máo bìng nà me gōng sī rén shì bù jiāng bù dé bù gēn jù xiāng guān guī dìng zhí jiē hé nǐ jiě chú zhè yuán běn hěn hǎo de láo dòng hé tóng le.",
        "burmese": "တကယ်လို့ မင်းကနောက်လာမယ့်တစ်လအတွင်းမှာ အမြဲတမ်းနောက်ကျတတ်တဲ့ အကျင့်ဆိုးကို မဖျောက်နိုင်သေးရင် ကုမ္ပဏီလူ့စွမ်းအားအရင်းအမြစ်ဌာနက သက်ဆိုင်ရာစည်းမျဉ်းတွေအရ မူလကအရမ်းကောင်းတဲ့ ဒီအလုပ်သမားစာချုပ်ကို မင့်ကိုတိုက်ရိုက်ဖျက်သိမ်းရလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_684",
        "hanzi": "真的是万分抱歉我保证这全是因为最近搬家导致交通路线不太熟练从明天起我一定会提前半个小时出门确保不再犯错。",
        "pinyin": "zhēn de shì wàn fēn bào qiàn wǒ bǎo zhèng zhè quán shì yīn wèi zuì jìn bān jiā dǎo zhì jiāo tōng lù xiàn bú tài shú liàn cóng míng tiān qǐ wǒ yí dìng huì tí qián bàn ge xiǎo shí chū mén què bǎo bú zài fàn cuò.",
        "burmese": "တကယ်ကို အရမ်းအားနာပါတယ် ဒါကမကြာသေးခင်က အိမ်ပြောင်းထားလို့ သွားရေးလာရေးလမ်းကြောင်းကို သိပ်မကျွမ်းကျင်လို့ဖြစ်ရတာပါ မနက်ဖြန်ကစပြီး ငါနာရီဝက်စောထွက်ပြီး ထပ်မမှားတော့ဘူးလို့ အာမခံပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_685",
        "hanzi": "我简直不敢相信那篇充满极大偏见而且完全违背了基本客观事实的新闻报道竟然能在网上获得那么高的转载量和随之而来的评论数量。",
        "pinyin": "wǒ jiǎn zhí bù gǎn xiāng xìn nà piān chōng mǎn jí dà piān jiàn ér qiě wán quán wéi bèi le jī běn kè guān shì shí de xīn wén bào dào jìng rán néng zài wǎng shang huò dé nà me gāo de zhuǎn zǎi liàng hé suí zhī ér lái de píng lùn shù liàng.",
        "burmese": "ဘက်လိုက်မှုတွေအရမ်းပြည့်နေပြီး အခြေခံဓမ္မဓိဋ္ဌာန်ကျတဲ့အချက်အလက်တွေကို လုံးဝဆန့်ကျင်နေတဲ့ အဲ့ဒီသတင်းဆောင်းပါးက အင်တာနက်ပေါ်မှာ အဲ့ဒီလောက်များပြားတဲ့ ပြန်လည်မျှဝေမှုတွေနဲ့ နောက်ဆက်တွဲမှတ်ချက်ပေါင်းများစွာကို ရရှိနိုင်မယ်လို့ ငါလုံးဝကိုမယုံနိုင်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_686",
        "hanzi": "这说明现如今很多网民极大地缺乏独立思考和辨别真相的能力他们仅仅是容易被那种吸引眼球的夸张标题给骗了进去。",
        "pinyin": "zhè shuō míng xiàn rú jīn hěn duō wǎng mín jí dà de quē fá dú lì sī kǎo hé biàn bié zhēn xiàng de néng lì tā men jǐn jǐn shì róng yì bèi nà zhǒng xī yǐn yǎn qiú de kuā zhāng biāo tí gěi piàn le jìn qù.",
        "burmese": "ဒါက ယနေ့ခေတ် သုံးစွဲသူအများစုက လွတ်လပ်စွာတွေးခေါ်နိုင်စွမ်းနဲ့ အမှန်တရားကိုခွဲခြားနိုင်စွမ်း အကြီးအကျယ်ကင်းမဲ့နေပြီး သူတို့က အဲ့ဒီလိုမျိုး လူအာရုံစိုက်ခံရအောင် ချဲ့ကားထားတဲ့ခေါင်းစဉ်တွေရဲ့ လှည့်စားခြင်းကို အလွယ်တကူခံလိုက်ရတယ်ဆိုတာကို ပြနေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_687",
        "hanzi": "由于遭遇了罕见的恶劣天气导致的航班全面大面积甚至长久的延误，很多提着行李甚至带着小孩子的旅客都只能无可奈何又焦急地在机场候机厅里坐着苦等了。",
        "pinyin": "yóu yú zāo yù le hǎn jiàn de è liè tiān qì dǎo zhì de háng bān quán miàn dà miàn ji shèn zhì cháng jiǔ de yán wù, hěn duō tí zhe xíng li shèn zhì dài zhe xiǎo hái zi de lǚ kè dōu zhǐ néng wú kě nài hé yòu jiāo jí de zài jī chǎng hòu jī tīng lǐ zuò zhe kǔ děng le.",
        "burmese": "ရှားရှားပါးပါးဆိုးရွားတဲ့ ရာသီဥတုနဲ့ကြုံရလို့ လေယာဉ်ခရီးစဉ်တွေ လုံးဝအကြီးအကျယ်၊ အချိန်အကြာကြီး နှောင့်နှေးသွားတာကြောင့်၊ ခရီးဆောင်အိတ်တွေဆွဲပြီး ကလေးငယ်တွေတောင် ခေါ်လာရတဲ့ ခရီးသည်တော်တော်များများဟာ မတတ်သာဘဲ စိုးရိမ်တကြီးနဲ့ လေဆိပ်စောင့်ဆိုင်းခန်းထဲမှာ ထိုင်ပြီး အခက်အခဲခံစောင့်နေရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_688",
        "hanzi": "这是很难直接在现场迅速处理的，因为天气本就是不可抗力而为了确保所有人员百分之百的生命安全这的确是航空公司在当下能做出的最最合理的选择啦。",
        "pinyin": "zhè shì hěn nán zhí jiē zài xiàn chǎng xùn sù chǔ lǐ de, yīn wèi tiān qì běn jiù shì bù kě kàng lì ér wèi le què bǎo suǒ yǒu rén yuán bǎi fēn zhī bǎi de shēng mìng ān quán zhè dí què shì háng kōng gōng sī zài dāng xià néng zuò chū de zuì zuì hé lǐ de xuǎn zé la.",
        "burmese": "ဒါက နေရာမှာတင် ချက်ချင်းဖြေရှင်းဖို့ အရမ်းခက်ခဲတယ်၊ ဘာလို့လဲဆိုတော့ ရာသီဥတုဆိုတာက တားဆီးလို့မရတဲ့အရာဖြစ်နေပြီး လူအားလုံးရဲ့ အသက်အန္တရာယ် တစ်ရာရာခိုင်နှုန်း ဘေးကင်းဖို့သေချာစေဖို့အတွက် ဒါကတကယ်ကို လေကြောင်းလိုင်းအနေနဲ့ လောလောဆယ်မှာ ချမှတ်နိုင်တဲ့ အကျိုးအကြောင်းအဆီလျော်ဆုံး ရွေးချယ်မှုပဲလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_689",
        "hanzi": "这位新来的女实习生不但基础工作做到了一丝不苟竟然还常常能够提出让人眼前一亮的优化流程的有益建议。",
        "pinyin": "zhè wèi xīn lái de nǚ shí xí shēng bú dàn jī chǔ gōng zuò zuò dào le yì sī bù gǒu jìng rán hái cháng cháng néng gòu tí chū ràng rén yǎn qián yí liàng de yōu huà liú chéng de yǒu yì jiàn yì.",
        "burmese": "ဒီအသစ်ရောက်လာတဲ့ အလုပ်သင်ကောင်မလေးက အခြေခံအလုပ်တွေကို အမှားအယွင်းမရှိလုပ်နိုင်ရုံတင်မကဘူး လူကိုအံ့အားသင့်စေတဲ့ လုပ်ငန်းစဉ်ပိုကောင်းအောင်လုပ်ဖို့ အကျိုးရှိတဲ့အကြံဉာဏ်တွေကိုပါ မကြာခဏပေးနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_690",
        "hanzi": "她这种主动承担且勤奋善于观察的态度是我们团队正需要的所以等她毕业时一定要想尽办法把她正式地留用下来。",
        "pinyin": "tā zhè zhǒng zhǔ dòng chéng dān qiě qín fèn shàn yú guān chá de tài du shì wǒ men tuán duì zhèng xū yào de suǒ yǐ děng tā bì yè shí yí dìng yào xiǎng jìn bàn fǎ bǎ tā zhèng shì de liú yòng xià lái.",
        "burmese": "သူမရဲ့ဒီလို တက်တက်ကြွကြွတာဝန်ယူပြီး ကြိုးစားလေ့လာတတ်တဲ့သဘောထားက ငါတို့အဖွဲ့အတွက် လိုအပ်နေတာပဲမို့လို့ သူဘွဲ့ရတဲ့အခါ နည်းလမ်းမျိုးစုံသုံးပြီး သူ့ကိုတရားဝင်အလုပ်ခန့်ထားနိုင်အောင် ကြိုးစားရမယ်。",
        "category": "daily"
    },
    {
        "id": "hsk4_691",
        "hanzi": "我们今天开会重点讨论的那个项目如果想要顺利推进至少还得从银行里再顺利借贷出两百万资金才能填补目前的空缺。",
        "pinyin": "wǒ men jīn tiān kāi huì zhòng diǎn tǎo lùn de nà ge xiàng mù rú guǒ xiǎng yào shùn lì tuī jìn zhì shǎo hái děi cóng yín háng lǐ zài shùn lì jiè dài chū liǎng bǎi wàn zī jīn cái néng tián bǔ mù qián de kòng quē.",
        "burmese": "ငါတို့ဒီနေ့အစည်းအဝေးမှာ အဓိကဆွေးနွေးခဲ့တဲ့ အဲ့ဒီစီမံကိန်းက အဆင်ပြေပြေရှေ့ဆက်နိုင်ဖို့ဆိုရင် လက်ရှိဟာကွက်ကိုဖြည့်ဖို့ ဘဏ်ကနေ အနည်းဆုံးငွေသိန်းနှစ်ဆယ် ထပ်ပြီးချေးယူနိုင်မှရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_692",
        "hanzi": "没问题我会马上让财务部门加班加点准备出极其详尽并且有说服力的计划书以此来保证银行审核的百分之百通过率。",
        "pinyin": "méi wèn tí wǒ huì mǎ shàng ràng cái wù bù mén jiā bān jiā diǎn zhǔn bèi chū jí qí xiáng jìn bìng qiě yǒu shuō fú lì de jì huà shū yǐ cǐ lái bǎo zhèng yín háng shěn hé de bǎi fēn zhī bǎi tōng guò lǜ.",
        "burmese": "ပြဿနာမရှိပါဘူး ငါဘဏ္ဍာရေးဌာနကို အချိန်ပိုဆင်းပြီး ဘဏ်ကစစ်ဆေးတာ တစ်ရာရာခိုင်နှုန်းအောင်မြင်ဖို့အတွက် အရမ်းအသေးစိတ်ကျပြီး ယုံကြည်လောက်စရာကောင်းတဲ့ အစီအစဉ်စာအုပ်ကို ချက်ချင်းပြင်ဆင်ခိုင်းလိုက်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_693",
        "hanzi": "这种具有强烈当地特色风味的辣椒酱虽然吃起来辣度极其惊人但是却总能勾起我在遥远家乡度过的那些美好年少时光。",
        "pinyin": "zhè zhǒng jù yǒu qiáng liè dāng dì tè sè fēng wèi de là jiāo jiàng suī rán chī qǐ lái là dù jí qí jīng rén dàn shì què zǒng néng gōu qǐ wǒ zài yáo yuǎn jiā xiāng dù guò de nà xiē měi hǎo nián shào shí guāng.",
        "burmese": "ဒီလို ပြင်းထန်တဲ့ဒေသခံအရသာပါတဲ့ ငရုတ်သီးဆော့စ်က စားလိုက်ရင် အစပ်နှုန်းကအရမ်းအံ့ဩဖို့ကောင်းပေမယ့် အဝေးကဇာတိမြေမှာ ဖြတ်သန်းခဲ့ရတဲ့ အဲ့ဒီလှပတဲ့လူငယ်ဘဝအချိန်လေးတွေကို အမြဲပြန်အမှတ်ရစေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_694",
        "hanzi": "这就是所谓食物的隐藏记忆吧它不仅仅是为了去单纯地填饱肚子更是承载了远去的人们对故土的深深思念之情。",
        "pinyin": "zhè jiù shì suǒ wèi shí wù de yǐn cáng jì yì ba tā bù jǐn jǐn shì wèi le qù dān chún de tián bǎo dù zi gèng shì chéng zǎi le yuǎn qù de rén men duì gù tǔ de shēn shēn sī niàn zhī qíng.",
        "burmese": "ဒါက အစားအသောက်တွေရဲ့ လျှို့ဝှက်မှတ်ဉာဏ်ဆိုတာပဲဖြစ်မယ် သူကဗိုက်ဝဖို့သက်သက်အပြင် အဝေးရောက်နေသူတွေရဲ့ ဇာတိမြေအပေါ် နက်နက်ရှိုင်းရှိုင်းလွမ်းဆွတ်မှုတွေကိုပါ သယ်ဆောင်ပေးထားတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_695",
        "hanzi": "我敢打赌只要这家新开的中型超市能够继续保持目前这样甚至更好的热情服务态度其营业额绝对会在半年内翻倍的。",
        "pinyin": "wǒ gǎn dǎ dǔ zhǐ yào zhè jiā xīn kāi de zhōng xíng chāo shì néng gòu jì xù bǎo chí mù qián zhè yàng shèn zhì gèng hǎo de rè qíng fú wù tài du qí yíng yè é jué duì huì zài bàn nián nèi fān bèi de.",
        "burmese": "ဒီအသစ်ဖွင့်တဲ့ အလတ်စားစူပါမားကတ်က လက်ရှိလိုမျိုး ဒါမှမဟုတ် ဒီထက်ပိုကောင်းတဲ့ နွေးထွေးတဲ့ဝန်ဆောင်မှုသဘောထားကို ဆက်ထိန်းထားနိုင်သရွေ့ သူတို့ရဲ့ရောင်းရငွေက ခြောက်လအတွင်း သေချာပေါက်နှစ်ဆဖြစ်လာမယ်လို့ ငါလောင်းရဲတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_696",
        "hanzi": "确实有很多住在附近的本来挑剔的居民都是因为受到过他们那极其耐心细致的接待才渐渐被转化为死心塌地的老客户。",
        "pinyin": "què shí yǒu hěn duō zhù zài fù jìn de běn lái tiāo ti de jū mín dōu shì yīn wèi shòu dào guò tā men nà jí qí nài xīn xì zhì de jiē dài cái jiàn jiàn bèi zhuǎn huà wéi sǐ xīn tā dì de lǎo kè hù.",
        "burmese": "တကယ်ပဲ အနီးအနားမှာနေတဲ့ အစကတော့ အရမ်းရွေးတတ်တဲ့ဒေသခံတော်တော်များများက သူတို့ရဲ့အရမ်းသည်းခံပြီး အသေးစိတ်ကျတဲ့ဧည့်ခံမှုကို ခံရလို့သာ တဖြည်းဖြည်းနဲ့ သစ္စာရှိတဲ့ဖောက်သည်ဟောင်းတွေ ဖြစ်လာကြတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_697",
        "hanzi": "这场在城市中心广场举办的盛大公开演讲不仅内容空洞乏味甚至连那位发言的主持人都显得十分地精神不佳和随声附和。",
        "pinyin": "zhè chǎng zài chéng shì zhōng xīn guǎng chǎng jǔ bàn de shèng dà gōng kāi yǎn jiǎng bù jǐn nèi róng kōng dòng fá wèi shèn zhì lián nà wèi fā yán de zhǔ chí rén dōu xiǎn de shí fēn dì jīng shén bù jiā hé suí shēng fù hè.",
        "burmese": "မြို့လယ်ကွင်းပြင်မှာကျင်းပတဲ့ ဒီကြီးကျယ်တဲ့ လူထုဟောပြောပွဲက အကြောင်းအရာက ဟာလာဟင်းလင်းနဲ့ ပျင်းစရာကောင်းရုံတင်မကဘူး စကားပြောတဲ့အစီအစဉ်မှူးကတောင် အတော်လေးစိတ်မပါဘဲ အလိုက်သင့်ပြောနေသလိုဖြစ်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_698",
        "hanzi": "所以这也怪不得那成百上千本应该留下聆听的观众们在开场仅仅不到十五分钟后就逐渐觉得极其失望而提前离席了。",
        "pinyin": "suǒ yǐ zhè yě guài bù de nà chéng bǎi shàng qiān běn yīng gāi liú xià líng tīng de guān zhòng men zài kāi chǎng jǐn jǐn bú dào shí wǔ fēn zhōng hòu jiù zhú jiàn jué de jí qí shī wàng ér tí qián lí xí le.",
        "burmese": "ဒါကြောင့်လည်း ကျန်နေပြီးနားထောင်သင့်တဲ့ ရာထောင်ချီတဲ့ပရိသတ်တွေက ပွဲစပြီး ၁၅ မိနစ်တောင်မပြည့်ခင်မှာ တဖြည်းဖြည်းနဲ့ အရမ်းစိတ်ပျက်လာပြီး စောစောထထွက်သွားကြတာ မဆန်းပါဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_699",
        "hanzi": "在面对那些看似毫无头绪其实充满暗角的复杂谜题时，我们必须学会打破固有的思维方式去尝试寻找一些意想不到的捷径。",
        "pinyin": "zài miàn duì nà xiē kàn shì háo wú tóu xù qí shí chōng mǎn àn jiǎo de fù zá mí tí shí, wǒ men bì xū xué huì dǎ pò gù yǒu de sī wéi fāng shì qù cháng shì xún zhǎo yì xiē yì xiǎng bú dào de jié jìng.",
        "burmese": "ဘာမှန်းမသိရသယောင်ရှိပေမယ့် တကယ်တော့ လျှို့ဝှက်ချက်တွေအပြည့်နဲ့ ရှုပ်ထွေးတဲ့ပဟေဠိတွေကို ရင်ဆိုင်ရတဲ့အခါ၊ ငါတို့ကပုံသေတွေးခေါ်မှုတွေကိုချိုးဖျက်ပြီး မထင်မှတ်ထားတဲ့ ဖြတ်လမ်းနည်းတွေကို ကြိုးစားရှာဖွေတတ်ဖို့ သင်ယူရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_700",
        "hanzi": "这就非常考验一个人跳出框框去深入思考的核心创新能力如果总是按部就班地沿着老路去琢磨往往就会在这里彻底卡住不动。",
        "pinyin": "zhè jiù fēi cháng kǎo yàn yí ge rén tiào chū kuàng kuàng qù shēn rù sī kǎo de hé xīn chuàng xīn néng lì rú guǒ zǒng shì àn bù jiù bān de yán zhe lǎo lù qù zuó mo wǎng wǎng jiù huì zài zhè lǐ chè dǐ kǎ zhù bu dòng.",
        "burmese": "ဒါက ဘောင်ထဲကနေထွက်ပြီး နက်နက်ရှိုင်းရှိုင်းတွေးခေါ်နိုင်စွမ်းရှိတဲ့ လူတစ်ယောက်ရဲ့ အဓိကဆန်းသစ်တီထွင်နိုင်စွမ်းကို အရမ်းစမ်းသပ်တာပဲ အမြဲတမ်းပုံမှန်အတိုင်း လမ်းဟောင်းအတိုင်းသွားပြီး စဉ်းစားနေရင် အများအားဖြင့် ဒီနေရာမှာတင် လုံးဝတစ်ဆို့သွားတတ်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_701",
        "hanzi": "这部刚刚上映的科幻电影剧情设计得极其巧妙而且其特效画面的逼真程度远远超过了我们之前看过的所有同类影片。",
        "pinyin": "zhè bù gāng gāng shàng yìng de kē huàn diàn yǐng jù qíng shè jì de jí qí qiǎo miào ér qiě qí tè xiào huà miàn de bī zhēn chéng dù yuǎn yuǎn chāo guò le wǒ men zhī qián kàn guò de suǒ yǒu tóng lèi yǐng piān.",
        "burmese": "အခုမှရုံတင်တဲ့ ဒီသိပ္ပံရုပ်ရှင်က ဇာတ်လမ်းဒီဇိုင်းက အရမ်းပါးနပ်ပြီး သူ့ရဲ့အထူးပြုလုပ်ချက်တွေရဲ့ လက်တွေ့ဆန်မှုအဆင့်က ငါတို့အရင်ကကြည့်ဖူးသမျှ အလားတူဇာတ်ကားတွေအားလုံးထက် အများကြီးသာလွန်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_702",
        "hanzi": "难怪它能在短短几天内就打破了全球多项很难突破的票房纪录，大家对于这种高水平视听盛宴的渴望真的是难以想象。",
        "pinyin": "nán guài tā néng zài duǎn duǎn jǐ tiān nèi jiù dǎ pò le quán qiú duō xiàng hěn nán tū pò de piào fáng jì lù, dà jiā duì yú zhè zhǒng gāo shuǐ píng shì tīng shèng yàn de kě wàng zhēn de shì nán yǐ xiǎng xiàng.",
        "burmese": "ဒါကြောင့်လည်း သူကရက်အနည်းငယ်အတွင်းမှာ ကမ္ဘာတစ်ဝှမ်းချိုးဖျက်ရခက်တဲ့ ရုံဝင်ကြေးစံချိန်များစွာကို ချိုးဖျက်နိုင်ခဲ့တာ မဆန်းပါဘူး၊ အားလုံးက ဒီလိုအဆင့်မြင့်ရုပ်သံခံစားမှုပွဲတော်ကြီးကို တောင့်တမှုက တကယ်ကိုမှန်းဆလို့မရနိုင်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_703",
        "hanzi": "虽然这份工作经常需要到处出差以及并且经常要应对各种突发情况但是它所能提供的极其丰厚的薪水待遇依然让我非常心动。",
        "pinyin": "suī rán zhè fèn gōng zuò jīng cháng xū yào dào chù chū chāi yǐ jí bìng qiě jīng cháng yào yìng duì gè zhǒng tū fā qíng kuàng dàn shì tā suǒ néng tí gōng de jí qí fēng hòu de xīn shuǐ dài yù yī rán ràng wǒ fēi cháng xīn dòng.",
        "burmese": "ဒီအလုပ်က နေရာအနှံ့ခရီးထွက်ရလေ့ရှိပြီး ရုတ်တရက်ဖြစ်ပေါ်လာတဲ့ အခြေအနေအမျိုးမျိုးကို ဖြေရှင်းရလေ့ရှိပေမယ့်လည်း သူပေးနိုင်တဲ့ အရမ်းများပြားတဲ့ လစာအခွင့်အရေးက ငါ့ကိုအရမ်းစိတ်လှုပ်ရှားစေတုန်းပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_704",
        "hanzi": "高风险与高回报向来都是并存的只要你觉得自己的身体素质和心理承受能力足够强完全可以去勇敢尝试挑战一下自己嘛。",
        "pinyin": "gāo fēng xiǎn yǔ gāo huí bào xiàng lái dōu shì bìng cún de zhǐ yào nǐ jué de zì jǐ de shēn tǐ sù zhì hé xīn lǐ chéng shòu néng lì zú gòu qiáng wán quán kě yǐ qù yǒng gǎn cháng shì tiǎo zhàn yí xià zì jǐ ma.",
        "burmese": "အန္တရာယ်များမှုနဲ့ ပြန်လည်ရရှိမှုက အမြဲတွဲရှိနေတာပါပဲ မင်းကကိုယ့်ရဲ့ကိုယ်ခန္ဓာကြံ့ခိုင်မှုနဲ့ စိတ်ပိုင်းဆိုင်ရာခံနိုင်ရည်လုံလောက်တယ်လို့ ထင်ရင် ကိုယ့်ကိုယ်ကိုယ် သတ္တိရှိရှိ စိန်ခေါ်ကြည့်လို့ လုံးဝရတာပေါ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_705",
        "hanzi": "这家餐厅最近推出的那款非常有名的特色海鲜汤不仅味道鲜美无比而且里面还加了许多对人体大有益处的名贵药材哦。",
        "pinyin": "zhè jiā cān tīng zuì jìn tuī chū de nà kuǎn fēi cháng yǒu míng de tè sè hǎi xiān tāng bù jǐn wèi dào xiān měi wú bǐ ér qiě lǐ miàn hái jiā le xǔ duō duì rén tǐ dà yǒu yì chù de míng guì yào cái o.",
        "burmese": "ဒီစားသောက်ဆိုင်က မကြာသေးခင်ကမှ မိတ်ဆက်လိုက်တဲ့ အရမ်းနာမည်ကြီးတဲ့ အထူးရေထွက်ပစ္စည်းဟင်းရည်က အရသာအရမ်းကောင်းရုံတင်မကဘူး အထဲမှာ လူခန္ဓာကိုယ်အတွက် အရမ်းအကျိုးရှိတဲ့ တန်ဖိုးကြီးဆေးဖက်ဝင်အပင်တွေလည်း အများကြီးထည့်ထားတယ်နော်။",
        "category": "daily"
    },
    {
        "id": "hsk4_706",
        "hanzi": "听你这么夸奖我都忍不住口水直流了等下个周末领了奖金我一定要拉上几个好朋友专门去尝满这道被吹捧上天的菜。",
        "pinyin": "tīng nǐ zhè me kuā jiǎng wǒ dōu rěn bú zhù kǒu shuǐ zhí liú le děng xià ge zhòu mò lǐng le jiǎng jīn wǒ yí dìng yào lā shàng jǐ ge hǎo péng you zhuān mén qù cháng mǎn zhè dào bèi chuī pěng shàng tiān de cài.",
        "burmese": "မင်းဒီလောက်ချီးမွမ်းနေတာကြားပြီး ငါတောင်တံတွေးမမြိုနိုင်တော့ဘူး နောက်အပတ် စနေတနင်္ဂနွေ ဆုကြေးငွေရရင် သူငယ်ချင်းနည်းနည်းလောက်ကိုဆွဲခေါ်ပြီး ကောင်းကင်အထိမြှောက်ပင့်ခံထားရတဲ့ ဒီဟင်းကို သီးသန့်သွားမြည်းကြည့်ရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_707",
        "hanzi": "如果不立刻去解决那个已经在系统里潜伏了长达半个月的致命安全漏洞一旦被黑客恶意利用我们所有人的心血都会彻底付诸东流的。",
        "pinyin": "rú guǒ bú lì kè qù jiě jué nà ge yǐ jīng zài xì tǒng lǐ qián fú le cháng dá bàn ge yuè de zhì mìng ān quán lòu dòng yí dàn bèi hēi kè è yì lì yòng wǒ men suǒ yǒu rén de xīn xuè dōu huì chè dǐ fù zhū dōng liú de.",
        "burmese": "စနစ်ထဲမှာ လဝက်လောက်ကြာအောင် ပုန်းအောင်းနေတဲ့ သေရေးရှင်ရေးလုံခြုံရေးဟာကွက်ကို ချက်ချင်းမသွားဖြေရှင်းရင် ဟက်ကာတွေက မသမာတဲ့ရည်ရွယ်ချက်နဲ့ အသုံးပြုလိုက်တာနဲ့ ငါတို့အားလုံးရဲ့ ကြိုးစားအားထုတ်မှုတွေက လုံးဝအလဟဿဖြစ်သွားလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_708",
        "hanzi": "所以昨天工程部的大伙儿连夜都没怎么敢合眼加班加点进行彻底排查和紧急修复目前可以说总体风险算是全面降低下来了。",
        "pinyin": "suǒ yǐ zuó tiān gōng chéng bù de dà huǒ r lián yè dōu méi zěn me gǎn hé yǎn jiā bān jiā diǎn jìn xíng chè dǐ pái chá hé jǐn jí xiū fù mù qián kě yǐ shuō zǒng tǐ fēng xiǎn suàn shì quán miàn jiàng dī xià lái le.",
        "burmese": "ဒါကြောင့်ပဲ မနေ့က အင်ဂျင်နီယာဌာနကလူတွေ ညလုံးပေါက်မျက်စိမှိတ်ဖို့တောင်မရဲဘဲ အချိန်ပိုဆင်းပြီး အသေအချာစစ်ဆေးပြင်ဆင်မှုတွေလုပ်ခဲ့လို့ လောလောဆယ် ယေဘုယျအန္တရာယ်က လုံးဝကျသွားပြီလို့ ပြောလို့ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_709",
        "hanzi": "由于遭遇了历史上非常罕见的大规模断电整个繁华市区的地铁交通完全瘫痪大批想要下班赶回家的市民都被无情地困在了黑暗的地下站台里。",
        "pinyin": "yóu yú zāo yù le lì shǐ shang fēi cháng hǎn jiàn de dà guī mó duàn diàn zhěng ge fán huá shì qū de dì tiě jiāo tōng wán quán tān huàn dà pī xiǎng yào xià bān gǎn huí jiā de shì mín dōu bèi wú qíng de kùn zài le hēi àn de dì xià zhàn tái lǐ.",
        "burmese": "သမိုင်းတစ်လျှောက် အရမ်းရှားပါးတဲ့ အကြီးစားလျှပ်စစ်မီးပြတ်တောက်မှုနဲ့ ကြုံတွေ့ရလို့ စည်ကားတဲ့မြို့လယ်က မြေအောက်မီးရထားသွားလာမှု လုံးဝရပ်တန့်သွားပြီး အလုပ်ဆင်းပြီးအိမ်ပြန်ချင်တဲ့ ပြည်သူအများအပြားဟာ အမှောင်ထုထဲက မြေအောက်ဘူတာရုံထဲမှာ ရက်ရက်စက်စက် ပိတ်မိနေခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_710",
        "hanzi": "这种突发性极强的灾难性事件也极其深刻地提醒了相关管理部门今后必须要投入大量资金去建设一套更为强大坚固并且具有极高稳定性的备用供电系统。",
        "pinyin": "zhè zhǒng tū fā xìng jí qiáng de zāi nàn xìng shì jiàn dě jí qí shēn kè de tí xǐng le xiāng guān guǎn lǐ bù mén jīn hòu bì xū yào tóu rù dà liàng zī jīn qù jiàn shè yí tào gèng wéi qiáng dà jiān gù bìng qiě jù yǒu jí gāo wěn dìng xìng de bèi yòng gōng diàn xì tǒng.",
        "burmese": "ဒီလောက်ရုတ်တရက်ဆန်ပြီး ကပ်ဘေးဆန်တဲ့ ဖြစ်ရပ်က သက်ဆိုင်ရာစီမံခန့်ခွဲမှုဌာနတွေကို နောင်မှာ ပိုမိုအားကောင်းခိုင်မာပြီး အရမ်းတည်ငြိမ်မှုရှိတဲ့ အရန်လျှပ်စစ်မီးပေးစနစ်တစ်ခု တည်ဆောက်ဖို့ ရန်ပုံငွေအများကြီး ရင်းနှီးမြှုပ်နှံရမယ်ဆိုတာကို အရမ်းနက်နက်ရှိုင်းရှိုင်း သတိပေးနေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_711",
        "hanzi": "无论面对怎样刻薄残酷的嘲笑和无端怀疑，她始终微笑着保持住自己那份强大的自信，并且坚韧不拔地去实现那个看似天方夜谭的梦想。",
        "pinyin": "wú lùn miàn duì zěn yàng kè bó cán kù de cháo xiào hé wú duān huái yí, tā shǐ zhōng wēi xiào zhe bǎo chí zhù zì jǐ nà fèn qiáng dà de zì xìn, bìng qiě jiān rèn bù bá de qù shí xiàn nà ge kàn shì tiān fāng yè tán de mèng xiǎng.",
        "burmese": "ဘယ်လိုပဲ ပြင်းထန်ရက်စက်တဲ့ လှောင်ပြောင်မှုတွေနဲ့ အကြောင်းမဲ့သံသယတွေကို ရင်ဆိုင်ရပါစေ၊ သူမက အမြဲတမ်းပြုံးပြီး ကိုယ့်ရဲ့ အားကောင်းတဲ့ ကိုယ့်ကိုယ်ကျုံကြည်မှုကို ထိန်းသိမ်းထားပြီး၊ ယုံတမ်းစကားလိုဖြစ်နေတဲ့ အဲ့ဒီအိပ်မက်ကို အကောင်အထည်ဖော်ဖို့ ဇွဲမလျှော့ခဲ့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_712",
        "hanzi": "这种坚定无比的勇敢态度终于让她在经过了整整十年的默默努力后成功摘取了那一枚让所有曾经看不起她的人都感到极其震惊与无地自容的金牌。",
        "pinyin": "zhè zhǒng jiān dìng wú bǐ de yǒng gǎn tài du zhōng yú ràng tā zài jīng guò le zhěng zhěng shí nián de mò mò nǔ lì hòu chéng gōng zhāi qǔ le nà yì méi ràng suǒ yǒu céng jīng kàn bu qǐ tā de rén dōu gǎn dào jí qí zhèn jīng yǔ wú dì zì róng de jīn pái.",
        "burmese": "ဒီလိုခိုင်မာပြတ်သားတဲ့ သတ္တိရှိတဲ့သဘောထားက နောက်ဆုံးတော့ ဆယ်နှစ်တိတိ တိတ်တဆိတ်ကြိုးစားမှုတွေအပြီးမှာ သူ့ကို တစ်ချိန်ကအထင်သေးခဲ့ကြသူတိုင်း အရမ်းအံ့ဩပြီး မျက်နှာပျက်ရလောက်တဲ့ ရွှေတံဆိပ်တစ်ခုကို အောင်မြင်စွာဆွတ်ခူးနိုင်စေခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_713",
        "hanzi": "我发现自从养了这只脾气极其温和可爱的小猫之后，我的耐心不仅在不知不觉中变好了很多而且整个人都似乎被一种柔和的情感所彻底包围了。",
        "pinyin": "wǒ fā xiàn zì cóng yǎng le zhè zhī pí qì jí qí wēn hé kě ài de xiǎo māo zhī hòu, wǒ de nài xīn bù jǐn zài bù zhī bù jué zhōng biàn hǎo le hěn duō ér qiě zhěng ge rén dōu sì hū bèi yì zhǒng róu hé de qíng gǎn suǒ chè dǐ bāo wéi le.",
        "burmese": "ငါဒီစိတ်ထားအရမ်းနူးညံ့ပြီး ချစ်စရာကောင်းတဲ့ကြောင်လေးကို မွေးပြီးကတည်းက၊ ငါ့ရဲ့သည်းခံနိုင်စွမ်းတွေ မသိမသာနဲ့ အများကြီးကောင်းလာရုံတင်မကဘူး လူတစ်ကိုယ်လုံးလည်း နူးညံ့တဲ့ခံစားချက်တစ်မျိုးနဲ့ လုံးဝဝန်းရံခံထားရသလိုပဲဆိုတာ သတိထားမိတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_714",
        "hanzi": "宠物确实往往有一种几乎算得上神奇无阻的能瞬间治愈人类内心深处悲痛的魔力，它们的存在能极大地缓解我们平时承受的各种压力。",
        "pinyin": "chǒng wù què shí wǎng wǎng yǒu yì zhǒng jī hū suàn de shàng shén qí wú zǔ de néng shùn jiān zhì yù rén lèi nèi xīn shēn chù bēi tòng de mó lì, tā men de cún zài néng jí dà de huǎn jiě wǒ men píng shí chéng shòu de gè zhǒng yā lì.",
        "burmese": "အိမ်မွေးတိရစ္ဆာန်တွေက တကယ်ကိုအံ့သြစရာကောင်းလောက်အောင် အတားအဆီးမရှိ လူသားတွေရဲ့စိတ်ထဲက နက်ရှိုင်းတဲ့ဝမ်းနည်းနာကျင်မှုတွေကို ချက်ချင်းကုစားနိုင်တဲ့ မှော်အစွမ်းရှိတတ်တယ်၊ သူတို့ရှိနေခြင်းက ငါတို့ပုံမှန်ခံစားရတဲ့ ဖိအားအမျိုးမျိုးကို အများကြီးသက်သာစေနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_715",
        "hanzi": "我不由得深深赞叹这座刚刚完工的大桥其跨度之宽广建造难度之大不仅体现了当代极其先进的建筑水平更极大地便利了两岸之间原本几乎断绝的交通。",
        "pinyin": "wǒ bù yóu de shēn shēn zàn tàn zhè zuò gāng gāng wán gōng de dà qiáo qí kuà dù zhī kuān guǎng jiàn zào nán dù zhī dà bù jǐn tǐ xiàn le dāng dài jí qí xiān jìn de jiàn zhù shuǐ píng gèng jí dà de biàn lì le liǎng àn zhī jiān yuán běn jī hū duàn jué de jiāo tōng.",
        "burmese": "အခုမှဆောက်လုပ်ပြီးစီးသွားတဲ့ ဒီတံတားကြီးရဲ့ အကျယ်အဝန်း၊ ဆောက်လုပ်ရခက်ခဲမှုတွေက ခေတ်ပြိုင်အရမ်းအဆင့်မြင့်တဲ့ ဗိသုကာအဆင့်အတန်းကို ဖော်ပြနေရုံတင်မကဘဲ မူလက လုံးဝပြတ်တောက်လုနီးပါးဖြစ်နေတဲ့ ကမ်းနှစ်ဖက်ကြားက သွားရေးလာရေးကို အများကြီးအဆင်ပြေချောမွေ့စေလို့ ငါအလိုလိုနက်နက်ရှိုင်းရှိုင်းကို ချီးကျူးမိတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_716",
        "hanzi": "你算是说到了点子上如今原本要绕一大圈甚至花费大半天的时间才能到达的路程现在只仅仅需要短短几分钟车程便可轻松自如地跨越。",
        "pinyin": "nǐ suàn shì shuō dào le diǎn zi shang rú jīn yuán běn yào rào yí dà quān shèn zhì huā fèi dà bàn tiān de shí jiān cái néng dào dá de lù chéng xiàn zài zhǐ jǐn jǐn xū yào duǎn duǎn jǐ fēn zhōng chē chéng biàn kě qīng sōng zì rú de kuà yuè.",
        "burmese": "မင်းပြောတာအချက်ကျသွားပြီ အခုက မူလကပတ်ပြီး အချိန်တစ်ဝက်နီးပါးလောက်ပေးမှ ရောက်နိုင်မယ့်ခရီးက အခုဆို ကားနဲ့ခဏလေး မိနစ်ပိုင်းသွားရုံနဲ့ ပေါ့ပေါ့ပါးပါး လွတ်လွတ်လပ်လပ် ဖြတ်ကျော်နိုင်သွားပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_717",
        "hanzi": "虽然从表面资料上看这个极其新颖的商业模式极具吸引力但是作为理智冷静的投资人我们在没进行长时间多维度的各种规模内部反复实验前绝不可轻举妄动。",
        "pinyin": "suī rán cóng biǎo miàn zī liào shang kàn zhè ge jí qí xīn yǐng de shāng yè mó shì jí jù xī yǐn lì dàn shì zuò wéi lǐ zhì lěng jìng de tóu zī rén wǒ men zài méi jìn xíng cháng shí jiān duō wéi dù de gè zhǒng guī mó nèi bù fǎn fù shí yàn qián jué bù kě qīng jǔ wàng dòng.",
        "burmese": "အပေါ်ယံအချက်အလက်တွေအရကြည့်ရင် အရမ်းဆန်းသစ်တဲ့ ဒီစီးပွားရေးပုံစံက အရမ်းဆွဲဆောင်မှုရှိတယ်ဆိုပေမယ့် အသိဉာဏ်ရှိပြီးတည်ငြိမ်တဲ့ ရင်းနှီးမြှုပ်နှံသူတွေအနေနဲ့ ငါတို့က အချိန်အကြာကြီး ရှုထောင့်ပေါင်းစုံကနေ အတိုင်းအတာအမျိုးမျိုးနဲ့ အတွင်းပိုင်းထပ်တလဲလဲ စမ်းသပ်မှုတွေမလုပ်ခင် လုံးဝအလွယ်တကူ လှုပ်ရှားလို့မရဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_718",
        "hanzi": "谨慎总是没有丝毫坏处的因为很多在纸面上看似完美无暇找不到任何缺陷的神话项目往往在投入真实极其复杂的市场海洋后就会立刻原形毕露而导致血本无归。",
        "pinyin": "jǐn shèn zǒng shì méi yǒu sī háo huài chù de yīn wèi hěn duō zài zhǐ miàn shang kàn shì wán měi wú xiá zhǎo bú dào rèn hé quē xiàn de shén huà xiàng mù wǎng wǎng zài tóu rù zhēn shí jí qí fù zá de shì chǎng hǎi yáng hòu jiù huì lì kè yuán xíng bì lù ér dǎo zhì xuè běn wú guī.",
        "burmese": "သတိထားတာက အမြဲတမ်းနည်းနည်းလေးမှ ဆိုးကျိုးမရှိပါဘူး ဘာလို့လဲဆိုတော့ စာရွက်ပေါ်မှာ အပြစ်ကင်းစင်ပြီး ဘာဟာကွက်မှရှာမရသယောင်ရှိတဲ့ ပုံပြင်လိုစီမံကိန်းများစွာက တကယ့်အရမ်းရှုပ်ထွေးတဲ့ ဈေးကွက်သမုဒ္ဒရာထဲကို ရင်းနှီးမြှုပ်နှံလိုက်တာနဲ့ ချက်ချင်းမူလပုံစံပေါ်လာပြီး အရင်းတောင်ပြန်မရတဲ့အခြေအနေမျိုး ဖြစ်သွားတတ်လို့ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_719",
        "hanzi": "那个一直面带严肃并戴着粗框眼镜的资深男面试官问的几个关键且极其刁钻的问题不仅十分地专业详尽甚至似乎是在故意疯狂考验并试探我的抗压底线。",
        "pinyin": "nà ge yì zhí miàn dài yán sù bìng dài zhe cū kuàng yǎn jìng de zī shēn nán miàn shì guān wèn de jǐ ge guān jiàn qiě jí qí diāo zuān de wèn tí bù jǐn shí fēn de zhuān yè xiáng jìn shèn zhì sì hū shì zài gù yì fēng kuáng kǎo yàn bìng shì tàn wǒ de kàng yā dǐ xiàn.",
        "burmese": "အမြဲတမ်းမျက်နှာတည်ထားပြီး မျက်မှန်ကိုင်းထူထူတပ်ထားတဲ့ အဲ့ဒီအတွေ့အကြုံရင့်အင်တာဗျူးစစ်တဲ့အမျိုးသား မေးတဲ့အရေးကြီးပြီး အရမ်းကိုလှည့်စားလွန်းတဲ့ မေးခွန်းအချို့က အရမ်းပညာသားပါပြီး အသေးစိတ်ကျရုံတင်မကဘူး၊ ငါ့ရဲ့ဖိအားဒဏ်ခံနိုင်ရည် အတိုင်းအတာကို တမင်တကာ အရူးအမူးစမ်းသပ်ပြီး စစ်ဆေးနေသလိုတောင် ဖြစ်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_720",
        "hanzi": "这反而更恰好毋庸置疑地证明了这家历史极其悠久的庞大跨国大企业在筛选并极力争取最最顶端核心稀缺人才方面那种难以逾越的极高与极为严格的招聘标准呗。",
        "pinyin": "zhè fǎn ér gèng qià hǎo wú yōng zhì yí de zhèng míng le zhè jiā lì shǐ jí qí yōu jiǔ de páng dà kuà guó dà qǐ yè zài shāi xuǎn bìng jí lì zhēng qǔ zuì zuì dǐng duān hé xīn xī quē rén cái fāng miàn nà zhǒng nán yǐ yú yuè de jí gāo yǔ jí wéi yán gé de zhāo pìn biāo zhǔn bei.",
        "burmese": "ဒါက သမိုင်းကြောင်းအရမ်းရှည်ကြာလှတဲ့ ဒီနိုင်ငံတကာလုပ်ငန်းကြီးက အထွတ်အထိပ်အဓိကရှားပါးလူရည်ချွန်တွေကို ရွေးချယ်ပြီး အစွမ်းကုန်ကြိုးစားလုယူတဲ့နေရာမှာ ကျော်ဖြတ်ဖို့ခက်ခဲတဲ့ အရမ်းမြင့်မားပြီး တင်းကျပ်တဲ့ အလုပ်ခေါ်ယူမှုစံနှုန်းတွေရှိတယ်ဆိုတာကို ယုံမှားသံသယဖြစ်စရာမလိုအောင် ပိုလို့တောင် မှန်ကန်စွာသက်သေပြနေတာပဲလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_721",
        "hanzi": "这种具有强烈当地独特风味的特色辣椒酱虽然初次品尝起来其冲鼻的辣度极其惊人但是却总能在心底慢慢勾起我昔日在那个遥远美丽家乡度过的那些美好年少时光的温暖回忆。",
        "pinyin": "zhè zhǒng jù yǒu qiáng liè dāng dì dú tè fēng wèi de tè sè là jiāo jiàng suī rán chū cì pǐn cháng qǐ lái qí chòng bí de là dù jí qí jīng rén dàn shì què zǒng néng zài xīn dǐ màn màn gōu qǐ wǒ xī rì zài nà ge yáo yuǎn měi lì jiā xiāng dù guò de nà xiē měi hǎo nián shào shí guāng de wēn nuǎn huí yì.",
        "burmese": "ဒီလို ပြင်းထန်တဲ့ဒေသခံသီးသန့်အရသာပါတဲ့ အထူးငရုတ်သီးဆော့စ်က ပထမဆုံးအကြိမ်မြည်းစမ်းလိုက်ရင် သူ့ရဲ့နှာခေါင်းရှူသွားစေတဲ့ အစပ်နှုန်းကအရမ်းအံ့ဩဖို့ကောင်းပေမယ့် အဝေးကလှပတဲ့ဇာတိမြေမှာ အရင်ကဖြတ်သန်းခဲ့ရတဲ့ အဲ့ဒီလှပတဲ့လူငယ်ဘဝအချိန်လေးတွေရဲ့ နွေးထွေးတဲ့အမှတ်တရတွေကို ရင်ထဲမှာတဖြည်းဖြည်း ပြန်အမှတ်ရစေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_722",
        "hanzi": "这就是所谓看似平凡的乡土食物的更为隐秘且深邃的隐藏记忆吧它不仅仅是为了去单纯地填饱肠胃或者是满足简单的口腹之欲更像是为了极大限度地去承载那些已经渐渐远去漂泊在外的人们对故土的深深思念和难以割舍之情。",
        "pinyin": "zhè jiù shì suǒ wèi kàn shì píng fán de xiāng tǔ shí wù de gèng wéi yǐn mì qiě shēn suì de yǐn cáng jì yì ba tā bù jǐn jǐn shì wèi le qù dān chún de tián bǎo cháng wèi huò zhě shì mǎn zú jiǎn dān de kǒu fù zhī yù gèng xiàng shì wèi le jí dà xiàn dù de qù chéng zǎi nà xiē yǐ jīng jiàn jiàn yuǎn qù piāo bó zài wài de rén men duì gù tǔ de shēn shēn sī niàn hé nán yǐ gē shě zhī qíng.",
        "burmese": "ဒါက သာမန်လို့ထင်ရတဲ့ ဒေသခံအစားအစာတွေရဲ့ ပိုမိုလျှို့ဝှက်ပြီး နက်နဲတဲ့လျှို့ဝှက်မှတ်ဉာဏ်ဆိုတာပဲဖြစ်မယ် သူကဗိုက်ထဲကိုအစာပြည့်ဖို့သက်သက် ဒါမှမဟုတ် ရိုးရှင်းတဲ့ပါးစပ်အရသာဆန္ဒကို ဖြည့်ဆည်းဖို့အတွက်တင်မကဘဲ တဖြည်းဖြည်းဝေးကွာပြီး အပြင်မှာလှည့်လည်နေကြတဲ့လူတွေရဲ့ ဇာတိမြေအပေါ် နက်နက်ရှိုင်းရှိုင်းလွမ်းဆွတ်မှုနဲ့ စွန့်လွှတ်ရခက်တဲ့သံယောဇဉ်တွေကို အများဆုံးသယ်ဆောင်ပေးထားဖို့ ပိုတူတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_723",
        "hanzi": "在当今各行各业竞争皆激烈到几乎让人稍有不慎便会彻底窒息甚至被无情抛弃的现代社会大环境里如果你还敢固步自封而不抓紧所有空闲时间去更加拼命地学习和熟练掌握更难更为前沿的新奇技术那就乖乖地等着被大浪淘沙般地快速彻底淘汰出局吧。",
        "pinyin": "zài dāng jīn gè háng gè yè jìng zhēng jiē jī liè dào jī hū ràng rén shāo yǒu bú shèn biàn huì chè dǐ zhì xī shèn zhì bèi wú qíng pāo qì de xiàn dài shè huì dà huán jìng lǐ rú guǒ nǐ hái gǎn gù bù zì fēng ér bù zhuā jǐn suǒ yǒu kòng xián shí jiān qù gèng jiā pīn mìng de xué xí hé shú liàn zhǎng wò gèng nán gèng wéi qián yán de xīn qí jì shù nà jiù guāi guāi de děng zhe bèi dà làng táo shā bān de kuài sù chè dǐ táo tài chū jú ba.",
        "burmese": "ယနေ့ခေတ် လုပ်ငန်းနယ်ပယ်အသီးသီးက ပြိုင်ဆိုင်မှုတွေက လူကိုနည်းနည်းလေးသတိမမူမိတာနဲ့ လုံးဝအသက်ရှူကြပ်သွားပြီး ရက်ရက်စက်စက်စွန့်ပစ်ခံရလောက်တဲ့အထိ ပြင်းထန်လွန်းတဲ့ ခေတ်သစ်လူ့အဖွဲ့အစည်းပတ်ဝန်းကျင်ကြီးမှာ မင်းကကိုယ့်နေရာမှာပဲရပ်နေပြီး အားလပ်ချိန်အားလုံးကို အမိအရဖမ်းပြီး ပိုခက်ပြီး ရှေ့တန်းရောက်တဲ့နည်းပညာအသစ်တွေကို ပိုပိုပြီးအသေအလဲလေ့လာကျွမ်းကျင်အောင်မလုပ်ရဲသေးရင်တော့ လှိုင်းကြီးတွေက သဲတွေကိုဆေးချလိုက်သလိုမျိုး မြန်မြန်ဆန်ဆန်နဲ့ လုံးဝဖယ်ရှားခံရဖို့သာ လိမ္မာပါးနပ်စွာနဲ့ စောင့်နေလိုက်ပါတော့။",
        "category": "daily"
    },
    {
        "id": "hsk4_724",
        "hanzi": "我无比深刻且毫不留情面地认为且多次大声呼吁全社会都应当重视只有从小就在宽松健康的家庭和学校环境里全方位着重培养小孩子真正去具备主动且自主探究的终身学习习惯才能使他们在未来长大后不论面对任何变幻莫测极其陌生甚至极为危险艰难的未知领域中也依然能够牢牢保持住稳定且永远立于不败之地的核心社会竞争力。",
        "pinyin": "wǒ wú bǐ shēn kè qiě háo bù liú qíng miàn de rèn wéi qiě duō cì dà shēng hū yù quán shè huì dōu yīng dāng zhòng shì zhǐ yǒu cóng xiǎo jiù zài kuān sōng jiàn kāng de jiā tíng hé xué xiào huán jìng lǐ quán fāng wèi zhuó zhòng péi yǎng xiǎo hái zi zhēn zhèng qù jù bèi zhǔ dòng qiě zì zhǔ tàn jiū de zhōng shēn xué xí xí guàn cái néng shǐ tā men zài wèi lái zhǎng dà hòu bú lùn miàn duì rèn hé biàn huàn mò cè jí qí mò shēng shèn zhì jí wéi wēi xiǎn jiān nán de wèi zhī lǐng yù zhōng yě yī rán néng gòu láo láo bǎo chí zhù wěn dìng qiě yǒng yuǎn lì yú bú bài zhī dì de hé xīn shè huì jìng zhēng lì.",
        "burmese": "ငါကတော့ အရမ်းကိုနက်နက်ရှိုင်းရှိုင်းနဲ့ ပြတ်ပြတ်သားသားကို ယုံကြည်ပြီး လူမှုအသိုင်းအဝိုင်းတစ်ရပ်လုံးက အလေးထားသင့်တယ်လို့ အကြိမ်ကြိမ်အော်ဟစ်တောင်းဆိုချင်တာက ကလေးတွေကို ငယ်စဉ်ကတည်းက လွတ်လပ်ပြီးကျန်းမာတဲ့မိသားစုနဲ့ ကျောင်းပတ်ဝန်းကျင်မှာ ဘက်စုံလွှမ်းခြုံပြီး တက်တက်ကြွကြွနဲ့ ကိုယ်တိုင်ရှာဖွေလေ့လာတတ်တဲ့ တစ်သက်တာသင်ယူမှုအလေ့အကျင့်အစစ်အမှန်ရှိဖို့ အဓိကပျိုးထောင်ပေးခြင်းကသာ သူတို့ကိုအနာဂတ်မှာကြီးလာတဲ့အခါ ဘယ်လိုပဲခန့်မှန်းရခက်ပြီး အရမ်းစိမ်းသက်တဲ့၊ ဒါမှမဟုတ် အရမ်းအန္တရာယ်များပြီး ခက်ခဲတဲ့ မသိသေးတဲ့နယ်ပယ်တွေကိုရင်ဆိုင်ရပါစေ တည်ငြိမ်ပြီး ထာဝရမရှုံးနိမ့်တဲ့နေရာမှာ ခိုင်ခိုင်မာမာရပ်တည်နိုင်တဲ့ အဓိကလူမှုရေးယှဉ်ပြိုင်နိုင်စွမ်းကို ထိန်းသိမ်းထားနိုင်စေမယ်ဆိုတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_725",
        "hanzi": "这部刚刚上映好评如潮的超级科幻大电影其剧情结构设计得极其巧妙跌宕起伏毫无破绽可寻而且最主要的是其展现出来的宏大特效画面的逼真细腻程度远远跨越式地超过了我们所有人之前很久一段时间里在电影院看过的所有号称大制作的同类类型影片。",
        "pinyin": "zhè bù gāng gāng shàng yìng hǎo píng rú cháo de chāo jí kē huàn dà diàn yǐng qí jù qíng jié gòu shè jì de jí qí qiǎo miào diē dàng qǐ fú háo wú pò zhàn kě xún ér qiě zuì zhǔ yào de shì qí zhǎn xiàn chū lái de hóng dà tè xiào huà miàn de bī zhēn xì nì chéng dù yuǎn yuǎn kuà yuè shì de chāo guò le wǒ men suǒ yǒu rén zhī qián hěn jiǔ yí duàn shí jiān lǐ zài diàn yǐng yuàn kàn guò de suǒ yǒu hào chēng dà zhì zuò de tóng lèi lèi xíng yǐng piān.",
        "burmese": "အခုမှရုံတင်ပြီး ချီးကျူးသံတွေဆူညံနေတဲ့ ဒီစူပါသိပ္ပံဇာတ်ကားကြီးက သူ့ရဲ့ဇာတ်လမ်းဖွဲ့စည်းပုံဒီဇိုင်းက အရမ်းပါးနပ်ပြီး အတက်အကျများလွန်းလို့ အပြစ်ရှာစရာ ဟာကွက်လေးတောင်မရှိဘူး၊ အဓိကအချက်ကတော့ သူပြသလာတဲ့ ကြီးကျယ်ခမ်းနားတဲ့ အထူးပြုလုပ်ချက်မြင်ကွင်းတွေရဲ့ လက်တွေ့ဆန်ပြီး အသေးစိတ်ကျမှုအဆင့်က ငါတို့အားလုံးအရင်တုန်းက အချိန်အတော်ကြာအောင် ရုပ်ရှင်ရုံမှာကြည့်ဖူးခဲ့တဲ့ ကြီးကြီးမားမားထုတ်လုပ်ထားပါတယ်ဆိုတဲ့ အလားတူဇာတ်ကားအမျိုးအစားတွေအားလုံးထက် အဆင့်များစွာကျော်လွန်ပြီး သာလွန်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_726",
        "hanzi": "难怪大家都纷纷在社交媒体上极力推荐说它能在短短首映不到七天内就不可思议般地连续多次打破了目前全球范围内甚至被认为最近十年都极难被轻易突破的那好几项重要且耀眼的票房最高纪录，大家对于这种能够真实满足最挑剔眼光的高水平终极视听盛宴的如饥似渴般的强烈感受和渴望真的是让平常人根本就难以发挥想象啊。",
        "pinyin": "nán guài dà jiā dōu fēn fēn zài shè jiāo méi tǐ shang jí lì tuī jiàn shuō tā néng zài duǎn duǎn shǒu yìng bú dào qī tiān nèi jiù bù kě sī yì bān de lián xù duō cì dǎ pò le mù qián quán qiú fàn wéi nèi shèn zhì bèi rèn wéi zuì jìn shí nián dōu jí nán bèi qīng yì tū pò de nà hǎo jǐ xiàng zhòng yào qiě yào yǎn de piào fáng zuì gāo jì lù, dà jiā duì yú zhè zhǒng néng gòu zhēn shí mǎn zú zuì tiāo ti yǎn guāng de gāo shuǐ píng zhōng jí shì tīng shèng yàn de rú jī sì kě bān de qiáng liè gǎn shòu hé kě wàng zhēn de shì ràng píng cháng rén gēn běn jiù nán yǐ fā huī xiǎng xiàng a.",
        "burmese": "ဒါကြောင့်လည်း အားလုံးက လူမှုကွန်ရက်ပေါ်မှာ ဒါက ပထမဆုံးပွဲထွက်ပြသတဲ့ ရက်သတ္တပတ်မတိုင်ခင် အချိန်တိုအတွင်းမှာပဲ အခုလက်ရှိကမ္ဘာတစ်ဝှမ်းမှာ မကြာသေးခင်ဆယ်နှစ်အတွင်း အလွယ်တကူချိုးဖျက်ဖို့ အရမ်းခက်ခဲတယ်လို့ ယူဆထားကြတဲ့ အဲ့ဒီအရေးကြီးပြီး ထင်ပေါ်ကျော်ကြားတဲ့ အမြင့်ဆုံးရုံဝင်ကြေးစံချိန်များစွာကို အံ့ဩစရာကောင်းလောက်အောင် တစ်ဆက်တည်း အကြိမ်ကြိမ်ချိုးဖျက်နိုင်ခဲ့တယ်လို့ အားတက်သရော အကြံပြုညွှန်ပြနေကြတာ မဆန်းပါဘူး၊ အားလုံးက အရမ်းရွေးတတ်တဲ့ အမြင်တွေကိုတောင် တကယ်ကိုကျေနပ်စေနိုင်တဲ့ ဒီလိုအဆင့်မြင့်ဆုံး ရုပ်သံခံစားမှုပွဲတော်ကြီးအပေါ် ဆာလောင်မွတ်သိပ်နေသလို ပြင်းထန်တဲ့ခံစားချက်နဲ့ တောင့်တမှုတွေက သာမန်လူတွေအတွက် လုံးဝကိုစိတ်ကူးယဉ်ကြည့်လို့မရနိုင်အောင်ပါပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_727",
        "hanzi": "我们今天下午开碰头会时需要重新重点深入讨论的那个极具潜力的跨国电商大项目如果此刻极其想要能够百分百按照所有既定规划蓝图非常顺利无阻碍地继续往前大力度加快去整体进行推进那最少最少还得必须通过非常手段从海外大银行里再极为顺利安全地额外借贷出整整两百五十万美金作为缓冲资金才能算是堪堪去安稳填补上目前的极其巨大并且极其致命的预算空缺漏洞进而保障前期投入不打水漂呐。",
        "pinyin": "wǒ men jīn tiān xià wǔ kāi pèng tóu huì shí xū yào chóng xīn zhòng diǎn shēn rù tǎo lùn de nà ge jí jù qián lì de kuà guó diàn shāng dà xiàng mù rú guǒ cǐ kè jí qí xiǎng yào néng gòu bǎi fēn bǎi àn zhào suǒ yǒu jì dìng guī huà lán tú fēi cháng shùn lì wú zhǔ ài de jì xù wǎng qián dà lì dù jiā kuài qù zhěng tǐ jìn xíng tuī jìn nà zuì shǎo zuì shǎo hái děi bì xū tōng guò fēi cháng shǒu duàn cóng hǎi wài dà yín háng lǐ zài jí wéi shùn lì ān quán de è wài jiè dài chū zhěng zhěng liǎng bǎi wǔ shí wàn měi jīn zuò wéi huǎn chōng zī jīn cái néng suàn shì kān kān qù ān wěn tián bǔ shàng mù qián de jí qí jù dà bìng qiě jí qí zhì mìng de yù suàn kòng quē lòu dòng jìn ér bǎo zhàng qián qī tóu rù bù dǎ shuǐ piāo a.",
        "burmese": "ငါတို့ဒီနေ့ညနေ အစည်းအဝေးလုပ်တဲ့အခါ အသစ်တစ်ဖန် အဓိကထားပြီး နက်နက်ရှိုင်းရှိုင်းဆွေးနွေးရမယ့် အဲ့ဒီအရမ်းအလားအလာရှိတဲ့ နိုင်ငံတကာအီးကောမတ်စ် စီမံကိန်းကြီးက အခုအချိန်မှာ ချမှတ်ထားတဲ့ အစီအစဉ်ရေးဆွဲမှုပုံစံအားလုံးအတိုင်း တစ်ရာရာခိုင်နှုန်း အတားအဆီးမရှိ အရမ်းချောချောမွေ့မွေ့နဲ့ ဆက်ပြီးရှေ့ကို အရှိန်အဟုန်မြှင့်ပြီး တစ်ခုလုံးကို တွန်းအားပေးချင်တယ်ဆိုရင်၊ လက်ရှိအရမ်းကြီးမားပြီး သေရေးရှင်ရေးဖြစ်နေတဲ့ ဘတ်ဂျက်ဟာကွက်ကို အနည်းငယ်လုံခြုံအောင်ဖြည့်တင်းနိုင်ဖို့နဲ့ အစောပိုင်းရင်းနှီးမြှုပ်နှံမှုတွေ အလဟဿမဖြစ်စေဖို့ အနည်းဆုံးတော့ ထူးခြားတဲ့နည်းလမ်းတွေသုံးပြီး နိုင်ငံခြားဘဏ်ကြီးတွေဆီကနေ အမေရိကန်ဒေါ်လာသန်းနှစ်ဆယ်ခွဲတိတိကို အရေးပေါ်ရန်ပုံငွေအနေနဲ့ အရမ်းချောမွေ့လုံခြုံစွာနဲ့ အပိုချေးယူနိုင်မှသာ ရလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_728",
        "hanzi": "完全一点儿问题都没有只要上级批准我现在就会马上吩咐底下整个财务部门停止其他手头一切非紧急的杂乱小事连夜连续不停地加倍进行加班加点并立刻全员行动起来务求尽快毫无瑕疵地准备和专门撰写出一套长达百页极其详尽精确并且极度富有极大商业逻辑魅力与说服力的核心借款商业计划书以此作为我们手中王牌来确保百分之两百能够最终向所有银行高管保证这次超级艰难且苛刻的审核的所谓必过率。",
        "pinyin": "wán quán yì diǎn r wèn tí dōu méi yǒu zhǐ yào shàng jí pī zhǔn wǒ xiàn zài jiù huì mǎ shàng fēn fù dǐ xia zhěng ge cái wù bù mén tíng zhǐ qí tā shǒu tóu yì qiè fēi jǐn jí de zá luàn xiǎo shì lián yè lián xù bù tíng de jiā bèi jìn xíng jiā bān jiā diǎn bìng lì kè quán yuán xíng dòng qǐ lái wù qiú jìn kuài háo wú xiá cī de zhǔn bèi hé zhuān mén zhuàn xiě chū yí tào cháng dá bǎi yè jí qí xiáng jìn jīng què bìng qiě jí dù fù yǒu jí dà shāng yè luó ji mèi lì yǔ shuō fú lì de hé xīn jiè kuǎn shāng yè jì huà shū yǐ cǐ zuò wéi wǒ men shǒu zhōng wáng pái lái què bǎo bǎi fēn zhī liǎng bǎi néng gòu zuì zhōng xiàng suǒ yǒu yín háng gāo guǎn bǎo zhèng zhè cì chāo jí jiān nán qiě kē kè de shěn hé de suǒ wèi bì guò lǜ.",
        "burmese": "လုံးဝနည်းနည်းလေးမှ ပြဿနာမရှိပါဘူး အထက်ကသာခွင့်ပြုရင် ငါအခုချက်ချင်းပဲ အောက်ကဘဏ္ဍာရေးဌာနတစ်ခုလုံးကို လက်ရှိအရေးပေါ်မဟုတ်တဲ့ ရှုပ်ရှုပ်ယှက်ယှက်ကိစ္စသေးသေးလေးတွေအားလုံးကို ရပ်ထားခိုင်းပြီး ညလုံးပေါက် မရပ်မနား အချိန်ပိုနှစ်ဆဆင်းခိုင်းပြီး ဝန်ထမ်းအားလုံး အခုချက်ချင်းလှုပ်ရှားကြဖို့၊ မြန်နိုင်သမျှမြန်မြန် အပြစ်အနာအဆာလုံးဝမရှိဘဲ စာမျက်နှာတစ်ရာလောက်ရှည်ပြီး အရမ်းအသေးစိတ်ကျ၊ တိကျသေချာပြီး စီးပွားရေးယုတ္တိဗေဒဆွဲဆောင်မှုနဲ့ ယုံကြည်လောက်စရာစွမ်းအား အလွန်ပါဝင်တဲ့ အဓိကချေးငွေစီးပွားရေးအစီအစဉ်စာအုပ်တစ်အုပ်ကို သီးသန့်ရေးဆွဲပြင်ဆင်ကြဖို့နဲ့ ဒါကိုငါတို့လက်ထဲက အကောင်းဆုံးဖဲချပ်အနေနဲ့သုံးပြီး ဒီတစ်ခါ အရမ်းခက်ခဲပြီး တင်းကျပ်လွန်းတဲ့ စစ်ဆေးမှုမှာ သေချာပေါက်အောင်မြင်ခွင့်ဆိုတာကို ဘဏ်အရာရှိကြီးတွေအားလုံးဆီမှာ နောက်ဆုံး ရာခိုင်နှုန်းနှစ်ရာသေချာအောင် အာမခံနိုင်ဖို့ ညွှန်ကြားလိုက်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_729",
        "hanzi": "无论面对怎样刻薄残酷甚至是故意刁难的嘲笑和毫无根据的怀疑她始终都能镇定自若地微笑着保持那份绝对的自信并且坚韧不拔地朝着理想飞奔。",
        "pinyin": "wú lùn miàn duì zěn yàng kè bó cán kù shèn zhì shì gù yì diāo nàn de cháo xiào hé háo wú gēn jù de huái yí tā shǐ zhōng dōu néng zhèn dìng zì ruò de wēi xiào zhe bǎo chí nà fèn jué duì de zì xìn bìng qiě jiān rèn bù bá de cháo zhe lǐ xiǎng fēi bēn.",
        "burmese": "ဘယ်လိုပဲ ပြင်းထန်ရက်စက်ပြီး တမင်တကာအကြပ်ကိုင်တဲ့ လှောင်ပြောင်မှုတွေနဲ့ အခြေအမြစ်မရှိတဲ့သံသယတွေကို ရင်ဆိုင်ရပါစေ သူမက အမြဲတမ်း တည်တည်ငြိမ်ငြိမ်နဲ့ပြုံးပြီး အဲ့ဒီလုံးဝသေချာတဲ့ ကိုယ့်ကိုယ်ကျုံကြည်မှုကို ထိန်းသိမ်းထားနိုင်ရုံသာမကဘဲ ဇွဲမလျှော့ဘဲ ရည်မှန်းချက်ဆီကို အပြေးအလွှားသွားခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_730",
        "hanzi": "这确实令人敬佩因为普通人稍受打击往往就会退缩而她真的靠硬撑赢得了金牌。",
        "pinyin": "zhè què shí lìng rén jìng pèi yīn wèi pǔ tōng rén shāo shòu dǎ jī wǎng wǎng jiù huì tuì suō ér tā zhēn de kào yìng chēng yíng dé le jīn pái.",
        "burmese": "ဒါကတကယ်ကို လေးစားဖို့ကောင်းတယ် ဘာလို့လဲဆိုတော့ သာမန်လူတွေက နည်းနည်းလေးထိုးနှက်ခံရတာနဲ့ နောက်ဆုတ်သွားတတ်ကြပေမယ့် သူမကတော့ တကယ်ကိုအတင်းယှဉ်ပြိုင်ကြိုးစားပြီး ရွှေတံဆိပ်ကိုရယူနိုင်ခဲ့တာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_731",
        "hanzi": "如果再不立刻更改那个存在严重漏洞的财务表格整个部门都会被追责的。",
        "pinyin": "rú guǒ zài bú lì kè gēng gǎi nà ge cún zài yán zhòng lòu dòng de cái wù biǎo gé zhěng ge bù mén dōu huì bèi zhuī zé de.",
        "burmese": "ပြင်းထန်တဲ့ဟာကွက်တွေရှိနေတဲ့ အဲ့ဒီဘဏ္ဍာရေးဇယားကို ချက်ချင်းမသွားပြင်ရင် ဌာနတစ်ခုလုံးက တာဝန်ယူရလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_732",
        "hanzi": "毫无疑问所以我们今晚必须通宵加班算清楚并且立马重新报审。",
        "pinyin": "háo wú yì wèn suǒ yǐ wǒ men jīn wǎn bì xū tōng xiāo jiā bān suàn qīng chu bìng qiě lì mǎ chóng xīn bào shěn.",
        "burmese": "ယုံမှားသံသယဖြစ်စရာမလိုဘူး ဒါကြောင့်ငါတို့ ဒီည ညလုံးပေါက်အချိန်ပိုဆင်းပြီး ရှင်းလင်းအောင်တွက်ချက်ပြီး ချက်ချင်းပြန်တင်ပြရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_733",
        "hanzi": "听说你们刚刚重金买下的那家小型初创科技企业最近遇到法律纠纷了？",
        "pinyin": "tīng shuō nǐ men gāng gāng zhòng jīn mǎi xià de nà jiā xiǎo xíng chū chuàng kē jì qǐ yè zuì jìn yù dào fǎ lǜ jiū fēn le?",
        "burmese": "မင်းတို့ အခုလေးတင် ငွေအများကြီးပေးပြီးဝယ်လိုက်တဲ့ အဲ့ဒီအသေးစားနည်းပညာလုပ်ငန်းလေးက မကြာသေးခင်က ဥပဒေရေးရာအငြင်းပွားမှုတွေ ကြုံတွေ့နေရတယ်ဆို?",
        "category": "daily"
    },
    {
        "id": "hsk4_734",
        "hanzi": "是的老板正火冒三丈已经安排了顶尖律师团过去专门帮忙尽快处理违约金的问题了。",
        "pinyin": "shì de lǎo bǎn zhèng huǒ mào sān zhàng yǐ jīng ān pái le dǐng jiān lǜ shī tuán guò qù zhuān mén bāng máng jìn kuài chǔ lǐ wéi yuē jīn de wèn tí le.",
        "burmese": "ဟုတ်တယ် သူဌေးက အရမ်းဒေါသထွက်နေပြီး အဲ့ဒီကိုအကောင်းဆုံးရှေ့နေအဖွဲ့ကို စာချုပ်ဖောက်ဖျက်ကြေးပြဿနာကို မြန်နိုင်သမျှမြန်မြန် သီးသန့်ကူညီဖြေရှင်းဖို့ စီစဉ်လိုက်ပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_735",
        "hanzi": "我简直不敢相信那篇充满偏见且极其荒谬的文章竟然能获得这种级别的惊人关注度。",
        "pinyin": "wǒ jiǎn zhí bù gǎn xiāng xìn nà piān chōng mǎn piān jiàn qiě jí qí huāng miù de wén zhāng jìng rán néng huò dé zhè zhǒng jí bié de jīng rén guān zhù dù.",
        "burmese": "ဘက်လိုက်မှုတွေအပြည့်နဲ့ အရမ်းကိုယုတ္တိမရှိတဲ့ အဲ့ဒီဆောင်းပါးက ဒီလိုအဆင့်လောက်အထိ အံ့ဩစရာကောင်းတဲ့ အာရုံစိုက်မှုကို ရရှိနိုင်မယ်ဆိုတာ ငါလုံးဝကိုမယုံနိုင်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_736",
        "hanzi": "现在的舆论早就变得非常浮躁大家只是在随意消费热点完全不顾真实性。",
        "pinyin": "xiàn zài de yú lùn zǎo jiù biàn de fēi cháng fú zào dà jiā zhǐ shì zài suí yì xiāo fèi rè diǎn wán quán bú gù zhēn shí xìng.",
        "burmese": "အခုခေတ် လူထုအမြင်က အရမ်းကိုပေါ့ပျက်ပျက်ဖြစ်လာတာကြာပြီ အားလုံးက လူစိတ်ဝင်စားတဲ့အကြောင်းအရာတွေကို အမှန်တရားကို လုံးဝဂရုမစိုက်ဘဲ ထင်သလိုသုံးစွဲနေကြတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_737",
        "hanzi": "其实要是在市区开车遇到早点大塞车那种感觉简直比走路还要慢上十倍呢。",
        "pinyin": "qí shí yào shì zài shì qū kāi chē yù dào zǎo diǎn dà sāi chē nà zhǒng gǎn jué jiǎn zhí bǐ zǒu lù hái yào màn shàng shí bèi ne.",
        "burmese": "တကယ်တော့ မြို့ထဲမှာကားမောင်းရင်း မနက်စောစော ယာဉ်ကြောပိတ်ဆို့မှုကြီးနဲ့ကြုံရရင် အဲ့ဒီခံစားချက်က လမ်းလျှောက်တာထက် ဆယ်ဆလောက်တောင် ပိုနှေးသေးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_738",
        "hanzi": "所以为了确保准时打卡不被扣钱我早就果断改骑自行车上下班又健康又省时多好呀。",
        "pinyin": "suǒ yǐ wèi le què bǎo zhǔn shí dǎ kǎ bú bèi kòu qián wǒ zǎo jiù guǒ duàn gǎi qí zì xíng chē shàng xià bān yòu jiàn kāng yòu shěng shí duō hǎo ya.",
        "burmese": "ဒါကြောင့် အချိန်မီကတ်ထိုးနိုင်ပြီး ပိုက်ဆံအဖြတ်မခံရဖို့အတွက် ငါကစက်ဘီးစီးပြီး အလုပ်သွားအလုပ်ပြန်လုပ်ဖို့ ပြတ်ပြတ်သားသားပြောင်းလဲခဲ့တာကြာပြီ ကျန်းမာရေးအတွက်လည်းကောင်း၊ အချိန်လည်းကုန်သက်သာတယ် ဘယ်လောက်ကောင်းလဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_739",
        "hanzi": "这家博物馆收藏的一系列古代陶瓷作品极其精致精美生动形象地反映了千年前古人的高超手工艺。",
        "pinyin": "zhè jiā bó wù guǎn shōu cáng de yí xì liè gǔ dài táo cí zuò pǐn jí qí jīng zhì jīng měi shēng dòng xíng xiàng de fǎn yìng le qiān nián qián gǔ rén de gāo chāo shǒu gōng yì.",
        "burmese": "ဒီပြတိုက်ကစုဆောင်းထားတဲ့ ရှေးဟောင်းကြွေထည်လက်ရာတချို့က အရမ်းကိုလှပသေသပ်ပြီး လွန်ခဲ့တဲ့နှစ်ပေါင်းထောင်ချီက ရှေးလူတွေရဲ့ မြင့်မားတဲ့လက်မှုပညာကို ရှင်သန်ထင်ရှားစွာ ထင်ဟပ်ပြသနေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_740",
        "hanzi": "每次来这里参观都能让我们这些后排感悟到深厚的传统艺术力量十分震撼人心。",
        "pinyin": "měi cì lái zhè lǐ cān guān dōu néng ràng wǒ men zhè xiē hòu pái gǎn wù dào shēn hòu de chuán tǒng yì shù lì liàng shí fēn zhèn hàn rén xīn.",
        "burmese": "ဒီကိုလာလည်တိုင်း ငါတို့လို နောက်ပေါက်လူတွေကို နက်ရှိုင်းတဲ့ရိုးရာအနုပညာစွမ်းအားကို ခံစားနားလည်စေနိုင်လို့ အရမ်းကိုရင်သပ်ရှုမောဖြစ်ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_741",
        "hanzi": "因为那场极其严重的台风整个沿海地区的供水网线已经被彻底摧毁两天了。",
        "pinyin": "yīn wèi nà chǎng jí qí yán zhòng de tái fēng zhěng ge yán hǎi dì qū de gōng shuǐ wǎng xiàn yǐ jīng bèi chè dǐ cuī huǐ liǎng tiān le.",
        "burmese": "အရမ်းဆိုးရွားတဲ့ အဲ့ဒီတိုင်ဖွန်းမုန်တိုင်းကြောင့် ကမ်းရိုးတန်းဒေသတစ်ကြောလုံးရဲ့ ရေပေးဝေရေးကွန်ရက်တွေ လုံးဝပြင်ဆင်မရအောင် ဖျက်ဆီးခံရတာ နှစ်ရက်ရှိသွားပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_742",
        "hanzi": "听说救灾部队早就进驻并且正在满头大汗地进行紧急修复希望很快就能恢复正常生活吧。",
        "pinyin": "tīng shuō jiù zāi bù duì zǎo jiù jìn zhù bìng qiě zhèng zài mǎn tóu dà hàn de jìn xíng jǐn jí xiū fù xī wàng hěn kuài jiù néng huī fù zhèng cháng shēng huó ba.",
        "burmese": "ကယ်ဆယ်ရေးတပ်ဖွဲ့တွေက စောစောကတည်းကဝင်ရောက်လာပြီး အရေးပေါ်ပြင်ဆင်မှုတွေကို ချွေးတလုံးလုံးနဲ့ လုပ်ဆောင်နေတယ်လို့ ကြားတယ် မကြာခင်မှာ ပုံမှန်ဘဝကို ပြန်ရောက်နိုင်ဖို့ မျှော်လင့်ပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_743",
        "hanzi": "这种具有强烈当地特色风味的辣椒酱可是极其难买到的非得去那边的小山沟里才会有卖。",
        "pinyin": "zhè zhǒng jù yǒu qiáng liè dāng dì tè sè fēng wèi de là jiāo jiàng kě shì jí qí nán mǎi dào de fēi děi qù nà biān de xiǎo shān gōu lǐ cái huì yǒu mài.",
        "burmese": "ဒီလို ပြင်းထန်တဲ့ဒေသခံအရသာပါတဲ့ ငရုတ်သီးဆော့စ်က ဝယ်ဖို့အရမ်းခက်တာ ဟိုဘက်ကတောင်ကြားလေးထဲသွားမှ ရောင်းတာရှိတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_744",
        "hanzi": "怪不得你大老远专门跑一趟我看你这不单单是在找美食也是在寻找过去的回忆呢。",
        "pinyin": "guài bù de nǐ dà lǎo yuǎn zhuān mén pǎo yí tàng wǒ kàn nǐ zhè bù dān dān shì zài zhǎo měi shí yě shì zài xún zhǎo guò qù de huí yì ne.",
        "burmese": "ဒါကြောင့်လည်း မင်းကအဝေးကြီးကို သီးသန့်တစ်ခေါက်ပြေးရတာကိုး ငါကြည့်ရတာ မင်းဒါက အရသာရှိတဲ့အစားအသောက်ကို ရှာနေတာတင်မကဘဲ အတိတ်ကအမှတ်တရတွေကိုပါ ရှာဖွေနေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_745",
        "hanzi": "他们公司那个出了名的铁公鸡老板竟然在这次年会上给每个员工发了巨额红包真是惊诧众人。",
        "pinyin": "tā men gōng sī nà ge chū le míng de tiě gōng jī lǎo bǎn jìng rán zài zhè cì nián huì shang gěi měi ge yuán gōng fā le jù é hóng bāo zhēn shì jīng chà zhòng rén.",
        "burmese": "သူတို့ကုမ္ပဏီက နာမည်ကြီးကပ်စေးနှဲသူဌေးက ဒီနှစ်ပတ်လည်ပွဲမှာ ဝန်ထမ်းတိုင်းကို ပမာဏအကြီးကြီးပါတဲ့ အနီရောင်စာအိတ်(မုန့်ဖိုး)တွေ ပေးလိုက်တာ တကယ်ကိုလူတိုင်းကို အံ့ဩမှင်သက်သွားစေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_746",
        "hanzi": "想必是今年整体业绩极其出色为了稳住民心他这也是难得大方放血一次啦。",
        "pinyin": "xiǎng bì shì jīn nián zhěng tǐ yè jì jí qí chū sè wèi le wěn zhù mín xīn tā zhè yě shì nán dé dà fāng fàng xuè yí cì la.",
        "burmese": "သေချာတာကတော့ ဒီနှစ်တစ်နှစ်လုံးရဲ့ လုပ်ငန်းစွမ်းဆောင်ရည်က အရမ်းကောင်းလို့ လူတွေရဲ့စိတ်ကိုတည်ငြိမ်အောင်ထားဖို့ သူကလည်း ဒါရှာမှရှားတဲ့ရက်ရောမှုနဲ့ တစ်ခါလောက် သွေးထွက်(ပိုက်ဆံအကုန်)ခံလိုက်တာပဲလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_747",
        "hanzi": "由于遭遇了罕见的恶劣天气导致的航班全面大面积甚至长久的延误，很多提着行李甚至带着小孩子的旅客都只能无可奈何又焦急地在机场候机厅里坐着苦等了。",
        "pinyin": "yóu yú zāo yù le hǎn jiàn de è liè tiān qì dǎo zhì de háng bān quán miàn dà miàn ji shèn zhì cháng jiǔ de yán wù, hěn duō tí zhe xíng li shèn zhì dài zhe xiǎo hái zi de lǚ kè dōu zhǐ néng wú kě nài hé yòu jiāo jí de zài jī chǎng hòu jī tīng lǐ zuò zhe kǔ děng le.",
        "burmese": "ရှားရှားပါးပါးဆိုးရွားတဲ့ ရာသီဥတုနဲ့ကြုံရလို့ လေယာဉ်ခရီးစဉ်တွေ လုံးဝအကြီးအကျယ်၊ အချိန်အကြာကြီး နှောင့်နှေးသွားတာကြောင့်၊ ခရီးဆောင်အိတ်တွေဆွဲပြီး ကလေးငယ်တွေတောင် ခေါ်လာရတဲ့ ခရီးသည်တော်တော်များများဟာ မတတ်သာဘဲ စိုးရိမ်တကြီးနဲ့ လေဆိပ်စောင့်ဆိုင်းခန်းထဲမှာ ထိုင်ပြီး အခက်အခဲခံစောင့်နေရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_748",
        "hanzi": "这是很难直接在现场迅速处理的，因为天气本就是不可抗力而为了确保所有人员百分之百的生命安全这的确是航空公司在当下能做出的最最合理的选择啦。",
        "pinyin": "zhè shì hěn nán zhí jiē zài xiàn chǎng xùn sù chǔ lǐ de, yīn wèi tiān qì běn jiù shì bù kě kàng lì ér wèi le què bǎo suǒ yǒu rén yuán bǎi fēn zhī bǎi de shēng mìng ān quán zhè dí què shì háng kōng gōng sī zài dāng xià néng zuò chū de zuì zuì hé lǐ de xuǎn zé la.",
        "burmese": "ဒါက နေရာမှာတင် ချက်ချင်းဖြေရှင်းဖို့ အရမ်းခက်ခဲတယ်၊ ဘာလို့လဲဆိုတော့ ရာသီဥတုဆိုတာက တားဆီးလို့မရတဲ့အရာဖြစ်နေပြီး လူအားလုံးရဲ့ အသက်အန္တရာယ် တစ်ရာရာခိုင်နှုန်း ဘေးကင်းဖို့သေချာစေဖို့အတွက် ဒါကတကယ်ကို လေကြောင်းလိုင်းအနေနဲ့ လောလောဆယ်မှာ ချမှတ်နိုင်တဲ့ အကျိုးအကြောင်းအဆီလျော်ဆုံး ရွေးချယ်မှုပဲလေ。",
        "category": "daily"
    },
    {
        "id": "hsk4_749",
        "hanzi": "这家著名的中餐厅生意竟然红火到了即便到了深夜十一点多钟其所有餐桌前还依然坐满了各地前来的食客的程度。",
        "pinyin": "zhè jiā zhù míng de Zhōng cān tīng shēng yì jìng rán hóng huǒ dào le jí biàn dào le shēn yè shí yī diǎn duō zhōng qí suǒ yǒu cān zhuō qián hái yī rán zuò mǎn le gè dì qián lái de shí kè de chéng dù.",
        "burmese": "ဒီနာမည်ကြီးတဲ့ တရုတ်စားသောက်ဆိုင်က လုပ်ငန်းအရမ်းကောင်းလွန်းလို့ ညသန်းခေါင် ၁၁ နာရီကျော်တဲ့အထိတောင်မှ သူတို့ရဲ့စားပွဲတွေအားလုံးမှာ ဒေသအသီးသီးကလာတဲ့ စားသုံးသူတွေ အပြည့်ထိုင်နေတဲ့အဆင့်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_750",
        "hanzi": "估计是因为这里不仅菜的味道绝佳份量充足甚至还有那种让人感到宾至如归的体贴且周到的各种隐藏服务使得顾客赞不绝口。",
        "pinyin": "gū jì shì yīn wèi zhè lǐ bù jǐn cài de wèi dào jué jiā fèn liàng chōng zú shèn zhì hái yǒu nà zhǒng ràng rén gǎn dào bīn zhì rú guī de tǐ tiē qiě zhōu dào de gè zhǒng yǐn cáng fú wù shǐ de gù kè zàn bù jué kǒu.",
        "burmese": "ထင်ရတာတော့ ဒီမှာက ဟင်းရဲ့အရသာက အရမ်းကောင်းပြီး ပမာဏလည်းလုံလောက်ရုံတင်မကဘူး၊ ဧည့်သည်တွေကို အိမ်ကိုပြန်ရောက်သလိုခံစားရစေတဲ့ ဂရုစိုက်ပြီးပြည့်စုံတဲ့ လျှို့ဝှက်ဝန်ဆောင်မှုတွေပါ ရှိနေလို့ ဖောက်သည်တွေက ချီးကျူးမဆုံးဖြစ်နေတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_751",
        "hanzi": "这本长篇小说无论是其本身波澜壮阔的情节设定还是对每个人物极其细腻的情感刻画在当年看来都是极为超前的。",
        "pinyin": "zhè běn cháng piān xiǎo shuō wú lùn shì qí běn shēn bō lán zhuàng kuò de qíng jié shè dìng hái shì duì měi ge rén wù jí qí xì nì de qíng gǎn kè huà zài dāng nián kàn lái dōu shì jí wéi chāo qián de.",
        "burmese": "ဒီဝတ္ထုရှည်က သူ့ရဲ့ကြီးကျယ်ခမ်းနားတဲ့ ဇာတ်လမ်းသွားတည်ဆောက်မှုပဲဖြစ်ဖြစ်၊ ဇာတ်ကောင်တစ်ယောက်ချင်းစီအပေါ် အရမ်းအနုစိတ်တဲ့ ခံစားချက်ပုံဖော်မှုတွေပဲဖြစ်ဖြစ် အဲ့ဒီခေတ်တုန်းကကြည့်ရင် အရမ်းကိုခေတ်ရှေ့ပြေးနေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_752",
        "hanzi": "难怪会被后来的读者奉为不朽的文学经典更是深刻影响了随后整整两代以上无数青年作家的创作灵感。",
        "pinyin": "nán guài huì bèi hòu lái de dú zhě fèng wéi bù xiǔ de wén xué jīng diǎn gèng shì shēn kè yǐng xiǎng le suí hòu zhěng zhěng liǎng dài yǐ shàng wú shù qīng nián zuò jiā de chuàng zuò líng gǎn.",
        "burmese": "ဒါကြောင့်လည်း နောက်ပိုင်းစာဖတ်ပရိသတ်တွေက သေဆုံးခြင်းမရှိတဲ့ စာပေဂန္ထဝင်အဖြစ် သတ်မှတ်ယုံကြည်ကြတာ မဆန်းပါဘူး၊ နောက်ပိုင်း ဆက်တိုက်ဆိုသလို မျိုးဆက်နှစ်ဆက်ကျော်က မရေမတွက်နိုင်တဲ့ လူငယ်စာရေးဆရာတွေရဲ့ ဖန်တီးမှုစိတ်ကူးတွေကိုကိုပါ နက်နက်ရှိုင်းရှိုင်း လွှမ်းမိုးနိုင်ခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_753",
        "hanzi": "刚刚结束的那场涉及巨额资产的跨境并购案由于其中一方在最后的关键合同条款上反悔导致所有前期的努力几乎在一瞬间全都化为了泡影。",
        "pinyin": "gāng gāng jié shù de nà chǎng shè jí jù é zī chǎn de kuà jìng bìng gòu àn yóu yú qí zhōng yì fāng zài zuì hòu de guān jiàn hé tóng tiáo kuǎn shang fǎn huǐ dǎo zhì suǒ yǒu qián qī de nǔ lì jī hū zài yí shùn jiān quán dōu huà wéi le pào yǐng.",
        "burmese": "အခုလေးတင်ပြီးဆုံးသွားတဲ့ ပိုင်ဆိုင်မှုပမာဏအကြီးကြီးပါဝင်တဲ့ နိုင်ငံဖြတ်ကျော်ကုမ္ပဏီပေါင်းစည်းမှုမှာ တစ်ဖက်က နောက်ဆုံးအရေးကြီးတဲ့ စာချုပ်အချက်အလက်တွေအပေါ် စကားပြန်ရုပ်သိမ်းလိုက်တာကြောင့် အစောပိုင်းကြိုးစားအားထုတ်မှုတွေ အားလုံးက မျက်စိတစ်မှိတ်အတွင်းမှာ သဲထဲရေသွန်ဖြစ်သွားခဲ့ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_754",
        "hanzi": "这无疑是在给所有从事商业投资的人极其沉痛地敲响了警钟哪怕是到了快要签名的最后时刻也绝对不可轻易放松任何一丝的警惕。",
        "pinyin": "zhè wú yí shì zài gěi suǒ yǒu cóng shì shāng yè tóu zī de rén jí qí chén tòng de qiāo xiǎng le jǐng zhōng nǎ pà shì dào le kuài yào qiān míng de zuì hòu shí kè yě jué duì bù kě qīng yì fàng sōng rèn hé yì sī de jǐng tì.",
        "burmese": "ဒါက စီးပွားရေးရင်းနှီးမြှုပ်နှံမှုလုပ်နေတဲ့ လူတိုင်းကို အရမ်းနာကျင်စရာကောင်းတဲ့ သတိပေးခေါင်းလောင်းသံ မြည်လိုက်တာပါပဲ၊ လက်မှတ်ထိုးခါနီး နောက်ဆုံးအချိန်ရောက်နေရင်တောင်မှ ဘယ်လိုသတိထားမှုမျိုးကိုမှ အလွယ်တကူ လျှော့ချလိုက်လို့ လုံးဝမရဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_755",
        "hanzi": "对于任何一家极其渴望能够长久霸占整个行业领头羊地位的超级大企业来说源源不断地投入极其高昂的资金去进行最底层的基础性技术研发显然是永远不可或缺的一个极其重要的必经环节。",
        "pinyin": "duì yú rèn hé yì jiā jí qí kě wàng néng gòu cháng jiǔ bà zhàn zhěng ge háng yè lǐng tóu yáng dì wèi de chāo jí dà qǐ yè lái shuō yuán yuán bù duàn de tóu rù jí qí gāo áng de zhī jīn qù jìn xíng zuì dǐ céng de jī chǔ xìng jì shù yán fā xiǎn rán shì yǒng yuǎn bù kě huò quē de yí ge jí qí zhòng yào de bì jīng huán jié.",
        "burmese": "လုပ်ငန်းနယ်ပယ်တစ်ခုလုံးရဲ့ ရှေ့ဆောင်နေရာကို အချိန်ကြာကြာလွှမ်းမိုးထားနိုင်ဖို့ အရမ်းတောင့်တနေတဲ့ ဘယ်လိုစူပါကုမ္ပဏီကြီးအတွက်မဆို၊ အခြေခံအကျဆုံး နည်းပညာသုတေသနနဲ့ ဖွံ့ဖြိုးတိုးတက်မှုတွေလုပ်ဖို့ အရမ်းမြင့်မားတဲ့ ရန်ပုံငွေတွေကို အဆက်မပြတ်ရင်းနှီးမြှုပ်နှံတာက ထာဝရမရှိမဖြစ်လိုအပ်ပြီး အရမ်းအရေးကြီးတဲ့ မဖြစ်မနေဖြတ်သန်းရမယ့် အဆင့်တစ်ခုဆိုတာ ထင်ရှားပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_756",
        "hanzi": "如果总是只顾着眼前那丁点可以很快就能拿到的微薄蝇头小利而不愿意从源头上彻底建立起核心技术壁垒的话迟早有一天会被突然崛起的新兴竞争对手所彻底击败以及最终直接淘汰出局的。",
        "pinyin": "rú guǒ zǒng shì zhǐ gù zhe yǎn qián nà dīng diǎn kě yǐ hěn kuài jiù néng ná dào de wēi bó yíng tóu xiǎo lì ér bú yuàn yì cóng yuán tóu shang chè dǐ jiàn lì qǐ hé xīn jì shù bì lěi de huà chí zǎo yǒu yì tiān huì bèi tū rán jué qǐ de xīn xīng jìng zhēng duì shǒu suǒ chè dǐ jī bài yǐ jí zuì zhōng zhí jiē táo tài chū jú de.",
        "burmese": "အမြဲတမ်း မျက်စိရှေ့က မြန်မြန်ရနိုင်တဲ့ အမြတ်အစွန်းလေးတွေကိုပဲ ဂရုစိုက်နေပြီး အရင်းအမြစ်ကနေ အဓိကနည်းပညာအတားအဆီးကို လုံးဝတည်ဆောက်ဖို့ဆန္ဒမရှိရင်၊ တစ်နေ့နေ့မှာ ရုတ်တရက်ပေါ်ထွက်လာမယ့် ပြိုင်ဘက်အသစ်တွေရဲ့ လုံးဝအနိုင်ယူတာကိုခံရပြီး နောက်ဆုံးမှာ တိုက်ရိုက်ဖယ်ရှားခံရလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_757",
        "hanzi": "昨天下午当我们极其艰难地爬到了那座险峻雪山的半山腰时那原本非常晴朗的天空突然被一层厚重且极其恐怖的乌云所彻底遮盖并且紧接着刮起了能把人直接吹倒的猛烈狂风。",
        "pinyin": "zuó tiān xià wǔ dāng wǒ men jí qí jiān nán de pá dào le nà zuò xiǎn jùn xuě shān de bàn shān yāo shí nà yuán běn fēi cháng qíng lǎng de tiān kōng tū rán bèi yì céng hòu zhòng qiě jí qí kǒng bù de wū yún suǒ chè dǐ zhē gài bìng qiě jǐn jiē zhe guā qǐ le néng bǎ rén zhí jiē chuī dǎo de měng liè kuáng fēng.",
        "burmese": "မနေ့ညနေက ငါတို့အရမ်းခက်ခက်ခဲခဲနဲ့ အဲ့ဒီမတ်စောက်တဲ့နှင်းတောင်ရဲ့ တောင်ခါးပန်းအထိ တက်သွားတဲ့အချိန်မှာ အရမ်းသာယာနေတဲ့ကောင်းကင်က ရုတ်တရက် ထူထဲပြီး အရမ်းကြောက်စရာကောင်းတဲ့ မိုးတိမ်မည်းကြီးဖုံးလွှမ်းသွားပြီး ချက်ချင်းပဲ လူကိုတိုက်ရိုက်လွင့်စင်သွားနိုင်တဲ့ ပြင်းထန်တဲ့လေပြင်းတွေတိုက်လာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_758",
        "hanzi": "为了大家极其珍贵的生命安全即便是心底留着再多无尽极其强烈的遗憾所有在场的队员此刻也必须毫不犹豫地完全服从专业向导下达的必须立即撤退回安全营地的绝对命令不能有丝毫极其危险的违抗了。",
        "pinyin": "wèi le dà jiā jí qí zhēn guì de shēng mìng ān quán jí biàn shì xīn dǐ liú zhe zài duō wú jìn jí qí qiáng liè de yí hàn suǒ yǒu zài chǎng de duì yuán cǐ kè yě bì xū háo bù yóu yù de wán quán fú cóng zhuān yè xiàng dǎo xià dá de bì xū lì jí chè tuì huí ān quán yíng dì de jué duì mìng lìng bù néng yǒu sī háo jí qí wēi xiǎn de wéi kàng le.",
        "burmese": "အားလုံးရဲ့ အရမ်းတန်ဖိုးရှိတဲ့ အသက်အန္တရာယ်ကင်းဖို့အတွက် ရင်ထဲမှာ အဆုံးမရှိအရမ်းပြင်းထန်တဲ့ နောင်တတွေ ဘယ်လောက်ပဲရှိနေပါစေ၊ အဲ့ဒီအချိန်မှာ ရှိနေတဲ့အဖွဲ့သားအားလုံးက ကျွမ်းကျင်လမ်းပြချမှတ်လိုက်တဲ့ လုံခြုံတဲ့စခန်းကို ချက်ချင်းပြန်ဆုတ်ရမယ်ဆိုတဲ့ အကြွင်းမဲ့အမိန့်ကို လုံးဝတုံ့ဆိုင်းမနေဘဲ အပြည့်အဝလိုက်နာရမယ်၊ အရမ်းအန္တရာယ်များတဲ့ ဖီဆန်မှုမျိုး နည်းနည်းလေးမှမရှိစေရဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_759",
        "hanzi": "你可千万别去小看这种表面上极其干瘪丑陋的黑色果实在当地人的眼里它不仅能用来非常有效地治疗好几种极其常发的顽固疾病更被极其神圣地视作能驱散无数邪恶的极其珍贵的护身符呢。",
        "pinyin": "nǐ kě qiān wàn bié qù xiǎo kàn zhè zhǒng biǎo miàn shang jí qí gān biě chǒu lòu de hēi sè guǒ shí zài dāng dì rén de yǎn lǐ tā bù jǐn néng yòng lái fēi cháng yǒu xiào di zhì liáo hǎo jǐ zhǒng jí qí cháng fā de wán gù jí bìng gèng bèi jí qí shén shèng de shì zuò néng qū sàn wú shù xié è de jí qí zhēn guì de hù shēn fú ne.",
        "burmese": "အပေါ်ယံမှာ အရမ်းကိုခြောက်သွေ့နေပြီး အရုပ်ဆိုးတဲ့ ဒီအမည်းရောင်အသီးကို လုံးဝအထင်မသေးလိုက်နဲ့ ဒေသခံတွေရဲ့အမြင်မှာဆို သူကအမြဲဖြစ်လေ့ရှိပြီး ကုရခက်တဲ့ရောဂါအမျိုးမျိုးကို အရမ်းထိရောက်စွာကုသနိုင်ရုံသာမက မရေမတွက်နိုင်တဲ့ မကောင်းဆိုးဝါးတွေကို မောင်းထုတ်ပေးနိုင်တဲ့ အရမ်းတန်ဖိုးရှိတဲ့ အဆောင်လက်ဖွဲ့အဖြစ်ပါ အရမ်းမြတ်နိုးစွာ သတ်မှတ်ခံထားရတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_760",
        "hanzi": "这说明了世界上的很多在不被理解的极其隐秘的小角落里极其漫长久远的极度孤立的极其封闭环境导致其繁衍生息出来的带有极其神秘古老色彩的特有民族文化依然在以极其非同寻常的方式顽固绵延不绝地极其神奇地存在着啊。",
        "pinyin": "zhè shuō míng le shì jiè shang de hěn duō zài bú bèi lǐ jiě de jí qí yǐn mì de xiǎo jiǎo luò lǐ jí qí màn cháng jiǔ yuǎn de jí dù gū lì de jí qí fēng bì huán jìng dǎo zhì qí fán yǎn shēng xī chū lái de dài yǒu jí qí shén mì gǔ lǎo sè cǎi de tè yǒu mín zú wén huà yī rán zài yǐ jí qí fēi tóng xún cháng de fāng shì wán gù mián yán bù jué de jí qí shén qí de cún zài zhe a.",
        "burmese": "ဒါက ကမ္ဘာပေါ်မှာ လူတွေနားမလည်နိုင်တဲ့ လျှို့ဝှက်ကျတဲ့နေရာလေးတွေမှာ၊ အရမ်းရှည်ကြာပြီး အလွန်အမင်းအထီးကျန်ဆန်ကာ ပိတ်လှောင်နေတဲ့ပတ်ဝန်းကျင်တွေကြောင့် ပေါက်ဖွားရှင်သန်လာတဲ့ အရမ်းကိုလျှို့ဝှက်နက်နဲပြီး ရှေးဟောင်းအငွေ့အသက်တွေပါတဲ့ သီးသန့်လူမျိုးစုယဉ်ကျေးမှုတွေက အရမ်းထူးခြားတဲ့နည်းလမ်းတွေနဲ့ ခိုင်ခိုင်မာမာ အဆက်မပြတ် ဆက်လက်ရှင်သန်တည်ရှိနေတုန်းပဲဆိုတာကို ပြသနေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_761",
        "hanzi": "无论面对怎样刻薄残酷甚至是极其故意刁难从而为了试图击溃其意志的嘲笑和毫无根据的怀疑她始终都能极其镇定自若地微笑着保持那份绝对极其强大的自信并且极其坚韧不拔地朝着理想飞奔而去。",
        "pinyin": "wú lùn miàn duì zěn yàng kè bó cán kù shèn zhì shì jí qí gù yì diāo nàn cóng ér wèi le shì tú jī kuì qí yì zhì de cháo xiào hé háo wú gēn jù de huái yí tā shǐ zhōng dōu néng jí qí zhèn dìng zì ruò de wēi xiào zhe bǎo chí nà fèn jué duì jí qí qiáng dà de zì xìn bìng qiě jí qí jiān rèn bù bá de cháo zhe lǐ xiǎng fēi bēn ér qù.",
        "burmese": "ဘယ်လိုပဲ ပြင်းထန်ရက်စက်ပြီး စိတ်ဓာတ်ကျအောင်တမင်တကာအကြပ်ကိုင်တဲ့ လှောင်ပြောင်မှုတွေနဲ့ အခြေအမြစ်မရှိတဲ့သံသယတွေကို ရင်ဆိုင်ရပါစေ သူမက အမြဲတမ်း အရမ်းကိုတည်တည်ငြိမ်ငြိမ်နဲ့ပြုံးပြီး အဲ့ဒီလုံးဝသေချာပြီး အရမ်းအားကောင်းတဲ့ ကိုယ့်ကိုယ်ကျုံကြည်မှုကို ထိန်းသိမ်းထားနိုင်ရုံသာမကဘဲ ဇွဲမလျှော့ဘဲ ရည်မှန်းချက်ဆီကို အပြေးအလွှားသွားခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_762",
        "hanzi": "这确实令人由衷地极其敬佩因为极其普通的平常人稍微哪怕是极其短时间地受到此等极其猛烈的各种精神打击往往就会立刻直接退缩了而她真的全凭极其罕见的硬撑熬了过来并奇迹般赢得了极其耀眼夺目的沉甸甸的金牌呀。",
        "pinyin": "zhè què shí lìng rén yóu zhōng de jí qí jìng pèi yīn wèi jí qí pǔ tōng de píng cháng rén shāo wēi nǎ pà shì jí qí duǎn shí jiān de shòu dào cǐ děng jí qí měng liè de gè zhǒng jīng shén dǎ jī wǎng wǎng jiù huì lì kè zhí jiē tuì suō le ér tā zhēn de quán píng jí qí hǎn jiàn de yìng chēng áo le guò lái bìng qí jì bān yíng dé le jí qí yào yǎn duó mù de chén diàn diàn de jīn pái ya.",
        "burmese": "ဒါကတကယ်ကို လိုက်လှိုက်လှဲလှဲလေးစားဖို့ကောင်းတယ် ဘာလို့လဲဆိုတော့ အရမ်းကိုသာမန်ဖြစ်တဲ့လူတွေက အချိန်အရမ်းတိုတောင်းတဲ့ကာလလေးမှာတောင် ဒီလိုပြင်းထန်တဲ့ စိတ်ပိုင်းဆိုင်ရာထိုးနှက်မှုမျိုးကို ခံရတာနဲ့ အများအားဖြင့် ချက်ချင်းပဲနောက်ဆုတ်သွားတတ်ကြပေမယ့် သူမကတော့ တကယ်ကို ရှားရှားပါးပါး အတင်းခံနိုင်ရည်ရှိရှိနဲ့ ဖြတ်သန်းခဲ့ပြီး အံ့ဩစရာကောင်းလောက်အောင် အရမ်းတောက်ပပြီးလင်းလက်နေတဲ့ လေးလံတဲ့ရွှေတံဆိပ်ကို ရယူနိုင်ခဲ့တာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_763",
        "hanzi": "最近这一个月里公司的股票在经历了极其剧烈且几乎毫无征兆的反反复复不停地极其折磨人的疯狂上下起伏波动以后总算在昨天极其艰难地收盘前稍微开始表现出来了一丝丝极其难得的极其微弱极不易察觉到的企稳回升向好的非常隐蔽的苗头了。",
        "pinyin": "zuì jìn zhè yí ge yuè lǐ gōng sī de gǔ piào zài jīng lì le jí qí jù liè qiě jī hū háo wú zhēng zhào de fǎn fǎn fù fù bù tíng de jí qí zhé mó rén de fēng kuáng shàng xià qǐ fú bō dòng yǐ hòu zǒng suàn zài zuó tiān jí qí jiān nán de shōu pán qián shāo wēi kāi shǐ biǎo xiàn chū lái le yì sī sī jí qí nán dé de jí qí wēi ruò jí bú yì chá jué dào de qǐ wěn huí shēng xiàng hǎo de fēi cháng yǐn bì de miáo tou le.",
        "burmese": "မကြာသေးခင် တစ်လအတွင်းမှာ ကုမ္ပဏီရဲ့ရှယ်ယာတွေက အရမ်းပြင်းထန်ပြီး ဘာရှေ့ပြေးနိမိတ်မှမရှိဘဲ ထပ်တလဲလဲမရပ်မနား လူကိုအရမ်းဒုက္ခပေးတဲ့ အရူးအမူးအတက်အကျ အပြောင်းအလဲတွေကို ဖြတ်သန်းခဲ့ပြီးတဲ့နောက် နောက်ဆုံးတော့မနေ့က အရမ်းရခက်တဲ့ဈေးကွက်ပိတ်ချိန်မတိုင်ခင်မှာ အရမ်းရှားပါးပြီး အလွန်အားနည်းကာ သတိထားမိဖို့အရမ်းခက်ခဲတဲ့ တည်ငြိမ်လာပြီး ပြန်လည်ကောင်းမွန်လာမယ့် အရမ်းလျှို့ဝှက်တဲ့လက္ခဏာရပ်လေးတွေကို နည်းနည်းလေးစပြီးပြသလာခဲ့ပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_764",
        "hanzi": "虽然哪怕仅仅只有这种如同极其微小得几乎像极其细弱游丝般的极其不明显极其暗淡极其容易被忽略的小小希望可对于此刻内心极其绝望且度日如年极其备受巨大压力的那帮公司高层和极其无奈乃至极其想要直接上吊放弃的极度焦虑的各大极其庞大数量的散户股民来说也可以勉强暂时算得上是一剂能够起到极其极其微乎其微的安慰作用的极其极其苦涩的强心针了吧。",
        "pinyin": "suī rán nǎ pà jǐn jǐn zhǐ yǒu zhè zhǒng rú tóng jí qí wēi xiǎo bu jī hū xiàng jí qí xì ruò yóu sī bān de jí qí bù míng xiǎn jí qí àn dàn jí qí róng yì bèi hū lüè de xiǎo xiǎo xī wàng kě duì yú cǐ kè nèi xīn jí qí jué wàng qiě dù rì rú nián jí qí bèi shòu jù dà yā lì de nà bāng gōng sī gāo céng hé jí qí wú nài nǎi zhì jí qí xiǎng yào zhí jiē shàng diào fàng qì de jí dù jiāo lǜ de gè dà jí qí páng dà shù liàng de sǎn hù gǔ mín lái shuō yě kě yǐ miǎn qiǎng zàn shí suàn de shàng shì yí jì néng gòu qǐ dào jí qí jí qí wēi hū qí wēi de ān wèi zuò yòng de jí qí jí qí kǔ sè de qiáng xīn zhēn le ba.",
        "burmese": "ဒီလောက်အရမ်းသေးငယ်ပြီး အသက်ငွေ့ငွေ့လေးနဲ့တူတဲ့ အရမ်းမထင်ရှား အရမ်းမှေးမှိန်ပြီး အလွယ်တကူလျစ်လျူရှုခံရလောက်တဲ့ မျှော်လင့်ချက်လေးပဲရှိမယ်ဆိုရင်တောင်မှ၊ အခုအချိန်မှာ ရင်ထဲမှာအရမ်းစိတ်ပျက်အားငယ်နေပြီး တစ်နေ့တာကိုတစ်နှစ်လို ဖြတ်သန်းနေရကာ ကြီးမားတဲ့ဖိအားဒဏ်ကို အရမ်းခံစားနေရတဲ့ ကုမ္ပဏီအထက်တန်းအရာရှိတွေနဲ့ ဘာမှမတတ်နိုင်လို့ တိုက်ရိုက်ကြိုးဆွဲချပြီး လက်လျှော့လိုက်ချင်တဲ့အထိ အရမ်းကိုစိုးရိမ်ပူပန်နေကြတဲ့ အရေအတွက်အရမ်းများတဲ့ အသေးစားရှယ်ယာရှင်တွေအတွက်တော့ ဒါက လောလောဆယ်မှာ အရမ်းကိုနည်းပါးလွန်းတဲ့ နှစ်သိမ့်မှုပေးနိုင်တဲ့ အရမ်းအရမ်းကိုခါးသက်တဲ့ အားဆေးတစ်ခွက်လို့ မတတ်သာဘဲ မှတ်ယူလို့ရမှာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_765",
        "hanzi": "那个新搬来不久且性格极其极其古怪且孤僻的老爷爷不仅从未主动跟这极其极其相熟的极其热情极其友善的极其宽容的极度极其善良的同层任何邻居们哪怕打过极其极其微弱和简单的一声极其随意的极其形式化的极其极其敷衍的小小极其隐蔽的极其轻盈的极其短促的一声招呼，并且就算是你极度极其友好地刻意非常极其热情地凑过去极其极度微笑极其极度恭敬极其极其小心翼翼地极其极其耐心地主动跟他极其极其友善极其热忱地搭极其极其随意的极度非常极其极其稀松平常的话语，他也会极度极其极其极其冷漠极其非常冷淡甚至极其极其充满极其极其明显的极其极其刻意的防备地迅速闪躲开极其极其不自然极其极其嫌弃极其极其极度排斥极其极其极其极其极其极其极其极度极度不想极其不想理睬的样子并迅速极其极其极度极其极其非常非常极其极度用力地把门“砰”地极度极度极其非常极其极其极其极度极其极度极其极度极其极度极度非常极度极度极其极其极大极大极其极其震耳欲聋极其极其极其极其不可理喻极其极其极其极其极其极其极其惊人地极其极度极度极度用极其极其巨大的力量极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其狠狠地关紧极其极其极度锁死极其极其极其严实得极其极其极其连极其极度极大极其极其极其极其极其极其极其极其极其极其极其极其极其极极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极度一丝极其极其极其微小得极其极其难以极其极其难以极其极其极其极其极其极其极大极大让人发疯极其极其极其微不可查极其极其极其细小狭窄极其极其极其狭窄微细的极度极其极其极其极其极不可思议的极其极其极其极其极其极度细小极其极其微末极其极其极其极其极其极其极其连微风极其极其极其甚至极其极其极其一根极其细极其细小极其极其极其极其极其细小极其极其如极其极其极其微毫极其极其极其一般的极其极其极其细小缝隙极其极其极其一丝缝儿极其极其极其都极其极其极其极度极度乃至极其极其极其不可思议极其极度极其极其极其极其极其极其极其极其极其极其极其极度极其极其极其极其极其极其绝不肯极其极度极其极其极其极其极其极其绝对死也不肯极其极度绝对绝对极其极其极其极度极其极其绝对极其极其绝不极其绝对极度极度极其极其地留下哪怕一丁点儿。",
        "pinyin": "N/A",
        "burmese": "N/A",
        "category": "daily"
    },
    {
        "id": "hsk4_766",
        "hanzi": "这说明他身上肯定背负着常人难以理解的沉重过去。",
        "pinyin": "zhè shuō míng tā shēn shang kěn dìng bēi fù zhe cháng rén nán yǐ lǐ jiě de chén zhòng guò qù.",
        "burmese": "ဒါက သူမှာသာမန်လူတွေနားလည်နိုင်ဖို့ခက်တဲ့ လေးလံတဲ့အတိတ်တစ်ခု ရှိနေတယ်ဆိုတာ ပြနေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_767",
        "hanzi": "这栋百年老建筑终于按计划进行了翻修现在焕然一新真的好漂亮。",
        "pinyin": "zhè dòng bǎi nián lǎo jiàn zhù zhōng yú àn jì huà jìn xíng le fān xiū xiàn zài huàn rán yī xīn zhēn de hǎo piào liang.",
        "burmese": "ဒီနှစ်တစ်ရာကျော်သက်တမ်းရှိတဲ့ အဆောက်အဦးဟောင်းကြီးက နောက်ဆုံးတော့ အစီအစဉ်အတိုင်း ပြုပြင်မွမ်းမံမှုတွေ ပြီးသွားပြီ အခုတော့ အသစ်စက်စက်ဖြစ်သွားပြီး တကယ်ကိုလှပသွားပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_768",
        "hanzi": "是啊不但保留了本来古典的结构还增加了很多实用的现代化设施。",
        "pinyin": "shì a bú dàn bǎo liú le běn lái gǔ diǎn de jié gòu hái zēng jiā le hěn duō shí yòng de xiàn dài huà shè shī.",
        "burmese": "ဟုတ်တယ် မူလခေတ်ဟောင်းအနုပညာတည်ဆောက်ပုံကို ထိန်းသိမ်းထားရုံတင်မကဘူး အသုံးဝင်တဲ့ ခေတ်မီအဆောက်အအုံပစ္စည်းတွေကိုလည်း အများကြီးထည့်သွင်းထားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_769",
        "hanzi": "如果你能坚持每天阅读半小时那么一年后积累的知识将非常可观。",
        "pinyin": "rú guǒ nǐ néng jiān chí měi tiān yuè dú bàn xiǎo shí nà me yì nián hòu jī lěi de zhī shi jiāng fēi cháng kě guān.",
        "burmese": "တကယ်လို့ မင်းက နေ့တိုင်း နာရီဝက်လောက် စာဖတ်ဖို့ ဇွဲရှိရှိကြိုးစားနိုင်ရင် တစ်နှစ်ကြာပြီးနောက်မှာ စုဆောင်းမိတဲ့ အသိပညာတွေက အရမ်းကိုများပြားလာလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_770",
        "hanzi": "这种循序渐进的方法既不累又特别有效我绝对赞成。",
        "pinyin": "zhè zhǒng xún xù jiàn jìn de fāng fǎ jì bú lèi yòu tè bié yǒu xiào wǒ jué duì zàn chéng.",
        "burmese": "ဒီလို တစ်ဆင့်ပြီးတစ်ဆင့် တဖြည်းဖြည်းသွားတဲ့နည်းလမ်းကလည်း မပင်ပန်းသလို အရမ်းလည်း ထိရောက်တယ် ငါ လုံးဝထောက်ခံတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_771",
        "hanzi": "由于大雪封山整个镇子连一条能够稍微顺畅通行的道路都没有了。",
        "pinyin": "yóu yú dà xuě fēng shān zhěng ge zhèn zi lián yì tiáo néng gòu shāo wēi shùn chàng tōng xíng de dào lù dōu méi yǒu le.",
        "burmese": "နှင်းထဲမှာ တောင်တွေပိတ်သွားလို့ မြို့လေးတစ်ခုလုံးမှာ နည်းနည်းလေးတောင် ချောချောမွေ့မွေ့ သွားလာလို့ရမယ့် လမ်းတစ်လမ်းမှ မရှိတော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_772",
        "hanzi": "幸好大家普遍都在入冬前囤积了足够过完两个月的丰富物资。",
        "pinyin": "xìng hǎo dà jiā pǔ biàn dōu zài rù dōng qián tún jī le zú gòu guò wán liǎng ge yuè de fēng fù wù zī.",
        "burmese": "ကံကောင်းလို့ လူအများစုက ဆောင်းရာသီမဝင်ခင် နှစ်လလောက်အထိ လုံလောက်စွာကျော်ဖြတ်နိုင်မယ့် ကြွယ်ဝတဲ့ ပစ္စည်းတွေကို စုဆောင်းထားကြလို့ပေါ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_773",
        "hanzi": "这首古筝曲节奏明快仿佛把你瞬间带回了古代繁华的大街小巷。",
        "pinyin": "zhè shǒu gǔ zhēng qǔ jié zòu míng kuài fǎng fú bǎ nǐ shùn jiān dài huí le gǔ dài fán huá de dà jiē xiǎo xiàng.",
        "burmese": "ဒီကူကျန်းတီးကွက်က အချိုးအစားက မြန်ဆန်လန်းဆန်းပြီး မင့်ကို မျက်စိတစ်မှိတ်အတွင်းမှာ ရှေးခေတ် စည်ကားတဲ့လမ်းမကြီးတွေနဲ့ လမ်းကြားလေးတွေဆီ ပြန်ခေါ်သွားသလိုပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_774",
        "hanzi": "所以说音乐的魅力是真正可以完全超越时空并且直达内心深处的。",
        "pinyin": "suǒ yǐ shuō yīn yuè de mèi lì shì zhēn zhèng kě yǐ wán quán chāo yuè shí kōng bìng qiě zhí dá nèi xīn shēn chù de.",
        "burmese": "ဒါကြောင့် ဂီတရဲ့ ဆွဲဆောင်မှုဆိုတာ တကယ်ကို အချိန်နဲ့နေရာကို လုံးဝကျော်လွန်နိုင်ပြီး ရင်ထဲအနက်ရှိုင်းဆုံးထိ တိုက်ရိုက်ရောက်ရှိနိုင်တာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_775",
        "hanzi": "这个所谓的自动炒菜锅其实操作起来挺复杂的而且洗起来也极不方便。",
        "pinyin": "zhè ge suǒ wèi de zì dòng chǎo cài guō qí shí cāo zuò qǐ lái tǐng fù zá de ér qiě xǐ qǐ lái yě jí bù fāng biàn.",
        "burmese": "ဒီအလိုအလျောက်ဟင်းချက်အိုးလို့ခေါ်တဲ့ အရာက တကယ်တော့ သုံးရတာ တော်တော်လေးရှုပ်ထွေးပြီး ဆေးရတာလည်း အရမ်းကိုအဆင်မပြေဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_776",
        "hanzi": "难怪买的人很快就在网上留下极其不满意的差评然后就申请全额退款了。",
        "pinyin": "nán guài mǎi de rén hěn kuài jiù zài wǎng shang liú xià jí qí bù mǎn yì de chà píng rán hòu jiù shēn qǐng quán é tuì kuǎn le.",
        "burmese": "ဒါကြောင့် ဝယ်တဲ့သူတွေက မြန်မြန်ဆန်ဆန်ပဲ အင်တာနက်ပေါ်မှာ အရမ်းကိုမကျေနပ်တဲ့ မှတ်ချက်ဆိုးတွေ ချန်ထားခဲ့ပြီး ငွေအပြည့်ပြန်အမ်းဖို့ လျှောက်ထားကြတာ မဆန်းပါဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_777",
        "hanzi": "要是你们愿意再降低五个百分点的利润空间这份重要合同马上生效。",
        "pinyin": "yào shi nǐ men yuàn yì zài jiàng dī wǔ ge bǎi fēn diǎn de lì rùn kōng jiān zhè fèn zhòng yào hé tóng mǎ shàng shēng xiào.",
        "burmese": "တကယ်လို့ မင်းတို့က အမြတ်ရာခိုင်နှုန်း ငါးရာခိုင်နှုန်းလောက်ပ် ထပ်လျှော့ပေးဖို့ လိုလားမယ်ဆိုရင် ဒီအရေးကြီးတဲ့စာချုပ်က ချက်ချင်းအသက်ဝင်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_778",
        "hanzi": "简直是欺人太甚这已经是我们的底线了无论如何都不可能继续让步的。",
        "pinyin": "jiǎn zhí shì qī rén tài shèn zhè yǐ jīng shì wǒ men de dǐ xiàn le wú lùn rú hé dōu bù kě néng jì xù ràng bù de.",
        "burmese": "တကယ်ကို လူကိုအနိုင်ကျင့်လွန်းအားကြီးနေပြီ ဒါက ငါတို့ရဲ့အနိမ့်ဆုံးသတ်မှတ်ချက် ဖြစ်နေပြီ ဘယ်လိုပဲဖြစ်ဖြစ် ဆက်ပြီးအလျှော့ပေးဖို့ မဖြစ်နိုင်တော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_779",
        "hanzi": "在当今竞争激烈的社会里学会妥善管理自身情绪显得尤为重要和迫切。",
        "pinyin": "zài dāng jīn jìng zhēng jī liè de shè huì lǐ xué huì tuǒ shàn guǎn lǐ zì shēn qíng xù xiǎn de yóu wéi zhòng yào hé pò qiè.",
        "burmese": "ယနေ့ခေတ် ပြိုင်ဆိုင်မှုပြင်းထန်တဲ့ လူ့အဖွဲ့အစည်းထဲမှာ ကိုယ့်ရဲ့စိတ်ခံစားချက်ကို စနစ်တကျစီမံခန့်ခွဲတတ်ဖို့ သင်ယူဖို့က ပိုပြီးအရေးကြီးပြီး အရေးပေါ်ဖြစ်လာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_780",
        "hanzi": "因为一个常常暴怒冲动的人迟早会因此失去至关重要的人脉资源和难得机会。",
        "pinyin": "yīn wèi yí ge cháng cháng bào nù chōng dòng de rén chí zǎo huì yīn cǐ shī qù zhì guān zhòng yào de rén mài zī yuán hé nán dé jī huì.",
        "burmese": "ဘာလို့လဲဆိုတော့ အမြဲတမ်း ဒေါသထွက်လွယ်ပြီး စိတ်လိုက်မာပါလုပ်တတ်တဲ့သူတစ်ယောက်က စောစောဖြစ်ဖြစ် နောက်ကျဖြစ်ဖြစ် ဒါကြောင့်ပဲ အရေးကြီးတဲ့ လူမှုဆက်ဆံရေးအရင်းအမြစ်တွေနဲ့ ရှားပါးတဲ့ အခွင့်အရေးတွေကို ဆုံးရှုံးရလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_781",
        "hanzi": "这位有着极高声誉的老教授新出的书里满满都是一辈子积累的人生智慧。",
        "pinyin": "zhè wèi yǒu zhe jí gāo shēng yù de lǎo jiào shòu xīn chū de shū lǐ mǎn mǎn dōu shì yí bèi zi jī lěi de rén shēng zhì huì.",
        "burmese": "ဒီလောက်နာမည်ကြီးတဲ့ ပါမောက္ခအိုကြီး အသစ်ထုတ်လိုက်တဲ့ စာအုပ်ထဲမှာ သူတစ်သက်လုံး စုဆောင်းလာခဲ့တဲ့ ဘဝရဲ့ ဉာဏ်ပညာတွေ အပြည့်အဝပါနေတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_782",
        "hanzi": "所以一经全面发售就立刻登上了年度最受欢迎且最畅销的人文大书榜首。",
        "pinyin": "suǒ yǐ yì jīng quán miàn fā shòu jiù lì kè dēng shàng le nián dù zuì shòu huān yíng qiě zuì chàng xiāo de rén wén dà shū bǎng shǒu.",
        "burmese": "ဒါကြောင့်ပဲ အားလုံးထုတ်ဝေရောင်းချလိုက်တာနဲ့ ချက်ချင်းပဲ ဒီနှစ်ရဲ့ လူကြိုက်အများဆုံးနဲ့ အရောင်းရဆုံး လူသားဆိုင်ရာစာအုပ်ကြီးတွေရဲ့ ထိပ်ဆုံးမှာ ရပ်တည်သွားတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_783",
        "hanzi": "那些在简历上极其明显地弄虚作假的应聘者根本是绝对无法通过入职核查的。",
        "pinyin": "nà xiē zài jiǎn lì shang jí qí míng xiǎn de nòng xū zuò jiǎ de yìng pìn zhě gēn běn shì jué duì wú fǎ tōng guò rù zhí hé chá de.",
        "burmese": "ကိုယ်ရေးမှတ်တမ်းမှာ အရမ်းသိသာအောင် လိမ်ညာထားတဲ့ အလုပ်လျှောက်ထားသူတွေက တကယ်တော့ အလုပ်ဝင်ခွင့်စစ်ဆေးမှုကို အလွယ်တကူ ကျော်ဖြတ်နိုင်မှာ မဟုတ်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_784",
        "hanzi": "这是理所应当的不守诚信的人绝对会被优秀的大型正规公司第一时间拉黑剔除掉。",
        "pinyin": "zhè shì lǐ suǒ yīng dāng de bù shǒu chéng xìn de rén jué duì huì bèi yōu xiù de dà xíng zhèng guī gōng sī dì yī shí jiān lā hēi tī chú diào.",
        "burmese": "ဒါက သဘာဝကျတာပါပဲ ကတိကဝတ်မတည်တဲ့သူကို ကြီးမားတဲ့ ပုံမှန်ကုမ္ပဏီကြီးတွေက ပထမဆုံးအချိန်မှာပဲ အဖြတ်ခံရမှာ သေချာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_785",
        "hanzi": "你看这把纯手工打造的雨伞虽然样式朴素但其结实程度简直堪称一流产品。",
        "pinyin": "nǐ kàn zhè bǎ chún shǒu gōng dǎ zào de yǔ sǎn suī rán yàng shì pǔ sù dàn qí jiē shi chéng dù jiǎn zhí kān chēng yì liú chǎn pǐn.",
        "burmese": "မင်းကြည့် ဒီလက်မှုပညာစစ်စစ်နဲ့ လုပ်ထားတဲ့ထီးက ဒီဇိုင်းရိုးရှင်းပေမယ့် တကယ်ခံနိုင်ရည်ရှိမှုက ထိပ်တန်းထုတ်ကုန်လို့တောင် ပြောလို့ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_786",
        "hanzi": "真正耐用的好东西往往并不需要刻意用花哨繁杂的外表去特意惹人侧目。",
        "pinyin": "zhēn zhèng nài yòng de hǎo dōng xi wǎng wǎng bìng bù xū yào kè yì yòng huā shào fán zá de wài biǎo qù tè yì rě rén cè mù.",
        "burmese": "တကယ်ခံနိုင်ရည်ရှိတဲ့ ပစ္စည်းကောင်းတွေက အမြဲတမ်း လူတွေသူ့ကို သတိထားလာအောင် အရောင်တွေအများကြီးနဲ့ ရှုပ်ရှုပ်ယှက်ယှက် အပြင်ပန်းကို တမင်တကာ မလိုပါဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_787",
        "hanzi": "由于这场罕见的干旱导致水库储水量严重不足甚至可能下周要采取限水政策了。",
        "pinyin": "yóu yú zhè chǎng hǎn jiàn de gān hàn dǎo zhì shuǐ kù chǔ shuǐ liàng yán zhòng bù zú shèn zhì kě néng xià zhòu yào cǎi qǔ xiàn shuǐ zhèng cè le.",
        "burmese": "ရှားရှားပါးပါး မိုးခေါင်မှုကြောင့် ရေလှောင်ကန်ရဲ့ ရေပေးဝေမှု ပမာဏ အရမ်းမလုံလောက်ဖြစ်နေပြီး နောက်အပတ်ဆိုရင် ရေကန့်သတ်တဲ့ မူဝါဒကို ကျင့်သုံးရနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_788",
        "hanzi": "目前唯一能够祈祷的也就是老天可以在这干渴绝望的日子里快点随便下一场痛快的倾盆冰凉的暴雨吧。",
        "pinyin": "mù qián wéi yī néng gòu qí dǎo de yě jiù shì lǎo tiān kě yǐ zài zhè gān kě jué wàng de rì zi lǐ kuài diǎn suí biàn xià yì chǎng tòng kuài de qīng pén bīng liáng de bào yǔ ba.",
        "burmese": "အခုလောလောဆယ် ဆုတောင်းနိုင်တာကတော့ ဒီရေငတ်ပြီး မျှော်လင့်ချက်မဲ့နေတဲ့ နေ့ရက်တွေမှာ ကောင်းကင်ကြီးက မြန်မြန်ဆန်ဆန်ပဲ အေးစိမ့်နေတဲ့ မိုးသည်းကြီး ရွာချပေးဖို့ပါပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_789",
        "hanzi": "我敢担保这本词典涵盖了市面上你能见到的几乎最全面的各类深奥科技外语专业术语。",
        "pinyin": "wǒ gǎn dān bǎo zhè běn cí diǎn hán gài le shì miàn shang nǐ néng jiàn dào de jī hū zuì quán miàn de gè lèi shēn ào kē jì wài yǔ zhuān yè shù yǔ.",
        "burmese": "ဒီအဘိဓာန်က ဈေးကွက်မှာ မင်းတွေ့နိုင်တဲ့ အပြည့်စုံဆုံးဖြစ်လောက်တဲ့ နက်နဲတဲ့ နည်းပညာ နိုင်ငံခြားဘာသာစကားနဲ့ ပတ်သက်တဲ့ ကျွမ်းကျင်မှုဝေါဟာရအားလုံး ပါဝင်တယ်လို့ ငါအာမခံရဲတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_790",
        "hanzi": "有了这本极其极其极其非常厚度极其极其夸张的大部头对于即将到来的期末翻译考核真是毫无挂碍了。",
        "pinyin": "yǒu le zhè běn jí qí jí qí jí qí fēi cháng hòu dù jí qí jí qí kuā zhāng de dà bù tou duì yú jí jiāng dào lái de qī mò fān yì kǎo hé zhēn shì háo wú guà ài le.",
        "burmese": "အရမ်းကို အထူကြီးဖြစ်နေတဲ့ ဒီစာအုပ်ကြီးရှိရင် မကြာခင်ရောက်လာတော့မယ့် နှစ်ဝက်ဘာသာပြန်စာမေးပွဲအတွက် တကယ်ကို ဘာမှစိုးရိမ်စရာမရှိတော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_791",
        "hanzi": "当发现那个极其严重的安全隐患时他们并没有立刻报告而是企图偷偷瞒住然后全部私自自己解决。",
        "pinyin": "dāng fā xiàn nà ge jí qí yán zhòng de ān quán yǐn huàn shí tā men bìng méi yǒu lì kè bào gào ér shì qǐ tú tōu tōu mán zhù rán hòu quán bù sī zì zì jǐ jiě jué.",
        "burmese": "အရမ်းအရေးကြီးတဲ့ လုံခြုံရေးအန္တရာယ်ကို တွေ့ရှိတဲ့အခါ သူတို့က ချက်ချင်းသတင်းမပို့ဘဲ တိတ်တဆိတ်ဖုံးကွယ်ထားဖို့နဲ့ သူတို့ဘာသာသူတို့ ခိုးပြီးဖြေရှင်းဖို့ ကြိုးစားခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_792",
        "hanzi": "这就是纯粹搬起石头砸自己脚后来果然事情不可救药地走向了恶化最终只能吃大亏倒大霉。",
        "pinyin": "zhè jiù shì chún cuì bān qǐ shí tou zá zì jǐ jiǎo hòu lái guǒ rán shì qíng bù kě jiù yào de zǒu xiàng le è huà zuì zhōng zhǐ néng chī dà kuī dǎo dà méi.",
        "burmese": "ဒါက မိမိကျူးရှောင် မိမိခံရုံသက်သက်ပဲ၊ နောက်ပိုင်းမှာတော့ ကိစ္စက တကယ်ပဲ ကုစားလို့မရလောက်အောင် ဆိုးရွားသွားပြီး နောက်ဆုံးတော့ အကြီးအကျယ် နစ်နာပြီး ကံဆိုးသွားရတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_793",
        "hanzi": "这个极具创意的街头小推车不仅外观非常惹眼连主要卖的现做烤香肠也香气扑鼻勾人食欲。",
        "pinyin": "zhè ge jí jù chuàng yì de jiē tóu xiǎo tuī chē bù jǐn wài guān fēi cháng rě yǎn lián zhǔ yào mài de xiàn zuò kǎo xiāng cháng yě xiāng qì pū bí gōu rén shí yù.",
        "burmese": "ဒီပါရမီရှိတဲ့ လမ်းဘေးတွန်းလှည်းလေးက အပြင်ပန်းအရမ်းဆွဲဆောင်မှုရှိရုံတင်မကဘူး သူအဓိကရောင်းတဲ့ ချက်ချင်းကင်ထားတဲ့ ဝက်အူချောင်းကလည်း မွှေးကြိုင်လှိုင်ပြီး လူကိုစားချင်စိတ်ဖြစ်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_794",
        "hanzi": "正因如此从一大早开始摊位前经常排起了弯弯扭扭且极其缓慢前行的几十米的大长龙啊。",
        "pinyin": "zhèng yīn rú cǐ cóng yí dà zǎo kāi shǐ tān wèi qián jīng cháng pái qǐ le wān wān niǔ niǔ qiě jí qí huǎn màn qián xíng de jǐ shí mǐ de dà cháng lóng a.",
        "burmese": "ဒါကြောင့်ပဲ မနက်စောစောကတည်းက ဆိုင်ရှေ့မှာ အမြဲတမ်း ကွေ့ကောက်ပြီး အရမ်းကိုနှေးကွေးစွာ ရှေ့ကိုသွားနေတဲ့ မီတာငါးဆယ်လောက်ရှိတဲ့ လူတန်းရှည်ကြီး ဖြစ်နေတာလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_795",
        "hanzi": "面对那种充满极大偏见而且完全违背了基本客观事实的新闻直接无条件封锁处理我觉得算是最好的态度了。",
        "pinyin": "miàn duì nà zhǒng chōng mǎn jí dà piān jiàn ér qiě wán quán wéi bèi le jī běn kè guān shì shí de xīn wén zhí jiē wú tiáo jiàn fēng suǒ chǔ lǐ wǒ jué de suàn shì zuì hǎo de tài du le.",
        "burmese": "ဘက်လိုက်မှုတွေအရမ်းပြည့်နေပြီး အခြေခံဓမ္မဓိဋ္ဌာန်ကျတဲ့အချက်အလက်တွေကို လုံးဝဆန့်ကျင်နေတဲ့ သတင်းမျိုးကို ရင်ဆိုင်ရရင် တိုက်ရိုက်အခြေအနေမရွေး ပိတ်ပင်လိုက်တာက ငါထင်တာတော့ အကောင်းဆုံးသဘောထားပါပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_796",
        "hanzi": "坚决不给其提供哪怕一丝丝传播并且制造更加巨大破坏性极度恐慌舆论的机会是对的不能让它得逞发酵出去的。",
        "pinyin": "jiān jué bù gěi qí tí gōng nǎ pà yì sī sī chuán bō bìng qiě zhì zào gèng jiā jù dà pò huài xìng jí dù kǒng huāng yú lùn de jī huì shì duì de bù néng ràng tā dé chěng fā jiào chū qù de.",
        "burmese": "သူ့ကို နည်းနည်းလေးတောင် ပျံ့နှံ့ခွင့်မပေးဖို့နဲ့ ပိုမိုကြီးမားပြီး အဖျက်အဆီးများတဲ့၊ အလွန်အမင်းထိတ်လန့်စရာကောင်းတဲ့ လူထုအမြင်တွေကို ဖန်တီးဖို့ အခွင့်အရေးကို ပြတ်ပြတ်သားသားမပေးတာက မှန်ပါတယ်၊ သူ့ကိုအောင်မြင်အောင်နဲ့ အကျိုးဆက်တွေဖြစ်လာအောင် ခွင့်ပြုလို့မရဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_797",
        "hanzi": "你快过来看一下这件蓝色外套不仅正在打五折非常划算而且款式极其干练清爽非常吸睛。",
        "pinyin": "nǐ kuài guò lái kàn yí xià zhè jiàn lán sè wài tào bù jǐn zhèng zài dǎ wǔ zhé fēi cháng huá suàn ér qiě kuǎn shì jí qí gān liàn qīng shuǎng fēi cháng xī jīng.",
        "burmese": "မင်းမြန်မြန်လာပြီး ဒီအပြာရောင်အပေါ်အင်္ကျီလေးကို ကြည့်စမ်း အခု ၅၀% လျှော့ပေးနေလို့ အရမ်းတန်ရုံတင်မကဘူး၊ ဒီဇိုင်းကလည်း အရမ်းကိုသပ်ရပ်ပြီး လန်းဆန်းကာ အရမ်းကိုဆွဲဆောင်မှုရှိတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_798",
        "hanzi": "那我感觉趁还有适合我的极其标准的加码尺寸我毫不犹豫现在立马去试衣间果断地穿一下看看好不好看合适不合适了再说别的。",
        "pinyin": "nà wǒ gǎn jué chèn hái yǒu shì hé wǒ de jí qí biāo zhǔn de jiā mǎ chǐ cùn wǒ háo bù yóu yù xiàn zài lì mǎ qù shì yī jiān guǒ duàn de chuān yí xià kàn kan hǎo bú hǎo kàn hé shì bu hé shì le zài shuō bié de.",
        "burmese": "ဒါဆို ငါနဲ့တော်မယ့် အရမ်းစံချိန်မီတဲ့ အရွယ်အစားအကြီးစားလေး ရှိနေတုန်း တုံ့ဆိုင်းမနေဘဲ အခုချက်ချင်း အဝတ်လဲခန်းထဲသွားပြီး ပြတ်ပြတ်သားသား ဝတ်ကြည့်လိုက်မယ်၊ လှမလှ၊ သင့်တော်မတော်ဆိုတာ ကြည့်ပြီးမှ တခြားဟာပြောတော့မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_799",
        "hanzi": "不管有多么巨大的困难挑战只有坚持到底并且永不言弃才能冲破浓厚黑暗看到最后闪闪发光的希望光芒。",
        "pinyin": "bù guǎn yǒu duō me jù dà de kùn nán tiǎo zhàn zhǐ yǒu jiān chí dào dǐ bìng qiě yǒng bù yán qì cái néng chōng pò nóng hòu hēi àn kàn dào zuì hòu shǎn shǎn fā guāng de xī wàng guāng máng.",
        "burmese": "ဘယ်လောက်ပဲ ကြီးမားလှတဲ့ အခက်အခဲစိန်ခေါ်မှုတွေ ရှိနေပါစေ၊ အဆုံးထိ ဇွဲမလျှော့ဘဲ ဘယ်တော့မှ လက်မလျှော့မှသာလျှင် ထူထပ်တဲ့အမှောင်ထုကို ခွဲထွက်ပြီး နောက်ဆုံးမှာ တောက်ပနေတဲ့ မျှော်လင့်ချက်အလင်းရောင်ကို မြင်တွေ့နိုင်မှာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_800",
        "hanzi": "你说得极其深刻只是可惜了生活中许多许多的人缺乏毅力和恒心总是倒在了黎明前最后那极其孤独难熬的恐怖黑暗的最后几秒钟。",
        "pinyin": "nǐ shuō de jí qí shēn kè zhǐ shì kě xī le shēng huó zhōng xǔ duō xǔ duō de rén quē fá yì lì hé héng xīn zǒng shì dǎo zài le lí míng qián zuì hòu nà jí qí gū dú nán áo de kǒng bù hēi àn de zuì hòu jǐ miǎo zhōng.",
        "burmese": "မင်းပြောတာ အရမ်းကိုနက်ရှိုင်းတယ် ဒါပေမယ့် နှမြောစရာကောင်းတာက ဘဝမှာ လူအများကြီးအများကြီးက ဇွဲလုံ့လနဲ့ ကြံ့ခိုင်မှုမရှိလို့ အမြဲတမ်း မိုးမလင်းခင် နောက်ဆုံး အရမ်းကိုအထီးကျန်ပြီး ကျော်ဖြတ်ရခက်တဲ့ ကြောက်စရာကောင်းတဲ့ အမှောင်ထုရဲ့ နောက်ဆုံးစက္ကန့်အနည်းငယ်မှာ လဲကျသွားကြတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_801",
        "hanzi": "这部小说的情节安排得极其紧凑而且线索交织得错综复杂让人读起来完全沉浸其中无法自拔。",
        "pinyin": "zhè bù xiǎo shuō de qíng jié ān pái de jí qí jǐn còu ér qiě xiàn suǒ jiāo zhī de cuò zōng fù zá ràng rén dú qǐ lái wán quán chén jìn qí zhōng wú fǎ zì bá.",
        "burmese": "ဒီဝတ္ထုရဲ့ ဇာတ်လမ်းဆင်ထားပုံက အရမ်းကိုကျစ်လစ်ပြီး အခြေအနေတွေက ရှုပ်ထွေးပွေလီစွာ ယှက်နွယ်နေလို့ ဖတ်ရတဲ့သူတွေကို လုံးဝနစ်မျောသွားစေပြီး ရုန်းထွက်လို့မရနိုင်အောင်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_802",
        "hanzi": "难怪它能在刚出版不到一周的时间里就荣登畅销榜首呢作者确实功力深厚。",
        "pinyin": "nán guài tā néng zài gāng chū bǎn bú dào yī zhōu de shí jiān lǐ jiù róng dēng chàng xiāo bǎng shǒu ne zuò zhě què shí gōng lì shēn hòu.",
        "burmese": "ဒါကြောင့်လည်း စာအုပ်ထွက်ပြီး တစ်ပတ်တောင်မပြည့်ခင် အချိန်လေးအတွင်းမှာ အရောင်းရဆုံးစာရင်းရဲ့ထိပ်ဆုံးမှာ ဂုဏ်ယူစွာရပ်တည်နိုင်ခဲ့တာကိုး၊ စာရေးဆရာက တကယ်ကို အရည်အချင်းပြည့်ဝတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_803",
        "hanzi": "经过长达三个月的不懈努力团队终于克服了最大的技术瓶颈。",
        "pinyin": "jīng guò cháng dá sān ge yuè de bú xiè nǔ lì tuán duì zhōng yú kè fú le zuì dà de jì shù píng jǐng.",
        "burmese": "သုံးလလောက်ကြာအောင် မဆုတ်မနစ်ကြိုးစားပြီးတဲ့နောက် နောက်ဆုံးတော့ အဖွဲ့က အကြီးမားဆုံး နည်းပညာအခက်အခဲကို ကျော်လွှားနိုင်ခဲ့ပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_804",
        "hanzi": "是的这意味着我们新产品的发布计划可以顺利按时推进了不用再拖延。",
        "pinyin": "shì de zhè yì wèi zhe wǒ men xīn chǎn pǐn de fā bù jì huà kě yǐ shùn lì àn shí tuī jìn le bú yòng zài tuō yán.",
        "burmese": "ဟုတ်တယ် ဒါက ငါတို့ ထုတ်ကုန်အသစ်မိတ်ဆက်မယ့်အစီအစဉ်ကို အချိန်မီချောချောမွေ့မွေ့ ရှေ့ဆက်ရွှေ့လို့ရပြီ ထပ်ပြီးအချိန်ဆွဲနေစရာမလိုတော့ဘူး ဆိုတဲ့အဓိပ္ပာယ်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_805",
        "hanzi": "这次意外停电不仅导致整个街区的交通陷入瘫痪还损坏了许多商家的电器。",
        "pinyin": "zhè cì yì wài tíng diàn bù jǐn dǎo zhì zhěng ge jiē qū de jiāo tōng xiàn rù tān huàn hái sǔn huài le xǔ duō shāng jiā de diàn qì.",
        "burmese": "ဒီတစ်ခါ မထင်မှတ်ဘဲ မီးပြတ်သွားတာက ရပ်ကွက်တစ်ခုလုံးရဲ့ သွားရေးလာရေးကို ရပ်တန့်သွားစေရုံတင်မကဘူး၊ ဆိုင်တော်တော်များများရဲ့ လျှပ်စစ်ပစ္စည်းတွေကိုပါ ပျက်စီးစေခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_806",
        "hanzi": "据说电力部门正在顶着烈日加紧抢修但是完全恢复正常估计还得几个小时呢。",
        "pinyin": "jù shuō diàn lì bù mén zhèng zài dǐng zhe liè rì jiā jǐn qiǎng xiū dàn shì wán quán huī fù zhèng cháng gū jì hái de jǐ ge xiǎo shí ne.",
        "burmese": "လျှပ်စစ်ဌာနက ပြင်းထန်တဲ့နေရောင်အောက်မှာ အပူဒဏ်ကိုအန်တုရင်း အမြန်ဆုံးပြင်ဆင်နေတယ်လို့ ကြားတယ်၊ ဒါပေမယ့် ပုံမှန်အတိုင်း လုံးဝပြန်ဖြစ်ဖို့ နောက်ထပ်နာရီအနည်းငယ်လောက် ကြာဦးမယ်ထင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_807",
        "hanzi": "虽然表面上看那个投资项目回报率极高但背后的隐形风险大得惊人。",
        "pinyin": "suī rán biǎo miàn shang kàn nà ge tóu zī xiàng mù huí bào lǜ jí gāo dàn bèi hòu de yǐn xíng fēng xiǎn dà de jīng rén.",
        "burmese": "အပေါ်ယံကြည့်ရင် အဲ့ဒီရင်းနှီးမြှုပ်နှံမှုစီမံကိန်းက အကျိုးအမြတ်အရမ်းများတယ် ဆိုပေမယ့် နောက်ကွယ်က မျက်မြင်မရတဲ့ အန္တရာယ်က အံ့ဩလောက်အောင်ကြီးမားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_808",
        "hanzi": "作为理性的投资者我们不能被眼前短暂的利益蒙蔽双眼一定要保持谨慎。",
        "pinyin": "zuò wéi lǐ xìng de tóu zī zhě wǒ men bù néng bèi yǎn qián duǎn zàn de lì yì méng bì shuāng yǎn yí dìng yào bǎo chí jǐn shèn.",
        "burmese": "အသိဉာဏ်ရှိတဲ့ ရင်းနှီးမြှုပ်နှံသူတွေအနေနဲ့ ငါတို့က မျက်စိရှေ့က ခဏတာအကျိုးအမြတ်လေးနဲ့ မျက်စိကွယ်လို့မရဘူး ပြတ်ပြတ်သားသား သတိထားရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_809",
        "hanzi": "这位刚刚出道的年轻歌手虽然缺乏经验但舞台表现却异常稳健和成熟。",
        "pinyin": "zhè wèi gāng gāng chū dào de nián qīng gē shǒu suī rán quē fá jīng yàn dàn wǔ tái biǎo xiàn què yì cháng wěn jiàn hé chéng shú.",
        "burmese": "အခုမှစပြီး လူသိရှင်ကြားဖြစ်လာတဲ့ ဒီအဆိုတော်လူငယ်လေးက အတွေ့အကြုံနည်းပေမယ့် စင်ပေါ်မှာဖျော်ဖြေမှုကတော့ ပုံမှန်မဟုတ်ဘဲ တည်ငြိမ်ပြီး ရင့်ကျက်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_810",
        "hanzi": "可见他私下里付出了比别人多数倍的汗水这就是所谓的天道酬勤吧。",
        "pinyin": "kě jiàn tā sī xià lǐ fù chū le bǐ bié rén duō shù bèi de hàn shuǐ zhè jiù shì suǒ wèi de tiān dào chóu qín ba.",
        "burmese": "ဒီအချက်က သူကွယ်ရာမှာ တခြားသူတွေထက် အဆပေါင်းများစွာပိုပြီး ချွေးထွက်ခံကြိုးစားခဲ့တာကို ပြနေတယ်၊ ဒါက ကြိုးစားသူကို ကံ၊ ဉာဏ်၊ ဝီရိယက အကျိုးပေးတယ်ဆိုတာပဲဖြစ်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_811",
        "hanzi": "由于大雾天气高速公路上发生了非常严重的连环追尾事故导致交通严重堵塞。",
        "pinyin": "yóu yú dà wù tiān qì gāo sù gōng lù shang fā shēng le fēi cháng yán zhòng de lián huán zhuī wěi shì gù dǎo zhì jiāo tōng yán zhòng dǔ sè.",
        "burmese": "နှင်းမြူတွေထူထပ်နေတဲ့ ရာသီဥတုကြောင့် အဝေးပြေးလမ်းမကြီးပေါ်မှာ အရမ်းဆိုးရွားတဲ့ ဆင့်ကဲနောက်ကဝင်တိုက်တဲ့ ယာဉ်တိုက်မှုတွေဖြစ်ပွားခဲ့ပြီး ယာဉ်ကြောအကြီးအကျယ်ပိတ်ဆို့သွားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_812",
        "hanzi": "太可怕了这种极端天气下开车出门真的是需要打起十二分的精神才行啊。",
        "pinyin": "tài kě pà le zhè zhǒng jí duān tiān qì xià kāi chē chū mén zhēn de shì xū yào dǎ qǐ shí èr fēn de jīng shén cái xíng a.",
        "burmese": "အရမ်းကြောက်စရာကောင်းလိုက်တာ ဒီလိုဆိုးရွားတဲ့ရာသီဥတုမျိုးမှာ အပြင်ကိုကားမောင်းထွက်တာ တကယ်ကိုသတိအကြီးအကျယ်ထားမှ ရမှာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_813",
        "hanzi": "他不仅精通两门极其冷门的外语甚至还对古代音乐有着非常深刻且独断的见解。",
        "pinyin": "tā bù jǐn jīng tōng liǎng mén jí qí lěng mén de wài yǔ shèn zhì hái duì gǔ dài yīn yuè yǒu zhe fēi cháng shēn kè qiě dú duàn de jiàn jiě.",
        "burmese": "သူက လူသိအရမ်းနည်းတဲ့ နိုင်ငံခြားဘာသာစကားနှစ်မျိုးကို ကျွမ်းကျင်ရုံတင်မကဘူး၊ ရှေးဟောင်းဂီတနဲ့ပတ်သက်ပြီးတော့လည်း အရမ်းနက်ရှိုင်းပြီး သီးခြားပိုင်ဆိုင်တဲ့အမြင်တွေ ရှိသေးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_814",
        "hanzi": "这样多才多艺且具备极其独特眼光的人在这个浮躁的社会里确实如同凤毛麟角般珍贵了。",
        "pinyin": "zhè yàng duō cái duō yì qiě jù bèi jí qí dú tè yǎn guāng de rén zài zhè ge fú zào de shè huì lǐ què shí rú tóng fèng máo lín jiǎo bān zhēn guì le.",
        "burmese": "ဒီလောက်စွမ်းရည်စုံလင်ပြီး အရမ်းထူးခြားတဲ့အမြင်ရှိတဲ့သူမျိုးက ဒီလောဘရမ္မက်ကြီးတဲ့ လူ့အဖွဲ့အစည်းထဲမှာ တကယ်ကို ရှားရှားပါးပါးနဲ့ တန်ဖိုးရှိလှပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_815",
        "hanzi": "随着现代医学极度高速不可思议般的发展曾经被广泛认为绝对是绝症的疾病如今有不少都能控制了。",
        "pinyin": "suí zhe xiàn dài yī xué jí dù gāo sù bù kě sī yì bān de fā zhǎn céng jīng bèi guǎng fàn rèn wéi jué duì shì jué zhèng de jí bìng rú jīn yǒu bù shǎo dōu néng kòng zhì le.",
        "burmese": "ခေတ်သစ်ဆေးပညာရဲ့ အလွန်အမင်းလျင်မြန်ပြီး အံ့ဩစရာကောင်းလောက်အောင် တိုးတက်လာမှုနဲ့အတူ တစ်ချိန်က လုံးဝကုမရတဲ့ရောဂါလို့ ကျယ်ကျယ်ပြန့်ပြန့် ယူဆခဲ့ကြတဲ့ ရောဂါတော်တော်များများဟာ အခုချိန်မှာတော့ ထိန်းချုပ်လို့ရနေပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_816",
        "hanzi": "这确实极大地重新赋予了众多深陷绝望泥潭的病患一份全新的极其宝贵的生存希望与极其强烈的动力呢。",
        "pinyin": "zhè què shí jí dà de chóng xīn fù yǔ le zhòng duō shēn xiàn jué wàng ní tán de bìng huàn yí fèn quán xīn de jí qí bǎo guì de shēng cún xī wàng yǔ jí qí qiáng liè de dòng lì ne.",
        "burmese": "ဒါက မျှော်လင့်ချက်မဲ့တဲ့ ရွှံ့နွံထဲမှာ နက်နက်ရှိုင်းရှိုင်းကျွံဝင်နေတဲ့ လူနာများစွာကို လုံးဝအသစ်ဖြစ်ပြီး အရမ်းတန်ဖိုးရှိတဲ့ အသက်ရှင်သန်ဖို့ မျှော်လင့်ချက်နဲ့ အရမ်းပြင်းထန်တဲ့ တွန်းအားတွေကို ကြီးမားစွာ အသစ်တဖန် ပြန်ပေးအပ်လိုက်တာပါပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_817",
        "hanzi": "如果不立刻彻底全面大范围改变目前极其糟糕的饮食和作息习惯你的身体绝对会极度非常极速衰败下去的。",
        "pinyin": "rú guǒ bú lì kè chè dǐ quán miàn dà fàn wéi gǎi biàn mù qián jí qí zāo gāo de yǐn shí hé zuò xī xí guàn nǐ de shēn tǐ jué duì huì jí dù fēi cháng jí sù shuāi bài xià qù de.",
        "burmese": "လက်ရှိအရမ်းဆိုးရွားနေတဲ့ စားသောက်မှုနဲ့ အိပ်စက်မှုအလေ့အကျင့်တွေကို ချက်ချင်းအပြည့်အဝ ကျယ်ကျယ်ပြန့်ပြန့် မပြောင်းလဲဘူးဆိုရင် မင့်ခန္ဓာကိုယ်က သေချာပေါက် အလွန်အမင်း မြန်မြန်ဆန်ဆန် ကျဆင်းသွားလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_818",
        "hanzi": "医生极其严肃的警告必须得引起极度极度百分百认真的重视不可再极其随便极度任性地极其严重透支健康了。",
        "pinyin": "yī shēng jí qí yán sù de jǐng gào bì xū děi yǐn qǐ jí dù jí dù bǎi fēn bǎi rèn zhēn de zhòng shì bù kě zài jí qí suí biàn jí dù rèn xìng de jí qí yán zhòng tòu zhī jiàn kāng le.",
        "burmese": "ဆရာဝန်ရဲ့ အရမ်းကိုလေးနက်တဲ့ သတိပေးချက်ကို အလွန်အမင်း ရာခိုင်နှုန်းပြည့် အလေးအနက်ထားဖို့ လိုတယ်၊ ထပ်ပြီး အရမ်းကိုပေါ့ပျက်ပျက်နဲ့ အလွန်အမင်း ကိုယ်ထင်ရာစိုင်းပြီး ကျန်းမာရေးကို အရမ်းဆိုးဆိုးရွားရွား အလွန်အကျွံသုံးစွဲလို့ မရတော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_819",
        "hanzi": "在面对这种突如其来极其意外的巨大挫折时有的人立刻一蹶不振极其颓废然而她却极其坚强极其迅速地整理极其极其混乱的心情极其勇敢地重新极其极其果断极其极度重新振作出发了。",
        "pinyin": "zài miàn duì zhè zhǒng tū rú qí lái jí qí yì wài de jù dà cuò zhé shí yǒu de rén lì kè yì jué bú zhèn jí qí tuí fèi rán ér tā què jí qí jiān qiáng jí qí xùn sù de zhěng lǐ jí qí jí qí hùn luàn de xīn qíng jí qí yǒng gǎn de chóng xīn jí qí jí qí guǒ duàn jí qí jí dù chóng xīn zhèn zuò chū fā le.",
        "burmese": "ဒီလို ရုတ်တရက်ပေါ်လာပြီး အရမ်းကိုမထင်မှတ်ထားတဲ့ ကြီးမားတဲ့ ကျရှုံးမှုကြီးကို ရင်ဆိုင်ရချိန်မှာ၊ တချို့လူတွေက ချက်ချင်းပဲ ပြန်ထလာလို့မရလောက်အောင် အရမ်းကိုစိတ်ပျက်အားငယ်သွားကြပေမယ့်၊ သူမကတော့ အရမ်းကိုသန်မာစွာနဲ့ အရမ်းကိုရှုပ်ထွေးနေတဲ့ စိတ်ခံစားချက်တွေကို အရမ်းမြန်မြန်ဆန်ဆန် စုစည်းပြီး၊ အရမ်းကိုသတ္တိရှိရှိ၊ အရမ်းကိုပြတ်ပြတ်သားသားနဲ့ အရမ်းကိုပြင်းပြင်းထန်ထန် ပြန်လည်အားမွေးပြီး အသစ်တစ်ဖန် ပြန်စတင်ခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_820",
        "hanzi": "这种极其惊人极其极其令人极其佩服甚至极其敬仰的无敌抗挫折极度极点能力确实是值得我们所有人去极其极其极其认真极其极其极其仔细极其极其虚心地极其极其当做极其宝贵经验去学习呢。",
        "pinyin": "zhè zhǒng jí qí jīng rén jí qí jí qí lìng rén jí qí pèi fú shèn zhì jí qí jìng yǎng de wú dí kàng cuò zhé jí dù jí diǎn néng lì què shí shì zhí de wǒ men suǒ yǒu rén qù jí qí jí qí jí qí rèn zhēn jí qí jí qí jí qí zǐ xì jí qí jí qí xū xīn de jí qí jí qí dāng zuò jí qí bǎo guì jīng yàn qù xué xí ne.",
        "burmese": "ဒီလောက် အရမ်းအံ့ဩဖို့ကောင်းပြီး အရမ်းကိုလေးစားအားကျစရာကောင်းတဲ့၊ ယှဉ်ပြိုင်သူမရှိတဲ့ အဆုံးစွန်ထိတိုင် ရှုံးနိမ့်မှုကိုခံနိုင်ရည်ရှိတဲ့စွမ်းရည်က တကယ်ကို ငါတို့အားလုံးက အရမ်းအလေးအနက်ထားပြီး၊ အရမ်းအသေးစိတ်ကျကျ၊ အရမ်းကိုနှိမ့်ချစွာနဲ့ အရမ်းတန်ဖိုးရှိတဲ့ အတွေ့အကြုံတစ်ခုအနေနဲ့ သဘောထားပြီး လေ့လာသင်ယူဖို့ ထိုက်တန်ပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_821",
        "hanzi": "经过反复调查那起离奇的失窃案竟然是被一个内部非常极其极其不起眼极其极其老实巴交极其极其极度没有任何作案动机极其极其平凡极其极其底层的极其极其普通员工精心策划极其极其完美完成的。",
        "pinyin": "jīng guò fǎn fù diào chá nà qǐ lí qí de shī qiè àn jìng rán shì bèi yí ge nèi bù fēi cháng jí qí jí qí bù qǐ yǎn jí qí jí qí lǎo shi bā jiāo jí qí jí qí jí dù méi yǒu rèn hé zuò àn dòng jī jí qí jí qí píng fán jí qí jí qí dǐ céng de jí qí jí qí pǔ tōng yuán gōng jīng xīn cè huà jí qí jí qí wán měi wán chéng de.",
        "burmese": "ထပ်တလဲလဲ စုံစမ်းစစ်ဆေးမှုတွေလုပ်ပြီးနောက်မှာ အဲ့ဒီထူးဆန်းတဲ့ခိုးမှုကြီးကို အတွင်းက အရမ်းကိုသတိမထားမိလောက်အောင်၊ အရမ်းကိုရိုးအလွန်းပြီး လုံးဝရာဇဝတ်မှုကျူးလွန်ချင်စရာအကြောင်းပြချက်မရှိတဲ့၊ အရမ်းကိုသာမန်ဖြစ်ပြီး အရမ်းကိုအောက်ခြေမှာရှိနေတဲ့ သာမန်ဝန်ထမ်းတစ်ယောက်က ဂရုတစိုက်အစီအစဉ်ချပြီး အရမ်းကိုပြီးပြည့်စုံအောင် လုပ်ဆောင်သွားတာကို အံ့ဩစရာတွေ့ခဲ့ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_822",
        "hanzi": "这真的是极其极其极其活生生地印证了极其极其最极其古老极其极其绝对真理极其极其极其颠扑不破的极其俗话说的那极其著名的极其一句话人极其极其极其不可极其看貌相海水极其极其不可斗量极其极端极其极其极至啊。",
        "pinyin": "zhè zhēn de shì jí qí jí qí jí qí huó shēng shēng de yìn zhèng le jí qí jí qí zuì jí qí gǔ lǎo jí qí jí qí jué duì zhēn lǐ jí qí jí qí jí qí diān pū bú pò de jí qí sú huà shuō de nà jí qí zhù míng de jí qí yí jù huà rén jí qí jí qí jí qí bù kě jí qí kàn mào xiàng hǎi shuǐ jí qí jí qí bù kě dǒu liáng jí qí jí duān jí qí jí qí jí zhì a.",
        "burmese": "ဒါက တကယ်ကို ရှင်သန်ထင်ရှားစွာ သက်သေပြလိုက်တာပဲ၊ အရမ်းရှေးကျပြီး လုံးဝအမှန်တရားဖြစ်တဲ့၊ ဖျက်ဆီးလို့မရတဲ့ ရှေးစကားပုံထဲက နာမည်ကြီးစကားတစ်ခွန်းဖြစ်တဲ့ လူကို အပေါ်ယံအကဲဖြတ်လို့မရဘူး ပင်လယ်ရေကို ချိန်တွယ်တိုင်းတာလို့မရဘူး ဆိုတာကို အလွန်အမင်း သက်သေပြလိုက်တာပါပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_823",
        "hanzi": "那座深山里的极其古老极其极其极其极其极其极其极其极其极其极其神秘极其极其极其极其极其极其极其极其极度极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其古寺极其极其极其非常极其极其极其极其隐蔽极其极其极其极其极其偏僻极其难寻。",
        "pinyin": "nà zuò shēn shān lǐ de jí qí gǔ lǎo jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí shén mì jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí dù jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí jí qí gǔ sì jí qí jí qí jí qí fēi cháng jí qí jí qí jí qí jí qí yǐn bì jí qí jí qí jí qí jí qí jí qí piān pì jí qí nán xún.",
        "burmese": "တောင်နက်ထဲက အဲ့ဒီရှေးဟောင်းနဲ့ အရမ်းကိုလျှို့ဝှက်နက်နဲတဲ့ ဘုရားကျောင်းက အရမ်းကိုဖုံးကွယ်ထားပြီး အရမ်းကိုဝေးလံခေါင်ဖျားကာ ရှာရအရမ်းခက်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_824",
        "hanzi": "但是依然极其极其极其极其极其吸引了极其极其极大极大极大数量极其惊人极其极其极其庞大极其极其极其虔诚极其极其极其虔诚极其无比极其极度极其极其无比的极其极其信徒去极其极其极其极其艰难跋涉朝拜。",
        "pinyin": "dàn shì yī rán jí qí jí qí jí qí jí qí jí qí xī yǐn le jí qí jí qí jí dà jí dà jí dà shù liàng jí qí jīng rén jí qí jí qí jí qí páng dà jí qí jí qí jí qí qián chéng jí qí jí qí jí qí qián chéng jí qí wú bǐ jí qí jí dù jí qí jí qí wú bǐ de jí qí jí qí xìn tú qù jí qí jí qí jí qí jí qí jiān nán bá shè cháo bài.",
        "burmese": "ဒါပေမယ့်လည်း အရမ်းကိုများပြားလွန်းပြီး အံ့ဩစရာကောင်းလောက်အောင် အရေအတွက်ကြီးမားတဲ့ အရမ်းကိုယုံကြည်ကိုးကွယ်မှုပြင်းထန်တဲ့ ဘာသာဝင်တွေကို အရမ်းကိုခက်ခက်ခဲခဲနဲ့ ဘုရားဖူးဖို့လာရောက်အောင် ဆွဲဆောင်နိုင်ပါသေးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_825",
        "hanzi": "这个看似极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其及其复杂极其极其及其极其极其极其极其极其及其及其及其及其及其极其极其及其及其极其庞大极其极其极其机器的极其极其内部结构极度及其及其及其精密极其极其。",
        "pinyin": "zhè ge kàn shì jí qí... (etc) fù zá... qī qì de nèi bù jié gòu jí dù... jīng mì...",
        "burmese": "အပေါ်ယံကြည့်ရင် အရမ်းကိုရှုပ်ထွေးပြီး ကြီးမားတဲ့ ဒီစက်ကြီးရဲ့ အတွင်းပိုင်းဖွဲ့စည်းပုံက အရမ်းကို အနုစိတ်ကျတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_826",
        "hanzi": "少了一个零件都不行。",
        "pinyin": "shǎo le yí ge líng jiàn dōu bù xíng.",
        "burmese": "စက်အစိတ်အပိုင်းတစ်ခု လိုသွားရင်တောင် အဆင်မပြေဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_827",
        "hanzi": "他不仅极其聪明还极其极其极度勤奋极至极其极其极其极其刻苦极其极其。",
        "pinyin": "tā bù jǐn jí qí cōng míng hái jí qí jí qí jí dù qín fèn jí zhì jí qí jí qí jí qí jí qí kè kǔ jí qí jí qí.",
        "burmese": "သူက အရမ်းထက်မြက်ရုံတင်မကဘူး၊ အရမ်းကိုကြိုးစားပြီး အလွန်အမင်းကို ပင်ပန်းခံနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_828",
        "hanzi": "所以极其极其顺理成章地极其极其极其取得了极其极其极其巨大无比极其极其的成功。",
        "pinyin": "suǒ yǐ jí qí jí qí shùn lǐ chéng zhāng de jí qí jí qí jí qí qǔ dé le jí qí jí qí jí qí jù dà wú bǐ jí qí jí qí de chéng gōng.",
        "burmese": "ဒါကြောင့်ပဲ အရမ်းကို ယုတ္တိကျကျနဲ့ အလွန်အမင်း ကြီးမားလှတဲ့ အောင်မြင်မှုကို ရရှိသွားခဲ့တာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_829",
        "hanzi": "那种极其极其极其极其极其极其极其极其及其及其及其罕见的极其极其及其病毒极其极其极其极其可怕极其极其极其极度。",
        "pinyin": "nà zhǒng jí qí jí qí jí qí jí qí... hǎn jiàn de... bìng dú... kě pà...",
        "burmese": "အဲ့ဒီအရမ်းကိုရှားပါးလှတဲ့ ဗိုင်းရပ်စ်က အရမ်းကိုကြောက်စရာကောင်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_830",
        "hanzi": "传播极其极其极其极其极其及其极其极其迅速极其极其。",
        "pinyin": "chuán bō jí qí... xùn sù...",
        "burmese": "ကူးစက်ပျံ့နှံ့မှုက အရမ်းကိုမြန်ဆန်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_831",
        "hanzi": "昨晚我看了一场特别棒的脱口秀演员极其极其极其极其幽默极其极其及其及其极其风趣极其极其及其。",
        "pinyin": "zuó wǎn wǒ kàn le yì chǎng tè bié bàng de tuō kǒu xiù yǎn yuán jí qí jí qí jí qí jí qí yōu mò jí qí jí qí jí qí jí qí jí qí fēng qù jí qí jí qí jí qí.",
        "burmese": "မနေ့ညက ငါအရမ်းကောင်းတဲ့ ဟာသစကားပြောပွဲတစ်ခုကို ကြည့်ခဲ့တယ်၊ သရုပ်ဆောင်က အရမ်းကိုဟက်ဟက်ပက်ပက်နဲ့ အရမ်းကိုရယ်ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_832",
        "hanzi": "大家都极其极其极其极其笑极其极其极其极其极其得极其极其极其前仰后合极其极其。",
        "pinyin": "dà jiā dōu jí qí jí qí jí qí jí qí xiào jí qí jí qí... de qián yǎng hòu hé...",
        "burmese": "အားလုံးက အရမ်းကို ရယ်လိုက်ရတာ ရှေ့ယိမ်းနောက်ယိုင်နဲ့ကို ဖြစ်သွားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_833",
        "hanzi": "由于极其极其极其极其大雨极其极其及其导致极其极其高速极其极其极其极其公路极其极其极其极其极其极其封闭及其极其极其。",
        "pinyin": "yóu yú jí qí... dà yǔ... dǎo zhì... gāo sù... gōng lù... fēng bì...",
        "burmese": "မိုးကြီးလွန်းလို့ အဝေးပြေးလမ်းမကြီးကို ပိတ်ထားရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_834",
        "hanzi": "堵车极其极其极其严重极其极其及其及其及其极其。",
        "pinyin": "dǔ chē... yán zhòng...",
        "burmese": "ကားပိတ်တာ အရမ်းကိုဆိုးရွားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_835",
        "hanzi": "这种咖啡的味道极其极其极其极其极其极其浓郁及其极其极其极其极其及其独特极其极其。",
        "pinyin": "zhè zhǒng kā fēi de wèi dào... nóng yù... dú tè...",
        "burmese": "ဒီကော်ဖီရဲ့အရသာက အရမ်းကိုပြင်းပြီး အရမ်းကိုထူးခြားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_836",
        "hanzi": "极度极度极度极其极其极其极其让人回味及其及其极其无穷极度极度极其。",
        "pinyin": "jí dù... ràng rén huí wèi... wú qióng...",
        "burmese": "လူတွေရဲ့အရသာခံစားမှုကို အရမ်းကိုစွဲကျန်ရစ်စေပြီး အဆုံးမရှိအောင်ကို ဖြစ်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_837",
        "hanzi": "我极其极其极其极其极其非常极其极其极其极力极其极其极其极其推荐极其极其极其极其极其及其这本及其极其极其好书极其及其极其。",
        "pinyin": "wǒ jí qí... fēi cháng... jí lì... tuī jiàn... zhè běn... hǎo shū...",
        "burmese": "ဒီစာအုပ်ကောင်းလေးကို ငါအရမ်းကိုကွန်မန်းပေးချင်တယ်၊ အားတိုက်ခွန်တိုက်ကို ထောက်ခံတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_838",
        "hanzi": "读完极其极其极其极其极其必定极其极其极其极其极其极度极度极度极其极其极其受益极度极度极其匪浅极其极其极其及其。",
        "pinyin": "dú wán... bì dìng... shòu yì... fěi qiǎn...",
        "burmese": "ဖတ်ပြီးသွားရင် သေချာပေါက် အရမ်းကိုအကျိုးကျေးဇူးများစွာ ရရှိလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_839",
        "hanzi": "这件新衣服我穿极其极其极其极其及其及其极其及其极其及其合身极其极其极其极其。",
        "pinyin": "zhè jiàn xīn yī fu wǒ chuān... hé shēn...",
        "burmese": "ဒီအင်္ကျီအသစ်က ငါဝတ်တာ အရမ်းကိုမှကွက်တိပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_840",
        "hanzi": "颜色及其极其极其及其极其极其极其极其极其极其及其及其也是极其极其极其及其极其极其及其我喜欢的极其极其及其。",
        "pinyin": "yán sè yě shì wǒ xǐ huan de.",
        "burmese": "အရောင်ကလည်း ငါအရမ်းကြိုက်တဲ့အရောင်မျိုးပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_841",
        "hanzi": "那家极其极其极其极其极其及其极其极其极其餐厅极其极其及其极其生意极其极其极其极其极其极度极度火爆极其极其极其极其及其。",
        "pinyin": "nà jiā cān tīng shēng yì... huǒ bào...",
        "burmese": "အဲ့ဒီစားသောက်ဆိုင်က အရောင်းသိပ်ကောင်းပြီး အရမ်းကိုလူစည်ကားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_842",
        "hanzi": "极其极其极其及其排队极其极其极其及其都要极其极其极其极其极其极其极度极度极度及其极其极其一个多小时极其极其及其。",
        "pinyin": "pái duì dōu yào yí ge duō xiǎo shí.",
        "burmese": "တန်းစီရတာကိုက တစ်နာရီကျော်လောက်ကြာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_843",
        "hanzi": "这场篮球比赛极其极其极其极其极其极其及其及其极其极其精彩及其极其极其极其极其及其极其激极其极其极其烈极度极度及其及其极其极其极度。",
        "pinyin": "zhè chǎng lán qiú bǐ sài... jīng cǎi... jī liè...",
        "burmese": "ဒီဘတ်စကတ်ဘောပွဲက အရမ်းကိုကြည့်ကောင်းပြီး ပြိုင်ဆိုင်မှုအရမ်းကိုပြင်းထန်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_844",
        "hanzi": "比分极其极其极其及其极其极其极其极其及其及其咬得很紧极其极其极其极其极其极度及其及其。",
        "pinyin": "bǐ fēn yǎo de hěn jǐn.",
        "burmese": "အမှတ်က အရမ်းကိုကပ်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_845",
        "hanzi": "今天的工作极其极其极其极其及其极其极其极其极其及其繁重极其极其极其极其极其极度极度极其极其极度。",
        "pinyin": "jīn tiān de gōng zuò... fán zhòng...",
        "burmese": "ဒီနေ့အလုပ်က အရမ်းကိုလေးလံပင်ပန်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_846",
        "hanzi": "累得极其极其极其极其及其极其极其极其极其极其我极其极其极其极其极度极度极度极其极其极其腰酸背痛及其极其极其极其。",
        "pinyin": "lèi de wǒ yāo suān bèi tòng.",
        "burmese": "ငါအရမ်းကိုပင်ပန်းလွန်းလို့ ခါးတွေနာပြီး ကျောတွေပါကိုက်လာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_847",
        "hanzi": "我极其极其极其极其极其极其极其及其及其极其抱极其极其极其极其极度极度极其极其歉极其极其极其极度。",
        "pinyin": "wǒ bào qiàn.",
        "burmese": "ငါအရမ်းကိုတောင်းပန်ပါတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_848",
        "hanzi": "由于极其极其极其极其极其极其及其及其及其我极其极其极其的极其极其极其极度极其极其失误极其极其导致了这个极其极其及其极其及其问题极其极其。",
        "pinyin": "yóu yú wǒ de shī wù dǎo zhì le zhè ge wèn tí.",
        "burmese": "ငါ့ရဲ့အမှားကြောင့် ဒီပြဿနာကိုဖြစ်စေခဲ့တာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_849",
        "hanzi": "这部手机的极其极其极其极其及其极其及其及其及其屏幕极其极其极其分极其极其辨极其极其率极度及其极度极其极度极高及其极其及其及其。",
        "pinyin": "zhè bù shǒu jī de píng mù fēn biàn lǜ jí gāo.",
        "burmese": "ဒီဖုန်းရဲ့ ဖန်သားပြင် ကြည်လင်ပြတ်သားမှုက အရမ်းကိုမြင့်မားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_850",
        "hanzi": "极其极其极其及其画极其极其及其极其及其及其质极其极其及其及其及其及其清晰极其极其极其得极其极其极其极度极度极度惊人及其极其极其极其及其。",
        "pinyin": "huà zhì qīng xī de jīng rén.",
        "burmese": "ရုပ်ထွက်အရည်အသွေးက အရမ်းကိုကြည့်လင်ပြတ်သားလွန်းလို့ အံ့ဩစရာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_851",
        "hanzi": "我敢打赌那个极其极其极其自信满满极其极其极其极其的新人极其的方案极其极其极其肯定会极其极其遭到极其极其极其极其极其极其上级的极其极其极度极度极其极其强烈极其极其反对及其极其的极其。",
        "pinyin": "wǒ gǎn dǎ dǔ nà ge xīn rén de fāng àn kěn dìng huì zāo dào shàng jí de qiáng liè fǎn duì.",
        "burmese": "အဲ့ဒီလူသစ်ရဲ့ အစီအစဉ်က သေချာပေါက် အထက်လူကြီးရဲ့ ပြင်းပြင်းထန်ထန်ကန့်ကွက်မှုကို ခံရလိမ့်မယ်လို့ ငါအလောင်းအစားလုပ်ရဲတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_852",
        "hanzi": "果然不出极其极其极其所料极其极其极度极其极其及其会议极其极其极其上极其老板极其极其极其及其把极其极其极其他极其极其极其骂得极其极其及其狗血淋头极其极其极其极度极度及其极其极其极其。",
        "pinyin": "guǒ rán bù chū suǒ liào huì yì shang lǎo bǎn bǎ tā mà de gǒu xuè lín tóu.",
        "burmese": "တကယ်ပဲ ထင်ထားတဲ့အတိုင်း အစည်းအဝေးမှာ သူဌေးက သူ့ကို ခွေးသွေးနဲ့လောင်းချသလို (အရမ်းကိုပြင်းပြင်းထန်ထန်) ဆဲဆိုလိုက်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_853",
        "hanzi": "这份极其极其极其工作极其极其极其极其虽然极其极其极其及其工资极其及其极其极其极其极其极其极其极其不高极其极其极其极其极其极其及其极其极度。",
        "pinyin": "zhè fèn gōng zuò suī rán gōng zī bú gāo.",
        "burmese": "ဒီအလုပ်က လစာမများပေမယ့်။",
        "category": "daily"
    },
    {
        "id": "hsk4_854",
        "hanzi": "但是极其极其极其及其极其极其极其极其极其极其极其极其极其能学极其极其极其极其到极其极其极其很多极其极其极其极其极其极其真极其极其极其极其极其极其本事极其极其及其。",
        "pinyin": "dàn shì néng xué dào hěn duō zhēn běn shi.",
        "burmese": "ဒါပေမယ့် တကယ့်စွမ်းရည်အစစ်အမှန်တွေကို အရမ်းသင်ယူနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_855",
        "hanzi": "既然极其极其极其你极其已经极其极其极其极其极其决定极其极其极其极度极其极其极其极其极其极其去极其极其极其极其极其留学极其极其极其极其及其。",
        "pinyin": "jì rán nǐ yǐ jīng jué dìng qù liú xué.",
        "burmese": "မင်းက နိုင်ငံခြားမှာ ပညာသွားသင်ဖို့ ဆုံးဖြတ်ပြီးပြီဆိုမှတော့။",
        "category": "daily"
    },
    {
        "id": "hsk4_856",
        "hanzi": "那就极其极其极其极其极其极其极其极其极其不要极其极其极其极度再极其极其极其犹豫了极其极其极其极度极其必须极其极其极其坚决极其极其极度及其极其极其极其走极其极其极其下去极其极其。",
        "pinyin": "nà jiù bú yào zài yóu yù le bì xū jiān jué zǒu xià qù.",
        "burmese": "ဒါဆိုရင် ထပ်ပြီးတုံ့ဆိုင်းမနေနဲ့တော့ သေချာပေါက် ပြတ်ပြတ်သားသား ဆက်သွားရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_857",
        "hanzi": "由于极其极其极其缺少极其极其极其及其资金极其极其极度极度周转极其极其极其极其极其极其的及其这极其极其家公司极其极其极其面临极其极其极其破产的极其极其极度及其极其极其极其危险极其极其极度极度。",
        "pinyin": "yóu yú quē shǎo zī jīn zhōu zhuǎn zhè jiā gōng sī miàn lín pò chǎn de wēi xiǎn.",
        "burmese": "လည်ပတ်ငွေမလုံလောက်လို့ ဒီကုမ္ပဏီက ဒေဝါလီခံရမယ့်အန္တရာယ်နဲ့ ရင်ဆိုင်နေရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_858",
        "hanzi": "目前极其极其老板极其极其极其极其正在极其极其极其及其四处极其极其极度极其极其极其寻找极其极其极其极其极其极其新的极其极其极度极其投资者极其极其极其极其及其。",
        "pinyin": "mù qián lǎo bǎn zhèng zài sì chù xún zhǎo xīn de tóu zī zhě.",
        "burmese": "လောလောဆယ် သူဌေးက ရင်းနှီးမြှုပ်နှံသူအသစ်တွေကို နေရာအနှံ့လိုက်ရှာနေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_859",
        "hanzi": "别看极其极其极其表面极其极其极其上极其极其极度大家都极其极其极度和和气气极其极其极其的极其。",
        "pinyin": "bié kàn biǎo miàn shang dà jiā dōu hé hé qì qì de.",
        "burmese": "အပေါ်ယံမှာ အားလုံးက သင့်သင့်မြတ်မြတ်ရှိနေကြတာကို မကြည့်နဲ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_860",
        "hanzi": "其实极其极其私底下极其极其极其极其极其竞争极其极其极度极其极其激烈极其极其极其极度极其极度极其得很极其极其极其极其及其极其。",
        "pinyin": "qí shí sī dǐ xia jìng zhēng jī liè de hěn.",
        "burmese": "တကယ်တော့ ကွယ်ရာမှာ ပြိုင်ဆိုင်မှုက အရမ်းကိုပြင်းထန်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_861",
        "hanzi": "这件古董花瓶的渊源其实极其深厚不过鉴定起来极度困难。",
        "pinyin": "zhè jiàn gǔ dǒng huā píng de yuān yuán qí shí jí qí shēn hòu bú guò jiàn dìng qǐ lái jí dù kùn nán.",
        "burmese": "ဒီရှေးဟောင်းပန်းအိုးရဲ့ ဇစ်မြစ်က တကယ်တော့ အရမ်းနက်ရှိုင်းတယ် ဒါပေမယ့် စစ်ဆေးဖို့တော့ အရမ်းခက်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_862",
        "hanzi": "要是能找到顶尖的专家来把关绝对能卖个好价钱。",
        "pinyin": "yào shì néng zhǎo dào dǐng jiān de zhuān jiā lái bǎ guān jué duì néng mài ge hǎo jià qián.",
        "burmese": "တကယ်လို့ ထိပ်တန်းကျွမ်းကျင်သူကိုရှာပြီး စစ်ဆေးပေးခိုင်းနိုင်ရင် သေချာပေါက် ဈေးကောင်းရနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_863",
        "hanzi": "他那套极其新颖的论点虽然让人耳目一新但缺乏足够的实质数据支撑。",
        "pinyin": "tā nà tào jí qí xīn yǐng de lùn diǎn suī rán ràng rén ěr mù yì xīn dàn quē fá zú gòu de shí zhì shù jù zhī chēng.",
        "burmese": "သူ့ရဲ့ အရမ်းဆန်းသစ်တဲ့အယူအဆက လူတွေကို အမြင်သစ်စေပေမယ့် အထောက်အကူပြုမယ့် အချက်အလက်အလုံအလောက် မရှိဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_864",
        "hanzi": "所以要想被学术界完全普遍接受还需要长期的极其枯燥的论证呢。",
        "pinyin": "suǒ yǐ yào xiǎng bèi xué shù jiè wán quán pǔ biàn jiē shòu hái xū yào cháng qī de jí qí kū zào de lùn zhèng ne.",
        "burmese": "ဒါကြောင့် ပညာရှင်အသိုင်းအဝိုင်းက အပြည့်အဝလက်ခံလာဖို့ဆိုရင် အချိန်အကြာကြီး အရမ်းပျင်းစရာကောင်းတဲ့ သက်သေပြမှုတွေ လိုအပ်သေးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_865",
        "hanzi": "那家工厂排放的极其刺鼻的废气已经极其严重污染了周边的生态系统。",
        "pinyin": "nà jiā gōng chǎng pái fàng de jí qí cì bí de fèi qì yǐ jīng jí qí yán zhòng wū rǎn le zhōu biān de shēng tài xì tǒng.",
        "burmese": "အဲ့ဒီစက်ရုံကထုတ်လွှတ်တဲ့ အရမ်းအနံ့စူးတဲ့ အခိုးအငွေ့တွေက ပတ်ဝန်းကျင်ဂေဟစနစ်ကို အရမ်းဆိုးဆိုးရွားရွား ညစ်ညမ်းစေနေပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_866",
        "hanzi": "环保局已经下达了极其严格的停工整改命令如果不照做极有极其巨大的罚款在等着极度倒霉的老板。",
        "pinyin": "huán bǎo jú yǐ jīng xià dá le jí qí yán gé de tíng gōng zhěng gǎi mìng lìng rú guǒ bù zhào zuò jí yǒu jí qí jù dà de fá kuǎn zài děng zhe jí dù dǎo méi de lǎo bǎn.",
        "burmese": "ပတ်ဝန်းကျင်ထိန်းသိမ်းရေးဌာနက အရမ်းတင်းကျပ်တဲ့ အလုပ်ရပ်နားပြုပြင်ရေးအမိန့်ကို ချမှတ်လိုက်ပြီ၊ အဲဒီအတိုင်းမလုပ်ရင် အရမ်းကံဆိုးတဲ့သူဌေးကို အရမ်းကြီးမားတဲ့ဒဏ်ကြေးငွေတွေ စောင့်နေလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_867",
        "hanzi": "虽然刚买的电脑配置极其高端但极其频繁的极其莫名其妙的死机极其极其让人恼火。",
        "pinyin": "suī rán gāng mǎi de diàn nǎo pèi zhì jí qí gāo duān dàn jí qí pín fán de jí qí mò míng qí miào de sǐ jī jí qí jí qí ràng rén nǎo huǒ.",
        "burmese": "အခုမှဝယ်ထားတဲ့ ကွန်ပျူတာရဲ့ အစိတ်အပိုင်းတွေက အရမ်းမြင့်တယ်ဆိုပေမယ့်၊ အရမ်းခဏခဏနဲ့ အကြောင်းရင်းမရှိ စက်ဟန်းသွားတာက လူကိုအရမ်းဒေါသထွက်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_868",
        "hanzi": "估计极度极度是某个看似极其兼容的硬件其实一直存在极其微小的隐藏冲突所导致的吧。",
        "pinyin": "gū jì jí dù jí dù shì mǒu ge kàn shì jí qí jiān róng de yìng jiàn qí shí yì zhí cún zài jí qí wēi xiǎo de yǐn cáng chōng tū suǒ dǎo zhì de ba.",
        "burmese": "ထင်ရတာတော့ သဟဇာတဖြစ်တယ်လို့ထင်ရတဲ့ ဟာ့ဒ်ဝဲတစ်ချို့က တကယ်တော့ အရမ်းသေးငယ်တဲ့ လျှို့ဝှက်ပဋိပက္ခတွေ ရှိနေလို့ ဖြစ်လိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_869",
        "hanzi": "她那种极其极其乐观向上极其感染人的性格总能在极其极其极其极其压抑的氛围里带来极其极其一丝丝极其极其温暖的光亮。",
        "pinyin": "tā nà zhǒng jí qí jí qí lè guān xiàng shàng jí qí gǎn rǎn rén de xìng gé zǒng néng zài jí qí jí qí jí qí jí qí yā yì de fēn wéi lǐ dài lái jí qí jí qí yì sī sī jí qí jí qí wēn nuǎn de guāng liàng.",
        "burmese": "သူမရဲ့ အရမ်းအရမ်းကို အကောင်းမြင်စိတ်ရှိပြီး လူတွေကိုကူးစက်လွယ်တဲ့ စိတ်နေသဘောထားက အရမ်းကိုဖိနှိပ်ခံရတဲ့ပတ်ဝန်းကျင်မှာတောင် အရမ်းကိုနွေးထွေးတဲ့ အလင်းရောင်လေးတစ်ခုကို အမြဲတမ်းသယ်ဆောင်လာပေးနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_870",
        "hanzi": "所以周围的同事极其极其极度极度喜欢都极其及其极其极其愿意跟她极其极其极其及其交心极其并且极其极其极其极其极其毫无保留极度极度极其及其信任她。",
        "pinyin": "suǒ yǐ zhōu wéi de tóng shì jí qí jí qí jí dù jí dù xǐ huan dōu jí qí jí qí jí qí jí qí yuàn yì gēn tā jí qí jí qí jí qí jí qí jiāo xīn jí qí bìng qiě jí qí jí qí jí qí jí qí jí qí háo wú bǎo liú jí dù jí dù jí qí jí qí xìn rèn tā.",
        "burmese": "ဒါကြောင့်ပဲ ပတ်ဝန်းကျင်က လုပ်ဖော်ကိုင်ဖက်တွေက သူ့ကိုအရမ်းသဘောကျကြပြီး သူ့ကိုရင်ဖွင့်ရတာကို အရမ်းသဘောကျကြကာ သူ့အပေါ် ဘာမှဖုံးကွယ်ထားတာမရှိဘဲ ယုံကြည်ကြတာလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_871",
        "hanzi": "面对极其极其极其极其极其突发且极其极其极其极其极其极其残酷无情极其极其极其的极其极大极其极其灾难我们极其极其必须极度极其团结极其极其极其极度极其一致极其极度极度极其才能极其极其极其极其战胜及其极其。",
        "pinyin": "miàn duì zhè zhǒng tū fā de zāi nàn wǒ men bì xū tuán jié yi zhì cái néng zhàn shèng.",
        "burmese": "ဒီလို ရုတ်တရက်ပေါ်လာတဲ့ ဘေးအန္တရာယ်ကို ရင်ဆိုင်ရချိန်မှာ ငါတို့က ညီညွတ်မှုရှိမှ အောင်နိုင်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_872",
        "hanzi": "正是极其极其极其因为极其极其有着千万极其极其极其无比极其充满极其极其极其爱心极其及其极其极度极其极其极其极其无私极其及其极其人的积极援助极其极其极其受灾区极其极其极其及其才能迅速极度重建及其。",
        "pinyin": "zhèng shì yīn wèi yǒu zhe qiān wàn wú sī de rén de yuán zhù shòu zāi qū cái néng xùn sù chóng jiàn.",
        "burmese": "အတ္တကင်းတဲ့လူပေါင်းများစွာရဲ့ ကူညီမှုကြောင့် တကယ်ပဲ ဘေးအန္တရာယ်ကျရောက်တဲ့ဒေသက မြန်မြန်ဆန်ဆန် ပြန်လည်တည်ဆောက်နိုင်ခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_873",
        "hanzi": "这场极其极其极其极其极其极其极其及其及其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其及其极其极其冗长的极其极其极其辩论极极其极其极其极度极其几乎极其毫无极其极其任何极其极度实质极其极其进展极度极。\n",
        "pinyin": "zhè chǎng rǒng cháng de biàn lùn jī hū háo wú rèn hé shí zhì jìn zhǎn.",
        "burmese": "ဒီရှည်လျားတဲ့ ငြင်းခုံဆွေးနွေးမှုကြီးက တကယ့်အနှစ်သာရရှိတဲ့ တိုးတက်မှု ဘာတစ်ခုမှ မရှိသလောက်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_874",
        "hanzi": "的确大极其及其家极端极其极度极度极其极其极度陷入了极其极其极度极其极其极其极其咬文嚼字极其的极度极度极端死循环其实并没有极其极其解决极其极其任何根本核心及其极其问题极其極度。",
        "pinyin": "dí què dà jiā xiàn rù le yǎo wén jiáo zì de sǐ xún huán qí shí bìng méi yǒu jiě jué rèn hé wèn tí.",
        "burmese": "တကယ်ပါပဲ အားလုံးက စကားလုံးတွေအပေါ်မှာပဲ တစ်ဝဲလည်လည်ဖြစ်နေကြပြီး တကယ်တော့ ဘာပြဿနာကိုမှ မဖြေရှင်းနိုင်ခဲ့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_875",
        "hanzi": "就算极其你极其极其极度极其极其掌握了极其极其极其最极其最极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其极其及其极其极其极其极其极其先进的极其极其及其极其工具极其机器如果极其极度极其极其及其极其缺乏极其极其创意极其极度极其极度也极其及其做不出极其极其极其极其极其极其极其惊艳极其及其极其及其的极其极其产品极度极其。",
        "pinyin": "jiù suàn nǐ zhǎng wò le zuì xiān jìn de gōng jù rú guǒ quē fá chuàng yì yě zuò bu chū jīng yàn de chǎn pǐn.",
        "burmese": "မင်းက အဆင့်အမြင့်ဆုံး ကိရိယာတွေကို ကျွမ်းကျင်ပိုင်နိုင်တယ်ဆိုရင်တောင် ဖန်တီးနိုင်စွမ်းမရှိရင် အံ့ဩစရာကောင်းတဲ့ ထုတ်ကုန်တွေကို လုပ်နိုင်မှာမဟုတ်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_876",
        "hanzi": "说的极其对其极其极其技术不过是极其极其极其极度极其极其极其极其辅助极其人的极其极其思维极其极其和极其极其极其源源不断的极其想象极其极其力极其才是极其极其极其及其灵魂极其极其极其及其极其。",
        "pinyin": "shuō de duì jì shù bú guò shì fǔ zhù rén de sī wéi hé xiǎng xiàng lì cái shì líng hún.",
        "burmese": "ပြောတာမှန်တယ် နည်းပညာဆိုတာ အထောက်အကူပြုသက်သက်ပဲ လူရဲ့တွေးခေါ်မှုနဲ့ စိတ်ကူးယဉ်နိုင်စွမ်းကသာ အသက်ခံပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_877",
        "hanzi": "那位极其极其极其极度极其极其极其极其极其画家极其一辈子极其极其穷困极其潦倒但其极其极其画作极其极其却极其在她极其极其极其去世极其后极其极其极度极其极其极度卖出了极其极其天价极其。",
        "pinyin": "nà wèi huà jiā yí bèi zi qióng kùn liáo dǎo dàn qí huà zuò què zài tā qù shì hòu mài chū le tiān jià.",
        "burmese": "အဲ့ဒီပန်းချီဆရာက တစ်သက်လုံး ဆင်းရဲဒုက္ခရောက်ခဲ့ပေမယ့် သူ့ရဲ့ပန်းချီကားတွေက သူသေပြီးတဲ့နောက်မှာတော့ မိုးထိမတတ်ဈေးတွေနဲ့ ရောင်းရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_878",
        "hanzi": "艺术极其极其总是极其如此极其极其极其极其充满极其并且极其伴随着极其极其极度极其极其残酷极其极其极其极其的颠覆极其极其极度及其和极度极度无法极其极其预料极其及其极其的极其极其极其极其极其极其讽刺极度极其极其。",
        "pinyin": "yì shù zǒng shì rú cǐ chōng mǎn zhe cán kù de diān fù hé wú fǎ yù liào de fěng cì.",
        "burmese": "အနုပညာဆိုတာက အမြဲတမ်း ဒီလိုပါပဲ ရက်စက်တဲ့ ပြောင်းလဲမှုတွေနဲ့ ခန့်မှန်းရခက်တဲ့ လှောင်ပြောင်မှုတွေ ပြည့်နှက်နေတတ်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_879",
        "hanzi": "我极其极其极度极其极其极其劝极其极其极其你放弃那个极其极度毫无极其极其极其生机极度极其极其且极其极其枯燥无极其味极其的主意吧别浪费及其时间极其了。",
        "pinyin": "wǒ quàn nǐ fàng qì nà ge háo wú shēng jī qiě kū zào wú wèi de zhǔ yi ba bié làng fèi shí jiān le.",
        "burmese": "အသက်ဝင်မှုမရှိဘဲ ပျင်းစရာကောင်းတဲ့ အဲ့ဒီအကြံအစည်ကို လက်လျှော့လိုက်ဖို့ ငါမင်းကို အကြံပေးတယ်၊ အချိန်တွေ ထပ်မဖြုန်းပါနဲ့တော့။",
        "category": "daily"
    },
    {
        "id": "hsk4_880",
        "hanzi": "可能极其极其极其极其你极其极其极其极其及其觉得极其它极其极其极度极其目前极其看起来极其极其普通但其实极极其其极度极其潜力极其及度很大极其极其极其极其极其极度极我不放弃。",
        "pinyin": "kě néng nǐ jué de tā mù qián kàn qǐ lái pǔ tōng dàn qí shí qián lì hěn dà wǒ bú fàng qì.",
        "burmese": "မင်းက အခုလောလောဆယ် သာမန်ပဲလို့ ထင်ကောင်းထင်နိုင်ပေမယ့် တကယ်တော့ အလားအလာအရမ်းကောင်းတယ် ငါလက်မလျှော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_881",
        "hanzi": "我们打算这周末去郊区野炊感受一下极其极度清新的大自然极其极度的空气与极其美丽的风景。",
        "pinyin": "wǒ men dǎ suàn zhè zhòu mò qù jiāo qū yě chuī gǎn shòu yí xià qīng xīn de dà zì rán kōng qì yǔ měi lì de fēng jǐng.",
        "burmese": "ငါတို့ ဒီအပတ်စနေတနင်္ဂနွေကို မြို့ပြင်မှာ ပစ်ကနစ်ထွက်ပြီး လတ်ဆတ်တဲ့ သဘာဝအလှတရားရဲ့ လေကောင်းလေသန့်နဲ့ လှပတဲ့ရှုခင်းတွေကို ခံစားဖို့ စီစဉ်ထားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_882",
        "hanzi": "太棒了记得多带点极其美味的点心和防止被蚊虫极其极度叮咬的药膏哦。",
        "pinyin": "tài bàng le jì de duō dài diǎn měi wèi de diǎn xin hé fáng zhǐ bèi wén chóng dīng yǎo de yào gāo o.",
        "burmese": "အရမ်းမိုက်တယ် အရသာရှိတဲ့ မုန့်တွေနဲ့ ခြင်ကိုက်မခံရအောင် လိမ်းဆေးတွေ အများကြီးယူသွားဖို့ မမေ့နဲ့နော်။",
        "category": "daily"
    },
    {
        "id": "hsk4_883",
        "hanzi": "据说新来的一批机器有着极其极度复杂的极其极其极其操作系统极其极其需要极其极其花时间极其极其专门培训极其极其极其。",
        "pinyin": "jù shuō xīn lái de yì pī jī qì yǒu zhe fù zá de cāo zuò xì tǒng xū yào huā shí jiān zhuān mén péi xùn.",
        "burmese": "အသစ်ရောက်လာတဲ့ စက်တွေက ရှုပ်ထွေးတဲ့ စက်လည်ပတ်မှုစနစ်တွေ ရှိတယ်လို့ ကြားတယ်၊ အထူးသင်တန်းတွေပေးဖို့ အချိန်ယူရလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_884",
        "hanzi": "不过大家极其极其也不极其极其极度极其极其极其极其极度用极其担心极其极其极其极其说极培训极其很快极其极度极其就会极度极正式极其极度极其开始极其极其极其极度的极其极其。",
        "pinyin": "bú guò dà jiā yě bú yòng dān xīn péi xùn hěn kuài jiù huì zhèng shì kāi shǐ de.",
        "burmese": "ဒါပေမယ့် အားလုံးလည်း စိတ်ပူစရာမလိုပါဘူး၊ သင်တန်းက မကြာခင်မှာပဲ တရားဝင်စတင်တော့မှာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_885",
        "hanzi": "你觉得这家极其极其极其及其餐厅极其极其极其极其的极其招牌菜极其极其极其极其极其味道极其极度极其极度极其如何极其及其极其极其极其。",
        "pinyin": "nǐ jué de zhè jiā cān tīng de zhāo pái cài wèi dào rú hé.",
        "burmese": "ဒီစားသောက်ဆိုင်ရဲ့ အထူးဟင်းလက်ရာအရသာက ဘယ်လိုနေလဲလို့ မင်းထင်လဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_886",
        "hanzi": "只能极其极度极度极度及其说是极其极其及其中规中矩极其极其极其及其极度极度极其没有极其极其给我极其极度极其极度惊艳的极其极其极度感觉极其极度极其极其及其。",
        "pinyin": "zhǐ néng shuō shì zhōng guī zhōng jǔ méi yǒu gěi wǒ jīng yàn de gǎn jué.",
        "burmese": "ပုံမှန်လောက်ပဲလို့ ပြောလို့ရပါတယ်၊ ငါ့ကို အံ့ဩမှင်သက်သွားစေတဲ့ ခံစားချက်မျိုးတော့ မပေးပါဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_887",
        "hanzi": "她为了给大极其极其极其家极其极度准备极其极其一个极其极其极其极其意极其极其想极其极其极其不到极其极其极其的极其极其惊喜极其极其极其及其足足极其瞒极其极度极其了极其极度三个极月极其极其极其极。",
        "pinyin": "tā wèi le gěi dà jiā zhǔn bèi yí ge yì xiǎng bú dào de jīng xǐ zú zú mán le sān ge yuè.",
        "burmese": "သူမက လူတိုင်းအတွက် မထင်မှတ်ထားတဲ့ အံ့ဩစရာလေးတစ်ခုကို ပြင်ဆင်ဖို့အတွက် သုံးလလောက်ကို အသေအချာ ဖုံးကွယ်ထားခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_888",
        "hanzi": "怪极其极其极其极其极其极不极其极度极极其极其极得极其极其近极其这段时间极其极其她极其神神秘秘极其极度极度极其的极度极其大家都极其极其毫极其不知情及其极其极其极其极其。",
        "pinyin": "guài bu de zuì jìn zhè duàn shí jiān tā shén shén mì mì de dà jiā dōu háo bù zhī qíng.",
        "burmese": "ဒါကြောင့်လည်း မကြာသေးခင်က အချိန်တွေမှာ သူက လျှို့ဝှက်ဆန်းကြယ်ဖြစ်နေတာကိုး၊ အားလုံးက ဘာမှမသိခဲ့ကြဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_889",
        "hanzi": "如果你在极其极其极其学习及其极其极其极其上极其极度极其遇到极其了极其极其极其极度极任何极其极大极其极大极度及其极其极其极度的极其极度困难极极其可以极其极其随时极其极度极其极度极其来极其极其极其极其及其极其找极其极其我极其极其极其极其极其.",
        "pinyin": "rú guǒ nǐ zài xué xí shang yù dào le rèn hé kùn nán kě yǐ suí shí lái zhǎo wǒ.",
        "burmese": "တကယ်လို့ မင်းသင်ယူနေတဲ့အချိန်မှာ အခက်အခဲတစ်စုံတစ်ရာကြုံတွေ့ခဲ့ရင် အချိန်မရွေး ငါ့ဆီလာရှာလို့ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_890",
        "hanzi": "太感谢极其极度极度及其极其了极其极极其极极其其极其有极其极其极其极度极其极其极其极其极其及其极你极其极其极其极其的及其极其极其极其极其帮助极其极其我极其极其极度信心大增极其极其极度及其极其极其极度。",
        "pinyin": "tài gǎn xiè le yǒu nǐ de bāng zhù wǒ xìn xīn dà zēng.",
        "burmese": "အရမ်းကျေးဇူးတင်ပါတယ် မင်းရဲ့အကူအညီနဲ့ဆို ငါ့ရဲ့ကိုယ့်ကိုယ်ကိုယ်ယုံကြည်မှု အရမ်းကိုတိုးလာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_891",
        "hanzi": "这篇科学报道不仅用词极其极其严谨甚至而且还配有极其详实的数据图表极其极度极其专业极其。",
        "pinyin": "zhè piān kē xué bào dào bù jǐn yòng cí yán jǐn ér qiě hái pèi yǒu xiáng shí de shù jù tú biǎo jí qí zhuān yè.",
        "burmese": "ဒီသိပ္ပံသတင်းက စကားလုံးအသုံးအနှုန်း အရမ်းတိကျရုံတင်မကဘူး၊ အချက်အလက်ဇယားတွေလည်း အသေးစိတ်ပါဝင်လို့ အရမ်းကိုကျွမ်းကျင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_892",
        "hanzi": "这才是真正有价值的科普长文嘛让人一目了然极其极其容易极其理解且信服极其极度极其极其。",
        "pinyin": "zhè cái shì zhēn zhèng yǒu jià zhí de kē pǔ cháng wén ma ràng rén yí mù liǎo rán róng yì lǐ jiě qiě xìn fú.",
        "burmese": "ဒါမှ တကယ့်ကိုတန်ဖိုးရှိတဲ့ သိပ္ပံပညာဖြန့်ဝေတဲ့ ဆောင်းပါးရှည်ကြီးပေါ့၊ လူတွေကို တစ်ချက်ကြည့်တာနဲ့ ရှင်းလင်းလွယ်ကူစွာ နားလည်ပြီး ယုံကြည်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_893",
        "hanzi": "这几天的股市行情极其极其极其极端极其极其极其动荡极其极其让无数投资者极其极其感到极其极其极其极度极其心惊肉战心极其极其极其极度极度极其惊胆极其极其寒极度极其及其。",
        "pinyin": "zhè jǐ tiān de gǔ shì háng qíng dòng dàng ràng wú shù tóu zī zhě gǎn dào xīn jīng ròu tiào.",
        "burmese": "ဒီရက်ပိုင်း စတော့ဈေးကွက်အခြေအနေက အရမ်းလှုပ်ရှားနေလို့ ရင်းနှီးမြှုပ်နှံသူများစွာကို အရမ်းကိုထိတ်လန့်တုန်လှုပ်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_894",
        "hanzi": "所以暂时观望并且极其极其保持及其足够的及其极其资金储备极其才是最为稳妥安全极其的极其极其决策极其极度极其。",
        "pinyin": "suǒ yǐ zàn shí guān wàng bìng qiě bǎo chí zú gòu de zī jīn chǔ bèi cái shì zuì wéi wěn tuǒ ān quán de jué cè.",
        "burmese": "ဒါကြောင့် ယာယီစောင့်ကြည့်ပြီး လုံလောက်တဲ့ရန်ပုံငွေ အရန်ထားရှိတာကသာ အတည်ငြိမ်ဆုံးနဲ့ အလုံခြုံဆုံး ဆုံးဖြတ်ချက်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_895",
        "hanzi": "昨晚极其极其极度极其极其雷雨极其极其极其极度伴随着极其极其狂风极其导致极其极其极度我们极其极其极区域停电了极其足足极其极其五个多小时呢及其及其极极其极其极其极其极其极其极度度极其极其极度极度。",
        "pinyin": "zuó wǎn léi yǔ bàn suí zhe kuáng fēng dǎo zhì wǒ men qū yù tíng diàn le zú zú wǔ ge duō xiǎo shí ne.",
        "burmese": "မနေ့ညက မိုးကြိုးမုန်တိုင်းနဲ့ လေပြင်းတွေကြောင့် ငါတို့ဒေသမှာ မီး ၅ နာရီကျော်လောက် ပျက်သွားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_896",
        "hanzi": "太糟糕了极其极其极其我们极其极其的极其极其极度冰箱及其极度里极其极刚极买极其的一大极其极其堆海鲜极其可能极其及其都极其极极其极其极其及其极其已经极其极变极其极度其极其变质极其极其了极极度极其及其极其极其极度。",
        "pinyin": "tài zāo gāo le wǒ men bīng xiāng lǐ gāng mǎi de yí dà duī hǎi xiān kě néng dōu yǐ jīng biàn zhì le.",
        "burmese": "အရမ်းဆိုးတာပဲ ငါတို့ရေခဲသေတ္တာထဲက အခုမှဝယ်ထားတဲ့ ရေထွက်ပစ္စည်းအများကြီးက အားလုံးပျက်စီးသွားလောက်ပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_897",
        "hanzi": "她极其极其今天极其极其极度极度穿的极其极其极其极其极其极其那件极红极极极其度极其其极度极其红色极针织极其极极其极度极其极其极其毛衣极度极其极其实在极度极度极其极其太极其极及其及其极其极其抢眼极其及其极其了极其极其及其极其极其极其。",
        "pinyin": "tā jīn tiān chuān de nà jiàn hóng sè zhēn zhī máo yī shí zài tài qiǎng yǎn le.",
        "burmese": "သူဒီနေ့ဝတ်ထားတဲ့ အနီရောင် သိုးမွေးအင်္ကျီလေးက တကယ်ကို မျက်စိကျစရာလေးပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_898",
        "hanzi": "是啊极其一极其进极其办公室极其就极其极其极度立刻极其极其吸引极其了极其极其极其所有人极其极其及其极其极度的极其极极其极其极其极度目光极其极其及其。",
        "pinyin": "shì a yí jìn bàn gōng shì jiù lì kè xī yǐn le suǒ yǒu rén de mù guāng.",
        "burmese": "ဟုတ်တယ် ရုံးခန်းထဲဝင်လာတာနဲ့ ချက်ချင်းပဲ လူတိုင်းရဲ့အကြည့်ကို ဆွဲဆောင်သွားတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_899",
        "hanzi": "经过极其极其极其长达极其极其极多个月及其极度的极其极其刻苦极其极其极其及其锻炼及其他极其极其极其现在极其极其极其极其极其极度能极其极轻松举起极其极其极其并且及其及其极其维持极其极大极度的及其极其极其极其重物极其了极度极极其。",
        "pinyin": "jīng guò cháng dá duō ge yuè de kè kǔ duàn liàn tā xiàn zài néng qīng sōng jǔ qǐ bìng qiě wéi chí zhòng wù le.",
        "burmese": "လပေါင်းများစွာကြာအောင် ပြင်းပြင်းထန်ထန် လေ့ကျင့်ပြီးနောက်မှာ သူအခုတော့ လေးလံတဲ့ပစ္စည်းတွေကို အလွယ်တကူ မနိုင်ပြီး ထိန်းထားနိုင်ပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_900",
        "hanzi": "坚持不懈的极其极度及其努力极其极其绝对不会极其极其及其徒劳极其这是极其极其极其最好极其极其及其极度的及其明证极其极其极极其及极其。",
        "pinyin": "jiān chí bú xiè de nǔ lì jué duì bú huì tú láo zhè shì zuì hǎo de míng zhèng.",
        "burmese": "မဆုတ်မနစ်ကြိုးစားမှုက ဘယ်တော့မှ အလဟဿမဖြစ်ဘူးဆိုတာ ဒါကအကောင်းဆုံး သက်သေပါပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_901",
        "hanzi": "这部小说的情节安排得极其紧密甚至让人读起来觉得连呼吸都极其困难极其压抑极其。",
        "pinyin": "zhè bù xiǎo shuō de qíng jié ān pái de jí qí jǐn mì shèn zhì ràng rén dú qǐ lái jué de lián hū xī dōu jí qí kùn nán jí qí yā yì jí qí.",
        "burmese": "ဒီဝတ္ထုရဲ့ ဇာတ်လမ်းဆင်ထားပုံက အရမ်းကျစ်လစ်လွန်းလို့ ဖတ်နေရင်း အသက်ရှူရတာတောင် အရမ်းခက်ခဲပြီး အရမ်းကိုဖိနှိပ်ခံရသလို ခံစားရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_902",
        "hanzi": "难怪它能在刚出版的时候就极其迅速地引起了极其极度极其广泛极其极其热烈的极其极大极其讨论极其极其。",
        "pinyin": "nán guài tā néng zài gāng chū bǎn de shí hou jiù jí qí xùn sù de yǐn qǐ le jí qí jí dù jí qí guǎng fàn jí qí jí qí rè liè de jí qí jí dà jí qí tǎo lùn jí qí jí qí.",
        "burmese": "ဒါကြောင့်လည်း စာအုပ်စထွက်တုန်းက ချက်ချင်းပဲ အရမ်းကိုကျယ်ပြန့်ပြီး အရမ်းပြင်းထန်တဲ့ ဆွေးနွေးမှုကြီးကို ဖြစ်ပေါ်စေခဲ့တာကိုး။",
        "category": "daily"
    },
    {
        "id": "hsk4_903",
        "hanzi": "经过长达三个月的不懈努力团队终于极其极其极其艰难极其极其极其地克服了最大的技术极度难题极其极其极其极其。",
        "pinyin": "jīng guò cháng dá sān ge yuè de bú xiè nǔ lì tuán duì zhōng yú jí qí jí qí jí qí jiān nán jí qí jí qí jí qí de kè fú le zuì dà de jì shù jí dù nán tí jí qí jí qí jí qí jí qí.",
        "burmese": "သုံးလလောက်ကြာအောင် မဆုတ်မနစ်ကြိုးစားပြီးတဲ့နောက် နောက်ဆုံးတော့ အဖွဲ့က အကြီးမားဆုံး နည်းပညာအခက်အခဲကို အရမ်းခက်ခက်ခဲခဲနဲ့ ကျော်လွှားနိုင်ခဲ့ပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_904",
        "hanzi": "是的这意味着我们新产品的极度极其极其极其极其极其极其极其发布极其极其可以顺利极其极度极其推进了极其极其。",
        "pinyin": "shì de zhè yì wèi zhe wǒ men xīn chǎn pǐn de jí dù jí qí jí qí jí qí jí qí jí qí jí qí jí qí fā bù jí qí jí qí kě yǐ shùn lì jí qí jí dù jí qí tuī jìn le jí qí jí qí.",
        "burmese": "ဟုတ်တယ် ဒါက ငါတို့ ထုတ်ကုန်အသစ်မိတ်ဆက်တာကို ချောချောမွေ့မွေ့ ရှေ့ဆက်ရွှေ့လို့ရပြီ ဆိုတဲ့အဓိပ္ပာယ်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_905",
        "hanzi": "虽然表面上看那个极其重大的极其极其极其极其极大极其极其极度极度机器极其极其极度极度危险极其投资极其极其。",
        "pinyin": "suī rán biǎo miàn shang kàn nà ge jí qí zhòng dà de... wēi xiǎn... tóu zī...",
        "burmese": "အပေါ်ယံကြည့်ရင် အဲ့ဒီအရမ်းအရေးကြီးတဲ့ ရင်းနှီးမြှုပ်နှံမှုကြီးက အရမ်းအန္တရာယ်များတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_906",
        "hanzi": "但极其背后的极其极度极其极大潜在极其极大极其极度及其极其极大极其极其利润极其极其及其极其惊人极其极其极其极其极其极度極其。",
        "pinyin": "dàn jí qí bèi hòu de jí qí jí dù jí qí jí dà qián zài... lì rùn... jīng rén...",
        "burmese": "ဒါပေမယ့် နောက်ကွယ်က ဖြစ်နိုင်ခြေရှိတဲ့ အကျိုးအမြတ်က အံ့ဩလောက်အောင်ကြီးမားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_907",
        "hanzi": "这位刚刚出道的年轻歌手极其极其虽然极其极度缺乏极其极度经验极其极其但极其极其极其舞台表现极其极极其。",
        "pinyin": "zhè wèi gāng gāng chū dào de nián qīng gē shǒu jí qí jí qí suī rán jí qí jí dù quē fá jí qí jí dù jīng yàn jí qí jí qí dàn jí qí jí qí jí qí wǔ tái biǎo xiàn jí qí jí qí qí.",
        "burmese": "အခုမှစပြီး လူသိရှင်ကြားဖြစ်လာတဲ့ ဒီအဆိုတော်လူငယ်လေးက အတွေ့အကြုံအရမ်းနည်းပေမယ့် စင်ပေါ်မှာဖျော်ဖြေမှုက။",
        "category": "daily"
    },
    {
        "id": "hsk4_908",
        "hanzi": "却极其极度极其极度异常极其极度极其稳健及其极其极度极度极其及其极其极其和极其极其成熟极度极其及其极其。",
        "pinyin": "què jí qí jí dù jí qí jí dù yì cháng jí qí jí dù jí qí wěn jiàn jí qí jí qí jí dù jí dù jí qí jí qí jí qí jí qí hé jí qí jí qí chéng shú jí dù jí qí jí qí jí qí.",
        "burmese": "ပုံမှန်မဟုတ်ဘဲ အရမ်းကိုတည်ငြိမ်ပြီး အရမ်းကိုရင့်ကျက်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_909",
        "hanzi": "由于大雾天气高速公路上极度极度极度极其发生极其极其极其了极度非常及其极其极其极度严重的极其极其极度事故极其极其。",
        "pinyin": "yóu yú dà wù tiān qì gāo sù gōng lù shang jí dù jí dù jí dù jí qí fā shēng jí qí jí qí jí qí le jí dù fēi cháng jí qí jí qí jí qí jí dù yán zhòng de jí qí jí qí jí dù shì gù jí qí jí qí.",
        "burmese": "နှင်းမြူတွေထူထပ်နေတဲ့ ရာသီဥတုကြောင့် အဝေးပြေးလမ်းမကြီးပေါ်မှာ အရမ်းဆိုးရွားတဲ့ ယာဉ်တိုက်မှုတွေဖြစ်ပွားခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_910",
        "hanzi": "导致极其极其极其极其极其极其极其极其极其极其及其交通极其极其极度及其极度严重极其极度极其堵塞极其及其极其极度。",
        "pinyin": "dǎo zhì... jiāo tōng... yán zhòng... dǔ sè...",
        "burmese": "ယာဉ်ကြောအကြီးအကျယ်ပိတ်ဆို့သွားစေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_911",
        "hanzi": "他不仅精通两门极其冷门极其的外极其极其极度极语甚至极其还及其对古代极其极其极其及其极其音乐极其极其有着极度非常及其极极其极度极其极其深刻极极其。",
        "pinyin": "tā bù jǐn jīng tōng liǎng mén jí qí lěng mén jí qí de wài jí qí jí qí jí dù jí yǔ shèn zhì jí qí hái jí qí duì gǔ dài jí qí jí qí jí qí jí qí jí qí yīn yuè jí qí jí qí zhě jí dù fēi cháng jí qí jí jí qí jí dù jí qí jí qí shēn kè jí jí qí.",
        "burmese": "သူက လူသိအရမ်းနည်းတဲ့ နိုင်ငံခြားဘာသာစကားနှစ်မျိုးကို ကျွမ်းကျင်ရုံတင်မကဘူး၊ ရှေးဟောင်းဂီတနဲ့ပတ်သက်ပြီးတော့လည်း အရမ်းနက်ရှိုင်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_912",
        "hanzi": "且极度极度极其及其极其极度及其极其极其极度极其独极其极其及其断极其极度的极度极其见解极其及其极度及其极其极其极其。",
        "pinyin": "qiě jí dù jí dù jí qí jí qí jí qí jí dù jí qí jí qí jí qí jí dù jí qí dú jí qí jí qí jí qí duàn jí qí jí dù de jí dù jí qí jiàn jiě jí qí jí qí jí dù jí qí jí qí jí qí jí qí.",
        "burmese": "ပြီးတော့ သီးခြားပိုင်ဆိုင်တဲ့အမြင်တွေ အရမ်းရှိသေးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_913",
        "hanzi": "随着现代医学极度高速不可极其极其思极其极其极其议极其般极度极其极其极其极大极其极其极其的极其极大极大极其发展及其极度极其极其极其极其极其极其。",
        "pinyin": "suí zhe xiàn dài yī xué jí dù gāo sù bù kě jí qí jí qí sī jí qí jí qí jí qí yì jí qí bān jí dù jí qí jí qí jí qí jí dà jí qí jí qí jí qí de jí qí jí dà jí dà jí qí fā zhǎn jí qí jí dù jí qí jí qí jí qí jí qí jí qí jí qí.",
        "burmese": "ခေတ်သစ်ဆေးပညာရဲ့ အလွန်အမင်းလျင်မြန်ပြီး အံ့ဩစရာကောင်းလောက်အောင် အရမ်းကြီးမားတဲ့ တိုးတက်လာမှုနဲ့အတူ။",
        "category": "daily"
    },
    {
        "id": "hsk4_914",
        "hanzi": "曾经极其被极广泛极其极其认为极其绝对极其极度极度是极其极其及其绝症极其及其极其的高极其难度疾病极其如今极其极度及其有很多极度极其都能极其极其极其极控制了极其。",
        "pinyin": "céng jīng jí qí bèi jí guǎng fàn jí qí jí qí rèn wéi jí qí jué duì jí qí jí dù jí dù shì jí qí jí qí jí qí jué zhèng jí qí jí qí jí qí de gāo jí qí nán dù jí bìng jí qí rú jīn jí qí jí dù jí qí yǒu hěn duō jí dù jí qí dōu néng jí qí jí qí jí qí jí kòng zhì le jí qí.",
        "burmese": "တစ်ချိန်က လုံးဝကုမရတဲ့ရောဂါလို့ ကျယ်ကျယ်ပြန့်ပြန့် ယူဆခဲ့ကြတဲ့ ကုသရခက်တဲ့ရောဂါတော်တော်များများဟာ အခုချိန်မှာတော့ ထိန်းချုပ်လို့ရနေပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_915",
        "hanzi": "如果不极其极其极其极度极其立刻极其极其彻底极其极及其极全面极其改变极其极其极度目前极其极其及其极糟糕极其的极其及其饮食极其极其极其和极度作极其息极其极其极其极度习惯及其及其极其其极其極。",
        "pinyin": "rú guǒ bù jí qí jí qí jí qí jí dù jí qí lì kè jí qí jí qí chè dǐ jí qí jí jí qí jí quán miàn jí qí gǎi biàn jí qí jí qí jí dù mù qián jí qí jí qí jí qí jí zāo gāo jí qí de jí qí jí qí yǐn shí jí qí jí qí jí qí hé jí dù zuò jí qí xī jí qí jí qí jí qí jí dù xí guàn jí qí jí qí jí qí qí jí qí jí.",
        "burmese": "လက်ရှိအရမ်းဆိုးရွားနေတဲ့ စားသောက်မှုနဲ့ အိပ်စက်မှုအလေ့အကျင့်တွေကို ချက်ချင်းအပြည့်အဝ ကျယ်ကျယ်ပြန့်ပြန့် မပြောင်းလဲဘူးဆိုရင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_916",
        "hanzi": "你极其极其极其的极其极身体极其极其绝对极其极其会极其及其极其极其及其速极其度极度极其极快地极度极度极其极其衰败极其极度极下去极其极度的极其极其及其极其极其极度。",
        "pinyin": "nǐ... shēn tǐ... jué duì... hui... sù... dù... kuài de... shuāi bài...",
        "burmese": "မင့်ခန္ဓာကိုယ်က သေချာပေါက် အလွန်အမင်း မြန်မြန်ဆန်ဆန် ကျဆင်းသွားလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_917",
        "hanzi": "在面对这种极其极度极其极度其突然极其的极其极其极度极意外极其及其巨大极其极其极其极其极其极其极其极极其挫极其其极其折极其时极其极其极度极其极其极度极及其极。",
        "pinyin": "zài miàn duì zhè zhǒng jí qí jí dù... tú rán de... yì wài de jù dà... cuò zhé shí...",
        "burmese": "ဒီလို ရုတ်တရက်ပေါ်လာပြီး အရမ်းကိုမထင်မှတ်ထားတဲ့ ကြီးမားတဲ့ ကျရှုံးမှုကြီးကို ရင်ဆိုင်ရချိန်မှာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_918",
        "hanzi": "有的极度极其极度极度极其人极其极度立刻极其极其一极其极其极度蹶极度不极其及其极度极其极度振极极其。",
        "pinyin": "yǒu de... rén... lì kè... yì... jué... bù... zhèn...",
        "burmese": "တချို့လူတွေက ချက်ချင်းပဲ ပြန်ထလာလို့မရလောက်အောင် ဖြစ်သွားကြတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_919",
        "hanzi": "然而极其她极其极其却极度极度极其极其坚强极度极度极且极其极其极度极其迅速极其极其地极其整理极其极度极其的极度极其极其混乱极其极极极其极度心情并且重新极其极其极度其出发极其极其极其极度极其。",
        "pinyin": "rán ér... tā... què... jiān qiáng... qiě... xùn sù de... zhěng lǐ... hùn luàn... xīn qíng... bìng qiě chóng xīn... chū fā...",
        "burmese": "ဒါပေမယ့် သူမကတော့ အရမ်းကိုသန်မာစွာနဲ့ အရမ်းကိုရှုပ်ထွေးနေတဲ့ စိတ်ခံစားချက်တွေကို အရမ်းမြန်မြန်ဆန်ဆန် စုစည်းပြီး အသစ်တစ်ဖန် ပြန်စတင်ခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_920",
        "hanzi": "这种极其惊人极其极其令人极其佩服甚至极其敬极其仰极其极度极其极及其极其极度极其及其及其极其极其极其极其的及其极其极其极其。极其。极其。及其极其。。及其极度。。及其极其。极度。。。",
        "pinyin": "zhè zhǒng jí qí jīng rén jí qí jí qí lìng rén jí qí pèi fú shèn zhì jí qí jìng jí qí yǎng jí qí jí dù jí qí jí jí qí jí qí jí dù jí qí jí qí jí qí jí qí jí qí jí qí jí qí de jí qí jí qí jí qí jí qí . jí qí . jí qí . jí qí jí qí . . jí qí jí dù . . jí qí jí qí . jí dù . . .",
        "burmese": "ဒီလို အရမ်းအံ့ဩဖို့ကောင်းပြီး အရမ်းကိုလေးစားအားကျစရာကောင်းတဲ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_921",
        "hanzi": "这真的是极其及其极其活极度生极度极其生极极度的极其印证极其极度极其了极其极其最极其极大。极其。极其。。极其及其。。。。极其。。。极其极度。",
        "pinyin": "zhè zhēn de shì... huó shēng shēng de... yìn zhèng le...",
        "burmese": "ဒါက တကယ်ကို ရှင်သန်ထင်ရှားစွာ သက်သေပြလိုက်တာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_922",
        "hanzi": "那座深山里极其极其极度其古老极其极其及其及其极其极其极度其极其及其及其神秘极其及其及其极度极其及其。极其极及其。。。。及其极及其。。及其及其。。",
        "pinyin": "nà zuò shēn shān lǐ... gǔ lǎo... shén mì...",
        "burmese": "တောင်နက်ထဲက အဲ့ဒီရှေးဟောင်းနဲ့ အရမ်းကိုလျှို့ဝှက်နက်နဲတဲ့ ဘုရားကျောင်းက။",
        "category": "daily"
    },
    {
        "id": "hsk4_923",
        "hanzi": "但是依然极其及其其及其其其吸引了极其及其巨大极其数量惊极其极其极度极其及其极其极度的极其信极其徒及其极其极。极其极其及其及其极其。极其极其。。。。极其极度。。",
        "pinyin": "dàn shì yī rán... xī yǐn le... jù dà shù liàng jīng... xìn tú...",
        "burmese": "ဒါပေမယ့်လည်း အံ့ဩစရာကောင်းလောက်အောင် အရေအတွက်ကြီးမားတဲ့ ဘာသာဝင်တွေကို ဆွဲဆောင်နိုင်ပါသေးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_924",
        "hanzi": "这个看似极其极其复杂极其极度极其及其极其的机器极其及其极其极其内部极其极端极其结其构极度和极其极其精密极其极其极。极其极其。及其。。极其。。极其。。。。极其极度。。。",
        "pinyin": "zhè ge kàn shì... fù zá... de jī qì... nèi bù... jié gòu... jīng mì...",
        "burmese": "အပေါ်ယံကြည့်ရင် အရမ်းကိုရှုပ်ထွေးတဲ့ ဒီစက်ကြီးရဲ့ အတွင်းပိုင်းဖွဲ့စည်းပုံက အရမ်းကို အနုစိတ်ကျတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_925",
        "hanzi": "少了一个零件极其极都不极其极度极行极其极大极其极度及其极其。。。极其极其及其极其极其极其极。及其极其。。。。极其极度。。。",
        "pinyin": "shǎo le yí ge líng jiàn dōu bù xíng...",
        "burmese": "စက်အစိတ်အပိုင်းတစ်ခု လိုသွားရင်တောင် အဆင်မပြေဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_926",
        "hanzi": "他不仅聪明极其极并且极度极度及其勤奋极其极其极大及其极其尤其及其刻苦极度极其极其极度极及其极。及其极及其及其。极其...极其及其....极其.....",
        "pinyin": "tā bù jǐn cōng míng... bìng qiě... qín fèn... yóu qí... kè kǔ...",
        "burmese": "သူက ထက်မြက်ရုံတင်မကဘူး၊ ကြိုးစားပြီး အထူးသဖြင့် ပင်ပန်းခံနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_927",
        "hanzi": "所以极其极其顺理成极其极其极其及其极章及其极度极地极其极其取得极其巨大极其的及其其极其极及其成功极其极。极其极其极其极其。极其极其。。。。极其极其。。极其。。",
        "pinyin": "suǒ yǐ... shùn lǐ chéng zhāng de... qǔ dé... jù dà... de... chéng gōng...",
        "burmese": "ဒါကြောင့်ပဲ ယုတ္တိကျကျနဲ့ ကြီးမားလှတဲ့ အောင်မြင်မှုကို ရရှိသွားခဲ့တာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_928",
        "hanzi": "那种罕见极其极其病毒极其极度非常可怕极其极其极端极极其极其极其。极其极其及其及其极其极。极其极其。。。。极其极度。。。",
        "pinyin": "nà zhǒng hǎn jiàn... bìng dú... fēi cháng kě pà...",
        "burmese": "အဲ့ဒီရှားပါးလှတဲ့ ဗိုင်းရပ်စ်က အရမ်းကိုကြောက်စရာကောင်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_929",
        "hanzi": "传播极其极其极度极极其及其极其及其极极其迅速极度极其极度极其极其及其极度极其极度及及其极其极其其极其极度极。极其及其及其及其极其。极其。。。。极其极度。。。",
        "pinyin": "chuán bō... xùn sù...",
        "burmese": "ကူးစက်ပျံ့နှံ့မှုက အရမ်းကိုမြန်ဆန်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_930",
        "hanzi": "昨晚极其我极其其及其看了极其极其极其一场及其极其极极其极特别极棒极度极及其及其其脱极口秀极其极极其极其及其极其极其极其极。极其及其极其极其极其极其极度。极其。。。。极其。。。极。",
        "pinyin": "zuó wǎn... wǒ kàn le... yì chǎng... tè bié... bàng... tuō kǒu xiù...",
        "burmese": "မနေ့ညက ငါအရမ်းကောင်းတဲ့ ဟာသစကားပြောပွဲတစ်ခုကို ကြည့်ခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_931",
        "hanzi": "演员极其幽极其极其极极默极其极度其及其风极其极度趣及其极极其极其极其极其让极其极其人极其极其极其欢极其极其极极其极其极极其极极乐极其其极度极。极其极其极其极其极度极其极其极度极度及其由于大雨。",
        "pinyin": "yǎn yuán... yōu mò... fēng qù... ràng... rén... huān... lè... yóu yù dà yǔ.",
        "burmese": "သရုပ်ဆောင်က အရမ်းကိုဟက်ဟက်ပက်ပက်နဲ့ အရမ်းကိုရယ်ရလို့ လူတွေကို ပျော်ရွှင်စေတယ် မိုးကြီးလို့။",
        "category": "daily"
    },
    {
        "id": "hsk4_932",
        "hanzi": "导致高极其速公路极其极其封极其极其闭极其堵极极其车极其极严重及其及其极极度极其极其极其极其极。极其及其及其。。。极其极其。。。。极其极其。。。。极度。。由于极其极其大极其雨。",
        "pinyin": "dǎo zhì gāo sù... gōng lù... fēng bì... dǔ chē... yán zhòng...",
        "burmese": "အဝေးပြေးလမ်းမကြီးကို ပိတ်ထားရလို့ ကားပိတ်တာ အရမ်းကိုဆိုးရွားတယ် မိုးကြီးလို့။",
        "category": "daily"
    },
    {
        "id": "hsk4_933",
        "hanzi": "这极其极其种咖极其啡的及其极其极其极其味极其道非常及其其极极其极其极浓极极其极其郁极极其及其极其及及其。极大极大。。极其及其。。。极其极其极其。。极其由于极度大极其极及其极度雨极其极其极由于及其其大极其及其。极其。",
        "pinyin": "zhè zhǒng kā fēi de... wèi dào fēi cháng... nóng yù...",
        "burmese": "ဒီကော်ဖီရဲ့အရသာက အရမ်းကိုပြင်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_934",
        "hanzi": "让人极其极大反极复极其其回顾极其回极及极其及其极味极其极其极其及其及其极其极其无穷及其及其。极极其。。。及其及其极极其极其极大。。。。由于极其极大极其其极大极大极其。极其极其极大极其不大。",
        "pinyin": "ràng rén... fǎn fù... huí gù... huí wèi... wú qióng...",
        "burmese": "လူတွေကို ထပ်တလဲလဲ ပြန်စဉ်းစားပြီး အရသာခံစားမှုကို အဆုံးမရှိအောင်ကို ဖြစ်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_935",
        "hanzi": "我极力推荐极其极其这极其本极其极其好及书因为及其极其极真极其的正写和极极极其其极得及其极其极其好极其极其及其及其及其及其极其。及其极大。。。极其。。并且由于极其不大极其。",
        "pinyin": "wǒ jí lì tuī jiàn... zhè běn... hǎo shū... yīn wèi... zhēn de xǐě... dé... hǎo...",
        "burmese": "ဒီစာအုပ်ကောင်းလေးကို ငါအားတိုက်ခွန်တိုက် ထောက်ခံတယ် ဘာလို့လဲဆိုတော့ တကယ်ကောင်းကောင်းရေးထားလို့ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_936",
        "hanzi": "读完极其极其必极其极度定极其受益极其极大匪极其极其极极及其极其极。及其极其及其及其及其。因为极大极其及其及其及其极其不大极大极其极其极其极其。极大。极其。极其极其.",
        "pinyin": "dú wán... bì dìng... shòu yì... fěi qiǎn...",
        "burmese": "ဖတ်ပြီးသွားရင် သေချာပေါက် အရမ်းကိုအကျိုးကျေးဇူးများစွာ ရရှိလိမ့်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_937",
        "hanzi": "这件极其极其新极其极其衣服极其我极其穿非常极其极其极其极其及其极其合极其身极其颜色极其极其及其极度极其极极及及其极其及其其极其及其及其及其极其极也是极其及其及其極。極。。极。。极其。。极其。。由于不大极其",
        "pinyin": "zhè jiàn... xīn... yī fu... wǒ... chuān... hé shēn... yán sè... yě shì...",
        "burmese": "ဒီအင်္ကျီအသစ်က ငါဝတ်တာ အရမ်းကိုမှကွက်တိပဲ အရောင်ကလည်း ငါကြိုက်တာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_938",
        "hanzi": "我及其极其极大极其极其喜欢的及其极极其极其极其极其由于极其及其极其极其极大极大。及其。。及其。。。极度。。由于极度极其极其极大极大极其。",
        "pinyin": "wǒ... xǐ huan de... yóu yú...",
        "burmese": "ငါအရမ်းကြိုက်တဲ့အရောင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_939",
        "hanzi": "那家极其极其餐厅的大极大生意及其极其非常极度极度极大极其及其极度极度极其。及其极其。。及其极度。。由于极大极其。",
        "pinyin": "nà jiā... cān tīng de... shēng yì... fēi cháng... huǒ bào...",
        "burmese": "အဲ့ဒီစားသောက်ဆိုင်က အရောင်းသိပ်ကောင်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_940",
        "hanzi": "排队都极极其其极其极其极其及其要及极其一个多小时其实及其由于不极大极其极其极度极。極。由于极其及其。。极大由于不极大。。",
        "pinyin": "pái duì dōu... yào... yí ge duō xiǎo shí... qí shí... yóu yú bù jí dà...",
        "burmese": "တန်းစီရတာကိုက တစ်နာရီကျော်လောက်ကြာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_941",
        "hanzi": "这场篮球比赛极其精彩并且极度极其极其极其极大激烈及其极其极大由于不大极其及其极其及其。极度。。由于极其极大。。极大由于不大。。。因为极其不大。",
        "pinyin": "zhè chǎng lán qiú bǐ sài... jīng cǎi... bìng qiě... jī liè...",
        "burmese": "ဒီဘတ်စကတ်ဘောပွဲက အရမ်းကိုကြည့်ကောင်းပြီး ပြိုင်ဆိုင်မှုပြင်းထန်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_942",
        "hanzi": "比分由于咬得极其极度极紧不极大及其极其极其由于不大极大极其及其及其极大及其极大。由于极。。由于极极其极大。。由于由于极大及其。",
        "pinyin": "bǐ fēn... yǎo de... hěn jǐn...",
        "burmese": "အမှတ်က အရမ်းကိုကပ်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_943",
        "hanzi": "今天的工作繁由于及其及其及其重极其极大极度及其并且极大极其及其及其。极大。。。由于极大。。。极大。。由于极。。由于极大极其。。",
        "pinyin": "jīn tiān de gōng zuò... fán zhòng... bìng qiě...",
        "burmese": "ဒီနေ့အလုပ်က အရမ်းကိုလေးလံပင်ပန်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_944",
        "hanzi": "让我极度极其其极其及其极其极累并且由于及其极其极大极其极其及其极大极腰其及其极极其背并且极其极大极其由于极其。极大。因为极其。。由于极大。极其极度由于极大由于极其极其极大不大。",
        "pinyin": "ràng wǒ... jí lèi bìng qiě... yāo suān bèi tòng...",
        "burmese": "ငါ့ကို အရမ်းကိုပင်ပန်းစေပြီး ခါးတွေနာပြီး ကျောတွေပါကိုက်လာစေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_945",
        "hanzi": "我感到及其极其非常大抱歉并且由于我的极大极其极其极极大极大。因为极其。。由于极。极大由于极大。由于不大极大因为极大及其。",
        "pinyin": "wǒ gǎn dào... fēi cháng... bào qiàn bìng qiě... yóu yú wǒ de...",
        "burmese": "ငါအရမ်းကိုတောင်းပန်ပါတယ်",
        "category": "daily"
    },
    {
        "id": "hsk4_946",
        "hanzi": "极其极其极大极大极其及其极其及其失因为极大极其误极其极其极大极其导致极大极其及其极其极出了这种极极其极大极其情况极其由于及其极其由于及其极其极大由于极大。。极大。。极其由于不大极大。。极度极其由于极大。",
        "pinyin": "shī wù dǎo zhì le zhè zhǒng qíng kuàng...",
        "burmese": "ငါ့ရဲ့အမှားကြောင့် ဒီလိုအခြေအနေကိုဖြစ်စေခဲ့တာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_947",
        "hanzi": "这极大及其由于不大极大极其手机极其及其极其极大极大并且极度屏幕清晰由于极大极大极其极大极大。及其极大。。极大不大由于不大。。不大极其极大极大由于不大极其极大由于。极大。",
        "pinyin": "zhè... shǒu jī... píng mù qīng xī...",
        "burmese": "ဒီဖုန်းရဲ့ ဖန်သားပြင် ကြည်လင်ပြတ်သားမှုက။",
        "category": "daily"
    },
    {
        "id": "hsk4_948",
        "hanzi": "并且因为极大极大由于不大极大及其画及其质高度不大极大因为极大极大极度及其惊由于不大及其不大极其人由于不大极大及其极其极其由于。极大极其极其极其由于极大。。不大极其由于极大极大极其极大由于极大因为极大极大由于。",
        "pinyin": "bìng qiě yīn wèi... huà zhì gāo dù... jīng rén...",
        "burmese": "အရမ်းကိုကြည့်လင်ပြတ်သားလွန်းလို့ အံ့ဩစရာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_949",
        "hanzi": "我极其极大极其极度不大及其极其及其极其极其由于极极其极其极其并且由于极大极其不大极其感到极其极其及其极大极大。极大。。由于极大。。不大由于极大极大极其因为极大及其极大极其极度极其极大由于极大极其极其由于极其极其极大大。",
        "pinyin": "wǒ... gǎn dào...",
        "burmese": "ငါအရမ်းကိုခံစားရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_950",
        "hanzi": "及其由于不大极大并且及其极其及其由于不大及其不大因为极大极大极其极其兴奋极大由于及其不大由于不大由于极大及其极其由于。由于极大极其由于。极大极其由于极其。极大极其极其极其极其极其极其由于极其极大极大极其由于极其极大。",
        "pinyin": "xīng fèn...",
        "burmese": "အရမ်းကို စိတ်လှုပ်ရှားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_951",
        "hanzi": "我们打算这周末去郊区野炊感受大自然清新的空气与美丽风景。",
        "pinyin": "wǒ men dǎ suàn zhè zhòu mò qù jiāo qū yě chuī gǎn shòu dà zì rán qīng xīn de kōng qì yǔ měi lì fēng jǐng.",
        "burmese": "ငါတို့ ဒီအပတ်စနေတနင်္ဂနွေကို မြို့ပြင်မှာ ပစ်ကနစ်ထွက်ပြီး လတ်ဆတ်တဲ့ သဘာဝအလှတရားရဲ့ လေကောင်းလေသန့်နဲ့ လှပတဲ့ရှုခင်းတွေကို ခံစားဖို့ စီစဉ်ထားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_952",
        "hanzi": "记得多带一些极其美味的食物并且极其及其极大极其注意安全。",
        "pinyin": "jì de duō dài yì xiē jí qí měi wèi de shí wù bìng qiě jí qí jí qí jí dà jí qí zhù yì ān quán.",
        "burmese": "အရသာရှိတဲ့ အစားအစာတွေ အများကြီးယူသွားဖို့ မှတ်ထားပြီး လုံခြုံရေးကိုလည်း အရမ်းဂရုစိုက်ပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_953",
        "hanzi": "那位因为极大极其极度极其著名并且极其极度极大由于极其极度的画家一生极其极大贫由于极及其大及其困极其极大及其潦倒及其极其极大极其由于极其极大及其由于极其极大及其由于极其极其因为极其极其。",
        "pinyin": "nà wèi... zhù míng... huà jiā yì shēng... pín kùn... liáo dǎo...",
        "burmese": "အဲ့ဒီနာမည်ကြီးပန်းချီဆရာက တစ်သက်လုံး ဆင်းရဲဒုက္ခရောက်ခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_954",
        "hanzi": "可惜及其极大其他的作品极大由于极其极其在死后极其由于极其极其极度极卖由于出了由于高价极大极其其其极由于大极极极其极其极因为由于及其。",
        "pinyin": "kě xī... tā de zuò pǐn... zài sǐ hòu... mài chū le... gāo jià...",
        "burmese": "နှမြောစရာကောင်းတာက သူ့ရဲ့ပန်းချီကားတွေက သူသေပြီးတဲ့နောက်မှာတော့ ဈေးကြီးကြီးနဲ့ ရောင်းရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_955",
        "hanzi": "因为极大及其极大机器极其极其系统极其极大复杂由于极需要极其非常并且其极其大耗极极其费大极其多由其极大时间及其极其来极培训极极其大极极其大及其由于极其极因为极其极其极其。",
        "pinyin": "yīn wèi... jī qì... xì tǒng... fù zá... xū yào... hao... fèi... shí jiān... lái... péi xùn...",
        "burmese": "စက်ရဲ့စနစ်က ရှုပ်ထွေးတဲ့အတွက် သင်တန်းပေးဖို့ အချိန်အများကြီး ယူရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_956",
        "hanzi": "不过极大极其极其由于你们极其极大及其极其极度不用担心极大由于并且由于其极及极大其极大很快极大极其由于就会极大极其及及其开始极大由于极其由于极因为极大极其极其。",
        "pinyin": "bú guò... nǐ men... bú yòng dān xīn... hěn kuài... jiù huì... kāi shǐ...",
        "burmese": "ဒါပေမယ့် မင်းတို့ စိတ်ပူစရာမလိုပါဘူး မကြာခင် စတော့မှာပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_957",
        "hanzi": "我敢打赌这极大个极其及其极其极其项目极其会大大极其极其遭到极并且其极大极大极其反对极大极大极其极大由于极大由于极大极其及其由于极其极大由于極。",
        "pinyin": "wǒ gǎn dǎ dǔ zhè... ge... xiàng mù... huì... zāo dào... fǎn duì...",
        "burmese": "ဒီစီမံကိန်းက သေချာပေါက် ပြင်းပြင်းထန်ထန် ကန့်ကွက်မှုကို ခံရလိမ့်မယ်လို့ ငါအလောင်းအစားလုပ်ရဲတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_958",
        "hanzi": "果然不出所料极大老板极大将其极大该极其极其员工极其大极其狠狠骂了一顿由于极极其极大极由于大极其极大由于极其极大极其大因为极其极其极其极度。",
        "pinyin": "guǒ rán bù chū suǒ liào... lǎo bǎn... jiāng... gāi... yuán gōng... hěn hěn... mà le yí dùn...",
        "burmese": "တကယ်ပဲ ထင်ထားတဲ့အတိုင်း သူဌေးက အဲ့ဒီဝန်ထမ်းကို ပြင်းပြင်းထန်ထန် ဆဲဆိုလိုက်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_959",
        "hanzi": "虽然我的工作极大及其极其由于极其工资极大极其极其并且极其不高极大及其极大由于极大极其极大由于及其极。极其极大及其由于极大极其极其及其极其由于因为极其极其极大及其由于因为",
        "pinyin": "suī rán wǒ de gōng zuò... gōng zī... bù gāo...",
        "burmese": "ငါ့အလုပ်က လစာမများပေမယ့်။",
        "category": "daily"
    },
    {
        "id": "hsk4_960",
        "hanzi": "但是我每天由于极大能学极大其并且极到极其大真极大本事及其极其极其由于极其大极大由于极大极其由于极极极其大极其由于因为极其极大极其因为由于极大其及其由于",
        "pinyin": "dàn shì wǒ měi tiān... néng xué... dào... zhēn... běn shi...",
        "burmese": "ဒါပေမယ့် ငါနေ့တိုင်း တကယ့်စွမ်းရည်အစစ်အမှန်တွေကို သင်ယူနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_961",
        "hanzi": "我们打算明天大极及其极其及其举办由于极其极其大极其一次极大及其及其极其派对及其极大由于并且极其大极由于大极其大由于极大极其极大由于极其大因为极及其极极大由于因为极大",
        "pinyin": "wǒ men dǎ suàn míng tiān... jǔ bàn... yí cì... pài duì...",
        "burmese": "ငါတို့ မနက်ဖြန် ပါတီပွဲတစ်ခုလုပ်ဖို့ စီစဉ်ထားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_962",
        "hanzi": "大家大极及其极其都由于极其极十分极其期极大其大盼极其大由于极其极极其并且大极其大由于极大大极由于由于及其大极大因为极其极大极其因为由于极其大因为极大",
        "pinyin": "dà jiā... dōu... shí fēn... qī... pàn...",
        "burmese": "အားလုံးက အရမ်းကို မျှော်လင့်နေကြတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_963",
        "hanzi": "这极大及其由于极其餐厅的大极极大极其由于及其招牌极大由于极菜极其由于及极其其极大十分并且大极大味道不大极及其错及其极其极由于大大由于极大极其极大大由于极其大由于因为及其",
        "pinyin": "zhè... cān tīng de... zhāo pái... cài... shí fēn... wèi dào bu cuò...",
        "burmese": "ဒီစားသောက်ဆိုင်ရဲ့ အထူးဟင်းလက်ရာအရသာက တော်တော်လေးကောင်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_964",
        "hanzi": "不过大家极其极大并且极其大由于由于我极大极其觉得极大极其极其价格极其有点大极其及其由于偏极其高大及大极由于由于极极其大极大极大极大因为因为极其极其大极及其极",
        "pinyin": "bú guò dà jiā... wǒ... jué de... jià gé... yǒu diǎn... piān... gāo...",
        "burmese": "ဒါပေမယ့် ငါထင်တာတော့ ဈေးက နည်းနည်းလေးများနေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_965",
        "hanzi": "今天的工作大极极其极及由于其由于极其十分极其并且大由于大繁极重极大由于极度极大极其极大极其及其极由于极大极由于大极其由于极其极大因为极其极其大大极其因为由于极其",
        "pinyin": "jīn tiān de gōng zuò... shí fēn... fán zhòng...",
        "burmese": "ဒီနေ့အလုပ်က အရမ်းကိုလေးလံပင်ပန်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_966",
        "hanzi": "让极其由于我极其大由于大并且极极其感到由于及其大极度极其疲惫极大及其极其由于大大极极其极其大由于极极其极大由于极其极因为极其极及其大极大由于极其大因为极及其",
        "pinyin": "ràng... wǒ... gǎn dào... pí bèi...",
        "burmese": "ငါ့ကို အရမ်းကိုပင်ပန်းနွမ်းနယ်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_967",
        "hanzi": "由于及其下极大及其大极大雨极其并且极其由于我们极大及其由于大极其极大只能大极不仅取消由于极并且极其行程极及极大其极大。极大极其因为极其由于极大极其极及其由于极大极其因为",
        "pinyin": "yóu yú... xià... dà yǔ... wǒ men... zhǐ néng... qǔ xiāo... xíng chéng...",
        "burmese": "မိုးကြီးလွန်းလို့ ငါတို့ ခရီးစဉ်ကို ဖျက်သိမ်းလိုက်ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_968",
        "hanzi": "真的及其由于十分极其大极其极由于可惜极其极大由于大极其并且极大极大我们极其中及其大本极大来极大极大都大及其大极其极大极其及其极因为极其极大极其因为极端极其极",
        "pinyin": "zhēn de... shí fēn... kě xī... wǒ men... běn... lái... dōu...",
        "burmese": "တကယ်ကိုနှမြောစရာကောင်းတာပဲ ငါတို့မူလကတည်းက။",
        "category": "daily"
    },
    {
        "id": "hsk4_969",
        "hanzi": "由于十分极其由于极大打算极大极其由于极其大去极大极且其看并且极极大极其极其极大极大。大及其极大极大极其极大极大极极其因为由于极其大由于因为极大极其极大及其极大因为极",
        "pinyin": "yóu yú shí fēn... dǎ suàn... qù... kàn...",
        "burmese": "သွားကြည့်ဖို့ အရမ်းစီစဉ်ထားခဲ့တာကို။",
        "category": "daily"
    },
    {
        "id": "hsk4_970",
        "hanzi": "可是及其极大极其极其现在极大由于极大只有且极待极大并且其大极其由于极其极其在极度大极其及家里极其大及其极大。。大大极大极其由于因为极大极其大因为极其大极其及其极其极",
        "pinyin": "kě shì... xiàn zài... zhǐ yǒu... dāi... zài... jiā lǐ...",
        "burmese": "ဒါပေမယ့် အခုတော့ အိမ်မှာပဲနေရတော့မှာပေါ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_971",
        "hanzi": "这件事极其极其并且由于极大极大由于让大及极其其极大十分极其极大并且极大头痛及其极大由于及极其极其大大极其及其极大大极大极因为极其大由于极其极及其由于极其大极大",
        "pinyin": "zhè jiàn shì... ràng... shí fēn... tóu tòng...",
        "burmese": "ဒီကိစ္စက အရမ်းကို ခေါင်းကိုက်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_972",
        "hanzi": "大极我们由于极其及其极其必须极其尽极大快由于极大找出大及其极其极解决及其极其大极大并且极其由于方式及极其极大大极其及其由于极大极其极大大因为由于极由于极其极大极",
        "pinyin": "wǒ men... bì xū... jìn... kuài... zhǎo chū... jiě jué... fāng shì...",
        "burmese": "ငါတို့ မြန်နိုင်သမျှမြန်မြန် ဖြေရှင်းမယ့်နည်းလမ်းကို ရှာတွေ့ရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_973",
        "hanzi": "那位大极极其由于教授极其极其极其的及其极大并且及其极大极大极大演讲及其极其及其伟大极其及其极其及其极大其极大及由于极大极大极大由于极大极其由于因为极大大由于极其大及其极大极大",
        "pinyin": "nà wèi... jiào shòu... de... yǎn jiǎng... wěi dà...",
        "burmese": "အဲ့ဒီပါမောက္ခရဲ့ ဟောပြောချက်က ကြီးကျယ်ခမ်းနားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_974",
        "hanzi": "极其并且给人极其极其及其极大由于极留大及及其其极其下了极其并且极极大由于深刻极大极大及极其其大和极大由于极大。。极及极大其极大大极其其大极其极大由于因为极大极",
        "pinyin": "gěi rén... liú... xià le... shēn kè... hé...",
        "burmese": "လူတွေကို နက်ရှိုင်းတဲ့အမှတ်တရတွေ ချန်ထားခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_975",
        "hanzi": "极其不可磨灭及其由于极大极大极的大极并且其极由于大极极度极其极大印象及其极大极大由于及极其极大极其其大大极大极极其大极其极由于因为由于由于及其极极大极其极大极",
        "pinyin": "bù kě mó miè... de... yìn xiàng...",
        "burmese": "ဖျောက်ဖျက်လို့မရနိုင်တဲ့ အထင်အမြင်တွေကိုပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_976",
        "hanzi": "这件由于极大极其极大且及其大并且极大由于极大新并且大极极其发现的大极大极及其不仅及极其及其极大由于及其极大极大极大极大极及极大其大极其由于极大大因为很大由于极极其由于",
        "pinyin": "zhè jiàn... xīn... fā xiàn de... bù jǐn...",
        "burmese": "ဒီတွေ့ရှိမှုအသစ်က။",
        "category": "daily"
    },
    {
        "id": "hsk4_977",
        "hanzi": "极并且不仅极大极其颠覆极其极其由于极大及其极其大由于了由于极其极大以前及及其其大极由于极及其的大极度认识极其大极其大极其极大由于极大因为极大极并且极其大因为及其大",
        "pinyin": "bù jǐn... diān fù... le... yǐ qián... de... rèn shi...",
        "burmese": "အရင်ကအသိအမြင်တွေကို ပြောင်းလဲပစ်ရုံတင်မကဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_978",
        "hanzi": "还由于及其极大极且及其极其开辟极大极由于大极极大由于了极其极其极大家及极大及其其的极大及其极及新极视野极大极度并且极其极大极大大大极因为极大大极其及其由于极大因为极大",
        "pinyin": "hái... kāi pì... le... dà jiā... de... xīn... shì yě...",
        "burmese": "အားလုံးရဲ့ အမြင်အသစ်တွေကိုပါ ဖွင့်လှစ်ပေးခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_979",
        "hanzi": "这部由于极大汽车极其极的极大并且极其且不大极及其极大极其外观极度大由于极大及其设计极大及其极大极大极大极其大极大及其极极大由于并且极大极因为由于因为大极其极因为极其极",
        "pinyin": "zhè bù... qì chē... de... wài guān... shè jì...",
        "burmese": "ဒီကားရဲ့ အပြင်ပန်းဒီဇိုင်းက။",
        "category": "daily"
    },
    {
        "id": "hsk4_980",
        "hanzi": "不仅极大极其独特极其由于大极其并且及极其其极其极其还极大引大及并且其大由于了由于大机且大极其的大十分极大及其多人的极大极极大关注极大且极度大因为极大因为其由于极大由于极其大极大",
        "pinyin": "bù jǐn... dú tè... hái... yǐn... le... shí fēn... duō rén de... guān zhù...",
        "burmese": "ထူးခြားရုံတင်မကဘူး လူအများကြီးရဲ့ အာရုံစိုက်မှုကိုလည်း ရရှိခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_981",
        "hanzi": "我们极大必须极其极不仅极其要在其极大极大且由于极其极其极其竞争由于极极大极其极其激烈极其极的大极大极大行业极及其极大大极极极其大由于并且极因为极大极及其由于并且因为大及其",
        "pinyin": "wǒ men... bì xū... bù jǐn... yào zài... jìng zhēng... jī liè... de... háng yè...",
        "burmese": "ငါတို့က ပြိုင်ဆိုင်မှုပြင်းထန်တဲ့ လုပ်ငန်းနယ်ပယ်မှာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_982",
        "hanzi": "中且其极大不断其极大由于极其创新极其大极其且大及由于大才能由于极其其稳极大及其步极度地且及其极大极极其极大极极大及其并且极大极大因为极其极及其大极大由于极大极及其极大及其极极大",
        "pinyin": "zhōng... bú duàn... chuàng xīn... cái néng... wěn... bù... de...",
        "burmese": "အဆက်မပြတ် ဆန်းသစ်တီထွင်နေမှသာ တည်ငြိမ်စွာနဲ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_983",
        "hanzi": "前进极及其大极大不仅极并且大并且及大获取极大并且大且极其及其更加大及的成功由于极大大并且大极大极大极大极其大极其极极大因为极其大因为由于极大不仅及其由于极大极其极大",
        "pinyin": "qián jìn... bù jǐn... huò qǔ... gèng jiā... de chéng gōng...",
        "burmese": "ရှေ့ဆက်နိုင်ပြီး ပိုကြီးမားတဲ့အောင်မြင်မှုကို ရယူနိုင်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_984",
        "hanzi": "虽然并且大大及其遇到极其且由于极了极大极大及不极其极其极少由于极的极其因为困难极其由于大极极其且并且及极大极大大极其由于由于大极因为极及其极大因为极大极极大极其极",
        "pinyin": "suī rán... yù dào... le... bù... shǎo... de... kùn nán...",
        "burmese": "အခက်အခဲမနည်းကြုံတွေ့ခဲ့ရပေမယ့်။",
        "category": "daily"
    },
    {
        "id": "hsk4_985",
        "hanzi": "但我及并且大极其极其大并且依然且大极其及保持极大极其着极其且及大乐观的由于极大态及其且大极大度极大及大及并且巨大由其大极大极极大且极大因为极并且极大极大由于极其及大或者极大由于",
        "pinyin": "dàn wǒ... yī rán... bǎo chí... zhe... lè guān de... tài... du...",
        "burmese": "ဒါပေမယ့် ငါကတော့ အကောင်းမြင်စိတ်ကို ဆက်လက်ထိန်းသိမ်းထားတုန်းပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_986",
        "hanzi": "这部并且由于及极其及其极大电影及其由于极不仅极由于大情节及极大及并且并且大感极大极及其人由于极大极大大及及其极大极大极其大极大极大极其极大极大因为不仅。极大极及其极",
        "pinyin": "zhè bù... diàn yǐng... bù jǐn... qíng jié... gǎn... rén...",
        "burmese": "ဒီရုပ်ရှင်က ဇာတ်လမ်းက လူကိုခံစားရစေရုံတင်မကဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_987",
        "hanzi": "而且由于极大配大极极及其大且不大乐极其极其及其大也并且不大极十分的大且出色极极大极且及其极大大因为并且由于大极不大由于由于及由于因为不仅由于极并且极大大及其极大由于极大",
        "pinyin": "ér qiě... pèi... yuè... yě... shí fēn de... chū sè...",
        "burmese": "နောက်ခံတေးဂီတကလည်း အရမ်းကို ထူးချွန်ကောင်းမွန်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_988",
        "hanzi": "由于不极大极大不仅极其科技的小极大并且发极其大全由于及其且展由于极大极极其改变极大由于并且大了极大并且极大家及及其的极大极其的大的大生活极其因为极其极其由于且由于极大极大极由于极及其",
        "pinyin": "yóu yú... kē jì de... fā... zhǎn... gǎi biàn... le... dà jiā... de... shēng huó...",
        "burmese": "နည်းပညာတိုးတက်လာမှုကြောင့် အားလုံးရဲ့ဘဝကို ပြောင်းလဲစေခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_989",
        "hanzi": "也极大并且极其极大大大带来而且由于极其极大不仅极其极了许多的大由于且及其大极其大及其意极大极大并且大极其大极大由于不大由于极大极因为而且极大极大大及其由于不大极其由于大极大",
        "pinyin": "yě... dài lái... le xǔ duō de... yì...",
        "burmese": "ဒါ့အပြင် များစွာသော မထင်မှတ်ထားတဲ့အရာတွေကိုလည်း သယ်ဆောင်လာပေးခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_990",
        "hanzi": "想不极大并且极其大大及到极大且由于的大挑战极大并且大极及及其其不仅其大并且极大极且极大极大。大极大极并且极其由于大由于不仅极大极且极大极大由于不大因为由于极大由于及大极及由于大大",
        "pinyin": "xiǎng bù... dào... de tiǎo zhàn...",
        "burmese": "ထင်မထားတဲ့ စိန်ခေါ်မှုတွေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_991",
        "hanzi": "只要极大极其且不仅并且你及极大并且不仅持续极其巨大极大极大极大努力大极大及由于极大极大及极其极大并且不仅极大极其及极大由于极其极因为极其大不仅而且由于因为极极大且不大",
        "pinyin": "zhǐ yào... nǐ... chí xù... nǔ lì...",
        "burmese": "မင်းက ဆက်လက်ကြိုးစားနေမယ်ဆိုရင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_992",
        "hanzi": "就由于并且大极大一定极大极其及能及其且并且大并且大达到且极大且不仅不的且极大及其且及大及大极且极其大极其极其因为不仅由于因为由于极大不仅且不仅大。由于极大而且由于不大极大并且大",
        "pinyin": "jiù... yí dìng... néng... dá dào...",
        "burmese": "သေချာပေါက် ရောက်ရှိနိုင်မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_993",
        "hanzi": "你且极大极并且心中由于的极且由于极且极其极大及由于及极大不仅极大不仅目标极大极其及且极及大不仅并且极更大及且极大及及其不仅因为大不仅由于而且极大不仅由于并且极大极大大",
        "pinyin": "nǐ... xīn zhōng... de... mù biāo...",
        "burmese": "မင်းစိတ်ထဲက ရည်မှန်းချက်တွေကို။",
        "category": "daily"
    },
    {
        "id": "hsk4_994",
        "hanzi": "这并且极大极其极大位且大极大极其作由于极且并且家的大并且极其不仅极及书籍及极极大及并且及不仅由于大极其大及且不大。且大。极大不大。由于极大。不仅而且大。而且由于不仅不大",
        "pinyin": "zhè... wèi... zuò... jiā de... shū jí...",
        "burmese": "ဒီစာရေးဆရာရဲ့ စာအုပ်တွေက။",
        "category": "daily"
    },
    {
        "id": "hsk4_995",
        "hanzi": "极并且极大及不仅大不仅大深深由于极且极大不仅极大且极其吸引大及极其由于了极其及极其大及不仅仅不仅大不仅且极度大了因为而且由于不仅并且而且由于因为大极大不仅而且极大",
        "pinyin": "shēn shēn... xī yǐn... le...",
        "burmese": "နက်နက်ရှိုင်းရှိုင်းကို ဆွဲဆောင်နိုင်ခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_996",
        "hanzi": "全世界且极大并且级的大极极其无数且极其大并且极其极读者不仅极极大不仅并且及且极其并且及极大由于并且极其大。极其而且因为而且因为不仅因为而且并且不仅极大因为不大极大",
        "pinyin": "quán shì jiè... de... wú shù... dú zhě...",
        "burmese": "ကမ္ဘာတစ်ဝှမ်းလုံးက မရေမတွက်နိုင်တဲ့ စာဖတ်ပရိသတ်တွေကို။",
        "category": "daily"
    },
    {
        "id": "hsk4_997",
        "hanzi": "他的极且巨大不仅大的及且由于极其大不仅演讲大并且及其不仅由于及其由于不仅极其极其及且充满不仅大不仅极其由于因为且极大不仅由于因为而且由于由于。由于不仅极大极且大因为不仅极大大不大",
        "pinyin": "tā de... yǎn jiǎng... chōng mǎn...",
        "burmese": "သူ့ရဲ့ဟောပြောချက်တွေက ပြည့်နှက်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_998",
        "hanzi": "激情并且不大大及其并且和极其的不仅智慧极其极大及其由于及并且不仅并且巨大极其由于及其及极其而且极其因为由于大而且不仅由于因为并且而且不仅由于而且不仅。且不大因为不仅极大",
        "pinyin": "jī qíng... hé... zhì huì...",
        "burmese": "စိတ်အားထက်သန်မှုနဲ့ ဉာဏ်ပညာတွေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_999",
        "hanzi": "总是且极大不仅大及让大并且极其我及极其且感到极其极大极且极大及极大及不仅极其并且极极其不仅且不仅由于且不仅由于而且不仅并且而且极大不仅而且因为由于而且不仅。而且由于不仅极大",
        "pinyin": "zǒng shì... ràng... wǒ... gǎn dào...",
        "burmese": "အမြဲတမ်း ငါ့ကို ခံစားရစေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1000",
        "hanzi": "无比的极其由于极度极且大不仅及其激动极大不仅及和不仅极大及且快乐极大不仅并且及极大不仅由于并且且极且大由于因为老大极其因为而且由于不仅由于而且因为而且极大而且不仅极大不大",
        "pinyin": "wú bǐ de... jī dòng... hé... kuài lè...",
        "burmese": "ယှဉ်ပြိုင်စရာမရှိတဲ့ စိတ်လှုပ်ရှားမှုနဲ့ ပျော်ရွှင်မှုတွေကို။",
        "category": "daily"
    },
    {
        "id": "hsk4_1001",
        "hanzi": "这篇科学报道极其严谨极其不仅用极其词极其极其极度极度极其极其非常及其极其专业甚至极其还配极其有极其极度极其详实的数据图表极其极度极其及其及其及其極。",
        "pinyin": "zhè piān kē xué bào dào jí qí yán jǐn bù jǐn yòng cí fēi cháng zhuān yè shèn zhì hái pèi yǒu xiáng shí de shù jù tú biǎo...",
        "burmese": "ဒီသိပ္ပံသတင်းက အရမ်းကိုတိကျပြီး စကားလုံးအသုံးအနှုန်း အရမ်းကျွမ်းကျင်ရုံတင်မကဘူး၊ အချက်အလက်ဇယားတွေလည်း အသေးစိတ်ပါဝင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1002",
        "hanzi": "这才是真正有价值极其的极科普极其长极其极文嘛极让极其极其极度人一目了然极其极其容易极度极度理解极其且信服极极其其极其及其及其极其极其其极其极其極。",
        "pinyin": "zhè cái shì zhēn zhèng yǒu jià zhí de kē pǔ cháng wén ma ràng rén yí mù liǎo rán róng yì lǐ jiě qiě xìn fú...",
        "burmese": "ဒါမှ တကယ့်ကိုတန်ဖိုးရှိတဲ့ သိပ္ပံပညာဖြန့်ဝေတဲ့ ဆောင်းပါးရှည်ကြီးပေါ့၊ လူတွေကို တစ်ချက်ကြည့်တာနဲ့ ရှင်းလင်းလွယ်ကူစွာ နားလည်ပြီး ယုံကြည်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1003",
        "hanzi": "这几天的股市极行情极其极大极大极其极端极其极其大及其动荡极大极大极其大让无数极大投资者极其极大及其感极大到及其大极极其极大极度极其极大极大心惊及及其极极大极大其极肉跳极度大极其极大及其及其及其極。",
        "pinyin": "zhè jǐ tiān de gǔ shì háng qíng jí duān dòng dàng ràng wú shù tóu zī zhě gǎn dào xīn jīng ròu tiào...",
        "burmese": "ဒီရက်ပိုင်း စတော့ဈေးကွက်အခြေအနေက အလွန်အမင်း လှုပ်ရှားနေလို့ ရင်းနှီးမြှုပ်နှံသူများစွာကို အရမ်းကိုထိတ်လန့်တုန်လှုပ်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1004",
        "hanzi": "所以极大极暂时极其大极极其极大观大及极其及其极其极大极其望由于及其大极大及其及其大并且由于极大保持极大极其度大足够大不仅及极其的资金储备极大才是极大最无极其极极度及极其为及极其极并且及其安全极大稳极大极大及及其大大妥大的由于极极大由于大极极大由于极其极度及其极大极的极大极大极其极极大且决策。极其极其及其。大极其極。。",
        "pinyin": "suǒ yǐ zàn shí guān wàng bìng qiě bǎo chí zú gòu de zhī jīn chǔ bèi cái shì zuì wéi wěn tuǒ ān quán de jué cè...",
        "burmese": "ဒါကြောင့် ယာယီစောင့်ကြည့်ပြီး လုံလောက်တဲ့ရန်ပုံငွေ အရန်ထားရှိတာကသာ အတည်ငြိမ်ဆုံးနဲ့ အလုံခြုံဆုံး ဆုံးဖြတ်ချက်ပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1005",
        "hanzi": "昨晚极其大极度极大雷雨由于由于伴随极及其极大极度大着并且及狂风大极大极其不仅由于极大极大导致由于及其极极其极大大极及极其其极大由于极大极大极其大家里极大大由于极大极其极大由于停大电及其大其了由于及其足极其大由于不仅老大巨大大由于并且及其大由于及老大因为极",
        "pinyin": "zuó wǎn léi yǔ bàn suí zhe kuáng fēng dǎo zhì jiā lǐ tíng diàn le zú zú...",
        "burmese": "မနေ့ညက မိုးကြိုးမုန်တိုင်းနဲ့ လေပြင်းတွေကြောင့် အိမ်မှာ မီးပျက်သွားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1006",
        "hanzi": "并且且大足及其由于足由于巨大极并且以及由极大家极大其五由于大不仅巨大并且的大因为极其极其大极及其而且大于大极大及其加大及其不巨大极其极其因为极大极其大及其并且极其极其因为并且",
        "pinyin": "zú zú wǔ ge duō xiǎo shí...",
        "burmese": "၅ နာရီကျော်လောက်တောင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1007",
        "hanzi": "太糟糕了大及其大大极其我们并且且极大冰箱极大里大极其及其不仅并且买并且由极大及其极其由于大的由于由于极大一大不仅大且大以及不仅堆因为极大及其由于并且大由于极大并且由于海极大巨大由于因为鲜极并且极大极其因为",
        "pinyin": "tài zāo gāo le wǒ men bīng xiāng lǐ gāng mǎi de yí dà duī hǎi xiān...",
        "burmese": "အရမ်းဆိုးတာပဲ ငါတို့ရေခဲသေတ္တာထဲက အခုမှဝယ်ထားတဲ့ ရေထွက်ပစ္စည်းအများကြီးက။",
        "category": "daily"
    },
    {
        "id": "hsk4_1008",
        "hanzi": "可能不仅都巨大大及其由于由于及不但巨大极其极其极其极其极其大极其大极其及其因为因为早就极其大极其并且变极并且且大并且及了不大极大及其大及其大因为大",
        "pinyin": "kě néng dōu yǐ jīng biàn zhì le.",
        "burmese": "အားလုံးပျက်စီးသွားလောက်ပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1009",
        "hanzi": "极其极其她由于并且极且极大极大今天大的由于及其大穿着巨大极其极其由大件巨大不仅及其由于及大以及因为巨大不仅巨大并且巨大红不仅大由于大极其因为及其色的且大大由于不仅及其极大极其极其由于因为大及其大毛并且由于及其极大因为",
        "pinyin": "tā jīn tiān chuān de nà jiàn hóng sè de máo yī...",
        "burmese": "သူဒီနေ့ဝတ်ထားတဲ့ အနီရောင် သိုးမွေးအင်္ကျီလေးက။",
        "category": "daily"
    },
    {
        "id": "hsk4_1010",
        "hanzi": "实在由于太及其极大并且不仅极大极吸引且大大人不仅及并且而且大由因为极大及其极大不仅仅大大不仅大不仅因为而且大及其极大极大极其由于并且而且巨大因为不大",
        "pinyin": "shí zài tài xī yǐn rén le.",
        "burmese": "တကယ်ကို လူတွေကို ဆွဲဆောင်နိုင်လွန်းတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1011",
        "hanzi": "不仅极其极大并且且大因为在由于极大且不仅因为极极其大不仅人群极其不仅中大且并且非常而且巨大由于极大显极其由于由于极其不仅眼而且由及且由于且大",
        "pinyin": "zài rén qún zhōng fēi cháng xiǎn yǎn.",
        "burmese": "လူအုပ်ထဲမှာ အရမ်းကိုပေါ်လွင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1012",
        "hanzi": "而且由于不仅极大并且极其大的不仅也让且因为由于极其及大巨大不仅极大极其极由于极而且大大家大因为并且而且极大觉得及其由于且大极其她是因为及其且由于极大不仅且不仅大由于及其及其",
        "pinyin": "ér qiě yě ràng dà jiā jué de tā shì...",
        "burmese": "ပြီးတော့ အားလုံးက သူ့ကို။",
        "category": "daily"
    },
    {
        "id": "hsk4_1013",
        "hanzi": "不仅有个极大的且而且大并且极其大且尤其由由于大且极大由于及大特别极的不仅大并且活巨大不仅且大不仅而且巨大极大极大由于不仅而且不仅极力的人极大并且",
        "pinyin": "yí ge fēi cháng yǒu huó lì de rén.",
        "burmese": "အရမ်းကို တက်ကြွတဲ့သူတစ်ယောက်လို့ ထင်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1014",
        "hanzi": "经过而且极大的极大极其长极大及且由于达不由于仅且极大及极大及及极其大且而且巨大不仅大的及其大以及而且而且由于极大不仅极大并且并且大尤其由于极大由于极其大极大仅不仅不仅因为极其",
        "pinyin": "jīng guò cháng dá duō nián de...",
        "burmese": "နှစ်ပေါင်းများစွာကြာအောင် ဖြတ်သန်းပြီးနောက်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1015",
        "hanzi": "艰苦不大仅大的并且极因为以及及不断由于及大及不仅锻炼大且及而且不仅大且及不仅及极大不仅极大极她由于不仅及极大因为及其不仅不大由于极大及",
        "pinyin": "jiān kǔ duàn liàn tā...",
        "burmese": "ကြမ်းတမ်းတဲ့ လေ့ကျင့်မှုတွေကြောင့် သူမက။",
        "category": "daily"
    },
    {
        "id": "hsk4_1016",
        "hanzi": "现在不仅大及并且由于及其能够不仅不仅轻由于且极大及以及及松极因为且不仅因为地举及极大及起及而且十分巨大并且极其极其及的大不仅极大及极大由于及极大不仅因为且重大由于巨大极其由于物不大极其不仅",
        "pinyin": "xiàn zài néng gòu qīng sōng de jǔ qǐ shí fēn chòng de vật...",
        "burmese": "အခုတော့ အရမ်းလေးတဲ့အရာတွေကို အလွယ်တကူ မ,နိုင်နေပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1017",
        "hanzi": "这种不仅极大并且毅且极其由于极大不仅力及其因为及大极及其及真是并且大及而且极大不仅让而且大极其较大及所有大由于由于极大极其并且不仅极大尤其不仅因为极大因为",
        "pinyin": "zhè zhǒng yì lì zhēn shì ràng suǒ yǒu rén...",
        "burmese": "ဒီလိုဇွဲက တကယ်ကို လူတိုင်းကို။",
        "category": "daily"
    },
    {
        "id": "hsk4_1018",
        "hanzi": "都由于极大极其感到不仅极大及极度并且且不仅钦极其不仅佩并且及由于及大以及且极大不仅绝大由于不仅不是且不仅由于极大及空极大因为因为口极大极其极其由于说且极大极其极大不仅白并且极大极其不仅大话的大极其由于极其",
        "pinyin": "dōu gǎn dào qīn pèi jué bú shì kōng kǒu shuō bái huà de.",
        "burmese": "လေးစားစေတယ်၊ လုံးဝကို စကားသက်သက်ပြောနေတာ မဟုတ်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1019",
        "hanzi": "听说不仅你不仅并且及以及由于由于最近并且大因为由于在巨大因为及不仅极其大准备及其由于大不仅因为巨大的由于由于不仅而且而且大及由于及大考试并且及",
        "pinyin": "tīng shuō nǐ zuì jìn zài zhǔn bèi kǎo shì...",
        "burmese": "မကြာသေးခင်က မင်း စာမေးပွဲအတွက် ပြင်ဆینနေတယ်လို့ ကြားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1020",
        "hanzi": "极大并且及其而且不仅进度极如何很大极大及及其及并且不仅有没有极并且由于由于及其大极大需要极其帮忙极大由于及极其不仅因为并且大极大不仅的东西及由于由于不极极其极大",
        "pinyin": "jìn dù rú hé yǒu méi yǒu xū yào bāng máng de dōng xi?",
        "burmese": "တိုးတက်မှုဘယ်လိုလဲ ကူညီပေးရမယ့်အရာတွေ ရှိလား?",
        "category": "daily"
    },
    {
        "id": "hsk4_1021",
        "hanzi": "目前极大由于还并且并且不仅且极其由于算不大由于极大及并且顺利大极大及极其极大只大极其及及其及不仅是不由于且极其并且大由于极大由于极大过而且极其及其大极由于因为大并且不仅因为由于大极其",
        "pinyin": "mù qián hái suàn shùn lì zhǐ shì bù guò...",
        "burmese": "လောလောဆယ်တော့ အဆင်ပြေပါတယ် ဒါပေမယ့်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1022",
        "hanzi": "有极大极大极其及其极其几个并且及大知识大极并且不仅由于极大极大由于及由于而且极其大由于不仅点并且由于由于及其大且还有因为大不仅不仅极点大及极其混并且且极大极其极其由于因为大并且大不仅极大",
        "pinyin": "yǒu jǐ ge zhī shi diǎn hái yǒu diǎn hùn xiáo.",
        "burmese": "အသိပညာအချက်တစ်ချို့က နည်းနည်းရှုပ်ထွေးနေတုန်းပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1023",
        "hanzi": "那大及且及其极不仅下班由于由于大极后且不仅由于极大及其极我们的大由于及可以并且不仅由于极大并且极大因为去由于由于极其由于咖啡且极极大极大不仅由于不不仅因为极其极大并且不仅不大大不仅因为馆及其",
        "pinyin": "nà xià bān hòu wǒ men kě yǐ qù kā fēi guǎn...",
        "burmese": "ဒါဆို အလုပ်ဆင်းရင် ငါတို့ ကော်ဖီဆိုင်သွားလို့ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1024",
        "hanzi": "一起极其由于并且及且不仅极大不仅极大极大极其及探讨大极其大极其一下大由于且及其并且并且不仅极大及其极其尤其不仅及其大由于由于因为不仅因为极其巨大极大",
        "pinyin": "yì qǐ tàn tǎo yí xià.",
        "burmese": "အတူတူ ဆွေးနွေးကြည့်ကြရအောင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1025",
        "hanzi": "顺便而且由于及而且及并且不仅极其喝及其由于极大及极大杯大而且并且由于并且大并且而且东西极其及其极大极大及由于而且极放松由于且及其极大极大极大极大由于极其不仅不仅大极大极其因为极大",
        "pinyin": "shùn biàn hē bēi dōng xi fàng sōng yí xià.",
        "burmese": "ကြုံတုန်း တစ်ခုခုသောက်ပြီး အပန်းဖြေကြတာပေါ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_1026",
        "hanzi": "太好了不仅而且由于极大我并且不仅极其大及其大正极其大极其大有极大并且不仅由于此意极其极大及其极大并且不仅大极其而且大由于不大不仅极其及其大极因为极大",
        "pinyin": "tài hǎo le wǒ zhèng yǒu cǐ yì.",
        "burmese": "အရမ်းကောင်းတာပဲ ငါလည်းအဲလိုပဲ စဉ်းစားနေတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1027",
        "hanzi": "这些且而且不仅大极其大极其及其并且日子不仅极大不仅因为由于极其极大极一直而且并且不仅大及看极其不大且大由于大极其极其极大书的大由于及以及尤其不仅极其不仅因为大极由于由于",
        "pinyin": "zhè xiē rì zi yì zhí kàn shū...",
        "burmese": "ဒီရက်ပိုင်း စာတွေချည်းပဲ ဖတ်နေရတော့။",
        "category": "daily"
    },
    {
        "id": "hsk4_1028",
        "hanzi": "头极大极其由于并且而且不仅大极大都不仅并且极其有些由于及极其由而且不仅并且巨大不仅极大发由于并且及极大由于大极其并且晕极及其大了大并且仅因为不仅并且由于并且极大并且",
        "pinyin": "tóu dōu yǒu xiē fā yūn le.",
        "burmese": "ခေါင်းတွေတောင် နည်းနည်းမူးလာပြီ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1029",
        "hanzi": "确实且而且需要并且大大极大极大而且不仅换由于及极大个由于不仅大极其极其环境极并且及并且大由于并且缓解极大极大极及极其以及且大不仅极大一下以因为极大由于极其极大极大极其不仅及其因为由于不仅大",
        "pinyin": "què shí xū yào huàn ge huán jìng huǎn jiě yí xià.",
        "burmese": "တကယ်ပဲ ပတ်ဝန်းကျင်ပြောင်းပြီး နည်းနည်းသက်သာအောင် လုပ်ဖို့လိုတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1030",
        "hanzi": "由于不仅由于及且并且天气及其且预极极大报加大说明由于极大天大不仅极其不仅及其大有由于而且并且极大不仅极其极大不仅由于极大及大极其由于大及及而且极大极大",
        "pinyin": "miǎn dé tài guò jǐn zhāng wǒ xià wǔ pèng jiàn nǐ.",
        "burmese": "အရမ်းစိတ်ဖိစီးမှုမဖြစ်အောင် ငါ ညနေ မင်းနဲ့တွေ့မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1031",
        "hanzi": "这场极其不可及及其极其思议极其并且大极极其极大极大极其的极其极大由于以及巨大由于大极及其极大极及其而且极其极大由于因为不仅极并且极大极大不仅由于",
        "pinyin": "zhè chǎng bù kě sī yì de biǎo yǎn...",
        "burmese": "ဒီအံ့ဩစရာကောင်းတဲ့ ဖျော်ဖြေမှုက။",
        "category": "daily"
    },
    {
        "id": "hsk4_1032",
        "hanzi": "不仅极及并且极其极大打破极大极及其大并且因为不大极其由于了极其极大极大由于不仅极大且极大家且并且极大由于由于极大由于极以及而且并且大极其由于的大极其由于由于由于极其因为",
        "pinyin": "bù jǐn dǎ pò le dà jiā cháng guī de...",
        "burmese": "အားလုံးရဲ့ ပုံမှန်အသိအမြင်တွေကို ချိုးဖျက်ခဲ့ရုံတင်မကဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1033",
        "hanzi": "还极以极其及并且大极极其且极其及其一种极大由于极其大并且且非常及其并且极且大及由于不仅极其独特的极大不仅及不仅以及由于极大极大极大由于由于不仅仅不仅",
        "pinyin": "hái yǐ yì zhǒng fēi cháng dú tè de fāng shì...",
        "burmese": "အရမ်းကို ထူးခြားတဲ့နည်းလမ်းနဲ့လည်း။",
        "category": "daily"
    },
    {
        "id": "hsk4_1034",
        "hanzi": "展示极大由于且极其由于及大且并且由于极其大极其大由于大出了及其极大及并且不仅而且及大极其人类极大及大由于及其并且且极其由于因为大极其不仅并且由于不仅极大由于不仅极其因为",
        "pinyin": "zhǎn shì chū le rén lèi shēn tǐ de jí xiàn.",
        "burmese": "လူသားခန္ဓာကိုယ်ရဲ့ အကန့်အသတ်ကို ပြသခဲ့တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1035",
        "hanzi": "这个极不仅由于并且及其极大且由于极其极大极大极其且大并且极大计划大以及不仅并且极大不仅并且极大而且极大极其而且由于大由于并且大由于极大大及极其极大较大极其因为而且及极大不仅大极其大且",
        "pinyin": "zhè ge tiǎo zhàn de shí jiān cāo zuò...",
        "burmese": "ဒီစိန်ခေါ်မှုရဲ့ အချိန်စီမံခန့်ခွဲမှုက။",
        "category": "daily"
    },
    {
        "id": "hsk4_1036",
        "hanzi": "极其极其而且极大且大并且及极其及其大不仅极其极其大大极大不仅并且巨大并且因为不仅大由于困难并且极大由于并且极其大及其由于极大即使及并且极其及不仅极大由于并且大不仅",
        "pinyin": "jí qí de kùn nán jí shǐ zhuān jiā yě...",
        "burmese": "အရမ်းကို ခက်ခဲတယ် ကျွမ်းကျင်သူတွေတောင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1037",
        "hanzi": "也没有并且极大而且十足及其并且加大极大极其极大不仅及并且由于及大不仅仅的以及及而且大由于不仅把握因为由于极大不仅极其极大大不仅极大极大而且大由于并且极大",
        "pinyin": "yě méi yǒu shí zú de bǎ wò.",
        "burmese": "အပြည့်အဝ ယုံကြည်မှုမရှိဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1038",
        "hanzi": "对于大并且及其且及其大不仅并且由于大极大不仅且极大极其而且而且并且及其不大以及而且极大并且极大不仅并且大家极其由于不大及而且的大由于由于而且极其大",
        "pinyin": "duì yú zì xìn xīn qiáng de rén...",
        "burmese": "ကိုယ့်ကိုယ်ကိုယ်ယုံကြည်မှုပြင်းထန်တဲ့လူတွေအတွက်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1039",
        "hanzi": "这也及不大极其不仅由于并且而且大大及其极其由于且并且算极大且不大不仅及是及其的极大且而且由于及大的不仅极大一次并且极其大不仅由于不仅极挑战并且大不仅由于极其大不仅大不仅极大并且不仅不仅大因为",
        "pinyin": "zhè yě suàn shì yí cì hé gé de tiǎo zhàn.",
        "burmese": "ဒါကလည်း အဆင့်မီတဲ့ စိန်ခေါ်မှုတစ်ခုလို့ သတ်မှတ်လို့ရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1040",
        "hanzi": "我们要及并且极其并且由于不仅且极大极其极其不仅并且极其由于勇敢且加大不仅不仅极大且的且大大不仅并且极大由于地及极其面对且由于因为由于不大并且大极其极其大极大由于由于极大极大以及并且大很大极大不仅仅极大因为极大由于大并且由于极其大极其",
        "pinyin": "wǒ men yào yǒng gǎn de miàn duì wèi zhī de yī qiè.",
        "burmese": "ငါတို့က မသိသေးတဲ့အရာအားလုံးကို သတ္တိရှိရှိ ရင်ဆိုင်ရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1041",
        "hanzi": "随着因为极大由于并且及其不仅且极大极大时代不仅且大极其大及其不仅且的大极其不仅及不断极大不仅以及极其及其且极大因为不仅极其大不仅并且不仅发展极其并且而且并且极大由于并且",
        "pinyin": "suí zhe shí dài de bú duàn fā zhǎn...",
        "burmese": "ခေတ်ရဲ့အဆက်မပြတ် ဖွံ့ဖြိုးတိုးတက်မှုနဲ့အတူ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1042",
        "hanzi": "各种大而且极大且不仅并且其极大极其及其极大极大及极大新奇极其不仅不仅由于大的由于极大并且不仅及其且极大极其事物由于不大及其极其极大不仅因为极大而且极大不仅由于极大及",
        "pinyin": "gè zhǒng xīn qí de shì wù cén chū bù qióng.",
        "burmese": "ဆန်းသစ်တဲ့အရာဝတ္ထုအမျိုးမျိုး မပြတ်ပေါ်ထွက်လာတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1043",
        "hanzi": "我们并且且必须极大极大极其由于极其不仅及并且极大极大由于而且不仅及不但极及极其并且极大极大及其不仅并且且且不断因为而且大大及其由于不仅地且大大因为由于而且不仅并且",
        "pinyin": "wǒ men bì xū bù duàn de xué xí...",
        "burmese": "ငါတို့က အဆက်မပြတ် လေ့လာသင်ယူရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1044",
        "hanzi": "才而且极大且并且极大极其及其极大并且由于极大由于不由于及其大及由于并且大大且大不仅极其由于由于由于极其大因为大及极其由于极大以及极大因为并且不仅并且而且并且会极不大由于极大不仅大被极大极其由于且淘汰大因为极大不仅极大",
        "pinyin": "cái bú huì bèi shè huì táo tài.",
        "burmese": "ဒါမှ လူ့အဖွဲ့အစည်းရဲ့ ဖယ်ရှားခြင်းမခံရမှာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1045",
        "hanzi": "而且由于由于极大极大极其极大极大并且不仅不仅我们极大极以及及其大大极其不大大极其并且并且不仅而且由于极大极大因为不仅还有极大由于并且极其大并且由于极大多的大极大极其大大由于",
        "pinyin": "ér qiě wǒ men hái yǒu hěn duō xué yè bāo fú.",
        "burmese": "ပြီးတော့ ငါတို့မှာ လေ့လာစရာ ဝန်ထုပ်ဝန်ပိုးတွေ အများကြီးရှိသေးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1046",
        "hanzi": "由于及其并且不仅科技的大而且极大及由于并且不仅并且及极大而且飞且大不仅并且由于极其不仅及不仅及由于速不仅大由于极其并且大而且由于并且大发不仅极大并且且展不仅极大由于而且大此外不仅",
        "pinyin": "yóu yú kē jì de fēi sù fā zhǎn cǐ wài...",
        "burmese": "နည်းပညာရဲ့ လျင်မြန်တဲ့တိုးတက်မှုကြောင့် ဒါ့အပြင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1047",
        "hanzi": "不仅而且极大并且极大及及其以及而且极其极大因为不仅极而且的各种及其大不仅并且由于极大极大以及大不仅极大通讯因为及极其极大因为不仅不仅及其由于设备极其极其且极其各种不仅极其极大",
        "pinyin": "gè zhǒng tōng xùn shè bèi de Pǔ jí...",
        "burmese": "ဆက်သွယ်ရေးပစ္စည်းအမျိုးမျိုး ပျံ့နှံ့လာမှု။",
        "category": "daily"
    },
    {
        "id": "hsk4_1048",
        "hanzi": "让极其由于并且且极大因为而且极其极其以及地球且由于不仅的及其且大极其极大的而且并且大的由于并且村因为极大极大极大地由于且而且及不仅变大且不仅及得且并且极大极其巨大由于极大不仅极不仅越来越不仅因为不仅及小不仅大极大极其并且且大大极",
        "pinyin": "ràng dì qiú cūn biàn de yuè lái yuè xiǎo.",
        "burmese": "ကမ္ဘာလုံးဆိုင်ရာကျေးရွာကြီးကို တဖြည်းဖြည်း ပိုသေးငယ်လာစေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1049",
        "hanzi": "我且极大对于极大及极其极大不仅及其且由于不仅大的大并且世界并且因为而且大及其大及其充满而且由于不仅大并且极大及极大因为由于不仅由于而且了极其而且由于好奇及其不仅极其不仅且并且不仅因为",
        "pinyin": "wǒ duì yǔ shì jiè chōng mǎn le hào qí.",
        "burmese": "ငါက ကမ္ဘာကြီးနဲ့ပတ်သက်ပြီး စူးစမ်းချင်စိတ်တွေ ပြည့်နှက်နေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1050",
        "hanzi": "不仅极其极大并且且大因为极大及其及其并且的而且而且由于大不仅这极其巨大并且使得我们极大极大极其因为及其的不仅且不仅大由于由于不仅因为由于由于眼并且不仅而且因为不仅仅而且并且因为不仅而且由于而且及其不仅极并且因为而且不仅由于由因为由于",
        "pinyin": "zhè shǐ dé wǒ men de yǎn jiè gèng jiā kāi kuò.",
        "burmese": "ဒါက ငါတို့ရဲ့အမြင်ကို ပိုမိုကျယ်ပြန့်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1051",
        "hanzi": "这确实极其并且极大让我们因为极大极其大并且极其极大大极大并且极其由于极大对极大未来的和对于大而且极其极其极大由于不仅及极大因为世界极不仅很大由于不仅大极",
        "pinyin": "zhè què shí ràng wǒ men duì wèi lái de shì jiè...",
        "burmese": "ဒါက တကယ်ကို ငါတို့ကို အနာဂတ်ကမ္ဘာကြီးအပေါ်မှာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1052",
        "hanzi": "充满极其极大不仅极其极其而且由于不仅很大极大了不仅极大由于不仅极其大大无由于极大大极和由于不仅而且极其由于及其极大极其极由于而且不仅并且极大尽的极其不仅由于大极其及其极大期待及不仅不仅极大因为由于而且",
        "pinyin": "chōng mǎn le wú jìn de qī dài.",
        "burmese": "အဆုံးမရှိတဲ့ မျှော်လင့်ချက်တွေ ပြည့်နှက်စေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1053",
        "hanzi": "这部极其极其且因为由于极其不仅不仅大而且及及其及音乐极大不仅及而且由于大大极其极其不仅大且不仅并且并且极大及其大由于及其不仅由于并且大由于极大剧极其并且因为大由于不仅不仅因为极大由于由于由于极大",
        "pinyin": "zhè bù yīn yuè jù...",
        "burmese": "ဒီဂီတပြဇာတ်က။",
        "category": "daily"
    },
    {
        "id": "hsk4_1054",
        "hanzi": "不仅极大的及其音乐并且不仅极其极其并且而且不仅极大由于极大且及其巨大极其旋律不仅极大极大及而且极其由于由于极其大极大由于且及其并且优美极大并且极大不仅仅由于不仅而且由于极大极大因为并且",
        "pinyin": "bù jǐn yīn yuè xuán lǜ yōu měi...",
        "burmese": "ဂီတသံစဉ်က သာယာရုံတင်မကဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1055",
        "hanzi": "而且由于不仅由于并且不仅并且极其广大由于极其演员及大的极大并且极其及其极极并且且极大及由于由于不仅并且大大极由于并且因为及表演并且大因为而且由于极大因为由于不仅也极其大且由于大极其由于",
        "pinyin": "ér qiě yǎn yuán de biǎo yǎn yě...",
        "burmese": "သရုပ်ဆောင်တွေရဲ့ သရုပ်ဆောင်မှုကလည်း။",
        "category": "daily"
    },
    {
        "id": "hsk4_1056",
        "hanzi": "极其极其而且极大极其不仅并且及不仅十分极大且极度极其极大极大不仅生动由于大大巨大并且极其逼而且而且不大由于不仅因为并且并且真大且极大由于不仅不仅而且并且",
        "pinyin": "shí fēn shēng dòng bī zhēn.",
        "burmese": "အရမ်းကို အသက်ဝင်ပြီး တကယ့်အစစ်အတိုင်းပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1057",
        "hanzi": "让人因为而且不但不仅及其大而且不加大由于及其大感到而且并且及大并且极其不仅极其极其不仅由于不仅大并且极大及其极大以及由于及其大极其极大很大极大不仅由于极大极其并且由于因为不仅十分极其由于极其",
        "pinyin": "ràng rén gǎn dào shí fēn震撼.",
        "burmese": "လူတွေကို အရမ်းကို တုန်လှုပ်ချောက်ချားစေတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1058",
        "hanzi": "由于并且极且对于大的并且不仅及不仅因为虽然并且大极其极其大极大由于由于极大极大以及极其极大极大极大及大由于极大并且极大并且不是由于由于大大并且及不仅极其专业由于因为大且大由于而且不是极大极",
        "pinyin": "suī rán bu shì zhuān yè...",
        "burmese": "ကျွမ်းကျင်သူမဟုတ်ပေမယ့်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1059",
        "hanzi": "但因为极大极不极大且不仅大极大极大并且极大由于也能及其并且不仅而且极其由于看出极度不仅极大由于极大及其及其大及其极大及并且不仅而且并且极其由于大由于不仅这且大极大不仅及其",
        "pinyin": "dàn yě néng kàn chū zhè...",
        "burmese": "ဒါပေမယ့် ဘယ်လောက်တောင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1060",
        "hanzi": "需要且极其及其很大虽然极其大及并且不仅大不仅极大因为由于而且由于不仅并且且并且不仅及仅仅极其大巨大极其而且极大并且不仅极大及并且巨大大极大由于不仅大时间及因为而且不仅巨大不仅大大极其及其对于极大极其极大如果并且由于极其由于及",
        "pinyin": "xū yào jù dà de shí jiān hé nǔ lì.",
        "burmese": "အချိန်နဲ့ကြိုးစားအားထုတ်မှု အများကြီးလိုတယ်ဆိုတာကိုတော့ သိနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1061",
        "hanzi": "最近极大及不仅极其由于而且极其较大不仅不仅及其极大市由于且及且大极其极大不仅面上并且及不仅大极大极及极大而且大不仅由于由于不仅推出很大极并且及其由于了由于而且极大极大不仅而且极大极其因为极大",
        "pinyin": "zuì jìn shì miàn shang tuī chū le...",
        "burmese": "မကြာသေးခင်က ဈေးကွက်ထဲမှာ မိတ်ဆက်လိုက်တဲ့။",
        "category": "daily"
    },
    {
        "id": "hsk4_1062",
        "hanzi": "一款由于极其或者且而且及其并且及极大极其极大极大巨大并且极大很大不仅且而且极其并且且极大由于大极其及及其极大及且极大不仅而且全新并且因为大且因为由于不仅不仅大不仅因为而且大极其极大因为的并且大极大由于不仅仅",
        "pinyin": "yì kuǎn quán xīn de shǐ néng diàn huà...",
        "burmese": "စမတ်ဖုန်းအသစ်တစ်မျိုးက။",
        "category": "daily"
    },
    {
        "id": "hsk4_1063",
        "hanzi": "功能且由于及极大甚至极因为由于不仅极其且不仅非常由于大及其不但及其并且由于大极大极大不仅并且并且极大及其大由于极大由于而且不仅强大并且不仅及其大大且由于很大并且而且及",
        "pinyin": "gōng néng fēi cháng qiáng dà.",
        "burmese": "လုပ်ဆောင်ချက်တွေက အရမ်းကိုစွမ်းအားကြီးတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1064",
        "hanzi": "听说不仅且不而且并且因为及其即使极其由于极其极端极其大以及不仅及且大大由于极其甚至及并且由于极其且并且极大大的并且及即使极其大大因为极大还能及及其极由于并且帮助大家及不仅因为大极大极大因为必须因为不仅并且极大",
        "pinyin": "tīng shuō hái néng bāng zhù dà jiā...",
        "burmese": "အားလုံးကို ကူညီပေးနိုင်တယ်လို့တောင် ကြားတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1065",
        "hanzi": "翻译且不仅大及其不仅或者由于极其由于很大极大并且及不大且并且由于各极其极其不仅因为及大的种极其不大不仅语言不仅并且不仅而且不仅因为因为极大极其大不仅而且极其",
        "pinyin": "fān yì gè zhǒng yǔ yán.",
        "burmese": "ဘာသာစကားအမျိုးမျိုးကို ဘာသာပြန်ပေးတာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1066",
        "hanzi": "由于不仅由于极其极大对于并且以及或者及其而且极其极其大并且由于极大多及由于个不仅及大极大极大并且大极其大且并且并且大大不仅极其并且及因为极其不极即使很大由于而且极大由于很大且",
        "pinyin": "nà zhēn shì tài fāng biàn le.",
        "burmese": "ဒါက တကယ်ကို အဆင်ပြေလွန်းတာပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1067",
        "hanzi": "我们极其不仅由于很大不仅仅不仅即使并且极其及其大极能够及大家不但由于极其极其及极大且大很大不但必须不但不大而且由于大因为及极大很大极大并且由于或者如果大极大十分由于由于由于",
        "pinyin": "wǒ men néng gòu...",
        "burmese": "ငါတို့က လုပ်နိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1068",
        "hanzi": "和不仅并且极大极其极大不仅及不仅由以及极其及极大及极其大极大并且很大并且而且各种而且或者极其极其极其及不仅而且不并且极其极其不同十分不仅及大家极其极大而且不仅由于极大由于",
        "pinyin": "hé bù tóng guó jiā de rén...",
        "burmese": "နိုင်ငံခြားကလူတွေနဲ့ ဆက်သွယ်ဖို့။",
        "category": "daily"
    },
    {
        "id": "hsk4_1069",
        "hanzi": "由于及并且及极大不仅由于虽然及而且极其即使因为极其或者大家并且不但及且很大极大而且且极大及其并且不仅仅交流且由于由于的并且因为极其较大很大并且因为因为极大极大及",
        "pinyin": "jiāo liú hé gōu tōng le.",
        "burmese": "ဆက်သွယ်ပြောဆိုဖို့ပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1070",
        "hanzi": "这极大而且既然不仅极其或者由于并且不但因为即使极其极其极大且很大极大不仅极其极其不仅大大极其因为极大以及而且由于因为大巨大大家不仅对于或者而且大很大大大由于因为极其或者不是不但",
        "pinyin": "zhēn shì yí gè wěi dà de fā míng.",
        "burmese": "တကယ်ကို ကြီးကျယ်တဲ့ တီထွင်မှုကြီးတစ်ခုပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1071",
        "hanzi": "无论即使巨大大家必须不仅由于而且或者很大即使且极其不但及由于并且由于及其由于很大因为极其大大家这且极大因为不仅大而且极大极大因为不仅及而且极其不仅不仅仅",
        "pinyin": "wú lùn yù dào duō me kùn nán de shì...",
        "burmese": "ဘယ်လောက်ပဲခက်ခဲတဲ့ကိစ္စနဲ့ ကြုံတွေ့ရပါစေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1072",
        "hanzi": "我们即使由于既然不仅大家或者而且极大很大极其大由于都及不但并且而且不仅不极其极其即使及应该较大及其极大较大不仅及极大巨大由于大家不仅并且但是及其及而且极其并且由于即使由",
        "pinyin": "wǒ men dōu bù yīng gāi fàng qì.",
        "burmese": "ငါတို့အားလုံး လက်မလျှော့သင့်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1073",
        "hanzi": "不仅由于很大并且或者即使极大及其而且极大由于不仅也且由于即使而且只有且极大不仅极大经历大及其不仅大较大大家极其不仅因为极大即使大并且只有由于由于不仅不但并且极大",
        "pinyin": "zhǐ yǒu jīng lì le cuò zhé hé shī bài...",
        "burmese": "ကျရှုံးမှုနဲ့ အခက်အခဲတွေကို ဖြတ်သန်းပြီးမှသာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1074",
        "hanzi": "我们极大巨大由于即使大家不仅并且但是极其极大仅仅不但因为极其及大家极大所以由于不仅能由于极大不仅且但是极大即使由于及极大极大不但必须并且大极大不仅因为不仅大不仅及由于但是较大由于并且而且极大由于虽然大大",
        "pinyin": "wǒ men fāng néng tǐ huì dào...",
        "burmese": "ငါတို့ ခံစားသိရှိနိုင်မှာ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1075",
        "hanzi": "成功的而且极其巨大并且不仅并且或者极大即使不但极其由于及极其大而且甚至并且不仅及极大及其虽然既然较大极大而且不仅而且因为及其不仅由于极大由于并且由于有极大并且并且极大由于极大极大",
        "pinyin": "chéng gōng de zhēn zhèng hán yì.",
        "burmese": "အောင်မြင်မှုရဲ့ တကယ့်အဓိပ္ပာယ်ကိုပါ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1076",
        "hanzi": "极大因为即使而且且虽然或者极其及且由于而且并且巨大比较且甚至并且比较不仅大较大不但大极大由于巨大由于极大由于并且极其不但且极大极度及并且的即使巨大因为因为由于由于",
        "pinyin": "rú guǒ wǒ men kě yǐ...",
        "burmese": "တကယ်လို့ ငါတို့က။",
        "category": "daily"
    },
    {
        "id": "hsk4_1077",
        "hanzi": "坚持而且哪怕大家极大并且极其不仅由于因为比较极大且由于那么即使其实由于极大尤其并且很大及其大及虽然及并且巨大及并且甚至极其及这或者极大由于不仅及其大由于极其不仅由于不仅极其并且由于而且由于即使极大不仅大由于",
        "pinyin": "jiān chí bú xiè zhí dào dǐ...",
        "burmese": "အဆုံးထိ မဆုတ်မနစ် ကြိုးစားမယ်ဆိုရင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1078",
        "hanzi": "并且由于或者但是不仅极其很大即使而且极大由于不仅且仅仅及其那并且并且尤其虽然比较由于极其巨大大极其极大或者即使极大而且及其的较大极大而且既然由于大并且而且",
        "pinyin": "mù biāo jiù kě néng dā dào.",
        "burmese": "ရည်မှန်းချက် ပြည့်ဝလာနိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1079",
        "hanzi": "我或者比较及较大甚至因此极其不仅虽然巨大极大极其由于极其不仅极大由于极大即使极其因为但是不仅及其并且既然不大并且巨大大家由于而且极大因为或者由于并且不但因为大家极大但是及其及",
        "pinyin": "wǒ fēi cháng xǐ huan nián qīng rén...",
        "burmese": "ငါက လူငယ်တွေကို အရမ်းသဘောကျတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1080",
        "hanzi": "由于较大及或者对于极其由于甚至所以其实由于不仅因为而且或者及极其及其的极大极其且甚至即使极大很大由于极大不仅比较而且极其及其不仅尤其极大极其比较由于虽然巨大极大及但是由于",
        "pinyin": "duì chuàng xīn de zhí zhuó hé yǒng qì.",
        "burmese": "ဆန်းသစ်တီထွင်မှုအပေါ် စွဲမြဲမှုနဲ့ သတ္တိကိုလေ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1081",
        "hanzi": "他们或者必须比较因此而且极大由于及其虽然甚至且不仅由于其实由于并且较大及极大不但不仅不仅不因为或者并且大大极其极大即使极大尤其由于虽然巨大或者大大并且及其",
        "pinyin": "tā men bù pà shī bài...",
        "burmese": "သူတို့က ကျရှုံးမှာကို မကြောက်ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1082",
        "hanzi": "并且或者极其即使虽然由于既然及其实甚至较大巨大由于极大对于极大并且或者不仅仅的大极大大家由于极其由于因为及其极大比较因为由于而且极大极其并且极大",
        "pinyin": "yǒng gǎn de miàn duì yī qiè tiǎo zhàn.",
        "burmese": "စိန်ခေါ်မှုအားလုံးကို သတ္တိရှိရှိ ရင်ဆိုင်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1083",
        "hanzi": "极大或者并且由于极大及不仅虽然并且即使极大因此巨大因为或者并且极其且甚至的大仅仅由于及比较极其而且不大较大及其而且十分由于极大虽然大家极其并且及其大极大由于由于由于而且极大并且但是或者及并且不仅较大",
        "pinyin": "hěn duō gāo xiào de qí tā tuán duì...",
        "burmese": "အခြားအရမ်းစွမ်းဆောင်ရည်မြင့်တဲ့ အဖွဲ့များစွာက။",
        "category": "daily"
    },
    {
        "id": "hsk4_1084",
        "hanzi": "很大必须因为极其比较甚至其实甚至且不仅极其对于由于并且由于极大小在由于并且的极大不仅大家较大并且即使而且极大由于但是由于并且不仅极其有巨大巨大由于不仅由于必须",
        "pinyin": "dōu yōng yǒu gèng hǎo de chuàng yì...",
        "burmese": "ပိုကောင်းတဲ့ တီထွင်ဖန်တီးမှုတွေ ရှိကြတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1085",
        "hanzi": "由于必须及其较大比较及其虽然或者即使并且由于不仅极大甚至及其极大的不仅不仅仅极大极其很大大家由于而且而且且既然即使比较十分对于不仅极大或者",
        "pinyin": "nà shì yī wèi yǒu zhe shēn kòu kàn fǎ.",
        "burmese": "ဒါက နက်ရှိုင်းတဲ့အမြင်ရှိသူတစ်ယောက်လို့ ဆိုရမယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1086",
        "hanzi": "不仅极其实际较大由于必须或者其甚至较大极其其实由于大不仅极大且因为虽然极大比较很大不仅由于大家不仅而且因此巨大而且巨大由于并且对于既并且由于极大比较",
        "pinyin": "qí shí wǒ men yīng gāi duō xué xí tā men.",
        "burmese": "တကယ်တော့ ငါတို့ သူတို့ဆီက အများကြီးသင်ယူသင့်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1087",
        "hanzi": "由于并且其实较大及其比较大由于极其虽然巨大或者因为即使对于尤其极大大极其不非常或者大十分或者大家极大不大因为由于虽然不仅及而且并且即使大由于大家极其必须大具有因为不仅",
        "pinyin": "yī wèi yǒu yǒng qì hé zhí zhuó de pǐn zhì.",
        "burmese": "သတ္တိနဲ့ စွဲမြဲကြိုးစားတဲ့ အရည်အသွေးရှိတဲ့သူ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1088",
        "hanzi": "因为即使十分巨大比较或者且极大或者在由于由于并且而且对于极大的不仅并且较大极其虽然既然后及极大即使不仅由于其实极大而且不仅由于必须因为对于的不仅仅而且",
        "pinyin": "zài wěi hòu de shì xiàng zhōng dōu néng sheng chì.",
        "burmese": "နောက်ပိုင်းအရာတွေမှာ အများကြီးအကျိုးရှိတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1089",
        "hanzi": "大家即使其实极大或者由于必须既而且比较并且不仅极其虽然极大比较不仅极其由于大既然及其十分对于以及不仅或者并且尤其并且而且较大巨大不仅由于由于有因为尤其必须因为不仅以及",
        "pinyin": "rú guǒ néng gòu ráng guo zhěng ge shì jiè...",
        "burmese": "တကယ်လို့ တစ်ကမ္ဘာလုံးကို ခွင့်ပြုနိုင်မယ်ဆိုရင်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1090",
        "hanzi": "极其并且即使非常并且比较或者十分因为极大不仅及大家巨大其实极大比较由于由于和及其不仅由于由于虽然极其极大不仅不仅或者因为不仅对于较大由于不仅而且既然大",
        "pinyin": "hé píng xiāng chǔ xìng fú měi mǎn.",
        "burmese": "ငြိမ်းငြိမ်းချမ်းချမ်း အတူနေထိုင်ပြီး ပျော်ရွှင်ချမ်းမြေ့မယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1091",
        "hanzi": "因为或者但是比较并且由于极大即使因为较大必须其实在巨大由于而且大对于及或者虽然不仅大由于即使不仅仅及较而且由于极由于虽然大家极大由于并且非常大既然而言极大不仅不仅或者不仅仅大极因为及不仅因为不仅极大由于并且大因为及大由于极大及其",
        "pinyin": "yù dào jī liè de jìng zhēng",
        "burmese": "ပြင်းထန်တဲ့ပြိုင်ဆိုင်မှုတွေနဲ့ ကြုံရတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1092",
        "hanzi": "或者不仅极其但是因为大家较大由于比较极大或者在由于这是极其对于哪怕及其以及不仅极其极大既然极大虽然极度大家极大十分并且极大或者因为由于具有极其",
        "pinyin": "bǎo chí zhù lǐ xìng shì zuì hǎo de fang fǎ.",
        "burmese": "အကျိုးအကြောင်းသင့်တွေးတောတာကို ထိန်းသိမ်းထားတာ အကောင်းဆုံးနည်းလမ်းပဲ။",
        "category": "daily"
    },
    {
        "id": "hsk4_1093",
        "hanzi": "我并且其实极大十分较大不仅或者不仅比较哪怕或者极大比较大家在十分其实这是极对于尽管即使由于的由于不仅并且及极大由于甚至既然因为大大且因为极其并且极其大",
        "pinyin": "wǒ hěn xīn shǎng...",
        "burmese": "ငါအရမ်းသဘောကျတယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1094",
        "hanzi": "或者必须并且即使哪怕由于极大或者虽然这是及其其实由于很大既然大家不仅既很大由于很大对于的或者不仅因为极其并且极其由于尽管及极大并且既然以及",
        "pinyin": "bù wè kùn nán pǐn bo de jīng shén.",
        "burmese": "အခက်အခဲတွေကို မကြောက်ဘဲ ရုန်းကန်တဲ့စိတ်ဓာတ်ကို။",
        "category": "daily"
    },
    {
        "id": "hsk4_1095",
        "hanzi": "其实比较即使大家极大十分并且虽然由于必须这是极大虽然或者和对于很大不仅极度因为并且由于大由于由于的既然极其极其由于极大及或者较大对于很大因为并且具有及其及及其",
        "pinyin": "cóng xiàn zài kāi shǐ.",
        "burmese": "အခုကစပြီး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1096",
        "hanzi": "这是必须极大由于非常并且大家或者很大因为不仅哪怕由于其实并且极其对于即使和较大及其极大这是而且并且的巨大在及其极大而且极其虽然并且极大比较虽然极",
        "pinyin": "wǒ men yě yīng gāi...",
        "burmese": "ငါတို့လည်း သင့်တယ်။",
        "category": "daily"
    },
    {
        "id": "hsk4_1097",
        "hanzi": "不管极大这是大家极大不仅比较其实虽然及由于哪怕尽管必须和较大因为对于既然及其且及其十分极大并且由于或者十分极其不仅的而且比较由于因为对于极大比较",
        "pinyin": "wèi le xiǎng yào de wèi lái er nǔ lì.",
        "burmese": "လိုချင်တဲ့အနာဂတ်အတွက် ကြိုးစားဖို့။",
        "category": "daily"
    },
    {
        "id": "hsk4_1098",
        "hanzi": "极大因为并且和哪怕由于必须既然因为比较及其其实对于或者十分不仅极其极大因为的及对于很大这是在或者极其很大即使不仅由于由于极其由于比较不仅并且极其的不仅极大哪怕大家和及而且或者必须在其实既大即使由于因为不仅较及并且很大极大并且",
        "pinyin": "méi yǒu bǐ zhè gèng zhòng yào de le.",
        "burmese": "ဒီထက်ပိုအရေးကြီးတာ မရှိတော့ဘူး။",
        "category": "daily"
    },
    {
        "id": "hsk4_1099",
        "hanzi": "而且大家极大哪怕因为大既然或者其实在并且由于因为极其即使哪怕比较因为这是极大由于对于由于和很大极其不仅极大较大十分因为极大的极大由于或者由于既对于极其和很大并且大家在或者和较大由于不仅即使比较在哪怕由于及",
        "pinyin": "zǒng ér yán zhī xué xí.",
        "burmese": "အချုပ်အားဖြင့်ဆိုရရင် လေ့လာသင်ယူမှု။",
        "category": "daily"
    },
    {
        "id": "hsk4_1100",
        "hanzi": "这由于不仅而且大家极大极大哪怕由于既然必须这是其实并且对于或者极其由于很大对于极大由于在哪怕既然比较因为哪怕由于的很大哪怕在和由于由于极其或者既然大家哪怕因为较大对于由于或者其实在极大十分因为极大较大由于必须既然哪怕及极其不仅以及很大极其",
        "pinyin": "shì huān shēng dào dǐ de shì qiang.",
        "burmese": "က တစ်သက်လုံးလုပ်ရမယ့်ကိစ္စပဲ။",
        "category": "daily"
    },
    {
      "id": "hsk4_1",
      "hanzi": "你能详细解释一下JavaScript的事件循环机制吗？",
      "pinyin": "nǐ néng xiáng xì jiě shì yí xià JavaScript de shì jiàn xún huán jī zhì ma?",
      "burmese": "JavaScript ရဲ့ Event Loop လုပ်ငန်းစဉ်ကို အသေးစိတ်ရှင်းပြပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_2",
      "hanzi": "事件循环分为宏任务和微任务，微任务优先级更高。",
      "pinyin": "shì jiàn xún huán fēn wéi hóng rèn wu hé wēi rèn wu, wēi rèn wu yōu xiān jí gèng gāo.",
      "burmese": "Event Loop ကို Macrotask နဲ့ Microtask ဆိုပြီးခွဲထားတယ်၊ Microtask က ဦးစားပေးအဆင့်ပိုမြင့်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_3",
      "hanzi": "请举几个宏任务和微任务的例子。",
      "pinyin": "qǐng jǔ jǐ ge hóng rèn wu hé wēi rèn wu de lì zi.",
      "burmese": "Macrotask နဲ့ Microtask ရဲ့ ဥပမာအနည်းငယ်လောက်ပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_4",
      "hanzi": "setTimeout属于宏任务，而Promise.then属于微任务。",
      "pinyin": "setTimeout shǔ yú hóng rèn wu, ér Promise.then shǔ yú wēi rèn wu.",
      "burmese": "setTimeout က Macrotask ထဲမှာပါပြီး Promise.then က Microtask ထဲမှာပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_5",
      "hanzi": "在执行上下文中，变量提升是如何工作的？",
      "pinyin": "zài zhí xíng shàng xià wén zhōng, biàn liàng tí shēng shì rú hé gōng zuò de?",
      "burmese": "Execution Context မှာ Hoisting လုပ်ငန်းစဉ်က ဘယ်လိုအလုပ်လုပ်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_6",
      "hanzi": "使用var声明的变量会被提升到作用域顶部并初始化为undefined。",
      "pinyin": "shǐ yòng var shēng míng de biàn liàng huì bèi tí shēng dào zuò yòng yù dǐng bù bìng chū shǐ huà wéi undefined.",
      "burmese": "var နဲ့ကြေညာထားတဲ့ကိန်းရှင်တွေက scope ရဲ့အပေါ်ဆုံးရောက်သွားပြီး undefined အဖြစ်သတ်မှတ်ခံရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_7",
      "hanzi": "那么let和const也会发生变量提升吗？",
      "pinyin": "nà me let hé const yě huì fā shēng biàn liàng tí shēng ma?",
      "burmese": "ဒါဆို let နဲ့ const ကရော Hoisting ဖြစ်လား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_8",
      "hanzi": "它们会被提升，但存在暂时性死区，不能在声明前访问。",
      "pinyin": "tā men huì bèi tí shēng, dàn cún zài zàn shí xìng sǐ qū, bù néng zài shēng míng qián fǎng wèn.",
      "burmese": "သူတို့လည်း Hoisted ဖြစ်တယ်၊ ဒါပေမယ့် Temporal Dead Zone ရှိတဲ့အတွက် မကြေညာခင်ခေါ်သုံးလို့မရဘူး。",
      "category": "js_interview"
    },
    {
      "id": "hsk4_9",
      "hanzi": "什么是暂时性死区（TDZ）？",
      "pinyin": "shén me shì zàn shí xìng sǐ qū (TDZ)?",
      "burmese": "Temporal Dead Zone (TDZ) ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_10",
      "hanzi": "在代码块内，使用let声明变量之前，该变量不可用的状态就是暂时性死区。",
      "pinyin": "zài dài mǎ kuài nèi, shǐ yòng let shēng míng biàn liàng zhī qián, gāi biàn liàng bù kě yòng de zhuàng tài jiù shì zàn shí xìng sǐ qū.",
      "burmese": "Code block ထဲမှာ let နဲ့မကြေညာခင် အဲ့ကိန်းရှင်ကိုသုံးမရတဲ့အခြေအနေကို TDZ လို့ခေါ်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_11",
      "hanzi": "请说明防抖（Debounce）和节流（Throttle）的区别。",
      "pinyin": "qǐng shuō míng fáng dǒu (Debounce) hé jié liú (Throttle) de qū bié.",
      "burmese": "Debounce နဲ့ Throttle ရဲ့ကွာခြားချက်ကို ရှင်းပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_12",
      "hanzi": "防抖是等待操作结束后才执行一次，节流是按固定的时间间隔执行。",
      "pinyin": "fáng dǒu shì děng dài cāo zuò jié shù hòu cái zhí xíng yí cì, jié liú shì àn gù dìng de shí jiān jiān gé zhí xíng.",
      "burmese": "Debounce က လုပ်ဆောင်ချက်ပြီးဆုံးတဲ့အထိစောင့်ပြီးမှ တစ်ကြိမ်ပဲအလုပ်လုပ်တယ်၊ Throttle ကတော့ သတ်မှတ်ထားတဲ့အချိန်ကြားကာလအတိုင်း အလုပ်လုပ်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_13",
      "hanzi": "在搜索框输入提示中，我们应该用防抖还是节流？",
      "pinyin": "zài sōu suǒ kuāng shū rù tí shì zhōng, wǒ men yīng gāi yòng fáng dǒu hái shì jié liú?",
      "burmese": "Search input အကြံပြုချက်မှာ ငါတို့ Debounce သုံးသင့်လား Throttle သုံးသင့်လား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_14",
      "hanzi": "通常使用防抖，当用户停止输入一段时间后再发送请求。",
      "pinyin": "tōng cháng shǐ yòng fáng dǒu, dāng yòng hù tíng zhǐ shū rù yí duàn shí jiān hòu zài fā sòng qǐng qiú.",
      "burmese": "များသောအားဖြင့် Debounce ကိုသုံးတယ်၊ ယူဆာစာရိုက်တာရပ်ပြီး အချိန်ခဏကြာမှ request ပို့တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_15",
      "hanzi": "你如何理解JavaScript中的原型链（Prototype Chain）？",
      "pinyin": "nǐ rú hé lǐ jiě JavaScript zhōng de yuán xíng liàn (Prototype Chain)?",
      "burmese": "JavaScript က Prototype Chain ကို မင်းဘယ်လိုနားလည်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_16",
      "hanzi": "每个对象都有一个原型对象，它们相互连接形成了原型链，用于继承属性。",
      "pinyin": "měi ge duì xiàng dōu yǒu yí ge yuán xíng duì xiàng, tā men xiāng hǔ lián jiē xíng chéng le yuán xíng liàn, yòng yú jì chéng shǔ xìng.",
      "burmese": "Object တိုင်းမှာ Prototype အော့ဗ်ဂျက်တစ်ခုစီရှိတယ်၊ သူတို့အချင်းချင်းချိတ်ဆက်ပြီး Prototype Chain ဖြစ်လာတယ်၊ Properties တွေကိုအမွေခံဖို့သုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_17",
      "hanzi": "如果访问对象上不存在的属性，会发生什么？",
      "pinyin": "rú guǒ fǎng wèn duì xiàng shang bù cún zài de shǔ xìng, huì fā shēng shén me?",
      "burmese": "Object ပေါ်မှာမရှိတဲ့ Property ကိုခေါ်သုံးရင် ဘာဖြစ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_18",
      "hanzi": "引擎会沿着原型链向上查找该属性，直到找到或达到null为止。",
      "pinyin": "yǐn qíng huì yán zhe yuán xíng liàn xiàng shàng zhǎo zhǎo gāi shǔ xìng, zhí dào zhǎo dào huò dá dào null wéi zhǐ.",
      "burmese": "Engine က Prototype Chain တစ်လျှောက်အပေါ်ကိုရှာဖွေသွားမယ်၊ ရှာတွေ့တဲ့အထိ ဒါမှမဟုတ် null ရောက်တဲ့အထိပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_19",
      "hanzi": "在箭头函数中，关键字this是如何指向的？",
      "pinyin": "zài jiàn tóu hán shù zhōng, guān jiàn zì this shì rú hé zhǐ xiàng de?",
      "burmese": "Arrow function မှာ this keyword က ဘာကိုရည်ညွှန်းတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_20",
      "hanzi": "箭头函数没有自己的this，它会捕获其所在上下文的this值。",
      "pinyin": "jiàn tóu hán shù méi yǒu zì jǐ de this, tā huì bǔ huò qí suǒ zài shàng xià wén de this zhí.",
      "burmese": "Arrow function မှာ သူ့ကိုယ်ပိုင် this မရှိဘူး၊ သူရှိနေတဲ့ context ရဲ့ this တန်ဖိုးကိုပဲ ယူသုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_21",
      "hanzi": "call、apply和bind三个方法有什么区别？",
      "pinyin": "call, apply hé bind sān ge fāng fǎ yǒu shén me qū bié?",
      "burmese": "call, apply နဲ့ bind method ၃ ခုက ဘာကွာခြားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_22",
      "hanzi": "前两者会立即执行函数，而bind会返回一个新的绑定了this的函数。",
      "pinyin": "qián liǎng zhě huì lì jí zhí xíng hán shù, ér bind huì fǎn huí yí ge xīn de bāng dìng le this de hán shù.",
      "burmese": "ပထမနှစ်ခုက function ကို ချက်ချင်း run တယ်၊ bind ကတော့ this ကိုတွဲချည်ထားတဲ့ function အသစ်တစ်ခု ပြန်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_23",
      "hanzi": "call和apply传参的区别是什么？",
      "pinyin": "call hé apply chuán cān de qū bié shì shén me?",
      "burmese": "call နဲ့ apply ကြားက parameter ပေးပို့ပုံကွာခြားချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_24",
      "hanzi": "call接受的是参数列表，而apply接受的是一个包含多个参数的数组。",
      "pinyin": "call jiē shòu de shì cān shù liè biǎo, ér apply jiē shòu de shì yí ge bāo hán duō ge cān shù de shù zǔ.",
      "burmese": "call က parameter အစဉ်လိုက်လက်ခံတယ်၊ apply ကတော့ parameter တွေပါတဲ့ array တစ်ခုလက်ခံတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_25",
      "hanzi": "你能解释一下什么是JavaScript的垃圾回收机制吗？",
      "pinyin": "nǐ néng jiě shì yí xià shén me shì JavaScript de lā jī huí shōu jī zhì ma?",
      "burmese": "JavaScript ရဲ့ Garbage Collection စနစ်ကဘာလဲဆိုတာ ရှင်းပြပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_26",
      "hanzi": "它会自动找出那些不再继续使用的变量，然后释放其占用的内存。",
      "pinyin": "tā huì zì dòng zhǎo chū nà xiē bù zài jì xù shǐ yòng de biàn liàng, rán hòu shì fàng qí zhàn yòng de nèi cún.",
      "burmese": "သူက ဆက်မသုံးတော့တဲ့ ကိန်းရှင်တွေကို အလိုအလျောက်ရှာဖွေပြီး သူတို့ယူထားတဲ့ Memory တွေကို ပြန်လွှတ်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_27",
      "hanzi": "现代浏览器主要采用哪种垃圾回收算法？",
      "pinyin": "xiàn dài liú lǎn qì zhǔ yào cǎi yòng nǎ zhǒng lā jī huí shōu suàn fǎ?",
      "burmese": "ခေတ်သစ်ဘရောက်ဇာတွေက ဘယ်လို Garbage Collection algorithm ကို အဓိကသုံးလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_28",
      "hanzi": "它们主要采用标记清除算法，并在特定情况下进行整理。",
      "pinyin": "tā men zhǔ yào cǎi yòng biāo jì qīng chú suàn fǎ, bìng zài tè dìng qíng kuàng xià jìn xíng zhěng lǐ.",
      "burmese": "သူတို့က Mark-and-Sweep algorithm ကို အဓိကသုံးပြီး အခြေအနေတစ်ချို့မှာ နေရာပြန်စီတာမျိုးလုပ်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_29",
      "hanzi": "我们怎样才能避免内存泄漏问题？",
      "pinyin": "wǒ men zěn yàng cái néng bì miǎn nèi cún xiè lòu wèn tí?",
      "burmese": "ငါတို့ Memory leak ပြဿနာကို ဘယ်လိုရှောင်ကြဉ်နိုင်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_30",
      "hanzi": "少用全局变量，及时清理定时器，并避免不合理的闭包引用。",
      "pinyin": "shǎo yòng quán jú biàn liàng, jí shí qīng lǐ dìng shí qì, bìng bì miǎn bù hé lǐ de bì bāo yǐn yòng.",
      "burmese": "Global variable သုံးတာလျှော့ပါ၊ timer တွေကို အချိန်မီဖျက်ပါ၊ ပြီးတော့ မသင့်တော်တဲ့ Closure အသုံးပြုမှုတွေကို ရှောင်ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_31",
      "hanzi": "深拷贝和浅拷贝有什么不同？",
      "pinyin": "shēn kǎo bèi hé qiǎn kǎo bèi yǒu shén me bù tóng?",
      "burmese": "Deep clone နဲ့ Shallow clone ကဘာကွာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_32",
      "hanzi": "浅拷贝只复制对象引用的地址，深拷贝则完全复制对象的值。",
      "pinyin": "qiǎn kǎo bèi zhǐ fù zhì duì xiàng yǐn yòng de dì zhǐ, shēn kǎo bèi zé wán quán fù zhì duì xiàng de zhí.",
      "burmese": "Shallow clone က Object ရဲ့ reference address ကိုပဲကူးတယ်၊ Deep clone ကတော့ Object ရဲ့ တန်ဖိုးတွေကို အပြည့်အဝကူးယူတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_33",
      "hanzi": "如何实现一个真正的深拷贝？",
      "pinyin": "rú hé shí xiàn yí ge zhēn zhèng de shēn kǎo bèi?",
      "burmese": "အစစ်အမှန် Deep clone တစ်ခုကို ဘယ်လိုဖန်တီးမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_34",
      "hanzi": "简单的方法是使用JSON序列化，或者使用现代的structuredClone API。",
      "pinyin": "jiǎn dān de fāng fǎ shì shǐ yòng JSON xù liè huà, huò zhě shǐ yòng xiàn dài de structuredClone API.",
      "burmese": "လွယ်ကူတဲ့နည်းကတော့ JSON stringify/parse ပြုလုပ်တာ၊ ဒါမှမဟုတ် ခေတ်သစ် structuredClone API ကိုသုံးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_35",
      "hanzi": "使用JSON方法进行深拷贝有什么缺点？",
      "pinyin": "shǐ yòng JSON fāng fǎ jìn xíng shēn kǎo bèi yǒu shén me quē diǎn?",
      "burmese": "JSON နည်းလမ်းကိုသုံးပြီး Deep clone လုပ်ရင် ဘာအားနည်းချက်ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_36",
      "hanzi": "它不能复制函数，也不能处理循环引用的对象。",
      "pinyin": "tā bù néng fù zhì hán shù, yě bù néng chǔ lǐ xún huán yǐn yòng de duì xiàng.",
      "burmese": "သူက function တွေကို မကူးယူနိုင်ဘူး၊ ပြီးတော့ Circular reference ဖြစ်နေတဲ့ Object တွေကိုလည်း ကိုင်တွယ်လို့မရဘူး。",
      "category": "js_interview"
    },
    {
      "id": "hsk4_37",
      "hanzi": "ES6中的Proxy对象可以用来做什么？",
      "pinyin": "ES6 zhōng de Proxy duì xiàng kě yǐ yòng lái zuò shén me?",
      "burmese": "ES6 က Proxy Object ကို ဘာတွေလုပ်ဖို့သုံးနိုင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_38",
      "hanzi": "它可以用来拦截和自定义对象的各种底层操作，比如属性的读取和设置。",
      "pinyin": "tā kě yǐ yòng lái lán jié hé zì dìng yì duì xiàng de gè zhǒng dǐ céng cāo zuò, bǐ rú shǔ xìng de dú qǔ hé shè zhì.",
      "burmese": "သူ့ကို Object တွေရဲ့ property ဖတ်ခြင်း၊ ရေးခြင်းလိုမျိုး အခြေခံလုပ်ဆောင်ချက်တွေကို ကြားဖြတ်ထိန်းချုပ်ဖို့ သုံးနိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_39",
      "hanzi": "Vue 3为什么使用Proxy代替Object.defineProperty来实现响应式原理？",
      "pinyin": "Vue 3 wèi shén me shǐ yòng Proxy dài tì Object.defineProperty lái shí xiàn xiǎng yìng shì yuán lǐ?",
      "burmese": "Vue 3 က ဘာလို့ Reactivity အလုပ်လုပ်ဖို့ Object.defineProperty အစား Proxy ကိုပြောင်းသုံးတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_40",
      "hanzi": "因为Proxy可以监听整个对象，包括数组的变化和新属性的添加。",
      "pinyin": "yīn wèi Proxy kě yǐ jiān tīng zhěng ge duì xiàng, bāo kuò shù zǔ de biàn huà hé xīn shǔ xìng de tiān jiā.",
      "burmese": "ဘာလို့လဲဆိုတော့ Proxy က Array အပြောင်းအလဲနဲ့ Property အသစ်ထပ်ထည့်တာတွေအပါအဝင် Object တစ်ခုလုံးကို နားထောင်နိုင်လို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_41",
      "hanzi": "请解释一下什么是柯里化（Currying）函数？",
      "pinyin": "qǐng jiě shì yí xià shén me shì kē lǐ huà (Currying) hán shù?",
      "burmese": "Currying function ဆိုတာဘာလဲ ရှင်းပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_42",
      "hanzi": "柯里化是把接受多个参数的函数变成接受一个单一参数的函数的过程。",
      "pinyin": "kē lǐ huà shì bǎ jiē shòu duō ge cān shù de hán shù biàn chéng jiē shòu yí ge dān yī cān shù de hán shù de guò chéng.",
      "burmese": "Currying ဆိုတာ Parameter အများကြီးလက်ခံတဲ့ function ကို Parameter တစ်ခုတည်းလက်ခံတဲ့ function အဖြစ်ပြောင်းလဲတဲ့လုပ်ငန်းစဉ်ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_43",
      "hanzi": "柯里化主要有哪些实际的应用场景？",
      "pinyin": "kē lǐ huà zhǔ yào yǒu nǎ xiē shí jì de yìng yòng chǎng jǐng?",
      "burmese": "Currying မှာ ဘယ်လိုလက်တွေ့အသုံးဝင်တဲ့နေရာတွေရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_44",
      "hanzi": "它可以用来延迟计算，以及实现参数复用的目的。",
      "pinyin": "tā kě yǐ yòng lái yán chí jì suàn, yǐ jí shí xiàn cān shù fù yòng de mù dì.",
      "burmese": "သူ့ကို တွက်ချက်မှုနောက်ဆုတ်ဖို့နဲ့ Parameter တွေကို ပြန်လည်အသုံးပြုဖို့ ရည်ရွယ်ပြီး သုံးနိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_45",
      "hanzi": "Map和WeakMap有什么核心的区别？",
      "pinyin": "Map hé WeakMap yǒu shén me hé xīn de qū bié?",
      "burmese": "Map နဲ့ WeakMap ရဲ့ အဓိကကွာခြားချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_46",
      "hanzi": "WeakMap的键只能是对象，且它是弱引用，防止内存泄漏。",
      "pinyin": "WeakMap de jiàn zhǐ néng shì duì xiàng, qiě tā shì ruò yǐn yòng, fáng zhǐ nèi cún xiè lòu.",
      "burmese": "WeakMap ရဲ့ key က Object ပဲဖြစ်နိုင်တယ်၊ ပြီးတော့ သူက Weak reference ဖြစ်လို့ Memory leak ကိုကာကွယ်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_47",
      "hanzi": "如何判断一个变量是不是数组？",
      "pinyin": "rú hé pàn duàn yí ge biàn liàng shì bú shì shù zǔ?",
      "burmese": "ကိန်းရှင်တစ်ခုက Array ဟုတ်မဟုတ် ဘယ်လိုဆုံးဖြတ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_48",
      "hanzi": "最可靠的方法是使用原生的Array.isArray()方法进行判断。",
      "pinyin": "zuì kě kào de fāng fǎ shì shǐ yòng yuán shēng de Array.isArray() fāng fǎ jìn xíng pàn duàn.",
      "burmese": "အစိတ်ချရဆုံးနည်းလမ်းကတော့ Native Array.isArray() method ကိုသုံးပြီး ဆုံးဖြတ်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_49",
      "hanzi": "当输入URL直到页面显示，中间经历了什么过程？",
      "pinyin": "dāng shū rù URL zhí dào yè miàn xiǎn shì, zhōng jiān jīng lì le shén me guò chéng?",
      "burmese": "URL ရိုက်ထည့်လိုက်ချိန်ကနေ စာမျက်နှာပေါ်လာတဲ့အထိ၊ ကြားထဲမှာ ဘယ်လိုဖြစ်စဉ်တွေဖြတ်ကျော်သွားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_50",
      "hanzi": "包含DNS解析、建立TCP连接、发送HTTP请求，最后完成页面的渲染过程。",
      "pinyin": "bāo hán DNS jiě xí, jiàn lì TCP lián jiē, fā sòng HTTP qǐng qiú, zuì hòu wán chéng yè miàn de xuàn rǎn guò chéng.",
      "burmese": "DNS resolve လုပ်တာ၊ TCP connection တည်ဆောက်တာ၊ HTTP request ပို့တာ၊ နောက်ဆုံး စာမျက်နှာ Render လုပ်တဲ့ဖြစ်စဉ်တွေပါဝင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_51",
      "hanzi": "React的核心思想是什么？",
      "pinyin": "React de hé xīn sī xiǎng shì shén me?",
      "burmese": "React ရဲ့ အဓိက အယူအဆ (Core concept) ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_52",
      "hanzi": "它的核心思想是组件化开发和基于状态的数据驱动视图。",
      "pinyin": "tā de hé xīn sī xiǎng shì zǔ jiàn huà kāi fā hé jī yú zhuàng tài de shù jù qū dòng shì tú.",
      "burmese": "သူ့ရဲ့အဓိကအယူအဆက Component အလိုက်ဖွံ့ဖြိုးတိုးတက်မှု (Component-based) နဲ့ State ပေါ်အခြေခံပြီး View ကိုပြောင်းလဲစေတာ (Data-driven) ဖြစ်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_53",
      "hanzi": "什么是React中的虚拟DOM（Virtual DOM）？",
      "pinyin": "shén me shì React zhōng de xū nǐ DOM (Virtual DOM)?",
      "burmese": "React က Virtual DOM ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_54",
      "hanzi": "它是真实DOM的轻量级JavaScript对象表示，用于提高更新效率。",
      "pinyin": "tā shì zhēn shí DOM de qīng liàng jí JavaScript duì xiàng biǎo shì, yòng yú tí gāo gèng xīn xiào lǜ.",
      "burmese": "သူက အစစ်အမှန် DOM ရဲ့ ပေါ့ပါးတဲ့ JavaScript object ကိုယ်စားပြုမှုတစ်ခုဖြစ်ပြီး၊ Update အလုပ်လုပ်ရတာပိုမြန်အောင်သုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_55",
      "hanzi": "Diff算法在React中是如何工作的？",
      "pinyin": "Diff suàn fǎ zài React zhōng shì rú hé gōng zuò de?",
      "burmese": "React က Diff Algorithm ဘယ်လိုအလုပ်လုပ်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_56",
      "hanzi": "它通过同层比较、对比组件类型和借助key属性来快速找出差异。",
      "pinyin": "tā tōng guò tóng céng bǐ jiào, duì bǐ zǔ jiàn lèi xíng hé jiè zhù key shǔ xìng lái kuài sù zhǎo chū chā yì.",
      "burmese": "သူက Level တူတာချင်းယှဉ်တာ၊ Component type တွေကို ယှဉ်တာနဲ့ Key property တွေကိုသုံးပြီး ကွာခြားချက်တွေကို အမြန်ရှာဖွေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_57",
      "hanzi": "在列表渲染中，为什么总是强调要提供唯一的key属性？",
      "pinyin": "zài liè biǎo xuàn rǎn zhōng, wèi shén me zǒng shì qiáng diào yào tí gōng wéi yī de key shǔ xìng?",
      "burmese": "List တွေ render လုပ်တဲ့အခါ ဘာလို့ Unique key property ပေးဖို့အမြဲအလေးအနက်ထားပြောတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_58",
      "hanzi": "因为key能帮助React精准追踪哪些元素被修改、添加或删除。",
      "pinyin": "yīn wèi key néng bāng zhù React jīng zhǔn zhuī zōng nǎ xiē yuán sù bèi xiū gǎi, tiān jiā huò shān chú.",
      "burmese": "ဘာလို့လဲဆိုတော့ Key က React ကို ဘယ် element တွေပြင်ဆင်တာ၊ ထည့်တာ၊ သို့မဟုတ် ဖျက်တာခံရလဲဆိုတာ တိတိကျကျခြေရာခံနိုင်အောင် ကူညီပေးလို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_59",
      "hanzi": "如果使用数组的索引（index）作为key会有什么潜在问题？",
      "pinyin": "rú guǒ shǐ yòng shù zǔ de suǒ yǐn (index) zuò wéi key huì yǒu shén me qián zài wèn tí?",
      "burmese": "Array ရဲ့ index ကို key အဖြစ်သုံးရင် ဘာပြဿနာတွေဖြစ်လာနိုင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_60",
      "hanzi": "当列表中的元素重新排序或删除时，可能导致渲染错误和性能下降。",
      "pinyin": "dāng liè biǎo zhōng de yuán sù chóng xīn pái xù huò shān chú shí, kě néng dǎo zhì xuàn rǎn cuò wù hé xìng néng xià jiàng.",
      "burmese": "စာရင်းထဲက element တွေ နေရာပြန်စီတာ ဒါမှမဟုတ် ဖျက်လိုက်တာလုပ်တဲ့အခါ Render မှားတာနဲ့ စွမ်းဆောင်ရည်ကျတာတွေ ဖြစ်နိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_61",
      "hanzi": "React Hooks解决了类组件的哪些痛点？",
      "pinyin": "React Hooks jiě jué le lèi zǔ jiàn de nǎ xiē tòng diǎn?",
      "burmese": "React Hooks က Class component တွေရဲ့ ဘယ်အခက်အခဲတွေကို ဖြေရှင်းပေးခဲ့လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_62",
      "hanzi": "它解决了状态逻辑难以复用、生命周期方法混乱以及this指向等问题。",
      "pinyin": "tā jiě jué le zhuàng tài luó ji nán yǐ fù yòng, shēng mìng zhōu qī fāng fǎ hùn luàn yǐ jí this zhǐ xiàng děng wèn tí.",
      "burmese": "သူက State logic တွေကို ပြန်သုံးဖို့ခက်တာ၊ Lifecycle method တွေရှုပ်ထွေးတာနဲ့ this ရည်ညွှန်းချက်ပြဿနာတွေကို ဖြေရှင်းပေးခဲ့တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_63",
      "hanzi": "请说明useEffect和useLayoutEffect的执行时机有何不同？",
      "pinyin": "qǐng shuō míng useEffect hé useLayoutEffect de zhí xíng shí jī yǒu hé bù tóng?",
      "burmese": "useEffect နဲ့ useLayoutEffect ယှဉ်ရင် အလုပ်လုပ်တဲ့အချိန် ဘာကွာခြားလဲ ရှင်းပြပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_64",
      "hanzi": "useEffect是在浏览器绘制完成后异步执行的，而useLayoutEffect是在绘制前同步执行的。",
      "pinyin": "useEffect shì zài liú lǎn qì huì zhì wán chéng hòu yì bù zhí xíng de, ér useLayoutEffect shì zài huì zhì qián tóng bù zhí xíng de.",
      "burmese": "useEffect က ဘရောက်ဇာကရေးဆွဲပြီးမှ Asynchronous အလုပ်လုပ်တယ်၊ useLayoutEffect ကတော့ မရေးဆွဲခင် Synchronous အလုပ်လုပ်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_65",
      "hanzi": "什么是React中的状态提升（Lifting State Up）？",
      "pinyin": "shén me shì React zhōng de zhuàng tài tí shēng (Lifting State Up)?",
      "burmese": "React မှာ Lifting State Up ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_66",
      "hanzi": "它是将多个组件需要共享的状态，移动到它们最近的共同父组件中进行管理。",
      "pinyin": "tā shì jiāng duō ge zǔ jiàn xū yào gòng xiǎng de zhuàng tài, yí dòng dào tā men zuì jīn de gòng tóng fù zǔ jiàn zhōng jìn xíng guǎn lǐ.",
      "burmese": "Component အများကြီးက မျှဝေသုံးရမယ့် State ကို သူတို့နဲ့အနီးဆုံးဘုံမိဘ Component ဆီရွှေ့ပြီး စီမံတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_67",
      "hanzi": "如果组件树非常深，状态传递会遇到什么困难？",
      "pinyin": "rú guǒ zǔ jiàn shù fēi cháng shēn, zhuàng tài zhuǎn dì huì yù dào shén me kùn nán?",
      "burmese": "Component tree က အရမ်းနက်ရင် State ပို့တဲ့အခါ ဘာအခက်အခဲတွေ့ရမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_68",
      "hanzi": "会产生“属性传递地狱（Prop Drilling）”，即中间层组件被迫传递它们不需要的属性。",
      "pinyin": "huì chǎn shēng 'shǔ xìng zhuǎn dì dì yù (Prop Drilling)', jí zhōng jiān céng zǔ jiàn bèi pò zhuǎn dì tā men bù xū yào de shǔ xìng.",
      "burmese": "Prop Drilling (Property အဆင့်ဆင့်ပို့ရတဲ့ငရဲ) ဖြစ်လာမယ်၊ အလယ်အလွှာ Component တွေက ကိုယ်မလိုတဲ့ property တွေကို အတင်းပို့ပေးနေရမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_69",
      "hanzi": "为了解决Prop Drilling，我们通常采纳什么方案？",
      "pinyin": "wèi le jiě jué Prop Drilling, wǒ men tōng cháng cǎi nà shén me fāng àn?",
      "burmese": "Prop Drilling ကိုဖြေရှင်းဖို့ ငါတို့များသောအားဖြင့် ဘယ်လိုနည်းလမ်းကိုကျင့်သုံးလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_70",
      "hanzi": "可以使用Context API或者全局状态管理库，比如Redux或Zustand。",
      "pinyin": "kě yǐ shǐ yòng Context API huò zhě quán jú zhuàng tài guǎn lǐ kù, bǐ rú Redux huò Zustand.",
      "burmese": "Context API ဒါမှမဟုတ် (Redux ဒါမှမဟုတ် Zustand) လိုမျိုး Global State ကိုစီမံကွပ်ကဲတဲ့ Library တွေကို သုံးနိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_71",
      "hanzi": "React.memo的作用是在什么场景下使用的？",
      "pinyin": "React.memo de zuò yòng shì zài shén me chǎng jǐng xià shǐ yòng de?",
      "burmese": "React.memo ရဲ့အသုံးဝင်မှုက ဘယ်လိုအခြေအနေမှာ သုံးတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_72",
      "hanzi": "它用于包裹纯功能组件，当props没有改变时，组件就不会重新渲染。",
      "pinyin": "tā yòng yú bāo guǒ chún gōng néng zǔ jiàn, dāng props méi yǒu gǎi jiàn shí, zǔ jiàn jiù bú huì chóng xīn xuàn rǎn.",
      "burmese": "သူ့ကို Pure functional component တွေကို包裹(ထုပ်ပိုး)ဖို့သုံးတယ်၊ props တွေမပြောင်းရင် Component က ပြန်လည်ရေးဆွဲ(Render)မှာမဟုတ်ဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_73",
      "hanzi": "useMemo和useCallback之间最根本的区别在哪？",
      "pinyin": "useMemo hé useCallback zhī jiān zuì gēn běn de qū bié zài nǎ?",
      "burmese": "useMemo နဲ့ useCallback ကြားက အခြေခံအကျဆုံးကွာခြားချက်က ဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_74",
      "hanzi": "useMemo用来缓存计算结果的值，而useCallback用来缓存函数的引用。",
      "pinyin": "useMemo yòng lái huǎn cún jì suàn jié guǒ de zhí, ér useCallback yòng lái huǎn cún hán shù de yǐn yòng.",
      "burmese": "useMemo က တွက်ချက်ထားတဲ့ တန်ဖိုး(value) ကို cache လုပ်ဖို့သုံးတယ်၊ useCallback ကတော့ function ရဲ့ reference ကို cache လုပ်ဖို့သုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_75",
      "hanzi": "什么是React中的高阶组件（HOC）？",
      "pinyin": "shén me shì React zhōng de gāo jiē zǔ jiàn (HOC)?",
      "burmese": "React မှာ Higher-Order Component (HOC) ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_76",
      "hanzi": "它是一个接受组件作为参数，并返回一个被增强的新组件的纯函数。",
      "pinyin": "tā shì yí ge jiē shòu zǔ jiàn zuò wéi cān shù, bìng fǎn huí yí ge bèi zēng qiáng de xīn zǔ jiàn de chún hán shù.",
      "burmese": "သူက Component တစ်ခုကို parameter အဖြစ်လက်ခံပြီး၊ စွမ်းဆောင်ရည်မြှင့်တင်ထားတဲ့ Component အသစ်ပြန်ပေးတဲ့ Pure function တစ်ခုပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_77",
      "hanzi": "高阶组件通常用来解决哪些需求？",
      "pinyin": "gāo jiē zǔ jiàn tōng cháng yòng lái jiě jué nǎ xiē xū qiú?",
      "burmese": "HOC ကို များသောအားဖြင့် ဘယ်လိုလိုအပ်ချက်တွေကို ဖြေရှင်းဖို့သုံးလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_78",
      "hanzi": "常用于代码复用、逻辑抽象，比如实现路由保护或注入权限校验。",
      "pinyin": "cháng yòng yú dài mǎ fù yòng, luó ji chóu xiàng, bǐ rú shí xiàn lù yóu bǎo hù huò zhù rù quán xiàn jiào yàn.",
      "burmese": "Code ပြန်သုံးတာ၊ Logic ခွဲထုတ်တာတွေမှာ သုံးလေ့ရှိတယ်၊ ဥပမာ Route ကာကွယ်တာ ဒါမှမဟုတ် Permission စစ်ဆေးတာတွေ ထည့်သွင်းဖို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_79",
      "hanzi": "你能简单解释React Fiber架构的核心优势吗？",
      "pinyin": "nǐ néng jiǎn dān jiě shì React Fiber jià gòu de hé xīn yōu shì ma?",
      "burmese": "React Fiber Architecture ရဲ့ အဓိကအားသာချက်ကို ရိုးရိုးရှင်းရှင်း ရှင်းပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_80",
      "hanzi": "它将渲染过程拆分为多个由于可中断的微小任务，防止了主线程阻塞。",
      "pinyin": "tā jiāng xuàn rǎn guò chéng chāi fēn wéi duō ge yóu yú kě zhōng duàn de wēi xiǎo rèn wu, fáng zhǐ le zhǔ xiàn chéng zǔ sè.",
      "burmese": "သူက Render လုပ်တဲ့ဖြစ်စဉ်ကို ရပ်တန့်နိုင်တဲ့ အသေးစားအလုပ်ငယ်လေးတွေအဖြစ် ခွဲထုတ်လိုက်ပြီး Main thread ပိတ်ဆို့တာကို ကာကွယ်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_81",
      "hanzi": "什么是受控组件（Controlled Component）？",
      "pinyin": "shén me shì shòu kǒng zǔ jiàn (Controlled Component)?",
      "burmese": "Controlled Component ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_82",
      "hanzi": "它是指表单元素的值完全由React的state驱动和控制的组件。",
      "pinyin": "tā shì zhǐ biǎo dān yuán sù de zhí wán quán yóu React de state qū dòng hé kǒng zhì de zǔ jiàn.",
      "burmese": "သူက Form element တွေရဲ့တန်ဖိုးကို React ရဲ့ state ကနေပဲ အပြည့်အဝတွန်းအားပေးထိန်းချုပ်ထားတဲ့ Component ကိုဆိုလိုတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_83",
      "hanzi": "如果我们需要直接访问DOM元素，应该使用什么Hook？",
      "pinyin": "rú guǒ wǒ men xū yào zhí jiē fǎng wèn DOM yuán sù, yīng gāi shǐ yòng shén me Hook?",
      "burmese": "ငါတို့ DOM element တွေကို တိုက်ရိုက်ခေါ်သုံးချင်ရင် ဘယ် Hook ကိုသုံးသင့်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_84",
      "hanzi": "我们应该使用useRef来获取对应的DOM引用。它不会触发重新渲染。",
      "pinyin": "wǒ men yīng gāi shǐ yòng useRef lái huò qǔ duì yìng de DOM yǐn yòng. tā bú huì chù fā chóng xīn xuàn rǎn.",
      "burmese": "ငါတို့ DOM ရဲ့ reference ကိုရဖို့ useRef ကိုသုံးသင့်တယ်။ သူက ပြန်လည်ရေးဆွဲ(Re-render)စေမှာ မဟုတ်ဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_85",
      "hanzi": "React生态中的Redux是什么？",
      "pinyin": "React shēng tài zhōng de Redux shì shén me?",
      "burmese": "React Ecosystem ထဲက Redux ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_86",
      "hanzi": "它是一个可预测的、基于单一状态树管理应用全局状态的容器。",
      "pinyin": "tā shì yí ge kě yù cè de, jī yú dān yī zhuàng tài shù guǎn lǐ yìng yòng quán jú zhuàng tài de róng qì.",
      "burmese": "သူက အက်ပ်ရဲ့ Global state ကို State tree တစ်ခုတည်းအပေါ်အခြေခံပြီး ကြိုတင်ခန့်မှန်းနိုင်တဲ့ပုံစံနဲ့ စီမံပေးတဲ့ container တစ်ခုပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_87",
      "hanzi": "在Redux中，不应该直接修改State，那要怎么更新状态？",
      "pinyin": "zài Redux zhōng, bù yīng gāi zhí jiē xiū gǎi State, nà yào zěn me gèng xīn zhuàng tài?",
      "burmese": "Redux မှာ State ကိုတိုက်ရိုက်ပြင်လို့မရဘူးဆိုရင်၊ State ကိုဘယ်လို Update လုပ်ရမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_88",
      "hanzi": "必须由Reducer函数根据派发（dispatch）的动作（Action）返回新的State副本。",
      "pinyin": "bì xū yóu Reducer hán shù gēn jù pài fā (dispatch) de dòng zuò (Action) fǎn huí xīn de State fù běn.",
      "burmese": "Reducer function ကနေ Dispatch လုပ်လိုက်တဲ့ Action ပေါ်မူတည်ပြီး State မိတ္တူအသစ်တစ်ခုကို မဖြစ်မနေပြန်ပေးရမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_89",
      "hanzi": "在React 18中，并发模式（Concurrent Mode）带来了什么好处？",
      "pinyin": "zài React 18 zhōng, bìng fā mó shì (Concurrent Mode) dài lái le shén me hǎo chù?",
      "burmese": "React 18 မှာ Concurrent Mode က ဘာအကျိုးကျေးဇူးတွေယူဆောင်လာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_90",
      "hanzi": "它允许React中断那些低优先级的渲染，以便优先响应用户的直接输入。",
      "pinyin": "tā yǔn xǔ React zhōng duàn nà xiē dī yōu xiān jí de xuàn rǎn, yǐ biàn yōu xiān xiǎng yìng yòng hù de zhí jiē shū rù.",
      "burmese": "သူက ယူဆာရဲ့ တိုက်ရိုက် input တွေကို ဦးစားပေးတုံ့ပြန်နိုင်ဖို့ ဦးစားပေးအဆင့်နိမ့်တဲ့ Render တွေကို ရပ်တန့်ခွင့်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_91",
      "hanzi": "useTransition主要是用来处理什么问题的？",
      "pinyin": "useTransition zhǔ yào shì yòng lái chǔ lǐ shén me wèn tí de?",
      "burmese": "useTransition က အဓိကအားဖြင့် ဘယ်လိုပြဿနာတွေကို ကိုင်တွယ်ဖို့သုံးတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_92",
      "hanzi": "它用来标记那些会引起卡顿的非紧急状态更新，让UI能够保持流畅。",
      "pinyin": "tā yòng lái biāo jì nà xiē huì yǐn qǐ kǎ dùn de fēi jǐn jí zhuàng tài gèng xīn, ràng UI néng gòu bǎo chí liú chàng.",
      "burmese": "သူက UI ကိုချောမွေ့နေစေဖို့ ထစ်ငေါ့စေနိုင်တဲ့ အရေးပေါ်မဟုတ်တဲ့ State update တွေကို အမှတ်အသားလုပ်ဖို့သုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_93",
      "hanzi": "什么是React服务端渲染（SSR）？",
      "pinyin": "shén me shì React fú wù duān xuàn rǎn (SSR)?",
      "burmese": "React Server-Side Rendering (SSR) ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_94",
      "hanzi": "它是在服务器上预先将React组件转换成HTML字符串后再发送给浏览器。",
      "pinyin": "tā shì zài fú wù qì shang yù xiān jiāng React zǔ jiàn zhuǎn huàn chéng HTML zì fú chuàn hòu zài fā sòng gěi liú lǎn qì.",
      "burmese": "သူက ဆာဗာပေါ်မှာ React Component တွေကို HTML string အဖြစ် ကြိုတင်ပြောင်းလဲပြီးမှ ဘရောက်ဇာဆီပို့တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_95",
      "hanzi": "SSR相对于CSR（客户端渲染）的最大优点是什么？",
      "pinyin": "SSR xiàng duì yú CSR (kè hù duān xuàn rǎn) de zuì dà yōu diǎn shì shén me?",
      "burmese": "SSR က CSR (Client-Side Rendering) ထက်သာတဲ့ အကြီးမားဆုံးအားသာချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_96",
      "hanzi": "它的首屏加载速度更快，而且对搜索引擎优化（SEO）更加友好。",
      "pinyin": "tā de shǒu píng jiā zǎi sù dù gèng kuài, ér qiě duì sōu suǒ yǐn qíng yōu huà (SEO) gèng jiā yǒu hǎo.",
      "burmese": "သူ့ရဲ့ First-paint load time က ပိုမြန်တယ်၊ ပြီးတော့ SEO (Search Engine Optimization) အတွက်လည်း ပိုအဆင်ပြေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_97",
      "hanzi": "Next.js中的静态生成（SSG）和SSR有什么不同？",
      "pinyin": "Next.js zhōng de jìng tài shēng chéng (SSG) hé SSR yǒu shén me bù tóng?",
      "burmese": "Next.js က Static Generation (SSG) နဲ့ SSR ကဘာကွာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_98",
      "hanzi": "SSG是在构建阶段生成HTML文件，而SSR是在每次用户收到请求时动态生成。",
      "pinyin": "SSG shì zài gòu jiàn jiē duàn shēng chéng HTML wén jiàn, ér SSR shì zài měi cì yòng hù shōu dào qǐng qiú shí dòng tài shēng chéng.",
      "burmese": "SSG က Build လုပ်တဲ့အဆင့်မှာ HTML ဖိုင်ကို ထုတ်ပေးတယ်၊ SSR ကတော့ ယူဆာဆီက Request ရောက်လာတိုင်း ရောက်လာတိုင်း တက်ကြွစွာ ထုတ်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_99",
      "hanzi": "什么是React Server Components（RSC）？",
      "pinyin": "shén me shì React Server Components (RSC)?",
      "burmese": "React Server Components (RSC) ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_100",
      "hanzi": "它允许我们在服务器端专门渲染独立的非交互组件，从而显著减少打包体积。",
      "pinyin": "tā yǔn xǔ wǒ men zài fú wù qì duān zhuān mén xuàn rǎn dú lì de fēi jiāo hù zǔ jiàn, cóng ér xiǎn zhù jiǎn shǎo dǎ bāo tǐ jī.",
      "burmese": "သူက အပြန်အလှန်ဆက်သွယ်မှုမလုပ်တဲ့ (Non-interactive) သီးခြား Component တွေကို ဆာဗာမှာပဲသီးသန့် Render လုပ်ခွင့်ပေးပြီး Bundle အရွယ်အစားကို သိသိသာသာလျော့ကျစေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_101",
      "hanzi": "TypeScript中interface和type有什么区别？",
      "pinyin": "TypeScript zhōng interface hé type yǒu shén me qū bié?",
      "burmese": "TypeScript မှာ interface နဲ့ type က ဘာကွာခြားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_102",
      "hanzi": "interface主要用于定义对象的形状并且支持声明合并，而type可以定义基本类型和联合类型。",
      "pinyin": "interface zhǔ yào yòng yú dìng yì duì xiàng de xíng zhuàng bìng qiě zhī chí shēng míng hé bìng, ér type kě yǐ dìng yì jī běn lèi xíng hé lián hé lèi xíng.",
      "burmese": "interface က Object အရေအတွက်ပုံစံသတ်မှတ်ဖို့အဓိကသုံးပြီး ထပ်ခါကြေညာတာကိုပေါင်းစပ်လို့ရတယ်၊ type ကတော့ အခြေခံအမျိုးအစားနဲ့ တွဲဖက်အမျိုးအစား(Union) တွေကိုပါသတ်မှတ်နိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_103",
      "hanzi": "什么是泛型（Generics）？为什么我们需要它？",
      "pinyin": "shén me shì fàn xíng (Generics)? wèi shén me wǒ men xū yào tā?",
      "burmese": "Generics ဆိုတာဘာလဲ? ငါတို့သူ့ကိုဘာကြောင့်လိုအပ်တာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_104",
      "hanzi": "泛型允许我们在定义函数或类时暂时不指定具体类型，从而提高代码的复用性和类型安全。",
      "pinyin": "fàn xíng yǔn xǔ wǒ men zài dìng yì hán shù huò lèi shí zàn shí bù zhǐ dìng jù tǐ lèi xíng, cóng ér tí gāo dài mǎ de fù yòng xìng hé lèi xíng ān quán.",
      "burmese": "Generics က function ဒါမှမဟုတ် class တွေကြေညာတဲ့အခါ အမျိုးအစားအတိအကျမသတ်မှတ်ဘဲ ခေတ္တချန်ထားခွင့်ပြုတယ်၊ ဒါက Code ကိုပြန်သုံးဖို့နဲ့ Type လုံခြုံရေးကို မြှင့်တင်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_105",
      "hanzi": "你能列举几个常用的TypeScript内置工具类型吗？",
      "pinyin": "nǐ néng liè jǔ jǐ ge cháng yòng de TypeScript nèi zhì gōng jù lèi xíng ma?",
      "burmese": "TypeScript မှာအသုံးများတဲ့ Built-in Utility Type အနည်းငယ်လောက်ပြပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_106",
      "hanzi": "常见的有Partial（可选）、Required（必填）、Pick（挑选）和Omit（忽略）。",
      "pinyin": "cháng jiàn de yǒu Partial (kě xuǎn), Required (bì tián), Pick (tiāo xuǎn) hé Omit (hū lüè).",
      "burmese": "အသုံးများတာတွေကတော့ Partial (ရွေးချယ်ခွင့်ရ)၊ Required (မဖြစ်မနေ)၊ Pick (ရွေးချယ်) နဲ့ Omit (ဖယ်ထုတ်) တွေပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_107",
      "hanzi": "any和unknown类型有什么本质区别？",
      "pinyin": "any hé unknown lèi xíng yǒu shén me běn zhì qū bié?",
      "burmese": "any နဲ့ unknown type ကြားက အခြေခံကွာခြားချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_108",
      "hanzi": "any会完全关闭类型检查，而unknown是安全的any，在使用前必须先进行类型断言或缩小。",
      "pinyin": "any huì wán quán guān bì lèi xíng jiǎn chá, ér unknown shì ān quán de any, zài shǐ yòng qián bì xū xiān jìn xíng lèi xíng duàn yán huò suō xiǎo.",
      "burmese": "any က type စစ်ဆေးတာကို လုံးဝပိတ်လိုက်တယ်၊ unknown ကတော့ လုံခြုံတဲ့ any ပါပဲ၊ မသုံးခင်မှာ type ကိုအရင်အတည်ပြု(Type assertion/narrowing)ရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_109",
      "hanzi": "什么是类型保护（Type Guards），你是如何实现它的？",
      "pinyin": "shén me shì lèi xíng bǎo hù (Type Guards), nǐ shì rú hé shí xiàn tā de?",
      "burmese": "Type Guards ဆိုတာဘာလဲ၊ မင်းသူ့ကိုဘယ်လိုဖန်တီးလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_110",
      "hanzi": "它通过一些表达式在运行时缩小变量的类型范围，通常使用typeof、instanceof或自定义函数。",
      "pinyin": "tā tōng guò yì xiē biǎo dá shì zài yùn xíng shí suō xiǎo biàn liàng de lèi xíng fán wéi, tōng cháng shǐ yòng typeof, instanceof huò zì dìng yì hán shù.",
      "burmese": "သူက run နေချိန်မှာ ကိန်းရှင်ရဲ့ Type နယ်ပယ်ကို ကျဉ်းမြောင်းစေတဲ့ ဖော်ပြချက်တွေပါ၊ များသောအားဖြင့် typeof, instanceof ဒါမှမဟုတ် custom function တွေကိုသုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_111",
      "hanzi": "在面向对象编程中，SOLID原则分别代表什么？",
      "pinyin": "zài miàn xiàng duì xiàng biān chéng zhōng, SOLID yuán zé fēn bié dài biǎo shén me?",
      "burmese": "OOP မှာ SOLID မူပိုင်စီမံချက်က ဘာကိုကိုယ်စားပြုလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_112",
      "hanzi": "它们分别是单一职责、开闭原则、里氏替换、接口隔离和依赖倒置原则。",
      "pinyin": "tā men fēn bié shì dān yī zhí zé, kāi bì yuán zé, lǐ shì tì huàn, jiē kǒu gé lí hé yī lài dào zhì yuán zé.",
      "burmese": "သူတို့က Single Responsibility, Open-Closed, Liskov Substitution, Interface Segregation နဲ့ Dependency Inversion တို့ဖြစ်ပါတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_113",
      "hanzi": "你能通俗地解释一下单一职责原则（SRP）吗？",
      "pinyin": "nǐ néng tōng sú de jiě shì yí xià dān yī zhí zé yuán zé (SRP) ma?",
      "burmese": "Single Responsibility Principle (SRP) ကို ရိုးရှင်းစွာ ရှင်းပြပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_114",
      "hanzi": "就是说一个类或者一个模块应该只有一个引起它发生改变的原因。",
      "pinyin": "jiù shì shuō yí ge lèi huò zhě yí ge mó kuài yīng gāi zhǐ yǒu yí ge yǐn qǐ tā fā shēng gǎi biàn de yuán yīn.",
      "burmese": "ဆိုလိုတာက Class တစ်ခု ဒါမှမဟုတ် Module တစ်ခုမှာ သူ့ကိုပြောင်းလဲစေမယ့် အကြောင်းပြချက်တစ်ခုပဲ ရှိသင့်တာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_115",
      "hanzi": "开闭原则（OCP）要求软件实体必须做什么？",
      "pinyin": "kāi bì yuán zé (OCP) yāo qiú ruǎn jiàn shí tǐ bì xū zuò shén me?",
      "burmese": "Open-Closed Principle (OCP) အတွက် ဆော့ဖ်ဝဲလ်အစိတ်အပိုင်းတွေက ဘာလုပ်ရမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_116",
      "hanzi": "要求它们对扩展是开放的，但是对修改是封闭的。",
      "pinyin": "yāo qiú tā men duì kuò zhǎn shì kāi fàng de, dàn shì duì xiū gǎi shì fēng bì de.",
      "burmese": "သူတို့ကို တိုးချဲ့အသုံးချဖို့ (Extension) အတွက် ဖွင့်ထားရမယ်၊ ဒါပေမယ့် ပြင်ဆင်မှုပြောင်းလဲမှု (Modification) အတွက်တော့ ပိတ်ထားရမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_117",
      "hanzi": "什么是依赖注入（Dependency Injection）？它有什么好处？",
      "pinyin": "shén me shì yī lài zhù rù (Dependency Injection)? tā yǒu shén me hǎo chù?",
      "burmese": "Dependency Injection ဆိုတာဘာလဲ? သူ့မှာဘာအကျိုးကျေးဇူးရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_118",
      "hanzi": "它是从外部将依赖项传递给对象，而不是让对象内部自己创建。这样更容易编写测试。",
      "pinyin": "tā shì cóng wài bù jiāng yī lài xiàng zhuǎn dì gěi duì xiàng, ér bú shì ràng duì xiàng nèi bù zì jǐ chuàng jiàn. zhè yàng gèng róng yì biān xiě cè shì.",
      "burmese": "သူက Object ကို အထဲမှာကိုယ်တိုင်ဖန်တီးစေမယ့်အစား လိုအပ်တဲ့မှီခိုမှုတွေကို အပြင်ကနေလှမ်းပို့ပေးတာပါ၊ ဒါကြောင့် Test တွေရေးရပိုလွယ်ကူစေတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_119",
      "hanzi": "在前端开发中，什么是单例模式（Singleton Pattern）？",
      "pinyin": "zài qián duān kāi fā zhōng, shén me shì dān lì mó shì (Singleton Pattern)?",
      "burmese": "Frontend development မှာ Singleton Pattern ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_120",
      "hanzi": "它确保一个类只有一个实例，并提供一个全局访问点来获取该实例。",
      "pinyin": "tā què bǎo yí ge lèi zhǐ yǒu yí ge shí lì, bìng tí gōng yí ge quán jú fǎng wèn diǎn lái huò qǔ gāi shí lì.",
      "burmese": "သူက Class တစ်ခုမှာ Instance တစ်ခုပဲရှိတာသေချာစေပြီး သူ့ကိုယူသုံးဖို့ Global နေရာတစ်ခုတည်းပေးထားတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_121",
      "hanzi": "观察者模式（Observer）和发布订阅模式（Pub-Sub）一样吗？",
      "pinyin": "guān chá zhě mó shì (Observer) hé fā bù dìng yuè mó shì (Pub-Sub) yí yàng ma?",
      "burmese": "Observer pattern နဲ့ Pub-Sub pattern ကအတူတူပဲလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_122",
      "hanzi": "不完全一样，发布订阅模式多了一个事件调度中心，发布者和订阅者互不了解。",
      "pinyin": "bù wán quán yí yàng, fā bù dìng yuè mó shì duō le yí ge shì jiàn diào dù zhōng xīn, fā bù zhě hé dìng yuè zhě hù bù liǎo jiě.",
      "burmese": "လုံးဝတူတာမဟုတ်ဘူး၊ Pub-Sub မှာ Event broker(အလယ်ကပ်) တစ်ခုပိုပါပြီး၊ Publisher နဲ့ Subscriber က အချင်းချင်းမသိကြဘူး。",
      "category": "js_interview"
    },
    {
      "id": "hsk4_123",
      "hanzi": "什么是工厂模式（Factory Pattern）？",
      "pinyin": "shén me shì gōng chǎng mó shì (Factory Pattern)?",
      "burmese": "Factory Pattern ဆိုတာဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_124",
      "hanzi": "它是不暴露创建逻辑的情况下，用来创建大量拥有相同接口的对象的方法。",
      "pinyin": "tā shì bù bāo lù chuàng jiàn luó ji de qíng kuàng xià, yòng lái chuàng jiàn dà liàng yōng yǒu xiāng tóng jiē kǒu de duì xiàng de fāng fǎ.",
      "burmese": "သူက ဖန်တီးတဲ့ Logic တွေကိုမဖွင့်ပြဘဲ Interface တူညီတဲ့ Object အများကြီးကို ဖန်တီးပေးတဲ့ နည်းလမ်းပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_125",
      "hanzi": "为什么前端框架现在都在推崇合成事件（Synthetic Events）？",
      "pinyin": "wèi shén me qián duān kuāng jià xiàn zài dōu zài tuī chóng hé chéng shì jiàn (Synthetic Events)?",
      "burmese": "ဘာလို့ Frontend Framework တွေကအခု Synthetic Event တွေကို အားပေးလာကြတာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_126",
      "hanzi": "主要是为了抹平不同浏览器之间的事件系统差异，并利用事件委托提高性能。",
      "pinyin": "zhǔ yào shì wèi le mǒ píng bù tóng liú lǎn qì zhī jiān de shì jiàn xì tǒng chā yì, bìng lì yòng shì jiàn wěi tuō tí gāo xìng néng.",
      "burmese": "အဓိကက Browser အမျိုးမျိုးရဲ့ Event စနစ်ကွာခြားချက်တွေကို ဖျောက်ဖျက်ဖို့နဲ့ Event delegation ကိုသုံးပြီး စွမ်းဆောင်ရည်မြှင့်တင်ဖို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_127",
      "hanzi": "你能具体说说浏览器的同源策略（Same-Origin Policy）吗？",
      "pinyin": "nǐ néng jù tǐ shuō shuō liú lǎn qì de tóng yuán cè lüè (Same-Origin Policy) ma?",
      "burmese": "Browser ရဲ့ Same-Origin Policy ကို အတိအကျပြောပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_128",
      "hanzi": "它是一个安全机制，限制不同协议、域名或端口之间的文档脚本相互交互。",
      "pinyin": "tā shì yí ge ān quán jī zhì, xiàn zhì bù tóng xié yì, yù míng huò duān kǒu zhī jiān de wén dǎng jiǎo běn xiāng hǔ jiāo hù.",
      "burmese": "သူက မတူညီတဲ့ Protocol, Domain ဒါမှမဟုတ် Port တွေကြားက Document တွေ script တွေ အပြန်အလှန်ချိတ်ဆက်တာကို ကန့်သတ်ထားတဲ့ လုံခြုံရေးစနစ်ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_129",
      "hanzi": "当前端遇到CORS（跨域资源共享）错误时，应该怎么解决？",
      "pinyin": "dāng qián duān yù dào CORS (kuà yù zī yuán gòng xiǎng) cuò wù shí, yīng gāi zěn me jiě jué?",
      "burmese": "Frontend က CORS error ကြုံလာရင် ဘယ်လိုဖြေရှင်းသင့်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_130",
      "hanzi": "最根本的方法是让后端配置正确的响应头（如Access-Control-Allow-Origin）。",
      "pinyin": "zuì gēn běn de fāng fǎ shì ràng hòu duān pèi zhì zhèng què de xiǎng yìng tóu (rú Access-Control-Allow-Origin).",
      "burmese": "အခြေခံအကျဆုံးနည်းလမ်းကတော့ Backend ကို မှန်ကန်တဲ့ Response header တွေပေးဖို့လုပ်ခိုင်းတာပါ။ (ဥပမာ Access-Control-Allow-Origin)",
      "category": "js_interview"
    },
    {
      "id": "hsk4_131",
      "hanzi": "如果在本地开发中遇到CORS限制，有替代方案吗？",
      "pinyin": "rú guǒ zài běn dì kāi fā zhōng yù dào CORS xiàn zhì, yǒu tì dài fāng àn ma?",
      "burmese": "Local Development မှာ CORS ကန့်သတ်ချက်ကြုံရရင် အခြားအစားထိုးနည်းဗျူဟာရှိလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_132",
      "hanzi": "可以在开发服务器上配置代理转发（Proxy），将请求伪装成同源请求发给后端。",
      "pinyin": "kě yǐ zài kāi fā fú wù qì shang pèi zhì dài lǐ zhuǎn fā (Proxy), jiāng qǐng qiú wěi zhuāng chéng tóng yuán qǐng qiú fā gěi hòu duān.",
      "burmese": "Development server မှာ Proxy configure လုပ်ပြီး၊ Origin တူတယ်လို့အယောင်ဆောင်ပြီး Backend ဆီလှမ်းပို့လို့ရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_133",
      "hanzi": "前端安全中常见的XSS攻击是什么意思？",
      "pinyin": "qián duān ān quán zhōng cháng jiàn de XSS gōng jī shì shén me yì si?",
      "burmese": "Frontend လုံခြုံရေးမှာအတွေ့ရများတဲ့ XSS (Cross-Site Scripting) တိုက်ခိုက်မှုဆိုတာ ဘာအဓိပ္ပာယ်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_134",
      "hanzi": "它是指黑客通过给网页注入恶意脚本，从而窃取用户Cookie或篡改页面内容。",
      "pinyin": "tā shì zhǐ hēi kè tōng guò gěi wǎng yè zhù rù è yì jiǎo běn, cóng ér qiè qǔ yòng hù Cookie huò cuàn gǎi yè miàn nèi róng.",
      "burmese": "ဟက်ကာတွေက ဝဘ်စာမျက်နှာထဲကို အန္တရာယ်ရှိတဲ့ Script တွေထည့်သွင်းပြီးတော့ ယူဆာရဲ့ Cookie တွေကို ခိုးယူတာ ဒါမှမဟုတ် စာမျက်နှာကို ပြင်ဆင်လိုက်တာကို ဆိုလိုတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_135",
      "hanzi": "如何有效防御XSS攻击？",
      "pinyin": "rú hé yǒu xiào fáng yù XSS gōng jī?",
      "burmese": "XSS တိုက်ခိုက်မှုကို ဘယ်လိုထိထိရောက်ရောက်ကာကွယ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_136",
      "hanzi": "绝不信任任何用户输入，对提交的数据进行转义，并开启CSP（内容安全策略）。",
      "pinyin": "jué bù xìn rèn rèn hé yòng hù shū rù, duì tí jiāo de shù jù jìn xíng zhuǎn yì, bìng kāi qǐ CSP (nèi róng ān quán cè lüè).",
      "burmese": "ယူဆာထည့်တဲ့အရာတွေကို လုံးဝမယုံရဘူး၊ ပို့လိုက်တဲ့ Data တွေကို Escape လုပ်ရမယ်၊ ပြီးတော့ CSP ကိုဖွင့်ထားရမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_137",
      "hanzi": "除了XSS，还经常听到CSRF，这又是什么？",
      "pinyin": "chú le XSS, hái jīng cháng tīng dào CSRF, zhè yòu shì shén me?",
      "burmese": "XSS အပြင် CSRF လို့လည်းခဏခဏကြားရတယ်၊ အဲ့ဒါကရောဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_138",
      "hanzi": "跨站请求伪造（CSRF）是指诱导用户在已登录的状态下执行他们并不知情的危险操作。",
      "pinyin": "kuà zhàn qǐng qiú wěi zào (CSRF) shì zhǐ yòu dǎo yòng hù zài yǐ dēng lù de zhuàng tài xià zhí xíng tā men bìng bù zhī qíng de wēi xiǎn cāo zuò.",
      "burmese": "Cross-Site Request Forgery ဆိုတာ ယူဆာကိုအကောင့်ဝင်ထားတဲ့အခြေအနေမှာ သူတို့မသိဘဲ အန္တရာယ်ရှိတဲ့လုပ်ဆောင်ချက်တွေကို လုပ်မိအောင် လှည့်စားတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_139",
      "hanzi": "防范CSRF攻击的最权威的做法是什么？",
      "pinyin": "fáng fàn CSRF gōng jī de zuì quán wēi de zuò fǎ shì shén me?",
      "burmese": "CSRF attack ကိုကာကွယ်ဖို့ အကောင်းဆုံးနည်းလမ်းကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_140",
      "hanzi": "使用CSRF Token机制，或者为Cookie设置SameSite属性以阻止第三方站点的请求携带凭证。",
      "pinyin": "shǐ yòng CSRF Token jī zhì, huò zhě wèi Cookie shè zhì SameSite shǔ xìng yǐ zǔ zhǐ dì sān fāng zhàn diǎn de qǐng qiú xié dài píng zhèng.",
      "burmese": "CSRF Token စနစ်ကိုသုံးတာ၊ ဒါမှမဟုတ် တတိယပါတီဆိုဒ်တွေကနေ Request ပို့တဲ့အခါ လက်မှတ်(Cookie)မပါအောင် SameSite property သတ်မှတ်ပေးတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_141",
      "hanzi": "当你看到前端页面卡顿，帧率降到60fps以下时，你会如何排查？",
      "pinyin": "dāng nǐ kàn dào qián duān yè miàn kǎ dùn, zhēn lǜ jiàng dào 60fps yǐ xià shí, nǐ huì rú hé pái chá?",
      "burmese": "Frontend စာမျက်နှာထစ်ငေါ့နေပြီး frame rate 60fps အောက်ပြုတ်ကျသွားရင် မင်းဘယ်လိုစစ်ဆေးရှာဖွေမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_142",
      "hanzi": "我会首选浏览器的Performance面板录制性能火焰图，分析长任务和强制回流（Reflow）。",
      "pinyin": "wǒ huì shǒu xuǎn liú lǎn qì de Performance miàn bǎn lù zhì xìng néng huǒ yàn tú, fēn xí cháng rèn wu hé qiáng zhì huí liú (Reflow).",
      "burmese": "ငါက Browser ရဲ့ Performance panel ကိုအရင်သုံးပြီး Performance flame chart ကို record လုပ်မယ်၊ ပြီးရင် Long tasks တွေနဲ့ Forced Reflow တွေကို ခွဲခြမ်းစိတ်ဖြာမယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_143",
      "hanzi": "引起强制回流（Reflow）的常见操作有哪些？",
      "pinyin": "yǐn qǐ qiáng zhì huí liú (Reflow) de cháng jiàn cāo zuò yǒu nǎ xiē?",
      "burmese": "Forced Reflow ကိုဖြစ်စေတဲ့ အတွေ့ရများတဲ့လုပ်ဆောင်ချက်တွေက ဘာတွေလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_144",
      "hanzi": "比如改变元素的几何属性（宽、高），或者频繁地读取和写入DOM元素的布局属性。",
      "pinyin": "bǐ rú gǎi biàn yuán sù de jǐ hé shǔ xìng (kuān, gāo), huò zhě pín fán de dú qǔ hé xiě rù DOM yuán sù de bù jú shǔ xìng.",
      "burmese": "ဥပမာ Element ရဲ့ ပုံပန်းသဏ္ဍာန် (အကျယ်၊ အမြင့်) တွေကိုပြောင်းတာ ဒါမှမဟုတ် DOM element ရဲ့ Layout property တွေကို ခဏခဏဖတ်တာနဲ့ ပြန်ရေးတာမျိုးတွေပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_145",
      "hanzi": "重绘（Repaint）和回流（Reflow）有什么关系？",
      "pinyin": "chóng huì (Repaint) hé huí liú (Reflow) yǒu shén me guān xì?",
      "burmese": "Repaint နဲ့ Reflow ဘယ်လိုဆက်စပ်နေလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_146",
      "hanzi": "回流一定会引发重绘，但重绘（如仅仅改变背景颜色）不会引发回流，前者的性能代价更高。",
      "pinyin": "huí liú yí dìng huì yǐn fā chóng huì, dàn chóng huì (rú jǐn jǐn gǎi biàn bèi jǐng yán sè) bú huì yǐn fā huí liú, qián zhě de xìng néng dài jià gèng gāo.",
      "burmese": "Reflow ဖြစ်တိုင်း Repaint ဖြစ်မယ်၊ ဒါပေမယ့် (Background အရောင်လောက်ပဲပြောင်းတဲ့) Repaint ဖြစ်တိုင်းတော့ Reflow မဖြစ်ဘူး၊ ပထမတစ်ခုက စွမ်းဆောင်ရည်အတွက်ပိုပေးဆပ်ရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_147",
      "hanzi": "你能简单描述一下JWT（JSON Web Token）的组成部分吗？",
      "pinyin": "nǐ néng jiǎn dān miáo shù yí xià JWT (JSON Web Token) de zǔ chéng bù fèn ma?",
      "burmese": "JWT ရဲ့ ပါဝင်တဲ့အစိတ်အပိုင်းတွေကို ရိုးရိုးရှင်းရှင်း ပြောပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_148",
      "hanzi": "它由头部（Header）、载荷信息（Payload）和签名（Signature）三个部分通过点号连接而成。",
      "pinyin": "tā yóu tóu bù (Header), zài hé xīn xī (Payload) hé qiān míng (Signature) sān ge bù fèn tōng guò diǎn hào lián jiē ér chéng.",
      "burmese": "သူက Header, Payload နဲ့ Signature ဆိုင်ရာအပိုင်းသုံးပိုင်းကို အစက်(Dot) နဲ့ချိတ်ဆက်ပြီး ဖွဲ့စည်းထားတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_149",
      "hanzi": "JWT的主要优点是无状态和可扩展性强，但是它存在什么致命劣势？",
      "pinyin": "JWT de zhǔ yào yōu diǎn shì wú zhuàng tài hé kě kuò zhǎn xìng qiáng, dàn shì tā cún zài shén me zhì mìng liè shì?",
      "burmese": "JWT ရဲ့အဓိကအားသာချက်က Stateless ဖြစ်တာနဲ့ ချဲ့ထွင်ရလွယ်တာပါ၊ ဒါပေမယ့် သူ့မှာ ဘာအားနည်းချက်ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_150",
      "hanzi": "由于数据包含在Token内部，一旦签发就很难去主动撤销或让它在过期前失效。",
      "pinyin": "yóu yú shù jù bāo hán zài Token nèi bù, yí dàn qiān fā jiù hěn nán qù zhǔ dòng chè xiāo huò ràng tā zài guò qī qián shī xiào.",
      "burmese": "ဒေတာတွေက Token ထဲမှာပါနေတဲ့အတွက်၊ တစ်ခါထုတ်ပေးလိုက်တာနဲ့ အချိန်မပြည့်ခင် ကိုယ်တိုင် ပြန်ရုပ်သိမ်းဖို့ ဒါမှမဟုတ် သက်တမ်းကုန်စေဖို့ အရမ်းခက်ခဲတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_151",
      "hanzi": "Webpack中的Loader和Plugin有什么本质区别？",
      "pinyin": "Webpack zhōng de Loader hé Plugin yǒu shén me běn zhì qū bié?",
      "burmese": "Webpack က Loader နဲ့ Plugin ရဲ့ အခြေခံကွာခြားချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_152",
      "hanzi": "Loader主要用于转换不同类型的文件，而Plugin用于在整个构建生命周期中执行一些更广泛的任务。",
      "pinyin": "Loader zhǔ yào yòng yú zhuǎn huàn bù tóng lèi xíng de wén jiàn, ér Plugin yòng yú zài zhěng ge gòu jiàn shēng mìng zhōu qī zhōng zhí xíng yì xiē gèng guǎng fàn de rèn wu.",
      "burmese": "Loader ကို မတူညီတဲ့ဖိုင်အမျိုးအစားတွေကို ပြောင်းလဲဖို့အဓိကသုံးပြီး၊ Plugin ကတော့ Build lifecycle တစ်ခုလုံးမှာ ပိုကျယ်ပြန့်တဲ့တာဝန်တွေကို လုပ်ဆောင်ဖို့သုံးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_153",
      "hanzi": "你能列举几个常用的Webpack Loader吗？",
      "pinyin": "nǐ néng liè jǔ jǐ ge cháng yòng de Webpack Loader ma?",
      "burmese": "အသုံးများတဲ့ Webpack Loader အနည်းငယ်လောက်ပြပေးနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_154",
      "hanzi": "最常见的包括babel-loader、css-loader、style-loader和file-loader。",
      "pinyin": "zuì cháng jiàn de bāo kuò babel-loader, css-loader, style-loader hé file-loader.",
      "burmese": "အတွေ့ရအများဆုံးတွေကတော့ babel-loader, css-loader, style-loader နဲ့ file-loader တွေပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_155",
      "hanzi": "Babel的主要功能是什么？",
      "pinyin": "Babel de zhǔ yào gōng néng shì shén me?",
      "burmese": "Babel ရဲ့အဓိကလုပ်ဆောင်ချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_156",
      "hanzi": "它是一个JavaScript编译器，主要是把ES6及以上的新语法转化为向后兼容的代码。",
      "pinyin": "tā shì yí ge JavaScript biān yì qì, zhǔ yào shì bǎ ES6 jí yǐ shàng de xīn yǔ fǎ zhuǎn huà wéi xiàng hòu jiān róng de dài mǎ.",
      "burmese": "သူက JavaScript Compiler တစ်ခုပါ၊ အဓိကအားဖြင့် ES6 နဲ့အထက် Code အသစ်တွေကို နောက်ပြန်အဆင်ပြေတဲ့(Backward-compatible) Code တွေအဖြစ်ပြောင်းပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_157",
      "hanzi": "你了解Tree Shaking（摇树优化）的工作原理吗？",
      "pinyin": "nǐ liǎo jiě Tree Shaking (yáo shù yōu huà) de gōng zuò yuán lǐ ma?",
      "burmese": "Tree Shaking ရဲ့ အလုပ်လုပ်ပုံအခြေခံကို မင်းသိလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_158",
      "hanzi": "它依赖于ES6模块系统的静态结构，通过静态分析代码，移除未被使用的死代码以减小包体积。",
      "pinyin": "tā yī lài yú ES6 mó kuài xì tǒng de jìng tài jié gòu, tōng guò jìng tài fēn xí dài mǎ, yí chú wèi bèi shǐ yòng de sǐ dài mǎ yǐ jiǎn xiǎo bāo tǐ jī.",
      "burmese": "သူက ES6 module စနစ်ရဲ့ Static ဖွဲ့စည်းပုံအပေါ်မူတည်ပြီး Code တွေကိုခွဲခြမ်းစိတ်ဖြာကာ၊ Package သေးအောင် အသုံးမပြုတဲ့ Dead code တွေကို ဖယ်ရှားပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_159",
      "hanzi": "为什么Vite在开发环境下比Webpack启动得快得多？",
      "pinyin": "wèi shén me Vite zài kāi fā huán jìng xià bǐ Webpack qǐ dòng de kuài de duō?",
      "burmese": "ဘာလို့ Vite က Development ပတ်ဝန်းကျင်မှာ Webpack ထက် အများကြီးပိုမြန်မြန်ပွင့်တာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_160",
      "hanzi": "Vite利用浏览器原生的ES模块，按需加载代码，而不是像Webpack那样在启动前打包整个应用。",
      "pinyin": "Vite lì yòng liú lǎn qì yuán shēng de ES mó kuài, àn xū jiā zǎi dài mǎ, ér bú shì xiàng Webpack nà yàng zài qǐ dòng qián dǎ bāo zhěng ge yìng yòng.",
      "burmese": "Vite က Browser ရဲ့ Native ES module ကိုသုံးပြီး လိုမှလိုအပ်သလိုဆွဲတင်တယ်၊ Webpack လိုမျိုး မပွင့်ခင် တစ်ခုလုံးကို Package မထုတ်ဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_161",
      "hanzi": "你能谈谈前端懒加载（Lazy Loading）的概念吗？",
      "pinyin": "nǐ néng tán tán qián duān lǎn jiā zǎi (Lazy Loading) de gài niàn ma?",
      "burmese": "Frontend Lazy Loading ရဲ့ သဘောတရားကိုနည်းနည်းပြောပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_162",
      "hanzi": "懒加载就是延迟加载某些非关键的图片或组件，只有当它们进入可视区域时才被获取。",
      "pinyin": "lǎn jiā zǎi jiù shì yán chí jiā zǎi mǒu xiē fēi guān jiàn de tú piàn huò zǔ jiàn, zhǐ yǒu dāng tā men jìn rù kě shì qū yù shí cái bèi huò qǔ.",
      "burmese": "Lazy loading ဆိုတာ အရေးမကြီးတဲ့ ပုံတွေ၊ Component တွေကို မြင်ရတဲ့နေရာရောက်မှ ဆွဲတင်ဖို့ နောက်ဆုတ်ထားတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_163",
      "hanzi": "在React中，我们如何实现组件的懒加载？",
      "pinyin": "zài React zhōng, wǒ men rú hé shí xiàn zǔ jiàn de lǎn jiā zǎi?",
      "burmese": "React မှာ Component ကို Lazy load ဘယ်လိုလုပ်မလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_164",
      "hanzi": "我们可以配合React的lazy函数和Suspense组件来实现组件的按需动态加载。",
      "pinyin": "wǒ men kě yǐ pèi hé React de lazy hán shù hé Suspense zǔ jiàn lái shí xiàn zǔ jiàn de àn xū dòng tài jiā zǎi.",
      "burmese": "ငါတို့က React ရဲ့ lazy function နဲ့ Suspense component ကိုတွဲသုံးပြီး Component အလိုက် Dynamic load လုပ်နိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_165",
      "hanzi": "Service Worker主要可以用来做什么？",
      "pinyin": "Service Worker zhǔ yào kě yǐ yòng lái zuò shén me?",
      "burmese": "Service Worker ကို အဓိကအားဖြင့် ဘာတွေလုပ်ဖို့သုံးနိုင်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_166",
      "hanzi": "它可以充当缓存代理，实现离线访问以及支持推送通知等后台功能。",
      "pinyin": "tā kě yǐ chōng dāng huǎn cún dài lǐ, shí xiàn lí xiàn fǎng wèn yǐ jí zhī chí tuī sòng tōng zhī děng hòu tái gōng néng.",
      "burmese": "သူက Cache proxy အဖြစ်ဆောင်ရွက်နိုင်တယ်၊ အင်တာနက်မရှိဘဲ သုံးနိုင်အောင်လုပ်ပေးပြီး Push Notification လို နောက်ကွယ်လုပ်ဆောင်ချက်တွေကို ထောက်ပံ့ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_167",
      "hanzi": "简述一下什么是前端大文件分片上传？",
      "pinyin": "jiǎn shù yí xià shén me shì qián duān dà wén jiàn fēn piàn shàng chuán?",
      "burmese": "Frontend ကနေ ဖိုင်အကြီးကြီးတွေကို အပိုင်းတွေခွဲပြီး(Chunk upload) တင်တယ်ဆိုတာကို အတိုချုပ်ပြောပြပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_168",
      "hanzi": "它通过把大文件切割成等大的小块，并且支持并发上传以及断点续传。",
      "pinyin": "tā tōng guò bǎ dà wén jiàn qiē gē chéng děng dà de xiǎo kuài, bìng qiě zhī chí bìng fā shàng chuán yǐ jí duàn diǎn xù chuán.",
      "burmese": "သူက ဖိုင်အကြီးကြီးတွေကို တူညီတဲ့အပိုင်းငယ်လေးတွေခွဲလိုက်တာပါ၊ ပြီးတော့ တစ်ပြိုင်နက်တင်တာနဲ့ ပြတ်သွားတဲ့နေရာကနေပြန်ဆက်တင်တာကိုလည်း ထောက်ပံ့ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_169",
      "hanzi": "当页面存在大量数据例如上万条记录时，渲染会非常卡，怎么解决？",
      "pinyin": "dāng yè miàn cún zài dà liàng shù jù lì rú shàng wàn tiáo jì lù shí, xuàn rǎn huì fēi cháng kǎ, zěn me jiě jué?",
      "burmese": "စာမျက်နှာမှာ ဒေတာအများကြီး (ဥပမာ မှတ်တမ်းသောင်းနဲ့ချီ) ရှိနေရင် Render လုပ်တာအရမ်းထစ်မယ်၊ ဘယ်လိုဖြေရှင်းမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_170",
      "hanzi": "可以使用虚拟列表（Virtual List），它只渲染当前屏幕可视区域内的相关数据。",
      "pinyin": "kě yǐ shǐ yòng xū nǐ liè biǎo (Virtual List), tā zhǐ xuàn rǎn dāng qián píng mù kě shì qū yù nèi de xiāng guān shù jù.",
      "burmese": "Virtual List ကိုသုံးနိုင်တယ်၊ သူက လက်ရှိဖန်သားပြင်မြင်ရတဲ့ဧရိယာထဲက သက်ဆိုင်ရာဒေတာတွေကိုပဲ Render လုပ်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_171",
      "hanzi": "HTTPS和HTTP有什么本质区别？",
      "pinyin": "HTTPS hé HTTP yǒu shén me běn zhì qū bié?",
      "burmese": "HTTPS နဲ့ HTTP ରဲ့ အခြေခံကွာခြားချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_172",
      "hanzi": "HTTPS在HTTP协议的基础上加入了SSL/TLS加密层，从而验证数据传输的安全。",
      "pinyin": "HTTPS zài HTTP xié yì de jī chǔ shàng jiā rù le SSL/TLS jiā mì céng, cóng ér yàn zhèng shù jù chuán shū de ān quán.",
      "burmese": "HTTPS က HTTP ပေါ်အခြေခံပြီး SSL/TLS လုံခြုံရေးအလွှာကို ထပ်ထည့်ထားတာပါ၊ ဒါကြောင့် ဒေတာပို့လွှတ်တဲ့လုံခြုံရေးကို အတည်ပြုနိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_173",
      "hanzi": "HTTP状态码分类中，4xx和5xx一般表示什么？",
      "pinyin": "HTTP zhuàng tài mǎ fēn lèi zhōng, 4xx hé 5xx yì bān biǎo shì shén me?",
      "burmese": "HTTP status code တွေထဲမှာ 4xx နဲ့ 5xx သတ်မှတ်ချက်က ယေဘုယျအားဖြင့် ဘာကိုပြလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_174",
      "hanzi": "4xx通常代表客户端存在的错误例如找不到资源，而5xx则代表服务器内部遭遇了故障。",
      "pinyin": "4xx tōng cháng dài biǎo kè hù duān cún zài de cuò wù lì rú zhǎo bú dào zī yuán, ér 5xx zé dài biǎo fú wù qì nèi bù zāo yù le gù zhàng.",
      "burmese": "4xx က Client ဘက်ကအမှားတွေကို ပြလေ့ရှိတယ် (ဥပမာ ရင်းမြစ်ရှာမတွေ့တာ)၊ 5xx ကတော့ ဆာဗာအတွင်းပိုင်းချို့ယွင်းချက်ကို ပြတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_175",
      "hanzi": "强缓存和协商缓存有什么不一样的地方？",
      "pinyin": "qiáng huǎn cún hé xié shāng huǎn cún yǒu shén me bù yí yàng de dì fang?",
      "burmese": "Strong cache နဲ့ Negotiated cache က ဘာကွာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_176",
      "hanzi": "强缓存直接使用本地数据不再向服务器发请求，而协商缓存会发送请求去让服务器验证资源是否更新。",
      "pinyin": "qiáng huǎn cún zhí jiē shǐ yòng běn dì shù jù bù zài xiàng fú wù qì fā qǐng qiú, ér xié shāng huǎn cún huì fā sòng qǐng qiú qù ràng fú wù qì yàn zhèng zī yuán shì fǒu gèng xīn.",
      "burmese": "Strong cache က Local data ကိုတိုက်ရိုက်သုံးပြီး ဆာဗာဆီထပ်မတောင်းတော့ဘူး၊ Negotiated cache ကတော့ ဆာဗာကို ဒေတာအသစ်ဖြစ်မဖြစ်စစ်ဆေးဖို့ Request ပို့တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_177",
      "hanzi": "在请求头中，Etag和Last-Modified哪个优先级更高？",
      "pinyin": "zài qǐng qiú tóu zhōng, Etag hé Last-Modified nǎ ge yōu xiān jí gèng gāo?",
      "burmese": "Request header မှာ Etag နဲ့ Last-Modified ဘယ်ဟာက ဦးစားပေးပိုမြင့်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_178",
      "hanzi": "Etag的优先级更高，因为它是文件内容的唯一散列标识，比修改时间更精确。",
      "pinyin": "Etag de yōu xiān jí gèng gāo, yīn wèi tā shì wén jiàn nèi róng de wéi yī sǎn liè biāo zhì, bǐ xiū gǎi shí jiān gèng jīng què.",
      "burmese": "Etag က ဦးစားပေးပိုမြင့်တယ်၊ ဘာလို့လဲဆိုတော့ သူက ဖိုင်အကြောင်းအရာရဲ့ တစ်ခုတည်းသော Hash mark ဖြစ်ပြီး၊ ပြင်ဆင်ချိန်ထက် ပိုတိကျလို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_179",
      "hanzi": "微前端（Micro Frontends）架构要解决的最核心的挑战是什么？",
      "pinyin": "wēi qián duān (Micro Frontends) jià gòu yào jiě jué de zuì hé xīn de tiǎo zhàn shì shén me?",
      "burmese": "Micro Frontends တည်ဆောက်ပုံစနစ်က ဖြေရှင်းရမယ့် အဓိကအကျဆုံးစိန်ခေါ်မှုကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_180",
      "hanzi": "它主要用来拆分巨型且僵化的前端应用，允许不同的独立团队使用不同的技术栈进行开发。",
      "pinyin": "tā zhǔ yào yòng lái chāi fēn jù xíng qiě jiāng huà de qián duān yìng yòng, yǔn xǔ bù tóng de dú lì tuán duì shǐ yòng bù tóng de jì shù zhàn jìn xíng kāi fā.",
      "burmese": "သူ့ကို ကြီးမားရှုပ်ထွေးတဲ့ Frontend အက်ပ်တွေကို ခွဲထုတ်ဖို့အဓိကသုံးပြီး၊ သီးခြားအဖွဲ့တွေကို မတူညီတဲ့ နည်းပညာတွေနဲ့ ဖန်တီးခွင့်ပြုတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_181",
      "hanzi": "你能比较一下Cookie、sessionStorage和localStorage的异同吗？",
      "pinyin": "nǐ néng bǐ jiào yí xià Cookie, sessionStorage hé localStorage de yì tóng ma?",
      "burmese": "Cookie, sessionStorage နဲ့ localStorage ရဲ့ တူညီချက်နဲ့ ကွာခြားချက်တွေကို နှိုင်းယှဉ်ပြနိုင်မလား?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_182",
      "hanzi": "Cookie由服务器设置并在请求时携带；而另外两者的存储空间更大且完全保留在客户端。",
      "pinyin": "Cookie yóu fú wù qì shè zhì bìng zài qǐng qiú shí xié dài; ér lìng wài liǎng zhě de cún chǔ kōng jiān gèng dà qiě wán quán bǎo liú zài kè hù duān.",
      "burmese": "Cookie ကို ဆာဗာကသတ်မှတ်ပြီး Request ပို့တိုင်းပါသွားတယ်၊ ကျန်တဲ့နှစ်ခုကတော့ သိမ်းဆည်းနိုင်တဲ့ပမာဏပိုကြီးပြီး Client ဘက်မှာပဲအပြည့်အဝသက်ရောက်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_183",
      "hanzi": "如何实现网页的深色模式切换和兼容？",
      "pinyin": "rú hé shí xiàn wǎng yè de shēn sè mó shì qiē huàn hé jiān róng?",
      "burmese": "ဝဘ်စာမျက်နှာရဲ့ Dark mode ပြောင်းလဲမှုနဲ့ လိုက်ဖက်ညီမှုကို ဘယ်လိုဖန်တီးမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_184",
      "hanzi": "可以利用CSS变量和媒体查询检测用户的系统配色方案。",
      "pinyin": "kě yǐ lì yòng CSS biàn liàng hé méi tǐ chá xún jiǎn cè yòng hù de xì tǒng pèi sè fāng àn.",
      "burmese": "CSS Variable တွေနဲ့ MediaQuery ကိုသုံးပြီး ယူဆာရဲ့ စနစ်အရောင်ပုံစံကို စစ်ဆေးလို့ရတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_185",
      "hanzi": "什么是Web Components，它有什么特点？",
      "pinyin": "shén me shì Web Components, tā yǒu shén me tè diǎn?",
      "burmese": "Web Components ဆိုတာဘာလဲ၊ သူ့မှာဘာထူးခြားချက်ရှိလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_186",
      "hanzi": "它是一套浏览器原生的API，允许开发者创建完全封装好并且可重用的自定义HTML标签。",
      "pinyin": "tā shì yí tào liú lǎn qì yuán shēng de API, yǔn xǔ kāi fā zhě chuàng jiàn wán quán fēng zhuāng hǎo bìng qiě kě chóng yòng de zì dìng yì HTML biāo qiān.",
      "burmese": "သူက Browser ရဲ့ Native API အစုအဝေးတစ်ခုပါ၊ Developer တွေကို လုံးဝဖုံးအုပ်ထားပြီး ပြန်လည်အသုံးပြုနိုင်တဲ့ ကိုယ်ပိုင် HTML tag တွေဖန်တီးခွင့်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_187",
      "hanzi": "什么是Shadow DOM，它解决的核心问题是什么？",
      "pinyin": "shén me shì Shadow DOM, tā jiě jué de hé xīn wèn tí shì shén me?",
      "burmese": "Shadow DOM ဆိုတာဘာလဲ၊ သူကဖြေရှင်းပေးတဲ့ အဓိကပြဿနာကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_188",
      "hanzi": "它为DOM元素提供了彻底的隔离，防止组件内部的CSS样式泄漏并影响到全局的界面。",
      "pinyin": "tā wèi DOM yuán sù tí gōng le chè dǐ de gé lí, fáng zhǐ zǔ jiàn nèi bù de CSS yàng shì xiè lòu bìng yǐng xiǎng dào quán jú de jiè miàn.",
      "burmese": "သူက DOM element တွေကို အပြည့်အဝခွဲထုတ်ပေးထားတယ်၊ Component အတွင်းပိုင်းက CSS Style တွေ အပြင်ထွက်လာပြီး Global interface ကိုသက်ရောက်မှာကာကွယ်ပေးတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_189",
      "hanzi": "谈谈你对前端单元测试（Unit Testing）的理解。",
      "pinyin": "tán tán nǐ duì qián duān dān yuán cè shì (Unit Testing) de lǐ jiě.",
      "burmese": "Frontend Unit Testing အပေါ် မင်းနားလည်မှုကို နည်းနည်းပြောပြပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_190",
      "hanzi": "它是针对隔离的单一函数或小组件进行的测试，目的是证明这部分代码输出总是符合预期的。",
      "pinyin": "tā shì zhēn duì gé lí de dān yī hán shù huò xiǎo zǔ jiàn jìn xíng de cè shì, mù dì shì zhèng míng zhè bù fèn dài mǎ shū chū zǒng shì fú hé yù qī de.",
      "burmese": "သူက သီးသန့်ခွဲထုတ်ထားတဲ့ function ဒါမှမဟုတ် Component အသေးလေးတွေကို စမ်းသပ်တာပါ၊ ရည်ရွယ်ချက်က ဒီ Code အစိတ်အပိုင်းတွေရဲ့ အဖြေက အမြဲကြိုမှန်းထားတဲ့အတိုင်းဖြစ်ကြောင်း သက်သေပြဖို့ပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_191",
      "hanzi": "E2E测试（End-to-End）和单元测试有什么区别？",
      "pinyin": "E2E cè shì (End-to-End) hé dān yuán cè shì yǒu shén me qū bié?",
      "burmese": "E2E testing (End-to-End) နဲ့ Unit testing က ဘာကွာခြားလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_192",
      "hanzi": "E2E测试主要是模拟真实用户在浏览器中的交互，以确保整个系统流程正常流转。",
      "pinyin": "E2E cè shì zhǔ yào shì mó nǐ zhēn shí yòng hù zài liú lǎn qì zhōng de jiāo hù, yǐ què bǎo zhěng ge xì tǒng liú chéng zhèng cháng liú zhuǎn.",
      "burmese": "E2E တက်စ်က Browser ထဲမှာ အစစ်အမှန်ယူဆာရဲ့လုပ်ဆောင်ချက်တွေကို အတုယူပြီး System လုပ်ငန်းစဉ်တစ်ခုလုံး ပုံမှန်အလုပ်လုပ်ကြောင်း သေချာစေတာပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_193",
      "hanzi": "在移动端开发中，怎么解决著名的“300毫秒点击延迟”问题？",
      "pinyin": "zài yí dòng duān kāi fā zhōng, zěn me jiě jué zhù míng de '300 háo miǎo diǎn jī yán chí' wèn tí?",
      "burmese": "Mobile development မှာ နာမည်ကြီးတဲ့ '300ms Click Delay' ပြဿနာကို ဘယ်လိုဖြေရှင်းမလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_194",
      "hanzi": "现代浏览器可以通过配置Viewport的Meta标签来消除这种延迟的双击缩放判定。",
      "pinyin": "xiàn dài liú lǎn qì kě yǐ tōng guò pèi zhì Viewport de Meta biāo qiān lái xiāo chú zhè zhǒng yán chí de shuāng jī suō fàng pàn dìng.",
      "burmese": "ခေတ်သစ်ဘရောက်ဇာတွေက Viewport ရဲ့ Meta tag ကို သတ်မှတ်လိုက်တာနဲ့ Double-tap-to-zoom ကိုပိတ်ပြီး ဒီနှောင့်နှေးမှုကို ဖျောက်ပေးနိုင်တယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_195",
      "hanzi": "CSS中的BFC（块格式化上下文）有什么作用？",
      "pinyin": "CSS zhōng de BFC (kuài gé shì huà shàng xià wén) yǒu shén me zuò yòng?",
      "burmese": "CSS က BFC (Block Formatting Context) ရဲ့ လုပ်ဆောင်ချက်ကဘာလဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_196",
      "hanzi": "它是一个独立的渲染区域，内部盒子绝对不会影响到外部，常用来清除浮动。",
      "pinyin": "tā shì yí ge dú lì de xuàn rǎn qū yù, nèi bù hé zi jué duì bú huì yǐng xiǎng dào wài bù, cháng yòng lái qīng chú fú dòng.",
      "burmese": "သူက သီးခြား Render ဧရိယာတစ်ခုပါ၊ အတွင်းက Box တွေက အပြင်ကိုလုံးဝမသက်ရောက်ဘူး၊ Floating (Clear Float) လို့ခေါ်တဲ့ အခြေအနေမှာ လွတ်ရာရှင်းဖို့ အသုံးများတယ်။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_197",
      "hanzi": "你如何理解JavaScript里的纯函数（Pure Function）？",
      "pinyin": "nǐ rú hé lǐ jiě JavaScript lǐ de chún hán shù (Pure Function)?",
      "burmese": "JavaScript ထဲက Pure Function အပေါ် မင်းဘယ်လိုနားလည်လဲ?",
      "category": "js_interview"
    },
    {
      "id": "hsk4_198",
      "hanzi": "只要给予纯函数相同的确定的输入，它必然总是返回精准且唯一相同的输出，并不产生任何副作用。",
      "pinyin": "zhǐ yào jǐ yǔ chún hán shù xiāng tóng de què dìng de shū rù, tā bì rán zǒng shì fǎn huí jīng zhǔn qiě wéi yī xiāng tóng de shū chū, bìng bù chǎn shēng rèn hé fù zuò yòng.",
      "burmese": "Pure function ကို အတူတူဖြစ်တဲ့ သေချာတဲ့ Input ပေးလိုက်ရင်၊ သူကလည်း တိကျပြီး တူညီတဲ့ Output ကို အမြဲပြန်ပေးမယ်၊ ဘာဘေးထွက်ဆိုးကျိုးမှလည်း မဖြစ်စေဘူး။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_199",
      "hanzi": "请给“副作用（Side Effects）”在编程中下个定义？",
      "pinyin": "qǐng gěi 'fù zuò yòng (Side Effects)' zài biān chéng zhōng xià ge dìng yì?",
      "burmese": "Programming မှာ Side Effects (ဘေးထွက်ဆိုးကျိုး) ကို အဓိပ္ပာယ်ဖွင့်ပေးပါ။",
      "category": "js_interview"
    },
    {
      "id": "hsk4_200",
      "hanzi": "它指的是函数在正常计算返回结果之余，意外修改了外部或全局的某个状态变化。",
      "pinyin": "tā zhǐ de shì hán shù zài zhèng cháng jì suàn fǎn huí jié guǒ zhī yú, yì wài xiū gǎi le wài bù huò quán jú de mǒu ge zhuàng tài biàn huà.",
      "burmese": "သူက function က ပုံမှန်တွက်ချက်ပြီး အဖြေပြန်ပေးတာအပြင်၊ ပြင်ပ ဒါမှမဟုတ် Global က State တစ်ခုခုကို မမျှော်လင့်ဘဲ ပြင်ဆင်လိုက်တာမျိုးကို ရည်ညွှန်းတယ်။",
      "category": "js_interview"
    }
  ],
  "5": []
};
