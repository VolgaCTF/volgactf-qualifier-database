#!/bin/sh

command_arg=$1
shift

case $command_arg in
  knex) npm run knex -- "$@" ;;
  *) echo "Unsupported command $command_arg"
esac
