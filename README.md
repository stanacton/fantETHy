# Hackathon Tools Ethereum

## Vagrant Setup

  - Clone this repository.
  - Install Vagrant (if you haven't already)
  - `` cd devtools ``
  - `` vagrant up ``

This will install the vagrant image and install the nessary stuff.  The vagrant image contains:

  - Docker 
    - ethereum/go-client
  - Golang
  - NodeJS v6
    - Grunt
    - Truffle
    - ethereumjs-testrpc

The project's local  `src` directory is mapped to `/home/vagrant/src` or `~/src` 

The local `src/GOPATH` directory is mapped to `/home/vagrant/src/GOPATH` or `~/src/GOPATH`

The local `./devtools` directory is mapped to `/vagrant`

### SSH to the Vagrant image
To logon to the vagrant image simply type
` vagrant ssh `


