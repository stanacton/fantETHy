 #!/usr/bin/env bash

add-apt-repository ppa:ubuntu-lxc/lxd-stable
apt-get update
apt-get install -y golang

if [ ! -d "$DIRECTORY" ]; then
    mkdir -p ~/src/GOPATH
fi

if grep -q GOPATH ~/.bashrc; then
   echo "GOPATH already exists"
else 
   echo "adding GOPATH to .bashrc"
   echo "export GOPATH=~/src/GOPATH" >> ~/.bashrc
   echo "export PATH=$PATH:$GOPATH/bin" >> ~/.bashrc
fi

go build tbd