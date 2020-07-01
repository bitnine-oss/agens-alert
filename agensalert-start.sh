#!/bin/bash

cd backend/target

jarfile=`ls agens*.jar`
#echo $jarfile
cfgfile=`ls alert*.yml`
cfgname="${cfgfile%.yml}"
#echo $cfgfile : $cfgname

if [ ! -f $jarfile ]; then
  echo "ERROR: not exist agenspop jar file in ./target/ \nTry build and start again.." >&2;
  exit 1;
fi

echo "Run target jar: $jarfile ($cfgname)"
nohup java -Xms1g -Xmx1g -jar $jarfile --spring.config.name=$cfgname > agenspop.log 2>&1 &

