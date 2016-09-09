package main

import (
	"errors"
	"fmt"
	"log"
	"os"
	"os/exec"
	"path"
)

const (
	templateSrcDir = "../app-bootstrap"
)

func pathExists(path string) bool {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		return false
	}

	return true
}

func copyTemplateFiles() error {
	cwd, _ := os.Getwd()

	var files [5]string
	files[0] = "Gruntfile.js"
	files[1] = "package.json"
	files[2] = ".bowerrc"
	files[3] = "bower.json"
	files[4] = ".gitignore"

	for _, value := range files {
		checkPath := path.Join(cwd, value)
		sourcePath := path.Join(templateSrcDir, value)
		err := copyIfMissing(checkPath, sourcePath)
		if err != nil {
			return err
		}
	}

	nodeModulesDir := path.Join(cwd, "node_modules")
	if pathExists(nodeModulesDir) {
		return nil
	}
	cmd := exec.Command("npm", "install")
	cmd.Run()

	return nil
}

func copyIfMissing(checkPath string, sourceFile string) error {
	if pathExists(checkPath) {
		return nil
	}
	if !pathExists(sourceFile) {
		return errors.New("I can't find the source file " + sourceFile)
	}
	return CopyFile(sourceFile, checkPath)
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

	err := copyTemplateFiles()
	if err != nil {
		log.Fatalf("Couldn't find template files, %s ", err)
	}

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
