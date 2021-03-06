var areaList = {'北京':[['北京','北京']],
'上海':[['上海','上海']],
'天津':[['天津','天津']],
'重庆':[['重庆','重庆']],
'福建':[['厦门','厦门'],['泉州','泉州'],['福州','福州'],['宁德','宁德'],['莆田','莆田'],['晋江','晋江'],['漳州','漳州'],['龙岩','龙岩'],['三明','三明'],['南平','南平']],
'广东':[['广州','广州'],['深圳','深圳'],['韶关','韶关'],['惠州','惠州'],['梅州','梅州'],['汕头','汕头'],['珠海','珠海'],['佛山','佛山'],['肇庆','肇庆'],['湛江','湛江'],['中山','中山'],['河源','河源'],['清远','清远'],['顺德','顺德'],['云浮','云浮'],['潮州','潮州'],['东莞','东莞'],['汕尾','汕尾'],['潮阳','潮阳'],['阳江','阳江'],['揭西','揭西']],
'浙江':[['衢州','衢州'],['杭州','杭州'],['湖州','湖州'],['嘉兴','嘉兴'],['宁波','宁波'],['绍兴','绍兴'],['台州','台州'],['温州','温州'],['丽水','丽水'],['金华','金华'],['舟山','舟山']],
'河北':[['邯郸','邯郸'],['石家庄','石家庄'],['保定','保定'],['张家口','张家口'],['承德','承德'],['唐山','唐山'],['廊坊','廊坊'],['沧州','沧州'],['衡水','衡水'],['邢台','邢台'],['秦皇岛','秦皇岛']],
'四川':[['成都','成都'],['涪陵','涪陵'],['重庆','重庆'],['攀枝花','攀枝花'],['自贡','自贡'],['永川','永川'],['绵阳','绵阳'],['南充','南充'],['达县','达县'],['万县','万县'],['遂宁','遂宁'],['广安','广安'],['巴中','巴中'],['泸州','泸州'],['宜宾','宜宾'],['内江','内江'],['乐山','乐山'],['西昌','西昌'],['雅安','雅安'],['康定','康定'],['马尔康','马尔康'],['德阳','德阳'],['广元','广元'],['泸州','泸州']],
'湖北':[['武汉','武汉'],['襄阳','襄阳'],['鄂州','鄂州'],['孝感','孝感'],['黄州','黄州'],['黄石','黄石'],['咸宁','咸宁'],['荆沙','荆沙'],['宜昌','宜昌'],['恩施','恩施'],['十堰','十堰'],['随枣','随枣'],['荆门','荆门'],['江汉','江汉']],
'江苏':[['南京','南京'],['无锡','无锡'],['镇江','镇江'],['苏州','苏州'],['南通','南通'],['扬州','扬州'],['盐城','盐城'],['徐州','徐州'],['淮阴','淮阴'],['淮安','淮安'],['连云港','连云港'],['常州','常州'],['泰州','泰州']],
'湖南':[['岳阳','岳阳'],['长沙','长沙'],['湘潭','湘潭'],['株州','株州'],['衡阳','衡阳'],['郴州','郴州'],['常德','常德'],['益阳','益阳'],['娄底','娄底'],['邵阳','邵阳'],['吉首','吉首'],['张家界','张家界'],['怀化','怀化'],['永州冷','永州冷']],
'山东':[['菏泽','菏泽'],['济南','济南'],['青岛','青岛'],['淄博','淄博'],['德州','德州'],['烟台','烟台'],['淮坊','淮坊'],['济宁','济宁'],['泰安','泰安'],['临沂','临沂']],
'安徽':[['滁州','滁州'],['合肥','合肥'],['蚌埠','蚌埠'],['芜湖','芜湖'],['淮南','淮南'],['马鞍山','马鞍山'],['安庆','安庆'],['宿州','宿州'],['阜阳阜阳'],['黄山','黄山'],['淮北','淮北'],['铜陵','铜陵'],['宣城','宣城'],['六安','六安'],['巢湖','巢湖'],['贵池','贵池']],
'河南':[['商丘','商丘'],['郑州','郑州'],['安阳','安阳'],['新乡','新乡'],['许昌','许昌'],['平顶山','平顶山'],['信阳','信阳'],['南阳','南阳'],['开封','开封'],['洛阳','洛阳'],['焦作','焦作'],['鹤壁','鹤壁'],['濮阳','濮阳'],['周口','周口'],['漯河','漯河'],['驻马店','驻马店'],['三门峡','三门峡']],
'江西':[['新余','新余'],['南昌','南昌'],['九江','九江'],['上饶','上饶'],['临川','临川'],['宜春','宜春'],['吉安','吉安'],['赣州','赣州'],['景德镇','景德镇'],['萍乡','萍乡'],['鹰潭','鹰潭']],
'山西':[['忻州','忻州'],['太原','太原'],['大同','大同'],['阳泉','阳泉'],['榆次','榆次'],['长治','长治'],['晋城','晋城'],['临汾','临汾'],['离石','离石'],['运城','运城']],
'甘肃':[['临夏','临夏'],['兰州','兰州'],['定西','定西'],['平凉','平凉'],['西峰','西峰'],['武威','武威'],['张掖','张掖'],['酒泉','酒泉'],['天水','天水'],['甘南州','甘南州'],['白银','白银']],
'黑龙江':[['阿城','阿城'],['哈尔滨','哈尔滨'],['齐齐哈尔','齐齐哈尔'],['牡丹江','牡丹江'],['佳木斯','佳木斯'],['绥化','绥化'],['黑河','黑河'],['加格达奇','加格达奇'],['伊春','伊春'],['大庆','大庆']],
'云南':[['昭通','昭通'],['昆明','昆明'],['大理','大理'],['个旧','个旧'],['曲靖','曲靖'],['保山','保山'],['文山','文山'],['玉溪','玉溪'],['楚雄','楚雄'],['思茅','思茅'],['景洪','景洪'],['潞西','潞西'],['东川','东川'],['临沧','临沧'],['六库','六库'],['中甸','中甸'],['丽江','丽江']],
'宁夏':[['银川','银川'],['石嘴山','石嘴山'],['吴忠','吴忠'],['固原','固原']],
'吉林':[['长春','长春'],['吉林','吉林'],['延吉','延吉'],['四平','四平'],['通化','通化'],['白城','白城'],['辽源','辽源'],['松原','松原'],['浑江','浑江'],['珲春','珲春']],
'广西':[['防城港','防城港'],['南宁','南宁'],['柳州','柳州'],['桂林','桂林'],['梧州','梧州'],['玉林','玉林'],['百色','百色'],['钦州','钦州'],['河池','河池'],['北海','北海']],
'辽宁':[['沈阳','沈阳'],['铁岭','铁岭'],['大连','大连'],['鞍山','鞍山'],['抚顺','抚顺'],['本溪','本溪'],['丹东','丹东'],['锦州','锦州'],['营口','营口'],['阜新','阜新'],['辽阳','辽阳'],['朝阳','朝阳'],['盘锦','盘锦'],['葫芦岛','葫芦岛']],
'内蒙古':[['海拉尔','海拉尔'],['呼和浩特','呼和浩特'],['包头','包头'],['乌海','乌海'],['集宁','集宁'],['通辽','通辽'],['赤峰','赤峰'],['东胜','东胜'],['临河','临河'],['锡林浩特','锡林浩特'],['乌兰浩特','乌兰浩特'],['阿拉善左旗','阿拉善左旗']],
'贵州':[['贵阳','贵阳'],['遵义','遵义'],['安顺','安顺'],['都均','都均'],['凯里','凯里'],['铜仁','铜仁'],['毕节','毕节'],['六盘水','六盘水'],['兴义','兴义']],
'陕西':[['西安','西安'],['咸阳','咸阳'],['延安','延安'],['榆林','榆林'],['渭南','渭南'],['商洛','商洛'],['安康','安康'],['汉中','汉中'],['宝鸡','宝鸡'],['铜川','铜川']],
'青海':[['西宁','西宁'],['海东','海东'],['同仁','同仁'],['共和','共和'],['玛沁','玛沁'],['玉树玉树'],['德令哈','德令哈']],
'海南':[['儋州','儋州'],['海口','海口'],['三亚','三亚']],
'台湾':[['台北','台北'],['高雄','高雄'],['基隆','基隆'],['台中','台中'],['台南','台南'],['新竹','新竹'],['嘉义','嘉义']],
'香港':[['香港','香港']],
'澳门':[['澳门','澳门']],
'西藏':[['拉萨','拉萨'],['日喀则','日喀则'],['山南','山南']],
'新疆':[['乌鲁木齐','乌鲁木齐'],['克拉玛依','克拉玛依'],['吐鲁番','吐鲁番'],['喀什','喀什'],['阿图什','阿图什'],['库尔勒','库尔勒']],
'其他地区':[['海外','海外'],['火星','火星']]
};

