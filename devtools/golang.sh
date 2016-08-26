 #!/bin/bash
export GOPATH=/home/vagrant/src/GOPATH

add-apt-repository ppa:ubuntu-lxc/lxd-stable
apt-get update
apt-get install -y golang

if [ ! -d "$DIRECTORY" ]; then
    mkdir -p /home/vagrant/src/GOPATH
fi

if grep -q GOPATH /etc/environment; then
   echo "GOPATH already exists"
else 
   echo "adding GOPATH to .bashrc"
   sudo echo "GOPATH=/home/vagrant/src/GOPATH" >> /etc/environment
   sudo echo "PATH=$PATH:$GOPATH/bin" >> /etc/environment
fi

go install tbd
