# typescript-ref-tools
Utility tool for TypeScript references.
[![npm version](https://badge.fury.io/js/typescript-ref-tools.svg)](https://www.npmjs.com/package/typescript-ref-tools)

## Install

```sh
$ npm install --save typescript-ref-tools
```

## Features

* Generates 'references.ts'
* Appends reference of 'references.ts' to '.ts' files.

## Usage

```sh
node index.js --action generate --dir 'app/src' --ref 'app/types/references.ts' --sort App,Log
```

Will generate the list of references in specific order.


```sh
node index.js --action update --dir 'app/src' --ref 'app/types/references.ts'
```

Will update all ```.ts``` files in ```app/src``` by adding reference to ```app/types/references.ts```

## API

### --dir

Target directory.

### --ref

Output file with references.

### --sort

Sort generated references by passed values. 

The list of file names separated by comma.

## License

MIT © ziflex
