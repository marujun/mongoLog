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
    make && make install
    cd ..

    curl -O -L http://mirrors.kernel.org/gnu/autoconf/autoconf-2.65.tar.gz
    tar -xzvf autoconf-2.65.tar.gz
    cd autoconf-2.65
    ./configure --prefix=/usr/local
    make && make install
    cd ..

    curl -O -L http://mirrors.kernel.org/gnu/automake/automake-1.11.tar.gz
    tar xzvf automake-1.11.tar.gz
    cd automake-1.11
    ./configure --prefix=/usr/local
    make && make install
    cd ..

    curl -O -L http://mirrors.kernel.org/gnu/libtool/libtool-2.2.10.tar.gz
    tar xzvf libtool-2.2.10.tar.gz
    cd libtool-2.2.10
    ./configure --prefix=/usr/local
    make && make install
    cd ..