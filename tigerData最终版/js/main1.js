$(function() {
//数字累加函数
var decimal_places = 1;
var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;
//div长度累加函数
function ChangeWidth(eve){
	var len = 0;
	var CommuntTimer = null;
	CommuntTimer = setInterval(function() {
		len+= 0.1;
		eve.data.element.css(eve.data.attr,len + '%');
		if (len >= eve.data.end) {
			clearInterval(CommuntTimer);
		}
	}, eve.data.time)
}			
//div长度累加函数结束

//性别比例
var sexOption; 
sexOption={
	chart: {
			renderTo: 'sex',
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false,
			backgroundColor: null,
			width:640
		},
		credits: {
			enabled: false
		},
		colors: ['#F68E56', '#62DDD0', '#8085e8'],
		title: {
			useHTML: true,
			text: '性别比例',
			style:{
				fontFamily: "微软雅黑",
				fontWeight: 'bold',
				fontSize: '28px',
				color: '#333'}
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance:-40,
					allowPointSelect: true,
					format: '<b>{point.name}</b>: {point.percentage:.1f} %',
					style: {
						fontWeight: 'bold',
						fontSize: '15px',
						color: '#333'
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: '性别比例',
			innerSize: '50%',
			data:[]
		}]
}

//年龄分布
function ageData(data){
	$('#age li').each(function(i){
		$(this).find('hgroup h2').text(data.agelist[i].generation).siblings('p').text('0.0%').animateNumber({
			number: data.agelist[i].percentage * decimal_factor,
			numberStep: function(now, tween) {
				var floored_number = Math.floor(now) / decimal_factor, target = $(tween.elem);
				if (decimal_places > 0) {
			  		floored_number = floored_number.toFixed(decimal_places);
				}
		
					target.text(floored_number + ' %');
				}
			},1800);
		$(this).find('.ageTotal div').on("myFun", {'element':$(this).find('.ageTotal div'),'end':data.agelist[i].percentage,'attr':'width','time':'10'}, ChangeWidth).trigger('myFun');
	});
}

//学历分布
function eduData(data){
		$('#education li').each(function(i){
			$(this).find('p').text(data.educationlist[i].education).siblings('div').text("0.0%").animateNumber({
			number: data.educationlist[i].percentage * decimal_factor,
			numberStep: function(now, tween) {
				var floored_number = Math.floor(now) / decimal_factor, target = $(tween.elem);
				if (decimal_places > 0) {
			  		floored_number = floored_number.toFixed(decimal_places);
				}
		
				target.text(floored_number + ' %');
				}
			},1800);
		$('#education ul li:last').css('margin-right',0);
	});
}
//娱乐--购物
var shopOption; 
shopOption={
	chart: {
			renderTo: 'shopping',
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false,
			backgroundColor: null
		},
		credits: {
			enabled: false
		},
		colors: ['#9A7A31', '#F5C324'],
		title: {
			useHTML: true,
			text: '|<img src="images/shop.png" style="margin-top:-37px;width: 80px;"/>',
			align: 'center',
			verticalAlign: 'middle',
			style: {
                fontSize:'0px'
            }
		},
		tooltip: {
			enabled: false
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: false
				},
				borderWidth: null
			}
		},
		series: [{
			type: 'pie',
			innerSize: '70%',
			data: []
		}]
}	

//娱乐--公园
var parkOption;
parkOption={
	chart: {
		renderTo: 'park',
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
		backgroundColor: null
	},
	credits: {
		enabled: false
	},
	colors: ['#9560A8', '#6E5479'],
	title: {
		useHTML: true,
		text: '|<img src="images/park.png" style="margin-top:-37px;width: 80px"/>',
		align: 'center',
		verticalAlign: 'middle',
		style: {
               fontSize:'0px'
           }
	},
	tooltip: {
		enabled: false
	},
	plotOptions: {
		pie: {
			dataLabels: {
				enabled: false
			},
			borderWidth: null
		}
	},
	series: [{
		type: 'pie',
		innerSize: '70%',
		data: []
	}]
}
	
//娱乐--电影
var movieOption;
movieOption={
	chart: {
		renderTo:'movie',
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
		backgroundColor: null
	},
	credits: {
		enabled: false
	},
	colors: ['#66903A', '#71BC19'],
	title: {
		useHTML: true,
		text: '|<img src="images/film.png" style="width: 80px;margin-top:-37px"/>',
		align: 'center',
		verticalAlign: 'middle',
		style: {
            fontSize:'0px'
        }
	},
	tooltip: {
		enabled: false
	},
	plotOptions: {
		pie: {
			dataLabels: {
				enabled: false
			},
			borderWidth: null
		}
	},
	series: [{
		type: 'pie',
		innerSize: '70%',
		data: []
	}]
}

