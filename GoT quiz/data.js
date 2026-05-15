/**
 * 维斯特洛命运试炼 — 混合题型版
 * 6 陈述判断 + 8 沉浸代入 + 6 剧情分歧 = 20 题
 * 5 大阵营 · 12 角色
 * scoring: 主维度 8-10, 次维度 0-2
 */
(function () {
  var dims = ["power", "honor", "scheme", "rebel", "heart"];

  window.WESTEROS_QUIZ = {
    dimensions: dims,

    factions: {
      lannister: { name:"兰尼斯特", fullName:"兰尼斯特系 · 现实权力派", badge:"狮",
        desc:"权力 · 秩序 · 家族 · 创伤 · 生存优先 · 现实主义",
        tendency:"秩序与权力" },
      north: { name:"北境", fullName:"北境系 · 忠诚与身份派", badge:"狼",
        desc:"忠诚 · 誓言 · 家族 · 忍耐 · 身份认同 · 对权力游戏的厌恶",
        tendency:"忠诚与坚守" },
      idealist: { name:"龙", fullName:"命运革命派 · 理想与火焰", badge:"龙",
        desc:"改变世界 · 解放 · 命运感 · 使命 · 理想主义 · 被背叛后的极端化",
        tendency:"解放与使命" },
      chaos: { name:"混乱", fullName:"混乱操盘派 · 阴影与算计", badge:"蛛",
        desc:"在混乱中获利 · 操纵关系 · 风险偏好 · 爬升 · 对秩序的不信任",
        tendency:"混乱与机遇" },
      fringe: { name:"边缘", fullName:"边缘人系 · 身份与撕裂", badge:"影",
        desc:"身份撕裂 · 不被接纳 · 观察 · 夹缝求生 · 羞辱后的自我证明",
        tendency:"寻找与归属" },
    },

    characters: [
      {
        id:"tywin", name:"泰温·兰尼斯特", house:"凯岩城的兰尼斯特",
        slogan:"听我怒吼（Hear Me Roar）",
        portrait:"https://i.pinimg.com/736x/d6/6c/96/d66c96e35c0f0d39fb27c12021b3d69e.jpg",
        portraitFocus:"52% 22%",
        scores:{power:86, honor:16, scheme:48, rebel:7, heart:5},
        faction:"lannister", rarity:"rare", rarityPct:"0.7%",
        altMatch:"cersei",
        narrative:"<p>狮子不需要解释自己的位置——你从很早就明白这一点。在维斯特洛的棋盘上，你极少亲自拔剑，却让每一次联姻、每一次清算都精准地落在他人的痛处。你信秩序、信名声、信债务与盟约比眼泪更有用；血色婚礼在你看来不是残忍，而是一道写在血里的算术题——家族存续面前，温情与体面都可以被精确计价。</p><p>然而你并非没有盲区。你把子女也当作兰尼斯特这顶王冠上的宝石来雕琢，却忽略了骄傲与疯癫无法被驯服。瑟曦的野心、詹姆的挣扎、提利昂的仇恨——这些裂缝从最亲近处蔓延，让你在最骄傲的布局里一次次面对失控的荒原。你的一生像一把收得很紧的尺规，丈量的是胜负与生存，却始终无法真正掌控人心那片沼泽。</p><p>你的气质里有泰温的冷硬与清晰。你懂得权力不只是刀剑的长度，更是等待的耐心与计算的精度。但命运留给你的问题是：当秩序的代价越来越高，你是否还能看见那些无法被纳入棋盘的东西——比如一只幼狮想要被爱时发出的低吼。</p>"
      },
      {
        id:"cersei", name:"瑟曦·兰尼斯特", house:"凯岩城的兰尼斯特",
        slogan:"听我怒吼（Hear Me Roar）",
        portrait:"https://i.pinimg.com/736x/d5/16/85/d51685976f9fa5958a701e1a0f4319f3.jpg",
        portraitFocus:"center 24%",
        scores:{power:80, honor:7, scheme:52, rebel:46, heart:23},
        faction:"lannister", rarity:"mainstream", rarityPct:"19.6%",
        altMatch:"tywin",
        narrative:"<p>你从小被告知权力属于男人，便把这句断言刻成心底的第一道疤。瑟曦的不是「渴望」权力——她认为那本就是她的，只是被性别与偏见偷走了。于是每一次羞辱都被记在账上，每一次轻视都化作后来的清算：她用绿火焚毁大圣堂，用冷酷清洗仇敌，也把「母亲」这个身份锻成最危险的武器。</p><p>她的选择极少被道德负担拖累，却极其一致——宁可与预言共舞，也不再向任何人下跪。她不信救世叙事，只信手里能攥住的东西：黄金、军队、儿子的性命、敌人的恐惧。而她的悲剧也正在于此——她太擅长把世界简化成敌我棋盘，以至于把所有伸出的手都看作握紧的拳头。</p><p>你的决断力里有瑟曦的影子：你会在被逼到墙角时爆发出惊人的力量，你的爱与恨都带着不容置疑的烈度。但命运给你的提醒是——权力若是为了证明「我不再是弱者」而行使，它有时会燃得太快，烧尽你原本想守护的东西。</p>"
      },
      {
        id:"jaime", name:"詹姆·兰尼斯特", house:"凯岩城的兰尼斯特",
        slogan:"听我怒吼（Hear Me Roar）",
        portrait:"https://i.pinimg.com/736x/b0/80/56/b08056cf30b21e0b5a0bbc24f0cb3bf1.jpg",
        portraitFocus:"center 26%",
        scores:{power:36, honor:68, scheme:38, rebel:16, heart:54},
        faction:"lannister", rarity:"mainstream", rarityPct:"23.5%",
        altMatch:"tyrion",
        narrative:"<p>「弑君者」——这个名字像铁枷一样锁住他的前半生。詹姆·兰尼斯特曾是维斯特洛最骄傲的骑士，却在十七岁那年亲手杀死了自己宣誓效忠的国王。没有人知道他为何拔剑，也没有人愿意听：他救了一座城，却得到了一辈子的蔑称。于是他索性穿上那层愤世嫉俗的铠甲，用嘲笑与傲慢把真实的自己藏进黄金盔甲深处。</p><p>变化来得缓慢而残酷：他失去了一只握剑的手，却第一次触到了「自己」——不再是完美的骑士幻影，而是一个会痛、会怕、也会羞愧的人。他在泥地里与布蕾妮同行，在熊坑里跳下去救她，在浴池里说出那件从未被相信的真相。他想要的从来不是被赦免，而是还能不能做对一件事——哪怕只有一件，哪怕为时已晚。</p><p>你的选择里有詹姆式的矛盾：你渴望被人认可，却不愿为这种渴望扭曲自己；你做过错误的选择，却仍然相信人可以重新定义自己。命运告诉你——救赎不一定是荡气回肠的史诗，它可以是放下骄傲后的一次转身，是在污泥里仍记得剑应当指向哪个方向。裂痕丑陋，但仍有金属的反光。</p>"
      },
      {
        id:"tyrion", name:"提利昂·兰尼斯特", house:"凯岩城的兰尼斯特",
        slogan:"听我怒吼（Hear Me Roar）",
        portrait:"https://i.pinimg.com/736x/de/89/a6/de89a60ab3df6235a6483f9388f164a6.jpg",
        portraitFocus:"center 30%",
        scores:{power:22, honor:34, scheme:78, rebel:12, heart:62},
        faction:"lannister", rarity:"rare", rarityPct:"1.8%",
        altMatch:"varys",
        narrative:"<p>生在狮子窝里，却被当作笑话与污点——这是提利昂的起点，也是他一生的动力。酒、书与尖刻的幽默成了他的甲胄，头脑成了他与世界谈判的唯一货币。他在黑水河之夜把王国从悬崖边拽回半步，也在审判庭上把尊严掷向整个世界——他比谁都清楚：当身体不被承认为武器时，头脑就必须更加锋利。</p><p>他犯过错，信错过人，杀过不该杀的女人，也曾在流亡的谷底把身份一片片拆碎再拼回去。但可贵的是，在经受了那么多恶意之后，他仍然试图用理性与悲悯去缝合正在崩裂的人间——而不是只做一个被仇恨喂大的复仇者。他的故事不是骑士童话，而是一个被世界反复推搡的人，决定在废墟里保留一点体面与清醒。</p><p>你的气质里有提利昂的底色：你相信智慧比刀剑更有力，也相信在荒诞的世界里保持幽默是一种尊严。命运给你的提醒是——聪明是天赋，善良是选择。当你已经足够聪明去看穿一切的时候，请记得你仍然有选择去建造、而非只是嘲笑或拆毁。</p>"
      },
      {
        id:"jon", name:"琼恩·雪诺", house:"临冬城的史塔克（名义）",
        slogan:"凛冬将至（Winter Is Coming）",
        portrait:"https://i.pinimg.com/1200x/db/a4/22/dba4220d455a4926886497efc60097b5.jpg",
        portraitFocus:"center 28%",
        scores:{power:26, honor:85, scheme:16, rebel:8, heart:72},
        faction:"north", rarity:"extremelyRare", rarityPct:"<0.1%",
        altMatch:"jaime",
        narrative:"<p>私生子的名字像一道旧伤，你却把它背成了长城上的誓言。琼恩的一生都在把更大的东西扛在肩上：守夜人、北境、活人对抗死人的战争——他总以为责任比个人恩怨更重要，也因此总在忠诚与大局之间被反复撕扯。他不是没有软弱与犹疑，也曾在爱里沉溺、在身世里迷失；可他最终仍回到那个笨拙的问题：「我若不做，谁来做？」</p><p>他的力量不在于天生的锋芒，而在于一种近乎固执的坚持——即便知道善意可能被背叛、牺牲可能被遗忘，他仍然选择站在最冷的那道城墙前面。那最后一刀并不荣耀，却像北境的雪一样冷而清楚：有些选择不会写入颂歌，却能把更多的人留在天亮之后。</p><p>你身上有琼恩式的责任感：你相信承诺的分量，也愿意为比自己更大的目标付出代价。命运给你的课题是——在把世界扛在肩上之前，先确认自己站在哪里。不是所有的牺牲都值得，不是所有的誓言都指向正义。凛冬将至，但你心里的那把火，不必烧尽自己才叫作忠诚。</p>"
      },
      {
        id:"sansa", name:"珊莎·史塔克", house:"临冬城的史塔克",
        slogan:"凛冬将至（Winter Is Coming）",
        portrait:"https://i.pinimg.com/736x/7c/6c/06/7c6c0616d1336c399883057a8a9033f8.jpg",
        portraitFocus:"center 22%",
        scores:{power:78, honor:55, scheme:72, rebel:3, heart:32},
        faction:"north", rarity:"uncommon", rarityPct:"4.8%",
        altMatch:"stannis",
        narrative:"<p>她曾被教导用针线、礼貌与微笑换取安全——这是临冬城大小姐的必修课，也是后来她能在君临活下去的唯一技能。但珊莎的成长在于：她发现柔软可以是鞘，沉默可以是收集情报的器皿，微笑也可以让对方低估自己。她从童话的废墟里爬起来，把羞辱与背叛翻译成地图与规则，从棋子一步步走到了执棋的位置。</p><p>她的力量从不喧哗，却能在雪落临冬城时决定谁能留下、谁该离开。她学会了在权力的餐桌上挑选对自己有利的座位：不再期待骑士拯救，不再相信华丽的承诺，而是用耐心和记忆力编织自己的棋局。她的道路不「干净」，因为她必须向现实借刀、向时间借机会——但她终究用自己的方式，把破碎的北境一块块拼了回去。</p><p>你身上有珊莎式的韧性：你懂得在风暴中低头不是软弱，而是为了在风暴过后仍然活着。命运给你的启示是——真正的权力不一定在剑尖上，也可以在耐心与洞察里。不必为了变强而变成自己不认识的人，但你也可以在保持温柔的同时，拥有不被任何人左右的坚硬。</p>"
      },
      {
        id:"arya", name:"艾莉亚·史塔克", house:"临冬城的史塔克",
        slogan:"凛冬将至（Winter Is Coming）",
        portrait:"https://i.pinimg.com/736x/78/80/e4/7880e413546029b0f15848cc83b2ae9a.jpg",
        portraitFocus:"68% 26%",
        scores:{power:10, honor:26, scheme:24, rebel:70, heart:28},
        faction:"north", rarity:"mainstream", rarityPct:"10.6%",
        altMatch:"theon",
        narrative:"<p>没有人能把艾莉亚·史塔克塞进模具——这是她从一开始就确定的事。她拒绝被塑造成乖巧的公主，拒绝用「应当」来定义自己的边界。她学会在君临的阴影里逃亡，在布拉佛斯的井边挨打，在失明中重新学习观看世界。她把自己的名字刻进一份名单，不是为了仇恨本身，而是为了记住那些被夺走的人。</p><p>她的力量来自于一种极度的专注：不被宏大叙事分心，不被权力言语迷惑，只盯着自己认为该做的事。她可以戴上千面面具，却从未丢失自己的核心——那个在临冬城射箭的女孩，始终是她衡量世界的原点。当她阖上某些章节、转身走向日落时，维斯特洛才意识到：最危险的不总是王座上的狮子，也可能是那个沉默离场的史塔克女孩。</p><p>你的骨子里有艾莉亚式的反叛与纯粹：你不喜欢被定义、被安排，你有自己的一套正义标准，哪怕与世界为敌也不会轻易妥协。命运给你的课题是——真正的自由不只有「挣脱一切」的力量，还要有在挣脱之后选择去哪里的智慧。复仇或许是一道你必须走过的桥，但不必在桥的那边住一辈子。</p>"
      },
      {
        id:"daenerys", name:"丹妮莉丝·坦格利安", house:"坦格利安王朝",
        slogan:"血火同源（Fire and Blood）",
        portrait:"https://i.pinimg.com/736x/f6/42/e6/f642e6c959acd0316950afe026a8251f.jpg",
        portraitFocus:"56% 28%",
        scores:{power:78, honor:26, scheme:36, rebel:58, heart:56},
        faction:"idealist", rarity:"uncommon", rarityPct:"3.4%",
        altMatch:"cersei",
        narrative:"<p>她从灰烬与龙蛋里站起身来，把「打破镣铐」写进旗帜，也把复仇与天命写进血脉。丹妮莉丝在奴隶湾用火焰与宣言撕裂旧秩序，让被践踏者第一次在史书上拥有了名字。她相信自己是被选中的人，也相信龙与血统赋予了她改写世界的资格——而这份确信，正是她最耀眼也最危险的部分。</p><p>可当王座越来越近，理想与偏执之间的界线便越来越薄。她以拯救之名行裁决之事，以正义之口说出灭绝之语。她的故事像一场漫长的风暴眼——明亮、灼热、令人仰望，也注定在靠近终点时把一切温柔与犹豫一并卷走。她让人们看见信念可以燃烧世界，也看见当一个人不再容忍任何反对时，解放者与暴君之间的距离不过是一步之遥。</p><p>你身上有丹妮莉丝般的炽热与信念：你有改造世界的冲动，也对不公有着近乎本能的愤怒。命运给你的课题是——当你拥有绝对力量的时候，你是否还能听见不同的声音？火焰既能照亮前路，也能焚尽你所爱的一切。血火同源，选择权在你。</p>"
      },
      {
        id:"littlefinger", name:"培提尔·贝里席", house:"鹰巢城的贝里席",
        slogan:"信条：混乱是阶梯（Chaos Is a Ladder）",
        portrait:"https://i.pinimg.com/1200x/c2/d3/01/c2d301e42bfa775f580edd5e5e2eac7b.jpg",
        portraitFocus:"center 24%",
        scores:{power:70, honor:3, scheme:86, rebel:60, heart:10},
        faction:"chaos", rarity:"uncommon", rarityPct:"2.8%",
        altMatch:"tywin",
        narrative:"<p>出身低微让他早早看透：门第是墙，而混乱是梯子；微笑是刀鞘，情报是刀刃。培提尔用债务与欲望在王国脚下挖坑，把每一次战争都变成向上攀爬的台阶，把每一次联姻与背叛都变成可计算的筹码。他几乎摸到了铁王座的边缘——不是通过军队或血统，而纯靠计算与等待。</p><p>但聪明人最致命的弱点，往往就是太相信自己的聪明。他以为所有人都该按他的剧本贪婪或恐惧，以为爱不过是另一种可利用的欲望。他算准了一切变数，唯独算漏了一件事：临冬城的姐妹也会长大，也会学会把他的语言反着读。他的一生是一则关于野心的冷笑话——最迷信阶梯的人，往往摔得最安静。</p><p>你的头脑里有培提尔的敏锐：你能一眼看穿局势的缝隙，也知道如何在规则边缘行走。命运给你的警示是——当你把每一段关系都看作交易，把每一次信任都折算成筹码时，你也在慢慢失去站立的根基。混乱可以是梯子，但梯子不能永远悬在空中。别等到低头才发现，脚下已经没有可以落脚的地方。</p>"
      },
      {
        id:"stannis", name:"史坦尼斯·拜拉席恩", house:"龙石岛的拜拉席恩",
        slogan:"怒火燎原（Ours Is the Fury）",
        portrait:"https://i.pinimg.com/1200x/a9/c9/c9/a9c9c97226b4c462e04c13c399494f99.jpg",
        portraitFocus:"center 24%",
        scores:{power:72, honor:78, scheme:26, rebel:12, heart:22},
        faction:"north", rarity:"uncommon", rarityPct:"4.7%",
        altMatch:"tywin",
        narrative:"<p>法统高于喜好，责任重于人情——这是史坦尼斯·拜拉席恩一生未曾动摇的信条。他是不擅讨好的王储，是严酷的法官，是被光之王与执念同时攥住的人。他不喜欢虚伪的宴会和讨好的言辞，却愿意在更冷的路上独自前行。他把「正确」走成一道令人窒息的窄路：燃烧亲生女儿作为献祭，不是因为残忍，而是因为他真的相信——为了更伟大的目标，一切代价都可以被神圣化。</p><p>史坦尼斯的悲剧不在于不懂权谋，而在于太确信自己站在正义的一边。他的正义是一块铁，没有温度，没有弹性，也无法容纳人性的复杂。当他用这把尺子衡量世界的时候，他也把自己逼进了无法回头的角落。维斯特洛记住他，因为他把「信念可以逼你献祭一切」写到了令人不适的真实。</p><p>你身上有史坦尼斯式的原则感：你相信规则、相信责任，也愿意为自己认定的正确付出代价。命运给你的课题是——正义的铁骨固然可贵，但也要记得在铁骨之外留下感受他人痛苦的空间。真正的力量不只是坚持正确，而是在坚持正确的同时，还能听见哭声。</p>"
      },
      {
        id:"varys", name:"瓦里斯", house:"君临的「八爪蜘蛛」",
        slogan:"讯息即王冠（信息即权力）",
        portrait:"https://i.pinimg.com/1200x/0a/90/2f/0a902f6e99d6017603c146e52581fe9f.jpg",
        portraitFocus:"center 22%",
        scores:{power:16, honor:42, scheme:76, rebel:6, heart:46},
        faction:"fringe", rarity:"mainstream", rarityPct:"12.1%",
        altMatch:"tyrion",
        narrative:"<p>他行走在御前与地窖之间，把耳朵借给每一个愿意低语的人。瓦里斯不追求公开的荣耀——他知道真正的权力往往发生在视线之外。他自称为了王国，可「王国」这个词在他嘴里总带着一层难以琢磨的灰度：他救过孩子，也放过火；他扶持过秩序，也亲手拆掉过棋子。他的力量从不靠剑，而靠知道得太早、知道得太多。</p><p>但他并非冷血的阴谋家。在每一个关键抉择面前，他选择的往往是那条让更多人活下去的路——哪怕这条路需要牺牲他自己。他不是好人，也不是坏人，他是「选择做好事的人」。当龙焰逼近君临时，他选择了明知必死的反对，不是因为他觉得能赢，而是因为他无法在沉默中继续活下去。八爪蜘蛛的最后一根丝，系在了「王国」而非「自己」那一边。</p><p>你的行事风格里有瓦里斯的影子：你宁愿在暗处推动正确的齿轮，也不去争抢聚光灯下的荣耀。命运给你的评价是——你有一种稀有的品质：在掌握最多信息、最了解人性幽暗之后，仍然选择相信善良。但也要小心，不要因为习惯了沉默而忘记自己也有站在光里的权利。为了王国，也为了你自己。</p>"
      },
      {
        id:"theon", name:"席恩·葛雷乔伊", house:"铁群岛的葛雷乔伊",
        slogan:"逝者不死（What Is Dead May Never Die）",
        portrait:"https://i.pinimg.com/736x/60/f9/7b/60f97bc674f60010dc6ae6de19805353.jpg",
        portraitFocus:"center 26%",
        scores:{power:14, honor:14, scheme:28, rebel:66, heart:34},
        faction:"fringe", rarity:"mainstream", rarityPct:"15.9%",
        altMatch:"arya",
        narrative:"<p>席恩生在铁群岛的盐风里，却被送去北境做人质与养子。他从未真正属于任何一个地方——在铁群岛上他不够铁民，在临冬城他不够史塔克。这种夹缝中的身份焦虑，让他用最错误的方式去证明自己：背叛了养育他的家族，占领了曾给过他温暖的城堡，却最终什么都没能得到，只把自己送进了最黑暗的地牢。</p><p>他的坠落是完整的——从骄傲的「铁种」王子到被剥去一切尊严的「臭佬」。但故事没有在他最破碎的地方结束。在那些连名字都被夺走的岁月里，他仍然从残存的骨头里找到了一点想要爬起来的意志。他的救赎并不壮烈：没有一剑封喉的高光，没有慷慨赴死的悲壮，只是一个破碎的人在寒冷的冬天里，一点一点把散掉的自己拼回去。</p><p>你的命运轨迹里有席恩式的挣扎：你在不同的身份和责任之间感到撕裂，有时候你也不知道自己真正属于哪里。但命运告诉你——归属感不是被给予的，而是在你决定不再逃避自己的那一刻开始建立的。你不必在两种身份之间选择，你可以成为那个把两者都经历过、因而更懂自己的人。逝者不死，但你可以在潮水退去之后，重新学会站立。</p>"
      },
    ],

    questions: [
      // ═══════════════════════════════════════════════
      // 题型混排：陈述(1) → 剧情(15) → 沉浸(7) → 陈述(2) → ...
      // 三种题型交织，无连续 3 题同类型
      // ═══════════════════════════════════════════════

      // Q1 — 陈述判断：权力
      { id:1, type:"statement", theme:"权力的面容",
        scenario:"被人骂冷血并不可怕；可怕的是因手软而输掉整盘棋。",
        options:[
          {key:"A", text:"是", scores:{power:10}},
          {key:"B", text:"否", scores:{heart:8, honor:2}},
          {key:"C", text:"不确定", scores:{scheme:8, power:2}},
        ]},
      // Q2 — 剧情分歧：Robb / 红色婚礼
      { id:2, type:"plot", theme:"佛雷的渡口",
        scenario:"你是Robb Stark——你与佛雷家族立下婚约以换取渡河支持，却因爱情毁约。现在你需要佛雷的兵力才能击败兰尼斯特。",
        options:[
          {key:"A", text:"亲自向佛雷道歉并提出补偿——政治就是交易", scores:{power:10}},
          {key:"B", text:"忠于爱情——失去佛雷也要守住对她的承诺", scores:{heart:8, honor:2}},
          {key:"C", text:"另寻盟友——不被任何家族绑架", scores:{rebel:8, scheme:2}},
        ]},
      // Q3 — 沉浸代入：家族
      { id:3, type:"immersive", theme:"裂痕之上",
        scenario:"你的家族内部出现严重分裂，你的兄长公开反对你的决策，一部分族人追随他——他不是恶人，只是与你的理念不合。",
        options:[
          {key:"A", text:"让步——家族团结高于对错", scores:{heart:8, honor:2}},
          {key:"B", text:"镇压反对——领导者不能展现软弱", scores:{power:10}},
          {key:"C", text:"分化他的支持者——不流血但彻底赢", scores:{scheme:8, power:2}},
        ]},
      // Q4 — 陈述判断：忠诚
      { id:4, type:"statement", theme:"誓言的回响",
        scenario:"誓言一旦立下，就算对象已经不值得效忠，也应当坚守到底。",
        options:[
          {key:"A", text:"是", scores:{honor:10}},
          {key:"B", text:"否", scores:{rebel:9, heart:1}},
          {key:"C", text:"不确定", scores:{scheme:8, power:2}},
        ]},
      // Q5 — 沉浸代入：爱情
      { id:5, type:"immersive", theme:"心与冠",
        scenario:"你爱上了一个来自敌国的人，可这段关系一旦公开，就会毁掉你经营多年的政治联盟。",
        options:[
          {key:"A", text:"秘密维持——我两者都要", scores:{rebel:8, heart:2}},
          {key:"B", text:"放弃——责任比个人感情更重", scores:{power:8, honor:2}},
          {key:"C", text:"公开选择——人不是棋盘上的棋子", scores:{heart:9, rebel:1}},
        ]},
      // Q6 — 剧情分歧：龙妈 / 君临
      { id:6, type:"plot", theme:"钟声与灰烬",
        scenario:"你是丹妮莉丝·坦格利安——君临城已敲钟投降，但你的顾问提醒你：旧贵族们只是在等待时机反扑。",
        options:[
          {key:"A", text:"接受降书，宽恕全城——仁慈才能赢得人心", scores:{honor:8, rebel:2}},
          {key:"B", text:"烈火净化——旧秩序必须彻底摧毁", scores:{rebel:8, power:2}},
          {key:"C", text:"清算首恶，安抚平民——震慑与怀柔并用", scores:{power:8, scheme:2}},
        ]},
      // Q7 — 陈述判断：身份
      { id:7, type:"statement", theme:"血脉的重量",
        scenario:"一个人生来属于什么阶层，就该遵守那个身份的游戏规则。越界会付出代价。",
        options:[
          {key:"A", text:"是", scores:{power:8, honor:2}},
          {key:"B", text:"否", scores:{rebel:10}},
          {key:"C", text:"不确定", scores:{heart:8, rebel:2}},
        ]},
      // Q8 — 沉浸代入：战争
      { id:8, type:"immersive", theme:"剑与慈悲",
        scenario:"你攻破了一座敌城，城中仍有大量平民；你的副将建议屠城以震慑其他敌人。",
        options:[
          {key:"A", text:"屠城——恐惧比仁慈更能防止流血", scores:{power:8, rebel:2}},
          {key:"B", text:"保护平民——真正的力量在于克制", scores:{honor:8, heart:2}},
          {key:"C", text:"扣押贵族人质——精准打击比滥杀有用", scores:{scheme:8, power:2}},
        ]},
      // Q9 — 剧情分歧：琼恩 / 野人
      { id:9, type:"plot", theme:"长城的抉择",
        scenario:"你是琼恩·雪诺，守夜人总司令。你亲眼见过野人，他们并非野兽——只是在逃命。但守夜人兄弟们视野人为死敌，而真正的敌人还在更北的地方。",
        options:[
          {key:"A", text:"坚守誓言——守夜人的职责是挡住野人", scores:{honor:8, power:2}},
          {key:"B", text:"与野人结盟——活人应团结对抗死者", scores:{heart:8, rebel:2}},
          {key:"C", text:"逐步说服守夜人——内部达成共识再行动", scores:{scheme:8, heart:2}},
        ]},
      // Q10 — 沉浸代入：羞辱
      { id:10, type:"immersive", theme:"过去的刺",
        scenario:"你曾被人当众羞辱，多年来这道刺一直卡在心里；如今，那个羞辱你的人就跪在你面前。",
        options:[
          {key:"A", text:"让他也尝一遍——有些债必须亲手还", scores:{rebel:10}},
          {key:"B", text:"让他走——我不被过去定义", scores:{heart:9, honor:1}},
          {key:"C", text:"利用他的恐惧——棋子比尸体有用", scores:{scheme:10}},
        ]},
      // Q11 — 陈述判断：牺牲
      { id:11, type:"statement", theme:"天平的两端",
        scenario:"为了多数人的利益而牺牲少数无辜者，在道义上是正当的。",
        options:[
          {key:"A", text:"是", scores:{power:8, scheme:2}},
          {key:"B", text:"否", scores:{heart:10}},
          {key:"C", text:"不确定", scores:{honor:8, heart:2}},
        ]},
      // Q12 — 剧情分歧：席恩 / 北境
      { id:12, type:"plot", theme:"铁种与狼",
        scenario:"你是席恩·葛雷乔伊，从小作为人质在临冬城长大；如今你父亲起兵反叛北境，要求你以继承人的身份加入他。临冬城对你好，但你骨子里流着铁群岛的血。",
        options:[
          {key:"A", text:"忠于临冬城——他们才是我的家人", scores:{honor:8, heart:2}},
          {key:"B", text:"回到父亲身边——血浓于水", scores:{rebel:8, power:2}},
          {key:"C", text:"在两方之间斡旋——不急于站队", scores:{scheme:8, heart:2}},
        ]},
      // Q13 — 沉浸代入：孤独
      { id:13, type:"immersive", theme:"王座的背面",
        scenario:"你终于登上了权力的顶峰，却发现自己没有一个可以信任的人。",
        options:[
          {key:"A", text:"这就是权力的代价——我接受", scores:{power:10}},
          {key:"B", text:"我开始怀疑这一切是否值得", scores:{heart:9, honor:1}},
          {key:"C", text:"信任是可以设计的——用利益绑定", scores:{scheme:10}},
        ]},
      // Q14 — 陈述判断：复仇
      { id:14, type:"statement", theme:"以血还血",
        scenario:"背叛必须用血来偿还——原谅是懦弱而不是美德。",
        options:[
          {key:"A", text:"是", scores:{rebel:10}},
          {key:"B", text:"否", scores:{honor:8, heart:2}},
          {key:"C", text:"不确定", scores:{scheme:10}},
        ]},
      // Q15 — 剧情分歧：瑟曦 / 大圣堂
      { id:15, type:"plot", theme:"野火与王冠",
        scenario:"你是瑟曦·兰尼斯特——教会武装利用信仰审判将你羞辱至极致，让你在全城游街示众。如今，你的仇敌全都在大圣堂里，而野火已经就位。",
        options:[
          {key:"A", text:"引爆——对我的每一次羞辱都必须偿还", scores:{rebel:10}},
          {key:"B", text:"等待时机——现在动手会失去民心", scores:{scheme:8, power:2}},
          {key:"C", text:"用野火威胁但不引爆——恐惧比死亡更有用", scores:{power:8, scheme:2}},
        ]},
      // Q16 — 沉浸代入：信仰
      { id:16, type:"immersive", theme:"预言与迷雾",
        scenario:"一位僧侣预言你将拯救你的国家，大批民众开始追随你——但你不确定这预言是否可信。",
        options:[
          {key:"A", text:"利用它凝聚力量——真假不重要", scores:{scheme:8, power:2}},
          {key:"B", text:"拒绝——真相比信仰更重要", scores:{honor:8, heart:2}},
          {key:"C", text:"追随它——也许命运真的选择了我", scores:{rebel:8, heart:2}},
        ]},
      // Q17 — 沉浸代入：流亡
      { id:17, type:"immersive", theme:"异乡人",
        scenario:"你被逐出了自己的家乡，一无所有；一个陌生人愿意收留你，但你无法判断他的动机。",
        options:[
          {key:"A", text:"接受——活下去才能翻盘", scores:{heart:8, power:2}},
          {key:"B", text:"拒绝——不接受任何施舍", scores:{rebel:8, honor:2}},
          {key:"C", text:"接受，但暗中调查他的底细", scores:{scheme:8, power:2}},
        ]},
      // Q18 — 剧情分歧：史坦尼斯 / 燃烧女儿
      { id:18, type:"plot", theme:"王法与父心",
        scenario:"你是史坦尼斯·拜拉席恩——你的军队被困在暴雪中，即将覆灭；红袍女祭司说唯一能扭转战局的办法，是献祭你的亲生女儿。",
        options:[
          {key:"A", text:"拒绝——为胜利放弃人性，胜利有何意义", scores:{heart:9, honor:1}},
          {key:"B", text:"献祭——如果这是救国的代价，我必须承担", scores:{power:8, honor:2}},
          {key:"C", text:"寻找其他出路——总有一线生机", scores:{scheme:10}},
        ]},
      // Q19 — 陈述判断：生存
      { id:19, type:"statement", theme:"活着的代价",
        scenario:"在生死关头，规则和道德都可以暂时放下，活下来才最重要。",
        options:[
          {key:"A", text:"是", scores:{power:9, rebel:1}},
          {key:"B", text:"否", scores:{honor:9, heart:1}},
          {key:"C", text:"不确定", scores:{scheme:10}},
        ]},
      // Q20 — 沉浸代入：身份
      { id:20, type:"immersive", theme:"镜中何人",
        scenario:"你发现自己真正的出身来自你一直敌视的家族——你过去的人生是一个谎言。",
        options:[
          {key:"A", text:"我不在乎血统——过去定义了我", scores:{honor:8, rebel:2}},
          {key:"B", text:"真相让我自由——我选择重新开始", scores:{rebel:8, heart:2}},
          {key:"C", text:"保守秘密——身份是一种资源", scores:{scheme:8, power:2}},
        ]},
    ],
  };
})();
