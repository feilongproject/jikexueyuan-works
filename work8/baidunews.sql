-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2016 年 04 月 27 日 19:18
-- 服务器版本: 5.5.47
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `main`
--

CREATE TABLE IF NOT EXISTS `main` (
  `newsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '新闻id',
  `newsclassify` varchar(10) NOT NULL COMMENT '新闻类别',
  `newstitle` varchar(100) NOT NULL COMMENT '新闻标题',
  `newsurl` varchar(1500) NOT NULL COMMENT '新闻地址',
  `newsimg` varchar(500) NOT NULL COMMENT '新闻图片',
  `newscontent` mediumtext NOT NULL COMMENT '新闻内容',
  `adddate` datetime NOT NULL COMMENT '添加时间',
  PRIMARY KEY (`newsid`),
  UNIQUE KEY `newstitle` (`newstitle`),
  UNIQUE KEY `newsid` (`newsid`),
  KEY `newsclassify` (`newsclassify`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=35 ;

--
-- 转存表中的数据 `main`
--

INSERT INTO `main` (`newsid`, `newsclassify`, `newstitle`, `newsurl`, `newsimg`, `newscontent`, `adddate`) VALUES
(1, '科技', '红外相机记录到野生大熊猫罕见雪景照', 'http://m.news.baidu.com/news?fr=mohome&amp;ssid=0&amp;from=&amp;uid=&amp;pu=sz%40224_220%2Cta%40iphone___3_537&amp;bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Fnews.cri.cn%2F20160413%2F515519d3-40cd-1a57-ae6d-24eaf860ab72.html/%E7%BA%A2%E5%A4%96%E7%9B%B8%E6%9C%BA%E8%AE%B0%E5%BD%95%E5%88%B0%E9%87%8E%E7%94%9F%E5%A4%A7%E7%86%8A%E7%8C%AB%E7%BD%95%E8%A7%81%E9%9B%AA%E6%99%AF%E7%85%A7(%E7%BB%84%E5%9B%BE)/%E5%9B%BD%E9%99%85%E5%9C%A8%E7%BA%BF/1460515273000/1539985913305158344', 'http://p2.cri.cn/M00/40/2E/CqgNOlcNo0yAPVGWAAAAAAAAAAA847.900x675.jpg', '由甘肃白水江国家级自然保护区管理局白马河保护站提供的红外相机拍摄画面显示，一只野生大熊猫在甘肃省陇南市文县铁楼乡一带的森林中雪中漫步（2月4日摄）。<br>甘肃是我国大熊猫三个分布省之一，根据2015年第四次全国大熊猫调查结果，甘肃省大熊猫数量共有132只，其中，地处甘肃与四川交界的白水江国家级自然保护区有110只。2014年底至今，国家林业局、甘肃省林业厅在该保护区先后布设160多台用于监测和保护野生动植物的红外触发相机，工作人员按季度回收拍摄到的图片和视频资料。这是当地第一次拍摄到大熊猫在积雪中活动的画面。<br>新华社发', '2016-04-13 11:03:00'),
(2, '科技', '微软新版Windows10新增蓝屏二维码 你来看看有没有用', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Fm.techweb.com.cn%2Farticle%2F2016-04-13%2F2314510.shtml/%E5%BE%AE%E8%BD%AF%E6%96%B0%E7%89%88Windows10%E6%96%B0%E5%A2%9E%E8%93%9D%E5%B1%8F%E4%BA%8C%E7%BB%B4%E7%A0%81%20%E4%BD%A0%E6%9D%A5%E7%9C%8B%E7%9C%8B%E6%9C%89%E6%B2%A1%E6%9C%89%E7%94%A8/TechWeb/1460515273000/3671561710794227785', 'http://upload1.techweb.com.cn/s/320/2016/0413/1460512060822.jpg', '【TechWeb报道】4月13日消息，微软在最新版Windows 10（内部预览版，版本号14316)对蓝屏时的显示界面进行了调整，加入了“蓝屏扫二维码”功能。<br>微软在新版Windows10中增加“蓝屏扫二维码”功能<br>此前，微软Windows 10蓝屏死机界面(Blue Screen of Death)仍然沿用了Windows 8的样式，即显示一个哭脸表情符号，下方是错误代码，让用户自行搜索“BAD_SYSTEM_CONFIG_INFO”或者是“KERNEL_DATA_INPAGE_ERROR”。可能是微软意识到这样的方式并不利于用户解决问题，而在新版Windows 10中予以改进。<br>当用遭遇蓝屏死机的时候，可以通过扫描屏幕上的二维码进入http://windows.com/stopcode，以了解更多信息。微软在该页面提供了常见的引起蓝屏问题的原因和解决办法。更为直接说，就是咱不用再手抄蓝屏代码再去搜索了。', '2016-04-13 11:48:51'),
(3, '科技', 'HTC 10成首款支持苹果AirPlay的安卓手机', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Fm.pcpop.com%2Farticle_2640035.html/HTC%2010%E6%88%90%E9%A6%96%E6%AC%BE%E6%94%AF%E6%8C%81%E8%8B%B9%E6%9E%9CAirPlay%E7%9A%84%E5%AE%89%E5%8D%93%E6%89%8B%E6%9C%BA/%E6%B3%A1%E6%B3%A1%E7%BD%91/1460515273000/16818692829163562569', 'http://img5.pcpop.com/ArticleImages/730x547/3/3880/003880595.jpg', 'HTC 发布了新款旗舰手机 HTC 10，它除了配备 5.2 英寸的显示屏、国际版搭载骁龙 820 处理器、4GB RAM 和 3000mAh 的电池，它还有一个小特性值得拥有苹果设备的朋友注意，那就是它将成为第一款支持苹果 AirPlay 特性的安卓手机。HTC 10 支持 AirPlay 特性，这也意味着它能够串流音频和视频到新款的 Apple TV 上。<br>根据HTC 的产品营销副总裁 Darren Sng 表示，此举是经过深思熟虑才作出的决定，HTC 希望让其智能手机的功能更加丰富，HTC 方面还表示，如果苹果愿意开放 Apple Pay 给其它厂商的话，他们甚至乐于让旗下设备支持 Apple Pay。HTC 自信 HTC 10 将成为一款十全十美的旗舰手机，这或许是 HTC 10 支持 AirPlay 的一个原因。<br>HTC 10 是 HTC 在 2016 年的旗舰级手机，它也是 HTC One M9 的继承者，HTC 10 即日起即可通过官网进行预订，不过需要指出的是，国行版的 HTC 10 在配置方面有所“缩水”，售价为 3799 元。', '2016-04-13 20:00:54'),
(14, '体育', '欧冠四强详细赛程：4月27号开战 皇马先客后主', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E4%BD%93%E8%82%B2/http%3A%2F%2Fsports.sina.com.cn%2Fg%2Flaliga%2F2016-04-15%2Fdoc-ifxriqqx2584879.shtml/%E6%AC%A7%E5%86%A0%E5%9B%9B%E5%BC%BA%E8%AF%A6%E7%BB%86%E8%B5%9B%E7%A8%8B%EF%BC%9A4%E6%9C%8827%E5%8F%B7%E5%BC%80%E6%88%98%20%E7%9A%87%E9%A9%AC%E5%85%88%E5%AE%A2%E5%90%8E%E4%B8%BB%20/%E6%96%B0%E6%B5%AA%E4%BD%93%E8%82%B2/1460722271000/15453114610918682889', 'http://k.sinaimg.cn/n/sports/transform/20160415/90bZ-fxrizpp1241512.jpg', '赛程出炉\n新浪体育讯 北京时间4月15日17时30分(瑞士当地时间11时30分)，2015-16赛季欧洲冠军联赛半决赛抽签在瑞士尼翁欧足联足总举行。皇家马德里抽到曼城，拜仁慕尼黑对阵马德里竞技。\n欧冠本周决出四强，马德里独占半壁江山(皇家马德里、马德里竞技)，德甲(拜仁慕尼黑)和英超(曼城)各占1席，其中曼城是首次打进欧冠四强。半决赛抽签采取随机方式，不设种子队，同联赛球队也不回避。半决赛两回合分别于4月26/27日和5月3/4日进行；决赛将于5月28日在米兰圣西罗球场举行(均为当地时间)。\n下面是欧冠半决赛的具体赛程(均为北京时间)：\n-比赛日期比赛时间交战对手比分\n半决赛首回合04.2702:45曼城—皇家马德里\n04.2802:45马德里竞技—拜仁慕尼黑\n半决赛次回合05.0402:45拜仁慕尼黑—马德里竞技\n05.0502:45皇家马德里—曼城\n(永明)', '2016-04-15 20:38:54'),
(13, '体育', '奥运年中日女排再交锋 里约周期中国队10战8胜', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E4%BD%93%E8%82%B2/http%3A%2F%2Fsports.cnhubei.com%2F2016%2F0415%2F303942.shtml/%E5%A5%A5%E8%BF%90%E5%B9%B4%E4%B8%AD%E6%97%A5%E5%A5%B3%E6%8E%92%E5%86%8D%E4%BA%A4%E9%94%8B%20%E9%87%8C%E7%BA%A6%E5%91%A8%E6%9C%9F%E4%B8%AD%E5%9B%BD%E9%98%9F10%E6%88%988%E8%83%9C/%E8%8D%86%E6%A5%9A%E7%BD%91/1460722271000/2866465559319906988', 'http://upload.site.cnhubei.com/2016/0415/1460712976525.jpg', '2016年中日女排精英赛将于4月26日和27日在龙岗大运中心体育馆进行，届时郎平将率中国女排与老对手日本连战两场。渊源颇深的中日两队在奥运年开年直接对话，不仅是相互摸底、检验前期训练成果的契机，也是累积挑战强手必胜信念的关键战役。<br>奥运年中日对抗有传统 郎平率队深圳再战<br>在长达半个多世纪的竞争中，中日女排你争我夺屡屡拼得火花四溅，但身为近邻且实力相对接近，两队也曾数次联手热身备战大赛，奥运年的关系尤为密切。1988年、1992年和1996年，日本均参加了在中国举行的四国邀请赛；2000年、2004年和2012年，更三度受邀来华与中国队展开系列对抗赛。<br>2000年胡进带队辗转南安等地三克日本；2004年陈忠和指挥重获世界杯冠军的中国与来访的日本在武夷山、晋江、厦门等地进行5场对抗赛，主队气势如虹5连胜仅失2局；2012年俞觉敏率队转战泉州、南安、三明和福州四地连战日本，战绩为3胜1负，只在次站因自由人张娴受伤影响一传1-3落败。<br>今年中日两队又一次在奥运年安排热身赛，将在北仑和深圳三度对垒。2013年郎平重掌女排帅印后，曾带队在龙岗大运中心体育馆出战中国精英赛深圳站的较量，连挫泰国、波多黎各和古巴全胜折桂。时隔3年，郎平将再度率队在同一场地捍卫中国女排的荣誉，对手是更具威胁的劲敌日本。<br>3年10战日本中国两遭败绩 三大赛两遇阻击惊魂<br>经历了伦敦奥运周期的动荡后，中国女排在2013年迎来了名帅郎平的回归，成功止颓重新步入上升通道。3年来，中国一队在正式比赛10次对垒日本（含2015年亚锦赛迎战日本青年队），8胜2负成功占得上风。尽管在2014年大奖赛埼玉站和总决赛中两负对手，但在世锦赛和世界杯的关键战役中均咬牙顶住击败日本。\n身高不足的日本女排主要凭快变优势和顽强防守抗衡诸强。里约周期中日在三大赛两度交锋都打得难解难分。2014年世锦赛小组赛末轮，中国在1-2落后的情况下成功翻盘，3-2险胜日本力保不败金身锁定D组头名晋级。2015年世界杯中国队先抑后扬艰难赢得争冠主动权，已无缘三甲的日本在收官战仍竭尽全力阻击中国，好在中国女排硬实力更强3-1闯关，时隔11年再夺世界冠军。<br>3年前的中国精英赛，在中国女排里约奥运周期起航之际，热情的深圳球迷给予了郎平和她的球队最有力的支持！3年后的中日对抗赛，中国队又将在深圳迎接全新挑战！去年世界杯惊喜夺魁后，“女排热”再度席卷中国，亿万国人对这支充满朝气、敢打敢拼的球队期待值骤增。里约奥运年开年就将上演中日女排的强强对话，希望能有更多球迷赴现场观赛，共同为女排健儿呐喊助威！', '2016-04-15 20:35:23'),
(15, '体育', '曼联有意用拉什福德换贝纳德斯基', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E4%BD%93%E8%82%B2/http%3A%2F%2Fnews.zhibo8.cc%2Fzuqiu%2F2016-04-15%2F57104b72f37b4.htm/%E6%9B%BC%E8%81%94%E6%9C%89%E6%84%8F%E7%94%A8%E6%8B%89%E4%BB%80%E7%A6%8F%E5%BE%B7%E6%8D%A2%E8%B4%9D%E7%BA%B3%E5%BE%B7%E6%96%AF%E5%9F%BA/%E7%9B%B4%E6%92%AD%E5%90%A7/1460722271000/16364148642694823869', 'http://t10.baidu.com/it/u=http://tu.qiumibao.com/uploads/news/day_160415/201604150959263299.jpg&fm=37', '北京时间4月15日，据Goal.com撰稿，曼联有意用最近表现抢眼的拉什福德作为引进佛罗伦萨边锋贝纳德斯基交易的一部分。\n据La Nazione报道，曼联愿意让拉什福德今夏加盟佛罗伦萨。\n自2月份以来，这位曼联的年轻才俊闪耀赛场，对阿森纳、曼城和西汉姆的比赛中均收获进球。\n曼联已对贝纳德斯基报价2800万欧元，红魔愿意将18岁的拉什福德作为交易筹码将贝纳德斯基带到老特拉福德。\n（五花儿肉）', '2016-04-15 20:58:17'),
(16, '娱乐', '宫崎骏《龙猫》28周年：七个令人难忘的奇妙瞬间', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E5%A8%B1%E4%B9%90/http%3A%2F%2Fview.inews.qq.com%2Fa%2FENT2016041601072502/%E5%AE%AB%E5%B4%8E%E9%AA%8F%E3%80%8A%E9%BE%99%E7%8C%AB%E3%80%8B28%E5%91%A8%E5%B9%B4%EF%BC%9A%E4%B8%83%E4%B8%AA%E4%BB%A4%E4%BA%BA%E9%9A%BE%E5%BF%98%E7%9A%84%E5%A5%87%E5%A6%99%E7%9E%AC%E9%97%B4/%E8%85%BE%E8%AE%AF%E5%A8%B1%E4%B9%90/1460769037000/4865137474547246083', 'http://t11.baidu.com/it/u=http://inews.gtimg.com/newsapp_match/0/253753314/0&fm=37', '摘要电影X周年第12期：28年前的今天，宫崎骏的《龙猫》在日本上映，主创们本以为“没有人会喜欢看两个孩子和一个怪物的乡村故事”，却没想到，它在全世界范围内引发了一股龙猫热。\n\n2016.4.16，是《龙猫》上映28周年\n腾讯娱乐专稿（文/小梧）\n1988年4月16日，《龙猫》在日本上映。那时候，没有人认为观众会喜欢看“两个孩子和一个怪物的乡村故事”，所以，《龙猫》是和《萤火虫之墓》绑在一起发行的，后者是当时的“文学IP”，有广泛的受众基础。\n尽管上映时票房成绩一般，但靠着后劲，龙猫这个形象深入人心，当时还不懂靠周边赚钱的吉卜力，两年后才授权厂商将龙猫制作成布偶，赢得大笔利润。后来龙猫成为吉卜力工作室的吉祥物，出现在每一部吉卜力电影的片头。\n影片的每一帧，都透着让人莞尔一笑的纯真，借着上映28周年的节点，我们不妨重温下那些奇妙的瞬间。\n\n1、抓到你啦！煤煤虫！\n对于常年没人居住的老房子，你也许会想到蟑螂、老鼠、蜘蛛等一系列让你为空避之不及的“脏物”，但在宫崎骏的电影里，孩子们“做梦都想住在鬼屋里”。片中出现的第一个奇幻的“生灵”的灰尘精灵“煤煤虫”，它们是一颗颗全身长毛刺、还有两只白色眼睛的小黑球，藏着老房子的暗处。\n宫崎骏说：“我花了两个月时间独自住在一幢古旧的大房子里，我待在某个房间，通常会感到别的房间有其他人居住。在出去散步时，我怕它们寂寞，会打开收音机招待它们，然后说‘别客气，请尽情享受我为你们准备的音乐！当然你可以将我的做法解释为是应对恐惧和不安全感的一种反应，可是我真的能够感觉到某些事物存在。”\n\n《千与千寻》里的煤煤虫\n煤煤虫的存在也是日本“万物有灵”观念的呈现，哪怕是灰尘，也可以成精。13年后，煤煤虫在《千与千寻》中再次出现，这次它们不再是独立成军自由自在，而是成了锅炉房里的苦力，长出手脚来给炉子加炭。\n\n2、追啊！会隐形的“小龙猫”\n捡着橡果子，一抬头，发现草丛里一只奇怪又可爱的小生物露出了两只小耳朵，然而它起身大摇大摆地从你眼前走过……小时候你是否也希望有这样的“艳遇”。别看小龙猫粗枝大叶，连自己隐身失败都不造，人家其实已经109岁了！\n小女孩追着它，在洞口等了半天，但扛着整袋橡果子的中龙猫带着受到惊吓的小龙猫已经踮着脚尖、小心翼翼地从女孩身后跑掉了。但是这只679岁的中龙猫可没有展现出年龄所应有的稳重，那橡果子一路走一路掉，真是蠢萌到没朋友。\n\n3、神秘的树洞——大龙猫现形！\n追着中、小龙猫，小女孩进了矮木丛里的秘道，掉到大树洞里的“异世界”，摔得两只小眼珠晕乎乎地转。看到毛茸茸的大龙猫，小女孩又是戳又是抱，简直把“山灵”当玩具。当龙猫与小女孩四目相对，只是眨巴下眼睛，很快就不当回事了——单纯得不需要任何防备。\n龙猫的日文名字トトロ（Totoro）源自小女孩对troll（山精）一词的误读。到底这个生物是从哪里来的呢？宫崎骏在当年的宣传片中说：“有人说是森林里的一种野兽，也有说是野兽死后的鬼魂就是龙猫，书上还说宫崎县里的森林住着小龙猫，但是我们不能想象两米多高的的大龙猫，世界上也不会有，但我们还是希望找到那些静静站在森林树上的、被认为不存在的东西……”\n\n在宫崎骏的设定里，“龙猫在很久以前便悠然地住在森林的深处，从未在人前露面。这些年来，大自然受到很大的破坏，龙猫是被遗忘的东西，是不被注意的东西，是以为被消失的东西，它们其实还活着。”这其中，寄寓了他对自然遭受破坏的深深担忧。\n而对于孩子来说，“世界上有龙猫这件事，抚慰了小女孩五月和梅伊，只要龙猫存在，这就够了。”\n\n4、我和龙猫一起等公车！\n跟《千与千寻》里异世界的难以企及不同，龙猫里的魔幻世界与真实世界之间似乎没有那么明显的不可逾越的鸿沟，神奇的生物可以和人类生活在同一个空间里，但是，宫崎骏的设定至少是，只有小孩才能看到它们。\n大龙猫的第二次出场是在瓢泼的大雨中，两个等待爸爸的孤独小孩遇上这个突如其来的“怪物”。虽然活了一千多岁，但它调皮属性全开，跳起来用肥胖的身躯震动地面，只为听树上雨水噼噼啪啪全砸在伞上的声音。\n第一次的相遇是莽撞而匆忙的，而第二次的相遇，因为彼此相通的这份童真，人类孩童与异世界的生灵结下了友谊，分别时大龙猫甚至送了小女孩一包种子。\n宫崎骏曾说，自己对大自然的爱，同时包裹着对人类的失望甚至厌恶，但在这里，他把人与自然的和解寄托在了下一代。\n\n5、咧着嘴笑的“猫巴士”\n龙猫的交通工具是一只长有12只脚、咧嘴着笑但又有点狰狞的大猫。它的眼睛是车灯，额头则会显示目的地，身体会自动幻化出车门供龙猫上下车，它甚至可以上树、走电线。它的头上还有两只小老鼠，想到猫和老鼠的猎捕关系，这个装饰品似乎有点暗黑。\n后来妹妹走丢了，无助的姐姐求助于大龙猫。龙猫在树顶上一声呼唤，猫巴士就从农民的田野中如入无人之境地飞奔而来，没人能看到它。猫巴士的车厢头部报出目的地：妹妹。\n猫巴士的设定源自日本人的古老传说：当猫足够老之后，就会获得变形的能力，叫做化け猫。宫崎骏对猫巴士的解释是：“可以将它视为古代的一只猫妖，因觉得人类世界的公交车很有趣，而将自己变成那样的形状。”据说，它咧着嘴笑的形象也借鉴自英国小说《爱丽丝漫游奇境》里一只会隐身的咧嘴大笑的柴郡猫，当它逐渐隐身的时候，最后消失的是它的笑容，只剩下露出的牙齿浮在半空中……\n\n6、龙猫的神迹：让种子长成大树\n龙猫送给孩子的种子一直没有破土，夜里，她们看到龙猫撑着伞一蹦一蹦地来到她们的屋外，龙猫施展了神迹让种子瞬间长成了苍天大树。如果说之前的龙猫还只是一只生活在神秘森林里的生物，那么这段情节就坐实了它森林主人的“神灵”身份。\n这个场景十分的梦幻，如小女孩自己所言“好像在做梦，但又不是梦”。它对于宫崎骏的意义应该是很重大的，只有孩子会毫无功利心地对待自然，所以她们得到了大自然的馈赠。那瞬间冲破天际的大树，也是他的希望：“我希望再活30年。我想看到东京被大海淹没，NTV电视塔成为孤岛。曼哈顿成为水下之城……我对这一切感到兴奋。金钱和欲望，所有这一切会走向崩溃，绿色的杂草将接管世界。”\n\n7、飞！向自由的天空进击\n宫崎骏的伯父曾开了一家叫宫崎飞机的工厂，二战期间，宫崎骏的父亲担任厂长，所以也就不难明白，为何宫崎骏的作品里，处处都是飞行元素：《魔女宅急便》里的扫帚，《天空之城》里的飞行石和花样百出的飞行器，《红猪》波鲁克的红色飞行艇……没有一个片子里没有飞行！\n当龙猫施展完神迹后，它从毛茸茸的毛发下掏出了一个陀螺，用绳子一甩，一个独特的飞行器就产生了。为什么是陀螺？龙猫代表了原始森林的世界，而陀螺，早在四五千年前的石器时代就已经存在了，这跟《龙猫》回归原始传统的取向是一致的。\n\n结语：\n早年的宫崎骏，认为“即便日本的农村有恬静的风光，可稻草屋屋顶下有人贩子、迷信、家长制，有各种各样违背人性的行为”，所以，“日本的风光、水田、浪漫的油菜花，都会让我心生厌恶。”但这一切在他读了中尾佐助的《栽培植物与农耕的起源》后改变了，他相信，日本民族的文化与历史，是日本的地理环境所催生的，他把大自然当作自己与“日本人”这种自我认知的最后一层联系。\n在所有作品里，宫崎骏都孜孜不倦地表达对自然、对原始生灵的敬慕，而孩童成为维系这一切的重要纽带。没有《风之谷》、《幽灵公主》里的痛苦纠结，《龙猫》集中展现了人与自然融洽的一幕，成为他“最和谐”，最纯真的一部作品。', '2016-04-16 09:23:18'),
(17, '娱乐', '《极限挑战》明晚回归 黄磊索抱被拒“谁是卧底”惹猜疑', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E5%A8%B1%E4%B9%90/http%3A%2F%2Fent.ifeng.com%2Fa%2F20160416%2F42606315_0.shtml/%E3%80%8A%E6%9E%81%E9%99%90%E6%8C%91%E6%88%98%E3%80%8B%E6%98%8E%E6%99%9A%E5%9B%9E%E5%BD%92%20%E9%BB%84%E7%A3%8A%E7%B4%A2%E6%8A%B1%E8%A2%AB%E6%8B%92%E2%80%9C%E8%B0%81%E6%98%AF%E5%8D%A7%E5%BA%95%E2%80%9D%E6%83%B9%E7%8C%9C%E7%96%91/%E5%87%A4%E5%87%B0%E5%A8%B1%E4%B9%90/1460769037000/13865562648602759124', 'http://y3.ifengimg.com/cmpp/2016/04/16/08/c5bb3b0a-c951-4392-a5fe-4cb36f52fefe_size72_w580_h387.jpg', '凤凰娱乐讯 大型励志体验真人秀《极限挑战》第二季即将于本周日晚于优酷网络独播，呐喊着“这就是命”的极限男人帮原班人马暖心归来，看点多多。首期节目中，“谁是卧底”成为最大悬念，而黄磊在一开始就遭遇信任危机，过分热情的举动引发众人集体怀疑。\n\n孙红雷撞脸牛头梗\n“谈笑之间，分分钟把你看穿”的黄磊，在首期节目中就遭遇信任危机。在浦东和浦西来回奔波了一整天的他，终于在老码头找到了黄渤和罗志祥，激动索抱这个“过分热情”的举动反而引起了他们的怀疑，有车开的黄磊待遇明显好于其他人，他们可没忘上一季的最后一期中，黄磊就是第一个卧底，连连索抱被拒的他真的再次担此“重任”了吗？\n\n黄渤与小猪罗志祥\n“国民坏叔叔”黄渤在第一季的海岛求生中就展现出了他强大的自救能力，此次导演组将他困于面包车中，面对车身不受控制地下滑到河里的紧急情况，短暂的慌乱之后黄渤迅速爬出车窗，再展其敏捷的身手。带着一脸的难以置信地回到岸上，黄渤忍不住惊呼，“这才第二季第一期哎！”\n\n黄磊遭众人怀疑\n第二季延续了第一季的火爆势头，热度只增无减，虽然还没开播，但是已经有学生党组队去官博哭诉，因为播出时间正值学生党周日返校，电视是铁定看不了了，还好有网络独播，让更多看不到电视版的观众，可以通过更便捷的网络平台欣赏看极限男人帮的魅力。熟悉的游戏环节，升级的难度，一起看极限男人帮“开挂”化解危机。', '2016-04-16 09:25:50'),
(18, '娱乐', '迪士尼特效有三宝：孩子、动物、水 一个不能少', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E5%A8%B1%E4%B9%90/http%3A%2F%2Fe.hsxiang.com%2Fhtml%2F2016-04%2F16%2Fcontent_517819.htm/%E8%BF%AA%E5%A3%AB%E5%B0%BC%E7%89%B9%E6%95%88%E6%9C%89%E4%B8%89%E5%AE%9D%EF%BC%9A%E5%AD%A9%E5%AD%90%E3%80%81%E5%8A%A8%E7%89%A9%E3%80%81%E6%B0%B4%20%E4%B8%80%E4%B8%AA%E4%B8%8D%E8%83%BD%E5%B0%91%20/%E5%8D%8E%E5%95%86%E6%99%A8%E6%8A%A5/1460769037000/6394804288367310085', 'http://e.hsxiang.com/res/1/20160416/27861460764112661.jpg', '本报讯（华商晨报记者 关舒柳）昨日，有6部影片同期在国内上映，有“地面阿凡达”之称的迪士尼动画大片《奇幻森林》接棒《疯狂动物城》，一举占取全国近六成排片。此外，梁家辉和佟大为上演《冰河追凶》，艾森伯格和斯图尔特主演的《废柴特工》，国内罕见的日本真人励志电影《垫底辣妹》，杜鹃和阮经天爱情片《纽约纽约》，高口碑作品《不朽的时光》同期上映，真是拥挤不堪。\n3月末4月初，国产电影市场进入淡季，然而两部迪士尼影片《疯狂动物城》和《奇幻森林》却一扫颓势，席卷全球，口碑票房双丰收。\n影片《奇幻森林》根据拉迪亚德·吉普林童话书以及华特·迪士尼人生最后一部长篇动画作品《森林王子》改编，讲述了一个由狼群养大的人类男孩毛克利的森林冒险。影片故事并不复杂，却集合了迪士尼影片最能抓住观众的三样法宝——孩子、动物、水，其中影片逆天的特效直让观众大呼过瘾。\n孩子 一个人和绿幕演完全片\n几乎每一部迪士尼影片中都有一个一边经历着成长之痛，一边拯救了全世界的小孩。孩子是影片与观众最好用的黏合剂，而《奇幻森林》的不同之处在于，这部特效大片中小孩是惟一的演员。\n主角毛克利的扮演者尼尔·塞西是印度裔美国演员，这个孩子对着空气撑起了整部电影。\n此前，李安执导的《少年派》中演员拉苏·沙玛有和看不见的老虎演戏，《地心引力》中桑德拉·布洛克在片场里全程演出在太空冒险的效果。不过，11岁的尼尔·塞西在绿幕中凭借一己之力完成全片，还是让全世界的影迷惊艳。\n表演过程中，为了让尼尔顺利完成表演，导演会给他看动物的实景照片，然后他凭借想象来完成追逐、打斗以及与动物的互动。\n动物 卖萌、搞笑任务艰巨\n尽管整部电影没有一只动物是真实的，然而影片最终呈现出的画面却比真实的还要真，哦，对了，不够真实的是动物们能说话。\n咆哮的猛虎、嬉闹的小狼、奔驰的野牛、严肃的黑豹……全部由电脑完成。看过李安的《少年派》的影迷一定不会忘了那只逼真的老虎。从《奇幻森林》的画面可以清晰地感知到好莱坞的特效团队在技术上的进步。\n画面中，老虎身上的每一根毛发都能在风中摇摆出自己的风格。除此之外，迪士尼一贯善于把握小孩和动物的情感互动赚取观众的眼泪。狼群对于孩子的维护，黑豹对于孩子的包容，老虎的腹黑和凶残以及棕熊的360度无死角卖萌搞笑……\n水 特效有多炫看水就知道\n好莱坞的特效大片一贯善于用水的画面来傲娇地展示自己的特效技术达到了什么样的高度。因为没有规律可循，逼真的水特效最为考验整个特效团队的功力。而且从画面感上来说，水的画面也容易让观众在观影过程中产生舒适感。\n《奇幻森林》中，奔腾的河流、瀑布、小男孩子在雨中奔跑的画面，都被处理得十分逼真。', '2016-04-16 09:27:06'),
(19, '科技', 'iPhone 7 Pro新传言：配双摄像头和智能连接器', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Fview.inews.qq.com%2Fa%2FDIG2016041600645702/iPhone%207%20Pro%E6%96%B0%E4%BC%A0%E8%A8%80%EF%BC%9A%E9%85%8D%E5%8F%8C%E6%91%84%E5%83%8F%E5%A4%B4%E5%92%8C%E6%99%BA%E8%83%BD%E8%BF%9E%E6%8E%A5%E5%99%A8/%E8%85%BE%E8%AE%AF%E6%95%B0%E7%A0%81/1460769037000/4715764503520205191', 'http://t12.baidu.com/it/u=http://inews.gtimg.com/newsapp_match/0/253727004/0&fm=37', '腾讯数码讯（编译：多多）现在关于苹果iPhone 7的谣言满天飞，而其中有两个功能被许多不同的传闻反复提及。除了我们已经知道的苹果将用Lightning接口取代传统的3.5mm耳机接口之外，还有传闻显示苹果将推出一款屏幕尺寸更大的iPhone 7 Pro，并且将配备双摄像头。而最近来自日本网站Mac Otakara从供应链内部获取的最新消息进一步证实了这一说法。\n据悉，这些细节出现在来自于苹果制造伙伴的设计图表，其中除了在硬件设计上与iPhone 6/6s没有特别大的区别之外，我们在这个所谓iPhone 7 Pro的设计图上也看到了双摄像头及Smart Connector智能连接器。\n\n而Mac Otakara的报告确认了这些消息的真实性，并且添加了更多关于iPhone 7 Pro的信息。首先，智能连接器将位于机身背面的下方，目前这种连接方式已经被苹果使用在iPad Pro上，用来与Smart Keyboard键盘连接。\n同时这家日本网站还表示，iPhone 7的总体设计风格将与iPhone 6s非常接近，甚至还否定了最近关于iPhone 7厚度将变得更薄的说法。Mac Otakara表示下一代iPhone的厚度将与iPhone 6s保持一致，虽然苹果增加Lightning耳机接口，但是并不会配备立体声扬声器。\n至于耳机，Mac Otakara表示iPhone 7将附赠一条Lightning接口有限EarPods耳机以及一对无线蓝牙耳机，同时最后该网站表示iPhone 7将依然保留4.7英寸和5.5英寸两个版本，其中iPhone 7 Pro型号将会采用双摄像头配置。', '2016-04-16 09:29:15'),
(20, '科技', '日本研发隐形列车：毫无痕迹融入周围环境', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Ftech.ifeng.com%2Fa%2F20160416%2F41595417_0.shtml/%E6%97%A5%E6%9C%AC%E7%A0%94%E5%8F%91%E9%9A%90%E5%BD%A2%E5%88%97%E8%BD%A6%EF%BC%9A%E6%AF%AB%E6%97%A0%E7%97%95%E8%BF%B9%E8%9E%8D%E5%85%A5%E5%91%A8%E5%9B%B4%E7%8E%AF%E5%A2%83/%E5%87%A4%E5%87%B0%E7%A7%91%E6%8A%80/1460769037000/15017022835647604428', 'http://y0.ifengimg.com/haina/2016_16/fe7564e716ef70a_w640_h425.jpg', '隐形列车\n美国媒体报道称，日本计划在2018年推出一种隐形列车，这种列车可以与周围还近融为一体。\n报道指出，这种隐形列车的设计者是日本著名设计师Kazuyo Sejima，其隐形原理来自于采用半反射和半透明材料的高科技车身。\n不过，这辆隐身列车并不会成为新干线上的一员，而是会作为普通的城市通勤轨道车运行。\n对此，业内人士表示隐形列车的概念虽然炫酷但实际意义并不大，主要原因是因为高速行驶的隐形列车将成为重大安全隐患，路人无法明确的看到它，因此也不能及时的预测风险。', '2016-04-16 09:30:25'),
(21, '科技', '想靠硬件赚钱？恐怕新Kindle无法完成这一历史任务', 'http://m.news.baidu.com/news?fr=mohome&ssid=0&from=&uid=&pu=sz%40224_220%2Cta%40iphone___3_537&bd_page_type=1#page/info%3A%E7%A7%91%E6%8A%80/http%3A%2F%2Ftech.ifeng.com%2Fa%2F20160416%2F41595427_0.shtml/%E6%83%B3%E9%9D%A0%E7%A1%AC%E4%BB%B6%E8%B5%9A%E9%92%B1%EF%BC%9F%E6%81%90%E6%80%95%E6%96%B0Kindle%E6%97%A0%E6%B3%95%E5%AE%8C%E6%88%90%E8%BF%99%E4%B8%80%E5%8E%86%E5%8F%B2%E4%BB%BB%E5%8A%A1/%E5%87%A4%E5%87%B0%E6%96%B0%E9%97%BB/1460769037000/15034933553652054548', 'http://y2.ifengimg.com/a/2016_16/72eb67921d213f1.jpg', '凤凰科技讯 北京时间4月16日消息，据外媒报道，对许多科技发烧友来说，新技术就是正义，但从某些角度来说，这个观点也不完全正确，亚马逊最新的Kindle Oasis就是个很好的例子。\nOasis确实是Kindle在电子书领域投下的重磅炸弹，但消费者是否愿意花2399为其买单还是个未知数。当然，无论价格如何总是会有人买，但要想大卖恐怕可能性很小，Oasis可能会成为一颗“哑弹”。\n亚马逊一直是低端王者\n亚马逊首次在硬件上尝到甜头可以追溯到第一代Kindle Fire平板电脑，这款产品具有超高的性价比。而且Kindle Fire与iPad走了完全不同的路，它是一款低价高质的市场搅局者。\nKindle Fire虽然价格低廉，但其背后却是亚马逊强悍的数字内容，囊括了数字图书、音乐、电影、电视剧等等，这些先天优势甚至比苹果完善的应用生态还要吸引眼球。亚马逊不指望通过硬件挣钱，数字内容销售才是它们真正的金饭碗，此前的Kindle系列产品也一直在遵循这一模式。不过令人遗憾的是，最近亚马逊有些跑偏了，它们不愿继续维持硬件微利，内容赚钱的模式了。\nOasis走了Fire Phone的老路\nKindle Oasis正是亚马逊“新政”下的产物，它们想与苹果看齐，直接通过设备赚钱。这款新的Kindle旗舰价格为290美元（国内售价高达2399元），比去年的旗舰Voyage直接贵出了100美元（国内Voyage卖1499元）。虽然它配备充电套、更好的内置阅读光源，以及更长的续航能力，但是过高的价格必将影响这款产品的普及。\n此外，这款产品很有可能会像Fire Phone一样一败涂地。2014年，亚马逊推出了石破天惊的Fire Phone，但这款产品真正惊人的只有价格，上市之初它居然要价649美元，不过由于销量平平，亚马逊迅速对其进行了调价，最后其合约价直接降到了0.99美元。当年年末，只是消化Fire Phone的库存就花掉了亚马逊1.7亿美元，随后该公司黯然退出了智能手机市场。\n这次Oasis恐怕也会因为销量不振而走上与Fire Phone类似的不归路，因此想复制初代Kindle Fire的成功恐怕可能性不大。\nKindle终结者们已进入低价时代\n过去三年电子阅读器的销售开始陷入衰退。市场研究机构GfK的数据显示，三年时间该市场直接萎缩了一半，从2012年的4000万台暴降到去年的2020万台。价格低廉、功能丰富的平板电脑已经成了电子阅读器的克星。因此，在越多越多低价替代产品涌现的时代，亚马逊选择推出Oasis这样的高价产品，实在是让人有些不解。要知道，一向高贵的苹果都放下了身段，Voyage在iPad mini2面前完全没有任何价格优势可言了。\n目前，全球科技界主要有三大生态系统，而且各家赚钱的方式又各不相同。苹果和谷歌分别靠高利润率的设备销售和搜索广告赚钱，而亚马逊卖设备则主要是为了拉拢用户，刺激自家核心的网络零售业务。不过，发布一款如此高价的产品，恐怕难对其零售业务产生积极作用。（编译/吕佳辉）', '2016-04-16 09:31:46'),
(23, '体育', '佩帅:不认为皇马是晋级热门 席尔瓦或缺席次回合', 'http://m.news.baidu.com/news?fr=mohome&amp;amp;amp;amp;amp;amp;ssid=0&amp;amp;amp;amp;amp;amp;from=844b&amp;amp;amp;amp;amp;amp;uid=&amp;amp;amp;amp;amp;amp;pu=sz%401320_1001%2Cta%40iphone_2_4.2_3_537&amp;amp;amp;amp;amp;amp;bd_page_type=1#page/info%3A%E4%BD%93%E8%82%B2/http%3A%2F%2Fwe.sportscn.com%2Fviewnews-2022442.html/%E4%BD%A9%E5%B8%85%3A%E4%B8%8D%E8%AE%A4%E4%B8%BA%E7%9A%87%E9%A9%AC%E6%98%AF%E6%99%8B%E7%BA%A7%E7%83%AD%E9%97%A8%20%E5%B8%AD%E5%B0%94%E7%93%A6%E6%88%96%E7%BC%BA%E5%B8%AD%E6%AC%A1%E5%9B%9E%E5%90%88/%E5%8D%8E%E4%BD%93%E7%BD%91/1461733929000/7586156810377940678', 'http://t10.baidu.com/it/u=http://img.sportscn.com/q.jpg?http://news2.7m.cn/photo/20160427/20160427101051_44142.jpg&amp;amp;amp;amp;amp;amp;fm=37', '今天凌晨刚刚结束的一场欧冠半决赛较量，曼城主场0-0战平皇家马德里，蓝月亮主帅佩莱格里尼赛后表示，球队有能力在次回合于伯纳乌取得理想结果。\n\n本场比赛皇马两名大将C罗和本泽马双双缺战，让银河战舰在进攻端火力大减。佩莱格里尼则表示：“我不认为C罗的缺阵会让皇马的实力下降。这是一场势均力敌的比赛，过程很激烈，而我们在防守端一直表现得很好，而进攻端在席尔瓦受伤下场之前，也能创造不少机会。”\n“0-0算是不错的结果，因为我们在上半场就失去了席尔瓦。我并不认为皇马是晋级的热门，先客后主的赛程确实会给他们一定优势，但我们在客场也会采取和主场一样的战术布置，此前在门兴、塞维利亚和巴黎都取得理想结果。”\n随后佩帅表示席尔瓦很可能错过第二回合的较量：“席尔瓦的大腿有些轻微的拉伤，复出时间还难说，但一星期之内恢复是比较困难了，明天会对他进行详细检查。”\n（Zer0）&amp;lt;/scrip&amp;gt;', '2016-04-27 16:55:03');

-- --------------------------------------------------------

--
-- 表的结构 `test`
--

CREATE TABLE IF NOT EXISTS `test` (
  `date` datetime NOT NULL,
  `texttest` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `test`
--

INSERT INTO `test` (`date`, `texttest`) VALUES
('0000-00-00 00:00:00', '会乱码吗'),
('2016-04-13 13:30:47', '微软新版Windows10新增蓝屏二维码 你来看看有没有用');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `userName` varchar(20) CHARACTER SET gbk NOT NULL COMMENT '用户名',
  `password` varchar(16) CHARACTER SET gbk NOT NULL COMMENT '密码',
  `authority` int(11) NOT NULL DEFAULT '0' COMMENT '权限',
  PRIMARY KEY (`uid`),
  UNIQUE KEY `userName` (`userName`)
) ENGINE=MyISAM  DEFAULT CHARSET=gb2312 COMMENT='后台用户' AUTO_INCREMENT=2 ;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `userName`, `password`, `authority`) VALUES
(1, 'admin', 'admin', 2);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