//娱乐--旅行
var travelOption;
travelOption={
	chart: {
		renderTo:'travel',
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
		backgroundColor: null
	},
	credits: {
		enabled: false
	},
	colors: ['#A55C67', '#EE4A5A'],
	title: {
		useHTML: true,
		text:'|<img src="images/trip.png" style="width: 80px;margin-top:-37px"/>',
		align: 'center',
		verticalAlign: 'middle',
		style: {
            fontSize:'0px'
        }
	},
	tooltip: {
		enabled: false
	},
	plotOptions: {
		pie: {
			dataLabels: {
				enabled: false
			},
			borderWidth: null
		}
	},
	series: [{
		type: 'pie',
		innerSize: '70%',
		data: []
	}]
}

//娱乐--大餐
var eatOption;
eatOption={
	chart: {
		renderTo:'eat',
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
		backgroundColor: null
	},
	credits: {
		enabled: false
	},
	colors: ['#566989', '#5881C1'],
	title: {
		useHTML: true,
		text: '|<img src="images/plate.png" style="width: 80px;margin-top:-37px"/>',
		align: 'center',
		verticalAlign: 'middle',
		style: {
            fontSize:'0px'
        }
	},
	tooltip: {
		enabled: false
	},
	plotOptions: {
		pie: {
			dataLabels: {
				enabled: false
			},
			borderWidth: null
		}
	},
	series: [{
		type: 'pie',
		innerSize: '70%',
		data: []
	}]
}

//娱乐--K歌
var singOption;
singOption={
	chart: {
		renderTo:'sing',
		plotBackgroundColor: null,
		plotBorderWidth: 0,
		plotShadow: false,
		backgroundColor: null

	},
	credits: {
		enabled: false
	},
	colors: ['#ED72A1', '#986B7F'],
	title: {
		useHTML: true,
		text: '<img src="images/singer.png" style="width: 80px;margin-top:-37px"/>',
		align: 'center',
		verticalAlign: 'middle',
		style: {
            fontSize:'0px'
        }
	},
		
	tooltip: {
		enabled: false
	},
	plotOptions: {
		pie: {
			dataLabels: {
				enabled: false
			},
			borderWidth: null
		}
	},
	series: [{
		type: 'pie',
		innerSize: '70%',
		data: []
	}]
}

//活跃手机占有率排名
function phonemodelData(data){
	$('#phonemodel li').each(function(i){
		$(this).find('.RankNum').text(i+1).siblings('.phoneName').find("p").eq(0).text(data.phonemodellist[i].Brand+'/'+data.phonemodellist[i].model).siblings('p').text(data.phonemodellist[i].percentage+'%');
	});
	
	$("#phonemodel li").eq(0).find('.RankNum').css('background','#E40200');
	$("#phonemodel li").eq(1).find('.RankNum').css('background','#E40200');
	$("#phonemodel li").eq(2).find('.RankNum').css('background','#E40200');
	$("#phonemodel li").eq(0).find('.phoneName').css({'background':' #E40200','width': '82%'});
	$("#phonemodel li").eq(1).find('.phoneName').css({'background':' #F59505','width': '78%'});
	$("#phonemodel li").eq(2).find('.phoneName').css({'background':' #FBCC00','width': '72%'});
	$("#phonemodel li").eq(3).find('.phoneName').css({'background':' #F9DE00','width': '68%'});
	$("#phonemodel li").eq(4).find('.phoneName').css({'background':' #F7CEB2','width': '62%'});
	$("#phonemodel li").eq(5).find('.phoneName').css({'background':' #F0DA00','width': '58%'});
	$("#phonemodel li").eq(6).find('.phoneName').css({'background':' #E7E737','width': '52%'});
	$("#phonemodel li").eq(7).find('.phoneName').css({'background':' #C2DB3B','width': '48%'});
	$("#phonemodel li").eq(8).find('.phoneName').css({'background':' #98CB4B','width': '42%'});
	$("#phonemodel li").eq(9).find('.phoneName').css({'background':' #6EBA18','width': '38%'});
};

