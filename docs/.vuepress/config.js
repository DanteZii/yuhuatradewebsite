module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/hero' }]
    ],
    serviceWorker: true,
    activeHeaderLinks: true,
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'YuhuaTrade',
            description: 'We are an industry-leading, online and offline processing and trading company that integrates global sourcing, processing (OEM) and sales.'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: '裕华工贸',
            description: '我们是一家集全球采购、加工（可OEM）及销售于一体的线上及线下加工与贸易公司'
        }
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Recommend',
                collapsable: true,
                children: [
                    '/Recommend/'
                ]
            },
                {
                    title: 'ProcurementProducts',
                    collapsable: false,
                    children: [
                        '/Purchase/',
                        '/Purchase/Shell',
                        '/Purchase/Shrimp'
                    ]
            },
                {
                    title: 'AquaticProcessingSeries',
                    collapsable: false,
                    children: [
                        '/SeafoodProcessing/',
                        '/SeafoodProcessing/2TempuraShrimp',
                        '/SeafoodProcessing/3CodFilletSeries',
                        '/SeafoodProcessing/4SquidSeries',
                        '/SeafoodProcessing/5SushiSeries'
                    ]
                },
                {
                    title: 'VegetableProcessingSeries',
                    collapsable: false,
                    children: [
                        '/VegetableProcessing/',
                        '/VegetableProcessing/2Fungus',
                        '/VegetableProcessing/3Fruit'
                    ]
                },
                {
                    title: '24HoursAirCargo',
                    collapsable: false,
                    children: [
                        '/24HoursAirCargo/Farming',
                        '/24HoursAirCargo/Wild',
                        '/24HoursAirCargo/Season'
                    ]
                }
            ],
            // sidebar: {
            //     '/Product/': genSidebarConfig('ProductList')
            // },
            locales: {
                '/': {
                    selectText: '选择语言',
                    label: 'English',
                    editLinkText: 'Edit this page on GitHub',
                    serviceWorker: {
                        updatePopup: {
                            message: "New content is available.",
                            buttonText: "Refresh"
                        }
                    },
                    algolia: {

                    },
                        
                    nav: [
                        { text: 'Home', link: '/' },
                        { text: 'Product', link: '/Recommend/' },
                        { text: 'About', link: '/About/' }
                    ],
                },
                '/zh/': {
                    // 多语言下拉菜单的标题
                    selectText: 'Languages',
                    // 该语言在下拉菜单中的标签
                    label: '简体中文',
                    // 编辑链接文字
                    editLinkText: '在 GitHub 上编辑此页',
                    // Service Worker 的配置
                    serviceWorker: {
                        updatePopup: {
                            message: "发现新内容可用.",
                            buttonText: "刷新"
                        }
                    },
                    // 当前 locale 的 algolia docsearch 选项
                    algolia: {},
                    nav: [
                        { text: '主页', link: '/zh/' },
                        { text: '产品', link: '/zh/Recommend/' },
                        { text: '关于', link: '/zh/About/' }
                    ],
                    sidebar: [
                        {
                            title: '推荐产品',
                            collapsable: true,
                            children: [
                                '/zh/Recommend/'
                            ]
                        },
                        {
                            title: '采购类产品',
                            collapsable: false,
                            children: [
                                '/zh/Purchase/',
                                '/zh/Purchase/Shell',
                                '/zh/Purchase/Shrimp'
                            ]
                        },
                        {
                            title: '水产加工系列',
                            collapsable: false,
                            children: [
                                '/zh/SeafoodProcessing/',
                                '/zh/SeafoodProcessing/2TempuraShrimp',
                                '/zh/SeafoodProcessing/3CodFilletSeries',
                                '/zh/SeafoodProcessing/4SquidSeries',
                                '/zh/SeafoodProcessing/5SushiSeries',
                                '/zh/SeafoodProcessing/6SmokedSalmonFillet'
                            ]
                        },
                        {
                            title: '蔬菜加工系列',
                            collapsable: false,
                            children: [
                                '/zh/VegetableProcessing/',
                                '/zh/VegetableProcessing/2Fungus',
                                '/zh/VegetableProcessing/3Fruit'
                            ]
                        }
                    ],
                }
            }
        }
}



