(function () {
    const myChart = echarts.init(document.querySelector('.bar .chart'))
    const options = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: 10,
            left: 0,
            right: 0,
            bottom: '4%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisTick: {
                alignWithLabel: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 12
            },
            axisLine: {
                show: false
            },
            data: ['语文', '数学', '英语', '政治', '历史', '地理', '物理', '化学', '生物']
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: 'rgba(255,255,255,.6)',
                fontSize: 12
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            },
            axisTick: {
                show: true,
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(255,255,255,.1)'
                }
            }
        },
        series: [
            {
                name: '成绩',
                type: 'bar',
                barWidth: '35%',
                itemStyle: {
                    // barBorderRadius:10,
                    barBorderRadius: [5, 5, 0, 0]
                },
                data: [110, 114, 107, 92, 97, 90, 89, 95, 98]
            }
        ]
    }
    myChart.setOption(options)
    window.addEventListener('resize', () => {
        myChart.resize()
    }, false)
})();

(function () {
    const myChart = echarts.init(document.querySelector('.bar2 .chart'))
    const color = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    const option = {
        grid: {
            top: '10%',
            left: '12%',
            bottom: '10%',
            // containLabel: true 
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                },
                inverse: true,
                data: ["德", "智", "体", "美", "劳"]
            },
            {
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                },
                inverse: true,
                data: [80, 85, 91, 76, 88]
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: 20,
                    color: params => color[params.dataIndex]
                },
                label: {
                    show: true,
                    color: '#fff',
                    position: 'inside',
                    formatter: '{c}%'
                },
                yAxisIndex: 0,
                data: [80, 85, 91, 76, 88]
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    barBorderRadius: 20,
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3
                },
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100]
            }
        ]
    }
    myChart.setOption(option)
    window.addEventListener('resize', () => {
        myChart.resize()
    }, false)
})();

(function () {
    const myChart = echarts.init(document.querySelector('.line .chart'))
    const yearData = [
        {
            year: '2021',  // 年份
            data: [  // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: '2022',  // 年份
            data: [  // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ]
    const option = {
        color: ['#00f2f1', '#ed3f35'],
        tooltip: {
            trigger: 'axis'
        },
        toolbox: {
            show: true,
            top: '-2%',
            right: '2%',
            feature: {
                magicType: {
                    show: true,
                    type: ['stack', 'tiled']
                }
            }
        },
        legend: {
            textStyle: {
                color: '#4c9bfd'
            },
            right: '10%',
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
            show: true,
            borderColor: '#012f4a'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            axisLine: {
                show: false
            },
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#4c9bfd'
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a'
                }
            },
        },
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                smooth: true,
                data: yearData[0].data[0]
            },
            {
                name: '新增游客',
                type: 'line',
                smooth: true,
                data: yearData[0].data[1]
            }
        ]
    }
    myChart.setOption(option)
    window.addEventListener('resize', () => {
        myChart.resize()
    }, false)
    document.querySelectorAll('.line h2 a').forEach((item, index) => {
        item.addEventListener('click', function () {
            option.series[0].data = yearData[index].data[0]
            option.series[1].data = yearData[index].data[1]
            myChart.setOption(option)
        })
    });
})();

(function () {
    const myChart = echarts.init(document.querySelector('.line2 .chart'))
    const option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        toolbox: {
            show: true,
            top: '-2%',
            right: '2%',
            feature: {
                magicType: {
                    show: true,
                    type: ['stack', 'tiled']
                }
            }
        },
        legend: {
            textStyle: {
                color: 'rgba(255,255,255,.5)',
                fontSize: 12
            },
        },
        grid: {
            top: 30,
            left: 10,
            right: 10,
            bottom: 10,
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"]
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(255,255,255,.2)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }
        ],
        series: [
            {
                name: '播放量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#0184d5',
                    width: 2
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(1, 132, 213, .4)'
                        },
                        {
                            offset: .8,
                            color: 'rgba(1, 132, 213, .1)'
                        }
                    ], false),
                    shadowColor: 'rgba(0, 0, 0, .1)'
                },
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                    color: '#0184d5',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12
                },
                emphasis: {
                    focus: 'series'
                },
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40]
            },
            {
                name: '转发量',
                type: 'line',
                smooth: true,
                lineStyle: {
                    color: '#00d887',
                    width: 2
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(0, 216, 135, .4)'
                        },
                        {
                            offset: 0.8,
                            color: 'rgba(0, 216, 135, .1)'
                        }
                    ], false),
                    shadowColor: 'rgba(0, 0, 0, .1)'
                },
                symbol: 'circle',
                symbolSize: 8,
                showSymbol: false,
                itemStyle: {
                    color: '#00d887',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 12
                },
                emphasis: {
                    focus: 'series'
                },
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20]
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', () => {
        myChart.resize()
    }, false)
})();

(function () {
    const myChart = echarts.init(document.querySelector('.pie .chart'))
    const option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item'
        },
        toolbox: {
            show: true,
            top: '-2%',
            right: '2%',
            feature: {
                mark: { show: true },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: { show: true },
            }
        },
        legend: {
            bottom: 0,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255, 255, 255, .5)',
                fontSize: 12
            }
        },
        series: [
            {
                name: '年龄分布',
                type: 'pie',
                radius: ['40%', '60%'],
                center: ['50%', '45%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ]
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();

(function () {
    const myChart = echarts.init(document.querySelector('.pie2 .chart'))
    const option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            /**
             * 饼图、仪表盘、漏斗图: 
             * {a}（系列名称）
             * {b}（数据项名称）
             * {c}（数值）
             * {d}（百分比）
             */
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            bottom: 0,
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: 'rgba(255, 255, 255, .5)',
                fontSize: 12
            }
        },
        toolbox: {
            show: true,
            top: '-2%',
            right: '2%',
            feature: {
                mark: { show: true },
                dataView: {
                    show: true,
                    readOnly: false
                },
                restore: { show: true },
            }
        },
        series: [
            {
                name: '地区分布',
                type: 'pie',
                radius: ['10%', '70%'],
                roseType: 'radius',
                label: {
                    fontSize: 10,
                    color: 'inherit'
                },
                labelLine: {
                    length: 6,
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener('resize', () => {
        myChart.resize()
    })
})();