//操作系统占比
var osvOption;
osvOption={
        chart: {
        	renderTo: 'OS',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            width:640
        },
        title: {
            text: '手机操作系统占比情况',
            style: {
				fontFamily: "微软雅黑",
				fontWeight: 'bold',
				fontSize: '28px',
				color: '#333'

			}
        },
        credits: {
			enabled: false
		},
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        colors: ['#00A3D7', '#6EBB46', '#FF6A00', '#E32400', '#7078CA','#1DAEDD', '#F8C921', '#FF7E22'],
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                
                dataLabels: {
                    enabled: true,
			    	distance:-40,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
						color: '#333',
						fontSize: '16px'
					}
                }
            }
        },
        series: [{
            type: 'pie',
            name: '手机操作系统占比',
            data: []	
        }]
};
//分辨率 
var dpiOption;
dpiOption={
    chart: {
    	renderTo:'dpi',
        type: 'column',
        backgroundColor:null
    },
    title: {
        text: '活跃用户分辨率情况（前10）',
        style: {
			fontFamily: "微软雅黑",
			fontWeight: 'bold',
			fontSize: '28px',
			color: '#333'
		}
    },
   	credits: {
		enabled: false
	},
	xAxis: {
        categories:[],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text:null
        },
        gridLineDashStyle: 'longdash'
    },
    legend: {
        enabled: false
    },
    colors: ['#7078CA','#4CCDFE','#8CCF69','#FEB55C','#FB7154','#999691'],
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
        series: {
            borderWidth: 0,
            colorByPoint: true,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },
    series: [{
        name: '手机分辨率占比',
        data: []
	}]
};

$.ajax({
	url : "http://192.168.11.243:8080/tigerdata/userdata",
	type : "get",
	dataType : "jsonp",
	jsonpCallback: 'callback',
	async: true,
	success: function (data) {
		$(".loading").css('display','block');
		
		$(".dataTime").text("数据最后更新于:"+data.lastupdata);
		
		//性别比例
		sexOption.series[0].data = [{name: '女性',y: data.sex.male},{name: '男性',y: data.sex.famale}];
        sexChart = new Highcharts.Chart(sexOption);
        
        //年龄分布
        $("#agelist").tmpl(data).appendTo('#age ul');
        ageData(data);
		
        
        //学历分布
        $("#educationlist").tmpl(data).appendTo('#education ul');
        eduData(data);
        
        // 娱乐--购物
		shopOption.series[0].data = [data.hobbylist[0].percentage,100-data.hobbylist[0].percentage];
        shopChart = new Highcharts.Chart(shopOption);
		$('.shoppingNum').html(data.hobbylist[0].percentage + '%');
		
		//娱乐--公园
		parkOption.series[0].data = [data.hobbylist[1].percentage,100-data.hobbylist[1].percentage];
        parkChart = new Highcharts.Chart(parkOption);
		$('.parkNum').html(data.hobbylist[1].percentage + '%');
		
		//娱乐--电影
		movieOption.series[0].data = [data.hobbylist[2].percentage,100-data.hobbylist[2].percentage];
        movieChart = new Highcharts.Chart(movieOption);			            
        $('.movieNum').html(data.hobbylist[2].percentage + '%');
        
        //娱乐--旅行
        travelOption.series[0].data = [data.hobbylist[3].percentage,100-data.hobbylist[3].percentage];
        traveChart = new Highcharts.Chart(travelOption);			            
		$('.travelNum').html(data.hobbylist[3].percentage + '%');
		
		//娱乐--大餐
		eatOption.series[0].data = [data.hobbylist[4].percentage,100-data.hobbylist[4].percentage];
        eatChart = new Highcharts.Chart(eatOption);
		$('.eatNum').html(data.hobbylist[4].percentage + '%');
		
		//娱乐--K歌
		singOption.series[0].data = [data.hobbylist[5].percentage,100-data.hobbylist[5].percentage];
        singChart = new Highcharts.Chart(singOption);
		$('.singNum').html(data.hobbylist[5].percentage + '%');
		
		//活跃手机型号占有率排名
		$("#phonemodellist").tmpl(data).appendTo('#phonemodel ul');
		phonemodelData(data);
		//操作系统
		var osvAttr1=[];
		for (var i = 0; i < data.osvlist.length; i++) {
			var osvAttr2=[];
			osvAttr2.push(data.osvlist[i].osversion);
			osvAttr2.push(data.osvlist[i].percentage);
			osvAttr1.push(osvAttr2);
		}
		osvOption.series[0].data =osvAttr1;
		osvChart = new Highcharts.Chart(osvOption);

   		//分辨率
        var psrScreenAttr=[];
		var psrPerAttr=[];
		for (var i = 0; i < data.psrlist.length; i++) {
		    psrScreenAttr.push(data.psrlist[i].screenresolution);
		    psrPerAttr.push(data.psrlist[i].percentage);
		}
        dpiOption.xAxis.categories = psrScreenAttr;
        dpiOption.series[0].data = psrPerAttr;
        dpiChart = new Highcharts.Chart(dpiOption);
	},
	complete:function(data){
		$(".loading").css('display','none');
	}
});
});
