 #!/usr/bin/env bash
 
apt-get update
apt-get install -y apt-transport-https ca-certificates

apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D

rm -rf /etc/apt/sources.list.d/docker.list
echo "deb https://apt.dockerproject.org/repo ubuntu-trusty main" >> /etc/apt/sources.list.d/docker.list

apt-get update 

apt-get purge lxc-docker
apt-cache policy docker-engine

apt-get install linux-image-extra-$(uname -r) linux-image-extra-virtual -y
apt-get install docker-engine -y 
service docker start
groupadd docker
gpasswd -a vagrant docker
service docker restart
docker pull ethereum/client-go