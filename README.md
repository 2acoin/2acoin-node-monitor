![Prerequisite](https://img.shields.io/badge/node-%3E%3D12-blue.svg) [![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/2acoin/2acoin-node-monitor#readme) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/2aoin/2acoin-node-monitor/graphs/commit-activity) [![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL--3.0-yellow.svg)](https://github.com/2acoin/2acoin-node-monitor/blob/master/LICENSE) [![Twitter: 2ACoin](https://img.shields.io/twitter/follow/2ACoin.svg?style=social)](https://twitter.com/2ACoin)

[![NPM](https://nodeico.herokuapp.com/@2acoin/node-monitor.svg)](https://npmjs.com/package/@2acoin/node-monitor)

## Prerequisites

- node >= 12
- One of the following DBMS
    - MariaDB/MySQL with InnoDB support
    - Postgres *or* a Postgres compatible SQL interface
    - SQLite (built-in)
    
## Documentation

Full library documentation is available at [https://node-monitor.2acoin.org](https://node-monitor.2acoin.org)

## Install

### Collection Service

```shell
npm install -g yarn
git clone https://github.com/2acoin/2acoin-node-monitor
cd 2acoin-node-monitor
yarn && yarn build
```

#### MySQL/MariaDB

1) Set your environment variables and start the service up

```sh
export USE_MYSQL=true
export DB_HOST=localhost
export DB_PORT=3306
export DB_USER=yourdbusername
export DB_PASS=yourdbpassword
export DB_NAME=2acoin
yarn start
```

#### Postgres

1) Set your environment variables and start the service up

```sh
export USE_POSTGRES=true
export DB_HOST=localhost
export DB_PORT=3306
export DB_USER=yourdbusername
export DB_PASS=yourdbpassword
export DB_NAME=2acoin
yarn start
```

#### SQLite

1) Set your environment variables and start the service up

```sh
export USE_SQLITE=true
export SQLITE_PATH=node-monitor.sqlite3
yarn start
```

**Note:** SQLite is not the best solution if you are running this as part of a web service.

#### Additional Options

```sh
export NODE_HISTORY_DAYS=<# of days to keep history (default: 6 hours)>
export NODE_UPDATE_INTERVAL=<# of seconds between updating node list (default: 1 hour)>
export NODE_POLLING_INTERVAL=<# of seconds between checking nodes (default: 120s)>
export NODE_LIST_URL=<Full URL to node list (default: 2acoin-nodes-json)>
```

### As a Module in your App

```sh
yarn add @2acoin/node-monitor
```

#### Sample Code

```javascript
import { NodeMonitorDB, getDatabase } from '@2acoin/node-monitor';

(async() => {
  const database = await getDatabase();

  const StatsDatabase = new NodeMonitorDB(database);

  const stats = await StatsDatabase.stats();
})();
```

## Author

**The 2ACoin & TurtleCoin Developers**

* Twitter: [@2ACoin](https://twitter.com/2acoin )
* Github: [@2ACoin](https://github.com/2acoin)

## License

Copyright © 2019-2023 [The 2ACoin Developers](https://github.com/2acoin).<br />
This project is [AGPL-3.0](https://github.com/2acoin/cryptodira/blob/master/LICENSE) licensed.
