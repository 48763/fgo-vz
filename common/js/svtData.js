﻿sortByElmentNo(master.mstSvt);
var zhTWNo=90,zhCNNo=135,statusNo=188,personalityList=" \u5584 \u60e1 ? \u72c2 \u4e2d\u5eb8 ? \u82b1\u5ac1 \u590f".split(" "),policyList=" \u4e2d\u7acb \u6df7\u6c8c \u79e9\u5e8f ? ? \u4e2d\u7acb".split(" "),attriList="\uff1f\u4eba\u5929\u5730\u661f\u7378".split(""),genderTypeList=["","\u7537\u6027","\u5973\u6027","\u7121"],cardList=["","0000ff","ff0000","00ff00"],svtStatusList=" A B C D E EX ? ? ".split(" "),svtStatusPlusList="  + ++ ? +++ ? ? \uff1f \uff0d".split(" "),individualityList=[[2E3,"\u795e\u6027"],
[2001,"\u4eba\u578b"],[2002,"\u9f8d"],[2004,"\u7f85\u99ac"],[2005,"\u731b\u7378"],[2007,"\u963f\u723e\u6258\u8389\u4e9e\u81c9"],[2008,"\u88ab\u300c\u5929\u5730\u4e56\u96e2\u958b\u8f9f\u4e4b\u661f\u300d\u6240\u524b"],[2009,"\u9a0e\u4e58"],[2010,"\u4e9e\u745f"],[2011,"\u88ab\u300c\u4eba\u985e\u795e\u8a71\u30fb\u96f7\u96fb\u964d\u81e8\u300d\u6240\u524b"],[2012,"\u611b\u4eba"],[2018,"\u6b7b\u9748\u8207\u60e1\u9b54"],[2019,"\u9b54\u6027"],[2037,"\u88ab\u300c\u795e\u79d8\u6bba\u3057\u300d\u6240\u524b"],
[2113,"\u738b"],[2114,"\u5e0c\u81d8\u795e\u8a71\u7cfb\u7537\u6027"]];
function svtDataTable(d){var a,h;for(h in master.mstSvt)if(master.mstSvt[h].id==d)break;for(var m in master.mstSvtLimit)if(master.mstSvtLimit[m].svtId==d)break;for(var q in master.mstSvtLimit)if(master.mstSvtLimit[q].svtId==d&&master.mstSvtLimit[q].limitCount==master.mstSvt[h].limitMax)break;var k="<tr>";master.mstSvt[h].collectionNo<=statusNo?(k+="<td rowspan=7 align=center style='width:25%;height:300px;'>",k=5==master.mstSvt[h].type||9==master.mstSvt[h].type||99==master.mstSvt[h].type?k+("<img src=common/images/Servant/"+
d+"_status_servant_2.png onerror=\"javascript:this.style='display:none'\" width=256 height=256 /></td>"):k+("<div class='slide'><div><img src=common/images/Servant/"+d+"_status_servant_1.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servant/"+d+"_status_servant_2.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div><div><img src=common/images/Servant/"+d+"_status_servant_3.png onerror=\"this.style.display = 'none'\" width=256 height=256 /></div></div></td>")):
k+="<td rowspan=7 align=center style='width:25%;height:300px;'><img src='common/images/icon/faces/"+master.mstSvt[h].id+"0.png' onerror=javascript:this.src='common/images/icon/faces/0.png'></td>";k+="<th style='width:10%;'><b>\u7de8\u865f</b></th><th style='width:10%;'><b>\u661f\u6578</b></th><th colspan=2 style='width:35%;'><b>\u540d\u7a31</b></th><th style='width:15%;'><b>\u8077\u968e</b></th><th style='width:10%;'><b>\u5206\u985e</b></th></tr><tr align=\"center\"><td>No."+master.mstSvt[h].collectionNo+
'</td><td class="star">';for(a=0;a<master.mstSvtLimit[m].rarity;a++)k+="\u2605";if(master.mstSvtLimit[m].rarity!=master.mstSvtLimit[q].rarity)for(k+="<br>",a=0;a<master.mstSvtLimit[q].rarity;a++)k+="\u2605";0==master.mstSvtLimit[m].rarity&&(k+="\uff0d");k+="</td><td colspan=2>";k=(a=findSvtNameZh(master.mstSvt[h].id))&&!document.getElementById("isJpTxt").checked?k+("<div class=ruby>"+master.mstSvt[h].ruby+"</div>"+a):k+master.mstSvt[h].name;k+="</td>";document.title=findSvtNameZh2(d)+" - Servant\u8cc7\u6599\u67e5\u8a62";
for(a=0;a<mstClass.length;a++)if(mstClass[a].id==master.mstSvt[h].classId){k+="<td>"+mstClass[a].name+"</td>";break}k+="<td>"+attriList[master.mstSvt[h].attri]+"</td></tr><tr><th><b>HP</b></th><th><b>ATK</b></th><th style='width:10%;'><b>\u7e6a\u5e2b</b></th><th style='width:10%;'><b>CV</b></th><th><b>\u5c6c\u6027</b></th><th><b>\u6027\u5225</b></th></tr><tr align=\"center\"><td>"+master.mstSvtLimit[m].hpBase+" / "+master.mstSvtLimit[m].hpMax;if(master.mstSvtLimit[m].hpBase!=master.mstSvtLimit[q].hpBase||
master.mstSvtLimit[m].hpMax!=master.mstSvtLimit[q].hpMax)k+="<br>"+master.mstSvtLimit[q].hpBase+" / "+master.mstSvtLimit[q].hpMax;k+="</td><td>"+master.mstSvtLimit[m].atkBase+" / "+master.mstSvtLimit[m].atkMax;if(master.mstSvtLimit[m].atkBase!=master.mstSvtLimit[q].atkBase||master.mstSvtLimit[m].atkMax!=master.mstSvtLimit[q].atkMax)k+="<br>"+master.mstSvtLimit[q].atkBase+" / "+master.mstSvtLimit[q].atkMax;k+="</td><td>";if(-1!=master.mstSvt[h].illustratorId)for(a=0;a<master.mstIllustrator.length;a++){if(master.mstIllustrator[a].id==
master.mstSvt[h].illustratorId){k+="<a href='illustrator.html#"+master.mstSvt[h].illustratorId+"'>"+master.mstIllustrator[a].name.replace(/\(/g,"<br>(")+"</a>";break}}else k+="\uff1f\uff1f\uff1f";k+="</td><td>";if(-1!=master.mstSvt[h].cvId)for(a=0;a<master.mstCv.length;a++){if(master.mstCv[a].id==master.mstSvt[h].cvId){k+="<a href='cv.html#"+master.mstSvt[h].cvId+"'>"+master.mstCv[a].name.replace(/\uff06/g,"<br>\uff06<br>")+"</a>";break}}else k+="\uff1f\uff1f\uff1f";k=k+"</td>"+("<td>"+policyList[master.mstSvtLimit[m].policy]+
"\u30fb"+personalityList[master.mstSvtLimit[m].personality]+"</td><td>"+genderTypeList[master.mstSvt[h].genderType]+"</td></tr>");var e=[];for(a in master.mstSvt[h].individuality)for(var c in individualityList)master.mstSvt[h].individuality[a]==individualityList[c][0]&&e.push(individualityList[c][1]);k+="<tr><th>\u7279\u6027</th><td colspan=5 align=center>"+e+"</td></tr>";document.getElementById("svtNrmlData").innerHTML=k;k='<tr><th rowspan=2><b>\u6307\u4ee4\u5361</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th rowspan=2><b>\u96b1\u85cf\u6578\u503c</b></th><th><b>\u661f\u661f\u767c\u751f\u7387</b></th><th><b>\u88ab\u5373\u6b7b\u7387</b></th><th><b>\u661f\u661f\u5206\u914d\u6bd4\u91cd</b></th><th rowspan=2><b>NP\u7372\u5f97\u7387</b></th><th><font color="#0099FF"><b>Arts</b></font></th><th><font color="#ff0000"><b>Buster</b></font></th><th><font color="#00ff00"><b>Quick</b></font></th><th><b>Extra</b></th><th><b>\u5bf6\u5177</b></th><th><b>\u9632\u79a6</b></th></tr><tr align="center">';
for(c=1;4>=c;c++){k+="<td>";for(a=e=0;a<master.mstSvt[h].cardIds.length;a++)master.mstSvt[h].cardIds[a]==c&&e++;4!=c&&(k+=e+"\u5f35");for(a=0;a<master.mstSvtCard.length;a++)master.mstSvtCard[a].svtId==master.mstSvt[h].id&&master.mstSvtCard[a].cardId==c&&(4!=c&&(k+=" \u5404"),k+=master.mstSvtCard[a].normalDamage.length+"Hit",1<master.mstSvtCard[a].normalDamage.length&&(k+="s"));k+="</td>"}k+="<td>"+master.mstSvt[h].starRate/10+"%</td><td>"+master.mstSvt[h].deathRate/10+"%</td><td>"+master.mstSvtLimit[m].criticalWeight+
"</td>";e=[];for(var p=0;6>p;p++)e[p]=[];for(n in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[n].svtId==master.mstSvt[h].id&&100!=master.mstSvtTreasureDevice[n].treasureDeviceId)for(a in master.mstTreasureDeviceLv)if(master.mstTreasureDeviceLv[a].treaureDeviceId==master.mstSvtTreasureDevice[n].treasureDeviceId){var l=[master.mstTreasureDeviceLv[a].tdPointA,master.mstTreasureDeviceLv[a].tdPointB,master.mstTreasureDeviceLv[a].tdPointQ,master.mstTreasureDeviceLv[a].tdPointEx,master.mstTreasureDeviceLv[a].tdPoint,
master.mstTreasureDeviceLv[a].tdPointDef];for(p=0;6>p;p++)0!=e[p].length&&e[p][e[p].length-1]==l[p]||e[p].push(l[p])}for(p=0;6>p;p++)k+="<td>"+npArray(e[p])+"</td>";k+="</tr>";document.getElementById("svtCtrlData").innerHTML=k;e=k="";p=1;for(a=0;a<master.mstSvtSkill.length;a++)if(master.mstSvtSkill[a].svtId==master.mstSvt[h].id){p++;for(c=0;c<master.mstSkill.length;c++)if(master.mstSvtSkill[a].skillId==master.mstSkill[c].id){e+="<td><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[c].iconId+
".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[c].name+"</b></td>";break}for(c=0;c<master.mstSkillLv.length;c++)if(master.mstSvtSkill[a].skillId==master.mstSkillLv[c].skillId&&1==master.mstSkillLv[c].lv){e+="<td colspan=5>\u51b7\u537b"+master.mstSkillLv[c].chargeTurn+"\u56de\u5408</td>";break}e+="<td colspan=5>";-1==master.mstSvtSkill[a].condLimitCount?e+="\u6d3b\u52d5":(0==master.mstSvtSkill[a].condLimitCount&&0==master.mstSvtSkill[a].condQuestId&&
0==master.mstSvtSkill[a].condLv&&(e+="\u521d\u671f"),0!=master.mstSvtSkill[a].condLimitCount&&(e+="\u9748\u57fa\u518d\u81e8\u7b2c"+master.mstSvtSkill[a].condLimitCount+"\u968e\u6bb5<br>"),0!=master.mstSvtSkill[a].condLv&&(e+="Lv."+master.mstSvtSkill[a].condLv+"<br>"),0!=master.mstSvtSkill[a].condQuestId&&(e+="\u901a\u904e\u95dc\u5361 "+questRea(master.mstSvtSkill[a].condQuestId)+"<br>"));e+="</td></tr>";var f=[];for(c=0;c<skDetail.length;c++)if(master.mstSvtSkill[a].skillId==skDetail[c][0]){f=skDetail[c].slice(0);
break}if(document.getElementById("isJpTxt").checked||!f[1])for(c=0;c<master.mstSkillDetail.length;c++)if(master.mstSvtSkill[a].skillId==master.mstSkillDetail[c].id){f[1]=master.mstSkillDetail[c].detail;break}l=[];document.getElementById("isJpTxt").checked?l[0]=f[1].slice(0):(f[1]=f[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),f[1]=f[1].replace(/\uff06/g,"\uff06\u2517"),l=f[1].split(/\uff06|\uff0b/));p+=l.length;for(var b=0;b<l.length;b++){l[b].search(/\{0\}|Lv/);l[b]=l[b].replace(/\{0\}/g,
"Lv.");l[b]=l[b].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');l[b]=l[b].replace(/\u3010/g,'<font color="#006400 ">\u3010');l[b]=l[b].replace(/\u3011/g,"\u3011</font>");l[b]=l[b].replace(/\n/g,"<br>");l[b]=l[b].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)e+="<tr><td colspan=12>"+l[b]+"</td>";else if(e+="<tr><td colspan=2>"+l[b]+"</td>",f[2+b]&&1<f[2+b].split("/").length-1){var n=[];n=f[2+b].split(/\//);
for(c in n)e+="<td align=center style='width:50px'>"+n[c]+"</td>"}else e+="<td colspan=10>",e=f[2+b]?e+("\u3000"+f[2+b].replace(/\//g," / ")):"undefined"!==typeof f[2+b]&&0==f[2+b].length?e+"\u3000---":e+"\u3000\u5f85\u88dc";e+="</td></tr>"}}0<e.length&&(k+="<tr><th style='width:60px' rowspan="+p+"><b>\u4fdd\u6709\u6280\u80fd</b></th><th colspan=2 style='width:300px'>\u6280\u80fd</th><th colspan=5 style='width:250px'>\u51b7\u537b\u6642\u9593(Lv.6\u8207Lv.10\u5404\u6e1b\u5c111\u56de\u5408)</th><th colspan=5 style='width:250px'>\u958b\u653e\u689d\u4ef6</th></tr><tr>"+
e+"");if(0!=master.mstSvt[h].classPassive.length){e="";for(a=p=0;a<master.mstSvt[h].classPassive.length;a++){p++;for(c=0;c<master.mstSkill.length;c++)if(master.mstSvt[h].classPassive[a]==master.mstSkill[c].id){e+="<td style='width:55px'><img src=common/images/SkillIcon/SkillIcon_"+master.mstSkill[c].iconId+".png onerror=javascript:this.src='common/images/SkillIcon/SkillIcon_0.png' width=55></img></td><td><b>"+master.mstSkill[c].name+"</b></td>";break}f=[];for(c=0;c<skDetail.length;c++)if(master.mstSvt[h].classPassive[a]==
skDetail[c][0]){f=skDetail[c].slice(0);break}if(document.getElementById("isJpTxt").checked||!f[1])for(c=0;c<master.mstSkillDetail.length;c++)if(master.mstSvt[h].classPassive[a]==master.mstSkillDetail[c].id){f[1]=master.mstSkillDetail[c].detail;break}l=[];document.getElementById("isJpTxt").checked?l[0]=f[1].slice(0):(f[1]=f[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),f[1]=f[1].replace(/\uff06/g,"\uff06\u2517"),l=f[1].split(/\uff06|\uff0b|\+/));e+="<td colspan=10>";for(b=0;b<l.length;b++)if(l[b].search(/\{0\}|Lv/),
l[b]=l[b].replace(/\{0\}/g,"Lv."),l[b]=l[b].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>'),l[b]=l[b].replace(/\u3010/g,'<font color="#006400 ">\u3010'),l[b]=l[b].replace(/\u3011/g,"\u3011</font>"),l[b]=l[b].replace(/\n/g,"<br>"),l[b]=l[b].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>'),document.getElementById("isJpTxt").checked)e+=l[b];else if(0!=b&&(e+="<br>"),e+=l[b],f[2+b]&&1<f[2+b].split("/").length-1)for(c in e+=l[b]+"\uff1a",n=[],n=f[2+b].split(/\//),
n)e+=n[c];else e=f[2+b]?e+("\uff1a"+f[2+b].replace(/\//g," / ")):"undefined"!==typeof f[2+b]&&0==f[2+b].length?e+"":e+"\uff1a\u5f85\u88dc";e+="</td></tr>"}k+="<tr><th rowspan="+master.mstSvt[h].classPassive.length+"><b>\u8077\u968e\u6280\u80fd</b></th>"+e+""}e="";p=0;for(c in master.mstSvtTreasureDevice)if(master.mstSvtTreasureDevice[c].svtId==master.mstSvt[h].id&&100!=master.mstSvtTreasureDevice[c].treasureDeviceId)for(a=0;a<master.mstTreasureDevice.length;a++)if(master.mstTreasureDevice[a].id==
master.mstSvtTreasureDevice[c].treasureDeviceId){p+=2;e+="<th colspan=2 style='width:300px'><b>\u540d\u7a31</b></th><th colspan=2 style='width:100px'><b>\u7b49\u7d1a</b></th><th colspan=2 style='width:100px'><b>\u7a2e\u985e</b></th><th colspan=4 style='width:200px'><b>\u89e3\u653e\u95dc\u5361</b></th><th colspan=2 style='width:100px'>\u653b\u64ca\u6b21\u6578</th></tr>";e+='<tr align="center"><td colspan=2><div class=ruby>'+master.mstTreasureDevice[a].ruby+"</div>";e+='<b><font color="#'+cardList[master.mstSvtTreasureDevice[c].cardId]+
'">'+master.mstTreasureDevice[a].name+"</font></b></td><td colspan=2>"+master.mstTreasureDevice[a].rank+"</td><td colspan=2>"+master.mstTreasureDevice[a].typeText.replace(/\uff0f/g,"\uff0f<br>").replace(/\u5bfe/g,"\u5c0d").replace(/\u5b9d/g,"\u5bf6").replace(/\u5263/g,"\u528d").replace(/\u60aa/g,"\u60e1").replace(/\u5965/g,"\u5967").replace(/\u30bb\u30a4\u30d0\u30fc/g,"Saber").replace(/\u7adc/g,"\u9f8d")+"</td><td colspan=4>";e=98==master.mstSvtTreasureDevice[c].num?e+"NPC\u9650\u5b9a":0==master.mstSvtTreasureDevice[c].condQuestId&&
0==master.mstSvtTreasureDevice[c].condLv&&0==master.mstSvtTreasureDevice[c].condFriendshipRank?e+"\u521d\u671f":null!=findName(master.mstQuest,master.mstSvtTreasureDevice[c].condQuestId)?e+questRea(master.mstSvtTreasureDevice[c].condQuestId):0!=master.mstSvtTreasureDevice[c].condLv?e+("Lv."+master.mstSvtTreasureDevice[c].condLv+"\u89e3\u653e"):0!=master.mstSvtTreasureDevice[c].condFriendshipRank?e+("\u7d46\u7b49\u7d1a"+master.mstSvtTreasureDevice[c].condFriendshipRank+"\u89e3\u653e"):e+"\u672a\u958b\u653e";
e+="</td>";l=[];for(b in tdDetail)if(master.mstTreasureDevice[a].id==tdDetail[b][0]){l=tdDetail[b].slice(0);break}if(document.getElementById("isJpTxt").checked||!l[1])for(b in master.mstTreasureDeviceDetail)if(master.mstTreasureDevice[a].id==master.mstTreasureDeviceDetail[b].id){l[1]=master.mstTreasureDeviceDetail[b].detail;break}e+="<td colspan=2>";-1==l[1].search(/\u653b\u64ca[^\u529b]|\u653b\u6483[^\u529b]/)?e+="\uff0d":(e=0<master.mstSvtTreasureDevice[c].damage.length?e+master.mstSvtTreasureDevice[c].damage.length:
e+"1",e+="Hit",1<master.mstSvtTreasureDevice[c].damage.length&&(e+="s"));e+="</td></tr>";f=[];document.getElementById("isJpTxt").checked?f[0]=l[1].slice(0):(l[1]=l[1].replace(/ \uff0b |\u3000\uff0b\u3000/g,"\uff0b"),l[1]=l[1].replace(/\uff06/g,"\uff06\u2517"),f=l[1].split(/\uff06|\uff0b/));p+=f.length;for(b=0;b<f.length;b++){f[b].search(/\{0\}|Lv/);f[b].search(/<O|<\u30aa/);f[b]=f[b].replace(/\{0\}/g,"Lv.");f[b]=f[b].replace(/<O/g,'<font color="#CC6600"><br>< O');f[b]=f[b].replace(/<\u30aa/g,'<font color="#CC6600"><\u30aa');
f[b]=f[b].replace(/P>/g,"P></font>");f[b]=f[b].replace(/\u30d7>/g,"\u30d7></font>");f[b]=f[b].replace(/\u3010/g,'<font color="#006400 ">\u3010');f[b]=f[b].replace(/\u3011/g,"\u3011</font>");f[b]=f[b].replace(/\[Lv.]/g,'<font color="#CC00CC ">[Lv.]</font>');f[b]=f[b].replace(/\n/g,"<br>");f[b]=f[b].replace(/\[g\]\[o\]\u25b2\[\/o\]\[\/g\]/g,'<font color="#ff7f0f ">\u25b2</font>');if(document.getElementById("isJpTxt").checked)e+="<td colspan=12>"+f[b]+"</td>";else if(0!=b&&(e+="<tr>"),e+="<td colspan=2>"+
f[b]+"</td>",l[2+b]&&1<l[2+b].split("/").length-1)for(g in n=[],n=l[2+b].split(/\//),n)e+="<td align=center colspan=2>"+n[g]+"</td>";else e+="<td colspan=10>",e=l[2+b]?e+("\u3000"+l[2+b]):"undefined"!==typeof l[2+b]&&0==l[2+b].length?e+"\u3000---":e+"\u3000\u5f85\u88dc";e+="</td></tr>"}break}k+="<tr><th rowspan="+p+" style='width:60px'><b>\u5bf6\u5177</b></th>"+e+"";document.getElementById("svtSkTdData").innerHTML=k;c="";c='<tr><th rowspan=2 style="width:250px">\u80fd\u529b\u503c</th><th style="width:80px">\u7b4b\u529b</th><th style="width:80px">\u8010\u4e45</th><th style="width:80px">\u654f\u6377</th><th style="width:80px">\u9b54\u529b</th><th style="width:80px">\u5e78\u904b</th><th style="width:80px">\u5bf6\u5177</th></tr><tr align="center"><td>'+
svtStatusList[Math.floor(master.mstSvtLimit[m].power/10)]+svtStatusPlusList[master.mstSvtLimit[m].power%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[m].defense/10)]+svtStatusPlusList[master.mstSvtLimit[m].defense%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[m].agility/10)]+svtStatusPlusList[master.mstSvtLimit[m].agility%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[m].magic/10)]+svtStatusPlusList[master.mstSvtLimit[m].magic%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[m].luck/
10)]+svtStatusPlusList[master.mstSvtLimit[m].luck%10]+"</td><td>"+svtStatusList[Math.floor(master.mstSvtLimit[m].treasureDevice/10)]+svtStatusPlusList[master.mstSvtLimit[m].treasureDevice%10]+"</td></tr>";if(1E3!=master.mstSvt[h].friendshipId){b=findSvtFs(master.mstSvt[h].id);n=5;k=[];if(b!=master.mstSvt[h].friendshipId||10==master.mstSvt[h].maxFriendshipRank)n=10;c+="<tr><th rowspan="+2*n/5+">\u7d46\u9ede\u6578<br>(\u7d2f\u7a4d)</th><th>Lv.1</th><th>Lv.2</th><th>Lv.3</th><th>Lv.4</th><th>Lv.5</th><th>";
10==n&&(c+="\u5c08\u5c6c\u79ae\u88dd");c+='</th></tr><tr align="center">';for(a in master.mstFriendship)master.mstFriendship[a].id==b&&10>master.mstFriendship[a].rank&&(k[master.mstFriendship[a].rank]=master.mstFriendship[a].friendship);for(a=0;5>a;a++)c=0==a?c+("<td>"+k[a]+"</td>"):c+("<td>"+(k[a]-k[a-1])+"<br>("+k[a]+")</td>");if(10==n){c+="<td rowspan=3>";for(r in bondCE)if(bondCE[r][1]==master.mstSvt[h].id){c+=svtFace(bondCE[r][0]);break}c+="</td></tr>"}else c+="<td></td></tr>";if(10==n){c+='<tr><th>Lv.6</th><th>Lv.7</th><th>Lv.8</th><th>Lv.9</th><th>Lv.10</th></tr><tr align="center">';
for(a=5;10>a;a++)c+="<td>"+(k[a]-k[a-1])+"<br>("+k[a]+")</td>";c+="</tr>"}}master.mstSvt[h].collectionNo>zhCNNo&&($("#cmtlang_zh").prop("checked",!1),$("#cmtlang_jp").prop("checked",!0));cmtRead($("input[name=cmtlang]:checked").val());$("#svtInfoData").html(c);b="";b="<tr><th rowspan=4><b>\u9748\u57fa\u518d\u81e8</b></th>";for(n=0;4>n;n++){var r="";0==n%2&&(r=' bgcolor=" #ECF2F3"');0!=n&&(b+="<tr>");b+="<td width=80 "+r+">\u7b2c"+(n+1)+"\u968e\u6bb5</td><td width=450"+r+">";for(a=0;a<master.mstCombineLimit.length;a++)if(master.mstCombineLimit[a].id==
master.mstSvt[h].id&&master.mstCombineLimit[a].svtLimit==n){for(c=0;c<master.mstCombineLimit[a].itemIds.length;c++)b+='<a href="item_drop.html#'+master.mstCombineLimit[a].itemIds[c]+'"><img src="common/images/icon/items/'+master.mstCombineLimit[a].itemIds[c]+'.png" title="'+findItemName(master.mstCombineLimit[a].itemIds[c])+'" onerror="javascript:this.src=\'common/images/icon/items/0.png\'" class="itemM" /></a>x'+master.mstCombineLimit[a].itemNums[c]+"\u3000";b+=addCommas(master.mstCombineLimit[a].qp)+
"QP"}b+="</td></tr>"}b+="<tr><th rowspan=9><b>\u6280\u80fd\u5f37\u5316</b></th>";for(a=n=0;a<master.mstCombineSkill.length;a++)if(r="",0==a%2&&(r=' bgcolor=" #ECF2F3"'),master.mstCombineSkill[a].id==master.mstSvt[h].id){1!=master.mstCombineSkill[a].skillLv&&(b+="<tr>");b+="<td"+r+">Lv."+master.mstCombineSkill[a].skillLv+"\u2192Lv."+(master.mstCombineSkill[a].skillLv+1)+"</td><td"+r+">";for(c=0;c<master.mstCombineSkill[a].itemIds.length;c++)b+='<a href="item_drop.html#'+master.mstCombineSkill[a].itemIds[c]+
'"><img src="common/images/icon/items/'+master.mstCombineSkill[a].itemIds[c]+'.png" title="'+findItemName(master.mstCombineSkill[a].itemIds[c])+'" onerror="javascript:this.src=\'common/images/icon/items/0.png\'" class="itemM" /></a>x'+master.mstCombineSkill[a].itemNums[c]+"\u3000";b+=addCommas(master.mstCombineSkill[a].qp)+"QP</td></tr>";n++}0==n&&(b+="<td colspan=2>\u7121</td></tr>");$("#svtCmbnData").html(b);$("#svtImgData").html('<tr><td><span id="cmd"><img src="common/images/Servant/'+d+'_card_servant_1.png" style="max-width:25%;" class="svtImg"/><img src="common/images/Servant/'+
d+'_card_servant_2.png" style="max-width:25%;" class="svtImg"/><img src="common/images/Servant/'+d+'_card_servant_3.png" style="max-width:25%;" class="svtImg"/></span><br><span id="graph"><img src=common/images/CharaGraph/'+d+'a.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+d+'b.png style="max-width:100%;" class="svtImg"/><img src=common/images/CharaGraph/'+d+'c.png style="max-width:50%;" class="svtImg"/></span></td></tr>');for(a in master.mstSvtLimitAdd)if(master.mstSvtLimitAdd[a].svtId==
master.mstSvt[h].id){$("#cmd").append('<img src="common/images/Servant/'+d+"_card_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" style="max-width:25%;" class="svtImg"/>');$("#graph").append("<img src=common/images/CharaGraph/"+master.mstSvtLimitAdd[a].battleCharaId+'a.png style="max-width:50%;" class="svtImg"/>');master.mstSvt[h].collectionNo<=statusNo&&$(".slide").append('<div><img src="common/images/Servant/'+d+"_status_servant_"+master.mstSvtLimitAdd[a].limitCount+'.png" onerror="this.style.display = none" width=256 height=256 /></div>');
break}$(".svtImg").error(function(){$(this).hide()});d="";if(master.mstSvtLimit[m].hpBase!=master.mstSvtLimit[q].hpBase||master.mstSvtLimit[m].hpMax!=master.mstSvtLimit[q].hpMax||master.mstSvtLimit[m].atkBase!=master.mstSvtLimit[q].atkBase||master.mstSvtLimit[m].atkMax!=master.mstSvtLimit[q].atkMax)m=q;if(99==master.mstSvt[h].type)$("#chart_div").css("display","none");else for($("#chart_div").css("display","block"),d="<tr><th>\u7b49\u7d1a</th><th>ATK</th><th>HP</th><th>\u4e0a\u5347\u5e45\u5ea6</th></tr>",
a=0;100>a;a++)for(n=0;n<master.mstSvtExp.length;n++)if(master.mstSvt[h].expType==master.mstSvtExp[n].type&&master.mstSvtExp[n].lv==a+1){r="";1==master.mstSvtExp[n].lv%2&&(r=' bgcolor="#ECF2F3"');d+='<tr align="center"><td'+r+">Lv."+master.mstSvtExp[n].lv+"</td><td"+r+">"+Math.floor(master.mstSvtLimit[m].atkBase+(master.mstSvtLimit[m].atkMax-master.mstSvtLimit[m].atkBase)*master.mstSvtExp[n].curve/1E3)+"</td><td"+r+">"+Math.floor(master.mstSvtLimit[m].hpBase+(master.mstSvtLimit[m].hpMax-master.mstSvtLimit[m].hpBase)*
master.mstSvtExp[n].curve/1E3)+"</td><td"+r+">"+(master.mstSvtExp[n].curve-master.mstSvtExp[n-1].curve)/10+"%</td></tr>";break}$("#svtLvData").html(d);$(function(){$(".slide").slick({dots:!0,infinite:!0,speed:300,slidesToShow:1,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:2E3})})}
function cmtRead(d){try{$.get("common/svtcomment/"+d+"/"+$("#svtid").val(),function(a){a=JSON.parse(base64.decode(a));var d="",m;for(m in a){d+="<tr><th width=250>"+cmtCond(a[m].condType,null!=a[m].condValues&&0<a[m].condValues.length?a[m].condValues[0]:a[m].condValue);for(var q in master.mstSvtCommentAdd)master.mstSvtCommentAdd[q].svtId==a[m].svtId&&master.mstSvtCommentAdd[q].id==a[m].id&&(d+="<br>\uff06<br>"+cmtCond(master.mstSvtCommentAdd[q].condType,master.mstSvtCommentAdd[q].condValues[0]));
var k=1==a[m].id%2?' bgcolor=" #ECF2F3"':"";d+="</th><td colspan=6"+k+" width=540>";d+=a[m].comment.replace(/\n/g,"<br>").replace(/<br>$/,"<br><br>")+"</td></tr>"}$("#svtCmtData").empty();$("#svtCmtData").append(d)},"text")}catch(a){console.log("Cannot find comment file."),"zh"==d&&cmtRead("jp")}}
function cmtCond(d,a){var h="";0==d?h+="<b>\u89d2\u8272\u8a73\u7d30</b>":9==d?h+="<b>\u7d46\u7b49\u7d1a"+a+"</b>":1==d?h+="<b>\u901a\u904e\u95dc\u5361</b><br>"+questRea(a):7==d&&(h+="<b>\u9748\u57fa\u518d\u81e8\u7b2c"+a+"\u968e\u6bb5</b>");return h}
function classidChange(){var d;for(d=svtid.options.length-1;0<=d;d--)svtid.remove(d);for(d=0;d<master.mstSvt.length;d++)if(0==classid.value||master.mstSvt[d].classId==classid.value)if(1==master.mstSvt[d].type||2==master.mstSvt[d].type||5==master.mstSvt[d].type||9==master.mstSvt[d].type||99==master.mstSvt[d].type){var a=findSvtNameZh(master.mstSvt[d].id);a?svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+" "+a,master.mstSvt[d].id)):svtid.options.add(new Option("No."+master.mstSvt[d].collectionNo+
" "+master.mstSvt[d].name,master.mstSvt[d].id))}for(d=0;d<svtid.options.length;d++)if(-1==svtid.options[d].text.search("No.0")){svtid.options[d].selected=!0;break}0!=classid.value&&svtlocation(svtid[svtid.options.selectedIndex].value)}function svtidset(){classidChange();svtlocation(svtid[0].value)}
function svtidChange(){var d;for(d=svtlv.options.length-1;0<=d;d--)svtlv.remove(d);for(d in master.mstSvt)if(master.mstSvt[d].id==svtid.value){for(d=100;0<d;d--)svtlv.options.add(new Option("Lv."+d,d));break}svtlvChange();svtDataTable(svtid.value);drawChart()}
function svtlocation(d){d="";for(var a in master.mstSvt)if(master.mstSvt[a].id==svtid.value){d=0!=master.mstSvt[a].collectionNo?d+("?no="+master.mstSvt[a].collectionNo):d+("?id="+master.mstSvt[a].id);break}"file:"==location.protocol?changeURL(location.protocol+"//"+location.pathname+d):changeURL(location.protocol+"//"+location.hostname+location.pathname+d);svtidChange()}
function svtlvChange(){var d,a=0,h=0,m=0,q=0;for(d in master.mstSvtLimit)master.mstSvtLimit[d].svtId==svtid.value&&(a=master.mstSvtLimit[d].hpBase,h=master.mstSvtLimit[d].hpMax,m=master.mstSvtLimit[d].atkBase,q=master.mstSvtLimit[d].atkMax);for(var k in master.mstSvt)if(master.mstSvt[k].id==svtid.value){for(var e in master.mstSvtExp)if(atk.value=m,hp.value=a,four(),master.mstSvt[k].expType==master.mstSvtExp[e].type&&master.mstSvtExp[e].lv==svtlv.value){atk.value=Math.floor(m+(q-m)*master.mstSvtExp[e].curve/
1E3);hp.value=Math.floor(a+(h-a)*master.mstSvtExp[e].curve/1E3);four();break}break}}function four(){hpp.value=parseInt(hp.value)+2E3;atkp.value=parseInt(atk.value)+2E3}function npArray(d){var a="",h;for(h in d)a+=d[h]/100+"%<br>";return a}
function urlId(){$("#zhTWNO").html(zhTWNo);$("#zhCNNO").html(zhCNNo);$("#classid").val(0);classidChange();var d="1",a="";getUrl("no")&&(d=getUrl("no"));getUrl("id")&&(a=getUrl("id"));if(d){if(0!=a.length)for(i in master.mstSvt){if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&a==master.mstSvt[i].id){$("#svtid").val(master.mstSvt[i].id);break}}else for(i in master.mstSvt)if((1==master.mstSvt[i].type||2==master.mstSvt[i].type||
5==master.mstSvt[i].type||9==master.mstSvt[i].type||99==master.mstSvt[i].type)&&d==master.mstSvt[i].collectionNo){$("#svtid").val(master.mstSvt[i].id);break}i==master.mstSvt.length-1&&$("#svtid").val(800100)}svtidChange()};