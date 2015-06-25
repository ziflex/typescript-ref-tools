Utility tool for TypeScript references. 


## Install

```sh
$ npm install --save typescript-ref-tools
```

## Features

* Generates 'references.ts'
* Appends reference of 'references.ts' to '.ts' files.

## Usage

```sh
node index.js --action generate --dir app/src --references app/types/references.ts --sort App,Log
```

Will generate the list of references in specific order.


```sh
node index.js --action update --dir app/src --references app/types/references.ts 
```

Will update all ```.ts``` files in ```app/src``` by adding reference to ```app/types/references.ts```

## API

### --dir

Target directory.

### --references

Output file with references.

### --sort

Sort generated references by passed values. 

The list of file names without extension separated by comma.

## License

MIT © ziflex
