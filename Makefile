# vim: set noexpandtab: tabspace=8 shiftwidth=4:

mkfile_path := $(shell dirname $(abspath $(lastword $(MAKEFILE_LIST))))
repo_dir := $(shell git rev-parse --show-toplevel)
root_dir := $(abspath $(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
repo_subdir := $(subst $(repo_dir)/,,$(root_dir))

NODE_VERSION ?= $(shell node --version |sed 's,^v,,')
PACKAGE_VERSION := $(shell npm list etm-standard.github.io |awk '/^etm-standard.github.io/ { print $$1 }' |awk -F@ '{ print $$2 }')


.PHONY: help
help:
	@echo "## $(repo_subdir) make targets"
	@echo ""
	@awk ' \
	    BEGIN { FS=":.*?## " } \
	    $$1~/^[A-Za-z]/ && $$2~/^.+/ { \
	        printf "    * %-18.18s %s\n",$$1":",$$2 \
	    }' $(MAKEFILE_LIST)
	@echo ""
	@echo "Run \`make -n\` to see what make would do without running commands"


##
## versions of everything
##

version:  ## show the version of the package that will be generated
	@echo $(PACKAGE_VERSION)

versions:                       ## show parsed versions
	@printf "Package version: " && $(MAKE) version
	@printf "Node project version: $(NODE_VERSION)\n"
	@printf "  - major:     " && $(MAKE) node-version-major
	@printf "  - minor:     " && $(MAKE) node-version-minor
	@printf "  - patch:     " && $(MAKE) node-version-patch
	node --version
	npm --version
	@printf "Docusaurus version: " && $(MAKE) docusaurus-version

node-version:			## show the Node project's version
	@echo $(NODE_VERSION)

node-version-major:		## show the Node project's major version
	@version=$(NODE_VERSION) && echo $${version%%.*}

node-version-minor:		## show the Node project's minor version
	@version=$(NODE_VERSION) && partial=$$(echo $${version#*.}) && echo $${partial%.*}

node-version-patch:		## show the Node project's patch level
	@version=$(NODE_VERSION) && echo $${version##*.}

docusaurus-version: 		## report the version of Docusaurus in use
	@npm docusaurus --version


##
## local builds
##



build-reqs: package-lock.json				## install node packages, rebuild the package lock file from package.json
	@echo "NPM build package requirements installed"

package-lock.json: package.json
	npm ci

install: 						## install node packages
	npm install

build: 							## build the node app on the local machine
	npm run build

serve: 							## serve the Docusaurus HTTP site locally at http://localhost:3000/
	npm run serve

update: 						## upgrade node packages
	npm update