//初始化
function city_initialize(_p, _c, zone) {
    _p.length = 0;
    _c.length = 0;
	_p.options.add(new Option('请选择省份','请选择'));
    for(name in areaList) {
        _p.options.add(new Option(name,name));
    }
    _p.onchange = function() { window.setTimeout(function(){showCity(_p, _c);}, 10);};
	if(zone != "")findarea(zone || 0, _p, _c);
	else _c.options.add(new Option('请选择市/县','请选择'));
}

//二级(城)联动
function showCity(_p, _c) {
    _c.length = 0;
    for(var i = 0, k = _p.options.length; i < k; i++) {
        if(_p.options[i].selected) {
            name = _p.options[i].value;
            break;
        }
    }
	_c.options.add(new Option('请选择市/县','请选择'));
    for(var j = 0, l = areaList[name].length; j < l; j++) {
        _c.options.add(new Option(areaList[name][j][1], areaList[name][j][0]));
    }
    _c.selectedIndex = 0;
}

//下拉选择
function findarea(zone, _p, _c) {
    var _f = false;
    var x = 0;
    for(name in areaList) {
        for(var i = 0, l = areaList[name].length; i < l; i++) {
            if(areaList[name][i][0] == zone) {
                _p.selectedIndex = x + 1;
                _c.length = 0;
				_c.options.add(new Option('请选择市/县','请选择'));
                for(var j = 0; j < l; j++) {
                    _c.options.add(new Option(areaList[name][j][1], areaList[name][j][0]));
                }
                _c.selectedIndex = i + 1;
                _f = true;
                break;
            }
        }
        if(_f) break;
        x++;
    }
    if(!_f) findarea(0, _p, _c);
}

//文本填充
function findareatext(zone, _v) {
    var attr = _v.tagName.toUpperCase == 'INPUT' ? 'value' : 'innerHTML';
    var _f = false;
    for(aname in areaList) {
        for(var i = 0, l = areaList[aname].length; i < l; i++) {
            if(areaList[aname][i][0] == zone) {
                _v[attr] = l > 1 ? (aname + '-' + areaList[aname][i][1]) : areaList[aname][i][1];
                _f = true;
                break;
            }
        }
        if(_f) break;
    }
    if(!_f) findareatext(0, _v);
}
