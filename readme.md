# Micro Frontend Fun

This project is a template for next microfrontend project.

# Example usage:

https://github.com/cagataycali/micro-fun-example

# Usage of template

```bash
git clone git@github.com:cagataycali/micro-fun.git
```

# Scaffold a boilerplate for micro fragment

```bash
FUN_FRAGMENT_NAME=Header FUN_PORT=3000 ./copy.sh header
FUN_FRAGMENT_NAME=Footer FUN_PORT=3001 ./copy.sh footer
FUN_FRAGMENT_NAME=Avatar FUN_PORT=3002 ./copy.sh avatar

./install.sh header
./install.sh footer
./install.sh avatar
```

# Start

```bash
./start.sh footer # in first terminal
./start.sh header # in second terminal
./start.sh avatar # in third terminal

# Edit composer project for concatenate project (uncomment examples.)
cd composer
yarn dev
```
