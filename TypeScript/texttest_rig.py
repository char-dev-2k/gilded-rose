#!/usr/bin/env python
"""
This script uses npx to execute the TextTest Fixture for TypeScript.
It is designed to be used by TextTest and specified in the file 'texttests/config.gr' in this repo.
It is more convenient for TextTest to use since npx needs
several arguments in addition to the one the TextTest fixture needs.
"""
import os
import subprocess
import sys

args = " ".join(sys.argv[1:])
TEXTTEST_HOME = os.environ.get("TEXTTEST_HOME", os.getcwd())
TYPESCRIPT_DIR = os.path.join(TEXTTEST_HOME, "TypeScript")

subprocess.run(f"npx ts-node -r tsconfig-paths/register test/golden-master-text-test.ts {args}", shell=True , cwd=TYPESCRIPT_DIR)