# Micro Frontend Fun (Not blazing fast) - Build for fun, really.

This project is a template for your next micro-frontend project.

# Example usage:

https://github.com/cagataycali/micro-fun-example

Another example: https://github.com/cagataycali/micro-fun-rick-and-morty

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

# [Join Discussion](https://www.reddit.com/r/javascript/comments/mf2yy9/scaffolder_for_your_next_microfrontend/)
