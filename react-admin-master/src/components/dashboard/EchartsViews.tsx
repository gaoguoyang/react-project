/**
 * Created by hao.cheng on 2017/5/5.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import echarts from 'echarts';

// const option = {
//     title: {
//         text: '最近7天用户访问量',
//         left: '50%',
//         show: false,
//         textAlign: 'center'
//     },
//     tooltip: {
//         trigger: 'axis',
//         axisPointer: {
//             lineStyle: {
//                 color: '#ddd'
//             }
//         },
//         backgroundColor: 'rgba(255,255,255,1)',
//         padding: [5, 10],
//         textStyle: {
//             color: '#7588E4',
//         },
//         extraCssText: 'box-shadow: 0 0 5px rgba(0,0,0,0.3)'
//     },
//     legend: {
//         right: 20,
//         orient: 'vertical',
//     },
//     xAxis: {
//         type: 'category',
//         data: ['2017-05-01', '2017-05-02', '2017-05-03', '2017-05-04', '2017-05-05', '2017-05-06','2017-05-07'],
//         boundaryGap: false,
//         splitLine: {
//             show: true,
//             interval: 'auto',
//             lineStyle: {
//                 color: ['#D4DFF5']
//             }
//         },
//         axisTick: {
//             show: false
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#609ee9'
//             }
//         },
//         axisLabel: {
//             margin: 10,
//             textStyle: {
//                 fontSize: 10
//             }
//         }
//     },
//     yAxis: {
//         type: 'value',
//         splitLine: {
//             lineStyle: {
//                 color: ['#D4DFF5']
//             }
//         },
//         axisTick: {
//             show: false
//         },
//         axisLine: {
//             lineStyle: {
//                 color: '#609ee9'
//             }
//         },
//         axisLabel: {
//             margin: 0,
//             textStyle: {
//                 fontSize: 8
//             }
//         }
//     },
//     series: [{
//         name: '昨日',
//         type: 'line',
//         smooth: true,
//         showSymbol: false,
//         symbol: 'circle',
//         symbolSize: 6,
//         data: ['1200', '1400', '808', '811', '626', '488', '1600'],
//         areaStyle: {
//             normal: {
//                 color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//                     offset: 0,
//                     color: 'rgba(216, 244, 247,1)'
//                 }, {
//                     offset: 1,
//                     color: 'rgba(216, 244, 247,1)'
//                 }], false)
//             }
//         },
//         itemStyle: {
//             normal: {
//                 color: '#58c8da'
//             }
//         },
//         lineStyle: {
//             normal: {
//                 width: 3
//             }
//         }
//     }]
// };
const option = {
    title: {
        text: '111',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    label: {
        normal: {
            show: true,
            textStyle: {
                fontSize: 12,
            },
        },
    },
    legend: {
        x: 'center',
        show: false,
        data: ['朋友', '战友', '亲戚'],
    },
    series: [
        {
            type: 'graph',
            layout: 'force',
            symbolSize: 45,
            focusNodeAdjacency: true,
            roam: true,
            categories: [
                {
                    name: '朋友',
                    itemStyle: {
                        normal: {
                            color: '#009800',
                        },
                    },
                },
                {
                    name: '战友',
                    itemStyle: {
                        normal: {
                            color: '#4592FF',
                        },
                    },
                },
                {
                    name: '亲戚',
                    itemStyle: {
                        normal: {
                            color: '#3592F',
                        },
                    },
                },
            ],
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 12,
                    },
                },
            },
            force: {
                repulsion: 1000,
            },
            edgeSymbolSize: [4, 50],
            edgeLabel: {
                normal: {
                    show: true,
                    textStyle: {
                        fontSize: 10,
                    },
                    formatter: '{c}',
                },
            },
            data: [
                {
                    name: '徐贱云',
                    draggable: true,
                },
                {
                    name: '冯可梁',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '邓志荣',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '李荣庆',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '郑志勇',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '赵英杰',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '王承军',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '陈卫东',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '邹劲松',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '赵成',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '陈现忠',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '陶泳',
                    category: 1,
                    draggable: true,
                },
                {
                    name: '王德福',
                    category: 1,
                    draggable: true,
                },
            ],
            links: [
                {
                    source: 0,
                    target: 1,
                    category: 0,
                    value: '朋友',
                },
                {
                    source: 0,
                    target: 2,
                    value: '战友',
                },
                {
                    source: 0,
                    target: 3,
                    value: '房东',
                },
                {
                    source: 0,
                    target: 4,
                    value: '朋友',
                },
                {
                    source: 1,
                    target: 2,
                    value: '表亲',
                },
                {
                    source: 0,
                    target: 5,
                    value: '朋友',
                },
                {
                    source: 4,
                    target: 5,
                    value: '姑姑',
                },
                {
                    source: 2,
                    target: 8,
                    value: '叔叔',
                },
                {
                    source: 0,
                    target: 12,
                    value: '朋友',
                },
                {
                    source: 6,
                    target: 11,
                    value: '爱人',
                },
                {
                    source: 6,
                    target: 3,
                    value: '朋友',
                },
                {
                    source: 7,
                    target: 5,
                    value: '朋友',
                },
                {
                    source: 9,
                    target: 10,
                    value: '朋友',
                },
                {
                    source: 3,
                    target: 10,
                    value: '朋友',
                },
                {
                    source: 2,
                    target: 11,
                    value: '同学',
                },
            ],
            lineStyle: {
                normal: {
                    opacity: 0.9,
                    width: 1,
                    curveness: 0,
                },
            },
        },
    ],
};
const EchartsViews = () => (
    <ReactEcharts
        option = {option}
        style={{height: '350px', width: '100%'}}
        className={'react_for_echarts'}
    />
);

export default EchartsViews;