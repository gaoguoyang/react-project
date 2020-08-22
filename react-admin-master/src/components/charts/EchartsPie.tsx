/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import ReactEcharts from 'echarts-for-react';

// const option = {
//     title: {
//         text: 'Customized Pie',
//         left: 'center',
//         top: 20,
//         textStyle: {
//             color: '#777',
//         },
//     },

//     tooltip: {
//         trigger: 'item',
//         formatter: '{a} <br/>{b} : {c} ({d}%)',
//     },

//     visualMap: {
//         show: false,
//         min: 80,
//         max: 600,
//         inRange: {
//             colorLightness: [0, 1],
//         },
//     },
//     series: [
//         {
//             name: '访问来源',
//             type: 'pie',
//             radius: '55%',
//             center: ['50%', '50%'],
//             data: [
//                 { value: 335, name: '直接访问' },
//                 { value: 310, name: '邮件营销' },
//                 { value: 274, name: '联盟广告' },
//                 { value: 235, name: '视频广告' },
//                 { value: 400, name: '搜索引擎' },
//             ].sort(function(a, b) {
//                 return a.value - b.value;
//             }),
//             roseType: 'angle',
//             label: {
//                 normal: {
//                     textStyle: {
//                         color: '#777',
//                     },
//                 },
//             },
//             labelLine: {
//                 normal: {
//                     lineStyle: {
//                         color: '#777',
//                     },
//                     smooth: 0.2,
//                     length: 10,
//                     length2: 20,
//                 },
//             },
//             itemStyle: {
//                 normal: {
//                     color: '#c23531',
//                     shadowBlur: 200,
//                     shadowColor: '#777',
//                 },
//             },

//             animationType: 'scale',
//             animationEasing: 'elasticOut',
//             animationDelay: function(idx: any) {
//                 return Math.random() * 200;
//             },
//         },
//     ],
// };
const option = {
    title: {
        text: '',
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
const EchartsPie = () => (
    <ReactEcharts
        option={option}
        style={{ height: '300px', width: '100%' }}
        className={'react_for_echarts'}
    />
);

export default EchartsPie;
