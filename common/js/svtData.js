﻿object_extend("mstSvtSkill",'{"strengthStatus":0,"svtId":9941040,"num":1,"priority":1,"skillId":435350,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":2,"priority":1,"skillId":436450,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0},{"strengthStatus":0,"svtId":9941040,"num":3,"priority":1,"skillId":437551,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":-1,"eventId":0}');
object_extend("mstSvtSkill",'{"svtId":9940380,"num":1,"priority":1,"skillId":960182,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940390,"num":1,"priority":1,"skillId":960184,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940400,"num":1,"priority":1,"skillId":960183,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940410,"num":1,"priority":1,"skillId":960185,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":1,"priority":2,"skillId":960189,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":2,"priority":2,"skillId":960190,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":3,"priority":2,"skillId":960191,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":4,"priority":2,"skillId":960192,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":5,"priority":2,"skillId":960193,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":6,"priority":2,"skillId":960194,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940530,"num":7,"priority":2,"skillId":960195,"condQuestId":0,"condLv":0,"condLimitCount":-1},{"svtId":9940600,"num":4,"priority":1,"skillId":960235,"condQuestId":0,"condLv":0,"condLimitCount":-1}');
object_extend("mstSvtTreasureDevice",'{"damage":[100],"svtId":9935400,"num":1,"priority":426,"imageIndex":0,"treasureDeviceId":441,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1},{"damage":[16,33,51],"svtId":9935500,"num":1,"priority":101,"imageIndex":0,"treasureDeviceId":9935511,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condFriendshipRank":0,"motion":50,"cardId":1}');
//2020泳裝二池
object_extend("mstSvtSkill",'{"strengthStatus":0,"skillNum":1,"svtId":404100,"num":1,"priority":1,"skillId":771650,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":0,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":404100,"num":2,"priority":1,"skillId":770352,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":1,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":404100,"num":3,"priority":1,"skillId":769550,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":3,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":104500,"num":1,"priority":1,"skillId":772550,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":0,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":104500,"num":2,"priority":1,"skillId":773451,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":1,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":104500,"num":3,"priority":1,"skillId":774650,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":3,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":2500700,"num":1,"priority":1,"skillId":765450,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":0,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":2500700,"num":2,"priority":1,"skillId":436451,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":1,"eventId":0,"flag":0},{"strengthStatus":0,"skillNum":1,"svtId":2500700,"num":3,"priority":1,"skillId":766550,"condQuestId":0,"condQuestPhase":0,"condLv":0,"condLimitCount":3,"eventId":0,"flag":0}');

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
sortByElmentNo(master.mstSvt);
var zhTWNo=215,zhCNNo=223,statusNo=288,personalityList=" \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 \u5584\uff0f\u60e1 \u82b1\u5ac1 \u590f".split(" "),policyList=" \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" "),attriList="\uff1f\u4eba\u5929\u5730\u661f\u7378".split(""),genderTypeList=["","\u7537\u6027","\u5973\u6027","\u4e0d\u660e"],cardList=["","0000ff","ff0000","00ff00"],svtStatusList=" A B C D E EX ? ? ".split(" "),svtStatusPlusList="  + ++ ? +++ - ? \uff1f \uff0d".split(" "),individualityList=
[[1172,"\u4eba\u985e\u5a01\u8105"],[2E3,"\u795e\u6027"],[2001,"\u4eba\u578b"],[2002,"\u9f8d"],[2004,"\u7f85\u99ac"],[2005,"\u731b\u7378"],[2007,"\u963f\u723e\u6258\u8389\u4e9e\u81c9"],[2008,"\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"],[2009,"\u9a0e\u4e58"],[2010,"\u4e9e\u745f"],[2011,"\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"],[2012,"\u6240\u611b\u4e4b\u4eba"],[2018,"\u6b7b\u9748\u8207\u60e1\u9b54"],[2019,"\u9b54\u6027"],
[2037,"\u88ab\u300c\u795e\u79d8\u6bba\u3057\u300d\u6240\u524b"],[2076,"\u8d85\u5de8\u5927"],[2113,"\u738b"],[2114,"\u5e0c\u81d8\u795e\u8a71\u7cfb\u7537\u6027"],[2355,"\u4f0a\u8389\u96c5"],[2356,"\u300c\u7d33\u58eb\u7684\u306a\u611b C\u300d\u9664\u5973\u6027\u5916\u7684\u5c0d\u8c61"],[2466,"\u963f\u723e\u6208\u865f\u56e0\u7de3\u8005"],[2631,"\u4eba\u79d1\u5f9e\u8005"],[2632,"\u9b54\u7378\u578b\u5f9e\u8005"],[2654,"\u73fe\u4eca\u751f\u5b58\u7684\u4eba\u985e"],[2666,"\u5de8\u4eba"]],indi_list={1:{name:"\u7537\u6027",
svt:"",enemy:""},2:{name:"\u5973\u6027",svt:"",enemy:""},3:{name:"\u6027\u5225\u4e0d\u660e",svt:"",enemy:""},2356:{name:"\u300c\u7d33\u58eb\u4e4b\u611b C\u300d\u9664\u5973\u6027\u5916\u7684\u5c0d\u8c61",svt:"",enemy:""},200:{name:"\u300e\u5929\u300f\u4e4b\u529b",svt:"",enemy:""},201:{name:"\u300e\u5730\u300f\u4e4b\u529b",svt:"",enemy:""},202:{name:"\u300e\u4eba\u300f\u4e4b\u529b",svt:"",enemy:""},203:{name:"\u300e\u661f\u300f\u4e4b\u529b",svt:"",enemy:""},204:{name:"\u300e\u7378\u300f\u4e4b\u529b",
svt:"",enemy:""},300:{name:"\u300e\u79e9\u5e8f\u300f\u5c6c\u6027",svt:"",enemy:""},301:{name:"\u300e\u6df7\u6c8c\u300f\u5c6c\u6027",svt:"",enemy:""},302:{name:"\u300e\u4e2d\u7acb\u300f\u5c6c\u6027",svt:"",enemy:""},303:{name:"\u300e\u5584\u300f\u5c6c\u6027",svt:"",enemy:""},304:{name:"\u300e\u60e1\u300f\u5c6c\u6027",svt:"",enemy:""},305:{name:"\u300e\u4e2d\u5eb8\u300f\u5c6c\u6027",svt:"",enemy:""},308:{name:"\u300e\u590f\u300f\u5c6c\u6027",svt:"",enemy:""},1E3:{name:"\u3014\u5f9e\u8005\u3015",svt:"\u5168\u90e8\u5f9e\u8005",
enemy:""},1001:{name:"\u3014\u4eba\u985e\u3015",svt:"",enemy:""},1002:{name:"\u3014\u6b7b\u9748\u3015",svt:"",enemy:""},1119:{name:"\u3014\u60e1\u9b54\u3015",svt:"",enemy:""},1172:{name:"\u3014\u4eba\u985e\u5a01\u8105\u3015",svt:"",enemy:""},2E3:{name:"\u3014\u795e\u6027\u3015",svt:"",enemy:""},2001:{name:"\u3014\u4eba\u578b\u3015",svt:"\u7121\u6b64\u7279\u6027\u5f9e\u8005\u5982\u4e0b",enemy:""},2002:{name:"\u3014\u9f8d\u3015",svt:"",enemy:""},2004:{name:"\u3014\u7f85\u99ac\u3015",svt:"",enemy:""},
2005:{name:"\u3014\u731b\u7378\u3015",svt:"",enemy:""},2007:{name:"\u3014\u963f\u723e\u6258\u8389\u4e9e\u81c9\u3015",svt:"",enemy:""},2008:{name:"\u3014\u5f9e\u8005\u3015[\u5c0d\u6301\u6709\u661f\u4e4b\u529b\u7684Servant\u7279\u653b\u7121\u6548]",svt:"\u7121\u6b64\u7279\u6027\u5f9e\u8005\u5982\u4e0b\uff0c\u8c9d\u5fb7\u7dad\u723e\u3001\u9054\u6587\u897f\u3001\u65af\u5361\u54c8\u8207\u8c9e\u5fb7\u96d6\u662f\u661f\u5206\u985e\u4f46\u4ecd\u88ab\u524b\u5236<br>\u6575\u65b9\u9650\u5b9a\u7684\u54c8\u6851\u4e0d\u5728\u7279\u653b\u7bc4\u570d<br>\u6bba\u751f\u9662\u6700\u521d\u975e\u7279\u653b\u5c0d\u8c61\uff0c\u5f8c\u4f86\u52a0\u5165<br>\u5169\u5100\u5f0f(\u528d\uff06\u6bba)\u539f\u70ba\u7279\u653b\u5c0d\u8c61\uff0c\u7a7a\u5883\u5fa9\u523b\u6642\u9664\u5916",
enemy:""},2009:{name:"\u3014\u9a0e\u4e58\u3015",svt:"",enemy:""},2010:{name:"\u3014\u4e9e\u745f\u3015",svt:"",enemy:""},2011:{name:"\u3014\u6709\u5929\u6216\u5730\u4e4b\u529b\u5f9e\u8005\u3015",svt:"",enemy:""},2012:{name:"\u3014\u6240\u611b\u4e4b\u4eba\u3015",svt:"",enemy:""},2018:{name:"\u3014\u6b7b\u9748\u8207\u60e1\u9b54\u3015",svt:"",enemy:""},2019:{name:"\u3014\u9b54\u6027\u3015",svt:"",enemy:""},2037:{name:"\u3014\u6709\u5929\u6216\u5730\u4e4b\u529b\u5f9e\u8005\u3015[\u64ec\u4f3c\u5f9e\u8005\u3001\u4e9e\u5f9e\u8005\u9664\u5916]",
svt:"",enemy:""},2040:{name:"\u3014\u795e\u6027\u8207\u6b7b\u9748\u8207\u60e1\u9b54\u3015",svt:"",enemy:""},2076:{name:"\u3014\u8d85\u5de8\u5927\u3015",svt:"",enemy:""},2113:{name:"\u3014\u738b\u3015",svt:"",enemy:""},2114:{name:"\u3014\u5e0c\u81d8\u795e\u8a71\u7cfb\u7537\u6027\u3015",svt:"",enemy:""},2466:{name:"\u3014\u963f\u723e\u6208\u865f\u56e0\u7de3\u8005\u3015",svt:"",enemy:""},2631:{name:"\u3014\u4eba\u79d1\u5f9e\u8005\u3015",svt:"\u7121\u6b64\u7279\u6027\u5f9e\u8005\u5982\u4e0b",enemy:""},
2632:{name:"\u3014\u9b54\u7378\u578b\u5f9e\u8005\u3015",svt:"",enemy:""},2654:{name:"\u3014\u73fe\u4eca\u751f\u5b58\u7684\u4eba\u985e\u3015",svt:"",enemy:""},2666:{name:"\u3014\u5de8\u4eba\u3015",svt:"",enemy:""},2667:{name:"\u3014\u5c0f\u5b69\u5f9e\u8005\u3015",svt:"",enemy:""}};
function svtDataTable(d){var a,f;for(f in master.mstSvt)if(master.mstSvt[f].id==d)break;var h=null;for(n in master.mstSvtLimit)if(master.mstSvtLimit[n].svtId==d){h=master.mstSvtLimit[n];break}var n=null;for(a in master.mstSvtLimit)if(master.mstSvtLimit[a].svtId==d&&master.mstSvtLimit[a].limitCount==master.mstSvt[f].limitMax){n=master.mstSvtLimit[a];break}var b="<tr>";master.mstSvt[f].collectionNo<=statusNo?(b+="<td rowspan=7 align=center style='width:25%;height:300px;'>",b=5==master.mstSvt[f].type||
9==master.mstSvt[f].type||99==master.mstSvt[f].type?b+("<img src=common/images/Servants/Status/"+d+"/status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></td>"):b+("<div class='slide'><div><img src=common/images/Servants/Status/"+d+"/status_servant_1.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+d+"/status_servant_2.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servants/Status/"+
d+"/status_servant_3.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div></div></td>")):b+="<td rowspan=7 align=center style='width:25%;height:300px;'><img src='common/images/icon/faces/"+master.mstSvt[f].id+"0.png' onerror=javascript:this.src='common/images/icon/faces/0.png'></td>";b+="<th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:40%;'><b>\u540d\u7a31</b></th><th style='width:10%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No."+
master.mstSvt[f].collectionNo+'</td><td class="star">';for(a=0;a<h.rarity;a++)b+="\u2605";if(null!=n&&n.rarity!=h.rarity)for(b+="<br>",a=0;a<n.rarity;a++)b+="\u2605";0==h.rarity&&(b+="\uff0d");b+="</td><td colspan=2>";b=(a=findSvtNameZh(master.mstSvt[f].id))&&!document.getElementById("isJpTxt").checked?b+("<div class=ruby>"+master.mstSvt[f].ruby+"</div>"+a):b+master.mstSvt[f].name;b+="</td>";document.title=findSvtNameZh2(d)+" - Servant\u8cc7\u6599\u67e5\u8a62";for(a=0;a<mstClass.length;a++)if(mstClass[a].id==
master.mstSvt[f].classId){b+="<td>"+mstClass[a].name+"</td>";break}b+="<td>"+attriList[master.mstSvt[f].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:20%;'><b>\u7e6a\u5e2b</b></th><th style='width:20%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>"+h.hpBase+" / "+h.hpMax;null==n||h.hpBase==n.hpBase&&h.hpMax==n.hpMax||(b+="<br>"+n.hpBase+" / "+n.hpMax);b+="</td><td>"+h.atkBase+" / "+h.atkMax;null==n||h.atkBase==n.atkBase&&
h.atkMax==n.atkMax||(b+="<br>"+n.atkBase+" / "+n.atkMax);b+="</td><td>";if(-1!=master.mstSvt[f].illustratorId)for(a=0;a<master.mstIllustrator.length;a++){if(master.mstIllustrator[a].id==master.mstSvt[f].illustratorId){b+="<a href='illustrator.html#"+master.mstSvt[f].illustratorId+"'>"+master.mstIllustrator[a].name.replace(/\(/g,"<br>(")+"</a>";break}}else b+="\uff1f\uff1f\uff1f";b+="</td><td>";if(-1!=master.mstSvt[f].cvId)for(a=0;a<master.mstCv.length;a++){if(master.mstCv[a].id==master.mstSvt[f].cvId){b+=
"<a href='cv.html#"+master.mstSvt[f].cvId+"'>"+master.mstCv[a].name.replace(/\uff06/g,"<br>")+"</a>";break}}else b+="\uff1f\uff1f\uff1f";b=b+"</td><td>"+(policyList[h.policy]+"\u30fb"+personalityList[h.personality]+"</td><td>"+genderTypeList[master.mstSvt[f].genderType]+"</td></tr>");var e=[];for(a in master.mstSvt[f].individuality)indi_list[master.mstSvt[f].individuality[a]]&&e.push(indi_list[master.mstSvt[f].individuality[a]].name);b+="<tr><th>\u7279\u6027</th><td colspan=5 align=center id=indi>"+
e+"</td></tr>";document.getElementById("svtNrmlData").innerHTML=b;e='<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th rowspan=2><b>NP\u7372\u5f97\u7387</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th><b>\u5bf6\u5177</b></th><th><b>\u9632\u79a6</b></th></tr><tr align="center">';
for(b=1;4>=b;b++){e+="<td>";var v=0;for(a=0;a<master.mstSvt[f].cardIds.length;a++)master.mstSvt[f].cardIds[a]==b&&v++;4!=b&&(e+=v+"\u5f35");for(a=0;a<master.mstSvtCard.length;a++)master.mstSvtCard[a].svtId==master.mstSvt[f].id&&master.mstSvtCard[a].cardId==b&&(4!=b&&(e+=" \u5404"),e+=master.mstSvtCard[a].normalDamage.length+"Hit",1<master.mstSvtCard[a].normalDamage.length&&(e+="s"));e+="</td>"}e+="<td>"+master.mstSvt[f].starRate/10+"%</td><td>"+master.mstSvt[f].deathRate/10+"%</td><td>"+h.criticalWeight+
"</td>";v=[];for(var p=0;6>p;p++)v[p]=[];for(var t in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[t].svtId==master.mstSvt[f].id&&0!=master.mstSvtTreasureDevice[t].priority)for(a in master.mstTreasureDeviceLv)if(master.mstTreasureDeviceLv[a].treaureDeviceId==master.mstSvtTreasureDevice[t].treasureDeviceId){var l=[master.mstTreasureDeviceLv[a].tdPointA,master.mstTreasureDeviceLv[a].tdPointB,master.mstTreasureDeviceLv[a].tdPointQ,master.mstTreasureDeviceLv[a].tdPointEx,master.mstTreasureDeviceLv[a].tdPoint,
master.mstTreasureDeviceLv[a].tdPointDef];for(p=0;6>p;p++)0!=v[p].length&&v[p][v[p].length-1]==l[p]||v[p].push(l[p])}for(p=0;6>p;p++)e+="<td>"+npArray(v[p])+"</td>";e+="</tr>";document.getElementById("svtCtrlData").innerHTML=e;e=t="";v=1;l=[];for(a=0;a<master.mstSvtSkill.length;a++)if(master.mstSvtSkill[a].svtId==master.mstSvt[f].id&&!l.includes(master.mstSvtSkill[a].skillId)){l.push(master.mstSvtSkill[a].skillId);for(b=0;b<master.mstSkill.length;b++)if(master.mstSvtSkill[a].skillId==master.mstSkill[b].id){e+=
"<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td>";5!=master.mstSvt[f].type&&(e+="<font color=#007979>SKILL "+master.mstSvtSkill[a].num+"</font><br>");e+="<b>"+master.mstSkill[b].name+"</b></td>";break}if(null==master.mstSkill[b])console.log("\u6280\u80fd\u5c0b\u627e\u5931\u6557");else{v++;for(b=0;b<master.mstSkillLv.length;b++)if(master.mstSvtSkill[a].skillId==master.mstSkillLv[b].skillId&&
1==master.mstSkillLv[b].lv){e+="<td colspan=5>\u51b7\u537b"+master.mstSkillLv[b].chargeTurn+"\u56de\u5408</td>";break}e+="<td colspan=5>";-1==master.mstSvtSkill[a].condLimitCount?e+="\u6575\u4eba\u6216\u7279\u6b8a\u652f\u63f4\u9650\u5b9a\uff0c\u51b7\u537b\u53ca\u6548\u679c\u50c5\u4f9b\u53c3\u8003":(0==master.mstSvtSkill[a].condLimitCount&&0==master.mstSvtSkill[a].condQuestId&&0==master.mstSvtSkill[a].condLv&&(e+="\u521d\u671f"),0!=master.mstSvtSkill[a].condLimitCount&&(e+="\u9748\u57fa\u518d\u81e8\u7b2c"+
master.mstSvtSkill[a].condLimitCount+"\u968e\u6bb5<br>"),0!=master.mstSvtSkill[a].condLv&&(e+="Lv."+master.mstSvtSkill[a].condLv+"<br>"),0!=master.mstSvtSkill[a].condQuestId&&(e+="\u901a\u904e\u95dc\u5361 "+questRea(master.mstSvtSkill[a].condQuestId)+"<br>"));if(0!=master.mstSvtSkill[a].flag)for(var w in master.mstSvtSkillRelease)if(master.mstSvtSkillRelease[w].svtId==master.mstSvtSkill[a].svtId&&master.mstSvtSkillRelease[w].num==master.mstSvtSkill[a].num&&master.mstSvtSkillRelease[w].priority==master.mstSvtSkill[a].priority){if(70==
master.mstSvtSkillRelease[w].condType)for(var q in master.mstSvtCostume)if(master.mstSvtCostume[q].svtId==master.mstSvtSkillRelease[w].svtId&&master.mstSvtCostume[q].id==master.mstSvtSkillRelease[w].condNum){e+="\u88dd\u5099\u9748\u8863 "+master.mstSvtCostume[q].shortName+"<br>";break}break}e+="</td></tr>";var m=[];for(b=0;b<skDetail.length;b++)if(master.mstSvtSkill[a].skillId==skDetail[b][0]){m=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||!m[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvtSkill[a].skillId==
master.mstSkillDetail[b].id){m[1]=master.mstSkillDetail[b].detail;break}var k=[];document.getElementById("isJpTxt").checked?k[0]=m[1].slice(0):(m[1]=m[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),m[1]=m[1].replace(/\uff06/g,"\uff06\u2517"),k=m[1].split(/\uff06|\uff0b/));v+=k.length;for(var c=0;c<k.length;c++){k[c].search(/\{0\}|Lv/);k[c]=k[c].replace(/\{0\}/g,"Lv.");k[c]=k[c].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');k[c]=k[c].replace(/\u3010/g,'<font color="#006400 ">\u3010');
k[c]=k[c].replace(/\u3011/g,"\u3011</font>");k[c]=k[c].replace(/\n/g,"<br>");k[c]=k[c].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)e+="<tr><td colspan=12>"+k[c]+"</td>";else if(e+="<tr><td colspan=2>"+k[c]+"</td>",m[2+c]&&1<m[2+c].split("/").length-1)for(b in p=[],p=m[2+c].split(/\//),p)e+="<td align=center style='width:50px'>"+p[b]+"</td>";else e+="<td colspan=10>",e=m[2+c]?e+("\u3000"+m[2+c].replace(/\//g," / ")):
"undefined"!==typeof m[2+c]&&0==m[2+c].length?e+"\u3000---":e+"\u3000\u5f85\u88dc";e+="</td></tr>"}}}0<e.length&&(t+="<tr><th style='width:60px' rowspan="+v+"><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593(Lv.6\u8207Lv.10\u5404\u6e1b\u5c111\u56de\u5408)</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>"+e);if(0!=master.mstSvt[f].classPassive.length){e="";for(a=v=0;a<master.mstSvt[f].classPassive.length;a++){v++;
for(b=0;b<master.mstSkill.length;b++)if(master.mstSvt[f].classPassive[a]==master.mstSkill[b].id){e+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[b].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td style='width:250px'><b>"+master.mstSkill[b].name+"</b></td>";break}m=[];for(b=0;b<skDetail.length;b++)if(master.mstSvt[f].classPassive[a]==skDetail[b][0]){m=skDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||
!m[1])for(b=0;b<master.mstSkillDetail.length;b++)if(master.mstSvt[f].classPassive[a]==master.mstSkillDetail[b].id){m[1]=master.mstSkillDetail[b].detail;break}k=[];document.getElementById("isJpTxt").checked?k[0]=m[1].slice(0):(m[1]=m[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),m[1]=m[1].replace(/\uff06/g,"\uff06\u2517"),k=m[1].split(/\uff06|\uff0b|\+/));e+="<td colspan=10 style='width:500px'>";for(c=0;c<k.length;c++)if(k[c].search(/\{0\}|Lv/),k[c]=k[c].replace(/\{0\}/g,"Lv."),k[c]=k[c].replace(/\[Lv.]/g,
'<font color="#CC00CC ">[Lv.]</font>'),k[c]=k[c].replace(/\u3010/g,'<font color="#006400 ">\u3010'),k[c]=k[c].replace(/\u3011/g,"\u3011</font>"),k[c]=k[c].replace(/\n/g,"<br>"),k[c]=k[c].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>'),document.getElementById("isJpTxt").checked)e+=k[c];else if(0!=c&&(e+="<br>"),e+=k[c],m[2+c]&&1<m[2+c].split("/").length-1)for(b in e+=k[c]+"\uff1a",p=[],p=m[2+c].split(/\//),p)e+=p[b];else e=m[2+c]?e+("\uff1a"+m[2+c].replace(/\//g," / ")):
"undefined"!==typeof m[2+c]&&0==m[2+c].length?e+"":e+"\uff1a\u5f85\u88dc";e+="</td></tr>"}0<e.length&&(t+="<tr><th rowspan="+master.mstSvt[f].classPassive.length+"><b>\u8077\u968e\u6280\u80fd</b></th>"+e)}e="";v=0;w=[];for(b in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[b].svtId==master.mstSvt[f].id&&100!=master.mstSvtTreasureDevice[b].treasureDeviceId&&!w.includes(master.mstSvtTreasureDevice[b].treasureDeviceId))for(w.push(master.mstSvtTreasureDevice[b].treasureDeviceId),a=0;a<master.mstTreasureDevice.length;a++)if(master.mstTreasureDevice[a].id==
master.mstSvtTreasureDevice[b].treasureDeviceId){v+=2;e+="<th colspan=2 style='width:300px'><b>\u540d\u7a31</b></th><th colspan=2 style='width:100px'><b>\u7b49\u7d1a</b></th><th colspan=2 style='width:100px'><b>\u7a2e\u985e</b></th><th colspan=4 style='width:200px'><b>\u89e3\u653e\u95dc\u5361</b></th><th colspan=2 style='width:100px'>\u653b\u64ca\u6b21\u6578</th></tr>";e+='<tr align="center"><td colspan=2><div class=ruby>'+master.mstTreasureDevice[a].ruby+"</div>";e+='<b><font color="#'+cardList[master.mstSvtTreasureDevice[b].cardId]+
'">'+master.mstTreasureDevice[a].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[a].rank+"</td><td colspan=2>"+master.mstTreasureDevice[a].typeText.replace(/\uff0f/g,"\uff0f<br>").replace(/\u5bfe/g,"\u5c0d").replace(/\u5b9d/g,"\u5bf6").replace(/\u5263/g,"\u528d").replace(/\u60aa/g,"\u60e1").replace(/\u5965/g,"\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,"Saber").replace(/\u7adc/g,"\u9f8d")+"</td><td colspan=4>";e=98==master.mstSvtTreasureDevice[b].num?e+"\u6575\u4eba\u6216\u7279\u6b8a\u652f\u63f4\u9650\u5b9a":
0==master.mstSvtTreasureDevice[b].condQuestId&&0==master.mstSvtTreasureDevice[b].condLv&&0==master.mstSvtTreasureDevice[b].condFriendshipRank?e+"\u521d\u671f":null!=findName(master.mstQuest,master.mstSvtTreasureDevice[b].condQuestId)?e+questRea(master.mstSvtTreasureDevice[b].condQuestId):0!=master.mstSvtTreasureDevice[b].condLv?e+("Lv."+master.mstSvtTreasureDevice[b].condLv+"\u89e3\u653e"):0!=master.mstSvtTreasureDevice[b].condFriendshipRank?e+("\u7d46\u7b49\u7d1a"+master.mstSvtTreasureDevice[b].condFriendshipRank+
"\u89e3\u653e"):e+"\u672a\u958b\u653e";e+="</td>";q=[];for(c in tdDetail)if(master.mstTreasureDevice[a].id==tdDetail[c][0]){q=tdDetail[c].slice(0);break}if(document.getElementById("isJpTxt").checked||!q[1])for(c in master.mstTreasureDeviceDetail)if(master.mstTreasureDevice[a].id==master.mstTreasureDeviceDetail[c].id){q[1]=master.mstTreasureDeviceDetail[c].detail;break}e+="<td colspan=2>";-1==q[1].search(/\u653b\u64ca[^\u529b\u6642]|\u653b\u6483[^\u529b\u6642]/)?e+="\uff0d":(e=0<master.mstSvtTreasureDevice[b].damage.length?
e+master.mstSvtTreasureDevice[b].damage.length:e+"1",e+="Hit",1<master.mstSvtTreasureDevice[b].damage.length&&(e+="s"));e+="</td></tr>";l=[];document.getElementById("isJpTxt").checked?l[0]=q[1].slice(0):(q[1]=q[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),q[1]=q[1].replace(/\uff06/g,"\uff06\u2517"),l=q[1].split(/\uff06|\uff0b/));v+=l.length;for(c=0;c<l.length;c++){l[c].search(/\{0\}|Lv/);l[c].search(/<O|<\u30aa/);l[c]=l[c].replace(/\{0\}/g,"Lv.");l[c]=l[c].replace(/<O/g,'<font color="#CC6600"><br>< O');
l[c]=l[c].replace(/<\u30aa/g,'<font color="#CC6600"><\u30aa');l[c]=l[c].replace(/P>/g,"P></font>");l[c]=l[c].replace(/\u30d7>/g,"\u30d7></font>");l[c]=l[c].replace(/\u3010/g,'<font color="#006400 ">\u3010');l[c]=l[c].replace(/\u3011/g,"\u3011</font>");l[c]=l[c].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');l[c]=l[c].replace(/\n/g,"<br>");l[c]=l[c].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)e+="<td colspan=12>"+
l[c]+"</td>";else if(0!=c&&(e+="<tr>"),e+="<td colspan=2>"+l[c]+"</td>",q[2+c]&&1<q[2+c].split("/").length-1)for(g in p=[],p=q[2+c].split(/\//),p)e+="<td align=center colspan=2>"+p[g]+"</td>";else e+="<td colspan=10>",e=q[2+c]?e+("\u3000"+q[2+c]):"undefined"!==typeof q[2+c]&&0==q[2+c].length?e+"\u3000---":e+"\u3000\u5f85\u88dc";e+="</td></tr>"}break}0<e.length&&(t+="<tr><th rowspan="+v+" style='width:60px'><b>\u5bf6\u5177</b></th>"+e);document.getElementById("svtSkTdData").innerHTML=t;b="";b='<tr><th rowspan=2 style="width:250px">\u80fd\u529b\u503c</th><th style="width:80px">\u7b4b\u529b</th><th style="width:80px">\u8010\u4e45</th><th style="width:80px">\u654f\u6377</th><th style="width:80px">\u9b54\u529b</th><th style="width:80px">\u5e78\u904b</th><th style="width:80px">\u5bf6\u5177</th></tr><tr align="center"><td>'+
svtStatusList[Math.floor(h.power/10)]+svtStatusPlusList[h.power%10]+"</td><td>"+svtStatusList[Math.floor(h.defense/10)]+svtStatusPlusList[h.defense%10]+"</td><td>"+svtStatusList[Math.floor(h.agility/10)]+svtStatusPlusList[h.agility%10]+"</td><td>"+svtStatusList[Math.floor(h.magic/10)]+svtStatusPlusList[h.magic%10]+"</td><td>"+svtStatusList[Math.floor(h.luck/10)]+svtStatusPlusList[h.luck%10]+"</td><td>"+svtStatusList[Math.floor(h.treasureDevice/10)]+svtStatusPlusList[h.treasureDevice%10]+"</td></tr>";
if(1E3!=master.mstSvt[f].friendshipId){w=findSvtFs(master.mstSvt[f].id);q=5;t=[];if(w!=master.mstSvt[f].friendshipId||10==master.mstSvt[f].maxFriendshipRank)q=10;b+="<tr><th rowspan="+2*(10==q?15:5)/5+">\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th>";10==q&&(b+="\u5c08\u5c6c\u79ae\u88dd");b+='</th></tr><tr align="center">';for(a in master.mstFriendship)master.mstFriendship[a].id==w&&15>master.mstFriendship[a].rank&&(t[master.mstFriendship[a].rank]=
master.mstFriendship[a].friendship);for(a=0;5>a;a++)b=0==a?b+("<td>"+t[a]+"</td>"):b+("<td>"+(t[a]-t[a-1])+"<br>("+t[a]+")</td>");if(10==q){b+="<td rowspan=5>";for(var u in master.mstSkill)if(0<master.mstSkill[u].actIndividuality.length&&-1!=$.inArray(master.mstSvt[f].id,master.mstSkill[u].actIndividuality)){for(var r in master.mstSvtSkill)if(master.mstSvtSkill[r].skillId==master.mstSkill[u].id){b+=svtFace(master.mstSvtSkill[r].svtId);break}break}b+="</td></tr>"}else b+="<td></td></tr>";if(10==q){b+=
'<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th></tr><tr align="center">';for(a=5;10>a;a++)b+="<td>"+(t[a]-t[a-1])+"<br>("+t[a]+")</td>";b+='</tr><tr><th>Lv.11</th><th>Lv.12</th><th>Lv.13</th><th>Lv.14</th><th>Lv.15</th></tr><tr align="center">';for(a=10;15>a;a++)b+="<td>"+(t[a]-t[a-1])+"<br>("+t[a]+")</td>";b+="</tr>"}}master.mstSvt[f].collectionNo>zhCNNo&&($("#cmtlang_zh").prop("checked",!1),$("#cmtlang_jp").prop("checked",!0));cmtRead($("input[name=cmtlang]:checked").val());
$("#svtInfoData").html(b);u="";u="<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";for(r=0;4>r;r++){b="";0==r%2&&(b=' bgcolor=" #ECF2F3"');0!=r&&(u+="<tr>");u+="<td width=80 "+b+">\u7b2c"+(r+1)+"\u968e\u6bb5</td><td width=450"+b+">";for(a=0;a<master.mstCombineLimit.length;a++)if(master.mstCombineLimit[a].id==master.mstSvt[f].id&&master.mstCombineLimit[a].svtLimit==r){for(b=0;b<master.mstCombineLimit[a].itemIds.length;b++)u+='<a href="item_drop.html#'+master.mstCombineLimit[a].itemIds[b]+'"><div class="itemMT" title="'+
findItemName(master.mstCombineLimit[a].itemIds[b])+'" style="background-image: url(\'common/images/icon/items/'+master.mstCombineLimit[a].itemIds[b]+".png')\" >"+master.mstCombineLimit[a].itemNums[b]+'</div></a><div style="width:10px;display:inline-block;"></div>';u+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+addCommas(master.mstCombineLimit[a].qp)+"</div>"}u+="</td></tr>"}u+="<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";for(a=r=
0;a<master.mstCombineSkill.length;a++)if(b="",0==a%2&&(b=' bgcolor=" #ECF2F3"'),master.mstCombineSkill[a].id==master.mstSvt[f].id){1!=master.mstCombineSkill[a].skillLv&&(u+="<tr>");u+="<td"+b+">Lv."+master.mstCombineSkill[a].skillLv+"\u2192Lv."+(master.mstCombineSkill[a].skillLv+1)+"</td><td"+b+">";for(b=0;b<master.mstCombineSkill[a].itemIds.length;b++)u+='<a href="item_drop.html#'+master.mstCombineSkill[a].itemIds[b]+'"><div class="itemMT" title="'+findItemName(master.mstCombineSkill[a].itemIds[b])+
'" style="background-image: url(\'common/images/icon/items/'+master.mstCombineSkill[a].itemIds[b]+".png')\" >"+master.mstCombineSkill[a].itemNums[b]+'</div></a><div style="width:10px;display:inline-block;"></div>';u+='<div class="itemMT" title="QP" style="background-image: url(\'common/images/icon/items/5.png\')" >'+addCommas(master.mstCombineSkill[a].qp)+"</div>";r++}0==r&&(u+="<td colspan=2>\u7121</td></tr>");$("#svtCmbnData").html(u);$("#svtImgData").html('<tr><td><span id="cmd"><img src="common/images/Servants/Commands/'+
d+'/card_servant_1.png" style="" class="CommandCard vsvtImg"/><img src="common/images/Servants/Commands/'+d+'/card_servant_2.png" style="" class=CommandCard "svtImg"/><img src="common/images/Servants/Commands/'+d+'/card_servant_3.png" style="" class="CommandCard svtImg"/></span><br><span id="graph"><img src=common/images/CharaGraph/'+d+'a.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+d+'b.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+
d+'c.png style="max-width:50%;" class="svtImg"/></span></td></tr>');$(".svtImg").error(function(){$(this).hide()});u=3;r=!0;for(a in master.mstSvtLimitAdd)if(master.mstSvtLimitAdd[a].svtId==master.mstSvt[f].id&&(4<master.mstSvtLimitAdd[a].limitCount&&($("#cmd").append('<img src="common/images/Servants/Commands/'+d+"/card_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" style="" class="CommandCard svtImg"/>'),$("#graph").append("<img src=common/images/CharaGraph/"+master.mstSvtLimitAdd[a].battleCharaId+
'a.png style="max-width:50%;" class="svtImg"/>'),master.mstSvt[f].collectionNo<=statusNo&&$(".slide").append('<div><img src="common/images/Servants/Status/'+d+"/status_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" onerror="this.style.display = none" width=256 height=256 /></div>'),u++),0<master.mstSvtLimitAdd[a].individuality.length&&(b=difference(master.mstSvtLimitAdd[a].individuality,master.mstSvt[f].individuality),0<b.length)))for(c in r&&($("#indi").append("<br/>"),r=!1),$("#indi").append("<br/>\u9748\u57fa\u518d\u81e8"+
master.mstSvtLimitAdd[a].limitCount+"\u6b21\u8ffd\u52a0\uff1a"),b)indi_list[b[c]]&&$("#indi").append(indi_list[b[c]].name);$(".CommandCard").css("max-width",Math.floor(100/u)+"%");d="";null==n||h.hpBase==n.hpBase&&h.hpMax==n.hpMax&&h.atkBase==n.atkBase&&h.atkMax==n.atkMax||(h=n);if(99==master.mstSvt[f].type)$("#chart_div").css("display","none");else for($("#chart_div").css("display","block"),d="<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>",a=0;100>a;a++)for(r=
0;r<master.mstSvtExp.length;r++)if(master.mstSvt[f].expType==master.mstSvtExp[r].type&&master.mstSvtExp[r].lv==a+1){b="";1==master.mstSvtExp[r].lv%2&&(b=' bgcolor="#ECF2F3"');d+='<tr align="center"><td'+b+">Lv."+master.mstSvtExp[r].lv+"</td><td"+b+">"+Math.floor(h.atkBase+(h.atkMax-h.atkBase)*master.mstSvtExp[r].curve/1E3)+"</td><td"+b+">"+Math.floor(h.hpBase+(h.hpMax-h.hpBase)*master.mstSvtExp[r].curve/1E3)+"</td><td"+b+">"+(master.mstSvtExp[r].curve-master.mstSvtExp[r-1].curve)/10+"%</td></tr>";
break}$("#svtLvData").html(d);$("img.lazyload").lazyload();$(function(){$(".slide").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2E3})})}function difference(d,a){for(var f=[],h=0;h<d.length;h++)-1===a.indexOf(d[h])&&f.push(d[h]);return f}
function cmtRead(d){try{$("#svtCmtData").empty(),$.get("common/svtcomment/"+d+"/"+$("#svtid").val(),function(a){0==a.length&&(a="W10=");a=JSON.parse(base64.decode(a));var f="",h;for(h in a){f+="<tr><th width=250>"+cmtCond(a[h].condType,null!=a[h].condValues&&0<a[h].condValues.length?a[h].condValues[0]:a[h].condValue);for(var n in master.mstSvtCommentAdd)master.mstSvtCommentAdd[n].svtId==a[h].svtId&&master.mstSvtCommentAdd[n].id==a[h].id&&(f+="<br>\uff06<br>"+cmtCond(master.mstSvtCommentAdd[n].condType,
master.mstSvtCommentAdd[n].condValues[0]));var b=1==a[h].id%2?' bgcolor=" #ECF2F3"':"";f+="</th><td colspan=6"+b+" width=540>";f+=a[h].comment.replace(/\n/g,"<br>").replace(/<br>$/,"<br><br>")+"</td></tr>"}0==a.length&&(f="");$("#svtCmtData").append(f)},"text")}catch(a){console.log("Cannot find comment file."),"zh"==d&&cmtRead("jp")}}
function cmtCond(d,a){var f="";0==d?f+="<b>\u89d2\u8272\u8a73\u7d30</b>":9==d?f+="<b>\u7d46\u7b49\u7d1a"+a+"</b>":1==d?f+="<b>\u901a\u904e\u95dc\u5361</b><br>"+questRea(a):7==d&&(f+="<b>\u9748\u57fa\u518d\u81e8\u7b2c"+a+"\u968e\u6bb5</b>");return f}
function classidChange(){var d;for(d=svtid.options.length-1;0<=d;d--)svtid.remove(d);for(d=0;d<master.mstSvt.length;d++)if(0==classid.value||master.mstSvt[d].classId==classid.value)if(1==master.mstSvt[d].type||2==master.mstSvt[d].type||5==master.mstSvt[d].type||9==master.mstSvt[d].type||99==master.mstSvt[d].type){var a=findSvtNameZh(master.mstSvt[d].id);a?svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+" "+a,master.mstSvt[d].id)):svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+
" "+master.mstSvt[d].name,master.mstSvt[d].id))}for(d=0;d<svtid.options.length;d++)if(-1==svtid.options[d].text.search("No.0")){svtid.options[d].selected=!0;break}0!=classid.value&&svtlocation(svtid[svtid.options.selectedIndex].value)}function svtidset(){classidChange();svtlocation(svtid[0].value)}
function svtidChange(){var d;for(d=svtlv.options.length-1;0<=d;d--)svtlv.remove(d);for(d in master.mstSvt)if(master.mstSvt[d].id==svtid.value){for(d=100;0<d;d--)svtlv.options.add(new Option("Lv."+d,d));break}svtlvChange();svtDataTable(svtid.value);drawChart()}
function svtlocation(d){d="";for(var a in master.mstSvt)if(master.mstSvt[a].id==svtid.value){d=0!=master.mstSvt[a].collectionNo?d+("?no="+master.mstSvt[a].collectionNo):d+("?id="+master.mstSvt[a].id);break}"file:"==location.protocol?changeURL(location.protocol+"//"+location.pathname+d):changeURL(location.protocol+"//"+location.hostname+location.pathname+d);svtidChange()}
function svtlvChange(){var d,a=0,f=0,h=0,n=0;for(d in master.mstSvtLimit)master.mstSvtLimit[d].svtId==svtid.value&&(a=master.mstSvtLimit[d].hpBase,f=master.mstSvtLimit[d].hpMax,h=master.mstSvtLimit[d].atkBase,n=master.mstSvtLimit[d].atkMax);for(var b in master.mstSvt)if(master.mstSvt[b].id==svtid.value){for(var e in master.mstSvtExp)if(atk.value=h,hp.value=a,four(),master.mstSvt[b].expType==master.mstSvtExp[e].type&&master.mstSvtExp[e].lv==svtlv.value){atk.value=Math.floor(h+(n-h)*master.mstSvtExp[e].curve/
1E3);hp.value=Math.floor(a+(f-a)*master.mstSvtExp[e].curve/1E3);four();break}break}}function four(){hpp.value=parseInt(hp.value)+2E3;atkp.value=parseInt(atk.value)+2E3}function npArray(d){var a="",f;for(f in d)a+=d[f]/100+"%<br>";return a}
function urlId(){$("#zhTWNO").html(zhTWNo);$("#zhCNNO").html(zhCNNo);$("#classid").val(0);classidChange();var d="1",a="";getUrl("no")&&(d=getUrl("no"));getUrl("id")&&(a=getUrl("id"));if(d){if(0!=a.length)for(i in master.mstSvt){if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&a==master.mstSvt[i].id){$("#svtid").val(master.mstSvt[i].id);break}}else for(i in master.mstSvt)if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||
5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&d==master.mstSvt[i].collectionNo){$("#svtid").val(master.mstSvt[i].id);break}i==master.mstSvt.length-1&&$("#svtid").val(800100)}svtidChange()};