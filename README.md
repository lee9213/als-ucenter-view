## renren-fast-vue
- renren-fast-vue基于vue、element-ui构建开发，实现[renren-fast](https://gitee.com/renrenio/renren-fast)后台管理前端功能，提供一套更优的前端解决方案
- 前后端分离，通过token进行数据交互，可独立部署
- 主题定制，通过scss变量统一一站式定制
- 动态菜单，通过菜单管理统一管理访问路由
- 数据切换，通过mock配置对接口数据／mock模拟数据进行切换
- 发布时，可动态配置CDN静态资源／切换新旧版本
- 演示地址：[http://fast.demo.renren.io](http://fast.demo.renren.io) (账号密码：admin/admin)

![输入图片说明](https://images.gitee.com/uploads/images/2019/0305/133529_ff15f192_63154.png "01.png")
![输入图片说明](https://images.gitee.com/uploads/images/2019/0305/133537_7a1b2d85_63154.png "02.png")


## 说明文档
项目开发、部署等说明都在[wiki](https://github.com/renrenio/renren-fast-vue/wiki)中。


## 更新日志
每个版本的详细更改都记录在[release notes](https://github.com/renrenio/renren-fast-vue/releases)中。



# 安装依赖
# 1
npm install -g cnpm --registry=https://registry.npm.taobao.org
# 2
cnpm install

# 启动服务
npm run dev

# 构建生产环境(默认)
npm run build

# 构建测试环境
npm run build --qa

# 构建验收环境
npm run build --uat

# 构建生产环境
npm run build --prod

开启mock本地模拟数据
通过设置/src/mock/index.js)文件中fnCreate(common, [false])[]中括号中为true／false开启关闭当前模块mock本地模拟数据功能。（默认开启）
通过设置/src/mock/modules/文件下模块isOpen: [false][]中括号中为true／false开启关闭当前api接口mock本地模拟数据功能。（默认开启）


开发时，如何连接后台项目api接口？
修改/static/config/index.js目录文件中 window.SITE_CONFIG['baseUrl'] = '本地api接口请求地址';

 

开发时，如何解决跨域？
修改/config/dev.env.js目录文件中OPEN_PROXY: true开启代理
修改/config/index.js目录文件中proxyTable对象target: '代理api接口请求地址'
重启本地服务
 

开发时，如何提前配置CDN静态资源？
修改/static/config/index-[qa/uat/prod].js目录文件中window.SITE_CONFIG['domain'] = '静态资源cdn地址';

 

构建生成后，发布需要上传哪些文件？
/dist目录下：1805021549（静态资源，18年05月03日15时49分）、config（配置文件）、index.html

 

构建生成后，如何动态配置CDN静态资源？
修改/dist/config/index.js目录文件中window.SITE_CONFIG['domain'] = '静态资源cdn地址';

 

构建生成后，如何动态切换新旧版本？
修改/dist/config/index.js目录文件中 window.SITE_CONFIG['version'] = '旧版本号';