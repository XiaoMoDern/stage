const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


// webpack配置文件（遵循commonjs规范）
module.exports = {
    // 入口：webpack分析项目依赖的起点
    entry: './src/index.js',

    // 测试服务器：只在开发环境有效
    devServer: {
        // 服务器根目录
        contentBase: './src',
        open: true
    },

    // 加载器
    module: {
        rules: [
            // 配置文件编译规则（每一种文件必须配置一个loader）
            {
                test: /\.jsx?$/,

                // include/exclude包含/排除
                // exclude:'node_modules',
                include: path.resolve(__dirname, './src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            ["import", {
                                "libraryName": "antd",
                                "libraryDirectory": "es",
                                "style": "css" // `style: true` 会加载 less 文件
                            }]
                        ]
                    }
                },
                // 简写
                //loader:'babel-loader'
            },

            // css加载器：解析css -> 往html中写入style标签
            // 注意顺序先执行'css-loader'再执行'style-loader'
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
            // 如果有用scss的话需要安装scss-loader
            // {
            //     test: /\.scss$/,
            //     use: ['style-loader', 'css-loader',scss-loader]
            // }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            // 指定模板文件
            template: './src/template.html',
            // filename:'main.html'
        })
    ]
}