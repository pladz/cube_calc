(this.webpackJsonpcube_calc=this.webpackJsonpcube_calc||[]).push([[0],{61:function(e,r,a){},62:function(e,r,a){},70:function(e,r,a){"use strict";a.r(r);var t=a(0),c=a.n(t),l=a(12),i=a.n(l),d=(a(61),a.p,a(62),a(9)),b=a(14),k=a(107),m=a(119),s=a(112),n=a(111),o=a(117),p=a(115),P=a(116),h=a(118),u=a(113),g=[{stat:"12% Str",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"12% Dex",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"12% Int",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"12% Luk",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"12% HP",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"12% MP",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"12% Def",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"9% All Stats",red1:.06,black1:.06,red2:.006,black2:.012,red3:6e-4,black3:.003,prime:"Prime"},{stat:"All Skill Levels +2",red1:.06,black1:.06,red2:.006,black2:.012,red3:6e-4,black3:.003,prime:"Prime"},{stat:"All Skill Levels +3",red1:.04,black1:.04,red2:.004,black2:.008,red3:4e-4,black3:.002,prime:"Prime"},{stat:"10% chance to ignore 20% damage when hit",red1:.06,black1:.06,red2:.006,black2:.012,red3:6e-4,black3:.003,prime:"Prime"},{stat:"Skill cooldown -1 second",red1:.06,black1:.06,red2:.006,black2:.012,red3:6e-4,black3:.003,prime:"Prime"},{stat:"Skill cooldown -2 seconds",red1:.04,black1:.04,red2:.004,black2:.008,red3:4e-4,black3:.002,prime:"Prime"},{stat:"Decent Advanced Bless",red1:.06,black1:.06,red2:.006,black2:.012,red3:6e-4,black3:.003,prime:"Prime"}],N=[{stat:"12% Str",red1:.0889,black1:.0889,red2:.0089,black2:.0178,red3:9e-4,black3:.0044,prime:"Prime"},{stat:"12% Dex",red1:.0889,black1:.0889,red2:.0089,black2:.0178,red3:9e-4,black3:.0044,prime:"Prime"},{stat:"12% Int",red1:.0889,black1:.0889,red2:.0089,black2:.0178,red3:9e-4,black3:.0044,prime:"Prime"},{stat:"12% Luk",red1:.0889,black1:.0889,red2:.0089,black2:.0178,red3:9e-4,black3:.0044,prime:"Prime"},{stat:"12% HP",red1:.0889,black1:.0889,red2:.0089,black2:.0178,red3:9e-4,black3:.0044,prime:"Prime"},{stat:"12% MP",red1:.0889,black1:.0889,red2:.0089,black2:.0178,red3:9e-4,black3:.0044,prime:"Prime"},{stat:"12% Def",red1:.08,black1:.08,red2:.008,black2:.016,red3:8e-4,black3:.004,prime:"Prime"},{stat:"9% All Stats",red1:.0667,black1:.0667,red2:.0067,black2:.0133,red3:7e-4,black3:.0033,prime:"Prime"},{stat:"Elemental Resistance +10%",red1:.0444,black1:.0444,red2:.0044,black2:.0089,red3:4e-4,black3:.0022,prime:"Prime"},{stat:"10% chance to ignore 20% damage when hit",red1:.0667,black1:.0667,red2:.0067,black2:.0133,red3:7e-4,black3:.0033,prime:"Prime"},{stat:"10% chance to ignore 40% damage when hit",red1:.0667,black1:.0667,red2:.0067,black2:.0133,red3:7e-4,black3:.0033,prime:"Prime"},{stat:"Invincibility time +3 seconds when hit",red1:.0667,black1:.0667,red2:.0067,black2:.0133,red3:7e-4,black3:.0033,prime:"Prime"},{stat:"4% chance of being invincible for 7 seconds when hit",red1:.0667,black1:.0667,red2:.0067,black2:.0133,red3:7e-4,black3:.0033,prime:"Prime"}],f=[{stat:"12% Str",red1:.1026,black1:.1026,red2:.0103,black2:.0205,red3:.001,black3:.0051,prime:"Prime"},{stat:"12% Dex",red1:.1026,black1:.1026,red2:.0103,black2:.0205,red3:.001,black3:.0051,prime:"Prime"},{stat:"12% Int",red1:.1026,black1:.1026,red2:.0103,black2:.0205,red3:.001,black3:.0051,prime:"Prime"},{stat:"12% Luk",red1:.1026,black1:.1026,red2:.0103,black2:.0205,red3:.001,black3:.0051,prime:"Prime"},{stat:"12% HP",red1:.1026,black1:.1026,red2:.0103,black2:.0205,red3:.001,black3:.0051,prime:"Prime"},{stat:"12% MP",red1:.1026,black1:.1026,red2:.0103,black2:.0205,red3:.001,black3:.0051,prime:"Prime"},{stat:"12% Def",red1:.1026,black1:.1026,red2:.0103,black2:.0205,red3:.001,black3:.0051,prime:"Prime"},{stat:"9% All Stats",red1:.0769,black1:.0769,red2:.0077,black2:.0154,red3:8e-4,black3:.0038,prime:"Prime"},{stat:"Elemental Resistance +10%",red1:.0513,black1:.0513,red2:.0051,black2:.0103,red3:5e-4,black3:.0026,prime:"Prime"},{stat:"10% chance to ignore 20% damage when hit",red1:.0769,black1:.0769,red2:.0077,black2:.0154,red3:8e-4,black3:.0038,prime:"Prime"},{stat:"10% chance to ignore 40% damage when hit",red1:.0769,black1:.0769,red2:.0077,black2:.0154,red3:8e-4,black3:.0038,prime:"Prime"}],j=[{stat:"12% Str",red1:.1,black1:.1,red2:.01,black2:.02,red3:.001,black3:.005,prime:"Prime"},{stat:"12% Dex",red1:.1,black1:.1,red2:.01,black2:.02,red3:.001,black3:.005,prime:"Prime"},{stat:"12% Int",red1:.1,black1:.1,red2:.01,black2:.02,red3:.001,black3:.005,prime:"Prime"},{stat:"12% Luk",red1:.1,black1:.1,red2:.01,black2:.02,red3:.001,black3:.005,prime:"Prime"},{stat:"12% HP",red1:.1,black1:.1,red2:.01,black2:.02,red3:.001,black3:.005,prime:"Prime"},{stat:"12% MP",red1:.1,black1:.1,red2:.01,black2:.02,red3:.001,black3:.005,prime:"Prime"},{stat:"12% Def",red1:.1,black1:.1,red2:.01,black2:.02,red3:.001,black3:.005,prime:"Prime"},{stat:"9% All Stats",red1:.075,black1:.075,red2:.0075,black2:.015,red3:7e-4,black3:.0038,prime:"Prime"},{stat:"10% chance to ignore 20% damage when hit",red1:.075,black1:.075,red2:.0075,black2:.015,red3:7e-4,black3:.0038,prime:"Prime"},{stat:"10% chance to ignore 40% damage when hit",red1:.075,black1:.075,red2:.0075,black2:.015,red3:7e-4,black3:.0038,prime:"Prime"},{stat:"Decent Combat Orders",red1:.075,black1:.075,red2:.0075,black2:.015,red3:7e-4,black3:.0038,prime:"Prime"}],S=[{stat:"12% Str",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"12% Dex",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"12% Int",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"12% Luk",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"12% HP",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"12% MP",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"12% Def",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"8% Critical Damage",red1:.0909,black1:.0909,red2:.091,black2:.0182,red3:9e-4,black3:.0045,prime:"Prime"},{stat:"9% All Stats",red1:.0682,black1:.0682,red2:.0068,black2:.0136,red3:7e-4,black3:.0034,prime:"Prime"},{stat:"10% chance to ignore 20% damage when hit",red1:.0682,black1:.0682,red2:.0068,black2:.0136,red3:7e-4,black3:.0034,prime:"Prime"},{stat:"10% chance to ignore 40% damage when hit",red1:.0682,black1:.0682,red2:.0068,black2:.0136,red3:7e-4,black3:.0034,prime:"Prime"},{stat:"Decent Combat Orders",red1:.0682,black1:.0682,red2:.0068,black2:.0136,red3:7e-4,black3:.0034,prime:"Prime"}],y=[{stat:"12% Str",red1:.1081,black1:.1081,red2:.0108,black2:.0216,red3:.0011,black3:.0054,prime:"Prime"},{stat:"12% Dex",red1:.1081,black1:.1081,red2:.0108,black2:.0216,red3:.0011,black3:.0054,prime:"Prime"},{stat:"12% Int",red1:.1081,black1:.1081,red2:.0108,black2:.0216,red3:.0011,black3:.0054,prime:"Prime"},{stat:"12% Luk",red1:.1081,black1:.1081,red2:.0108,black2:.0216,red3:.0011,black3:.0054,prime:"Prime"},{stat:"12% HP",red1:.1081,black1:.1081,red2:.0108,black2:.0216,red3:.0011,black3:.0054,prime:"Prime"},{stat:"12% MP",red1:.1081,black1:.1081,red2:.0108,black2:.0216,red3:.0011,black3:.0054,prime:"Prime"},{stat:"12% Def",red1:.1081,black1:.1081,red2:.0108,black2:.0216,red3:.0011,black3:.0054,prime:"Prime"},{stat:"9% All Stats",red1:.0811,black1:.0811,red2:.0081,black2:.0162,red3:8e-4,black3:.0041,prime:"Prime"},{stat:"10% chance to ignore 20% damage when hit",red1:.0811,black1:.0811,red2:.0081,black2:.0162,red3:8e-4,black3:.0041,prime:"Prime"},{stat:"10% chance to ignore 40% damage when hit",red1:.0811,black1:.0811,red2:.0081,black2:.0162,red3:8e-4,black3:.0041,prime:"Prime"}],x=[{stat:"12% Str",red1:.093,black1:.093,red2:.0093,black2:.0186,red3:9e-4,black3:.0047,prime:"Prime"},{stat:"12% Dex",red1:.093,black1:.093,red2:.0093,black2:.0186,red3:9e-4,black3:.0047,prime:"Prime"},{stat:"12% Int",red1:.093,black1:.093,red2:.0093,black2:.0186,red3:9e-4,black3:.0047,prime:"Prime"},{stat:"12% Luk",red1:.093,black1:.093,red2:.0093,black2:.0186,red3:9e-4,black3:.0047,prime:"Prime"},{stat:"12% HP",red1:.093,black1:.093,red2:.0093,black2:.0186,red3:9e-4,black3:.0047,prime:"Prime"},{stat:"12% MP",red1:.093,black1:.093,red2:.0093,black2:.0186,red3:9e-4,black3:.0047,prime:"Prime"},{stat:"12% Def",red1:.093,black1:.093,red2:.0093,black2:.0186,red3:9e-4,black3:.0047,prime:"Prime"},{stat:"9% All Stats",red1:.0698,black1:.0698,red2:.007,black2:.014,red3:7e-4,black3:.0035,prime:"Prime"},{stat:"MP consumption of all skills -15%",red1:.0698,black1:.0698,red2:.007,black2:.014,red3:7e-4,black3:.0035,prime:"Prime"},{stat:"MP consumption of all skills -30%",red1:.0698,black1:.0698,red2:.007,black2:.014,red3:7e-4,black3:.0035,prime:"Prime"},{stat:"Meso Amount +20%",red1:.0698,black1:.0698,red2:.007,black2:.014,red3:7e-4,black3:.0035,prime:"Prime"},{stat:"Item Drop Rate +20%",red1:.0811,black1:.0811,red2:.0081,black2:.0162,red3:8e-4,black3:.0041,prime:"Prime"}],O=[{stat:"12% Str",red1:.129,black1:.129,red2:.0129,black2:.0258,red3:.0013,black3:.0065,prime:"Prime"},{stat:"12% Dex",red1:.129,black1:.129,red2:.0129,black2:.0258,red3:.0013,black3:.0065,prime:"Prime"},{stat:"12% Int",red1:.129,black1:.129,red2:.0129,black2:.0258,red3:.0013,black3:.0065,prime:"Prime"},{stat:"12% Luk",red1:.129,black1:.129,red2:.0129,black2:.0258,red3:.0013,black3:.0065,prime:"Prime"},{stat:"12% HP",red1:.129,black1:.129,red2:.0129,black2:.0258,red3:.0013,black3:.0065,prime:"Prime"},{stat:"12% MP",red1:.129,black1:.129,red2:.0129,black2:.0258,red3:.0013,black3:.0065,prime:"Prime"},{stat:"12% Def",red1:.129,black1:.129,red2:.0129,black2:.0258,red3:.0013,black3:.0065,prime:"Prime"},{stat:"9% All Stats",red1:.0968,black1:.0968,red2:.0097,black2:.0194,red3:.001,black3:.0048,prime:"Prime"}],D=[{stat:"12% Str",red1:.0976,black1:.0976,red2:.0098,black2:.0195,red3:.001,black3:.0049,prime:"Prime"},{stat:"12% Dex",red1:.0976,black1:.0976,red2:.0098,black2:.0195,red3:.001,black3:.0049,prime:"Prime"},{stat:"12% Int",red1:.0976,black1:.0976,red2:.0098,black2:.0195,red3:.001,black3:.0049,prime:"Prime"},{stat:"12% Luk",red1:.0976,black1:.0976,red2:.0098,black2:.0195,red3:.001,black3:.0049,prime:"Prime"},{stat:"12% ATT",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"12% MATT",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"12% Critical Chance",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"12% Damage",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"9% All Stats",red1:.0732,black1:.0732,red2:.0073,black2:.0146,red3:7e-4,black3:.0037,prime:"Prime"},{stat:"+1 ATT per 10 character levels",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"+1 MATT per 10 character levels",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"Ignore Enemy Defense +35%",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"Ignore Enemy Defense +40%",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"Damage when attacking boss monsters +30%",red1:.0488,black1:.0488,red2:.0449,black2:.0454,red3:.0445,black3:.0446,prime:"Prime"},{stat:"Damage when attacking boss monsters +35%",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"},{stat:"Damage when attacking boss monsters +40%",red1:.0488,black1:.0488,red2:.0049,black2:.0098,red3:5e-4,black3:.0024,prime:"Prime"}],A=[{stat:"12% Str",red1:.0851,black1:.0851,red2:.0085,black2:.017,red3:9e-4,black3:.0043,prime:"Prime"},{stat:"12% Dex",red1:.0851,black1:.0851,red2:.0085,black2:.017,red3:9e-4,black3:.0043,prime:"Prime"},{stat:"12% Int",red1:.0851,black1:.0851,red2:.0085,black2:.017,red3:9e-4,black3:.0043,prime:"Prime"},{stat:"12% Luk",red1:.0851,black1:.0851,red2:.0085,black2:.017,red3:9e-4,black3:.0043,prime:"Prime"},{stat:"12% ATT",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"12% MATT",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"12% Critical Chance",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"12% Damage",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"9% All Stats",red1:.0638,black1:.0638,red2:.0064,black2:.0128,red3:6e-4,black3:.0032,prime:"Prime"},{stat:"+1 ATT per 10 character levels",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"+1 MATT per 10 character levels",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"Ignore Enemy Defense +35%",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"Ignore Enemy Defense +40%",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"10% chance to ignore 20% dmg when hit",red1:.0638,black1:.0638,red2:.0064,black2:.0128,red3:6e-4,black3:.0032,prime:"Prime"},{stat:"10% chance to ignore 40% dmg when hit",red1:.0638,black1:.0638,red2:.0064,black2:.0128,red3:6e-4,black3:.0032,prime:"Prime"},{stat:"Damage when attacking boss monsters +30%",red1:.0426,black1:.0426,red2:.0383,black2:.0387,red3:.0378,black3:.0379,prime:"Prime"},{stat:"Damage when attacking boss monsters +35%",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"},{stat:"Damage when attacking boss monsters +40%",red1:.0426,black1:.0426,red2:.0043,black2:.0085,red3:4e-4,black3:.0021,prime:"Prime"}],I=[{stat:"12% Str",red1:.1143,black1:.1143,red2:.0114,black2:.0229,red3:.0011,black3:.0057,prime:"Prime"},{stat:"12% Dex",red1:.1143,black1:.1143,red2:.0114,black2:.0229,red3:.0011,black3:.0057,prime:"Prime"},{stat:"12% Int",red1:.1143,black1:.1143,red2:.0114,black2:.0229,red3:.0011,black3:.0057,prime:"Prime"},{stat:"12% Luk",red1:.1143,black1:.1143,red2:.0114,black2:.0229,red3:.0011,black3:.0057,prime:"Prime"},{stat:"12% ATT",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"},{stat:"12% MATT",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"},{stat:"12% Critical Chance",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"},{stat:"12% Damage",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"},{stat:"9% All Stats",red1:.0857,black1:.0857,red2:.0086,black2:.0171,red3:9e-4,black3:.0043,prime:"Prime"},{stat:"+1 ATT per 10 character levels",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"},{stat:"+1 MATT per 10 character levels",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"},{stat:"Ignore Enemy Defense +35%",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"},{stat:"Ignore Enemy Defense +40%",red1:.0571,black1:.0571,red2:.0057,black2:.0114,red3:6e-4,black3:.0029,prime:"Prime"}],w=[{stat:"9% Str",red2:.0726,black2:.0645,red3:.0798,black3:.0766,prime:"Not Prime"},{stat:"9% Dex",red2:.0726,black2:.0645,red3:.0798,black3:.0766,prime:"Not Prime"},{stat:"9% Int",red2:.0726,black2:.0645,red3:.0798,black3:.0766,prime:"Not Prime"},{stat:"9% Luk",red2:.0726,black2:.0645,red3:.0798,black3:.0766,prime:"Not Prime"},{stat:"9% HP",red2:.0871,black2:.0774,red3:.0958,black3:.0919,prime:"Not Prime"},{stat:"9% MP",red2:.0871,black2:.0774,red3:.0958,black3:.0919,prime:"Not Prime"},{stat:"9% Def",red2:.0581,black2:.0516,red3:.0639,black3:.0613,prime:"Not Prime"},{stat:"6% All Stats",red2:.0581,black2:.0516,red3:.0639,black3:.0613,prime:"Not Prime"},{stat:"All Skill Levels +1",red2:.0581,black2:.0516,red3:.0639,black3:.0613,prime:"Not Prime"},{stat:"All Skill Levels +2",red2:.029,black2:.0258,red3:.0319,black3:.0306,prime:"Not Prime"},{stat:"5% chance to ignore 20% damage when hit",red2:.0581,black2:.0516,red3:.0639,black3:.0613,prime:"Not Prime"},{stat:"5% chance to ignore 40% damage when hit",red2:.0581,black2:.0516,red3:.0639,black3:.0613,prime:"Not Prime"},{stat:"Increase efficiency of HP recovery items and skills by 30%",red2:.0581,black2:.0516,red3:.0639,black3:.0613,prime:"Not Prime"},{stat:"Decent Mystic Door",red2:.0581,black2:.0516,red3:.0639,black3:.0613,prime:"Not Prime"}],v=[{stat:"9% Str",red2:.0682,black2:.0606,red3:.075,black3:.072,prime:"Not Prime"},{stat:"9% Dex",red2:.0682,black2:.0606,red3:.075,black3:.072,prime:"Not Prime"},{stat:"9% Int",red2:.0682,black2:.0606,red3:.075,black3:.072,prime:"Not Prime"},{stat:"9% Luk",red2:.0682,black2:.0606,red3:.075,black3:.072,prime:"Not Prime"},{stat:"9% HP",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"},{stat:"9% MP",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"},{stat:"9% Def",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"},{stat:"6% All Stats",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"},{stat:"5% chance to ignore 20% damage when hit",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"},{stat:"5% chance to ignore 40% damage when hit",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"},{stat:"Invincibility time +2 seconds when hit",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"},{stat:"2% chance of being invincible for 7 seconds when hit ",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"},{stat:"30% chance to reflect 50% of damage taken",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"},{stat:"30% chance to reflect 70% of damage taken",red2:.0545,black2:.0485,red3:.03,black3:.0288,prime:"Not Prime"},{stat:"Increase efficiency of HP recovery items and skills by 30%",red2:.0545,black2:.0485,red3:.06,black3:.0576,prime:"Not Prime"}],T=[{stat:"9% Str",red2:.0804,black2:.0714,red3:.0884,black3:.0848,prime:"Not Prime"},{stat:"9% Dex",red2:.0804,black2:.0714,red3:.0884,black3:.0848,prime:"Not Prime"},{stat:"9% Int",red2:.0804,black2:.0714,red3:.0884,black3:.0848,prime:"Not Prime"},{stat:"9% Luk",red2:.0804,black2:.0714,red3:.0884,black3:.0848,prime:"Not Prime"},{stat:"9% HP",red2:.0964,black2:.0857,red3:.1061,black3:.1018,prime:"Not Prime"},{stat:"9% MP",red2:.0964,black2:.0857,red3:.1061,black3:.1018,prime:"Not Prime"},{stat:"9% Def",red2:.0643,black2:.0571,red3:.0707,black3:.0679,prime:"Not Prime"},{stat:"6% All Stats",red2:.0643,black2:.0571,red3:.0707,black3:.0679,prime:"Not Prime"},{stat:"5% chance to ignore 20% damage when hit",red2:.0643,black2:.0571,red3:.0707,black3:.0679,prime:"Not Prime"},{stat:"5% chance to ignore 40% damage when hit",red2:.0643,black2:.0571,red3:.0707,black3:.0679,prime:"Not Prime"},{stat:"Increase efficiency of HP recovery items and skills by 30%",red2:.0643,black2:.0571,red3:.0707,black3:.0679,prime:"Not Prime"},{stat:"Decent Hyper Body",red2:.0643,black2:.0571,red3:.0707,black3:.0679,prime:"Not Prime"}],L=[{stat:"9% Str",red2:.075,black2:.0667,red3:.0825,black3:.0792,prime:"Not Prime"},{stat:"9% Dex",red2:.075,black2:.0667,red3:.0825,black3:.0792,prime:"Not Prime"},{stat:"9% Int",red2:.075,black2:.0667,red3:.0825,black3:.0792,prime:"Not Prime"},{stat:"9% Luk",red2:.075,black2:.0667,red3:.0825,black3:.0792,prime:"Not Prime"},{stat:"9% HP",red2:.09,black2:.08,red3:.099,black3:.095,prime:"Not Prime"},{stat:"9% MP",red2:.09,black2:.08,red3:.099,black3:.095,prime:"Not Prime"},{stat:"9% Def",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"6% All Stats",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"STR +1 per 10 Character Levels",red2:.015,black2:.0133,red3:.0165,black3:.0158,prime:"Not Prime"},{stat:"DEX +1 per 10 Character Levels",red2:.015,black2:.0133,red3:.0165,black3:.0158,prime:"Not Prime"},{stat:"INT +1 per 10 Character Levels",red2:.015,black2:.0133,red3:.0165,black3:.0158,prime:"Not Prime"},{stat:"LUK +1 per 10 Character Levels",red2:.015,black2:.0133,red3:.0165,black3:.0158,prime:"Not Prime"},{stat:"5% chance to ignore 20% damage when hit",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"5% chance to ignore 40% damage when hit",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"Increase efficiency of HP recovery items and skills by 30%",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"Decent Sharp Eyes",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"}],C=[{stat:"9% Str",red2:.0865,black2:.0769,red3:.0952,black3:.0913,prime:"Not Prime"},{stat:"9% Dex",red2:.0865,black2:.0769,red3:.0952,black3:.0913,prime:"Not Prime"},{stat:"9% Int",red2:.0865,black2:.0769,red3:.0952,black3:.0913,prime:"Not Prime"},{stat:"9% Luk",red2:.0865,black2:.0769,red3:.0952,black3:.0913,prime:"Not Prime"},{stat:"9% HP",red2:.1038,black2:.0923,red3:.1142,black3:.1096,prime:"Not Prime"},{stat:"9% MP",red2:.1038,black2:.0923,red3:.1142,black3:.1096,prime:"Not Prime"},{stat:"9% Def",red2:.0692,black2:.0615,red3:.0762,black3:.0731,prime:"Not Prime"},{stat:"6% All Stats",red2:.0692,black2:.0615,red3:.0762,black3:.0731,prime:"Not Prime"},{stat:"5% chance to ignore 20% damage when hit",red2:.0692,black2:.0615,red3:.0762,black3:.0731,prime:"Not Prime"},{stat:"5% chance to ignore 40% damage when hit",red2:.0692,black2:.0615,red3:.0762,black3:.0731,prime:"Not Prime"},{stat:"Increase efficiency of HP recovery items and skills by 30%",red2:.0692,black2:.0615,red3:.0762,black3:.0731,prime:"Not Prime"}],M=[{stat:"9% Str",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% Dex",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% Int",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% Luk",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% HP",red2:.1227,black2:.1091,red3:.135,black3:.1295,prime:"Not Prime"},{stat:"9% MP",red2:.1227,black2:.1091,red3:.135,black3:.1295,prime:"Not Prime"},{stat:"9% Def",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"},{stat:"6% All Stats",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"},{stat:"Increase efficiency of HP recovery items and skills by 30%",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"}],H=[{stat:"9% Str",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% Dex",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% Int",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% Luk",red2:.1023,black2:.0909,red3:.1125,black3:.108,prime:"Not Prime"},{stat:"9% HP",red2:.1227,black2:.1091,red3:.135,black3:.1295,prime:"Not Prime"},{stat:"9% MP",red2:.1227,black2:.1091,red3:.135,black3:.1295,prime:"Not Prime"},{stat:"9% Def",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"},{stat:"6% All Stats",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"},{stat:"Increase efficiency of HP recovery items and skills by 30%",red2:.0818,black2:.0727,red3:.09,black3:.0864,prime:"Not Prime"}],E=[{stat:"9% Str",red2:.1,black2:.0889,red3:.11,black3:.1056,prime:"Not Prime"},{stat:"9% Dex",red2:.1,black2:.0889,red3:.11,black3:.1056,prime:"Not Prime"},{stat:"9% Int",red2:.1,black2:.0889,red3:.11,black3:.1056,prime:"Not Prime"},{stat:"9% Luk",red2:.1,black2:.0889,red3:.11,black3:.1056,prime:"Not Prime"},{stat:"9% ATT",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"9% MATT",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"Critical Chance +9%",red2:.08,black2:.0711,red3:.088,black3:.0844,prime:"Not Prime"},{stat:"9% Damage",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"6% All Stats",red2:.08,black2:.0711,red3:.088,black3:.0844,prime:"Not Prime"},{stat:"Ignore Enemy Defense +30%",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"},{stat:"Damage when attacking boss monsters +20%",red2:.06,black2:.0533,red3:.066,black3:.0633,prime:"Not Prime"}],U=[{stat:"9% Str",red2:.0849,black2:.0755,red3:.0934,black3:.0896,prime:"Not Prime"},{stat:"9% Dex",red2:.0849,black2:.0755,red3:.0934,black3:.0896,prime:"Not Prime"},{stat:"9% Int",red2:.0849,black2:.0755,red3:.0934,black3:.0896,prime:"Not Prime"},{stat:"9% Luk",red2:.0849,black2:.0755,red3:.0934,black3:.0896,prime:"Not Prime"},{stat:"9% ATT",red2:.0509,black2:.0453,red3:.056,black3:.0538,prime:"Not Prime"},{stat:"9% MATT",red2:.0509,black2:.0453,red3:.056,black3:.0538,prime:"Not Prime"},{stat:"Critical Chance +9%",red2:.0679,black2:.0604,red3:.0747,black3:.0717,prime:"Not Prime"},{stat:"9% Damage",red2:.0509,black2:.0453,red3:.056,black3:.0538,prime:"Not Prime"},{stat:"6% All Stats",red2:.0679,black2:.0604,red3:.0747,black3:.0714,prime:"Not Prime"},{stat:"Ignore Enemy Defense +30%",red2:.0509,black2:.0453,red3:.056,black3:.0538,prime:"Not Prime"},{stat:"5% chance to ignore 20% damage when hit",red2:.0679,black2:.0604,red3:.0747,black3:.0714,prime:"Not Prime"},{stat:"5% chance to ignore 40% damage when hit",red2:.0679,black2:.0604,red3:.0747,black3:.0714,prime:"Not Prime"},{stat:"Damage when attacking boss monsters +20%",red2:.0509,black2:.0453,red3:.056,black3:.0538,prime:"Not Prime"}],B=[{stat:"9% Str",red2:.1125,black2:.1,red3:.1238,black3:.1188,prime:"Not Prime"},{stat:"9% Dex",red2:.1125,black2:.1,red3:.1238,black3:.1188,prime:"Not Prime"},{stat:"9% Int",red2:.1125,black2:.1,red3:.1238,black3:.1188,prime:"Not Prime"},{stat:"9% Luk",red2:.1125,black2:.1,red3:.1238,black3:.1188,prime:"Not Prime"},{stat:"9% ATT",red2:.0675,black2:.06,red3:.0742,black3:.0713,prime:"Not Prime"},{stat:"9% MATT",red2:.0675,black2:.06,red3:.0742,black3:.0713,prime:"Not Prime"},{stat:"Critical Chance +9%",red2:.09,black2:.08,red3:.099,black3:.095,prime:"Not Prime"},{stat:"9% Damage",red2:.0675,black2:.06,red3:.0742,black3:.0713,prime:"Not Prime"},{stat:"6% All Stats",red2:.09,black2:.08,red3:.099,black3:.095,prime:"Not Prime"},{stat:"Ignore Enemy Defense +30%",red2:.0675,black2:.06,red3:.0742,black3:.0713,prime:"Not Prime"}],F=a(6),R=Object(k.a)((function(e){return{avatar:{width:e.spacing(15),height:e.spacing(15),margin:e.spacing(1)},title:{color:"tomato"},subtitle:{color:"tan",marginBottom:"3rem"},typedContainer:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"100vw",textAlign:"center",zIndex:1},flex:{display:"flex"},cubesAccordion:{width:"100%"}}})),W=[{title:"Hat",type:"Armor"},{title:"Top",type:"Armor"},{title:"Bottom",type:"Armor"},{title:"Overall",type:"Armor"},{title:"Shoe",type:"Armor"},{title:"Cape",type:"Armor"},{title:"Glove",type:"Armor"},{title:"Shoulder",type:"Armor"},{title:"Ring",type:"Accessory"},{title:"Earring",type:"Accessory"},{title:"Pendant",type:"Accessory"},{title:"Belt",type:"Accessory"},{title:"Heart",type:"Accessory"},{title:"Face",type:"Accessory"},{title:"Eye",type:"Accessory"},{title:"Weapon",type:"WSE"},{title:"Emblem",type:"WSE"},{title:"Secondary",type:"WSE"}].map((function(e){var r=e.type;return Object(b.a)({type:/[0-9]/.test(r)?"0-9":r},e)}));function V(){var e=c.a.useState(""),r=Object(d.a)(e,2),a=r[0],l=r[1],i=c.a.useState(""),k=Object(d.a)(i,2),V=k[0],G=k[1],J=c.a.useState(""),_=Object(d.a)(J,2),z=_[0],K=_[1],X=c.a.useState(""),q=Object(d.a)(X,2),Q=q[0],Y=q[1],Z=c.a.useState(!1),$=Object(d.a)(Z,2),ee=$[0],re=$[1],ae=c.a.useState(!1),te=Object(d.a)(ae,2),ce=te[0],le=te[1],ie=c.a.useState([]),de=Object(d.a)(ie,2),be=de[0],ke=de[1],me=c.a.useState([]),se=Object(d.a)(me,2),ne=se[0],oe=se[1],pe=c.a.useState(0),Pe=Object(d.a)(pe,2),he=Pe[0],ue=Pe[1],ge=c.a.useState(0),Ne=Object(d.a)(ge,2),fe=Ne[0],je=Ne[1],Se=c.a.useState(0),ye=Object(d.a)(Se,2),xe=ye[0],Oe=ye[1],De=c.a.useState(0),Ae=Object(d.a)(De,2),Ie=Ae[0],we=Ae[1],ve=c.a.useState(0),Te=Object(d.a)(ve,2),Le=Te[0],Ce=Te[1],Me=c.a.useState(0),He=Object(d.a)(Me,2),Ee=He[0],Ue=He[1],Be=R();return Object(t.useEffect)((function(){le(""!==V&&""!==z&&""!==Q)}),[V,z,Q]),Object(F.jsx)("div",{children:Object(F.jsxs)(m.a,{expanded:ee,fullWidth:!0,children:[Object(F.jsx)(s.a,{expandIcon:Object(F.jsx)(u.a,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header",children:Object(F.jsx)(n.a,{elevation:3,"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},children:Object(F.jsx)(h.a,{id:"grouped-demo",inputValue:a,onInputChange:function(e,r){re(""!==r),l(r),function(e){var r=[],a=[];switch(e){case"Hat":r=g,a=w;break;case"Top":r=N,a=v;break;case"Bottom":r=f,a=T;break;case"Overall":r=N,a=v;break;case"Shoe":r=j,a=T;break;case"Glove":r=S,a=L;break;case"Cape":case"Shoulder":case"Belt":r=y,a=C;break;case"Ring":case"Earring":case"Pendant":case"Face":case"Eye":r=x,a=M;break;case"Heart":r=O,a=H;break;case"Weapon":r=D,a=E;break;case"Secondary":r=A,a=U;break;case"Emblem":r=I,a=B;break;default:r=g}ke(r.map((function(e){var r=e.stat,a=e.red1,t=e.black1,c=e.red2,l=e.black2,i=e.red3,d=e.black3;return Object(b.a)({stat:r,red1:a,black1:t,red2:c,black2:l,red3:i,black3:d},e)}))),oe(r.concat(a).map((function(e){var r=e.stat,a=e.prime,t=e.red2,c=e.black2,l=e.red3,i=e.black3;return Object(b.a)({stat:r,prime:a,red2:t,black2:c,red3:l,black3:i},e)})))}(r)},options:W.sort((function(e,r){return-r.type.localeCompare(e.type)})),groupBy:function(e){return e.type},getOptionLabel:function(e){return e.title},style:{width:300},renderInput:function(e){return Object(F.jsx)(o.a,Object(b.a)(Object(b.a)({},e),{},{label:"Gear",variant:"outlined"}))}})})}),Object(F.jsx)(p.a,{children:Object(F.jsxs)(m.a,{expanded:ce,children:[Object(F.jsx)(s.a,{expandIcon:Object(F.jsx)(u.a,{}),"aria-label":"Expand","aria-controls":"additional-actions1-content",id:"additional-actions1-header",children:Object(F.jsxs)(n.a,{elevation:3,className:Be.flex,"aria-label":"Acknowledge",onClick:function(e){return e.stopPropagation()},onFocus:function(e){return e.stopPropagation()},children:[Object(F.jsx)(h.a,{id:"lineOne",inputValue:V,onInputChange:function(e,r){if(G(r),""!==r){var a=be.find((function(e){return e.stat===r}));ue(a.red1),je(a.black1)}},options:be.sort((function(e,r){return-r.stat.localeCompare(e.stat)})),getOptionLabel:function(e){return e.stat},style:{width:300,padding:10},renderInput:function(e){return Object(F.jsx)(o.a,Object(b.a)(Object(b.a)({},e),{},{label:"Line 1",variant:"outlined"}))}}),Object(F.jsx)(h.a,{id:"lineTwo",inputValue:z,onInputChange:function(e,r){if(K(r),""!==r){var a=ne.find((function(e){return e.stat===r}));Oe(a.red2),we(a.black2)}},options:ne.sort((function(e,r){return r.prime.localeCompare(e.prime)})),groupBy:function(e){return e.prime},getOptionLabel:function(e){return e.stat},style:{width:300,padding:10},renderInput:function(e){return Object(F.jsx)(o.a,Object(b.a)(Object(b.a)({},e),{},{label:"Line 2",variant:"outlined"}))}}),Object(F.jsx)(h.a,{id:"lineThree",inputValue:Q,onInputChange:function(e,r){if(Y(r),""!==r){var a=ne.find((function(e){return e.stat===r}));Ce(a.red3),Ue(a.black3)}},options:ne.sort((function(e,r){return r.prime.localeCompare(e.prime)})),groupBy:function(e){return e.prime},getOptionLabel:function(e){return e.stat},style:{width:300,padding:10},renderInput:function(e){return Object(F.jsx)(o.a,Object(b.a)(Object(b.a)({},e),{},{label:"Line 3",variant:"outlined"}))}})]})}),Object(F.jsx)(p.a,{children:Object(F.jsxs)("div",{className:Be.cubesAccordion,children:[Object(F.jsxs)(m.a,{children:[Object(F.jsx)(s.a,{expandIcon:Object(F.jsx)(u.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(F.jsx)(P.a,{className:Be.heading,children:"Red Cubes: ".concat(he*xe*Le*100,"%")})}),Object(F.jsx)(p.a,{children:Object(F.jsx)(P.a,{color:"textSecondary",children:"SUSUSUUSUSUUSS"})})]}),Object(F.jsxs)(m.a,{children:[Object(F.jsx)(s.a,{expandIcon:Object(F.jsx)(u.a,{}),"aria-controls":"panel1a-content",id:"panel1a-header",children:Object(F.jsx)(P.a,{className:Be.heading,children:"Black Cubes: ".concat(fe*Ie*Ee*100,"%")})}),Object(F.jsx)(p.a,{children:Object(F.jsx)(P.a,{color:"textSecondary",children:"SUSUSUUSUSUUSUS"})})]})]})})]})})]})})}var G=function(){return Object(F.jsx)("div",{className:"App",children:Object(F.jsx)(V,{})})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,121)).then((function(r){var a=r.getCLS,t=r.getFID,c=r.getFCP,l=r.getLCP,i=r.getTTFB;a(e),t(e),c(e),l(e),i(e)}))};i.a.render(Object(F.jsx)(c.a.StrictMode,{children:Object(F.jsx)(G,{})}),document.getElementById("root")),J()}},[[70,1,2]]]);
//# sourceMappingURL=main.ce737d99.chunk.js.map