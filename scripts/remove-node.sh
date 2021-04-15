#!/usr/bin/env bash
echo "===================="
echo " Deleting: Node.js"
echo "____________________"
echo " Reference: https://www.quora.com/How-can-I-completely-uninstall-Node-js-from-MacOS"
echo "____________________"
which node

rm -rf /usr/local/lib/node*
rm -rf /usr/local/include/node*
rm -rf /usr/local/lib/node*

rm -rf ~/.npm
rm -rf ~/.nvm
rm -rf ~/.node*
rm -rf ~/
rm -rf /usr/local/share/man/man1/node*
rm -rf /usr/local/share/man/man1/npm*
rm -rf /usr/local/lib/dtrace/node.d

rm -rf /opt/local/bin/node
rm -rf /opt/local/include/node
rm -rf /opt/local/lib/node_modules
rm -rf /usr/local/share/doc/node
rm -rf /usr/local/share/systemtap/tapset/node.stp

rm -rf /usr/local/opt/node*

# brew uninstall node

