# Micro Frontend Fun

# Run locally

```bash
git clone git@github.com:cagataycali/micro-fun.git

# Install dependencies
./install header
./install footer

# Start composer
cd composer
yarn
yarn dev
```

# Scaffold a boilerplate for micro fragment
```bash
FUN_FRAGMENT_NAME=Footer FUN_PORT=3000 ./copy.sh footer
FUN_FRAGMENT_NAME=Header FUN_PORT=3001 ./copy.sh header
FUN_FRAGMENT_NAME=Avatar FUN_PORT=3002 ./copy.sh avatar
```

# Start

```bash
./start.sh footer # in first terminal
./start.sh header # in second terminal
./start.sh avatar # in third terminal

cd composer
yarn dev
```
