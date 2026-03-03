import json

phrases = [
    ("我是程序员。", "wǒ shì chéng xù yuán.", "ကျွန်တော်ပရိုဂရမ်မာပါ။"),
    ("我在写代码。", "wǒ zài xiě dài mǎ.", "ကျွန်တော်ကုဒ်ရေးနေတယ်။"),
    ("你的电脑在哪儿？", "nǐ de diàn nǎo zài nǎr?", "မင်းကွန်ပျူတာဘယ်မှာလဲ?"),
    ("网页做好了。", "wǎng yè zuò hǎo le.", "ဝဘ်စာမျက်နှာလုပ်လို့ပြီးပြီ။"),
    ("网站坏了。", "wǎng zhàn huài le.", "ဝဘ်ဆိုဒ်ပျက်နေတယ်။"),
    ("请帮我看看这个问题。", "qǐng bāng wǒ kàn kan zhè ge wèn tí.", "ဒီပြဿနာကိုကျေးဇူးပြုပြီးကြည့်ပေးပါ။"),
    ("我不懂这个代码。", "wǒ bù dǒng zhè ge dài mǎ.", "ဒီကုဒ်ကိုကျွန်တော်နားမလည်ဘူး။"),
    ("我们需要一个新网站。", "wǒ men xū yào yí ge xīn wǎng zhàn.", "ငါတို့ဝဘ်ဆိုဒ်အသစ်တစ်ခုလိုတယ်။"),
    ("苹果电脑很贵。", "píng guǒ diàn nǎo hěn guì.", "Apple ကွန်ပျူတာကအရမ်းဈေးကြီးတယ်။"),
    ("今天工作很多。", "jīn tiān gōng zuò hěn duō.", "ဒီနေ့အလုပ်အရမ်းများတယ်။"),
    ("屏幕太小了。", "píng mù tài xiǎo le.", "မျက်နှာပြင်အရမ်းသေးတယ်။"),
    ("我没有网。", "wǒ méi yǒu wǎng.", "ကျွန်တော့်မှာအင်တာနက်မရှိဘူး။"),
    ("你能上网吗？", "nǐ néng shàng wǎng ma?", "မင်းအင်တာနက်သုံးလို့ရလား?"),
    ("我在公司加班。", "wǒ zài gōng sī jiā bān.", "ကျွန်တော်ရုံးမှာအချိန်ပိုဆင်းနေတယ်။"),
    ("这个Bug很多。", "zhè ge Bug hěn duō.", "ဒီမှာ bug အများကြီးရှိတယ်။"),
    ("你什么时候下班？", "nǐ shén me shí hou xià bān?", "မင်းဘယ်အချိန်ရုံးဆင်းမလဲ?"),
    ("我做前端。", "wǒ zuò qián duān.", "ကျွန်တော် Frontend လုပ်တယ်။"),
    ("他做后端。", "tā zuò hòu duān.", "သူက Backend လုပ်တယ်။"),
    ("服务器在哪儿？", "fú wù qì zài nǎr?", "ဆာဗာဘယ်မှာလဲ?"),
    ("请给我数据库的密码。", "qǐng gěi wǒ shù jù kù de mì mǎ.", "ဒေတာဘေ့စ်စကားဝှက်ကိုပေးပါ။"),
    ("太卡了。", "tài kǎ le.", "အရမ်းထစ်နေတယ်။"),
    ("系统出错了。", "xì tǒng chū cuò le.", "စနစ်မှာအမှားဖြစ်သွားတယ်။"),
    ("今天会上线吗？", "jīn tiān huì shàng xiàn ma?", "ဒီနေ့ Live လွှင့်မှာလား?"),
    ("明天上线。", "míng tiān shàng xiàn.", "မနက်ဖြန် Live လွှင့်မယ်။"),
    ("这个设计不好看。", "zhè ge shè jì bù hǎo kàn.", "ဒီဒီဇိုင်းကမလှဘူး။"),
    ("用户不喜欢。", "yòng hù bù xǐ huan.", "အသုံးပြုသူတွေမကြိုက်ဘူး。"),
    ("代码写完了。", "dài mǎ xiě wán le.", "ကုဒ်ရေးလို့ပြီးပြီ。"),
    ("还在测试。", "hái zài cè shì.", "စမ်းသပ်နေတုန်းပဲ。"),
    ("测试通过了。", "cè shì tōng guò le.", "စမ်းသပ်တာအောင်မြင်သွားပြီ။"),
    ("我需要喝咖啡。", "wǒ xū yào hē kā fēi.", "ကျွန်တော်ကော်ဖီသောက်ဖို့လိုတယ်။"),
    ("键盘坏了。", "jiàn pán huài le.", "ကီးဘုတ်ပျက်နေတယ်။"),
    ("鼠标在哪儿？", "shǔ biāo zài nǎr?", "မောက်စ်ဘယ်မှာလဲ?"),
    ("这个字太小了。", "zhè ge zì tài xiǎo le.", "ဒီစာလုံးအရမ်းသေးတယ်။"),
    ("换一个颜色。", "huàn yí ge yán sè.", "အရောင်ပြောင်းပါ။"),
    ("我觉得这个蓝色好看。", "wǒ jué de zhè ge lán sè hǎo kàn.", "ဒီအပြာရောင်လှတယ်လို့ကျွန်တော်ထင်တယ်။"),
    ("你可以修改一下吗？", "nǐ kě yǐ xiū gǎi yí xià ma?", "မင်းခဏလောက်ပြင်ပေးနိုင်မလား?"),
    ("没问题，马上改。", "méi wèn tí, mǎ shàng gǎi.", "ပြဿနာမရှိပါဘူး၊ အခုချက်ချင်းပြင်လိုက်မယ်။"),
    ("字不够大。", "zì bú gòu dà.", "စာလုံးမကြီးလောက်ဘူး။"),
    ("网页打开很慢。", "wǎng yè dǎ kāi hěn màn.", "ဝဘ်စာမျက်နှာပွင့်တာအရမ်းနှေးတယ်။"),
    ("我们需要快一点。", "wǒ men xū yào kuài yì diǎnr.", "ငါတို့နည်းနည်းမြန်မြန်လုပ်ဖို့လိုတယ်။"),
    ("经理在开会。", "jīng lǐ zài kāi huì.", "မန်နေဂျာအစည်းအဝေးလုပ်နေတယ်။"),
    ("手机上看不好。", "shǒu jī shàng kàn bù hǎo.", "ဖုန်းပေါ်မှာကြည့်လို့မကောင်းဘူး။"),
    ("这是新公司的项目。", "zhè shì xīn gōng sī de xiàng mù.", "ဒါကကုမ္ပဏီအသစ်ရဲ့ပရောဂျက်ပါ။"),
    ("你的邮件我看到了。", "nǐ de yóu jiàn wǒ kàn dào le.", "မင်းရဲ့အီးမေးလ်ကိုငါတွေ့ပြီ။"),
    ("我下午发给你。", "wǒ xià wǔ fā gěi nǐ.", "ကျွန်တော်ညနေဘက်မင်းဆီပို့လိုက်မယ်။"),
    ("这个很简单。", "zhè ge hěn jiǎn dān.", "ဒါကအရမ်းရိုးရှင်းတယ်။"),
    ("那个很难。", "nà ge hěn nán.", "အဲ့ဒါကအရမ်းခက်တယ်။"),
    ("我可以学习。", "wǒ kě yǐ xué xí.", "ကျွန်တော်လေ့လာလို့ရတယ်။"),
    ("你做得很好！", "nǐ zuò de hěn hǎo!", "မင်းလုပ်တာအရမ်းကောင်းတယ်!"),
    ("大家辛苦了！", "dà jiā xīn kǔ le!", "အားလုံးပင်ပန်းသွားပြီ!")
]

with open("/Users/admin/Desktop/conservation/lib/data.ts", "r") as f:
    content = f.read()

start_idx = content.find("1: [")
end_idx = content.find("  2: [")
hsk1_content = content[start_idx:end_idx]

entries = []
count = 151
for hanzi, pinyin, burmese in phrases:
    entry = f"""    {{
      id: "hsk1_{count}",
      hanzi: "{hanzi}",
      pinyin: "{pinyin}",
      burmese: "{burmese}"
    }}"""
    entries.append(entry)
    count += 1

new_entries_str = ",\n".join(entries)

# Insert it before the closing bracket of hsk1
insertion_point = hsk1_content.rfind("    }") + 5
new_hsk1 = hsk1_content[:insertion_point] + ",\n" + new_entries_str + "\n" + hsk1_content[insertion_point:]

new_content = content[:start_idx] + new_hsk1 + content[end_idx:]

with open("/Users/admin/Desktop/conservation/lib/data.ts", "w") as f:
    f.write(new_content)

print("Added 50 web dev phrases successfully.")
