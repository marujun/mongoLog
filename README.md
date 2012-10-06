Mac OS下安装coreseek
参考：http://www.coreseek.cn/products-install/install_on_macosx/

设置环境，升级/安装系统基础依赖包：m4、autoconf、automake、libtool
  
    sudo bash

    #设置路径和中文环境：
    export PATH=/usr/local/bin:$PATH
    export LC_ALL=zh_CN.UTF-8
    export LANG=zh_CN.UTF-8

    curl -O -L http://mirrors.kernel.org/gnu/m4/m4-1.4.13.tar.gz
    tar -xzvf m4-1.4.13.tar.gz
    cd m4-1.4.13
    ./configure --prefix=/usr/local
    sudo make && make install
    cd ..

    curl -O -L http://mirrors.kernel.org/gnu/autoconf/autoconf-2.65.tar.gz
    tar -xzvf autoconf-2.65.tar.gz
    cd autoconf-2.65
    ./configure --prefix=/usr/local
    sudo make && make install
    cd ..

    curl -O -L http://mirrors.kernel.org/gnu/automake/automake-1.11.tar.gz
    tar xzvf automake-1.11.tar.gz
    cd automake-1.11
    ./configure --prefix=/usr/local
    sudo make && make install
    cd ..

    curl -O -L http://mirrors.kernel.org/gnu/libtool/libtool-2.2.10.tar.gz
    tar xzvf libtool-2.2.10.tar.gz
    cd libtool-2.2.10
    ./configure --prefix=/usr/local
    sudo make && make install
    cd ..

安装coreseek：
    ##下载coreseek:(3.2.14为稳定版不是最新版)
        curl -O -L http://www.coreseek.cn/uploads/csft/3.2/coreseek-3.2.14.tar.gz
        tar xzvf coreseek-3.2.14.tar.gz
        cd coreseek-3.2.14

    ##安装mmseg
        cd mmseg-3.2.14
        ./bootstrap
        ./configure --prefix=/usr/local/mmseg3
        sudo make && make install
        cd ..

    ##安装coreseek，(因为使用的是mongodb所以就不安装mysql了)
        cd csft-3.2.14
        sh buildconf.sh
        ./configure --prefix=/usr/local/coreseek  --without-unixodbc --with-mmseg --with-mmseg-includes=/usr/local/mmseg3/include/mmseg/ --with-mmseg-libs=/usr/local/mmseg3/lib/
        sudo make && make install
        cd ..

    ##测试mmseg分词，coreseek搜索（需要预先设置好字符集为zh_CN.UTF-8，确保正确显示中文）
        cd testpack
        cat var/test/test.xml    #此时应该正确显示中文
        /usr/local/mmseg3/bin/mmseg -d /usr/local/mmseg3/etc var/test/test.xml
        /usr/local/coreseek/bin/indexer -c etc/csft.conf --all
        /usr/local/coreseek/bin/search -c etc/csft.conf 网络搜索



Linux下的安装测试参考：http://www.coreseek.cn/products-install/install_on_bsd_linux/