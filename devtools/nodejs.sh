 #!/usr/bin/env bash

wget -qO- https://deb.nodesource.com/setup_6.x | sudo bash -
apt-get install -y nodejs
ln -s `which nodejs` /usr/bin/node

apt-get install -y build-essential