# vim: set noexpandtab: tabspace=8 shiftwidth=4

mkfile_path := $(shell dirname $(abspath $(lastword $(MAKEFILE_LIST))))
root_dir := $(abspath $(dir $(abspath $(lastword $(MAKEFILE_LIST)))))
venv_dir := $(abspath $(root_dir)/.venv)
define venv
        . $(venv_dir)/bin/activate
endef
export PATH := $(root_dir)/bin:$(PATH)

WORKFLOW_FILES = $(wildcard *.yml)
GIT_BRANCH := $(shell git branch --show-current)

help:
	@echo "# GitHub Actions workflow make targets"
	@echo ""
	@awk ' \
	    BEGIN { FS=":.*?## " } \
	    $$1~/^[A-Za-z]/ && $$2~/^.+/ { \
	        printf "    * %-26.26s %s\n",$$1":",$$2 \
	    }' $(MAKEFILE_LIST)
	@echo ""
	@echo "GitHub Actions workflows:"
	@echo $(WORKFLOW_FILES)


.PHONY: $(WORKFLOW_FILES)
$(WORKFLOW_FILES):
	yamllint -d relaxed $@
	actionlint $@
	gh workflow run $@ --ref $(GIT_BRANCH)

FORCE: /dev/null
