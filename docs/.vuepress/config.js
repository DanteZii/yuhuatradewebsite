module.exports = {
    head: [
        ['link', { rel: 'icon', href: '/yuhuatrade-icon-title.png' }]
    ],
    ga: 'UA-77121069-3',
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
    head: [
        ['link', { rel: 'icon', href: `/hero.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#387BBC' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/hero.svg', color: '#387BBC' }],
        ['meta', { name: 'msapplication-TileImage', content: '/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
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
                        '/Purchase/Shell'
                    ]
            },
                {
                    title: 'AquaticProcessingSeries',
                    collapsable: false,
                    children: [
                        '/SeafoodProcessing/1Other',
                        '/SeafoodProcessing/2CodFilletSeries',
                        '/SeafoodProcessing/3SquidSeries',
                        '/SeafoodProcessing/4SushiSeries'
                    ]
                },
                {
                    title: 'VegetableProcessingSeries',
                    collapsable: false,
                    children: [
                        '/VegetableProcessing/',
                        '/VegetableProcessing/2Fungus'
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
                                '/zh/Purchase/Shell'
                            ]
                        },
                        {
                            title: '水产加工系列',
                            collapsable: false,
                            children: [
                                '/zh/SeafoodProcessing/1Other',
                                '/zh/SeafoodProcessing/2CodFilletSeries',
                                '/zh/SeafoodProcessing/3SquidSeries',
                                '/zh/SeafoodProcessing/4SushiSeries'
                            ]
                        },
                        {
                            title: '蔬菜加工系列',
                            collapsable: false,
                            children: [
                                '/zh/VegetableProcessing/',
                                '/zh/VegetableProcessing/2Fungus'
                            ]
                        },
                        {
                            title: '24小时直达',
                            collapsable: false,
                            children: [
                                '/zh/24HoursAirCargo/Farming',
                                '/zh/24HoursAirCargo/Wild',
                                '/zh/24HoursAirCargo/Season'
                            ]
                        }
                    ],
                }
            }
        }
}



