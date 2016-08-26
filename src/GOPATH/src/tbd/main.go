package main

import (
	"fmt"
	"log"
	"os"
	"os/exec"
	"path"
)

func pathExists(path string) bool {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return false
	}

	return true
}

func main() {

	fmt.Print("Truffle Build & Deploy")

	cwd, _ := os.Getwd()

	truffleFile := path.Join(cwd, "truffle.js")

	if !pathExists(truffleFile) {
		log.Print(cwd)
		log.Fatal("Could not find truffle files. Please run in the truffle project directory.")
	}

	log.Print("Found truffle file.")

	buildDirectory := path.Join(cwd, "build")

	if pathExists(buildDirectory) {
		log.Print("Removing build directory")
		os.RemoveAll(buildDirectory)
	}

	migrate := exec.Command("truffle", "migrate")
	migrate.Stderr = os.Stderr
	migrate.Stdout = os.Stdout

	log.Print("Running migration")
	if err := migrate.Run(); err != nil {
		log.Fatal(err)
	}

	build := exec.Command("truffle", "build")
	build.Stderr = os.Stderr
	build.Stdout = os.Stdout

	log.Print("Running build")
	if err := build.Run(); err != nil {
		log.Fatal(err)
	}

	log.Print("Completed.")
}
