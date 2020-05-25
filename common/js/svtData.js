﻿object_extend("mstSvtSkill",'{"strengthStatus":0,"svtId":9941040,"num":1,"priority":1,"skillId":435350,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":2,"priority":1,"skillId":436450,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":3,"priority":1,"skillId":437551,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0}');
object_extend("mstSvtSkill",'{"svtId":9940380,"num":1,"priority":1,"skillId":960182,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940390,"num":1,"priority":1,"skillId":960184,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940400,"num":1,"priority":1,"skillId":960183,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940410,"num":1,"priority":1,"skillId":960185,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":1,"priority":2,"skillId":960189,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":2,"priority":2,"skillId":960190,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":3,"priority":2,"skillId":960191,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":4,"priority":2,"skillId":960192,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":5,"priority":2,"skillId":960193,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":6,"priority":2,"skillId":960194,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":7,"priority":2,"skillId":960195,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940600,"num":4,"priority":1,"skillId":960235,"condQuestId":0,"condLv":0,"condLimitCount":-1}');
object_extend("mstSvtTreasureDevice",'{"damage":[100],"svtId":9935400,"num":1,"priority":426,"imageIndex":0,"treasureDeviceId":441,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1},{"damage":[16,33,51],"svtId":9935500,"num":1,"priority":101,"imageIndex":0,"treasureDeviceId":9935511,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1}');
//強化關卡第10-1彈
/*
object_extend("mstSvtTreasureDevice",'{"damage":[100],"strengthStatus":0,"svtId":102800,"num":1,"priority":101,"flag":0,"imageIndex":0,"treasureDeviceId":102802,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1},{"damage":[16,33,51],"strengthStatus":0,"svtId":602300,"num":1,"priority":102,"flag":0,"imageIndex":0,"treasureDeviceId":602302,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1}');
object_extend("mstTreasureDevice",'{"individuality":[3000,4001,4007],"script":{},"id":102802,"seqId":102800,"name":"無垢識・空の境界","ruby":"むくしき・からのきょうかい","rank":"EX","maxLv":5,"typeText":"対人宝具","attackAttri":1},{"individuality":[3000,4001,4007],"script":{},"id":602302,"seqId":602300,"name":"唯識・直死の魔眼","ruby":"ゆいしき・ちょくしのまがん","rank":"EX","maxLv":5,"typeText":"対人宝具","attackAttri":1}');
object_extend("mstTreasureDeviceLv",'{"treaureDeviceId":102802,"lv":1,"gaugeCount":1,"detailId":102802,"tdPoint":84,"tdPointQ":84,"tdPointA":84,"tdPointB":84,"tdPointEx":84,"tdPointDef":300},{"treaureDeviceId":602302,"lv":1,"gaugeCount":1,"detailId":602302,"tdPoint":80,"tdPointQ":80,"tdPointA":80,"tdPointB":80,"tdPointEx":80,"tdPointDef":400}');
object_extend("mstQuest",'{"id":94032901,"name":"強化クエスト 両儀式"},{"id":94032902,"name":"強化クエスト 両儀式"}');
object_extend("mstQuestRelease",'{"questId":94032901,"type":7,"targetId":102800,"value":4},{"questId":94032902,"type":7,"targetId":602300,"value":4},{"questId":94032903,"type":1,"targetId":94014406,"value":0},{"questId":94032904,"type":7,"targetId":700800,"value":4},{"questId":94032905,"type":7,"targetId":301700,"value":4},{"questId":94032906,"type":1,"targetId":94022001,"value":0},{"questId":94032907,"type":7,"targetId":500500,"value":4}');
/*
object_extend("mstSkill",'{"effectList":[],"actIndividuality":[],"script":{},"id":348650,"type":2,"name":"ハイ・サーヴァント EX","ruby":"はい・さーゔぁんと","maxLv":10,"iconId":999999,"motion":101}');
object_extend("mstSkillDetail",'{"id":348650,"detail":"効果なし","detailShort":"効果なし"}');

/*
for(var s in master.mstSvt){if(master.mstSvt[s].id==402800){master.mstSvt[s].id=0;break;}}
object_extend("mstSvt",'{"relateQuestIds":[],"individuality":[5000,402800,1,103,202,300,304,2009,1000,2001,2008,2005,2113],"classPassive":[34250,88650],"cardIds":[3,1,1,2,2],"script":{"cameraActionId":284},"id":402800,"baseSvtId":402800,"name":"イヴァン雷帝","ruby":"イヴァンライテイ","battleName":"イヴァン雷帝","classId":4,"type":5,"limitMax":4,"rewardLv":90,"friendshipId":1049,"maxFriendshipRank":10,"genderType":1,"attri":1,"combineSkillId":402800,"combineLimitId":402800,"sellQp":5000,"sellMana":9,"sellRarePri":5,"expType":10,"combineMaterialId":5,"cost":16,"battleSize":8,"hpGaugeY":-1000,"starRate":89,"deathRate":400,"attackAttri":1,"illustratorId":27,"cvId":37,"collectionNo":205,"materialStoryPriority":0}');

object_extend("mstTreasureDevice",'{"individuality":[3002,4003,4007],"script":{},"id":402801,"seqId":402800,"name":"我が旅路に従え獣","ruby":"ズヴェーリ・クレースニーホッド","rank":"A+","maxLv":5,"typeText":"対人宝具","attackAttri":1}');
object_extend("mstTreasureDeviceLv",'{"treaureDeviceId":402801,"lv":1,"gaugeCount":1,"detailId":402801,"tdPoint":62,"tdPointQ":62,"tdPointA":62,"tdPointB":62,"tdPointEx":62,"tdPointDef":300,"qp":80000}');
object_extend("mstSvtTreasureDevice",'{"damage":[6,13,20,26,35],"strengthStatus":0,"svtId":402800,"num":1,"priority":101,"flag":0,"imageIndex":0,"treasureDeviceId":402801,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":2}');
object_extend("mstCombineLimit",'{"itemIds":[7004],"itemNums":[5],"id":402800,"svtLimit":0,"qp":100000},{"itemIds":[7004,6516],"itemNums":[12,22],"id":402800,"svtLimit":1,"qp":300000},{"itemIds":[7104,6513,6528],"itemNums":[5,10,3],"id":402800,"svtLimit":2,"qp":1000000},{"itemIds":[7104,6528,6529],"itemNums":[12,6,5],"id":402800,"svtLimit":3,"qp":3000000}');
object_extend("mstCombineSkill",'{"itemIds":[6004],"itemNums":[5],"id":402800,"skillLv":1,"qp":200000},{"itemIds":[6004],"itemNums":[12],"id":402800,"skillLv":2,"qp":400000},{"itemIds":[6104],"itemNums":[5],"id":402800,"skillLv":3,"qp":1200000},{"itemIds":[6104,6513],"itemNums":[12,5],"id":402800,"skillLv":4,"qp":1600000},{"itemIds":[6204,6513],"itemNums":[5,10],"id":402800,"skillLv":5,"qp":4000000},{"itemIds":[6204,6516],"itemNums":[12,15],"id":402800,"skillLv":6,"qp":5000000},{"itemIds":[6516,6527],"itemNums":[29,15],"id":402800,"skillLv":7,"qp":10000000},{"itemIds":[6527,6535],"itemNums":[44,24],"id":402800,"skillLv":8,"qp":12000000},{"itemIds":[6999],"itemNums":[1],"id":402800,"skillLv":9,"qp":20000000}');
*/
function object_extend(key,extendtxt)
{
	var isErr = false;
	extendtxt = extendtxt.replace(/\n/g,"\\n").replace(/\\"/g,"\\\"").replace(/\"なし\"/g,"\"－\"");
	try{
		var tmpMst = JSON.parse('['+extendtxt+']');
		for(var i in tmpMst)
		{
			master[key].push(tmpMst[i]);
		}
	}
	catch(err){console.log(err.message+'\n'+key);isErr=true;}
	if(isErr) alert('存取錯誤');
}
/*暫時應對*/
sortByElmentNo(master.mstSvt);
var zhTWNo=215,zhCNNo=223,statusNo=282,personalityList=" \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 \u5584\uff0f\u60e1 \u82b1\u5ac1 \u590f".split(" "),policyList=" \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" "),attriList="\uff1f\u4eba\u5929\u5730\u661f\u7378".split(""),genderTypeList=["","\u7537\u6027","\u5973\u6027","\u4e0d\u660e"],cardList=["","0000ff","ff0000","00ff00"],svtStatusList=" A B C D E EX ? ? ".split(" "),svtStatusPlusList="  + ++ ? +++ - ? \uff1f \uff0d".split(" "),individualityList=
[[1172,"\u4eba\u985e\u5a01\u8105"],[2E3,"\u795e\u6027"],[2001,"\u4eba\u578b"],[2002,"\u9f8d"],[2004,"\u7f85\u99ac"],[2005,"\u731b\u7378"],[2007,"\u963f\u723e\u6258\u8389\u4e9e\u81c9"],[2008,"\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"],[2009,"\u9a0e\u4e58"],[2010,"\u4e9e\u745f"],[2011,"\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"],[2012,"\u6240\u611b\u4e4b\u4eba"],[2018,"\u6b7b\u9748\u8207\u60e1\u9b54"],[2019,"\u9b54\u6027"],
[2037,"\u88ab\u300c\u795e\u79d8\u6bba\u3057\u300d\u6240\u524b"],[2076,"\u8d85\u5de8\u5927"],[2113,"\u738b"],[2114,"\u5e0c\u81d8\u795e\u8a71\u7cfb\u7537\u6027"],[2355,"\u4f0a\u8389\u96c5"],[2356,"\u300c\u7d33\u58eb\u7684\u306a\u611b C\u300d\u9664\u5973\u6027\u5916\u7684\u5c0d\u8c61"],[2466,"\u963f\u723e\u6208\u865f\u56e0\u7de3\u8005"],[2654,"\u73fe\u4eca\u751f\u5b58\u7684\u4eba\u985e"]];
function svtDataTable(e){var a,f;for(f in master.mstSvt)if(master.mstSvt[f].id==e)break;var h=null;for(p in master.mstSvtLimit)if(master.mstSvtLimit[p].svtId==e){h=master.mstSvtLimit[p];break}var p=null;for(a in master.mstSvtLimit)if(master.mstSvtLimit[a].svtId==e&&master.mstSvtLimit[a].limitCount==master.mstSvt[f].limitMax){p=master.mstSvtLimit[a];break}var c="<tr>";master.mstSvt[f].collectionNo<=statusNo?(c+="<td rowspan=7 align=center style='width:25%;height:300px;'>",c=5==master.mstSvt[f].type||
9==master.mstSvt[f].type||99==master.mstSvt[f].type?c+("<img src=common/images/Servants/Status/"+e+"/status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></td>"):c+("<div class='slide'><div><img src=common/images/Servants/Status/"+e+"/status_servant_1.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+e+"/status_servant_2.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+
e+"/status_servant_3.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div></div></td>")):c+="<td rowspan=7 align=center style='width:25%;height:300px;'><img src='common/images/icon/faces/"+master.mstSvt[f].id+"0.png' onerror=javascript:this.src='common/images/icon/faces/0.png'></td>";c+="<th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:40%;'><b>\u540d\u7a31</b></th><th style='width:10%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No."+
master.mstSvt[f].collectionNo+'</td><td class="star">';for(a=0;a<h.rarity;a++)c+="\u2605";if(null!=p&&p.rarity!=h.rarity)for(c+="<br>",a=0;a<p.rarity;a++)c+="\u2605";0==h.rarity&&(c+="\uff0d");c+="</td><td colspan=2>";c=(a=findSvtNameZh(master.mstSvt[f].id))&&!document.getElementById("isJpTxt").checked?c+("<div class=ruby>"+master.mstSvt[f].ruby+"</div>"+a):c+master.mstSvt[f].name;c+="</td>";document.title=findSvtNameZh2(e)+" - Servant\u8cc7\u6599\u67e5\u8a62";for(a=0;a<mstClass.length;a++)if(mstClass[a].id==
master.mstSvt[f].classId){c+="<td>"+mstClass[a].name+"</td>";break}c+="<td>"+attriList[master.mstSvt[f].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:20%;'><b>\u7e6a\u5e2b</b></th><th style='width:20%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>"+h.hpBase+" / "+h.hpMax;null==p||h.hpBase==p.hpBase&&h.hpMax==p.hpMax||(c+="<br>"+p.hpBase+" / "+p.hpMax);c+="</td><td>"+h.atkBase+" / "+h.atkMax;null==p||h.atkBase==p.atkBase&&
h.atkMax==p.atkMax||(c+="<br>"+p.atkBase+" / "+p.atkMax);c+="</td><td>";if(-1!=master.mstSvt[f].illustratorId)for(a=0;a<master.mstIllustrator.length;a++){if(master.mstIllustrator[a].id==master.mstSvt[f].illustratorId){c+="<a href='illustrator.html#"+master.mstSvt[f].illustratorId+"'>"+master.mstIllustrator[a].name.replace(/\(/g,"<br>(")+"</a>";break}}else c+="\uff1f\uff1f\uff1f";c+="</td><td>";if(-1!=master.mstSvt[f].cvId)for(a=0;a<master.mstCv.length;a++){if(master.mstCv[a].id==master.mstSvt[f].cvId){c+=
"<a href='cv.html#"+master.mstSvt[f].cvId+"'>"+master.mstCv[a].name.replace(/\uff06/g,"<br>")+"</a>";break}}else c+="\uff1f\uff1f\uff1f";c=c+"</td><td>"+(policyList[h.policy]+"\u30fb"+personalityList[h.personality]+"</td><td>"+genderTypeList[master.mstSvt[f].genderType]+"</td></tr>");var r=[];for(a in master.mstSvt[f].individuality)for(var b in individualityList)master.mstSvt[f].individuality[a]==individualityList[b][0]&&r.push(individualityList[b][1]);c+="<tr><th>\u7279\u6027</th><td colspan=5 align=center>"+
r+"</td></tr>";document.getElementById("svtNrmlData").innerHTML=c;c='<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th rowspan=2><b>NP\u7372\u5f97\u7387</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th><b>\u5bf6\u5177</b></th><th><b>\u9632\u79a6</b></th></tr><tr align="center">';
for(b=1;4>=b;b++){c+="<td>";for(a=r=0;a<master.mstSvt[f].cardIds.length;a++)master.mstSvt[f].cardIds[a]==b&&r++;4!=b&&(c+=r+"\u5f35");for(a=0;a<master.mstSvtCard.length;a++)master.mstSvtCard[a].svtId==master.mstSvt[f].id&&master.mstSvtCard[a].cardId==b&&(4!=b&&(c+=" \u5404"),c+=master.mstSvtCard[a].normalDamage.length+"Hit",1<master.mstSvtCard[a].normalDamage.length&&(c+="s"));c+="</td>"}c+="<td>"+master.mstSvt[f].starRate/10+"%</td><td>"+master.mstSvt[f].deathRate/10+"%</td><td>"+h.criticalWeight+
"</td>";r=[];for(var q=0;6>q;q++)r[q]=[];for(var v in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[v].svtId==master.mstSvt[f].id&&0!=master.mstSvtTreasureDevice[v].priority)for(a in master.mstTreasureDeviceLv)if(master.mstTreasureDeviceLv[a].treaureDeviceId==master.mstSvtTreasureDevice[v].treasureDeviceId){var l=[master.mstTreasureDeviceLv[a].tdPointA,master.mstTreasureDeviceLv[a].tdPointB,master.mstTreasureDeviceLv[a].tdPointQ,master.mstTreasureDeviceLv[a].tdPointEx,master.mstTreasureDeviceLv[a].tdPoint,
master.mstTreasureDeviceLv[a].tdPointDef];for(q=0;6>q;q++)0!=r[q].length&&r[q][r[q].length-1]==l[q]||r[q].push(l[q])}for(q=0;6>q;q++)c+="<td>"+npArray(r[q])+"</td>";c+="</tr>";document.getElementById("svtCtrlData").innerHTML=c;c=v="";r=1;l=[];for(a=0;a<master.mstSvtSkill.length;a++)if(master.mstSvtSkill[a].svtId==master.mstSvt[f].id&&!l.includes(master.mstSvtSkill[a].skillId)){l.push(master.mstSvtSkill[a].skillId);for(b=0;b<master.mstSkill.length;b++)if(master.mstSvtSkill[a].skillId==master.mstSkill[b].id){c+=
"<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td>";5!=master.mstSvt[f].type&&(c+="<font color=#007979>SKILL "+master.mstSvtSkill[a].num+"</font><br>");c+="<b>"+master.mstSkill[b].name+"</b></td>";break}if(null==master.mstSkill[b])console.log("\u6280\u80fd\u5c0b\u627e\u5931\u6557");else{r++;for(b=0;b<master.mstSkillLv.length;b++)if(master.mstSvtSkill[a].skillId==master.mstSkillLv[b].skillId&&
1==master.mstSkillLv[b].lv){c+="<td colspan=5>\u51b7\u537b"+master.mstSkillLv[b].chargeTurn+"\u56de\u5408</td>";break}c+="<td colspan=5>";-1==master.mstSvtSkill[a].condLimitCount?c+="\u6575\u4eba\u6216\u7279\u6b8a\u652f\u63f4\u9650\u5b9a\uff0c\u51b7\u537b\u53ca\u6548\u679c\u50c5\u4f9b\u53c3\u8003":(0==master.mstSvtSkill[a].condLimitCount&&0==master.mstSvtSkill[a].condQuestId&&0==master.mstSvtSkill[a].condLv&&(c+="\u521d\u671f"),0!=master.mstSvtSkill[a].condLimitCount&&(c+="\u9748\u57fa\u518d\u81e8\u7b2c"+
master.mstSvtSkill[a].condLimitCount+"\u968e\u6bb5<br>"),0!=master.mstSvtSkill[a].condLv&&(c+="Lv."+master.mstSvtSkill[a].condLv+"<br>"),0!=master.mstSvtSkill[a].condQuestId&&(c+="\u901a\u904e\u95dc\u5361 "+questRea(master.mstSvtSkill[a].condQuestId)+"<br>"));if(0!=master.mstSvtSkill[a].flag)for(var u in master.mstSvtSkillRelease)if(master.mstSvtSkillRelease[u].svtId==master.mstSvtSkill[a].svtId&&master.mstSvtSkillRelease[u].num==master.mstSvtSkill[a].num&&master.mstSvtSkillRelease[u].priority==master.mstSvtSkill[a].priority){if(70==
master.mstSvtSkillRelease[u].condType)for(var m in master.mstSvtCostume)if(master.mstSvtCostume[m].svtId==master.mstSvtSkillRelease[u].svtId&&master.mstSvtCostume[m].id==master.mstSvtSkillRelease[u].condNum){c+="\u88dd\u5099\u9748\u8863 "+master.mstSvtCostume[m].shortName+"<br>";break}break}c+="</td></tr>";var n=[];for(b=0;b<skDetail.length;b++)if(master.mstSvtSkill[a].skillId==skDetail[b][0]){n=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||!n[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvtSkill[a].skillId==
master.mstSkillDetail[b].id){n[1]=master.mstSkillDetail[b].detail;break}var k=[];document.getElementById("isJpTxt").checked?k[0]=n[1].slice(0):(n[1]=n[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),n[1]=n[1].replace(/\uff06/g,"\uff06\u2517"),k=n[1].split(/\uff06|\uff0b/));r+=k.length;for(var d=0;d<k.length;d++){k[d].search(/\{0\}|Lv/);k[d]=k[d].replace(/\{0\}/g,"Lv.");k[d]=k[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');k[d]=k[d].replace(/\u3010/g,'<font color="#006400 ">\u3010');
k[d]=k[d].replace(/\u3011/g,"\u3011</font>");k[d]=k[d].replace(/\n/g,"<br>");k[d]=k[d].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)c+="<tr><td colspan=12>"+k[d]+"</td>";else if(c+="<tr><td colspan=2>"+k[d]+"</td>",n[2+d]&&1<n[2+d].split("/").length-1)for(b in q=[],q=n[2+d].split(/\//),q)c+="<td align=center style='width:50px'>"+q[b]+"</td>";else c+="<td colspan=10>",c=n[2+d]?c+("\u3000"+n[2+d].replace(/\//g," / ")):
"undefined"!==typeof n[2+d]&&0==n[2+d].length?c+"\u3000---":c+"\u3000\u5f85\u88dc";c+="</td></tr>"}}}0<c.length&&(v+="<tr><th style='width:60px' rowspan="+r+"><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593(Lv.6\u8207Lv.10\u5404\u6e1b\u5c111\u56de\u5408)</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>"+c);if(0!=master.mstSvt[f].classPassive.length){c="";for(a=r=0;a<master.mstSvt[f].classPassive.length;a++){r++;
for(b=0;b<master.mstSkill.length;b++)if(master.mstSvt[f].classPassive[a]==master.mstSkill[b].id){c+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td style='width:250px'><b>"+master.mstSkill[b].name+"</b></td>";break}n=[];for(b=0;b<skDetail.length;b++)if(master.mstSvt[f].classPassive[a]==skDetail[b][0]){n=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||
!n[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvt[f].classPassive[a]==master.mstSkillDetail[b].id){n[1]=master.mstSkillDetail[b].detail;break}k=[];document.getElementById("isJpTxt").checked?k[0]=n[1].slice(0):(n[1]=n[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),n[1]=n[1].replace(/\uff06/g,"\uff06\u2517"),k=n[1].split(/\uff06|\uff0b|\+/));c+="<td colspan=10 style='width:500px'>";for(d=0;d<k.length;d++)if(k[d].search(/\{0\}|Lv/),k[d]=k[d].replace(/\{0\}/g,"Lv."),k[d]=k[d].replace(/\[Lv.]/g,
'<font color="#CC00CC ">[Lv.]</font>'),k[d]=k[d].replace(/\u3010/g,'<font color="#006400 ">\u3010'),k[d]=k[d].replace(/\u3011/g,"\u3011</font>"),k[d]=k[d].replace(/\n/g,"<br>"),k[d]=k[d].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>'),document.getElementById("isJpTxt").checked)c+=k[d];else if(0!=d&&(c+="<br>"),c+=k[d],n[2+d]&&1<n[2+d].split("/").length-1)for(b in c+=k[d]+"\uff1a",q=[],q=n[2+d].split(/\//),q)c+=q[b];else c=n[2+d]?c+("\uff1a"+n[2+d].replace(/\//g," / ")):
"undefined"!==typeof n[2+d]&&0==n[2+d].length?c+"":c+"\uff1a\u5f85\u88dc";c+="</td></tr>"}0<c.length&&(v+="<tr><th rowspan="+master.mstSvt[f].classPassive.length+"><b>\u8077\u968e\u6280\u80fd</b></th>"+c)}c="";r=0;u=[];for(b in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[b].svtId==master.mstSvt[f].id&&100!=master.mstSvtTreasureDevice[b].treasureDeviceId&&!u.includes(master.mstSvtTreasureDevice[b].treasureDeviceId))for(u.push(master.mstSvtTreasureDevice[b].treasureDeviceId),a=0;a<master.mstTreasureDevice.length;a++)if(master.mstTreasureDevice[a].id==
master.mstSvtTreasureDevice[b].treasureDeviceId){r+=2;c+="<th colspan=2 style='width:300px'><b>\u540d\u7a31</b></th><th colspan=2 style='width:100px'><b>\u7b49\u7d1a</b></th><th colspan=2 style='width:100px'><b>\u7a2e\u985e</b></th><th colspan=4 style='width:200px'><b>\u89e3\u653e\u95dc\u5361</b></th><th colspan=2 style='width:100px'>\u653b\u64ca\u6b21\u6578</th></tr>";c+='<tr align="center"><td colspan=2><div class=ruby>'+master.mstTreasureDevice[a].ruby+"</div>";c+='<b><font color="#'+cardList[master.mstSvtTreasureDevice[b].cardId]+
'">'+master.mstTreasureDevice[a].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[a].rank+"</td><td colspan=2>"+master.mstTreasureDevice[a].typeText.replace(/\uff0f/g,"\uff0f<br>").replace(/\u5bfe/g,"\u5c0d").replace(/\u5b9d/g,"\u5bf6").replace(/\u5263/g,"\u528d").replace(/\u60aa/g,"\u60e1").replace(/\u5965/g,"\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,"Saber").replace(/\u7adc/g,"\u9f8d")+"</td><td colspan=4>";c=98==master.mstSvtTreasureDevice[b].num?c+"\u6575\u4eba\u6216\u7279\u6b8a\u652f\u63f4\u9650\u5b9a":
0==master.mstSvtTreasureDevice[b].condQuestId&&0==master.mstSvtTreasureDevice[b].condLv&&0==master.mstSvtTreasureDevice[b].condFriendshipRank?c+"\u521d\u671f":null!=findName(master.mstQuest,master.mstSvtTreasureDevice[b].condQuestId)?c+questRea(master.mstSvtTreasureDevice[b].condQuestId):0!=master.mstSvtTreasureDevice[b].condLv?c+("Lv."+master.mstSvtTreasureDevice[b].condLv+"\u89e3\u653e"):0!=master.mstSvtTreasureDevice[b].condFriendshipRank?c+("\u7d46\u7b49\u7d1a"+master.mstSvtTreasureDevice[b].condFriendshipRank+
"\u89e3\u653e"):c+"\u672a\u958b\u653e";c+="</td>";m=[];for(d in tdDetail)if(master.mstTreasureDevice[a].id==tdDetail[d][0]){m=tdDetail[d].slice(0);break}if(document.getElementById("isJpTxt").checked||!m[1])for(d in master.mstTreasureDeviceDetail)if(master.mstTreasureDevice[a].id==master.mstTreasureDeviceDetail[d].id){m[1]=master.mstTreasureDeviceDetail[d].detail;break}c+="<td colspan=2>";-1==m[1].search(/\u653b\u64ca[^\u529b\u6642]|\u653b\u6483[^\u529b\u6642]/)?c+="\uff0d":(c=0<master.mstSvtTreasureDevice[b].damage.length?
c+master.mstSvtTreasureDevice[b].damage.length:c+"1",c+="Hit",1<master.mstSvtTreasureDevice[b].damage.length&&(c+="s"));c+="</td></tr>";l=[];document.getElementById("isJpTxt").checked?l[0]=m[1].slice(0):(m[1]=m[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),m[1]=m[1].replace(/\uff06/g,"\uff06\u2517"),l=m[1].split(/\uff06|\uff0b/));r+=l.length;for(d=0;d<l.length;d++){l[d].search(/\{0\}|Lv/);l[d].search(/<O|<\u30aa/);l[d]=l[d].replace(/\{0\}/g,"Lv.");l[d]=l[d].replace(/<O/g,'<font color="#CC6600"><br>< O');
l[d]=l[d].replace(/<\u30aa/g,'<font color="#CC6600"><\u30aa');l[d]=l[d].replace(/P>/g,"P></font>");l[d]=l[d].replace(/\u30d7>/g,"\u30d7></font>");l[d]=l[d].replace(/\u3010/g,'<font color="#006400 ">\u3010');l[d]=l[d].replace(/\u3011/g,"\u3011</font>");l[d]=l[d].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');l[d]=l[d].replace(/\n/g,"<br>");l[d]=l[d].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)c+="<td colspan=12>"+
l[d]+"</td>";else if(0!=d&&(c+="<tr>"),c+="<td colspan=2>"+l[d]+"</td>",m[2+d]&&1<m[2+d].split("/").length-1)for(g in q=[],q=m[2+d].split(/\//),q)c+="<td align=center colspan=2>"+q[g]+"</td>";else c+="<td colspan=10>",c=m[2+d]?c+("\u3000"+m[2+d]):"undefined"!==typeof m[2+d]&&0==m[2+d].length?c+"\u3000---":c+"\u3000\u5f85\u88dc";c+="</td></tr>"}break}0<c.length&&(v+="<tr><th rowspan="+r+" style='width:60px'><b>\u5bf6\u5177</b></th>"+c);document.getElementById("svtSkTdData").innerHTML=v;b="";b='<tr><th rowspan=2 style="width:250px">\u80fd\u529b\u503c</th><th style="width:80px">\u7b4b\u529b</th><th style="width:80px">\u8010\u4e45</th><th style="width:80px">\u654f\u6377</th><th style="width:80px">\u9b54\u529b</th><th style="width:80px">\u5e78\u904b</th><th style="width:80px">\u5bf6\u5177</th></tr><tr align="center"><td>'+
svtStatusList[Math.floor(h.power/10)]+svtStatusPlusList[h.power%10]+"</td><td>"+svtStatusList[Math.floor(h.defense/10)]+svtStatusPlusList[h.defense%10]+"</td><td>"+svtStatusList[Math.floor(h.agility/10)]+svtStatusPlusList[h.agility%10]+"</td><td>"+svtStatusList[Math.floor(h.magic/10)]+svtStatusPlusList[h.magic%10]+"</td><td>"+svtStatusList[Math.floor(h.luck/10)]+svtStatusPlusList[h.luck%10]+"</td><td>"+svtStatusList[Math.floor(h.treasureDevice/10)]+svtStatusPlusList[h.treasureDevice%10]+"</td></tr>";
if(1E3!=master.mstSvt[f].friendshipId){d=findSvtFs(master.mstSvt[f].id);u=5;m=[];if(d!=master.mstSvt[f].friendshipId||10==master.mstSvt[f].maxFriendshipRank)u=10;b+="<tr><th rowspan="+2*(10==u?15:5)/5+">\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th>";10==u&&(b+="\u5c08\u5c6c\u79ae\u88dd");b+='</th></tr><tr align="center">';for(a in master.mstFriendship)master.mstFriendship[a].id==d&&15>master.mstFriendship[a].rank&&(m[master.mstFriendship[a].rank]=
master.mstFriendship[a].friendship);for(a=0;5>a;a++)b=0==a?b+("<td>"+m[a]+"</td>"):b+("<td>"+(m[a]-m[a-1])+"<br>("+m[a]+")</td>");if(10==u){b+="<td rowspan=5>";for(var t in bondCE)if(bondCE[t][1]==master.mstSvt[f].id){b+=svtFace(bondCE[t][0]);break}b+="</td></tr>"}else b+="<td></td></tr>";if(10==u){b+='<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th></tr><tr align="center">';for(a=5;10>a;a++)b+="<td>"+(m[a]-m[a-1])+"<br>("+m[a]+")</td>";b+='</tr><tr><th>Lv.11</th><th>Lv.12</th><th>Lv.13</th><th>Lv.14</th><th>Lv.15</th></tr><tr align="center">';
for(a=10;15>a;a++)b+="<td>"+(m[a]-m[a-1])+"<br>("+m[a]+")</td>";b+="</tr>"}}master.mstSvt[f].collectionNo>zhCNNo&&($("#cmtlang_zh").prop("checked",!1),$("#cmtlang_jp").prop("checked",!0));cmtRead($("input[name=cmtlang]:checked").val());$("#svtInfoData").html(b);t="";t="<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";for(d=0;4>d;d++){b="";0==d%2&&(b=' bgcolor=" #ECF2F3"');0!=d&&(t+="<tr>");t+="<td width=80 "+b+">\u7b2c"+(d+1)+"\u968e\u6bb5</td><td width=450"+b+">";for(a=0;a<master.mstCombineLimit.length;a++)if(master.mstCombineLimit[a].id==
master.mstSvt[f].id&&master.mstCombineLimit[a].svtLimit==d){for(b=0;b<master.mstCombineLimit[a].itemIds.length;b++)t+='<a href="item_drop.html#'+master.mstCombineLimit[a].itemIds[b]+'"><div class="itemMT" title="'+findItemName(master.mstCombineLimit[a].itemIds[b])+'" style="background-image: url(\'common/images/icon/items/'+master.mstCombineLimit[a].itemIds[b]+".png')\" >"+master.mstCombineLimit[a].itemNums[b]+'</div></a><div style="width:10px;display:inline-block;"></div>';t+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+
addCommas(master.mstCombineLimit[a].qp)+"</div>"}t+="</td></tr>"}t+="<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";for(a=d=0;a<master.mstCombineSkill.length;a++)if(b="",0==a%2&&(b=' bgcolor=" #ECF2F3"'),master.mstCombineSkill[a].id==master.mstSvt[f].id){1!=master.mstCombineSkill[a].skillLv&&(t+="<tr>");t+="<td"+b+">Lv."+master.mstCombineSkill[a].skillLv+"\u2192Lv."+(master.mstCombineSkill[a].skillLv+1)+"</td><td"+b+">";for(b=0;b<master.mstCombineSkill[a].itemIds.length;b++)t+='<a href="item_drop.html#'+
master.mstCombineSkill[a].itemIds[b]+'"><div class="itemMT" title="'+findItemName(master.mstCombineSkill[a].itemIds[b])+'" style="background-image: url(\'common/images/icon/items/'+master.mstCombineSkill[a].itemIds[b]+".png')\" >"+master.mstCombineSkill[a].itemNums[b]+'</div></a><div style="width:10px;display:inline-block;"></div>';t+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+addCommas(master.mstCombineSkill[a].qp)+"</div>";d++}0==d&&(t+=
"<td colspan=2>\u7121</td></tr>");$("#svtCmbnData").html(t);$("#svtImgData").html('<tr><td><span id="cmd"><img src="common/images/Servants/Commands/'+e+'/card_servant_1.png" style="" class="CommandCard vsvtImg"/><img src="common/images/Servants/Commands/'+e+'/card_servant_2.png" style="" class=CommandCard "svtImg"/><img src="common/images/Servants/Commands/'+e+'/card_servant_3.png" style="" class="CommandCard svtImg"/></span><br><span id="graph"><img src=common/images/CharaGraph/'+e+'a.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+
e+'b.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+e+'c.png style="max-width:50%;" class="svtImg"/></span></td></tr>');$(".svtImg").error(function(){$(this).hide()});t=3;for(a in master.mstSvtLimitAdd)master.mstSvtLimitAdd[a].svtId==master.mstSvt[f].id&&($("#cmd").append('<img src="common/images/Servants/Commands/'+e+"/card_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" style="" class="CommandCard svtImg"/>'),$("#graph").append("<img src=common/images/CharaGraph/"+
master.mstSvtLimitAdd[a].battleCharaId+'a.png style="max-width:50%;" class="svtImg"/>'),master.mstSvt[f].collectionNo<=statusNo&&$(".slide").append('<div><img src="common/images/Servants/Status/'+e+"/status_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" onerror="this.style.display = none" width=256 height=256 /></div>'),t++);$(".CommandCard").css("max-width",Math.floor(100/t)+"%");e="";null==p||h.hpBase==p.hpBase&&h.hpMax==p.hpMax&&h.atkBase==p.atkBase&&h.atkMax==p.atkMax||(h=p);if(99==master.mstSvt[f].type)$("#chart_div").css("display",
"none");else for($("#chart_div").css("display","block"),e="<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>",a=0;100>a;a++)for(d=0;d<master.mstSvtExp.length;d++)if(master.mstSvt[f].expType==master.mstSvtExp[d].type&&master.mstSvtExp[d].lv==a+1){b="";1==master.mstSvtExp[d].lv%2&&(b=' bgcolor="#ECF2F3"');e+='<tr align="center"><td'+b+">Lv."+master.mstSvtExp[d].lv+"</td><td"+b+">"+Math.floor(h.atkBase+(h.atkMax-h.atkBase)*master.mstSvtExp[d].curve/1E3)+"</td><td"+
b+">"+Math.floor(h.hpBase+(h.hpMax-h.hpBase)*master.mstSvtExp[d].curve/1E3)+"</td><td"+b+">"+(master.mstSvtExp[d].curve-master.mstSvtExp[d-1].curve)/10+"%</td></tr>";break}$("#svtLvData").html(e);$("img.lazyload").lazyload();$(function(){$(".slide").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2E3})})}
function cmtRead(e){try{$("#svtCmtData").empty(),$.get("common/svtcomment/"+e+"/"+$("#svtid").val(),function(a){0==a.length&&(a="W10=");a=JSON.parse(base64.decode(a));var e="",h;for(h in a){e+="<tr><th width=250>"+cmtCond(a[h].condType,null!=a[h].condValues&&0<a[h].condValues.length?a[h].condValues[0]:a[h].condValue);for(var p in master.mstSvtCommentAdd)master.mstSvtCommentAdd[p].svtId==a[h].svtId&&master.mstSvtCommentAdd[p].id==a[h].id&&(e+="<br>\uff06<br>"+cmtCond(master.mstSvtCommentAdd[p].condType,
master.mstSvtCommentAdd[p].condValues[0]));var c=1==a[h].id%2?' bgcolor=" #ECF2F3"':"";e+="</th><td colspan=6"+c+" width=540>";e+=a[h].comment.replace(/\n/g,"<br>").replace(/<br>$/,"<br><br>")+"</td></tr>"}0==a.length&&(e="");$("#svtCmtData").append(e)},"text")}catch(a){console.log("Cannot find comment file."),"zh"==e&&cmtRead("jp")}}
function cmtCond(e,a){var f="";0==e?f+="<b>\u89d2\u8272\u8a73\u7d30</b>":9==e?f+="<b>\u7d46\u7b49\u7d1a"+a+"</b>":1==e?f+="<b>\u901a\u904e\u95dc\u5361</b><br>"+questRea(a):7==e&&(f+="<b>\u9748\u57fa\u518d\u81e8\u7b2c"+a+"\u968e\u6bb5</b>");return f}
function classidChange(){var e;for(e=svtid.options.length-1;0<=e;e--)svtid.remove(e);for(e=0;e<master.mstSvt.length;e++)if(0==classid.value||master.mstSvt[e].classId==classid.value)if(1==master.mstSvt[e].type||2==master.mstSvt[e].type||5==master.mstSvt[e].type||9==master.mstSvt[e].type||99==master.mstSvt[e].type){var a=findSvtNameZh(master.mstSvt[e].id);a?svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+" "+a,master.mstSvt[e].id)):svtid.options.add(new Option("No."+master.mstSvt[e].collectionNo+
" "+master.mstSvt[e].name,master.mstSvt[e].id))}for(e=0;e<svtid.options.length;e++)if(-1==svtid.options[e].text.search("No.0")){svtid.options[e].selected=!0;break}0!=classid.value&&svtlocation(svtid[svtid.options.selectedIndex].value)}function svtidset(){classidChange();svtlocation(svtid[0].value)}
function svtidChange(){var e;for(e=svtlv.options.length-1;0<=e;e--)svtlv.remove(e);for(e in master.mstSvt)if(master.mstSvt[e].id==svtid.value){for(e=100;0<e;e--)svtlv.options.add(new Option("Lv."+e,e));break}svtlvChange();svtDataTable(svtid.value);drawChart()}
function svtlocation(e){e="";for(var a in master.mstSvt)if(master.mstSvt[a].id==svtid.value){e=0!=master.mstSvt[a].collectionNo?e+("?no="+master.mstSvt[a].collectionNo):e+("?id="+master.mstSvt[a].id);break}"file:"==location.protocol?changeURL(location.protocol+"//"+location.pathname+e):changeURL(location.protocol+"//"+location.hostname+location.pathname+e);svtidChange()}
function svtlvChange(){var e,a=0,f=0,h=0,p=0;for(e in master.mstSvtLimit)master.mstSvtLimit[e].svtId==svtid.value&&(a=master.mstSvtLimit[e].hpBase,f=master.mstSvtLimit[e].hpMax,h=master.mstSvtLimit[e].atkBase,p=master.mstSvtLimit[e].atkMax);for(var c in master.mstSvt)if(master.mstSvt[c].id==svtid.value){for(var r in master.mstSvtExp)if(atk.value=h,hp.value=a,four(),master.mstSvt[c].expType==master.mstSvtExp[r].type&&master.mstSvtExp[r].lv==svtlv.value){atk.value=Math.floor(h+(p-h)*master.mstSvtExp[r].curve/
1E3);hp.value=Math.floor(a+(f-a)*master.mstSvtExp[r].curve/1E3);four();break}break}}function four(){hpp.value=parseInt(hp.value)+2E3;atkp.value=parseInt(atk.value)+2E3}function npArray(e){var a="",f;for(f in e)a+=e[f]/100+"%<br>";return a}
function urlId(){$("#zhTWNO").html(zhTWNo);$("#zhCNNO").html(zhCNNo);$("#classid").val(0);classidChange();var e="1",a="";getUrl("no")&&(e=getUrl("no"));getUrl("id")&&(a=getUrl("id"));if(e){if(0!=a.length)for(i in master.mstSvt){if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&a==master.mstSvt[i].id){$("#svtid").val(master.mstSvt[i].id);break}}else for(i in master.mstSvt)if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||
5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&e==master.mstSvt[i].collectionNo){$("#svtid").val(master.mstSvt[i].id);break}i==master.mstSvt.length-1&&$("#svtid").val(800100)}svtidChange()};